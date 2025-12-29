#!/usr/bin/env pwsh
Write-Host "Stopping Vite dev server via Python helper..."
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
python "$scriptDir\stop_server.py"
Write-Host "Press Enter to exit this window."
Read-Host
