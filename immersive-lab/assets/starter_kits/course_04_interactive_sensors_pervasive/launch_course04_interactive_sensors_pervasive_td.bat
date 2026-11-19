@echo off
setlocal enabledelayedexpansion
set "TD_EXE=C:\Program Files\Derivative\TouchDesigner\bin\TouchDesigner.exe"
if not exist "%TD_EXE%" (
  for /d %%D in ("C:\Program Files\Derivative\TouchDesigner*") do (
    if exist "%%D\bin\TouchDesigner.exe" set "TD_EXE=%%D\bin\TouchDesigner.exe"
  )
)
if not exist "%TD_EXE%" (
  echo [Mo360] TouchDesigner.exe not found under C:\Program Files\Derivative\TouchDesigner*
  echo [Mo360] Install TouchDesigner or run %~dp0td_course04_mediapipe_osc_sensors.py inside Textport.
  pause
  exit /b 1
)
echo [Mo360] Launching TouchDesigner with td_course04_mediapipe_osc_sensors.py...
set "MO360_TD_BUILD_SCRIPT=%~dp0td_course04_mediapipe_osc_sensors.py"
start "" "%TD_EXE%"
endlocal
