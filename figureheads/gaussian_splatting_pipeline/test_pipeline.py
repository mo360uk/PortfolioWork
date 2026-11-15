#!/usr/bin/env python3
"""
Integration & QA Test Suite for the Plymouth Chronicles 3D Gaussian Splatting Pipeline.
Verifies:
  1. pipeline_spec.json & higgsfield_google_flow_14_figureheads_prompts.json integrity (14 canonical Box figureheads)
  2. All 14 existing .splat and .ply assets in ../splats/ (non-destructive check)
  3. ply_to_splat.py round-trip conversion (.ply -> .splat -> .ply) in a temporary directory
"""

import json
import sys
import tempfile
import unittest
from pathlib import Path

PIPELINE_DIR = Path(__file__).resolve().parent
FIG_ROOT = PIPELINE_DIR.parent
SPLATS_DIR = FIG_ROOT / "splats"

sys.path.insert(0, str(PIPELINE_DIR))
import ply_to_splat  # noqa: E402


class TestGaussianSplattingPipeline(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        with open(PIPELINE_DIR / "pipeline_spec.json", "r", encoding="utf-8") as f:
            cls.spec = json.load(f)
        with open(PIPELINE_DIR / "higgsfield_google_flow_14_figureheads_prompts.json", "r", encoding="utf-8") as f:
            cls.prompts = json.load(f)

    def test_canonical_14_in_spec_and_prompts(self):
        spec_slugs = [f["slug"] for f in self.spec["canonical_figureheads"]]
        prompt_slugs = [f["slug"] for f in self.prompts["figureheads"]]
        self.assertEqual(len(spec_slugs), 14)
        self.assertEqual(len(prompt_slugs), 14)
        self.assertEqual(set(spec_slugs), set(prompt_slugs))

    def test_prompts_clean_of_known_hallucinations(self):
        raw = (PIPELINE_DIR / "higgsfield_google_flow_14_figureheads_prompts.json").read_text(encoding="utf-8")
        for forbidden in ("serpent-dragon", "蓝色", "laurel wreath", "feathered side wings"):
            self.assertNotIn(forbidden, raw, f"Found unverified/corrupted token: {forbidden}")

    def test_existing_14_splat_and_ply_assets(self):
        for entry in self.spec["canonical_figureheads"]:
            slug = entry["slug"]
            splat_path = SPLATS_DIR / f"{slug}.splat"
            ply_path = SPLATS_DIR / f"{slug}.ply"
            self.assertTrue(splat_path.exists(), f"Missing {splat_path}")
            self.assertTrue(ply_path.exists(), f"Missing {ply_path}")

            info = ply_to_splat.verify_splat(splat_path)
            self.assertGreater(info["splat_count"], 0)
            self.assertEqual(info["bytes"], info["splat_count"] * 32)

            ply_data = ply_to_splat.read_3dgs_ply(ply_path)
            self.assertGreater(len(ply_data["positions"]), 0)

    def test_ply_to_splat_round_trip(self):
        src_ply = SPLATS_DIR / "windsor-castle.ply"
        self.assertTrue(src_ply.exists())
        with tempfile.TemporaryDirectory(prefix="test_splat_rt_") as tmp:
            tmp_dir = Path(tmp)
            tmp_splat = tmp_dir / "windsor-castle.splat"
            tmp_ply = tmp_dir / "windsor-castle-rt.ply"

            ply_data = ply_to_splat.read_3dgs_ply(src_ply)
            n_pts = len(ply_data["positions"])
            splat_bytes = ply_to_splat.write_splat(ply_data, tmp_splat)
            self.assertEqual(splat_bytes, n_pts * 32)

            info = ply_to_splat.verify_splat(tmp_splat)
            self.assertEqual(info["splat_count"], n_pts)

            rt_data = ply_to_splat.read_splat(tmp_splat)
            ply_bytes = ply_to_splat.write_3dgs_ply(rt_data, tmp_ply)
            self.assertGreater(ply_bytes, 0)

            rt_ply_data = ply_to_splat.read_3dgs_ply(tmp_ply)
            self.assertEqual(len(rt_ply_data["positions"]), n_pts)


if __name__ == "__main__":
    unittest.main(verbosity=2)
