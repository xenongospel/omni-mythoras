# Research — GGG Internal Design Environments / Tools (Public Evidence Only)

**Date:** 2026-08-10  
**Status:** Advisory research for Mythoras ADE expectations. **Not Mythoras canon.**  
**Question:** What **public**, high-trust information exists about Grinding Gear Games’ **internal** design environments, UI editors, tools, or editors wrapped around their game engine — and how should that constrain Mythoras ADE ambitions relative to the outer PoE ecosystem (PoB et al.)?

**Method note:** Claims below are tagged **FACT** (first-party or strongly evidenced primary), **SECOND-HAND** (community reverse-engineering / wiki / third-party tooling), **INFERENCE** (reasonable reading of facts, not asserted by GGG), or **UNKNOWN**. No inventing of undocumented editors.

---

## Executive answer

**Publicly, GGG confirms a proprietary in-house engine plus a suite of custom internal tools (especially terrain/level, VFX/materials, asset viewing) — not a Unity/Godot-like publicly documented “GGG Editor.”** Screenshots and named workflows appear in ExileCon talks. **Skill-gem / mod-database / passive-authoring studio UIs are not documented.** Almost all game-data schemas used by community tools are reverse-engineered; GGG officially exports only passive/Atlas trees (plus limited file formats and APIs).

| Layer | Public visibility |
| --- | --- |
| Outer player “dictionary” (PoB, poe.ninja, FilterBlade, RePoE/PyPoE) | High — community-built on APIs, official exports, and datamined `.dat`/GGPK |
| Inner studio systems (engine + tools) | Low — existence and some domain-specific tools confirmed in talks/hiring; UI/workflows mostly opaque |
| Unity/UE-style single public editor product | **No public evidence** |

---

## Sources (primary preferred)

### First-party — talks & forums

| # | Source | Trust |
| --- | --- | --- |
| S1 | [ExileCon Dev Talk — Procedural World Generation](https://www.youtube.com/watch?v=EXnoHTqO7TE) (Rhys Abraham); official forum post [view-thread/2753965](https://www.pathofexile.com/forum/view-thread/2753965) | First-party |
| S2 | [ExileCon Dev Talk — Evolving Path of Exile’s Renderer](https://www.youtube.com/watch?v=whyJzrVEgVc) (Alexander Sannikov) | First-party |
| S3 | [ExileCon 2023 — Rendering Path of Exile 2](https://www.youtube.com/watch?v=TrHHTQqmAaM) (Alexander Sannikov) | First-party |
| S4 | [ExileCon Dev Talk — Creating Game Effects](https://www.youtube.com/watch?v=KxXJn1DOuzw) (Ivan Le, VFX) | First-party |
| S5 | [The Trials of Game Engineering (feat. GGG)](https://www.youtube.com/watch?v=SPgZZ-jjvF0) (Jonathan Rogers, co-founder) | First-party |
| S6 | [Developer Q&A: 187 Questions Answered](https://www.pathofexile.com/forum/view-thread/1409553) (GGG staff answers) | First-party |
| S7 | Hiring: [C++ Engine / VFX](https://www.pathofexile.com/forum/view-thread/3439228); [We’re Hiring / Level Designer](https://www.pathofexile.com/forum/view-thread/3254120); [macOS/iOS Engine](https://www.pathofexile.com/forum/view-thread/3910121) | First-party |
| S8 | [Developer Docs — Overview](https://www.pathofexile.com/developer/docs/index); [Data Exports](https://www.pathofexile.com/developer/docs/data); [File Formats](https://www.pathofexile.com/developer/docs/game) | First-party |
| S9 | GitHub org `grindinggear`: [skilltree-export](https://github.com/grindinggear/skilltree-export), [atlastree-export](https://github.com/grindinggear/atlastree-export), [poe2-skilltree-export](https://github.com/grindinggear/poe2-skilltree-export) | First-party |
| S10 | Designer interviews e.g. [Nick](https://www.pathofexile.com/forum/view-thread/1810952), [James](https://www.pathofexile.com/forum/view-thread/2858423) — process anecdotes, **not** tool UIs | First-party (weak on tooling) |
| S11 | GDC 2019 Chris Wilson — [Designing Path of Exile to Be Played Forever](https://www.youtube.com/watch?v=tmuy9fyNUjY) — design/production cadence, not tool screenshots | First-party (weak on tooling) |

### Second-hand — outer ecosystem / reverse engineering

| # | Source | Trust |
| --- | --- | --- |
| C1 | [PathOfBuildingCommunity/PathOfBuilding](https://github.com/PathOfBuildingCommunity/PathOfBuilding); [pathofbuilding.community](https://pathofbuilding.community/) | Community |
| C2 | [PyPoE](https://github.com/Project-Path-of-Exile-Wiki/PyPoE) (wiki datamining toolkit) | Community |
| C3 | [RePoE](https://github.com/repoe-fork/repoe) / related forks — JSON exports of mined data | Community |
| C4 | [poe-tool-dev/dat-schema](https://github.com/poe-tool-dev/dat-schema) — community schema for `.dat` tables | Community |
| C5 | PoEDB / wiki notes on GGPK & bundles (e.g. [Bundle schema](https://poedb.tw/us/Bundle_schema)) | Community |
| C6 | [FilterBlade](https://www.filterblade.xyz/) / NeverSink filters — uses **official** item-filter language | Community + official format |
| C7 | [poe.ninja](https://poe.ninja/) — economy/meta site (community; uses public APIs / market data) | Community |

---

## Facts

### A. Proprietary engine — not Unity/Godot/Unreal as the PoE stack

1. **FACT (S6):** In the 2015 Developer Q&A, when asked whether they would still build their own engine vs Unity/Unreal/CryEngine, GGG answered they would still have developed their own because “ten years ago, there were no commercial game engines appropriate for our needs.”
2. **FACT (S5):** Co-founder Jonathan Rogers states publicly that GGG makes its own engine and addresses the common “why not Unity/Unreal” question.
3. **FACT (S7):** Official hiring copy: “work on our **in-house engine and tools**. Our engine is **specific to Path of Exile**…” Duties include collaborating with designers/artists “to create tools that allow them to get great results.”
4. **FACT (S2):** Sannikov: “we have our own **in-house engine**” (contrasted with purpose-built vs general-purpose engines in the renderer talk).
5. **FACT (S1):** Abraham: “The game itself is in **C++**. … All the terrain tools are also in **C++**… We do have a few other tools in **C#**.”

**INFERENCE:** There is no public evidence of a Unity/Godot-like *productized* editor that outsiders can download or document comprehensively. The stack is custom and studio-internal.

### B. Named / shown internal tools (domain-specific — strongest public evidence)

#### Terrain / zones / encounters (S1)

**FACT — Rhys Abraham (ExileCon 2019), with on-talk screenshots:**

- **Tile editing tool** — level designers mark walkability, projectile/Leap Slam blockers, connection silhouettes / tile keys on art tiles.
- **Room editor** — assemble rooms from tile keys; decorate; place spawn markers / doodads / monster packs. Explicitly: “in the tool, the **room editor** which is what we see here… What you see is not necessarily what you get” (rooms are tile keys, not final art tiles).
- **Terrain generation tool** — generates full areas from a bird’s-eye view for designers to generate, test, and explore.
- **Maya + custom tile exporter** — environment art: low-poly through Maya; “custom tile exporter that converts all the geometry into a special file format for the game.”
- **Dev-client ↔ tool loop** — if a developer finds a problem in-game they can use a hotkey flow (**F4** mentioned) to open that exact level in a tool, recreate the seed, inspect logs.
- Scale mention: ~**15,000 tiles** processed by a pre-processing tool.

**Official framing (S1 forum):** Natalia_GGG published the talk as explaining “how we generate areas” — confirms GGG endorses the talk as studio communication.

#### Graphics / materials / VFX

6. **FACT (S2):** Sannikov shows a screenshot of **“Asset Viewer, which is our in-house graphics editing tool,”** compared side-by-side with third-party Marmoset.
7. **FACT (S3):** Materials / VFX use a **“graph editing system”** / **“graph editor”** — VFX artists “visually connect things”; GPU particles and “fields” are integrated into that same pipeline/editor.
8. **FACT (S4):** Ivan Le’s VFX talk demonstrates material **graphs**, particle emitter tooling, timelines/toolbars, and states that tools are developed alongside content; engineers iterate tools based on artist feedback. (YouTube auto-caption language varies by locale; substance is tool demos + pipeline Q&A.)

#### Production infrastructure (not design editors, but “internal tooling”)

9. **FACT (S6):** Comprehensive CI based on **BuildBot**; builds on every commit; VCS for game source was **Subversion** at that Q&A (“And, no, we don’t want to use Git”).
10. **FACT (S7 Level Designer hiring):** Duties include “Quickly learn to master our **internal tools**, and assist in making them better”; Maya (or similar) required; integrate content into “the game engine.”

### C. What GGG publishes for outsiders (official outer surface)

11. **FACT (S8 Data Exports):** “We do **not** officially provide access to any in-game data outside of our supported APIs. The exception to this is…” passive trees (PoE1/PoE2) and Atlas tree (PoE1). Linked GitHub exports under `grindinggear/*-export` (S9).
12. **FACT (S8 Overview):** Official third-party policy: prefer apps separate from the game; **“Executable apps that interact with the game or game files”** are against ToU; reverse-engineering endpoints outside docs is disallowed. Supported resources = API Reference + listed Data Exports only.
13. **FACT (S8 File Formats):** Public formats include **item filters** and PoE2 **Build Planner** `*.build` JSON (player-facing import; “Editing or creating builds within Path Of Exile 2 is currently not supported” in the docs text as of fetch).
14. **FACT (S9):** `skilltree-export` describes itself as “Exported data for Path of Exile’s Passive Skill Tree” — a **data dump for consumers**, not an editor product.

### D. Designer process interviews — collaboration, not editor UX

15. **FACT (S10 Nick):** Unique-item example (Abberath’s Hooves) names programmers, 2D artists, VFX, balance designer, QA — multi-discipline pipeline; **no named skill/mod GUI**.
16. **FACT (S10 James):** Aspiring designers need deep mechanics knowledge; “some aptitude for computers is obviously a plus”; balance/content work described as iteration — **no tool screenshots or product names**.

### E. Outer ecosystem (contrast — not GGG studio tools)

17. **FACT (C1):** Path of Building Community is an **offline build planner** — passives, gems, items, calc engine — maintained by the community, not GGG.
18. **FACT (C2):** PyPoE: “Collection of Python Tools for Path of Exile”; wiki project uses it to parse patch data; specs for `*.dat` “change patch to patch and have to be updated.”
19. **FACT (C4):** `dat-schema` README: “Source of truth schema for dat files” — community-maintained GraphQL-like schema; CI exports JSON. **Not GGG-published.**
20. **SECOND-HAND (C2 docs / C5):** `.dat` files are fixed-width tables + variable data **without self-describing headers**; layout must be reverse-engineered (PyPoE documentation states this explicitly).
21. **SECOND-HAND (C5):** Content historically shipped as **GGPK**; later patches moved toward **bundle** distribution (community-documented schema). GGG does not publish an official GGPK/dat API.
22. **FACT (C6 + S8):** FilterBlade customizes filters written in GGG’s **official item-filter language**; NeverSink/FilterBlade are community products sitting on that public format.
23. **FACT (C7):** poe.ninja is a community economy/meta site (live at fetch time); not a GGG product.

### F. Explicit absences (searched; not found as first-party)

24. **UNKNOWN / no public evidence found** of:
   - A named public “GGG Editor” / Unity-equivalent IDE
   - Documented **skill gem editor**, **mod database editor**, or **passive tree authoring UI** used by designers
   - Public SDK for authoring zones/skills/mods
   - Official documentation of internal data schemas for gems/mods/stats tables

Designer interviews and GDC retention talks discuss **design outcomes and cadence**, not authoring UIs (S10, S11).

---

## Inferences (clearly separated)

1. **INFERENCE:** GGG’s “editor story” looks more like **many purpose-built C++/C# tools + DCC (Maya) + in-game/dev hooks**, co-evolving with content — not one omnibus editor product. Supported by Abraham’s tool suite description (S1), Asset Viewer (S2), graph editor (S3), VFX pipeline (S4), and hiring language (S7).
2. **INFERENCE:** Zone/encounter tooling is the **most public** inner surface; balance/data tooling for skills/mods is the **most opaque** — because talks show terrain/VFX, while data tables are only visible via reverse engineering (C2–C5) and GGG refuses general data export (S8).
3. **INFERENCE:** Official skill-tree JSON exports exist because the **website/player tree UI** needs a shareable format — not because GGG published their internal passive-tree *editor*.
4. **INFERENCE:** Community tools (PoB, RePoE, FilterBlade) reconstruct a **player-facing dictionary and calculator** of the live game; they do **not** reverse-engineer GGG’s studio UX or content-authoring workflows.

---

## Answer to the core question

> Is there public evidence of a Unity/Godot-like “GGG Editor” wrapping PoE?

**No.** Public evidence supports: **proprietary C++ engine + custom internal tools** (tile/room/terrain editors, Asset Viewer, material/VFX graph editor, Maya exporters, CI/build systems), with **opaque** data-authoring for skills/mods/passives. The stack is **not** a documented commercial-engine-style editor product. Consumer-facing data access is deliberately narrow (APIs + tree exports + filter/build file formats); the rest of the corpus is **community reverse-engineered**.

---

## Outer vs inner (for the PoB ↔ GGG ADE metaphor)

| | **Outer (player dictionary)** | **Inner (studio systems)** |
| --- | --- | --- |
| Examples | PoB, poe.ninja, FilterBlade, PoEDB/RePoE, wiki | Room/tile/terrain tools, Asset Viewer, VFX graph editor, in-house engine |
| Who builds it | Community (+ GGG APIs/exports where allowed) | GGG |
| What’s public | Calcs, economy, filters, mined tables | Talks, hiring blurbs, a few screenshots |
| Mythoras analogue (owner framing) | PoB-like **dictionary / theorycraft surface** | ADE-like **studio authoring environment** |

---

## Mythoras implications

1. **Do not treat “GGG ADE” as a copyable public reference.** You can cite existence and *domains* of tools (zones, art/VFX, engine) — not UI patterns, information architecture, or skill/mod editors. Designing Mythoras ADE by “mirroring GGG internals” is **speculation**, not research-backed.
2. **The learnable public half is the outer ecosystem.** PoB shows what a **dense, systems-faithful player dictionary / calc workspace** looks like when fed by exported + mined data. That is a valid reference for Mythoras’ *outer* dictionary layer — not for studio tooling UX.
3. **Constrain ADE expectations:** expect to invent Mythoras’ authoring surfaces from **your own** domain model, not from leaked GGG skill/mod GUIs. Public GGG precedent supports “custom tools around a custom engine,” not “ship a Unity clone.” Live editor: `apps/mythoras-ade-prototype`.
4. **Where GGG *does* inspire ADE:** domain-specific editors (room/tile vs one mega-IDE), tight **playtest ↔ tool** loops (seed recreate / open-in-tool), and tools that **grow with content** (VFX talk) — principles only.
5. **Where opacity bites:** balance tables, skill authoring, mod databases — Mythoras must define its own ADE modules without pretending GGG published a template.

---

## Open questions

1. Has any post-2023 ExileCon / BA / podcast shown **skill or mod authoring** UIs? (Not found in this pass.)
2. Did VCS migrate off Subversion after S6? (Historical fact only; current unknown.)
3. Is the material “graph editor” the same application as Asset Viewer, or a separate tool? (Talks name both concepts; relationship **UNKNOWN**.)
4. Do PoE2 world-gen tools share the PoE1 room/tile stack or a successor? (Abraham’s talk teases PoE2 area improvements; details sparse.)
5. Are there internal web tools / databases for balance that never appear on stage? (**UNKNOWN** — likely, but unproven.)

---

## Quick citation checklist (hunt targets)

| Hunt target | Result |
| --- | --- |
| Skill gem editors | No first-party public evidence |
| Mod database tools | No first-party public evidence |
| Passive tree editors (studio) | Only public **exports**, not authoring UI |
| Zone/encounter tools | **Yes** — tile / room / terrain tools (S1) |
| Dat file formats | Community reverse-engineered (C2–C5); GGG does not officially document |
| Patch / CI tooling | BuildBot CI mentioned (S6); not a design editor |
| Unity-like GGG Editor | **No evidence** |
