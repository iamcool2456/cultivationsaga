@echo off
setlocal

echo === Cultivation Saga: Share via Cloudflare Tunnel ===
echo.
echo This will create a public HTTPS URL that forwards to:
echo   http://localhost:5173
echo.
echo Keep this window open while your friend playtests.
echo.

set "CLOUDFLARED_EXE="

where cloudflared >nul 2>nul
if not errorlevel 1 (
  set "CLOUDFLARED_EXE=cloudflared"
) else (
  set "CLOUDFLARED_EXE=%~dp0.internal\bin\cloudflared.exe"
  if not exist "%CLOUDFLARED_EXE%" (
    echo cloudflared not found. Downloading a local copy...
    echo.
    if not exist "%~dp0.internal\bin" mkdir "%~dp0.internal\bin" >nul 2>nul
    powershell -NoProfile -ExecutionPolicy Bypass -Command "$ErrorActionPreference='Stop'; $url='https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.exe'; $out='%~dp0.internal\\bin\\cloudflared.exe'; Invoke-WebRequest -Uri $url -OutFile $out;"
    if errorlevel 1 (
      echo.
      echo ERROR: Failed to download cloudflared.
      echo - If your network blocks GitHub, try again on a different connection.
      echo - Or manually download cloudflared-windows-amd64.exe from:
      echo     https://github.com/cloudflare/cloudflared/releases
      echo   and save it as:
      echo     %~dp0.internal\bin\cloudflared.exe
      echo.
      pause
      exit /b 1
    )
  )
)

echo Starting tunnel...
echo.
"%CLOUDFLARED_EXE%" tunnel --url http://localhost:5173

echo.
echo Tunnel exited.
pause
