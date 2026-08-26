# Singular Practical Pathway — Ready for Build Prep

**Date:** 2026-08-06  
**Kind:** One preferred pathway for practical building — not a locked GDD, not a sprint plan.  
**Supersedes as default choice:** multi-fork menu in [PATHWAYS_PRACTICAL_ACTUALIZATION_2026-08-05.md](PATHWAYS_PRACTICAL_ACTUALIZATION_2026-08-05.md) (that file remains the option menu).  
**Incorporates:** owner answers ([RESEARCH_OWNER_ANSWERS_2026-08-06.md](RESEARCH_OWNER_ANSWERS_2026-08-06.md)), DD / MoP / Montabi research, and 2026-08-06 deltas below.

**2026-08-16:** `apps/mythoras-mde` removed. Live editor is `apps/mythoras-ade-prototype` (ADE). Rail 2 below is historical.

---

## 1. One sentence

**Build a Mythoras Dev Environment window first (Creature + Zone/Tile modules), then a basic net2D greybox that consumes those fixtures for adaptive-continuity combat with a thin Turn Program and InfoBand — and park almost everything else.**

---

## 2. Non-negotiables (already decided enough to build against)

| Constraint | Source |
| --- | --- |
| World View default + Workspace on demand; no permanent surrounding management chrome | CONTEXT #8 |
| First play proof = one-zone traverse → battle-in-place → resume + thin Turn Program | Wayfinder / start-path research |
| Greybox = **basic** color nets / squares; no stone/grass shader polish | Owner answers |
| MDE v1 = **Creature + Zone/Tile** modules in one window; no server-backed authoring yet | Owner answers + 2026-08-07: both |
| Shared multi-cell Technician stash later; gear per creature later | Owner answers |
| Skill *emergence* = actives + supports/utilities; **representation open** (action-bar lean over deck-draw cards) | Owner + skills exploration |
| Visual language open; invent Mythoras layout grammar (DD band split is a **lean**, not mandatory chrome) | Owner 2026-08-06 |

---

## 3. The singular pathway (three rails, one critical path)

```
Rail 0 (short): Thin seam contract        ← optional half-session if ambiguity burns you
        │
        ▼
Rail 2 (NOW FIRST): Mythoras Dev Env window
        │  modules ON: Creature + Zone/Tile
        │  modules STUB: Combat, Loot, Currency, …
        │  shared: fixture I/O, seed bar, net2D viewer
        ▼
Rail 1 (CRITICAL PLAY PATH): Greybox host + thin Turn Program + InfoBand
        │  consumes fixtures from Rail 2
```

### Rail 0 — Thin seam contract (optional)

Only if start/end/stubs for the first playable seam are still fuzzy.

- Stress-test Wayfinder one-zone adaptive-continuity against `.scratch/mythoras-project-spine/issues/01-define-first-playable-seam.md`.
- Output: one-page acceptance checklist + explicit fakes list.
- **Stop** when the checklist exists — do not grill the whole GDD.

### Rail 1 — Critical path: playable ugly seam

**Session goals (1–3 sessions of framing, then implement):**

1. **Net2D authored fragment** — entrance, landmark, encounter footprint, exit. Color tiles only (e.g. green/brown ground, yellow sand). Tokens for creatures.
2. **Adaptive continuity** — battle on the same physical place; resume traversal after.
3. **Thin Turn Program** — 3 Field creatures; plan → commit → automatic Speed/timing order; ≥2 rounds; one skill/support swap allowed as stub.
4. **InfoBand skeleton (Mythoras grammar, DD-inspired lean)**  
   - Upper: scene / board (tiles + tokens).  
   - Lower: information / decisions.  
   - **Right side of InfoBand:** sequencing and/or **context widgets** for battle moments (owner idea — experiment; not final UI).  
   - Glanceables: HP (+ maybe key attrs); click/select for depth later.  
   - Empty Field/Bench slots as clear outlines (Montabi spice only).
5. **No** Workspace polish, no spatial stash product, no paper-doll product, no tile art pass.

**Evidence it worked**

- You can play traverse → fight → resume without debug cheats explaining the loop.
- Turn Program order is readable from the InfoBand / board previews without a spreadsheet.
- You can list what the InfoBand *must* show vs what can wait for a click.

### Rail 2 — First build: Mythoras Dev Environment window (Creature + Zone/Tile)

**Owner lock (2026-08-07):** do **both** Creature and Zone/Tile in v1. Other modules may appear as disabled nav stubs.

1. **App shell** — sidebar/nav, seed bar, load/save fixture pack, `TOOLS_ONLY` framing (not player HUD).
2. **Creature module** — author/view/generate creatures (stats, tags/origins stubs, skill stubs as data); table + detail; export instances/defs.
3. **Zone/Tile module** — net2D author/view/generate zone fragments and battle footprints (color nets only; entrance/landmark/encounter/exit grammar stubs).
4. **Shared net2D viewer** — one map widget used by Zone/Tile (and later Combat layouts).
5. **Fixture contract** — local folder/JSON packs both modules write; greybox (Rail 1) reads the same packs. **No** server product.

**Stub in nav only (not v1 scope):** Combat procedure, Loot, Currency/Agents, Cipher juice.

**Evidence it worked**

- Create a creature pack + a zone/tile pack from the window.
- Reload the app and see the same fixtures.
- Greybox (when started) can load those packs without re-authoring in spreadsheets.
- You would rather edit here than in a raw spreadsheet for creature shape *or* zone nets.

**Kill criteria:** If the window grows Combat/Loot/polish before fixtures feed a playable greybox, stop — ship Rail 1 using what Creature + Zone/Tile already export.

---

## 4. Explicit park list (do not build on the critical path)

| Parked | Notes |
| --- | --- |
| PoE Luminary / Technician Foundations as build feature | Correct research vector: [RESEARCH_POE_LUMINARY_MERC_VECTOR_2026-08.md](RESEARCH_POE_LUMINARY_MERC_VECTOR_2026-08.md). Explore after seam exists. |
| Battle Brothers “merc progression” as primary | Wrong target for that ask; BB = stash/gear UX evidence only. |
| Pokémon-scale creature collecting | Not the fantasy. SSF-like **optional** storage for later-useful creatures — idea vector. |
| Breeding / Synchro-as-combine / Influence-like mod-pool ops | Idea vectors only; Synchro = break-down inspiration, not literal. |
| DD Stress Affliction copy | Liked as **shell** + Pokémon status carry; rename. Note: CONTEXT already has **Load** (fatigue) — do not conflate without a grill. |
| Mortality meme-stat | Idea vector (scarce invest, stacking). |
| Semi-Nuzlocke / hardcore permanent creature death | Planned challenge mode — not seam scope. |
| Exact PoE passive tree | Remake principles only. |
| Resist formula / Cipher juice / loot generator | Later; GD-hybrid resist lean stands as research preference. |
| Skill Cards as locked metaphor | Representation open; action-bar lean; emergence model stays. |
| Fusion/synchro as fixed system | Demoted idea vector. |
| Tutorial tracks / vocab pass / audience concerns | Not now. |
| Server-backed MDE | Explicitly deferred. |

---

## 5. Layout grammar (what “InfoBand” means here)

Owner clarifications:

- DD’s scene/info split is **as good a lean as any**; BB was never a full layout doctrine.
- Mythoras may invent its own grammar.
- Lower InfoBand **right side** may hold **sequencing** and **context widgets** for battle states.
- Goal ≠ Pokémon UI; goal = succinct, click-for-depth, empty slots readable.

MoP lesson still applies for combat: **board-as-command-surface** + color grammar for reach/threat ([RESEARCH_MOP_CURSOR_EA_2026-08.md](RESEARCH_MOP_CURSOR_EA_2026-08.md)).

---

## 6. Creature economy stance (for later design, not Rail 1)

- Players **cycle creatures often**; storage is for SSF-useful later pieces, not a living Pokédex.
- Optional backlog with friction (Mewgenics-like “must choose who comes”) remains interesting — park.
- Technician identity may later **globally** shape Squad rules (Luminary-shaped Foundation vector) while creatures stay local — park until after seam.

---

## 7. Skill system stance (for later design, not Rail 1)

- Keep **active + support/utility → emergent configs** (Materia→gems ethos).
- Prefer **action bar / preconfigured skills** over deck-draw bottom cards for now.
- Game log matters when combat feedback exists.
- Representation grill can wait; Rail 1 may stub skills as named buttons.

---

## 8. First practical build checklist

### 8a — MDE window v1 (build now)

- [x] App shell with nav: Creature (on), Zone/Tile (on), Combat/Loot/… (stub/disabled)
- [x] Seed bar + load/save local fixture pack
- [x] Creature: create/edit/list + generate stub → writes fixture
- [x] Zone/Tile: paint or generate color net + mark entrance/landmark/encounter/exit stubs → writes fixture
- [x] Shared net2D viewer shows the zone pack
- [x] Reload restores both packs (localStorage hydrate)
- [x] Zero production art; no player Workspace chrome

App: **removed 2026-08-16.** Live editor: `apps/mythoras-ade-prototype` — `bun run desktop`.

### 8b — Greybox seam (after 8a fixtures exist)

- [ ] Net2D zone fragment loads from MDE pack
- [ ] Move token to encounter footprint
- [ ] Battle starts in place (same coordinates)
- [ ] Plan actions for ≤3 Field creatures (from creature pack)
- [ ] Commit → auto order → resolve ≥2 rounds
- [ ] Win/lose → resume or restart per contract
- [ ] InfoBand shows HP + whose turn / plan state; right-side widget slot exists (even if one stub widget)
- [ ] Zero production art; zero Workspace chrome project

---

## 9. Locked next step

**Start Rail 2:** Mythoras Dev Environment window with **Creature + Zone/Tile** enabled.

Optional thin Rail 0 only if seam start/end/stubs are still ambiguous before greybox.

---

## 10. Doc map (what to open while building)

| Need | Open |
| --- | --- |
| This pathway | This file |
| Owner locks/answers | [RESEARCH_OWNER_ANSWERS_2026-08-06.md](RESEARCH_OWNER_ANSWERS_2026-08-06.md) |
| Why not shell-first | [RESEARCH_START_PATH_DECISION.md](RESEARCH_START_PATH_DECISION.md) |
| Luminary correction | [RESEARCH_POE_LUMINARY_MERC_VECTOR_2026-08.md](RESEARCH_POE_LUMINARY_MERC_VECTOR_2026-08.md) |
| DD lean (steal/avoid) | [RESEARCH_DARKEST_DUNGEON_EXPLORATION.md](RESEARCH_DARKEST_DUNGEON_EXPLORATION.md) |
| MoP command surface | [RESEARCH_MOP_CURSOR_EA_2026-08.md](RESEARCH_MOP_CURSOR_EA_2026-08.md) |
| Domain vocab | [CONTEXT.md](CONTEXT.md) |
| Option menu (if forking) | [PATHWAYS_PRACTICAL_ACTUALIZATION_2026-08-05.md](PATHWAYS_PRACTICAL_ACTUALIZATION_2026-08-05.md) |

---

*End. Ready for practical build prep once you pick 1 / 2 / 3 above.*
