# Mythoras — MVP UI Shell One-Shot Brief (v2)

This supersedes `PROMPT.md` (v1). v1 produced a prototype the project owner rejected as generic —
invented RPG-default stats with no basis in canon, no sense of spatial scale, flat un-crafted
chrome, and dev-only controls indistinguishable from real game UI. Two review passes (one against
the design docs, one against the rendered output) diagnosed exactly why. This brief bakes both
sets of findings in directly, as **hard, checkable constraints** rather than mood adjectives —
that distinction was the root cause of the v1 failure: wherever v1 described mood/reference
qualitatively ("faceted," "carved," "dense," "crafted") with no concrete target, the model defaulted
to the blandest thing that technically satisfied the words. Every constraint below is written to be
self-verifiable against a number or a rule, not a feeling.

This is a standalone prompt — usable in a fresh session, pasted into a fresh model, or handed to
any other model, independent of the conversation that produced it.

## Context

Mythoras is an ARPG-style game design project, currently 100% prose documentation (no
implementation exists). This brief asks for a **disposable, aggressively-built visual/interaction
prototype** of the MVP UI shell — not production code, not a seed for the real app (the real game
is planned as Tauri 2 + React 18 + Zustand, entirely separate). The goal is to see the layout,
navigation, and "engine parts" (tile system, view transforms, HUD) in an actually-interactive form,
using the game's **real vocabulary and real spatial scale**, so the team can react to it and
iterate. Rough/unpolished is fine and expected. Generic and unrecognizable is not — the previous
attempt's colors and typography were fine; everything else needs to change.

## Deliverable

**One single self-contained HTML file.** Everything inlined: CSS in a `<style>` tag, JS in a
`<script>` tag, no external CDN links, no external fonts, no external images (use inline SVG /
CSS-drawn shapes / canvas for all visuals). It must run by opening the file directly in a browser
with zero build step — the viewing environment blocks all external network requests (CDNs, fonts,
remote images, fetch/XHR/WebSocket), so anything not inlined will not load.

Do not componentize into multiple files or use a React/build-tooling approach. One well-organized
file, clearly sectioned, is correct for this pass.

---

## PART A — Ground-truth vocabulary (MANDATORY — do not invent alternatives to any ✅ item)

This section exists because v1 was told "none of this needs to match real game data, it does not
exist yet" — that instruction was **false** and directly caused invented stats with no basis in the
docs. Everything marked ✅ below is real, decided canon and MUST be used correctly. Items marked ⚠
are genuinely unresolved in the docs — for those, either omit the detail or clearly render it as a
placeholder (e.g., a name in a "TBD" state), but do not silently invent a confident-sounding
alternative.

### A1. Attributes (Technician-scope stats — NOT damage types, NOT creature stats)

✅ Four core attributes, each driving a distinct defense layer, all resolving into one **Life** pool:

| Attribute | Identity | Governs offense | Governs defense layer |
|---|---|---|---|
| **Authority** | Strength, raw power, endurance | Physical damage, weapon skills | **Armour** |
| **Invictus** | Precision, speed, lethality | Weapon precision, burst | **Evasion** (Dodge + Buffer) |
| **Animus** | Supernatural mastery | Spell effects, ailment magnitude | **Oura** (temporary shield-like layer) |
| **Order** | Discipline, control, structure | Duration/control skills | **Barrier** |

Plus a fifth, generalist pseudo-attribute **Wanderer**, used only by the generalist Foundation.

❌ **Never use**: "Vigor," "Resolve," "Stamina," a generic "Affinity" stat, or any scalar "ATK" /
"DEF" stat. These have no basis in canon and must not appear anywhere in the prototype.

These are **Technician-scope** stats (see A3) — they belong on the Foundation-select screen and
any Technician/Grid-related UI, NOT on individual creature cards.

### A2. The 11-damage-type system (creature-scope — this is what makes a creature a creature)

✅ **11 damage types**: Inferno, Glacial, Voltaic, Eldergrove, Blight, Tidal, Psionic, Fae, Phantom,
Physical, Tectonic.

✅ Grouped into **4 loose Categories** (Physical / Primal-Elemental / Biotic-Elemental / Phenomena)
— categories are shorthand/navigation only, never shown as if they were themselves a type.

✅ A creature's defensive identity = its **Primary damage type + Secondary damage type** (Secondary
is a minor ±0.10–0.15× bias layer, not equal-weighted with Primary).

✅ A skill/attack's offensive type = the damage type printed on the **Skill Card** being used — not
a creature-level "attack type."

✅ **Origin** (e.g. Scalesbourne, Martial, Arcane) is heritage/flavor, tertiary — never presented as
a type axis. **Tags** (Winged, Draconic, Grounded, Aquatic, etc.) are a separate, third interaction
layer, distinct from types and Origin.

✅ **Speed** is a real per-creature stat — it governs **initiative/turn ordering** in the Turn
Program (who acts first), not movement range. It is fine to show Speed on a creature card.

✅ Real per-creature offensive stat rows that ARE legitimate to show: damage, crit chance, crit
multiplier, accuracy, attack speed. Real resources: creature **Mana**.

❌ **Never invent**: damage types other than the 11 listed (no "Stone," "Ember," "Wind," "Thorn,"
"Forge," etc. — the closest real equivalents are Tectonic and Inferno, use those exact names). No
scalar "ATK" or "DEF" on a creature card.

⚠ No creature species roster is authored yet — inventing placeholder creature names (e.g.
"Glasswing Sprite") is fine and expected, AS LONG AS each placeholder creature is given a real
Primary/Secondary type pair from the 11 above, not an invented type.

### A3. Ownership scope — Technician vs. creature (do not conflate these two)

This distinction is explicitly flagged in canon as critical — conflating them "collapses the game
into a single-avatar ARPG."

- **Technician (global, one per player)** owns: the **Motherboard Grid** (passive-tree-style
  attribute investment), **Command Deck**, **Command Charges** (a resource), Technician Level. The
  four Attributes (A1) live here.
- **Creature (local, one per squad member)** owns: Skill Frame, Skill Cards, gear, Creature Level,
  **creature Mana**, its species identity (Primary/Secondary damage type, Origin, Tags), Speed,
  Life.

**Practical rule for this brief: the Foundation-select screen is Technician-scope UI (attributes,
Grid-start framing) — it must NOT show a creature-style stat card. Creature/squad UI (portraits,
overlay cards) is creature-scope — it must NOT show Technician attributes.** This single rule fixes
the v1 mistake of giving both the same generic stat-card shape.

### A4. Foundation (the entry-screen concept)

✅ Foundation = the Technician's **immutable** starting identity: it sets the starting position on
the Motherboard Grid and biases toward one Attribute. Immutable means a materially different build
later requires starting a **new** Technician (a fresh campaign) — it is a permanent, one-time,
pre-run choice, which is why a ceremonial class-select-style screen is the right shape for it.

✅ **Use these 5 Foundation names** (most recently decided set): **Commandant: Orsoth** (Authority),
**Interceptor** (Invictus), **Luminary Arbiter** (Animus), **Architect** (Order), **Adverse Errant**
(Wanderer / generalist).

⚠ Note for transparency, do not silently resolve: an older doc lists a different Foundation name
set (Warlord / Bladedancer / Architect / Channeler). The 5 names above are the more recently
reaffirmed set and should be used, but if you want to signal the uncertainty, a small
"working name" annotation on the card is fine — don't invent a third, different name set.

**What a Foundation card should show**: its Attribute identity (from A1), a short line about its
Grid starting bias / early playstyle framing, and flavor text in the correct tonal register (see
A6) — NOT a Vigor/Resolve-style stat block.

### A5. Spatial scale — tile, zone, region (this is what was completely missing in v1)

✅ Canon hierarchy, largest to smallest: **World Map → Region → Zone → Section → Tile.**

✅ Rendered as **one persistent scene at three camera scales** (camera tweens between them, no
scene reloads):

| Scale | Approx. zoom | What it shows |
|---|---|---|
| **Regional Atlas** | ~0.1× (out of scope for this pass, see below) | The whole Region as zone-nodes (floating diamonds) connected by paths |
| **Zonal Map** | ~1.0× | One playable Zone — a landscape made of tile-chunks, divided into Sections, connected by traversal paths |
| **Battle Arena** | ~2.0× | The tactical grid, zoomed onto the **encounter's own tiles** — the *same* zone tiles, not a separate arena |

✅ **Adaptive continuity**: entering battle is a camera push on the existing Zonal Map tiles, not a
scene swap. Location, fixtures, and approach direction persist between traversal and battle.

✅ **Battle footprints are variable and asymmetric — a fixed square grid is explicitly retired
canon.** Do not build a fixed 8×8 (or any fixed N×N) board. The playable tile-set for a battle
should be an irregular cluster of tiles (e.g. an L-shape, a cluster with a gap for water/obstacles,
an asymmetric footprint) that reads as a *piece of the zone*, not a generic checkerboard.

**Scope decision for this pass**: build the **Zonal Map** scale only (this is the "first buildable
vertical" — one zone, traversal → battle → traversal). The Regional Atlas (Region-scale, zone-node
diamond board) is explicitly OUT OF SCOPE for this prototype — do not build it, not even as a stub.

**What this means concretely for the tile view**: what you are building is **one Zone**, rendered
as a landscape of tile-chunks. A single tile is one voxel/cell of that landscape — roughly the
footprint one creature stands on. The zone should read as a *place* (a bounded landscape with edges,
terrain variation, a few landmark props), not an abstract floating grid with no boundary.

### A6. Tone register

✅ The world is an inhabited **arcane/mystical fantasy world FIRST**, with a latent
computational/"Protocol" substrate implied underneath (subtle circuitry-in-stone motifs, glowing
seams are fine as accents). This is explicitly NOT cyberpunk/Tron/apocalypse-tech, and NOT primarily
a tech-biology look. It is also NOT generic medieval sword-and-sorcery ("the old stones remember
every siege" register) — keep flavor text a notch more structural/compiled-feeling than that,
without tipping into sci-fi.

---

## PART B — Craft constraints (numeric, checkable — this fixes "why it felt generic")

The single biggest lesson from reviewing v1: **wherever a concrete/minimum instruction existed
alongside a mood cue, the concrete instruction won and the mood cue was lost.** So every constraint
below is written as the actual target, not a floor with a mood cue bolted on separately.

### B1. Frame / border treatment

- **Do not use `border-radius` as the "crafted" treatment anywhere.** Rounded rectangles with a thin
  border read as generic dashboard chrome, not a carved/faceted instrument.
- Panels, buttons, and portraits must use **clipped/notched corners** (CSS `clip-path` polygons —
  e.g. corners cut at a diagonal, or a hexagonal/octagonal panel silhouette), not rounded corners.
- Every panel must have a visible **two-tone bevel**: a lighter edge on one side (e.g. top-left) and
  a darker edge on the opposite side (e.g. bottom-right), so it reads as having physical depth/an
  angled carved surface — not a flat color fill with a 1px outline.
- Every panel corner or title bar must carry at least **one ornament element with real thickness**
  (a bracket, rivet, or engraved glyph shape at least a few pixels wide) — not a 1px L-shaped line.

### B2. Tile / material treatment

- Each tile must be built from **at least 2 distinct material/shading layers** beyond its base flat
  fill — e.g. an inner engraved bevel line plus one texture/seam/rim-light detail. A tile that is
  only "one flat color + one stroke" is not acceptable.
- Tiles must vary — not every tile in the zone should be the same flat material. Include some
  visible terrain variation (e.g. a patch of a different ground material, a cracked/mossy tile, a
  raised or lowered tile) so the zone reads as a place, not a uniform checkerboard.

### B3. Scale and framing of the world/zone view

- The rendered zone art (the tile landscape) must fill **at least 60% of the shorter dimension of
  its viewport container.** Measure this — if your tile size / grid dimensions produce less than
  60% fill, increase tile size or reduce empty margin, don't just center a small board in a big box.
- The zone must sit on a **visibly framed ground** — not a transparent void. Include at least one
  of: a drawn ground plane/platform edge under the tiles, a horizon or fog/vignette gradient at the
  scene edges, or bounding terrain (rocks, water, tree-line) around the playable tiles — something
  must visually explain what's "off the edge" of the zone, so empty space reads as deliberate
  atmosphere, not as "nothing rendered here."
- Include **one object of clearly readable scale** on the board (e.g. a doorway, a standing
  stone/pillar, or a character-height marker) so a viewer can infer "this is roughly how big one
  tile/one creature is" at a glance. A bare token (a plain circle/dot) does not satisfy this — the
  player's marker itself should read as creature-scaled (a small humanoid/creature silhouette, not
  an abstract disc).
- Placeholder character/creature art (Foundation-select art, the player token, enemy markers) must
  be a **recognizable creature/humanoid silhouette shape** — a distinguishable head/body/limb
  silhouette, even if crude and flat-colored. An abstract glow-blob or a bare geometric primitive
  (plain circle, plain triangle) is NOT acceptable as placeholder character art.

### B4. Panel density (fixes the "empty Workspace dock" problem)

- **Hard rule: no panel may be an empty bordered box.** Every panel (including every Workspace
  dock) must contain **at least 6 distinct pieces of visual information** — e.g. a grid of at least
  4×4 icon cells, or at least 6 labeled data rows, or a populated list with several entries plus a
  header. "A title, one icon, and one line of flavor text" is explicitly NOT sufficient density —
  that exact pattern is what produced the failure being corrected here.
- Concrete per-dock content (Workspace View, see Part C) is specified below — use it, don't
  substitute a sparser placeholder.

### B5. Dev/meta UI must be visually segregated from diegetic game UI

- The top-down/isometric view toggle (and any other dev-only control) is explicitly **NOT part of
  the in-fiction game UI** — in the real app these would live in a separate developer tool/window.
  They must be rendered in a **visually distinct dev rail**: monospace font, a cool/desaturated
  color temperature clearly different from the game's accent colors (e.g. slate-gray or cyan-gray,
  never the game's gold/warm accent), and a literal small **"DEV"** label on the rail.
- This dev rail must be positioned so it reads as clearly separate from game chrome — e.g. docked
  to one screen edge with a visible gutter/gap between it and the nearest game panel, not tucked
  into the same corner using the same frame style as real HUD elements.

### B6. Self-check before finalizing

Before finishing, verify the output against this checklist (all must be true):

- [ ] No `border-radius`-rounded panel is used as the "crafted" treatment anywhere; all panels use
      clipped/notched corners with a two-tone bevel.
- [ ] Every tile has ≥2 material/shading layers; the zone shows visible terrain variation, not a
      uniform checkerboard.
- [ ] The zone/tile art fills ≥60% of its viewport container's shorter dimension.
- [ ] The zone has a visible ground/frame/boundary treatment — nothing floats in a transparent void.
- [ ] At least one clearly creature/humanoid-scaled reference object exists on the board.
- [ ] The player token, enemy markers, and Foundation-select art are recognizable creature/humanoid
      silhouettes, not bare geometric primitives or abstract glows.
- [ ] No panel (including every Workspace dock) is an empty box — each has ≥6 distinct pieces of
      visual information.
- [ ] The dev-only view toggle is in a visually distinct monospace/cool-tone rail labeled "DEV,"
      never styled like real game chrome.
- [ ] Every stat/attribute/damage-type/Foundation name used matches Part A exactly, or is clearly
      marked as an intentional placeholder (creature species names only).
- [ ] No fixed N×N battle grid — the battle footprint is an irregular/asymmetric cluster of tiles.

---

## PART C — Screens (in navigation order)

### 1. Foundation-select (entry screen, replaces a title screen)

Shown on load, before the Zonal Map. Layout inspiration: Path of Exile's ceremonial class-select
(large character art, atmospheric backdrop, a text/lore panel) blended with a Slay the Spire–style
layout (character art + a stat/trait readout card + a thumbnail roster strip along the bottom to
switch options + back/confirm buttons).

Use the **5 real Foundations from A4**: Commandant: Orsoth, Interceptor, Luminary Arbiter,
Architect, Adverse Errant. Each card shows: a creature/humanoid-silhouette placeholder portrait
(per B3), its Attribute identity (Authority/Invictus/Animus/Order/Wanderer, per A1), a short
Grid-start/playstyle framing line, and flavor text in the tonal register from A6 (structural/compiled
mystical, not generic medieval siege language). This is Technician-scope UI — no creature-style
ATK/SPD stats here. Confirming a selection transitions into the Zonal Map.

### 2. Zonal Map (default gameplay view — this replaces "World View" naming; it is one Zone)

The zone/tile view dominates the viewport, built per Part A5 and Part B2–B3 (a bounded, framed,
terrain-varied landscape, not an abstract floating grid). The **only persistent UI chrome**:

- **Five creature-portrait slots along the bottom** — the squad (3 Field + 2 Bench, per A2/current
  canon — visually distinguish Field from Bench, e.g. Bench slightly dimmed/inset/smaller). No
  health bars. Placeholder creature portraits must be recognizable creature silhouettes (per B3),
  each with a real Primary/Secondary damage-type pair (per A2) — not invented types.
  Clicking/hovering a portrait shows a lightweight overlay card (a small popover over the world, not
  a full screen) with: creature name, Primary/Secondary damage type, Speed, and one line of flavor —
  this is creature-scope UI, no Technician attributes here.
- A small hint/label for the Workspace hotkey (e.g. "[Tab] Workspace").
- The dev-only top-down/isometric toggle, rendered per B5 (segregated dev rail, not game chrome).

Click a destination tile to move the token there (simple animated slide is enough, no real
pathfinding needed). Arrow-key movement is a nice-to-have. Place at least one visually distinct
**encounter tile** somewhere in the zone — moving the token onto it triggers the Battle Arena
(screen 4).

### 3. Workspace View (hotkey-invoked overlay/transform)

Pressing a hotkey (e.g. Tab or `W`) triggers a real layout transform: the Zonal Map visually
contracts toward the center, and outer dock panels slide/fade in around the edges. Reversing the
hotkey (or a close control) undoes the transform.

Populate **4 docks with real, dense placeholder content** (per B4 — none of these may be a bare
title+icon+line):

- **Motherboard Grid** — render a small placeholder passive-tree lattice: at least a 5×5 grid of
  connected nodes with lines between them, a couple of nodes visually "allocated" (highlighted),
  labeled with the Attribute names from A1 near relevant clusters.
- **Forge Terminal** — a placeholder crafting panel: an item-card silhouette with at least 4-6
  placeholder modifier/affix line rows, plus a currency/material icon row (3-4 icons).
- **Cipher Network** — (use this name, not "Cipher Console") a placeholder endgame board preview:
  a small cluster of at least 6-8 connected node icons with tier-numeral badges, echoing (not
  copying) a carved-stone instrument quality bar.
- **Dossier Log** — a placeholder progression tracker: at least 5-6 log rows, each with a
  timestamp-style label, a source name, and a progress indicator (e.g. a small bar or fraction).

### 4. Battle Arena (triggered by touching an encounter tile)

Reuses the same zone tiles per adaptive continuity (A5) — camera pushes in, no scene swap. The
playable battle footprint must be an **irregular/asymmetric cluster of tiles** (per B6 checklist),
not a fixed square. Add placeholder enemy units (creature-silhouette markers per B3, each with a
Primary/Secondary type) on a few tiles.

HUD chrome inspired by Into the Breach's clean layout (**layout/chrome only — do NOT replicate its
enemy-intent telegraphing**; this game has a locked no-telegraphing stance — enemy actions must
never be previewed before the player commits their turn):

- Corner readouts: turn counter, and a Command Charges or creature Mana placeholder readout (per
  A2/A3 — not an invented "Aether" resource).
- A visible **Planning Phase vs. Execution Phase** indicator — a toggle/animation between the two,
  triggered by an "End Turn"-style control.
- Placeholder damage-preview numbers or floating combat text on hit.
- A bottom info card area for contextual info (what's under the cursor).
- No enemy-intent/telegraph icons, no highlighted "danger" tiles before commit.

A "Retreat"/"End Battle" control returns to the Zonal Map on the same tile set.

---

## What NOT to build this pass

- No real combat math, no real creature roster/item data beyond what's specified — placeholders are
  fine where marked ⚠ in Part A, but must follow the real systems they plug into.
- No true 3D / WebGL / Three.js — stick to flat/vector 2.5D.
- No Regional Atlas (Region-scale zone-node board) — out of scope, see A5.
- No separate character/config editor tool (deferred to a future pass).
- No multi-file/React project structure — single HTML file only.
- No fixed N×N battle grid.

## Success criteria

Someone should be able to open the file, go through Foundation-select (5 real Foundations, correct
attributes, no invented stats) into the Zonal Map (a framed, terrain-varied, scaled zone — not a
floating grid), see the five-portrait rail with real damage-type-bearing creatures, toggle
top-down/iso via the segregated dev rail, click-move the token, hit the Workspace hotkey and see
the contract transform with four dense docks, walk onto the encounter tile and see an irregular
battle footprint with a working Planning/Execution toggle and End Turn control, then return to the
Zonal Map. Pass the Part B6 self-check list before finalizing.
