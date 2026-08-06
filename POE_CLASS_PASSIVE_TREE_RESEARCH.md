# Path of Exile — Character Passive Skill Tree Research

Research for Mythoras Motherboard Grid design. Companion to `POE_RESEARCH.md` (systems map) and `ATLAS_TREE_RESEARCH.md` (Atlas-only). **This document covers the character / class Passive Skill Tree** — the shared Str/Dex/Int geography players allocate as they level, plus Ascendancies, jewels, Cluster Jewels, Timeless Jewels, and anointments.

> **Not Atlas.** The Atlas Passive Tree configures *what content appears in maps*. The character tree configures *who the exile is*. Do not conflate them. One short contrast: Atlas specialisation is a farm menu; the character tree is a geography of opportunity cost. See `ATLAS_TREE_RESEARCH.md` for Atlas history only.

> **Verification.** Claims pinned to GGG first-party pages, patch notes, or high-trust secondaries (PoE Wiki, Maxroll, contemporary press interviews with Chris Wilson). Anything not verified against a primary or strong secondary is flagged **[unverified]**. Counts (node totals, socket counts, Labyrinth point schedules) drift by patch — treat as era-specific.

---

## 0. Why this document exists

Mythoras's **Motherboard Grid** is the Technician's global passive tree: one **Global Route** benefiting all creatures, plus **five Slot-Local Subroutes** (`CONTEXT.md` CRITICAL CORRECTIONS #2, #9). PoE's **character** Passive Skill Tree is the closest reference for:

- Shared geography + biased starts
- Travel as opportunity cost
- Keystones as rule-rewrites
- Dense subclass graphs (Ascendancies)
- **Augmentable centers** that grow spoke-clusters (Cluster Jewels — the owner's preferred Ascendancy-augmentation pattern)

The design question is not "copy PoE's tree." It is: **which structural lessons about pathfinding-as-build, hub-and-spoke augmentation, and commitment vs respec should transfer into the Grid — and which must be rejected given Technician-global / slot-local / creature-local ownership locks.**

---

## 1. History — design intent, redesigns, and why

### 1.1 Founding intent (closed beta era)

Chris Wilson (GGG, 2012 interview) framed the tree after surveying other games' skill trees and intentionally **separating actives from passives**:

> "…pull out all of the active skills into a separate system and just look at the passive skills as kind of a fingerprint of the DNA of the character."
> ([Marooners' Rock interview, Part 3](https://maroonersrock.com/2012/02/interview-chris-wilson-path-of-exile-part-3-of-3/))

Design parameters they iterated on (same interview):

| Parameter | PoE's settled choice |
|---|---|
| Points per node | One point allocates a node (no multi-rank stacking on the same node) |
| Graph shape | Maze-like web, not a linear ladder |
| Thematic grouping | Related bonuses clustered ("suburbs"); attribute highways as "roads" |
| Exploration vs planning | Exploreable directionality ("cast speed and fire damage are that way") without requiring pencil-and-paper for every build |

Wilson also described introducing **attribute highways** (~0.93 era) — dedicated +attribute travel nodes arranged so players can cross distance faster than detouring through themed clusters. That change forced a large layout redo (~15–20 man-days just for icon placement, per the same interview).

**Design intent (reconstructed from GGG framing):** Passives are identity DNA; actives are the skill gem system. The tree should be navigable by spatial intuition (region colour, cluster themes) while remaining deep enough that theorycrafters never finish mapping it.

### 1.2 Early closed-beta redesign — class identity via opportunity cost (0.9.11)

[0.9.11 patch notes](https://www.pathofexile.com/forum/view-thread/39492/page/1) explicitly redesigned the tree with:

- Fewer choices at the very beginning of class start areas
- **Class identities strengthened with increased opportunity costs to building heavily off-class**
- Builds needing a few specialised notables/keystones made easier
- Builds needing many cross-tree notables/keystones made more costly
- Defensive nodes made more even around the tree

**Why.** Pure freedom without friction produces homogenised "best paths." Raising the *travel tax* for off-class specialisation preserves class flavour without hard-locking nodes behind class gates.

### 1.3 Official product framing (ongoing)

GGG's public tree page states the core pitch:

> "All character classes share the same tree, but start at different locations that are aligned with their primary specialties. You're able to either focus on improving your core abilities or travel across the tree to allocate exotic skills that your class normally wouldn't have access to."
> ([pathofexile.com/passive-skill-tree](https://www.pathofexile.com/passive-skill-tree))

Same page on respec philosophy:

> "Fixing mistakes with a character build or improving small-medium sized aspects is relatively easy, but our intention is that players who want to try substantially divergent character builds are encouraged to play a new character through the game, organically leveling it up rather than just respeccing into it."

Node count cited on that page: **1325 skills** (era-specific; wiki/community counts often say 1500+ depending on patch and what is counted).

### 1.4 Jewels open the tree to modification (2.0 *The Awakening*, 2015)

[Version 2.0.0 notes](https://www.poewiki.net/wiki/Version_2.0.0): Jewels socket into the passive tree; **21 sockets** added; layout/pathing tweaked to accommodate them. Unique jewels can alter passives in a radius, meet thresholds, or change tree rules. Magic/rare jewels let players effectively craft their own notables.

Chris Wilson (press, Act IV preview era): evaluating the tree becomes "not just looking for the things that apply to you; you're looking for the things that could apply to you with the right twist" ([Massively Overpowered Act IV preview](https://massivelyop.com/2015/04/10/path-of-exile-reveals-act-iv-opens-the-passive-tree-to-modification/)).

**Why.** A static 1000+ node graph eventually saturates. Jewels add a **itemisation layer onto geography** — the tree becomes a board that items rewrite.

### 1.5 Ascendancy expansion (2.0/Ascendancy, March 2016)

[Ascendancy promo](https://www.pathofexile.com/ascendancy) / [wiki](https://www.poewiki.net/wiki/Path_of_Exile:_Ascendancy): Ascendancy classes, Trials of Ascendancy, the Lord's Labyrinth, and Labyrinth enchantments. Originally **19 Ascendancy classes** (promo copy); modern counts vary as classes are added/replaced (e.g. Raider→Warden; Scion variants). Each base class picks among Ascendancy options; Scion historically had one (Ascendant), with later variants.

**Why.** The main tree is broad and shared. Ascendancies inject **dense, class-gated peak power** without bloating the shared graph with every build-defining notable.

### 1.6 Cluster Jewels expand the rim (3.10 *Delirium*, 2020)

[GGG Cluster Jewels announcement](https://www.pathofexile.com/forum/view-thread/2783927/page/1): Cluster Jewels socket into **outermost Large Jewel Sockets**, grow new clusters (smalls + notables + optional nested sockets), three sizes (Large/Medium/Small), hundreds of new notables, craftable like other jewels.

**Why.** Endgame needed more specialised depth without another full tree redraw. Growing **outward from rim hubs** preserved muscle memory of the inner graph.

### 1.7 Harvest growth without scramble (3.11 *Harvest*, 2020)

Wilson: team avoided capricious scrambling; "we just tried to add stuff" — new keystones/notables, support for league-born playstyles, popular Timeless-Jewel-only keystones (e.g. The Agnostic) promoted onto the main tree ([Massively Overpowered Harvest interview](https://massivelyop.com/2020/06/02/path-of-exiles-harvest-introduces-growth-of-passive-skill-tree-brands-and-two-handed-weapon-skills/)).

**Why.** Additive growth > destructive remaps for a product whose players navigate by years of spatial memory.

### 1.8 Scourge masteries + prune-without-erasing (3.16 *Scourge*, Oct 2021)

[Massively Overpowered Scourge interview](https://massivelyop.com/2021/10/14/path-of-exiles-scourge-revamps-skill-tree-adds-passive-masteries-and-guild-hideouts/): Wilson emphasised keeping the tree similar so muscle memory survives. Changes: strengthen starts, improve clusters, concentrate power on primary functions, move niche build-enabling stats into **Passive Skill Masteries**. Masteries appear after allocating a Notable in a themed cluster; the player spends a point to pick one bonus from a **shared thematic menu** accessible from any matching cluster.

Wilson: the mastery system "essentially let us add hundreds of powerful new notable passives that you can access from all over the tree."

**Why.** Niche enablers scattered at obscure leaves forced pathing that was *only* about reaching one node. Masteries **decouple build-enabling stats from unique geography** while keeping cluster travel meaningful.

### 1.9 Ongoing modifiers (post-Scourge, summary)

Later systems further mutate the character tree without replacing it (details §5): Timeless Jewels (Legion), anointments (Blight), Tattoos, Runegrafts, Forbidden Flame/Flesh, Thread of Hope / Impossible Escape pathing cheats, etc. Pattern: **the graph is sacred; mutation layers are how depth expands.**

### 1.10 Timeline summary

| Era | Change | Design problem solved |
|---|---|---|
| Early beta | Shared web + attribute highways | Separated DNA (passives) from verbs (skills); travelable geography |
| 0.9.11 | Opportunity-cost redesign | Class identity without hard locks |
| 2.0 Awakening | Jewel sockets + radius uniques | Tree becomes item-modifiable |
| Ascendancy (2016) | Dense 8-point subclass trees | Peak identity without main-tree bloat |
| Delirium | Cluster Jewels on outer sockets | Rim expansion / craftable subtrees |
| Harvest | Additive growth + Timeless keystones onto tree | Support new playstyles; preserve layout memory |
| Scourge 3.16 | Masteries + cluster identity pass | Niche power without obscure leaf-hunting |
| Ongoing | Anoints, Timeless, Tattoos, etc. | More mutation axes on a stable board |

---

## 2. Why allocating on it feels interesting

### 2.1 Shared geography, private path

Every exile walks the **same map**. Builds are not separate class trees — they are **routes** through a common continent. That creates:

- Shared language ("I'm going for Point Blank then east to the jewel socket")
- Visible tradeoffs (your path is a shape others recognise)
- Community tooling gravity (official planner, Path of Building)

### 2.2 Class start bias without class locks

Starts sit on the **inner wheel** in attribute sectors (Str red / Dex green / Int blue). Hybrids sit on sector borders. Scion starts at the **centre**. ([PoE Wiki — Passive skill](https://www.poewiki.net/wiki/Passive_skill))

You *can* leave your sector; you pay **travel points**. That bias is softer than separate trees and harder than free teleport allocation.

### 2.3 Travel opportunity cost

Attribute highways are cheap distance; themed clusters are expensive suburbs. Efficient pathing is a skill. Cross-tree builds are possible but "taxed" — exactly the 0.9.11 design goal.

### 2.4 Keystones as rule rewrites

Keystones "fundamentally change the way a character is played by altering the game rules," usually with a positive and a negative ([official tree page](https://www.pathofexile.com/passive-skill-tree)). They are landmarks players route *toward* or *around*. Taking one is a commitment story, not a +4% bump.

### 2.5 Respec vs commitment

- Quest refund points (~20) + Orbs of Regret (1 refund each) enable local fixes ([wiki](https://www.poewiki.net/wiki/Passive_skill); [Orb of Regret](https://www.poewiki.net/wiki/Regret_Orb)).
- Full divergent rebuilds are intentionally sticky; GGG pushes "new character" for large pivots ([official tree page](https://www.pathofexile.com/passive-skill-tree)).
- Gold respec options and PoE2's gold refunds soften this later — the *philosophy* of sticky identity remains the design north star **[era-dependent]**.

Interest comes from **decisions that leave a scar**. Perfect free respec collapses pathfinding into a spreadsheet toggle.

### 2.6 Build-as-pathfinding

Planning is literally: search → highlight → compare distance from current frontier → choose a corridor that harvests secondary value on the way. The wiki's own "how to plan" section is a pathfinding algorithm ([wiki](https://www.poewiki.net/wiki/Passive_skill)).

Jewels, anoints, and Cluster Jewels add **teleports, overlays, and grafted subgraphs** onto that pathfinding problem — the interesting loop deepens without abandoning geography.

### 2.7 What makes it feel deep (not just wide)

| Lever | Effect |
|---|---|
| Finite points (~99 from levels + ~23–24 quests; Ascendancy points separate) | Scarcity |
| Connectivity requirement | No free jumps (unless a jewel cheats connectivity) |
| Named Notables as landmarks | Macro readability |
| Masteries as portable niche menus | Depth without forced leaf travel |
| Item mutation layers | Same board, different laws |

---

## 3. Shape and structure

### 3.1 Outer / inner wheels and attribute regions

Mental model from the wiki: **suburbs (themed clusters) + roads (attribute highways)** on a roughly circular layout.

- **Inner wheel:** class starts on the rim of the central ring; Scion in the centre.
- **Attribute sectors:** Strength (life/armour/melee flavour), Dexterity (evasion/attack/projectile flavour), Intelligence (ES/mana/spell/minion flavour), with hybrid wedges between.
- **Outer rim:** more specialised clusters; **Large Jewel Sockets** for Cluster Jewels sit on the outermost ring ([wiki Cluster jewel](https://www.poewiki.net/wiki/Cluster_jewel)).

Geometry in data (for implementers): nodes use orbit radii and orbit indices in the Passive Skill Tree JSON (`o`, `oidx`) — concentric ring placement, not a freeform node graph ([wiki Passive Skill Tree JSON](https://www.poewiki.net/wiki/Passive_Skill_Tree_JSON)).

### 3.2 Class starts (reference table)

| Class | Attribute bias | Start flavour (approx.) |
|---|---|---|
| Marauder | Str | Melee, life, armour |
| Ranger | Dex | Bows, evasion, attack speed |
| Witch | Int | Spells, ES, minions |
| Duelist | Str/Dex | Hybrid melee / bleed / block |
| Templar | Str/Int | Elemental, totems, auras |
| Shadow | Dex/Int | Crit, traps/mines, hybrid defence |
| Scion | All / centre | Flexible; pays for lack of strong early bias |

Any class can reach any node; Ascendancy options remain class-gated (a Templar cannot become a Deadeye).

### 3.3 Node types

| Type | Role |
|---|---|
| **Small** | Minor bonuses or +attribute travel |
| **Notable** | Named cluster endpoints; macro landmarks; often unlock Masteries |
| **Keystone** | Rule-changing; usually benefit + downside |
| **Mastery** | Post-Scourge selectable bonus from a thematic menu after allocating a Notable in-cluster (not from anoint-only notables) |
| **Jewel socket** | Empty until socketed; ~21 sockets historically (15 basic + 6 Large for clusters — [wiki](https://www.poewiki.net/wiki/Passive_skill)); counts **[era-specific]** |
| **Ascendancy nodes** | Separate small tree, shown near start tab; own point pool |

### 3.4 How geometry evolved (lessons)

1. **Stable silhouette, mutable contents** — players keep "north is Witch."
2. **Additive rim growth** (Cluster Jewels) beats inner scramble.
3. **Masteries** let niche power float free of unique leaf locations.
4. **Jewel sockets as punctuation** — geography includes *holes for items*, not only stats.
5. Muscle-memory preservation is an explicit GGG goal (Scourge / Harvest interviews).

---

## 4. Ascendancies — dense subclass graphs (and the hub-and-spoke question)

### 4.1 Unlock fantasy — Labyrinth

[Ascendancy Labyrinth page](https://www.pathofexile.com/ascendancy/labyrinth): Trials of Ascendancy → Lord's Labyrinth → Emperor Izaro → Altar of Ascendancy. Daily-shifting full-Labyrinth generation; trap gauntlets; multi-phase Izaro.

Unlock schedule (modern PoE1 pattern, [wiki Ascendancy class](https://www.poewiki.net/wiki/Ascendancy_class)):

| Labyrinth tier | Typical reward |
|---|---|
| Labyrinth | Choose Ascendancy + 2 points |
| Cruel | +2 |
| Merciless | +2 |
| Eternal (endgame) | +2 |
| **Total** | **8 Ascendancy points** |

Promo framing: "Nineteen souls survived… Nineteen challengers…" ([ascendancy classes page](https://www.pathofexile.com/ascendancy/classes)) — Ascendancy as *earned successor identity*, not a dropdown at character create.

### 4.2 Relation to the main tree

- Ascendancy trees are **separate point pools** shown as a **tab near the class start** on the main tree UI ([wiki](https://www.poewiki.net/wiki/Ascendancy_class)).
- They do **not** generally path-connect into main-tree nodes; they are a sibling graph, not a suburb.
- Power density is far higher than main-tree notables — Ascendancy choice is often *the* build-defining decision (`POE_RESEARCH.md` §3.1).
- Main tree remains the broad chassis; Ascendancy is the engine swap.

### 4.3 Typical Ascendancy graph grammar

Aside from Scion variants ([wiki](https://www.poewiki.net/wiki/Ascendancy_class)):

- ~12–16 nodes per Ascendancy tree
- Potent notables gated by a generic lesser node → **2 points to a notable**
- Deeper notables gated behind prior notables → **4 points** for a "capstone" style pick
- With 8 points, players choose a **small number of powerful notables**, not a wide spray
- Until Eternal Lab, only one 4-pointer is typically affordable

**Scion / Ascendant exception:** different costing (class-notables and extra starting locations); hybrid identity rather than one dense theme.

### 4.4 What Ascendancies are *not*

- Not Atlas specialisation
- Not Cluster Jewels (though both are "small dense graphs")
- Not Masteries (Masteries are main-tree portable menus)

### 4.5 Owner direction — augmentable Ascendancy centers (Cluster-jewel hub-and-spoke)

**Owner request:** Ascendancies should be augmentable by a **central node that clusters emanate from** — a hub-and-spoke pattern inspired by Cluster Jewels, carefully mapped **without** Atlas language.

#### What Cluster Jewels actually do (the pattern to steal)

From [GGG announcement](https://www.pathofexile.com/forum/view-thread/2783927/page/1) + [wiki](https://www.poewiki.net/wiki/Cluster_jewel):

```
[Main tree outer Large Jewel Socket]  ← hub attachment point on the big geography
            │
            ▼
   ┌─────────────────────┐
   │  LARGE CLUSTER      │  ← generated subgraph (8–12 passives)
   │  smalls → notables  │
   │  + Medium sockets   │  ← nested hubs
   └─────────┬───────────┘
             ├─► Medium cluster (4–6) → Small socket → Small cluster (2–3)
             └─► Medium cluster …
```

Properties that matter for Mythoras:

| Property | Cluster Jewel behaviour | Ascendancy-analogue reading |
|---|---|---|
| **Hub** | Allocated Large Jewel Socket on the rim | A designated central Ascendancy/Pinnacle node |
| **Item / augment** | The jewel item defines size, theme enchant, notables | An augment item/module slotted into the hub |
| **Spokes** | Generated small→notable paths | Emanating themed mini-clusters |
| **Nesting** | Large→Medium→Small sockets | Optional depth investment |
| **Refund UX** | Unsocketing refunds points spent on that cluster (keystone/socket allocated costs 1 regret) | Augment removal should cleanly unwind spoke investment |
| **Isolation** | Cluster passives do **not** interact with jewel radii | Spoke graphs should not accidentally dual-dip main-grid radius effects |
| **Craft identity** | Enchant locks theme; explicits roll notables | Hub defines identity; rolls/choices flesh spokes |

#### Careful mapping — Ascendancy vs Cluster Jewel (do not merge blindly)

| | Stock PoE Ascendancy | Stock PoE Cluster Jewel | Proposed Mythoras hybrid (design space) |
|---|---|---|---|
| Point pool | Separate 8 Ascendancy points | Uses main passive points | Decide: separate pool vs Grid points |
| Attachment | Tab near class start | Outer socket on main tree | Central node *of the Ascendancy/Pinnacle graph* as hub |
| Gating | Labyrinth progression | Finding/crafting the jewel + pathing to socket | Proving / Pinnacle unlock + augment item |
| Density | Fixed authored tree | Procedural/crafted notables from pools | Authored hub + craftable/selectable spokes |
| Class lock | Hard (per base class) | Soft (anyone who reaches the socket) | Creature/Principal lock vs Technician lock — see §6 |

**Recommended reading for Mythoras:** treat Ascendancy-likes as **authored hub graphs** whose *power ceiling* can be raised by **socketed spoke-generators** (Cluster-jewel lesson), not as Atlas mechanic amplifiers.

#### Anti-patterns to avoid

- Do not place "Atlas-style block/amplify content" nodes on Ascendancy hubs.
- Do not make spoke clusters apply only in certain zones/maps — that reintroduces Atlas regional-tree failure modes (`ATLAS_TREE_RESEARCH.md` §1.2).
- Do not let hub augments silently become a second Global Route (ownership collision — §6).

---

## 5. Tree-modifiers — jewels, Timeless, anointments, lessons for augmentable centers

### 5.1 Ordinary jewels (Awakening+)

- Socket into allocated jewel sockets; magic/rare craftable; uniques can be build-defining.
- **Radius jewels** rewrite nearby passives (transform, threshold, disable notables, grant unallocated smalls, etc.) — see wiki unique jewel list ([Passive skill](https://www.poewiki.net/wiki/Passive_skill)).
- Lesson: **a socket is a law-change port**, not just a +stats hole.

### 5.2 Cluster Jewels (Delirium+) — primary hub-and-spoke reference

See §4.5. Additional lessons:

- Size tiers create a **depth ladder** (Large offensive / Medium mechanic / Small defence in original GGG framing).
- Optimal pathing tables exist because **point efficiency is a first-class puzzle** ([wiki](https://www.poewiki.net/wiki/Cluster_jewel)).
- Duplicate named notables: cluster notables can stack unless limited; anoint + same notable does **not** double — one instance of a named notable wins ([community consensus / guides](https://maxroll.gg/poe/resources/cluster-jewels-explained); anoint stacking articles — treat exact stacking rules as **verify in-patch**).

### 5.3 Timeless Jewels (Legion+)

[Timeless Jewel wiki](https://www.poewiki.net/wiki/Timeless_Jewel): unique jewels that **Conquer** passives in radius based on seed + name. Seed transforms smalls/notables; name transforms keystones. Conquered nodes cannot be further modified by other jewels. Huge seed space → theorycrafting industry (calculators, PoB).

Lesson for augmentable centers:

- **Seeded transformation of a neighbourhood** ≠ growing a new spoke graph.
- Use when you want "this hub rewrites local law," not when you want "this hub grows new content."
- Historic/Conquered exclusivity teaches: **mutation layers need mutual exclusion rules** or they stack into chaos.

### 5.4 Anointments (Blight+)

Sister Cassia + Oils anoint an amulet (typically) to grant a **main-tree Notable without pathing to it** ([Cassia wiki](https://www.poewiki.net/wiki/Cassia); [TheGamer oils guide](https://www.thegamer.com/path-of-exile-oil-anoint-obtain-use-guide/)). Rings anoint tower-defence bonuses (Blight-specific). Some notables are anoint-only.

Lesson:

- **Remote allocation** of a landmark notable — a soft teleport.
- Economy of oils creates rarity tiers for "which notable is worth the shortcut."
- Anoints do not grant Masteries for that notable ([wiki Masteries note](https://www.poewiki.net/wiki/Passive_skill)).

### 5.5 Forbidden Flame / Forbidden Flesh

Paired corrupted jewels that allocate a specific Ascendancy notable when both matching mods are present ([wiki Corrupted / jewel entries](https://www.poewiki.net/wiki/Corrupted)).

Lesson: **cross-Ascendancy leakage** as an expensive, itemised exception — useful if Mythoras wants rare cross-Principal borrowing without opening the floodgates.

### 5.6 Connectivity cheats (selected)

| Jewel | Effect | Lesson |
|---|---|---|
| Intuitive Leap | Allocate passives in small radius without connectivity | Local soft-teleport |
| Thread of Hope | Ring-shaped connectivity cheat | Controlled "jump band" |
| Impossible Escape | Allocate around a named keystone without taking it | Landmark orbiting |
| Pure Talent | Bonus if tree connects to other class starts | Reward deliberate long travel |

### 5.7 Tattoos & Runegrafts **[verify current league currency]**

Wiki: Tattoos transform minor (+attribute) nodes; Runegrafts transform Masteries ([Passive skill](https://www.poewiki.net/wiki/Passive_skill)). Lesson: even travel nodes can become a mutable crafting surface.

### 5.8 Synthesis — lessons for Mythoras augmentable centers

| Pattern | Steal? | Use when… |
|---|---|---|
| Cluster hub→spoke growth | **Yes (primary)** | Owner wants Ascendancy/Pinnacle centers that *grow* clusters |
| Timeless neighbourhood rewrite | Selective | Local law change without new nodes |
| Anoint remote notable | Selective | Slot-local wants one Global-route notable without paying travel |
| Radius transform uniques | Selective | Rare build-enablers, not baseline Grid UX |
| Forbidden pair leakage | Selective | Expensive cross-Principal borrowing |
| Atlas amplify/block clusters | **No** (wrong domain) | Content menu ≠ character DNA |

**Design rule of thumb:** If the augment *adds geography*, use Cluster-jewel grammar. If it *rewrites existing geography*, use Timeless/radius grammar. If it *borrows a landmark without travel*, use anoint grammar.

---

## 6. REQUIRED — Mythoras Motherboard Grid crosswalk

Locks from `CONTEXT.md`: Grid is **Technician-global** (Critical #2); Skill Cards are **creature-local** (Critical #9); slot-local subroutes are **slot-owned**, not creature-entity-owned.

### 6.1 Mapping table — Keep / Reconsider / Not copy

| PoE character-tree element | Mythoras analogue | Verdict | Notes |
|---|---|---|---|
| Shared passive tree | Motherboard Grid | **Keep** | One board for the Technician |
| Class starting positions | **Foundations** (Warlord, Bladedancer, Architect, Channeler) | **Keep** | Sets Grid start; 4 Foundations vs PoE's 7 classes |
| Attribute sectors (Str/Dex/Int) | Attribute regions (Authority / Invictus / Animus / Order) | **Keep** | Four sectors; Forbidden Hybrid friction is explicit in Mythoras itemisation (`POE_RESEARCH.md` §5.2) |
| Travel opportunity cost | Global Route pathing cost | **Keep** | Core feel |
| Small / Notable / Keystone | Same taxonomy on Grid | **Keep** | Keystones as rule-rewrites especially valuable |
| Masteries | Cluster-themed selectable bonuses | **Reconsider** | Powerful for reducing leaf-hunting; ensure menus don't erase geographic identity entirely |
| Jewel sockets | Grid sockets for Grid-augments | **Reconsider** | Powerful; must stay Technician-owned, not creature gear |
| Cluster Jewels hub-and-spoke | Augmentable hubs on Grid **and/or** on Pinnacle/Principal centers | **Keep (adapted)** | Owner's preferred Ascendancy augmentation pattern |
| Ascendancy 8-point subclass tree | **Pinnacle Evolution** + **Principal** (creature-side) | **Keep as analogues, not copies** | See ownership below |
| Labyrinth as unlock gauntlet | **The Proving** (Principal unlock fantasy) | **Reconsider** | Keep "earned identity" fantasy; don't copy trap-lab UX blindly |
| Anoint remote notable | Slot-local or itemised "remote notable" | **Reconsider** | Easy to violate Global vs Slot clarity |
| Timeless Conquer radius | Local Grid rewrite items | **Reconsider** | High theorycraft tax; may overwhelm squad game |
| Full sticky respec philosophy | Commitment on Global Route | **Reconsider** | Squad games may need softer Global respec than PoE hardcore sticky; keep *some* scar |
| Per-character single path | Global Route + 5 Slot-Local Subroutes | **Not copy** | PoE's 1:1 character:tree is the wrong ownership model |
| Atlas passive clusters | — | **Not copy here** | Wrong document / wrong system |
| Class-gated Ascendancy list | Foundation-gated? vs creature Principal list | **Reconsider** | Principals are species-tied (`CONTEXT.md`); Foundations are Technician starts — do not merge |

### 6.2 Ownership collision flags (critical)

| Collision | Risk | Mitigation |
|---|---|---|
| **Creature Ascendancy on Technician Grid** | Players expect Pinnacle/Principal nodes on the Grid → micromanagement hell + violates Critical #2/#9 | Keep Pinnacle Evolution / Principal as **creature-local graphs**; Grid may *reference* or *empower* them via global/slot modifiers, but not host full per-creature Ascendancy pathing |
| **Slot-Local Subroute vs Cluster spokes** | Both are "branches off a trunk" — easy to double-count | Define Slot-Local as **persistent slot investment on the Grid**; Cluster-style spokes as **augment modules** hanging off hubs (Global hubs or Principal hubs), not a sixth ownership axis |
| **Anoint-like remote notables** | Slot grabs Global landmarks → Global Route identity blurs | If remote allocation exists, budget it as Slot-Local spend or item slot, and show it visually as a *link*, not as Global path paint |
| **Jewel-like Grid augments vs creature gear** | Sockets on Grid vs sockets on creatures | Grid sockets = Technician; creature gear = creature. Never let a creature item rewrite the Global Route silently |
| **Foundation vs Principal** | Both feel like "class" | Foundation = Technician start bias on Grid. Principal = creature philosophical commitment. Pinnacle Evolution = creature Ascendancy power spike. Three layers, three owners |
| **Hub augment stacking** | Cluster + Timeless + anoint on one hub → opaque | Mutual exclusion tiers (like Conquered jewels) or hard augment slot caps |

### 6.3 Structural recommendation for Mythoras (synthesis)

```
TECHNICIAN
  └── Motherboard Grid (one board)
        ├── Foundation start (biased entry)
        ├── Global Route (path paint; benefits all creatures)
        ├── 5× Slot-Local Subroutes (branch off Global; slot-owned)
        └── Optional Grid hubs (jewel/cluster-style) — Technician augments

CREATURE (per entity)
  ├── Skill Frame / Skill Cards / Supports   ← not Grid
  ├── Principal (philosophical commitment; Proving-gated)
  └── Pinnacle Evolution (Ascendancy-like power graph)
        └── [Owner direction] Augmentable CENTER hub
              └── Spoke clusters (Cluster-jewel grammar)
```

**How PoE Ascendancy maps:**

- PoE Ascendancy tree ≈ **Pinnacle Evolution / Principal graph** (creature), *not* a tab on the Technician Grid.
- PoE Cluster Jewel ≈ **augmentation grammar** for those creature hubs *and optionally* for Technician Grid rim hubs.
- PoE class start ≈ **Foundation**.
- PoE main-tree path ≈ **Global Route** (+ travel tax).
- PoE "I path into another class's neighbourhood" ≈ Global Route entering another Attribute sector — still Technician-global.

### 6.4 UI / shape implications

| PoE UX | Mythoras implication |
|---|---|
| One huge circular tree, zoom/search/highlight | Grid needs search + path highlight; Foundation tint on sectors |
| Ascendancy as tab near start | Principal/Pinnacle should be a **creature panel graph**, visually distinct from Grid (different chrome/biome), not a tab that looks like "another Grid" |
| Cluster growth from outer sockets | Show hub sockets as **ports**; spoke clusters bloom outward with clear "augment" framing |
| Attribute highway readability | Four Attribute colours; Forbidden Hybrid zones visually "hostile" or costly |
| Sticky respec | Global Route: scarred/costly. Slot-Local: cheaper to retune (encourages squad experimentation without rewriting squad DNA) **[design proposal — not locked]** |
| PoB necessity | Expect a planner tool; complexity that requires it is a depth signal *and* an accessibility tax |

### 6.5 What to copy from "feels interesting" (§2)

**Copy:** shared geography, start bias, travel tax, keystone tradeoffs, build-as-pathfinding, augment layers that rewrite or grow the board.

**Don't copy naively:** one-path-one-avatar assumption; Atlas content-menu thinking; Labyrinth trap UX as the only unlock fantasy; infinite mutation layer stacking without exclusion rules.

### 6.6 Open questions for grill (do not invent answers)

Flagged against `CONTEXT.md` OD list where relevant:

- OD-002 Principal tree design — how many Principals per species; whether Principal *is* the hub or sits beside Pinnacle Evolution.
- Should Pinnacle hubs accept Cluster-style augments as **items** (PoE jewel) or as **Grid spends** (points only)?
- Do Slot-Local Subroutes attach at fixed Global Route junctions, or can the Technician place attachment ports?
- Is Foundation remappable (Scion-like centre flexibility) or locked for the campaign?
- Mastery-like menus: Technician-global only, or also on Principal spokes?

---

## 7. Quick reference — primary sources

| Topic | URL |
|---|---|
| Official passive tree + respec philosophy | https://www.pathofexile.com/passive-skill-tree |
| Chris Wilson 2012 design interview | https://maroonersrock.com/2012/02/interview-chris-wilson-path-of-exile-part-3-of-3/ |
| 0.9.11 opportunity-cost redesign | https://www.pathofexile.com/forum/view-thread/39492/page/1 |
| Jewels / Awakening 2.0 | https://www.poewiki.net/wiki/Version_2.0.0 |
| Ascendancy promo / classes / Labyrinth | https://www.pathofexile.com/ascendancy · /classes · /labyrinth |
| Ascendancy mechanics | https://www.poewiki.net/wiki/Ascendancy_class |
| Passive skill / layout / node types | https://www.poewiki.net/wiki/Passive_skill |
| Cluster Jewels announcement | https://www.pathofexile.com/forum/view-thread/2783927/page/1 |
| Cluster Jewels wiki | https://www.poewiki.net/wiki/Cluster_jewel |
| Timeless Jewels | https://www.poewiki.net/wiki/Timeless_Jewel |
| Scourge masteries interview | https://massivelyop.com/2021/10/14/path-of-exiles-scourge-revamps-skill-tree-adds-passive-masteries-and-guild-hideouts/ |
| Harvest tree growth interview | https://massivelyop.com/2020/06/02/path-of-exiles-harvest-introduces-growth-of-passive-skill-tree-brands-and-two-handed-weapon-skills/ |
| Anoint / Cassia | https://www.poewiki.net/wiki/Cassia |
| Mythoras locks | `CONTEXT.md` Critical #2, #9; Progression table (Grid, Foundation, Pinnacle, Principal) |

---

*Document scope: PoE1 character Passive Skill Tree + mutation layers. PoE2 tree differences (weapon-set flex points, gold respec, revised geometry) are noted only where they clarify respec philosophy; they are not the primary reference. Atlas content is intentionally out of scope.*
