# Systems-First / Non-UI-First Prototyping for Complex RPG–ARPG Systems

**Date:** 2026-08-01  
**Question:** Is a simplified 2D template, spreadsheet-like surface, or deliberately “ugly but operable” management UI a legitimate way for Mythoras to validate inventory, gear generation, creature generation, and related management systems *before* polished presentation?  
**Verdict:** **Yes** — industry-adjacent and sound for *systems* validation, with clear failure modes if it is mistaken for *gamefeel* validation or allowed to become the permanent product UI.

---

## 1. What “systems-first” means here

Systems-first prototyping answers: **Do the rules, data, generators, and management loops work under stress?**  
It deliberately postpones: final art, UX polish, juice, camera feel, and brand presentation.

That is distinct from a **vertical slice**, which answers: **Can we ship a representative *player-facing* moment of the whole game?** Industry writing consistently separates them: prototypes find whether the idea should be made; vertical slices prove production capability once the idea is already trusted ([Rami Ismail](https://ltpf.ramiismail.com/prototypes-and-vertical-slice/); [Ask a Game Dev glossary](https://askagamedev.tumblr.com/post/77406994278/game-development-glossary-the-vertical-slice); [Bugnet](https://bugnet.io/blog/vertical-slice-vs-prototype-what-to-build-first)).

For Mythoras’s stated targets (loot tables, inventory ops, crafting, creature/gear generation), systems-first surfaces are the right *early* instrument. Presentation-dependent loops (combat timing, readability in chaos, “does dropping a rare feel good”) still need a later operable play loop — not necessarily art-final, but *felt*.

---

## 2. Primary / high-trust patterns (with sources)

### 2.1 Spreadsheet / tabular data as the design surface

**Industry stance:** For heavy balancing games, designers prefer Excel/Sheets; engines import CSV into data tables.

- **Unreal Engine (official):** Data-driven gameplay is framed as exporting spreadsheet documents into engine DataTables/CurveTables so designers tweak without programmer involvement. Epic’s Data Driven Gameplay docs and “Driving Gameplay with Data from Excel” blog describe CSV → `FTableRowBase` structs, row handles, and re-import for instant balance changes ([UE4 Data Driven docs](https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/DataDriven/); [UE blog: Excel → gameplay](https://www.unrealengine.com/en-US/blog/driving-gameplay-with-data-from-excel)).
- **Unity (official guidance):** ScriptableObjects are the engine’s first-class pattern for separating static game data (items, stats, configs) from MonoBehaviour logic; Unity’s how-tos explicitly push “make as much of your game data-driven as possible” and inspectable debug state ([Unity Manual: ScriptableObject](https://docs.unity3d.com/Manual/class-ScriptableObject.html); [Unity: Separate Game Data and Logic](https://unity.com/how-to/separate-game-data-logic-scriptable-objects)).
- **ARPG design practice:** Set-loot and proc-loot designs are described as starting from spreadsheets of equipment/rarities; procedural ARPG loot typically needs base-item tables *plus* affix tables and multi-step rolls (drop? rarity? type? affixes? rolls?) ([Game Developer / Josh Bycer, 2014](https://www.gamedeveloper.com/design/defining-loot-tables-in-arpg-game-design)).
- **Shipped ARPG precedent (data format):** Diablo II ships monster stats, weapons, armor, cube recipes, and treasure classes as tab-delimited CSV-like tables editable in Excel — widely treated as a relational database of `code` IDs ([CRT Glow Studios D2 deep-dive](https://crtglow.itch.io/lost-in-the-stars/devlog/402674/diablo-2-as-an-inspiration-managing-game-data-using-csv)). This is not a “prototype trick”; it is how a canonical ARPG *shipped and stayed moddable*.
- **Pipeline tooling:** Beamable’s Game Content Designer converts Google Sheets → JSON/ScriptableObjects with validation, constraints, and cross-tab IDs ([Beamable GCD docs](https://help.beamable.com/Unity-Latest/unity/user-reference/beamable-services/profile-storage/content/game-content-designer/)). Godot community pipelines export Sheets → JSON → `staticData.gd` for items, mobs, loot, crafts ([tilcode Godot Sheets export](https://tilcode.com/godot-3-0-exporting-game-data-from-google-sheets-into-a-staticdata-gd-file-using-node-js/)). Godot **Librarian** is explicitly “somewhere between a spreadsheet and a SQL database” for typed tabular game data with declarative compliance tests ([Librarian](https://github.com/5gTestSubject/librarian)).
- **Unreal ARPG itemization plugin:** GenericItemization builds Diablo/PoE-style drop tables, item defs, affixes, and quality ratios primarily as **lots of DataTables** ([GenericItemization](https://github.com/mattyman174/GenericItemization)).

**Implication for Mythoras:** Spreadsheet-authoring of loot / creatures / recipes is not a workaround; it is the mainstream designer interface for these systems. The “spreadsheet prototype” *is* the content authoring UI for ARPGs.

### 2.2 Paper / tabletop prototypes → digital systems

Paper prototypes validate decisions, capacity constraints, and rules before code ([AIE paper prototyping](https://aie.edu.au/articles/develop-your-game-design-skills-using-paper-prototypes/); [Game Developer: Use Paper Prototyping](https://www.gamedeveloper.com/design/use-paper-prototyping-to-design-your-games); [Tono Game Consultants](https://tonogameconsultants.com/how-to-create-a-game/)).

Concrete RPG-relevant example from AIE: inventory as cards with weight/slot caps — force discard/tradeoff decisions without any digital UI.

**Implication:** Mythoras management loops (stash pressure, craft staging, creature roster limits) can be proven on cards/tokens first; digital “ugly UI” should encode the same decisions, not invent new ones.

### 2.3 Dear ImGui / debug overlays as the *real early UI*

Dear ImGui’s stated purpose is **content-creation and debug tools**, not end-user HUD polish: “enable fast iterations” and “empower programmers to create content creation tools and visualization / debug tools (as opposed to UI for the average end-user)” ([ocornut/imgui README](https://github.com/ocornut/imgui)).

Engine integrations treat ImGui as production *tooling*:

- **Godot:** [imgui-godot](https://github.com/pkdawson/imgui-godot) for C#/GDScript debug tools; community patterns include live inventory tables in ImGui windows.
- **Unreal:** [TBImGui](https://github.com/Lewisscrivens/TBImGui) (editor + packaged + headless NetImgui); [Cog](https://github.com/arnaud-jamin/Cog) — ImGui windows for GAS, AI, cheats, spawn, logging (shipping disabled by default).

Unity ecosystem equivalents: attribute-driven cheat menus / inspectors ([DevMenu](https://github.com/routaz/DevMenuTool), [Unity Debug Sheet](https://github.com/Haruma-K/UnityDebugSheet), NjConsole) — i.e. **God Mode / admin panels as operable surfaces**.

**Implication:** For inventory/crafting/generators, an ImGui (or engine Control-node) “ops console” *is* a legitimate first playable UI for designers and makers — provided it is marked throwaway or “tools forever,” not mistaken for player HUD.

### 2.4 Headless / CLI simulation for loot, economy, combat

When the question is distributional (drop rates, economy sinks, combat balance), rendering is noise:

- Config-driven Monte Carlo combat sims with CLI sweeps ([combat-sim-kit](https://github.com/Koval09/combat-sim-kit)).
- Godot autosim: thousands of runs in seconds; adapters call pure game logic or math models when physics is irrelevant ([godot-autosim](https://github.com/applesnort/godot-autosim)).
- Seeded loot generators with property/regression tests (same seed → same drop; distribution sanity) ([Arcadeon: seeded loot tables](https://arcadeonstudios.co.uk/blog/procedural-loot-without-pain-seeded-rng-loot-tables-and-tests)).
- Headless session runners that share the same state machine as a UI ([native-gaming-harness headless.ts pattern](https://github.com/TinkerChen01/native-gaming-harness)).

**Implication:** Gear/creature generation and economy should be validated primarily by **seeded batch sims + assertions**, with a thin operable UI only where human judgment is needed (e.g. “does this craft path feel like a decision tree?”).

### 2.5 Text / ASCII as systems stress-test

Extreme form of non-UI-first: ship/play the systems as ASCII/roguelike to ask “does this ARPG mechanic survive without presentation?” ([Rogue of Exile / ROELOD](https://monsieurjulien.itch.io/rogue-of-exile-lord-of-destruction/devlog/1485351/building-a-roguelike-arpg-that-combines-path-of-exile-diablo-234-and-last-epoch-in-ascii)) — inventory footprints, affixes, crafting staging, atomic transactions, all without art.

**Implication:** Mythoras does not need ASCII aesthetics, but the *filter* is useful: if a system only works when art sells it, it is not yet a validated *system*.

### 2.6 Data layer before UI (implementation hygiene)

Practical inventory guidance that matches industry tooling: prototype items in spreadsheets; get add/remove/query working with debug prints before UI; separate definitions from instances; events over polling ([slashskill inventory guide](https://www.slashskill.com/how-to-build-an-inventory-system-for-your-game-complete-guide/) — secondary but consistent with Unity/Unreal primary docs above).

---

## 3. Concrete precedents (validated without final UI)

| Precedent | What was validated | Surface used | Notes |
|-----------|-------------------|--------------|-------|
| **Diablo II data tables** | Monsters, items, treasure classes, recipes | CSV/Excel | Shipped format; modders still balance via spreadsheets |
| **Unreal DataTables / Excel workflow** | Stats, curves, tabular content | Excel → CSV → DataTable | Official Epic pipeline |
| **Unity ScriptableObjects + debug menus** | Shared item/NPC data; cheat spawn/inspect | Assets + DevMenu/ImGui-like | Official data pattern + common tooling |
| **Beamable GCD / Sheets pipelines** | Content authoring without code | Google Sheets | Designer-first content |
| **GenericItemization (UE)** | ARPG drop/affix pipelines | DataTables | Explicit Diablo/PoE analogue |
| **godot-autosim / combat-sim-kit** | Balance breakpoints, win rates | Headless / CLI | No presentation required |
| **ROELOD** | Full ARPG item/inventory stack | ASCII / terminal | Systems survive without art |
| **Paper inventory prototypes** | Capacity tradeoffs | Cards / weight caps | Pre-digital |
| **ImGui Cog / TBImGui** | Runtime inspect, spawn, GAS, cheats | ImGui overlays | Real early “UI” for systems |

These are not all “shipped as the product UI.” They are evidence that **teams routinely validate and even ship *content and generators* through tabular/tools surfaces**, then wrap presentation later.

---

## 4. Evaluation of the Mythoras proposal

### Proposal (paraphrased)

Use a very simplified 2D template, spreadsheet-like surfaces, and/or ugly operable management UIs — inspired by deep systems games expressed in 2D/spreadsheet form — so inventory, gear gen, creature gen, and management can land **without** art polish.

### Verdict: **Sound for systems validation**

This is aligned with how ARPGs already author and stress-test loot/creature data, and with how studios use ImGui/debug consoles as the first operable interface.

### Pros

1. **Matches the shape of the problem.** Loot, affixes, recipes, and creature stats *are* tabular. Designing them in tables reduces translation error.
2. **Separates “rules work” from “feel works.”** Avoids spending art/UI budget before generators are coherent.
3. **Enables Monte Carlo truth.** Headless rolls over 10k kills answer distribution questions playtests cannot.
4. **Fast iteration for designers.** Sheets + reimport (or hot-reload JSON) beat waiting on UI artists.
5. **Forces deterministic APIs.** Operable CLI/ImGui surfaces push seedable generators and pure inventory ops — better architecture for later polish.
6. **Disposable by design (if disciplined).** Gray/ugly UI is cheaper to throw away than a half-polished inventory skin.

### Cons

1. **Does not validate ARPG *gamefeel*.** Drop timing, combat readability, loot dopamine, spatial inventory friction in a live fight — none of these live in a spreadsheet.
2. **Management games can feel “solved” on paper while failing in motion.** Roster/crafting loops that are interesting as ops may be tedious between combat sessions.
3. **False confidence from perfect information.** Spreadsheet UIs expose odds and full state; players will not — designs that rely on omniscience fail later.
4. **Tool debt.** ImGui panels and admin grids accumulate features and become tribal knowledge.

### Failure modes (especially called out)

| Failure mode | How it happens | Mitigation |
|--------------|----------------|------------|
| **Throwaway UI never replaced** | Ops console is “good enough”; polish postponed forever | Tag surfaces `TOOLS_ONLY`; schedule a *presentation milestone* with explicit kill criteria for the ugly UI |
| **Never feeling the game** | Months of sims/spreadsheets; no combat/session loop | Keep a **minimal play loop** (even graybox 2D) that *consumes* the same generators |
| **Validating the wrong loops** | Optimizing inventory Tetris / craft trees that players rarely enter | Define success metrics per system (e.g. “stash pressure after 20 kills,” not “beauty of craft UI”) |
| **Presentation-dependent systems sneak in** | Affixes that only make sense with VFX/SFX | Apply the ROELOD filter: must be legible as text/stats first |
| **Spreadsheet = source of truth forever without schema** | Soft columns, broken refs, silent bad drops | Typed schemas, validation tests (Librarian-style), seeded regression tests |
| **Confusing systems prototype with vertical slice** | Showing Spreadsheet Hero to funders as “the game” | Label artifacts; use systems surface for makers, graybox loop for “is it an ARPG?” |

---

## 5. Minimal operable surfaces — ranked by fit

Ranked for **Mythoras-style ARPG systems** (inventory, gear gen, creature gen, crafting, management). Higher = better default for that job.

| Rank | Surface | Best when validating… | Weak when… | Notes |
|------|---------|----------------------|------------|-------|
| **1** | **Typed spreadsheet / DataTable + schema validation** | Loot tables, affix pools, creature stats, recipes, economy parameters | Spatial feel, timing, juice | Authoritative *content* surface; import into engine |
| **2** | **Headless / CLI Monte Carlo harness** | Drop distributions, economy sinks/sources, combat balance, generator edge cases | Human decision quality, UX | Same code path as game; seeded; CI-friendly |
| **3** | **ImGui / debug panel / God Mode console** | Live inventory ops, spawn gear/creatures, craft steps, inspect instances | Public playtests, accessibility, “fun” | Ideal *maker* operable UI; keep out of shipping player path |
| **4** | **Ugly 2D management grid (engine UI, no art)** | Stash Tetris, equip slots, craft staging, creature roster as *player decisions* | Brand/fantasy, combat immersion | Closest to “spreadsheet game” proposal; must share APIs with #2–3 |
| **5** | **Card / tabletop prototype** | Capacity rules, craft decision trees, roster limits *before code* | Scale, proc-gen distributions | Hours, not weeks; graduate to #1+#4 |
| **6** | **ASCII / text mode full loop** | “Does the whole ARPG stack survive without art?” | Audience buy-in, motion combat | Strong filter; optional extreme for Mythoras |
| **7** | **Polished player UI / art-forward vertical slice** | Presentation, juice, marketability | Early systems discovery | **Wrong early**; right *after* #1–4 stabilize |

**Anti-pattern:** Building #7 first for inventory/loot.  
**Anti-pattern:** Staying only on #1–2 with no #4 — never feeling management as a *player* activity.

---

## 6. Recommended pattern for Mythoras systems validation

Practical stack — **not** polished-UI dependent:

### Phase A — Data & generators (days–weeks)

1. Author **items, affixes, creatures, recipes, treasure classes** in typed Sheets/CSV (or Godot Librarian / Unity ScriptableObject database with CSV bridge).
2. Implement **pure, seeded generators** (`roll_loot(seed, context) → ItemInstance`) and inventory ops (`add`/`remove`/`equip`) with **no UI**.
3. Add a **CLI / headless suite**: N kills → histogram of rarities/affixes; economy sink sims; regression fixtures for known seeds.

### Phase B — Operable maker surface (parallel)

4. Ship an **ImGui or simple Control-node “Ops Console”**:
   - Spawn creature / force drop / roll craft
   - Inspect inventory as a **table**
   - Mutate affixes, dump JSON
5. Treat this as **tools forever** (also useful in production QA), not as the player HUD.

### Phase C — Ugly 2D “management template” (player-shaped, still artless)

6. One graybox scene: kill stub enemies → loot → **ugly stash/equip/craft/creature roster** using the same APIs as A/B.
7. Success criteria examples:
   - After 50 simulated sessions, stash pressure creates real discard decisions
   - Craft paths have ≥2 meaningful branches (not one obvious button)
   - Creature generation produces identifiable roles (tank/DPS/support) from data alone
8. Explicitly **do not** invest in icons, animations, or layout polish until criteria pass.

### Phase D — Feel gate (still not final art)

9. Only after A–C: a short **combat + loot pickup** graybox to validate dopamine/readability — still placeholder art.
10. Then, and only then, schedule replacement of the ugly management UI for the vertical slice.

### Hard rules for Mythoras

- **One authoritative data schema**; spreadsheets feed it; UI never owns balance numbers.
- **Ugly UI must call production APIs** (no parallel “prototype inventory” that dies at rewrite).
- **Every system has a sim test and a human operable path** — sims for distribution, humans for decision quality.
- **Label the artifact:** “Systems Harness v0” ≠ “Mythoras demo.”
- **Kill criteria for the ugly UI** written before building it (e.g. “replace when inventory decision tree is locked and vertical-slice art pass starts”).

### Direct answer to the maker’s proposal

**Yes:** a simplified 2D / spreadsheet-like / ugly management UI is a legitimate, industry-adjacent approach for validating Mythoras’s inventory, gear generation, creature generation, and management systems **before** polished presentation — *provided* it sits on seeded data/generators, is paired with headless sims, and is not confused with validating combat feel or with the final player UI.

---

## 7. Sources

### Primary / official / first-party

- [Unreal Engine — Data Driven Gameplay Elements](https://docs.unrealengine.com/4.27/en-US/InteractiveExperiences/DataDriven/)
- [Unreal Engine Blog — Driving Gameplay with Data from Excel](https://www.unrealengine.com/en-US/blog/driving-gameplay-with-data-from-excel)
- [Unity Manual — ScriptableObject](https://docs.unity3d.com/Manual/class-ScriptableObject.html)
- [Unity — Separate Game Data and Logic with ScriptableObjects](https://unity.com/how-to/separate-game-data-logic-scriptable-objects)
- [Dear ImGui (ocornut/imgui) — README / design intent](https://github.com/ocornut/imgui)
- [Beamable — Game Content Designer](https://help.beamable.com/Unity-Latest/unity/user-reference/beamable-services/profile-storage/content/game-content-designer/)
- [imgui-godot](https://github.com/pkdawson/imgui-godot)
- [TBImGui (Unreal)](https://github.com/Lewisscrivens/TBImGui)
- [Cog (Unreal ImGui debug suite)](https://github.com/arnaud-jamin/Cog)

### High-trust design / industry practice

- [Josh Bycer — Defining Loot Tables in ARPG Game Design (Game Developer)](https://www.gamedeveloper.com/design/defining-loot-tables-in-arpg-game-design)
- [CRT Glow — Diablo 2 CSV / treasure class deep-dive](https://crtglow.itch.io/lost-in-the-stars/devlog/402674/diablo-2-as-an-inspiration-managing-game-data-using-csv)
- [AIE — Paper Prototypes (incl. RPG inventory)](https://aie.edu.au/articles/develop-your-game-design-skills-using-paper-prototypes/)
- [Game Developer — Use Paper Prototyping to design your games](https://www.gamedeveloper.com/design/use-paper-prototyping-to-design-your-games)
- [Rami Ismail — Prototypes & Vertical Slice](https://ltpf.ramiismail.com/prototypes-and-vertical-slice/)
- [Ask a Game Dev — Vertical Slice glossary](https://askagamedev.tumblr.com/post/77406994278/game-development-glossary-the-vertical-slice)
- [Bugnet — Vertical Slice vs Prototype](https://bugnet.io/blog/vertical-slice-vs-prototype-what-to-build-first)
- [Tono Game Consultants — Prototype Fast and Cheap](https://tonogameconsultants.com/how-to-create-a-game/)

### Concrete tools / precedents

- [GenericItemization (UE ARPG DataTables)](https://github.com/mattyman174/GenericItemization)
- [Librarian (Godot typed spreadsheet data)](https://github.com/5gTestSubject/librarian)
- [Godot Sheets → staticData pipeline](https://tilcode.com/godot-3-0-exporting-game-data-from-google-sheets-into-a-staticdata-gd-file-using-node-js/)
- [godot-autosim](https://github.com/applesnort/godot-autosim)
- [combat-sim-kit](https://github.com/Koval09/combat-sim-kit)
- [Arcadeon — Seeded loot tables & tests](https://arcadeonstudios.co.uk/blog/procedural-loot-without-pain-seeded-rng-loot-tables-and-tests)
- [ROELOD — ASCII ARPG systems filter](https://monsieurjulien.itch.io/rogue-of-exile-lord-of-destruction/devlog/1485351/building-a-roguelike-arpg-that-combines-path-of-exile-diablo-234-and-last-epoch-in-ascii)
- [Unity Debug Sheet](https://github.com/Haruma-K/UnityDebugSheet)

---

*Not canon for Mythoras design docs — research artifact for systems-prototype planning.*
