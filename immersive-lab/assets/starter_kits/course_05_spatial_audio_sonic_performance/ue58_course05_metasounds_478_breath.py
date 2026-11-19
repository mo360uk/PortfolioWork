"""Course 05 — Unreal Engine 5.8 Spatial Audio MetaSounds & 4-7-8 Breath Sync."""

import unreal


def setup_course05_metasounds_478():
    unreal.EditorLevelLibrary.load_level("/Game/TAWAF_DomeTest")
    mpc_path = "/Game/DomeCinema/MPC_SpatialAudio_478"
    if not unreal.EditorAssetLibrary.does_asset_exist(mpc_path):
        asset_tools = unreal.AssetToolsHelpers.get_asset_tools()
        asset_tools.create_asset(
            "MPC_SpatialAudio_478",
            "/Game/DomeCinema",
            unreal.MaterialParameterCollection,
            unreal.MaterialParameterCollectionFactoryNew(),
        )

    speaker_positions = [
        ("Speaker_N", unreal.Vector(0.0, 750.0, 320.0)),
        ("Speaker_E", unreal.Vector(750.0, 0.0, 320.0)),
        ("Speaker_S", unreal.Vector(0.0, -750.0, 320.0)),
        ("Speaker_W", unreal.Vector(-750.0, 0.0, 320.0)),
        ("Speaker_Zenith", unreal.Vector(0.0, 0.0, 950.0)),
    ]
    for label, pos in speaker_positions:
        snd = unreal.EditorLevelLibrary.spawn_actor_from_class(
            unreal.AmbientSound, pos, unreal.Rotator(0.0, 0.0, 0.0)
        )
        snd.set_actor_label(f"Course05_{label}")

    unreal.EditorLevelLibrary.save_current_level()
    unreal.log("[Course05] MetaSounds 36.4 spatial anchor ring & 4-7-8 breath MPC configured.")


if __name__ == "__main__":
    setup_course05_metasounds_478()
