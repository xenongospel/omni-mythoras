# Session Handoff — Mythoras Harness Workspace

> **Workspace root:** `/Users/xenonheat/sites/omniagents-mythoras`  
> **Updated:** 2026-07-11  
> **Read this first** in every new agent session before BOOTSTRAP.md or AGENT_STATE.xml.  
> **Resume next session:** copy the prompt from **`NEXT_SESSION_PROMPT.md`**  
> **Latest session:** see `SESSION_DECISIONS_2026-07-15.md` — OD-004 expanded into world/UI/campaign/endgame/build decisions (many locked). Read it after this file.
> **Wayfinder map (2026-07-16):** [Mythoras project spine](.scratch/mythoras-project-spine/map.md) — destination B (first seam + project spine placement). Pass assets: `WAYFINDER_PASS_*.md`. Do not resolve more than one ticket per session.
> **Reconcile note (2026-07-15):** OD-004 session decisions are captured; GDD reconciliation completed for locked-canon contradictions. Older "next UI grill" instructions below are superseded.

---

## What this folder is

**Canonical Mythoras planning harness** — GDD documents, grill decisions, backlog, agent state, and ADE slice spec. **No application code lives here.**

| Path | Role |
|------|------|
| `omniagents-mythoras/` | **This repo** — GDD + harness XML/markdown |
| `omni-agents/` | **ADE runtime** — OmniSpace desktop app (`/Users/xenonheat/sites/omni-agents`) |
| `xploits-mythoras/` | Duplicate grill handoff only — **prefer this folder** for all work |

---

## What new agents must read (in order)

1. **`SESSION_HANDOFF.md`** (this file) — current state, stale flags
2. **`CONTEXT.md`** — domain vocabulary; critical corrections (3-on-field, global Grid, tone, etc.)
3. **`GRILL_HANDOFF.md`** — damage architecture grill Q1–Q10 (all locked)
4. **`AGENT_STATE.xml`** — task graph and phase (**partially stale — see below**)
5. **`BACKLOG.xml`** — gated ideas; ADE items BL-001–BL-005, Builder BL-006+
6. **Relevant GDD** — `DOC_v2.md` (combat), `DOC_v3.md` (progression) for current work

**Do not treat `BOOTSTRAP.md` as current state.** It describes a fuller harness (harness.config.xml, skills/, dev-log.html, etc.) that **does not exist in this folder yet**. Only 13 files are present.

---

## ADE strategy (locked 2026-07-06)

- **No fork.** Use upstream **`blackgospel/omni-agents`** directly at `/Users/xenonheat/sites/omni-agents`.
- Seun will accommodate Mythoras-specific features in the main repo.
- **Removed:** `mythoras-ade` local clone. GitHub fork `xenongospel/omni-agents` should be deleted manually if still present.
- **Installed:** OmniSpace **0.1.1** at `/Applications/OmniSpace.app` (update channel; 0.2.0 version-bumped in git, not yet published to CloudFront).
- **Dev from source:** `cd /Users/xenonheat/sites/omni-agents && bun run dev` (requires Bun 1.3.4+).

**Implication for ADE track:** BL-001/BL-002 vertical slice **already exists** in omni-agents (kanban, PTY terminals, Cursor/Claude adapters, Monaco editor). Do **not** build ADE from scratch per `ADE_VERTICAL_SLICE_SPEC.md`. Phase 0 = validate existing flow; Phase 1 = Mythoras workspace defaults + harness XML viewers (BL-005).

---

## Grill status

### Damage architecture grill — COMPLETE (Q1–Q10)

| Q | Decision |
|---|----------|
| Q1–Q9 | As in `GRILL_HANDOFF.md` |
| Q10 | Automatic ordering — Speed + skill-inherent timing; emergent combos |

### Type system grill — COMPLETE (2026-07-11)

| Decision | Resolution |
|----------|------------|
| Damage types | 11 types across 4 categories (see table below) |
| Category names | Physical / Primal-Elemental / Biotic-Elemental / Phenomena |
| Chart scope | C — 11×11 Primary vs Primary; soft tiers 0.5/0.75/1.0/1.25/1.5 |
| Secondary damage type | Small bias layer ±0.1–0.15× |
| STAB | Replaced by conditional Alignment bonus; smaller than Pokémon |
| Immunity model | C — chart + tag immunities, disclosed separately in UI |
| Tag system | D+C — universal Origin tags + tendency defaults + exceptional species |
| Flying type | Removed → Winged tag |
| Fighting type | Removed → Martial Origin |
| Phantom | Third Phenomena type (replaces Shadow) |
| Fortitude | Scrapped — vocabulary TBD (BL-030) |
| Origin on chart | No — Bloodlines + Affinities + tertiary role only |
| Tectonic | In Physical; has material/hardness sub-properties |
| Attribute-category | Loose association (not one-to-one) |

**Damage type table:**

| Category | Types |
|----------|-------|
| Physical | Physical, Tectonic |
| Primal-Elemental | Inferno, Voltaic, Glacial, Tidal |
| Biotic-Elemental | Eldergrove, Blight + one TBD |
| Phenomena | Psionic, Fae, Phantom |

### Skill ownership grill — COMPLETE (2026-07-07)
Skill Cards are creature-local. Grid is Technician-global. Warbanners are Skill Cards.

### UI design grill — SESSION DECISIONS CAPTURED (OD-004)
The expanded OD-004 session locked World View / Workspace View direction and retired the permanent framed shell. Visual language details remain open; see `SESSION_DECISIONS_2026-07-15.md`.

---

## Current state of play

### Phase: P0 — GDD Completion (active)

| Area | Status |
|------|--------|
| Damage grill (T18) | **Complete** — Q1–Q10 locked |
| DOC_v2.md (T08) | **In progress** — §6.0 type transpose added; §15 creature-local scope; Q10 lock-in for §16 still pending; type chart TBD |
| DOC_v3.md | **~80% aligned** — global Grid OK; fix leftover "creature Branch" wording; separate Signatures vs Resonance in §9.2 |
| Stream type chart | **Blocking gap** — dedicated Planning Room required (not a wording patch) |
| Harness bootstrap (BOOTSTRAP) | **Not built** — context files, skills, harness.config.xml still missing |
| ADE MVP (ADE-01) | **Unblocked via omni-agents** — validate, don't rebuild |
| Phase 1 game code (P1-01) | **Locked** until GDD current + UI design session (OD-004) |

### Stale in AGENT_STATE.xml (update on next session)

- Q10 / OD-010 still marked **deferred** → now **resolved**
- OD-006 damage architecture → **resolved** (Q1–Q10 locked)
- T08 blocked on OD-010 → **unblocked** for Turn Program §
- ADE-00/ADE-01 assume greenfield build → **reframe** as omni-agents validation + Mythoras integration
- References to `DOC_v2_new` / `DOC_v3_new` → actual files are **`DOC_v2.md` / `DOC_v3.md`**

### Archived / retired

- `omni-xe` — scratch ADE for SOVEREIGN; archived, superseded by omni-agents
- `omni-xe-scratch-legacy` — removed
- `mythoras-ade` fork — removed

---

## What is next (priority order)

### Immediate (next session)

1. ~~**UI grill (OD-004)**~~ — **SESSION CAPTURED.** World View / Workspace View direction is authoritative; Field Studio is retired.
2. **DOC_v2.md §6 rewrite** — damage types + categories + chart structure (type grill complete; write-in pending)
3. **DOC_v2.md §16** — Q10 lock-in in prose (comment stubs exist; body needs updating)

### Soon after

4. **Type chart Planning Room** — 11×11 multipliers; which types beat which
5. **Defensive layer grill** — resistance per category; Oura naming; Phenomena resistance vocab
6. **Tag interaction rules** — which damage types vs which tags; what effects
7. **ADE Phase 0** — validate omni-agents vertical slice (no GDD dependency — can start anytime)
8. **DOC_v3.md terminology sweep** — 3 remaining Creature Branches lines; cross-refs

### Soon after

4. **DOC_v3.md terminology sweep** — Slot-Local Subroutes, not per-creature Branches
5. **Stream type chart Planning Room** — formal effectiveness table (blocks combat math)
6. **ADE Phase 1** — Default workspace → this repo; harness viewers for `BACKLOG.xml`, `AGENT_STATE.xml`, `DECISION_LOG.xml` (BL-005)
7. **UI design exploration session** (OD-004) — before any P1-01 UI work

### Parallel tracks (when unblocked)

| Track | Next gate |
|-------|-----------|
| **Builder (BLD-00)** | T08 DOC_v2 complete |
| **Game Phase 1 (P1-01)** | T08 + T09 + T10 + OD-004 + ADE validated |
| **Harness bootstrap** | Optional — complete missing BOOTSTRAP components if Cursor-native harness still wanted alongside OmniSpace |

---

## Critical facts (never get wrong)

- **3 creatures on field**, Squad of 5 (3 field + 2 bench)
- **Motherboard Grid** = ONE global tree + 5 slot-local subroutes (NOT per-creature)
- **Priority** as fixed skill classification = removed
- **Tone** = dynamic, biome-dependent — NOT universally dark
- **UI design language** = NOT locked (Arcane Cartographer is not final)
- **Channel** = scaling navigation + tag shorthand only — NOT defence grouping

---

## Open decisions still blocking downstream

| ID | Topic |
|----|-------|
| OD-001 | Domain naming |
| OD-004 | UI design direction |
| OD-005 | Oura (temp) naming |
| OD-007 | Domain naming collision |
| — | Stream type effectiveness table (grill gap, no OD id) |

OD-010 (Q10) and OD-006 are **closed**.
