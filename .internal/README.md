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

## Global leaderboards (Supabase)

GitHub Pages is static hosting, so a "global leaderboard shared across devices" requires a backend.
This project supports Supabase via simple HTTPS requests from the browser.

### Cost

Supabase has a free tier that is typically enough for small projects and early testing.
If the game grows (lots of traffic/writes), you may eventually hit free-tier limits and need to pay.

### 1) Create the table + policies

In Supabase:

- Create a new project
- Go to **SQL Editor**
- Run the script in `.internal/supabase_leaderboard.sql`

This creates `public.leaderboard` and enables Row Level Security (RLS).

Note: without player accounts/auth, the leaderboard is "honor system" (anyone can submit any username).

### 2) Configure local development

- Copy `.env.example` to `.env`
- Fill in:
	- `VITE_SUPABASE_URL`
	- `VITE_SUPABASE_ANON_KEY`

Then `npm run dev`.

### 3) Configure GitHub Pages deploy

This repo builds on GitHub Actions and deploys `dist/` to `gh-pages`.
Vite only embeds `VITE_*` variables at build time, so you must set GitHub Secrets:

- Repo → **Settings → Secrets and variables → Actions → New repository secret**
	- `VITE_SUPABASE_URL`
	- `VITE_SUPABASE_ANON_KEY`

After that, push to `main` and the deployed site will have global leaderboards enabled.

### If the live site is still missing config

Vite only embeds `VITE_*` variables at build time. If GitHub Secrets weren't set (or a deploy happened before they were set), the deployed bundle may not have the Supabase URL/key.

You have two lightweight override options that work on static hosting:

- **Option A (recommended):** fix GitHub Secrets and redeploy.
- **Option B (runtime override):** set the config in the browser and store it in `localStorage`.

In the live site DevTools console, run:

```js
window.setLeaderboardConfig('https://YOUR_PROJECT.supabase.co', 'YOUR_ANON_KEY')
```

This stores values under:

- `cultivationSagaSupabaseUrl`
- `cultivationSagaSupabaseAnonKey`

Then reopen the Leaderboards panel and hit Refresh.
