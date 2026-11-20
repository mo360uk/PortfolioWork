import os
import shutil
import base64
from pathlib import Path
from playwright.sync_api import sync_playwright

PORTFOLIO_DIR = Path(r"C:\Users\moham\.gemini\antigravity\scratch\PortfolioWork")
ASSETS_DIR = PORTFOLIO_DIR / "assets"
BRAIN_DIR = Path(r"C:\Users\moham\.gemini\antigravity\brain\a3424d21-398b-407c-804a-d411874a7e08")
LAB_ASSETS_DIR = PORTFOLIO_DIR / "immersive-lab" / "assets"
CCP_ASSETS_DIR = PORTFOLIO_DIR / "creative-coding-plymouth" / "assets"

for d in [ASSETS_DIR, BRAIN_DIR, LAB_ASSETS_DIR, CCP_ASSETS_DIR]:
    d.mkdir(parents=True, exist_ok=True)

def img_to_data_uri(path: Path) -> str:
    if not path.exists():
        return ""
    mime = "image/png" if path.suffix.lower() == ".png" else "image/jpeg"
    if path.suffix.lower() == ".svg":
        mime = "image/svg+xml"
    data = base64.b64encode(path.read_bytes()).decode("ascii")
    return f"data:{mime};base64,{data}"

logo_svg_path = ASSETS_DIR / "creative_coding_plymouth_logo.svg"
logo_uri = img_to_data_uri(logo_svg_path)
smeaton_uri = img_to_data_uri(ASSETS_DIR / "02_smeatons_tower_plymouth_hoe_real.jpg")
thebox_uri = img_to_data_uri(ASSETS_DIR / "01_the_box_plymouth_real.jpg")
rwy_uri = img_to_data_uri(ASSETS_DIR / "08_royal_william_yard_plymouth_real.jpg")
sound_uri = img_to_data_uri(ASSETS_DIR / "09_plymouth_sound_mount_edgcumbe_real.jpg")

def assert_zero_dashes_in_visible_text(label: str, text_items: list[str]):
    for item in text_items:
        for ch in ["-", "–", "—"]:
            if ch in item:
                raise ValueError(f"Forbidden dash '{ch}' found in {label}: {item}")

# 1. BOARD 1 HTML: Creative Coding Plymouth Brand Identity & Meetup Community Sheet (2400x1350)
# Strict 4-side padding: 135px top/bottom (10%), 192px left/right (8%) -> inner frame 2016 x 1080
BOARD1_HTML = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&family=Space+Grotesk:wght@600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet">
<style>
  * {{ box-sizing: border-box; margin: 0; padding: 0; }}
  body {{
    width: 2400px;
    height: 1350px;
    overflow: hidden;
    background: #0B0F17;
    color: #FAF7F2;
    font-family: 'Inter', sans-serif;
    padding: 135px 192px;
    position: relative;
  }}
  body::before {{
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 18% 22%, rgba(14, 107, 168, 0.18), transparent 42%),
      radial-gradient(circle at 82% 76%, rgba(200, 125, 40, 0.14), transparent 45%),
      linear-gradient(rgba(250, 247, 242, 0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(250, 247, 242, 0.025) 1px, transparent 1px);
    background-size: 100% 100%, 100% 100%, 48px 48px, 48px 48px;
    pointer-events: none;
  }}
  .board-frame {{
    width: 100%;
    height: 100%;
    border: 2px solid rgba(200, 125, 40, 0.48);
    border-radius: 20px;
    background: rgba(11, 15, 23, 0.90);
    padding: 30px 38px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    box-shadow: 0 30px 90px rgba(0,0,0,0.65);
  }}
  .corner {{
    position: absolute;
    width: 28px;
    height: 28px;
    border-color: #D4882A;
    border-style: solid;
  }}
  .c-tl {{ top: -2px; left: -2px; border-width: 4px 0 0 4px; border-top-left-radius: 20px; }}
  .c-tr {{ top: -2px; right: -2px; border-width: 4px 4px 0 0; border-top-right-radius: 20px; }}
  .c-bl {{ bottom: -2px; left: -2px; border-width: 0 0 4px 4px; border-bottom-left-radius: 20px; }}
  .c-br {{ bottom: -2px; right: -2px; border-width: 0 4px 4px 0; border-bottom-right-radius: 20px; }}

  /* Header Bar */
  .top-bar {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    border-bottom: 1.5px solid rgba(200, 125, 40, 0.35);
  }}
  .eyebrow {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 13.5px;
    font-weight: 700;
    color: #D4882A;
    letter-spacing: 2.8px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 4px;
  }}
  .eyebrow-dot {{
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #1B7F69;
    box-shadow: 0 0 12px #1B7F69;
  }}
  .top-title {{
    font-family: 'Syne', sans-serif;
    font-size: 29px;
    font-weight: 800;
    color: #FAF7F2;
    letter-spacing: 1px;
  }}
  .top-title span {{ color: #D4882A; }}
  .top-badge {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 13.5px;
    font-weight: 700;
    color: #FAF7F2;
    background: linear-gradient(135deg, #0E6BA8, #1B7F69);
    padding: 10px 22px;
    border-radius: 30px;
    letter-spacing: 1.5px;
    white-space: nowrap;
  }}

  /* Main 3-Column Swiss Grid */
  .grid-main {{
    display: grid;
    grid-template-columns: 490px 1fr 540px;
    gap: 26px;
    align-items: stretch;
    flex: 1;
    margin: 18px 0;
    min-height: 0;
  }}

  .panel {{
    background: #101724;
    border: 1.5px solid rgba(14, 107, 168, 0.35);
    border-radius: 16px;
    padding: 20px 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }}
  .panel-ochre {{
    border-color: rgba(200, 125, 40, 0.5);
  }}
  .panel-label {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    font-weight: 700;
    color: #D4882A;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }}

  /* Left Column: Official Logo Emblem & Palette */
  .logo-showcase {{
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #0B0F17;
    border: 1.5px solid rgba(200, 125, 40, 0.35);
    border-radius: 14px;
    padding: 12px;
  }}
  .logo-showcase img {{
    width: 410px;
    height: 410px;
    object-fit: contain;
    display: block;
  }}
  .swatches {{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
  }}
  .swatch {{
    border-radius: 8px;
    padding: 8px 6px;
    border: 1px solid rgba(250, 247, 242, 0.18);
    text-align: center;
    background: #0B0F17;
  }}
  .swatch-color {{
    height: 32px;
    border-radius: 5px;
    margin-bottom: 6px;
  }}
  .swatch-name {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 10.5px;
    font-weight: 700;
    color: #FAF7F2;
    line-height: 1.15;
  }}
  .swatch-hex {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    color: #D4882A;
    margin-top: 2px;
  }}

  /* Center Column: Real Plymouth Photography & Editorial Manifesto */
  .photo-grid {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }}
  .photo-card {{
    background: #0B0F17;
    border: 1px solid rgba(250, 247, 242, 0.16);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }}
  .photo-card img {{
    width: 100%;
    height: 156px;
    object-fit: cover;
    display: block;
  }}
  .photo-cap {{
    padding: 8px 12px;
    background: #0D131F;
    border-top: 2px solid #C87D28;
  }}
  .photo-cap strong {{
    display: block;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 13.5px;
    color: #FAF7F2;
  }}
  .photo-cap span {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 10.5px;
    color: #D4882A;
  }}

  .editorial-box {{
    background: #FAF7F2;
    color: #0B0F17;
    border-radius: 12px;
    padding: 18px 22px;
    border-left: 8px solid #C87D28;
  }}
  .editorial-box h3 {{
    font-family: 'Syne', sans-serif;
    font-size: 21px;
    font-weight: 800;
    color: #0B0F17;
    margin-bottom: 6px;
  }}
  .editorial-box p {{
    font-size: 13.5px;
    line-height: 1.48;
    color: #1F242D;
    font-weight: 500;
  }}
  .benchmark-pills {{
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-top: 10px;
  }}
  .b-pill {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 10.5px;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 5px;
    background: #0B0F17;
    color: #FAF7F2;
  }}
  .b-pill.teal {{ background: #0E6BA8; }}
  .b-pill.emerald {{ background: #1B7F69; }}
  .b-pill.ochre {{ background: #C87D28; color: #0B0F17; }}

  /* Right Column: Meetup.com Community Hub & Monthly Gatherings */
  .meetup-card {{
    background: linear-gradient(145deg, #131C2E, #0B0F17);
    border: 2px solid #D4882A;
    border-radius: 14px;
    padding: 18px;
  }}
  .meetup-header {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }}
  .meetup-tag {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 11.5px;
    font-weight: 700;
    background: #C87D28;
    color: #0B0F17;
    padding: 4px 12px;
    border-radius: 20px;
  }}
  .meetup-title {{
    font-family: 'Syne', sans-serif;
    font-size: 21px;
    font-weight: 800;
    color: #FAF7F2;
    margin-bottom: 4px;
  }}
  .meetup-sub {{
    font-size: 13px;
    color: rgba(250, 247, 242, 0.82);
    line-height: 1.4;
  }}
  .event-list {{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 12px 0 4px;
  }}
  .event-row {{
    background: rgba(14, 107, 168, 0.14);
    border-left: 4px solid #0E6BA8;
    border-radius: 8px;
    padding: 9px 12px;
  }}
  .event-row.emerald {{
    background: rgba(27, 127, 105, 0.14);
    border-left-color: #1B7F69;
  }}
  .event-row.ochre {{
    background: rgba(200, 125, 40, 0.14);
    border-left-color: #D4882A;
  }}
  .event-meta {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 10.5px;
    color: #D4882A;
    font-weight: 700;
    margin-bottom: 2px;
  }}
  .event-name {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 14.5px;
    font-weight: 700;
    color: #FAF7F2;
  }}
  .event-loc {{
    font-size: 12px;
    color: rgba(250, 247, 242, 0.78);
    margin-top: 1px;
  }}
  .Node-stack-bar {{
    background: #0B0F17;
    border: 1px solid rgba(27, 127, 105, 0.55);
    border-radius: 10px;
    padding: 11px 14px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11.5px;
    color: #FAF7F2;
    line-height: 1.45;
  }}
  .Node-stack-bar strong {{ color: #24A186; }}

  /* Bottom Bar */
  .bottom-bar {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 14px;
    border-top: 1.5px solid rgba(200, 125, 40, 0.35);
    font-family: 'JetBrains Mono', monospace;
    font-size: 12.5px;
    color: rgba(250, 247, 242, 0.9);
    white-space: nowrap;
  }}
  .bottom-bar strong {{ color: #D4882A; }}
</style>
</head>
<body>
  <div class="board-frame">
    <div class="corner c-tl"></div>
    <div class="corner c-tr"></div>
    <div class="corner c-bl"></div>
    <div class="corner c-br"></div>

    <div class="top-bar">
      <div>
        <div class="eyebrow"><span class="eyebrow-dot"></span> MO360 IMMERSIVE STUDIO · OFFICIAL BRAND SYSTEM · BOARD 01</div>
        <div class="top-title">CREATIVE CODING <span>PLYMOUTH</span> · IDENTITY &amp; MEETUP HUB</div>
      </div>
      <div class="top-badge">PLYMOUTH · DEVON · UNITED KINGDOM 🇬🇧</div>
    </div>

    <div class="grid-main">
      <!-- Column 1: Logo & Brand Architecture -->
      <div class="panel panel-ochre">
        <div>
          <div class="panel-label">01 · GEOMETRIC EMBLEM &amp; LOCKUP</div>
          <div class="logo-showcase">
            <img src="{logo_uri}" alt="Creative Coding Plymouth Emblem">
          </div>
        </div>
        <div>
          <div class="panel-label" style="margin-bottom:8px;">02 · CHROMATIC ARCHITECTURE</div>
          <div class="swatches">
            <div class="swatch">
              <div class="swatch-color" style="background:#C87D28;"></div>
              <div class="swatch-name">Studio Ochre</div>
              <div class="swatch-hex">#C87D28</div>
            </div>
            <div class="swatch">
              <div class="swatch-color" style="background:#0E6BA8;"></div>
              <div class="swatch-name">Fulldome Teal</div>
              <div class="swatch-hex">#0E6BA8</div>
            </div>
            <div class="swatch">
              <div class="swatch-color" style="background:#1B7F69;"></div>
              <div class="swatch-name">Pervasive Emerald</div>
              <div class="swatch-hex">#1B7F69</div>
            </div>
            <div class="swatch">
              <div class="swatch-color" style="background:#0B0F17;border:1px solid #555;"></div>
              <div class="swatch-name">Deep Obsidian</div>
              <div class="swatch-hex">#0B0F17</div>
            </div>
            <div class="swatch">
              <div class="swatch-color" style="background:#FAF7F2;"></div>
              <div class="swatch-name">Museum White</div>
              <div class="swatch-hex">#FAF7F2</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Column 2: Unobstructed Real Plymouth Photography & Editorial Vision -->
      <div class="panel">
        <div>
          <div class="panel-label">03 · VERIFIED PLYMOUTH CULTURAL ANCHORS (UNOBSTRUCTED REAL PHOTOGRAPHY)</div>
          <div class="photo-grid">
            <div class="photo-card">
              <img src="{smeaton_uri}" alt="Smeaton Tower Plymouth Hoe">
              <div class="photo-cap">
                <strong>Smeaton's Tower · Plymouth Hoe</strong>
                <span>ICONIC LIGHTHOUSE &amp; WAVE GEOMETRY</span>
              </div>
            </div>
            <div class="photo-card">
              <img src="{thebox_uri}" alt="The Box Museum Plymouth">
              <div class="photo-cap">
                <strong>The Box · Plymouth Museum &amp; Gallery</strong>
                <span>CULTURAL CURATION &amp; ARCHIVAL HERITAGE</span>
              </div>
            </div>
            <div class="photo-card">
              <img src="{rwy_uri}" alt="Royal William Yard Plymouth">
              <div class="photo-cap">
                <strong>Royal William Yard &amp; Waterfront</strong>
                <span>ARCHITECTURAL PROJECTION MAPPING</span>
              </div>
            </div>
            <div class="photo-card">
              <img src="{sound_uri}" alt="Plymouth Sound National Marine Park">
              <div class="photo-cap">
                <strong>Plymouth Sound &amp; Devonport</strong>
                <span>MARKET HALL 15M FULLDOME &amp; REAL IDEAS</span>
              </div>
            </div>
          </div>
        </div>

        <div class="editorial-box">
          <div class="panel-label" style="color:#C87D28;margin-bottom:4px;">04 · GLOBAL BENCHMARK &amp; SOUTH WEST MANIFESTO</div>
          <h3>OPEN CREATIVE TECHNOLOGY FOR PLYMOUTH &amp; BRISTOL</h3>
          <p>Benchmarked against European creative coding collectives and tailored for South West practitioners across Market Hall Devonport, Real Ideas, KARST, The Box, and Pervasive Media Studio at Watershed Bristol. Open Show &amp; Tell nights, live node patching, and beginner friendly workshops.</p>
          <div class="benchmark-pills">
            <span class="b-pill ochre">CREATIVE CODING AMSTERDAM</span>
            <span class="b-pill teal">CREATIVE CODE BERLIN</span>
            <span class="b-pill emerald">CREATIVE CODING UTRECHT</span>
            <span class="b-pill">PROCESSING COMMUNITY DAY</span>
            <span class="b-pill teal">PERVASIVE MEDIA STUDIO</span>
            <span class="b-pill emerald">THE NODE INSTITUTE</span>
          </div>
        </div>
      </div>

      <!-- Column 3: Meetup.com Community Hub & Monthly Gatherings -->
      <div class="panel panel-ochre">
        <div>
          <div class="panel-label">05 · OFFICIAL MEETUP.COM SCHEDULE &amp; GATHERINGS</div>
          <div class="meetup-card">
            <div class="meetup-header">
              <span class="meetup-tag">LIVE ON MEETUP.COM</span>
              <span style="font-family:'JetBrains Mono',monospace;font-size:11.5px;color:#24A186;">RSVP · +44 7568 668918</span>
            </div>
            <div class="meetup-title">Monthly Gatherings &amp; Open Patching</div>
            <div class="meetup-sub">Free community nights uniting artists, coders, musicians, students, and curious beginners across Plymouth, Devon, United Kingdom.</div>

            <div class="event-list">
              <div class="event-row ochre">
                <div class="event-meta">SESSION 01 · FIRST THURSDAY MONTHLY · 18:30 GMT</div>
                <div class="event-name">Market Hall Dome Lab · 180° Fulldome Open Night</div>
                <div class="event-loc">Market Hall, Duke Street, Devonport, Plymouth · Real Ideas</div>
              </div>
              <div class="event-row">
                <div class="event-meta">SESSION 02 · SECOND TUESDAY MONTHLY · 18:00 GMT</div>
                <div class="event-name">Real Ideas Creative Tech &amp; Beginner Node Clinic</div>
                <div class="event-loc">Devonport Guildhall &amp; Market Hall CoWorking, Plymouth</div>
              </div>
              <div class="event-row emerald">
                <div class="event-meta">SESSION 03 · THIRD FRIDAY MONTHLY · 19:00 GMT</div>
                <div class="event-name">KARST &amp; Barbican Live Coding &amp; Projection Jam</div>
                <div class="event-loc">KARST Gallery, Millbay &amp; Barbican Waterfront, Plymouth</div>
              </div>
              <div class="event-row">
                <div class="event-meta">SESSION 04 · QUARTERLY REGIONAL EXCHANGE</div>
                <div class="event-name">South West Bridge · Plymouth to Pervasive Media Studio</div>
                <div class="event-loc">Plymouth to Watershed, Harbourside, Bristol · Hybrid Link</div>
              </div>
            </div>
          </div>
        </div>

        <div class="Node-stack-bar">
          <strong>CORE CREATIVE CODE STACK:</strong> TouchDesigner · Unreal Engine 5.8 · vvvv gamma (4V) · VL.Stride &amp; VL.Fuse · GLSL &amp; RayTK · MediaPipe &amp; LiDAR · 36.4 Spatial Audio
        </div>
      </div>
    </div>

    <div class="bottom-bar">
      <div><strong>FOUNDER &amp; CURATOR:</strong> Mohamed Hossam Elwakil · Visual Artist, Creative Technologist, Curator &amp; Creative Director</div>
      <div><strong>HERITAGE:</strong> The Box · KARST · MIRROR · Ars Electronica · Egyptian Museum Cairo</div>
      <div><strong>CONTACT:</strong> +44 7568 668918 · Plymouth, Devon, UK</div>
    </div>
  </div>
</body>
</html>
"""

# 2. BOARD 2 HTML: Mo360 Immersive Lab · 5-Course Visual Showcase Poster (2400x1350)
BOARD2_HTML = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&family=Space+Grotesk:wght@600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet">
<style>
  * {{ box-sizing: border-box; margin: 0; padding: 0; }}
  body {{
    width: 2400px;
    height: 1350px;
    overflow: hidden;
    background: #0B0F17;
    color: #FAF7F2;
    font-family: 'Inter', sans-serif;
    padding: 135px 192px;
    position: relative;
  }}
  body::before {{
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 12% 18%, rgba(200, 125, 40, 0.16), transparent 40%),
      radial-gradient(circle at 88% 82%, rgba(27, 127, 105, 0.18), transparent 45%),
      linear-gradient(rgba(250, 247, 242, 0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(250, 247, 242, 0.025) 1px, transparent 1px);
    background-size: 100% 100%, 100% 100%, 48px 48px, 48px 48px;
    pointer-events: none;
  }}
  .board-frame {{
    width: 100%;
    height: 100%;
    border: 2px solid rgba(14, 107, 168, 0.55);
    border-radius: 20px;
    background: rgba(11, 15, 23, 0.90);
    padding: 32px 38px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    box-shadow: 0 30px 90px rgba(0,0,0,0.65);
  }}
  .corner {{
    position: absolute;
    width: 28px;
    height: 28px;
    border-color: #D4882A;
    border-style: solid;
  }}
  .c-tl {{ top: -2px; left: -2px; border-width: 4px 0 0 4px; border-top-left-radius: 20px; }}
  .c-tr {{ top: -2px; right: -2px; border-width: 4px 4px 0 0; border-top-right-radius: 20px; }}
  .c-bl {{ bottom: -2px; left: -2px; border-width: 0 0 4px 4px; border-bottom-left-radius: 20px; }}
  .c-br {{ bottom: -2px; right: -2px; border-width: 0 4px 4px 0; border-bottom-right-radius: 20px; }}

  .top-bar {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    border-bottom: 1.5px solid rgba(200, 125, 40, 0.38);
  }}
  .eyebrow {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 13.5px;
    font-weight: 700;
    color: #D4882A;
    letter-spacing: 2.8px;
    margin-bottom: 4px;
  }}
  .top-title {{
    font-family: 'Syne', sans-serif;
    font-size: 28px;
    font-weight: 800;
    color: #FAF7F2;
    letter-spacing: 1px;
  }}
  .top-title span {{ color: #D4882A; }}
  .top-badges {{
    display: flex;
    gap: 12px;
    align-items: center;
  }}
  .badge-pill {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 12.5px;
    font-weight: 700;
    padding: 9px 16px;
    border-radius: 24px;
    background: #101827;
    border: 1.5px solid #D4882A;
    color: #FAF7F2;
    white-space: nowrap;
  }}
  .badge-pill.teal {{
    background: linear-gradient(135deg, #0E6BA8, #1B7F69);
    border-color: transparent;
  }}

  /* 5-Course Grid */
  .courses-grid {{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 18px;
    margin: 18px 0;
    flex: 1;
  }}
  .course-card {{
    background: #101725;
    border: 1.5px solid rgba(250, 247, 242, 0.16);
    border-top: 5px solid #C87D28;
    border-radius: 14px;
    padding: 18px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }}
  .course-card.c2 {{ border-top-color: #0E6BA8; }}
  .course-card.c3 {{ border-top-color: #1B7F69; }}
  .course-card.c4 {{ border-top-color: #D4882A; }}
  .course-card.c5 {{ border-top-color: #1589D6; }}

  .c-head {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }}
  .c-num {{
    font-family: 'Syne', sans-serif;
    font-size: 28px;
    font-weight: 800;
    color: #D4882A;
  }}
  .c-tag {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 10.5px;
    font-weight: 700;
    padding: 4px 9px;
    border-radius: 6px;
    background: rgba(200, 125, 40, 0.18);
    color: #FAF7F2;
  }}
  .c-visual {{
    height: 145px;
    border-radius: 10px;
    background: #0B0F17;
    border: 1px solid rgba(250, 247, 242, 0.14);
    margin-bottom: 14px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }}
  .c-title {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #FAF7F2;
    line-height: 1.25;
    margin-bottom: 8px;
  }}
  .c-desc {{
    font-size: 13px;
    line-height: 1.48;
    color: rgba(250, 247, 242, 0.82);
    margin-bottom: 12px;
  }}
  .c-modules {{
    background: #0B0F17;
    border-radius: 8px;
    padding: 12px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: rgba(250, 247, 242, 0.9);
    line-height: 1.55;
    border-left: 3px solid #0E6BA8;
    margin-bottom: 12px;
  }}
  .c-modules strong {{
    color: #D4882A;
    display: block;
    margin-bottom: 4px;
  }}
  .c-footer {{
    display: flex;
    flex-direction: column;
    gap: 7px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10.5px;
  }}
  .c-pill {{
    padding: 7px 10px;
    border-radius: 6px;
    background: rgba(27, 127, 105, 0.22);
    border: 1px solid rgba(27, 127, 105, 0.55);
    color: #FAF7F2;
    font-weight: 700;
  }}
  .c-pill.audio {{
    background: rgba(14, 107, 168, 0.22);
    border-color: rgba(14, 107, 168, 0.55);
    color: #FAF7F2;
  }}

  /* Benchmark & Bridge Strip */
  .bridge-strip {{
    background: #FAF7F2;
    color: #0B0F17;
    border-radius: 14px;
    padding: 15px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    border-left: 8px solid #C87D28;
  }}
  .bridge-strip h4 {{
    font-family: 'Syne', sans-serif;
    font-size: 18px;
    font-weight: 800;
    color: #0B0F17;
    margin-bottom: 3px;
  }}
  .bridge-strip p {{
    font-size: 13px;
    font-weight: 500;
    color: #222934;
  }}
  .bridge-chips {{
    display: flex;
    gap: 10px;
  }}
  .b-chip {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 11.5px;
    font-weight: 700;
    padding: 8px 13px;
    border-radius: 8px;
    background: #0B0F17;
    color: #FAF7F2;
    white-space: nowrap;
  }}
  .b-chip.ochre {{ background: #C87D28; color: #0B0F17; }}
  .b-chip.teal {{ background: #0E6BA8; }}
  .b-chip.emerald {{ background: #1B7F69; }}

  .bottom-bar {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 14px;
    border-top: 1.5px solid rgba(200, 125, 40, 0.35);
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    color: rgba(250, 247, 242, 0.9);
  }}
  .bottom-bar strong {{ color: #D4882A; }}
</style>
</head>
<body>
  <div class="board-frame">
    <div class="corner c-tl"></div>
    <div class="corner c-tr"></div>
    <div class="corner c-bl"></div>
    <div class="corner c-br"></div>

    <div class="top-bar">
      <div>
        <div class="eyebrow">MO360 IMMERSIVE LAB · CREATIVE CODING &amp; CREATIVE TECHNOLOGY ACADEMY · BOARD 02</div>
        <div class="top-title">TOP 5 BEGINNER COURSES · <span>TOUCHDESIGNER · UNREAL 5.8 · VVVV 4V</span></div>
      </div>
      <div class="top-badges">
        <span class="badge-pill">🎙️ BRITISH VOICE NARRATOR</span>
        <span class="badge-pill teal">📦 5 STARTER PROJECT KITS (.ZIP)</span>
      </div>
    </div>

    <div class="courses-grid">
      <!-- Course 01 -->
      <div class="course-card c1">
        <div>
          <div class="c-head">
            <span class="c-num">01</span>
            <span class="c-tag">MARKET HALL DOME</span>
          </div>
          <div class="c-visual">
            <svg viewBox="0 0 260 140" width="260" height="140">
              <rect width="260" height="140" fill="#080C14"/>
              <circle cx="130" cy="64" r="52" fill="none" stroke="#D4882A" stroke-width="2"/>
              <circle cx="130" cy="64" r="38" fill="none" stroke="#0E6BA8" stroke-width="1.5" stroke-dasharray="5 3"/>
              <circle cx="130" cy="64" r="22" fill="none" stroke="#1B7F69" stroke-width="1.5"/>
              <line x1="78" y1="64" x2="182" y2="64" stroke="#D4882A" stroke-opacity="0.5"/>
              <line x1="130" y1="12" x2="130" y2="116" stroke="#D4882A" stroke-opacity="0.5"/>
              <text x="130" y="132" text-anchor="middle" fill="#FAF7F2" font-family="JetBrains Mono" font-size="9">180° EQUIDISTANT 4096x4096</text>
            </svg>
          </div>
          <div class="c-title">Fulldome 360° &amp; 180° Fisheye Cinema</div>
          <div class="c-desc">Master CubeMap to 180° Equidistant Fisheye rendering for the 15m Market Hall Dome in Devonport, Plymouth.</div>
          <div class="c-modules">
            <strong>6 STEP BY STEP MODULES</strong>
            Render TOP CubeMap · Projection TOP Fisheye · BP_DomeMasterRig · Spout Zero Copy · 4K 30fps Export
          </div>
        </div>
        <div class="c-footer">
          <div class="c-pill audio">🔊 narrator_01_fulldome_cinema.wav</div>
          <div class="c-pill">⬇ course_01_fulldome_180_rig.zip</div>
        </div>
      </div>

      <!-- Course 02 -->
      <div class="course-card c2">
        <div>
          <div class="c-head">
            <span class="c-num">02</span>
            <span class="c-tag">REAL IDEAS HERITAGE</span>
          </div>
          <div class="c-visual">
            <svg viewBox="0 0 260 140" width="260" height="140">
              <rect width="260" height="140" fill="#080C14"/>
              <polygon points="40,108 95,28 165,28 220,108" fill="none" stroke="#0E6BA8" stroke-width="2"/>
              <line x1="40" y1="108" x2="165" y2="28" stroke="#1B7F69" stroke-width="1.2" stroke-dasharray="4 3"/>
              <line x1="220" y1="108" x2="95" y2="28" stroke="#1B7F69" stroke-width="1.2" stroke-dasharray="4 3"/>
              <circle cx="95" cy="28" r="4" fill="#D4882A"/>
              <circle cx="165" cy="28" r="4" fill="#D4882A"/>
              <circle cx="40" cy="108" r="4" fill="#D4882A"/>
              <circle cx="220" cy="108" r="4" fill="#D4882A"/>
              <text x="130" y="132" text-anchor="middle" fill="#FAF7F2" font-family="JetBrains Mono" font-size="9">CAMSCHNAPPR · LIDAR POINT CLOUD</text>
            </svg>
          </div>
          <div class="c-title">Architectural Projection Mapping &amp; 3D LiDAR</div>
          <div class="c-desc">Scan Plymouth architecture with LiDAR and calibrate multi projector warped facades in TouchDesigner and Unreal 5.8.</div>
          <div class="c-modules">
            <strong>6 STEP BY STEP MODULES</strong>
            Polycam PLY Scan · Point File In TOP · KantanMapper 2D · CamSchnappr 3D · Unreal nDisplay
          </div>
        </div>
        <div class="c-footer">
          <div class="c-pill audio">🔊 narrator_02_projection_mapping_scanning.wav</div>
          <div class="c-pill">⬇ course_02_projection_mapping_scanner.zip</div>
        </div>
      </div>

      <!-- Course 03 -->
      <div class="course-card c3">
        <div>
          <div class="c-head">
            <span class="c-num">03</span>
            <span class="c-tag">VVVV GAMMA 4V</span>
          </div>
          <div class="c-visual">
            <svg viewBox="0 0 260 140" width="260" height="140">
              <rect width="260" height="140" fill="#080C14"/>
              <g transform="translate(130,64)" fill="none" stroke-width="1.6">
                <rect x="-34" y="-34" width="68" height="68" stroke="#D4882A"/>
                <rect x="-34" y="-34" width="68" height="68" stroke="#1B7F69" transform="rotate(45)"/>
                <circle r="22" stroke="#0E6BA8"/>
                <circle r="6" fill="#FAF7F2"/>
              </g>
              <text x="130" y="132" text-anchor="middle" fill="#FAF7F2" font-family="JetBrains Mono" font-size="9">RUB EL HIZB · VL.STRIDE · VL.FUSE</text>
            </svg>
          </div>
          <div class="c-title">Generative 3D Sacred Geometry &amp; vvvv 4V</div>
          <div class="c-desc">Build 8, 10, and 12 fold sacred geometric instancing in TouchDesigner and compile GPU shaders in vvvv gamma 4V.</div>
          <div class="c-modules">
            <strong>6 STEP BY STEP MODULES</strong>
            SOP to CHOP Instancing · RayTK SDFs · vvvv VL.Stride PBR · VL.Fuse GPU Nodes · Standalone .EXE
          </div>
        </div>
        <div class="c-footer">
          <div class="c-pill audio">🔊 narrator_03_generative_3d_vvvv.wav</div>
          <div class="c-pill">⬇ course_03_generative_sacred_geometry_4v.zip</div>
        </div>
      </div>

      <!-- Course 04 -->
      <div class="course-card c4">
        <div>
          <div class="c-head">
            <span class="c-num">04</span>
            <span class="c-tag">PERVASIVE MEDIA</span>
          </div>
          <div class="c-visual">
            <svg viewBox="0 0 260 140" width="260" height="140">
              <rect width="260" height="140" fill="#080C14"/>
              <g stroke="#24A186" stroke-width="2" fill="#D4882A">
                <line x1="130" y1="32" x2="130" y2="78"/>
                <line x1="130" y1="48" x2="85" y2="36"/>
                <line x1="130" y1="48" x2="175" y2="36"/>
                <line x1="130" y1="78" x2="100" y2="110"/>
                <line x1="130" y1="78" x2="160" y2="110"/>
                <circle cx="130" cy="25" r="7"/>
                <circle cx="85" cy="36" r="4"/>
                <circle cx="175" cy="36" r="4"/>
              </g>
              <text x="130" y="132" text-anchor="middle" fill="#FAF7F2" font-family="JetBrains Mono" font-size="9">MEDIAPIPE · OSC · UNREAL NIAGARA</text>
            </svg>
          </div>
          <div class="c-title">Interactive Sensors &amp; Body Tracking</div>
          <div class="c-desc">Connect webcam MediaPipe skeleton tracking, depth sensors, and OSC telemetry to Unreal 5.8 Niagara particles.</div>
          <div class="c-modules">
            <strong>6 STEP BY STEP MODULES</strong>
            MediaPipe Hand &amp; Pose · Lag CHOP Smoothing · OSC Out Port 7000 · Niagara Ribbons · State Logic
          </div>
        </div>
        <div class="c-footer">
          <div class="c-pill audio">🔊 narrator_04_interactive_pervasive_media.wav</div>
          <div class="c-pill">⬇ course_04_interactive_sensors_pervasive.zip</div>
        </div>
      </div>

      <!-- Course 05 -->
      <div class="course-card c5">
        <div>
          <div class="c-head">
            <span class="c-num">05</span>
            <span class="c-tag">36.4 SPATIAL AUDIO</span>
          </div>
          <div class="c-visual">
            <svg viewBox="0 0 260 140" width="260" height="140">
              <rect width="260" height="140" fill="#080C14"/>
              <path d="M 20 66 Q 45 18, 70 66 T 120 66 T 170 66 T 220 66" fill="none" stroke="#D4882A" stroke-width="2.5"/>
              <path d="M 20 66 Q 45 102, 70 66 T 120 66 T 170 66 T 220 66" fill="none" stroke="#0E6BA8" stroke-width="2"/>
              <text x="130" y="132" text-anchor="middle" fill="#FAF7F2" font-family="JetBrains Mono" font-size="9">136.10HZ · 432HZ · METASOUNDS</text>
            </svg>
          </div>
          <div class="c-title">Sonic Arts &amp; 3D Spatial Audio Performance</div>
          <div class="c-desc">Design 36.4 dome spatial audio and neuro sensory 4·7·8 breathing visuals with TouchDesigner CHOPs and MetaSounds.</div>
          <div class="c-modules">
            <strong>6 STEP BY STEP MODULES</strong>
            Audio Spectrum CHOP · 4 Bands · 136.10Hz &amp; 432Hz · 4·7·8 Breath Envelope · Unreal MetaSounds
          </div>
        </div>
        <div class="c-footer">
          <div class="c-pill audio">🔊 narrator_05_spatial_audio_sonic_performance.wav</div>
          <div class="c-pill">⬇ course_05_spatial_audio_sonic_performance.zip</div>
        </div>
      </div>
    </div>

    <div class="bridge-strip">
      <div>
        <h4>BENCHMARKED ON THE NODE INSTITUTE · BUILT WITH ANTIGRAVITY LIVE BRIDGE</h4>
        <p>Extends The NODE Institute TouchDesigner &amp; vvvv 4V curriculum with live JSON RPC Port 9980 control, Unreal 5.8 Python remote execution, and 180° Fulldome rigs.</p>
      </div>
      <div class="bridge-chips">
        <span class="b-chip ochre">TD MCP PORT 9980</span>
        <span class="b-chip teal">UNREAL 5.8 REMOTE</span>
        <span class="b-chip emerald">VVVV 4V GENERATOR</span>
        <span class="b-chip">OSC 7000..7002</span>
      </div>
    </div>

    <div class="bottom-bar">
      <div><strong>ACADEMY DIRECTOR:</strong> Mohamed Hossam Elwakil · Mo360 Immersive Studio · Plymouth, Devon, United Kingdom 🇬🇧</div>
      <div><strong>PARTNER ECOSYSTEM:</strong> Real Ideas · Market Hall 15m Dome · Pervasive Media Studio</div>
      <div><strong>CONTACT:</strong> +44 7568 668918</div>
    </div>
  </div>
</body>
</html>
"""

LOGO_HTML = f"""<!DOCTYPE html>
<html>
<head><style>*{{margin:0;padding:0;}}body{{width:1200px;height:1200px;overflow:hidden;background:#0B0F17;}}</style></head>
<body><img src="{logo_uri}" width="1200" height="1200" style="display:block;"/></body>
</html>
"""

def render_all():
    with sync_playwright() as p:
        browser = p.chromium.launch()

        # 1. Logo PNG (1200x1200)
        page_logo = browser.new_page(viewport={"width": 1200, "height": 1200})
        page_logo.set_content(LOGO_HTML, wait_until="networkidle")
        logo_png = ASSETS_DIR / "creative_coding_plymouth_logo.png"
        page_logo.screenshot(path=str(logo_png))
        page_logo.close()

        # 2. Board 1 PNG (2400x1350)
        page_b1 = browser.new_page(viewport={"width": 2400, "height": 1350})
        page_b1.set_content(BOARD1_HTML, wait_until="networkidle")
        page_b1.wait_for_timeout(500)
        visible_b1 = page_b1.inner_text("body")
        assert_zero_dashes_in_visible_text("Board 1", [visible_b1])
        b1_png = ASSETS_DIR / "creative_coding_plymouth_brand_board.png"
        page_b1.screenshot(path=str(b1_png))
        page_b1.close()

        # 3. Board 2 PNG (2400x1350)
        page_b2 = browser.new_page(viewport={"width": 2400, "height": 1350})
        page_b2.set_content(BOARD2_HTML, wait_until="networkidle")
        page_b2.wait_for_timeout(500)
        visible_b2 = page_b2.inner_text("body")
        assert_zero_dashes_in_visible_text("Board 2", [visible_b2])
        b2_png = ASSETS_DIR / "mo360_immersive_lab_courses_board.png"
        page_b2.screenshot(path=str(b2_png))
        page_b2.close()

        browser.close()

    # Copy all 4 files to BRAIN_DIR, LAB_ASSETS_DIR, CCP_ASSETS_DIR
    files_to_mirror = [
        ASSETS_DIR / "creative_coding_plymouth_logo.svg",
        ASSETS_DIR / "creative_coding_plymouth_logo.png",
        ASSETS_DIR / "creative_coding_plymouth_brand_board.png",
        ASSETS_DIR / "mo360_immersive_lab_courses_board.png",
    ]
    for src in files_to_mirror:
        for dest_dir in [BRAIN_DIR, LAB_ASSETS_DIR, CCP_ASSETS_DIR]:
            shutil.copy2(src, dest_dir / src.name)
            print(f"Copied {src.name} -> {dest_dir / src.name} ({src.stat().st_size} bytes)")

if __name__ == "__main__":
    render_all()
