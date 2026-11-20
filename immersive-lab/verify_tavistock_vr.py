import sys
from playwright.sync_api import sync_playwright

def verify():
    console_errors = []
    page_errors = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Emulate iPad Pro landscape for carer co-view testing
        context = browser.new_context(viewport={"width": 1366, "height": 1024})
        page = context.new_page()

        page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)
        page.on("pageerror", lambda err: page_errors.append(str(err)))

        url = "http://127.0.0.1:8088/immersive-lab/tavistock-heritage-vr.html"
        print(f"Navigating to {url}...")
        res = page.goto(url, wait_until="networkidle")
        print(f"HTTP Status: {res.status}")
        assert res.status == 200, f"Expected status 200, got {res.status}"

        # Wait for scene ready dot and loading veil hidden state
        page.wait_for_selector("#sceneStatusDot.ready", state="visible", timeout=12000)
        page.wait_for_selector("#loadingVeil.hidden", state="attached", timeout=5000)
        print("Scene and Manifest loaded successfully!")

        # Check title and status
        status_text = page.inner_text("#sceneStatusText")
        print(f"Initial Status: {status_text}")

        # Test 1: Landmark Switching
        landmarks = ["pannier_market", "st_eustachius", "canal_wharf", "abbey_ruins"]
        for lm in landmarks:
            btn = page.locator(f".selector-btn[data-landmark='{lm}']")
            btn.click()
            page.wait_for_timeout(800)
            cur_status = page.inner_text("#sceneStatusText")
            print(f"Switched to {lm} -> Status: {cur_status}")

        # Test 2: Visual Mode Switching (Archive B&W -> Sepia -> Living Colour -> Drone Orbit)
        modes = ["sepia", "bw", "drone", "colour"]
        for mode in modes:
            m_btn = page.locator(f".mode-btn[data-mode='{mode}']")
            m_btn.click()
            page.wait_for_timeout(700)
            print(f"Tested visual mode: {mode}")

        # Test 3: Motion Speeds
        for spd in ["0.5", "0", "0.25"]:
            s_btn = page.locator(f".speed-btn[data-speed='{spd}']")
            s_btn.click()
            page.wait_for_timeout(300)
            print(f"Tested motion speed: {spd}x")

        # Test 4: Web Audio Chime & Soundscape toggle
        page.click("#chimeTestBtn")
        page.wait_for_timeout(400)
        page.click("#audioToggleBtn")
        audio_label = page.inner_text("#soundscapeStateLabel")
        print(f"Soundscape toggled: {audio_label}")
        page.click("#audioToggleBtn") # Unmute

        # Test 5: Next Prompt
        initial_prompt = page.inner_text("#narrationText")
        page.click("#nextPromptBtn")
        page.wait_for_timeout(500)
        new_prompt = page.inner_text("#narrationText")
        print(f"Prompt cycled. New prompt snippet: {new_prompt[:45]}...")

        # Test 6: Popovers
        # Hygiene
        page.click("#hygieneBtn")
        assert page.is_visible("#hygienePopover"), "Hygiene popover should be visible"
        page.click("#hygieneCloseBtn") # Close via dedicated close button
        assert not page.is_visible("#hygienePopover"), "Hygiene popover should close"

        # Flow / Drone slot
        page.click("#flowBtn")
        assert page.is_visible("#flowPopover"), "Flow popover should be visible"
        slot_text = page.inner_text("#flowPathBox")
        print(f"Flow Drone Slot: {slot_text}")
        page.click("#flowCloseBtn") # Close via dedicated close button
        assert not page.is_visible("#flowPopover"), "Flow popover should close"

        # Test 7: iPad Co-View Clean Mode Toggle
        page.click("#coViewBtn")
        is_clean = page.evaluate("() => document.body.classList.contains('coview-clean')")
        print(f"Co-View Clean Mode Active: {is_clean}")
        page.click("#coViewBtn") # Restore

        # Take screenshot of final verified state
        screenshot_path = r"C:\Users\moham\.gemini\antigravity\scratch\PortfolioWork\immersive-lab\tavistock-heritage-vr-preview.png"
        page.screenshot(path=screenshot_path)
        print(f"Screenshot saved to: {screenshot_path}")

        browser.close()

    print("\n--- Playwright Verification Summary ---")
    print(f"Console Errors: {len(console_errors)}")
    if console_errors:
        for err in console_errors:
            print(f"  Console Error: {err}")
    print(f"Page Errors: {len(page_errors)}")
    if page_errors:
        for err in page_errors:
            print(f"  Page Error: {err}")

    if len(console_errors) == 0 and len(page_errors) == 0:
        print("VERIFICATION PASSED: 0 console errors, 0 page errors!")
        return 0
    else:
        print("VERIFICATION FAILED with errors.")
        return 1

if __name__ == "__main__":
    sys.exit(verify())
