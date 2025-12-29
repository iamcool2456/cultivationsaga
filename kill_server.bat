@echo off
REM Stop the Vite dev server via Python helper
python "%~dp0\.internal\stop_server.py"
pause
