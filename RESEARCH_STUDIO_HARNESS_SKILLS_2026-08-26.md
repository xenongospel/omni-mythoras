# Studio harness, game skills, and “new joiner” context (2026-08-26)

**Status:** Inspiration / borrow-candidates only. **Not Mythoras canon. Do not install skill packs from this file.**  
**Date:** 2026-08-26  
**Audience:** How Mythoras should *run agents* (harness, roles, atomic tickets) and which open-source game skills are worth *stealing patterns from*. Complements [`RESEARCH_OWNER_REFS_HARNESS_GAMEVIEW_2026-08-26.md`](RESEARCH_OWNER_REFS_HARNESS_GAMEVIEW_2026-08-26.md).

Owner asked for comprehensive research: open-source game-design / systems / Game View / UI skills (reputable authors), Matt-Pocock-shaped workflows for *this* game, book-style narrative QA roles, the Centrica/WNS recording, three YouTube talks, whether Godot would help *now*, and studio-shaped structure.

Claims tagged **FACT** / **INFERENCE** / **SECONDARY**.

---

## Question

1. Which open-source Agent Skills exist for game design, systems, Game View, and UI — and which authors are actually high-trust?  
2. How do Dom Need’s AI-native workflow, Matt Pocock’s skills, and Uncle Bob’s “fundamentals still apply” talk map onto Mythoras *today*?  
3. Can book-writing continuity skills become Protocol / world / creature reviewers?  
4. Does switching to Godot fix the current Game View / production problems?

---

## Sources

| Item | Primary | Trust |
| --- | --- | --- |
| Centrica × WNS stand-up (2026-08-26) | Owner-pasted transcript of `INT Centrica x WNS Daily Stand-ups-20260826_101459-Meeting Recording.mp4` (file not found on disk in this workspace; transcript is the source) | Speaker: **Need, Dom** — first-party for *this* talk |
| Lost in the middle | [Liu et al., TACL 2024 / arXiv:2307.03172](https://arxiv.org/abs/2307.03172) | Academic primary |
| Matt Pocock × Uncle Bob | [YouTube `zcLPGC-tvgk`](https://www.youtube.com/watch?v=zcLPGC-tvgk) oembed + auto-transcript | **Matt Pocock** (aihero.dev, `mattpocock/skills` ~237k★ 2026-08-26); **Robert C. Martin** (*Clean Code*) |
| Nuno on building a skills framework | [YouTube `yw2IZ6EV2dQ`](https://www.youtube.com/watch?v=yw2IZ6EV2dQ) | **Nuno Maduro** (Laravel / Pest) — reputable engineer, *not* a game-studio voice |
| Kvint Labs walkthrough | [YouTube `YE0XeZSIvss`](https://www.youtube.com/watch?v=YE0XeZSIvss) | **SECONDARY** recap of Matt’s repo (channel ~6 subs; use as an index, not authority) |
| Matt skills | [github.com/mattpocock/skills README](https://github.com/mattpocock/skills) | High |
| Unity official skills | [github.com/Unity-Technologies/skills](https://github.com/Unity-Technologies/skills) (~388★) | **Highest vendor trust** for Unity; irrelevant until Unity is the engine |
| Cross-engine game skills | [gamedev-skills/awesome-gamedev-agent-skills](https://github.com/gamedev-skills/awesome-gamedev-agent-skills) (~638★, maintainer Abhishek Barali) | Medium-high *craft catalog*; version-pinned + validator |
| Godot skill library | [thedivergentai/GD-Agentic-Skills](https://github.com/thedivergentai/gd-agentic-skills) (~591★) | Medium; Godot-only |
| Studio-hierarchy template | [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) (~24.5k★, Melbourne solo) | **Popular ≠ studio-grade.** Steal org-chart *ideas*; do not adopt 49 agents |
| Fiction continuity skills | [danjdewhurst/story-skills](https://github.com/danjdewhurst/story-skills) (~189★) | Medium; best *pattern* for bible + deterministic QA |
| Mythoras locks | [`CONTEXT.md`](CONTEXT.md), [`POSTURE_REQUIREMENTS.md`](apps/mythoras-client-prototype/POSTURE_REQUIREMENTS.md), [`docs/agents/domain.md`](docs/agents/domain.md) | Repo FACT |

---

## 1. The recording — what Dom actually said

**FACT (transcript, Need, Dom).** Defence-client PoCs produced **4–5× more code**. Failures:

1. **Audit:** code is fine *in isolation*; it may not meet the **overall architecture**.  
2. **Maintainability:** nobody can explain it because it landed too fast; humans are not reviewing at that pace.  
3. **Regressions:** isolated agents lack **historical workflow** knowledge; old features break.  
4. **Domain drain:** the business problem left the *people* **and** the *docs*, because docs could not keep up.

**FACT — the fix he landed on.**

- The repo (or docs that sit beside the code) must be **the most declarative it has ever been**. Markdown that says **what good looks like**.  
- Examples on screen: `CLAUDE.md` (general), a **CONTEXT** glossary, a **design system**, **ADRs**, an **agents** file.  
- **How we work** (tickets, definition of done) used to live in Confluence; it now has value **in the repo** so agents follow the same flow.  
- Tickets need a **clear, repeated structure**.  
- **Every time a model starts a piece of work, it is a new joiner.** Assume they know nothing; give a fast rundown.  
- **Context pollution is the biggest problem he sees.** All-day “implement this” back-and-forth burns the window. Attention drops; *lost in the middle* (he names the paper). Compaction makes it worse.  
- Conversations must be **atomic**, regardless of advertised context size.  
- **Spec before code.** Start from a high-level hypothesis + NFRs, then the flow.

**FACT — lost in the middle (Liu et al., TACL 2024).** Performance is often **U-shaped**: beginning and end of a long context get used; the **middle degrades**. Longer contexts still lose the middle. This is the academic primary behind Dom’s and Uncle Bob’s “don’t stuff CLAUDE.md.”

**INFERENCE for Mythoras (this is the Game View / “why is making the game hard *now*” diagnosis).**

The recording is **not about Godot vs Three.js**. It is about why the prototype can look “better” in a session and still not be the game:

| Dom’s failure | What it looks like here (INFERENCE) |
| --- | --- |
| Isolation vs architecture | A HUD pass that is pretty *locally* but violates POSTURE (1×1 inventory, diagonal Zone map, Program on the plate, extra windows). |
| Nobody can audit | Research dumps + chat history + CONTEXT + POSTURE + ADE NOTES are many truths; a new session cannot hold them. |
| Domain drained from docs | [`CONTEXT.md`](CONTEXT.md) last updated **2026-08-14**. POSTURE (2026-08-24) traces DD1 gothic plate. CONTEXT **#8** still says compact World View HUD + Workspace docks. Those two documents can **fight**. |
| No ADRs folder | [`docs/agents/domain.md`](docs/agents/domain.md) points at `docs/adr/`; **no ADR files exist yet**. Decisions live in RESEARCH_*.md and chat. |
| Non-atomic context | Research + implement + “also look at this tweet” in one thread = War and Peace, then “what was on page 37?” |
| New joiner not briefed | Fresh agent reads CONTEXT (campaign, not-dark, Turn Program *as a term*) then paints a SaaS HUD or a 1v1 Neidfyre layout because POSTURE was not in the first 30 seconds. |

**Steal from Dom (now, as process — not as code):** one **onboarding card** per surface (client HUD vs ADE vs lore); **atomic tickets**; refresh CONTEXT/POSTURE so they do not contradict; ADRs when a grill actually closes; design-system *for the plate* (Ubuntu + UnifrakturCook + gothic chrome) written once.

**Do not steal:** copying Centrica’s call-centre GGAM PoC; Confluence-as-source; all-day single-thread implementation.

---

## 2. The three videos

### 2.1 Matt Pocock LIVE: Uncle Bob on software fundamentals (`zcLPGC-tvgk`)

**FACT (oembed).** Title: *LIVE: Uncle Bob on Software Fundamentals in the Age of AI*. Author: Matt Pocock.

**FACT (transcript, Robert C. Martin).** Agents leave mess; messy code makes *agents* thrash the same way humans do. Early approach: giant TDD/Clean Code prompts — models treat them as **Pirates of the Caribbean guidelines**. Reason: **lost in the middle**. Trim the initial prompt; put quality in **deterministic tools** (coverage/complexity “CRAP”, mutation testing) that do not vanish into the window. Goal: constrain agents so he does not have to read every line.

**FACT — multi-agent gauntlet he uses.** Specifier (Gherkin + human-POV QA procedure) → coder (unit tests + story) → cleaner (complexity/review) → hardener (mutation) → QA (executable UI script). Agents **born, do the task, die** so the next has a **clean context**. Trajectory: a session that starts “just make it work” will keep that trajectory; only a new context changes the job.

**FACT — planning.** Waterfall-spec-then-agent **failed** for him this week. Agents love gorgeous plans that fall apart. Preference: **agile** — a story or two, look at architecture, reorganize. Specs are **ephemeral**; the running system + checkers are the contract. Do not impose *human* TDD micro-steps on agents; impose **human values** (tests exist, modules are deep) with different thresholds.

**FACT — Matt’s framing in the same conversation.** Deep modules (Ousterhout): small interface, lots hidden. Agents read interfaces and tests. Spec-driven development as an industry label is muddy; the useful distinction is whether you **persist** specs you actually return to. Matt’s own keynote line (separate talk, widely quoted): *software fundamentals matter more than ever*; design the interface, delegate the implementation.

**INFERENCE for Mythoras.** This is the same lesson as Dom, with sharper tools:

- **POSTURE + CONTEXT + a HUD eval** (does the plate show Program? is the Zone orthogonal? do items occupy w×h?) are Uncle Bob’s “deterministic checkers,” not another 10-page CLAUDE.md.  
- **Grill → spec → tickets → implement in a *new* chat** is born-do-die. Do not research Game View and ship inventory in the same window.  
- **Do not** install a 49-agent studio that keeps one eternal session.

### 2.2 Nuno Maduro: building a Matt-Pocock-shaped framework (`yw2IZ6EV2dQ`)

**FACT (oembed).** Title: *So I'm building my own Matt Pocock skills framework...* Author: **nunomaduro**.

**FACT (auto-transcript).** He does **not** blindly vendor Matt’s 200k★ repo. He builds **Odd / hootstack**: CLI (Rust) + skills folder + **evals**. `odd init` writes `AGENTS.md`, `CLAUDE.md` pointing at it, `project.md` (only what code cannot explain — anti-pollution). Skills (e.g. deps-upgrade) are run with **eval suites** (LLM-as-judge + real projects) so skill changes are tested. Thesis: skills turn a general model into **battle-tested procedure**; evals make that less random.

**INFERENCE.** This is the “refine output where necessary” lever. Mythoras should **not** fork Odd. It should **eval the skills it writes**: a HUD skill that still emits 1×1 inventory fails the eval. Same as Ng’s eval-driven development in the previous research note.

### 2.3 Kvint Labs: “I read all 25 of Matt’s skills” (`YE0XeZSIvss`)

**FACT (oembed + page).** Kvint Labs, ~117 views, 2026-08-22. Description is a **chapter index** of `mattpocock/skills`: grill-me, install paths, TDD, diagnosing-bugs, code-review, improve-codebase-architecture, to-tickets, codebase-design, setup-matt-pocock-skills, user- vs model-invoked.

**SECONDARY.** Use the timestamps as a map into Matt’s README. Do not treat this channel as a game-industry authority.

### 2.4 Matt’s skills — what they actually are (primary README)

**FACT.** Designed to be **small, composable, model-agnostic**. Explicit contrast: GSD / BMAD / Spec-Kit **own the process and take away control**. Failure modes he encodes:

| # | Failure | Skill |
| --- | --- | --- |
| 1 | Agent didn’t build what you meant | `/grill-me`, `/grill-with-docs` |
| 2 | Verbose / wrong jargon | `CONTEXT.md` ubiquitous language via grill-with-docs + domain-modeling |
| 3 | Code doesn’t work | `/tdd`, `/diagnosing-bugs` |
| 4 | Ball of mud | `/to-spec` names modules; `/improve-codebase-architecture`; `/codebase-design` (deep modules) |

**FACT — this repo already adopted that layout.** [`docs/agents/domain.md`](docs/agents/domain.md): single-star `CONTEXT.md`, lazy ADRs, glossary as law. [`docs/agents/issue-tracker.md`](docs/agents/issue-tracker.md): GitHub issues, wayfinder maps. User-invoked engineering skills (grill, tdd, research, wayfinder, etc.) already live in the operator’s skill set.

**Gap (FACT):** those skills are **software-engineering**. They do not know DD plate packing, multi-spatial stash, locked isometric camera, or Protocol voice. That is the game-shaped layer to *add*, not a reason to replace Matt’s set.

---

## 3. Open-source game skills — catalogue and reputation

There is **no** GGG / Riot / FromSoftware official Agent Skills pack found in this pass. Closest **vendor** pack is **Unity Technologies**. Closest **engine-agnostic catalog** is awesome-gamedev-agent-skills. Closest **studio org chart** is Donchitos (popular template, not a shipped studio).

### 3.1 Trust ranking (for Mythoras)

| Rank | Repo | Why trust / why caution | Use for Mythoras |
| --- | --- | --- | --- |
| 1 | `Unity-Technologies/skills` | Official Unity. Router `ui` → UITK/uGUI/IMGUI. Scope: do only what was asked. | **Park** until/unless Unity is the client. Pattern to copy: **router + refuse wrong subsystem**. |
| 2 | `mattpocock/skills` | Named teacher; fundamentals; already in this workspace. | **Keep.** Add game skills *beside* it, same composable size. |
| 3 | `gamedev-skills/awesome-gamedev-agent-skills` | 68 skills, **router**, version-pinned (Godot 4.7, Unity 6.3, three.js **r184**), validator, Apache-2.0. Maintainer is not a AAA studio. | **Best catalog to read.** Current client is Three.js: `threejs-scene-setup`, `threejs-materials-lighting`, `game-ui-ux`, `camera-systems`, `level-design`, `create-game-assets`. **Rewrite** camera-systems: it defaults to OrbitControls / follow cams — POSTURE wants **locked MoP camera**. |
| 4 | `thedivergentai/GD-Agentic-Skills` | Dense Godot 4.x library, Analyst/Auditor/Builder personas. | **Park** with Godot. |
| 5 | `Donchitos/Claude-Code-Game-Studios` | ~24k★, **49 agents / 73 skills / 41 templates**, Godot+Unity+Unreal specialists, MDA/SDT/Bartle named in README. Author: Melbourne solo (`Donchitos`), one public repo. Star count ≠ shipped game. Matt’s README warns against process-owning kits. Uncle Bob/Dom warn against fat context and eternal sessions. | **Steal the org chart as a list of *roles*** (systems designer, narrative director, QA lead). **Do not** clone the template into this repo. |
| 6 | `danjdewhurst/story-skills` | Fiction bible + **`story continuity` CLI** (dead characters walking, payoff-before-setup) as a compiler. | **Steal the pattern** for Protocol / Zone / creature lore. Not a novel-writer for the HUD. |

### 3.2 What the useful game skills actually cover

**FACT (awesome-gamedev README + sample SKILL.md files).**

**Disciplines (cross-engine):** `game-ui-ux` (HUD/menus, anchors, safe areas, screen stack — **engine-neutral layout**, not gothic costume); `camera-systems` (follow, deadzone, orbit, shake); `level-design` (whitebox, grid, pacing); `create-game-assets` (art direction families, not one-off gens); `game-feel`; `dialogue-systems`; `save-systems`; `procedural-gen`; `game-ai`; etc.

**Genres:** `rpg`, `roguelike`, `card-game`, `visual-novel`, … — **compositional**. CONTEXT **#7**: Mythoras is **not** a roguelike product. Do not load `roguelike` as the campaign skill.

**Web engines:** `threejs-scene-setup` teaches Scene/camera/renderer, **OrbitControls for developing**. That last line is a **pitfall for this prototype** (owner: lock camera).

**Godot cluster (15 skills):** GridMap / TileMap, Control UI, 3D essentials — the actual *engine* help if/when Godot is the Game View.

**FACT (Donchitos README).** Studio tiers: Creative/Technical Director + Producer → department leads (game-designer, narrative-director, qa-lead, …) → specialists (systems-designer, world-builder, ux-designer, ui-programmer, prototyper, …). Commands include `/design-system`, `/map-systems`, `/ux-design`, `/consistency-check`, `/team-combat`, `/team-narrative`, `/team-ui`. Philosophy: ask → options → **you decide** → draft → approve. Path-scoped rules (`src/ui/**` must not own game state).

**INFERENCE.** The *jobs* match a real studio. The *delivery* (49 subagents in one Claude Code product) fights atomic context. Mythoras version: **one skill or one subagent per job, invoked on a fresh ticket**, pointing at CONTEXT/POSTURE.

### 3.3 Book skills → game lore QA

**FACT (story-skills README).** Skills: story-init, character-management, worldbuilding (magic, politics, …), plot-structure, chapter-writing, revision-continuity, story-maintenance. Continuity engine treats contradictions like type errors. Example failures: dead character in a later chapter, payoff before plant, object `active` vs artifact `destroyed`.

**INFERENCE — Mythoras mapping (roles, not a second bible format yet):**

| Book skill / check | Mythoras analogue |
| --- | --- |
| Character bible | Creature species + Principal + Origin tags |
| Magic system | Protocol (structural/compiled, not elemental mysticism); Channel → Stream → Tags |
| Worldbuilding locations | Zone fixtures (OD-009), Region vs Zone vs battle Tile |
| Plot / promises | Campaign → Cipher Network; Warbanner as opt-in, not a plot coupon |
| Continuity CLI | “Does this text call Skill Cards Technician-global?” “Is the game called a roguelike?” “Is Channel a defence schema?” |
| Genre voice | Protocol voice vs parlour travel vs volcanic elite (CONTEXT #1) — **persona per register**, not one gothic narrator |

A **narrative QA reviewer** skill should fail a pass that: invents Pinnacle Evolution, paints universal dark tone, puts Turn Program on the HUD, or describes Gear as Technician stash.

---

## 4. Recreating studio structure — without cloning a 49-agent kit

**FACT.** Donchitos’ explicit goal is “structure of a real studio.” Matt’s explicit non-goal is kits that own the process.

**INFERENCE — studio-shaped *harness* for Mythoras (roles as skills, not a standing org):**

| Studio seat | When to invoke | Grounding docs | Atomic job |
| --- | --- | --- | --- |
| Creative director | Tone / identity fights | CONTEXT #1, #8 vs POSTURE | Resolve contradiction into an ADR |
| Systems designer | Combat, Grid, tags | CONTEXT combat locks | No new nouns; grill first |
| Game View / camera | Board, lighting, tiles | POSTURE §3; MoP/xikhar research | Locked isometric voxel; no OrbitControls |
| UI / HUD | Plate, map, stash | POSTURE §4; Grim Dawn/PoE research | Pack DD plate; 12×7 multi-spatial; orthogonal Zone |
| Narrative / Protocol | Copy, creature voice, world | CONTEXT Protocol; story-skills pattern | Continuity vs glossary |
| QA (play + lore) | After implement | POSTURE MUST NOT list + CONTEXT corrections | Fresh context, eval checklist |
| Tools / ADE | Dictionaries, fixtures | ADE NOTES, OD-009 | Separate ticket from client HUD |
| Producer | Scope | Wayfinder issues | One surface per ticket |

**New joiner card (INFERENCE, Dom + Uncle Bob).** First 20 lines of a client-HUD session should be: read POSTURE; CONTEXT only for vocabulary; do not open the research dump; one ticket; born-do-die.

---

## 5. Does Godot help with game-related dev *now*?

**Short answer:** **Godot would help the Game View *later*. It would not fix the problems the recording diagnoses, and switching now would *create* that failure mode.**

**FACT.** POSTURE: Godot is later; this pass is Three.js voxel board + HTML/CSS plate. Prior ADE research ([`RESEARCH_GODOT_ENGINE_EDITOR_UI_ADE_2026-08-10.md`](RESEARCH_GODOT_ENGINE_EDITOR_UI_ADE_2026-08-10.md)) used Godot’s **editor grammar** as ADE inspiration, not as a client rewrite. xikhar’s Three.js→Godot tweet is visual reference only ([previous research note](RESEARCH_OWNER_REFS_HARNESS_GAMEVIEW_2026-08-26.md)).

**FACT.** Godot skill density is real: awesome-gamedev has 15 Godot skills (GridMap, Control UI, 3D, lighting); GD-Agentic-Skills is a Godot long-term-memory pack. Those skills make agents *better at Godot*, not better at a Vite+Three.js overlay.

**INFERENCE — what is actually broken now**

| Problem | Engine? | What actually fixes it |
| --- | --- | --- |
| HUD not DD-dense; inventory is icon cells; Zone map has diagonals | No | POSTURE execution + HUD skill/evals |
| Game View “ok-ish” (void, weak tiles, unlocked-feel) | **Partly** | Art direction + locked camera + lighting *in Three.js first*; Godot GridMap/Environment would make the *same* language cheaper **after** the plate is honest |
| Agents ignore locks / invent Program / SaaS chrome | No | New-joiner briefing, atomic chats, deterministic HUD checks |
| Domain split across CONTEXT vs POSTURE vs RESEARCH_* | No | Declarative docs (Dom); ADR when #8 vs gothic plate is decided |
| ADE vs client confusion | No | Separate tickets / surfaces |

**When Godot *does* help (parked, not now):** native 3D viewport and lighting; GridMap as Tile language; AnimationTree; an editor that is already a “studio”; Godot skills fire because `project.godot` exists. That is a **migration ticket**, not a harness ticket. Doing it in the same session as “fix inventory” is Dom’s isolated-agent landing.

---

## 6. Steal / ignore / park

### Steal (refine into *Mythoras* skills — do not vendor wholesale)

1. **Dom:** new joiner; atomic context; repo says what good looks like; tickets have a shape.  
2. **Uncle Bob / Matt:** trim steering; deterministic evals; born-do-die; deep modules; grill then small stories — not a waterfall GDD.  
3. **Nuno:** evals on skills so “HUD skill” cannot silently regress.  
4. **Unity `ui` router pattern:** detect surface (client HUD vs ADE vs lore) and refuse the wrong one.  
5. **awesome-gamedev:** `game-ui-ux` / `level-design` / `create-game-assets` / three.js skills as *reading*; override camera to **locked**.  
6. **story-skills continuity engine:** Protocol/creature/glossary compiler checks.  
7. **Donchitos org chart:** role names and “you decide,” not 49 live agents.

### Ignore

- Installing Claude-Code-Game-Studios or GD-Agentic-Skills into this repo *now*.  
- Loading `roguelike` / OrbitControls / generic RPG inventory as the product.  
- Kvint Labs as authority.  
- Godot as a fix for documentation/harness failure.  
- BMAD/GSD/Spec-Kit-shaped mega-process (Matt’s warning; Uncle Bob’s failed waterfall week).

### Park

- Godot client + Godot skills (with Game View, after plate).  
- Unity official skills (wrong engine).  
- Full narrative bible layout from story-skills (until lore volume needs a compiler).  
- Mutation testing / CRAP scores (Uncle Bob’s gauntlet) until there is a testable combat sim — values yes, tooling later.

---

## 7. What this pass did not change

No client, ADE, POSTURE, or skill-pack installs. Recommended next *process* (only if the owner asks to execute): reconcile CONTEXT #8 vs POSTURE in an ADR; write a one-page **client new-joiner** doc; keep research dumps out of implement threads; add a HUD eval checklist to the ticket template. Game View and Godot stay behind the already-locked console order (pack plate → orthogonal Zone map → multi-spatial stash).
