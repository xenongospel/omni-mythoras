# MYTHORAS: SHATTERED REALMS

## Comprehensive Game Design Document

---

# Part II: Combat Systems

---

## 3. System Architecture Overview

Mythoras combat operates on a three-tier layered architecture built around: **Channels** (the top-level damage group — two jobs: Attribute scaling navigation on the Grid, and modifier/tag shorthand), **Streams** (what the damage IS — identity, ailments, Signatures), and **Keywords/Tags** (how skills are classified and modified). This system blends Pokémon's creature fantasy with Path of Exile's mechanical depth while accounting for Mythoras's unique team-based tactical grid combat.

### 3.1 The Hierarchy

```
CHANNEL (Damage Group — Attribute scaling navigation + modifier/tag shorthand)
  └── STREAM (Damage Identity — what the damage IS)
        └── KEYWORDS / TAGS (Skill classification, modifier targeting, special interactions)

```

### 3.2 Stream Distribution


| Channel       | Streams                                                           | Count                         |
| ------------- | ----------------------------------------------------------------- | ----------------------------- |
| **Physical**  | Physical (Kinetic), Tectonic                                      | 2                             |
| **Elemental** | Inferno, Glacial, Voltaic, Eldergrove, Blight + Tidal (secondary) | 5 primary + 1 secondary       |
| **Phenomena** | Psionic, Fae, Phantom                                             | 3                             |
| **Total**     |                                                                   | 10 primary + 1 secondary = 11 |


### 3.3 The Player's Questions


| #      | Question                   | Layer      | Answer Space                         | Determines                                          |
| ------ | -------------------------- | ---------- | ------------------------------------ | --------------------------------------------------- |
| **Q1** | What Channel?              | Channel    | Physical / Elemental / Phenomena (3) | Attribute scaling navigation (which side of the Grid); modifier/tag shorthand scope |
| **Q2** | What Stream?               | Stream     | 2 + 5(+1) + 3 = 11                   | Ailment suite, Signature, modifier targeting        |
| **Q3** | Hit or DoT?                | Source     | Hit / DoT / Secondary                | Which defence layers apply                          |
| **Q4** | Attack, Spell, or Command? | Skill Type | 3                                    | Evasion applicability, accuracy, delivery modifiers |


Q1 and Q2 are nested — Channel determines available Streams. Q3 and Q4 are orthogonal.

**Key Q4 note:** Evasion applies to Attack-tagged hits only. Spell-tagged hits bypass Evasion entirely. All other defences (Armour, Barrier, Oura, Phenomena resistance (TBD)) apply to both Attack and Spell hits through the single damage pipeline.

### 3.4 Damage Sources (Q3)


| Category      | Definition                                             | Example                                 |
| ------------- | ------------------------------------------------------ | --------------------------------------- |
| **Hit**       | Instant damage from skill activation                   | Cinder Strike deals 80 Inferno          |
| **Secondary** | Triggered damage from Hit effects (chains, explosions) | Chain Lightning arcs to adjacent target |
| **DoT**       | Damage over time from ailments or persistent effects   | Ignite deals 15 Inferno/turn            |


Modifiers for Hit damage never innately apply to DoT. These are separate scaling vectors.

### 3.5 Skill Type Tags (Q4)


| Tag         | Definition                 | Scaling                                         |
| ----------- | -------------------------- | ----------------------------------------------- |
| **Attack**  | Weapon-based skills        | Weapon damage, Attack Speed, Authority/Invictus |
| **Spell**   | Magical/channelled skills  | Spell Damage, Cast Speed, Animus/Order          |
| **Command** | Technician-sourced effects | Technician investment, not creature attributes  |


### 3.6 Skill Delivery Tags

Delivery is expressed through skill tags rather than a separate Conduit architectural tier. Key delivery tags:


| Tag                   | Effect                                                                           |
| --------------------- | -------------------------------------------------------------------------------- |
| **[Delayed]**         | Skill resolves at end of turn (standard) or after X turns (variable — see §19.1) |
| **[Trap]**            | Placed on tile, triggers on enemy entry, single use                              |
| **[Mine]**            | Placed on tile, manually detonated, stackable                                    |
| **[Hazard]**          | Persistent tile effect, damages on entry, until cleansed                         |
| **[Ward]**            | Persistent defensive zone, Lanes reservation                                     |
| **[Unevadable]**      | Hit bypasses Evasion regardless of skill type                                    |
| **[Pierces Barrier]** | Hit bypasses Barrier pool, strikes Life directly                                 |


Skills may carry multiple tags. [Delayed] skills apply a modified ailment rate (see §9).

### 3.7 General Keywords

**Source:** Attack (Melee, Ranged, Unarmed), Spell (Channelled, Instant), Command.

**General:** Projectile, Area, Single-Target, Multi-Target, Zone-Creating, Zone-Transforming, Movement, Breath, Pulse.

**Origin-Adjacent:** Draconic, Spirit, Feral, Constructed, Spectral, Haunt, Curse, Psychic, Nature, Enchantment, Corruption, Drain, Stealth, Darkness.

---

## 4. Attribute System

### 4.1 Core Attributes


| Attribute     | Colour Gradient               | Identity                                 | Scaling Focus                                     |
| ------------- | ----------------------------- | ---------------------------------------- | ------------------------------------------------- |
| **Authority** | Burgeon Red → Electric Yellow | Strength, raw power, endurance           | Physical damage, weapon skills, primal force      |
| **Invictus**  | Electric Yellow → Magenta     | Precision, speed, lethality              | Weapon precision, burst damage, agile strikes     |
| **Animus**    | Crux Magenta → Jet Blue       | Supernatural mastery                     | Spell effects, ailment magnitude, Oura scaling    |
| **Order**     | Jet Blue → Aura Green/Silver  | Discipline, control, sustained structure | Duration effects, control skills, Barrier scaling |


### 4.2 Attribute Opposition — Forbidden Hybrids


| Forbidden Pair         | Implication                                                        |
| ---------------------- | ------------------------------------------------------------------ |
| **Authority + Animus** | Raw force vs supernatural mastery — rare and costly to combine     |
| **Invictus + Order**   | Speed/precision vs discipline/sustain — rare and costly to combine |


Builds crossing these boundaries require Unique gear or rare Directives. Forbidden Hybrid armament base types exist as Unique-only items (see §5.7).

### 4.3 Attribute × Stream Alignment


| Stream         | Authority | Invictus  | Order     | Animus |
| -------------- | --------- | --------- | --------- | ------ |
| **Physical**   | ★         | ★         |           |        |
| **Tectonic**   | ○         |           | ★         |        |
| **Inferno**    | ★         |           |           | ○      |
| **Glacial**    |           | ★         | ○         |        |
| **Voltaic**    |           | ★         |           | ○      |
| **Eldergrove** | ○         | ○         |           |        |
| **Blight**     |           |           | ○         | ★      |
| **Tidal**      |           | (Glacial) | (Glacial) |        |
| **Psionic**    |           |           | ★         | ○      |
| **Fae**        |           |           | ○         | ★      |
| **Phantom**    |           |           |           | ★      |


★ = Primary alignment. ○ = Secondary alignment.

### 4.4 Attribute-to-Defence Mapping


| Attribute     | Primary Defence | Character                                                              |
| ------------- | --------------- | ---------------------------------------------------------------------- |
| **Authority** | Armour          | Diminishing-returns formula reduces hit size                           |
| **Invictus**  | Evasion         | Dodge chance (Attack hits only) + Buffer band                          |
| **Order**     | Barrier         | Large stable finite absorb pool before Life                            |
| **Animus**    | Oura            | Smaller dynamic pool, dampens variance, 50% draw spendable offensively |


Each defence scales through gear base values, passive Grid nodes, and its associated attribute (Animus contributes minimally to Oura, similar to Intelligence's relationship with Energy Shield). See §5 for full defence specifications.

### 4.5 Volatile Stats Principle

Certain stats — critical strike chance, percentage More damage, and attack speed — are not freely scalable from attributes alone. They have diminishing returns built into their acquisition paths, preventing any one of them from dominating build decisions at high investment. This is a deliberate design constraint that keeps multiple stat axes relevant simultaneously.

---

## 5. Defence System

### 5.1 Single Damage Pipeline

All damage resolves to Life through a single pipeline. No secondary psyche pools, no parallel damage tracks. All Channels and Streams interact with the same defensive layers in sequence.

**Damage pipeline (simplified):**

```
Hit lands → Evasion check (Attack-tagged hits only) 
  → Armour formula 
  → Resistance layers (Elemental Resistance, Phenomena resistance (TBD))
  → Pool defences (Barrier, Oura) 
  → Life

```

DoT damage bypasses Evasion and Armour. It interacts with resistance layers and Life directly.

### 5.2 Armour (mitigates Physical damage)


| Component                                        | Mechanic                                                                                                           | Scaling Source                                      |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------- |
| **Armour Rating**                                | Diminishing-returns formula — more effective against many small hits, less effective against single large spikes   | Authority attribute, gear base values, passive Grid |
| **Physical Ailment Reduction** (derived, capped) | Small reduction to Bleed buildup rate. Hard cap: 15%. Not a solution — Bleed mitigation requires crafting/passives | Derived from Armour investment                      |


Armour applies to Physical stream damage only. It does not reduce Elemental or Phenomena damage. Scaling is via Authority and the Grid — not the Channel label.

### 5.3 Evasion


| Component        | Mechanic                                                                                                                                                                                           | Scaling Source                                     |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| **Dodge Chance** | Logarithmic probability — Attack-tagged hits miss entirely. A hit that would have dealt full damage deals nothing. Logarithmic formula ensures hits land eventually regardless of investment level | Invictus attribute, gear base values, passive Grid |
| **Buffer**       | Near-miss damage reduction. When an Attack roll fails to evade but lands within the near-miss margin, Buffer reduces damage (cap: 40%). The margin scales with Invictus investment                 | Derived from Evasion investment                    |


Evasion applies to Attack-tagged hits only. Spell-tagged hits bypass Evasion entirely — a Spell never triggers a dodge check.

### 5.4 Elemental Resistance (mitigates Elemental damage)


| Component                                         | Mechanic                                                                                                                                  | Scaling Source                                                     |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| **Elemental Resistance (%)**                      | Single resistance stat covering all Elemental stream damage (Inferno, Glacial, Voltaic, Eldergrove, Blight, Tidal). Cap: 60%. Floor: -30% | Gear suffixes, passive Grid, Origins — no primary attribute source |
| **Elemental Ailment Reduction** (derived, capped) | Small reduction to Elemental ailment duration. Hard cap: 15%. Serious ailment management requires crafting/passives                       | Derived                                                            |


Elemental Resistance is the flat percentage mitigation layer for all Elemental stream damage. It has no primary attribute source — it is a gear and Grid investment target. The Channel label "Elemental" is used as modifier shorthand (e.g., "increased Elemental damage"), not as a defence schema label.

**Resistance Progression:**


| Stage          | Elemental Resistance Target                             |
| -------------- | ------------------------------------------------------- |
| Early Campaign | 0–15%                                                   |
| Mid Campaign   | 20–35%                                                  |
| Late Campaign  | 35–50% — first -10% penalty applied at progression gate |
| Endgame        | 45–60% — -20% penalty applied at second gate            |
| Pinnacle       | 60% cap — penetration from enemies matters              |


### 5.5 Phenomena Resistance (concept retained; name and model TBD)


| Component         | Mechanic                                                                                                                 | Scaling Source                     |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- |
| **Phenomena resistance (TBD)** | Provisional mitigation concept for Phenomena damage (Psionic, Fae, Phantom). Exact model, cap, floor, sources, and final name are not locked. | TBD in defensive-layer grill |


The concept of a Phenomena-specific mitigation layer is retained for review, but **Fortitude is a rejected name**. Whether this layer follows the Elemental Resistance model, and its cap, floor, and investment sources, remain TBD.

Ailment management for Phenomena streams remains conceptually separate from Phenomena damage mitigation. Exact mitigation rules are TBD; do not infer that mitigation reduces ailment susceptibility.

### 5.6 Barrier (Order)


| Component        | Mechanic                                                                                                                                                                                                 | Scaling Source                                              |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **Barrier Pool** | Finite absorb pool that takes damage before Life. Any hit size is absorbed until the pool depletes. Pool recharges under specific conditions (not per-turn — conditions are content and build dependent) | Order attribute (minimally), gear base values, passive Grid |


Barrier is the large, stable, reliable hit pool. It is the structured protective layer — discipline creating a wall that absorbs hits until the wall is spent.

More Barrier investment → larger pool ceiling and better recharge conditions.

**Barrier counterplay:** Sustained pressure depletes the pool faster than recharge. DoTs bypass Barrier entirely — they interact with Life directly. [Pierces Barrier] skill tag bypasses the pool on specific skills.

### 5.7 Oura (Animus)


| Component           | Mechanic                                                                                                                                                                                                                         | Scaling Source                                               |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| **Oura Pool**       | Smaller finite absorb pool that operates alongside Barrier but with distinct character. 50% of incoming damage is always drawn from the Oura pool first (where available) — guaranteeing the pool is always active and spendable | Animus attribute (minimally), gear base values, passive Grid |
| **Dampening**       | Oura compresses the variance of incoming hits before the pool absorbs them. A hit that would swing between 80 and 400 damage becomes more predictable before Oura takes it. High Animus investment → wider dampening band        | Scales with Oura pool investment                             |
| **Offensive Spend** | The 50% drawn from Oura is available as a resource for Oura-specific skills and creature effects. Certain Animus-aligned skills and species capabilities consume this drawn pool for offensive or hybrid outputs                 | Skill design, species mod pools                              |


Oura is structurally similar to Barrier in that it scales through gear base values and Grid nodes, but it is numerically smaller — Oura values on gear are lower than equivalent Barrier values at the same slot, and Grid percentage increases for Oura are less efficient than Barrier equivalents.

The dampening compensates: against spikey burst damage, Oura is more efficient than its smaller pool implies, because the hit is compressed before absorption. Against consistent flat damage and DoTs, Oura is weaker (no variance to compress, pool still depletes at normal rate).

More Oura investment → larger pool ceiling, faster generation rate, wider dampening band, more available to spend offensively.

**Oura counterplay:** Flat/consistent damage sources and DoTs bypass dampening entirely. Sustained pressure exhausts the smaller pool more quickly than Barrier. Unlike Barrier, Oura's pool never fully "rests" — its 50% draw guarantee means it is always being consumed and regenerated.

### 5.8 Core Defence Summary


| Defence                  | Attribute        | Applies To                                          | Counterplay                                             |
| ------------------------ | ---------------- | --------------------------------------------------- | ------------------------------------------------------- |
| **Armour**               | Authority        | Physical hits (formula mitigation)                  | Single large hits, penetration                          |
| **Evasion**              | Invictus         | Attack-tagged hits only (avoidance)                 | Sustained accurate pressure, Spell damage, [Unevadable] |
| **Barrier**              | Order            | All hits (absorb pool, large)                       | Sustained pressure, DoTs, [Pierces Barrier]             |
| **Oura**                 | Animus           | All hits (absorb pool, smaller + dampening + spend) | Flat/consistent damage, DoTs, sustained pressure        |
| **Elemental Resistance** | None (gear/Grid) | All Elemental damage (%)                            | Penetration, Blight Corrode (shreds resistance)         |
| **Phenomena resistance (TBD)** | TBD | Provisional Phenomena mitigation concept | TBD |


### 5.9 Armament Base Types


| Base Type       | Defence Combination | Availability                       |
| --------------- | ------------------- | ---------------------------------- |
| Pure Armour     | Authority           | Common                             |
| Pure Evasion    | Invictus            | Common                             |
| Pure Barrier    | Order               | Common                             |
| Pure Oura       | Animus              | Common                             |
| Armour/Evasion  | Authority/Invictus  | Common                             |
| Armour/Barrier  | Authority/Order     | Common                             |
| Armour/Oura     | Authority/Animus    | **Unique only** (Forbidden Hybrid) |
| Evasion/Barrier | Invictus/Order      | **Unique only** (Forbidden Hybrid) |
| Evasion/Oura    | Invictus/Animus     | Common                             |
| Barrier/Oura    | Order/Animus        | Common                             |


Forbidden Hybrid base types (Armour/Oura, Evasion/Barrier) require significant Grid investment or specific Directives in addition to the Unique item to function at peak effectiveness.

### 5.10 Sub-Defences

Accessible through Grid and gear investment, not primary attribute alignment:


| Sub-Defence       | Mechanic                                                                                   | Primary Access                    |
| ----------------- | ------------------------------------------------------------------------------------------ | --------------------------------- |
| **Buffer**        | Part of Evasion — near-miss damage reduction up to 40% cap                                 | Evasion investment                |
| **Retaliation**   | Counter-damage on being hit                                                                | Grid notables, Authority-adjacent |
| **Fortification** | Stacking defensive bonus for not moving consecutive turns                                  | Grid notables, Order-adjacent     |
| **Block**         | Binary avoidance requiring specific gear (Attack Block and Spell Block are separate stats) | Specific gear types               |


### 5.11 Team Composition and Defence

Mythoras does not prescribe team roles. No mandatory tank/healer/DPS trinity. Composition is strategic choice.

**Viable approaches:** Balanced (varied defence profiles, covers more matchups). Aggressive (prioritise offence, kill before defensive gaps are exploited). Defensive bulwark (durable but slow, struggles with DPS checks). Specialist (high ceiling against favourable content, predictable against counter-content).

Content creates defensive pressure, not prescribed roles.

---

## 6. Channels and Streams

### 6.0 Stream Type Identity (Pokémon Transpose)

Mythoras separates **attacker typing** from **defender typing** — the same split as Pokémon species types vs move types:

| Role | Source | Determines |
| ---- | ------ | ---------- |
| **Defender profile** | Creature Primary + Secondary Stream (species + roll) | Innate weaknesses/strengths when receiving damage |
| **Attacker delivery** | Skill Card Stream (and conversion outcome) | What Stream damage is dealt |
| **Alignment bonus** | Skill Stream matches creature Primary/Secondary | Conditional bonuses (STAB removed — see `DOC_v3.md` §9.2) |

**Channel is not a type.** Physical / Elemental / Phenomena are modifier and Grid-navigation groups only. The formal **Stream effectiveness table** (which attacker Streams deal amplified/reduced damage against which defender Stream profiles) is **TBD — requires dedicated grill session**. Do not invent multipliers. See `GRILL_PREP_SKILL_OWNERSHIP_TYPE.md` for chart structure options.

**Attributes** (Authority, Invictus, Animus, Order) are stats — not types. **Origin** is heritage — not a type axis on the chart.

### 6.1 Physical Channel

**Attribute scaling:** Authority (★), Invictus (★) | **Damage mitigated by:** Armour | **Modifier tag scope:** "+% Physical Damage" covers Physical + Tectonic

**Physical (Kinetic):** Baseline physical stream. Force, impact, weapon-based delivery. Signature: 1.0× baseline — no inherent amplification. All other streams amplify from this baseline. Ailments: Bleed, Stagger, Crush.

**Tectonic:** Earth, seismic, grinding pressure. Signature: 1.2× on hits — Tectonic hits carry inherent additional force, particularly on attack-tagged skills. Ailments: Stagger (shared with Physical), Crush (shared), Pressure.

### 6.2 Elemental Channel

**Defence:** Elemental Resistance (60% cap) | **Group Tag:** "+% Elemental Damage" covers all Elemental streams

**Inferno:** Fire, heat, sustained burning. Signature: 1.15× on DoT — Inferno's payoff is the burn, not the hit. Ailments: Ignite, Immolate.

**Glacial:** Ice, frost, control and shattering. Signature: 1.1× on control-tagged effects — Glacial hits carry enhanced control weight. Ailments: Chill → Freeze → Brittle (progression chain — see §9). Shatter mechanic on Brittle kill.

**Tidal** (secondary on Glacial): Water, pressure, forced movement. Signature: inherits Glacial 1.1× control amplification on Tidal-specific control effects. Tidal is a secondary stream — it rides on the Glacial channel position but has its own identity. Ailments: Drenched (Util/Enabler — see §9).

**Voltaic:** Lightning, burst, amplification through chain. Signature: 1.25× on top 25% of damage rolls — Voltaic has the widest damage range of any stream and its Signature rewards the highest rolls disproportionately. Ailments: Shock, Overload, Electrocute.

**Eldergrove:** Nature, growth, toxin accumulation. Signature: 1.15× on Poison stack effects — Eldergrove's power compounds with Poison stacks. A single hit at 1 stack is modest; 10 stacks carries 1.15× amplification on all stack interactions. Ailments: Poison.

**Blight:** Corruption, decay, resistance stripping. Signature: 1.2× on resource and resistance effects — Blight's Signature amplifies its defensive degradation role. Ailments: Poison (shared with Eldergrove), Corrode, Wither.

### 6.3 Phenomena Channel

**Attribute scaling:** Order (★), Animus (★) | **Damage mitigated by:** Phenomena resistance concept (TBD; no locked cap) | **Modifier tag scope:** "+% Phenomena Damage" covers Psionic + Fae + Phantom

**Psionic:** Mental assault, control, reality distortion. Signature: 1.3× on effects targeting mental states — the highest Signature multiplier in the game, reflecting Psionic's narrow but devastating focus. Ailments: Paranoia.

**Fae:** Wild magic, trickery, duration manipulation. Signature: 1.2× on duration-tagged effects — Fae's Signature rewards sustained field presence and extended buff/debuff windows. Ailments: Hallucinate, Paranoia (shared with Psionic and Phantom).

**Phantom:** Ghost, spirit, defence bypass. Signature: 1.25× on drain and Veil-mechanic interactions. Phantom's Veil mechanic (defence bypass from Animus investment) is the primary expression of its Signature. Ailments: Hex, Dread, Paranoia (shared), Hallucinate (shared with Fae).

---

## 7. Ailment System

### 7.1 Categories


| Category         | Character                                                    |
| ---------------- | ------------------------------------------------------------ |
| **Damaging**     | DoT effects — deal damage per turn                           |
| **Impairing**    | Reduce creature capability without preventing action         |
| **Control**      | Prevent or forcibly alter creature actions                   |
| **Detonating**   | Consumed on trigger for a burst effect                       |
| **Util/Enabler** | Not an ailment proper — a state that enables other mechanics |


### 7.2 Ailment Scaling

**Severity** (replaces Magnitude): The power of an ailment splits approximately 50/50 between the triggering damage instance and independent investment (primarily passive Grid, also gear and species mods). This creates three viable build divergences:

- **Pure damage builds:** Strong hit → strong ailment Severity from the hit component. Limited independent investment.
- **Hybrid builds:** Moderate hit + moderate independent Severity investment. Consistent midpoint.
- **Pure ailment builds:** Smaller hit damage, high independent Severity investment. Ailment becomes the primary output regardless of hit size.

**DoT Intensity:** Per-tick damage scaling for DoT ailments. Scales independently from the hit that applied the ailment.

**DoT Virility:** Rate, duration, and spread scaling. Covers application rate (how reliably the ailment applies), duration, and Spread Rate/Propagation (chance and reach of spreading to adjacent targets).

**[Delayed] tag and ailment rate:** Skills with the [Delayed] tag carry a modified ailment application rate. A standard [Delayed] skill applies ailments at 130% of the normal rate — the delayed delivery concentrates the effect.

### 7.3 Complete Ailment Reference

**PHYSICAL CHANNEL**


| Ailment      | Stream(s)          | Category  | Effect                                                                                                                                                                                                                                                                                   |
| ------------ | ------------------ | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Bleed**    | Physical           | Damaging  | DoT scaling with target movement. Stationary targets take reduced Bleed damage. Moving targets take full or amplified damage. Does not stack — higher Severity replaces lower.                                                                                                           |
| **Stagger**  | Physical, Tectonic | Control   | Target loses their next action. Binary lockout window after application — a creature cannot be re-Staggered during the lockout period regardless of how many Stagger sources hit it. Prevents chain-stun without diminishing returns complexity.                                         |
| **Crush**    | Physical, Tectonic | Control   | Heavy CC. Movement lock + high application threshold. Stagger guaranteed on Pressure max-stack trigger (see Pressure).                                                                                                                                                                   |
| **Pressure** | Tectonic           | Impairing | Stacking compression debuff. Max 5 stacks. Each stack: -1 movement range, increased damage taken from Tectonic and Physical sources. Armour Breaking property — Pressure stacks reduce Armour effectiveness. At max 5 stacks: triggers Crush event. Buildup rate scales with investment. |


**ELEMENTAL CHANNEL**


| Ailment         | Stream(s)          | Category       | Effect                                                                                                                                                                                                                                                |
| --------------- | ------------------ | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ignite**      | Inferno            | Damaging       | Fire DoT. Does not stack — higher Severity replaces lower. Can spread to adjacent creatures on kill. Severity scales with the hit that applied it plus independent investment.                                                                        |
| **Immolate**    | Inferno            | Setup/Stacking | Stacking effect. Each Immolate stack increases the Severity of the next Ignite applied to that target. Immolate itself does not deal damage — it amplifies Ignite payoff. Two-step Inferno pattern: stack Immolate → apply Ignite for amplified burn. |
| **Chill**       | Glacial            | Impairing      | Reduces action speed. First stage of the Glacial progression chain. Continues to build toward Freeze with sustained application.                                                                                                                      |
| **Freeze**      | Glacial            | Control        | Target skips next action. Broken by a hit landing. Progresses from Chill buildup — cannot be applied directly without Chill precursor under normal conditions. Frozen targets take +50% Physical and Tectonic damage.                                 |
| **Brittle**     | Glacial            | Detonating     | Final stage of Glacial progression, applied after Freeze. Consumed on the next hit — dealing bonus damage. Shatter on kill: deals Glacial damage to all adjacent tiles. Brittle is the Glacial chain's payoff.                                        |
| **Shock**       | Voltaic            | Damaging       | Target takes increased damage from all sources. Stacks. Each stack adds to the damage amplification.                                                                                                                                                  |
| **Overload**    | Voltaic            | Detonating     | Voltaic hits build Overload stacks on target. At threshold, Overload discharges — dealing burst Voltaic damage to the target AND all adjacent creatures. Rewards sustained Voltaic pressure on a single target with an AoE payoff.                    |
| **Electrocute** | Voltaic            | Control        | Paralyzes target — cannot act for duration. Differentiated from Freeze: persists through hits (Freeze breaks on hit) but has a higher application threshold or shorter duration. Voltaic's durable control option.                                    |
| **Poison**      | Eldergrove, Blight | Damaging       | Stacking DoT with no cap. Each stack adds flat DoT per turn. Permanent until cleansed. Shared between Eldergrove and Blight — enables hybrid builds where one stream stacks Poison and the other amplifies it.                                        |
| **Corrode**     | Blight             | Impairing      | Reduces Elemental Resistance effectiveness. Stacks. Physical damage to Corroded targets bypasses additional Armour as resistance shreds.                                                                                                              |
| **Wither**      | Blight             | Damaging       | DoT that also drains Lanes (Technician resource). Stacks. Each stack drains Lanes per turn, creating pressure on the Technician's ability to maintain Warbanners and other Lanes-reserved effects.                                                    |
| **Drenched**    | Tidal              | Util/Enabler   | Not a true ailment — a state. Voltaic damage +35% on Drenched targets. Freeze threshold -50% (Drenched targets Freeze more easily). Tidal's signature enabler for cross-stream synergies.                                                             |


**PHENOMENA CHANNEL**


| Ailment         | Stream(s)            | Category                 | Effect                                                                                                                                                                                                                                                                                                                            |
| --------------- | -------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Paranoia**    | Psionic, Fae, Phantom | Control                  | Cannot receive ally buffs. 30% chance per turn to attack a random ally instead of the intended target. Does not stack. Shared across three Phenomena streams — cross-stream synergy: a Fae build can apply Paranoia, a Psionic ally can capitalise on the shared application.                                                     |
| **Hallucinate** | Fae, Phantom          | Control                  | Chance to target an incorrect tile on skill use. Stacks. At 5 stacks, evolves to Paranoia. Shared between Fae and Phantom.                                                                                                                                                                                                       |
| **Hex**         | Phantom               | Damaging (Hit-Triggered) | Hexed target takes Phantom Phenomena damage every time it uses a skill. Damage scales with the skill's Lanes/Mana cost — expensive skills trigger larger Hex damage. Punishes action itself. Unique mod extensibility: specific Unique items can alter Hex behaviour significantly.                                                |
| **Dread**       | Phantom               | Control                  | Dreaded target cannot receive ally support (buffs, healing, Guard/Intercept effects). Isolation effect. Base variants: **Flee Dread** (forced movement toward grid edge) and **Hesitation Dread** (probabilistic action loss) — accessible through Unique mods. Unique mod extensibility: Unique items can enable these variants. |


### 7.4 Cross-Stream Ailment Sharing

Several ailments are shared across streams rather than being stream-exclusive. This is a deliberate design pattern enabling cross-stream synergies:

- **Stagger/Crush** shared between Physical and Tectonic — a Tectonic build benefits from Physical CC investment and vice versa
- **Poison** shared between Eldergrove and Blight — hybrid builds stack from one and amplify from the other
- **Paranoia** shared between Psionic, Fae, and Phantom — any Phenomena build can apply it, creating squad-level Phenomena synergies
- **Hallucinate** shared between Fae and Phantom — Fae applies stacks, Phantom can exploit the evolved Paranoia

### 7.5 Ailment Mitigation

Ailment management is a gear and crafting problem, not a resistance problem. Elemental Resistance reduces damage; the provisional Phenomena mitigation concept is also separate from ailment susceptibility. Serious ailment management requires explicit investment:


| Craft / Affix             | Effect                                           | Source                                    |
| ------------------------- | ------------------------------------------------ | ----------------------------------------- |
| Chance to Avoid [Ailment] | X% chance ailment does not apply on trigger      | Gear suffix, passive Grid                 |
| Reduced [Ailment] Effect  | Ailment Severity reduced by X%                   | Gear suffix, Calibration items            |
| [Ailment] Immunity        | Cannot be afflicted — usually Freeze or Stagger  | Directive (costly), specific Unique items |
| Reduced Ailment Duration  | All ailment durations -X%                        | Gear suffix                               |
| Ailment Threshold +X%     | Ailments require X% more buildup before applying | Passive Grid, gear                        |


### 7.6 Brands

Brands are consumable conditions applied to creatures or tiles during combat, consumed when a specific trigger occurs to produce a payoff effect. They are distinct from Ailments (which are applied through hits and persist until cleansed) and from Inscriptions (which are the spell-based parallel to Warbanners — see §20).

Brands sit in their own category: targeted debuffs or designations placed intentionally, consumed on resolution.

Marks (single-target designations) are embedded within the Brands category as a sub-type — a Mark is a Brand applied to a specific creature target rather than a tile.

Full Brand and Mark design is content work — the framework here establishes their category position within the combat system.

---

## 8. Stream Signature System

### 8.1 What Signatures Are

Each Stream has a **Signature** — a passive, always-on characteristic behaviour that shapes how that Stream's output feels and scales. Signatures fire automatically when their conditions are met; they require no build investment to activate and are not gated behind stack thresholds.

Signatures are the "type identity" layer of Mythoras's damage system — the always-present characteristic that makes Voltaic feel different from Inferno even before build decisions are factored in. They embed the Pokémon type-feel at the surface level while the deeper systems (Ailments, Combat Archetypes) provide ARPG-depth expression.

### 8.2 Stream Signature Reference


| Stream         | Signature     | Applies To                              | Character                                                                  |
| -------------- | ------------- | --------------------------------------- | -------------------------------------------------------------------------- |
| **Physical**   | 1.0× baseline | All hits                                | The reference stream — no inherent amplification, maximum flexibility      |
| **Tectonic**   | 1.2×          | All hits                                | Tectonic hits carry additional force — heavier than they appear            |
| **Inferno**    | 1.15×         | DoT                                     | Burn is the Inferno identity — hits are set-up; DoT is the payoff          |
| **Glacial**    | 1.1×          | Control-tagged effects                  | Glacial hits carry enhanced control weight                                 |
| **Tidal**      | 1.1×          | Control-tagged effects (Tidal-specific) | Inherits Glacial's control Signature within Tidal's own framework          |
| **Voltaic**    | 1.25×         | Top 25% of damage rolls                 | Voltaic has the widest swing range — Signature rewards its highest moments |
| **Eldergrove** | 1.15×         | Poison stack interactions               | Compounds with stack count — scales naturally as builds develop            |
| **Blight**     | 1.2×          | Resource/resistance effects             | Amplifies Blight's role as the resistance-stripping setup stream           |
| **Psionic**    | 1.3×          | Mental state effects                    | Narrowest application, highest multiplier — Psionic's precision rewarded   |
| **Fae**        | 1.2×          | Duration-tagged effects                 | Rewards sustained field presence and extended effect windows               |
| **Phantom**    | 1.25×         | Drain and Veil-mechanic interactions    | Phantom's defence-bypass identity amplified                                |


### 8.3 Signatures and Other Systems

Signatures coexist alongside Ailments, Stream Resonance, and Combat Archetypes as distinct layers. They do not compete:

- **Ailments** — what the Stream inflicts
- **Signatures** — how the Stream's output is shaped (always-on)
- **Stream Resonance (Tier 1)** — baseline stacking bonus from repeated same-Stream hits; no investment required; visible to all players
- **Stream Resonance (Tier 2)** — named deep mechanics unlocked through heavy Stream investment on the Grid: Combustion (Inferno), Crystallization (Glacial), Conductance (Voltaic), Symbiosis (Eldergrove), Dominion (Psionic), Tremor (Tectonic), Veil (Fae), Enchantment (Blight), Corrosion (Phantom), Undertow (Tidal), Impact (Physical)
- **Combat Archetypes** — what deep commitment unlocks (threshold-activated, build-invested)

Stream Resonance is a unified two-tier system. The Tier 2 mechanic names are formal — they are the named expressions of deep Stream investment, not distributed notables. Heavy Grid investment in a specific Stream activates its Tier 2 mechanic as a whole, not as fragments scattered across the tree.

---

## 9. Combat Archetype System

### 9.1 What It Is

Combat Archetypes are **emergent build identities** — recognisable combat roles that players build toward through investment across multiple systems simultaneously. They are not named classes or prescribed paths. They are the identifiable playstyle patterns that emerge when **Technician Grid investment** (global route + relevant slot-local subroute), **creature gear**, **creature Skill Cards**, and **species traits** align toward a coherent combat expression.

No archetype is named in-game. Players and the community name them — as PoE players named "Righteous Fire," "Ice Shot," and "Bleed Slam." The game provides the infrastructure; the identities emerge from player construction.

### 9.2 Where Archetypes Live

Archetypes are multi-system — they are not unlocked from a single source but emerge from the intersection of:

**Motherboard Grid:** Regional node clusters support specific combat themes. A melee-damage region contains Attack Speed, weapon damage, reach modifiers, and Bleed effectiveness nodes — none of these nodes say "Martial Artist" but together they form the infrastructure for melee archetypes. Local secondary clusters scattered across the Grid allow partial investment from non-adjacent regions, enabling cross-Grid builds at higher travel cost.

**Specialized Gear Affixes:** Archetype-specific affixes that only function within a relevant combat expression. A "when you Stagger, deal X% of the target's current HP as Physical damage" affix does nothing for a caster — it only matters if the build is investing in Stagger application. These affixes create gear targets specific to an archetype.

**Species Base Implicits and Mod Pools:** Species have natural affinity for certain archetypes through their base stats and mod pool composition. A naturally high-Invictus species with Bleed on crit implicits has genuine affinity for precision bleed archetypes. The same archetype can be built on a different species at greater investment cost — the archetype is species-agnostic but the cost of access varies.

**Pantheon-adjacent Commitment Mechanic:** A personalized commitment system — inspired by the structure of PoE's Pantheon but significantly innovated upon — where Technicians make meaningful archetype-level investments that define long-term identity. Full design of this mechanic is a dedicated session item. The framework here establishes that this system exists and interacts with archetypes as a fourth investment vector.

### 9.3 Stream Flexibility

The same archetype expresses differently through different Streams, creating distinct pockets of power with overlapping investment paths:

**Example — Melee-focused archetypes across Streams:**

A Physical/Authority creature (Lucario-inspired) invested into a melee combat archetype represents one expression — momentum-driven, Attack-tag dominant, Physical ailment payoffs (Bleed or Stagger depending on build focus).

The same creature committed into Glacial Conversion (a Skill Card with melee tag and cold conversion — ice strike style) becomes a different expression of the same archetypal foundation — Physical chassis, Glacial payoff, enabling Chill→Freeze→Brittle chains from melee hits. Grid investment paths cross the Physical and Glacial regions.

A Psionic/Animus creature (Gallade-inspired) built toward the same melee archetype foundation arrives at a third expression — same archetypal identity, Phenomena-infused output, different defensive profile, access to Psionic ailments on hit, different content strengths and weaknesses.

The archetype is consistent across all three. The Stream flavours the payoff, the content matchups, and the defensive implications.

### 9.4 Natural vs Forced Access

Species have natural or forced access to archetypes based on their base traits:

**Natural access:** Species whose base implicits, attribute profile, and mod pool align with an archetype can invest into it efficiently. Lower Grid travel cost, relevant implicits already in place, gear affixes have higher natural weight on loot.

**Forced access:** Any species can brute-force any archetype through sufficient investment — higher Grid travel cost to reach relevant regions, no innate implicit support, archetype-specific gear must be deliberately sought. The result is the same identity at higher opportunity cost.

This mirrors PoE's sandbox — a Strength-based character converting all physical damage to chaos damage is brute-forced but completely viable and creates a genuinely distinct identity with its own content advantages (chaos damage avoids specific resistances and reflected mods, creating different mapping constraints).

### 9.5 Archetype Tiers and Squad Composition

Archetypes unlock at three tiers through the combination of individual investment and squad composition:


| Tier       | Unlock Condition                                                                          | Payoff Character                                                       | When Accessible                 |
| ---------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------- |
| **Tier 1** | Individual Grid/gear investment alone                                                     | Passive archetype-adjacent bonus. Accessible without team coordination | League-start and early campaign |
| **Tier 2** | Individual investment + 2 creatures with natural affinity for the archetype type on squad | More significant bonus, first team-building consideration emerges      | Mid-campaign                    |
| **Tier 3** | Individual investment + 3+ creatures with natural or forced affinity + specialized gear   | High ceiling, content-targeted power, specific synergies               | Endgame                         |


Squad-level unlocks are inspired by TFT's trait threshold system but adapted to Mythoras's deeper build context — individual creature investment gates access before squad composition amplifies it.

### 9.6 Cross-Archetype Synergies

Squads running two distinct archetypes can unlock cross-archetype bonuses that neither archetype enables alone. These are rarer, higher-investment, and specifically powerful against content designed around them.

This creates an additional decision vector beyond "go deep into one archetype" — the player weighs whether cross-archetype investment enables a synergy worth its opportunity cost against the pure ceiling of single-archetype depth.

Some cross-archetype synergies are more investment-demanding than league-start allows, scaling naturally toward endgame relevance.

### 9.7 Content Targeting

Combat Archetypes are meaningful but not mandatory for campaign and general mapping content. Their significance scales with content difficulty:

- **Campaign and general mapping:** Any coherent team handles this content. Archetype investment provides efficiency but is not required.
- **Elite encounters and hard content:** Content designed around specific archetype strengths and weaknesses begins to reward deliberate archetype construction meaningfully.
- **Pinnacle content:** Archetype composition is a significant factor. Bosses and encounters may be specifically vulnerable to certain archetype approaches or specifically counter-aligned against others. This is where the team-building question becomes "what archetype composition handles this content" not "what five strongest creatures."

### 9.8 Relationship to Origins

Origins provide natural archetype access bias — not prescription. A Martial Origin creature has innate affinity for melee archetypes, making relevant Grid nodes cheaper to reach and relevant gear more naturally weighted. Non-Martial Origin creatures can access the same archetypes at greater investment cost.

Origins do not prescribe archetypes. An Arcane Origin creature can invest into a melee archetype — it is simply further from the natural position. The forced-vs-natural distinction creates meaningful species-selection decisions without locking species into single identities.

---

## 10. Damage Modifier Hierarchy

Six tiers from most specific to most generic. Additive within tier, multiplicative between tiers.


| Tier | Type                    | Examples                                                                         |
| ---- | ----------------------- | -------------------------------------------------------------------------------- |
| 1    | Stream/Keyword-specific | "+% Inferno DoT Damage," "+% Bleed Severity"                                     |
| 2    | Category-specific       | "+% DoT Damage," "+% Attack Damage"                                              |
| 3    | Channel-specific        | "+% Elemental Damage," "+% Physical Damage"                                      |
| 4    | Generic Increased       | "+% Damage" (limited — generic Increased nodes are scarce on the Grid)           |
| 5    | More multipliers        | "X% More Damage" (very rare, conditional only — the most powerful modifier tier) |
| 6    | Crit                    | Critical Strike Chance × Critical Strike Multiplier (applied to hit damage)      |


**Pipeline:** Base → Flat additions → Increased% (all additive sources summed) → Stream Signature → More% (multiplicative, rare) → Crit → Damage type mitigation (Armour / Elemental Resistance / Phenomena resistance concept (TBD), based on damage type) → Pool defences (Barrier, Oura) → Life.

**Stream Alignment conditional bonus:** Stream Alignment (creature's Stream identity matching skill Stream) provides conditional bonuses gated behind build requirements — checked between More% and Channel Defence.

**STAB is dead.** Stream Alignment conditional bonuses replace the flat STAB bonus entirely. Alignment bonuses are earned through specific build conditions, not automatic.

**Standard ARPG practice note:** The additive/multiplicative hierarchy is industry-standard, not a Mythoras innovation. Mythoras's innovations live in the vectors where the hierarchy applies — positional modifiers, turn-count scaling, Oura offensive spend, team composition thresholds — not the hierarchy itself.

---

## 11. Conversion System

Damage conversion allows a percentage of one Stream's damage to become another Stream's damage before resolution. Converted damage benefits from modifiers of both the original and final Stream types (double-dipping on relevant modifiers).

**Conversion pathways:**


| From      | To                    | Availability                                               |
| --------- | --------------------- | ---------------------------------------------------------- |
| Physical  | Any Elemental         | Common — conversion gear, skill cards, Grid nodes          |
| Elemental | Elemental (different) | Investment required — specific gear/Grid                   |
| Any       | Phenomena             | Rare/endgame — Phenomena is the terminal conversion target |


**Phenomena is terminal.** Once damage converts to Phenomena, it cannot convert further.

Conversion creates meaningful build identity — a physical creature converting to Glacial accesses Glacial ailments, Glacial Signature, and Glacial Stream Alignment bonuses on what was physical damage, while still benefiting from physical damage modifiers on the pre-conversion portion.

---

## 12. Critical Strike System

**Base critical strike chance:** 5%. **Cap:** 100%. **Base critical strike multiplier:** 150%.

Critical strikes apply to hit damage only. DoT cannot critically strike.

Crit requires accuracy to land. A hit that misses due to accuracy cannot critically strike.

**Scaling:** Flat critical strike chance (rare sources) → Increased critical strike chance (additive) → More critical strike chance (rare) → Critical strike multiplier (additive sources sum).

Cross-reference §4.5 — Volatile Stats Principle applies to critical strike chance. It is not freely scalable from attributes.

---

## 13. Accuracy System


| Skill Type     | Base Accuracy |
| -------------- | ------------- |
| Area of Effect | 100%          |
| Melee          | 90%           |
| Ranged         | 75%           |
| Spell          | 70%           |


**Distance modifiers:** Adjacent (+15%), Medium (no modifier), Long (-20%).

**Near miss:** When an attack roll fails accuracy but lands within the near-miss margin (connected to Evasion's Buffer mechanic), the hit deals 30% damage with no ailment application.

**Voltaic Conductance interaction:** Accuracy investment feeds the Conductance mechanic — more accurate hits extend Voltaic chain reach. Accuracy is therefore a meaningful offensive stat for Voltaic builds beyond its standard defensive purpose.

---

## 14. Threat Attunement

Risk/reward dial scaling from 0% to 150%+. Players increase Threat Attunement before encounters for greater difficulty and proportionally greater rewards.


| Threshold | Effect                                |
| --------- | ------------------------------------- |
| 50%       | Enemies gain ailment immunity         |
| 75%       | Guaranteed Rare enemy variants        |
| 100%      | Boss encounters gain additional phase |
| 125%      | Enemies regenerate HP                 |
| 150%+     | Apex spawns appear                    |


Rewards scale with Threat Attunement — higher Attunement produces better drop quality, more currency, and rarer variant encounters.

---

## 15. Skill Card Structure — Combat Integration

**Scope:** Skill Cards are **creature-local**. Each card is equipped in a specific creature's Skill Frame (see `DOC_v3.md` §10–§11). The Technician does not own a shared skill pool — the Motherboard Grid augments all creatures globally; Skill Cards define what each creature actually executes in combat.

**Skill Card template fields:**


| Field             | Content                                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------------------- |
| Tags              | Attack/Spell/Command + delivery tags ([Delayed], [Trap] etc.) + keyword tags (Projectile, Area etc.) |
| Channel/Stream    | Channel (Physical/Elemental/Phenomena) + specific Stream                                             |
| Cost              | Mana cost (creature) and/or Lanes reservation (Technician)                                           |
| Ailments          | Which ailments this skill can apply and at what base application rate                                |
| Zone creation     | If applicable — zone type, area, duration, drift                                                     |
| Support slots     | Max supports, satellite node configuration (see DOC_v3_new §X — Skill Frame)                         |
| Frequency         | Cooldown or charges                                                                                  |
| Special mechanics | Skill-specific interactions, combo requirements, stream alignment notes                              |


**Example cards:**

*Cinder Strike* — Attack, Physical/Inferno hybrid, Melee, Ranged. Applies Ignite at standard rate. No zone. Physical hit with Inferno DoT payoff — stream conversion example.

*Tidal Surge* — Spell, Elemental/Glacial[Tidal]. Area. Applies Drenched to all targets in area. Zone-creating (Flooded Ground, 3 turns). Primary Tidal enabler skill.

*Mind Fracture* — Spell, Phenomena/Psionic. Single-Target. Applies Paranoia at [Delayed] rate (+30% ailment application). Psionic burst with control payoff.

*Toxic Barrage* — Attack, Elemental/Eldergrove. Ranged, Projectile, Multi-Target. Applies Poison stacks (2 per hit). High projectile count. Eldergrove stack-building skill.

*Veil Strike* — Attack, Phenomena/Phantom. Melee. Phantom Veil defence bypass applies. Applies Hex at standard rate. Melee forced-access Phantom expression.

---

## 16. Turn Program — Battle Model

<!-- Q10 / OD-010 CLOSED: automatic ordering is locked. No manual sequence assignment. Order resolves from Speed + skill-inherent timing + support costs; combos are emergent. See GRILL_HANDOFF.md Q10. -->

### 16.1 Structure

Mythoras tactical combat uses a **Turn Program model** — the player designs the full execution sequence for all active creatures at the start of each round before any actions resolve.

**Planning Phase:** Before any actions execute, the player queues each active creature's skill and target. The full round is planned before the first action fires; execution order is calculated automatically rather than manually assigned.

**Preview:** During Planning Phase, the player sees previews of expected placement effects and anticipated action outcomes against static creatures — a simulation of the move before execution resolves. Not guaranteed (enemies have not yet acted), but informative.

**Execution Phase:** The queued plan plays out. Enemy actions interleave based on their initiative values — a faster enemy may act between player creature actions, creating tension around whether the plan executes cleanly.

### 16.2 Two Action Windows


| Window                | Character                       | Skills                                                                                         | Initiative                                                        |
| --------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Setup Window**      | Utility and preparation actions | Skills with [Setup] tag — barriers, repositioning, Warbanner placement, Inscription deployment | Skill-inherent timing; no manual sequence assignment |
| **Initiative Window** | Attack actions                  | Skills with [Attack] tag — damage skills, control applications                                 | Creature Speed + skill-inherent timing + support costs determine sequence |


Some skills may carry both tags, but their timing behaviour is authored on the skill; the player does not assign a sequence position at cast time.

### 16.3 Initiative Ordering

Initiative ordering is **not a fixed skill property**. There are no High/Normal/Slow Priority tiers stamped on skills. Ordering emerges from:

- **Creature Speed stat** — the primary ordering signal in the Initiative Window. Faster creatures act earlier.
- **Support Card penalties** — supports that add damage or effects can carry Speed penalties as their cost axis. "More damage, acts later" is a deliberate trade-off, not a side effect.
- **Build investment** — Grid passives can raise or lower a creature's effective initiative. Players optimise toward the ordering they want rather than selecting from a fixed priority classification.

This means two creatures of the same species with different support loadouts will act in different Initiative Window positions. There is no label telling the player where their skill fires — they read their Speed stats and build accordingly.

### 16.4 Speed as Support Cost

Unlike PoE where speed supports are near-free value, Mythoras supports that add damage or effects can carry initiative penalties as their cost axis. "More damage, acts later" is a real build decision in initiative-based grid combat. This is one of the primary support trade-off vocabularies alongside Mana multipliers.

### 16.5 Build-Up Moves

A Build-Up move queues a **Charge action** in round N. The payoff skill auto-queues for round N+1 (cancellable if the player chooses, or if specific conditions are met).

The charging creature is vulnerable during its charge turn — it has acted (Charge) but has not yet delivered its payoff. Enemies aware of the charge state may reposition or prioritise the charging creature. This is a meaningful tactical risk the player weighs against the payoff damage.

Build-Up moves are a grid-specific design space — the tension of vulnerability during charge turn does not exist in turn-unaware systems.

### 16.6 Trigger Skills and Flask-Analogue Mechanics — Future Expansion

<!-- FUTURE EXPANSION: Cast-on-Meta / trigger skills / flask-analogue mechanics are NOT campaign baseline. They are reserved as a deliberate expansion layer of Turn Program reactivity. Design and scoping requires its own dedicated session before any implementation.

Concept placeholder: conditional automation baked into programs before battle, not live control (analogous to PoE's CWDT / trigger wand). Example concept: "Cast on [condition]: [secondary skill]" fires automatically when the condition triggers within a creature's action budget. Design questions unresolved: condition vocabulary, interaction with initiative ordering, economy (how many triggers per creature per round), interaction with Q10 (once Q10 is resolved). Do not implement. Do not finalise. -->

Trigger skills and flask-analogue reactive tools are planned for a post-campaign expansion of the Turn Program. Campaign baseline combat uses the committed Planning Phase + Execution Phase model with no in-round reactive automation. See Q2 decision in GRILL_HANDOFF.md.

---

## 17. Spatial Combat and Contextual Stat Design

Mythoras's grid-based tactical combat creates design space unavailable to real-time ARPGs — stats whose value changes depending on skill archetype, target behaviour, and grid state. A stat that is contextually good or bad depending on the skill creates more interesting build decisions than a stat that is always good.

### 17.1 Positional Damage Modifiers

Grid positioning creates its own multiplicative layer — tactical rewards for deliberate placement:


| Modifier       | Effect                                                                     | Sources                                  |
| -------------- | -------------------------------------------------------------------------- | ---------------------------------------- |
| **Flanking**   | +X% damage when attacking from a tile not in the target's facing direction | Grid positioning, passive tree           |
| **Backstrike** | +X% damage when attacking from directly behind                             | Stealth skills, Nocturne Origin affinity |
| **Cornered**   | +X% damage against targets with no adjacent empty tiles                    | Swarm skills, team positioning           |


These modifiers exist purely as tactical rewards. No gear mod grants "+% Flanking Damage" — the modifier is earned through positioning, not purchased through items.

**Height-based movement is not implemented.** Mythoras uses a single height layer for tactical simplicity and readability. Terrain height variation is visual and atmospheric — it does not create movement-based height advantages.

### 17.2 Projectile Behaviour on the Grid

Projectile skills have interacting parameters that create contextual optimization:


| Parameter            | Controls                     | Sources                                    |
| -------------------- | ---------------------------- | ------------------------------------------ |
| **Projectile Speed** | Tiles crossed per turn-phase | Gear mods, Skill Card level, Support Cards |
| **Travel Distance**  | Maximum tiles before fadeout | Skill Card innate                          |
| **Projectile Count** | Projectiles fired per use    | Skill Card innate, Support Cards, gear     |


**Returning projectiles:** Projectile Speed determines whether a returning projectile completes its return before fadeout.

- **Fast Speed + Returning:** More returns succeed; less overlap time with enemies on return path. Best for wide-spread multi-projectile coverage.
- **Slow Speed + Returning:** Fewer returns succeed (fadeout risk); projectiles linger in damage zone longer on both paths. Best for targeted single-enemy damage.

**Landing projectiles (arc/drop type):** Slow speed = tighter cluster landing. Fast speed = wider scatter. Same stat optimises in opposite directions depending on skill type.

### 17.3 Zone-Creating Skills


| Parameter         | Controls                          | Sources                                                |
| ----------------- | --------------------------------- | ------------------------------------------------------ |
| **Zone Area**     | Tiles covered                     | Skill Card level, AoE modifiers                        |
| **Zone Duration** | Turns persisting                  | Skill Card, Duration modifiers, Order attribute        |
| **Zone Drift**    | Tiles moved per turn (0 = static) | Rare: specific skill cards, supports, species notables |


Drifting zones: Slow drift (1 tile/turn) is inescapable for slow creatures, sidestepped by fast ones. Fast drift (2+ tiles/turn) covers more ground but is more predictable.

Max 2 zones per tile. Domain interaction (see DOC_v3_new §18 — Domain System) adds a third overlay type with separate rules.

### 17.4 Chain Mechanics


| Stream         | Chain Behaviour                                                                                                                        |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Voltaic**    | Amplify per chain — each bounce deals more (+15%, +12%, +9%... diminishing amplification). Lightning builds charge as it transfers.    |
| **Glacial**    | Standard decay — each bounce deals less (-20%) but applies stronger Chill per bounce. Last target barely damaged but heavily Chilled.  |
| **Eldergrove** | Decay damage, amplify ailment — damage drops per chain but Poison stacks increase per bounce (+1 stack per bounce).                    |
| **Phantom**    | No decay, no amplification — flat damage to all chain targets.                                                                        |
| **Psionic**    | Conditional amplification — amplifies when chaining to a target with an active Phenomena ailment. Rewards field-setup before chaining. |


### 17.5 Melee Reach and Positioning


| Reach                 | Weapons                  | Contextual Pairing                                                         |
| --------------------- | ------------------------ | -------------------------------------------------------------------------- |
| **1 tile (Adjacent)** | Daggers, Claws, Unarmed  | Glass cannon — maximum damage, relies on Evasion for survival              |
| **2 tiles**           | Swords, Maces, Axes      | Balanced — standard engagement range                                       |
| **3 tiles**           | Spears, Polearms, Staves | Tank-adjacent — lower damage, safer positioning against most melee enemies |


### 17.6 [Delayed] Skills — Variable Delay


| Delay                 | Damage Modifier | Ailment Rate | Tactical Requirement                                                                    |
| --------------------- | --------------- | ------------ | --------------------------------------------------------------------------------------- |
| **1 turn (standard)** | 1.0×            | 130%         | Target must not move off the tile before resolution                                     |
| **2 turns**           | 1.5×            | 150%         | Target has a full extra turn to reposition — rewards prediction                         |
| **3 turns**           | 2.0×            | 180%         | Devastating if it lands — target must be pinned (Freeze, Stagger) for reliable delivery |


### 17.7 Turn-Count Scaling


| Mechanic                  | Effect                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------- |
| **Escalating skills**     | Damage increases X% per turn elapsed — rewards survival and sustained pressure        |
| **Accumulating ailments** | Certain ailments gain stacks automatically each turn — Phantom builds want long fights |
| **Team escalation**       | Squad-wide bonuses trigger at turn thresholds — anti-burst, pro-sustain               |
| **Enemy escalation**      | Boss mechanics that punish long fights — creates tension against turn-count builds    |


Turn-count scaling is the anti-burst archetype. Crit builds end fights in 2-3 turns; turn-count builds want 10+ turns. Both are valid with distinct gear, skill, and creature requirements.

### 17.8 Team Composition Multipliers


| Multiplier                      | Effect                                                                        | Source                                               |
| ------------------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------- |
| **Warbanner range bonuses**     | Creatures within Warbanner radius gain effect — see §19                       | Warbanner deployment                                 |
| **Origin composition**          | Natural affinity bonuses for coordinated Origin groupings — see DOC_v3_new §9 | Species identity                                     |
| **Combat Archetype thresholds** | Squad composition unlocks Archetype tiers — see §9.5                          | Archetype investment + squad depth                   |
| **Positional Synergy**          | Bonuses when specific creature types are adjacent                             | Skill Card tags ([Guard], [Intercept]), passive Grid |


---

## 18. Recovery Architecture

Seven recovery vectors govern how creatures and squads restore Life and resources during and between encounters.


| Vector                        | Character                                                                     | Notes                                                                                         |
| ----------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **Per-turn regen**            | Baseline passive recovery each turn                                           | 2–5% base with build scaling                                                                  |
| **On-hit recovery**           | Life restored on landing hits                                                 | Leech-style, investment-required                                                              |
| **On-kill recovery**          | Life restored on creature faint                                               | Burst recovery, rewards aggressive play                                                       |
| **Delayed damage resolution** | Order's Deferral mechanic — damage resolved gradually rather than immediately | See §5.7 Oura for the pool component                                                          |
| **Recharge**                  | Full or partial recovery after X consecutive turns without taking damage      | "Safe distance" reward                                                                        |
| **Bench recovery**            | Passive recovery while a creature sits in the squad's bench positions         | Mythoras-unique lever — swapping creatures out enables faster recovery than in-combat options |
| **Tonic system**              | Consumable recovery items used during or between encounters                   | Technician-managed, limited charges                                                           |


**Bench recovery** is the primary Mythoras innovation in recovery design — rotating creatures through the bench during a run provides a recovery lever unavailable in single-character ARPGs. Squad composition decisions include recovery rotation, not just combat effectiveness.

---

## 19. Warbanner Combat Integration

Warbanners are persistent field effects generated by carrier creatures. They create localised radius effects on the tactical grid.

### 19.1 Warbanner Variants


| Variant                | Effect Focus                                |
| ---------------------- | ------------------------------------------- |
| **Standard Warbanner** | Generic team-wide enhancement within radius |
| **Banner of Strikes**  | Attack-tagged skill enhancement             |
| **Banner of Volleys**  | Projectile-tagged skill enhancement         |
| **Banner of Arcana**   | Spell-tagged skill enhancement              |
| **Banner of Ward**     | Defensive enhancement within radius         |


### 19.2 Warbanner Mechanics

**Lanes reservation:** Active Warbanners reserve a portion of the Technician's Lanes. The carrier creature's presence on the field maintains the reservation. Removing the carrier creature from the field drops the Warbanner and returns the reserved Lanes.

**Radius:** Localised around the carrier creature. Allies within radius receive the Warbanner's effect — displayed as buff icons on affected creatures. The radius moves with the carrier.

**Stacking:** Multiple Warbanner types can be active simultaneously (from different carriers). Same type from multiple carriers does not stack — highest value applies.

---

## 20. Inscriptions Combat Integration

Inscriptions are the spell-parallel system to Warbanners — a distinct tactical layer oriented toward Spell-tagged skills with different deployment mechanics, duration profiles, and strategic vectors than Warbanners.

Where Warbanners are persistent aura-style effects maintained by carrier creatures, Inscriptions are placed on specific locations or targets with defined durations and interaction patterns.

Inscription variants, specific mechanics, and the full Inscription design are dedicated content work. The framework here establishes Inscriptions as a separate tactical system alongside Warbanners, not a subset of it.

---

## 21. Domain Combat Rules

Domains are deployable terrain effects placed by Psionic-aligned skills (and certain Technician Command skills). They create field zones with sustained effects and strategic implications.

**Deployment:** Domain skills place a Domain zone centered on a target tile. Radius scales with skill level and Dominion mechanic investment (see Psionic Resonance content on the passive Grid).

**Duration:** Domains persist for a defined turn count. Concentration vs Expansion scaling — investment can either deepen the Domain's effect (Concentration) or extend its radius (Expansion) but not both simultaneously.

**Ally + enemy interaction:** Domains affect both allies and enemies within radius — typically providing a benefit to allies and a detriment to enemies, but specific Domains vary. Some Domains have symmetric effects (both sides affected equally — a neutral Zone-Creating Domain) or inverse effects (beneficial to enemies in certain curse-type Domains).

**Stacking with zones:** Domains count as one of the max 2 zone types per tile. A tile with a Domain and a second zone is at maximum zone capacity. A third zone cannot be added without displacing one of the existing types.

---

## 22. Load System Combat Effects

Load is a per-creature fatigue metric that accumulates during zone runs. It creates escalating pressure on creature performance, preventing infinite zone engagement without return to the Hideout.


| Load Threshold | Effect                                                                                              |
| -------------- | --------------------------------------------------------------------------------------------------- |
| 40%            | Minor stat penalties — small reductions to damage and defence                                       |
| 60%            | Moderate stat penalties — meaningful reductions, stream Signature effectiveness reduced             |
| 80%            | Severe stat penalties — significant impairment, certain combat archetype threshold bonuses disabled |


**Visual indicators:** Load state is visible on creature cards in the Active Squad panel and on creature portraits during combat. Colour coded: green (0–39%), yellow (40–59%), orange (60–79%), red (80%+).

**Bench recovery interaction:** Load reduces faster for creatures on the bench than for creatures actively fighting. Squad rotation is the primary Load management tool.

---

## 23. Origin Bloodlines — Framework

Each Origin carries combat-relevant Bloodline effects beyond pure thematic identity. Origin Bloodlines are a set of powerful, thematically-driven effects associated with a creature's Origin — structurally inspired by PoE's Bloodline ascendancy model (PoE 3.27 Saresh Bloodline as a design reference).

**Framework properties:**

- Each Origin has a Bloodline tree — a set of mechanically rich, thematically grounded nodes
- Bloodline effects are not simple damage multipliers — they change how creatures of that Origin fundamentally operate in combat
- Both offensive and defensive Bloodline effects exist
- Some effects apply globally to all creatures of the Origin; others are build-dependent and require specific investment
- Tag-based skill compatibility rules also apply — creature Tags (Wing, Claw, Fang, etc.) affect skill compatibility at the species level in ways that interact with Bloodline investment

**Scope for MVP:** The Bloodlines framework is established here. Specific Bloodline content (10 Origins × multi-node trees) is a dedicated design session.

**The 10 Origins:** Scalesbourne, Martial, Arcane, Nocturne, Construct, Avatar, The Psi, Fae-Touched, Abyssal, Spectral.

---

## 24. Damage Pipeline — Full Worked Example

A complete damage calculation step-by-step, demonstrating how all layers interact.

**Setup:** A Voltaic/Invictus creature uses a Ranged, Attack-tagged Voltaic skill against a target with 20% Elemental Resistance and a Barrier pool of 200.

**Step 1 — Base damage:** Skill base damage range: 80–120. Roll: 105.

**Step 2 — Flat additions:** +15 flat Voltaic damage from gear suffix. Total: 120.

**Step 3 — Increased%:** 60% Increased Voltaic Damage from Grid + 20% Increased Damage generic = 80% total Increased (additive). 120 × 1.80 = 216.

**Step 4 — Stream Signature:** Voltaic Signature (1.25× on top 25% of rolls). Roll of 105 on an 80-120 range: 105 is at 83rd percentile — qualifies. 216 × 1.25 = 270.

**Step 5 — More%:** 1 More multiplier from a Support Card condition (target is Shocked): 20% More. 270 × 1.20 = 324.

**Step 6 — Stream Alignment check:** Creature's Primary Stream is Voltaic, skill is Voltaic — Stream Alignment conditional bonus applies (build condition met). +15% conditional bonus: 324 × 1.15 = 372.6 → 373.

**Step 7 — Crit check:** Critical strike at 150% multiplier (no additional crit investment for this example). Not a crit this hit. Damage stays 373.

**Step 8 — Evasion check (Attack-tagged hit):** Target's Evasion dodge check — fails (hit connects).

**Step 9 — Elemental Resistance:** 20% Elemental Resistance. 373 × (1 - 0.20) = 298.4 → 298.

**Step 10 — Barrier:** Target has 200 Barrier. Hit is 298 — Barrier absorbs 200, remaining 98 goes to Life. Barrier pool: 0 (depleted). Life damage: 98.

**Step 11 — Shock application:** Roll vs application threshold. Shock applies (standard rate). Target now has Shock stacks — next hits deal increased damage.

**Final result:** 98 Life damage, Barrier depleted, Shock applied.

---

## Part II Summary

**Channels (3):** Physical, Elemental, Phenomena — the top-level damage groups. Two jobs: (1) Attribute scaling navigation on the Grid (Physical → Authority/Invictus, Elemental → Animus/Order, Phenomena → unique), (2) modifier/tag shorthand scope ("+% Elemental Damage" covers all Elemental streams).

**Streams (11):** Nested within Channels. Each stream has a Signature (always-on output shaping), an Ailment suite, Stream Resonance (two-tier: Tier 1 baseline stacking, no investment; Tier 2 named deep mechanics via Grid investment), and interaction with the Combat Archetype system.

**Defence Framework:** Four primary attribute-aligned defences (Armour, Evasion, Barrier, Oura) plus Elemental Resistance and a provisional Phenomena mitigation concept whose name/model are TBD. Single damage pipeline. Evasion is the one nominal differentiator between Attack and Spell hits — all other defences apply to both.

**Signature System:** Always-on per-stream characteristic behaviour. The surface-level type identity layer. Distinct from and coexisting with Ailments and Combat Archetypes.

**Ailments (19):** Cross-stream sharing creates synergy opportunities. Severity splits ~50/50 between hit damage and independent investment. DoT Intensity and Virility as separate scaling vectors. Brands as a distinct consumable condition category.

**Combat Archetypes:** Emergent build identities unlocked through multi-system investment (Grid, gear, species, Pantheon-adjacent mechanic). Three tiers — individual investment (Tier 1), squad composition (Tier 2-3). Stream-flexible — same archetype expresses differently through different Streams. Content-targeted — significantly more relevant in hard content beyond general mapping.

**Turn Program:** Planning Phase (all actions and targets committed before execution) + Execution Phase (enemies interleave by initiative). Ordering is automatic from Speed + skill-inherent timing + support costs; there is no manual sequence assignment and combos are emergent. Build-Up moves remain. Trigger skills / flask-analogue mechanics are future expansion, not campaign baseline. See `GRILL_HANDOFF.md` Q10 (OD-010 CLOSED).

**Spatial Combat:** Positional modifiers (flanking, backstrike, cornered). Single height layer — no height-based movement. Projectile behaviour, Zone drift, Chain mechanics by stream, Melee reach profiles, Variable [Delayed] skill timing, Turn-count scaling.

**Recovery:** Seven vectors including Bench Recovery (Mythoras-unique squad rotation lever).

**Supporting Systems:** Warbanners (5 variants, Lanes reservation), Inscriptions (spell-parallel to Warbanners), Domains (Psionic/Command deployable terrain), Load System (fatigue thresholds at 40/60/80%), Origin Bloodlines (framework established, content deferred).

**Conversion:** Physical → Elemental → Phenomena (terminal). Double-dipping on relevant modifiers.

---

**End of Part II: Combat Systems**