# Wayfinder Pass — MVP Verticals

## Scope and evidence posture

- **FACT:** This workspace is a planning/GDD harness. `git status` reports that it is not a Git repository, and no `.ts`, `.tsx`, `.js`, `.jsx`, `.rs`, `.go`, or `.py` files are present.
- **FACT:** `SESSION_HANDOFF.md` reports that ADE functionality already exists upstream in `/Users/xenonheat/sites/omni-agents`; that upstream implementation was not audited in this pass.
- **FACT:** `SESSION_DECISIONS_2026-07-15.md` is the current authority for World View, Workspace View, adaptive continuity, campaign direction, and the endgame target. `BOOTSTRAP.md`, the old `NEXT_SESSION_PROMPT.md`, and the permanent-shell portions of `DOC_v6` are historical, non-canonical where they conflict.
- **FACT:** `BACKLOG.xml` is a gated idea store. A pending item is not an approved implementation commitment.
- **INFERENCE:** The task graph in `AGENT_STATE.xml` is useful evidence of intended sequencing, but its requirement that ADE be usable before game Phase 1 is a process preference, not a demonstrated technical dependency.

### Two meanings of MVP

- **FACT — product-vision MVP:** The current long-range game target includes a campaign/competition spine ending in Champion status, then **Cipher Network + Proving + 1–2 Pinnacle bosses**. That is a releasable product shape, not the first vertical.
- **INFERENCE — first honest buildable vertical:** The smallest build that tests the distinctive promise is one traversable environment fragment in which an encounter activates on the same physical surface and resolves through a committed, automatically ordered Turn Program. It should not pretend to be the campaign or endgame MVP.

## Inventory of mentioned verticals and slices

Status vocabulary:

- **documented** — has a concrete flow, contract, acceptance criteria, or locked experiential seam.
- **half-specified** — has a direction and some contracts, but material design or implementation questions remain.
- **fantasy-only** — an aspiration/backlog concept without a buildable slice.
- **superseded** — explicitly replaced or invalidated by later decisions.

| Area | Vertical / slice | Status | FACT / INFERENCE and basis |
|---|---|---|---|
| ADE | Greenfield ADE-00/ADE-01: card → terminal → CLI agent → status | superseded | **FACT:** `ADE_VERTICAL_SLICE_SPEC.md` fully specifies the flow and acceptance test, but `SESSION_HANDOFF.md` says not to rebuild it because it already exists upstream. |
| ADE | ADE-00: validate the existing upstream card → PTY → adapter → status flow | documented | **FACT:** Active in `AGENT_STATE.xml`; validation scope and expected seam are explicit. Actual upstream behavior remains unverified here. |
| ADE | ADE-01: Mythoras workspace default + BACKLOG/STATE/DECISION_LOG viewers | half-specified | **FACT:** Named with dependency on ADE-00, but viewer behavior and acceptance tests are absent. |
| ADE | BL-001 task control plane / four-state kanban / triage | documented | **FACT:** Data and state transitions are detailed in the ADE slice spec; `.out-of-scope/` behavior is backlog-only. |
| ADE | BL-002 room launcher, PTY output, and CLI adapter routing | documented | **FACT:** One-adapter slice is concrete; full room/adapter registry is deferred. |
| ADE | BL-003 skill browser, invocation, arguments, and editor | half-specified | **FACT:** Feature list exists; no interaction/data contract or tests. |
| ADE | BL-004 vertical decomposition and dependency DAG | half-specified | **FACT:** Intended outputs—parallelism, blockers, critical path—are named; derivation and editing semantics are not. |
| ADE | BL-005 decision-log/backlog management UI | half-specified | **FACT:** Viewing, filtering, promotion, and rejection are described; mutation/audit contracts are not. |
| ADE | ADE-02 combined skills + DAG + decision/backlog tooling | half-specified | **FACT:** Task graph bundles BL-003–005 after ADE-01; “self-hostable” is claimed but not acceptance-tested. |
| Builder | BLD-00 Builder architecture/grill | documented | **FACT:** A planning gate exists and depends on combat design; it is a design task, not a player-facing vertical. |
| Builder | BL-006 / BLD-01 Motherboard Grid simulator | half-specified | **FACT:** Node allocation and effects are named; the corrected model is one global route plus five slot-local routes. Concrete tree content/rules are missing. |
| Builder | BL-007 / BLD-01 creature configuration + Skill Card/support linking | half-specified | **FACT:** Ownership and major controls are known; inventory binding, Breakthrough swap behavior, and bench editing remain open. |
| Builder | BL-008 / BLD-02 damage pipeline + Resonance calculator | half-specified | **FACT:** Intended calculation stages are listed, but combat architecture cleanup, the 11×11 matrix, and parts of resistance math remain unresolved. |
| Builder | BL-009 Warbanner and Domain configuration | fantasy-only | **FACT:** Backlog description exists, but “Domain” collides with another term and Warbanners are now at risk / reframed as creature-local Skill Cards. |
| Builder | BL-010 Forge Terminal probability simulator | half-specified | **FACT:** Target-mod probability and expected cost are the intent; the crafting model and pools are not specified here. |
| Builder | BL-011 sharecode import/export | half-specified | **FACT:** Payload scope and community purpose are known; schema, versioning, validation, and URL contract are absent. |
| Builder | Zone fixture map editor | fantasy-only | **FACT:** BL-016 proposes it as the authoring tool for fixture grammar, but no editor spec exists; its review note incorrectly ties it to BL-009, which is Warbanner/Domain configuration. |
| Game foundation | P1-01 World View + invoked Workspace View shell | half-specified | **FACT:** Architecture and guardrails are locked, but visual language, rendering pipeline, detailed layouts, and acceptance tests remain open. |
| Game foundation | P1-02 world renderer + zone traversal | half-specified | **FACT:** Adaptive continuity is locked; renderer/projection, locomotion feel, content pipeline, and exact footprint rules require prototypes. |
| Game foundation | P1-03 Active Squad panel / creature cards | half-specified | **FACT:** Named in the task graph; current ownership/type-profile distinctions constrain it, but no current UI contract exists. |
| Game foundation | P1-04 Backpack / inventory grid | fantasy-only | **FACT:** Only a task title and dependency are present in the read set. |
| Game seam | Projection-neutral route graph + fixture contract for one tiny zone | documented | **FACT:** First step in the OD-004 prototype sequence; required fixtures are entrance, exit, landmark, narrative fixture, optional branch, and encounter clearing. Data schema is not yet specified. |
| Game seam | Deterministic route variants preserving fixture contracts | half-specified | **FACT:** Prototype step is explicit; generator constraints and validation rules are not. |
| Game seam | 2D isometric vs 3D board with 2D units comparison | documented | **FACT:** Two finalists and evaluation dimensions are explicit; it is a comparative prototype, not production commitment. |
| Game seam | Traversal → battle → traversal on one physical surface | documented | **FACT:** Location, fixtures, positions, approach direction, and recognizable landmarks must persist; presentation may adapt reversibly. |
| Game seam | Variable asymmetric tactical footprint | half-specified | **FACT:** Fixed 8×8 is retired; variable asymmetry is directionally locked, but sizing/activation/edge behavior is open. |
| Game seam | Three-biome stress test of shared assets | documented | **FACT:** Warm, enchanted-dark, and volcanic states are specified as a prototype comparison. |
| Game seam | Opening micro-sequence: movement, interaction, dialogue, instrument, encounter | half-specified | **FACT:** Timed evaluation targets are documented, while the narrative opening and instrument fiction remain open. |
| Game combat | Turn Program: plan full round, commit, execute automatically | documented | **FACT:** Automatic ordering by Speed + skill-inherent timing + support costs is locked; manual sequence assignment and fixed Priority tiers are removed. |
| Game combat | Minimal tactical combat rules and feedback | half-specified | **FACT:** Planning/execution communication, targeting, previews, creature state, and feedback are named surfaces; full combat math is not current. |
| Game combat | Full 3-Field + 2-Bench squad management | half-specified | **FACT:** Squad shape and ownership are locked; swapping, bench editing, underfilled squads, and UI behavior are not fully specified. |
| Game combat | Full 11×11 type-effectiveness chart | half-specified | **FACT:** Structure and soft tiers are locked; actual matrix values require a Planning Room. |
| Game combat | Mines, Traps, Hazards, and Delayed delivery | fantasy-only | **FACT:** BL-029 records open timing and attribution questions; it is explicitly a later design session. |
| Game progression | Grid inside the playable game | half-specified | **FACT:** Global + five slot-local topology is locked, but actual routes, content, balance, and presentation are not. |
| Game progression | One build-expression loop via Skill Card/support/Speed | half-specified | **INFERENCE:** The locked ownership and ordering rules permit a narrow demonstrator before the full Grid or chart exists; no explicit acceptance test is present. |
| Game campaign | Authored acts/zones + side quests with competition spine | half-specified | **FACT:** Direction is locked, but Region names, competition wrapper, opening, and campaign content are open. |
| Game campaign | Open qualifier → circuit → Major → Championship | fantasy-only | **FACT:** It is a working shape to refine, not locked canon; tournament brackets are preferred over live Elo for product MVP. |
| Game campaign | Static fixture grammar for Region 1 zones | half-specified | **FACT:** Stable-landmark purpose is clear; actual grammar and Region 1 specification do not exist. |
| Product MVP | Champion gate into Cipher duty | half-specified | **FACT:** Defeating the Regional Champion before any Cipher access is locked; the campaign route to that gate is not. |
| Product MVP | Cipher Network | fantasy-only | **FACT:** Re-rollable consumable Ciphers, reused/new templates, distinct UI, and unequal Layer regimes are direction only; a dedicated grill is still required. |
| Product MVP | Proving | fantasy-only | **FACT:** Named as part of MVP endgame, but no mechanics or slice are specified in the read set. |
| Product MVP | One or two Pinnacle bosses | fantasy-only | **FACT:** Retained as an MVP endgame target; no encounter contract or content exists here. |
| Endgame expansion | Frontier passive tree | fantasy-only | **FACT:** Name and role are retained; implementation is unspecified. |
| Endgame expansion | Ascension excavation pillar | fantasy-only | **FACT:** Direction and resource relationship are stated; it is not part of the stated Cipher + Proving + Pinnacles MVP set. |
| Progression experiment | Dossier targeted progression + Cipher remapping prototype | half-specified | **FACT:** BL-031 lists hypotheses to test; final representation, cadence, economy, and interface remain open. |
| UI experiment | Persistent vs retracting vs world-dominant management | superseded | **FACT:** The comparison appears in the research sequence, but the later decision locks world-dominant World View plus player-invoked Workspace View and rejects permanent surrounding panels. |
| Historical game build | BOOTSTRAP Phase 1 shell/panels then combat/progression/content/endgame | superseded | **FACT:** BOOTSTRAP is non-canonical current-state material; its fixed renderer, node-map framing, Arcane Cartographer shell, and old phase assumptions conflict with later decisions. |

## Dependency order

### Game-first path

1. **FACT:** Reconcile only the combat facts needed by the slice: committed Turn Program, Speed/timing/support ordering, 3-Field squad vocabulary, Skill Card ownership, and a deliberately provisional neutral damage model.
2. **FACT:** Define a projection-neutral environment-fragment format with walkability, fixtures, encounter trigger, positions, and an authored asymmetric battle footprint.
3. **INFERENCE:** Build one fixed authored fragment before procedural route generation. Procedural variants test content scale, not the core continuity/Turn Program promise.
4. **FACT:** Render traversal, activate battle in place, preserve spatial state, and return to traversal without an arena wipe.
5. **INFERENCE:** Add the smallest Turn Program that permits one action per Field creature, targeting/position choice, commitment, visible automatic order, resolution, and round repetition.
6. **INFERENCE:** Add one build lever—swap a Skill Card or support that changes timing/effect—so ordering is not merely a cutscene.
7. **FACT:** Compare the two rendering finalists only after the seam is operable; measure orientation, occlusion, comprehension, defects, and authoring time.
8. **INFERENCE:** Add deterministic variants, biome stress, opening dialogue, and Workspace View only after the seam survives ordinary play.
9. **FACT:** Full Grid, type matrix, campaign, competition, crafting, Cipher, Proving, and Pinnacles follow as separate verticals toward product MVP.

Current-state consequence:

- **FACT:** There is no local codebase or Git history to extend. The true first engineering dependency is choosing/creating a game repository and minimal runtime, not polishing the full GDD or building broad shell panels.
- **INFERENCE:** “All GDD documents current before any code” is too broad for this research vertical. Freeze a narrow experiment contract and mark provisional systems honestly; otherwise design completion becomes a false prerequisite for learning.

### Tooling-first path

1. **FACT:** In the upstream ADE repository, validate ADE-00: task card → terminal/PTY → one CLI adapter → in-progress/in-review transition → persisted state.
2. **FACT:** Record gaps against `ADE_VERTICAL_SLICE_SPEC.md`; do not recreate the greenfield Tauri app in this workspace.
3. **INFERENCE:** Add only the smallest Mythoras integration needed for real use: workspace selection/default and read-only state/backlog views.
4. **INFERENCE:** Use that validated flow to launch the game repository's first vertical.
5. **FACT:** Defer skill editing, dependency DAG, backlog mutation, multi-agent terminals, and auto-acceptance to ADE-02.
6. **FACT:** Builder architecture waits for the combat subset it calculates; Builder damage math additionally waits for resolved formula inputs.
7. **INFERENCE:** A tiny headless Turn Program simulator can precede the full Builder and later become shared domain code; the full Builder UI should not lead the game seam.

### Builder-specific order

`combat subset frozen` → `BLD-00 architecture` → `BLD-01 Grid + creature/Skill Card config` → `BLD-02 calculator` → `BLD-03 optional Warbanner/Domain + Forge work` → `BLD-04 sharecodes`

- **FACT:** This is the recorded task-graph order.
- **INFERENCE:** It is not the best route to the first playable proof. BLD-01 alone validates configuration, not seamless traversal or Turn Program play.

## Recommended first vertical

### One-zone adaptive-continuity Turn Program

**INFERENCE — recommendation:** Build one data-authored, traversable environment fragment with a single visible encounter. Entering its authored irregular footprint transitions the same location into tactical treatment. The player programs one action for each of three Field creatures, commits the round, watches automatic Speed/timing/support ordering resolve, reads consequences, programs at least one more round, wins, and immediately resumes traversal in the unchanged place.

Minimum included surface:

- one Technician placeholder and exactly three Field creatures; no bench-management UI;
- one short route, one recognizable landmark/obstacle, one encounter trigger, one exit;
- one authored asymmetric combat footprint using the route's actual terrain and positions;
- movement, occupancy, targeting, a small enemy group, health, defeat, and restart;
- Planning and Execution states, action previews, commit/cancel-before-commit, visible initiative order, and read-only execution;
- two Skill Card choices or one support swap whose timing/effect visibly changes execution;
- a neutral or tiny explicitly provisional damage model loaded from data;
- rapid reversible camera/HUD adaptation and no unrelated battle arena;
- instrumentation for transition time, lost-orientation reports, round choices, and failures.

Why this is the smallest honest proof:

- **FACT:** Adaptive continuity and Turn Program are the two most distinctive locked gameplay commitments in the reviewed material.
- **INFERENCE:** A combat-only board proves tactics but not the ARPG traversal seam. A traversal-only renderer proves atmosphere but not Mythoras combat. A full Grid/Builder proves configuration but not play.
- **INFERENCE:** Three Field creatures preserve the canonical squad-combat premise. Omitting Bench controls, full progression, and type coverage cuts breadth without misrepresenting the core interaction.
- **INFERENCE:** One meaningful loadout change is sufficient to show that automatic order is build-sensitive rather than arbitrary.

## Keep out of the first vertical

These cuts preserve the central experiment:

- **FACT:** Cipher Network, Layer topology, Threat Attunement, Proving, Frontier, and 1–2 Pinnacles — product-endgame scope.
- **FACT:** Dossiers, Cipher rotation discernment, targeted farming, tradability, and operator rewards.
- **FACT:** Ascension excavation and its cross-system resources.
- **FACT:** Full campaign, qualifier/circuit/Major/Championship, Champion gate, celebrities, sponsors, clubs, and social-reaction systems.
- **FACT:** Full 11×11 chart, Secondary bias, rare immunities, complete resistance layers, and final damage balancing. Use neutral/provisional data and do not claim balance validation.
- **FACT:** Full Motherboard Grid, all five slot-local routes, Principals, full creature roster, unique-item roster, Forge Terminal, economy, and sharecodes.
- **FACT:** Workspace View customization/persistence polish, dedicated Grid/Forge workspaces, broad panel inventory, Backpack, and production visual language.
- **FACT:** Procedural zone generation, whole-Region content, biome production pass, and Builder map editor. Keep the fragment data-authored so generation can follow.
- **FACT:** Bench swaps, multiplayer Parties, authoritative services, seasons, account transfer, and shared endgame state.
- **FACT:** Mines, Traps, Hazards, Delayed actions, full ailment/Resonance/tag interactions, and delivery attribution edge cases.
- **FACT:** Final creature art, equipment visibility, full 3D, production animation, voice, cinematics, and final instrument/off-Field-body fiction.
- **INFERENCE:** Workspace View may be represented by a nonfunctional hotkey stub or omitted. It is not needed to answer whether traversal and battle feel continuous.

## Tooling posture

### Recommendation: ADE parallel and optional; Builder deferred behind the playable seam

- **INFERENCE:** ADE is **not a technical prerequisite** for the game vertical. The game needs a repository, runtime, test command, and a scoped brief; those can exist without an ADE UI.
- **FACT:** ADE-00 has no GDD dependency and is recorded as runnable in parallel.
- **INFERENCE:** Time-box ADE validation in the upstream repository because using an already-working control plane may improve later throughput. Stop if validation turns into platform development.
- **INFERENCE:** Do not gate the first game proof on ADE-01 XML viewers or ADE-02 self-hosting features. That would test orchestration before testing the product's riskiest promise.
- **INFERENCE:** Defer the full Builder UI until the playable seam reveals which combat data deserves stable APIs. Before then, a headless/data-driven Turn Program model provides more learning per unit of work.
- **TRADEOFF:** Tooling-first offers repeatability, logs, and task visibility, but risks building a sophisticated factory before the product seam is known.
- **TRADEOFF:** Game-first yields decisive experiential evidence, but without basic repository/test discipline may create disposable code. Mitigate with a narrow contract, projection-neutral data, deterministic tests, and explicit provisional mechanics.

## Player-observable success criteria

The vertical works only if a player can observe all of the following:

1. **FACT-derived:** They can move through a recognizable place, approach a visible encounter, and battle exactly where contact occurred.
2. **FACT-derived:** The same landmark, obstacle, approach direction, unit positions, and terrain relationships remain recognizable before, during, and after battle.
3. **FACT-derived:** There is no wipe or teleport to an unrelated arena; camera/HUD adaptation is rapid and reversible.
4. **FACT-derived:** They understand when they are planning, what will be committed, and when execution is read-only.
5. **FACT-derived:** They choose actions for the Field creatures, commit a whole round, and see execution order emerge automatically from visible timing inputs rather than manual sequence slots.
6. **INFERENCE:** After changing one Skill Card/support choice, they can predict and observe a materially different order or outcome.
7. **INFERENCE:** At least one round presents a real tradeoff in target, position, timing, or protection; the optimal input is not a single obvious button sequence.
8. **INFERENCE:** After the first execution, they can explain why actions occurred in that order and what state changed without consulting debug output.
9. **FACT-derived:** Winning releases the tactical treatment and returns control to traversal on the same surface with the resolved encounter state preserved.
10. **INFERENCE:** A new player can complete traversal → two planned rounds → resolution → resumed traversal without developer intervention or a Workspace View.
11. **INFERENCE:** Restarting from the same seed reproduces positions, ordering, and outcomes, making failures testable.
12. **INFERENCE:** If players repeatedly lose orientation, cannot explain order, or experience battle as a separate arena despite shared assets, the vertical has failed even when all systems execute without errors.

## Decision summary

- **FACT:** The long product MVP is campaign-to-Champion plus Cipher, Proving, and 1–2 Pinnacles.
- **INFERENCE:** The first buildable vertical should be the one-zone adaptive-continuity Turn Program, not the full product MVP, a shell, a Builder, or a tooling platform.
- **INFERENCE:** Run a short upstream ADE validation in parallel, but remove ADE from the hard gate for the first game experiment.
- **INFERENCE:** Treat full Builder, Grid, chart, campaign, competition, Workspace polish, and endgame as later verticals whose interfaces should be informed by this playable proof.
