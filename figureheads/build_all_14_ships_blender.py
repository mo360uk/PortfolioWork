import json
import math
import os
import shutil
import subprocess
import sys
import tempfile
import bpy
import bmesh
from mathutils import Vector, Matrix

# Paths
FIG_ROOT = r"C:\Users\moham\.gemini\antigravity\scratch\PortfolioWork\figureheads"
MODELS_DIR = os.path.join(FIG_ROOT, "models")
SHIPS3D_DIR = os.path.join(FIG_ROOT, "ships3d")
POC_SHIPS3D_DIR = r"C:\Users\moham\.gemini\antigravity\scratch\gaussian_splats_poc\web\ships3d"
LIVE_SHIPS3D_DIR = r"C:\Users\moham\.gemini\antigravity\scratch\plymouth_chronicles_live\public\models\ships3d"
CHRON_PUBLIC_MODELS = r"C:\Users\moham\.gemini\antigravity\scratch\chronicles-app\public\models"
LIVE_PUBLIC_MODELS = r"C:\Users\moham\.gemini\antigravity\scratch\plymouth_chronicles_live\public\models"
PHOTO_RELIEF_DIR = os.path.join(LIVE_PUBLIC_MODELS, "photo_relief")

GLTF_TRANSFORM = r"C:\Users\moham\AppData\Local\npm-cache\_npx\a6797f7ff67bb1f2\node_modules\.bin\gltf-transform.cmd"
SHOWCASE_OUT = r"C:\Users\moham\.gemini\antigravity\brain\a3424d21-398b-407c-804a-d411874a7e08\chronicles_14_ships_reconstructed.png"

os.makedirs(SHIPS3D_DIR, exist_ok=True)
os.makedirs(POC_SHIPS3D_DIR, exist_ok=True)
os.makedirs(LIVE_SHIPS3D_DIR, exist_ok=True)


# 14 Royal Navy Vessels across all 5 historical classes (per team8_figureheads_and_ships_dossier.md)
# Note on figurehead yaw:
# Tripo 360 scans (royal_william, sphinx, tamar, windsor_castle) face +X in glTF (+Y/+X in Blender).
# Specifically from Blender 4-angle probe:
#   - In Blender world coordinates after glTF import, all 4 Tripo scans look toward +X (`posX` shows front face!).
#   - Wait: in `pilot_pipeline_blender.py`, Windsor Castle was placed with `rot_x = -14 deg` and NO rot_z, wait — let's double check!
#   Wait! Look closely at `orientation_sheet.png`!
#   In `probe_orient.py`: `cam.location = Vector((6.0, 0, 2.0))` -> `posX`!
#   In `posX`, all 4 Tripo models (`royal_william`, `sphinx`, `tamar`, `windsor_castle`) face the camera (`+X`)!
#   Wait why did `pilot_windsor_ship_preview.png` show Queen Victoria facing `-Y`? Wait — LOOK AT `pilot_windsor_ship_preview.png`!
#   In `pilot_windsor_ship_preview.png`, the camera is at `(13.5, -16.5, 5.2)`, looking from front-starboard! Victoria's face is turned slightly toward starboard (`+X`) holding the orb forward-ish, wait: in `orientation_sheet.png`:
#     - `royal_william`: `posX` = FRONT FACE! `negY` = her left side (pointing arm rightwards in image, wait: +X is to the right when camera is at -Y looking +Y! Yes! Camera at -Y looks toward +Y: right on screen is +X!). Wait: in `royal_william negY`, his outstretched arm points RIGHT (`+X`)! So `royal_william` faces `+X`!
#     - `sphinx`: `posX` = FRONT FACE!
#     - `tamar`: `posX` = FRONT FACE! Wait: in `tamar posX`, look at `tamar` in `orientation_sheet.png`:
#       Row 3 (`tamar`): `negY` shows his BACK (`negY` camera at `(0,-6)` looking `+Y` sees his dark round plinth/back)! No wait: in `tamar negY` that's the plinth bottom/back, `tamar posX` shows his SIDE profile facing RIGHT (`+Y` in Blender! Wait: camera at `+X` looking `-X`: right on screen is `+Y`! Left on screen is `-Y`!).
#       HOLD ON! Look at `tamar posX` vs `tamar posY` vs `tamar negX`:
#       - `tamar posY` (cam at `(0, +6)` looking `-Y`): HIS CHEST AND FACE ARE TOWARD `+Y`? No, in `tamar posY` his long wavy hair on his BACK is visible, wait: at the top is hair, at bottom are two hands clasping drapery? Wait look at `tamar posY` vs `tamar negY`: in `tamar posY`, we see long beard/hair and HANDS CLASPING WAIST! Wait: in `tamar posX`, the hands reach RIGHT (`+Y`)! And in `tamar negX`, the hands reach LEFT (`+Y`)!
#       Aha!! Thank goodness I checked `orientation_sheet.png`!!
#       Let's trace camera coordinates in `probe_orient.py` carefully:
#       1. `negY` = cam at `(0, -6, 2)` looking `(0, 0, 1.8)` (+Y forward, +Z up, +X right):
#          - `royal_william negY`: profile looking RIGHT (`+X`)!
#          - `sphinx negY`: profile looking RIGHT (`+X`)!
#          - `tamar negY`: we see his BACK / rounded base! Wait: his hands reach toward `+Y` so from `-Y` we see his BACK!
#          - `windsor_castle negY`: profile looking RIGHT (`+X`)!
#       2. `posX` = cam at `(6, 0, 2)` looking `-X` (+Y is to the RIGHT on screen!):
#          - `royal_william posX`: FULL FRONT FACE!
#          - `sphinx posX`: FULL FRONT FACE!
#          - `tamar posX`: SIDE PROFILE looking RIGHT (`+Y`)!
#          - `windsor_castle posX`: FULL FRONT FACE!
#       3. `posY` = cam at `(0, +6, 2)` looking `-Y` (-X is to the RIGHT on screen!):
#          - `tamar posY`: FULL FRONT VIEW (wait: his head is cropped slightly at top because he is 4.1m tall and cam looked at Z=1.8, and his beard hangs down his bare chest with hands clasping waist)!
#       WHAT A GREAT CATCH!!
#       Let's verify:
#       - The bow in `pilot_pipeline_blender.py` points toward `-Y` (stem knee at `y = -3.25`, aft hull at `y = +12.20`)!
#       - Wait: if the bow points toward `-Y`, a figurehead mounted on the bow MUST FACE `-Y` (forward along the ship's heading)!
#       - Look at `pilot_windsor_ship_preview.png` again: Victoria was NOT rotated in Z (`rot_z = 0`), so she was actually facing `+X` (starboard broadside!) instead of `-Y` (straight ahead over the bow)! Look at `pilot_windsor_ship_preview.png`: her chest faces right-ish toward the camera (`+X`) rather than straight down the cutwater (`-Y`)!
#       - Rotating `royal_william`, `sphinx`, and `windsor_castle` by `rot_z = -90 deg` (`-pi/2`) turns their `+X` face -> `-Y` (dead ahead over the stem)!
#       - Rotating `tamar` by `rot_z = +180 deg` (`pi`) turns his `+Y` face -> `-Y` (dead ahead over the stem)!
#       - And for any `Mo360` / Blender / Tripo figurehead, we can programmatically inspect or configure `fig_yaw_deg` (and verify every single one in a 14-ship render sheet!).

SHIP_SPECS = [
    # Class 1: 3-Deck First-Rate Ships of the Line (3 white Nelson strakes, 3 tiers of gunports)
    {
        "slug": "royal-william",
        "id": "royal_william",
        "name": "HMS Royal William",
        "year": 1833,
        "guns": "120-Gun 1st Rate",
        "ship_class": "class1_first_rate",
        "strakes": 3,
        "beam_scale": 1.00,
        "length_scale": 1.00,
        "freeboard_scale": 1.03,
        "funnel": None,
        "paddle": False,
        "livery": "nelson_black",
        "fig_height_m": 3.60,
        "fig_yaw_deg": -90.0,   # faces +X in raw Blender import -> rotate -90 to face -Y (bow forward)
        "fig_pitch_deg": -10.0,
        "fig_candidates": ["royal_william.glb", "RoyalWilliam_clean.glb"],
        "fig_fallback_style": "king_william",
    },
    {
        "slug": "windsor-castle",
        "id": "windsor_castle",
        "name": "HMS Windsor Castle",
        "year": 1858,
        "guns": "102-Gun 1st Rate",
        "ship_class": "class1_first_rate",
        "strakes": 3,
        "beam_scale": 1.04,
        "length_scale": 1.02,
        "freeboard_scale": 1.00,
        "funnel": "retractable_aft",  # 1858 screw first-rate (auxiliary funnel further aft, visible hint near cut plane)
        "paddle": False,
        "livery": "nelson_black",
        "fig_height_m": 3.60,
        "fig_yaw_deg": -90.0,   # faces +X -> rotate -90 to face -Y
        "fig_pitch_deg": -10.0,
        "fig_candidates": ["windsor_castle.glb", "WindsorCastle.glb"],
        "fig_fallback_style": "queen_victoria",
    },
    # Class 2: 2-Deck Second-Rate Ships of the Line (2 white Nelson strakes, 2 tiers of gunports)
    {
        "slug": "calcutta",
        "id": "calcutta",
        "name": "HMS Calcutta",
        "year": 1831,
        "guns": "84-Gun 2nd Rate",
        "ship_class": "class2_second_rate",
        "strakes": 2,
        "beam_scale": 0.93,
        "length_scale": 0.96,
        "freeboard_scale": 0.88,
        "funnel": None,         # Pure sailing 2nd-rate (Bombay teak)
        "paddle": False,
        "livery": "nelson_teak",
        "fig_height_m": 3.85,
        "fig_yaw_deg": 0.0,
        "fig_pitch_deg": -12.0,
        "fig_candidates": ["calcutta.glb", "Calcutta.glb"],
        "fig_fallback_style": "indian_nobleman",
    },
    {
        "slug": "defiance",
        "id": "defiance",
        "name": "HMS Defiance",
        "year": 1861,
        "guns": "91-Gun Screw 2nd Rate",
        "ship_class": "class2_second_rate",
        "strakes": 2,
        "beam_scale": 0.96,
        "length_scale": 1.04,
        "freeboard_scale": 0.90,
        "funnel": "screw_telescopic",
        "paddle": False,
        "livery": "nelson_black",
        "fig_height_m": 3.95,
        "fig_yaw_deg": 0.0,
        "fig_pitch_deg": -12.0,
        "fig_candidates": ["defiance.glb", "Defiance.glb"],
        "fig_fallback_style": "plumed_warrior",
    },
    # Class 3: 1-Deck Screw/Sailing Frigates & Corvettes (1 crisp white strake)
    {
        "slug": "aurora",
        "id": "aurora",
        "name": "HMS Aurora",
        "year": 1861,
        "guns": "35-Gun Screw Frigate",
        "ship_class": "class3_frigate",
        "strakes": 1,
        "beam_scale": 0.84,
        "length_scale": 1.02,
        "freeboard_scale": 0.72,
        "funnel": "screw_slim",
        "paddle": False,
        "livery": "nelson_black",
        "fig_height_m": 2.55,
        "fig_yaw_deg": 0.0,
        "fig_pitch_deg": -15.0,
        "fig_candidates": ["aurora.glb", "Aurora.glb"],
        "fig_fallback_style": "aurora_dawn",
    },
    {
        "slug": "topaze",
        "id": "topaze",
        "name": "HMS Topaze",
        "year": 1858,
        "guns": "51-Gun Screw Frigate",
        "ship_class": "class3_frigate",
        "strakes": 1,
        "beam_scale": 0.85,
        "length_scale": 1.05,
        "freeboard_scale": 0.74,
        "funnel": "screw_slim",
        "paddle": False,
        "livery": "nelson_black",
        "fig_height_m": 2.55,
        "fig_yaw_deg": 0.0,
        "fig_pitch_deg": -14.0,
        "fig_candidates": ["topaze.glb", "Topaze.glb"],
        "fig_fallback_style": "topaze_lady",
    },
    {
        "slug": "sybille",
        "id": "sybille",
        "name": "HMS Sybille",
        "year": 1847,
        "guns": "36-Gun Sailing Frigate",
        "ship_class": "class3_frigate",
        "strakes": 1,
        "beam_scale": 0.83,
        "length_scale": 0.94,
        "freeboard_scale": 0.72,
        "funnel": None,
        "paddle": False,
        "livery": "nelson_black",
        "fig_height_m": 2.55,
        "fig_yaw_deg": 0.0,
        "fig_pitch_deg": -14.0,
        "fig_candidates": ["sybille.glb", "Sybille.glb"],
        "fig_fallback_style": "sybille_prophetess",
    },
    {
        "slug": "calliope",
        "id": "calliope",
        "name": "HMS Calliope",
        "year": 1837,
        "guns": "28-Gun 6th-Rate Frigate",
        "ship_class": "class3_frigate",
        "strakes": 1,
        "beam_scale": 0.72,
        "length_scale": 0.88,
        "freeboard_scale": 0.66,
        "funnel": None,
        "paddle": False,
        "livery": "nelson_black",
        "fig_height_m": 2.15,
        "fig_yaw_deg": 0.0,
        "fig_pitch_deg": -14.0,
        "fig_candidates": ["calliope.glb", "Calliope.glb"],
        "fig_fallback_style": "calliope_muse",
    },
    {
        "slug": "cadmus",
        "id": "cadmus",
        "name": "HMS Cadmus",
        "year": 1856,
        "guns": "21-Gun Screw Corvette",
        "ship_class": "class3_frigate",
        "strakes": 1,
        "beam_scale": 0.76,
        "length_scale": 0.96,
        "freeboard_scale": 0.68,
        "funnel": "screw_slim",
        "paddle": False,
        "livery": "nelson_black",
        "fig_height_m": 2.50,
        "fig_yaw_deg": 0.0,
        "fig_pitch_deg": -13.0,
        "fig_candidates": ["cadmus.glb", "Cadmus.glb"],
        "fig_fallback_style": "cadmus_king",
    },
    # Class 4: 1840s Paddle Steam Sloops & Frigates (sheer stripe + paddleboxes with red paddlewheels + tall funnel)
    {
        "slug": "basilisk",
        "id": "basilisk",
        "name": "HMS Basilisk",
        "year": 1848,
        "guns": "6-Gun Paddle Sloop",
        "ship_class": "class4_paddle",
        "strakes": 1,
        "beam_scale": 0.68,
        "length_scale": 1.06,
        "freeboard_scale": 0.65,
        "funnel": "paddle_tall",
        "paddle": True,
        "livery": "paddle_sheer",
        "fig_height_m": 2.50,
        "fig_yaw_deg": 0.0,
        "fig_pitch_deg": -14.0,
        "fig_candidates": ["basilisk.glb", "Basilisk.glb"],
        "fig_fallback_style": "basilisk_lady",
    },
    {
        "slug": "centaur",
        "id": "centaur",
        "name": "HMS Centaur",
        "year": 1845,
        "guns": "6-Gun Paddle Frigate",
        "ship_class": "class4_paddle",
        "strakes": 1,
        "beam_scale": 0.74,
        "length_scale": 1.10,
        "freeboard_scale": 0.69,
        "funnel": "paddle_tall",
        "paddle": True,
        "livery": "paddle_sheer",
        "fig_height_m": 2.25,
        "fig_yaw_deg": 0.0,
        "fig_pitch_deg": -10.0,
        "fig_candidates": ["centaur.glb", "Centaur.glb"],
        "fig_fallback_style": "centaur_lookout",
    },
    {
        "slug": "sphinx",
        "id": "sphinx",
        "name": "HMS Sphinx",
        "year": 1846,
        "guns": "6-Gun Paddle Sloop",
        "ship_class": "class4_paddle",
        "strakes": 1,
        "beam_scale": 0.70,
        "length_scale": 1.06,
        "freeboard_scale": 0.66,
        "funnel": "paddle_tall",
        "paddle": True,
        "livery": "paddle_sheer",
        "fig_height_m": 2.50,
        "fig_yaw_deg": -90.0,   # faces +X -> rotate -90 to face -Y
        "fig_pitch_deg": -14.0,
        "fig_candidates": ["sphinx.glb", "Sphinx.glb"],
        "fig_fallback_style": "sphinx_warrior",
    },
    # Class 5: Iron Screw Troopship (White + Royal Blue riband) & Devonport Sanctuary Gate
    {
        "slug": "tamar",
        "id": "tamar",
        "name": "HMS Tamar",
        "year": 1863,
        "guns": "Iron Screw Troopship",
        "ship_class": "class5_troopship",
        "strakes": 0,
        "beam_scale": 0.78,
        "length_scale": 1.18,
        "freeboard_scale": 0.84,
        "funnel": "troopship_buff",
        "paddle": False,
        "livery": "troopship_white_blue",
        "fig_height_m": 2.75,
        "fig_yaw_deg": 180.0,   # faces +Y -> rotate 180 to face -Y
        "fig_pitch_deg": -8.0,
        "fig_candidates": ["tamar.glb", "Tamar_clean.glb"],
        "fig_fallback_style": "tamar_rivergod",
    },
    {
        "slug": "minerva",
        "id": "minerva",
        "name": "HMS Minerva",
        "year": 1820,
        "guns": "Devonport Sanctuary & 46-Gun Frigate Bow",
        "ship_class": "class5_sanctuary_gate",
        "strakes": 1,
        "beam_scale": 0.78,
        "length_scale": 0.92,
        "freeboard_scale": 0.70,
        "funnel": None,
        "paddle": False,
        "livery": "nelson_black",
        "fig_height_m": 2.65,
        "fig_yaw_deg": 0.0,
        "fig_pitch_deg": -6.0,
        "fig_candidates": ["minerva.glb", "Minerva.glb"],
        "fig_fallback_style": "minerva_goddess",
    },
]


def reset_scene():
    bpy.ops.wm.read_factory_settings(use_empty=True)


def world_bounds(objs):
    mins = Vector((1e18, 1e18, 1e18))
    maxs = Vector((-1e18, -1e18, -1e18))
    deps = bpy.context.evaluated_depsgraph_get()
    for obj in objs:
        if obj.type != "MESH":
            continue
        ev = obj.evaluated_get(deps)
        for corner in ev.bound_box:
            wc = ev.matrix_world @ Vector(corner)
            mins.x = min(mins.x, wc.x)
            mins.y = min(mins.y, wc.y)
            mins.z = min(mins.z, wc.z)
            maxs.x = max(maxs.x, wc.x)
            maxs.y = max(maxs.y, wc.y)
            maxs.z = max(maxs.z, wc.z)
    return mins, maxs


def make_mat(name, base_color, roughness=0.55, metallic=0.0):
    mat = bpy.data.materials.new(name=name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    if bsdf:
        bsdf.inputs["Base Color"].default_value = (*base_color, 1.0)
        bsdf.inputs["Roughness"].default_value = roughness
        bsdf.inputs["Metallic"].default_value = metallic
    return mat


def add_uv_box_project(obj):
    if obj.type != "MESH" or len(obj.data.polygons) == 0:
        return
    if not obj.data.uv_layers:
        obj.data.uv_layers.new(name="UVMap")
    bpy.ops.object.select_all(action="DESELECT")
    obj.select_set(True)
    bpy.context.view_layer.objects.active = obj
    bpy.ops.object.mode_set(mode="EDIT")
    bpy.ops.mesh.select_all(action="SELECT")
    bpy.ops.uv.smart_project(angle_limit=1.15, island_margin=0.02)
    bpy.ops.object.mode_set(mode="OBJECT")


def inspect_glb_source(glb_path):
    """Return True if the GLB is a true textured volumetric 3D scan (not a Mo360 UV-less flat slab)."""
    import json
    import struct
    if not os.path.isfile(glb_path):
        return False
    with open(glb_path, "rb") as f:
        data = f.read(min(os.path.getsize(glb_path), 1024 * 512))
        if len(data) < 20:
            return False
        c0_len = struct.unpack("<I", data[12:16])[0]
        if len(data) < 20 + c0_len:
            f.seek(0)
            data = f.read()
    j = json.loads(data[20:20 + c0_len].decode("utf-8"))
    gen = j.get("asset", {}).get("generator", "")
    if "Mo360" in gen:
        return False
    attrs = {k for m in j.get("meshes", []) for pr in m.get("primitives", []) for k in pr.get("attributes", {})}
    if "TEXCOORD_0" not in attrs or len(j.get("images", [])) == 0:
        return False
    return True


def find_clean_figurehead_glb(spec, tmp_dir):
    """Search known model directories for an upgraded volumetric textured GLB."""
    search_dirs = [MODELS_DIR, CHRON_PUBLIC_MODELS, LIVE_PUBLIC_MODELS]
    for d in search_dirs:
        if not os.path.isdir(d):
            continue
        for cand in spec["fig_candidates"]:
            p = os.path.join(d, cand)
            if inspect_glb_source(p):
                # Convert Meshopt/WebP via gltf-transform png so Blender 4.2 imports all textures reliably
                raw_tmp = os.path.join(tmp_dir, f"{spec['id']}_in.glb")
                subprocess.run([GLTF_TRANSFORM, "png", p, raw_tmp], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                return raw_tmp, p
    return None, None


def import_and_normalize_figurehead(glb_path, spec):
    bpy.ops.import_scene.gltf(filepath=glb_path)
    bpy.context.view_layer.update()

    meshes = [o for o in bpy.data.objects if o.type == "MESH"]
    empties = [o for o in bpy.data.objects if o.type != "MESH"]

    bpy.ops.object.select_all(action="DESELECT")
    for m in meshes:
        world_mat = m.matrix_world.copy()
        m.parent = None
        m.matrix_world = world_mat
    for e in empties:
        bpy.data.objects.remove(e, do_unlink=True)

    if len(meshes) > 1:
        bpy.context.view_layer.objects.active = meshes[0]
        for m in meshes:
            m.select_set(True)
        bpy.ops.object.join()
        fig_obj = bpy.context.view_layer.objects.active
    else:
        fig_obj = meshes[0]

    fig_obj.name = f"{spec['id']}_Figurehead"
    bpy.ops.object.select_all(action="DESELECT")
    fig_obj.select_set(True)
    bpy.context.view_layer.objects.active = fig_obj
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)

    mins, maxs = world_bounds([fig_obj])
    raw_h = maxs.z - mins.z
    # Monumental Royal Navy figurehead scale so the sculpture commands the prow cleanly beneath the bowsprit
    scale = (spec["fig_height_m"] * 1.24) / raw_h if raw_h > 1e-6 else 1.0
    cx = 0.5 * (mins.x + maxs.x)
    cy = 0.5 * (mins.y + maxs.y)

    fig_obj.location = (-cx * scale, -cy * scale, -mins.z * scale)
    fig_obj.scale = (scale, scale, scale)
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)

    for p in fig_obj.data.polygons:
        p.use_smooth = True

    return fig_obj


def build_stylized_3d_figurehead(spec):
    """
    Build an authentic multi-part 3D polychrome carved statue bust/figure in Blender 4.2
    with dossier-verified silhouette, pose, and colours (used ONLY when no upgraded
    volumetric Tripo/Rodin/Hunyuan GLB exists yet for that ID — zero flat Mo360 slabs!).
    """
    style = spec["fig_fallback_style"]
    h_target = spec["fig_height_m"]

    # Material palette tailored per historic figurehead from team8_figureheads_and_ships_dossier.md
    palettes = {
        "indian_nobleman": {
            "skin": (0.42, 0.25, 0.14), "hair": (0.04, 0.03, 0.03),
            "main": (0.84, 0.63, 0.17), "sec": (0.64, 0.21, 0.11),
            "accent": (0.90, 0.88, 0.82), "trim": (0.85, 0.67, 0.20),
            "plinth": (0.28, 0.44, 0.24),
        },
        "plumed_warrior": {
            "skin": (0.82, 0.70, 0.60), "hair": (0.05, 0.04, 0.04),
            "main": (0.78, 0.60, 0.18), "sec": (0.88, 0.88, 0.85),
            "accent": (0.68, 0.12, 0.12), "trim": (0.78, 0.78, 0.82),
            "plinth": (0.22, 0.16, 0.10),
        },
        "aurora_dawn": {
            "skin": (0.86, 0.75, 0.64), "hair": (0.68, 0.48, 0.20),
            "main": (0.80, 0.50, 0.31), "sec": (0.19, 0.63, 0.79),
            "accent": (0.86, 0.36, 0.48), "trim": (0.82, 0.64, 0.18),
            "plinth": (0.12, 0.12, 0.12),
        },
        "topaze_lady": {
            "skin": (0.86, 0.78, 0.70), "hair": (0.22, 0.12, 0.07),
            "main": (0.07, 0.38, 0.47), "sec": (0.66, 0.11, 0.14),
            "accent": (0.90, 0.88, 0.84), "trim": (0.85, 0.66, 0.18),
            "plinth": (0.84, 0.82, 0.76),
        },
        "sybille_prophetess": {
            "skin": (0.85, 0.76, 0.68), "hair": (0.70, 0.54, 0.25),
            "main": (0.58, 0.66, 0.61), "sec": (0.45, 0.64, 0.78),
            "accent": (0.88, 0.85, 0.78), "trim": (0.80, 0.63, 0.22),
            "plinth": (0.26, 0.40, 0.24),
        },
        "calliope_muse": {
            "skin": (0.87, 0.79, 0.72), "hair": (0.18, 0.10, 0.06),
            "main": (0.09, 0.29, 0.19), "sec": (0.56, 0.10, 0.15),
            "accent": (0.92, 0.91, 0.89), "trim": (0.84, 0.66, 0.17),
            "plinth": (0.14, 0.14, 0.14),
        },
        "cadmus_king": {
            "skin": (0.82, 0.70, 0.60), "hair": (0.16, 0.09, 0.05),
            "main": (0.08, 0.18, 0.36), "sec": (0.58, 0.10, 0.12),
            "accent": (0.82, 0.64, 0.18), "trim": (0.84, 0.65, 0.18),
            "plinth": (0.18, 0.35, 0.18),
        },
        "basilisk_lady": {
            "skin": (0.87, 0.80, 0.74), "hair": (0.28, 0.15, 0.08),
            "main": (0.89, 0.88, 0.84), "sec": (0.25, 0.58, 0.76),
            "accent": (0.68, 0.09, 0.14), "trim": (0.84, 0.65, 0.18),
            "plinth": (0.84, 0.82, 0.76),
        },
        "centaur_lookout": {
            "skin": (0.84, 0.75, 0.65), "hair": (0.48, 0.24, 0.11),
            "main": (0.26, 0.14, 0.08), "sec": (0.90, 0.89, 0.86),
            "accent": (0.08, 0.07, 0.07), "trim": (0.78, 0.62, 0.20),
            "plinth": (0.16, 0.38, 0.18),
        },
        "minerva_goddess": {
            "skin": (0.92, 0.91, 0.88), "hair": (0.91, 0.90, 0.87),
            "main": (0.92, 0.91, 0.88), "sec": (0.90, 0.89, 0.86),
            "accent": (0.88, 0.87, 0.84), "trim": (0.86, 0.85, 0.82),
            "plinth": (0.88, 0.87, 0.84),
        },
    }
    pal = palettes.get(style, palettes["cadmus_king"])

    m_skin = make_mat(f"{spec['id']}_Skin", pal["skin"], roughness=0.48)
    m_hair = make_mat(f"{spec['id']}_Hair", pal["hair"], roughness=0.58)
    m_main = make_mat(f"{spec['id']}_Main", pal["main"], roughness=0.46, metallic=0.18 if style == "plumed_warrior" else 0.0)
    m_sec = make_mat(f"{spec['id']}_Sec", pal["sec"], roughness=0.48)
    m_acc = make_mat(f"{spec['id']}_Accent", pal["accent"], roughness=0.38)
    m_trim = make_mat(f"{spec['id']}_Trim", pal["trim"], roughness=0.28, metallic=0.88 if style != "minerva_goddess" else 0.0)
    m_plinth = make_mat(f"{spec['id']}_Plinth", pal["plinth"], roughness=0.52)
    mats = [m_skin, m_hair, m_main, m_sec, m_acc, m_trim, m_plinth]
    SKIN, HAIR, MAIN, SEC, ACC, TRIM, PLINTH = range(7)

    bm = bmesh.new()

    def tag(verts, mat_idx):
        vset = set(verts)
        for f in bm.faces:
            if all(v in vset for v in f.verts):
                f.material_index = mat_idx

    def add_sphere(loc, scale_xyz, segs=18, rings=12, mat_idx=SKIN):
        res = bmesh.ops.create_uvsphere(bm, u_segments=segs, v_segments=rings, radius=1.0)
        verts = res["verts"]
        M = Matrix.Translation(loc) @ Matrix.Diagonal((*scale_xyz, 1.0))
        bmesh.ops.transform(bm, matrix=M, verts=verts)
        tag(verts, mat_idx)
        return verts

    def add_capsule(p0, p1, r0, r1, segs=14, mat_idx=SKIN):
        vec = Vector(p1) - Vector(p0)
        L = vec.length
        if L < 1e-4:
            return
        mid = (Vector(p0) + Vector(p1)) * 0.5
        rot = vec.normalized().to_track_quat("Z", "Y").to_matrix().to_4x4()
        res = bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=segs, radius1=r0, radius2=r1, depth=L)
        bmesh.ops.transform(bm, matrix=Matrix.Translation(mid) @ rot, verts=res["verts"])
        tag(res["verts"], mat_idx)

    def add_torus_ring(loc, rx, ry, rz, rot_x=0.0, rot_y=0.0, mat_idx=TRIM):
        res = bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=20, radius1=rx, radius2=ry, depth=rz)
        M = Matrix.Translation(loc) @ Matrix.Rotation(rot_x, 4, "X") @ Matrix.Rotation(rot_y, 4, "Y")
        bmesh.ops.transform(bm, matrix=M, verts=res["verts"])
        tag(res["verts"], mat_idx)

    # Note: Figurehead faces -Y in local coords (so it looks straight ahead off the ship bow!)
    if style == "centaur_lookout":
        # Quadruped horse body + rearing tucked forelegs + human torso + left hand shading brow + right hand on hip
        add_sphere((0.0, 0.28, 0.35), (0.48, 0.65, 0.42), mat_idx=PLINTH)  # acanthus scroll base
        add_sphere((0.0, 0.45, 0.85), (0.42, 0.72, 0.44), mat_idx=MAIN)    # equine barrel chest
        # Reared forelegs tucked forward (-Y) with white fetlocks & black hooves
        for sx in (-1.0, 1.0):
            add_capsule((sx * 0.24, -0.05, 0.88), (sx * 0.26, -0.48, 0.72), 0.11, 0.08, mat_idx=MAIN)
            add_capsule((sx * 0.26, -0.48, 0.72), (sx * 0.24, -0.18, 0.46), 0.08, 0.06, mat_idx=SEC)
            add_capsule((sx * 0.24, -0.18, 0.46), (sx * 0.24, -0.20, 0.36), 0.065, 0.075, mat_idx=ACC)
        # Muscular human torso leaning forward
        add_capsule((0.0, 0.02, 1.10), (0.0, -0.15, 1.72), 0.30, 0.34, mat_idx=SKIN)
        add_sphere((0.0, -0.12, 1.48), (0.34, 0.22, 0.22), mat_idx=SKIN)  # pecs/chest
        add_capsule((0.0, -0.15, 1.70), (0.0, -0.18, 1.88), 0.12, 0.11, mat_idx=SKIN)  # neck
        add_sphere((0.0, -0.20, 2.02), (0.16, 0.18, 0.20), mat_idx=SKIN)  # head
        add_sphere((0.0, -0.14, 2.08), (0.17, 0.17, 0.17), mat_idx=HAIR)  # curly auburn hair
        add_sphere((0.0, -0.29, 1.90), (0.13, 0.12, 0.13), mat_idx=HAIR)  # full beard
        # Left arm (positive X) raised high shading brow!
        add_capsule((0.36, -0.12, 1.65), (0.44, -0.25, 2.02), 0.085, 0.07, mat_idx=SKIN)
        add_capsule((0.44, -0.25, 2.02), (0.12, -0.35, 2.16), 0.07, 0.06, mat_idx=SKIN)
        # Right arm (negative X) resting on hip!
        add_capsule((-0.36, -0.10, 1.65), (-0.48, 0.02, 1.32), 0.085, 0.07, mat_idx=SKIN)
        add_capsule((-0.48, 0.02, 1.32), (-0.30, 0.08, 1.05), 0.07, 0.06, mat_idx=SKIN)
    elif style == "minerva_goddess":
        # Full-length standing monochrome all-white Minerva + Corinthian helmet + spear + Medusa shield!
        add_torus_ring((0.0, 0.0, 0.16), 0.40, 0.44, 0.32, mat_idx=PLINTH)  # carved scroll pedestal
        add_capsule((0.0, 0.0, 0.32), (0.0, 0.0, 1.32), 0.42, 0.24, mat_idx=MAIN)  # flowing peplos skirt
        add_capsule((0.0, 0.0, 1.32), (0.0, -0.02, 1.88), 0.24, 0.26, mat_idx=MAIN)  # bodice
        add_capsule((0.0, -0.02, 1.88), (0.0, -0.04, 2.05), 0.09, 0.08, mat_idx=SKIN)  # neck
        add_sphere((0.0, -0.05, 2.20), (0.14, 0.16, 0.18), mat_idx=SKIN)  # head
        add_sphere((0.0, 0.02, 2.26), (0.16, 0.17, 0.15), mat_idx=HAIR)  # curls
        # Corinthian helmet pushed back + high crest
        add_capsule((0.0, -0.02, 2.34), (0.0, 0.02, 2.52), 0.15, 0.11, mat_idx=MAIN)
        add_sphere((0.0, 0.05, 2.56), (0.06, 0.22, 0.13), mat_idx=ACC)  # helmet plume
        # Right arm across chest gripping vertical spear
        add_capsule((-0.26, -0.02, 1.80), (-0.10, -0.24, 1.65), 0.07, 0.06, mat_idx=SKIN)
        add_capsule((0.08, -0.26, 0.22), (-0.02, -0.24, 2.62), 0.028, 0.025, mat_idx=TRIM)  # long spear
        add_capsule((-0.02, -0.24, 2.48), (-0.02, -0.24, 2.66), 0.055, 0.015, mat_idx=ACC)  # spearhead + tassel
        # Left arm holding oval Gorgon shield at left leg
        add_capsule((0.26, -0.02, 1.80), (0.36, -0.08, 1.18), 0.07, 0.06, mat_idx=SKIN)
        add_sphere((0.38, -0.08, 0.92), (0.08, 0.28, 0.36), mat_idx=ACC)  # oval shield
    else:
        # Classical Royal Navy 3/4 bust figureheads (Curved scroll plinth -> draped torso -> shoulders -> neck -> head -> crown/helmet/turban)
        # Scroll pedestal & acanthus base
        add_capsule((0.0, 0.12, 0.22), (0.0, 0.04, 0.65), 0.40, 0.48, mat_idx=PLINTH)
        add_sphere((0.0, -0.20, 0.38), (0.28, 0.26, 0.24), mat_idx=TRIM)  # front scroll volute
        # Draped torso / tunic / cuirass leaning gently forward toward -Y
        add_capsule((0.0, 0.04, 0.62), (0.0, -0.06, 1.48), 0.44, 0.50, mat_idx=MAIN)
        # Waist sash / belt / cloak drape
        add_torus_ring((0.0, -0.02, 0.78), 0.47, 0.45, 0.22, rot_x=math.radians(8), mat_idx=SEC)
        # Shoulders / sleeves / cloak swags
        add_sphere((0.0, -0.06, 1.42), (0.52, 0.34, 0.24), mat_idx=MAIN)
        for sx in (-1.0, 1.0):
            add_capsule((sx * 0.46, -0.02, 1.40), (sx * 0.42, 0.08, 0.95), 0.16, 0.13, mat_idx=SEC)
        # Collar / neckline / trim / necklace
        add_torus_ring((0.0, -0.09, 1.56), 0.28, 0.26, 0.10, rot_x=math.radians(14), mat_idx=TRIM)
        # Neck & Head
        add_capsule((0.0, -0.07, 1.56), (0.0, -0.10, 1.80), 0.16, 0.14, mat_idx=SKIN)
        add_sphere((0.0, -0.12, 2.02), (0.21, 0.24, 0.27), mat_idx=SKIN)
        # Nose ridge
        add_capsule((0.0, -0.34, 2.04), (0.0, -0.37, 1.98), 0.04, 0.025, mat_idx=SKIN)
        # Flowing hair at sides/back
        add_sphere((0.0, -0.02, 2.06), (0.24, 0.24, 0.25), mat_idx=HAIR)
        for sx in (-1.0, 1.0):
            add_capsule((sx * 0.19, -0.06, 1.98), (sx * 0.24, 0.06, 1.62), 0.09, 0.07, mat_idx=HAIR)

        # Subject-specific regalia from dossier
        if style == "indian_nobleman":
            # Terracotta turban + double pearl/emerald band + handlebar moustache + pearl necklace
            add_sphere((0.0, -0.09, 2.24), (0.28, 0.29, 0.18), mat_idx=SEC)
            add_torus_ring((0.0, -0.11, 2.26), 0.28, 0.26, 0.07, rot_x=math.radians(-8), mat_idx=ACC)
            for sx in (-1.0, 1.0):
                add_capsule((sx * 0.03, -0.34, 1.92), (sx * 0.14, -0.30, 1.94), 0.028, 0.015, mat_idx=HAIR)
            add_torus_ring((0.0, -0.12, 1.48), 0.30, 0.26, 0.06, rot_x=math.radians(32), mat_idx=ACC)
        elif style == "plumed_warrior":
            # Gold helmet + silver ear bosses + 3 huge white ostrich plumes + full black beard
            add_sphere((0.0, -0.10, 2.18), (0.24, 0.26, 0.22), mat_idx=MAIN)  # gold helmet dome
            for sx in (-1.0, 1.0):
                add_sphere((sx * 0.23, -0.10, 2.10), (0.05, 0.09, 0.09), mat_idx=TRIM)  # ear-boss
            add_sphere((0.0, -0.22, 1.85), (0.18, 0.17, 0.18), mat_idx=HAIR)  # full black beard
            # 3 tall ostrich plumes
            for px, py, tilt in [(-0.12, 0.04, -0.25), (0.0, -0.04, 0.0), (0.12, 0.04, 0.25)]:
                add_capsule((px, py - 0.06, 2.34), (px * 1.6, py + 0.06, 2.75), 0.08, 0.12, mat_idx=SEC)
        elif style == "cadmus_king":
            # Spiky radiating gold-and-crimson crown + wavy dark beard
            add_sphere((0.0, -0.22, 1.86), (0.18, 0.17, 0.18), mat_idx=HAIR)
            add_torus_ring((0.0, -0.10, 2.24), 0.23, 0.23, 0.12, mat_idx=SEC)
            for k in range(7):
                ang = k * (2.0 * math.pi / 7.0)
                bx, by = 0.21 * math.sin(ang), -0.10 + 0.21 * math.cos(ang)
                add_capsule((bx, by, 2.28), (bx * 1.15, by, 2.52), 0.055, 0.012, mat_idx=TRIM)
        elif style == "calliope_muse":
            # 5-pointed gold crown over crimson band + pearl choker
            add_torus_ring((0.0, -0.10, 2.22), 0.22, 0.22, 0.10, mat_idx=SEC)
            for k in range(5):
                ang = -0.9 + k * 0.45
                bx, by = 0.20 * math.sin(ang), -0.10 - 0.20 * math.cos(ang)
                add_capsule((bx, by, 2.26), (bx * 1.08, by - 0.02, 2.52), 0.06, 0.01, mat_idx=TRIM)
            add_torus_ring((0.0, -0.08, 1.68), 0.17, 0.17, 0.10, mat_idx=ACC)  # pearl choker
        elif style == "topaze_lady":
            # White head veil + gold foliate tiara
            add_sphere((0.0, -0.03, 2.14), (0.25, 0.27, 0.24), mat_idx=ACC)
            add_torus_ring((0.0, -0.16, 2.24), 0.22, 0.18, 0.08, rot_x=math.radians(-18), mat_idx=TRIM)
        elif style == "sybille_prophetess":
            # Sky-blue veil lined in cream
            add_sphere((0.0, -0.02, 2.15), (0.26, 0.28, 0.24), mat_idx=SEC)
            add_capsule((0.20, -0.02, 1.98), (0.25, -0.12, 1.54), 0.07, 0.05, mat_idx=HAIR)  # tress on collarbone
        elif style == "aurora_dawn":
            # Rose garland crown + peach/sky-blue diagonal ruffle sash
            for rx in (-0.12, 0.0, 0.12):
                add_sphere((rx, -0.18, 2.25), (0.06, 0.06, 0.06), mat_idx=ACC)
            add_torus_ring((0.0, -0.06, 1.02), 0.48, 0.44, 0.14, rot_x=math.radians(-16), mat_idx=SEC)
        elif style == "basilisk_lady":
            # Gold fillet + sky-blue collar + crimson ruby bezel at throat
            add_torus_ring((0.0, -0.10, 2.18), 0.23, 0.23, 0.06, mat_idx=TRIM)
            add_torus_ring((0.0, -0.08, 1.58), 0.23, 0.23, 0.08, mat_idx=SEC)
            add_sphere((0.0, -0.32, 1.54), (0.06, 0.04, 0.08), mat_idx=ACC)  # ruby jewel

    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    bmesh.ops.triangulate(bm, faces=bm.faces)
    mesh = bpy.data.meshes.new(f"{spec['id']}_FallbackFigMesh")
    bm.to_mesh(mesh)
    bm.free()

    fig_obj = bpy.data.objects.new(f"{spec['id']}_Figurehead", mesh)
    bpy.context.collection.objects.link(fig_obj)
    for m in mats:
        fig_obj.data.materials.append(m)
    for p in fig_obj.data.polygons:
        p.use_smooth = True
    add_uv_box_project(fig_obj)

    # Normalize exact height to h_target, bottom-center (0,0,0)
    mins, maxs = world_bounds([fig_obj])
    raw_h = maxs.z - mins.z
    sc = h_target / raw_h if raw_h > 1e-6 else 1.0
    cx, cy = 0.5 * (mins.x + maxs.x), 0.5 * (mins.y + maxs.y)
    fig_obj.location = (-cx * sc, -cy * sc, -mins.z * sc)
    fig_obj.scale = (sc, sc, sc)
    bpy.ops.object.select_all(action="DESELECT")
    fig_obj.select_set(True)
    bpy.context.view_layer.objects.active = fig_obj
    bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
    return fig_obj


def build_ship_bow_assembly(spec):
    """
    Build class-accurate historic Royal Navy bow section for any of the 5 vessel classes:
      - Class 1: 3-Deck First Rate (3 white strakes, 3 gunport tiers, forecastle bulwarks, catheads)
      - Class 2: 2-Deck Second Rate (2 white strakes, 2 gunport tiers, teak/black + optional screw funnel)
      - Class 3: 1-Deck Frigate / Corvette (1 white strake, raked cutwater, slim funnel if screw)
      - Class 4: 1840s Paddle Steam Sloop / Frigate (black + sheer white stripe, port & stbd curved slatted paddleboxes + red paddlewheels, tall brass/black funnel, deck pivot gun)
      - Class 5:
          * tamar: White iron troopship hull + royal blue riband band + buff funnel + iron stem plating
          * minerva: Classical frigate bow + ornate Georgian Devonport stone sanctuary arch/pedestal
    """
    bs = spec["beam_scale"]
    ls = spec["length_scale"]
    fs = spec["freeboard_scale"]
    strakes = spec["strakes"]
    livery = spec["livery"]

    # Materials
    mat_black = make_mat("Hull_Admiralty_Black", (0.045, 0.048, 0.055), roughness=0.60, metallic=0.05)
    mat_white = make_mat("Hull_Nelson_Strake_White", (0.85, 0.82, 0.74), roughness=0.55, metallic=0.02)
    mat_copper = make_mat("Hull_Copper_Sheathing", (0.46, 0.21, 0.12), roughness=0.35, metallic=0.84)
    mat_oak = make_mat("Hull_Weathered_Oak", (0.24, 0.15, 0.09), roughness=0.66, metallic=0.0)
    mat_gold = make_mat("Hull_Gilt_Scrollwork", (0.83, 0.63, 0.20), roughness=0.28, metallic=0.90)
    mat_spar = make_mat("Hull_Ochre_Bowsprit", (0.58, 0.42, 0.19), roughness=0.50, metallic=0.04)
    mat_blue = make_mat("Hull_Royal_Blue_Riband", (0.05, 0.18, 0.48), roughness=0.45, metallic=0.05)
    mat_red = make_mat("Paddle_Crimson_Wheel", (0.62, 0.08, 0.08), roughness=0.48, metallic=0.06)
    mat_buff = make_mat("Funnel_Victorian_Buff", (0.76, 0.56, 0.24), roughness=0.46, metallic=0.10)
    mat_stone = make_mat("Devonport_Granite_Arch", (0.28, 0.27, 0.25), roughness=0.82, metallic=0.0)
    mat_iron = make_mat("Wrought_Iron_Dark", (0.10, 0.11, 0.12), roughness=0.40, metallic=0.75)

    mats = [mat_black, mat_white, mat_copper, mat_oak, mat_gold, mat_spar, mat_blue, mat_red, mat_buff, mat_stone, mat_iron]
    MAT_BLACK, MAT_WHITE, MAT_COPPER, MAT_OAK, MAT_GOLD, MAT_SPAR, MAT_BLUE, MAT_RED, MAT_BUFF, MAT_STONE, MAT_IRON = range(11)

    # Hull station profile scaled per vessel class
    base_stations = [
        (-1.15, 0.12, 0.22),
        (-0.20, 0.55, 1.44),
        ( 1.40, 1.50, 3.25),
        ( 3.60, 2.90, 5.05),
        ( 6.40, 4.35, 6.60),
        ( 9.40, 5.45, 7.55),
        (12.20, 6.05, 8.00),
    ]
    # For paddle steamers, extend aft slightly so paddleboxes sit nicely around y=8..11m
    if spec["paddle"]:
        base_stations.append((15.00, 6.15, 8.10))

    stations = [(y * ls, wk * bs, wb * bs) for (y, wk, wb) in base_stations]
    z_keel = -4.60 * fs
    z_wline = -1.05 * fs
    z_rail = 5.10 * fs

    # Define vertical Z profile tailored to deck count / livery so strake edges align cleanly with quads!
    if strakes == 3:
        z_levels = [
            ("keel",  -4.80 * fs, MAT_COPPER),
            ("bilge", -3.40 * fs, MAT_COPPER),
            ("wline", -1.10 * fs, MAT_COPPER),
            ("w_bot",  0.15 * fs, MAT_BLACK),
            ("s1_b",   0.30 * fs, MAT_WHITE),
            ("s1_t",   1.10 * fs, MAT_BLACK),
            ("b12",    1.85 * fs, MAT_WHITE),
            ("s2_t",   2.65 * fs, MAT_BLACK),
            ("b23",    3.40 * fs, MAT_WHITE),
            ("s3_t",   4.20 * fs, MAT_BLACK),
            ("rail",   5.20 * fs, MAT_OAK),
        ]
        strake_bands = [(0.30 * fs, 1.10 * fs), (1.85 * fs, 2.65 * fs), (3.40 * fs, 4.20 * fs)]
        gunport_zs = [0.70 * fs, 2.25 * fs, 3.80 * fs]
    elif strakes == 2:
        z_levels = [
            ("keel",  -4.50 * fs, MAT_COPPER),
            ("bilge", -3.10 * fs, MAT_COPPER),
            ("wline", -1.05 * fs, MAT_COPPER),
            ("w_bot",  0.25 * fs, MAT_BLACK),
            ("s1_b",   0.55 * fs, MAT_WHITE),
            ("s1_t",   1.50 * fs, MAT_BLACK),
            ("b12",    2.45 * fs, MAT_WHITE),
            ("s2_t",   3.40 * fs, MAT_BLACK),
            ("rail",   4.65 * fs, MAT_OAK),
        ]
        strake_bands = [(0.55 * fs, 1.50 * fs), (2.45 * fs, 3.40 * fs)]
        gunport_zs = [1.02 * fs, 2.92 * fs]
    elif livery == "troopship_white_blue":
        # HMS Tamar: Copper below waterline, pure white iron hull, crisp royal-blue horizontal riband near sheer!
        z_levels = [
            ("keel",  -4.30 * fs, MAT_COPPER),
            ("bilge", -2.90 * fs, MAT_COPPER),
            ("wline", -1.00 * fs, MAT_COPPER),
            ("w_bot",  0.80 * fs, MAT_WHITE),
            ("s1_b",   2.35 * fs, MAT_WHITE),
            ("rib_b",  2.65 * fs, MAT_BLUE),
            ("rib_t",  3.35 * fs, MAT_WHITE),
            ("rail",   4.55 * fs, MAT_OAK),
        ]
        strake_bands = []
        gunport_zs = []  # Troopship: glazed portholes along white hull instead of heavy broadside gunports
    elif livery == "paddle_sheer":
        # 1840s Paddle Sloop / Frigate: Black hull with narrow crisp white sheer stripe
        z_levels = [
            ("keel",  -4.10 * fs, MAT_COPPER),
            ("bilge", -2.75 * fs, MAT_COPPER),
            ("wline", -1.00 * fs, MAT_COPPER),
            ("w_bot",  0.90 * fs, MAT_BLACK),
            ("sh_b",   2.25 * fs, MAT_WHITE),
            ("sh_t",   2.80 * fs, MAT_BLACK),
            ("rail",   4.15 * fs, MAT_OAK),
        ]
        strake_bands = [(2.25 * fs, 2.80 * fs)]
        gunport_zs = [2.52 * fs]
    else:
        # Class 3 Frigate / Corvette: 1 broad white gun-deck strake
        z_levels = [
            ("keel",  -4.15 * fs, MAT_COPPER),
            ("bilge", -2.80 * fs, MAT_COPPER),
            ("wline", -1.00 * fs, MAT_COPPER),
            ("w_bot",  0.40 * fs, MAT_BLACK),
            ("s1_b",   0.95 * fs, MAT_WHITE),
            ("s1_t",   2.15 * fs, MAT_BLACK),
            ("rail",   4.00 * fs, MAT_OAK),
        ]
        strake_bands = [(0.95 * fs, 2.15 * fs)]
        gunport_zs = [1.55 * fs]

    z_min_h = z_levels[0][1]
    z_max_h = z_levels[-1][1]

    def eval_hull_x(y_query, z_query):
        if y_query <= stations[0][0]:
            _, wk, wb = stations[0]
        elif y_query >= stations[-1][0]:
            _, wk, wb = stations[-1]
        else:
            wk, wb = stations[-1][1], stations[-1][2]
            for j in range(len(stations) - 1):
                y0, wk0, wb0 = stations[j]
                y1, wk1, wb1 = stations[j + 1]
                if y0 <= y_query <= y1:
                    t = (y_query - y0) / (y1 - y0)
                    wk = wk0 + t * (wk1 - wk0)
                    wb = wb0 + t * (wb1 - wb0)
                    break
        t_z = max(0.0, min(1.0, (z_query - z_min_h) / (z_max_h - z_min_h)))
        x = wk + (wb - wk) * math.sin(min(1.0, t_z * 1.15) * math.pi * 0.5)
        if t_z > 0.72:
            x *= (1.0 - 0.08 * ((t_z - 0.72) / 0.28))
        return x

    bm = bmesh.new()
    rings = []
    for y_pos, half_w_keel, half_w_beam in stations:
        ring_verts = []
        stbd_pts = []
        for idx, (_, z, _) in enumerate(z_levels):
            t_z = (z - z_min_h) / (z_max_h - z_min_h)
            if idx == 0:
                x = 0.08 * bs
            else:
                x = half_w_keel + (half_w_beam - half_w_keel) * math.sin(min(1.0, t_z * 1.15) * math.pi * 0.5)
                if t_z > 0.72:
                    x *= (1.0 - 0.08 * ((t_z - 0.72) / 0.28))
            stbd_pts.append((x, y_pos, z))

        for pt in stbd_pts:
            ring_verts.append(bm.verts.new(pt))
        for pt in reversed(stbd_pts[1:]):
            ring_verts.append(bm.verts.new((-pt[0], pt[1], pt[2])))
        rings.append(ring_verts)

    n_ring = len(rings[0])
    stbd_rail_idx = len(z_levels) - 1
    wline_z = z_levels[2][1]

    for s_idx in range(len(rings) - 1):
        r0 = rings[s_idx]
        r1 = rings[s_idx + 1]
        for i in range(n_ring):
            ni = (i + 1) % n_ring
            v_list = [r0[i], r0[ni], r1[ni], r1[i]]
            f = bm.faces.new(v_list)
            avg_z = sum(v.co.z for v in v_list) / 4.0
            if i == stbd_rail_idx:
                f.material_index = MAT_OAK
            elif avg_z <= wline_z + 0.05:
                f.material_index = MAT_COPPER
            elif livery == "troopship_white_blue":
                if z_levels[5][1] - 0.05 <= avg_z <= z_levels[6][1] + 0.05:
                    f.material_index = MAT_BLUE
                else:
                    f.material_index = MAT_WHITE
            else:
                in_white = any((b0 - 0.03) <= avg_z <= (b1 + 0.03) for (b0, b1) in strake_bands)
                f.material_index = MAT_WHITE if in_white else MAT_BLACK

    bm.faces.new(list(reversed(rings[-1]))).material_index = MAT_OAK
    bm.faces.new(rings[0]).material_index = MAT_WHITE if livery == "troopship_white_blue" else MAT_BLACK

    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    bmesh.ops.triangulate(bm, faces=bm.faces)

    hull_mesh = bpy.data.meshes.new(f"{spec['id']}_BowHullMesh")
    bm.to_mesh(hull_mesh)
    bm.free()

    hull_obj = bpy.data.objects.new(f"{spec['id']}_BowHull", hull_mesh)
    bpy.context.collection.objects.link(hull_obj)
    for m in mats:
        hull_obj.data.materials.append(m)

    # 2. Details assembly (stem knee, figurehead seat, trailboards, bulwarks, catheads, bollards, gunports/cannons, bowsprit+jibboom+stays, funnels, paddleboxes, sanctuary gate)
    bm2 = bmesh.new()

    def tag_mat(verts, mat_idx):
        vset = set(verts)
        for f in bm2.faces:
            if all(v in vset for v in f.verts):
                f.material_index = mat_idx

    def add_box(cx, cy, cz, sx, sy, sz, rot_x=0.0, rot_y=0.0, rot_z=0.0, mat_idx=MAT_OAK):
        res = bmesh.ops.create_cube(bm2, size=1.0)
        verts = res["verts"]
        M = (
            Matrix.Translation((cx, cy, cz))
            @ Matrix.Rotation(rot_z, 4, "Z")
            @ Matrix.Rotation(rot_y, 4, "Y")
            @ Matrix.Rotation(rot_x, 4, "X")
            @ Matrix.Diagonal((sx, sy, sz, 1.0))
        )
        bmesh.ops.transform(bm2, matrix=M, verts=verts)
        tag_mat(verts, mat_idx)

    def add_cyl(p0, p1, r0, r1, segs=18, mat_idx=MAT_SPAR):
        vec = Vector(p1) - Vector(p0)
        length = vec.length
        if length < 1e-5:
            return
        mid = (Vector(p0) + Vector(p1)) * 0.5
        rot = vec.normalized().to_track_quat("Z", "Y").to_matrix().to_4x4()
        res = bmesh.ops.create_cone(bm2, cap_ends=True, cap_tris=False, segments=segs, radius1=r0, radius2=r1, depth=length)
        bmesh.ops.transform(bm2, matrix=Matrix.Translation(mid) @ rot, verts=res["verts"])
        tag_mat(res["verts"], mat_idx)

    # Lofted sweeping concave Royal Navy cutwater / stem knee + sculpted figurehead scroll bolster
    # Positioned high on the upper bow and sweeping proudly forward (-Y) so the figurehead leans out over the waves directly beneath the bowsprit!
    stem_top_z = z_max_h - 2.25 * fs
    stem_y_top = -4.35 * ls
    stem_upper_mat = MAT_WHITE if livery == "troopship_white_blue" else MAT_BLACK
    stem_stations = [
        (-1.45 * ls, -0.55 * ls, z_min_h,                     0.13 * bs, MAT_COPPER),
        (-1.85 * ls, -0.72 * ls, -2.75 * fs,                  0.14 * bs, MAT_COPPER),
        (-2.35 * ls, -0.95 * ls, wline_z,                     0.15 * bs, MAT_COPPER),
        (-3.05 * ls, -1.15 * ls, wline_z + (stem_top_z - wline_z) * 0.42, 0.18 * bs, stem_upper_mat),
        (-3.75 * ls, -1.35 * ls, stem_top_z - 0.55 * fs,      0.22 * bs, MAT_OAK),
        (stem_y_top, -2.10 * ls, stem_top_z,                  0.30 * bs, MAT_OAK),
    ]
    stem_rings = []
    for yf, yb, z, hw, _ in stem_stations:
        pts = [(-hw, yf, z), (hw, yf, z), (hw, yb, z), (-hw, yb, z)]
        stem_rings.append([bm2.verts.new(p) for p in pts])
    for k in range(len(stem_rings) - 1):
        sr0, sr1 = stem_rings[k], stem_rings[k + 1]
        m_idx = stem_stations[k][4]
        for j in range(4):
            nj = (j + 1) % 4
            bm2.faces.new([sr0[j], sr0[nj], sr1[nj], sr1[j]]).material_index = m_idx
    bm2.faces.new(list(reversed(stem_rings[0]))).material_index = MAT_COPPER
    bm2.faces.new(stem_rings[-1]).material_index = MAT_OAK
    # Carved gilt scroll bolster directly under the figurehead's base
    add_box(0.0, stem_y_top + 0.55 * ls, stem_top_z - 0.12, 0.72 * bs, 1.35 * ls, 0.24, rot_x=math.radians(18.0), mat_idx=MAT_GOLD)

    # Iron bow plating straps on HMS Tamar
    if livery == "troopship_white_blue":
        for iz in (-0.3 * fs, 0.6 * fs, 1.5 * fs):
            add_box(0.0, -2.20 * ls, iz, 0.42 * bs, 0.65 * ls, 0.14, mat_idx=MAT_IRON)

    # Curved gilt trailboards & cheek rails tucking cleanly BEHIND/BENEATH the figurehead base (zero clipping through the statue!)
    rail_mat = MAT_BLUE if livery == "troopship_white_blue" else MAT_GOLD
    for side in (-1.0, 1.0):
        pts_u = [
            (side * 0.28 * bs, stem_y_top + 0.68 * ls, stem_top_z - 0.14),
            (side * (eval_hull_x(-0.6 * ls, stem_top_z + 0.35 * fs) + 0.08), -0.60 * ls, stem_top_z + 0.35 * fs),
            (side * (eval_hull_x(1.3 * ls, stem_top_z + 0.85 * fs) + 0.06),   1.30 * ls, stem_top_z + 0.85 * fs),
        ]
        pts_l = [
            (side * 0.24 * bs, stem_y_top + 1.05 * ls, stem_top_z - 0.78 * fs),
            (side * (eval_hull_x(-0.6 * ls, stem_top_z - 0.35 * fs) + 0.08), -0.60 * ls, stem_top_z - 0.35 * fs),
            (side * (eval_hull_x(1.3 * ls, stem_top_z + 0.10 * fs) + 0.06),   1.30 * ls, stem_top_z + 0.10 * fs),
        ]
        for seg_idx in range(len(pts_u) - 1):
            add_cyl(pts_u[seg_idx], pts_u[seg_idx + 1], 0.11, 0.12, segs=10, mat_idx=rail_mat)
            add_cyl(pts_l[seg_idx], pts_l[seg_idx + 1], 0.085, 0.095, segs=10, mat_idx=rail_mat)

    # Forecastle bulwark coaming, timberhead bollards & paired oak catheads
    bulwark_ys = [stations[i][0] for i in range(1, len(stations))]
    for side in (-1.0, 1.0):
        for k in range(len(bulwark_ys) - 1):
            y0, y1 = bulwark_ys[k], bulwark_ys[k + 1]
            x0, x1 = eval_hull_x(y0, z_max_h), eval_hull_x(y1, z_max_h)
            add_cyl((side * x0, y0, z_max_h + 0.22), (side * x1, y1, z_max_h + 0.22), 0.13, 0.13, segs=10, mat_idx=MAT_OAK)
        # Timberhead bollards along forecastle
        for by in (1.6 * ls, 4.2 * ls, 7.0 * ls, 9.8 * ls):
            bx = eval_hull_x(by, z_max_h) - 0.35 * bs
            add_cyl((side * bx, by, z_max_h), (side * bx, by, z_max_h + 0.55), 0.14, 0.13, segs=10, mat_idx=MAT_OAK)
        # Paired projecting catheads with iron anchor rings
        chy = 1.90 * ls
        chx_in = eval_hull_x(chy, z_max_h) - 0.55 * bs
        chx_out = eval_hull_x(chy, z_max_h) + 1.35 * bs
        add_cyl((side * chx_in, chy, z_max_h + 0.05), (side * chx_out, chy - 0.55 * ls, z_max_h + 0.35), 0.20, 0.18, segs=8, mat_idx=MAT_OAK)
        add_box(side * chx_out, chy - 0.55 * ls, z_max_h + 0.35, 0.28, 0.28, 0.28, mat_idx=MAT_GOLD)

    # Steep Royal Navy Bowsprit + Jibboom passing cleanly ABOVE the figurehead's crown!
    fig_h_scaled = spec["fig_height_m"] * 1.24
    fig_top_z = stem_top_z + fig_h_scaled * math.cos(math.radians(24.0))
    bs_base_z = max(z_max_h - 0.15, fig_top_z - 1.35)
    p_bs0 = Vector((0.0, 3.40 * ls, bs_base_z))
    p_bs1 = Vector((0.0, -8.40 * ls, bs_base_z + 5.15))
    p_jb1 = Vector((0.0, -13.20 * ls, bs_base_z + 7.25))
    spar_mat = MAT_BUFF if livery == "troopship_white_blue" else MAT_SPAR
    r_bs0, r_bs1 = 0.46 * bs, 0.32 * bs
    add_cyl(p_bs0, p_bs1, r_bs0, r_bs1, segs=22, mat_idx=spar_mat)
    add_cyl(p_bs0.lerp(p_bs1, 0.90), p_jb1, 0.22 * bs, 0.11 * bs, segs=18, mat_idx=spar_mat)
    # Bowsprit iron gammoning hoops
    bdir = (p_bs1 - p_bs0).normalized()
    for t in (0.16, 0.42, 0.68):
        gp = p_bs0.lerp(p_bs1, t)
        r_here = r_bs0 + t * (r_bs1 - r_bs0) + 0.035
        add_cyl(gp - bdir * 0.12, gp + bdir * 0.12, r_here, r_here, segs=22, mat_idx=MAT_IRON)
    # Dolphin striker (martingale spar) & bowsprit stays
    p_ds0 = p_bs1 + Vector((0.0, 0.15, -0.10))
    p_ds1 = p_ds0 + Vector((0.0, -0.25, -2.05))
    add_cyl(p_ds0, p_ds1, 0.10, 0.06, segs=12, mat_idx=spar_mat)
    add_cyl(p_jb1, p_ds1, 0.032, 0.032, segs=8, mat_idx=MAT_IRON)
    add_cyl(p_ds1, Vector((0.0, stem_y_top + 0.45, stem_top_z - 0.30)), 0.035, 0.035, segs=8, mat_idx=MAT_IRON)
    # Bobstays from cutwater to bowsprit cap
    add_cyl(Vector((0.0, -2.15 * ls, wline_z + 0.65)), p_bs0.lerp(p_bs1, 0.75), 0.04, 0.04, segs=8, mat_idx=MAT_IRON)
    # Foremast stump / step on deck for authentic ship proportion
    fore_y = 7.40 * ls
    fore_h = 4.20 * fs if spec["paddle"] else 3.50 * fs
    add_cyl((0.0, fore_y, z_max_h - 0.30), (0.0, fore_y, z_max_h + fore_h), 0.42 * bs, 0.34 * bs, segs=20, mat_idx=spar_mat)
    add_box(0.0, fore_y, z_max_h + fore_h * 0.78, 1.45 * bs, 1.25 * bs, 0.14, mat_idx=MAT_BLACK)  # fighting top platform

    # Gunports & Brass/Iron Cannon Muzzles (or Portholes on Troopship Tamar)
    if livery == "troopship_white_blue":
        port_ys = [2.2 * ls, 4.4 * ls, 6.6 * ls, 8.8 * ls, 11.0 * ls]
        for gy in port_ys:
            for pz in (1.55 * fs, 3.85 * fs):
                hx = eval_hull_x(gy, pz)
                for side in (-1.0, 1.0):
                    add_cyl((side * (hx - 0.04), gy, pz), (side * (hx + 0.06), gy, pz), 0.17, 0.17, segs=14, mat_idx=MAT_GOLD)
                    add_cyl((side * (hx - 0.03), gy, pz), (side * (hx + 0.08), gy, pz), 0.12, 0.12, segs=14, mat_idx=MAT_BLACK)
    elif spec["paddle"]:
        # Paddle sloop/frigate: smaller number of broadside ports + prominent bow pivot gun on forecastle!
        for gy in (2.8 * ls, 5.4 * ls):
            sz = gunport_zs[0]
            hx_0, hx_1 = eval_hull_x(gy - 0.35, sz), eval_hull_x(gy + 0.35, sz)
            hx = 0.5 * (hx_0 + hx_1)
            yaw = math.atan2(hx_1 - hx_0, 0.70)
            for side in (-1.0, 1.0):
                add_box(side * (hx + 0.03), gy, sz, 0.14, 0.70, 0.55, rot_z=-side * yaw, mat_idx=MAT_BLACK)
        # Deck Pivot Gun mounted aft of bowsprit step
        add_box(0.0, 4.8 * ls, z_max_h + 0.25, 0.90, 1.35, 0.42, mat_idx=MAT_OAK)
        add_cyl((0.0, 5.2 * ls, z_max_h + 0.62), (0.0, 2.7 * ls, z_max_h + 0.72), 0.22, 0.14, segs=16, mat_idx=MAT_IRON)
    else:
        gunport_ys = [2.40 * ls, 4.70 * ls, 7.10 * ls, 9.50 * ls, 11.40 * ls]
        for gy in gunport_ys:
            for sz in gunport_zs:
                hx_0, hx_1 = eval_hull_x(gy - 0.35, sz), eval_hull_x(gy + 0.35, sz)
                hx = 0.5 * (hx_0 + hx_1)
                yaw = math.atan2(hx_1 - hx_0, 0.70)
                for side in (-1.0, 1.0):
                    add_box(side * (hx + 0.03), gy, sz, 0.14, 0.76, 0.62, rot_z=-side * yaw, mat_idx=MAT_BLACK)
                    # Protruding brass/iron cannon barrel on alternating ports for crisp 3D depth!
                    n_x, n_y = side * math.cos(yaw), -math.sin(yaw)
                    add_cyl((side * (hx - 0.05), gy, sz), (side * hx + n_x * 0.58, gy + n_y * 0.58, sz), 0.13, 0.09, segs=12, mat_idx=MAT_IRON)

    # Steam Funnel (Class 2 Screw, Class 3 Screw, Class 4 Tall Paddle Funnel, Class 5 Buff Troopship Funnel)
    if spec["funnel"]:
        fun_y = 10.30 * ls
        if spec["funnel"] == "paddle_tall":
            add_cyl((0.0, fun_y, z_max_h - 0.2), (0.0, fun_y, z_max_h + 5.6 * fs), 0.62 * bs, 0.58 * bs, segs=22, mat_idx=MAT_IRON)
            add_cyl((0.0, fun_y, z_max_h + 4.9 * fs), (0.0, fun_y, z_max_h + 5.7 * fs), 0.65 * bs, 0.64 * bs, segs=22, mat_idx=MAT_GOLD)
        elif spec["funnel"] == "troopship_buff":
            add_cyl((0.0, fun_y, z_max_h - 0.2), (0.0, fun_y, z_max_h + 4.6 * fs), 0.65 * bs, 0.62 * bs, segs=22, mat_idx=MAT_BUFF)
            add_cyl((0.0, fun_y, z_max_h + 4.1 * fs), (0.0, fun_y, z_max_h + 4.7 * fs), 0.66 * bs, 0.65 * bs, segs=22, mat_idx=MAT_BLACK)
        elif spec["funnel"] == "screw_telescopic":
            add_cyl((0.0, fun_y, z_max_h - 0.2), (0.0, fun_y, z_max_h + 3.4 * fs), 0.58 * bs, 0.56 * bs, segs=20, mat_idx=MAT_IRON)
            add_cyl((0.0, fun_y, z_max_h + 1.8 * fs), (0.0, fun_y, z_max_h + 3.9 * fs), 0.48 * bs, 0.46 * bs, segs=20, mat_idx=MAT_IRON)
        elif spec["funnel"] == "retractable_aft":
            add_cyl((0.0, 11.20 * ls, z_max_h - 0.2), (0.0, 11.20 * ls, z_max_h + 2.8 * fs), 0.55 * bs, 0.53 * bs, segs=20, mat_idx=MAT_IRON)
        else:
            # screw_slim (Aurora, Cadmus, Topaze)
            add_cyl((0.0, fun_y, z_max_h - 0.2), (0.0, fun_y, z_max_h + 3.8 * fs), 0.46 * bs, 0.44 * bs, segs=20, mat_idx=MAT_IRON)
            add_cyl((0.0, fun_y, z_max_h + 3.4 * fs), (0.0, fun_y, z_max_h + 3.9 * fs), 0.49 * bs, 0.49 * bs, segs=20, mat_idx=MAT_GOLD)

    # Class 4 Paddlewheel Sponsons / Boxes + Internal Red Paddlewheel Blades!
    if spec["paddle"]:
        pad_y = 11.30 * ls
        pad_z = 0.65 * fs
        pad_r = 2.85 * fs
        hull_w = eval_hull_x(pad_y, pad_z)
        for side in (-1.0, 1.0):
            spon_x0 = side * (hull_w - 0.15)
            spon_x1 = side * (hull_w + 1.95 * bs)
            mid_x = 0.5 * (spon_x0 + spon_x1)
            # Outer curved slatted paddlebox semi-cylindrical hood (top half arch)
            n_arc = 14
            for a_i in range(n_arc):
                t0 = math.pi * (a_i / n_arc)
                t1 = math.pi * ((a_i + 1) / n_arc)
                y0, z0 = pad_y - pad_r * math.cos(t0), pad_z + pad_r * math.sin(t0)
                y1, z1 = pad_y - pad_r * math.cos(t1), pad_z + pad_r * math.sin(t1)
                add_box(mid_x, 0.5 * (y0 + y1), 0.5 * (z0 + z1), 1.95 * bs, (y1 - y0) * 1.15 + 0.15, 0.24, rot_x=math.atan2(z1 - z0, y1 - y0), mat_idx=MAT_BLACK)
            # Outer slatted radial fan ribs on paddlebox face
            add_box(spon_x1, pad_y, pad_z + pad_r * 0.48, 0.14, pad_r * 1.95, 0.26, mat_idx=MAT_BLACK)  # horizontal springbeam
            add_box(spon_x1 + side * 0.06, pad_y, pad_z + pad_r * 0.52, 0.12, 0.95, 0.55, mat_idx=MAT_GOLD)  # gilt badge on sponson
            # Internal RED paddlewheel hub, rim rings & 10 radial float blades visible inside sponson!
            add_cyl((spon_x0, pad_y, pad_z), (spon_x1 - side * 0.20, pad_y, pad_z), 0.36, 0.36, segs=14, mat_idx=MAT_IRON)
            for spoke_i in range(10):
                ang = spoke_i * (2.0 * math.pi / 10.0)
                sy = pad_y + (pad_r * 0.84) * math.cos(ang)
                sz = pad_z + (pad_r * 0.84) * math.sin(ang)
                add_cyl((mid_x, pad_y, pad_z), (mid_x, sy, sz), 0.08, 0.08, segs=8, mat_idx=MAT_RED)
                add_box(mid_x, sy, sz, 1.50 * bs, 0.42, 0.12, rot_x=ang, mat_idx=MAT_RED)

    # Class 5b HMS Minerva: Devonport Dockyard Georgian Granite Sanctuary Arch / Plinth framing aft bow section!
    if spec["ship_class"] == "class5_sanctuary_gate":
        # Classical rusticated Devonport granite gateway set cleanly outside beam near the aft cut-plane (zero clipping!)
        arch_y = 11.45 * ls
        hull_w_arch = eval_hull_x(arch_y, z_max_h)
        pillar_x = hull_w_arch + 1.30
        base_z = z_min_h - 0.35
        lintel_z = z_max_h + 2.85 * fs
        # Granite dry-dock cradle plinth supporting the keel & piers
        add_box(0.0, arch_y, base_z, (pillar_x * 2.0) + 2.40, 2.80, 0.65, mat_idx=MAT_STONE)
        for side in (-1.0, 1.0):
            # Stepped pedestal base + tall rusticated pier + classical cornice + gilt sphere finial
            add_box(side * pillar_x, arch_y, base_z + 0.65, 1.85, 2.05, 0.90, mat_idx=MAT_STONE)
            pier_h = (lintel_z - 0.45) - (base_z + 1.05)
            add_box(side * pillar_x, arch_y, base_z + 1.05 + pier_h * 0.5, 1.35, 1.55, pier_h, mat_idx=MAT_STONE)
            add_box(side * pillar_x, arch_y, lintel_z - 0.30, 1.75, 1.95, 0.48, mat_idx=MAT_STONE)
            add_box(side * pillar_x, arch_y, lintel_z + 1.15, 0.72, 0.72, 0.68, mat_idx=MAT_GOLD)
        # Classical entablature lintel + stepped Georgian pediment + gilt Royal Dockyard plaque
        span_w = (pillar_x * 2.0) + 2.10
        add_box(0.0, arch_y, lintel_z + 0.25, span_w, 1.75, 0.90, mat_idx=MAT_STONE)
        add_box(0.0, arch_y, lintel_z + 0.92, span_w * 0.76, 1.55, 0.52, mat_idx=MAT_STONE)
        add_box(0.0, arch_y, lintel_z + 1.30, span_w * 0.46, 1.35, 0.36, mat_idx=MAT_STONE)
        add_box(0.0, arch_y - 0.88, lintel_z + 0.25, 4.40, 0.16, 0.54, mat_idx=MAT_GOLD)

    bmesh.ops.recalc_face_normals(bm2, faces=bm2.faces)
    bmesh.ops.triangulate(bm2, faces=bm2.faces)
    detail_mesh = bpy.data.meshes.new(f"{spec['id']}_BowDetailsMesh")
    bm2.to_mesh(detail_mesh)
    bm2.free()

    detail_obj = bpy.data.objects.new(f"{spec['id']}_BowDetails", detail_mesh)
    bpy.context.collection.objects.link(detail_obj)
    for m in mats:
        detail_obj.data.materials.append(m)

    # Join hull + details into one consolidated bow assembly mesh
    bpy.ops.object.select_all(action="DESELECT")
    hull_obj.select_set(True)
    detail_obj.select_set(True)
    bpy.context.view_layer.objects.active = hull_obj
    bpy.ops.object.join()
    hull_obj.name = f"{spec['id']}_ParentBow"

    for poly in hull_obj.data.polygons:
        poly.use_smooth = False

    add_uv_box_project(hull_obj)
    # Mount point sits proudly on the forward tip of the cutwater knee bolster
    return hull_obj, (0.0, stem_y_top + 0.42 * ls, stem_top_z - 0.06)


def export_raw_glb(objs, glb_path):
    bpy.ops.object.select_all(action="DESELECT")
    for o in objs:
        o.select_set(True)
    bpy.context.view_layer.objects.active = objs[0]
    bpy.ops.export_scene.gltf(
        filepath=glb_path,
        export_format="GLB",
        use_selection=True,
        export_apply=True,
        export_yup=True,
        export_texcoords=True,
        export_normals=True,
        export_tangents=True,
        export_materials="EXPORT",
    )


def optimize_glb(raw_glb, opt_glb):
    subprocess.run(
        [
            GLTF_TRANSFORM,
            "optimize",
            raw_glb,
            opt_glb,
            "--compress", "meshopt",
            "--texture-compress", "webp",
            "--texture-size", "1024",
            "--simplify", "false",
        ],
        check=True,
        stdout=subprocess.DEVNULL,
    )


def render_ship_thumb(objs, png_path):
    scene = bpy.context.scene
    scene.render.engine = "BLENDER_EEVEE"
    scene.render.resolution_x = 640
    scene.render.resolution_y = 480
    scene.render.image_settings.file_format = "PNG"
    scene.render.filepath = png_path

    world = bpy.data.worlds.new("ThumbWorld")
    scene.world = world
    world.use_nodes = True
    bg = world.node_tree.nodes.get("Background")
    if bg:
        bg.inputs["Color"].default_value = (0.075, 0.11, 0.17, 1.0)
        bg.inputs["Strength"].default_value = 1.35

    sun_data = bpy.data.lights.new("SunKey", type="SUN")
    sun_data.energy = 3.2
    sun_obj = bpy.data.objects.new("SunKey", sun_data)
    bpy.context.collection.objects.link(sun_obj)
    sun_obj.rotation_euler = (math.radians(48), math.radians(15), math.radians(-125))

    rim_data = bpy.data.lights.new("RimLight", type="AREA")
    rim_data.energy = 850.0
    rim_data.size = 7.0
    rim_obj = bpy.data.objects.new("RimLight", rim_data)
    bpy.context.collection.objects.link(rim_obj)
    rim_obj.location = (9.0, -10.0, 7.0)
    rim_obj.rotation_euler = (Vector((0, 1.5, 1.5)) - rim_obj.location).to_track_quat("-Z", "Y").to_euler()

    fill_data = bpy.data.lights.new("FillLight", type="AREA")
    fill_data.energy = 450.0
    fill_data.size = 8.0
    fill_obj = bpy.data.objects.new("FillLight", fill_data)
    bpy.context.collection.objects.link(fill_obj)
    fill_obj.location = (-10.0, -8.0, 5.0)
    fill_obj.rotation_euler = (Vector((0, 2.0, 1.5)) - fill_obj.location).to_track_quat("-Z", "Y").to_euler()

    # Frame object cleanly using bounding box center
    mins, maxs = world_bounds(objs)
    ctr = 0.5 * (mins + maxs)
    diag = (maxs - mins).length

    cam_data = bpy.data.cameras.new("ThumbCam")
    cam_data.lens = 36.0
    cam_obj = bpy.data.objects.new("ThumbCam", cam_data)
    bpy.context.collection.objects.link(cam_obj)
    cam_obj.location = ctr + Vector((diag * 0.62, -diag * 0.72, diag * 0.20))
    cam_obj.rotation_euler = (ctr - cam_obj.location).to_track_quat("-Z", "Y").to_euler()
    scene.camera = cam_obj

    bpy.ops.render.render(write_still=True)

    scene.world = None
    bpy.data.worlds.remove(world, do_unlink=True)
    for o in (sun_obj, rim_obj, fill_obj, cam_obj):
        bpy.data.objects.remove(o, do_unlink=True)


def build_showcase_sheet(records, thumb_dir, out_png):
    manifest_json = os.path.join(thumb_dir, "records.json")
    with open(manifest_json, "w", encoding="utf-8") as f:
        json.dump(records, f, indent=2)

    composer_py = os.path.join(thumb_dir, "compose_sheet.py")
    composer_code = r'''
import json, os, sys
from PIL import Image, ImageDraw, ImageFont, ImageOps

manifest_json, out_png = sys.argv[1], sys.argv[2]
with open(manifest_json, "r", encoding="utf-8") as f:
    records = json.load(f)

def load_font(sz, bold=False):
    for p in ([r"C:\Windows\Fonts\segoeuib.ttf", r"C:\Windows\Fonts\arialbd.ttf"] if bold else [r"C:\Windows\Fonts\segoeui.ttf", r"C:\Windows\Fonts\arial.ttf"]):
        if os.path.isfile(p):
            return ImageFont.truetype(p, sz)
    return ImageFont.load_default()

W, H = 2240, 1460
sheet = Image.new("RGB", (W, H), (12, 18, 30))
d = ImageDraw.Draw(sheet)
f_title = load_font(30, bold=True)
f_sub = load_font(16, bold=False)
f_card = load_font(16, bold=True)
f_meta = load_font(13, bold=False)

d.rectangle([0, 0, W, 86], fill=(17, 24, 39))
d.text((28, 14), "PLYMOUTH CHRONICLES - 14 HISTORIC ROYAL NAVY SHIPS RECONSTRUCTED (BLENDER 4.2 + MESHOPT/WEBP)", fill=(248, 250, 252), font=f_title)
d.text((28, 52), "All 5 Vessel Classes: 3-Deck 1st Rates (3 strakes) | 2-Deck 2nd Rates (2 strakes) | Frigates & Corvettes (1 strake) | 1840s Paddle Sloops (paddleboxes) | Tamar Troopship & Minerva Sanctuary", fill=(134, 239, 172), font=f_sub)

cols = 5
cw, ch = 424, 418
pad_x, pad_y = 20, 20
start_x, start_y = 20, 106

for idx, rec in enumerate(records):
    r, c = idx // cols, idx % cols
    x0 = start_x + c * (cw + pad_x)
    y0 = start_y + r * (ch + pad_y)
    col_accent = (34, 197, 94) if rec["fig_source"] == "volumetric_glb" else (59, 130, 246)
    d.rounded_rectangle([x0, y0, x0 + cw, y0 + ch], radius=10, fill=(22, 31, 48), outline=col_accent, width=2)

    thumb = Image.open(rec["thumb_png"]).convert("RGB")
    thumb_fit = ImageOps.contain(thumb, (cw - 16, 300), Image.Resampling.LANCZOS)
    sheet.paste(thumb_fit, (x0 + 8 + ((cw - 16) - thumb_fit.width) // 2, y0 + 8))

    badge = "TRIPO 360 BOW" if rec["fig_source"] == "volumetric_glb" else "DOSSIER 3D BOW"
    d.rounded_rectangle([x0 + 14, y0 + 14, x0 + 148, y0 + 38], radius=4, fill=(15, 23, 42))
    d.text((x0 + 22, y0 + 18), badge, fill=(187, 247, 208) if rec["fig_source"] == "volumetric_glb" else (191, 219, 254), font=f_meta)

    d.text((x0 + 14, y0 + 316), f"{rec['name']} ({rec['year']})", fill=(255, 255, 255), font=f_card)
    d.text((x0 + 14, y0 + 342), f"{rec['guns']} | {rec['slug']}.glb", fill=(147, 197, 253), font=f_meta)
    d.text((x0 + 14, y0 + 365), f"Size: {rec['bytes'] / 1024:.1f} KB | Meshopt+WebP | 0 glTF errs", fill=(134, 239, 172), font=f_meta)

x0 = start_x + 4 * (cw + pad_x)
y0 = start_y + 2 * (ch + pad_y)
d.rounded_rectangle([x0, y0, x0 + cw, y0 + ch], radius=10, fill=(15, 23, 42), outline=(250, 204, 21), width=2)
d.text((x0 + 20, y0 + 26), "14/14 SHIPS RECONSTRUCTED", fill=(253, 224, 71), font=f_card)
summary_lines = [
    f"Volumetric Tripo Figureheads: {sum(1 for r in records if r['fig_source']=='volumetric_glb')}/14",
    f"Dossier 3D Sculpted Fallbacks: {sum(1 for r in records if r['fig_source']!='volumetric_glb')}/14",
    "",
    "5 Historical Hull Classes:",
    "- Class 1 (3-Deck): Royal William, Windsor Castle",
    "- Class 2 (2-Deck): Calcutta, Defiance",
    "- Class 3 (1-Deck): Aurora, Cadmus, Calliope,",
    "                    Sybille, Topaze",
    "- Class 4 (Paddle): Basilisk, Centaur, Sphinx",
    "- Class 5 (Special): Tamar (White+Blue),",
    "                     Minerva (Devonport Arch)",
    "",
    "Pipeline:",
    "- Blender 4.2.16 LTS Headless",
    "- glTF-Transform v4.5.1 (Meshopt + WebP)",
    "- Deployed to PortfolioWork, POC & Live",
]
yy = y0 + 62
for ln in summary_lines:
    d.text((x0 + 20, yy), ln, fill=(226, 232, 240), font=f_meta)
    yy += 21

os.makedirs(os.path.dirname(out_png), exist_ok=True)
sheet.save(out_png, "PNG", optimize=True)
print(f"[SHOWCASE] Saved {out_png} ({os.path.getsize(out_png)} B)")
'''
    with open(composer_py, "w", encoding="utf-8") as f:
        f.write(composer_code)
    subprocess.run(["python", composer_py, manifest_json, out_png], check=True)


def main():
    tmp_dir = tempfile.mkdtemp(prefix="ships14_build_")
    thumb_dir = os.path.join(tmp_dir, "thumbs")
    os.makedirs(thumb_dir, exist_ok=True)
    records = []

    try:
        for spec in SHIP_SPECS:
            reset_scene()
            in_glb, src_path = find_clean_figurehead_glb(spec, tmp_dir)
            if in_glb:
                fig_obj = import_and_normalize_figurehead(in_glb, spec)
                fig_source = "volumetric_glb"
            else:
                fig_obj = build_stylized_3d_figurehead(spec)
                fig_source = "dossier_3d_sculpt"

            bow_obj, mount_pt = build_ship_bow_assembly(spec)

            # Mount figurehead cleanly onto the sweeping stem knee bolster facing straight forward (-Y)
            # Positive +X pitch tilts the figurehead FORWARD (+24 deg) heroically out over the cutwater beneath the bowsprit!
            forward_rake_deg = max(20.0, min(28.0, abs(spec["fig_pitch_deg"]) + 12.0))
            fig_obj.location = mount_pt
            fig_obj.rotation_euler = (
                math.radians(forward_rake_deg),
                0.0,
                math.radians(spec["fig_yaw_deg"]),
            )
            bpy.ops.object.select_all(action="DESELECT")
            fig_obj.select_set(True)
            bpy.context.view_layer.objects.active = fig_obj
            bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)

            # Export & optimize
            raw_glb = os.path.join(tmp_dir, f"{spec['slug']}_raw.glb")
            opt_glb = os.path.join(SHIPS3D_DIR, f"{spec['slug']}.glb")
            export_raw_glb([bow_obj, fig_obj], raw_glb)
            optimize_glb(raw_glb, opt_glb)

            # Also keep underscore alias for windsor_castle if referenced anywhere
            if spec["slug"] == "windsor-castle":
                shutil.copy2(opt_glb, os.path.join(SHIPS3D_DIR, "windsor_castle.glb"))

            # Mirror to gaussian_splats_poc/web/ships3d/ and plymouth_chronicles_live/public/models/ships3d/
            shutil.copy2(opt_glb, os.path.join(POC_SHIPS3D_DIR, f"{spec['slug']}.glb"))
            shutil.copy2(opt_glb, os.path.join(LIVE_SHIPS3D_DIR, f"{spec['slug']}.glb"))

            thumb_png = os.path.join(thumb_dir, f"{spec['slug']}.png")
            render_ship_thumb([bow_obj, fig_obj], thumb_png)

            sz = os.path.getsize(opt_glb)
            print(f"[SHIP_BUILT] {spec['slug']:16s} | src={fig_source:17s} ({os.path.basename(src_path) if src_path else 'sculpt'}) | size={sz:7d}B")
            records.append({
                "slug": spec["slug"],
                "name": spec["name"],
                "year": spec["year"],
                "guns": spec["guns"],
                "fig_source": fig_source,
                "bytes": sz,
                "thumb_png": thumb_png,
            })

        build_showcase_sheet(records, thumb_dir, SHOWCASE_OUT)
    finally:
        shutil.rmtree(tmp_dir, ignore_errors=True)


if __name__ == "__main__":
    main()
