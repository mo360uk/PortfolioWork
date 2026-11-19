"""Course 03 — Unreal Engine 5.8 Sacred Geometry 8/10/12-Fold Niagara Lattice."""

import math
import unreal


def setup_course03_sacred_geometry(fold_symmetry=12, radius_cm=650.0):
    unreal.EditorLevelLibrary.load_level("/Game/TAWAF_DomeTest")
    template = "/Niagara/DefaultAssets/Templates/Systems/FountainLightweight"
    dest = "/Game/DomeCinema/NS_SacredGeometry_Orbit"

    if not unreal.EditorAssetLibrary.does_asset_exist(dest) and unreal.EditorAssetLibrary.does_asset_exist(template):
        unreal.EditorAssetLibrary.duplicate_asset(template, dest)

    ns_asset = unreal.EditorAssetLibrary.load_asset(dest)
    for idx in range(fold_symmetry):
        angle = (2.0 * math.pi * idx) / fold_symmetry
        x = radius_cm * math.cos(angle)
        y = radius_cm * math.sin(angle)
        actor = unreal.EditorLevelLibrary.spawn_actor_from_class(
            unreal.NiagaraActor, unreal.Vector(x, y, 420.0), unreal.Rotator(0.0, math.degrees(angle), 0.0)
        )
        actor.set_actor_label(f"SacredNode_{fold_symmetry}Fold_{idx:02d}")
        if ns_asset:
            actor.niagara_component.set_asset(ns_asset)

    unreal.EditorLevelLibrary.save_current_level()
    unreal.log(f"[Course03] Spawned {fold_symmetry}-fold Sacred Geometry Niagara ring.")


if __name__ == "__main__":
    setup_course03_sacred_geometry()
