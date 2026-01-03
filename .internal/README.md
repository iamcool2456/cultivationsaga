# Internal helpers

This folder contains helper scripts used by the dev environment.

- `start_server.py` / `stop_server.py` — Python helpers to start/stop Vite (write PID to project root)
- `install_deps.bat` — runs `npm install`
- PowerShell wrappers for convenience

## Local development

- Install: `npm install`
- Run dev server: `npm run dev`
- Run QA (Playwright):
	- One-time browser install: `npm run qa:install`
	- Run smoke suite: `npm run qa`

## Build / Preview

- Build for production: `npm run build` (outputs `dist/`)
- Preview production build locally: `npm run preview`

## Deployment (legit options)

This project is a static Vite site after `npm run build`. You can deploy the `dist/` folder to any static host.

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`

### Vercel

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

### GitHub Pages

GitHub Pages serves under a subpath like `/REPO_NAME/`, so Vite needs a matching `base`.

- Option A (recommended): set `base` in `vite.config.js` during deploy (e.g. `base: '/REPO_NAME/'`)
- Option B: keep `base: '/'` for local dev and set a deploy-only base via an environment-aware config

Then:

- Run `npm run build`
- Upload the contents of `dist/` to your Pages branch/folder
