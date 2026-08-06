# GDD Drift Audit — July 3 2026

> **HISTORICAL AUDIT / SUPERSEDED IN PART (2026-07-15):** Q10 is now CLOSED with automatic Speed-driven ordering; Phantom replaces Shadow; Fortitude is rejected; and the current GDD reconcile has applied many findings below. Preserve this file as an audit snapshot, not a current task list.

Generated from the July 1–2 grill session (Q1–Q9 locked). This file records exact line-level discrepancies between the current GDD docs and the locked grill decisions. It is the input spec for the T08 DOC_v2 rewrite and the DOC_v3 §8 rewrite.

**Key:** ❌ = must fix | ⚠ = flag/monitor | ✅ = already aligned

---

## DOC_v2.md — Combat Systems

### CRITICAL DRIFT ❌

| Lines | What the doc currently says | What the grill decided | Decision ref |
|-------|---------------------------|------------------------|--------------|
| 13 | `Channels (what defence applies)` | Channel's job is NOT defence grouping. It is (1) Attribute scaling navigation and (2) modifier/tag shorthand. | Q3/Q9 |
| 18 | `CHANNEL (Damage Group — what defence schema applies)` | Same as above — "what defence schema applies" is the wrong framing. | Q3/Q9 |
| 40 | Q1 row: "Primary defence schema" | Q1's answer determines Attribute scaling navigation and tag shorthand, not defence schema. | Q3/Q9 |
| 182–234 | §5.2–5.5: "Physical Channel — Armour", "Elemental Channel — Elemental Resistance", "Phenomena Channel — Fortitude" | The Channel-to-defence-layer mapping has been renamed out of Channel's job. Defence layers (Armour, Resistance, Fortitude) apply based on damage type mechanics, not because Channel "governs" them. Section framing needs restructuring. | Q3/Q9 |
| 504 | "The original per-stream Resonance mechanic content… has been distributed into the passive Grid and gear mod pools as individual notables, Masteries, and affixes… not a unified named system" | Resonance dissolution was a mistake. Two-tier Stream Resonance is restored: Tier 1 (baseline, no investment) + Tier 2 (named deep mechanics via Grid investment). Both tiers are formal, named, unified. | Q7 |
| 605 | "Pipeline: … → Channel Defence → Resistance layers → …" | "Channel Defence" label should be removed or renamed; channels are not the defence layer. | Q3/Q9 |
| 740–752 | §16.3 Priority: `Priority is a **skill property**… High Priority / Normal / Slow Priority` as fixed classification | Priority as a fixed skill property is removed. Initiative ordering emerges from Speed stats, support costs, and build investment. No High/Normal/Slow tier labels on skills. | CONTEXT.md #4 / June 28 |
| 766–770 | §16.6 Cast-on-Meta: presented as a campaign-available mechanic (late campaign, more common in endgame) | Cast-on-Meta / trigger skills / flask-analogue mechanics are future expansion, NOT campaign baseline. Must be demoted to a "Future Expansion" stub or removed. | Q2 |
| 1025 | `Channels (3): Physical, Elemental, Phenomena — distinct defence schemas` | "distinct defence schemas" is the wrong framing. | Q3/Q9 |
| 1037 | Part summary mentions `Cast-on-Meta` without future-expansion flag | Should be marked future expansion. | Q2 |

### Q10 CLOSED ✅ (automatic ordering)

| Lines | Section | Resolution |
|-------|---------|-------------------|
| 717–770 | §16 Turn Program | Reconciled: no manual sequence assignment. Order resolves from Speed + skill-inherent timing + support costs; combos are emergent. See `GRILL_HANDOFF.md` Q10. |

### TYPE CHART PLACEHOLDER ⚠ (blocked on Planning Room)

| Lines | Section | What needs a placeholder |
|-------|---------|--------------------------|
| §9 / type advantage references throughout | Type effectiveness math | Q6 confirmed species-level AND build-earned type effectiveness exists. The formal type chart (which Streams deal amplified/reduced against which creature Stream profiles) does NOT exist. All "type advantage" references should cite `<!-- TBD: Stream type chart — requires dedicated Planning Room session. See parked items in GRILL_HANDOFF.md. -->` |

### ALREADY ALIGNED ✅

| Lines | What is correct |
|-------|----------------|
| 717–719 | Turn Program structure: Planning Phase + Execution Phase. Correct. |
| 724 | Execution Phase committed — no live intervention. Correct. |
| 1029–1031 | squad size 5, 3 active in combat. Correct. |

---

## DOC_v3.md — Progression Systems

### CRITICAL DRIFT ❌

| Lines | What the doc currently says | What the grill decided | Decision ref |
|-------|---------------------------|------------------------|--------------|
| 23 | `Creature Branches — Slot-bound paths branching from the board edge for individual creature specialisation` | The term "Creature Branches" is wrong. They are Slot-Local Subroutes. The slot is the unit of investment, not the creature entity. Swapping a creature into a slot changes which subroute bonuses apply — subroutes do NOT follow the creature. | June 28 + CONTEXT.md #2 |
| 101, 106, 110, 115, 124 | `Creature Branches` repeated throughout §8.2 allocation examples | All occurrences of "Creature Branches" → "Slot-Local Subroutes". | same |
| 106 | `Creature Branch investment benefits one creature (whichever occupies that squad slot)` | Phrasing implies creature ownership. Should be: "Slot-Local Subroute investment benefits the creature currently occupying that slot — it is the SLOT that owns the subroute, not the creature." | same |
| 272 | `Edge Connector Sockets — at the board periphery where the main board interfaces with Creature Branch regions` | "Creature Branch regions" → "Slot-Local Subroute regions". | same |
| 335–337 | §8.6 titled `Creature Branches`: "Creature Branches are regions of the Grid accessible through Connector Sockets at the board's edges. They provide local routing that benefits only the creature assigned to a specific squad slot." | Section to be retitled `Slot-Local Subroutes`. Body text to clarify slot-ownership semantics. | same |
| 461 | "The per-stream Resonance mechanics from earlier design iterations… have been distributed as individual notables, Masteries, and gear affixes… They are no longer a unified formal system" | Same as DOC_v2 — two-tier Resonance is restored. This sentence should be replaced with the two-tier description. | Q7 |
| 1373 | Part summary: `148 universal points allocated between Global Route and Creature Branches (48pt pool, 32pt per-creature cap)` | "Creature Branches" → "Slot-Local Subroutes". Note: the 148pt / 48pt pool / 32pt cap figures have NOT been changed by the grill — only the naming/framing of what the subroutes are. | same |

### ALREADY ALIGNED ✅

| Lines | What is correct |
|-------|----------------|
| 1323–1327 | Squad: 5 creatures, 3 active in combat, 2 in reserve. Correct. |
| 11–15 | "The Motherboard Grid is Mythoras's global passive tree… the Technician's permanent character-wide passive investment." Correct framing. |
| 20–22 | §8.1 table: Global Route + Creature Branches structure described. Global Route row is correct; Creature Branches row needs renaming only. |

---

## DOC_v4.md — World & Campaign

### FLAG ⚠

| Lines | Flag |
|-------|------|
| 682 | `5 creatures across the Siege encounter. Opens with 3 establishing battlefield control. Adds 2 as the battlefield becomes complex.` — This describes an *enemy* encounter using 5 creatures with 3-on-field phasing. This is valid and distinct from the player's 3-field rule. No change needed, but future authors should not confuse this as a player field size reference. Add a comment or editorial note if ambiguity arises. |

### ALREADY ALIGNED ✅

No player-facing field/party size errors found.

---

## DOC_v5.md — Economy & Crafting

### FLAG ⚠

| Lines | Flag |
|-------|------|
| 117, 134 | `10 × 5 creatures = 50 gear slots across the squad.` The squad is 5 creatures (3 field + 2 bench). The gear slot total of 50 is mathematically correct given the 5-creature squad. However, the gear slot redesign question (10 slots per creature is under review — see parked items in GRILL_HANDOFF.md) is unresolved. Do not change the numbers in this doc until the gear slot redesign grill session completes. Flag as `<!-- GEAR SLOT COUNT UNDER REVIEW — see GRILL_HANDOFF.md parked items -->`. |

### ALREADY ALIGNED ✅

No player-facing field/party size errors found.

---

## DOC_v6.md — Technical Design

### FLAG ⚠

| Lines | Flag |
|-------|------|
| 623 | `Active Squad — 5 creatures with HP bars, Load indicators, status effects.` UI description shows all 5 Squad creatures. This is acceptable if the UI visually distinguishes the 3 Field creatures from the 2 Bench creatures. Add a note: `<!-- UI must distinguish Field (3 active) from Bench (2 reserve) — see OD-004 UI design session -->`. |

### ALREADY ALIGNED ✅

No structural drift from grill decisions found beyond the UI flag above.

---

## Summary: Rewrite Priority

| Priority | Doc | Sections | Blocker |
|----------|-----|---------|---------|
| 1 — Critical | DOC_v2.md | §3.1 (Channel framing), §5.2–5.5 (defence layer framing), §8.3 (Resonance restoration), §16.3 (Priority removal), §16.6 (Cast-on-Meta demotion), Part II summary | Q10 is closed; remaining architecture work is unblocked |
| 2 — Critical | DOC_v3.md | §8.1 table, §8.2–8.6 (Creature Branches → Slot-Local Subroutes), §461 (Resonance two-tier reference), §1373 summary | None — ready now |
| 3 — Flag | DOC_v5.md | Line 134 gear slot count comment | Gear slot redesign grill (parked) |
| 4 — Flag | DOC_v6.md | Line 623 Active Squad UI note | OD-004 UI design session |
| 5 — No change | DOC_v4.md | Line 682 enemy-encounter note | None |
