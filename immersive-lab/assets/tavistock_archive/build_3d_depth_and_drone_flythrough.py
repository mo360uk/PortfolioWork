import json
import math
from pathlib import Path
import numpy as np
from PIL import Image, ImageEnhance, ImageFilter
from scipy.ndimage import gaussian_filter, map_coordinates
import imageio.v2 as imageio

ARCHIVE_DIR = Path(r"C:\Users\moham\.gemini\antigravity\scratch\PortfolioWork\immersive-lab\assets\tavistock_archive")

# Scene-specific architectural & landscape depth priors + natural Devon color palettes
SCENE_CONFIGS = {
    "02_abbey_bridge_river_tavy.jpg": {
        "depth_id": "abbey_ruins",
        "drone_mp4": "abbey_drone_orbit.mp4",
        "water_y_start": 0.62,  # River Tavy in lower 38%
        "arch_center": (0.50, 0.56),  # Bridge arch opening to fly toward
        "sky_tint": (135, 178, 212),
        "foliage_tint": (76, 118, 72),
        "stone_tint": (176, 162, 142),
        "water_tint": (64, 112, 128),
        "fly_target": (0.50, 0.52),
    },
    "01_bedford_square_guildhall.jpg": {
        "depth_id": "pannier_market",
        "drone_mp4": "pannier_market_drone_orbit.mp4",
        "water_y_start": 1.0,  # Cobblestone square, no river
        "arch_center": (0.48, 0.50),  # Corridor past Town Hall into Bedford Square
        "sky_tint": (148, 185, 218),
        "foliage_tint": (84, 122, 78),
        "stone_tint": (184, 168, 146),
        "water_tint": (140, 134, 125),
        "fly_target": (0.48, 0.48),
    },
    "03_tavistock_panorama_viaduct.jpg": {
        "depth_id": "st_eustachius",
        "drone_mp4": "st_eustachius_drone_orbit.mp4",
        "water_y_start": 1.0,
        "arch_center": (0.52, 0.46),  # Flying over rooftops toward Railway Viaduct & St Eustachius
        "sky_tint": (142, 182, 216),
        "foliage_tint": (72, 114, 68),
        "stone_tint": (178, 165, 148),
        "water_tint": (95, 125, 110),
        "fly_target": (0.52, 0.46),
    },
    "05_cloth_mill_tavistock_1824.jpg": {
        "depth_id": "canal_wharf",
        "drone_mp4": "canal_wharf_drone_orbit.mp4",
        "water_y_start": 0.66,  # Mill leat stream in foreground
        "arch_center": (0.46, 0.52),
        "sky_tint": (152, 186, 210),
        "foliage_tint": (82, 116, 74),
        "stone_tint": (182, 166, 142),
        "water_tint": (74, 116, 126),
        "fly_target": (0.46, 0.50),
    },
    "04_abbey_mead_historic_lithograph.jpg": {
        "depth_id": "abbey_mead",
        "drone_mp4": None,
        "water_y_start": 1.0,
        "arch_center": (0.50, 0.50),
        "sky_tint": (150, 184, 212),
        "foliage_tint": (84, 120, 76),
        "stone_tint": (186, 170, 148),
        "water_tint": (120, 130, 110),
        "fly_target": (0.50, 0.50),
    },
    "06_tavistock_north_steam_railway.jpg": {
        "depth_id": "steam_railway",
        "drone_mp4": None,
        "water_y_start": 1.0,
        "arch_center": (0.45, 0.50),
        "sky_tint": (145, 178, 208),
        "foliage_tint": (78, 112, 72),
        "stone_tint": (168, 158, 145),
        "water_tint": (110, 115, 120),
        "fly_target": (0.45, 0.48),
    },
    "07_endsleigh_swiss_cottage_postcard.jpg": {
        "depth_id": "endsleigh_cottage",
        "drone_mp4": None,
        "water_y_start": 1.0,
        "arch_center": (0.50, 0.48),
        "sky_tint": (148, 186, 214),
        "foliage_tint": (74, 118, 70),
        "stone_tint": (185, 168, 144),
        "water_tint": (90, 125, 100),
        "fly_target": (0.50, 0.48),
    },
    "08_drake_monument_relief_1890.jpg": {
        "depth_id": "drake_relief",
        "drone_mp4": None,
        "water_y_start": 1.0,
        "arch_center": (0.50, 0.48),
        "sky_tint": (165, 145, 118),
        "foliage_tint": (145, 122, 92),
        "stone_tint": (188, 156, 116),
        "water_tint": (130, 108, 82),
        "fly_target": (0.50, 0.48),
    },
}


def compute_monocular_depth_map(gray_np: np.ndarray, cfg: dict) -> np.ndarray:
    """
    Computes a high-relief, edge-preserving 3D depth map (1.0 = near foreground, 0.0 = far background)
    combining perspective ground-plane geometry, atmospheric haze/luminance cues, local texture gradient
    energy (high-frequency foreground masonry/foliage), and architectural corridor depth tunneling.
    """
    h, w = gray_np.shape
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    yn = yy / max(h - 1, 1)
    xn = xx / max(w - 1, 1)

    # 1. Ground plane + vertical perspective ramp (bottom foreground = near 1.0, upper sky = far 0.0)
    ground_ramp = np.clip((yn - 0.12) / 0.88, 0.0, 1.0) ** 1.15

    # 2. Side framing vignette (trees, bridge abutments, Victorian facades on left/right edges are closer)
    cx, cy = cfg["arch_center"]
    radial_dist = np.sqrt(((xn - cx) * 1.15) ** 2 + ((yn - cy) * 0.85) ** 2)
    corridor_depth = np.clip(radial_dist * 0.95, 0.0, 1.0)

    # 3. Sky detection (bright, low-texture upper region pushed to infinite distance = 0.0)
    lum = gray_np / 255.0
    gx = np.abs(np.gradient(lum, axis=1))
    gy = np.abs(np.gradient(lum, axis=0))
    edge_energy = gaussian_filter(np.sqrt(gx**2 + gy**2), sigma=max(h, w) * 0.008)
    if edge_energy.max() > 1e-5:
        edge_energy = edge_energy / edge_energy.max()

    sky_mask = np.clip((1.0 - yn * 1.85), 0.0, 1.0) * np.clip((lum - 0.52) / 0.35, 0.0, 1.0) * (1.0 - edge_energy * 0.7)
    sky_mask = gaussian_filter(sky_mask, sigma=max(h, w) * 0.015)

    # 4. Local structural relief from dark masonry/foliage silhouettes and micro-contrast
    dark_mass = (1.0 - lum) * (0.35 + 0.65 * edge_energy)
    structural_relief = gaussian_filter(dark_mass, sigma=max(h, w) * 0.006)
    fine_relief = (1.0 - lum) * 0.18

    # Combine depth layers
    depth = (
        0.44 * ground_ramp
        + 0.26 * corridor_depth
        + 0.22 * structural_relief
        + 0.08 * fine_relief
    )
    # Push sky to far background (0.02)
    depth = depth * (1.0 - 0.92 * sky_mask)

    # Smooth macro geometry while keeping architectural edge relief
    depth_macro = gaussian_filter(depth, sigma=max(h, w) * 0.014)
    depth_detail = gaussian_filter(depth, sigma=max(h, w) * 0.0025)
    depth_final = 0.72 * depth_macro + 0.28 * depth_detail

    # Normalize to full [0.0, 1.0] dynamic range
    d_min, d_max = float(np.percentile(depth_final, 1)), float(np.percentile(depth_final, 99))
    depth_final = np.clip((depth_final - d_min) / max(d_max - d_min, 1e-5), 0.0, 1.0)
    return depth_final


def colorize_heritage_plate(gray_np: np.ndarray, depth_np: np.ndarray, cfg: dict):
    """
    Produces both a warm museum Sepia plate and a natural Devon Heritage Colour plate
    (sky azure, Dartmoor foliage greens, Tavistock Hurdwick granite/warm stone, and River Tavy reflections).
    """
    h, w = gray_np.shape
    yy, _ = np.mgrid[0:h, 0:w].astype(np.float32)
    yn = yy / max(h - 1, 1)
    lum = (gray_np / 255.0)[..., None]

    # 1. Warm Museum Sepia
    sepia_r = np.clip(gray_np * 1.08 + 22, 0, 255)
    sepia_g = np.clip(gray_np * 0.94 + 8, 0, 255)
    sepia_b = np.clip(gray_np * 0.76 - 10, 0, 255)
    sepia_rgb = np.stack([sepia_r, sepia_g, sepia_b], axis=-1).astype(np.uint8)

    # 2. Living Devon Colour
    sky_w = np.clip((0.48 - yn) / 0.35, 0.0, 1.0) * np.clip((lum[..., 0] - 0.45) / 0.4, 0.0, 1.0)
    sky_w = gaussian_filter(sky_w, sigma=max(h, w) * 0.012)[..., None]

    water_start = cfg["water_y_start"]
    if water_start < 0.99:
        water_w = np.clip((yn - water_start) / (1.0 - water_start + 1e-5), 0.0, 1.0)
        water_w = gaussian_filter(water_w, sigma=max(h, w) * 0.01)[..., None]
    else:
        water_w = np.zeros((h, w, 1), dtype=np.float32)

    # Foliage vs stone split in mid/foreground based on texture & luminance
    foliage_w = np.clip((1.0 - lum[..., 0]) * 1.35 - 0.25, 0.0, 1.0) * (1.0 - sky_w[..., 0]) * (1.0 - water_w[..., 0] * 0.7)
    foliage_w = gaussian_filter(foliage_w, sigma=max(h, w) * 0.008)[..., None]
    stone_w = np.clip(1.0 - sky_w - water_w - foliage_w * 0.75, 0.0, 1.0)

    sky_col = np.array(cfg["sky_tint"], dtype=np.float32) / 255.0
    fol_col = np.array(cfg["foliage_tint"], dtype=np.float32) / 255.0
    stn_col = np.array(cfg["stone_tint"], dtype=np.float32) / 255.0
    wat_col = np.array(cfg["water_tint"], dtype=np.float32) / 255.0

    tint = (
        sky_w * sky_col
        + foliage_w * fol_col
        + stone_w * stn_col
        + water_w * wat_col
    )
    weight_sum = sky_w + foliage_w + stone_w + water_w + 1e-5
    tint = tint / weight_sum

    # Preserve 100% of original photographic sharpness & micro-detail via luminance-tint fusion
    colour_float = (0.42 * lum + 0.58 * (lum * tint * 1.48)) * 255.0
    # Add subtle atmospheric depth haze in far distance
    haze = ((1.0 - depth_np)[..., None] ** 1.8) * 0.16
    haze_rgb = np.array(cfg["sky_tint"], dtype=np.float32)
    colour_float = colour_float * (1.0 - haze) + haze_rgb * haze

    colour_rgb = np.clip(colour_float, 0, 255).astype(np.uint8)
    img_col = Image.fromarray(colour_rgb)
    img_col = ImageEnhance.Contrast(img_col).enhance(1.08)
    img_col = ImageEnhance.Color(img_col).enhance(1.22)
    return sepia_rgb, np.array(img_col)


def render_3d_depth_drone_flythrough_mp4(
    colour_rgb: np.ndarray,
    depth_np: np.ndarray,
    cfg: dict,
    out_mp4: Path,
    fps: int = 24,
    duration_sec: float = 8.0,
):
    """
    Renders a true 3D Depth-Map Perspective Drone Camera Fly-Through MP4 (Higgsfield FPV/Drone style):
    - Foreground objects displace by 3.5x more parallax than midground/background as the virtual drone
      camera flies INTO the historical photograph along a 3D trajectory (Z dolly + X/Y glide + banking).
    - Animated River Tavy water ripples in the lower water zone.
    - Volumetric floating dust/mist motes passing the drone lens in 3D space.
    - Warm golden-hour volumetric light rays breathing across the scene.
    """
    target_w, target_h = 1280, 720
    img_pil = Image.fromarray(colour_rgb).resize((target_w, target_h), Image.Resampling.LANCZOS)
    dep_pil = Image.fromarray((depth_np * 255).astype(np.uint8)).resize((target_w, target_h), Image.Resampling.BILINEAR)

    base_rgb = np.array(img_pil, dtype=np.float32)
    dep = gaussian_filter(np.array(dep_pil, dtype=np.float32) / 255.0, sigma=4.0)

    n_frames = int(fps * duration_sec)
    yy, xx = np.mgrid[0:target_h, 0:target_w].astype(np.float32)
    yn = yy / target_h
    xn = xx / target_w

    tx, ty = cfg["fly_target"]
    cx = tx * target_w
    cy = ty * target_h
    water_start = cfg["water_y_start"]

    # Pre-generate 3D volumetric particles (x, y, z) in camera frustum
    rng = np.random.default_rng(42)
    n_particles = 95
    px = rng.uniform(-0.6, 0.6, n_particles)
    py = rng.uniform(-0.45, 0.45, n_particles)
    pz = rng.uniform(0.15, 1.15, n_particles)
    psize = rng.uniform(1.8, 4.2, n_particles)

    writer = imageio.get_writer(
        str(out_mp4),
        fps=fps,
        codec="libx264",
        quality=8,
        pixelformat="yuv420p",
        macro_block_size=16,
    )

    for f_idx in range(n_frames):
        # Smooth ping-pong or continuous forward drone flight curve
        u = f_idx / max(n_frames - 1, 1)
        # Smooth ease-in-out drone dolly forward into the 3D scene
        s = 0.5 - 0.5 * math.cos(u * math.pi)

        # Drone Z forward flight: background scales gently (1.0 -> 1.16),
        # while foreground (high depth) expands dramatically in true 3D perspective (1.0 -> 1.54)!
        z_dolly = s * 0.24
        cam_pan_x = math.sin(u * math.pi * 2.0) * 26.0 * (0.4 + 0.6 * s)
        cam_pan_y = -math.sin(u * math.pi) * 18.0

        # Depth-dependent 3D perspective scale & translation per pixel
        # Near pixels (dep ~ 1.0) shift and expand much faster than far sky pixels (dep ~ 0.0)
        depth_factor = 0.22 + 1.18 * (dep ** 1.25)
        local_zoom = 1.0 + z_dolly * depth_factor

        # Inverse mapping from output frame pixel (xx, yy) back to source photo coordinates
        src_x = cx + (xx - cx - cam_pan_x * depth_factor) / local_zoom
        src_y = cy + (yy - cy - cam_pan_y * depth_factor) / local_zoom

        # Add gentle animated water ripple refraction on River Tavy / Canal leat
        if water_start < 0.99:
            water_mask = np.clip((yn - water_start) / (1.0 - water_start + 1e-5), 0.0, 1.0)
            ripple_x = np.sin(yy * 0.22 + u * math.pi * 8.0) * 2.8 * water_mask
            ripple_y = np.cos(xx * 0.14 + u * math.pi * 6.0) * 1.2 * water_mask
            src_x = src_x + ripple_x
            src_y = src_y + ripple_y

        src_x = np.clip(src_x, 0, target_w - 1)
        src_y = np.clip(src_y, 0, target_h - 1)

        coords = np.array([src_y, src_x])
        frame = np.empty_like(base_rgb)
        for c in range(3):
            frame[..., c] = map_coordinates(base_rgb[..., c], coords, order=1, mode="nearest")

        # Dynamic golden sunbeam god-ray sweep across foreground/midground
        ray_angle = (xn - 0.25) * 1.4 + (yn - 0.1) * 0.7 - s * 0.25
        god_ray = np.exp(-((ray_angle - 0.22) ** 2) / 0.045) * (1.0 - yn * 0.5) * (0.3 + 0.7 * dep)
        frame[..., 0] += god_ray * 22.0
        frame[..., 1] += god_ray * 16.0
        frame[..., 2] += god_ray * 6.0

        # Render 3D volumetric mist/pollen motes flying past the drone camera lens
        for p_i in range(n_particles):
            z_curr = (pz[p_i] - u * 0.55) % 1.0
            if z_curr < 0.08:
                continue
            proj_x = int(target_w * 0.5 + (px[p_i] / z_curr) * target_w * 0.42)
            proj_y = int(target_h * 0.5 + (py[p_i] / z_curr) * target_h * 0.42)
            r = max(1, int(psize[p_i] / (z_curr + 0.2)))
            if r < proj_x < target_w - r and r < proj_y < target_h - r:
                alpha = min(0.55, (1.0 - z_curr) * 0.65)
                y0, y1 = proj_y - r, proj_y + r + 1
                x0, x1 = proj_x - r, proj_x + r + 1
                frame[y0:y1, x0:x1, 0] = frame[y0:y1, x0:x1, 0] * (1 - alpha) + 245 * alpha
                frame[y0:y1, x0:x1, 1] = frame[y0:y1, x0:x1, 1] * (1 - alpha) + 225 * alpha
                frame[y0:y1, x0:x1, 2] = frame[y0:y1, x0:x1, 2] * (1 - alpha) + 180 * alpha

        writer.append_data(np.clip(frame, 0, 255).astype(np.uint8))

    writer.close()
    print(f"[OK] Rendered 3D Depth Drone Fly-Through MP4: {out_mp4.name} ({out_mp4.stat().st_size / 1e6:.2f} MB)")


def main():
    for filename, cfg in SCENE_CONFIGS.items():
        src_path = ARCHIVE_DIR / filename
        if not src_path.exists():
            print(f"[WARN] Missing {src_path}")
            continue

        print(f"Processing 3D Depth & Heritage Plates for {filename}...")
        img = Image.open(src_path).convert("L")
        # Resize to crisp 1600px width for fast WebGL 3D displacement & texture loading
        w0, h0 = img.size
        scale = min(1.0, 1600.0 / max(w0, h0))
        w1, h1 = int(w0 * scale), int(h0 * scale)
        img_resized = img.resize((w1, h1), Image.Resampling.LANCZOS)
        gray_np = np.array(img_resized, dtype=np.float32)

        depth_np = compute_monocular_depth_map(gray_np, cfg)
        sepia_rgb, colour_rgb = colorize_heritage_plate(gray_np, depth_np, cfg)

        stem = cfg["depth_id"]
        depth_path = ARCHIVE_DIR / f"{stem}_depth.jpg"
        sepia_path = ARCHIVE_DIR / f"{stem}_sepia_hd.jpg"
        colour_path = ARCHIVE_DIR / f"{stem}_colour_hd.jpg"

        Image.fromarray((depth_np * 255).astype(np.uint8)).save(depth_path, quality=90)
        Image.fromarray(sepia_rgb).save(sepia_path, quality=90)
        Image.fromarray(colour_rgb).save(colour_path, quality=90)
        print(f"  -> Saved {depth_path.name}, {sepia_path.name}, {colour_path.name}")

        if cfg["drone_mp4"]:
            mp4_path = ARCHIVE_DIR / cfg["drone_mp4"]
            render_3d_depth_drone_flythrough_mp4(colour_rgb, depth_np, cfg, mp4_path)


if __name__ == "__main__":
    main()
