#!/usr/bin/env python3
import subprocess
import sys
import os
from pathlib import Path

ROOT = Path(__file__).resolve().parent
PID_FILE = ROOT / '.vite_dev.pid'

print('Please use .internal/start_server.py (root wrapper updated to call .internal).')
