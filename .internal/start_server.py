#!/usr/bin/env python3
import subprocess
import sys
import os
from pathlib import Path

# Root is project root (parent of this .internal folder)
ROOT = Path(__file__).resolve().parent.parent
PID_FILE = ROOT / '.vite_dev.pid'

def main():
    if PID_FILE.exists():
        print('PID file exists. Is the server already running? Use stop_server.py to stop it.')
        print('PID file:', PID_FILE)
        return

    print('Starting Vite dev server with `npm run dev` (make sure dependencies are installed)')
    try:
        # Determine npm command. Prefer npm.cmd on Windows and try common install paths.
        if sys.platform.startswith('win'):
            possible = []
            pf = os.environ.get('ProgramFiles')
            pfx = os.environ.get('ProgramFiles(x86)')
            if pf:
                possible.append(os.path.join(pf, 'nodejs', 'npm.cmd'))
            if pfx:
                possible.append(os.path.join(pfx, 'nodejs', 'npm.cmd'))
            # fallback to plain npm.cmd
            possible.append('npm.cmd')
            chosen = None
            for pth in possible:
                try:
                    if pth == 'npm.cmd' or os.path.exists(pth):
                        chosen = pth
                        break
                except Exception:
                    continue
            if not chosen:
                raise FileNotFoundError('npm.cmd not found')
            cmd = [chosen, 'run', 'dev']
        else:
            cmd = ['npm', 'run', 'dev']

        # Ensure child process can find node.exe by adjusting PATH for the subprocess
        env = os.environ.copy()
        if sys.platform.startswith('win'):
            node_dir = os.path.join(os.environ.get('ProgramFiles', ''), 'nodejs')
            if os.path.exists(node_dir):
                env['PATH'] = node_dir + os.pathsep + env.get('PATH', '')

        p = subprocess.Popen(cmd, cwd=str(ROOT), env=env)
    except FileNotFoundError:
        print('Could not find `npm` in PATH. Ensure Node.js and npm are installed and available in your shell.')
        sys.exit(1)

    with PID_FILE.open('w') as f:
        f.write(str(p.pid))

    print('Vite dev server started, PID:', p.pid)
    print('To stop: run stop_server.py or kill_server.bat')

if __name__ == '__main__':
    main()
