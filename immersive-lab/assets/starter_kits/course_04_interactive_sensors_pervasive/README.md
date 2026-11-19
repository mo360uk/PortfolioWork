# Course 04 — Interactive Sensors, Body Tracking & Pervasive Media Performance

**Partner / Venue Context:** Pervasive Media Studio (Bristol Watershed) & Real Ideas

## Included Files
- **TouchDesigner:** `td_course04_mediapipe_osc_sensors.py`, `course04_interactive_sensors_pervasive.tox.json`, `launch_course04_interactive_sensors_pervasive_td.bat`
- **Unreal Engine 5.8:** `ue58_course04_osc_interactive_avatar.py` (Targets `TAWAF.uproject` / `BP_DomeMasterRig`)
- **vvvv gamma (4V):** `vvvv_course04_state_machine_tracker.vl`
- **Architecture Graph:** `node_architecture.json`

## Quick Start
1. Double-click `launch_course04_interactive_sensors_pervasive_td.bat` or paste `td_course04_mediapipe_osc_sensors.py` into TouchDesigner Textport.
2. Run inside Unreal Engine 5.8: `UnrealEditor-Cmd.exe "C:\Users\moham\Documents\UnrealProjects\TAWAF\TAWAF.uproject" -ExecutePythonScript="ue58_course04_osc_interactive_avatar.py"`
3. Open `vvvv_course04_state_machine_tracker.vl` in vvvv gamma 6.5 (ensure listed `VL.*` NuGets are installed).
