# Owner Direction — Practical Turn (Research Notes)

**Date:** 2026-08-05  
**Status:** Owner-direction / research / parked ideas only. **Not canon. Not a build plan.**  
**Purpose:** Structure a large batch of owner commentary into revisit-able buckets, cross-link prior research, and capture factual reference notes (esp. Grim Dawn resists vs PoE).  
**Sibling conversation (themes only):** [Gameplay analysis and insights](4068e387-a6b5-4bed-88de-b1080f60e585) — overlaps noted below; no invented content from that thread.

---

## Executive synthesis

The owner is asking for a **practical mid-fidelity working surface**, not AAA polish and not infinite programmer-art limbo:

1. **Greybox that looks “moderately decent”** — constructive layout, readable color language (e.g. green/brown ground, yellow sand), decent meshes/textures in the Unity sequencing spirit; form-over-function at midway-success indie quality. React + Three.js / 2.5D remains on the table.
2. **Squad gear management as a real design problem** — ~5 creatures with **independent equipment**; prefer mid-success party-gear UIs (not only AAA paper-dolls); explore information density (rows of team state before portrait chrome), spatial multi-cell inventory, and resistance UX that may be **party-composed** rather than one avatar capping all resists.
3. **A Mythoras-native Dev / Debug Environment** — game-specific authoring & inspection (loot, creatures, tiles, events, battle procedures, currencies), possibly server-backed before client shipping; domain viewers beyond spreadsheets; **not** OmniSpace/ADE.
4. **Systems authored in that env first** — crafting/currency design & compile loops; Cipher/loot-scaling lessons from PoE map-mods without copying; tension between creature traits and allowed gear (5-creature build ≠ PoE single avatar).
5. **Passion / uniqueness parked tracks** — Yu-Gi-Oh–adjacent fusion/synchro-like mechanic (parallel or emergent, not Div/MTG copy); optional tutorial / technician archetypes; progression philosophy where the game exceeds session expectations with stories; GGG “break → remake uniquely” ethos (interview covered elsewhere).

Everything below is **direction to research or park**, not locked design.

---

## Theme inventory

| Theme | Intent (faithful paraphrase) | Status | Links / notes |
| --- | --- | --- | --- |
| Greybox art bar | Minimal but *moderately decent* textures/colors; form-over-function; midway indie success — not AAA polish trap, not pure programmer-art forever | **Owner-direction** + aligns with existing greybox research | [RESEARCH_INDIE_START_WITHOUT_UI_POLISH.md](RESEARCH_INDIE_START_WITHOUT_UI_POLISH.md); [RESEARCH_START_PATH_DECISION.md](RESEARCH_START_PATH_DECISION.md); [OD_004_RESEARCH_SYNTHESIS.md](OD_004_RESEARCH_SYNTHESIS.md) (replaceable geometry first) |
| Greybox color language | Constructive layout; e.g. green/brown ground, yellow sand; decent meshes; React + Three.js / 2.5D on the table | **Owner-direction** / research | [CONTEXT.md](CONTEXT.md) UI architecture locked, **visual language open**; OD-004 projection neutrality |
| Party / squad layout & gear UI | Flexible criteria + inspirations for managing ~5 with **independent gear per creature**; mid-success refs preferred | **Research** | CONTEXT Squad = 5 (3 Field + 2 Bench); equipment slot volume **unresolved** (~6 slots × 5); World View / Workspace View |
| Information density UI | Prefer 5 rows of team state over 5 portraits initially; discover glanceables; click-budget / hotkeys / global popups / hyperlinks as design measures; small window-frame widgets as disposable experiments | **Owner-direction** / research | Aligns with OD-004 management shell vs World View; PoE keyword hyperlinks noted in OD-004 (optional teaching, not unlimited recursive wiki proven) |
| Spatial inventory | Multi-cell spanning items (not RuneScape 1 item = 1 cell) | **Parked idea** / research | Owner refs: Grim Dawn grid; PoE2 merc sidebar grid |
| Grim Dawn resists vs PoE | Research GD multi-resist UI/math vs PoE cap-all-resists; Mythoras may need **party-composed** defensive config across creatures | **Research** | See § Grim Dawn vs PoE below; CONTEXT already lists “combined resistance coverage” under Squad composition |
| Mythoras Debug / Dev Environment | Narrowed game-specific debug mode / “environment before the game” to author & inspect systems; possibly server-backed representation before client | **Owner-direction** / research | Aligns with [RESEARCH_SYSTEMS_FIRST_PROTOTYPE.md](RESEARCH_SYSTEMS_FIRST_PROTOTYPE.md) (ImGui/ops console, sims, data-first); **non-goal:** OmniSpace/ADE |
| Custom data UI beyond spreadsheets | Domain-specific viewers for loot / creature / tile / event / battle-move data — “Mythoras-innate” authoring | **Owner-direction** / research | Systems-first doc already: spreadsheets are mainstream *authoring*, but owner wants **viewers** that understand domain shape |
| Crafting / currency in env first | Design & compile in env system; tension: creature traits vs allowed gear; 5-creature build ≠ PoE single avatar | **Owner-direction** / research | [IDEA_LOG.md](IDEA_LOG.md) Agents (Exploit liked; Splice cancelled); CONTEXT gear/slot tension |
| Cipher modifiers / loot scaling | PoE map-mod / 8-mod lessons without copying; multipliers, rarity, elites → loot | **Research** | [CIPHER_NETWORK_PROGRESSION_DESIGN.md](CIPHER_NETWORK_PROGRESSION_DESIGN.md); [POE_ENDGAME_RESEARCH.md](POE_ENDGAME_RESEARCH.md); POE_* research suite |
| Yu-Gi-Oh fusion/synchro-like | Parallel or emergent card-adjacent system; passion-driven uniqueness; not Div cards / MTG copy | **Parked idea** | DOC_v6 already cites Yu-Gi-Oh for creature *posture* art; GRILL_HANDOFF notes Yu-Gi-Oh chaining feel as caution for timing assignment — **separate** from this fusion/synchro seed |
| Progression philosophy | Player sets session expectations; game should exceed them with stories (unexpected drops, new defensive tech). Question: is PoE more loot problem or progression/expectation problem? | **Research** / open question | POE_ENDGAME nested horizons; Cipher design “second game configuring the first” |
| Optional tutorial tracks / technician archetypes | Aware of PoE skill-gem onboarding tension; may or may not apply when creatures carry identity | **Parked** / research | OD-004 Twilight Strand teaching pattern; PoE skill research onboarding notes |
| GGG re-engineering ethos | Break other games to principles and remake uniquely | **Owner-direction** (ethos) | Separate agent covers interview; do not invent interview content here |
| Reference images (owner-attached) | Grim Dawn character/equip/inventory; PoE2 mercenary hire/gear | **Research inspiration** | Local assets under Cursor project `assets/` (see § UI inspirations) |

### Sibling conversation overlaps ([Gameplay analysis and insights](4068e387-a6b5-4bed-88de-b1080f60e585))

Observed theme overlaps only (no new claims invented from that thread):

| Overlap | Notes |
| --- | --- |
| Mid-fidelity look / camera / greybox lessons | Direland / indie ARPG visual analysis; textures & presentation without treating polish as the product |
| Crafting Agents & economy | Exploit / Agent framing; PoE Chance-orb–like early gamble currency |
| Cipher / endgame / PoE reverse-engineering | Heavy PoE Atlas/currency/skill/tree research; Cipher Network factory fantasy |
| Skill representation & TCG adjacency | Cards as physical metaphor; caution about deckbuilder fashion; Yu-Gi-Oh as posture/timing reference already elsewhere |
| Tactical squad precedents | Into the Breach, Master of Piece — composition & objective layers, not gear UIs |

---

## UI / reference inspirations (party & companion gear)

**Flag:** Inspiration only. Prefer games with **per-companion / per-unit gear**. Mid-success indies valued alongside AAA.

### A. Owner-attached references (primary)

#### 1. Grim Dawn — dense paper-doll + spatial inventory + resist icons

- **What the screenshot shows:** Single large character window: paper-doll equipment ring, attribute/combat stats, **resistance icon grid** (many damage types with % values near soft-cap), and a **spatial multi-cell inventory** (armor spanning multiple cells; 1×1 stacks for consumables/components). Ornate iron/stone chrome over isometric world.
- **Why it matters for Mythoras:** Proves high information density in one surface; spatial inventory ≠ RS-style cells; resist UX as a first-class glanceable panel. **Caveat:** Designed for **one avatar**, not a 5-creature squad — do not copy layout blindly.
- **Asset:** `…/assets/image-112ab037-dcae-4cdb-b84f-a6c918b0c19f.png`
- **Sources:** Game UI (Crate Entertainment); resist facts § below ([Grim Dawn Wiki — Resistance](https://grimdawn.fandom.com/wiki/Resistance))

#### 2. Path of Exile 2 — mercenary hire / single-companion paper-doll

- **What the screenshot shows:** Compact overlay for one companion (“Vorla, the Outlaw”): identity + hire cost, paper-doll gear with socket/link visualization, small spatial inventory strip, skill list with supports, Hire / Take Item / Exile actions. World still visible behind.
- **Why it matters:** **Single-companion** gear + skills in a disposable window-frame — closer to “open one creature’s Workspace widget” than Grim Dawn’s full-screen sheet. Hire/loot framing is PoE-specific; Mythoras equivalent is creature contract/inspect, not mercenary economy.
- **Asset:** `…/assets/image-2d577a0d-2546-4951-bfe2-45cae942e236.png`
- **Sources:** In-game PoE2 mercenary UI (GGG); wiki stub [poe2wiki Mercenaries](https://www.poe2wiki.net/wiki/Mercenaries) (verify against live build when designing)

### B. Mid-success / party-gear references (additional)

| Game | Per-unit gear? | UI pattern (high level) | Why cite | Sources |
| --- | --- | --- | --- | --- |
| **Battle Brothers** (Overhype, 2017) | Yes — each brother has equipment | Paper-doll + stats; bottom bar to switch brothers; shared company stash toggle | Strong mid-success indie precedent for **many units × personal gear + shared stash** | [IndieDB progress report — inventory screen](https://www.indiedb.com/games/battle-brothers/news/progress-report-inventory-screen); [Battle Brothers forums — stash/shared inventory](https://battlebrothersgame.com/forums/topic/dropping-items-bellow-inventory-character-list/) |
| **Divinity: Original Sin 2** (Larian) | Yes — each party member | Character sheet silhouette + backpack; exchange windows between members | Classic CRPG **party inventory with cross-character transfer** | [Gamepressure — DOS2 interface / character sheet](https://www.gamepressure.com/originalsinii/interface/z491a9) |
| **Wartales** | Yes — select character to manage gear | Shared party inventory + per-character equipment panels (community QoL requests show friction of multi-char gear) | Open-world party RPG; gear management is a known UX load | [Steam discussion — character/equipment menu QoL](https://steamcommunity.com/app/1527950/discussions/1/596263931969843402/) |
| **Darkest Dungeon** | Light — 2 trinket slots per hero; shared mission inventory | Hero-select → trinkets; 16-slot party loot bag | Shows **extreme simplification** of per-hero gear (trinkets only) — useful counter-example if Mythoras slot volume stays high | [Darkest Dungeon Wiki — Inventory](https://darkestdungeon.fandom.com/wiki/Inventory) |
| **Last Epoch “companions”** | **No** direct companion gear | Companions/minions scale from player minion stats | Explicit **non-example** for per-creature itemisation (owner asked; LE does not solve Mythoras’s problem) | [Last Epoch Tools — Companions](https://www.lastepochtools.com/guide/section/companions); [Eleventh Hour — Companions for Adventuring](https://forum.lastepoch.com/t/companions-for-adventuring/11462) |

### C. Strongest three for Mythoras layout experiments (recommendation, not lock)

1. **Battle Brothers** — multi-unit switcher + per-unit doll + shared stash (closest structural match to Squad of ~5).  
2. **Grim Dawn** — density, spatial inventory, resist icon language (single-unit density target).  
3. **PoE2 mercenary window** — compact single-creature widget that can live inside Workspace View without permanent surrounding panels ([CONTEXT.md](CONTEXT.md) UI architecture).

DOS2 remains a strong fourth for cross-creature item transfer UX.

---

## Grim Dawn resistance system brief vs Path of Exile

**Flag:** Factual research from wiki / community mechanics pages. Not Mythoras canon. Numbers are genre reference only.

### Grim Dawn (summary)

| Topic | Fact | Source |
| --- | --- | --- |
| Soft / hard cap | Default soft cap **80%**; some gear/devotions/skills raise maximum toward hard limit **95%** | [Grim Dawn Wiki — Resistance](https://grimdawn.fandom.com/wiki/Resistance) |
| Resist surface area | Many typed resists shown as icon grid (Fire, Cold, Lightning, Poison/Acid, Pierce, Bleed, Vitality, Aether, Chaos, Stun, etc. — exact list on wiki) | Same; matches owner screenshot layout |
| Difficulty pressure | Elite/Ultimate apply **resistance penalties** (e.g. elemental/pierce −25% Elite / −50% Ultimate; other types also penalized on higher difficulties) | [Grim Dawn Wiki — Difficulty](https://grimdawn.fandom.com/wiki/Difficulty) |
| Overcap purpose | Excess above active cap buffers **Resistance Reduction (RR)** from enemies; community treats overcap as mandatory for hard content | [Crate forums — overcap resists](https://forums.crateentertainment.com/t/how-do-i-overcap-my-resistances/48894); [overcap mechanics discussion](https://forums.crateentertainment.com/t/overcap-resist-mechanics/42826) |
| RR complexity | Multiple RR debuff families (flat vs %; stacking rules differ) used offensively against player resists | [Grim Dawn Wiki — Game Mechanics (RR section)](https://grimdawn.fandom.com/wiki/Game_Mechanics) |

**Design shape:** One character must cover a **wide resist checklist**; endgame is “cap (and overcap) everything” under penalties + RR. UI makes that checklist glanceable.

### Path of Exile (summary)

| Topic | Fact | Source |
| --- | --- | --- |
| Default maximum | Elemental & Chaos resists default max **75%**; **+maximum resistance** mods can raise toward hard limit **90%** | [PoE Wiki — Resistance](https://www.poewiki.net/wiki/Resistance); [PoE2 Wiki — Resistance](https://www.poe2wiki.net/wiki/Resistance) |
| Fewer primary axes | Campaign/endgame conversation centers on Fire/Cold/Lightning (+ Chaos), not GD’s long icon row of exotic types | Same |
| Caps & map pressure | Excess over current max does not further mitigate until max is raised; excess still buffers −res from map mods / curses / etc. | PoE Wiki Resistance / Uncapped resistance pages |
| Penetration | Hit-based penetration lowers **effective** resist for that hit without permanently changing the character sheet | [PoE Wiki — Resistance penetration](https://www.poewiki.net/wiki/Resistance_penetration) |

**Design shape:** One avatar still “caps all resists,” but with a **narrower typed set** and heavy use of map mods / curses / max-res as the knobs. Soft-cap culture is iconic (“75% all res”).

### Contrast relevant to Mythoras (research implication only)

| Axis | Grim Dawn | PoE | Mythoras owner seed |
| --- | --- | --- | --- |
| Who must be capped | Single avatar | Single avatar | Possibly **Squad-composed** coverage across creatures ([CONTEXT.md](CONTEXT.md) already: “combined resistance coverage”) |
| Typed surface | Very wide resist grid | Narrower elemental+chaos core | 11 Streams / damage types already in CONTEXT — closer to GD’s *breadth* than PoE’s *narrow core*, but ownership model may differ |
| UI lesson | Icon grid + % at soft-cap is readable | Cap culture taught early; map −res as juice | Prefer research: glanceable **squad resist matrix** vs five full GD panels |
| Do not copy | One-body overcap treadmill as the only fantasy | Single-body “all res or die” as the only fantasy | Owner explicitly questions transplanting single-avatar cap culture onto 5 independent creatures |

---

## Mythoras Dev Environment — concept sketch

**Flag:** Owner-direction sketch. Not a product plan. Name working title only: “Mythoras Debug / Dev Environment” or “environment before the game.”

### Intent

A **narrowed, game-specific** authoring & inspection mode that exists to make systems real before (or beside) the shipped client experience — **not** a general creative suite (explicit non-goal: OmniSpace / ADE).

### Candidate capabilities (wishlist, not commitments)

| Capability | Why owner mentioned it |
| --- | --- |
| Loot generation inspector | Seeded rolls, rarity paths, affix outcomes, distribution histograms |
| Creature generation inspector | Species/traits/Streams/gear eligibility constraints |
| Tile / zone fragment tools | Greybox constructive layout; color language experiments |
| Event authoring / playback | Route dynamism / Events (see IDEA-007) without full client |
| Battle procedure sandbox | Turn Program / Speed ordering / encounter procedures in isolation |
| Currency / Agent compile lab | Crafting & currency designed here first; compile outcomes visible |
| Cipher / modifier juicer | Map-mod–like multipliers on content/loot without shipping Atlas UI |
| Domain-specific data viewers | Beyond raw spreadsheets — shapes that match loot/creature/tile/event/move schemas |
| Optional server-backed representation | Persist authored content / sims before “shipping into the game client” |

### Non-goals

- Not OmniSpace, ADE, or a general IDE replacement  
- Not production World View art polish  
- Not a substitute for the playable greybox seam ([RESEARCH_START_PATH_DECISION.md](RESEARCH_START_PATH_DECISION.md) — Turn Program + continuity still need a play surface)  
- Not locking visual language or final Workspace chrome  

### Relation to greybox play seam

```
Dev Environment (author / inspect / sim)
        │
        │  feeds data + procedures
        ▼
Greybox play seam (moderately decent layout + operable systems UI)
        │
        │  later
        ▼
Shipped client (World View default + Workspace View on demand)
```

Prior research already supports **ops/debug surfaces + headless sims + spreadsheet-or-better data** as legitimate early UI ([RESEARCH_SYSTEMS_FIRST_PROTOTYPE.md](RESEARCH_SYSTEMS_FIRST_PROTOTYPE.md)). Owner add: make those surfaces **Mythoras-innate** (domain viewers), and allow a **server-backed** authoring representation.

---

## Open questions for later sessions

> **Update 2026-08-06:** Most items below are **answered or deferred** in [RESEARCH_OWNER_ANSWERS_2026-08-06.md](RESEARCH_OWNER_ANSWERS_2026-08-06.md). Summary: greybox = basic nets/colors; squad UX lean = Darkest Dungeon; glanceables = HP (+ maybe attrs); shared multi-cell Technician stash + per-creature gear; resist lean = Grim Dawn hybrid; MDE v1 = creature generator; no server-backed yet; park fusion/tutorial; progression = all spike types. Remaining research pressure: damage-type/stream complexity, skill representation (action bar vs cards), DD full exploration, merc/BB progression depth.

---

## Explicitly NOT a build plan

This document does **not**:

- Choose a tech stack, sprint, or milestone order  
- Lock UI layouts, resist formulas, inventory rules, or Dev Environment architecture  
- Promote parked ideas (fusion/synchro, tutorial archetypes) into GDD  
- Replace Wayfinder / grilling tickets for the first playable seam  

It **does** organize owner direction so later research, grilling, and prototypes can pick themes without inventing canon.

---

## Cross-link index

| Doc | Relationship |
| --- | --- |
| [RESEARCH_INDIE_START_WITHOUT_UI_POLISH.md](RESEARCH_INDIE_START_WITHOUT_UI_POLISH.md) | Greybox / forget-quality / polish-trap discipline |
| [RESEARCH_SYSTEMS_FIRST_PROTOTYPE.md](RESEARCH_SYSTEMS_FIRST_PROTOTYPE.md) | Ops consoles, sims, data-first validation |
| [RESEARCH_START_PATH_DECISION.md](RESEARCH_START_PATH_DECISION.md) | Scene vs systems start; first playable seam |
| [CONTEXT.md](CONTEXT.md) | Squad, UI architecture, equipment slot tension, combined resists |
| [IDEA_LOG.md](IDEA_LOG.md) | Parked Agents, Cipher, Events |
| [CIPHER_NETWORK_PROGRESSION_DESIGN.md](CIPHER_NETWORK_PROGRESSION_DESIGN.md) | Endgame juice / Cipher modifiers |
| [POE_ENDGAME_RESEARCH.md](POE_ENDGAME_RESEARCH.md) + POE_* suite | Map-mod / sustain / nested progression lessons |
| [OD_004_RESEARCH_SYNTHESIS.md](OD_004_RESEARCH_SYNTHESIS.md) | Projection-neutral sim; management shell vs World View |
| Sibling: [Gameplay analysis and insights](4068e387-a6b5-4bed-88de-b1080f60e585) | Theme overlaps only |

---

*End of research notes. Flag all claims above as owner-direction, research, or parked unless independently locked elsewhere.*
