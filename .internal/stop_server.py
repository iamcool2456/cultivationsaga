#!/usr/bin/env python3
import os
import signal
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PID_FILE = ROOT / '.vite_dev.pid'

def main():
    if not PID_FILE.exists():
        print('No PID file found. The server may not be running or was started elsewhere.')
        return

    try:
        pid = int(PID_FILE.read_text())
    except Exception as e:
        print('Failed to read PID file:', e)
        return

    print('Stopping PID', pid)
    try:
        if os.name == 'nt':
            subprocess.run(['taskkill', '/PID', str(pid), '/F'])
        else:
            os.kill(pid, signal.SIGTERM)
    except Exception as e:
        print('Failed to stop process:', e)

    try:
        PID_FILE.unlink()
    except Exception:
        pass

    print('Stop command issued.')

if __name__ == '__main__':
    main()
