# Mythoras — MVP UI Shell One-Shot Brief

This is the accumulated brief from a grilling session, prepared as a standalone prompt in case it
needs to be re-run (pasted into a fresh Fable 5 session, or handed to any other model) independent
of this conversation's history.

## Context

Mythoras is an ARPG-style game design project, currently 100% prose documentation (no
implementation exists). This brief asks for a **disposable, aggressively-built visual/interaction
prototype** of the MVP UI shell — not production code, not a seed for the real app (the real game
is planned as Tauri 2 + React 18 + Zustand, entirely separate). The goal is to see the layout,
navigation, and "engine parts" (tile system, view transforms, HUD) in an actually-interactive form,
so the team can react to it and iterate — not to polish anything. Expect this to be thrown away or
heavily reworked.

## Deliverable

**One single self-contained HTML file.** Everything inlined: CSS in a `<style>` tag, JS in a
`<script>` tag, no external CDN links, no external fonts, no external images (use inline SVG /
CSS-drawn shapes / canvas for all visuals). It must run by opening the file directly in a browser
with zero build step. This constraint exists because the deliverable will be viewed in a sandboxed
artifact environment that blocks all external network requests (CDNs, fonts, remote images,
fetch/XHR/WebSocket) — anything not inlined simply will not load.

Do not componentize into multiple files. A single well-organized file (clear sections, sensible
function/module boundaries within the one file) is correct for this pass — do not attempt a
React/build-tooling approach.

## Visual direction

- **Dark base palette.** Void/near-black surfaces as the default background register.
- **One warm metallic accent** (amber/gold-family) **and one cool accent** (teal/cyan or magenta —
  your choice) used for interactive highlights, selection states, and positive/status feedback.
- **A small but noticeable polished/faceted border treatment** applied consistently across panels,
  buttons, portraits, and the outer shell — think a thin bevel/inset-line treatment rather than a
  plain 1px box-border; should read as "crafted," not default-browser-chrome.
- **Iconographic hotbar/panel language** inspired by RuneScape 3 and Path of Exile's UI conventions
  (dense icon grids, tabbed panel groups, ornamented frame corners) — but do not copy either
  game's specific color system.
- **World tone**: an inhabited **arcane/mystical fantasy world FIRST**, with a latent
  computational/"Protocol" substrate implied underneath (subtle circuitry-in-stone motifs, glowing
  seams, etc. are fine as accents) — this is explicitly NOT a cyberpunk/Tron/apocalypse-tech
  aesthetic, and NOT primarily a "tech-biology" look.
- **References to draw mood/quality-bar from, not copy literally**: Path of Exile 2's Temple
  Console (carved stone/bronze "instrument" quality, diamond isometric board, co-located icon +
  tier-numeral iconography), the old League of Legends client (dark navy with faceted/cracked
  panel edges, warm gold trim), RuneScape 3/OSRS (dense iconographic side UI, warm point-lit hub
  spaces). Explicitly avoid duplicating PoE2's specific stone-carved color palette or Expedition
  33's specific palette as literal templates — treat all references as mood/quality inspiration,
  not skins to copy.
- Typography: a clean, slightly geometric sans-serif (system font stack is fine — e.g.
  `-apple-system, "Segoe UI", sans-serif` — since no external fonts can load), uppercase panel
  headers with letter-spacing read well against this kind of dark UI.

## World/tile rendering — 2.5D isometric, NOT true 3D

Build the world/tile view as **flat/vector 2.5D isometric**, not a real 3D engine (no WebGL/Three.js
needed — this is a deliberate choice to keep the one-shot low-risk and the result easy to throw
away and rebuild). Achieve a "chunky, low-poly blockout" read the same way Into the Breach and
similar isometric tactics games do: draw each tile as a **top diamond face + two side
parallelogram faces**, each face a distinct flat shade of the same hue (light top, mid-tone
left/right side) to fake extrusion and volume — hard edges, no gradients, no textures.

**Two view modes for the same tile grid, togglable**:
1. **Top-down flat "designer" view** — tiles as plain top-down squares/diamonds, no fake-3D
   extrusion, for fast layout/debug reading.
2. **Isometric "feel" view** — the same grid data rendered with the extruded-look tiles described
   above, at a fixed isometric camera angle (no free rotation needed).

Provide a visible toggle control to switch between the two modes. In either mode:
- The grid should support a movable token/marker representing the player's current tile.
- **Click a destination tile to move the token there** (simple step/slide animation is enough — no
  real pathfinding around obstacles required for this pass, a straight animated move is fine).
- Arrow-key movement is a nice-to-have if time allows, not required.

## Screens (in navigation order)

### 1. Foundation-select (entry screen, replaces a title screen)

A placeholder character/build-selection screen, shown on load, before the World View.
Layout inspiration: Path of Exile's ceremonial class-select (large character art, atmospheric
backdrop, a text/lore panel) blended with a Slay the Spire–style layout (big character art on one
side, a stat/trait readout card, a thumbnail roster strip along the bottom to switch between
options, back/confirm buttons). Populate with 3-4 placeholder "Foundation" options (invented
placeholder names/art/one-line flavor text — none of this needs to match real game data, it does
not exist yet). Confirming a selection transitions into World View.

### 2. World View (default gameplay view)

The tile/world view dominates the viewport. The **only persistent UI chrome** is:
- **Five creature-portrait slots along the bottom** representing the player's squad (3 "Field" +
  2 "Bench" — visually distinguish Field from Bench, e.g. Bench slots slightly dimmed/inset/smaller).
  No health bars. Placeholder creature icons/art are fine.
  Clicking or hovering a portrait shows a **lightweight overlay card** (not a full screen — a
  small popover/panel over the world) with placeholder creature info (name, a couple of stats,
  flavor text).
- A small hint/label indicating the hotkey to open Workspace View (e.g. "[Tab] Workspace").

No sidebar, no permanent side panels, no health bar. World View should feel like the world/tile
grid is the entire game, with just the portrait rail anchoring the bottom edge.

Include the top-down/isometric toggle control (from the tile rendering section above) visibly
somewhere in World View — it can be a small unobtrusive control, doesn't need to be prominent.

Also place at least one visibly distinct **encounter tile** somewhere on the grid — moving the
token onto it should trigger the Battle stub (screen 4).

### 3. Workspace View (hotkey-invoked overlay/transform)

Pressing a hotkey (e.g. Tab or `W`) from World View triggers a real **layout transform**, not a
screen swap: the world view visually contracts/shrinks toward the center of the screen, and
**outer dock panels slide/fade in around the edges**. Include 4 placeholder docks, one each for:
**Motherboard Grid, Forge Terminal, Cipher Console, Dossier Log** — each just needs a labeled
panel with a "coming soon" / placeholder state (a title, an icon, maybe one line of flavor text —
no real functionality needs to exist behind them for this pass).

Pressing the hotkey again (or a close control) reverses the transform back to normal World View.

### 4. Battle stub (triggered by touching an encounter tile)

Reuses the **same tile grid** (adaptive continuity — no separate arena/scene swap, the battle
happens on the same board the player was just standing on). Add placeholder enemy units on a few
tiles. HUD chrome, inspired by Into the Breach's clean layout (**layout/chrome only — do NOT
replicate its enemy-intent telegraphing**: this game has a locked "no telegraphing" design stance,
enemy actions must NOT be previewed before the player commits their turn):
- Top-left and/or top-right: a couple of small status/counter readouts (placeholder labels/values
  are fine — e.g. a turn counter, a placeholder resource readout).
- A visible **Planning Phase vs Execution Phase indicator** (this is the core thing to get across —
  the player queues actions during Planning, then everything resolves during Execution; a simple
  toggle/animation between the two states triggered by an "End Turn" style button is enough).
- Placeholder damage-preview numbers or floating combat text on hit (no real numbers need to be
  accurate, just show *something* appears/animates on impact).
- A bottom info card area for contextual info (e.g., what's under the cursor).
- No enemy-intent/telegraph icons or highlighted "danger" tiles before the player commits.

A simple "Retreat"/"End Battle" control should return to normal World View on the same tile grid.

## What NOT to build this pass

- No real combat math, no real creature/item data, no real skill system — everything is
  placeholder/dummy content wired into a real, interactive shell.
- No true 3D / WebGL / Three.js — stick to flat/vector 2.5D as specified above.
- No separate character/config editor tool (a related idea, explicitly deferred to a future pass).
- No multi-file/React project structure — single HTML file only.

## Success criteria

Someone should be able to open the resulting HTML file, click through Foundation-select into World
View, see the five-portrait rail and click a portrait for an overlay card, toggle top-down/iso and
click-move the token across the grid, hit the Workspace hotkey and watch the contract-toward-center
transform happen with four placeholder docks, walk onto the encounter tile and see the battle stub
with a working Planning/Execution phase toggle and an End Turn control, then return to World View.
Rough edges and unpolished placeholder content are expected and fine — a working, clickable
skeleton that gets the layout/navigation/mood right is the goal.
