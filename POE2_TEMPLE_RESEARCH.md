# PoE2 "Fate of the Vaal" Temple Mechanic — Research Document

> Research date: July 15, 2026. Web research only.
> **Verdict up front:** The requester is correct. Path of Exile 2's content update **0.4.0 ("The Last of the Druids")** shipped with the challenge league **"Fate of the Vaal"** on **December 12, 2025**, and its core mechanic is a build-your-own-Vaal-temple system that is explicitly a spiritual successor to PoE1's Incursion/Temple of Atzoatl ("Incursion 2.0"). The earlier research pass that claimed PoE2 had no such mechanic was wrong. Even the term **"Room Cards" is the actual in-game/community term** — verified in multiple independent guides.

---

## 1. Official Name, Version, and Launch Date

- **Content update:** 0.4.0, titled *"Path of Exile 2: The Last of the Druids"* (also added the Druid class).
- **Challenge league:** *"The Fate of the Vaal"* league (commonly "Fate of the Vaal"), with Standard, Hardcore, and SSF variants.
- **Launch:** December 12, 2025, alongside a free-to-play weekend (Dec 12–15). Full reveal livestream was December 4, 2025.
- **Follow-up patches:** 0.4.0c (December 19, 2025) substantially buffed the league mechanic in response to feedback (see §4/§5).
- **Later status:** With update **0.5.0 ("Return of the Ancients")**, Fate of the Vaal was **added to the core game** — it gained its own Atlas Passive Tree, Tier 4 room upgrades, Temple Precursor Tablets that guarantee beacons in maps, and Atziri's Temple appearing on the Atlas near the city of Lira Vaal. This confirms GGG considered the mechanic successful enough to keep permanently.

Sources:
- Official 0.4.0 patch notes: https://www.pathofexile.com/forum/view-thread/3883495
- poe2wiki Version 0.4.0: https://www.poe2wiki.net/wiki/Version_0.4.0
- poe2wiki league page: https://www.poe2wiki.net/wiki/Fate_of_the_Vaal
- 0.5.0 core-game integration: https://www.u4n.com/news/poe-2-05-vaal-temple-to-core.html and https://overgear.com/guides/poe-2/temple-guide/

Official flavor pitch (from the 0.4.0 patch notes): the long-dead Vaal structures throughout Wraeclast are reactivating; you sacrifice corrupted monsters to power the devices and travel to **Lira Vaal, the ancient temple of Atziri**, where you "gather enough power to modify the Temple and create your desired layout."

---

## 2. The Temple-Building Mechanic in Detail

### 2a. Resource gathering: Vaal Beacons and Energised Crystals (the "Minecraft loop")

The requester's Minecraft comparison ("go down to the dungeon, bring resources back to base") maps accurately onto the loop:

1. While playing normal zones/maps, you encounter **Vaal Beacons** — large triangular/disk devices on the ground that corrupt nearby monster packs (similar in feel to an Abyss encounter). Kill the corrupted monsters, then **step on the beacon** to activate it. Beacons sometimes spawn extra waves (strongbox-style) or raise up with a unique monster on top that drops a loot pile. Completing a beacon grants a chest reward plus **Energised Crystals** (the temple-building resource).
2. **6 Energised Crystals = one temple visit.** Once collected, a portal to the **Vaal Ruins** opens (the temple can also be accessed from any Waypoint via a Temple icon).
3. At the temple hub you spend the crystals to place rooms, then run the dungeon you built, haul the loot out, and go back to mapping to gather more crystals.

Economy details: at league launch you could bank up to 12 crystals (later raised; in 0.5.0 core, default cap is **60** crystals and temples can be stacked ~10 deep). In T15+ maps each beacon gives 2 crystals (rarely 3). One important nuance: **temple level scales to your character level, not the zone the crystals came from**, so players could farm crystals in fast easy zones and still run level-appropriate temples ([player report](https://www.pathofexile.com/forum/view-thread/3895302/page/1)).

Sources: https://www.poe-vault.com/poe2/guides/fate-of-the-vaal-league-guide , https://gamerant.com/path-of-exile-2-poe2-fate-of-the-vaal-league-mechanics-explained-temple-ruins/ , https://penguingamesonline.com/poe-2-vaal-temple-crystals-farming-guide/

### 2b. "Room Cards" — verified terminology

**"Room Cards" is the real term.** Both Mobalytics and PoE Vault use it verbatim:

- Mobalytics: "Room Cards: A random set of Room Cards will be offered to the player. These can be clicked to add a Room to the Temple in any of the highlighted green squares that appear… Placing a Room will consume an Energised Crystal." (https://mobalytics.gg/poe-2/guides/vaal-temple)
- PoE Vault: "Each time you access the Temple, you'll be given six Room Cards you can place on this grid." (https://www.poe-vault.com/poe2/guides/fate-of-the-vaal-league-guide)

How they work:
- Each temple visit deals you **6 random Room Cards** (a mix of Path rooms and Named rooms). Each placement consumes one Energised Crystal.
- The draw is random, but 0.4.0c added **reroll Medallions** so players can reroll the offered cards, and **Medallions** (drops from room bosses inside the temple) act as extra, out-of-deck Room Cards with special effects — upgrade a room's tier, lock rooms against decay (Juatalotli's Lock Medallion), add Waystone modifiers (Zantipi's Medallion), etc. Default Medallion storage is 3, upgradeable to 6.
- Some rooms grant **special Room Cards** with unique verbs, e.g. the Sacrificial Chamber grants a card that sacrifices other placed rooms to upgrade its own tier.

### 2c. The board / UI (the game-board representation)

- The temple hub (antechamber) contains a Stash and the **Temple Console**. Opening the console shows a **9×9 grid (81 tiles)** representing the temple layout. The entrance is at one edge; **Atziri's Chamber sits at the far side**, and the **Architect's Chamber** is pre-placed/randomly generated somewhere on the grid. Your structural goal is to bridge entrance → Architect → Atziri.
- When you select a Room Card, **valid placement squares highlight in green**; squares that would trigger an adjacency upgrade are highlighted **bright green**.
- **Placement rules** (per PoE Vault):
  - Paths can only be placed connecting to another Path; you can't run a Path off a Named Room.
  - A Path can be placed next to another Path only if the card being placed has an opening facing that direction (only the new card needs the connector, not both).
  - Named Rooms can only be placed adjacent to Paths, or adjacent to rooms they upgrade (which auto-connects them). The Path does not need an opening facing the Named Room.
  - The Architect's Room is an exception — it can connect to any adjacent room, not just Paths.
- **Temple Mods panel:** the top-right of the console lists global **Temple Modifiers** contributed by every placed room (e.g. a Tier 1 Guardhouse adds "10% increased number of Monster Packs"). Rooms are simultaneously (a) physical dungeon rooms with monsters/rewards, and (b) stat contributions to the whole temple.

### 2d. Adjacency upgrades and room types

Most named rooms upgrade to **Tier 3** (Tier 4 in 0.5.0 via the Atlas tree) when specific room types are placed adjacent. Higher tiers = bigger temple mods, harder monsters, better/exclusive rewards. Examples from Mobalytics' room table:

| Room | Global bonus | Upgraded by |
|---|---|---|
| Commander | Rare monster effectiveness | 2 adjacent Garrisons (T2), 3 (T3) |
| Garrison | Increased magic packs | Converted by Synthflesh Lab / Spymaster into special barracks |
| Smithy | Chest item rarity | Adjacent Golem Works + Generator |
| Alchemy Lab | Rarity + gold; T3 contains Soul Core Infuser | 1–2 adjacent Thaumaturges |
| Corruption Chamber | Rare monsters gain extra mod; T1–2 has a Vaal-Orb-like altar; T3 has the double-corrupt Corruption Instiller | Thaumaturge / Sacrificial Chamber |
| Flesh Surgeon | Unique monster effectiveness; T3 Transcension Device (limb replacement buffs, lost on death) | Synthflesh Lab (+Generator for T3) |
| Sacrificial Chamber | More rare chests; T3 Morphology Mechanism (rerolls corrupted Vaal uniques) | Upgrades by **sacrificing other placed rooms** |
| Spymaster / Golem Works / Thaumaturge | "Support" rooms: increase the effect of temple mods from specific families of other rooms | Various (Spymaster upgrades by assassinating other Spymasters) |

The poe-vault "How the Temple Works" article gives a flavorful example: to level a Smithy you supply it with golems from an adjacent Golem Works plus a Generator — rooms literally feed each other (https://www.poe-vault.com/poe2/news/path-of-exile-2-how-the-fate-of-the-vaal-temple-works).

### 2e. Running the temple, decay, and persistence

- After placing your 6 cards, you **Run the Temple**: it becomes a real playable dungeon. Entering a room locks you in until all monsters are dead; clearing it unlocks its crafting benches/rewards. You can portal out but must re-enter at the temple entrance (checkpoints help).
- **Destabilisation ("Decay")** is the central tension: closing the temple after a run destroys several rooms at random. Fighting the **Architect** or **Atziri** destroys a much bigger chunk (originally ~1/3 of all structures; 0.4.0c halved the Architect penalty and cut Atziri's by 25%, and cut normal-close decay by 30% so temples stabilize around ~60 rooms instead of ~40).
- Decay never strands rooms — it always preserves paths leading to surviving rooms. Players exploited this with the **"snake strategy"**: build one long winding path and hang all rooms off the *end*, so a single surviving end-room protects the entire chain. (0.5.0 nerfed this: destabilisation can now convert connected rooms into plain paths.)
- The temple is **persistent across runs** — surviving rooms remain, and each visit adds 6 more. It's a long-term base you grow, prune, and defend, not a per-map throwaway.

### 2f. Rewards and payoffs

- **Loot rooms:** Sealed Vaults (treasure/crafting materials), Guardhouses (monsters + gear-upgrade workbench), currency stashes, temple-wide rarity/quantity mods.
- **Exclusive crafting (mostly Tier 3 rooms), each itemizable into a tradeable currency orb:**
  - Corruption Altar / Corruption Instiller → **double-corruption** (50% chance to destroy the item) → Architect's Orb.
  - Juatalotli's Triumph → **Vaal Cultivation Orb** — rerolls up to 2 mods on corrupted Vaal uniques with exclusive modifiers.
  - Corrupted Precursor Machine → **Ancient Infuser** — corrupts Atlas tablets (extra uses/mods).
  - Kishara's Acquisition → **Orb of Extraction** — destroy an item to recover its socketables.
  - Jiquani's Triumph → **Core Destabiliser** — mutates Soul Cores.
  - Transcension Device → replace your character's limbs with mechanical ones granting passive mods until death.
- **Bosses:** the **Royal Architect** (mid-boss; drops uniques, Lineage Support gems, and the Medallion unlocking the Royal Access Chamber) and **Queen Atziri in her prime** — the league's pinnacle boss. Beating the Architect also unlocks **Xipocado's Console**, which offers exclusive one-shot Reward Room Cards (Currency Vault, Uniques Vault, Lineage Gems Vault, Tablets Vault, etc.).
  - Atziri requires connecting the Royal Access Chamber *and* a path to her chamber simultaneously; her kill drops a Medallion opening **Atziri's Vault** (T3 currencies + exclusive **Vaal Siphoner**, which puts a kill-counter on a corrupted ring/amulet that eventually deletes a random mod and boosts the rest).
- **Permanent progression:** Upgrade Medallions permanently raise Medallion storage and crystal capacity; in 0.5.0, a dedicated Atlas Passive Tree.
- A **time-travel framing**: in Acts 1–3 you visit the ruined present-day temple (limited rooms, no pinnacle bosses); from Act 4 onward you visit the temple **in the past**, pre-cataclysm, at the height of Atziri's power, with the full reward set. The reveal also mentioned unlocking time-travel rooms placing pre-cataclysm structures with stronger rewards (https://www.poe-vault.com/poe2/news/path-of-exile-2-druid-fate-of-the-vaal-reveal).

### 2g. How it differs from PoE1's Incursion / Temple of Atzoatl

Community shorthand for the mechanic is literally "Incursion 2.0" (https://www.rpgstash.com/blog/path-of-exile-2-what-to-expect-in-the-fate-of-the-vaal-league). What was kept vs. renovated:

**Kept:** Vaal temple theme; rooms with tiered upgrades (T1–T3) that change contents/rewards; adjacency/connectivity mattering; a temple-run payoff with signature corruption crafting (double-corrupt altar returns); Atziri lineage.

**Renovated:**
- PoE1 Incursion: 12 timed ~10-second incursions per temple cycle (kill an Architect to pick which of two rooms is built, find keys/Stones of Passage to open doors), then run the resulting temple once and it's gone. Layout was mostly *influenced*, not authored — the room grid itself was fixed (a pyramid arrangement), and you only chose between two options per room. (https://www.poewiki.net/wiki/The_Temple_of_Atzoatl)
- PoE2 Fate of the Vaal: **direct, deliberate authorship** — you place Room Cards yourself on a free 9×9 grid from a console in a persistent hub, with explicit placement/connection rules, no timers, and the temple **persists and grows across runs** (with decay as the balancing pressure). Resource gathering moved from "Alva spawns in maps" to beacon/crystal collection. Boss structure upgraded from a temple room boss to a proper pinnacle boss (prime Atziri) plus a mid-boss (Royal Architect). Time travel inverted: in PoE1 you visit the past to change the present; in PoE2 you eventually play *in* the past.

---

## 3. Atlas / Endgame Integration

- **During the campaign** (Acts 1–3): beacons appear in story zones; the present-day temple is a light side activity.
- **At endgame (0.4.0):** a **parallel progression track fed by a per-map encounter**. Beacons spawn in maps; crystals accumulate account-side; the temple itself is a separate hub instance you visit whenever you have ≥6 crystals. One player noted it "is actually a total replacement to mapping" if you want it to be, since temple level tracks character level.
- **After 0.5.0 (core integration):** its own **Fate of the Vaal Atlas Passive Tree**; **Atziri's Temple placed on the Atlas** near the city of Lira Vaal (maps in that region always contain crystals and grant temple Atlas points); **Temple Precursor Tablets** to guarantee beacons in chosen maps; Tier 4 rooms unlockable via the tree.

---

## 4. Community Reception

Distinctly **polarized** — valuable signal for what to copy vs. avoid.

**Praised:**
- The board-building itself: "the best league mechanic so far… a clear objective that you can work towards… being able to build a temple, while there's some RNG element, and deterministically progress" (https://www.pathofexile.com/forum/view-thread/3907426).
- Strategic depth of adjacency puzzles, choosing what content to include ("you don't have to put every tile down"), the flexible difficulty (temple scales to character level) (https://www.pathofexile.com/forum/view-thread/3895302/page/1).
- Loot volume after 0.4.0c buffs — enough currency that players felt free to actually craft.
- GGG kept it: core-game promotion in 0.5.0 is the strongest endorsement.

**Criticized (mostly launch-window):**
- **Opaque UI/rules**: no in-game explanation of pathing, door directions, or upgrade conditions; players "bricked" temples by walling off the Architect with no undo/reset ("I have been playing 8+ hours a day… I still don't understand how to path," https://www.pathofexile.com/forum/view-thread/3891035; https://www.pathofexile.com/forum/view-thread/3890217/page/1). A frequent ask: an undo button for misplaced rooms.
- **Punishing decay**: losing large chunks of a hand-built temple after boss kills felt like a "gut punch"; some players quit the mechanic over it (https://www.pathofexile.com/forum/view-thread/3892239).
- **Weak endgame rewards at launch** (fixed by roughly doubling room mods in 0.4.0c) and **time cost**: ~6 maps of beacon farming per single temple run felt slow, unfavorably compared to PoE1 Delve's sulphite ratio.
- **Friction**: couldn't town-portal back to your position; dying to the Architect/Atziri closed the temple; heavy launch bugs (broken portals, inaccessible benches).
- **Co-op problems**: party members got half progression and couldn't share crafting benches (https://www.pathofexile.com/forum/view-thread/3892677).
- Quote capturing the split: "[Feedback] Vaal Temple — Love the Mechanic, but Co-op & UX need major polish" (https://www.pathofexile.com/forum/view-thread/3900399).

**Design takeaways for a game inspired by it:** the *authored persistent base + adjacency puzzle + resource loop* is the loved core; the hated parts were **unexplained rules, irreversible misplacement, harsh random loss of built progress, and grindy entry cost**. GGG's own fixes (reroll cards, less decay, lock medallions, doubled payoffs, tablets to target-farm beacons) are a ready-made checklist.

---

## 5. Pacing, Economy, Determinism

- **Entry cost:** 6 crystals per visit ≈ up to 6 zones/maps of beacon hunting (mitigated later by tablets, region farming, and higher per-beacon yields in T15+ maps).
- **Placement rate:** 6 rooms per visit; steady-state temple size ~40 rooms at launch, ~60 after 0.4.0c decay reductions — i.e. **roughly 10+ visits of net growth** to a mature temple, continuously offset by decay.
- **Determinism vs. RNG:** placement is fully deterministic (player-chosen); the RNG gates are (a) which 6 Room Cards you're dealt — softened by reroll Medallions, (b) which rooms decay — gameable via snake/bait-room strategies and Lock Medallions until 0.5.0 nerfed snaking, (c) crafting outcomes (double-corrupt is an explicit 50% destroy gamble).
- **Targeting outcomes:** players can absolutely target-build — e.g. rush a T3 Corruption Chamber for double-corrupts (high trade value), stack rarity/pack-size rooms for currency farming, or beeline the Architect→Atziri path for boss farming. Boss kills trade off against temple preservation, creating a genuine strategic choice ("completing these fights isn't advisable for players choosing to build out a more elaborate Room-based Temple" — Mobalytics).
- **Difficulty dial:** Zantipi's Medallions stack up to 8 Waystone modifiers on the temple (one randomly removed per 10 runs) for juiced risk/reward.

---

## Unverified / caveats

- The exact 9×9 grid size is sourced from Mobalytics and a player-written forum guide (https://www.pathofexile.com/forum/view-thread/3897432), not an official GGG statement — high confidence but technically secondhand.
- The reveal-stream claim of "six rooms per run" room examples (poe-vault news) matches all other sources; the "Medallions for boosting or preserving your layout" phrasing there is a paraphrase of the stream.
- Some fine numbers (crystal caps 12 vs 60, 2–3 crystals per T15 beacon) changed between 0.4.0 → 0.4.0c → 0.5.0; figures above are labeled by patch where possible, but third-party guides sometimes blur patch versions.
- Jiquani's Triumph / Core Destabiliser outcomes were listed as "currently unknown" by PoE Vault at time of writing.
- I did not find an official GGG statement of the phrase "Room Cards" in the 0.4.0 patch notes themselves (the notes say "rooms"); the term is used consistently by major guide sites (Mobalytics, PoE Vault) and appears to be the in-game console UI term. Marked as very likely but not primary-source-confirmed.
