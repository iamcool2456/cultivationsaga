@echo off
REM Start the Vite dev server via Python helper (writes PID)
python "%~dp0\.internal\start_server.py"
pause
