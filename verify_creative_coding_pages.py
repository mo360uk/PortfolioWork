import urllib.request
from pathlib import Path
from playwright.sync_api import sync_playwright
import build_immersive_lab_page

BRAIN_DIR = Path(r"C:\Users\moham\.gemini\antigravity\brain\a3424d21-398b-407c-804a-d411874a7e08")

URLS_TO_CHECK = [
    "/",
    "/index.html",
    "/immersive-lab/",
    "/immersive-lab/index.html",
    "/immersive-lab/tawaf-domemaster-live.html",
    "/immersive-lab/node_institute_touchdesigner_vvvv_study.md",
    "/immersive-lab/assets/courses_curriculum.json",
    "/immersive-lab/assets/audio/narrator_00_academy_welcome.wav",
    "/immersive-lab/assets/audio/narrator_01_fulldome_cinema.wav",
    "/immersive-lab/assets/audio/narrator_02_projection_mapping_scanning.wav",
    "/immersive-lab/assets/audio/narrator_03_generative_3d_vvvv.wav",
    "/immersive-lab/assets/audio/narrator_04_interactive_pervasive_media.wav",
    "/immersive-lab/assets/audio/narrator_05_spatial_audio_sonic_performance.wav",
    "/immersive-lab/assets/starter_kits/course_01_fulldome_180_rig.zip",
    "/immersive-lab/assets/starter_kits/course_02_projection_mapping_scanner.zip",
    "/immersive-lab/assets/starter_kits/course_03_generative_sacred_geometry_4v.zip",
    "/immersive-lab/assets/starter_kits/course_04_interactive_sensors_pervasive.zip",
    "/immersive-lab/assets/starter_kits/course_05_spatial_audio_sonic_performance.zip",
    "/creative-coding-plymouth/",
    "/creative-coding-plymouth/index.html",
    "/assets/creative_coding_plymouth_logo.svg",
    "/assets/creative_coding_plymouth_logo.png",
    "/assets/creative_coding_plymouth_brand_board.png",
    "/assets/mo360_immersive_lab_courses_board.png",
]

def check_url(base: str, path: str) -> int:
    for attempt in range(3):
        try:
            req = urllib.request.Request(
                base + path,
                method="HEAD",
                headers={"User-Agent": "Mozilla/5.0 (Mo360Verifier)"},
            )
            with urllib.request.urlopen(req, timeout=25) as resp:
                return resp.status
        except Exception:
            if attempt == 2:
                raise

def verify_viewport(browser, width: int, height: int, label: str):
    page = browser.new_page(viewport={"width": width, "height": height})
    errors = []
    page.on("pageerror", lambda err: errors.append(str(err)))

    for route, proof_name in [
        ("/immersive-lab/index.html", "immersive_lab_page_proof.png"),
        ("/creative-coding-plymouth/index.html", "creative_coding_plymouth_page_proof.png"),
    ]:
        page.goto(f"http://127.0.0.1:8088{route}", wait_until="networkidle")
        page.wait_for_timeout(400)
        text_body = page.inner_text("body")
        for ch in ["-", "–", "—"]:
            assert ch not in text_body, f"Found forbidden dash '{ch}' in {route}"

        metrics = page.evaluate("""() => ({
            scrollWidth: document.documentElement.scrollWidth,
            innerWidth: window.innerWidth,
            overflow: document.documentElement.scrollWidth - window.innerWidth,
            brokenImgs: Array.from(document.querySelectorAll('img')).filter(i => !i.complete || i.naturalWidth === 0).map(i => i.src)
        })""")
        print(f"[{label} {width}x{height}] {route} -> scrollWidth={metrics['scrollWidth']}, innerWidth={metrics['innerWidth']}, overflow={metrics['overflow']}px, brokenImgs={len(metrics['brokenImgs'])}")
        assert metrics["overflow"] <= 0, f"Horizontal overflow on {route} at {width}x{height}: {metrics['overflow']}px"
        assert len(metrics["brokenImgs"]) == 0, f"Broken images: {metrics['brokenImgs']}"

        if label == "desktop":
            page.screenshot(path=str(BRAIN_DIR / proof_name), full_page=False)

    assert len(errors) == 0, f"Page errors: {errors}"
    page.close()

def main():
    build_immersive_lab_page.build_page()

    for base in ["http://127.0.0.1:8088", "https://unlimited-wrist-yearly-linear.trycloudflare.com"]:
        print(f"=== Checking {base} ===")
        for path in URLS_TO_CHECK:
            code = check_url(base, path)
            assert code == 200, f"Failed {base}{path}: {code}"
        print(f"All {len(URLS_TO_CHECK)} endpoints returned HTTP 200 on {base}!")

    with sync_playwright() as p:
        browser = p.chromium.launch()
        verify_viewport(browser, 1440, 960, "desktop")
        verify_viewport(browser, 390, 844, "mobile")
        browser.close()
        print("Playwright E2E (Desktop 1440x960 + Mobile 390x844) & Zero-Dash Prose Verification: PASS (0 errors)")

if __name__ == "__main__":
    main()
