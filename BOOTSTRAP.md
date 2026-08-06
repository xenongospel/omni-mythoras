# MYTHORAS HARNESS — BOOTSTRAP PROMPT

# Paste this entire prompt into Cursor to begin.

# Cursor will spawn parallel agents to explore, validate and complete the harness structure for Mythoras development.

# ─────────────────────────────────────────────────────────────

You are the orchestrator agent for the Mythoras project harness bootstrap.

Your job is to read the full context below, understand exactly what has been designed and why, then spawn parallel subagents to explore, validate, and complete the remaining work — producing a harness that is immediately usable for Mythoras development in Cursor.

Read everything in this prompt before spawning anything. Understand the full picture first.

---

## WHAT MYTHORAS IS

Mythoras: Shattered Realms is a single-player desktop game built with Tauri + React 18 + Three.js (react-three-fiber) + Zustand + Tailwind CSS + Framer Motion. It is a creature-collecting tactical RPG fusing Path of Exile's build depth with Pokémon's creature fantasy, presented through a roguelike campaign structure inspired by Slay the Spire and Masters of Piece.

The player is a Technician who traverses node-based zones, collects and configures creatures, assembles squads, and fights in turn-based grid combat. The visual design is governed by "The Arcane Cartographer" — a dark atmospheric design system with tonal depth, diamond-shaped interactive nodes, hard edges everywhere, and glassmorphism reserved exclusively for tooltips.

The game has six GDD documents (DOC_v1_new through DOC_v6_new) covering Foundation, Combat Systems, Progression, World & Campaign, Economy & Crafting, and Technical Design. These are guidelines, not locked contracts. The GDD serves development; development does not serve the GDD.

The build is structured in 8 phases:

- Phase 1: App shell + panel workspace + Game View rendering
- Phase 2: Combat system + creature management
- Phase 3: Progression (Motherboard Grid, Skill Cards, leveling)
- Phase 4: Itemization + crafting (gear, Forge Terminal)
- Phase 5: Content (R1 zones, encounters, Examiners)
- Phase 6: Depth systems (Resonance, Species Mods, Components)
- Phase 7: Endgame (Ciphers, Principals, Command Deck)
- Phase 8: Polish and ship

Phase 1 cannot begin until all GDD documents are current. The highest priority remaining GDD task is DOC_v2_new (Combat Systems update).

---

## WHAT WE HAVE BUILT — THE HARNESS

We have designed and partially built a development harness for Mythoras. A harness is the environment that surrounds the AI model — the structure that makes agent behaviour consistent, auditable, and recoverable across hundreds of sessions spanning months of development and post-launch maintenance.

Without a harness, agents drift: they contradict earlier decisions, re-implement things that exist, lose architectural context between sessions, and make silent assumptions that compound into unfixable messes by week three. The harness solves this.

The harness we have designed consists of the following components, some built and some requiring completion:

### COMPONENT 1 — harness.config.xml [BUILT — needs validation]

The master configuration file. Defines:

- Fleet composition: Opus as orchestrator (180k context), Sonnet as primary worker (80k), up to 3 parallel Sonnet workers with git worktree isolation, a Sonnet explore agent (isolated context, clean summaries only), a Sonnet auditor agent (reads DECISION_LOG.xml after each Build session)
- Scalar checkpoint policy: `max(2, floor(8 / (1 + call_number / 8)))` — light pressure early, heavy late, 8 checkpoint max per session
- Permissive workspace permissions: everything inside the workspace is always-allow by default; only AGENT_STATE.xml writes, git commits, and file deletions require ask-user
- MCP server endpoints for Tauri, React, Three.js, Zustand, and Tailwind
- GDD posture: GUIDELINES — conflicts go to BACKLOG.xml, not blocking
- Full tool registry: bash, read, write(+snapshot), grep, glob, revert, todo_write, todo_update, todo_read, spawn_subagent, spawn_parallel, load_skill, fetch_mcp_docs, git_diff, git_show, append_log, write_backlog, write_checkpoint

### COMPONENT 2 — state/AGENT_STATE.xml [BUILT — needs validation]

Machine-readable live operational state. Loaded at the start of every session. Contains:

- Current phase (P0 GDD Completion) and active task (T08: DOC_v2_new update)
- Full task graph: nodes T01–P1-04 with dependencies, status (complete/active/pending/locked), priority
- Session telemetry: call counter and checkpoint counter (reset per session)
- Handoff section: what the next session must know
- Open decisions: 4 high/medium decisions blocking downstream work (Domain naming, Principal tree design, Warbanner naming, UI font)
- GDD document status: tier 1 (current), tier 2 (needs update), tier 3 (historical only)

### COMPONENT 3 — state/DECISION_LOG.xml [BUILT — append-only audit trail]

Auditable decision trail. Written to by agents at every checkpoint and session boundary. Never modified retroactively. Entry types: session-open, checkpoint, decision, flag, amendment-proposal, session-close. Severity levels for flags: critical, important, minor. Flag types: gdd-conflict, scope-creep, silent-assumption, architectural-drift. Read by the auditor agent after every Build session.

### COMPONENT 4 — state/BACKLOG.xml [BUILT — gated idea store]

Where mid-session ideas go instead of going directly to implementation. Item types: implementation-idea, gdd-amendment, new-feature, technical-debt, scope-expansion, conflict. Human reviews all items in Planning Room sessions. Nothing promotes to active tasks without that gate.

### COMPONENT 5 — CLAUDE.md [BUILT — master instruction file]

Every agent session reads this first. Defines:

- Five mandatory first actions in order (read harness.config.xml, AGENT_STATE.xml, DECISION_LOG.xml, identify room type, load relevant context only)
- Eight room types: Planning, Architect, Explore, Build, Review, Recover, Brainstorm, Maintenance
- Context file reading order and purpose
- Skill index (load on demand, never all at once)
- Rules that never change (no hard-coded hex values, always TodoWrite before file ops, git diff before starting, ideas to BACKLOG not implementation)
- Checkpoint behaviour (six self-audit questions, write XML entry)
- Parallel spawning syntax

### COMPONENT 6 — Seven skill files [BUILT — need splitting into individual files]

Currently some skills are combined in one file. They need to be individual `.skill.md` files with YAML frontmatter. Skills are generic — usable on any project, not Mythoras-specific. Each skill solves one failure mode:

- `architect.skill.md` — surfaces unresolved decisions before any build begins
- `explore.skill.md` — parallel subagent codebase discovery, clean summaries only
- `review.skill.md` — post-build audit, severity-ranked findings, never auto-fixes
- `recover.skill.md` — failure diagnosis, one root cause, one fix, confirms before applying
- `remember.skill.md` — session memory save/restore, distilled not raw
- `brainstorm.skill.md` — unconstrained ideation, output to BACKLOG only
- `imprint.skill.md` — UI component registry capture, design system consistency

### COMPONENT 7 — dev-log.html [BUILT — persistent human-readable dashboard]

HTML dashboard styled in Arcane Cartographer aesthetic. Contains: phase rail (P0-P8), sidebar with live GDD document status, SVG task graph showing node states, session log with timestamped entries (room type, checklist, checkpoint badges, handoff blocks). Every Build session appends an entry. HTML comment template included for agent use.

### COMPONENT 8 — Three missing context files [NOT BUILT — required before Phase 1]

These are the knowledge base files that prevent agents from guessing:

- `context/code-standards.md` — TypeScript conventions, file naming, folder structure, component patterns, error handling patterns specific to this Tauri+React project
- `context/library-docs.md` — How we use each library in THIS project specifically (not generic docs): Tauri IPC patterns, Zustand store structure, r3f render loop, Tailwind token usage, Framer Motion patterns
- `context/ui-registry.md` — Starts empty. Imprint skill fills it as components are built. Initial entry: the Arcane Cartographer design system rules extracted from DOC_v6_new §53

### COMPONENT 9 — Four game-specific skill overlays [NOT BUILT — required before Phase 1]

These load on top of the generic skills when domain knowledge is needed:

- `skills/arcane-cartographer.skill.md` — Full design system rules extracted from DOC_v6_new §53: colour tokens, typography hierarchy, Diamond Rule, No-Line Rule, glassmorphism rules, hard edge requirements
- `skills/game-view-renderer.skill.md` — Tile system from DOC_v6_new §59: 64×32 diamond tiles, axial coordinates, 4 layers, elevation 0-3, OrthographicCamera, biome palettes
- `skills/tauri-react.skill.md` — App shell conventions: Tauri IPC patterns, Zustand store slice structure, panel subscription patterns, React component hierarchy
- `skills/combat-system.skill.md` — Built during Phase 2 prep, not needed yet

### COMPONENT 10 — Build brief template [NOT BUILT — needed for Phase 1]

The fixed format for every Build Room session brief. Must include: state loading step, git diff step, mandatory TodoWrite instruction, tool list, spec reference (GDD section), deliverable checklist, boundary (what NOT to touch), progress log format, handoff output format.

---

## THE EIGHT ROOMS

The harness defines eight session types. Every agent session must identify which room it is operating in before doing anything else:

**Planning Room** — GDD updates, design decisions. No code. Output: updated docs.

**Architect Room** — Pre-feature planning using `/architect` skill. Surfaces unresolved decisions one at a time. Produces confirmed feature plan before any build. No code.

**Explore Room** — Codebase discovery using `/explore` skill. Spawns parallel subagents. Returns clean summaries to parent. No raw file dumps in parent context.

**Build Room** — Code execution. Single scoped deliverable. Mandatory sequence: remember restore → git diff → TodoWrite → execute → scalar checkpoints → review → imprint (if UI) → remember save → handoff update.

**Review Room** — Post-build audit using `/review` skill. Checks plan alignment, architecture, GDD alignment, production readiness. Severity-ranked findings. Never auto-fixes.

**Recover Room** — Failure diagnosis using `/recover` skill. Four failure modes (specific bug, polluted context, wrong assumption, architectural drift). One diagnosis, one fix, confirms before applying.

**Brainstorm Room** — Unconstrained ideation using `/brainstorm` skill. Output to BACKLOG.xml only. Human gate before anything reaches implementation.

**Maintenance Room** — Post-launch work. Same as Build Room with version context added.

---

## THE CHECKPOINT SCALAR

Checkpoints do not fire every N calls (fixed). They use a scalar formula that applies light pressure early in a session and heavy pressure late, where drift compounds fastest:

```
interval = max(2, floor(8 / (1 + call_number / 8)))

```

- Calls 1-8: checkpoint every 8 calls (low pressure — agent is loading context, planning)
- Calls 9-16: checkpoint every 4 calls (medium pressure — active execution)
- Calls 17-24: checkpoint every 2 calls (high pressure — drift window)
- Hard cap: 8 checkpoints per session maximum

At each checkpoint, the agent answers six questions and writes a `<checkpoint>` entry to DECISION_LOG.xml. If any answer is concerning, the agent stops and flags — does not compound.

---

## YOUR TASK AS ORCHESTRATOR

Spawn the following parallel subagents. Each has a specific exploration and delivery task. They run simultaneously. You collect their outputs and synthesise.

---

### AGENT 1 — Harness Validator

**Role**: explore

**Prompt**: You are validating the Mythoras harness files that have been designed. Read each file listed below and produce a validation report identifying: (a) anything structurally incomplete or missing, (b) anything that would confuse or mislead an agent reading it cold, (c) any internal inconsistencies between files, (d) anything that conflicts with how Claude Code actually works (tool names, capabilities, context window limits).

Files to validate (these exist in the harness output directory):

- harness.config.xml
- state/AGENT_STATE.xml
- state/DECISION_LOG.xml
- state/BACKLOG.xml
- CLAUDE.md
- skills/architect.skill.md
- skills/explore.skill.md
- skills/review.skill.md
- skills/recover.skill.md
- skills/remember-brainstorm-imprint.skill.md (contains remember, brainstorm, and imprint — needs splitting)
- dev-log.html

For each file, produce:

```
FILE: [name]
Status: [complete | needs-work | incomplete]
Issues: [list — be specific, include line references if relevant]
Missing: [what should be here that isn't]

```

Final output: a prioritised fix list for the orchestrator.

---

### AGENT 2 — Context File Author

**Role**: worker-primary

**Prompt**: You are authoring the three missing context files for the Mythoras development harness. These are knowledge base files that agents load at session start to avoid guessing. Write all three as complete, production-ready markdown files.

**File 1: context/code-standards.md**

Write conventions for a Tauri + React 18 + TypeScript desktop game project. Cover:

- TypeScript: strict mode, type naming (PascalCase interfaces, no I-prefix), avoid `any`, use discriminated unions for game state
- File naming: kebab-case for files, PascalCase for components, camelCase for utilities
- Folder structure: 
  ```
  src/  components/     # React components (PascalCase, colocated test files)    panels/       # Panel workspace components    game-view/    # Three.js canvas and scene components    ui/           # Shared UI primitives  stores/         # Zustand store slices (camelCase)  hooks/          # Custom React hooks (use- prefix)  lib/            # Pure utilities (no React imports)  types/          # Shared TypeScript types  assets/         # Static assets (PNG spritesheets, fonts)

  ```
- Component structure: FC with explicit return type, props interface above component, no default exports from barrel files
- Error handling: never throw in render, all async errors caught and surfaced to error boundary, Tauri IPC errors always typed
- State management: Zustand slices not one monolithic store, use immer for nested updates, persist only what's necessary to disk
- CSS: Tailwind utility classes only — never inline styles, never `style={}` prop except for dynamic values that cannot be expressed in Tailwind
- Testing: Vitest for unit tests, colocated with source, no snapshot tests for game logic
- Imports: absolute from `src/`, never relative `../../..`, path aliases configured in vite.config.ts
- Rules that never change: no hard-coded hex values, all colours via Arcane Cartographer CSS variables, JetBrains Mono for all numeric displays

**File 2: context/library-docs.md**

Write project-specific usage patterns for each library. This is not generic documentation — it is "how we use this library in Mythoras specifically."

Tauri section:

- IPC: invoke() for all Rust commands, all commands typed with TypeScript interfaces in src/types/tauri.ts
- File system: Tauri FS plugin only — never browser File API
- Window: single window, no multi-window patterns
- Events: use Tauri events for Rust→JS communication, not polling

React section:

- Panel components: every panel is a standalone FC with its own Zustand subscription — panels do not share props
- Game loop: Three.js animation loop runs independently of React — never put game state in React useState
- Suspense: used only for lazy-loaded panel content, not for game state
- Keys: always explicit, never use array index as key for game entities

Zustand section:

- Store slices: one file per domain (gameStore.ts, panelStore.ts, squadStore.ts, inventoryStore.ts)
- Slice structure: `{ state fields } & { actions }` — never class pattern
- Subscriptions: panels subscribe to their slice only — use `useStore(selector)` pattern
- Persistence: use Tauri FS to persist game save, not Zustand persist middleware

Three.js / react-three-fiber section:

- Canvas: one `<Canvas>` in GameViewPanel — never nest canvases
- Camera: OrthographicCamera only — never PerspectiveCamera for game world
- Tile rendering: instanced mesh for tiles (InstancedMesh) — never individual mesh per tile
- Performance: frustum culling on, shadow maps off (isometric, no dynamic shadows), texture atlas for tile sprites
- Game loop: useFrame hook in scene components, delta-time always passed to update functions

Tailwind section:

- Tokens: all Arcane Cartographer colour tokens are CSS variables (--ac-l0, --ac-l1, etc.) — use these, never arbitrary hex
- Responsive: 1280×720 minimum — use `min-w-[1280px]` on root, no mobile breakpoints
- Dark mode: always — no light mode classes except when building Teal Glass variant
- Animation: Framer Motion for component animations, not Tailwind animate- classes

**File 3: context/ui-registry.md**

Write the initial UI registry. This file starts with the Arcane Cartographer design system rules (extracted from DOC_v6_new §53) and will be appended to by the `/imprint` skill as components are built.

Structure:

```markdown
# UI Registry — Mythoras

## Arcane Cartographer — Design System Rules
[Extract and write all rules from §53 in a format agents can quickly reference]
[Include: colour token table, typography hierarchy, Diamond Rule, No-Line Rule, Hard Edge rule, Glassmorphism rule]

## Component Registry
[Empty — populated by /imprint skill as components are built]
[Format per component:
  ### ComponentName
  File: src/components/...
  Pattern: [one sentence]
  Tokens: [CSS variables used]
  Usage: [when to use]
  Added: [date] | Session: [ID]
]

```

For the Arcane Cartographer section, use these known values from DOC_v6_new §53:

- Surface hierarchy: L0 (#0A0A0F), L1 (#111118), L2 (#18181F), L3 (#1F1F28)
- Accent purple: #7C6EE0, Complement teal: #2ABFAA, Gold XP: #C8A84B, Danger: #E05555
- Diamond Rule: all interactive nodes are 45° rotated squares — never circles
- No-Line Rule: 1px borders forbidden for sectioning — use 16-24px gaps or background stepping
- Hard Edges: corner radius 2px maximum everywhere
- Glassmorphism: tooltip surfaces only — 12px backdrop-blur at 60% opacity
- Typography: Cinzel display, JetBrains Mono for all numbers, Outfit body
- Biome palettes: Verdant (#2d5a27 primary), Ashfall (#4a2c2c), Glacial (#1a3a4a), Tectonic (#3a3020), Umbral (#1a1a2e)

---

### AGENT 3 — Skill Splitter + Domain Skill Author

**Role**: worker-primary

**Prompt**: You have two tasks:

**Task A — Split the combined skill file** The file `skills/remember-brainstorm-imprint.skill.md` contains three skills that need to be individual files. Split it into:

- `skills/remember.skill.md`
- `skills/brainstorm.skill.md`
- `skills/imprint.skill.md`

Each file must have proper YAML frontmatter:

```yaml
---
name: [skill-name]
description: [one sentence — when to use this, what problem it solves]
args:
  - name: [arg-name]
    description: [what it is]
    default: "[default value if optional]"
---

```

Followed by the full skill content. Do not change the skill content — only split and add proper frontmatter.

**Task B — Author two game-specific domain skill overlays**

Write the following two skill files. These load on top of generic skills when domain knowledge is needed.

**skills/arcane-cartographer.skill.md**

YAML frontmatter:

```yaml
---
name: arcane-cartographer
description: Load for any UI or design work. Contains the full Mythoras design system — colour tokens, typography, layout rules, component patterns. Prevents design drift across sessions.
args:
  - name: mode
    description: build (full rules for implementation) | audit (rules for checking existing work)
    default: "build"
---

```

Content: Write a comprehensive reference that an agent can use to implement or audit any UI component in Mythoras. Include:

- Full colour token table with CSS variable names and hex values (surface hierarchy, accents, rarity colours, origin colours, biome palettes)
- Typography hierarchy: Cinzel (display, headings), JetBrains Mono (ALL numbers, code, telemetry), Outfit (body text, UI labels)
- The Diamond Rule in full — what it applies to, what it excludes, examples
- The No-Line Rule in full — when background stepping is correct, when 2px structural borders are correct
- Hard Edges rule — 2px maximum radius everywhere, list exceptions (none)
- Glassmorphism rule — only tooltips and entity popovers, the exact CSS (12px backdrop-blur, 60% opacity), never on panel surfaces
- Tonal Architecture — how depth is expressed through colour stepping not shadows, the 4-surface hierarchy
- Component patterns: equipment slot, creature card, stat row, XP bar, diamond node (zone/passive/navigation)
- Implementation checklist: 10 things to verify before calling a UI component complete

**skills/game-view-renderer.skill.md**

YAML frontmatter:

```yaml
---
name: game-view-renderer
description: Load for any Three.js or r3f tile rendering work. Contains the full Mythoras tile system specification — tile dimensions, coordinate system, layer architecture, camera setup, biome palettes. Prevents tile rendering inconsistencies.
args:
  - name: mode
    description: build (implementing renderer) | debug (diagnosing rendering issues)
    default: "build"
---

```

Content: Write a complete technical reference for the Mythoras tile rendering system. Include:

- Tile specifications: 64×32 pixel diamond tiles, 2:1 isometric ratio, PNG spritesheets with per-biome palettes
- Coordinate system: axial coordinates (q, r), conversion to screen (x = (q - r)  *32, y = (q + r)*  16), world origin at tile (0,0)
- Layer architecture: 4 layers — Ground (terrain), Objects (props/decorations), Entities (creatures, player, NPCs), Effects (particles, highlights)
- Elevation system: 0-3 elevation tiers, each tier raises the sprite by 16px on screen (isometric height)
- Camera: OrthographicCamera, frustum sized to viewport, zoom levels: 0.5x (overview), 1x (standard), 2x (detail)
- Zone sizes: Small (15×15 = 225 tiles), Medium (30×25 = 750), Large (50×40 = 2000), Massive (90×75+ = 6750+)
- Performance requirements: InstancedMesh for tiles (never individual Mesh per tile), texture atlas, frustum culling on, target 60fps at 1920×1080 with Medium zone loaded
- Tile types and their visual identifiers: Traversable (normal), Blocked (dark overlay), Encounter Node (accent colour diamond marker), Vendor Node (teal marker), POI (gold marker), Exit (pulsing border)
- Battle footprint: variable asymmetric footprint on the existing zone surface; fixed 8×8 is retired. Preserve location, fixtures, positions, and approach direction through adaptive continuity; renderer treatment may change reversibly.
- r3f integration: `<Canvas>` with `orthographic` prop, `<OrthographicCamera>` with `makeDefault`, `useFrame` for animation loop, `<InstancedMesh>` for tile batch rendering

---

### AGENT 4 — Build Brief Template Author

**Role**: worker-primary

**Prompt**: Write the Build Brief Template for the Mythoras harness. This is the fixed format that every Build Room session uses. It must be complete enough that an agent receiving it knows exactly what to do without any additional explanation.

File to create: `BUILD_BRIEF_TEMPLATE.md`

The template must include:

1. A section header with session ID, phase, and task ID placeholders
2. **Load state** section — explicit instruction to read harness.config.xml, AGENT_STATE.xml, DECISION_LOG.xml, and memory.md in that order
3. **Git context** section — run `git show HEAD --oneline` and `git diff HEAD~1 --stat` before starting, paste outputs here
4. **Task scope** section — one sentence describing exactly what is being built, plus an explicit list of what is NOT in scope (boundary)
5. **TodoWrite mandate** — explicit: "BEFORE TOUCHING ANY FILE, call TodoWrite with your complete plan. This is not optional."
6. **Specification** section — primary GDD reference (section numbers), design system reference, tech stack reference, key constraints pasted inline
7. **Deliverable checklist** — specific testable completion criteria as checkboxes
8. **Tool list** — exact tools available in this session (from harness.config.xml tool registry)
9. **MCP docs to fetch** — which MCPs to fetch before starting (from harness.config.xml)
10. **Skills to load** — which skill overlays apply to this task
11. **Progress log format** — exact format for appending to dev-log.html
12. **Handoff output format** — what the agent must produce at session end (complete or interrupted)
13. **Checkpoint reminder** — scalar schedule reference, six questions

Then write a **fully filled example** for the first real task: Phase 1 Task P1-01 "App shell + panel workspace layout engine." Fill every field with real values from the Mythoras spec. This example should demonstrate exactly how a Build Room session starts.

---

## AFTER ALL AGENTS COMPLETE

Once all four agents return their outputs, do the following:

1. Read the Harness Validator report (Agent 1) and identify the top 3 issues to fix immediately
2. Confirm that the three context files (Agent 2) are complete and coherent
3. Confirm that the six individual skill files (Agent 3) all have correct frontmatter and complete content
4. Confirm that the Build Brief Template (Agent 4) includes a filled P1-01 example
5. Fix any issues the Validator flagged that you can address directly
6. Produce a synthesis report:

```
MYTHORAS HARNESS BOOTSTRAP — SYNTHESIS REPORT
===============================================

Status: [READY | NEEDS-WORK]

Files complete and validated:
  [list]

Files needing human attention:
  [list with specific issue]

Immediate next action:
  [One sentence — what happens in the next Claude Code session]

P0 tasks remaining before Phase 1 code:
  [list from AGENT_STATE.xml]

Harness is ready when:
  [specific criteria — not vague]

```

1. Append a session entry to dev-log.html recording this bootstrap session

---

## FINAL INSTRUCTION

Do not begin spawning until you have read this entire prompt. Confirm your understanding in one sentence, then spawn all four agents simultaneously using your parallel spawning capability. Collect outputs as they complete. Synthesise. Produce the final report.

The goal of this session is a harness that is immediately usable — where the next session after this one can be a Planning Room session for DOC_v2_new, and every session after Phase 1 begins can be a Build Room session with a filled brief and a working harness underneath it.