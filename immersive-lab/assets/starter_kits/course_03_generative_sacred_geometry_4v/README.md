# Course 03 — Generative 3D Sacred Geometry & vvvv gamma (4V) Visual Patching

**Partner / Venue Context:** Creative Coding Plymouth & Mo360 Studio

## Included Files
- **TouchDesigner:** `td_course03_sacred_geometry_instancing.py`, `course03_generative_sacred_geometry_4v.tox.json`, `launch_course03_generative_sacred_geometry_4v_td.bat`
- **Unreal Engine 5.8:** `ue58_course03_niagara_sacred_grid.py` (Targets `TAWAF.uproject` / `BP_DomeMasterRig`)
- **vvvv gamma (4V):** `vvvv_course03_fuse_sdf_geometry.vl`
- **Architecture Graph:** `node_architecture.json`

## Quick Start
1. Double-click `launch_course03_generative_sacred_geometry_4v_td.bat` or paste `td_course03_sacred_geometry_instancing.py` into TouchDesigner Textport.
2. Run inside Unreal Engine 5.8: `UnrealEditor-Cmd.exe "C:\Users\moham\Documents\UnrealProjects\TAWAF\TAWAF.uproject" -ExecutePythonScript="ue58_course03_niagara_sacred_grid.py"`
3. Open `vvvv_course03_fuse_sdf_geometry.vl` in vvvv gamma 6.5 (ensure listed `VL.*` NuGets are installed).
