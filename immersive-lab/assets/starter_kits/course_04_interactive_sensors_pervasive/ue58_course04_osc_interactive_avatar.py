"""Course 04 — Unreal Engine 5.8 Pervasive Media Studio Interactive OSC & Sensor Rig."""

import unreal


def setup_course04_osc_avatar():
    unreal.EditorLevelLibrary.load_level("/Game/TAWAF_DomeTest")
    mpc_path = "/Game/DomeCinema/MPC_SensorTracking"
    if not unreal.EditorAssetLibrary.does_asset_exist(mpc_path):
        asset_tools = unreal.AssetToolsHelpers.get_asset_tools()
        asset_tools.create_asset(
            "MPC_SensorTracking",
            "/Game/DomeCinema",
            unreal.MaterialParameterCollection,
            unreal.MaterialParameterCollectionFactoryNew(),
        )
        unreal.log("[Course04] Created MaterialParameterCollection MPC_SensorTracking for OSC skeleton XYZ.")

    anchor = unreal.EditorLevelLibrary.spawn_actor_from_class(
        unreal.TargetPoint, unreal.Vector(0.0, 0.0, 180.0), unreal.Rotator(0.0, 0.0, 0.0)
    )
    anchor.set_actor_label("Course04_VisitorTracking_Anchor")
    unreal.EditorLevelLibrary.save_current_level()
    unreal.log("[Course04] Pervasive Media Studio OSC Interactive Avatar rig initialized (UDP 7000).")


if __name__ == "__main__":
    setup_course04_osc_avatar()
