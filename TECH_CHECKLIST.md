# Technical Checklist (Non-Visual)

Use this checklist to confirm the game is working technically (logic, save/load, tests).
Visual/layout/animation quality is intentionally not covered here.

## 1) Install dependencies

- Run the VS Code task: **Install Dependencies**
  - Expected: npm completes successfully.

## 2) Run the automated QA suite

- In a terminal (repo root):
  - `npm run qa`
- Expected:
  - Output ends with `6 passed` (or similar) and `Failed: 0`.
  - If failures occur, open the last report:
    - `npx playwright show-report`

## 3) Build sanity check

- `npm run build`
- Expected:
  - Build completes without errors.

## 4) Start dev server (manual smoke)

- Run the VS Code task: **Start Dev Server (Start)**
- Open the URL shown in the terminal (typically Vite on port 5173).
- Non-visual smoke checks (quick clicks):
  - Open/close side panels (Inventory, Actions, Sect, Shop) without console errors.
  - Trigger at least one repeatable action (e.g., Rest/Farm) and confirm progress completes.
  - Open Shop and purchase something affordable; confirm it lands in Inventory.

## 4b) Special actions behavior (manual)

Goal: confirm special actions behave consistently.

- In the Actions panel, click a few **Special Actions**.
- Expected (unless that action is explicitly designed to be repeatable/persistent):
  - The button disappears after it’s used (one-time story beats).
  - Cooldown/progress behavior is consistent with the design (many specials are timed).

Notes:
- Some specials have stamina gates via `onStart` and will not begin if stamina is insufficient.

## 4c) Sect behavior (manual)

Goal: confirm sect mechanics + restrictions are correct.

- Join a sect (when eligible) and confirm:
  - `currentSect` updates, manual tier is set, and sect multipliers apply.
  - Sect ranks UI can be opened and a duel can be started.
- Leave a sect (normal case) and confirm it clears sect state.
- Orthodox loyalty lock (only after the Orthodox chain completes):
  - LEAVE SECT is disabled and leaving does nothing.

## 4d) New story-chain integration (manual)

Goal: confirm the newer story branches are fully wired end-to-end.

- Heavenly Demon detour chain (mid-chain reload safety):
  - Start the detour.
  - Refresh the page mid-chain.
  - Expected: the correct continuation action(s) are present and clickable.

- Demon return-home branching (end-to-end):
  - Ensure the Return Home dialog offers 3 choices (Face / Go With / Run Away).
  - Pick each path on separate runs/saves and confirm it transitions correctly.

- Orthodox hide chain (end-to-end + reload safety):
  - Run Away → Discover → Saved (costs 5 stamina) → Loyalty.
  - Expected on completion:
    - Other manuals are removed.
    - Orthodox Manual is granted and equipped.
    - Player is forced into Orthodox sect and cannot leave.
  - Refresh mid-chain and confirm the correct step action reappears.

## 5) Save / reload sanity

- While in the game, refresh the page (or close+reopen).
- Expected:
  - Your state persists.
  - Actions that existed before refresh still work (rehydration).
  - If mid-story-chain, the correct special action(s) reappear (reload-safe injection).

## Optional: QA summary-only

- `npm run qa:summary`
- Expected:
  - A short summary printed without errors.
