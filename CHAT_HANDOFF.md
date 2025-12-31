# Cultivation Saga — Chat Handoff (Dec 30, 2025)

This file is the authoritative “what’s true right now” handoff so you can start a fresh Copilot Chat (to avoid lag) without losing project context.

## Paste This Into The New Chat (Recommended)

Read `CHAT_HANDOFF.md` first. Then:
- Do NOT re-add removed forest/exploration content.
- Do NOT restore the old SECT/crossroads phase screen.
- Make changes surgically in `game.js` / `style.css` and keep save compatibility (migrations live in `loadGame()`).

## Project Map
- `game.js`: all game state, rendering, actions, story, combat, side panels, save/load + migrations.
- `style.css`: UI styling, including Sect pyramid styles and cultivation silhouette fill styling.
- `index.html`: entry point.
- `src/main.js`: Vite entry.
- `assets/`:
  - `Cultivation_silhouette_new.jpg`: the silhouette image.
  - `Cultivation_silhouette_new_mask.png`: the mask used for the fill effect.
- `tools/build_silhouette_mask.py`: generates the mask PNG (uses Pillow).

## Core Architecture (Important)
- Rendering is phase-based, but **legacy `phase: 'SECT'` is removed**.
- Side panels are created once and mounted into an overlay layer so re-renders don’t destroy/resets them; they are draggable/resizable.
- Persistence: `localStorage` save with migrations in `loadGame()`.

## Timed Special Actions System
- Timed actions are tracked in an internal `_timedActions` map.
- UI shows button progress (percent) while running.
- On completion, the corresponding special action disappears.
- Special actions are data objects in `state.specialActions` and are rehydrated after loading a save by mapping action `name` → callback.

## Cultivation “Silhouette Water Fill” (No Ripple)
- Requirement: the **silhouette itself** fills from feet upward “like water.”
- Implementation: uses `Cultivation_silhouette_new_mask.png` and CSS masking; fill height is driven by a CSS variable.
- Ripple/wavy animation was explicitly removed.

## 100-Silver Route Split (Timed, Disappears)
At the 100-silver story point, the game spawns special actions:

1) **Steady Coin** (business path)
- Cost: 100 silver.
- Locks route immediately.
- Starts passive income loop.
- Applies a hidden world modifier: reduces *non-guaranteed* special-event chance by 20%.

2) **Follow the Mysterious Cultivator** (Cloud Sect path)
- Cost: 100 silver.
- Timed action that spawns chained steps.
- Awards **Cloud Manual Tier 1**.
- Immediately joins **Cloud Sect**.

3) **Larger Bag Space**
- Guaranteed at the 100-silver threshold.
- Cost: 0.
- Timed (5 seconds), then disappears.
- Effect: +5 max stamina.
- No inventory item is created.

## Passive Income + Hidden Event Modifier
- Business passive income: every 5 seconds: +5 silver, +15 copper.
- Hidden modifier: reduces non-guaranteed special-event chance by 20% when business-oriented.

## Sect Rank Pyramid Duels (Current System)
- “Sect Ranks” is now a clickable in-panel pyramid:
  - Outer: 6 ranks
  - Inner: 5 ranks
  - Core: 4 ranks
  - Master: 3 ranks
  - Elder: 2 ranks
  - Leader: 1 rank
- Clicking a node triggers a **rank duel** via the combat system.
- On victory, the player takes that exact rank (layer + number).
- Uses a generic combat context so duels can be handled cleanly on win.

## Save Compatibility / Migrations
- `loadGame()` contains migrations that:
  - Normalize missing/new fields.
  - Filter removed legacy special actions out of older saves.
  - Migrate old `phase === 'SECT'` saves back to the main gameplay phase.
  - Remove unused/legacy flags (examples already cleaned up include duplicate/unused fields).

## Removed / Deleted Content (Do Not Re-Add)
- “Explore the Nearby Forest” special action is fully removed.
- Entire forest chain is removed from spawning and stripped from old saves.
- Old SECT crossroads/phase screen renderer is removed.
- Old stubs like `window.startBusiness`, `window.joinSect`, `window.showSectChoice`, `window.goWithMysteriousCultivator` were removed during cleanup.

## Where To Look In Code (Fast Pointers)
- Timed actions: `_timedActions`, `startTimedAction`, progress display.
- Special-action spawn/filters: actions panel logic and the 100-silver injections.
- Rehydration: callback mapping by action name after loading.
- Event chance modifier: `rollSpecialEventChance(baseChance)`.
- Business income tick: the main tick/loop section that increments `incomeCycleSeconds`.
- Sect rank UI + duel hook: pyramid render helper and `window.sectChallengeRank(...)`.

## What’s “Done” vs “Watch For”
- Done: cultivation fill, 100-silver split, Larger Bag Space, forest removal, sect pyramid duels, legacy stubs/SECT screen removal, safe migrations.
- Watch for: very old saves that reference deleted action names; if anything breaks, add a small filter/migration in `loadGame()`.

## Quick Repro Checklist (For New Chat)
- New save: earn 100 silver → verify the three special actions appear.
- Pick **Steady Coin** → verify income ticks + event chance reduction (only for non-guaranteed events).
- Pick **Follow the Mysterious Cultivator** → verify Cloud Manual Tier 1 + joined Cloud Sect.
- Click **Larger Bag Space** → after ~5 seconds, verify +5 max stamina and action disappears.
- Open Sect panel → Sect Ranks pyramid opens → click a node → duel → win → rank updates.
