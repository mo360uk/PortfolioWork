# Course 02 — Architectural Projection Mapping & 3D LiDAR Point Cloud Scanner

**Partner / Venue Context:** Real Ideas (Devonport Guildhall & Ocean Studios)

## Included Files
- **TouchDesigner:** `td_course02_kantan_camschnappr_scanner.py`, `course02_projection_mapping_scanner.tox.json`, `launch_course02_projection_mapping_scanner_td.bat`
- **Unreal Engine 5.8:** `ue58_course02_projection_mesh.py` (Targets `TAWAF.uproject` / `BP_DomeMasterRig`)
- **vvvv gamma (4V):** `vvvv_course02_pointcloud_projector.vl`
- **Architecture Graph:** `node_architecture.json`

## Quick Start
1. Double-click `launch_course02_projection_mapping_scanner_td.bat` or paste `td_course02_kantan_camschnappr_scanner.py` into TouchDesigner Textport.
2. Run inside Unreal Engine 5.8: `UnrealEditor-Cmd.exe "C:\Users\moham\Documents\UnrealProjects\TAWAF\TAWAF.uproject" -ExecutePythonScript="ue58_course02_projection_mesh.py"`
3. Open `vvvv_course02_pointcloud_projector.vl` in vvvv gamma 6.5 (ensure listed `VL.*` NuGets are installed).
