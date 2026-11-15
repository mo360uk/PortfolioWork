#!/usr/bin/env python3
"""
Plymouth Chronicles 3D — Inria 3DGS `.ply` <-> WebGL `.splat` Converter & Validator
===================================================================================
Converts between standard Inria 3D Gaussian Splatting binary_little_endian `.ply`
files and compact 32-byte-per-splat WebGL `.splat` binary files (Antimatter15 /
PlayCanvas / Three.js compatible), and verifies binary integrity.
"""

import argparse
import math
from pathlib import Path
import numpy as np

SH_C0 = 0.28209479177387814

SPLAT_DTYPE = np.dtype([
    ("pos", "<f4", (3,)),
    ("scale", "<f4", (3,)),
    ("rgba", "u1", (4,)),
    ("rot", "u1", (4,)),
])

PLY_TYPE_MAP = {
    "float": "<f4",
    "float32": "<f4",
    "double": "<f8",
    "float64": "<f8",
    "uchar": "u1",
    "uint8": "u1",
    "int": "<i4",
    "int32": "<i4",
}


def read_3dgs_ply(ply_path: Path) -> dict[str, np.ndarray]:
    """Parse a binary_little_endian Inria 3DGS `.ply` file into numpy arrays."""
    with open(ply_path, "rb") as f:
        header_lines = []
        while True:
            line = f.readline()
            if not line:
                raise ValueError(f"Unexpected EOF reading PLY header: {ply_path}")
            decoded = line.decode("ascii", errors="strict").rstrip("\r\n")
            header_lines.append(decoded)
            if decoded == "end_header":
                break

        vertex_count = 0
        in_vertex = False
        props: list[tuple[str, str]] = []
        is_binary_le = False

        for line in header_lines:
            parts = line.split()
            if not parts:
                continue
            if parts[0] == "format":
                if len(parts) < 2 or parts[1] != "binary_little_endian":
                    raise ValueError(f"Only binary_little_endian PLY is supported, got: {line}")
                is_binary_le = True
            elif parts[0] == "element":
                in_vertex = parts[1] == "vertex"
                if in_vertex:
                    vertex_count = int(parts[2])
            elif parts[0] == "property" and in_vertex:
                ptype, pname = parts[1], parts[2]
                if ptype not in PLY_TYPE_MAP:
                    raise ValueError(f"Unsupported PLY property type '{ptype}' for '{pname}'")
                props.append((pname, PLY_TYPE_MAP[ptype]))

        if not is_binary_le or vertex_count <= 0:
            raise ValueError(f"Invalid PLY header in {ply_path}")

        dt = np.dtype(props)
        raw = np.fromfile(f, dtype=dt, count=vertex_count)
        if len(raw) != vertex_count:
            raise ValueError(f"Expected {vertex_count} vertices, read {len(raw)} in {ply_path}")

    pts = np.stack([raw["x"], raw["y"], raw["z"]], axis=1).astype(np.float32)

    if all(k in raw.dtype.names for k in ("nx", "ny", "nz")):
        normals = np.stack([raw["nx"], raw["ny"], raw["nz"]], axis=1).astype(np.float32)
    else:
        normals = np.zeros_like(pts)
        normals[:, 2] = 1.0

    # SH0 DC -> RGB uint8
    f_dc = np.stack([raw["f_dc_0"], raw["f_dc_1"], raw["f_dc_2"]], axis=1).astype(np.float32)
    rgb = np.clip(np.round((f_dc * SH_C0 + 0.5) * 255.0), 0, 255).astype(np.uint8)

    # Opacity logit -> sigmoid alpha uint8
    op_logit = raw["opacity"].astype(np.float32)
    alpha = 1.0 / (1.0 + np.exp(-np.clip(op_logit, -20.0, 20.0)))
    alpha_u8 = np.clip(np.round(alpha * 255.0), 0, 255).astype(np.uint8)[:, None]
    rgba = np.hstack([rgb, alpha_u8])

    # Log scales -> linear scales
    log_s = np.stack([raw["scale_0"], raw["scale_1"], raw["scale_2"]], axis=1).astype(np.float32)
    scales = np.exp(np.clip(log_s, -15.0, 5.0)).astype(np.float32)

    # Quaternions -> normalized
    quats = np.stack([raw["rot_0"], raw["rot_1"], raw["rot_2"], raw["rot_3"]], axis=1).astype(np.float32)
    q_norms = np.linalg.norm(quats, axis=1, keepdims=True) + 1e-8
    quats = quats / q_norms

    return {
        "positions": pts,
        "normals": normals,
        "scales": scales,
        "rgba": rgba,
        "quats": quats,
    }


def write_splat(data: dict[str, np.ndarray], out_path: Path, max_splats: int | None = None) -> int:
    """Write 32-byte-per-splat WebGL `.splat` binary file."""
    pts = data["positions"]
    scales = data["scales"]
    rgba = data["rgba"]
    quats = data["quats"]

    if max_splats and len(pts) > max_splats:
        # Keep highest-opacity/largest-volume splats
        vol = scales[:, 0] * scales[:, 1] * scales[:, 2] * (rgba[:, 3].astype(np.float32) / 255.0)
        keep = np.argsort(vol)[-max_splats:]
        pts, scales, rgba, quats = pts[keep], scales[keep], rgba[keep], quats[keep]

    # Sort back-to-front along Z for clean initial frame
    order = np.argsort(pts[:, 2])
    pts, scales, rgba, quats = pts[order], scales[order], rgba[order], quats[order]

    rot_u8 = np.clip(np.round(quats * 128.0 + 128.0), 0, 255).astype(np.uint8)
    buf = np.empty(len(pts), dtype=SPLAT_DTYPE)
    buf["pos"] = pts
    buf["scale"] = scales
    buf["rgba"] = rgba
    buf["rot"] = rot_u8

    out_path.parent.mkdir(parents=True, exist_ok=True)
    with open(out_path, "wb") as f:
        f.write(buf.tobytes())
    return out_path.stat().st_size


def read_splat(splat_path: Path) -> dict[str, np.ndarray]:
    """Read a 32-byte-per-splat `.splat` binary file."""
    size = splat_path.stat().st_size
    if size == 0 or size % 32 != 0:
        raise ValueError(f"Invalid .splat size ({size} bytes, must be non-zero multiple of 32): {splat_path}")
    parsed = np.fromfile(splat_path, dtype=SPLAT_DTYPE)
    pts = parsed["pos"].astype(np.float32)
    scales = parsed["scale"].astype(np.float32)
    rgba = parsed["rgba"].astype(np.uint8)
    quats = (parsed["rot"].astype(np.float32) - 128.0) / 128.0
    quats = quats / (np.linalg.norm(quats, axis=1, keepdims=True) + 1e-8)
    normals = np.zeros_like(pts)
    normals[:, 2] = 1.0
    return {
        "positions": pts,
        "normals": normals,
        "scales": scales,
        "rgba": rgba,
        "quats": quats,
    }


def write_3dgs_ply(data: dict[str, np.ndarray], out_path: Path) -> int:
    """Write standard Inria 3DGS binary_little_endian `.ply` file."""
    pts = data["positions"]
    normals = data["normals"]
    scales = data["scales"]
    rgba = data["rgba"]
    quats = data["quats"]

    n = len(pts)
    rgb_f = rgba[:, :3].astype(np.float32) / 255.0
    f_dc = (rgb_f - 0.5) / SH_C0
    alpha_f = np.clip(rgba[:, 3].astype(np.float32) / 255.0, 0.01, 0.995)
    opacity_logit = np.log(alpha_f / (1.0 - alpha_f)).astype(np.float32)
    log_scales = np.log(np.maximum(scales, 1e-5)).astype(np.float32)

    header = (
        "ply\n"
        "format binary_little_endian 1.0\n"
        "comment Generated by Mo360 ply_to_splat.py\n"
        f"element vertex {n}\n"
        "property float x\nproperty float y\nproperty float z\n"
        "property float nx\nproperty float ny\nproperty float nz\n"
        "property float f_dc_0\nproperty float f_dc_1\nproperty float f_dc_2\n"
        "property float opacity\n"
        "property float scale_0\nproperty float scale_1\nproperty float scale_2\n"
        "property float rot_0\nproperty float rot_1\nproperty float rot_2\nproperty float rot_3\n"
        "end_header\n"
    ).encode("ascii")

    dt = np.dtype([
        ("x", "<f4"), ("y", "<f4"), ("z", "<f4"),
        ("nx", "<f4"), ("ny", "<f4"), ("nz", "<f4"),
        ("f_dc_0", "<f4"), ("f_dc_1", "<f4"), ("f_dc_2", "<f4"),
        ("opacity", "<f4"),
        ("scale_0", "<f4"), ("scale_1", "<f4"), ("scale_2", "<f4"),
        ("rot_0", "<f4"), ("rot_1", "<f4"), ("rot_2", "<f4"), ("rot_3", "<f4"),
    ])
    arr = np.empty(n, dtype=dt)
    arr["x"], arr["y"], arr["z"] = pts[:, 0], pts[:, 1], pts[:, 2]
    arr["nx"], arr["ny"], arr["nz"] = normals[:, 0], normals[:, 1], normals[:, 2]
    arr["f_dc_0"], arr["f_dc_1"], arr["f_dc_2"] = f_dc[:, 0], f_dc[:, 1], f_dc[:, 2]
    arr["opacity"] = opacity_logit
    arr["scale_0"], arr["scale_1"], arr["scale_2"] = log_scales[:, 0], log_scales[:, 1], log_scales[:, 2]
    arr["rot_0"], arr["rot_1"], arr["rot_2"], arr["rot_3"] = quats[:, 0], quats[:, 1], quats[:, 2], quats[:, 3]

    out_path.parent.mkdir(parents=True, exist_ok=True)
    with open(out_path, "wb") as f:
        f.write(header)
        f.write(arr.tobytes())
    return out_path.stat().st_size


def verify_splat(splat_path: Path) -> dict:
    """Validate `.splat` binary layout and numerical health."""
    data = read_splat(splat_path)
    pts = data["positions"]
    scales = data["scales"]
    if not np.all(np.isfinite(pts)):
        raise ValueError(f"Non-finite positions in {splat_path}")
    if not np.all(np.isfinite(scales)) or np.any(scales <= 0):
        raise ValueError(f"Invalid non-positive or NaN scales in {splat_path}")

    bmin = pts.min(axis=0).tolist()
    bmax = pts.max(axis=0).tolist()
    return {
        "file": str(splat_path),
        "splat_count": len(pts),
        "bytes": splat_path.stat().st_size,
        "bbox_min": [round(v, 4) for v in bmin],
        "bbox_max": [round(v, 4) for v in bmax],
        "mean_alpha": round(float(data["rgba"][:, 3].mean()), 1),
    }


def main():
    parser = argparse.ArgumentParser(description="Convert between Inria 3DGS .ply and WebGL .splat")
    parser.add_argument("--input", "-i", required=True, type=Path, help="Input .ply or .splat file")
    parser.add_argument("--output", "-o", type=Path, default=None, help="Output .splat or .ply file")
    parser.add_argument("--max-splats", type=int, default=None, help="Optional cap on output splat count")
    parser.add_argument("--verify", action="store_true", help="Verify .splat file integrity without converting")
    args = parser.parse_args()

    if args.verify:
        info = verify_splat(args.input)
        print(f"[VERIFIED] {info}")
        return

    if not args.output:
        raise SystemExit("--output is required when not using --verify")

    if args.input.suffix.lower() == ".ply" and args.output.suffix.lower() == ".splat":
        data = read_3dgs_ply(args.input)
        out_bytes = write_splat(data, args.output, max_splats=args.max_splats)
        info = verify_splat(args.output)
        print(f"[PLY->SPLAT] {args.input.name} ({len(data['positions'])} pts) -> {args.output.name} ({out_bytes} B) | {info}")
    elif args.input.suffix.lower() == ".splat" and args.output.suffix.lower() == ".ply":
        data = read_splat(args.input)
        out_bytes = write_3dgs_ply(data, args.output)
        print(f"[SPLAT->PLY] {args.input.name} ({len(data['positions'])} pts) -> {args.output.name} ({out_bytes} B)")
    else:
        raise SystemExit("Supported conversions: .ply -> .splat or .splat -> .ply")


if __name__ == "__main__":
    main()
