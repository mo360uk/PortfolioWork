// Downsamples mic input to 16 kHz PCM16 with linear anti-aliased interpolation
// and posts ~100ms (1600 samples = 3200 bytes) binary PCM16 chunks to main thread.
class Recorder extends AudioWorkletProcessor {
  constructor() {
    super();
    this.pos = 0;
    this.ratio = sampleRate / 16000;
    this.prev = 0;
    this.chunkSize = 1600; // 100ms at 16kHz
    this.out = [];
  }

  process(inputs) {
    const ch = inputs[0] && inputs[0][0];
    if (!ch) return true;

    for (let i = 0; i < ch.length; i++) {
      const curr = ch[i];
      this.pos += 1;
      if (this.pos >= this.ratio) {
        this.pos -= this.ratio;
        // Smooth linear interpolation between previous and current sample
        const frac = this.ratio > 0 ? Math.max(0, Math.min(1, this.pos / this.ratio)) : 0;
        const s = this.prev + (curr - this.prev) * (1 - frac);
        const clamped = Math.max(-1, Math.min(1, s));
        this.out.push(clamped < 0 ? clamped * 0x8000 : clamped * 0x7fff);
      }
      this.prev = curr;
    }

    if (this.out.length >= this.chunkSize) {
      const pcm16 = new Int16Array(this.out.slice(0, this.chunkSize));
      const buf = pcm16.buffer;
      this.port.postMessage(buf, [buf]);
      this.out = this.out.slice(this.chunkSize);
    }
    return true;
  }
}

registerProcessor('recorder', Recorder);
