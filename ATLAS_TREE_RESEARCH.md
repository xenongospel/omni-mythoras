# Atlas Passive Tree & Character Tree Design Research

Research document for Mythoras Motherboard Grid design. Completes and deepens TREE-specific layers after a prior Opus run hit API limits. Companion to `POE_ENDGAME_RESEARCH.md` (full endgame progression) and `POE_RESEARCH.md` (systems map). This file **does not** re-essay map sustain, Temple boards, or currency — see endgame research for those.

> **Verification.** Claims are pinned to GGG patch notes, GGG news posts, or high-trust secondary sources (PoE Wiki, Maxroll, PoE Vault). Anything not verified against a primary or strong secondary source is flagged **[unverified]**. PoE1 patch numbers and era labels are stated where eras differ.

---

## 0. Why this document exists

Mythoras's **Motherboard Grid** is the Technician's global passive tree: one Global Route benefiting all creatures, plus five Slot-Local Subroutes (`CONTEXT.md` CRITICAL CORRECTIONS #2, #9). PoE's Atlas Passive Tree is the closest reference for *content configuration as a build*, and PoE's character Passive Skill Tree + Ascendancies + Cluster Jewels are the closest reference for *shape, hub/spoke specialization, and augmentable centers*.

The design question is not "copy the Atlas tree." It is: **which structural lessons about specialization menus, global vs regional impact, and hub-augmented clusters should transfer into the Grid — and which should not, given squad ownership locks.**

---

## 1. Atlas Passive Tree history: regional → global → loadouts

### 1.1 Before the Atlas tree: content as noise

By ~2020–2021, PoE1's endgame had accumulated a decade of league mechanics (Breach, Legion, Delirium, Blight, Expedition, Ritual, Heist fragments, etc.) appearing as random "extra content" in maps. Players could not say "I want Legion and not Blight" without relying on fragile, opaque systems (sextants, Zana mods, Watchstone crafting, regional routing). The Atlas Passive Tree was invented to convert that archive from **obligation noise** into a **player-directed menu**.

See `POE_ENDGAME_RESEARCH.md` §2 and §7 for the broader archive→selection principle; this section deepens the tree's own evolution.

### 1.2 Generation 1 — Regional trees (3.13 *Echoes of the Atlas*, Jan 2021)

**What shipped.** Eight Atlas regions (Haewark Hamlet, Tirn's End, Lex Proxima, Lex Ejoris, New Vastir, Glennach Cairns, Valdo's Rest, Lira Arthain), each with its **own fixed passive tree**. Bonuses applied **only to maps in that region**. Points were earned **per region** (Maven arena progress in a region awarded points for that region's tree). Respec currency was not region-locked. ([GGG: Atlas Passive Trees in Echoes](https://www.pathofexile.com/forum/view-thread/3008533); [GGG: Echoes FAQ / Chris Wilson Q&A](https://www.pathofexile.com/forum/view-thread/3008270); [Echoes promo](https://www.pathofexile.com/echoes))

**Design intent (stated).** "Take control of your Atlas by unlocking regional passive trees which augment the content you encounter and rewards you receive while exploring those regions" ([Echoes promo](https://www.pathofexile.com/echoes)). Chris Wilson / GGG framed trees + craftable Watchstones as **permanent specialisation without continual upkeep** — contrast with charge-based sextants ([Echoes FAQ](https://www.pathofexile.com/forum/view-thread/3008270)).

**How it felt in practice.**

| Strength | Cost |
|---|---|
| Geographic identity: "my Lex Proxima is Legion country" | Specialisation was **spatially fragmented** — your tree only mattered when you ran that region |
| Parallel Maven + Conqueror progression | Point budgets were split across eight trees; completing one region did not deepen another |
| Lower per-tree cognitive load (small trees) | Optimal play often meant **routing maps by region** to match the specialised tree — friction between "what I own" and "where my passives apply" |
| Layered with Watchstone sockets (region citadels) | Complexity stacked: regions × Watchstones × regional trees × Awakening Level |

**Why it was built that way (reconstruction from GGG's framing + era context).** The Atlas already *was* regional (Conquerors / citadels / Watchstones since 3.9). Regional trees were the least disruptive place to bolt a first "Atlas build" onto existing geography. They tested the core idea — **allocate points to amplify/block content** — without requiring a full Atlas redesign. Chris confirmed trees were region-scoped and that mechanics still spawned randomly at base rates; trees biased frequency/rewards rather than inventing exclusive spawn exclusivity for every mechanic ([Echoes FAQ](https://www.pathofexile.com/forum/view-thread/3008270)).

**Failure mode of the regional model.** Specialisation that only applies in one eighth of the Atlas fights the player's desire to *run what they own*. If you have a stack of red maps in the wrong region for your juiced tree, the build feels wasted. Regional trees also multiplied UI/state: eight point pools, eight completion curves, eight Maven progress tracks tied to geography.

### 1.3 Generation 2 — One global Atlas tree (3.17 *Siege of the Atlas*, Feb 2022)

**What shipped.** Regions deleted. Regional trees replaced by **one Atlas-wide passive tree** (600+ nodes at reveal) affecting **every map**. Points from map bonus objectives + Atlas quests. Watchstones → Voidstones (see §4). ([GGG: 3.17 patch notes](https://www.pathofexile.com/forum/view-thread/3229187); [GGG: Full Atlas Passive Tree Reveal](https://www.pathofexile.com/forum/view-thread/3229978); [Siege promo / PoEDB quote of GGG copy](https://poedb.tw/us/Siege_of_the_Atlas))

**Stated design goal (GGG, first-party copy):**

> "Most Atlas mechanics have been reworked with a goal of creating **deeper systems that are easier to understand**. Regions have been removed, so your Atlas specialisation affects every map you run. Where you'd previously collect 16 Watchstones, you must now earn four Voidstones…" ([pathofexile.com/siege](https://www.pathofexile.com/siege) / [PoEDB Siege](https://poedb.tw/us/Siege_of_the_Atlas))

Chris Wilson to press (secondary report of GGG statements): front-loaded Atlas point acquisition from early maps lets players "quickly establish an Atlas layout that helps you find and profit from your favorite content" ([Massively Overpowered preview](https://massivelyop.com/2022/01/27/atlas-expands-and-bosses-multiply-in-path-of-exiles-siege-of-the-atlas-expansion-launching-february-4th/) — quote attributed to Wilson; treat attribution as **[secondary-sourced]**).

**Why the consolidation happened (design logic).**

1. **Specialisation must apply where the player actually plays.** Global application means every map run expresses the Atlas build — no wasted stack of "wrong-region" maps.
2. **Depth moved into the allocation graph, not into board geography.** One large tree with amplify/block/keystone clusters is deeper *and* more legible than eight small trees × regional routing × Watchstone sockets.
3. **Trophy-gated global ratchets replaced incremental regional upgrades** (Voidstones) — see §4.
4. **Front-loaded points** make early specialisation feel good quickly; late points deepen niches.

**What the global tree contains (roles, not a full node list).**

- **Sustain / shaping clusters** — map drop, pack size, rare monsters (standard early picks every league; see endgame research §2).
- **Mechanic clusters** — raise chance / density / rewards for Breach, Legion, Delirium, etc.
- **Block / disable notables** — remove a mechanic entirely; often grant a small bonus to remaining extra content (e.g. Dimensional Barrier pattern — [PoE Wiki block-node example via endgame research](https://www.poewiki.net/wiki/Passive_Skill:Atlas~disable~league~3); exact wording varies by patch).
- **Atlas keystones** — rule-benders (favored-map behaviors, scarab tradeoffs, "no extra content" for raw quantity, etc.). Set changes heavily by league ([3.24 keystone churn reported](https://progameguides.com/poe/all-new-atlas-keystones-in-path-of-exile-necropolis-3-24/)).

Point totals have drifted (~117 at 3.17 launch per Wilson press quote **[secondary]**; modern totals ~132–138 depending on patch — [PoEDB Atlas Passive Skill](https://poedb.tw/Atlas_passive_skill)). Treat exact counts as era-specific.

### 1.4 Generation 3 — Loadouts (3.24 *Necropolis*, Mar 2024)

**What shipped.** Up to **three savable Atlas tree loadouts**, unlocked through endgame progression; swap between strategies without spending full respec costs every time. Concurrent with Sextant removal and Scarab power consolidation — juice moved to per-map scarabs, strategy identity stayed on the tree. ([Maxroll 3.24 Atlas Tree Update](https://maxroll.gg/poe/news/path-of-exile-3-24-atlas-tree-update); [GGG 3.24 patch notes](https://www.pathofexile.com/forum/view-thread/3496784); [AOEAH loadout summary](https://www.aoeah.com/news/3186--poe-324-atlas-tree-strategy-guide-best-atlas--mapping-strategies-for-path-of-exile-324-necropolis))

**Why loadouts were added.** A single global tree is powerful but sticky: respecping between "early sustain," "Legion farm," and "bossing" was expensive and psychologically sticky. Loadouts acknowledge that **strategy identity is plural** — players want multiple complete specialisations, not one compromised hybrid. They also soften league-start → mid-league transitions.

**Tension after 3.24 (community, not GGG).** Some players argued scarab stacking + point budgets pushed "one mechanic fully juiced" over multi-mechanic mixes that earlier eras supported ([GGG forum feedback thread](https://www.pathofexile.com/forum/view-thread/3503412)). Design takeaway: **loadouts fix switching cost; they do not by themselves fix whether the point budget rewards monofocus or polyfocus.** That is a separate balance dial.

### 1.5 Timeline summary

| Era | Atlas specialisation form | Scope of impact | Configuration surface |
|---|---|---|---|
| Pre-3.13 | Implicit (sextants, Zana, RNG) | Per-map / opaque | High upkeep, low "build" feel |
| 3.13 Echoes | 8 regional trees | Per region | Geographic + Watchstone board |
| 3.17 Siege | 1 global tree | All maps | Allocation graph + 4 Voidstones |
| 3.24 Necropolis | Global tree + ≤3 loadouts | All maps (per loadout) | Swap strategies; scarabs for burst |

**Portable lesson:** start specialisation where the existing board already segments content (regional was a good *first* experiment); then **collapse geography when specialisation should follow the player, not the map's address.**

---

## 2. Why configuration feels good

The Atlas tree feels good for reasons that are separable from "more nodes." Distill the feel into mechanisms Mythoras can copy without copying PoE's map economy.

### 2.1 Specialisation menu over noise

**Before:** every map could throw any mechanic. Preference was expressed only by quitting content you hate or by fragile prep rituals.

**After:** preference is a **visible allocation**. Amplify what you love; block what you hate; the block node often *pays* you a small bonus for pruning. That converts a content archive into a **curated personal game mode** (`POE_ENDGAME_RESEARCH.md` §9.4).

Psychological properties:

1. **Authorship** — "my Atlas" is a build, not a loot table.
2. **Relief** — deleting content is as satisfying as amplifying it; noise reduction is a reward.
3. **Identity at the meta layer** — character build and Atlas build compose; farming strategy is expressive.
4. **Finite points → real opportunity cost** — you cannot juice everything; scarcity makes the menu meaningful.

### 2.2 Two layers of juice: baseline vs burst

Post-3.24 clean split (stated GGG intent in 3.24 notes: remove tedious prep steps; put power into Scarabs + Atlas Tree — [3.24 notes](https://www.pathofexile.com/forum/view-thread/3496784)):

| Layer | Role | Cadence |
|---|---|---|
| **Atlas tree** | Persistent strategy: "maps tend to contain X; Y never appears" | League-long / loadout-long |
| **Scarabs (consumables)** | Burst intensification: "THIS map is an X bomb" | Per run |

Feeling good depends on both: the tree answers *who I am as a farmer*; scarabs answer *how hard I push tonight*. Without the tree, scarabs are random shopping. Without scarabs, the tree cannot spike a single session. Mythoras should preserve this **persistent vs per-run** split when designing Cipher / Warbanner / Threat Attunement interfaces — without importing map items.

### 2.3 Early universal picks, late expressive picks

Sustain/shaping nodes first; mechanic specialisation second. Guides universally route this way. Design consequence: **the first meta-decisions are safe and near-universal; expressive identity comes after literacy.** Front-loaded point acquisition (Wilson, §1.3) reinforces that.

### 2.4 Cheap enough respec, sticky enough identity

Orbs of Unmaking / later gold respecs keep experimentation viable. Loadouts further reduce switching tax. The feel sweet spot: **experimentation is affordable; commitment is still visible.** If respec were free and instantaneous with no loadout framing, identity would blur; if respec were punitive, the menu would feel like a trap.

### 2.5 Keystones as rule theater

Atlas keystones that delete scarabs, delete extra content, or force favored-map rules create **dramatic tradeoffs**, not 5% bumps. Dramatic tradeoffs make configuration memorable ("I'm a Back to Basics pure-quantity farmer") the way character keystones make builds memorable.

### 2.6 What does *not* make configuration feel good

- Specialisation that applies only to a subset of content you are forced to run anyway (regional failure mode).
- Upkeep rituals that burn charges across filler maps (late-era sextants on Voidstones — see endgame research §5).
- Opaque interactions between too many configuration surfaces (Watchstones × regions × trees).
- Specialisation that gates *access* to aspirational content (GGG later pruned pinnacle-reward passives so players could engage boss content anytime — [PoE Wiki Atlas Passive Tree](https://www.poewiki.net/wiki/Atlas_Passive_Tree) via endgame research §2; exact patch trim **[confirm per era]**).

---

## 3. Character passive tree shape, Ascendancies, and cluster-style hubs

This section is the character-side design research the owner needs for Grid topology — especially **Ascendancy-like centers that clusters emanate from and that a central node can augment**.

### 3.1 Character tree shape evolution

**Core geometry (stable since early live, refined ~0.9x):**

- One **shared web** for all classes; classes differ by **starting position** on the circumference (Scion at center).
- Three attribute **sectors** (STR / DEX / INT) with hybrid wedges between them.
- **"Suburbs and highways"** metaphor (community + wiki teaching model): thematic clusters (suburbs) connected by attribute-stat roads (+10 Str/Dex/Int highways) that enable long-distance travel cheaper than detouring through every suburb ([PoE Wiki: Passive skill](https://www.poewiki.net/wiki/Passive_tree); [fandom Passive skill](https://pathofexile.fandom.com/wiki/Passive_skill)).
- Chris Wilson (2012 interview): attribute highways were an intentional redesign (~15–20 man-days of layout) so travel around the tree was fairer and more intentional ([Marooners' Rock interview](https://maroonersrock.com/2012/02/interview-chris-wilson-path-of-exile-part-3-of-3/)).

**Node typology evolution:**

| Node type | Role | Era notes |
|---|---|---|
| Small | Pathing + minor stats | Always |
| Notable | Named thematic endpoints | Always; power crept over years |
| Keystone | Rule rewrite with downside | Always; iconic identity |
| Jewel socket | Slot for jewel items | Early; density/placement iterated |
| Mastery | After allocating a Notable in a cluster, pick one bonus from a themed list | Added **3.16 Scourge** ([PoEDB mastery challenge](https://poedb.tw/us/Master_the_Passive_Skill_Tree)) — *not* 3.17; secondary guides sometimes mis-date this |
| Outer Large Jewel sockets | Accept Cluster Jewels that **grow new suburbs** off the rim | **3.10 Delirium** ([GGG Cluster Jewels reveal](https://www.pathofexile.com/forum/view-thread/2783927)) |

**Shape lesson:** the tree is not a class-gated tech tree. It is a **shared geography of themes** where starting position biases cost, not permission. Travel cost *is* the class identity tax.

### 3.2 Ascendancies — compact, high-impact subclass trees

**Introduction:** *Path of Exile: Ascendancy* expansion (Mar 4, 2016) — Ascendancy classes, Trials, Lord's Labyrinth ([PoE Wiki: Ascendancy expansion](https://www.poewiki.net/wiki/Path_of_Exile:_Ascendancy); [Ascendancy class](https://www.poewiki.net/wiki/Ascendancy_class)).

**Structure (stable design):**

- Choose one Ascendancy per character class (Scion: Ascendant only).
- Small dedicated tree near the class start; shown as a tab on the main tree UI.
- Cap of **8 Ascendancy points**, earned in **pairs of 2** across four Labyrinth difficulties — designed so each payout can unlock a major notable ([GGG Labyrinth manifesto](https://www.pathofexile.com/forum/view-thread/1899252)).
- Typical layout: lesser nodes gate notables; some notables require prior notables (4-point chains). Until Eternal Labyrinth, you cannot finish a full 4-pointer path ([Ascendancy class wiki](https://www.poewiki.net/wiki/Ascendancy_class)).

**Why Ascendancies feel good:**

1. **Build-defining density** — few points, enormous identity shift (Pathfinder flasks, Occultist curses/ES, Champion fortify, etc.).
2. **Gated by a memorable challenge** (Labyrinth), not by grinding the main tree.
3. **Readable small graph** — you can hold the whole Ascendancy in your head; the main tree cannot.
4. **Choice timing** — first Lab unlocks the subclass early enough to shape the campaign; later points deepen without rewriting identity every level.

**Ascendancy vs main tree division of labor:**

| Layer | Job |
|---|---|
| Main tree | Broad stats, pathing geography, keystone rule theater, jewel sockets |
| Ascendancy | Subclass fantasy + 1–3 defining mechanics |
| (Later) Forbidden Flame/Flesh uniques | Steal notables from *other* Ascendancies — cross-class augment via items **[pattern exists; not the owner's requested shape]** |

Mythoras mapping already named in domain language: **Pinnacle Evolution** ≈ creature Ascendancy; **Principal** ≈ species-tied philosophical commitment; **Foundation** ≈ starting position on the Grid (`CONTEXT.md`).

### 3.3 Cluster Jewels — hubs that grow spokes

**Introduction:** Delirium league / 3.10 — Cluster Jewels socket into **outermost Large Jewel Sockets** and **extend the passive tree** with new clusters ([GGG: Cluster Jewels and their Notables](https://www.pathofexile.com/forum/view-thread/2783927); [PoE Wiki: Cluster jewel](https://www.poewiki.net/wiki/Cluster_jewel)).

**Hierarchy (hub → emanating clusters):**

| Size | Passives added (typical) | Nested sockets | Design focus (GGG reveal) |
|---|---|---|---|
| **Large** | 8–12 | 2 Medium sockets | Offensive bonuses; can hold multiple notables |
| **Medium** | 4–6 | 1 Small socket | Specific mechanics / utility |
| **Small** | 2–3 | 0 | Defences |

Nesting rule: Large → Medium → Small (never reverse). This prevents infinite outward growth and creates a **hub-and-spoke** feel: the Large jewel is a **central investment** from which medium/small clusters emanate ([Maxroll Cluster Jewels Explained](https://maxroll.gg/poe/resources/cluster-jewels-explained); [PoE Vault Cluster Jewel Guide](https://dev.poe-vault.com/guides/cluster-jewel-guide)).

**Why this pattern matters for the owner's request.**

Owner intent: *Ascendancies augmentable by a central node that clusters emanate from.*

PoE almost has this, but split across systems:

| PoE piece | What it does | Gap vs owner intent |
|---|---|---|
| Ascendancy tree | Compact subclass hub | Not itself socketable/augmentable as a hub item |
| Cluster Large jewel | Central socket that grows Medium/Small spokes | Not an Ascendancy; itemised and RNG-crafted |
| Timeless Jewel | Radius transform of existing nodes around a socket | Mutates neighborhood; does not grow new Ascendancy spokes |
| Forbidden Flame/Flesh | Import foreign Ascendancy notables | Augments via unique pair, not via a geometric center |

**Design synthesis for Mythoras:** treat **Pinnacle Evolution / Principal** as the Ascendancy-density layer, and invent a **first-class hub node** (not necessarily an item) that:

1. Sits at the center of a themed cluster family.
2. Can be **augmented** (upgraded, socketed, inscribed, or Grid-invested) to change how emanating spokes behave.
3. Causes **spokes to emanate** (slot-local routes, Stream Resonance Tier 2 clusters, Origin/Bloodline arms) rather than requiring separate disconnected mini-trees.

That is Cluster-Jewel geometry applied to Ascendancy *role*, without requiring Delirium item RNG.

### 3.4 Related augment patterns (brief)

- **Timeless Jewels (3.7 Legion):** seed + name conquer a radius of existing passives ([PoE Wiki: Timeless Jewel](https://www.poewiki.net/wiki/Timeless_Jewel)). Lesson: a **central socket can rewrite a neighborhood**. Useful for "augment the hub" fantasy; dangerous if opaque.
- **Masteries (3.16):** allocating a Notable unlocks a **menu pick** for that cluster. Lesson: cluster completion should unlock a **choice**, not only a stat.
- **Anointments / oils:** attach selected notables to amulets — portable notable without pathing. Lesson: some specialisation can be **item-local** rather than tree-local (Mythoras Skill Cards already own this space — do not duplicate on Grid).

### 3.5 Character-tree portable principles

1. **Shared geography + start bias** beats gated separate trees for long-term build variety.
2. **Highways vs suburbs** makes travel cost legible.
3. **Ascendancy = small, dense, challenge-gated identity**; main tree = broad canvas.
4. **Hub-and-spoke growth** (Cluster Large → Medium → Small) is the best PoE precedent for "central node clusters emanate from."
5. **Augment the hub** (Timeless / Forbidden / jewel socket) is how PoE lets late game rewrite an earlier choice without deleting Ascendancy fantasy.

---

## 4. Watchstones → Voidstones: configurable surface vs consolidated global impact

### 4.1 Watchstones (3.9 *Conquerors of the Atlas* → removed 3.17)

**What they were.** Atlas divided into regions with citadel sockets (historically up to 4 sockets × regions; community shorthand "16 Watchstones" / up to 32 Conquerors' stones across eras — exact socket counts shifted; GGG Siege copy uses "16 Watchstones" as the collectable comparison). Socketing Watchstones **raised map tiers in that region**, revealed maps, and contributed to global **Awakening Level**. Later, **craftable Watchstones** with rollable mods became a whole crafting/trading meta; stones were region-locked to prevent constant reshuffling ([Echoes FAQ](https://www.pathofexile.com/forum/view-thread/3008270); [3.9 patch notes](https://www.pathofexile.com/forum/view-thread/2687400); endgame research §4).

**What they optimized for.** Board-configuration puzzle: which regions to push high, which to leave low, which craftable mods to socket where. High **configuration surface area**.

**What went wrong.** Opacity and menu gameplay: many sockets × regions × Awakening × spawn rules. Progress and farming strategy lived in a spreadsheet-adjacent board state. Craftable Watchstones added power but also another crafting economy layered on the Atlas itself. Chris/GGG in Echoes already positioned craftable stones as "optional, late, no continual upkeep" — acknowledging complexity risk even while shipping more of it ([Echoes FAQ](https://www.pathofexile.com/forum/view-thread/3008270)).

### 4.2 Voidstones (3.17 → current)

**What they are.** Exactly **four** stones, each earned by defeating a pinnacle boss line (original attribution: Uber Elder, Maven, Searing Exarch, Eater of Worlds — [3.17 notes](https://www.pathofexile.com/forum/view-thread/3229187)). Socket into Atlas corners. Each raises map tiers **globally** (with four socketed, Atlas maps push toward uniform T16). Later patches reassigned which bosses drop which stones and altered per-stone bonuses ([PoE Wiki: Voidstone](https://www.poewiki.net/wiki/Voidstone) — details era-sensitive).

**GGG's own framing:** replace many incremental regional upgrades with four monumental trophies; specialisation moves onto the single Atlas tree; "deeper systems that are easier to understand" ([Siege promo](https://www.pathofexile.com/siege)).

### 4.3 The lesson (portable)

| Watchstone era | Voidstone era |
|---|---|
| Many incremental, regional, fiddly upgrades | Few monumental, global, boss-gated ratchets |
| Configuration depth in **board state** | Configuration depth in **allocation tree** |
| Tier progress fragmented by region | Tier progress unified |
| Expressive but opaque | Legible; welded to pinnacle storylines |

**Distilled principle:**

> **Do not spend your complexity budget on configurable surfaces that only redistribute the same global dial.**  
> If the real player desire is "raise the power/tier of my endgame," make that a **small set of global ratchets** gated by meaningful content.  
> Spend complexity instead on a **specialisation menu** (the tree) where choices change *what the game is*, not merely *how high the numbers go*.

Watchstones tried to be both a tier dial *and* a crafting surface *and* a regional strategy board. Voidstones kept only the tier dial (as trophies) and moved strategy onto the Atlas tree + later scarabs.

**Caveat:** Voidstones temporarily inherited sextant sockets, recreating a global upkeep surface until 3.24 removed sextants ([3.24 notes](https://www.pathofexile.com/forum/view-thread/3496784)). Consolidation is iterative — a global ratchet can still grow barnacles.

---

## 5. REQUIRED Mythoras crosswalk — Motherboard Grid design implications

Canon locks from `CONTEXT.md` (non-negotiable):

- **#2:** Motherboard Grid is **GLOBAL to the Technician**, not per-creature. One Global Route; five Slot-Local Subroutes; opportunity cost at the **slot**.
- **#9:** Skill Cards / Skill Frame are **creature-local**. Grid belongs to the Technician.
- **Foundation** = starting position / identity on the Grid (Warlord, Bladedancer, Architect, Channeler).
- **Pinnacle Evolution** = creature Ascendancy-like permanent upgrade.
- **Principal** = species-tied philosophical commitment (Ascendancy-adjacent, creature-side).

Do **not** import map sustain, Temple, or currency systems here.

### 5.1 From Atlas tree history → Grid topology

| PoE Atlas lesson | Mythoras implication |
|---|---|
| Regional trees fragmented specialisation | **Do not** make Grid bonuses apply only in certain Regions/Zones. Global Route must pay off wherever the Technician plays. |
| Global tree made every run express the build | Cipher Network / zone runs should always feel the Global Route. |
| Loadouts enable plural strategies | Consider **Grid loadouts** (farm vs campaign vs bossing) — especially if Cipher specialisation becomes a second menu. Keep distinct from creature Skill Frames. |
| Points from completion, not only XP | Mix Technician Level points with **content ratchets** (regional competition, Cipher milestones) so meta-progress is visible. |
| Early universal / late expressive | Early Grid points: squad-wide sustain (survivability, Load mitigation, basic Stream Alignment). Late points: Stream Resonance Tier 2, niche Keystones, deep slot identity. |

### 5.2 From "configuration feels good" → Grid UX & node roles

| Feel mechanism | Grid application |
|---|---|
| Menu over noise | Grid should let Technicians **amplify Streams / Origins / encounter styles** and **block or de-emphasize** unwanted pressure (e.g. reduce certain Threat patterns) — without turning into a second Skill Card inventory. |
| Persistent vs burst | Grid = persistent; **Warbanners / Threat Attunement / Cipher mods** = burst. Do not collapse both into Grid allocation. |
| Block-as-reward | Slot or Global nodes that *opt out* of a system should grant a small compensation — pruning feels good. |
| Keystone theater | Rare Keystones that rewrite squad rules (bench rules, Load thresholds, Field asymmetry) beat many +% nodes. |
| Cheap respec + optional loadouts | Experimentation must be affordable or Grid will feel like a trap relative to creature Skill Cards (which already demand decisions). |

### 5.3 From character tree + Ascendancy + clusters → Foundations, hubs, Pinnacle

| PoE piece | Mythoras piece | Design note |
|---|---|---|
| Class start positions | **Foundations** | Foundations bias starting sector (Authority / Invictus / Animus / Order), not exclusive trees. |
| Shared tree geography | **One Motherboard Grid** | Shared Attribute/Stream suburbs; highways between them. |
| Ascendancy (character) | Split: **Foundation depth** (Technician) vs **Pinnacle Evolution / Principal** (creature) | Do not put creature Ascendancy power on the Grid; that violates #2/#9. |
| Cluster Large hub + emanating Medium/Small | **Owner request: Ascendancy-like center with emanating clusters, augmentable central node** | Best fit: a **hub Notable / Keystone socket** on the Grid (or on Pinnacle Evolution UI) that grows spoke clusters; augmenting the hub changes spoke behavior. Prefer Grid hubs for Technician fantasy; prefer creature-side hubs for Pinnacle Evolution. |
| Mastery menu on cluster completion | After investing a Slot-Local or Stream cluster, unlock a **single choice Mastery** | High point-efficiency, readable, PoE-proven. |
| Outer growth via items (Cluster Jewels) | Optional late **Grid Inscription / Socket** items | Only if itemisation budget allows; not required for hub-spoke geometry. |

**Owner-shaped recommendation (research conclusion, not locked canon):**

Implement **Pinnacle Evolution** as a small Ascendancy-density graph per creature, and separately implement **Grid hub nodes** where a central Keystone/Notable can be augmented so that **Stream / Attribute / Slot spokes emanate from it**. That honors:

- Technician-global ownership of the Grid,
- creature-local ownership of Pinnacle Evolution,
- the Cluster-Jewel geometric fantasy without requiring Delirium-style item RNG on day one.

### 5.4 From Watchstones → Voidstones → Cipher Network ratchets

| Lesson | Mythoras application |
|---|---|
| Many regional dials felt like homework | Avoid per-Region Grid sockets that only raise a tier dial. |
| Four boss-gated global stones felt like trophies | Cipher Network should have a **small number of monumental global ratchets** (Champion duties, pinnacle clears) that permanently upgrade endgame baseline. |
| Strategy lived better on the tree than on the board | Put "what content I juice" on a **specialisation menu** (Grid and/or Cipher tree), not on a 32-slot configuration board. |
| Barnacles return (sextants on Voidstones) | When adding juice to ratchets, prefer **per-run consumables** (scarab-like) over charges that smear across every Cipher. |

### 5.5 Ownership matrix — prevent the classic agent error

| System | Owner | PoE analogue | Must not become |
|---|---|---|---|
| Motherboard Grid Global Route | Technician | Character tree + Atlas tree hybrid | Per-creature passive trees |
| Slot-Local Subroutes | Slot (not creature entity) | Partial "weapon set" / local investment | Permanent creature identity |
| Skill Frame / Skill Cards | Creature | Skill gems | Technician-global skills |
| Pinnacle Evolution | Creature | Ascendancy | Grid cluster |
| Principal | Creature (species) | Ascendancy fantasy / Pantheon-like commitment | Foundation |
| Foundation | Technician | Class start | Creature class |
| Cipher specialisation menu (if any) | Technician meta | Atlas Passive Tree | Creature gear |
| Warbanner / Threat Attunement | Technician per-run | Scarabs / map mods | Grid permanent nodes |

### 5.6 Explicit non-transfers

- Do not require regional routing for Grid power to apply.
- Do not give each creature its own Grid path.
- Do not put Skill Card links on the Grid.
- Do not recreate Watchstone-style multi-socket boards for tier dials.
- Do not duplicate Atlas map-sustain design in this document's scope — Cipher sustain is a separate research/grill topic.

### 5.7 Open questions for a future grill (do not invent answers)

- Is Cipher Network getting its **own** Atlas-like specialisation tree, or does the Motherboard Grid absorb endgame content configuration?
- Are Grid loadouts desired, or is one Global Route + five slots enough identity?
- Does the "augmentable central hub" live on the **Grid**, on **Pinnacle Evolution**, or both with different rules?
- How many monumental Voidstone-like ratchets does Champion / Cipher progression need (2? 4? 6?) — count not locked (`CONTEXT.md` Examiners reopened).

---

## 6. Condensed principles (checklist)

1. **Specialisation menus beat content noise** — amplify, block, warp; finite points.
2. **Global impact > regional fragmentation** when the player chooses what to run from an inventory/queue.
3. **Persistent strategy (tree) + per-run burst (consumables/mods)** is the juicing sweet spot.
4. **Few global ratchets, many expressive allocations** — Voidstone lesson.
5. **Shared tree + start bias** — Foundation pattern.
6. **Dense subclass graphs** — Ascendancy / Pinnacle Evolution; keep them small and memorable.
7. **Hub-and-spoke growth** — Cluster Jewel geometry for "central node clusters emanate from."
8. **Augment the hub** to deepen Ascendancy fantasy without exploding the main graph.
9. **Mythoras ownership locks win** — Technician Grid vs creature Skills/Pinnacle; slots not entities.
10. **Complexity belongs in player choices, not in upkeep surfaces.**

---

## Appendix A — Primary & high-trust sources

### Atlas Passive Tree
- GGG — Atlas Passive Trees in Echoes: https://www.pathofexile.com/forum/view-thread/3008533
- GGG — Echoes FAQ / Q&A (regional trees, Watchstones): https://www.pathofexile.com/forum/view-thread/3008270
- GGG — Echoes promo: https://www.pathofexile.com/echoes
- GGG — Full Atlas Passive Tree Reveal (3.17): https://www.pathofexile.com/forum/view-thread/3229978
- GGG — 3.17 Siege patch notes: https://www.pathofexile.com/forum/view-thread/3229187
- GGG — Siege promo ("deeper systems that are easier to understand"): https://www.pathofexile.com/siege
- PoEDB — Siege of the Atlas (mirrors GGG copy): https://poedb.tw/us/Siege_of_the_Atlas
- GGG — 3.24 Necropolis patch notes: https://www.pathofexile.com/forum/view-thread/3496784
- Maxroll — 3.24 Atlas Tree Update (loadouts): https://maxroll.gg/poe/news/path-of-exile-3-24-atlas-tree-update
- Massively Overpowered — Siege preview (Wilson quotes, **secondary**): https://massivelyop.com/2022/01/27/atlas-expands-and-bosses-multiply-in-path-of-exiles-siege-of-the-atlas-expansion-launching-february-4th/
- PoEDB — Atlas Passive Skill: https://poedb.tw/Atlas_passive_skill
- Community feedback on monofocus juicing (3.24): https://www.pathofexile.com/forum/view-thread/3503412

### Watchstones / Voidstones
- GGG — 3.9 Conquerors patch notes: https://www.pathofexile.com/forum/view-thread/2687400
- PoE Wiki — Voidstone: https://www.poewiki.net/wiki/Voidstone
- PoE Wiki — Atlas of Worlds / Atlas Passive Tree: https://www.poewiki.net/wiki/Atlas_of_Worlds · https://www.poewiki.net/wiki/Atlas_Passive_Tree

### Character tree / Ascendancy / Clusters
- PoE Wiki — Passive skill tree: https://www.poewiki.net/wiki/Passive_tree
- Chris Wilson interview (attribute highways): https://maroonersrock.com/2012/02/interview-chris-wilson-path-of-exile-part-3-of-3/
- PoE Wiki — Ascendancy class: https://www.poewiki.net/wiki/Ascendancy_class
- PoE Wiki — Path of Exile: Ascendancy expansion: https://www.poewiki.net/wiki/Path_of_Exile:_Ascendancy
- GGG — Labyrinth changes manifesto (2+2+2+2 points): https://www.pathofexile.com/forum/view-thread/1899252
- GGG — Cluster Jewels and their Notables: https://www.pathofexile.com/forum/view-thread/2783927
- PoE Wiki — Cluster jewel: https://www.poewiki.net/wiki/Cluster_jewel
- Maxroll — Cluster Jewels Explained: https://maxroll.gg/poe/resources/cluster-jewels-explained
- PoE Vault — Cluster Jewel Guide: https://dev.poe-vault.com/guides/cluster-jewel-guide
- PoEDB — Masteries (3.16): https://poedb.tw/us/Master_the_Passive_Skill_Tree
- PoE Wiki — Timeless Jewel: https://www.poewiki.net/wiki/Timeless_Jewel

### Local companions
- `CONTEXT.md` — ownership locks, Grid vocabulary
- `POE_ENDGAME_RESEARCH.md` — Atlas progression, sustain, pinnacles, synthesis (§1–9)
- `POE_RESEARCH.md` — systems map + Mythoras pattern transfer (§1.3, §5.3)

---

## Appendix B — Claim confidence

| Claim | Confidence |
|---|---|
| 3.13 = 8 regional Atlas trees, region-scoped | High (GGG FAQ + news) |
| 3.17 = one global tree; regions removed; Voidstones replace Watchstones | High (GGG patch notes + promo) |
| GGG goal phrase "deeper systems that are easier to understand" | High (Siege promo) |
| 3.24 = up to 3 Atlas loadouts | High (Maxroll + patch ecosystem; confirm exact unlock text in 3.24 notes if citing legally) |
| Exact modern Atlas point totals | Medium (patch-variable; cite PoEDB per league) |
| Wilson "frontloaded" points quote | Medium (**secondary** press report) |
| Masteries added in 3.16 Scourge | High (PoEDB / era consensus) — not 3.17 |
| Cluster Large→Medium→Small nesting & focuses | High (GGG reveal + wiki) |
| Watchstone exact socket counts across 3.9–3.16 | Medium (shifted by patch; use "many regional sockets" in design prose) |
| Owner hub-augment pattern as Mythoras recommendation | Design synthesis, not PoE fact |

---

*End of ATLAS_TREE_RESEARCH.md. Tree-layer research only; endgame sustain/pinnacle curriculum remain in `POE_ENDGAME_RESEARCH.md`.*
