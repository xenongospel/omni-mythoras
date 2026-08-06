# Path of Exile — Design Research for Mythoras

*Generated from DOC_v2.md analysis + web research. June 2026.*
*Purpose: Reference document for AI agents and designers working on Mythoras: Shattered Realms.*

---

## Section 1: PoE Systems Map

### 1.1 Damage System

Path of Exile structures all damage around **five damage types**:

| Type | Character | Mitigated By |
|---|---|---|
| **Physical** | Weapon strikes, most early-game content | Armour (formula reduction), Physical Damage Reduction% |
| **Fire** | Burning, molten, explosive | Fire Resistance (cap: 75%) |
| **Cold** | Frost, ice, slowing | Cold Resistance (cap: 75%) |
| **Lightning** | Electrical, arcs, shock | Lightning Resistance (cap: 75%) |
| **Chaos** | Poison, disease, decay, corruption | Chaos Resistance (cap: 75%, often negative on characters) |

The three elemental types (Fire, Cold, Lightning) share a lot of design space — they all cap at 75%, are raised by similar gear mods, and the game penalises characters with negative resistances severely. **Chaos Resistance is intentionally harder to cap** — it is the "late-game premium" resistance.

**The fundamental damage dichotomy is Hit vs DoT:**
- **Hit**: Instant damage from skill activation. Can crit. Subject to conversion. Affected by Armour and Evasion.
- **DoT (Damage over Time)**: Persistent damage per unit of time. Cannot crit. Cannot be converted. Bypasses Evasion. Does not interact with Armour. Affected by its own scaling vectors (DoT Multiplier, Duration).

**Ailments** are the bridge between hits and DoT. Hits **apply ailments**; ailments produce ongoing effects:

| Ailment | Type | Source Damage | Effect |
|---|---|---|---|
| **Ignite** | Damaging | Fire hit | Fire DoT for a duration, scales with hit that caused it |
| **Freeze** | Control | Cold hit | Duration-based full stun, broken by further damage |
| **Chill** | Impairing | Cold hit | Slows action speed by up to 30% |
| **Shock** | Amplifying | Lightning hit | Target takes increased damage (up to 50%) |
| **Bleed** | Damaging | Physical hit | Physical DoT, deals more to moving targets |
| **Poison** | Damaging | Physical or Chaos hit (via ability) | Chaos DoT, stacks |
| **Wither** | Debuff | Chaos (skill/effect) | Increases Chaos damage taken, stacks |
| **Scorch / Brittle / Sap** | Debuff | Fire/Cold/Lightning (Awakened/endgame) | Minor debuffs to resist the damage type |

**Critical distinction:** Ailment magnitude (how strong the DoT is from Ignite/Bleed/Poison) is calculated from the **pre-mitigation hit damage**. This means ailment-focused builds want high hit damage to create powerful ailments, even if the hit itself deals relatively little after resistance.

**Conversion** changes a damage type before resolution:
- "50% of Physical Damage Converted to Fire" — that 50% becomes Fire and is scaled by Fire modifiers, not Physical
- Conversion is two-step: skill-inherent conversion first, then passive/gear conversion applies to the remainder
- Converted damage **loses** its original type — it cannot be double-scaled
- DoT **cannot** be converted

### 1.2 Defences

| Defence | Character | Mitigates |
|---|---|---|
| **Armour** | Percentage reduction formula (DR = Armour / (Armour + 5× Hit)) — highly effective vs small hits, less effective vs large ones | Physical hits only |
| **Evasion** | Probabilistic avoidance — attack has % chance to miss entirely. Logarithmic curve prevents 100% avoidance | Physical/Elemental/Chaos **attack hits** (spell hits bypass evasion entirely) |
| **Energy Shield (ES)** | Finite absorb pool before Life. Recharges fully after 2 seconds without taking damage | All hit types |
| **Block** | Percentage chance to fully negate a hit | Attack hits (Attack Block) / Spell hits (Spell Block) separately |
| **Resistances** | Flat % reduction of respective elemental or chaos damage | Fire/Cold/Lightning/Chaos specifically |

**Attribute–Defence alignment** (PoE 1):
- **Strength (STR)** → Life, Armour
- **Dexterity (DEX)** → Evasion, Attack Speed
- **Intelligence (INT)** → Energy Shield, Mana

### 1.3 Passive Skill Tree

A shared tree with **1325+ nodes** across all 7 classes. All classes use the same tree but start at different **positions** on its circumference.

**Node types:**
| Type | Character |
|---|---|
| **Small nodes** | Minor stat bonuses (+5 Str, +4% Life, etc.) — primarily used as connection paths |
| **Notable nodes** | Named, larger icons, significant thematic bonuses — cluster endpoints |
| **Keystone nodes** | Fundamentally alter gameplay rules. Have a strong benefit and a strong penalty. Examples: Acrobatics (doubled evasion, no armour/ES), Pain Attunement (more spell damage at low life), Eldritch Battery (ES protects Mana) |
| **Masteries** | Unlocked when you allocate a Notable in a cluster; select one bonus from a shared pool for that cluster theme |
| **Jewel Sockets** | Slot-able jewels that add local node effects or transform nearby nodes (Timeless Jewels) |

**Class starting positions** (attribute zones):
- Marauder (STR top), Ranger (DEX bottom-right), Witch (INT top-right)
- Duelist (STR/DEX hybrid), Templar (STR/INT hybrid), Shadow (DEX/INT hybrid)
- Scion (center — all attributes, most flexible)

Classes can "travel" across the tree to reach nodes outside their starting zone at the cost of extra passive points. This is the source of PoE's famous build variety — a Marauder CAN path to Intelligence nodes and run a spell build, but it costs more points than a Witch doing the same.

**Ascendancy classes** are subclass specialisations unlocked by completing the Labyrinth (endgame gauntlet). Each class has 3 Ascendancy options (Scion has 1). Ascendancy trees are small (8-point cap) but contain the most powerful passives in the game — often build-defining.

### 1.4 Atlas / Endgame System

After completing the story campaign, players enter the **Atlas of Worlds** — an infinite procedurally-generated map network.

**Waystones (PoE 2) / Maps (PoE 1):** Consumable items used in the Map Device to open instances of zones. Tier determines monster level. Can be modified with currency for greater rewards at greater risk.

**Atlas Passive Tree:** Separate passive tree earned by completing endgame content. Used to customise which league mechanics appear, how often, and how powerful. Players specialise their Atlas the same way they specialise their character.

**League Mechanics:** Encounters that spawn in maps, inherited from temporary leagues:
- **Breach** — expanding ring of monsters
- **Delirium** — fog that empowers enemies and scales rewards
- **Expedition** — place explosives to reveal ruins and enemies
- **Ritual** — arena of progressively harder waves

**Precursor Towers / Tablets:** Structures that allow players to apply specific modifiers to nearby map nodes — the equivalent of "juicing" an area to guarantee certain encounter types appear.

**Pinnacle Bosses:** Endgame gatekeepers requiring specific keys (collected from farming specific content):
- **PoE 1:** The Shaper, The Elder, Maven, Sirus, Searing Exarch, Eater of Worlds
- **PoE 2:** Arbiter of Ash, Arbiter of Divinity, Breachlords
- Each has multi-phase encounter design, unique mechanics, and exclusive unique item drops
- Killing pinnacle bosses gates Atlas progression (Voidstones that boost all map tiers)

### 1.5 Currency and Crafting System

PoE uses **no gold**. The entire economy runs on stackable **Orb items**, each of which has a specific crafting function:

| Orb | Effect | Spectrum Position |
|---|---|---|
| **Orb of Transmutation** | Normal → Magic (1-2 affixes) | Probabilistic, cheap |
| **Orb of Alchemy** | Normal → Rare (4-6 affixes) | Probabilistic, moderate cost |
| **Chaos Orb** | Reroll all affixes on a Rare item | Probabilistic, moderate cost |
| **Exalted Orb** | Add one random affix to a Rare item | Probabilistic, expensive |
| **Divine Orb** | Re-roll the values (tiers) of existing mods | Semi-deterministic, very expensive |
| **Orb of Annulment** | Remove one random affix | Risky — can destroy good mods |
| **Essences** | Upgrade item guaranteeing one specific affix type | Deterministic anchor point |
| **Fossil crafting** | Bias affix pools toward/away from specific tag categories | Semi-deterministic |
| **Crafting Bench** | Add one crafted mod (fully deterministic, one at a time) | Deterministic, capped |
| **Vaal Orb** | Corrupt an item — random transformation, cannot be modified after | Pure gamble, irreversible |

**Affix anatomy:**
- Items have **prefix slots** (up to 3) and **suffix slots** (up to 3) = max 6 explicit mods
- Each affix has a **tier** (T1 is best) with a **value range** that rolls randomly
- **Implicit** mods exist separately from the prefix/suffix pool

**Crafting complexity:** The community has developed elaborate multi-step crafting sequences, e.g.: Transmute → Alt-spam → Regal → Craft a meta-mod like "Prefixes Cannot Be Changed" (costs Exalted) → Chaos Orb to reroll suffixes while preserving good prefixes → Annul the bad suffix → Exalt the open slot. This "meta-crafting" is highly deterministic in outcome but expensive in currency.

### 1.6 League System

PoE operates on **3-month league cycles**. Each league:
- Is a **fresh economy** — characters and stashes start from zero
- Introduces a **new mechanic** that adds encounters to maps
- Often becomes **permanent** content after the league ends
- Has **challenge lists** (40 per league) with exclusive cosmetic rewards for completing N challenges
- Has **optional difficulty modifiers** (Hardcore mode: death ends the character; Ruthless mode: no trade, no vendor; private league modifiers)

The league system is why PoE's content library is so vast — every 3 months for 12+ years has added a new mechanic. Breach, Delirium, Expedition, Ritual, Sentinel, Betrayal, Harvest, Ultimatum, Kalandra, etc. are all former leagues now integrated into the permanent game.

**Key insight for Mythoras:** Leagues are the "Warbanner inspiration." They are **opt-in difficulty modifiers** layered on top of base content, with proportionally greater rewards.

### 1.7 Path of Exile 2 — Key Changes

PoE 2 is a standalone sequel with the same Atlas/economy foundations but fundamentally different combat design:

| System | PoE 1 | PoE 2 |
|---|---|---|
| **Combat pacing** | Fast, proactive, screen-clearing, reactive only to rare mechanics | Slow, methodical, reactive — dodge-roll required |
| **Skill gems** | Socketed into gear items (links matter for supports) | Separate skill table — gems managed independently |
| **Support gems** | Slotted into linked gear sockets | Attached to skill gems directly, uncoupled from gear |
| **Flasks** | Up to 5 slots, manually activated, powerful recoveries | 2 flask slots + charm system (auto-triggers) |
| **Passive tree** | 1325 nodes, shared tree | Revised tree with Flex Points (swap with weapon sets) |
| **Boss design** | Variable — many are simple DPS races | Souls-like telegraph design, one-life (no revives) |
| **Resistances** | Uniform across all bosses | Extremised — monsters can have huge or zero resist, forcing build adaptation |
| **Attributes** | Str/Dex/Int cleanly map to Life/Evasion/ES | Same framework, more blended implementations |

**PoE 2 design philosophy shift:** PoE 1 is "proactive" — kill before killed, one skill, screen clear. PoE 2 is "reactive" — read telegraphs, dodge, multi-skill toolkit, deliberate. This is a major divergence from the PoE 1 build paradigm.

---

## Section 2: PoE Vocabulary — 38 Key Terms

| Term | Definition |
|---|---|
| **Hit** | Instant damage from a skill activation. Can crit, is affected by conversion, triggers ailments based on magnitude. |
| **DoT** | Damage over Time. Continuous damage not tied to a hit event. Cannot crit, cannot be converted, bypasses Evasion. |
| **Ailment** | A status condition applied to a target, usually via a hit. Ailments can be Damaging (Ignite, Bleed, Poison), Control (Freeze), Impairing (Chill), or Amplifying (Shock). |
| **Ailment Magnitude** | How powerful an ailment is — Ignite size, Bleed severity. Calculated from pre-mitigation hit damage × ailment magnitude modifiers. |
| **Conversion** | Changing the damage type of a hit from one type to another before scaling mods apply. Converted damage loses its original type. DoT cannot be converted. |
| **Gain as Extra** | Adding a percentage of one damage type as additional damage of another type, WITHOUT removing the original. |
| **Resistance** | Percentage reduction of a specific damage type. Capped at 75% normally. Negative resistance amplifies damage taken. |
| **Penetration** | Ignores a portion of the target's resistance for that hit (e.g., Fire Penetration). Does not reduce resistance below 0%. |
| **Armour** | Physical damage mitigation formula (DR = Arm / (Arm + 5× Hit)). More effective vs small repeated hits than single large spikes. |
| **Evasion** | Probabilistic avoidance of attack hits. Logarithmic — can never reach 100%. Bypassed entirely by spell hits. |
| **Energy Shield (ES)** | Absorb pool before Life. Recharges after 2s without taking hits. Scaled by Intelligence. |
| **Life** | The primary health pool. When Life reaches 0, the character dies. |
| **Mana** | Resource spent by skills. Can be reserved by persistent aura skills. |
| **Spirit** (PoE 2) | Separate resource for reserving persistent buffs (analogous to Mana Reservation in PoE 1). |
| **Aura** | A persistent self-cast buff affecting the caster and/or allies in radius. Reserves Mana (PoE 1) or Spirit (PoE 2). |
| **Charges** | Endurance (defensive), Frenzy (offensive speed), Power (crit) — buffs with a maximum stack count. |
| **Flasks** | Consumable items with limited charges, refilled by killing monsters. Provide burst Life/Mana recovery or utility. |
| **Gem** | A skill gem that grants an active skill or a support gem that modifies linked skills. |
| **Link** | Connections between gem sockets in gear that allow supports to affect active skills socketed in the same group. (PoE 1 concept; removed in PoE 2.) |
| **Support Gem** | A gem that modifies an active skill — adding damage, effects, or changing behaviour. Must be linked to the active gem (PoE 1) or directly attached (PoE 2). |
| **Keystone** | A passive node that fundamentally changes a game rule. Always has a meaningful tradeoff. |
| **Notable** | A named, significant passive node. Acts as a cluster milestone and unlocks Masteries. |
| **Mastery** | A selectable bonus within a passive cluster, available after allocating a Notable in that cluster. |
| **Ascendancy** | A subclass providing 8 dedicated powerful passives, unlocked via the Labyrinth endgame gauntlet. |
| **Map** (PoE 1) / **Waystone** (PoE 2) | Consumable item used in the Map Device to open an endgame zone instance. Can be modified to increase difficulty and rewards. |
| **Atlas** | The infinite endgame map network. Progressed through by clearing maps. Has its own passive tree. |
| **Atlas Passive Tree** | A secondary passive tree separate from the character tree. Points earned by completing endgame content. Used to customise which league mechanics appear. |
| **Pinnacle Boss** | The hardest endgame bosses. Require collected keys (map fragments). Multi-phase, unique mechanics, exclusive drops. |
| **League Mechanic** | An encounter type that spawns in maps — Breach, Delirium, Ritual, Expedition, etc. Each originated as a temporary league and was made permanent. |
| **Chaos Orb** | Rerolls all affixes on a Rare item. Primary "probabilistic" crafting currency. Also the de facto trading currency at mid-game. |
| **Exalted Orb** | Adds one random affix to a Rare item with open prefix/suffix slots. Now relatively cheap (post-3.19 PoE 1). |
| **Divine Orb** | Re-rolls the tier values of existing mods. The high-end currency for perfecting items. |
| **Corruption** | Applying a Vaal Orb to an item. Unpredictable transformation, permanently locks the item from further modification. |
| **Implicit** | A mod on an item that exists outside the prefix/suffix slots. Cannot be removed by standard crafting. |
| **Explicit** | A mod added through crafting or rolling. Occupies a prefix or suffix slot. |
| **Item Level (ilvl)** | The level at which an item dropped. Determines which affix tiers can roll on it. High ilvl = access to top-tier mods. |
| **PoB (Path of Building)** | Community tool for planning PoE builds offline. Calculates full DPS, defences, and passive tree. Industry standard for PoE theorycrafting. |
| **poe.ninja** | Economy tracking site. Shows live trade prices, popular builds, and what percentage of players are running specific skills/items. Used to gauge build viability and item values. |

---

## Section 3: Build Depth — What Makes PoE's System "Deep"

### 3.1 Vectors of Customisation

PoE's build depth emerges from the interaction of **five separate but deeply interconnected systems**, each with its own scaling vectors:

**1. Passive Skill Tree**
- 1325+ nodes, all shared, different starting positions
- Hundreds of hours to fully understand optimal pathing
- Regional specialisation (attack, spell, melee, projectile, etc.) but travel is possible
- Keystones can rewrite fundamental mechanics
- Jewels can transform local clusters

**2. Active Skill Gems**
- 100+ distinct active skills
- Each skill has its own "gem level" progression (1-20, or 1-21 with Vaal corruption)
- Support gems modify how skills function — adding chains, adding projectiles, converting damage, changing delivery

**3. Gear and Affixes**
- Hundreds of distinct affix types across item slots
- Each affix has multiple tiers
- The quest for "BiS" (Best in Slot) items drives enormous play time
- Unique items can break rules (e.g., grant immunity to a mechanic, enable otherwise-impossible combinations)
- Forbidden Hybrid Jewels (Forbidden Flame/Flesh) allow taking Ascendancy passives from a different Ascendancy

**4. Ascendancy**
- 20 Ascendancy classes, each with a dramatically different playstyle
- Ascendancy choice is the single biggest single-decision point in build construction
- Some Ascendancies enable builds that are impossible otherwise (e.g., Occultist for ES-based Chaos builds)

**5. The Economy and Trading**
- Players can trade items with each other
- Currency items themselves are tradable
- This creates a "secondary build depth" — optimising for currency acquisition alongside raw power

### 3.2 Why It Feels Deep (Not Just Wide)

**Multiplicative interactions:** PoE uses "more" and "increased" modifiers. "Increased" modifiers add together (100% increased + 50% increased = 150% increased). "More" multipliers are multiplicative with each other and with the "increased" pool. This means a small "20% more" modifier is often better than a large "100% increased" modifier in a build with many "increased" sources. Players must understand this to optimise.

**Emergent build identity:** Builds are not named by the game. "Righteous Fire," "Cyclone Slayer," "Poisonblade Pathfinder" — these names emerged from the community identifying stable, powerful configurations. The game enables them without prescribing them.

**Cross-system dependencies:** A build decision in gear affects what passive nodes are worth taking. An Ascendancy choice constrains which skill gems work well. A keystone changes what gear affixes are valuable. Nothing is siloed.

**The defensive puzzle:** Balancing offensive output against defensive integrity is non-trivial. A build with maximum damage output that dies in one hit in endgame content is useless. Every major build must solve: how do I get high enough Life/ES? How do I cap my resistances? How do I handle Chaos damage? What's my recovery?

**Meaningful scarcity:** Not everything is available simultaneously. Skill points, gem sockets, gear slots, and currency are all finite. Build decisions involve opportunity costs.

### 3.3 Path of Building as Proxy for Depth

PoB exists because PoE's system is **too complex to hold in one's head**. It calculates:
- Average DPS accounting for crit chance, crit multiplier, ailment application rate, uptime of buffs
- Effective HP (Life × (1 / average damage taken per hit considering defences))
- Exact value of each passive node (clicking a node shows the DPS/defensive delta)
- Import codes shared between players for build guides

The fact that PoB is **necessary** for serious play is itself evidence of the build depth — the system rewards players who engage analytically with it.

---

## Section 4: Crafting Design — Probability, Determinism, and the Middle Path

### 4.1 The Spectrum

PoE crafting exists on a spectrum from pure randomness to near-complete determinism:

**Pure Random:**
- Chaos Orb spam — reroll all affixes, hope for the configuration you want
- Orb of Alchemy — gamble a white item into a Rare
- Most players' first exposure to crafting

**Semi-Random with Anchors:**
- **Essences** — guarantee one specific affix while randomising the others. A "Deafening Essence of Hatred" guarantees a max-roll Cold Resistance mod and fills the remaining slots randomly
- **Fossils** — bias the pool toward or away from affix tag categories (e.g., Metallic Fossil blocks "Life" affixes, increasing the weight of physical affixes)

**Highly Deterministic (for experts):**
- **Meta-crafting** — using the Crafting Bench to add a "Prefixes Cannot Be Changed" meta-mod, then Chaos Orbing to reroll only suffixes while protecting good prefixes
- **Harvest crafting** (when available) — explicit "Augment Fire" or "Remove Non-Fire" operations that precisely target specific affix categories
- **Eldritch crafting** — Searing Exarch/Eater of Worlds influence adds exclusive mod pools, allows rerolling prefixes or suffixes separately

### 4.2 What Makes It Compelling

**The Gambling Hook:** Chaos Orb spamming is cheap entry-level excitement. Bad RNG is part of the experience — "the suffering" is meme culture in PoE.

**The Craft as Investment:** High-end deterministic crafting involves committing large currency sums with known expected costs. Crafting a near-perfect weapon via meta-crafting has a calculable expected cost (with variance). This appeals to analytically-minded players.

**Unique Economies:** Currency items are tradeable. A player who finds a Mirror of Kalandra (the rarest currency — duplicates items) has won the item economy. Currency acquisition is a parallel progression axis to character power.

**The Affix Dream:** Every player has a theoretical "perfect item" they're building toward. The gap between current gear and theoretical max creates perpetual motivation.

**Unpredictable Windfalls:** Finding a 6-linked item or a GG rare drop creates extreme peaks of excitement. The base loot system feeds these moments.

### 4.3 The Probability/Determinism Balance

PoE's design success is in **offering both** and letting players choose their depth:
- Casual players Chaos spam and trade for results
- Intermediate players learn to use Essences as anchors
- Expert players execute 15-step deterministic crafting sequences for near-perfect results

This matches different investment levels without gatekeeping either extreme. A new player can make useful gear with cheap probabilistic methods. An experienced player can craft mirror-tier items through mastery of the deterministic systems.

---

## Section 5: Pattern Transfer — How Mythoras Adapts PoE Systems

> **CANON CORRECTION (2026-07-15):** Where this comparison conflicts with `SESSION_DECISIONS_2026-07-15.md`, `CONTEXT.md`, or `GRILL_HANDOFF.md`, those files win. In particular: Phantom replaces Mythoras Shadow; Fortitude is a rejected name; the Grid is one Technician-global route plus five slot-local routes; Resonance is a locked two-tier system; and Six Examiners / competition naming is reopened.

### 5.1 Damage Type System

**PoE:** Physical / Fire / Cold / Lightning / Chaos. Flat single-level hierarchy. Resistances per type. Three Elemental types share a resistance cap model.

**Mythoras:** Three-tier architecture — **Channel → Stream → Keywords**.
- Channels (3): Physical, Elemental, Phenomena — replace the flat type list with a **grouped hierarchy** where defence applies at the Channel level
- Streams (11): The actual damage identity within a Channel — Physical/Tectonic, Inferno/Glacial/Voltaic/Eldergrove/Blight/Tidal, Psionic/Fae/Phantom
- What's kept: Hit vs DoT split, ailments tied to damage types, resistance caps, conversion system
- Historical draft (superseded): Channel was described as a defence-bucket. Current canon uses Category only for Grid navigation and modifier shorthand; defensive grouping remains open.
- What's replaced: Chaos damage (terminal, hard to resist) → **Phenomena Category** (three damage types: Psionic, Fae, Phantom). Its mitigation model and vocabulary are TBD; **Fortitude is rejected** and the old 30% cap is not locked.

**Vocabulary note:** "Stream" in Mythoras = "damage type" in PoE = **Pokémon move type** (attacker). Creature Primary/Secondary Stream = **Pokémon species type** (defender). "Channel" is NOT a type — it is a Grid/modifier group only.

### 5.2 Attribute System

**PoE:** Three attributes — Strength (red), Dexterity (green), Intelligence (blue). Attribute costs on gear enforce build constraints. Hybrid gear/characters exist. Some builds "abuse" attribute requirements or gear to enable cross-attribute combinations.

**Mythoras:** Four attributes — **Authority / Invictus / Animus / Order**. Each maps to a specific defence type. Two **Forbidden Hybrid** pairs (Authority/Animus, Invictus/Order) mirror PoE's friction between its "opposite" attribute zones on the passive tree — except made explicit as gear restrictions (Forbidden Hybrid base types are Unique-only).

| PoE | Mythoras | Defence | Character |
|---|---|---|---|
| Strength | Authority | Armour | Raw force, physical damage |
| Dexterity | Invictus | Evasion | Speed, precision, burst |
| Intelligence | Animus | Oura | Supernatural, spells, ailment magnitude |
| *(no equivalent)* | Order | Barrier | Discipline, control, duration, sustained structure |

**What's kept:** The attribute-to-defence mapping, the "hybrid gear is common, cross-hybrid gear is special" pattern, attribute zones on the passive tree guiding natural pathing.

**What's changed:** Four attributes instead of three. The fourth (Order) creates a new axis for structured/defensive builds with a distinct identity (Barrier pool + duration effects). The Forbidden Hybrid mechanic is **explicit** in Mythoras (Unique-only gear) vs implied in PoE (possible but expensive to maintain attribute requirements across opposing zones).

### 5.3 Passive Skill Tree → Motherboard Grid

**PoE:** 1325-node shared tree, class starting positions, all nodes allocatable if you can path to them. Small/Notable/Keystone/Mastery node types. Ascendancy subclasses.

**Mythoras Motherboard Grid:** Directly inspired by PoE's tree.
- One Technician-global route plus five slot-local routes
- Slot-local routes belong to the slot, not the creature entity; swapping a creature changes which local modifiers it receives
- Same node types implied: small pathing nodes, Notables (named cluster endpoints), Keystones (mechanic-altering), Masteries (selectable cluster bonuses)
- Regional specialisation reflects the Attribute and Stream design — Inferno nodes in the Animus region, Armour nodes in the Authority region, etc.
- "Local secondary clusters scattered across the Grid allow partial investment from non-adjacent regions, enabling cross-Grid builds at higher travel cost" — directly mirrors PoE's cross-region pathing

**Key distinction:** In PoE, one character paths one tree. In Mythoras, the Technician carves one global route and allocates five slot-local routes, creating squad-level allocation without per-creature Grid micromanagement.

**Ascendancy equivalent:** Not yet explicitly named in DOC_v2.md, but the "Pantheon-adjacent Commitment Mechanic" is described as the fourth archetype investment vector, inspired by PoE's Pantheon system.

### 5.4 Stream Resonance → PoE's Ailment/Scaling Vocabulary

**PoE:** Ailment stacking (Poison stacks, Shock magnitude scales, Bleed stacks on simultaneous hits) is a core build vector. "Stack and detonate" (e.g., Brittle + hit, Bleed proliferation) creates layered sequential interactions.

**Mythoras:** Stream Signatures (the always-on characteristic output behaviour) + Ailment system (19 ailments with cross-stream sharing + progression chains like Chill→Freeze→Brittle).

**CORRECTION:** Stream Resonance is a locked unified two-tier system. Tier 1 is baseline repeated-same-damage-type stacking with no investment required. Tier 2 contains named deep mechanics (Impact, Combustion, Crystallization, etc.) activated through heavy Grid investment. It was not distributed away into unrelated notables.

**Key Mythoras innovation:** The **Glacial progression chain** (Chill → Freeze → Brittle → Shatter) mirrors PoE's Chill→Freeze but adds the Brittle detonating stage. This pattern (multiple steps toward a payoff) is deeper than PoE's binary "you are chilled/you are frozen."

### 5.5 Domains and Warbanners → Atlas Modifiers and Leagues

**PoE Atlas:** Before running a map, players add modifiers that increase difficulty and rewards. Tablets, Precursor Towers, Atlas Passive Tree speccing into certain mechanics all layer onto the base map encounter.

**PoE Leagues:** Each 3-month cycle adds a new encounter type as an opt-in modifier. Participating in Breach means more monsters and better rewards at the cost of chaos and danger.

**Mythoras Warbanners (optional difficulty modifiers):** Directly inspired by leagues. Active Warbanners reserve Lanes (Technician resource) and provide field effects that make encounters harder while improving rewards. Multiple Warbanner types stack (different types) with different thematic identities (Strikes, Volleys, Arcana, Ward). The player opts in to difficulty.

**Mythoras Domains (deployable terrain):** Distinct from Warbanners — these are zone encounter modifiers placed by Psionic/Command skills during combat. They affect both allies and enemies within radius. The "Concentration vs Expansion" investment choice (deeper effect vs larger radius) mirrors the Atlas passive tree's specialisation choices.

**Mythoras Threat Attunement:** The pre-encounter risk/reward dial (0–150%+) is the cleaner equivalent of PoE's "juicing" — adding modifiers to a map before entry. Enemies at 50% Threat have ailment immunity; at 100% bosses gain phases; at 150%+ Apex spawns appear. Direct translation of the "more mods = more rewards" pattern.

### 5.6 Forge Terminal → PoE Currency/Crafting

**PoE:** Orb-based economy. No gold. Currency items are both the economic medium and the crafting material. Spectrum from probabilistic (Chaos spam) to deterministic (meta-crafting).

**Mythoras Forge Terminal:** The crafting system (described in DOC references as Economy & Crafting / Phase 4). Not detailed in DOC_v2.md but the affix system mirrors PoE's:
- Prefixes/Suffixes with value ranges
- Gear rarity tiers (Common/Uncommon/Rare/Unique) map directly to PoE's Normal/Magic/Rare/Unique
- Unique items are build-enablers with fixed affixes (some non-standard/rule-breaking)

**Key adaptations:**
- **Unique items as Forbidden Hybrid enablers** — same as PoE Unique items enabling otherwise-impossible combinations
- **Calibration items** (referenced in §7.5 ailment mitigation) as a deterministic crafting layer
- **Directives** — referenced as the cost mechanism for Forbidden Hybrid builds, analogous to meta-crafting costs

### 5.7 Six Examiners → PoE Pinnacle Bosses

> **STALE / REOPENED:** "Six Examiners" and the Examiner/gym-leader competition framing are not locked. The comparison below is retained as historical design reasoning; pinnacle-boss concepts may survive, but count and naming require later decisions.

**PoE Pinnacle Bosses:** Shaper, Elder, Maven, Sirus, Searing Exarch, Eater of Worlds — approximately 6 pinnacle encounters in PoE 1 endgame. Each requires a unique unlock sequence (collecting map fragments). Each has multi-phase encounter design and exclusive drops. Defeating them gates Atlas progression.

**Historical Mythoras draft — Six Examiners:** Proposed direct parallel. Six endgame boss encounters, each:
- Requires a specific unlock path through endgame content
- Has multi-phase encounter design (§9.7 references "Pinnacle content" where Archetype composition matters significantly)
- Has exclusive loot (Unique items, endgame progression tokens)
- Is designed to test specific squad compositions and defensive approaches

**Historical translation:** PoE pinnacle bosses are single-character tests. The stale Six Examiners draft treated them as **squad composition tests** — "what archetype composition handles this content" not "what five strongest creatures."

### 5.8 Conversion System

**PoE:** Physical → Fire/Cold/Lightning/Chaos. Elemental → other elemental. Two-step process. Converted damage loses origin type. DoT cannot convert.

**Mythoras:** Physical → Any Elemental → Phenomena (terminal). Same rules. Same "DoT cannot convert." Phenomena is the terminal tier (analogous to Chaos being the "endpoint" in PoE damage design — hard to resist, final conversion target in many builds).

**Key difference:** Mythoras adds a **three-tier terminal direction** (Physical → Elemental → Phenomena) whereas PoE allows conversion in any direction (though Chaos as terminal is a common design pattern). Mythoras makes the terminal direction architecturally explicit.

---

## Section 6: What Harness Agents Must Know About PoE

This section is written specifically for agents working on Mythoras. Read it as a **disambiguation guide** — where Mythoras vocabulary diverges from PoE vocabulary, you must use Mythoras's terms, not PoE's.

### The 13 Most Important Concepts

**1. "Damage type" in PoE = "Stream" in Mythoras**
When a PoE resource says "Fire damage," the Mythoras equivalent is "Inferno Stream." When a PoE resource says "Lightning damage," the Mythoras equivalent is "Voltaic Stream." Do NOT use PoE damage type names in Mythoras systems.

| PoE Damage Type | Mythoras Stream | Mythoras Channel |
|---|---|---|
| Physical | Physical (Kinetic) | Physical |
| Fire | Inferno | Elemental |
| Cold | Glacial | Elemental |
| Lightning | Voltaic | Elemental |
| Chaos | Blight / Psionic / Phantom (contextual) | Elemental / Phenomena |
| Nature/Poison | Eldergrove / Blight | Elemental |
| Psychic | Psionic | Phenomena |
| Arcane/Magic | Fae / Phantom | Phenomena |
| Earth/Earth | Tectonic | Physical |

**2. "Energy Shield" in PoE = "Barrier" in Mythoras (partially)**
PoE's Energy Shield is an absorb-then-recharge pool tied to Intelligence. Mythoras's Barrier is tied to Order and is larger/more stable. Mythoras's Oura (tied to Animus) is the smaller, volatility-dampening variant. The two systems together cover the conceptual space of Energy Shield but with different mechanical flavour. Neither is called Energy Shield.

**3. "Intelligence" in PoE ≠ "Animus" in Mythoras (exactly)**
PoE's Intelligence → Energy Shield + Mana. Mythoras's Animus → Oura (not Barrier) + Spell Damage + Ailment Magnitude. The attribute alignment is similar but not identical. Order (not Animus) is the primary attribute for Barrier.

**4. "Chaos Resistance" in PoE ≈ a provisional Phenomena mitigation concept in Mythoras**
The structural comparison may remain useful, but Mythoras's model, cap, and vocabulary are not locked. **Fortitude is a rejected name**; do not carry forward the historical 30% cap as canon.

**5. "Passive Skill Tree" in PoE = "Motherboard Grid" in Mythoras**
**CORRECTION (2026-07-07):** The Grid is **Technician-global**, NOT per-creature. One tree benefits all creatures; slot-local subroutes add per-slot modifiers. Skill Cards and Skill Frame are **per-creature**. Do not call it "the passive tree" — always "the Grid" or "the Motherboard Grid."

**6. "Ascendancy" in PoE = Not yet named in Mythoras**
The Pantheon-adjacent Commitment Mechanic in DOC_v2.md §9.2 is the placeholder. It is the "fourth archetype investment vector." It has not been fully designed. Do not assume it works like PoE's Ascendancy without checking current GDD state.

**7. "Evasion" works the same in both games — but only against "Attack" hits**
Both PoE and Mythoras: Evasion applies to Attack-tagged hits. Spell hits bypass Evasion in both systems. This is one of the most direct design transfers.

**8. "Leagues" in PoE = "Warbanners" (partially) + "Threat Attunement" in Mythoras**
Leagues are temporary seasonal content that add opt-in difficulty. Warbanners are the in-combat analogue (persistent field effects that raise difficulty for rewards). Threat Attunement is the pre-encounter risk dial. Neither is called a "league." The seasonal fresh-economy aspect of PoE leagues has no direct Mythoras equivalent (Mythoras is single-player, no economy reset).

**9. "Unique items" work the same way in both games**
PoE Uniques = Mythoras Uniques. Fixed non-standard affixes. Build-enablers. Gate access to otherwise-impossible combinations (Forbidden Hybrids in Mythoras, Forbidden Flame/Flesh jewels in PoE). The Unique item design philosophy is identical.

**10. "More" vs "Increased" multiplier distinction**
This distinction is identical in Mythoras. "Increased%" sources are additive with each other. "More%" sources are multiplicative with everything. This is critical for correct damage calculation and mod design. The Mythoras DOC's "Six-tier damage modifier hierarchy" (§10) explicitly separates these: Tier 4 = Generic Increased (additive pool), Tier 5 = More multipliers (multiplicative, rare, conditional only).

**11. "Ailment Magnitude" in PoE = "Ailment Severity" in Mythoras**
PoE calculates ailment power from hit size × magnitude modifiers. Mythoras calls this "Severity" (§7.2). The 50/50 split in Mythoras (hit component + independent investment) is a Mythoras innovation on PoE's model where ailment magnitude is more tightly tied to hit size.

**12. "Atlas Modifiers / Map Juicing" = "Threat Attunement" + "Domain modifiers" in Mythoras**
In PoE, players add modifiers to maps before entry to increase difficulty and rewards. In Mythoras, Threat Attunement is the pre-encounter version of this. Domains are the in-combat version (affecting tile space during battles). Neither is called a "map mod."

**13. PoE is a single-character ARPG. Mythoras is a multi-creature tactical RPG.**
This is the most fundamental context when applying PoE design patterns. Every PoE system designed for one character must be re-evaluated for Mythoras's squad context:
- The Motherboard Grid has one Technician-global route plus five slot-local routes; it is not per-creature
- Gear slots are per-creature
- Defensive planning must cover multiple creatures
- Historical pinnacle encounter concept tested squad composition, but "Six Examiners" naming/count is reopened
- The Bench Recovery mechanic has no PoE equivalent — rotating creatures out is a Mythoras innovation

### Systems That Look Like PoE But Are Different

| PoE System | What It Looks Like in Mythoras | What's Actually Different |
|---|---|---|
| Armour (flat reduction formula) | Authority → Armour in Mythoras | Same formula philosophy. Applied per-creature, not per-character |
| Flasks | Tonic system (§18) | Tonics are Technician-managed (not per-creature), with limited charges refilled via non-kill mechanics |
| Auras (persistent buffs) | Warbanners + Inscriptions | Warbanners are radius-based carrier effects. Inscriptions are Spell-parallel placements. Neither is a self-cast aura |
| Bleed (deals more to moving targets) | Bleed in Mythoras | Identical — Bleed in Mythoras also scales with target movement. One of the most direct transfers |
| Poison (stacking DoT) | Poison in Mythoras (Eldergrove/Blight) | Identical stacking behaviour. Mythoras adds the two-stream sharing (Eldergrove + Blight both apply Poison) |
| Shock (takes increased damage) | Shock in Mythoras (Voltaic) | Identical amplifying debuff. Mythoras adds Overload (threshold AoE detonation) as a second Voltaic ailment |
| Freeze (full stun) | Freeze in Mythoras (Glacial) | Mythoras adds Brittle as a third stage (detonating) after Freeze |
| Chill (slows action) | Chill in Mythoras (Glacial) | Identical. "Reduces action speed." |

### What PoE Has That Mythoras Does Not (and Why)

| PoE Feature | Why Mythoras Doesn't Have It |
|---|---|
| **Gem linking** (socket colours, links) | Mythoras uses a Skill Card system with explicit Support Card slots — the Link system is replaced with a cleaner, readable interface |
| **Hardcore mode** (permanent death) | Irrelevant for single-player creature-collecting — creatures "faint" rather than die permanently |
| **Trade economy** | Single-player — the economy is player-vs-game currency generation, not player-vs-player trading |
| **Flask management** | Replaced by the Tonic system — Technician-managed resources, not per-creature consumables |
| **Dodge Roll** (PoE 2) | Replaced by the tactical grid — spatial positioning decisions replace real-time dodge inputs |
| **Seasonal leagues** | Single-player and persistent — no seasonal economy reset. Warbanner opt-in difficulty is the relevant pattern |
| **Chaos Resistance negative starts** | Mythoras Phenomena mitigation model is TBD; the rejected Fortitude name and historical 30% cap are not canon |

---

## Appendix: Local Reference Material

### `/Users/xenonheat/sites/poe2-wealth/`
This is a self-hosted PoE 2 stash wealth tracker (`poe2_wealth.py`). It uses unofficial website endpoints (same ones the official site uses when browsing your stash) to fetch stash tab data and price items via poe2scout's public API. It generates a `report.html` wealth summary. Relevant to Mythoras only as context for how PoE's item economy is structured — the tool exists because GGG's OAuth stash API is PoE 1-only; PoE 2 still uses undocumented endpoints for external tools.

### `DOC_v2.md`
The primary Mythoras Combat Systems document. Contains the full Channel/Stream architecture (§3–6), Attribute system (§4), Defence framework (§5), Ailment system (§7), Signatures (§8), Combat Archetypes (§9), Damage modifier hierarchy (§10), Conversion system (§11), Crit (§12), Accuracy (§13), Threat Attunement (§14), Skill Card structure (§15), Turn Program battle model (§16), Spatial combat (§17), Recovery architecture (§18), Warbanner integration (§19), Inscriptions (§20), Domains (§21), Load System (§22), Origin Bloodlines framework (§23), and a full worked damage calculation (§24).

---

*This document should be updated whenever PoE releases major patches that change the referenced systems, or when Mythoras GDD documents revise the systems described in Section 5.*
