import base64
from pathlib import Path
from playwright.sync_api import sync_playwright

PORTFOLIO_DIR = Path(r"C:\Users\moham\.gemini\antigravity\scratch\PortfolioWork")
ASSETS_DIR = PORTFOLIO_DIR / "assets"
WORK_ASSETS_DIR = PORTFOLIO_DIR / "work" / "assets"
THUMBS_DIR = PORTFOLIO_DIR / "immersive-lab" / "assets" / "thumbnails"
CCP_ASSETS_DIR = PORTFOLIO_DIR / "creative-coding-plymouth" / "assets"
PARENT_BRAIN_DIR = Path(r"C:\Users\moham\.gemini\antigravity\brain\a3424d21-398b-407c-804a-d411874a7e08")

for d in [THUMBS_DIR, CCP_ASSETS_DIR, PARENT_BRAIN_DIR]:
    d.mkdir(parents=True, exist_ok=True)


def img_to_data_uri(path: Path) -> str:
    if not path.exists():
        return ""
    ext = path.suffix.lower()
    mime = "image/png" if ext == ".png" else ("image/svg+xml" if ext == ".svg" else "image/jpeg")
    data = base64.b64encode(path.read_bytes()).decode("ascii")
    return f"data:{mime};base64,{data}"


logo_uri = img_to_data_uri(ASSETS_DIR / "creative_coding_plymouth_logo.svg")
smeaton_uri = img_to_data_uri(ASSETS_DIR / "02_smeatons_tower_plymouth_hoe_real.jpg")
thebox_uri = img_to_data_uri(ASSETS_DIR / "01_the_box_plymouth_real.jpg")
rwy_uri = img_to_data_uri(ASSETS_DIR / "08_royal_william_yard_plymouth_real.jpg")
sound_uri = img_to_data_uri(ASSETS_DIR / "09_plymouth_sound_mount_edgcumbe_real.jpg")
dome_uri = img_to_data_uri(WORK_ASSETS_DIR / "tawaf_market_hall_dome.jpg")
if not dome_uri:
    dome_uri = sound_uri


def assert_zero_dashes(label: str, strings: list[str]):
    for s in strings:
        for ch in ["-", "–", "—"]:
            if ch in s:
                raise ValueError(f"Forbidden dash '{ch}' in {label}: {s}")


COURSES = [
    {
        "filename": "course_01_thumb.png",
        "canva_id": "DAHa7V8V7Kc",
        "num": "01",
        "eyebrow": "MO360 IMMERSIVE LAB · FULLDOME CINEMA MASTERCLASS",
        "title": "FULLDOME 360° & 180° FISHEYE CINEMA",
        "subtitle": "TouchDesigner CubeMap & Projection TOP to Unreal Engine 5.8 BP_DomeMasterRig",
        "venue": "Tailored for Market Hall 15m Fulldome Cinema · Real Ideas · Devonport, Plymouth, UK",
        "accent": "#0E6BA8",
        "accent_secondary": "#C87D28",
        "tag_badge": "4096×4096 DOMEMASTER · 6 WEEKS",
        "pills": [
            "Render TOP CubeMap",
            "Projection TOP 180°",
            "UE 5.8 BP_DomeMasterRig",
            "Spout2 & OSC Port 7000"
        ],
        "photo_uri": dome_uri,
        "photo_caption": "Market Hall 15m Fulldome Cinema · Devonport, Plymouth 🇬🇧",
        "svg_overlay": """
        <svg viewBox="0 0 360 220" width="100%" height="100%">
          <defs>
            <radialGradient id="g1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#0E6BA8" stop-opacity="0.45"/>
              <stop offset="70%" stop-color="#C87D28" stop-opacity="0.22"/>
              <stop offset="100%" stop-color="#0B0F17" stop-opacity="0.0"/>
            </radialGradient>
          </defs>
          <circle cx="180" cy="110" r="92" fill="url(#g1)" stroke="#C87D28" stroke-width="2.5"/>
          <circle cx="180" cy="110" r="68" fill="none" stroke="#0E6BA8" stroke-width="1.6" stroke-dasharray="5 4"/>
          <circle cx="180" cy="110" r="42" fill="none" stroke="#FAF7F2" stroke-width="1.3" stroke-opacity="0.65"/>
          <circle cx="180" cy="110" r="16" fill="none" stroke="#D4882A" stroke-width="1.8"/>
          <line x1="88" y1="110" x2="272" y2="110" stroke="#FAF7F2" stroke-opacity="0.35" stroke-width="1.2"/>
          <line x1="180" y1="18" x2="180" y2="202" stroke="#FAF7F2" stroke-opacity="0.35" stroke-width="1.2"/>
          <line x1="115" y1="45" x2="245" y2="175" stroke="#0E6BA8" stroke-opacity="0.45" stroke-width="1.2"/>
          <line x1="245" y1="45" x2="115" y2="175" stroke="#0E6BA8" stroke-opacity="0.45" stroke-width="1.2"/>
          <rect x="14" y="14" width="96" height="26" rx="5" fill="#0B0F17" stroke="#0E6BA8" stroke-width="1.5"/>
          <text x="62" y="31" fill="#FAF7F2" font-family="JetBrains Mono" font-size="10.5" font-weight="700" text-anchor="middle">CubeMap 2K</text>
          <rect x="250" y="14" width="96" height="26" rx="5" fill="#0B0F17" stroke="#C87D28" stroke-width="1.5"/>
          <text x="298" y="31" fill="#D4882A" font-family="JetBrains Mono" font-size="10.5" font-weight="700" text-anchor="middle">Fisheye 4K</text>
          <rect x="115" y="182" width="130" height="24" rx="5" fill="#0B0F17" stroke="#1B7F69" stroke-width="1.5"/>
          <text x="180" y="198" fill="#FAF7F2" font-family="JetBrains Mono" font-size="10" font-weight="700" text-anchor="middle">180° EQUIDISTANT</text>
        </svg>
        """
    },
    {
        "filename": "course_02_thumb.png",
        "canva_id": "DAHa7csVF_4",
        "num": "02",
        "eyebrow": "MO360 IMMERSIVE LAB · SITE SPECIFIC ARCHITECTURE",
        "title": "ARCHITECTURAL PROJECTION MAPPING & LIDAR",
        "subtitle": "Polycam & RealityCapture 3D Scans to KantanMapper, CamSchnappr & UE 5.8 nDisplay",
        "venue": "Tailored for Devonport Guildhall, Royal William Yard & Plymouth Heritage Facades",
        "accent": "#C87D28",
        "accent_secondary": "#0E6BA8",
        "tag_badge": "3D CALIBRATION · 6 WEEKS",
        "pills": [
            "Point File In TOP (.ply)",
            "KantanMapper Bezier",
            "CamSchnappr 6 Point",
            "UE 5.8 nDisplay Blend"
        ],
        "photo_uri": rwy_uri,
        "photo_caption": "Royal William Yard · Plymouth Waterfront Heritage 🇬🇧",
        "svg_overlay": """
        <svg viewBox="0 0 360 220" width="100%" height="100%">
          <!-- Architectural Facade Wireframe + 6 CamSchnappr Calibration Points -->
          <polygon points="50,185 50,65 180,24 310,65 310,185" fill="rgba(14,107,168,0.16)" stroke="#0E6BA8" stroke-width="2"/>
          <line x1="50" y1="65" x2="310" y2="65" stroke="#C87D28" stroke-width="1.5" stroke-dasharray="6 4"/>
          <rect x="82" y="88" width="42" height="62" rx="21" fill="rgba(200,125,40,0.18)" stroke="#D4882A" stroke-width="1.8"/>
          <rect x="159" y="82" width="42" height="103" rx="21" fill="rgba(27,127,105,0.22)" stroke="#1B7F69" stroke-width="1.8"/>
          <rect x="236" y="88" width="42" height="62" rx="21" fill="rgba(200,125,40,0.18)" stroke="#D4882A" stroke-width="1.8"/>
          <!-- Calibration Crosshairs -->
          <g stroke="#FAF7F2" stroke-width="2">
            <circle cx="50" cy="65" r="6" fill="#C87D28"/>
            <circle cx="180" cy="24" r="6" fill="#C87D28"/>
            <circle cx="310" cy="65" r="6" fill="#C87D28"/>
            <circle cx="82" cy="150" r="6" fill="#0E6BA8"/>
            <circle cx="278" cy="150" r="6" fill="#0E6BA8"/>
            <circle cx="180" cy="185" r="6" fill="#1B7F69"/>
          </g>
          <text x="180" y="207" fill="#D4882A" font-family="JetBrains Mono" font-size="10.5" font-weight="700" text-anchor="middle">CAMSCHNAPPR 6 POINT HOMOGRAPHY SOLVER</text>
        </svg>
        """
    },
    {
        "filename": "course_03_thumb.png",
        "canva_id": "DAHa7YxNPUM",
        "num": "03",
        "eyebrow": "MO360 IMMERSIVE LAB · GENERATIVE VISUAL SYSTEMS",
        "title": "SACRED GEOMETRY, SHADERS & VVVV GAMMA (4V)",
        "subtitle": "8, 10 & 12 Fold GPU Instancing & RayTK SDFs plus VL.Stride, VL.Fuse & .exe Export",
        "venue": "Inspired by The NODE Institute · Standalone Royalty Free Gallery Executables",
        "accent": "#D4882A",
        "accent_secondary": "#1B7F69",
        "tag_badge": "TD + VVVV 4V · 6 WEEKS",
        "pills": [
            "SOP to CHOP Instancing",
            "RayTK SDF Raymarching",
            "VL.Stride & VL.Fuse GPU",
            "Standalone .exe Export"
        ],
        "photo_uri": thebox_uri,
        "photo_caption": "The Box Museum & Gallery · Plymouth Cultural Anchor 🇬🇧",
        "svg_overlay": """
        <svg viewBox="0 0 360 220" width="100%" height="100%">
          <g transform="translate(180,108)">
            <circle r="84" fill="rgba(200,125,40,0.12)" stroke="#D4882A" stroke-width="2"/>
            <polygon points="0,-78 67,-39 67,39 0,78 -67,39 -67,-39" fill="none" stroke="#0E6BA8" stroke-width="1.8"/>
            <polygon points="39,-67 78,0 39,67 -39,67 -78,0 -39,-67" fill="none" stroke="#C87D28" stroke-width="1.8"/>
            <rect x="-48" y="-48" width="96" height="96" fill="none" stroke="#1B7F69" stroke-width="1.6" transform="rotate(15)"/>
            <rect x="-48" y="-48" width="96" height="96" fill="none" stroke="#FAF7F2" stroke-width="1.4" transform="rotate(45)"/>
            <rect x="-48" y="-48" width="96" height="96" fill="none" stroke="#D4882A" stroke-width="1.6" transform="rotate(75)"/>
            <circle r="22" fill="#0B0F17" stroke="#D4882A" stroke-width="2.5"/>
            <text x="0" y="4" fill="#FAF7F2" font-family="JetBrains Mono" font-size="11" font-weight="700" text-anchor="middle">4V·VL</text>
          </g>
          <rect x="16" y="16" width="98" height="24" rx="5" fill="#0B0F17" stroke="#D4882A" stroke-width="1.5"/>
          <text x="65" y="32" fill="#D4882A" font-family="JetBrains Mono" font-size="10" font-weight="700" text-anchor="middle">12 FOLD GIRIH</text>
          <rect x="242" y="16" width="102" height="24" rx="5" fill="#0B0F17" stroke="#1B7F69" stroke-width="1.5"/>
          <text x="293" y="32" fill="#FAF7F2" font-family="JetBrains Mono" font-size="10" font-weight="700" text-anchor="middle">VL.FUSE 250K</text>
        </svg>
        """
    },
    {
        "filename": "course_04_thumb.png",
        "canva_id": "DAHa7Z3wNn8",
        "num": "04",
        "eyebrow": "MO360 IMMERSIVE LAB · PERVASIVE MEDIA & SENSORS",
        "title": "INTERACTIVE SENSORS & AI BODY TRACKING",
        "subtitle": "MediaPipe AI Hand & Pose Landmarks, LiDAR Depth & OSC to Unreal 5.8 Niagara",
        "venue": "Inspired by Pervasive Media Studio (Watershed, Bristol) & KARST Gallery Plymouth",
        "accent": "#1B7F69",
        "accent_secondary": "#0E6BA8",
        "tag_badge": "AI POSE + LIDAR · 6 WEEKS",
        "pills": [
            "MediaPipe 21 Hand Joints",
            "Filter & Lag CHOP",
            "ESP32 & LiDAR BlobTrack",
            "UE 5.8 Niagara & VL State"
        ],
        "photo_uri": smeaton_uri,
        "photo_caption": "Smeaton's Tower · Plymouth Hoe Interactive Beacon 🇬🇧",
        "svg_overlay": """
        <svg viewBox="0 0 360 220" width="100%" height="100%">
          <!-- Smooth Filter CHOP Curve + Skeleton Nodes -->
          <path d="M 24 165 Q 85 45, 145 120 T 265 70 T 336 135" fill="none" stroke="#1B7F69" stroke-width="3.2"/>
          <path d="M 24 175 Q 90 70, 150 135 T 270 90 T 336 150" fill="none" stroke="#C87D28" stroke-width="2" stroke-dasharray="5 4"/>
          <g fill="#FAF7F2" stroke="#1B7F69" stroke-width="2.5">
            <circle cx="72" cy="94" r="7"/>
            <circle cx="122" cy="102" r="7"/>
            <circle cx="180" cy="64" r="9" fill="#C87D28"/>
            <circle cx="238" cy="96" r="7"/>
            <circle cx="292" cy="82" r="7"/>
          </g>
          <line x1="72" y1="94" x2="122" y2="102" stroke="#FAF7F2" stroke-width="1.8"/>
          <line x1="122" y1="102" x2="180" y2="64" stroke="#FAF7F2" stroke-width="1.8"/>
          <line x1="180" y1="64" x2="238" y2="96" stroke="#FAF7F2" stroke-width="1.8"/>
          <line x1="238" y1="96" x2="292" y2="82" stroke="#FAF7F2" stroke-width="1.8"/>
          <rect x="18" y="16" width="136" height="24" rx="5" fill="#0B0F17" stroke="#1B7F69" stroke-width="1.5"/>
          <text x="86" y="32" fill="#FAF7F2" font-family="JetBrains Mono" font-size="10" font-weight="700" text-anchor="middle">MEDIAPIPE 33 JOINTS</text>
          <rect x="206" y="16" width="136" height="24" rx="5" fill="#0B0F17" stroke="#C87D28" stroke-width="1.5"/>
          <text x="274" y="32" fill="#D4882A" font-family="JetBrains Mono" font-size="10" font-weight="700" text-anchor="middle">OSC UDP PORT 7000</text>
        </svg>
        """
    },
    {
        "filename": "course_05_thumb.png",
        "canva_id": "DAHa7fXkjr0",
        "num": "05",
        "eyebrow": "MO360 IMMERSIVE LAB · SPATIAL AUDIO & NEURO SENSORY ART",
        "title": "SONIC ARTS, 36.4 SPATIAL AUDIO & METASOUNDS",
        "subtitle": "Audio Spectrum CHOP, 36.4 Ambisonic Dome Panning & 19s (4·7·8) Vagal Coherence",
        "venue": "Tailored for Market Hall Spatial Audio Dome & Neurodivergent Safe Sound Baths",
        "accent": "#0E6BA8",
        "accent_secondary": "#D4882A",
        "tag_badge": "36.4 SPATIAL · 6 WEEKS",
        "pills": [
            "Audio Spectrum CHOP",
            "36.4 Ambisonic Panning",
            "136.10 to 432 Hz Chamber",
            "UE 5.8 MetaSounds Sync"
        ],
        "photo_uri": sound_uri,
        "photo_caption": "Plymouth Sound & Devonport Spatial Acoustic Horizon 🇬🇧",
        "svg_overlay": """
        <svg viewBox="0 0 360 220" width="100%" height="100%">
          <!-- 36.4 Spatial Speaker Rings + 4-7-8 Breath Envelope -->
          <circle cx="180" cy="106" r="82" fill="rgba(14,107,168,0.14)" stroke="#0E6BA8" stroke-width="1.8" stroke-dasharray="4 4"/>
          <circle cx="180" cy="106" r="56" fill="rgba(200,125,40,0.14)" stroke="#C87D28" stroke-width="1.8"/>
          <path d="M 30 165 L 95 75 L 210 75 L 330 165" fill="none" stroke="#D4882A" stroke-width="3"/>
          <text x="62" y="112" fill="#FAF7F2" font-family="JetBrains Mono" font-size="10" font-weight="700">4s IN</text>
          <text x="152" y="66" fill="#D4882A" font-family="JetBrains Mono" font-size="10.5" font-weight="700">7s HOLD</text>
          <text x="268" y="112" fill="#FAF7F2" font-family="JetBrains Mono" font-size="10" font-weight="700">8s EXHALE</text>
          <rect x="16" y="16" width="128" height="24" rx="5" fill="#0B0F17" stroke="#0E6BA8" stroke-width="1.5"/>
          <text x="80" y="32" fill="#FAF7F2" font-family="JetBrains Mono" font-size="10" font-weight="700" text-anchor="middle">136.10 · 432 · 528 HZ</text>
          <rect x="216" y="16" width="128" height="24" rx="5" fill="#0B0F17" stroke="#C87D28" stroke-width="1.5"/>
          <text x="280" y="32" fill="#D4882A" font-family="JetBrains Mono" font-size="10" font-weight="700" text-anchor="middle">36.4 DOME ARRAY</text>
        </svg>
        """
    }
]


def build_course_thumb_html(c: dict) -> str:
    assert_zero_dashes(
        c["filename"],
        [c["eyebrow"], c["title"], c["subtitle"], c["venue"], c["tag_badge"], c["photo_caption"]] + c["pills"]
    )
    pills_html = "".join(f'<span class="pill">{p}</span>' for p in c["pills"])
    # Strict 4-side padding on 1600x900: 84px top/bottom (9.3%), 128px left/right (8.0%)
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&family=Space+Grotesk:wght@600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet">
<style>
  * {{ box-sizing: border-box; margin: 0; padding: 0; }}
  body {{
    width: 1600px;
    height: 900px;
    overflow: hidden;
    background: #0B0F17;
    color: #FAF7F2;
    font-family: 'Inter', sans-serif;
    padding: 84px 128px;
    position: relative;
  }}
  body::before {{
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 16% 20%, rgba(200, 125, 40, 0.20), transparent 42%),
      radial-gradient(circle at 84% 78%, rgba(14, 107, 168, 0.22), transparent 45%),
      linear-gradient(rgba(250, 247, 242, 0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(250, 247, 242, 0.025) 1px, transparent 1px);
    background-size: 100% 100%, 100% 100%, 40px 40px, 40px 40px;
  }}
  .frame {{
    width: 100%;
    height: 100%;
    border: 2.5px solid #C87D28;
    border-radius: 20px;
    background: rgba(11, 15, 23, 0.94);
    padding: 34px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    box-shadow: 0 28px 80px rgba(0,0,0,0.7);
  }}
  .corner {{
    position: absolute;
    width: 26px;
    height: 26px;
    border-color: #D4882A;
    border-style: solid;
  }}
  .tl {{ top: -2px; left: -2px; border-width: 5px 0 0 5px; border-top-left-radius: 20px; }}
  .tr {{ top: -2px; right: -2px; border-width: 5px 5px 0 0; border-top-right-radius: 20px; }}
  .bl {{ bottom: -2px; left: -2px; border-width: 0 0 5px 5px; border-bottom-left-radius: 20px; }}
  .br {{ bottom: -2px; right: -2px; border-width: 0 5px 5px 0; border-bottom-right-radius: 20px; }}

  .header {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    border-bottom: 1.5px solid rgba(200, 125, 40, 0.42);
  }}
  .eyebrow {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    font-weight: 700;
    color: #D4882A;
    letter-spacing: 2.4px;
    display: flex;
    align-items: center;
    gap: 10px;
  }}
  .dot {{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: {c["accent"]};
    box-shadow: 0 0 12px {c["accent"]};
  }}
  .canva-pill {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    font-weight: 700;
    color: #FAF7F2;
    background: linear-gradient(135deg, #0E6BA8, #1B7F69);
    padding: 8px 18px;
    border-radius: 24px;
    letter-spacing: 1.2px;
  }}

  .main-split {{
    display: grid;
    grid-template-columns: 1.22fr 0.98fr;
    gap: 34px;
    align-items: center;
    flex: 1;
    margin: 18px 0;
  }}
  .left-col {{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }}
  .badge-row {{
    display: flex;
    align-items: center;
    gap: 16px;
  }}
  .course-num {{
    font-family: 'Syne', sans-serif;
    font-size: 30px;
    font-weight: 800;
    color: #0B0F17;
    background: #C87D28;
    padding: 9px 20px;
    border-radius: 10px;
    line-height: 1;
    white-space: nowrap;
  }}
  .tag-badge {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    font-weight: 700;
    color: #D4882A;
    background: rgba(200, 125, 40, 0.14);
    border: 1.5px solid #C87D28;
    padding: 9px 16px;
    border-radius: 8px;
    letter-spacing: 1.2px;
    white-space: nowrap;
  }}
  h1 {{
    font-family: 'Syne', sans-serif;
    font-size: 38px;
    font-weight: 800;
    line-height: 1.12;
    color: #FAF7F2;
    letter-spacing: 0.4px;
  }}
  .subtitle {{
    font-family: 'Space Grotesk', sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.38;
    color: #E5E0D8;
  }}
  .venue-box {{
    background: #FAF7F2;
    color: #0B0F17;
    padding: 13px 18px;
    border-radius: 10px;
    border-left: 7px solid #C87D28;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 15px;
    font-weight: 700;
  }}
  .pills {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }}
  .pill {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 12.5px;
    font-weight: 700;
    color: #FAF7F2;
    background: #121B2B;
    border: 1.5px solid {c["accent"]};
    padding: 10px 14px;
    border-radius: 8px;
  }}

  .right-col {{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 14px;
  }}
  .diagram-card {{
    background: #0D1422;
    border: 1.5px solid rgba(14, 107, 168, 0.55);
    border-radius: 14px;
    height: 225px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }}
  .photo-card {{
    background: #0D1422;
    border: 1.5px solid rgba(200, 125, 40, 0.55);
    border-radius: 14px;
    overflow: hidden;
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
  }}
  .photo-card img {{
    width: 100%;
    flex: 1;
    min-height: 0;
    object-fit: cover;
    display: block;
  }}
  .photo-cap {{
    padding: 10px 14px;
    background: #0B0F17;
    border-top: 2px solid #C87D28;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    font-weight: 700;
    color: #D4882A;
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
  }}

  .footer {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 14px;
    border-top: 1.5px solid rgba(200, 125, 40, 0.42);
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    color: rgba(250, 247, 242, 0.9);
  }}
  .footer strong {{ color: #D4882A; }}
</style>
</head>
<body>
  <div class="frame">
    <div class="corner tl"></div>
    <div class="corner tr"></div>
    <div class="corner bl"></div>
    <div class="corner br"></div>

    <div class="header">
      <div class="eyebrow"><span class="dot"></span> {c["eyebrow"]}</div>
      <div class="canva-pill">CANVA PRO DESIGN ID · {c["canva_id"]} · PLYMOUTH, UK 🇬🇧</div>
    </div>

    <div class="main-split">
      <div class="left-col">
        <div class="badge-row">
          <div class="course-num">COURSE {c["num"]}</div>
          <div class="tag-badge">{c["tag_badge"]}</div>
        </div>
        <h1>{c["title"]}</h1>
        <div class="subtitle">{c["subtitle"]}</div>
        <div class="venue-box">{c["venue"]}</div>
        <div class="pills">{pills_html}</div>
      </div>

      <div class="right-col">
        <div class="diagram-card">
          {c["svg_overlay"]}
        </div>
        <div class="photo-card">
          <img src="{c["photo_uri"]}" alt="Plymouth Heritage Anchor">
          <div class="photo-cap">
            <span>{c["photo_caption"]}</span>
            <span>STARTER KIT + UK AUDIO</span>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div><strong>MO360 IMMERSIVE STUDIO</strong> · Mohamed Hossam Elwakil · Visual Artist &amp; Creative Technologist</div>
      <div><strong>ENROL &amp; DOWNLOAD:</strong> mo360.uk/immersive-lab · <strong>+44 7568 668918</strong></div>
    </div>
  </div>
</body>
</html>
"""


# Official Creative Coding Plymouth Poster (1600x900)
CCP_POSTER_HTML = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&family=Space+Grotesk:wght@600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet">
<style>
  * {{ box-sizing: border-box; margin: 0; padding: 0; }}
  body {{
    width: 1600px;
    height: 900px;
    overflow: hidden;
    background: #0B0F17;
    color: #FAF7F2;
    font-family: 'Inter', sans-serif;
    padding: 84px 128px;
    position: relative;
  }}
  body::before {{
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 20% 25%, rgba(14, 107, 168, 0.22), transparent 45%),
      radial-gradient(circle at 82% 75%, rgba(200, 125, 40, 0.20), transparent 45%),
      linear-gradient(rgba(250, 247, 242, 0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(250, 247, 242, 0.025) 1px, transparent 1px);
    background-size: 100% 100%, 100% 100%, 40px 40px, 40px 40px;
  }}
  .frame {{
    width: 100%;
    height: 100%;
    border: 2.5px solid #C87D28;
    border-radius: 20px;
    background: rgba(11, 15, 23, 0.94);
    padding: 32px 38px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    box-shadow: 0 28px 80px rgba(0,0,0,0.7);
  }}
  .corner {{
    position: absolute;
    width: 26px;
    height: 26px;
    border-color: #D4882A;
    border-style: solid;
  }}
  .tl {{ top: -2px; left: -2px; border-width: 5px 0 0 5px; border-top-left-radius: 20px; }}
  .tr {{ top: -2px; right: -2px; border-width: 5px 5px 0 0; border-top-right-radius: 20px; }}
  .bl {{ bottom: -2px; left: -2px; border-width: 0 0 5px 5px; border-bottom-left-radius: 20px; }}
  .br {{ bottom: -2px; right: -2px; border-width: 0 5px 5px 0; border-bottom-right-radius: 20px; }}

  .header {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 14px;
    border-bottom: 1.5px solid rgba(200, 125, 40, 0.42);
  }}
  .eyebrow {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    font-weight: 700;
    color: #D4882A;
    letter-spacing: 2.4px;
  }}
  .canva-pill {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    font-weight: 700;
    color: #0B0F17;
    background: #C87D28;
    padding: 7px 16px;
    border-radius: 24px;
  }}

  .main-grid {{
    display: grid;
    grid-template-columns: 310px 1fr 420px;
    gap: 24px;
    align-items: stretch;
    flex: 1;
    margin: 16px 0;
  }}
  .logo-box {{
    background: #0F1624;
    border: 1.5px solid rgba(200, 125, 40, 0.5);
    border-radius: 14px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }}
  .logo-box img {{
    width: 265px;
    height: 265px;
    object-fit: contain;
  }}
  .logo-sub {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: #D4882A;
    text-align: center;
    line-height: 1.45;
  }}

  .center-col {{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }}
  .center-col h1 {{
    font-family: 'Syne', sans-serif;
    font-size: 36px;
    font-weight: 800;
    line-height: 1.1;
    color: #FAF7F2;
  }}
  .center-col h1 span {{ color: #D4882A; }}
  .manifesto {{
    background: #FAF7F2;
    color: #0B0F17;
    padding: 14px 18px;
    border-radius: 12px;
    border-left: 7px solid #C87D28;
    font-size: 13.5px;
    font-weight: 600;
    line-height: 1.45;
  }}
  .photo-strip {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }}
  .p-card {{
    background: #0F1624;
    border: 1px solid rgba(250, 247, 242, 0.2);
    border-radius: 10px;
    overflow: hidden;
  }}
  .p-card img {{
    width: 100%;
    height: 126px;
    object-fit: cover;
    display: block;
  }}
  .p-card div {{
    padding: 6px 10px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10.5px;
    color: #D4882A;
    font-weight: 700;
    background: #0B0F17;
    border-top: 2px solid #0E6BA8;
  }}

  .meetup-col {{
    background: #0F1624;
    border: 1.5px solid #0E6BA8;
    border-radius: 14px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }}
  .m-head {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    font-weight: 700;
    color: #D4882A;
    letter-spacing: 1.5px;
  }}
  .m-item {{
    background: rgba(14, 107, 168, 0.16);
    border-left: 4px solid #C87D28;
    padding: 9px 12px;
    border-radius: 7px;
  }}
  .m-item strong {{
    display: block;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 14px;
    color: #FAF7F2;
  }}
  .m-item span {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 10.5px;
    color: #D4882A;
  }}

  .footer {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 12px;
    border-top: 1.5px solid rgba(200, 125, 40, 0.42);
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    color: rgba(250, 247, 242, 0.9);
  }}
  .footer strong {{ color: #D4882A; }}
</style>
</head>
<body>
  <div class="frame">
    <div class="corner tl"></div>
    <div class="corner tr"></div>
    <div class="corner bl"></div>
    <div class="corner br"></div>

    <div class="header">
      <div class="eyebrow">MO360 IMMERSIVE STUDIO · OFFICIAL COMMUNITY &amp; MEETUP IDENTITY · PLYMOUTH, DEVON, UK 🇬🇧</div>
      <div class="canva-pill">CANVA PRO DESIGN ID · DAHa7bVEgds</div>
    </div>

    <div class="main-grid">
      <div class="logo-box">
        <img src="{logo_uri}" alt="Creative Coding Plymouth Emblem">
        <div class="logo-sub">STUDIO OCHRE #C87D28 · FULLDOME TEAL #0E6BA8 · PERVASIVE EMERALD #1B7F69</div>
      </div>

      <div class="center-col">
        <h1>CREATIVE CODING <span>PLYMOUTH</span></h1>
        <div class="manifesto">
          Monthly Show &amp; Tell nights, beginner node clinics, and fulldome visual jams uniting Plymouth, Market Hall Devonport, KARST, The Box, and Pervasive Media Studio at Watershed Bristol.
        </div>
        <div class="photo-strip">
          <div class="p-card">
            <img src="{smeaton_uri}" alt="Smeaton Tower Plymouth Hoe">
            <div>Smeaton's Tower · Plymouth Hoe 🇬🇧</div>
          </div>
          <div class="p-card">
            <img src="{thebox_uri}" alt="The Box Museum Plymouth">
            <div>The Box · Plymouth Museum &amp; Archive 🇬🇧</div>
          </div>
        </div>
      </div>

      <div class="meetup-col">
        <div class="m-head">MONTHLY MEETUP.COM GATHERINGS</div>
        <div class="m-item">
          <span>01 · FIRST THURSDAY MONTHLY · 18:30 GMT</span>
          <strong>Market Hall 15m Dome Lab · Devonport</strong>
        </div>
        <div class="m-item">
          <span>02 · SECOND TUESDAY MONTHLY · 18:00 GMT</span>
          <strong>Real Ideas Beginner Node Clinic (TD · UE 5.8 · 4V)</strong>
        </div>
        <div class="m-item">
          <span>03 · THIRD FRIDAY MONTHLY · 19:00 GMT</span>
          <strong>KARST &amp; Barbican Live Projection &amp; Shader Jam</strong>
        </div>
        <div class="m-item">
          <span>04 · QUARTERLY REGIONAL EXCHANGE</span>
          <strong>Plymouth to Pervasive Media Studio · Bristol</strong>
        </div>
      </div>
    </div>

    <div class="footer">
      <div><strong>FOUNDER &amp; CURATOR:</strong> Mohamed Hossam Elwakil · Visual Artist, Creative Technologist, Curator &amp; Creative Director</div>
      <div><strong>RSVP &amp; JOIN:</strong> mo360.uk/creative-coding-plymouth · <strong>+44 7568 668918</strong></div>
    </div>
  </div>
</body>
</html>
"""


def main():
    with sync_playwright() as p:
        browser = p.chromium.launch()

        # Render 5 Course Thumbnails (1600x900)
        page = browser.new_page(viewport={"width": 1600, "height": 900}, device_scale_factor=1)
        rendered_uris = {}
        for c in COURSES:
            html = build_course_thumb_html(c)
            page.set_content(html, wait_until="networkidle")
            page.wait_for_timeout(350)
            out_path = THUMBS_DIR / c["filename"]
            page.screenshot(path=str(out_path), full_page=False)
            print(f"Rendered {out_path} ({out_path.stat().st_size} bytes)")
            rendered_uris[c["filename"]] = img_to_data_uri(out_path)

        # Render Creative Coding Plymouth Official Poster (1600x900)
        page.set_content(CCP_POSTER_HTML, wait_until="networkidle")
        page.wait_for_timeout(350)
        ccp_path = THUMBS_DIR / "creative_coding_plymouth_official_poster.png"
        page.screenshot(path=str(ccp_path), full_page=False)
        ccp_copy = CCP_ASSETS_DIR / "creative_coding_plymouth_official_poster.png"
        ccp_copy.write_bytes(ccp_path.read_bytes())
        print(f"Rendered {ccp_path} ({ccp_path.stat().st_size} bytes)")
        rendered_uris["ccp_poster"] = img_to_data_uri(ccp_path)
        page.close()

        # Render Composite 6-Up Canva Pro Showcase Sheet (2400x1440)
        showcase_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&family=JetBrains+Mono:wght@600;700&family=Syne:wght@800&display=swap" rel="stylesheet">
<style>
  * {{ box-sizing: border-box; margin: 0; padding: 0; }}
  body {{
    width: 2400px;
    height: 1440px;
    overflow: hidden;
    background: #0B0F17;
    color: #FAF7F2;
    font-family: 'Inter', sans-serif;
    padding: 96px 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }}
  .top {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 18px;
    border-bottom: 2px solid #C87D28;
  }}
  .top h1 {{
    font-family: 'Syne', sans-serif;
    font-size: 32px;
    font-weight: 800;
    color: #FAF7F2;
  }}
  .top h1 span {{ color: #D4882A; }}
  .top .meta {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 13.5px;
    color: #FAF7F2;
    background: linear-gradient(135deg, #0E6BA8, #1B7F69);
    padding: 10px 20px;
    border-radius: 24px;
    font-weight: 700;
  }}
  .grid {{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 24px;
    flex: 1;
    margin: 22px 0;
  }}
  .card {{
    background: #101726;
    border: 2px solid rgba(200, 125, 40, 0.55);
    border-radius: 14px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }}
  .card img {{
    width: 100%;
    height: 368px;
    object-fit: cover;
    display: block;
  }}
  .card-bar {{
    padding: 10px 14px;
    background: #0D1320;
    border-top: 2px solid #C87D28;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    font-weight: 700;
  }}
  .card-bar span {{ color: #D4882A; }}
  .bot {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 14px;
    border-top: 2px solid rgba(200, 125, 40, 0.45);
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
  }}
  .bot strong {{ color: #D4882A; }}
</style>
</head>
<body>
  <div class="top">
    <div>
      <div style="font-family:'JetBrains Mono',monospace;font-size:13px;color:#D4882A;letter-spacing:2px;margin-bottom:4px;">MO360 IMMERSIVE STUDIO · CANVA PRO &amp; BRITISH EDITORIAL MASTER COLLECTION</div>
      <h1>MO360 IMMERSIVE LAB <span>TOP 5 COURSES</span> &amp; CREATIVE CODING PLYMOUTH</h1>
    </div>
    <div class="meta">CANVA DECK ID: DAHa7VO6dJM · POSTER ID: DAHa7bVEgds · PLYMOUTH, UK 🇬🇧</div>
  </div>

  <div class="grid">
    <div class="card">
      <img src="{rendered_uris['course_01_thumb.png']}" alt="Course 01">
      <div class="card-bar"><div>COURSE 01 · FULLDOME 360° &amp; 180° CINEMA</div><span>CANVA ID: DAHa7V8V7Kc</span></div>
    </div>
    <div class="card">
      <img src="{rendered_uris['course_02_thumb.png']}" alt="Course 02">
      <div class="card-bar"><div>COURSE 02 · PROJECTION MAPPING &amp; LIDAR</div><span>CANVA ID: DAHa7csVF_4</span></div>
    </div>
    <div class="card">
      <img src="{rendered_uris['course_03_thumb.png']}" alt="Course 03">
      <div class="card-bar"><div>COURSE 03 · SACRED GEOMETRY &amp; VVVV 4V</div><span>CANVA ID: DAHa7YxNPUM</span></div>
    </div>
    <div class="card">
      <img src="{rendered_uris['course_04_thumb.png']}" alt="Course 04">
      <div class="card-bar"><div>COURSE 04 · INTERACTIVE SENSORS &amp; AI POSE</div><span>CANVA ID: DAHa7Z3wNn8</span></div>
    </div>
    <div class="card">
      <img src="{rendered_uris['course_05_thumb.png']}" alt="Course 05">
      <div class="card-bar"><div>COURSE 05 · SONIC ARTS &amp; 36.4 SPATIAL AUDIO</div><span>CANVA ID: DAHa7fXkjr0</span></div>
    </div>
    <div class="card">
      <img src="{rendered_uris['ccp_poster']}" alt="Creative Coding Plymouth Poster">
      <div class="card-bar"><div>CREATIVE CODING PLYMOUTH · OFFICIAL POSTER</div><span>CANVA ID: DAHa7bVEgds</span></div>
    </div>
  </div>

  <div class="bot">
    <div><strong>FOUNDER &amp; CURATOR:</strong> Mohamed Hossam Elwakil · Mo360 Immersive Studio · Plymouth, Devon, United Kingdom</div>
    <div><strong>VERIFIED QA:</strong> Strict 4 Side Safe Padding · Studio Ochre #C87D28 · Zero Dashes · +44 7568 668918</div>
  </div>
</body>
</html>
"""
        s_page = browser.new_page(viewport={"width": 2400, "height": 1440}, device_scale_factor=1)
        s_page.set_content(showcase_html, wait_until="networkidle")
        s_page.wait_for_timeout(400)
        showcase_path = PARENT_BRAIN_DIR / "canva_pro_immersive_lab_course_thumbnails.png"
        s_page.screenshot(path=str(showcase_path), full_page=False)
        local_showcase = THUMBS_DIR / "canva_pro_immersive_lab_course_thumbnails.png"
        local_showcase.write_bytes(showcase_path.read_bytes())
        print(f"Rendered showcase {showcase_path} ({showcase_path.stat().st_size} bytes)")
        s_page.close()
        browser.close()


if __name__ == "__main__":
    main()
