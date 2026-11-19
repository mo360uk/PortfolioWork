"""Course 02 — Unreal Engine 5.8 Real Ideas Architectural Projection & Calibration Stage."""

import unreal


def setup_course02_projection_stage():
    unreal.EditorLevelLibrary.load_level("/Game/TAWAF_DomeTest")
    asset_tools = unreal.AssetToolsHelpers.get_asset_tools()

    mat_path = "/Game/DomeCinema/M_ProjectionCalibrationGrid"
    if not unreal.EditorAssetLibrary.does_asset_exist(mat_path):
        mat = asset_tools.create_asset(
            "M_ProjectionCalibrationGrid",
            "/Game/DomeCinema",
            unreal.Material,
            unreal.MaterialFactoryNew(),
        )
        mat.set_editor_property("shading_model", unreal.MaterialShadingModel.MSM_UNLIT)
        tint = unreal.MaterialEditingLibrary.create_material_expression(
            mat, unreal.MaterialExpressionConstant3Vector, -280, 0
        )
        tint.set_editor_property("constant", unreal.LinearColor(0.784, 0.490, 0.157, 1.0))  # Studio Ochre #C87D28
        unreal.MaterialEditingLibrary.connect_material_property(
            tint, "", unreal.MaterialProperty.MP_EMISSIVE_COLOR
        )
        unreal.MaterialEditingLibrary.recompile_material(mat)
        unreal.log("[Course02] Created unlit Ochre projection calibration material.")

    # Spawn a calibration reference cube at projector origin
    cube = unreal.EditorLevelLibrary.spawn_actor_from_class(
        unreal.StaticMeshActor, unreal.Vector(0.0, 0.0, 300.0), unreal.Rotator(0.0, 0.0, 0.0)
    )
    cube.set_actor_label("Course02_RealIdeas_ProjectorTarget")
    unreal.EditorLevelLibrary.save_current_level()
    unreal.log("[Course02] Real Ideas Projection Mapping stage ready for CamSchnappr/NDI.")


if __name__ == "__main__":
    setup_course02_projection_stage()
