# Document index

This repository holds far more written material than any one session can read.
Reading the wrong document is the main failure mode, so this file ranks what
governs before it lists what exists.

**Nothing in a `RESEARCH_*` file is canon.** Research is evidence gathered to
inform a decision. Only `CONTEXT.md`, `docs/adr/`, and a surface's own
`POSTURE_REQUIREMENTS.md` bind.

---

## Read first

| Document | Holds | Read it when |
| --- | --- | --- |
| [`docs/sessions/SESSION_2026-08-27.md`](docs/sessions/SESSION_2026-08-27.md) | Current handoff and the paste prompt for the next chat | Starting a new session. This is the resume file. |
| [`CONTEXT.md`](CONTEXT.md) | Domain vocabulary and the critical corrections | Always, after the handoff. |
| [`docs/adr/`](docs/adr/README.md) | Decisions that have actually been made | Before working in any area it touches |
| [`AGENTS.md`](AGENTS.md) | Which agent skills apply and where their config lives | Starting any agent session |

## Then read only your surface

One surface per session. Holding both at once is how the two got confused.

| Surface | Governing spec | Session brief | Status |
| --- | --- | --- | --- |
| **Client prototype** — voxel board + traced DD1 console | [`POSTURE_REQUIREMENTS.md`](apps/mythoras-client-prototype/POSTURE_REQUIREMENTS.md) | [`SYSTEM_PROMPT.md`](apps/mythoras-client-prototype/SYSTEM_PROMPT.md) | Traced 2026-08-24; passes its own checks |
| **ADE prototype** — dictionary-first Systems editor | [ADR-0001](docs/adr/0001-ade-is-a-dictionary-not-a-document-editor.md) | [`NOTES.md`](apps/mythoras-ade-prototype/NOTES.md) | Empty shell built; awaiting owner keep/kill/steal on issue #6 |

## Live capture

| Document | Holds |
| --- | --- |
| [`IDEA_LOG.md`](IDEA_LOG.md) | Running idea capture, numbered IDEA-NNN |
| [`TYPOGRAPHY_CANDIDATES.md`](TYPOGRAPHY_CANDIDATES.md) | Menu of candidate typefaces per job, plus what DD1 / PoE / Diablo verifiably use. A menu, not a decision. |
| [`OPEN_DESIGN_EXPLORATIONS.md`](OPEN_DESIGN_EXPLORATIONS.md) | Design essays lifted out of `CONTEXT.md` — captured, unresolved |
| [`BACKLOG.xml`](BACKLOG.xml) · [`AGENT_STATE.xml`](AGENT_STATE.xml) | Older structured backlog and state; predate the move to GitHub Issues |

Work items now live as **GitHub issues** on `xenongospel/omni-mythoras`, not in
this repo. See [`docs/agents/issue-tracker.md`](docs/agents/issue-tracker.md).

---

## Known contradictions

Recorded so they stop being rediscovered.

| Conflict | Where | Status |
| --- | --- | --- |
| `CONTEXT.md` #8 (compact HUD, no permanent panels) vs POSTURE (permanent third-of-screen plate) | [ADR-0002](docs/adr/0002-ui-architecture-world-view-vs-combat-plate.md) | **Proposed, with a LEAN (2026-08-27):** trace DD1's finish and density, not its single-creature architecture. Principle (information co-present with play) is settled; arrangement is not. MoP re-read — edge chrome on all four sides, so the axis is framed vs frameless. Option D is **the oldest** option, not the newest: the owner drew it in Stitch on 2026-04-04. |
| `CONTEXT.md` defines Turn Program; POSTURE §4.3 bans the word from the HUD | Same ADR | Deferred by POSTURE on purpose |

---

## Research by topic

A document may appear under more than one heading — that is the point of
grouping here rather than in folders. Most of these straddle categories, so
the filesystem stays flat and this index does the sorting.

### Harness, process, and how to build

The most recent thinking on how sessions should be run.

- [`RESEARCH_STUDIO_HARNESS_SKILLS_2026-08-26.md`](RESEARCH_STUDIO_HARNESS_SKILLS_2026-08-26.md) — atomic context, declarative docs, which open-source game skills are worth stealing
- [`RESEARCH_OWNER_REFS_HARNESS_GAMEVIEW_2026-08-26.md`](RESEARCH_OWNER_REFS_HARNESS_GAMEVIEW_2026-08-26.md)
- [`RESEARCH_DISCOVERY_TO_PROTOTYPE_2026-08-26.md`](RESEARCH_DISCOVERY_TO_PROTOTYPE_2026-08-26.md) — getting from a reference pile to a prototype that looks right
- [`RESEARCH_INDIE_START_WITHOUT_UI_POLISH.md`](RESEARCH_INDIE_START_WITHOUT_UI_POLISH.md) · [`RESEARCH_SYSTEMS_FIRST_PROTOTYPE.md`](RESEARCH_SYSTEMS_FIRST_PROTOTYPE.md) · [`RESEARCH_START_PATH_DECISION.md`](RESEARCH_START_PATH_DECISION.md)
- [`RESEARCH_GGG_INTERNAL_TOOLS_PUBLIC_2026-08-10.md`](RESEARCH_GGG_INTERNAL_TOOLS_PUBLIC_2026-08-10.md) · [`RESEARCH_GGG_INTERVIEW_YHkJ46c8Su8.md`](docs/research/RESEARCH_GGG_INTERVIEW_YHkJ46c8Su8.md)
- [`BOOTSTRAP.md`](BOOTSTRAP.md)

### UI, HUD, and visual language

Feeds OD-004 and ADR-0002. Nothing here is a locked look.

- [`OD_004_RESEARCH_SYNTHESIS.md`](OD_004_RESEARCH_SYNTHESIS.md) — the synthesis pass on UI design language
- [`RESEARCH_MOP_POE_DD_PROTOTYPE_PRIORITIES_2026-08-16.md`](RESEARCH_MOP_POE_DD_PROTOTYPE_PRIORITIES_2026-08-16.md) · [`RESEARCH_MOP_CURSOR_EA_2026-08.md`](RESEARCH_MOP_CURSOR_EA_2026-08.md)
- [`RESEARCH_DARKEST_DUNGEON_EXPLORATION.md`](RESEARCH_DARKEST_DUNGEON_EXPLORATION.md) · [`RESEARCH_DD_TABS_RS3_INTERFACE_2026-08-19.md`](docs/research/RESEARCH_DD_TABS_RS3_INTERFACE_2026-08-19.md)
- [`RESEARCH_POE_PLAYER_VISUAL_OVERVIEW_yLij_001vUU.md`](docs/research/RESEARCH_POE_PLAYER_VISUAL_OVERVIEW_yLij_001vUU.md)
- [`RESEARCH_INSPIRATION_LINKS_2026-08-14.md`](RESEARCH_INSPIRATION_LINKS_2026-08-14.md) · [`VISUAL_AND_CIPHER_BOARD_NOTES.md`](VISUAL_AND_CIPHER_BOARD_NOTES.md)
- [`RESEARCH_X_REFS_PALETTE_ASSET_PIPELINE_2026-08-11.md`](RESEARCH_X_REFS_PALETTE_ASSET_PIPELINE_2026-08-11.md) — palette and asset pipeline

### Editor / ADE references

- [`RESEARCH_ADE_LAYOUT_REFS_2026-08-08.md`](RESEARCH_ADE_LAYOUT_REFS_2026-08-08.md) · [`RESEARCH_OWNER_ADE_NARROWING_2026-08-11.md`](RESEARCH_OWNER_ADE_NARROWING_2026-08-11.md)
- [`RESEARCH_GODOT_ENGINE_EDITOR_UI_ADE_2026-08-10.md`](RESEARCH_GODOT_ENGINE_EDITOR_UI_ADE_2026-08-10.md) · [`RESEARCH_UNITY_EDITOR_UI_ADE_2026-08-10.md`](RESEARCH_UNITY_EDITOR_UI_ADE_2026-08-10.md) — editor *grammar* as inspiration, not an engine choice
- [`ADE_VERTICAL_SLICE_SPEC.md`](ADE_VERTICAL_SLICE_SPEC.md) — predates ADR-0001

### Combat, damage, and skills

- [`GRILL_PREP_SKILL_OWNERSHIP_TYPE.md`](GRILL_PREP_SKILL_OWNERSHIP_TYPE.md) · [`SKILLS_REDESIGN_EXPLORATION.md`](SKILLS_REDESIGN_EXPLORATION.md)
- [`POE_SKILL_SYSTEM_RESEARCH.md`](POE_SKILL_SYSTEM_RESEARCH.md) · [`POE_SKILL_SYSTEM_RESEARCH-V2.md`](docs/research/POE_SKILL_SYSTEM_RESEARCH-V2.md)
- [`RESEARCH_SKILL_CIRCUIT_ATTRIBUTE_GEMS_2026-08-19.md`](docs/research/RESEARCH_SKILL_CIRCUIT_ATTRIBUTE_GEMS_2026-08-19.md) · [`RESEARCH_CREATURE_LOCKED_SKILL_SLOTS_2026-08-19.md`](docs/research/RESEARCH_CREATURE_LOCKED_SKILL_SLOTS_2026-08-19.md)
- [`RESEARCH_MEWGENICS_SKILL_BANKS_MYTHORAS_2026-08-11.md`](docs/research/RESEARCH_MEWGENICS_SKILL_BANKS_MYTHORAS_2026-08-11.md)

### Progression and passive trees

- [`ATLAS_TREE_RESEARCH.md`](ATLAS_TREE_RESEARCH.md) · [`POE_CLASS_PASSIVE_TREE_RESEARCH.md`](POE_CLASS_PASSIVE_TREE_RESEARCH.md) · [`POE2_TEMPLE_RESEARCH.md`](POE2_TEMPLE_RESEARCH.md)
- [`RESEARCH_MERC_PROGRESSION_VECTOR_BB_2026-08.md`](RESEARCH_MERC_PROGRESSION_VECTOR_BB_2026-08.md) · [`RESEARCH_POE_LUMINARY_MERC_VECTOR_2026-08.md`](RESEARCH_POE_LUMINARY_MERC_VECTOR_2026-08.md)

### Items, crafting, economy

Feeds the affix classification question evicted from `CONTEXT.md`.

- [`OPEN_DESIGN_EXPLORATIONS.md`](OPEN_DESIGN_EXPLORATIONS.md) — the unresolved affix and equipment-slot questions
- [`CRAFTING_FOUNDATION_RETHINK.md`](CRAFTING_FOUNDATION_RETHINK.md) · [`POE_CRAFTING_STEPS_RESEARCH.md`](POE_CRAFTING_STEPS_RESEARCH.md) · [`POE_CURRENCY_ECONOMY_RESEARCH.md`](POE_CURRENCY_ECONOMY_RESEARCH.md)
- [`RESEARCH_AFFIX_PREFIX_SUFFIX_LEAN_2026-08-11.md`](RESEARCH_AFFIX_PREFIX_SUFFIX_LEAN_2026-08-11.md) · [`RESEARCH_TAGS_VS_MOD_CATALOGUE_ARPG_2026-08-10.md`](RESEARCH_TAGS_VS_MOD_CATALOGUE_ARPG_2026-08-10.md)
- [`RESEARCH_GLITCH_CRAFTING_AND_REFS_2026-08-19.md`](docs/research/RESEARCH_GLITCH_CRAFTING_AND_REFS_2026-08-19.md) · [`CURSE_OF_THE_ALLFLAME_ANALYSIS.md`](CURSE_OF_THE_ALLFLAME_ANALYSIS.md)

### Zones, endgame, squad

- [`CIPHER_NETWORK_PROGRESSION_DESIGN.md`](CIPHER_NETWORK_PROGRESSION_DESIGN.md) · [`POE_ENDGAME_RESEARCH.md`](POE_ENDGAME_RESEARCH.md)
- [`MYTHORAS_DOSSIER_SYSTEM.md`](MYTHORAS_DOSSIER_SYSTEM.md) · [`RESEARCH_MONTABI_SQUAD_LAYOUT_2026-08.md`](docs/research/RESEARCH_MONTABI_SQUAD_LAYOUT_2026-08.md)

### Narrative and player experience

- [`NARRATIVE_AND_SYSTEMS_IDEAS.md`](NARRATIVE_AND_SYSTEMS_IDEAS.md) · [`IMAGINED_PLAYER_STATEMENTS.md`](IMAGINED_PLAYER_STATEMENTS.md)

### General Path of Exile reference

- [`POE_RESEARCH.md`](POE_RESEARCH.md) — the broad base pass

---

## Owner verdicts and session records

Closer to canon than research: these record what the owner actually said.
Decisions that survived should be promoted to `docs/adr/`.

- [`SESSION_ADE_MVE_VERDICT_2026-08-14.md`](SESSION_ADE_MVE_VERDICT_2026-08-14.md) — became ADR-0001
- [`RESEARCH_OWNER_ANSWERS_2026-08-06.md`](RESEARCH_OWNER_ANSWERS_2026-08-06.md) · [`RESEARCH_OWNER_DIRECTION_PRACTICAL_TURN_2026-08-05.md`](RESEARCH_OWNER_DIRECTION_PRACTICAL_TURN_2026-08-05.md)
- [`SESSION_DECISIONS_2026-07-15.md`](SESSION_DECISIONS_2026-07-15.md) · [`SESSION_FEEDBACK_2026-07-19.md`](SESSION_FEEDBACK_2026-07-19.md) · [`SESSION_COMPILE_2026-08-11.md`](SESSION_COMPILE_2026-08-11.md)
- [`PLAN_FEEDBACK_RESEARCH_2026-07-19.md`](PLAN_FEEDBACK_RESEARCH_2026-07-19.md) · [`RESEARCH_SYNTHESIS_2026-07-17.md`](RESEARCH_SYNTHESIS_2026-07-17.md)
- [`docs/sessions/`](docs/sessions/) — **current:** [`SESSION_2026-08-27.md`](docs/sessions/SESSION_2026-08-27.md). Also: game thesis, identity and prototype, inspiration delta, soundness pass

## Planning passes

Historical route-finding. Useful as reasoning, stale as instructions.

- [`PATHWAY_SINGULAR_PRACTICAL_BUILD_2026-08.md`](PATHWAY_SINGULAR_PRACTICAL_BUILD_2026-08.md) · [`PATHWAYS_PRACTICAL_ACTUALIZATION_2026-08-05.md`](PATHWAYS_PRACTICAL_ACTUALIZATION_2026-08-05.md)
- [`WAYFINDER_PASS_COHERENCE.md`](WAYFINDER_PASS_COHERENCE.md) · [`WAYFINDER_PASS_MVP_VERTICALS.md`](WAYFINDER_PASS_MVP_VERTICALS.md)
- [`GRILL_HANDOFF.md`](GRILL_HANDOFF.md) · [`SESSION_HANDOFF.md`](SESSION_HANDOFF.md) · [`NEXT_SESSION_PROMPT.md`](NEXT_SESSION_PROMPT.md) — July 2026; banners point at the 2026-08-27 session file

## Superseded

The GDD line. Kept for history and still heavily cross-referenced, which is why
they have not moved. **Do not treat any of these as current.**

[`DOC_v2.md`](DOC_v2.md) · [`DOC_v3.md`](DOC_v3.md) · [`DOC_v4.md`](DOC_v4.md) · [`DOC_v5.md`](DOC_v5.md) · [`DOC_v6.md`](DOC_v6.md) · [`GDD_DRIFT_AUDIT.md`](GDD_DRIFT_AUDIT.md)

---

## Maintaining this file

Documents are grouped here, not filed in topic folders. Topic folders were
considered and rejected: too many documents straddle categories (editor
research that is mostly UI, reference-game research that is mostly systems), so
filing forces a guess and an agent globbing one folder gets a confidently
incomplete set. Status folders (`research/`, `sessions/`, `adr/`) are stable
because status is a fact; topic is a judgement, so it lives here where a
document can appear twice and recategorising costs one edit.

After moving any document, run `./scripts/check-doc-links.sh` — the documents
are densely cross-linked and a move breaks links in both directions.
