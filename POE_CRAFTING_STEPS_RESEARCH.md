# PoE Crafting Steps Research — Emergent Paths, Weights, Lock/Block

> **Wave 2 companion** to `CRAFTING_FOUNDATION_RETHINK.md` (2026-07-19).
> Goal: explain how Path of Exile enables **unguided, player-authored crafting sequences**, and what Mythoras should steal as *operation shapes* — not orb names.
>
> Sources: `POE_RESEARCH.md` §4; `POE_CURRENCY_ECONOMY_RESEARCH.md` §1–2; community meta-crafting patterns; **3.29 Curse of the Allflame** Chaos bench rerolls + AllFlame ghost-roll (caution via `CURSE_OF_THE_ALLFLAME_ANALYSIS.md`).

---

## 1. Executive Takeaway for Mythoras

PoE does **not** publish a “correct craft.” It publishes:

1. **Atomic verbs** (add / remove / reroll / protect / bias / commit / gamble).
2. **Visible structure** (prefix vs suffix slots, rarity caps, ilvl → tier gates).
3. **Hidden weights** (which mod, which tier — community reverse-engineers).
4. **Composability** (protect *then* disrupt; block *then* slam; essence *then* annul).

Players invent steps because the grammar is stable and the odds are mysterious. Mythoras Agents should do the same: **teach verbs, expose tiers, hide weights** (IDEA-018; plan sold list).

**3.29 Chaos bench signal:** partial rerolls (1-mod and 3-mod remove+add) as *Scramble sinks* that salvage “one god mod, rest trash” — high value for Squad gear load without Unique-on-Rare (Splice cancelled).

**AllFlame ghost-roll signal:** multi-outcome preview is powerful and economy-warping — **caution only**, not MVP foundation (`CURSE_OF_THE_ALLFLAME_ANALYSIS.md`).

---

## 2. Why Community Crafting Steps Emerge

### 2.1 The spectrum (`POE_RESEARCH.md` §4)

| Band | Example | Player experience |
|------|---------|-------------------|
| Pure random | Alchemy, Chaos spam | Cheap lottery; volume play |
| Anchored random | Essences (guarantee one mod), Fossils (bias/block tags) | Semi-intentional; still variance |
| Meta-deterministic | Bench metamods + Chaos/Annul/Exalt sequences | Expensive; calculable EV |
| Irreversible gamble | Vaal / mirror-tier | Identity lock / lottery |

Depth is the **middle path**: players move freely between bands as wealth grows. New players never need meta-crafting; veterans invent 10–20 step pipelines.

### 2.2 Preconditions for unguided authorship

| Precondition | PoE mechanism | Mythoras Agent translation |
|--------------|---------------|----------------------------|
| Stable grammar | Prefix/suffix, rarity, ilvl | Keep rarity + open slots + iLvl tiers (classification grill open) |
| Atomic verbs | Orbs as single ops | Agents as single ops; composed only at hub |
| Asymmetric risk | Annul can brick good mods | Void / Scramble risk creates decision drama |
| Protection tools | “Prefixes cannot be changed,” Fracture | Anchor / Imprint (pattern) — **not** Splice |
| Blocking / biasing | Fossils, Harvest, eldritch | Light DeAgents + Stream materials — not Harvest-complete at MVP |
| Deterministic floor | Bench crafts, vendor recipes | DOC_v5 bench + NEM/Agent vendor sinks |
| Scarcity that still spends | Chaos useful even if never traded | Functional barter §1 — every Agent is a sink |
| Mystery in weights | Undocumented / semi-documented weights | Discoverable shape, mysterious exact odds (IDEA-018) |

Without protection + asymmetric risk, sequences collapse to “spam the strongest orb.” Without floors, sequences become softlocks.

### 2.3 Canonical emergent sequences (community-authored, not tutorial)

These are **patterns**, not prescriptions:

**A. Alt-Regal path (early/mid)**  
Transmute → Alteration spam for 1–2 desired mods on Magic → Regal to Rare → decide: keep / annul / chaos.

**Mythoras rhyme:** Init→Magic Agent → Inscribe/Scramble-on-Magic equivalents → Elevate → decide.

**B. Essence / fossil seed**  
Force one desired mod → fill rest randomly → annul trash → exalt opens.

**Mythoras rhyme:** Stream-weighted Inscribe or material bias → Void → Inscribe; defer full fossil matrix.

**C. Metamod lock (high)**  
Craft “Prefixes Cannot Be Changed” → Chaos to reroll suffixes only → Annul bad suffix → Exalt open → optionally remove metamod.

**Mythoras rhyme:** Anchor/Imprint + Scramble with prefix lock via ReAgent/DeAgent — **MVP-light**; full metamod bench late (DOC_v5 already sketches “Cannot Roll [Type]”).

**D. Fracture island**  
Isolate one T1 → Fracture lock → recraft rest.

**Mythoras caution:** Fracture is pinnacle-dangerous especially after Unique-fragment ideas; Splice cancel exists *because* Fracture+Unique-power is catastrophic (`CRAFTING_FOUNDATION_RETHINK.md` §7).

**E. Salvage near-hit (3.29)**  
Item has 1–2 perfect mods + garbage → Chaos bench reroll 1 or 3 mods → preserve the good without full Chaos.

**Mythoras rhyme:** **high priority MVP/post-MVP Scramble sink** — see §5.

**F. Vaal finish**  
Accept lock; chase corrupt implicits / links / bricks.

**Mythoras rhyme:** Gl!tch on **Skill Cards** (CONTEXT), not gear Vaal-clone fiction.

---

## 3. Mod Weights, Tiers, and Community Longevity

### 3.1 What players actually reverse-engineer

1. **Which mods can appear** on a base (mod pool / tags).
2. **Tier breakpoints** vs item level.
3. **Relative weights** (T1 life vs T1 resist frequency).
4. **Blocked combinations** (cannot roll X with Y; influence exclusives).
5. **Expected cost** of a sequence (spreadsheet culture / craft of exile tools).

Longevity comes from (1)+(2) being **clear enough to reason**, while (3) stays **deep enough to argue about for years**.

### 3.2 Mythoras alignment

| Dial | Prefer |
|------|--------|
| Tier vocabulary | Exposed in UI (T7→T1) — DOC_v5 already |
| Category icons | DOC_v5 partial decrypt already teaches offence/defence/utility |
| Exact weights | Hidden; community tools later |
| Guarantees / floors | Documented (bench, recipes, Network buyouts) |
| Influence-like layers | Defer Domain (DOC_v5 §51) |

**Anti-pattern:** Fate-of-the-Vaal-style opacity on *rules* (adjacency/pathing). Opacity belongs on *rolls*, not on *grammar* (IDEA-018; temple research lessons).

---

## 4. Lock / Block / Protect — the sequence engines

| Tool class | PoE examples | What it enables | Mythoras note |
|------------|--------------|-----------------|---------------|
| **Protect** | Prefixes/Suffixes cannot be changed; Fracture | Reroll the *other* half safely | Anchor Agent; Imprint as pattern-lock (CONTEXT reopen) |
| **Block** | Fossils “more X / no Y”; Harvest remove non-Fire | Narrow pools | Focusing DeAgent; Stream materials — light touch MVP |
| **Commit** | Bench crafted mod occupying a slot | Scaffold then remove | DOC_v5 bench + Remove Crafted |
| **Isolate** | Beast split / Kishara Ducat / Fracture | One mod bases | Dangerous if Unique power; Splice cancelled |
| **Preview** | AllFlame ghost outcomes | Choose among N rolls | Caution — see §6 |
| **Partial disrupt** | 3.29 Chaos bench 1/3 rerolls | Salvage without full chaos | Strong Agent op candidate |

**Design law:** Protection without cost → infinite retries. Isolation of Unique-tier power → chase collapse. Preview without Intangibility-like counter → EV goes to infinity.

---

## 5. Operation Signal — 3.29 Chaos Bench Rerolls

### 5.1 What shipped (reveal-era community summary)

Alongside AllFlame league crafting, the **standard crafting bench** gained Chaos-cost crafts modeled on PoE2 chaos behaviour:

| Craft (community report) | Shape | Role |
|--------------------------|-------|------|
| ~3 Chaos | Remove **three** mods and add **three** | Aggressive salvage / mid sunk cost |
| ~8 Chaos (or higher single-target) | Remove **one** mod and add **one** | Surgical salvage of near-perfect rares |

(Exact costs may shift in patch notes; the **operation shape** is the portable signal.)

**Why it matters:** Chaos spam on a 5/6 good item is psychologically and EV-terrible. Partial rerolls create a **new constructed step**: “protect nothing, but don’t nuke everything.” They also **re-sink** Chaos when full-spam EV is bad — functional barter health (`POE_CURRENCY_ECONOMY_RESEARCH.md` §1).

### 5.2 Mythoras port (recommended)

| Mythoras op | Candidate name | Cost clock | Use |
|-------------|----------------|------------|-----|
| Reroll 1 random explicit | **Shift** already exists (DOC_v5) / bench **Shift Recipe** | Scramble-tier Agents or Scramble×N + CC | Salvage one trash mod |
| Reroll 3 random explicits | **Scramble Fragment** / bench recipe | Multiple Scrambles | Salvage multi-trash without full reset |

**Do:** expose as bench or Advancement Agent so players invent “Shift until the bad suffix dies.”  
**Don’t:** combine with Unique-fragment grafts or easy Fracture — that’s Splice by another door.

---

## 6. AllFlame Ghost-Roll — Caution Only

From reveal coverage + `CURSE_OF_THE_ALLFLAME_ANALYSIS.md`:

- Feed item + currency + league fuel → **multiple ghostly outcomes** → pick one.
- **Intangibility** rises to prevent infinite preview on one base.
- Ducats / Kishara-style splits isolate mods (powerful isolate tool).
- Ghost-roll is **league-identity crafting**, not the base orb grammar.

**Portable idea:** “choose one of N simulated results” is replica-adjacent and thrilling.  
**Pitfall:** as foundation, it flattens variance, inflates EV, and demands a complex counter-resource. Preservation Agent (one snapshot) is enough MVP safety (`DOC_v5` §50.2). Ghost-roll = post-MVP / seasonal fold-in candidate — Wave 3+ / league philosophy — **not** Agent foundation.

---

## 7. How PoE Enables Unguided Paths (checklist for Mythoras)

Steal this checklist; do not steal the orb list.

1. **Verbs are orthogonal** — add ≠ remove ≠ reroll ≠ protect.
2. **State is legible** — open slots, P/S counts, rarity, crafted flags.
3. **Weights are opaque** — community research has a job for years.
4. **Floors exist** — bench / recipes / vendors so SSF never softlocks.
5. **Costs create forks** — spend Chaos on maps vs gear vs trade (two clocks; currency research §2).
6. **No official optimal path UI** — guides are community content (longevity).
7. **New ops add steps without deleting old ones** — 3.29 bench rerolls *extend* Chaos culture.
8. **Irreversible layer is rare and named** — Vaal; Mythoras Gl!tch (Skill Cards) / tempered Compile fail.

**Anti-checklist (kills authorship):**

- Quest that forces a 12-step metamod tutorial as the only way to gear.
- Auto-crafter that executes “optimal” sequences.
- One currency that does everything (add+protect+reroll).
- Unique-power fragments on Rares (Splice).
- Ghost-preview with no counter-resource.

---

## 8. Mapping to Mythoras MVP Agents

| PoE step engine | MVP Agent / system | Notes |
|-----------------|--------------------|-------|
| Identify | Decrypt | Abundant |
| White→Magic / fill | Renamed Init Agent; Elevate; Ascend | Avoid Compile name collision |
| Full reroll | Scramble | Trade-primary candidate |
| Single disrupt | Void / Shift | Sequence fuel |
| Protect | Anchor; late Imprint | Soft Imprint reopen |
| Bias | Weighted Inscribe deferred; Stream materials light | Creature-native |
| Floor | Bench crafts | DOC_v5 §47.4 |
| Partial salvage | 3.29-shaped Shift/Fragment recipes | Prefer over Splice |
| Unique lottery | Exploit (Latent Weight) | Early |
| Unique chase end | Tempered Compile (rename) | Examiner / Unstable gate |
| Corrupt identity | Gl!tch on Skill Cards | CONTEXT lock |
| Preview N outcomes | — | Not MVP |
| Unique fragment → Rare | **Splice** | **Cancelled** |

---

## 9. GDD Cross-Check (companion)

| Cite | Use |
|------|-----|
| `POE_RESEARCH.md` §4 | Spectrum + meta-crafting description |
| `POE_CURRENCY_ECONOMY_RESEARCH.md` §1 | Functional barter / sinks |
| `POE_CURRENCY_ECONOMY_RESEARCH.md` §2 | Crafting clock ≠ map clock |
| `DOC_v5.md` §42–47, §50 | Agent verbs, bench, Preservation/Fracture |
| `CONTEXT.md` Gl!tch / Imprint / Agent | Scope locks |
| `IDEA_LOG.md` IDEA-005 / 018 / 028 | Gamble ladder; legibility; SSF floors |
| `CURSE_OF_THE_ALLFLAME_ANALYSIS.md` | Ghost-roll caution; colour-as-bonus contrast |
| `CRAFTING_FOUNDATION_RETHINK.md` | MVP set; Splice cancel; Agent foundation |

---

## 10. Open Questions (feed Wave 2 grill)

1. Are partial rerolls **bench recipes** (NEM/CC + Scrambles) or **Advancement Agents**?
2. Exact Scramble cost curve for 1-mod vs 3-mod rerolls so they don’t obsolete full Scramble?
3. When (if ever) does metamod-style “cannot change prefixes” appear — campaign or L3 Cipher?
4. Does Preservation’s real-time expiry fight offline/SSF players — prefer op-count-only expiry?
5. Should community weight discovery be aided by in-game “observed frequency” soft telemetry, or stay pure external?

---

*Companion complete. Primary verdicts live in `CRAFTING_FOUNDATION_RETHINK.md`.*
