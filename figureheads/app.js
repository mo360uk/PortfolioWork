const $ = id => document.getElementById(id), C = window.COLLECTION, mv = $('mv');
let cur = null;
let narratorEnabled = true;
let audioUnlocked = false;

// Audio player for studio-quality pre-rendered British voice
const audioPlayer = new Audio();
audioPlayer.preload = 'auto';

// Build carousel cards with front-facing thumbnails
$('carousel').innerHTML = C.map((o, i) => `
  <li>
    <button data-i="${i}">
      <div class="thumb"><img src="thumbs/${o.id}.png?v=118" alt="${o.short}"></div>
      <span>${o.short}</span>
      <small>${o.sog ? 'Mesh · Splat' : 'Mesh'}</small>
    </button>
  </li>
`).join('');

$('carousel').onclick = e => {
  const b = e.target.closest('button');
  if (b) select(+b.dataset.i);
};

// UI indicators for Narration
function setNarratorUI(state) {
  const btn = $('narrator-btn');
  const label = $('narrator-label');
  const prompt = $('audio-prompt-overlay');
  if (!btn) return;

  if (!narratorEnabled) {
    btn.classList.remove('speaking');
    btn.classList.add('muted');
    if (label) label.textContent = 'Narrator Muted';
    if (prompt) prompt.classList.add('dismissed');
  } else if (state === 'speaking') {
    btn.classList.add('speaking');
    btn.classList.remove('muted');
    if (label) label.textContent = 'Narrating…';
    if (prompt) prompt.classList.add('dismissed');
  } else if (state === 'blocked') {
    btn.classList.remove('speaking', 'muted');
    if (label) label.textContent = 'Tap to Listen';
    if (prompt) prompt.classList.remove('dismissed');
  } else {
    btn.classList.remove('speaking', 'muted');
    if (label) label.textContent = 'Narrator Ready';
  }
}

// Audio Player event hooks
audioPlayer.addEventListener('play', () => {
  audioUnlocked = true;
  setNarratorUI('speaking');
});

audioPlayer.addEventListener('ended', () => {
  setNarratorUI('ready');
});

audioPlayer.addEventListener('error', () => {
  setNarratorUI('ready');
});

// Browser Web Speech API fallback
function speakWebSpeech(text) {
  if (!('speechSynthesis' in window) || !narratorEnabled || !text) return;
  window.speechSynthesis.cancel();

  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.95;
  u.pitch = 1.0;

  const voices = window.speechSynthesis.getVoices();
  const gb = voices.find(v => v.lang.includes('en-GB') || v.lang.includes('en_GB')) ||
             voices.find(v => v.lang.startsWith('en'));
  if (gb) u.voice = gb;

  u.onstart = () => {
    audioUnlocked = true;
    setNarratorUI('speaking');
  };
  u.onend = () => setNarratorUI('ready');
  u.onerror = () => setNarratorUI('ready');

  window.speechSynthesis.speak(u);
}

// Play narration for the given figurehead
function playFigureheadNarration(o) {
  if (!narratorEnabled || !o) {
    audioPlayer.pause();
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setNarratorUI('ready');
    return;
  }

  // If Gemini Live is speaking, don't interrupt with museum narrator
  if (isGeminiActive) return;

  const audioSrc = o.audio || ('audio/' + o.id + '.wav?v=120');
  audioPlayer.src = audioSrc;

  const playPromise = audioPlayer.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      audioUnlocked = true;
      setNarratorUI('speaking');
    }).catch(err => {
      console.warn('Autoplay blocked, waiting for touch:', err);
      setNarratorUI('blocked');
    });
  }
}

// Global user interaction listener to unlock audio
const unlockAudioOnTouch = () => {
  if (!audioUnlocked) {
    audioUnlocked = true;
    const prompt = $('audio-prompt-overlay');
    if (prompt) prompt.classList.add('dismissed');

    audioPlayer.play().then(() => {
      setNarratorUI('speaking');
    }).catch(() => {
      if (cur) playFigureheadNarration(cur);
    });
  }
};

['click', 'touchstart', 'touchend', 'pointerdown', 'pointerup'].forEach(ev => {
  window.addEventListener(ev, unlockAudioOnTouch, { once: true, passive: true });
});

// Narration toggle button
$('narrator-btn').onclick = () => {
  narratorEnabled = !narratorEnabled;
  if (!narratorEnabled) {
    audioPlayer.pause();
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setNarratorUI('muted');
  } else {
    setNarratorUI('ready');
    if (cur) playFigureheadNarration(cur);
  }
};

// The Box Curator Intro button
$('intro-btn').onclick = () => {
  if (!audioPlayer.paused && audioPlayer.src.includes('thebox-intro.mp3')) {
    audioPlayer.pause();
    $('intro-btn').classList.remove('active');
    setNarratorUI('ready');
  } else {
    audioPlayer.src = 'audio/thebox-intro.mp3';
    audioPlayer.play().then(() => {
      $('intro-btn').classList.add('active');
      setNarratorUI('speaking');
      const prompt = $('audio-prompt-overlay');
      if (prompt) prompt.classList.add('dismissed');
    }).catch(e => console.warn(e));
  }
};

// Tap-to-listen floating card
const promptCard = $('audio-prompt-overlay');
if (promptCard) {
  promptCard.onclick = () => {
    promptCard.classList.add('dismissed');
    audioPlayer.src = 'audio/thebox-intro.mp3';
    audioPlayer.play().then(() => {
      $('intro-btn').classList.add('active');
      setNarratorUI('speaking');
    }).catch(() => {
      if (cur) playFigureheadNarration(cur);
    });
  };
}

// ---------------------------------------------------------------------------
// GOOGLE GEMINI LIVE (Bidirectional 24kHz Audio & Vision Streaming)
// ---------------------------------------------------------------------------
let isGeminiActive = false;
let isCameraActive = false;
let geminiWs = null;
let geminiAudioCtx = null;
let geminiGain = null;
let geminiPlayTime = 0;
let geminiSources = [];
let geminiMicStream = null;
let geminiRecorderNode = null;
let geminiFrameInterval = null;
let cameraStream = null;

function initGeminiAudio() {
  if (!geminiAudioCtx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    try {
      geminiAudioCtx = new AudioCtx({ sampleRate: 24000 });
    } catch (_) {
      geminiAudioCtx = new AudioCtx();
    }
  }
  if (geminiAudioCtx.state === 'suspended') {
    geminiAudioCtx.resume();
  }
  if (!geminiGain && geminiAudioCtx) {
    geminiGain = geminiAudioCtx.createGain();
    geminiGain.gain.value = 1.0;
    geminiGain.connect(geminiAudioCtx.destination);
  }
}

function playGeminiAudioChunk(arrayBuffer) {
  if (!geminiAudioCtx || geminiAudioCtx.state === 'closed') initGeminiAudio();

  const i16 = new Int16Array(arrayBuffer);
  const f32 = new Float32Array(i16.length);
  for (let i = 0; i < i16.length; i++) {
    f32[i] = i16[i] / 32768;
  }

  const audioBuf = geminiAudioCtx.createBuffer(1, f32.length, 24000);
  audioBuf.getChannelData(0).set(f32);

  const src = geminiAudioCtx.createBufferSource();
  src.buffer = audioBuf;
  src.connect(geminiGain || geminiAudioCtx.destination);

  geminiPlayTime = Math.max(geminiPlayTime, geminiAudioCtx.currentTime + 0.04);
  src.start(geminiPlayTime);
  geminiPlayTime += audioBuf.duration;
  geminiSources.push(src);

  src.onended = () => {
    geminiSources = geminiSources.filter(s => s !== src);
  };
}

function flushGeminiAudio() {
  geminiSources.forEach(s => {
    try { s.stop(); } catch (_) {}
    try { s.disconnect(); } catch (_) {}
  });
  geminiSources = [];
  geminiPlayTime = 0;
}

// Capture current visual frame (Camera AR or 3D WebGL Canvas)
function captureAndSendGeminiFrame() {
  if (!geminiWs || geminiWs.readyState !== WebSocket.OPEN) return;

  const canvas = $('viewfinder-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  if (isCameraActive && $('viewfinder') && !$('viewfinder').hidden) {
    const video = $('viewfinder');
    if (video.videoWidth > 0) {
      canvas.width = 480;
      canvas.height = Math.round((video.videoHeight / video.videoWidth) * 480);
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const base64 = canvas.toDataURL('image/jpeg', 0.7).split(',')[1];
      geminiWs.send(JSON.stringify({ type: 'image', data: base64 }));
    }
  } else if (mv && !mv.hidden) {
    // Snapshot the 3D model canvas
    try {
      if (typeof mv.toDataURL === 'function') {
        const dataUrl = mv.toDataURL('image/jpeg', 0.75);
        if (dataUrl && dataUrl.includes(',')) {
          const base64 = dataUrl.split(',')[1];
          geminiWs.send(JSON.stringify({ type: 'image', data: base64 }));
        }
      }
    } catch (_) {}
  }
}

// Connect to Gemini Live Backend (requests Camera & Mic immediately inside user tap)
async function startGeminiLive(showHud = false) {
  initGeminiAudio();
  $('gemini-hud').hidden = true;
  $('gemini-hud').style.display = 'none';
  $('gemini-btn').classList.add('connected');
  $('gemini-btn-label').textContent = 'Connecting…';

  // Pause background museum narrator while Gemini Live is active
  audioPlayer.pause();
  setNarratorUI('ready');

  // 1. Request Camera + Microphone permission IMMEDIATELY inside the user's tap gesture
  if (!geminiMicStream) {
    try {
      const combined = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 },
        video: isCameraActive ? false : { facingMode: { ideal: 'environment' } }
      });
      const audioTracks = combined.getAudioTracks();
      const videoTracks = combined.getVideoTracks();
      geminiMicStream = new MediaStream(audioTracks);
      if (videoTracks.length > 0 && !isCameraActive) {
        const video = $('viewfinder');
        cameraStream = new MediaStream(videoTracks);
        video.setAttribute('playsinline', '');
        video.muted = true;
        video.srcObject = cameraStream;
        video.hidden = false;
        isCameraActive = true;
        if ($('camera-btn')) $('camera-btn').classList.add('active');
        video.play().catch(() => {});
      }
    } catch (permErr) {
      // Fallback to audio-only if camera failed/unavailable
      try {
        geminiMicStream = await navigator.mediaDevices.getUserMedia({
          audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 }
        });
      } catch (micErr) {
        console.warn('Camera/Mic permission denied:', micErr);
        alert('Please allow Camera and Microphone access in Chrome when prompted to use Gemini Live.');
        stopGeminiLive();
        return;
      }
    }
  }

  // Primary WSS tunnel (Plymouth Chronicles port 8086)
  const wsUrl = 'wss://evaluation-outlined-pursuit-simpson.trycloudflare.com/ws';

  try {
    geminiWs = new WebSocket(wsUrl);
    geminiWs.binaryType = 'arraybuffer';

    geminiWs.onopen = async () => {
      isGeminiActive = true;
      $('gemini-btn-label').textContent = 'Listening… · AR';

      // Start periodic visual frame streaming
      if (!geminiFrameInterval) {
        geminiFrameInterval = setInterval(captureAndSendGeminiFrame, 2200);
      }

      // Attach already-permitted Microphone Stream via AudioWorklet
      try {
        if (geminiAudioCtx && geminiAudioCtx.state === 'suspended') {
          await geminiAudioCtx.resume();
        }
        await geminiAudioCtx.audioWorklet.addModule('recorder-worklet.js');
        const micSource = geminiAudioCtx.createMediaStreamSource(geminiMicStream);
        geminiRecorderNode = new AudioWorkletNode(geminiAudioCtx, 'recorder');
        micSource.connect(geminiRecorderNode);

        geminiRecorderNode.port.onmessage = (e) => {
          if (geminiWs && geminiWs.readyState === WebSocket.OPEN) {
            const i16 = new Int16Array(e.data);
            let sumSq = 0;
            for (let i = 0; i < i16.length; i++) {
              const val = i16[i] / 32768;
              sumSq += val * val;
            }
            const rms = Math.sqrt(sumSq / i16.length);
            if (rms > 0.05 && geminiSources.length > 0) {
              flushGeminiAudio();
              geminiWs.send(JSON.stringify({ type: 'interrupt' }));
            }
            geminiWs.send(e.data);
          }
        };
      } catch (workletErr) {
        console.warn('AudioWorklet error:', workletErr);
      }
    };

    geminiWs.onmessage = (event) => {
      if (event.data instanceof ArrayBuffer) {
        playGeminiAudioChunk(event.data);
        return;
      }

      try {
        const msg = JSON.parse(event.data);
        if (msg.type === 'coach' || msg.type === 'transcript') {
          if (msg.text) {
            $('gemini-transcript').textContent = msg.text;
            // Check if Gemini mentions a figurehead and auto-focus on it
            const t = msg.text.toLowerCase();
            C.forEach((fig, idx) => {
              if (t.includes(fig.id.replace('_', ' ')) || t.includes(fig.short.toLowerCase())) {
                select(idx);
              }
            });
          }
        } else if (msg.type === 'interrupted') {
          flushGeminiAudio();
        }
      } catch (_) {}
    };

    geminiWs.onerror = () => {
      $('gemini-status-text').textContent = 'Gemini Reconnecting…';
    };

    geminiWs.onclose = () => {
      stopGeminiLive();
    };
  } catch (err) {
    console.error('Gemini WS Connection error:', err);
    stopGeminiLive();
  }
}

function stopGeminiLive() {
  isGeminiActive = false;
  if (geminiWs) {
    try { geminiWs.close(); } catch (_) {}
    geminiWs = null;
  }
  if (geminiFrameInterval) {
    clearInterval(geminiFrameInterval);
    geminiFrameInterval = null;
  }
  if (geminiMicStream) {
    geminiMicStream.getTracks().forEach(t => t.stop());
    geminiMicStream = null;
  }
  if (geminiRecorderNode) {
    try { geminiRecorderNode.disconnect(); } catch (_) {}
    geminiRecorderNode = null;
  }
  flushGeminiAudio();

  $('gemini-hud').hidden = true;
  $('gemini-hud').style.display = 'none';
  $('gemini-btn').classList.remove('connected');
  $('gemini-btn-label').textContent = 'Live Gemini AR';
  if (isCameraActive) {
    isCameraActive = false;
    if ($('camera-btn')) $('camera-btn').classList.remove('active');
    const video = $('viewfinder');
    if (video) video.hidden = true;
    if (cameraStream) {
      cameraStream.getTracks().forEach(t => t.stop());
      cameraStream = null;
    }
  }
}

// Toggle Gemini Live
$('gemini-btn').onclick = () => {
  if (isGeminiActive) {
    stopGeminiLive();
  } else {
    startGeminiLive(true);
  }
};

$('gemini-close-btn').onclick = (e) => {
  if (e) e.stopPropagation();
  $('gemini-hud').hidden = true;
  $('gemini-hud').style.display = 'none';
  stopGeminiLive();
};

// Camera Vision AR Toggle
async function toggleCameraVision() {
  const video = $('viewfinder');
  const btn = $('camera-btn');
  if (isCameraActive) {
    isCameraActive = false;
    btn.classList.remove('active');
    video.hidden = true;
    if (cameraStream) {
      cameraStream.getTracks().forEach(t => t.stop());
      cameraStream = null;
    }
  } else {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: 'environment' } },
        audio: false
      });
      cameraStream = stream;
      video.setAttribute('playsinline', '');
      video.muted = true;
      video.srcObject = stream;
      video.hidden = false;
      await video.play().catch(() => {});
      isCameraActive = true;
      btn.classList.add('active');

      // Auto start Gemini Live in background without showing floating HUD over the camera
      if (!isGeminiActive) {
        startGeminiLive(false);
      }
    } catch (e) {
      alert('Camera access denied or unavailable: ' + e.message);
    }
  }
}

if ($('camera-btn')) $('camera-btn').onclick = toggleCameraVision;

// ---------------------------------------------------------------------------
// 3D MODEL & GALLERY CONTROLS
// ---------------------------------------------------------------------------
function select(i) {
  const o = C[i];
  cur = o;

  document.querySelectorAll('#carousel button').forEach((b, j) => b.setAttribute('aria-current', j === i));
  $('loading').classList.remove('hide');
  setMode('mesh');

  // Set model source
  mv.src = o.glb;
  mv.alt = o.ship + ' figurehead';

  // Always reset turntable and position camera directly facing the front of the figurehead
  if (typeof mv.resetTurntableRotation === 'function') {
    mv.resetTurntableRotation();
  }
  if (o.orbit) {
    mv.setAttribute('camera-orbit', o.orbit);
    if (typeof mv.jumpCameraToGoal === 'function') {
      mv.jumpCameraToGoal();
    }
  }
  mv.autoRotate = true;

  // Update card data
  $('c-acc').textContent = 'Accession ' + o.accession;
  $('c-ship').textContent = o.ship;
  $('c-blurb').textContent = o.blurb;
  $('c-type').textContent = o.type;
  $('c-date').textContent = o.date;
  $('c-mat').textContent = o.material;
  $('c-launch').textContent = o.launched;
  $('c-detail').textContent = o.detail;
  const sw = $('c-ship-wrap');
  if (sw && o.shipImage) {
    $('c-ship-img').src = o.shipImage + '?v=127';
    $('c-ship-img').alt = o.ship;
    $('c-ship-cap').textContent = o.shipCaption || '';
    sw.hidden = false;
  } else if (sw) {
    sw.hidden = true;
  }
  if ($('m-splat')) {
    $('m-splat').disabled = !o.sog;
    $('m-splat').querySelector('small').hidden = !!o.sog;
  }
  history.replaceState(null, '', '#' + o.id);

  // Play narration if Gemini Live is not running
  if (!isGeminiActive) {
    playFigureheadNarration(o);
  }
}

// When 3D model finishes loading into WebGL
mv.addEventListener('load', () => {
  $('loading').classList.add('hide');
  if (typeof mv.resetTurntableRotation === 'function') {
    mv.resetTurntableRotation();
  }
  if (cur?.orbit) {
    mv.setAttribute('camera-orbit', cur.orbit);
    if (typeof mv.jumpCameraToGoal === 'function') {
      mv.jumpCameraToGoal();
    }
  }
  mv.autoRotate = true;
});
mv.addEventListener('error', () => $('loading').textContent = 'Model could not be loaded');

// Splat mode handler
async function setMode(m) {
  const s = $('splat');
  $('m-mesh').classList.toggle('on', m === 'mesh');
  if ($('m-ship')) $('m-ship').classList.toggle('on', m === 'ship');
  if ($('m-splat')) $('m-splat').classList.toggle('on', m === 'splat');
  mv.hidden = m === 'splat';
  s.hidden = m !== 'splat';
  if (m === 'ship' && cur) {
    $('loading').classList.remove('hide');
    mv.src = 'ships3d/' + cur.id + '.glb?v=131';
    mv.alt = cur.ship + ' 3D warship bow';
    mv.setAttribute('camera-orbit', '35deg 72deg auto');
    if (typeof mv.jumpCameraToGoal === 'function') mv.jumpCameraToGoal();
  } else if (m === 'mesh' && cur && mv.src && mv.src.includes('ships3d/')) {
    $('loading').classList.remove('hide');
    mv.src = cur.glb;
    mv.alt = cur.ship + ' figurehead';
    if (cur.orbit) mv.setAttribute('camera-orbit', cur.orbit);
    if (typeof mv.jumpCameraToGoal === 'function') mv.jumpCameraToGoal();
  }
  if (m === 'splat' && cur?.sog) {
    s.innerHTML = '';
    const pc = await import('https://esm.sh/playcanvas');
    const cv = document.createElement('canvas');
    cv.style.cssText = 'width:100%;height:100%';
    s.append(cv);
    const app = new pc.Application(cv);
    app.start();
    app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
    const a = new pc.Asset('s', 'gsplat', { url: cur.sog });
    app.assets.add(a);
    app.assets.load(a);
    a.ready(() => {
      const e = new pc.Entity();
      e.addComponent('gsplat', { asset: a });
      app.root.addChild(e);
      const cam = new pc.Entity();
      cam.addComponent('camera');
      cam.setPosition(0, 0, 3);
      app.root.addChild(cam);
    });
  }
}

$('m-mesh').onclick = () => setMode('mesh');
if ($('m-splat')) $('m-splat').onclick = () => setMode('splat');

// Initial load: pick hash or default to index 0
const initialIdx = Math.max(0, C.findIndex(o => '#' + o.id === location.hash));
select(initialIdx);
if ($('m-ship')) $('m-ship').onclick = () => setMode('ship');

