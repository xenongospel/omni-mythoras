# Research — Scene-First vs Systems-First Start Path (Mythoras)

> Research context only. This file is a decision framework for *how to start building*, not new game canon. Mythoras-specific claims cite repo docs; industry-general claims cite primary/practitioner sources. Updated 2026-08-01.

---

## 1. Problem framing

The maker pattern: start attempts die on **UI/tiles polish** before the distinctive play loop is proven. Three alternatives are on the table:

| Option | Intent | Failure mode if used as the *first* workstream |
|---|---|---|
| **(A) Scene / layout shell first** | Unity-style scenes, viewport grammar, World View vs Workspace View chrome | Polish trap: chrome and tiles become the product; adaptive continuity + Turn Program remain unproven |
| **(B) Systems sandbox first** | Inventory, gear gen, creature gen in a simplified 2D template without good UI | Configuration without play: Builder-shaped work validates data shapes, not the Mythoras promise |
| **(C) Explicit polished UI layout first** | Treat scenes/UI layout as the primary stream | Same as (A), with higher sunk cost; visual language is explicitly still open in canon |

**Diagnosis (repo-grounded):** Mythoras already rejected permanent surrounding management panels and shell-first product framing. UI *architecture* (World View default + player-invoked Workspace View) is locked; **visual language remains open**. Prior disposable UI-shell prototypes under `prototypes/mvp-ui-shell/` were useful for vocabulary/layout reaction and also demonstrated how quickly shell work absorbs attention without proving play. ([CONTEXT.md](CONTEXT.md) critical correction #8; [SESSION_DECISIONS_2026-07-15.md](SESSION_DECISIONS_2026-07-15.md); [prototypes/mvp-ui-shell/PROMPT_V2.md](prototypes/mvp-ui-shell/PROMPT_V2.md); [WAYFINDER_PASS_MVP_VERTICALS.md](WAYFINDER_PASS_MVP_VERTICALS.md) superseded BOOTSTRAP shell path.)

---

## 2. What Mythoras already proposes as the first seam

Open grilling ticket `01-define-first-playable-seam` asks for exact player experience, start/end state, stubs/fakes, and distinctively Mythoras feel — using the Wayfinder recommendation as the default to stress-test. ([`.scratch/mythoras-project-spine/issues/01-define-first-playable-seam.md`](.scratch/mythoras-project-spine/issues/01-define-first-playable-seam.md))

**Recommended first vertical (repo inference, strong):**

> One data-authored traversable environment fragment → encounter on the **same physical surface** → plan a Turn Program for three Field creatures → commit → automatic Speed/timing/support ordering → at least one more round → win → resume traversal in place.

Minimum included; explicitly cut: full Grid, Backpack, Workspace polish, procedural zones, Bench UI, type chart, campaign, Cipher/Proving, production art. ([WAYFINDER_PASS_MVP_VERTICALS.md](WAYFINDER_PASS_MVP_VERTICALS.md) §§ Recommended first vertical, Keep out)

**Why that seam (not shell, not Builder):**

- Adaptive continuity + Turn Program are the two most distinctive locked gameplay commitments.
- Combat-only board ≠ ARPG traversal seam; traversal-only renderer ≠ Mythoras combat; Grid/Builder ≠ play. ([WAYFINDER_PASS_MVP_VERTICALS.md](WAYFINDER_PASS_MVP_VERTICALS.md))
- OD-004 already recommended proving tactical/continuity questions with replaceable geometry before production art, and keeping simulation projection-neutral. ([OD_004_RESEARCH_SYNTHESIS.md](OD_004_RESEARCH_SYNTHESIS.md))

**Grill still open:** exact start/end/failure/restart evidence for that seam is not settled as a locked contract — only proposed. Treat Wayfinder’s player-observable success criteria as the draft acceptance list until the grilling ticket closes.

---

## 3. Industry taxonomy (do not conflate these)

Teams that finish complex multi-system games usually separate **question-shaped** work from **production-shaped** work. Mixing them is the polish trap.

### 3.1 Design prototype (ugly, disposable)

Answers: *Should we make this / is the core idea fun?* Cheap, placeholder art, throwaway allowed. If you are polishing a prototype, you forgot what it is for. ([Bugnet — Vertical Slice vs Prototype](https://bugnet.io/blog/vertical-slice-vs-prototype-what-to-build-first); [Rami Ismail — Prototypes & Vertical Slice](https://ltpf.ramiismail.com/prototypes-and-vertical-slice/))

### 3.2 Systems / tool sandbox (horizontal-ish depth, thin presentation)

Answers: *Do these rules/data models produce interesting decisions when exercised in isolation?* Useful for loot tables, crafting EV, passive-tree math, creature generation — **when the risk is combinatorial complexity**, not embodied feel. Industry practice for deep ARPGs often isolates calculators and generators, but that work does not substitute for a playable loop. Mythoras’s own Wayfinder pass already flags full Builder UI as a poor lead for the first proof; a headless Turn Program / data model can precede Builder. ([WAYFINDER_PASS_MVP_VERTICALS.md](WAYFINDER_PASS_MVP_VERTICALS.md) §§ Builder-specific order, Tooling posture)

### 3.3 Greybox / blockout scene shell

Answers: *Do scale, routes, encounter spacing, and spatial continuity feel right under real locomotion?* Primitives only; playtest in-engine with player gravity/collision — not editor fly-cam. Greybox fails when the experience is primarily art/narrative dependent (classic Firewatch caveat). ([Level Design Book — Blockout](https://book.leveldesignbook.com/process/blockout.md); practitioner accounts e.g. Röki greybox-wide then vertical slice — [Polygon Treehouse](https://www.polygon-treehouse.com/blog/2017/10/2/vertical-what-now))

### 3.4 Vertical slice (production prototype)

Answers: *Can we ship one thin cross-section at near-final quality?* Expensive; one of each pipeline ingredient at shipping fidelity. Wrong as the *first* build if fun is unproven — polishing a bad loop is how years disappear. ([Rami Ismail](https://ltpf.ramiismail.com/prototypes-and-vertical-slice/); [Bugnet](https://bugnet.io/blog/vertical-slice-vs-prototype-what-to-build-first); [Tono consultants](https://tonogameconsultants.com/vertical-slice-4/))

### 3.5 Horizontal slice (full-breadth stub)

Answers: *Does the whole intended journey pace / scope hold with placeholders?* Whole game A→Z blocked out roughly. Useful later for campaign pacing; premature for Mythoras while even one zone’s continuity/Turn Program is unproven. (Industry definitions summarized in e.g. [Fred Gill / GGWP on VS vs HS](https://www.ggwp.com/blog/priorities-and-tech-considerations-in-pre-launch-game-development-with-fred-gill/); course notes [Masaryk PV266 HS/VS PDF](https://is.muni.cz/el/fi/jaro2018/PV266/um/PV266_-_Horizontal_and_Vertical_Slice_Descriptions.pdf))

**Order that avoids the polish trap (industry-general):**

```
cheap prototypes (fun / distinctiveness)
    → optional systems sandboxes for combinatorial risks
    → greybox scene that hosts the playable seam
    → only then near-final vertical slice / visual language lock
    → later horizontal breadth (campaign, inventory economy, etc.)
```

Never reverse: polished UI/layout before a disposable playable seam. ([Bugnet](https://bugnet.io/blog/vertical-slice-vs-prototype-what-to-build-first); [Rami Ismail](https://ltpf.ramiismail.com/prototypes-and-vertical-slice/))

---

## 4. Decision framework for Mythoras

Use the **risk question** as the gate — not preference for “pretty” vs “systems.”

### Gate A — What is the highest unresolved *player-facing* risk?

| If the risk is… | Prefer… | Mythoras example |
|---|---|---|
| Continuity / embodied traversal→battle feel | **Greybox scene + thin Turn Program** | Same landmark/positions before/during/after battle |
| Planning/execution comprehension | **Ugly combat HUD on greybox** (legibility, not craft) | Commit, read-only execution, visible order |
| Combinatorial build depth without needing place | **Systems sandbox / headless sim** | Damage pipeline calc, Skill Frame link timing, loot EV |
| Campaign pacing / content volume | **Horizontal stub later** | Sequence of zones with placeholders |
| Production pipelines / shipping look | **Vertical slice much later** | One biome fragment at near-final art+audio+UI |
| Chrome / visual identity alone | **Moodboards / disposable HTML shell** — time-boxed, non-blocking | Existing `mvp-ui-shell` role |

### Gate B — Does this workstream answer a seam criterion or only decorate one?

Map every session to Wayfinder’s player-observable criteria (draft). If the work does not move at least one of: move → encounter-in-place → plan → commit → ordered resolve → resume traversal — it is **off the critical path** for the first proof. ([WAYFINDER_PASS_MVP_VERTICALS.md](WAYFINDER_PASS_MVP_VERTICALS.md) §§ Player-observable success criteria)

### Gate C — Polish budget rule

| Allowed now | Forbidden until seam survives ordinary play |
|---|---|
| Color-coded primitives, debug labels, placeholder tokens | Tile polish, bevelled chrome, production fonts, biome art passes |
| Compact contextual HUD sufficient for Planning/Execution | Workspace View customization, Backpack, Grid workspace surfaces |
| One loadout swap that changes timing/outcome | Full inventory/gear gen loops as a product surface |
| Projection-neutral authored fragment | Choosing final renderer as a polish exercise |

### Gate D — When systems-sandbox *is* the right next session

Do systems-sandbox **only if** one of these is true:

1. The playable seam is blocked on a **data/rules** ambiguity that cannot be stubbed honestly (e.g. “automatic order” with no Speed/support cost model at all).
2. You need a **headless** experiment that will become shared domain code (Turn Program simulator), not a UI product.
3. Parallel optional work that cannot steal the main thread (e.g. spreadsheet EV for a provisional damage model) with a hard time-box.

Do **not** start inventory/gear/creature gen sandboxes as the primary path: P1-04 Backpack is still fantasy-only in the Wayfinder inventory; Builder after combat subset is the recorded order, and BLD-01 alone does not prove the seam. ([WAYFINDER_PASS_MVP_VERTICALS.md](WAYFINDER_PASS_MVP_VERTICALS.md))

### Gate E — When scene/greybox *is* the right next session

Do greybox scene work when:

1. You are hosting the **one-zone adaptive-continuity** experiment.
2. You need to measure orientation loss, approach direction, footprint activation — questions that cannot be answered in a menu.
3. Art is explicitly replaceable (labelled cuboids / diamonds / tokens). OD-004’s Master of Piece lesson: combat-first graybox → stable board grammar before shell redesign. ([OD_004_RESEARCH_SYNTHESIS.md](OD_004_RESEARCH_SYNTHESIS.md))

Do **not** treat greybox as permission to build a polished World View shell. Architecture is locked; look is not. ([CONTEXT.md](CONTEXT.md); [SESSION_DECISIONS_2026-07-15.md](SESSION_DECISIONS_2026-07-15.md))

### Gate F — When polished UI layout work is justified

Only after:

1. The seam criteria pass with ugly HUD; **and**
2. A specific comprehension failure is attributable to layout (not missing rules); **or**
3. You are entering a true vertical-slice / pitch stage.

Until then, disposable shell prototypes may run as **time-boxed parallel probes** (hours, not the main session goal), never as the gate for writing game code.

---

## 5. Mapping options A / B / C onto the framework

| Maker option | Framework verdict for Mythoras *now* |
|---|---|
| **(A) Unity-style scenes/layout first** | **Partial yes, re-scoped:** yes to a **greybox fragment scene** that hosts traversal+battle; no to layout/chrome as the goal. |
| **(B) Simplified 2D systems template** | **Defer as primary.** Allow a *minimal* 2D/token presentation for the seam, and optional headless system sims — not inventory/gear/creature gen as the start. |
| **(C) Scenes/UI layout as first workstream** | **No.** Visual language open; prior shell prototypes already burned this path; Wayfinder keeps Workspace polish out of the first vertical. |

**Hybrid that avoids the trap:** greybox **scene host** + **ugly** systems that the seam needs (movement, footprint, Turn Program, one Skill Card/support swap) + **stub** everything else. That is a design prototype of the vertical, not a production vertical slice.

---

## 6. Recommended default path for Mythoras NOW (next 1–3 sessions)

### Framing goal

Close (or deliberately amend) the first-playable-seam contract, then run one **ugly** end-to-end proof attempt — not a shell, not a Builder.

### Session framing (suggested)

1. **Session 1 — Contract:** Stress-test Wayfinder’s one-zone adaptive-continuity Turn Program against `01-define-first-playable-seam`. Lock start state, end state, restart, stubs/fakes, and “distinctively Mythoras” evidence. Output: short acceptance checklist + explicit fake list.
2. **Session 2 — Greybox host:** One authored fragment (entrance, landmark, encounter clearing, exit) with token movement and in-place battle footprint activation. No tile polish. Prefer projection-neutral data even if the throwaway renderer is flat 2D.
3. **Session 3 — Thin Turn Program:** Three Field creatures, plan → commit → visible automatic order → resolve ≥2 rounds → return to traversal; one Skill Card/support swap that changes order/outcome; provisional damage model loaded from data.

Optional parallel (non-blocking): time-boxed ADE validation upstream; disposable mood/shell HTML only if it does not steal Sessions 2–3.

### Do this

- Treat **adaptive continuity + Turn Program** as the only must-feel Mythoras proof for this window.
- Use **greybox / tokens / debug HUD**; celebrate ugliness as success criteria.
- Author **one fixed fragment** before procedural generation.
- Stub Bench, Workspace View, Backpack, Grid, type chart, biomes, production art.
- Keep World View architecture constraints (world-dominant viewport, compact contextual HUD) as **layout rules**, not as a chrome project.
- Mark provisional systems honestly in the seam contract.
- Prefer a **game repository + runtime + test command** over more GDD breadth. ([WAYFINDER_PASS_MVP_VERTICALS.md](WAYFINDER_PASS_MVP_VERTICALS.md) current-state consequence)

### Do not do this

- Do not start with inventory, gear generation, or creature generation sandboxes as the main path.
- Do not polish tiles, panel bevels, or “crafted” visual language before the seam is playable.
- Do not rebuild Arcane Cartographer / Field Studio / permanent surrounding panels.
- Do not gate the first proof on ADE-01/02 or full Builder UI.
- Do not confuse a disposable UI shell with the first playable seam.
- Do not attempt a near-final **vertical slice** yet — that is a later production milestone.
- Do not expand into campaign / Cipher / competition / full Grid content.

### What to defer (explicit)

| Defer until… | Items |
|---|---|
| Seam survives ordinary play | Workspace customization, Backpack, production visual language, biome art pass, renderer finalist bake-off as a *polish* exercise |
| Combat subset frozen by play | Full Builder UI, Grid content authoring, Forge Terminal, sharecodes |
| After one authored fragment works | Procedural route variants, Region content, fixture map editor |
| Product MVP track | Campaign competition spine, Cipher Network, Proving, Pinnacles |
| Always optional / parallel only | ADE platform expansion beyond a short validation time-box |

---

## 7. Anti-polish trap checklist (print this)

Before any session, answer in one line each:

1. **Question:** What single player-observable risk does this session reduce?
2. **Fidelity ceiling:** What is explicitly *not* allowed to look good yet?
3. **Exit:** What playable evidence ends the session (not “feels nicer”)?
4. **Fake list:** What systems are stubs, and will we refuse to “just flesh them out a little”?
5. **Kill switch:** If we catch ourselves on tiles/chrome >30 minutes without moving a seam criterion, stop and return to greybox play.

If you cannot answer (1) and (3), you are in the polish trap.

---

## 8. Sources

### Mythoras / repo

- [CONTEXT.md](CONTEXT.md) — domain vocab; UI architecture locked, visual language open
- [WAYFINDER_PASS_MVP_VERTICALS.md](WAYFINDER_PASS_MVP_VERTICALS.md) — first vertical recommendation, cuts, success criteria, Builder/tooling posture
- [`.scratch/mythoras-project-spine/issues/01-define-first-playable-seam.md`](.scratch/mythoras-project-spine/issues/01-define-first-playable-seam.md) — open grilling ticket
- [SESSION_DECISIONS_2026-07-15.md](SESSION_DECISIONS_2026-07-15.md) — World View / Workspace View / adaptive continuity locks
- [OD_004_RESEARCH_SYNTHESIS.md](OD_004_RESEARCH_SYNTHESIS.md) — greybox-before-art lessons; recommended prototype sequence
- [prototypes/mvp-ui-shell/PROMPT.md](prototypes/mvp-ui-shell/PROMPT.md), [PROMPT_V2.md](prototypes/mvp-ui-shell/PROMPT_V2.md) — disposable shell prototype intent and failure modes

### Industry-general

- [Rami Ismail — Prototypes & Vertical Slice](https://ltpf.ramiismail.com/prototypes-and-vertical-slice/) — prototypes = should we; vertical slice = can we
- [Bugnet — Vertical Slice vs Prototype](https://bugnet.io/blog/vertical-slice-vs-prototype-what-to-build-first) — never polish before fun is proven
- [Level Design Book — Blockout](https://book.leveldesignbook.com/process/blockout.md) — greybox purpose and limits
- [Tono Game Consultants — Vertical Slice](https://tonogameconsultants.com/vertical-slice-4/) — prototype vs slice fidelity/scope
- [Polygon Treehouse — Vertical What Now?](https://www.polygon-treehouse.com/blog/2017/10/2/vertical-what-now) — greybox-wide then polished slice
- [Fred Gill / GGWP](https://www.ggwp.com/blog/priorities-and-tech-considerations-in-pre-launch-game-development-with-fred-gill/) — horizontal vs vertical slice production framing
- [Masaryk PV266 — Horizontal and Vertical Slice Descriptions](https://is.muni.cz/el/fi/jaro2018/PV266/um/PV266_-_Horizontal_and_Vertical_Slice_Descriptions.pdf) — HS = A→Z rough; VS = short segment near-final

---

## 9. One-line verdict

**Mythoras should start systems-thin and scene-grey: a disposable greybox host for the one-zone adaptive-continuity Turn Program — not a systems sandbox, and not polished UI/layout — until that seam is playable and explainable.**
