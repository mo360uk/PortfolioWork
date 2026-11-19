"""Course 01 — Unreal Engine 5.8 Market Hall Dome 180-deg Domemaster Rig Setup."""

import unreal


def setup_course01_domemaster():
    unreal.EditorLevelLibrary.load_level("/Game/TAWAF_DomeTest")
    actors = unreal.EditorLevelLibrary.get_all_level_actors()

    rig = next((a for a in actors if "BP_DomeMasterRig" in a.get_name()), None)
    if rig is None and unreal.EditorAssetLibrary.does_asset_exist("/Game/DomeCinema/BP_DomeMasterRig"):
        rig_cls = unreal.EditorAssetLibrary.load_blueprint_class("/Game/DomeCinema/BP_DomeMasterRig")
        if rig_cls:
            rig = unreal.EditorLevelLibrary.spawn_actor_from_class(
                rig_cls, unreal.Vector(0.0, 0.0, 1000.0), unreal.Rotator(0.0, 0.0, 0.0)
            )
            unreal.log("[Course01] Spawned BP_DomeMasterRig for 180-deg Equidistant Domemaster.")

    # Ensure equidistant dome material instance exists for 4096x4096 capture projection
    mi_path = "/Game/DomeCinema/MI_DomeMaster_Equidistant"
    if unreal.EditorAssetLibrary.does_asset_exist(mi_path):
        mi = unreal.EditorAssetLibrary.load_asset(mi_path)
        unreal.log(f"[Course01] Verified Domemaster Material Instance: {mi.get_name()}")

    unreal.EditorLevelLibrary.save_current_level()
    unreal.log("[Course01] Market Hall Dome 4096x4096 Domemaster Link ready.")


if __name__ == "__main__":
    setup_course01_domemaster()
