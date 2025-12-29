@echo off
REM Installs Node dependencies using npm. Run this first.
where node >nul 2>&1
if ERRORLEVEL 1 (
  echo Node.js not found in PATH. Please install Node.js from https://nodejs.org/ and restart your shell.
  pause
  exit /b 1
)

echo Installing npm dependencies...
npm install
echo Done.
pause
