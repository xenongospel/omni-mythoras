# MYTHORAS: SHATTERED REALMS

## Comprehensive Game Design Document

---

# Part V: Economy & Crafting

---

## 39. Economy Overview

Mythoras uses a multi-layered economy where different currency types serve distinct purposes. NEM handles vendor transactions, Agents power crafting operations, Contracts enable creature capture, and specialized materials fuel endgame progression. No single currency dominates — players engage with different economic layers depending on their current goals.

### 39.1 Currency Hierarchy


| Category                 | Purpose                                                        | Primary Source                                               | Persistence                     |
| ------------------------ | -------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------- |
| **NEM**                  | Universal vendor currency (Neo Energistics Monetary)           | Battle rewards, vendoring, quests                            | Permanent, accumulates          |
| **Contracts**            | Creature capture consumables                                   | Loot drops, vendors, crafting                                | Consumed on capture resolution  |
| **Agents**               | Crafting operations on gear/creatures/skills                   | Loot drops (probability-gated)                               | Consumed on use                 |
| **ReAgents**             | Precision modifiers for Agent operations                       | Boss drops, crafting                                         | Consumed on use                 |
| **DeAgents**             | Conditional filters for Agent operations                       | Loot drops, elite encounters                                 | Consumed on use                 |
| **enAgents**             | Scouting operations (encounter shaping, embedding, enrichment) | Loot drops, Scout NPC purchase                               | Consumed on use                 |
| **Crafting Materials**   | Advanced crafting ingredients                                  | Zone-specific, boss-specific                                 | Consumed in recipes             |
| **CC (Computer Cycles)** | Forge Terminal fuel for advanced operations                    | Cipher completions, quest rewards                            | Consumed on advanced operations |
| **Ciphers**              | Endgame zone instances (drop as items)                         | Global loot pool (late campaign+), Cipher Network encounters | Consumed on activation          |


### 39.2 Economy Flow

The economy operates through interconnected loops that expand as the player progresses:

**Campaign Loop:** Battle → Drops (Gear + Agents + Contracts + NEM) → Vendor/Craft/Capture → Progression. Players accumulate currency naturally through gameplay. NEM purchases vendor gear and services. Agents improve existing gear. Contracts enable creature collection. The loop is self-sustaining — playing the game generates the resources needed to progress.

**Transition Loop:** Late campaign (approximately 90% completion, around Technician Level 55-60) introduces Layer 1 Ciphers as drops in the global loot pool. Players begin accumulating Ciphers before the endgame formally opens — foreshadowing the endgame economy without requiring engagement.

**Endgame Loop:** Cipher runs → High-volume drops (Agents, ReAgents, Materials, Gear, more Ciphers) + CC → Forge Terminal crafting → Better gear → Harder Cipher runs. The Frontier (Network passive tree) investment shapes which Ciphers drop more frequently and at what Layer. Pinnacle encounters add chase materials to the pipeline.

### 39.3 NEM Economy

NEM is the universal vendor currency and economic stabilizer.

**NEM Sources:**


| Source            | Amount Range                 | Frequency            |
| ----------------- | ---------------------------- | -------------------- |
| Battle rewards    | Variable by encounter scale  | Every battle         |
| Gear vendoring    | Based on rarity and mod tier | Constant             |
| Quest completion  | Scaled to quest difficulty   | Per quest            |
| Cipher completion | Scaled by Layer              | Per Cipher (endgame) |


**NEM Sinks:**


| Sink                   | Purpose                                                     |
| ---------------------- | ----------------------------------------------------------- |
| Vendor gear            | Base acquisition and gap-filling                            |
| Skill Cards            | Build option purchases                                      |
| Contracts              | Capture economy stabilizer (vendor price > drop rate value) |
| Services (respec)      | Build flexibility                                           |
| Roster tab expansion   | Storage (premium MTX)                                       |
| Stash tab expansion    | Storage (premium MTX)                                       |
| Bench Craft operations | Guaranteed low-tier mods                                    |


NEM is deliberately abundant enough that players never feel starved but scarce enough that large purchases require saving. The primary economic tension is between NEM and Agents — vendors accept Agents as alternative payment, creating a "spend on crafting or spend on purchasing" decision.

### 39.4 Vendor Agent Payment

Vendors accept Agents as alternative payment, creating strategic choice between crafting use and purchasing power.


| Item Category       | Agent Cost (Approximate)     | NEM Equivalent |
| ------------------- | ---------------------------- | -------------- |
| Common Skill Card   | 3 Foundation Agents          | ~50 NEM        |
| Uncommon Skill Card | 5 Foundation + 1 Advancement | ~120 NEM       |
| Specific Base Gear  | 5 Foundation Agents          | ~100 NEM       |
| Standard Contract   | 2 Foundation Agents          | ~30 NEM        |


This creates early-game decision points: spend Agents on crafting OR convert to purchasing power. As Agents become more abundant in endgame, this decision shifts — vendor prices become trivial relative to Agent accumulation.

---

## 40. Gear System

### 40.1 Gear Rarity Tiers


| Rarity       | Prefixes | Suffixes | Total Mods          | Visual             | Typical Acquisition                   |
| ------------ | -------- | -------- | ------------------- | ------------------ | ------------------------------------- |
| **Initiate** | 0        | 0        | 0 (implicit only)   | White/Grey         | Common drops, crafting base           |
| **Magic**    | 1        | 1        | 2                   | Blue gradient      | Common drops                          |
| **Rare**     | 2        | 2        | 4                   | Blue-gold gradient | Uncommon drops                        |
| **Exotant**  | 4        | 4        | **8**               | Gold-silver        | Rare drops, crafting via Ascend Agent |
| **Unique**   | Fixed    | Fixed    | Varies              | Orange             | Specific drop sources, non-craftable  |
| **Apex**     | 4        | 4        | 8 + Unique implicit | Purple-gold        | Pinnacle crafting only                |


**Rarity Progression:**

- Campaign: Primarily Magic and Rare gear. First Exotant drops possible in late Region 1.
- Early Endgame: Rare gear optimisation, first Exotant crafting via Ascend Agent.
- Mid Endgame: Exotant optimisation, Unique acquisition for build-enabling slots.
- Late Endgame: Exotant perfection, chase Apex crafting.

**Relic (Expansion tier):** Domain-coupled gear (4 locked Domain mods + 4 craftable) — deferred with Domains to expansion content.

**Exotant's 8-mod ceiling** is Mythoras's structural innovation over the standard ARPG 6-mod limit. More mods means a higher crafting ceiling. It also means crafting Exotant is meaningfully more complex than crafting Rare — more slots create more possible outcomes and more opportunities for both success and failure.

### 40.2 Gear Slots

Each creature has 10 gear slots. Campaign creatures may have 3-5 equipped. Endgame primary damage dealers chase all 10. Support creatures use "good enough" gear in most slots.


| #   | Slot         | Identity                         | Primary Mod Focus                                                 |
| --- | ------------ | -------------------------------- | ----------------------------------------------------------------- |
| 1   | **Weapon**   | Primary offensive                | Flat damage, crit, attack speed. Local offensive.                 |
| 2   | **Offhand**  | Defensive OR secondary offensive | Block (shield), or second damage source (dual wield)              |
| 3   | **Armament** | Primary defensive (body armour)  | Highest defensive values. Determines defence type.                |
| 4   | **Helm**     | Secondary defensive + utility    | Life, resistances, utility mods, some offence                     |
| 5   | **Treads**   | Movement + resistances           | Transition Speed (zone traversal), resistances, defensive utility |
| 6   | **Talisman** | Flex accessory 1                 | Resistances, attributes, damage, flex                             |
| 7   | **Talisman** | Flex accessory 2                 | Same — two flex slots let players patch gaps                      |
| 8   | **Amulet**   | Specialisation accessory         | Attributes, crit multiplier, build-enabling mods                  |
| 9   | **Belt**     | Utility/defence                  | Tonic mods, Life, resistances, utility                            |
| 10  | **Crest**    | Build-defining accessory         | Highest ceiling for special effects. Species mod weighted.        |


**Total: 10 × 5 creatures = 50 gear slots across the squad.**

### 40.3 Creature Tags (Gear Compatibility)

Creature tags enable gear subtype compatibility and Skill Card interactions. Tags have direct mechanical effects through Origin Bloodlines and skill compatibility.

**Tags:** Wing, Claw, Fang, Horn, Tail, Shell, Tendril, Bipedal, Quadruped, Amorphous, Metallic, Spectral, **Swarm**.

A creature can carry multiple tags. Examples: Sceptile-equivalent (Claw, Tail, Bipedal), Scizor-equivalent (Claw, Wing, Bipedal, Metallic), Gardevoir-equivalent (Bipedal, Spectral).

**Gear subtype compatibility:** Base types within each slot can have subtypes referencing creature tags. A "Fang Talisman" has an implicit biased toward creatures with the Fang tag. All subtypes share the same mod pool as their parent slot — the economy is not fragmented. Subtypes differ only in implicit modifier and visual presentation.

### 40.4 Armament Base Types

The Armament slot (body armour) determines the creature's primary defensive profile. Base types map directly to the defence system in DOC_v2_new §5.


| Base Type       | Defence Combination | Attribute Requirements | Availability                       |
| --------------- | ------------------- | ---------------------- | ---------------------------------- |
| Pure Armour     | Armour              | Authority              | Common                             |
| Pure Evasion    | Evasion             | Invictus               | Common                             |
| Pure Barrier    | Barrier             | Order                  | Common                             |
| Pure Oura       | Oura                | Animus                 | Common                             |
| Armour/Evasion  | Armour + Evasion    | Authority + Invictus   | Common                             |
| Armour/Barrier  | Armour + Barrier    | Authority + Order      | Common                             |
| Evasion/Oura    | Evasion + Oura      | Invictus + Animus      | Common                             |
| Barrier/Oura    | Barrier + Oura      | Order + Animus         | Common                             |
| Armour/Oura     | Armour + Oura       | Authority + Animus     | **Unique only** (Forbidden Hybrid) |
| Evasion/Barrier | Evasion + Barrier   | Invictus + Order       | **Unique only** (Forbidden Hybrid) |


**Offensive philosophy:** Mythoras encourages offence. Becoming truly immortal should be as hard as possible. Creatures that invest heavily in defence pay in damage output. There are no "tanks" in the traditional role sense — there are creatures that trade damage for survivability, and the game always makes that tradeoff feel real.

### 40.5 Item Level

Item Level (iLvl) determines the maximum modifier tier that can roll on an item.


| iLvl Range | Max Mod Tier | Typical Source                     |
| ---------- | ------------ | ---------------------------------- |
| 1-20       | T7-T6        | Region 1 early zones               |
| 21-40      | T6-T5        | Region 1 late zones, early endgame |
| 41-60      | T5-T4        | Cipher Network Layer 1-2           |
| 61-80      | T4-T3        | Layer 3-4                          |
| 81-100     | T2-T1        | Layer 4-5, Pinnacle content        |


### 40.6 Modifier Tiers


| Tier | Power Level   | Typical iLvl Requirement |
| ---- | ------------- | ------------------------ |
| T7   | Lowest        | 1+                       |
| T6   | Low           | 15+                      |
| T5   | Below Average | 30+                      |
| T4   | Average       | 45+                      |
| T3   | Above Average | 60+                      |
| T2   | High          | 75+                      |
| T1   | Maximum       | 85+                      |


### 40.7 Modifier System Reference

Key principles for crafting context:

- **Flat Added** damage is most valuable on slow, high-effectiveness skills
- **Increased %** mods stack additively — diminishing returns as total rises
- **More %** mods are multiplicative and extremely rare on gear. Primarily from Directives, Uniques, and attribute thresholds with conditions
- **Penetration** is endgame-relevant when enemies have capped resistances
- **Volatile stats** (critical strike chance, % More damage) should NOT be freely available from multiple sources. They require dedicated investment from specific, countable sources — Grid nodes, specific gear mods, rare species notables, or Unique modifiers with conditions or drawbacks

### 40.8 Weapon Types and Dual Wielding


| Category        | Examples                                       | Primary Stats                              | Attribute Requirement |
| --------------- | ---------------------------------------------- | ------------------------------------------ | --------------------- |
| **Melee (1H)**  | Swords, Claws, Maces, Daggers                  | Flat physical, attack speed, crit          | Authority or Invictus |
| **Melee (2H)**  | Greatswords, Greataxes, Staves                 | Higher flat damage, slower, wider AoE      | High Authority        |
| **Ranged (1H)** | Wands, Focuses, Orbs                           | Flat elemental/spell damage, cast speed    | Animus or Order       |
| **Shield**      | Shields, Manifests, Shrouds, Barrier Membranes | Block chance, defences, utility            | Varies                |
| **Hybrid (1H)** | Sceptres                                       | Lower base damage, physical and spell mods | Authority + Animus    |


**Skill Card weapon compatibility:** Skill Cards carry weapon tags ([Melee], [Ranged], [Spell], [Universal]) defining which weapon types can use them. Dual wielding: a Skill Card must be compatible with BOTH equipped weapons.

**Battlemage exception:** Melee weapon + wand. Melee Skill Cards with the wand's spell damage contributing as flat damage to the attack. Requires a specific unlock — a Motherboard Grid **Directive**, a Unique weapon modifier, or a rare species notable. Niche, not baseline.

**Dual Wield Configurations:**


| Main Hand                      | Off Hand | Bonus                                                                                    |
| ------------------------------ | -------- | ---------------------------------------------------------------------------------------- |
| Melee + Melee (same type)      |          | +10% attack speed                                                                        |
| Melee + Melee (different type) |          | +5% attack speed, access to both weapon type mod pools                                   |
| Melee + Wand (Battlemage)      |          | No speed bonus. Spell damage → flat attack damage conversion. Requires Directive unlock. |
| Wand + Wand                    |          | +10% cast speed                                                                          |
| Melee + Shield                 |          | Block chance + shield mods                                                               |
| Wand + Shield                  |          | Block + spell damage                                                                     |
| Shield + Shield (Fortress)     |          | Double block, massive defence, minimal offence. Rare/niche.                              |
| Any + Nothing (empty offhand)  |          | Specific Directives reward empty offhand (e.g., "+30% More damage if no offhand")        |


**Shield subtypes:**


| Base Type        | Flavour                    | Compatible Creatures                |
| ---------------- | -------------------------- | ----------------------------------- |
| Shield           | Physical held shield       | Bipedal, armed creatures            |
| Shroud           | Projected energy barrier   | Arcane, Psi, Avatar Origins         |
| Manifest         | Inscribed protective field | Construct, Abyssal Origins          |
| Barrier Membrane | Biological defence layer   | Beast-adjacent, Amorphous creatures |


All shield subtypes provide the same core stats (block chance, defences) with different implicits and visual presentation. Shared mod pool — no economy fragmentation.

### 40.9 Gear Management Philosophy


| Creature Role           | Gear Investment                                   | Typical Rarity (Endgame) |
| ----------------------- | ------------------------------------------------- | ------------------------ |
| Primary Damage Dealer   | Heavy — all 10 slots optimised                    | Exotant / Unique mix     |
| Secondary Damage        | Moderate — key offensive slots optimised          | Rare-Exotant             |
| Support/Utility         | Light — defensive slots filled, offence secondary | Magic-Rare               |
| Specialist (niche role) | Targeted — specific slots matter, rest minimal    | Varies                   |


---

## 41. Contract Economy

All creature captures require Contracts. There is no free capture action. Contracts are a consumable currency that gates the capture economy. Full capture system design in DOC_v4_new §34.

### 41.1 Contract Design


| Property            | Value                                                                                                            |
| ------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Function**        | Consumable used post-combat when a creature is in Capture State (below Contract Threshold) to formalise the bond |
| **Requirement**     | One Contract consumed per capture resolution                                                                     |
| **No failure RNG**  | Contracts at or below threshold always succeed — RNG lives in outcome quality only                               |
| **Starting supply** | Tutorial provides initial Standard Contracts                                                                     |
| **Ongoing supply**  | Base loot pool (drops from any encounter), vendor purchase                                                       |


### 41.2 Contract Roster


| #   | Contract        | Effect                                                                                                                          | Rarity            |
| --- | --------------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| 1   | **Standard**    | Baseline capture. No additional effect.                                                                                         | Common            |
| 2   | **Reveal**      | Shows full attribute rolls and substat ranges before the Contract is consumed. Player can cancel and use a higher tier instead. | Common → Uncommon |
| 3   | **Condition**   | Captured creature joins at full HP.                                                                                             | Uncommon          |
| 4   | **Implicit**    | Minor implicit slots guaranteed to fill to variant tier maximum.                                                                | Uncommon          |
| 5   | **Secondary**   | Variable Secondary Stream rerolled once at capture, better result kept.                                                         | Uncommon → Rare   |
| 6   | **Integration** | Captured creature inherits a portion of the squad's average Creature XP level on joining.                                       | Uncommon          |
| 7   | **Lucky Roll**  | Lucky Roll on all attributes and forward-presented substats. Best of 2 rolls, within tier bounds.                               | Mythic Rare       |


### 41.3 Contract Economy Notes

Standard Contracts drop broadly — comparable to PoE's Scroll of Wisdom in availability. All other Contracts are meaningfully rarer. Lucky Roll Contracts are mythic rare finds — obtaining one early is a significant event that changes the player's capture planning.

Contracts are priced differently from Agents at vendors. The Contract economy is intentionally separate from the gear crafting economy — there is no tension between "should I spend this on crafting or capturing?" because the currencies are largely distinct in acquisition.

---

## 42. Agent System

Agents are the crafting currency of Mythoras — simultaneously the economy's trade currency and the mechanism of item modification. Dropping an Agent means dropping a tool. Every Agent has potential value regardless of where it drops.

### 42.1 Agent Tiers


| Tier            | Rarity                     | Primary Operations                                |
| --------------- | -------------------------- | ------------------------------------------------- |
| **Foundation**  | Common — campaign-abundant | Decrypt, Compile, Inscribe, basic Scramble        |
| **Advancement** | Uncommon                   | Dual Inscribe, Weighted Inscribe, Cascade, Ascend |
| **Specialized** | Rare                       | Siphon, Fissure, Surge, Fracture, Preservation    |
| **Pinnacle**    | Very Rare — chase content  | Anchor, Apex Catalyst, Domain Catalyst (deferred) |


### 42.2 Foundation Agents (Common — Campaign-Abundant)


| Agent              | Operation                                                               | Rarity      |
| ------------------ | ----------------------------------------------------------------------- | ----------- |
| **Decrypt Agent**  | Reveal all encrypted mods on an item. Identifies fully encrypted items. | Very Common |
| **Compile Agent**  | Initiate → Magic. Adds 1 prefix + 1 suffix randomly.                    | Very Common |
| **Inscribe Agent** | Add 1 random mod to an empty slot. iLvl gates tier pool.                | Common      |
| **Void Agent**     | Remove 1 random mod. Cannot choose which.                               | Common      |
| **Scramble Agent** | Reroll all mods. Maintains rarity and base. (Chaos Orb analogue.)       | Common      |
| **Shift Agent**    | Reroll 1 random mod on Rare+. Cannot choose which.                      | Common      |
| **Elevate Agent**  | Magic → Rare. Adds mods to reach 4 total.                               | Common      |


### 42.3 Advancement Agents (Uncommon)


| Agent                       | Operation                                                                                          | Rarity   |
| --------------------------- | -------------------------------------------------------------------------------------------------- | -------- |
| **Dual Inscribe Agent**     | Add 2 random mods to 2+ open slots.                                                                | Uncommon |
| **Weighted Inscribe Agent** | Add 1 mod biased toward existing element/stream. Higher thematic coherence chance, not guaranteed. | Uncommon |
| **Cascade Agent**           | Reroll 1 random mod with upward tier bias. Better than Shift.                                      | Uncommon |
| **Ascend Agent**            | Rare → Exotant. Adds mods to reach 8 total.                                                        | Uncommon |


### 42.4 Specialized Agents (Rare)


| Agent                  | Operation                                                                                                                                                                                                                                  | Rarity                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ |
| **Siphon Agent**       | Extract one chosen mod from item (item destroyed). 35-4% success rate by tier. Result is a "Siphoned Mod" consumable.                                                                                                                      | Very Rare (Mirror-tier)        |
| **Fissure Agent**      | Apply a Siphoned Mod to target — replaces one random mod on target. Non-deterministic replacement prevents trivial perfect-item construction.                                                                                              | Very Rare (Mirror-tier)        |
| **Surge Agent**        | Apply Negative Gl!tch — one-time irreversible gamble. See §46.                                                                                                                                                                             | Rare                           |
| **Fracture Agent**     | Split item: chosen mod goes to one copy permanently locked, remaining mods to second copy.                                                                                                                                                 | Very Rare (Pinnacle boss only) |
| **Preservation Agent** | Create a restorable snapshot of an item's current state. If a future operation produces an undesirable outcome, restore to the snapshot. One-time restoration — snapshot consumed on use. Expires after 24 hours OR 3 crafting operations. | Rare                           |


### 42.5 Pinnacle Agents (Very Rare — Chase Content)


| Agent             | Operation                                                                | Rarity        |
| ----------------- | ------------------------------------------------------------------------ | ------------- |
| **Anchor Agent**  | Protect one chosen mod from the next operation.                          | Pinnacle drop |
| **Apex Catalyst** | Used in Apex crafting (sacrifice Unique → implicit on Exotant). See §57. | Pinnacle drop |


### 42.6 Creature Agents (Separate Pool)


| Agent                             | Operation                                                                                                                                                                       | Rarity                   |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| **Calibrate Agent**               | Reroll creature attribute values within species range.                                                                                                                          | Uncommon                 |
| **Refine Agent**                  | Reroll creature substat values.                                                                                                                                                 | Uncommon                 |
| **Species Inscribe Agent**        | Roll one random species mod into an open implicit slot. Weighted by species mod pool.                                                                                           | Rare                     |
| **Secondary Stream Reroll Agent** | Reroll the variable Secondary Stream on a captured creature. Post-capture operation. Expensive, endgame only. Distinct from Secondary Contract (which rerolls at capture time). | Very Rare (endgame only) |


### 42.7 Skill Card Agents (Separate Pool)


| Agent                      | Operation                                                          | Rarity   |
| -------------------------- | ------------------------------------------------------------------ | -------- |
| **Chromatic Agent**        | Reroll Skill Card colour/alignment                                 | Common   |
| **Polarity Agent**         | Flip Polarity (Positive ↔ Negative)                                | Uncommon |
| **Quality Infusion Agent** | Add 1-3% Quality                                                   | Uncommon |
| **Link Agent**             | Attempt to link Support to Skill (see Skill Frame, DOC_v3_new §11) | Uncommon |
| **Sever Agent**            | Remove one Support link                                            | Common   |


---

## 43. ReAgent System

ReAgents enhance Agent operations. They work WITH Agents, not as replacements. A ReAgent is placed in the Forge Terminal's modifier socket before executing an Agent operation, modifying how that operation resolves.

### 43.1 Targeting ReAgents


| ReAgent                      | Effect                                                                            | Source              |
| ---------------------------- | --------------------------------------------------------------------------------- | ------------------- |
| **Prefix Vector ReAgent**    | Next Inscribe/Shift affects prefixes only                                         | Boss drops          |
| **Suffix Vector ReAgent**    | Next Inscribe/Shift affects suffixes only                                         | Boss drops          |
| **Species Catalyst ReAgent** | Next species mod roll guaranteed from notable pool (not guaranteed which notable) | Crafted (expensive) |


**Domain Vector ReAgents** (deferred with Domains): Next mod weighted heavily toward specific Domain pool. Requires Domain content.

### 43.2 Enhancement ReAgents


| ReAgent                 | Effect                                               | Source              |
| ----------------------- | ---------------------------------------------------- | ------------------- |
| **Calibration ReAgent** | Next operation rolls twice, keeps better result      | Pinnacle boss drops |
| **Prime ReAgent**       | Next Cascade has significantly better tier weighting | Crafted             |
| **Stabilizer ReAgent**  | Next Siphon has +15% success chance                  | Boss drops          |


### 43.3 Protection ReAgents


| ReAgent            | Effect                                   | Source           |
| ------------------ | ---------------------------------------- | ---------------- |
| **Buffer ReAgent** | Protect up to 2 mods from next operation | Pinnacle content |


### 43.4 Transformation ReAgents


| ReAgent               | Effect                                           | Source            |
| --------------------- | ------------------------------------------------ | ----------------- |
| **Transmute ReAgent** | Change one mod's element to adjacent Stream type | Endgame activity  |
| **Implicit ReAgent**  | Reroll item's implicit                           | Pinnacle activity |


---

## 44. DeAgent System

DeAgents are conditional modifiers consumed alongside an Agent to filter or modify the operation's outcome. They do nothing alone — they modify HOW an Agent works. Think of crafting as building a query: the Agent is the verb, the ReAgent is the precision tool, and the DeAgent is the conditional filter.

### 44.1 DeAgent Taxonomy


| DeAgent                | Effect When Used With Agent                                                                                                | Rarity   | Drop Source      |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------- |
| **Culling DeAgent**    | Remove lowest tier result from mod pool before rolling                                                                     | Uncommon | General drops    |
| **Anchoring DeAgent**  | Highest tier mod on item cannot be affected by this operation                                                              | Uncommon | General drops    |
| **Elevating DeAgent**  | +1 tier to the next added modifier                                                                                         | Rare     | Elite encounters |
| **Focusing DeAgent**   | Limit mod pool to single category (offensive/defensive/utility)                                                            | Rare     | Elite encounters |
| **Polarity DeAgent**   | Target specific Polarity during respec operations                                                                          | Uncommon | General drops    |
| **Distortion DeAgent** | During a Gl!tch operation, enables prefix/suffix configuration skewing (5P/3S or 3P/5S). Consumes the item's enchant slot. | Rare     | Endgame content  |


### 44.2 Crafting as Query Building

The Agent + ReAgent + DeAgent combination functions like constructing a database query:

**Inscribe Agent alone:** Add one random mod from the full pool. Maximum variance.

**Inscribe + Focusing DeAgent (offense):** Add one random mod, but only from the offensive category. Pool narrowed.

**Inscribe + Focusing DeAgent + Prefix Vector ReAgent:** Add one random offensive prefix. Highly targeted.

**Inscribe + Focusing DeAgent + Prefix Vector ReAgent + Elevating DeAgent:** Add one random offensive prefix at minimum tier +1. Maximum precision — but costs four separate currency items.

The Forge Terminal UI visualises this as an operation preview:

```
OPERATION: INSCRIBE
├─ Pool: FULL → OFFENSIVE ONLY (Focusing DeAgent)
├─ Slot: ANY → PREFIX ONLY (Prefix Vector ReAgent)
├─ Tier: NORMAL → +1 MINIMUM (Elevating DeAgent)
└─ Result: Random offensive prefix, minimum T+1

```

New players use naked Agents. Experienced players construct precise operations. The depth comes naturally through learning which combinations achieve which outcomes.

---

## 45. enAgent System

enAgents are the scouting-specific Agent category. They ride on the existing Agent economy architecture but target encounter generation, Contract enhancement, and post-capture creature modification rather than gear.

Full scouting and intel system design in DOC_v4_new §33.

### 45.1 enAgent Categories

**Embed enAgents:** Applied to Contracts before use to add properties to the capture outcome.

- Combat Focus enAgent — biases attribute rolls toward Authority/Invictus on capture
- Utility Focus enAgent — biases toward Order/Animus
- Implicit Trace enAgent — adds a chance for an extra minor implicit slot to be filled
- Quality Booster enAgent — adds one tier to the Capture Quality meter outcome

**Encounter-Shape enAgents:** Applied to zones or specific encounter nodes to bias which species, variants, or Origins appear.

- Species-Bias enAgent — biases zone encounter rolls toward a specific species
- Origin-Bias enAgent — biases toward an Origin tag
- Stream-Bias enAgent — biases toward a Stream type
- Variant-Bias enAgent — increases probability of a specific variant tier appearing

**Enrichment enAgents:** Applied to already-captured creatures for post-capture modification. Late endgame and beyond.

- Re-Roll enAgent — rerolls attributes within tier bounds
- Slot Add enAgent — adds a minor implicit slot (within variant tier ceiling)
- Targeted Re-Roll enAgent — rerolls a specific attribute

**Temporal sweep:**

- Embed enAgents dominant during campaign and early endgame
- Encounter-Shape enAgents come online in early endgame
- Enrichment enAgents dominant in late endgame

---

## 46. Crafting Materials

Materials are specific to sources and purposes — not generic currency.

### 46.1 Elemental Materials


| Material             | Stream     | Source                     |
| -------------------- | ---------- | -------------------------- |
| **Ember Ash**        | Inferno    | Inferno zones/creatures    |
| **Glacial Crystals** | Glacial    | Glacial zones/creatures    |
| **Storm Essence**    | Voltaic    | Voltaic zones/creatures    |
| **Living Sap**       | Eldergrove | Eldergrove zones/creatures |


Physical damage has no dedicated material (it is baseline). Phenomena and Blight materials are endgame-only. Tectonic, Tidal, and other stream materials are endgame expansions.

### 46.2 Protocol Materials


| Material               | Source                              | Used For                                                            |
| ---------------------- | ----------------------------------- | ------------------------------------------------------------------- |
| **Protocol Fragments** | Cipher completions, endgame content | Advanced crafting recipes, ReAgent crafting, interactive decryption |
| **Apex Essence**       | Pinnacle bosses                     | Apex crafting, pinnacle recipes                                     |


### 46.3 Domain Materials (Expansion — Deferred)

Domain Remnants (4 types) — tied to Domain boss content. Deferred with Domains to expansion.

### 46.4 Material Acquisition Loop

```
Campaign Zones → Elemental Materials (zone-themed)
    ↓
Cipher Network → Protocol Fragments (general advanced crafting)
    ↓
Pinnacle Content → Apex Essence (ultimate chase crafting)

```

---

## 47. The Forge System

Crafting occurs through two interfaces: Direct Application (anywhere, simple) and the Forge Terminal (towns/hubs, advanced).

### 47.1 Direct Application

Available anywhere in the field or inventory. Simple, immediate operations.


| Feature             | Description                                            |
| ------------------- | ------------------------------------------------------ |
| **Access**          | Inventory, field, anywhere                             |
| **Operations**      | Single Agent on single item                            |
| **ReAgent/DeAgent** | Not available — Direct Application is naked Agent only |
| **Cost**            | Agent consumed. No fuel cost.                          |
| **Use case**        | Quick operations: Decrypt, Compile, basic Inscribe     |


### 47.2 Forge Terminal

Located at towns, Points of Interest, and endgame hubs. Advanced operations with full UI.


| Feature                | Description                                          |
| ---------------------- | ---------------------------------------------------- |
| **Basic Crafting**     | Direct application with enhanced UI and preview      |
| **Agent Combinations** | Queue 2-3 Agents in sequence for combined operations |
| **ReAgent Socket**     | Load a ReAgent to modify the next operation          |
| **DeAgent Socket**     | Load a DeAgent to filter the next operation          |
| **Bench Crafts**       | Guaranteed low-tier mods (quest-unlocked recipes)    |
| **Material Crafting**  | Create ReAgents and Contracts from materials         |
| **Fuel requirement**   | Advanced operations consume CC (Computer Cycles)     |


### 47.3 Forge Terminal UX

**Contextual item placement.** Right-clicking an item while the Forge UI is open places it in the central workpiece slot.

**Agent tray.** Left side shows available Agents, filtered to those applicable to the current workpiece.

**Operation preview.** Before confirming: what WILL happen, what COULD happen (probability ranges), what's at RISK (mods that could be affected).

**Sequence queuing.** For Agent Combinations, the player queues Agents in order. The Forge shows the combined operation outcome BEFORE execution.

**ReAgent/DeAgent socket.** Small modifier slots next to the Agent tray. Visual indicator shows modifier is "loaded."

**Lock toggle.** Safety toggle on the workpiece slot. Must explicitly unlock before any Agent can execute.

**Result animation.** Brief, satisfying visual when the operation resolves (0.5-1 second). Not a cutscene.

### 47.4 Bench Crafts

Guaranteed outcomes at low tier. Quest-unlocked recipes providing floor-setters.


| Recipe                        | Effect                                    | Unlock               |
| ----------------------------- | ----------------------------------------- | -------------------- |
| Craft T7 [Element] Resistance | +6-8% specific resistance                 | Early campaign quest |
| Craft T7 [Attribute]          | +8-12 specific attribute                  | Early campaign quest |
| Craft T6 [Damage Type]        | +10-15% specific damage                   | Mid campaign quest   |
| Craft T6 Life                 | +25-35 Life                               | Mid campaign quest   |
| Remove Crafted Mod            | Clear bench-crafted mod only              | Default              |
| Craft "Cannot Roll [Type]"    | Block prefix/suffix during operations     | Endgame quest        |
| Multimod                      | Apply up to 2 bench crafts simultaneously | Late endgame quest   |


Bench crafts enable preparation for specific encounters. Facing an Inferno Region Sovereign? Craft Inferno resistance on the team's gear. Bench-crafted mods occupy a mod slot but are clearly labelled and easily removable.

### 47.5 Forge Fuel — CC (Computer Cycles)


| Property              | Value                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------ |
| **Source**            | Cipher run completions (endgame primary), quest rewards (campaign), town vendor (limited)              |
| **Scaling**           | Higher Layer Ciphers generate more CC                                                                  |
| **Free operations**   | Direct Application always free. Decrypt, Compile, basic Inscribe at Forge are free.                    |
| **Costed operations** | Bench Crafts (1 CC), Agent Combinations (2-3 CC), ReAgent-enhanced (+1 CC), Advanced recipes (5-10 CC) |


CC paces crafting without restricting it. Campaign players receive enough CC from quests and vendors for basic Forge use. Endgame players generate CC naturally through Cipher runs.

### 47.6 Forge History

Quick view: last 20 operations as a list. Full history: scrollable log of the item's entire crafting lifecycle. Each item carries a visible "crafted X times" indicator on hover/inspect.

---

## 48. Decryption System

### 48.1 Campaign Decryption

All non-Unique items drop **fully encrypted**. The player can see base type, rarity border, iLvl, and implicit — all mods are hidden. Use a **Decrypt Agent** (very common) to reveal all mods instantly. Decrypt Agents are abundant — decryption is never a bottleneck.

### 48.2 Unique Item Encryption

Unique items drop fully encrypted. Players recognise them by their orange border and name — but rolled values are hidden until decryption. Uniques have variable rolls on signature mods. The value within the range is unknown until decryption. "I found the Unique I wanted — but did it roll well?"

### 48.3 Endgame Partial Decryption

After completing the campaign, the player receives the **Cryptological Decrypt Agent** — a permanent upgrade applied to the Stash. From this point forward, all items present partial information on drop:


| Information Shown                   | What It Tells You                                     |
| ----------------------------------- | ----------------------------------------------------- |
| Base type, rarity, iLvl, implicit   | Standard                                              |
| **Number of prefixes and suffixes** | "This Rare has 2P/2S" — assess completeness           |
| **Highest mod tier present**        | "Contains T2 or better" → worth investigating         |
| **Mod category icons per mod**      | Each mod shows ⚔️ offensive, 🛡️ defensive, ⚡ utility |


**Loot filter integration:** Filters use all partial information without full decryption. A filter rule like "Show Rare gloves with T3+ best mod and at least 1 defensive suffix" works with partial decryption only. Significantly richer than standard ARPG loot filtering.

### 48.4 Focused Decrypt


| Property     | Value                                                                             |
| ------------ | --------------------------------------------------------------------------------- |
| **Cost**     | 1 Decrypt Agent + 1 Protocol Fragment                                             |
| **Effect**   | Reveals only mods in a chosen category (offensive, defensive, or utility)         |
| **Use case** | Bulk processing. Check if offensive mods are worth seeing before full decryption. |


---

## 49. Cipher Economy

### 49.1 Cipher as Loot Items

Ciphers are items that drop in the global loot pool — they work like PoE's maps, dropping as tangible items the player collects, manages, and activates to generate Cipher Network zone instances.

**Layer 1 Ciphers begin dropping at approximately 90% campaign completion** — around Technician Level 55-60 or upon completing a specific campaign milestone (Hale the Circuit Champion defeat is a candidate condition). This ensures players enter the endgame with a stock of Ciphers already accumulated rather than starting from nothing.

### 49.2 How Ciphers Scale

Cipher acquisition follows an inspired-by-PoE tier progression model, adapted to Mythoras's Layer system:

**Bosses drop higher-tier Ciphers:** Encountering and defeating the boss encounter within a Cipher instance reliably produces a Cipher of the same Layer or one Layer higher. This creates a core sustain loop — running Layer 2 Cipher bosses reliably produces more Layer 2 and some Layer 3 Ciphers. Players who prioritise boss encounters sustain their tier progression cleanly.

**Three Ciphers → One higher-Layer Cipher:** A combine recipe at the Forge Terminal allows combining 3 Ciphers of the same Layer into 1 Cipher of the next Layer. This deterministic upgrade path means players who accumulate many lower-tier Ciphers can always convert upward rather than being stuck.

**Layer floors:** Each Cipher has a Layer designation determining its difficulty, severity, and reward profile.


| Layer                     | Cipher Level Range | Key Threshold                                                          |
| ------------------------- | ------------------ | ---------------------------------------------------------------------- |
| **L1 — Surface Network**  | 68-72              | Entry. Drops in late campaign. Starting point for all endgame players. |
| **L2 — Outer Cipher**     | 73-78              | Standard endgame. Full mod pool. Bulk of play.                         |
| **L3 — Deep Cipher**      | 79-84              | Significant progression step — builds required, not just gear.         |
| **L4 — Volatile Reaches** | 85-90              | Endgame's endgame. Hostile mods, rare exclusive content.               |
| **L5 — Reserved**         | TBD                | Expansion content vector.                                              |


**The L3 threshold** functions similarly to PoE 2's Tier 11 checkpoint — the moment where best-in-slot crafting material bases begin appearing and builds are genuinely tested. Players who arrive at L3 underprepared feel the difficulty sharply. Frontier investment becomes important here.

### 49.3 Frontier (Network Passive Tree) and Cipher Sustain

The Frontier is the strategic specialisation layer governing endgame Cipher engagement. One of its primary investment vectors is Cipher sustain and tier progression:

**Cipher drop rate nodes:** Investment increases the frequency of Cipher drops from encounters within Cipher Network zones. Core sustain mechanism.

**Tier skip nodes:** Specific Frontier nodes increase the chance that Cipher drops are of a higher Layer than the current zone's Layer. Allows efficient upward tier progression for committed players.

**Bonus Completion / Network Points:** Running Ciphers at the appropriate rarity for the Layer's bonus criterion earns Network Points spent on the Frontier — creating a virtuous cycle where crafted/upgraded Ciphers generate the points needed to improve Cipher drop efficiency.

### 49.4 Cipher Crafting

Ciphers can be modified before activation — similar to PoE's Waystone crafting. Agents and Overrides (per-Cipher consumables) apply modifiers to a Cipher before it is run.


| Method                               | Effect                                                                 |
| ------------------------------------ | ---------------------------------------------------------------------- |
| **Compile Agent** on a Cipher        | Initiate → Magic. Adds 1-2 basic mods.                                 |
| **Scramble Agent** on a Magic Cipher | Reroll all mods.                                                       |
| **Ascend Agent** on a Magic Cipher   | Magic → Rare. Adds mods to reach higher count.                         |
| **Overrides**                        | Pre-run consumables that add specific modifiers. See DOC_v4_new §35.2. |


Mod count per Cipher rarity: Initiate 0-2, Magic 3-4, Rare 5-8. Layer governs severity — same mod text at L4 is meaningfully more punishing than at L1.

---

## 50. Fracture and Preservation Agents

### 50.1 Fracture Agent


| Property         | Value                                                                                                                              |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Operation**    | Split an item into two copies. One copy retains a player-chosen mod permanently locked. The other copy retains the remaining mods. |
| **Rarity**       | Very Rare — Pinnacle boss drops only. Cannot be crafted.                                                                           |
| **Use case**     | Item has one perfect T1 mod among 7 mediocre mods. Fracture the T1 → one item with that locked mod + 7 empty slots to recraft.     |
| **Restrictions** | Cannot Fracture an already-fractured item. Cannot Fracture Unique, Apex, or Gl!tched items.                                        |


### 50.2 Preservation Agent


| Property          | Value                                                                                                                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Operation**     | Create a restorable snapshot of an item's current state. If a future operation produces an undesirable outcome, restore to the snapshot. One-time restoration — snapshot consumed on use. |
| **Rarity**        | Rare — uncommon enough to be meaningful, not Mirror-tier                                                                                                                                  |
| **Expiry**        | Snapshot expires after 24 hours (real-time) OR after 3 crafting operations on the item (whichever comes first).                                                                           |
| **Restrictions**  | One snapshot per item at a time. Cannot snapshot Gl!tched items.                                                                                                                          |
| **Design intent** | Reduces "fear of bricking" that causes players to hoard currency. One safety net per crafting session — use it wisely.                                                                    |


---

## 51. The Four Domains (Expansion — Deferred)

The four Domain entities within the Protocol are a major expansion content system. Domain-coupled mechanics include Domain Influence on gear (curated mod pools applied through Domain Catalyst Agents), Double Influence crafting, Domain Remnant materials, Relics (half-locked Domain gear), and the Infection Agent (Domain Influence mod transfer).

**All Domain content is deferred to expansion.** The system is documented conceptually but does not appear in MVP. Existing documents reference Domain thematic identities (Sacrifice/Preservation/Cascade/Consumption) as lore elements; mechanical implementation awaits the Domain expansion.

Domain naming remains TBD — legendary-quality names are required before this content ships.

---

## 52. Gl!tch System (Negative Only — MVP)

Mythoras's corruption system for MVP focuses exclusively on Negative Gl!tch — a one-time irreversible gamble applied via the Surge Agent.

### 52.1 Negative Gl!tch (Surge Agent)

**Application:** Use Surge Agent on a non-Gl!tched item. Immediate outcome determination. Item becomes Gl!tched and cannot be Surged again.

**Outcome Table:**


| Roll   | Probability | Outcome                                                           |
| ------ | ----------- | ----------------------------------------------------------------- |
| 1-12   | 12%         | **Ascendant** — Powerful Gl!tched implicit added                  |
| 13-27  | 15%         | **Transformed** — Random mods become Gl!tched variants            |
| 28-47  | 20%         | **Shifted** — Implicit changes to a different implicit            |
| 48-72  | 25%         | **Stable** — No change; item is now Gl!tched (cannot Surge again) |
| 73-87  | 15%         | **Fractured** — One mod destroyed, others enhanced                |
| 88-97  | 10%         | **Bricked** — Item unusable (salvageable for materials)           |
| 98-100 | 3%          | **Voided** — Item destroyed entirely                              |


**Distortion DeAgent interaction:** When used with Surge, enables prefix/suffix configuration skewing on Exotant items (5P/3S or 3P/5S). Consumes the item's enchant slot.

**Positive Gl!tch:** Deferred to post-MVP content expansion.

---

## 53. Species Mod Pools

### 53.1 Architecture

Each creature species has a unique mod pool — a curated cluster jewel architecture of Notables (rare, build-defining) and Small Passives (common, generic). Species mod pools are the creature system's equivalent of gear affixes.


| Component          | Description                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------ |
| **Notables**       | Rare, powerful, build-defining effects. Low roll weight. Chase rolls.                                              |
| **Small Passives** | Common, generic stat bonuses. High roll weight. Dilute the pool.                                                   |
| **Pool Size**      | **12-18 mods** per species. Curated — some shared by Stream/Origin identity.                                       |
| **Implicit Slots** | Max **2 slots** for MVP regardless of species or variant tier. Variants dictate tier access and notable weighting. |


### 53.2 Rolling and Acquisition


| State                         | Notes                                                                           |
| ----------------------------- | ------------------------------------------------------------------------------- |
| **At capture (Initiate)**     | 0 implicit slots filled by default                                              |
| **At capture (Magic)**        | 0-1 slots possible (encounter rarity influences)                                |
| **At capture (Rare/Exotant)** | 1-2 slots possible                                                              |
| **At capture (Apex)**         | 2 slots guaranteed (quality varies)                                             |
| **Post-capture crafting**     | Species Inscribe Agent, Calibrate Agent, Refine Agent, Species Catalyst ReAgent |


### 53.3 Shared Mods

Some mods are shared across species of the same Stream or Origin grouping. A Poison-related notable appears in pools across all Eldergrove and Blight-primary species. Cross-species build planning without requiring a specific species.

### 53.4 Variable P/S Ratios

Specific gear base types can have inherent prefix/suffix splits that differ from the standard distribution. A 5P/3S Exotant has 5 prefix slots and 3 suffix slots (maintaining the 8-slot total). This provides crafting variety — different base types serve different build needs even at the same rarity tier.

Standard Exotant: 4P/4S. Variable ratio bases: 5P/3S or 3P/5S — available through specific base types that can be targeted.

The Distortion DeAgent can also apply this to a Gl!tched Exotant, consuming the enchant slot.

---

## 54. Field Crafting

Lightweight crafting done out in the world — via the Backpack panel UI.

### 54.1 Permitted Field Crafts


| Operation                       | Where          | Notes                                        |
| ------------------------------- | -------------- | -------------------------------------------- |
| Apply Agents to single items    | Backpack panel | Direct Application only — no ReAgent/DeAgent |
| Salvage gear into materials     | Backpack panel | Converts unwanted gear to crafting materials |
| Small vendor-recipe conversions | Backpack panel | Subset of Bench Crafts available in field    |
| Apply enAgents to Contracts     | Backpack panel | Embed enAgents for capture enhancement       |
| Decryption (Decrypt Agent)      | Backpack panel | Anywhere identification                      |


**Heavy operations require the Forge Terminal at Hideout/town:** Apex crafting, Agent Combinations (2-3 sequence), ReAgent/DeAgent-enhanced operations, Material Crafting, Bench Crafts (full set), Fracture, complex multi-Agent sequences.

---

## 55. Vendor Recipes

A tight set of deterministic recipes available at vendors. MVP ships ~5-10 recipes that meaningfully shape the early economy.

### 55.1 Anti-Abuse Design

Vendor recipes are designed with exploit prevention:

- **Per-session caps** — maximum uses per game session
- **Scaling costs** — cost per repeat increases within a session
- **Cooldowns** — some recipes require cooldown between uses

Designed assuming players will attempt to automate or maximise — caps set accordingly.

### 55.2 Example Recipes


| Recipe                     | Input                           | Output                                     | Cap                         |
| -------------------------- | ------------------------------- | ------------------------------------------ | --------------------------- |
| 3 Magic items of same slot | 3× Magic gear (same slot)       | 1 Advancement Agent                        | 3/session                   |
| 5 Common Agents            | 5× Foundation Agent (same type) | 1 Advancement Agent                        | 5/session                   |
| 3 Contracts of same tier   | 3× same-tier Contract           | 1 next-tier Contract                       | 2/session                   |
| Gear + Elemental Material  | Gear + matching material        | +5-8% Stream resistance bench craft (temp) | 1/session per material type |


---

## 56. Loot Filter System

Mythoras's loot filter operates on **potential rather than rolled stats** — filtering on what an item could be, not just what it currently shows.

### 56.1 Filter Dimensions


| Dimension                 | Description                                                             |
| ------------------------- | ----------------------------------------------------------------------- |
| **Base type**             | Item category (Armament, Weapon, etc.) and subtype                      |
| **Area level**            | Item level range gating tier possibilities                              |
| **Source**                | Drop/Decryption/Agent-crafted/vendor/Forge                              |
| **Potential roll ranges** | For partially-decrypted items: T3+ mod present, 2+ defensive mods, etc. |
| **Tag combinations**      | Origin-adjacent tags, creature-specific tags                            |
| **Player-saved patterns** | Named filter presets shareable in community (NeverSink-style)           |


Partial decryption (post-campaign) means filters can operate on mod tier information without full identification. This is a genuine gameplay differentiator — experienced players can filter on unseen mod quality.

---

## 57. Unique Items

### 57.1 Design Philosophy

Every Unique answers: "What build does this make possible?" not "Is this better than a Rare?"

Uniques exist to enable specific build archetypes through their signature modifiers. The gap between a Unique's raw stats and a well-crafted Exotant should be obvious — players wear a Unique for its enabling effect, not its Life or resistance rolls.

### 57.2 Design Principles


| Principle                             | Implementation                                                                                                            |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Build-enabling, not stat-sticking** | Every Unique has at least one modifier that enables a playstyle impossible with Rare/Exotant gear                         |
| **No filler levelling Uniques**       | Every Unique in MVP roster has endgame relevance                                                                          |
| **No slot-dominant chase items**      | No Headhunter/Mageblood equivalents that warp the endgame economy in MVP. Chase items are Apex-crafted, not Unique drops. |
| **Variable rolls**                    | Signature mods have value ranges — a well-rolled Unique is meaningfully better                                            |
| **Non-craftable**                     | Uniques cannot be modified by Agents (except Gl!tch via Surge). Preserves their identity.                                 |
| **Drop-only**                         | Specific sources or target-farmable encounters                                                                            |


### 57.3 MVP Roster Scope

For MVP (Region 1 + early endgame): ~3-5 Uniques per gear slot, ~30-40 total. Each enables a specific build archetype. No filler. Expanded in future Regions and content updates.

Specific Unique roster is content creation work — requires the full creature, skill, and encounter ecosystem visible to design meaningful build-enablers.

---

## 58. Apex Crafting

The ultimate crafting operation — preserving a Unique item's signature modifier as an implicit on an Exotant base.


| Property         | Value                                                                                                                                                                                                    |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Concept**      | Sacrifice a Unique to preserve its signature modifier as an additional implicit on an Exotant base                                                                                                       |
| **Requirements** | Exotant item (base) + specific Unique (sacrifice) + Apex Catalyst (Pinnacle drop) + Forge recipe unlocked                                                                                                |
| **Process**      | 1. Sacrifice Unique. 2. Unique's signature modifier becomes Apex implicit. 3. Base becomes Apex rarity. 4. Item locked from further prefix/suffix modification (implicits and enchants may still apply). |
| **Visual**       | Royal Purple and Gold                                                                                                                                                                                    |
| **Result**       | 8 crafted mods + Unique signature implicit = the most powerful possible item                                                                                                                             |


Apex crafting is the endgame ceiling. The combination of a perfectly crafted Exotant base with a build-enabling Unique's signature creates items that cannot be replicated — true chase content.

---

## 59. Loot Table Framework

The loot generation pipeline is established in DOC_v4_new §31. This section provides the economic framework.

> **STALE / SEE:** This document predates the targeted dossier-system direction. Source-specific
> rewards may also progress biome/Region-bound dossiers with elevated map/zone weights, including
> gear, Skill Card, Agent/informational, creature, and operating outcomes. Cipher rotations may
> refilter their efficient sources. See `MYTHORAS_DOSSIER_SYSTEM.md`; do not infer a final
> representation, tradability model, or exact drop odds from this economy draft.

### 59.1 Two-Table Model Summary

**Table 1 — Base Drop Pool (Universal):** NEM, Contracts (all tiers, weighted), Agents (all tiers, probability-gated), ReAgents, DeAgents, enAgents, Skill Cards, base gear, elemental crafting materials, **Ciphers (L1 from late campaign; higher Layers in endgame)**.

**Table 2 — Exclusive Drop Pool (Source-Specific):** Circuit Champion/Region Sovereign rewards, elite-specific items, Apex-exclusive materials, boss-specific Uniques, Pinnacle materials, endgame system rewards, special zone modifier pool expansions.

### 59.2 Pipeline Safeguard

Additive within each layer (quantity, rarity, quality). Multiplicative between layers. No single source can produce runaway multiplication. Moderate investment across all three layers outperforms extreme investment in one.

### 59.3 Loot Presentation

Smart-stack NEM and common materials. Individual display for Agents, Skill Cards, gear, Ciphers, and notable items. Volume is the reward — the "piñata" moment of a high-modifier encounter dropping many distinct items creates the emotional payoff. Rarity highlighting (glow, border, sound) directs attention to notable drops without hiding volume.

---

## 60. Skill Card Vendor Progression

Skill Card availability varies by progression point and Region.


| Progression Point         | Availability                                                           |
| ------------------------- | ---------------------------------------------------------------------- |
| Region 1 (campaign)       | Discipline-specific skills + common universals                         |
| Mid Region 2 (expansion)  | First unrestricted vendor — stocks most basic Skill Cards and Supports |
| Late Region 2 (expansion) | Full library access                                                    |


---

## Part V Summary

**Economy Structure:** NEM for vendors. Agents for crafting. Contracts for captures (7 variants: Standard through Lucky Roll). ReAgents for precision. DeAgents for conditional filtering. enAgents for scouting (Embed/Encounter-Shape/Enrichment). Crafting Materials stream-specific. CC (Computer Cycles) as Forge fuel. Ciphers as droppable endgame zone items.

**Gear System:** 10 slots per creature, 50 total across squad. Armament base types updated: Pure Armour/Evasion/Barrier/Oura plus combinations. Forbidden Hybrid pairs (Armour/Oura and Evasion/Barrier) are Unique-only. No Mantle. Shield subtypes: Shield, Shroud, Manifest, Barrier Membrane. Directive replaces Keystone in Battlemage exception language.

**Rarity Hierarchy:** Initiate → Magic (2 mods) → Rare (4 mods) → Exotant (8 mods) → Unique (build-enabling, fixed) → Apex (Exotant + Unique implicit, pinnacle crafting). Relic deferred with Domains to expansion.

**Agent System:** Foundation through Pinnacle. Fracture Agent (confirmed name — gear only, not an ailment). Preservation Agent (snapshot/restore). Secondary Stream Reroll Agent (post-capture, endgame only). Domain-related Agents deferred.

**Crafting Query System:** Agent + ReAgent + DeAgent = database query. Forge Terminal visualises operations. CC paces advanced crafting without restricting it.

**Decryption:** Campaign fully encrypted (Decrypt Agent). Endgame partial decryption (mod count, best tier, category icons) via Cryptological Decrypt Agent stash upgrade.

**Domains:** Deferred to expansion. Domain Catalysts, Relics, Infection Agent, Domain Remnants all require Domain content.

**Gl!tch System:** Negative only for MVP. Surge Agent. One-time irreversible gamble. Distortion DeAgent enables P/S skewing.

**Species Mod Pools:** 12-18 mods per species. Max 2 implicit slots for MVP. Notables (low weight, build-defining) + Small Passives (high weight, diluters). Variable P/S Ratios as base type property.

**Cipher Economy:** Ciphers drop in global loot pool from late campaign (L1 Ciphers at ~90% completion). Layer 1-5 structure. Boss encounters within Ciphers drop higher-Layer Ciphers (sustain mechanic). 3 Ciphers → 1 higher-Layer Cipher (deterministic upgrade). Frontier investment as primary lever for Cipher sustain and tier advancement. Overrides applied pre-run.

**Field Crafting:** Backpack panel. Direct Agent application, salvage, small vendor recipes, enAgent application. Heavy operations require Forge Terminal.

**Vendor Recipes:** MVP ~5-10 meaningful recipes. Per-session caps and cooldowns prevent exploitation.

**Loot Filter:** Potential-based. Works on partially-decrypted items. Player-saved shareable patterns.

**Unique Items:** ~30-40 MVP roster. Build-enabling, not stat-sticking. Variable rolls. Non-craftable. Drop-only.

**Apex Crafting:** Sacrifice Unique → implicit on Exotant. Endgame ceiling. Requires Apex Catalyst (Pinnacle drop).

**Key Design Principles:**

- Probability gates, not content locks
- Agent rarity is the primary crafting gate
- Player knowledge rewarded through query-building crafting
- Volatile stats require dedicated investment, not free attribute scaling
- Offence encouraged, immortality as hard as possible
- 50 gear slots creates depth without requiring full optimisation
- Cipher economy self-sustaining through boss drops and Forge combining

---

**End of Part V: Economy & Crafting**