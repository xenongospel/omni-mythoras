# Grill Prep — Skill Card Ownership & Pokémon Type Transpose

> **HISTORICAL PREP / SUPERSEDED IN PART (2026-07-15):** Ownership decisions are locked, Phantom replaces Shadow, Fortitude is rejected, and Party now means multiplayer Technicians. Open questions below must be checked against `SESSION_DECISIONS_2026-07-15.md` and `GRILL_HANDOFF.md`.

> **Workspace:** `/Users/xenonheat/sites/omniagents-mythoras`  
> **Created:** 2026-07-07  
> **Purpose:** Research output + agenda for the next grill session.  
> **Subagent note:** Sonnet subagents hit API limits; this report was completed via direct GDD audit.

---

## Executive Summary

Two unintentional confusions run through the GDD:

1. **Ownership scope** — Docs sometimes read as if the Technician (or squad abstractly) owns combat skills. **Canonical model:** Skill Cards, Skill Frame, Support links, Breakthrough, and creature Mana are **creature-local**. The Technician owns the Motherboard Grid (global route), Command Deck, Lanes, and Warbanner/Inscription deployment.

2. **Type system transpose** — The Pokémon attacker/defender split is **mostly correct in locked grill decisions** but **poorly surfaced in prose**. Streams are the type analog; Channels are **not** types; Attributes are stats-not-types. The formal type chart is still missing, and several passages conflate Channel, element, Domain, and Stream.

---

## Part A — Skill Card Ownership (Creature-Local)

### A.1 Canonical ownership model

```
TECHNICIAN (global)
├── Motherboard Grid — Global Route (all creatures)
├── Motherboard Grid — 5 Slot-Local Subroutes (per squad slot, not per creature entity)
├── Command Deck (supplementary tactical cards)
├── Lanes + Command Charges (Technician combat resources)
├── Warbanners / Inscriptions (field-wide, carrier-maintained)
└── Technician Level (gates Frame slot unlocks squad-wide — gate only, not ownership)

CREATURE (local per instance)
├── Skill Frame (species topology, per creature)
├── Skill Cards (equipped in Frame anchor nodes)
├── Support Cards (linked to a specific Skill Card cluster)
├── Breakthrough (one signature skill per creature)
├── Gear (per creature)
├── Species identity (Primary/Secondary Stream, Origin, mods)
├── Creature Mana (gates that creature's skill usage)
└── Creature Level

SQUAD (composition)
├── Roster of 5 creatures (3 Field + 2 Bench)
├── Slot assignment (which creature occupies which slot)
├── Archetype thresholds (cross-creature)
└── Resistance coverage (hybrid squad profile)
```

### A.2 What is already correct

| Location | Correct statement |
|----------|-------------------|
| `DOC_v3.md` §10 opening | "Creatures have no intrinsic abilities — all combat capability comes from equipped Skill Cards" |
| `DOC_v3.md` §11 | Skill Frame is "creature-side"; "replaces the earlier Technician-side slot/linking system" |
| `DOC_v3.md` §14.1 vs §14.2 | Mana = creature; Lanes = Technician |
| `DOC_v3.md` §13 | Command Deck = supplementary Technician tool, not primary damage |
| `CONTEXT.md` #2 | Grid is global to Technician |

### A.3 Confusion inventory (ranked by severity)

| # | Severity | Issue | Evidence | Fix |
|---|----------|-------|----------|-----|
| 1 | **Critical** | "Creature's Grid investment" | `DOC_v2.md` §9.1 — "creature's Grid investment, gear affixes, skill cards" | Grid is Technician-global. Rewrite: "Technician Grid investment benefiting the creature, creature gear, creature Skill Cards…" |
| 2 | **Critical** | PoE single-avatar transplant | `POE_RESEARCH.md` L446 — "Same structure, per-creature instead of per-character" for Grid | **Wrong.** Grid is per-Technician, not per-creature. Archive or correct. |
| 3 | **High** | Technician gates Frame ≠ Technician owns skills | `DOC_v3.md` §11 — "Technician level gates Frame progression globally" | Clarify: Technician Level is a **squad-wide unlock gate** on creature Frame capacity, not skill ownership |
| 4 | **High** | Command Deck "enhancing creature actions" blur | `DOC_v3.md` §13 Assert type | Risk of reading Command cards as creature Skill Cards. Clarify: Commands modify/buff; they are not Skill Card equivalents |
| 5 | **Medium** | Grid Mastery examples use "Skill Cards" without creature scope | `DOC_v3.md` §8.4 Masteries | Examples are fine mechanically but should say "creature's equipped Skill Card" where relevant |
| 6 | **Medium** | `DOC_v2.md` §15 title only | "Skill Card Structure — Combat Integration" | Add explicit scope line: Skill Cards are creature-local; this section describes card anatomy in combat, not Technician ownership |
| 7 | **Low** | Stale cross-refs `DOC_v3_new` | Multiple files | Rename to `DOC_v3.md` |

### A.4 PoE/ARPG transplant errors

| PoE pattern | Wrong Mythoras reading | Correct Mythoras mapping |
|-------------|------------------------|-------------------------|
| 6-link on character body armour | Technician links skills | Skill Frame per **creature** (anchor + satellites) |
| Passive tree on character | Per-creature Grid | **One** Technician Grid + slot subroutes |
| Gem in socket | Skill in squad loadout | Skill Card in **that creature's** Frame slot |
| Aura reservation on character | Warbanner on creature skill | Warbanner on **carrier creature**; Lanes reserved by **Technician** |
| Support gems on character gear | Supports on Technician | Support Cards on **creature's** Skill Frame satellites |

### A.5 Track A — Grill questions (Skill ownership)

1. **Inventory model:** Are Skill Cards physical items in Backpack, then installed per creature? Or creature-bound once assigned?
2. **Duplication:** Can two creatures equip the same Skill Card item simultaneously, or one card → one creature?
3. **Frame revelation:** When Frame slots unlock via Technician Level, does every creature get +1 slot, or only creatures in active roster?
4. **Breakthrough binding:** Breakthrough is per creature per skill — if Skill Card is swapped to another creature, does Breakthrough progress travel with the card or stay on the creature?
5. **Support scope:** Confirm supports are always per-anchor-cluster, never squad-wide (except explicit Technician Commands).
6. **Command Deck vs Skill Card:** Can a Command card ever grant a temporary Skill Card effect, or are these strictly separate pipelines?
7. **Bench creatures:** Do benched creatures retain full Skill Frame configuration but cannot act, or is Frame editing only at Hideout?

### A.6 Expected Track A outputs

- Locked **Ownership & Scope** vocabulary in `CONTEXT.md` (done in this pass — confirm in grill)
- One-line scope headers in `DOC_v2.md` §15 and `DOC_v3.md` §10–§11
- `POE_RESEARCH.md` correction note on Grid ownership
- Optional: `DOC_v3.md` §9.1 build identity row — reorder to list creature-local systems before Grid

---

## Part B — Pokémon Type Transpose (Stream / Channel / Skill Card)

### B.1 Mapping table

| Pokémon concept | Mythoras equivalent | Quality | Notes |
|-----------------|---------------------|---------|-------|
| Species type(s) | **Primary + Secondary Stream** (defender profile) | ✅ Good | Fixed Primary per species; Secondary rolled |
| Move type | **Skill Card Stream** (attacker delivery) | ✅ Good | Any Stream card on any creature (Q8) |
| STAB (1.5× same type) | **Stream Alignment** conditional bonuses | ✅ Improved | STAB killed; +8% modest base + gated conditions |
| Type chart (attack vs defend) | **Stream effectiveness table** | ❌ Missing | Q6 locked conceptually; no multipliers |
| Stats (HP/Atk/Def/SpA/SpD/Spe) | **Attributes + creature stats + gear** | ✅ Partial | Authority/Invictus/Animus/Order ≠ types |
| Type immunity (0×) | Not decided | ⚠️ TBD | Grill must choose soft curves vs hard immunities |
| Dual typing | Primary + Secondary Stream | ✅ Good | Richer than single-type Pokémon |
| Tertiary identity | **Origin** (heritage) | ✅ Good | Separate from Stream — gear/tags/Bloodlines |
| Species ability | Species Mod implicits + Signature access rules | ✅ Partial | Mythic/Legendary have authored mechanics |
| TM/HM move teaching | Skill Card acquisition + Frame install | ✅ Good | No natural moves |
| Super-effective text | "Type advantage" references without math | ⚠️ Incomplete | `DOC_v4.md` arena copy mentions without chart |

### B.2 What is NOT a Pokémon type (common confusions)

| Term | What people think | What it actually is |
|------|-------------------|---------------------|
| **Channel** | Element / type (Physical, Elemental, Phenomena) | Damage **group** for Grid navigation + modifier shorthand only — **not** attacker or defender type |
| **Attribute** | Type | Stat identity (Authority, Invictus, Animus, Order) — scales gear/defence/skills, separate from Stream |
| **Domain** | Type OR terrain | **Collision:** elemental alignment placeholder AND Psionic deployable terrain (OD-007) |
| **Origin** | Type | Heritage/archetype tag — affects gear/tags/Bloodlines, not the Stream chart directly |
| **Signature** | Type bonus | Always-on behaviour of the **Stream on the skill** — not a creature type trait |
| **Tag** ([Attack], [Melee], etc.) | Type | Skill classification for modifiers/Evasion/initiative — orthogonal to Stream |
| **"Element"** (prose) | Stream | Legacy/fantasy language — Protocol register prefers Stream/Channel |

### B.3 Attacker vs Defender — consistency check

**Locked model (Q6, Q8):**

- **Defender:** Creature species **Primary + Secondary Stream** profile (+ build-earned resistance investment)
- **Attacker:** **Skill Card Stream** (and conversion outcomes) determine what damage is dealt
- **Off-stream play:** Viable — no penalty, only forfeits Alignment bonuses

**Where docs break the split:**

| Location | Problem |
|----------|---------|
| `DOC_v3.md` §9.2 Layer 1 | "Full Stream Signature applies" on Primary match — ambiguous: Signature follows **skill's Stream**, not creature's. Alignment should gate **bonus access**, not redefine which Signature fires |
| `DOC_v2.md` §8.1 | "type identity layer" for Signatures — correct for **Stream**, but readers conflate with creature species type |
| `DOC_v3.md` Origin **Avatar** | "Pure elemental incarnations" — uses element language; clarify Stream-primary species, not Element Channel |
| `DOC_v4.md` §regions | "dominant damage type" for regions — should say Stream exposure or Channel emphasis |
| `POE_RESEARCH.md` §mapping | "Stream = damage type" — correct for PoE bridge; add explicit "Stream = Pokémon type analog, Channel ≠ type" |

### B.4 PoE vs Pokémon — dual metaphor tension

Mythoras deliberately uses **both**:

| Layer | Primary metaphor | Role |
|-------|------------------|------|
| Damage math pipeline | PoE | Flat → Increased → More → mitigation |
| Creature identity & matchup | Pokémon | Species Stream profile vs skill Stream |
| Passive investment | PoE (FFX Sphere) | Technician-global Grid |
| Skill expression | PoE gems + MTG modality | Creature-local Skill Cards + Supports |
| Squad composition | Pokémon doubles + TFT | 3 field, archetype thresholds |

**Docs go wrong when PoE vocabulary overwrites Pokémon semantics** — e.g. calling Channels "damage types," or implying one character's gem setup.

### B.5 Type chart — grill prerequisites

Before writing multipliers, the session must decide:

1. **Matrix scope:** 11×11 Stream vs Stream? Or Primary-only defender column with Secondary as modifier?
2. **Tier count:** Neutral / Resisted / Weak / Strong / Immune (Pokémon 0.5×/2×) vs softer bands (0.85 / 1.15 / 1.35)
3. **Physical baseline:** Is Physical always neutral on defence chart?
4. **Phenomena rules:** Separate provisional Phenomena mitigation (name/model TBD) from chart interactions — Psionic/Fae/Phantom same rules or split?
5. **Build-earned layer (Q6):** Grid/gear amplifying offense against types weak to your invested Stream — separate from species defender chart?
6. **Origin interaction:** Does Origin modify chart entry (e.g. Scalesbourne + Inferno) or only gear/tags?
7. **Dual-type resolution:** Primary + Secondary defender — additive, multiplicative, or "best of two" like Pokémon?
8. **Immunity policy:** Hard 0× immunities or floor at 0.25× for readability?

### B.6 Proposed chart structure options (for grill)

**Option A — Pokémon-like (readable):** 11 Streams, 3 tiers (0.75 / 1.0 / 1.25), no 0× immunities, Physical neutral axis.

**Option B — PoE-like (soft):** Continuous resistance + penetration; species Stream profile grants ±15% innate; chart is bias not hard counter.

**Option C — Hybrid (recommended starting point):** Species Primary/Secondary sets **defender bias**; Skill Card Stream sets **attacker delivery**; formal 11×11 table with 4 tiers (0.5 / 0.75 / 1.0 / 1.25); build investment adds **offensive affinity** (+X% vs Streams weak to your primary invested Stream) as a separate Grid layer.

### B.7 Track B — Grill questions (Type system)

1. Confirm: **Stream is the only type axis** for combat effectiveness — Channel is never in the chart.
2. Signature: always follows **skill Stream** at full potency; Alignment only adds conditional bonuses?
3. Secondary Stream on defender: half weight? quarter weight? full second column?
4. Accept 0× immunities anywhere, or design rule against them?
5. Cross-Stream ailments (Poison via Physical or Eldergrove) — does chart affect application or only damage?
6. Rename "element" in Origin/prose to Stream where it implies typing?
7. OD-007 Domain collision — resolve before chart (alignment vs terrain)?

### B.8 Expected Track B outputs

- Formal **Stream Effectiveness Table** stub with chosen tier structure (numbers or TBD cells)
- `DOC_v2.md` new §6.0 or §6a — "Stream Type Effectiveness (Attacker vs Defender)"
- `CONTEXT.md` Type System Mapping section (vocabulary)
- Update `GRILL_HANDOFF.md` parked item with resolved structure
- Close or narrow BL-026 scope

---

## Part C — Cross-layer interaction rules

When a creature in **Slot 2** acts with an **Inferno Skill Card**:

1. **Skill Card** provides attacker Stream (Inferno), tags, base damage, ailments
2. **Skill Frame** determines support links and Polarity on that card
3. **Creature** provides Primary/Secondary Stream for Alignment check vs skill Stream
4. **Species mods + gear** on that creature provide flat/Increased/More
5. **Slot 2 subroute** applies slot-local modifiers to whoever occupies slot 2
6. **Technician Global Route** applies to all creatures (e.g. +% Inferno Increased)
7. **Target defender** uses species Primary/Secondary Stream profile vs incoming Stream (chart TBD)
8. **Turn Program** orders action by Speed + support penalties (Q10 locked: automatic)

---

## Part D — Grill session agenda

### Session: Skill Ownership + Type Chart (est. 75–90 min)

| Block | Duration | Track | Output |
|-------|----------|-------|--------|
| Ownership recap | 10 min | A | Confirm canonical model diagram |
| Ownership decisions | 20 min | A | Q1–Q7 above → locked answers |
| Type mapping recap | 10 min | B | Confirm Stream=type, Channel≠type |
| Chart structure | 25 min | B | Option A/B/C → pick hybrid starting point |
| Chart scope | 15 min | B | Matrix size, tiers, immunity policy |
| Doc integration | 10 min | Both | Assign amendments to CONTEXT, DOC_v2, DOC_v3 |

**One question at a time** per harness rules. Recommended order: Ownership Q1 (inventory model) → Type Q1 (Stream-only chart) → chart tiers → immunities.

---

## Part E — File update checklist

| File | Action | Status |
|------|--------|--------|
| `GRILL_PREP_SKILL_OWNERSHIP_TYPE.md` | Create (this file) | ✅ |
| `CONTEXT.md` | Add corrections #9–#10, Ownership table, Type mapping, close OD-010/Q10 | ✅ this pass |
| `GRILL_HANDOFF.md` | Add grill session reference + Track A/B summary | ✅ this pass |
| `BACKLOG.xml` | BL-027, BL-028; update BL-026 refs | ✅ this pass |
| `DOC_v2.md` | Fix §9.1 Grid wording; §15 scope note; §6 type framing stub | ✅ this pass |
| `DOC_v3.md` | §9.2 Signature clarity; §10–§11 scope; creature Branches fix | ✅ this pass |
| `POE_RESEARCH.md` | Stale Grid-per-creature warning | ✅ this pass |
| `SESSION_HANDOFF.md` | Next grill pointer | ✅ this pass |

---

*End of grill prep document.*
