# Course 01 — Fulldome 360 & 180-deg Fisheye Cinema Rig

**Partner / Venue Context:** Market Hall Dome Cinema (Devonport, Plymouth)

## Included Files
- **TouchDesigner:** `td_course01_fulldome_rig.py`, `course01_fulldome_180_rig.tox.json`, `launch_course01_fulldome_180_rig_td.bat`
- **Unreal Engine 5.8:** `ue58_course01_domemaster_link.py` (Targets `TAWAF.uproject` / `BP_DomeMasterRig`)
- **vvvv gamma (4V):** `vvvv_course01_domemaster.vl`
- **Architecture Graph:** `node_architecture.json`

## Quick Start
1. Double-click `launch_course01_fulldome_180_rig_td.bat` or paste `td_course01_fulldome_rig.py` into TouchDesigner Textport.
2. Run inside Unreal Engine 5.8: `UnrealEditor-Cmd.exe "C:\Users\moham\Documents\UnrealProjects\TAWAF\TAWAF.uproject" -ExecutePythonScript="ue58_course01_domemaster_link.py"`
3. Open `vvvv_course01_domemaster.vl` in vvvv gamma 6.5 (ensure listed `VL.*` NuGets are installed).
