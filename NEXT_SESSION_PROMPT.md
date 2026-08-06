> **STALE / SUPERSEDED (2026-07-15):** This prompt predates the expanded OD-004 session. World View / Workspace View decisions are captured in `SESSION_DECISIONS_2026-07-15.md`; the permanent shell and Field Studio umbrella identity are retired. Use this file only as historical preparation material.

# NEXT SESSION — Paste Prompt

> **Workspace:** `/Users/xenonheat/sites/omniagents-mythoras`
> **Saved:** 2026-07-11
> Copy everything inside the fenced block below into a new Cursor chat with this folder as workspace root.

---

```
# MYTHORAS — SESSION RESUMPTION

Read these files in full before doing anything else:

1. /Users/xenonheat/sites/omniagents-mythoras/SESSION_HANDOFF.md — canonical current state
2. /Users/xenonheat/sites/omniagents-mythoras/CONTEXT.md — domain vocabulary (updated 2026-07-11)
3. /Users/xenonheat/sites/omniagents-mythoras/GRILL_HANDOFF.md — damage architecture grill (Q1–Q10 locked) + type system grill (locked 2026-07-11)

Do NOT treat BOOTSTRAP.md as current state. Do NOT treat the existing DOC_v6.md UI spec as locked — OD-004 UI design is still open.

---

## What this session does, in order

**STEP 1 — UI Grill (OD-004) [FIRST PRIORITY — Fable 5 access active]**

Grill the UI design language and panel structure before any UI implementation. Three tracks:

**Track 1 — Design language (30 min)**
- Historical question (now closed): whether "Field Studio" should be the identity. Field Studio is retired.
- Dark theme with amber/magenta accent — locked or still open?
- "Data-dense technical" aesthetic from DOC_v6 — right for Protocol world?
- Note: Arcane Cartographer / Field Studio in DOC_v6 was a draft starting point and is now retired/superseded by the World View / Workspace View direction.

**Track 2 — Panel layout (30 min)**
- Creature panel: defender type profile (Primary/Secondary damage type, Origin, resistances) vs offensive loadout (Skill Cards) must be shown separately — a documented gap
- Warbanners are now Skill Cards (creature-local) — does this change the squad/skill panel?
- Command Deck is Technician-level — where does it sit in the combat HUD?
- What panels exist in MVP? (DOC_v6 §67.1 has a draft list — grill whether it's right)

**Track 3 — Combat HUD (20 min)**
- Planning Phase vs Execution Phase — how does UI communicate which phase you're in?
- Turn queue / initiative display — what does the player see?
- Floating combat text confirmed (no message boxes) — what information does it carry?
- Damage type colour-coding for hit feedback (11 types)

After Track 3: Fable 5 builds the UI shell canvas from locked decisions.

**STEP 2 — Continue remaining grills (after UI grill)**

Priority order for subsequent grill sessions:
1. Type effectiveness chart (11×11 actual multipliers — Planning Room)
2. Defensive layers (resistance per category; Oura naming OD-005; Fortitude replacement BL-030)
3. Tag interaction rules (which damage types vs which tags produce which effects)
4. Gear/affix classification (slot count; prefix/suffix vs quad-Attribute)
5. Delivery systems (Mine/Trap trade-offs in Turn Program — BL-029)
6. STAB/Alignment exact scale (agreed smaller than Pokémon, not quantified)

---

## What was locked in the previous session (2026-07-06 to 2026-07-11)

### Damage type architecture (FULLY LOCKED — do not relitigate)

| Category | Damage Types | Notes |
|----------|-------------|-------|
| **Physical** | Physical, Tectonic | Tectonic has internal depth (material/hardness sub-properties); NOT separate category |
| **Primal-Elemental** | Inferno, Voltaic, Glacial, Tidal | Classic energy triad + Tidal |
| **Biotic-Elemental** | Eldergrove, Blight + one TBD | MVP thin; expand when balance signals it |
| **Phenomena** | Psionic, Fae, Phantom | Phantom = incorporeal/spirit (replaces Shadow) |

**Category rules:**
- Categories are LOOSE classifiers — not on type effectiveness chart
- Attribute associations are LOOSE (like PoE Chaos floating between INT/DEX) — not one-to-one
- "+% Primal-Elemental damage" = modifier shorthand for all 4 types in that category
- "Kinetic" removed from Physical — just "Physical"
- "Fortitude" scrapped — Phenomena resistance vocabulary TBD (BL-030)

**Type chart structure (locked — multipliers TBD in Planning Room):**
- 11×11 matrix: attacker Primary damage type vs defender Primary damage type
- Soft tiers: 0.5 / 0.75 / 1.0 / 1.25 / 1.5 (no hard 4× or 0.25×)
- Secondary damage type: small bias layer ±0.1–0.15× on top of Primary chart
- Physical = neutral baseline axis (never immune, never blanket immune to)
- No base 0× immunities on chart — immunities are authored exceptions (rare)
- STAB removed → Damage Type Alignment: conditional bonus, smaller than Pokémon's 1.5×
- Build-earned offensive affinity (Q6): separate Grid investment layer, not on base chart

**Immunity model (C):**
- Chart-based immunities: authored, rare, type vs type (e.g. world-logic-driven pairings)
- Tag-based immunities: property-based (e.g. Winged tag vs grounding effects)
- Two types disclosed separately in UI
- Accuracy reduction is available as a softer alternative for specific tag interactions

**Tag system (D+C hybrid):**
- Universal Origin tags: always present for that Origin (e.g. Scalesbourne → Draconic)
- Default Origin tags: tendency, specific species can deviate (e.g. Scalesbourne → Winged usually)
- Exceptional species tags: authored per-species for extraordinary cases
- Tag interactions: base = conditional/mechanical effect; Grid/Skill Card investment can amplify into damage modifier (Q3 = C)
- Flying type removed from Pokémon → Winged tag handles aerial interactions
- Fighting type removed → Martial Origin handles that combat fantasy
- Winged + Tectonic grounding = immunity OR accuracy reduction (per specific interaction)

**Pokémon/PoE transpose:**
- Defender profile: creature Primary + Secondary damage type (species + roll)
- Attacker delivery: Skill Card damage type (any type on any creature)
- Origin: NOT on chart — Bloodlines + Affinities + tertiary influence on mods/Grid/skills

### Other locked decisions

**Skill Cards are creature-local (NOT Technician-global)**
- Skill Frame, Skill Cards, Support Cards, Breakthrough, creature Mana = per creature
- Technician owns: Grid (global route + slot subroutes), Command Deck, Lanes, Warbanner deployment authority
- Warbanners are Skill Cards — creature-local delivery
- Technician Level gates Frame slot unlocks squad-wide (gate only, not ownership)

**Grid routing:**
- Technician global route + creature-local routes branching from global route only
- Slot subroutes: belong to the slot, not the creature entity

**Q10 LOCKED:** Automatic ordering — Speed + skill-inherent timing; emergent combos; no manual sequence assignment

---

## Behaviour rules

- One planning question at a time — provide recommended answer
- Do not start game code (P1-01) — Phase 1 still locked
- Do not invent type chart multipliers — Planning Room session required
- OD-004 UI is open — do not treat DOC_v6 as locked spec
- GDD posture: guidelines not contracts; conflicts go to BACKLOG.xml

---

## Critical facts — hold throughout

- 3 creatures on field, Squad of 5 (3 field + 2 bench)
- Motherboard Grid = ONE global tree (Technician) + creature-local subroutes from global only
- No Priority as fixed skill classification
- Turn Program = full round programmed upfront, committed execution, automatic ordering
- Tone is dynamic and biome-dependent — NOT universally dark
- UI design language NOT locked — do not build on DOC_v6 as if final
- 11 damage types, 4 categories; categories are loose; chart is 11×11 Primary vs Primary
- Phantom replaces Shadow in Phenomena; Fortitude scrapped (vocabulary TBD)
- Skill Cards are creature-local; Warbanners are Skill Cards

---

## Key paths

| Path | Role |
|------|------|
| /Users/xenonheat/sites/omniagents-mythoras | This workspace — GDD + harness |
| /Users/xenonheat/sites/omni-agents | ADE runtime (OmniSpace) — upstream, no fork |
| /Users/xenonheat/sites/xploits-mythoras | Stale duplicate — ignore |

Historical instruction, no longer current: the UI grill began from Field Studio. That umbrella identity is retired; continue from `SESSION_DECISIONS_2026-07-15.md`.
```

---

## After this session completes

Update `SESSION_HANDOFF.md` and increment session notes in `AGENT_STATE.xml` before closing.
