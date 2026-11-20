import json
import html
from pathlib import Path

PORTFOLIO_DIR = Path(r"C:\Users\moham\.gemini\antigravity\scratch\PortfolioWork")
LAB_DIR = PORTFOLIO_DIR / "immersive-lab"
CURRICULUM_PATH = LAB_DIR / "assets" / "courses_curriculum.json"

def clean_no_dashes(text: str) -> str:
    """Replace any accidental hyphen/en-dash/em-dash in visible prose with middle dots or spaces."""
    if not isinstance(text, str):
        return str(text)
    t = text.replace("—", " · ").replace("–", " · ")
    # Replace hyphen in compound words or ranges with middle dot or space
    t = t.replace(" - ", " · ").replace("-", "·")
    return t

def build_page():
    raw_data = json.loads(CURRICULUM_PATH.read_text(encoding="utf-8"))
    academy = raw_data["academy"]
    courses = raw_data["courses"]

    # Build Course Cards & Interactive Panels HTML
    course_nav_pills = []
    course_sections_html = []

    engine_colors = {
        "TouchDesigner": "#D4882A",
        "Unreal Engine 5.8": "#0E6BA8",
        "vvvv gamma (4V)": "#1B7F69",
        "Bridge": "#24A186",
        "Input": "#C87D28",
        "Output": "#1589D6",
    }

    for idx, c in enumerate(courses):
        cid = c["id"]
        cnum = clean_no_dashes(c["number"])
        ctitle = clean_no_dashes(c["title"])
        csub = clean_no_dashes(c["subtitle"])
        ctailored = clean_no_dashes(c["tailored_for"])
        cdiff = clean_no_dashes(c["difficulty"])
        cweeks = c["duration_weeks"]
        caccent = c.get("accent_color", "#0E6BA8")
        czip = c["starter_kit_zip"]
        cwav = c["audio_wav"]
        cmp3 = c["audio_mp3"]
        ctranscript = clean_no_dashes(c.get("narrator_transcript", ""))
        raw_sentences = [s.strip() + "." for s in ctranscript.split(". ") if s.strip()]

        course_nav_pills.append(
            f'<a href="#{cid}" class="course-jump-pill"><span>COURSE {cnum}</span> {html.escape(ctitle.split(" in ")[0])}</a>'
        )

        # Stack badges
        stack_badges = "".join(
            f'<span class="stack-chip">{html.escape(clean_no_dashes(s))}</span>'
            for s in c["core_stack"]
        )

        # Node Graph SVG
        nodes = c["node_graph"]["nodes"]
        edges = c["node_graph"]["edges"]
        node_pos = {}
        svg_nodes = []
        svg_edges = []

        # Position 6 nodes in a clean 2x3 or 3x2 flowing patch layout
        coords = [
            (60, 55),
            (340, 55),
            (620, 55),
            (60, 185),
            (340, 185),
            (620, 185),
        ]
        for n_i, n in enumerate(nodes):
            nx, ny = coords[n_i % len(coords)]
            node_pos[n["id"]] = (nx, ny)

        for e_from, e_to in edges:
            if e_from in node_pos and e_to in node_pos:
                x1, y1 = node_pos[e_from]
                x2, y2 = node_pos[e_to]
                sx, sy = x1 + 115, y1 + 42
                tx, ty = x2 + 115, y2 + 42
                cx1, cy1 = (sx + tx) / 2, sy
                cx2, cy2 = (sx + tx) / 2, ty
                svg_edges.append(
                    f'<path d="M {sx} {sy} C {cx1} {cy1}, {cx2} {cy2}, {tx} {ty}" '
                    f'class="patch-wire" data-from="{e_from}" data-to="{e_to}" '
                    f'fill="none" stroke="#D4882A" stroke-width="2.8" stroke-dasharray="6 4"/>'
                )

        for n_i, n in enumerate(nodes):
            nx, ny = node_pos[n["id"]]
            eng = clean_no_dashes(n["engine"])
            fam = clean_no_dashes(n["family"])
            lbl = clean_no_dashes(n["label"])
            role = clean_no_dashes(n["role"])
            col = engine_colors.get(n["engine"], "#0E6BA8")
            svg_nodes.append(f"""
              <g class="patch-node" transform="translate({nx},{ny})" tabindex="0"
                 data-node-id="{n['id']}" data-course="{cid}"
                 data-label="{html.escape(lbl)}" data-engine="{html.escape(eng)}"
                 data-family="{html.escape(fam)}" data-role="{html.escape(role)}"
                 onclick="inspectPatchNode(this)">
                <rect width="230" height="84" rx="10" fill="#0B0F17" stroke="{col}" stroke-width="2.2"/>
                <rect width="230" height="24" rx="8" fill="{col}"/>
                <text x="12" y="16" fill="#FAF7F2" font-family="JetBrains Mono, monospace" font-size="10.5" font-weight="700">{html.escape(eng)} · {html.escape(fam)}</text>
                <text x="12" y="46" fill="#FAF7F2" font-family="Space Grotesk, sans-serif" font-size="13.5" font-weight="700">{html.escape(lbl[:26])}</text>
                <text x="12" y="68" fill="#D4882A" font-family="Inter, sans-serif" font-size="11">{html.escape(role[:32])}</text>
                <circle cx="0" cy="42" r="5" fill="#FAF7F2" stroke="{col}" stroke-width="2"/>
                <circle cx="230" cy="42" r="5" fill="#D4882A" stroke="#FAF7F2" stroke-width="2"/>
              </g>
            """)

        node_svg_markup = f"""
        <div class="node-visualizer-box">
          <div class="node-vis-header">
            <div>
              <span class="mono-tag">INTERACTIVE NODE GRAPH · CLICK ANY OPERATOR TO INSPECT SIGNAL FLOW</span>
              <h4>{html.escape(ctitle)} · Patch Architecture</h4>
            </div>
            <div class="node-legend">
              <span class="leg-item"><i style="background:#D4882A"></i>TouchDesigner</span>
              <span class="leg-item"><i style="background:#0E6BA8"></i>Unreal 5.8</span>
              <span class="leg-item"><i style="background:#1B7F69"></i>vvvv 4V / Bridge</span>
            </div>
          </div>
          <svg viewBox="0 0 910 300" class="node-graph-svg" aria-label="Interactive Node Network for {html.escape(ctitle)}">
            {''.join(svg_edges)}
            {''.join(svg_nodes)}
          </svg>
          <div class="node-inspector-bar" id="inspector_{cid}">
            <strong>Selected Operator:</strong> <span>Click any node above to inspect its exact TouchDesigner, Unreal Engine 5.8, or vvvv gamma 4V parameters and wiring role.</span>
          </div>
        </div>
        """

        # Modules Tabs / Accordion
        modules_html = []
        transcript_segments = []
        for m_i, m in enumerate(c["modules"]):
            mnum = m["module_number"]
            mtitle = clean_no_dashes(m["title"])
            mdur = clean_no_dashes(m["duration"])
            moutcome = clean_no_dashes(m["learning_outcome"])
            mcheck = clean_no_dashes(m["checkpoint"])
            # Pick corresponding sentence from narrator_transcript
            if m_i + 1 < len(raw_sentences):
                mtrans = raw_sentences[m_i + 1]
            elif m_i < len(raw_sentences):
                mtrans = raw_sentences[m_i]
            else:
                mtrans = moutcome

            transcript_segments.append(
                f'<button type="button" class="transcript-seg" data-course="{cid}" data-mod="{mnum}" onclick="seekNarratorSegment(\'{cid}\', {mnum - 1}, 6)">'
                f'<span class="t-badge">MODULE 0{mnum}</span> {html.escape(mtrans)}</button>'
            )

            ops_list = "".join(
                f'<li><code>{html.escape(clean_no_dashes(op))}</code></li>'
                for op in m["operators_to_place"]
            )
            steps_list = "".join(
                f'<li><span class="step-idx">STEP 0{s_i + 1}</span><span>{html.escape(clean_no_dashes(st))}</span></li>'
                for s_i, st in enumerate(m["step_by_step_instructions"])
            )

            is_open = "open" if mnum == 1 else ""
            modules_html.append(f"""
            <details class="module-accordion" {is_open}>
              <summary class="module-summary">
                <div class="mod-left">
                  <span class="mod-num">MODULE 0{mnum}</span>
                  <span class="mod-title">{html.escape(mtitle)}</span>
                </div>
                <div class="mod-right">
                  <span class="mod-dur">{html.escape(mdur)}</span>
                  <span class="mod-chevron">▾</span>
                </div>
              </summary>
              <div class="module-body">
                <p class="mod-outcome"><strong>Learning Outcome:</strong> {html.escape(moutcome)}</p>
                <div class="mod-grid">
                  <div class="mod-ops-card">
                    <h5>PRESS TAB &amp; PLACE OPERATORS</h5>
                    <ul class="ops-list">{ops_list}</ul>
                  </div>
                  <div class="mod-steps-card">
                    <h5>BEGINNER STEP BY STEP WIRING &amp; PARAMETERS</h5>
                    <ol class="steps-list">{steps_list}</ol>
                  </div>
                </div>
                <div class="mod-checkpoint">
                  <strong>✓ Verification Checkpoint:</strong> {html.escape(mcheck)}
                </div>
              </div>
            </details>
            """)

        course_sections_html.append(f"""
        <article class="course-showcase-card" id="{cid}" style="--course-accent: {caccent};">
          <div class="course-top-banner">
            <div class="course-meta-row">
              <span class="course-index-badge">COURSE {cnum}</span>
              <span class="course-tailored-badge">🇬🇧 {html.escape(ctailored)}</span>
              <span class="course-level-badge">{html.escape(cdiff)} · {cweeks} Weeks · 6 Modules</span>
            </div>
            <div class="course-title-row">
              <div>
                <h3>{html.escape(ctitle)}</h3>
                <p class="course-subtitle">{html.escape(csub)}</p>
              </div>
              <div class="course-cta-group">
                <a href="{czip}" download class="btn-download-kit">
                  ⬇ Download Starter Kit (.ZIP)
                </a>
                <button type="button" class="btn-play-narrator" onclick="toggleCourseAudio('{cid}')">
                  🎙️ Play British Narrator
                </button>
              </div>
            </div>
            <div class="stack-chips-row">{stack_badges}</div>
          </div>

          <!-- Embedded British Voice Narrator + Synchronized Transcript Player -->
          <div class="narrator-studio-box">
            <div class="narrator-controls-col">
              <div class="narrator-header">
                <span class="voice-pill">🇬🇧 BRITISH VOICE NARRATOR · MICROSOFT HAZEL DESKTOP</span>
                <span class="audio-spec-pill">48 kHz STEREO WAV + CELLO PAD DRONE</span>
              </div>
              <audio id="audio_{cid}" class="native-audio-player" controls preload="metadata"
                     ontimeupdate="syncCourseTranscript('{cid}', this)">
                <source src="{cwav}" type="audio/wav">
                <source src="{cmp3}" type="audio/mpeg">
              </audio>
              <canvas id="wave_{cid}" class="waveform-canvas" width="520" height="58" onclick="scrubWaveform(event, '{cid}')"></canvas>
              <div class="audio-direct-links">
                <a href="{cwav}" download>⬇ Download Master WAV (48 kHz)</a>
                <span>·</span>
                <a href="{cmp3}" download>⬇ Download MP3 (192 kbps)</a>
                <span>·</span>
                <a href="{czip}" download>📦 {html.escape(czip.split('/')[-1])}</a>
              </div>
            </div>
            <div class="narrator-transcript-col">
              <div class="transcript-header">
                <strong>SYNCHRONIZED STEP BY STEP NARRATOR TRANSCRIPT</strong>
                <span>Click any module segment to jump &amp; highlight</span>
              </div>
              <div class="transcript-scroll" id="transcript_{cid}">
                {''.join(transcript_segments)}
              </div>
            </div>
          </div>

          <!-- Interactive Node Network Visualizer -->
          {node_svg_markup}

          <!-- Complete 6-Module Step-by-Step Beginner Accordion -->
          <div class="syllabus-section">
            <div class="syllabus-header">
              <h4>COMPLETE 6 MODULE STEP BY STEP BEGINNER SYLLABUS</h4>
              <div class="syllabus-actions">
                <button type="button" class="btn-sm-outline" onclick="toggleAllModules('{cid}', true)">Expand All 6 Modules</button>
                <button type="button" class="btn-sm-outline" onclick="toggleAllModules('{cid}', false)">Collapse All</button>
              </div>
            </div>
            <div class="modules-container" id="modules_{cid}">
              {''.join(modules_html)}
            </div>
          </div>
        </article>
        """)

    welcome_transcript_clean = clean_no_dashes(academy["welcome_transcript"])

    html_doc = f"""<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Mo360 Immersive Lab · Creative Coding &amp; Creative Technology Academy · Plymouth, UK</title>
<meta name="description" content="Mo360 Immersive Lab inside Mo360 Immersive Studio in Plymouth, Devon, United Kingdom. Top 5 Beginner Courses in TouchDesigner, Unreal Engine 5.8, and vvvv gamma 4V with British Voice Narrator and Starter Project Kits.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@500;600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet">
<style>
  :root {{
    --ochre: #C87D28;
    --ochre-bright: #D4882A;
    --teal: #0E6BA8;
    --teal-bright: #1589D6;
    --emerald: #1B7F69;
    --emerald-bright: #24A186;
    --obsidian: #0B0F17;
    --obsidian-card: #101725;
    --obsidian-elevated: #151E30;
    --offwhite: #FAF7F2;
    --stone: #A8A29E;
    --border-ochre: rgba(200, 125, 40, 0.35);
    --border-teal: rgba(14, 107, 168, 0.38);
  }}
  * {{ box-sizing: border-box; margin: 0; padding: 0; }}
  html {{ scroll-behavior: smooth; }}
  body {{
    background: var(--obsidian);
    color: var(--offwhite);
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
  }}
  body::before {{
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(250, 247, 242, 0.022) 1px, transparent 1px),
      linear-gradient(90deg, rgba(250, 247, 242, 0.022) 1px, transparent 1px);
    background-size: 56px 56px;
    pointer-events: none;
    z-index: 0;
  }}

  /* Sticky Top Navigation */
  .site-nav {{
    position: sticky;
    top: 0;
    z-index: 500;
    background: rgba(11, 15, 23, 0.94);
    backdrop-filter: blur(16px);
    border-bottom: 1.5px solid var(--border-ochre);
    padding: 0.85rem 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }}
  .brand-link {{
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    color: var(--offwhite);
  }}
  .brand-link img {{
    width: 42px;
    height: 42px;
    border-radius: 10px;
    border: 1.5px solid var(--ochre-bright);
  }}
  .brand-text strong {{
    display: block;
    font-family: 'Syne', sans-serif;
    font-size: 1.15rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    color: var(--offwhite);
  }}
  .brand-text span {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.68rem;
    color: var(--ochre-bright);
    letter-spacing: 0.12em;
  }}
  .nav-pills {{
    display: flex;
    align-items: center;
    gap: 0.6rem;
    flex-wrap: wrap;
  }}
  .nav-pill {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    font-weight: 700;
    text-decoration: none;
    padding: 0.48rem 0.95rem;
    border-radius: 20px;
    border: 1px solid rgba(250, 247, 242, 0.18);
    color: var(--offwhite);
    transition: all 0.2s;
  }}
  .nav-pill:hover {{
    border-color: var(--ochre-bright);
    color: var(--ochre-bright);
  }}
  .nav-pill.active {{
    background: var(--ochre);
    color: var(--obsidian);
    border-color: var(--ochre-bright);
  }}
  .nav-pill.ccp {{
    background: rgba(14, 107, 168, 0.22);
    border-color: var(--teal-bright);
    color: #7CC8F8;
  }}
  .nav-pill.emerald {{
    background: rgba(27, 127, 105, 0.22);
    border-color: var(--emerald-bright);
    color: #6EE7C8;
  }}

  /* Container */
  .container {{
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 2.5rem;
    position: relative;
    z-index: 1;
  }}

  /* Hero Section */
  .hero {{
    padding: 4.5rem 0 3.5rem;
    border-bottom: 1px solid var(--border-ochre);
  }}
  .hero-grid {{
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 2.5rem;
    align-items: center;
  }}
  .eyebrow-badge {{
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    color: var(--ochre-bright);
    background: rgba(200, 125, 40, 0.12);
    border: 1px solid var(--border-ochre);
    padding: 0.45rem 1rem;
    border-radius: 30px;
    margin-bottom: 1.2rem;
  }}
  .hero h1 {{
    font-family: 'Syne', sans-serif;
    font-size: clamp(2.4rem, 4.4vw, 3.8rem);
    font-weight: 800;
    line-height: 1.06;
    margin-bottom: 1.2rem;
    color: var(--offwhite);
  }}
  .hero h1 span {{
    color: var(--ochre-bright);
  }}
  .hero-lead {{
    font-size: 1.06rem;
    color: rgba(250, 247, 242, 0.86);
    margin-bottom: 1.6rem;
    max-width: 680px;
  }}
  .partner-strip {{
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-bottom: 1.8rem;
  }}
  .partner-chip {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    font-weight: 600;
    padding: 0.4rem 0.8rem;
    border-radius: 8px;
    background: var(--obsidian-card);
    border: 1px solid var(--border-teal);
    color: var(--offwhite);
  }}
  .hero-cta-row {{
    display: flex;
    flex-wrap: wrap;
    gap: 0.9rem;
  }}
  .btn-primary {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.82rem;
    font-weight: 700;
    padding: 0.9rem 1.6rem;
    border-radius: 10px;
    background: linear-gradient(135deg, var(--ochre-bright), var(--ochre));
    color: var(--obsidian);
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: transform 0.2s;
  }}
  .btn-primary:hover {{ transform: translateY(-2px); }}
  .btn-secondary {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.82rem;
    font-weight: 700;
    padding: 0.9rem 1.5rem;
    border-radius: 10px;
    background: rgba(14, 107, 168, 0.2);
    border: 1.5px solid var(--teal-bright);
    color: var(--offwhite);
    text-decoration: none;
    transition: all 0.2s;
  }}
  .btn-secondary:hover {{
    background: var(--teal);
  }}

  /* Hero Interactive Dome & Welcome Narrator Card */
  .hero-interactive-card {{
    background: var(--obsidian-card);
    border: 2px solid var(--border-ochre);
    border-radius: 18px;
    padding: 1.5rem;
    box-shadow: 0 24px 60px rgba(0,0,0,0.55);
  }}
  .dome-sim-canvas {{
    width: 100%;
    height: 270px;
    border-radius: 12px;
    background: #06090F;
    border: 1px solid rgba(14, 107, 168, 0.4);
    display: block;
    margin-bottom: 1rem;
  }}
  .welcome-audio-card {{
    background: #0B0F17;
    border: 1.5px solid var(--border-teal);
    border-radius: 12px;
    padding: 1rem 1.2rem;
  }}
  .welcome-audio-card h4 {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1rem;
    color: var(--ochre-bright);
    margin-bottom: 0.4rem;
  }}
  .welcome-audio-card p {{
    font-size: 0.82rem;
    color: rgba(250, 247, 242, 0.82);
    margin-bottom: 0.7rem;
    line-height: 1.45;
  }}

  /* Course Jump Bar */
  .course-jump-bar {{
    margin: 2.2rem 0;
    padding: 1.1rem 1.4rem;
    background: var(--obsidian-card);
    border: 1.5px solid var(--border-teal);
    border-radius: 14px;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    align-items: center;
    justify-content: space-between;
  }}
  .course-jump-pill {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.84rem;
    font-weight: 700;
    color: var(--offwhite);
    text-decoration: none;
    padding: 0.55rem 1rem;
    border-radius: 10px;
    background: #0B0F17;
    border: 1px solid rgba(250, 247, 242, 0.15);
    transition: all 0.2s;
  }}
  .course-jump-pill span {{
    font-family: 'JetBrains Mono', monospace;
    color: var(--ochre-bright);
    margin-right: 0.4rem;
  }}
  .course-jump-pill:hover {{
    border-color: var(--ochre-bright);
    transform: translateY(-2px);
  }}

  /* Section Headings */
  .section-header {{
    margin: 3.5rem 0 2rem;
  }}
  .section-header .eyebrow {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--ochre-bright);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }}
  .section-header h2 {{
    font-family: 'Syne', sans-serif;
    font-size: clamp(1.9rem, 3.2vw, 2.7rem);
    font-weight: 800;
    color: var(--offwhite);
  }}
  .section-header p {{
    font-size: 1rem;
    color: rgba(250, 247, 242, 0.78);
    max-width: 780px;
    margin-top: 0.4rem;
  }}

  /* Course Showcase Card */
  .course-showcase-card {{
    background: var(--obsidian-card);
    border: 2px solid rgba(250, 247, 242, 0.14);
    border-top: 6px solid var(--course-accent, var(--ochre));
    border-radius: 20px;
    padding: 2.2rem;
    margin-bottom: 3rem;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
  }}
  .course-meta-row {{
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin-bottom: 1rem;
  }}
  .course-index-badge {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    font-weight: 700;
    padding: 0.35rem 0.85rem;
    border-radius: 6px;
    background: var(--ochre);
    color: var(--obsidian);
  }}
  .course-tailored-badge {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.76rem;
    font-weight: 600;
    padding: 0.35rem 0.85rem;
    border-radius: 6px;
    background: rgba(14, 107, 168, 0.24);
    border: 1px solid var(--teal-bright);
    color: var(--offwhite);
  }}
  .course-level-badge {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.76rem;
    padding: 0.35rem 0.85rem;
    border-radius: 6px;
    background: rgba(27, 127, 105, 0.24);
    border: 1px solid var(--emerald-bright);
    color: var(--offwhite);
  }}
  .course-title-row {{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-bottom: 1.2rem;
  }}
  .course-title-row h3 {{
    font-family: 'Syne', sans-serif;
    font-size: 1.85rem;
    font-weight: 800;
    color: var(--offwhite);
    margin-bottom: 0.35rem;
  }}
  .course-subtitle {{
    font-size: 1rem;
    color: rgba(250, 247, 242, 0.82);
  }}
  .course-cta-group {{
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }}
  .btn-download-kit {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.78rem;
    font-weight: 700;
    padding: 0.75rem 1.25rem;
    border-radius: 10px;
    background: var(--emerald);
    color: var(--offwhite);
    text-decoration: none;
    border: 1.5px solid var(--emerald-bright);
    transition: all 0.2s;
  }}
  .btn-download-kit:hover {{
    background: var(--emerald-bright);
    color: var(--obsidian);
  }}
  .btn-play-narrator {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.78rem;
    font-weight: 700;
    padding: 0.75rem 1.25rem;
    border-radius: 10px;
    background: var(--ochre);
    color: var(--obsidian);
    border: none;
    cursor: pointer;
  }}
  .stack-chips-row {{
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    margin-bottom: 1.6rem;
  }}
  .stack-chip {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    padding: 0.35rem 0.75rem;
    border-radius: 6px;
    background: #0B0F17;
    border: 1px solid rgba(250, 247, 242, 0.16);
    color: #D4882A;
  }}

  /* Narrator Studio Box */
  .narrator-studio-box {{
    display: grid;
    grid-template-columns: 480px 1fr;
    gap: 1.5rem;
    background: #0B0F17;
    border: 1.5px solid var(--border-teal);
    border-radius: 14px;
    padding: 1.4rem;
    margin-bottom: 1.6rem;
  }}
  .narrator-header {{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-bottom: 0.75rem;
  }}
  .voice-pill {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.68rem;
    font-weight: 700;
    color: var(--ochre-bright);
  }}
  .audio-spec-pill {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.66rem;
    color: var(--emerald-bright);
  }}
  .native-audio-player {{
    width: 100%;
    height: 40px;
    margin-bottom: 0.65rem;
  }}
  .waveform-canvas {{
    width: 100%;
    height: 58px;
    background: #101725;
    border-radius: 8px;
    border: 1px solid rgba(200, 125, 40, 0.3);
    cursor: pointer;
    display: block;
    margin-bottom: 0.6rem;
  }}
  .audio-direct-links {{
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.7rem;
  }}
  .audio-direct-links a {{
    color: #7CC8F8;
    text-decoration: none;
  }}
  .audio-direct-links a:hover {{ text-decoration: underline; }}

  .transcript-header {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.6rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    color: var(--ochre-bright);
  }}
  .transcript-header span {{
    color: var(--stone);
    font-size: 0.68rem;
  }}
  .transcript-scroll {{
    max-height: 175px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-right: 0.4rem;
  }}
  .transcript-seg {{
    text-align: left;
    background: #101725;
    border: 1px solid rgba(250, 247, 242, 0.12);
    border-left: 4px solid var(--teal);
    color: rgba(250, 247, 242, 0.88);
    padding: 0.6rem 0.85rem;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 0.82rem;
    line-height: 1.45;
    cursor: pointer;
    transition: all 0.2s;
  }}
  .transcript-seg:hover, .transcript-seg.active {{
    background: rgba(200, 125, 40, 0.18);
    border-left-color: var(--ochre-bright);
    color: #fff;
  }}
  .t-badge {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.68rem;
    font-weight: 700;
    color: var(--ochre-bright);
    margin-right: 0.5rem;
  }}

  /* Interactive Node Network Box */
  .node-visualizer-box {{
    background: #080C14;
    border: 1.5px solid rgba(200, 125, 40, 0.32);
    border-radius: 14px;
    padding: 1.3rem;
    margin-bottom: 1.6rem;
  }}
  .node-vis-header {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 0.8rem;
  }}
  .mono-tag {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.68rem;
    color: var(--ochre-bright);
    letter-spacing: 0.12em;
    display: block;
  }}
  .node-vis-header h4 {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.1rem;
    color: var(--offwhite);
  }}
  .node-legend {{
    display: flex;
    gap: 1rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
  }}
  .leg-item {{
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }}
  .leg-item i {{
    width: 10px;
    height: 10px;
    border-radius: 3px;
    display: inline-block;
  }}
  .node-graph-svg {{
    width: 100%;
    height: auto;
    max-height: 300px;
    display: block;
  }}
  .patch-node {{
    cursor: pointer;
    transition: opacity 0.2s;
  }}
  .patch-node:hover rect:first-child {{
    stroke: #FAF7F2;
    stroke-width: 3px;
  }}
  .node-inspector-bar {{
    margin-top: 0.75rem;
    padding: 0.7rem 1rem;
    background: #101725;
    border-left: 4px solid var(--ochre-bright);
    border-radius: 6px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.78rem;
    color: var(--offwhite);
  }}
  .node-inspector-bar strong {{ color: var(--ochre-bright); }}

  /* Syllabus Accordion */
  .syllabus-header {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
  }}
  .syllabus-header h4 {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.15rem;
    color: var(--ochre-bright);
  }}
  .syllabus-actions {{
    display: flex;
    gap: 0.5rem;
  }}
  .btn-sm-outline {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    padding: 0.4rem 0.85rem;
    border-radius: 6px;
    background: transparent;
    border: 1px solid rgba(250, 247, 242, 0.25);
    color: var(--offwhite);
    cursor: pointer;
  }}
  .btn-sm-outline:hover {{ border-color: var(--ochre-bright); color: var(--ochre-bright); }}

  .module-accordion {{
    background: #0B0F17;
    border: 1px solid rgba(250, 247, 242, 0.14);
    border-radius: 10px;
    margin-bottom: 0.75rem;
    overflow: hidden;
  }}
  .module-summary {{
    padding: 1rem 1.25rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    background: #0E1420;
    transition: background 0.2s;
  }}
  .module-summary:hover {{ background: #141D2F; }}
  .mod-left {{
    display: flex;
    align-items: center;
    gap: 0.85rem;
  }}
  .mod-num {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.25rem 0.65rem;
    border-radius: 5px;
    background: rgba(200, 125, 40, 0.2);
    color: var(--ochre-bright);
  }}
  .mod-title {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.02rem;
    font-weight: 700;
    color: var(--offwhite);
  }}
  .mod-right {{
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: var(--stone);
  }}
  .module-body {{
    padding: 1.25rem;
    border-top: 1px solid rgba(250, 247, 242, 0.1);
  }}
  .mod-outcome {{
    font-size: 0.92rem;
    color: rgba(250, 247, 242, 0.9);
    margin-bottom: 1rem;
  }}
  .mod-outcome strong {{ color: var(--ochre-bright); }}
  .mod-grid {{
    display: grid;
    grid-template-columns: 340px 1fr;
    gap: 1.25rem;
    margin-bottom: 1rem;
  }}
  .mod-ops-card, .mod-steps-card {{
    background: #101725;
    border: 1px solid rgba(250, 247, 242, 0.12);
    border-radius: 10px;
    padding: 1rem;
  }}
  .mod-ops-card h5, .mod-steps-card h5 {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    color: var(--ochre-bright);
    letter-spacing: 0.08em;
    margin-bottom: 0.7rem;
  }}
  .ops-list {{
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }}
  .ops-list code {{
    display: block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.76rem;
    background: #080C14;
    padding: 0.4rem 0.65rem;
    border-radius: 6px;
    border-left: 3px solid var(--teal-bright);
    color: #FAF7F2;
    overflow-wrap: anywhere;
    word-break: break-word;
  }}
  .steps-list {{
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }}
  .steps-list li {{
    display: flex;
    gap: 0.75rem;
    font-size: 0.88rem;
    color: rgba(250, 247, 242, 0.88);
    min-width: 0;
  }}
  .steps-list li span:last-child {{
    min-width: 0;
    overflow-wrap: anywhere;
  }}
  .step-idx {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.7rem;
    font-weight: 700;
    color: var(--emerald-bright);
    white-space: nowrap;
    margin-top: 0.15rem;
  }}
  .mod-checkpoint {{
    background: rgba(27, 127, 105, 0.16);
    border: 1px solid var(--emerald-bright);
    padding: 0.75rem 1rem;
    border-radius: 8px;
    font-size: 0.86rem;
    color: var(--offwhite);
  }}
  .mod-checkpoint strong {{ color: #6EE7C8; }}

  /* NODE Institute Benchmark Table */
  .benchmark-card {{
    background: var(--obsidian-card);
    border: 2px solid var(--border-teal);
    border-radius: 18px;
    padding: 2rem;
    margin-bottom: 3rem;
  }}
  .bench-table-wrap {{
    overflow-x: auto;
    margin-top: 1.2rem;
  }}
  .bench-table {{
    width: 100%;
    border-collapse: collapse;
    font-size: 0.88rem;
  }}
  .bench-table th, .bench-table td {{
    padding: 0.95rem 1rem;
    text-align: left;
    border-bottom: 1px solid rgba(250, 247, 242, 0.12);
  }}
  .bench-table th {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: var(--ochre-bright);
    background: #0B0F17;
    text-transform: uppercase;
  }}
  .bench-table tr:hover td {{
    background: rgba(14, 107, 168, 0.08);
  }}

  /* Antigravity Live Bridge Panel */
  .bridge-panel {{
    background: linear-gradient(145deg, #101725, #0B0F17);
    border: 2px solid var(--ochre-bright);
    border-radius: 18px;
    padding: 2.2rem;
    margin-bottom: 3.5rem;
  }}
  .bridge-grid {{
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: 1.8rem;
    margin-top: 1.4rem;
  }}
  .preset-btn-list {{
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }}
  .preset-cmd-btn {{
    text-align: left;
    padding: 0.85rem 1rem;
    border-radius: 10px;
    background: #0B0F17;
    border: 1.5px solid rgba(250, 247, 242, 0.16);
    color: var(--offwhite);
    cursor: pointer;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.92rem;
    font-weight: 700;
    transition: all 0.2s;
  }}
  .preset-cmd-btn span {{
    display: block;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.7rem;
    color: var(--ochre-bright);
    margin-bottom: 0.2rem;
  }}
  .preset-cmd-btn.active, .preset-cmd-btn:hover {{
    border-color: var(--ochre-bright);
    background: rgba(200, 125, 40, 0.15);
  }}
  .code-terminal {{
    background: #06090F;
    border: 1.5px solid var(--border-teal);
    border-radius: 12px;
    padding: 1.2rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    color: #A7F3D0;
    overflow-x: auto;
    white-space: pre-wrap;
    min-height: 290px;
  }}

  /* Visual Boards Showcase */
  .boards-showcase {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.8rem;
    margin-bottom: 3.5rem;
  }}
  .board-card {{
    background: var(--obsidian-card);
    border: 1.5px solid var(--border-ochre);
    border-radius: 14px;
    overflow: hidden;
  }}
  .board-card img {{
    width: 100%;
    height: auto;
    display: block;
  }}
  .board-card-cap {{
    padding: 1rem 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }}

  /* Footer */
  .site-footer {{
    border-top: 1.5px solid var(--border-ochre);
    padding: 2.5rem 0;
    margin-top: 3rem;
    font-size: 0.85rem;
    color: rgba(250, 247, 242, 0.78);
  }}
  .footer-inner {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }}

  @media (max-width: 1024px) {{
    .hero-grid, .narrator-studio-box, .mod-grid, .bridge-grid, .boards-showcase {{
      grid-template-columns: minmax(0, 1fr);
    }}
  }}
  .hero-grid > *, .narrator-studio-box > *, .mod-grid > *, .bridge-grid > *, .boards-showcase > * {{
    min-width: 0;
    max-width: 100%;
  }}
  .code-terminal {{
    max-width: 100%;
    overflow-wrap: anywhere;
  }}
  @media (max-width: 768px) {{
    .site-nav {{ padding: 0.75rem 1rem; }}
    .container {{ padding: 0 1rem; }}
    .hero {{ padding: 2.2rem 0 2rem; }}
    .hero h1 {{ font-size: 1.75rem; overflow-wrap: anywhere; }}
    .section-header h2 {{ font-size: 1.32rem; overflow-wrap: anywhere; }}
    .hero-interactive-card, .course-showcase-card, .benchmark-card, .bridge-panel {{
      padding: 1.1rem;
    }}
    .bench-table, .bench-table thead, .bench-table tbody, .bench-table tr, .bench-table th, .bench-table td {{
      display: block;
      width: 100%;
    }}
    .bench-table thead {{ display: none; }}
    .bench-table tr {{
      border: 1px solid rgba(250, 247, 242, 0.14);
      border-radius: 10px;
      margin-bottom: 0.75rem;
      padding: 0.6rem;
      background: #0B0F17;
    }}
    .bench-table td {{
      padding: 0.4rem 0.5rem;
      border-bottom: none;
    }}
    .narrator-studio-box, .node-visualizer-box, .module-body, .mod-ops-card, .mod-steps-card {{
      padding: 0.85rem;
    }}
    .module-summary {{
      padding: 0.85rem;
      flex-wrap: wrap;
      gap: 0.5rem;
    }}
    .mod-left {{ flex-wrap: wrap; gap: 0.45rem; }}
    .course-title-row h3 {{ font-size: 1.35rem; overflow-wrap: anywhere; }}
    .board-card-cap {{ flex-wrap: wrap; gap: 0.6rem; }}
    .steps-list li {{ flex-direction: column; gap: 0.25rem; }}
  }}
</style>
</head>
<body>

<nav class="site-nav" aria-label="Primary Navigation">
  <a href="../index.html" class="brand-link">
    <img src="assets/creative_coding_plymouth_logo.png" alt="Mo360 Immersive Lab Logo">
    <div class="brand-text">
      <strong>MO360 IMMERSIVE LAB</strong>
      <span>CREATIVE CODING &amp; CREATIVE TECH ACADEMY · PLYMOUTH UK</span>
    </div>
  </a>
  <div class="nav-pills">
    <a href="../index.html" class="nav-pill">✦ Mo360 Studio</a>
    <a href="index.html" class="nav-pill active">⚗ Immersive Lab (5 Courses)</a>
    <a href="tawaf-domemaster-live.html" class="nav-pill emerald">◎ TAWAF Domemaster Synth</a>
    <a href="../creative-coding-plymouth/index.html" class="nav-pill ccp">⚡ Creative Coding Plymouth</a>
    <a href="../figureheads/index.html" class="nav-pill">⚓ 3D Figureheads</a>
    <a href="../studio/index.html" class="nav-pill">🏢 3D Commercial</a>
  </div>
</nav>

<main class="container">
  <!-- HERO SECTION -->
  <section class="hero">
    <div class="hero-grid">
      <div>
        <div class="eyebrow-badge">🇬🇧 PLYMOUTH, DEVON, UNITED KINGDOM · LIVE &amp; READY ONLINE</div>
        <h1>MO360 IMMERSIVE LAB · <span>CREATIVE CODING &amp; CREATIVE TECHNOLOGY ACADEMY</span></h1>
        <p class="hero-lead">
          Purpose built inside <strong>Mo360 Immersive Studio</strong> by Visual Artist, Creative Technologist, Curator, and Creative Director <strong>Mohamed Hossam Elwakil</strong>. Master <strong>TouchDesigner</strong>, <strong>Unreal Engine 5.8</strong>, and <strong>vvvv gamma (4V)</strong> through five beginner friendly courses tailored for <strong>Market Hall 15m Fulldome Cinema</strong>, <strong>Real Ideas</strong>, and <strong>Pervasive Media Studio</strong> practitioners.
        </p>
        <div class="partner-strip">
          <span class="partner-chip">◎ Market Hall 15m Fulldome · Devonport</span>
          <span class="partner-chip">🏛️ Real Ideas · Plymouth</span>
          <span class="partner-chip">🎨 KARST &amp; The Box Museum</span>
          <span class="partner-chip">🌉 Pervasive Media Studio · Watershed Bristol</span>
        </div>
        <div class="hero-cta-row">
          <a href="#course_01" class="btn-primary">▶ Explore All 5 Beginner Courses</a>
          <a href="./tawaf-domemaster-live.html" class="btn-secondary" style="border-color:#24A186;background:rgba(27,127,105,0.25);">◎ Launch TAWAF Domemaster Live Synth</a>
          <a href="#live-bridge" class="btn-secondary">⚡ Antigravity Live Bridge (TD · UE 5.8 · 4V)</a>
          <a href="../creative-coding-plymouth/index.html" class="btn-secondary">🤝 Creative Coding Plymouth Meetup</a>
        </div>
      </div>

      <div class="hero-interactive-card">
        <canvas id="heroDomeCanvas" class="dome-sim-canvas" width="560" height="270"></canvas>
        <div class="welcome-audio-card">
          <h4>🎙️ Academy Welcome · British English Voice Narrator</h4>
          <p id="welcomeTranscriptText">{html.escape(welcome_transcript_clean)}</p>
          <audio id="audio_welcome" class="native-audio-player" controls preload="metadata">
            <source src="{academy['welcome_audio_wav']}" type="audio/wav">
            <source src="{academy['welcome_audio_mp3']}" type="audio/mpeg">
          </audio>
          <div class="audio-direct-links">
            <a href="{academy['welcome_audio_wav']}" download>⬇ Welcome WAV (48 kHz)</a>
            <span>·</span>
            <a href="{academy['welcome_audio_mp3']}" download>⬇ Welcome MP3</a>
            <span>·</span>
            <a href="assets/courses_curriculum.json" download>📄 Full Curriculum JSON</a>
          </div>
        </div>
      </div>
    </div>

    <div class="course-jump-bar">
      <strong style="font-family:'JetBrains Mono',monospace;font-size:0.78rem;color:#D4882A;">JUMP TO COURSE:</strong>
      {''.join(course_nav_pills)}
    </div>
  </section>

  <!-- VISUAL DESIGN BOARDS PREVIEW -->
  <section class="section-header">
    <div class="eyebrow">OFFICIAL VISUAL IDENTITY &amp; ACADEMY POSTERS</div>
    <h2>HIGH RESOLUTION ARCHITECTURAL DESIGN BOARDS</h2>
    <p>Strictly padded on all four sides with Studio Ochre (#C87D28), Market Hall Fulldome Teal (#0E6BA8), and Pervasive Emerald (#1B7F69).</p>
  </section>
  <div class="boards-showcase">
    <div class="board-card">
      <img src="assets/mo360_immersive_lab_courses_board.png" alt="Mo360 Immersive Lab 5 Course Visual Showcase Board">
      <div class="board-card-cap">
        <strong>Board 02 · Mo360 Immersive Lab 5 Course Showcase (2400x1350)</strong>
        <a href="assets/mo360_immersive_lab_courses_board.png" download class="btn-sm-outline">⬇ Download PNG</a>
      </div>
    </div>
    <div class="board-card">
      <img src="assets/creative_coding_plymouth_brand_board.png" alt="Creative Coding Plymouth Brand Identity Board">
      <div class="board-card-cap">
        <strong>Board 01 · Creative Coding Plymouth Official Brand Sheet (2400x1350)</strong>
        <a href="assets/creative_coding_plymouth_brand_board.png" download class="btn-sm-outline">⬇ Download PNG</a>
      </div>
    </div>
  </div>

  <!-- TOP 5 BEGINNER COURSES SHOWCASE -->
  <section class="section-header" id="courses">
    <div class="eyebrow">NO WAITING FOR APPROVAL · LIVE &amp; READY ONLINE</div>
    <h2>TOP 5 FLAGSHIP BEGINNER TO PRO COURSES</h2>
    <p>Every course includes a spoken British English narrator walkthrough, an interactive TouchDesigner + Unreal Engine 5.8 + vvvv gamma (4V) node graph, a 6 module beginner syllabus, and a 1 click downloadable starter kit (.zip).</p>
  </section>

  {''.join(course_sections_html)}

  <!-- THE NODE INSTITUTE RESEARCH & BENCHMARK SECTION -->
  <section class="section-header" id="node-benchmark">
    <div class="eyebrow">COMPETITIVE CURRICULUM AUDIT · THENODEINSTITUTE.ORG</div>
    <h2>THE NODE INSTITUTE BENCHMARK &amp; HOW MO360 IMMERSIVE LAB EXTENDS IT</h2>
    <p>Our curriculum is benchmarked against The NODE Institute in Berlin (TouchDesigner &amp; vvvv gamma seasonal programme) and extended specifically for Plymouth, Devonport Market Hall 15m Fulldome Cinema, Real Ideas heritage spaces, and Pervasive Media Studio Bristol.</p>
  </section>

  <div class="benchmark-card">
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
      <div>
        <strong style="color:#D4882A;font-family:'JetBrains Mono',monospace;font-size:0.8rem;">PUBLICATION GRADE RESEARCH DOSSIER</strong>
        <h3 style="font-family:'Syne',sans-serif;font-size:1.45rem;">The NODE Institute vs Mo360 Immersive Lab · Technical Comparison Matrix</h3>
      </div>
      <a href="node_institute_touchdesigner_vvvv_study.md" download class="btn-download-kit">📄 Download Full NODE Institute Study (.MD)</a>
    </div>

    <div class="bench-table-wrap">
      <table class="bench-table">
        <thead>
          <tr>
            <th>Curriculum Dimension</th>
            <th>The NODE Institute (Berlin · Global Standard)</th>
            <th>Mo360 Immersive Lab (Plymouth &amp; South West Extension)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Delivery Format &amp; Pacing</strong></td>
            <td>Seasonal Spring/Summer &amp; Autumn/Winter live Zoom cohorts + archived video recordings across 4 pricing tiers.</td>
            <td>Always online, self paced modular workbench with embedded British Voice Narrator, synchronized transcripts, and instant .zip starter kits.</td>
          </tr>
          <tr>
            <td><strong>Fulldome 180° Fisheye Pipeline</strong></td>
            <td>Taught as specialized single workshops inside advanced TouchDesigner tracks.</td>
            <td>Flagship Course 01 dedicated to the 15m Market Hall Dome in Devonport: CubeMap to 4096x4096 Equidistant Fisheye + Unreal 5.8 BP_DomeMasterRig.</td>
          </tr>
          <tr>
            <td><strong>TouchDesigner + Unreal 5.8 + vvvv 4V Tri Bridge</strong></td>
            <td>TouchDesigner and vvvv gamma (VL.Stride / VL.Fuse) taught in separate seasonal silos.</td>
            <td>Unified tri engine workflow: every starter kit includes a TouchDesigner .py builder, an Unreal 5.8 .py script, and a valid vvvv gamma .vl XML patch.</td>
          </tr>
          <tr>
            <td><strong>3D LiDAR &amp; Heritage Projection Mapping</strong></td>
            <td>Covers KantanMapper and CamSchnappr fundamentals on generic 3D primitives.</td>
            <td>Course 02 integrates real Polycam &amp; LiDAR point cloud scans of Plymouth heritage facades (Devonport Guildhall, Royal William Yard) with CamSchnappr.</td>
          </tr>
          <tr>
            <td><strong>Spatial Audio &amp; Neuro Sensory Design</strong></td>
            <td>Covers standard CHOP audio spectrum analysis and OSC triggers.</td>
            <td>Course 05 integrates 36.4 Market Hall spatial audio, Unreal MetaSounds, Western chamber instruments, and 4·7·8 neurodivergent friendly breathing envelopes.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- ANTIGRAVITY <-> TOUCHDESIGNER + UNREAL 5.8 + VVVV LIVE BRIDGE PANEL -->
  <section class="bridge-panel" id="live-bridge">
    <div class="eyebrow" style="font-family:'JetBrains Mono',monospace;font-size:0.78rem;color:#D4882A;letter-spacing:0.18em;">LIVE MCP &amp; PROCEDURAL AUTOMATION TOOLKIT</div>
    <h2 style="font-family:'Syne',sans-serif;font-size:2rem;margin:0.4rem 0;">ANTIGRAVITY ⇄ TOUCHDESIGNER + UNREAL 5.8 + VVVV (4V) LIVE BRIDGE</h2>
    <p style="color:rgba(250,247,242,0.84);max-width:880px;">
      Antigravity controls TouchDesigner live over HTTP JSON·RPC (<code>WebServer DAT :9980</code>), raw TCP (<code>:9981</code>), and UDP OSC (<code>:9000</code>), executes headless and live scripts in Unreal Engine 5.8 (<code>Remote Control :30010</code> &amp; <code>OSC :7000</code>), and generates valid <code>vvvv gamma (4V)</code> <code>.vl</code> XML patches (<code>OSC :8000</code>). Click any preset below to inspect the live payload:
    </p>

    <div class="bridge-grid">
      <div class="preset-btn-list">
        <button type="button" class="preset-cmd-btn active" onclick="showBridgePreset(0, this)">
          <span>PRESET 01 · TOUCHDESIGNER PORT 9980</span>
          Build 4096x4096 180° Fisheye Domemaster Rig
        </button>
        <button type="button" class="preset-cmd-btn" onclick="showBridgePreset(1, this)">
          <span>PRESET 02 · TOUCHDESIGNER + LIDAR</span>
          Spawn Point File In TOP + KantanMapper + CamSchnappr
        </button>
        <button type="button" class="preset-cmd-btn" onclick="showBridgePreset(2, this)">
          <span>PRESET 03 · VVVV GAMMA 4V (.VL XML)</span>
          Generate VL.Stride + VL.Fuse Sacred Geometry Patch
        </button>
        <button type="button" class="preset-cmd-btn" onclick="showBridgePreset(3, this)">
          <span>PRESET 04 · UNREAL ENGINE 5.8 + OSC :7000</span>
          Sync MediaPipe Hand Tracking &amp; 4·7·8 Breath to Niagara
        </button>
      </div>
      <div>
        <pre class="code-terminal" id="bridgeTerminal"># Preset 01 · TouchDesigner WebServer DAT (:9980) JSON·RPC Payload
POST http://127.0.0.1:9980/api/exec
Content·Type: application/json

{{
  "action": "build_domemaster_rig",
  "project": "Mo360_Course01_Fulldome_180",
  "resolution": [4096, 4096],
  "fps": 30,
  "operators": [
    {{"type": "renderTOP", "name": "render_cubemap", "mode": "CubeMap", "res": [2048, 2048]}},
    {{"type": "projectionTOP", "name": "proj_fisheye180", "output": "Fisheye", "fov": 180, "res": [4096, 4096]}},
    {{"type": "spoutOutTOP", "name": "spout_to_ue58", "sender": "Mo360_Domemaster_4K"}},
    {{"type": "moviefileoutTOP", "name": "domemaster_rec", "codec": "H264"}}
  ]
}}</pre>
      </div>
    </div>
  </section>
</main>

<footer class="site-footer">
  <div class="container footer-inner">
    <div>
      <strong>Mo360 Immersive Lab · Mo360 Immersive Studio</strong> · Plymouth, Devon, United Kingdom 🇬🇧<br>
      Founded &amp; Curated by <strong>Mohamed Hossam Elwakil</strong> · Visual Artist, Creative Technologist, Curator, and Creative Director<br>
      Experience across The Box Museum, KARST Gallery, MIRROR Gallery, Ars Electronica, and the Egyptian Museum in Cairo.
    </div>
    <div style="text-align:right;font-family:'JetBrains Mono',monospace;">
      <div>SOLE UK PHONE: <a href="tel:+447568668918" style="color:#D4882A;text-decoration:none;font-weight:700;">+44 7568 668918</a></div>
      <div style="margin-top:0.3rem;">
        <a href="../index.html" style="color:#FAF7F2;">Mo360 Studio</a> ·
        <a href="../creative-coding-plymouth/index.html" style="color:#7CC8F8;">Creative Coding Plymouth</a> ·
        <a href="../figureheads/index.html" style="color:#FAF7F2;">3D Figureheads</a>
      </div>
    </div>
  </div>
</footer>

<script>
  // 1. Hero Interactive 180° Fulldome & Node Graph Canvas
  (function initHeroCanvas() {{
    const canvas = document.getElementById('heroDomeCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let t = 0;
    function draw() {{
      t += 0.018;
      const w = canvas.width, h = canvas.height;
      ctx.fillStyle = '#06090F';
      ctx.fillRect(0, 0, w, h);

      const cx = w * 0.5, cy = h * 0.5;
      const rMax = Math.min(w, h) * 0.43;

      // Geodesic rings
      [1.0, 0.72, 0.44].forEach((scale, idx) => {{
        ctx.beginPath();
        ctx.arc(cx, cy, rMax * scale, 0, Math.PI * 2);
        ctx.strokeStyle = idx === 0 ? '#D4882A' : (idx === 1 ? '#0E6BA8' : '#1B7F69');
        ctx.lineWidth = idx === 0 ? 2.2 : 1.3;
        ctx.stroke();
      }});

      // Rotating 12-fold sacred star chords inside the dome
      const nFold = 12;
      for (let i = 0; i < nFold; i++) {{
        const a1 = (i / nFold) * Math.PI * 2 - t * 0.6;
        const a2 = ((i + 5) / nFold) * Math.PI * 2 - t * 0.6;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(a1) * rMax * 0.92, cy + Math.sin(a1) * rMax * 0.92);
        ctx.lineTo(cx + Math.cos(a2) * rMax * 0.92, cy + Math.sin(a2) * rMax * 0.92);
        ctx.strokeStyle = i % 2 === 0 ? 'rgba(212, 136, 42, 0.45)' : 'rgba(14, 107, 168, 0.45)';
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }}

      // Labels
      ctx.fillStyle = '#FAF7F2';
      ctx.font = '700 11px JetBrains Mono, monospace';
      ctx.fillText('180° FULLDOME SIMULATOR · 4096x4096', 14, 22);
      ctx.fillStyle = '#D4882A';
      ctx.fillText('CCW TAWAF HARMONIC · 4·7·8 BREATH SYNC', 14, h - 12);

      requestAnimationFrame(draw);
    }}
    draw();
  }})();

  // 2. Waveform Renderer & Audio Synchronizer
  const courseIds = ['course_01', 'course_02', 'course_03', 'course_04', 'course_05'];
  function drawWaveform(cid, progressRatio) {{
    const canvas = document.getElementById('wave_' + cid);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height;
    ctx.fillStyle = '#0D131F';
    ctx.fillRect(0, 0, w, h);

    const bars = 64;
    const seed = cid.charCodeAt(cid.length - 1);
    for (let i = 0; i < bars; i++) {{
      const x = (i / bars) * w + 3;
      const norm = Math.abs(Math.sin(i * 0.45 + seed) * Math.cos(i * 0.19));
      const bh = Math.max(8, norm * (h - 14));
      const y = (h - bh) / 2;
      const played = (i / bars) <= progressRatio;
      ctx.fillStyle = played ? '#D4882A' : '#0E6BA8';
      ctx.fillRect(x, y, 5, bh);
    }}
  }}
  courseIds.forEach(cid => drawWaveform(cid, 0));

  function toggleCourseAudio(cid) {{
    const audio = document.getElementById('audio_' + cid);
    if (!audio) return;
    if (audio.paused) {{
      document.querySelectorAll('audio').forEach(a => {{ if (a !== audio) a.pause(); }});
      audio.play();
    }} else {{
      audio.pause();
    }}
  }}

  function syncCourseTranscript(cid, audioEl) {{
    const dur = audioEl.duration || 110;
    const cur = audioEl.currentTime || 0;
    const ratio = Math.min(1, Math.max(0, cur / dur));
    drawWaveform(cid, ratio);

    const segs = document.querySelectorAll('#transcript_' + cid + ' .transcript-seg');
    if (!segs.length) return;
    const activeIdx = Math.min(segs.length - 1, Math.floor(ratio * segs.length));
    segs.forEach((seg, idx) => {{
      seg.classList.toggle('active', idx === activeIdx);
    }});
  }}

  function seekNarratorSegment(cid, segIdx, totalSegs) {{
    const audio = document.getElementById('audio_' + cid);
    if (!audio) return;
    const dur = audio.duration || 105;
    audio.currentTime = (segIdx / totalSegs) * dur;
    audio.play();
  }}

  function scrubWaveform(ev, cid) {{
    const canvas = document.getElementById('wave_' + cid);
    const audio = document.getElementById('audio_' + cid);
    if (!canvas || !audio) return;
    const rect = canvas.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (ev.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * (audio.duration || 105);
    drawWaveform(cid, ratio);
  }}

  // 3. Interactive Node Inspector
  function inspectPatchNode(el) {{
    const cid = el.getAttribute('data-course');
    const lbl = el.getAttribute('data-label');
    const eng = el.getAttribute('data-engine');
    const fam = el.getAttribute('data-family');
    const role = el.getAttribute('data-role');
    const box = document.getElementById('inspector_' + cid);
    if (box) {{
      box.innerHTML = '<strong>[' + eng + ' · ' + fam + '] ' + lbl + ':</strong> <span>' + role + ' (Included in downloadable .zip starter kit)</span>';
    }}
  }}

  // 4. Expand / Collapse All Syllabus Modules
  function toggleAllModules(cid, expand) {{
    const container = document.getElementById('modules_' + cid);
    if (!container) return;
    container.querySelectorAll('details.module-accordion').forEach(d => {{
      d.open = expand;
    }});
  }}

  // 5. Antigravity Live Bridge Presets
  const bridgePresets = [
`# Preset 01 · TouchDesigner WebServer DAT (:9980) JSON·RPC Payload
POST http://127.0.0.1:9980/api/exec
Content·Type: application/json

{{
  "action": "build_domemaster_rig",
  "project": "Mo360_Course01_Fulldome_180",
  "resolution": [4096, 4096],
  "fps": 30,
  "operators": [
    {{"type": "renderTOP", "name": "render_cubemap", "mode": "CubeMap", "res": [2048, 2048]}},
    {{"type": "projectionTOP", "name": "proj_fisheye180", "output": "Fisheye", "fov": 180, "res": [4096, 4096]}},
    {{"type": "spoutOutTOP", "name": "spout_to_ue58", "sender": "Mo360_Domemaster_4K"}},
    {{"type": "moviefileoutTOP", "name": "domemaster_rec", "codec": "H264"}}
  ]
}}`,
`# Preset 02 · Architectural Projection Mapping & 3D LiDAR Point Cloud Setup
POST http://127.0.0.1:9980/api/create
Content·Type: application/json

{{
  "course": "Course_02_Projection_Mapping_Scanner",
  "scan_asset": " Devonport_MarketHall_LiDAR.ply",
  "pipeline": [
    {{"op": "pointfileinTOP", "name": "lidar_scan_in", "file": "Devonport_MarketHall_LiDAR.ply"}},
    {{"op": "kantanMapperCOMP", "name": "kantan_facade_masks", "res": [1920, 1080]}},
    {{"op": "camSchnapprCOMP", "name": "camschnappr_6point_calib", "fov_solve": true}}
  ]
}}`,
`<!-- Preset 03 · vvvv gamma 4V (.vl XML) Generative Sacred Geometry Patch -->
<Document xmlns="https://vvvv.org/vl" LanguageVersion="2024.6.7">
  <NugetDependency Id="VL.Stride" Version="2024.6.7" />
  <NugetDependency Id="VL.Fuse" Version="1.0.3" />
  <Patch Id="Mo360_Course03_SacredGeometry_4V">
    <Node Name="RubElHizb_8Fold_SDF" Category="Fuse.SDF.3D" />
    <Node Name="PBR_GoldCeramic_Material" Category="Stride.Materials" />
    <Node Name="SceneWindow_SpoutOut" Category="Stride.Rendering" />
  </Patch>
</Document>`,
`# Preset 04 · Unreal Engine 5.8 Remote Control (:30010) & UDP OSC (:7000)
PUT http://127.0.0.1:30010/remote/object/call
Content·Type: application/json

{{
  "objectPath": "/Game/TAWAF_DomeTest.TAWAF_DomeTest:PersistentLevel.BP_DomeMasterRig_C_1",
  "functionName": "ApplyNeuroBreathAndMediaPipeOSC",
  "parameters": {{
    "OscListenPort": 7000,
    "BreathCycle_4_7_8_Phase": 0.618,
    "FundamentalHz": 136.10,
    "HarmonicHz": 432.0,
    "NiagaraSystem": "NS_SacredCymaticWater"
  }}
}}`
  ];

  function showBridgePreset(idx, btn) {{
    document.querySelectorAll('.preset-cmd-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const term = document.getElementById('bridgeTerminal');
    if (term) term.textContent = bridgePresets[idx];
  }}
</script>
</body>
</html>
"""
    out_file = LAB_DIR / "index.html"
    out_file.write_text(html_doc, encoding="utf-8")
    print(f"Wrote {out_file} ({out_file.stat().st_size} bytes)")

if __name__ == "__main__":
    build_page()
