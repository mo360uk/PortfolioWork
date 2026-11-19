# Course 05 — Sonic Arts, 3D Spatial Audio & Neuro-Sensory Sound Bath

**Partner / Venue Context:** TAWAF Sanctuary & Market Hall 36.4 Spatial Array

## Included Files
- **TouchDesigner:** `td_course05_spatial_audio_chop_spectrum.py`, `course05_spatial_audio_sonic_performance.tox.json`, `launch_course05_spatial_audio_sonic_performance_td.bat`
- **Unreal Engine 5.8:** `ue58_course05_metasounds_478_breath.py` (Targets `TAWAF.uproject` / `BP_DomeMasterRig`)
- **vvvv gamma (4V):** `vvvv_course05_audio_reactive_spatial.vl`
- **Architecture Graph:** `node_architecture.json`

## Quick Start
1. Double-click `launch_course05_spatial_audio_sonic_performance_td.bat` or paste `td_course05_spatial_audio_chop_spectrum.py` into TouchDesigner Textport.
2. Run inside Unreal Engine 5.8: `UnrealEditor-Cmd.exe "C:\Users\moham\Documents\UnrealProjects\TAWAF\TAWAF.uproject" -ExecutePythonScript="ue58_course05_metasounds_478_breath.py"`
3. Open `vvvv_course05_audio_reactive_spatial.vl` in vvvv gamma 6.5 (ensure listed `VL.*` NuGets are installed).
