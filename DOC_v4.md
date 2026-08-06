# MYTHORAS: SHATTERED REALMS

## Comprehensive Game Design Document

---

# Part IV: World & Campaign

---

> **STALE / PARTIALLY SUPERSEDED (2026-07-15):** Region names in this draft, including **Velden**, are retired placeholders. The Athletic Circuit / Accreditation / Examiner / gym-leader wrapper is reopened; retain those sections as history, not locked canon. Battle presentation now follows adaptive continuity with variable asymmetric footprints on the same physical surface. See `SESSION_DECISIONS_2026-07-15.md`.

## 23. Navigation Model

Mythoras uses a **persistent scene architecture** — the entire game world exists as one continuous Three.js scene rendered at three camera scales. There are no discrete view reloads or scene transitions between exploration, zones, and combat. Camera tweens move between scales seamlessly.

### 23.1 Three Camera Scales


| Scale              | Zoom  | Content                                                                                               | Character                                             |
| ------------------ | ----- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| **Regional Atlas** | ~0.1× | High-level diamond-node region map. Terrain as flat coloured chunks. Zone nodes as floating diamonds. | Strategic routing. Fast travel. See the whole Region. |
| **Zonal Map**      | ~1.0× | Playable zone. Voxel tile chunks as landscape. Sections connected by paths.                           | Primary exploration and traversal.                    |
| **Battle Arena**   | ~2.0× | Tactical grid focus on the encounter footprint.                                                       | Combat resolution.                                    |


Transitions between scales are camera tweens — no loading, no fade-to-black, no scene reload. Panels show/hide based on zoom level rather than a discrete mode switch.

### 23.2 Regional Atlas

The Regional Atlas is the macro navigation layer — the whole Region visible as a stylised board with zone nodes as floating diamonds connected by paths.


| Element              | Visual                | Function                                                         |
| -------------------- | --------------------- | ---------------------------------------------------------------- |
| **Zone nodes**       | Floating diamonds     | Click to enter zone (camera tween to Zonal Map)                  |
| **Waypoints**        | Bright accent diamond | Fast travel between unlocked Waypoints within and across Regions |
| **Completion state** | Node dimming          | Cleared sections dim. Unseen sections show fog.                  |
| **Encounter flags**  | Icon overlays         | Exhibition, Rival, Circuit Champion, Region Sovereign markers    |


### 23.3 Waypoint System

Waypoints provide fast travel. Functionally similar to PoE Waypoints — activate on first reach, persist permanently.


| Property         | Detail                                                       |
| ---------------- | ------------------------------------------------------------ |
| **Placement**    | Specific zones contain a permanent Waypoint. Not every zone. |
| **Activation**   | Unlocks when player first reaches it                         |
| **Travel**       | Regional Atlas → select unlocked Waypoint → instant tween    |
| **Cross-Region** | World Map → select Region → select Waypoint                  |
| **Persistence**  | Permanent across sessions                                    |


### 23.4 Zonal Map — Section-Based Traversal

Zones are composed of **sections** — discrete sub-areas connected by paths. This delivers aRPG mobility within a turn-based framework: players route efficiently, skip what they choose, and manage encounter pressure through movement decisions.

#### Section States


| State         | Behaviour                                                                                    |
| ------------- | -------------------------------------------------------------------------------------------- |
| **Empty**     | No encounter. Free passage.                                                                  |
| **Populated** | Creatures present. **Skippable** — player can move toward the section exit without engaging. |
| **Forced**    | Must be resolved before progression. Campaign-designated mandatory encounters.               |
| **Boss**      | Must be resolved. Narrative weight. Circuit Champions and Region Sovereigns.                 |
| **Cleared**   | Resolved this run. No re-engagement.                                                         |


#### Skipping

A Populated section can be skipped. The player moves toward the section exit — camera tracks — and the encounter remains behind. Movement input during a combat animation queues the transition for when the current action resolves.

#### Spillover and Pressure Cap

Undefeated creatures in a skipped section carry a **spillover weight**:

- Trash creatures: small spillover weight
- Elite creatures: larger spillover weight
- Anchored/trapped creatures: no spillover

Adjacent sections accumulate spillover weights from previously skipped sections. When effective threat (native threat + accumulated spillover) crosses the section's **Pressure Cap**, the next section becomes **Forced** — spilled creatures catch up and combat triggers unavoidably.

**Pressure Cap scales with zone progression:** Early zones are forgiving (high cap — skipping is viable). Late zones and endgame punish aggressive skipping (low cap — pressure accumulates quickly).

**Spillover loot:** Triggering a spillover cascade drops cumulative loot from all accumulated skipped encounters simultaneously — a high-stakes payoff for risky skipping behaviour.

#### Blind Turn Execution

Mythoras uses blind turn execution. Threats are **not announced** before the player acts. The puzzle is "what should I do given incomplete information" — not "solve the announced threat." This diverges from Into the Breach's telegraphing model deliberately.

#### Obstacles vs Remnants


| Type          | Definition                                                                                              | Placement                          | Persistence                 |
| ------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------- | --------------------------- |
| **Obstacles** | Gameplay-affecting terrain: walls, deep water, hazards, elevation barriers                              | Procedural per zone-type templates | Per-run                     |
| **Remnants**  | Persistent narrative/loot objects: ruined obelisks, broken statues, campfires, markers, Sealed Chambers | Hand-placed for storytelling       | Persist state across visits |


Remnants make the world feel authored and worth revisiting. A looted chest stays looted. A destroyed wall stays broken.

### 23.5 Battle Arena

When combat triggers, the camera tweens from Zonal Map scale to Battle Arena scale — focusing on the encounter's tile footprint on the existing zone surface.

**LOCKED correction (2026-07-15):** Fixed 8×8 is retired. Battle footprints are variable and asymmetric. Adaptive continuity preserves location, fixtures, positions, and approach direction on the same physical surface; renderer treatment may change reversibly.


| Stage              | Footprint | Character                                              |
| ------------------ | --------- | ------------------------------------------------------ |
| **Early campaign** | 4×4 – 5×5 | Smaller arenas. Simpler spatial decisions.             |
| **Mid campaign**   | 6×6 – 8×8 | More terrain features. Positioning matters more.       |
| **Late campaign**  | 10×10+    | Multi-feature arenas. Terrain modifiers, hazard tiles. |


**Single height layer.** Terrain height variation is visual and atmospheric — it does not create movement-based height advantages. No height-based movement mechanics.

**Asymmetric arenas.** Battle areas are not symmetrical rectangles. Extra space accommodates foliage, decorative tiles, and non-functional terrain that adds visual richness. Arena shape varies by encounter type and location within the zone — the same biome can produce different arena configurations across repeat visits.

**Encounter footprint declaration.** Each encounter declares a footprint range and a threshold-override flag for narrative/boss encounters. Boss encounters can force arena exceptions to the stage-appropriate size.

### 23.6 Traversal

Movement within zones is section-to-section traversal. Click-to-move only — no WASD.


| Mechanic             | Function                                                                                    |
| -------------------- | ------------------------------------------------------------------------------------------- |
| **Base traversal**   | Standard section-to-section movement. Cleared sections auto-traverse.                       |
| **Traversal Tonic**  | One Tonic slot allocated to a movement speed Tonic. Real cost — sacrificing a combat Tonic. |
| **Waypoint Network** | Instant fast travel between unlocked Waypoints                                              |


---

## 24. Campaign Structure

### 24.1 Terminology


| Term                        | Definition                                                                                                                                                              |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Region**                  | A geographical area with zones, towns, the competitive circuit, and a Region Sovereign                                                                                  |
| **Zone**                    | A discrete location with its own section map                                                                                                                            |
| **Section**                 | A sub-area within a zone connected by paths. The traversal unit.                                                                                                        |
| **Junction**                | Zone type connecting major locations — contains encounters                                                                                                              |
| **Highway**                 | Specialised Junction — longer, more dangerous, higher reward                                                                                                            |
| **Exhibition**              | A standard encounter within the competitive circuit. Some carry higher significance discoverable through play.                                                          |
| **Rival**                   | A named recurring Technician encountered multiple times across the campaign. Presence not announced — discovered through replay.                                        |
| **Circuit Champion**        | The regional competitive standout at a specific location. Comparable in authority to a gym leader — earns their standing through the sport. Hale is a Circuit Champion. |
| **Region Sovereign**        | The apex of a Region's competitive hierarchy. Defeating the Sovereign gates progression to the next Region. Seren is Region 1's Sovereign.                              |
| **Accreditation**           | The credential earned through defeating Circuit Champions and Region Sovereigns                                                                                         |
| **Point of Interest (PoI)** | Town or service location                                                                                                                                                |


### 24.2 MVP Scope

For MVP, **Region 1 constitutes the full campaign.** It is a self-contained narrative experience with complete system introduction and narrative foreshadowing for future Regions.

Future Regions are designed as expansions.


| Release         | Content                                               |
| --------------- | ----------------------------------------------------- |
| **MVP**         | Region 1: retired placeholder name "Velden" (14+ zones, full campaign) |
| **Expansion 1** | Region 2 (~23 zones, two halves, 3 Region Sovereigns) |
| **Expansion 2** | Region 3 (convergence, shorter, more intense)         |
| **Expansion 3** | Region 4 (Victory Road + boss gauntlet + finale)      |


### 24.3 Region Overview (Full Campaign Vision)


| Region       | Zones           | Circuit Champions | Region Sovereigns | Theme                                                                          |
| ------------ | --------------- | ----------------- | ----------------- | ------------------------------------------------------------------------------ |
| **Region 1** | 14              | 1 (Hale)          | 1 (Seren)         | Introduction. Diverse frontier. Linear with branches. All core systems taught. |
| **Region 2** | 23 (two halves) | TBD               | 3                 | Expansion. Branching routing. Full system access.                              |
| **Region 3** | TBD             | TBD               | TBD               | Convergence. All elements. Tighter, more intense.                              |
| **Region 4** | Small           | A couple          | Final gauntlet    | Victory Road + side content + narrative close + climax.                        |


**No Region has a single dominant damage type.** Each Region is geographically diverse — multiple biomes, terrain types, and creature ecosystems. Individual zones within a Region may lean toward specific types based on geography, but the Region as a whole provides exposure to the full breadth of the type system.

---

## 25. Region 1: Retired Placeholder "Velden"

### 25.1 Region Identity


| Property               | Value                                                                                                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Name**               | TBD — "Velden" is retired                                                                                                                                     |
| **Setting**            | A frontier borderland at the edge of settled territory. Rolling grasslands, dense forest, rocky highlands, river valleys, ancient ruins, and a mountain pass. |
| **Narrative**          | Historical draft: the Technician's first deployment to a frontier, using the retired Velden/Accreditation framing. Competition wrapper is reopened.           |
| **Structure**          | Linear spine with side branches                                                                                                                               |
| **Total Zones**        | 14 (10 main route + 3 side content + 1 main town)                                                                                                             |
| **Circuit Champions**  | 1 (Hale, zone 9)                                                                                                                                              |
| **Region Sovereign**   | 1 (Seren, end of region)                                                                                                                                      |
| **Towns**              | 1 main town (Thornwall), 1 small rest stop (Bridgewatch)                                                                                                      |
| **Creature diversity** | Physical, Elemental, and Phenomena creatures all present. Pools vary by zone geography, not regional theme.                                                   |


### 25.2 Zone Layout

```
REGION 1: RETIRED PLACEHOLDER "VELDEN"

[Greenhollow]──[Briarwood]──[Dustrun Trail]──[Stillmere Fen]──[Cairn Ridge]
      │             │                                │
   (side)        (side)                           (side)
 [Root Cellar]  [Misthollow]                  [Ironvein Mine]

──[Duskwatch]──[Hale's Garrison]──[Bridgewatch◆]──[Thornfield]──[Harrow Gorge]
                                                       │
                                              [Thornwall◆◆]
                                                       │
                                               [The Proving Hall★]

◆  = Small rest stop (limited services)
◆◆ = Main town (full services)
★  = Region Sovereign: Seren
    Circuit Champion Hale blocks access at Duskwatch (zone 9)

```

### 25.3 Zone-by-Zone Design


| #   | Zone                 | Archetype          | Size         | Biome                                     | Scout NPC | Waypoint    | Key Content                                                                                                                                                                     |
| --- | -------------------- | ------------------ | ------------ | ----------------------------------------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Greenhollow**      | Linear Sprint      | Small        | Grassland, light woodland                 | No        | Yes (Entry) | Tutorial. First encounters, first capture with provided Contracts. Teaches combat basics. Mild Physical/Elder creatures.                                                        |
| 2   | **Briarwood**        | Branching Explorer | Medium       | Dense forest                              | No        | Yes         | Creature variety expands. First side quest. Intel accumulation introduced passively through exploration. Elder/Fae creature pool. First Phenomena sighting.                     |
| 3   | *Root Cellar*        | Dense Gauntlet     | Small        | Underground, overgrown tunnels            | No        | No          | Side zone. Subterranean Elder/Physical creatures. High density, material drops.                                                                                                 |
| 4   | **Dustrun Trail**    | Linear Sprint      | Small        | Dry highland path, exposed rock           | No        | No          | Fast zone. Gauntlet encounters. Physical/Tectonic creatures.                                                                                                                    |
| 5   | *Misthollow*         | Branching Explorer | Small        | Misty lowland, stagnant water             | No        | No          | Side zone. Blight/Elder pocket. Introduces ailment diversity. Nocturne creatures at night-equivalent sections.                                                                  |
| 6   | **Stillmere Fen**    | Hub Spoke          | Medium       | Marshland, riverbank                      | No        | Yes         | Multiple paths, optional elite encounter. Rich capture opportunities — aquatic Glacial creatures, Elder marsh dwellers, Spectral fog entities. Widest species pool in early R1. |
| 7   | **Cairn Ridge**      | Dense Gauntlet     | Medium       | Rocky highland, ancient cairns            | No        | No          | Positioning advantages taught through terrain. Tectonic/Physical creatures. Scattered Arcane creatures near cairns.                                                             |
| 8   | *Ironvein Mine*      | Boss Rush          | Small        | Mining cave, exposed mineral veins        | No        | No          | Side zone. Optional mini-boss. Construct creatures. Rare Voltaic species spawn.                                                                                                 |
| 9   | **Duskwatch**        | Boss Rush          | Small-Medium | Fortified outpost at narrow pass          | No        | No          | Circuit Champion Hale's domain. Dense encounters lead to Champion fight. Gates town access.                                                                                     |
| 10  | **Hale's Garrison**  | Linear Sprint      | Small        | Post-battle transition area               | No        | No          | Post-Champion transition. Path opens to Bridgewatch.                                                                                                                            |
| 11  | **Bridgewatch**      | Town (rest stop)   | Small        | River crossing settlement                 | Yes       | Yes         | Basic vendor, limited stash access. First Scout NPC — introduces intel and scouting reports.                                                                                    |
| 12  | **Thornfield**       | Branching Explorer | Medium-Large | Open fields with scattered ruins          | No        | Yes         | Final exploration zone. Richest creature pools in R1 — all Origins represented. Ancient Remnant ruins contain lore.                                                             |
| 13  | **Harrow Gorge**     | Dense Gauntlet     | Large        | Deep canyon, harsh terrain                | No        | No          | Pre-Sovereign gauntlet. Hardest regular encounters in R1. Terrain-heavy: hazard tiles, limited movement.                                                                        |
| 14  | **Thornwall**        | Town               | Small        | Walled frontier town                      | Yes       | Yes         | Main town. Full services: Equipment Vendor, Skill Card Vendor, Contract Vendor, Stash, Motherboard Terminal, Scout NPC Hub.                                                     |
| —   | **The Proving Hall** | Boss Arena         | Small        | Ancient stone arena, Remnant architecture | No        | No          | Region Sovereign Seren. Region completion upon victory.                                                                                                                         |


### 25.4 System Introduction Pacing

Region 1 introduces all core systems through play, not tutorials.


| Zone                   | System Introduced                                  | How                                                                                                                            |
| ---------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Greenhollow**        | Basic combat, creature deployment, turn order      | First encounters are Duel-scale (1v1). Simple creatures.                                                                       |
| **Greenhollow** (late) | Capture — Contract Offer, Mark mid-combat          | First capturable creature. Standard Contract provided. Player marks the creature during combat, resolves Contract post-battle. |
| **Briarwood**          | Intel accumulation, creature type diversity        | Intel builds passively from exploration. First Phenomena-type sighting teaches type awareness naturally.                       |
| **Briarwood**          | Skirmish-scale encounters (2-3 creatures)          | Encounter scale increases. Deployment choice matters.                                                                          |
| **Dustrun Trail**      | Zone Modifiers                                     | First zone where modifier selection is offered pre-entry.                                                                      |
| **Dustrun Trail**      | Spillover and skipping                             | First zone with sufficient section density for skipping to be tempting. Players discover Pressure Cap organically.             |
| **Stillmere Fen**      | Routing choice, optional content                   | Hub Spoke layout forces pathing decision. Optional elite encounter introduces risk/reward.                                     |
| **Cairn Ridge**        | Positioning advantage, flanking                    | Terrain teaches spatial play without a text box.                                                                               |
| **Duskwatch**          | Circuit Champion encounter, Battle-scale combat    | First major test. Multi-type preparedness required.                                                                            |
| **Bridgewatch**        | Scout NPC, Scouting Reports, Contract variety      | First Scout NPC unlocks the scouting system. First non-Standard Contracts become available.                                    |
| **Bridgewatch**        | Town services, Motherboard Grid access             | Full management suite available after Champion.                                                                                |
| **Thornfield**         | Intel-driven encounter crafting, species targeting | With Thornfield's rich species pool and intel accumulated, players can begin shaping encounters toward desired captures.       |
| **Harrow Gorge**       | Threat Attunement high-end                         | Pre-Sovereign gauntlet — highest regular threat intensity in R1.                                                               |
| **Thornwall**          | Full town services, crafting, Command Deck setup   | Complete service access. Build refinement before Sovereign.                                                                    |
| **The Proving Hall**   | Region Sovereign fight, Accreditation Circuit      | Capstone test. Command Deck introduced as Sovereign reward.                                                                    |


---

## 26. Zone System

### 26.1 Zone Archetypes

Six zone archetypes create pacing variety across R1 and future Regions:


| Archetype              | Structure                                                      | Pacing   | Primary Purpose                               |
| ---------------------- | -------------------------------------------------------------- | -------- | --------------------------------------------- |
| **Linear Sprint**      | Single main path, minimal branches                             | Fast     | Transition zones, momentum maintenance        |
| **Branching Explorer** | Multiple paths with optional content                           | Moderate | Exploration reward, capture opportunities     |
| **Dense Gauntlet**     | Compact, high encounter density                                | Intense  | Challenge test, Tonic pressure                |
| **Hub Spoke**          | Central hub with radiating branches                            | Open     | Routing choice, optional elites               |
| **Boss Rush**          | Linear with escalating encounters toward a Forced/Boss section | Focused  | Circuit Champion and Region Sovereign lead-up |
| **Town**               | No encounters, full services                                   | Breather | Management, preparation, narrative beats      |


### 26.2 Section Types

Within each zone, sections carry specific types:


| Section Type         | Function                                                | Encounter Scale      |
| -------------------- | ------------------------------------------------------- | -------------------- |
| **Empty**            | Connective tissue, atmosphere                           | None                 |
| **Exhibition**       | Standard encounter — competitive context                | Duel through Battle  |
| **Elite**            | High-difficulty encounter, better drops                 | Battle through Siege |
| **Rival**            | Named recurring Technician encounter                    | Battle               |
| **Circuit Champion** | Regional sub-boss, Forced section                       | Siege                |
| **Region Sovereign** | Region capstone, Boss section                           | Siege (multi-phase)  |
| **Vendor**           | Service node                                            | None                 |
| **Sealed Chamber**   | Optional high-difficulty content (~15% zone spawn rate) | Variable             |
| **Remnant**          | Persistent lore/loot object                             | None                 |
| **Rest Point**       | Between-section recovery                                | None                 |


### 26.3 Encounter Scales


| Scale        | Creatures Active        | Context                                               |
| ------------ | ----------------------- | ----------------------------------------------------- |
| **Duel**     | 1v1                     | Tutorial, introduction encounters                     |
| **Skirmish** | 2-3v2-3                 | Standard early encounters                             |
| **Battle**   | 3-4v3-4                 | Mid-campaign standard                                 |
| **Siege**    | Full squad v full squad | Circuit Champions, Region Sovereigns, late encounters |


### 26.4 Procedural Generation

Zones generate from **templates** — predefined structural blueprints with variable section placement, encounter population, and loot table selection. Templates define zone archetype and size; procedural variation fills in the details.

Campaign zones reuse modified templates for endgame Cipher maps — the same zone layouts appear in the Cipher Network with different modifiers, encounter compositions, and loot pools.

---

## 27. Athletic Circuit Framework

> **STALE / REOPENED (2026-07-15):** The competition wrapper and Examiner/gym-leader naming are reopened. The following framework is preserved as design history and must not be treated as locked.

### 27.1 Design Philosophy

The Athletic Circuit is the competitive structure the player navigates — a sport framing that gives the world's competitive ecosystem a distinct identity. Technicians compete in a ranked professional circuit. The circuit has culture, NPCs with careers, results that matter, and a narrative arc of becoming the best in the Region.

Historical draft claim: this framework replaced the Examiner institutional framing. That replacement and the Examiner entity/name are now reopened.

### 27.2 Competitive Hierarchy — Region 1


| Tier                        | Name             | Context                                                                                                     |
| --------------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------- |
| **General field**           | Contenders       | The competitive field the player navigates                                                                  |
| **Established competitors** | Champions        | NPCs and Rivals who have earned standing in the circuit                                                     |
| **Location authority**      | Circuit Champion | Controls a specific location. Comparable to a gym leader's authority but earned through competitive record. |
| **Regional apex**           | Region Sovereign | The apex competitor of the Region. Defeating them grants Accreditation and gates Regional progression.      |


Region-to-Region naming varies to reflect cultural identity — Region 1 uses Champions/Contenders. Future Regions will have their own vocabulary.

### 27.3 Named Rivals

4-8 named Rivals appear across the MVP campaign. Rivals are recurring — players encounter the same named Technicians multiple times across their run, each encounter recontextualising earlier ones.


| Property            | Design                                                                                                         |
| ------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Discovery**       | Not announced. Found through exploration and replay.                                                           |
| **Narrative depth** | Some Rivals appear once or twice. Later appearances recontextualise earlier ones (the Nessa pattern from PoE). |
| **Significance**    | A Rival may be a major encounter in one zone and a minor presence in another.                                  |
| **Consequences**    | Win/loss/dialogue choices produce slight loot-weighting variation and narrative branches.                      |
| **Roster size**     | 4-8 MVP. Designed with replay discovery in mind.                                                               |


Rivals are not announced in the UI before encounter. Players discover them through play.

### 27.4 Ranking System

The Ranking System gives the competitive circuit ongoing narrative weight — NPC competitors advance careers between player encounters, creating a living world.


| Component                 | Description                                                                                                                      |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Named ordered targets** | Specific, named, ranked competitors — each a story beat rather than a number                                                     |
| **NPC career simulation** | Server-side (or simulation-side) scheduler advances NPC careers between player beats. Results surface in the Registry news feed. |
| **News feed**             | Rival wins, losses, retirements, transfers appear as news items in the Registry                                                  |
| **Two visibility layers** | Simplified progress bar for casual engagement + detailed Ranking number (#847) for invested players                              |
| **Reactive dialogue**     | NPCs comment on recent results — a player who just defeated a Rival might hear about it from another Technician                  |


The simulation is flavor-first for MVP. Mechanical bleed (e.g., a retired Rival being unavailable) is a Phase 2 consideration.

### 27.5 Exhibitions

Non-Champion, non-Sovereign encounters are called **Exhibitions** within the circuit. The name normalises combat as competitive sport rather than survival. Some Exhibitions carry higher significance discoverable through play — all called the same thing in-fiction.

---

## 28. Accreditation Circuit

### 28.1 Overview

The Accreditation Circuit is the Technician's loadout of earned credentials — passive bonuses from defeating Circuit Champions (Mini Accreditations) and Region Sovereigns (Major Accreditation) that combine into a growing power base.

```
ACCREDITATION CIRCUIT

[MAJOR: Region Sovereign]
         │
         ├── warps ──► [MINI: Circuit Champion A (OFF slot)]
         ├── warps ──► [MINI: Circuit Champion B (DEF slot)]
         └── warps ──► [MINI: Circuit Champion C (UTL slot)]

MAJOR = 1 Region Sovereign Accreditation
Mini  = 3 of N Circuit Champion Accreditations
OFF/DEF/UTL = Slot role weighting

```

### 28.2 Major Accreditation (The Engine)


| Property            | Detail                                                                                                                                                                |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Source**          | Defeating a Region Sovereign                                                                                                                                          |
| **Slots**           | 1 active at a time                                                                                                                                                    |
| **Function**        | Central driving piece of the Circuit. Determines character of the entire loadout.                                                                                     |
| **Theme**           | Not necessarily type-based. Stat-based bonuses enabling specific playstyles.                                                                                          |
| **Exclusive pairs** | 1-2 across full campaign — only one obtainable initially. Other available in endgame. Swapping means rebuilding the Circuit.                                          |
| **Campaign power**  | Modest. Small passive bonuses. Circuit assembling.                                                                                                                    |
| **Endgame power**   | Significantly stronger. When Technician becomes Regional Champion, the Circuit activates — Major Accreditation warps Mini Accreditations, transforming their bonuses. |


### 28.3 Mini Accreditation (Champion-Sourced)


| Property                     | Detail                                                                                                    |
| ---------------------------- | --------------------------------------------------------------------------------------------------------- |
| **Source**                   | Defeating a Circuit Champion                                                                              |
| **Slots**                    | 3 active out of all earned                                                                                |
| **Role weighting**           | Each of the 3 slots leans toward a role: Offensive, Defensive, Utility                                    |
| **Configuration**            | Swappable at Hideout. Player chooses which 3 Champions to slot.                                           |
| **Campaign**                 | Straightforward defensive/utility bonuses. Helpful but not defining.                                      |
| **Endgame (Champion state)** | Warped by Major Accreditation. Same Mini behaves differently depending on which Major drives the Circuit. |


### 28.4 Warping (Endgame Only)

When the Technician achieves Regional Champion status, the Major Accreditation transforms the Mini Accreditations:

**Example:** A Circuit Champion granting "+5% Elemental Resistance" as a campaign Mini might become "+5% Elemental Resistance AND Glacial damage taken regenerates 2% Life" when warped by a Glacial-aligned Major Accreditation.

The base bonus persists. The Major adds a thematic twist. The same set of Mini Accreditations produces different Circuit outputs depending on which Major drives them.

### 28.5 Exclusive Pairs

At 1-2 points during the full campaign, the player encounters a fork — two Region Sovereigns exist but only one can be challenged (narrative justification). The other becomes available in endgame.

Swapping the Major Accreditation means rebuilding the Circuit — intentionally weighty. Creates build identity ("I'm running a Seren Circuit") and replayability.

---

## 29. Zone Modifier System

### 29.1 Core Design

Before entering a zone, the player selects from available Zone Modifiers. Each modifier increases encounter difficulty while improving loot outcomes.


| Property              | Campaign                                                                             | Endgame (Ciphers)                                     |
| --------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------- |
| **Modifier slots**    | 1 per zone                                                                           | Up to 6 (from Cipher crafting / Override application) |
| **Options presented** | 4 choices                                                                            | Crafted/configured                                    |
| **Opt-out**           | Blank template. No penalty.                                                          | Can run with fewer mods.                              |
| **Accumulation**      | Modifiers accumulate across zones within a Region run. Reset on zone instance reset. | Cipher-specific, crafted per run.                     |


### 29.2 How Modifiers Work

**Combat effect:** Makes encounters harder (e.g., enemies deal +15% Physical damage, accuracy reduced by 10%, enemy creatures gain +20% HP).

**Loot effect:** Improves drop outcomes — quantity, rarity, quality multipliers on the Base Drop Pool.

### 29.3 Generic vs Special Modifiers


| Type        | Frequency                         | Loot Effect                                                      | Risk Level |
| ----------- | --------------------------------- | ---------------------------------------------------------------- | ---------- |
| **Generic** | 3-4 of 4 options                  | +% quantity, +% rarity, small multiplier                         | Moderate   |
| **Special** | 0-1 of 4 options (not guaranteed) | Pool expansion — adds specific items that wouldn't normally drop | Higher     |


### 29.4 Modifier Accumulation

Modifiers carry forward within a Region run:


| Zone   | Modifier Chosen                                       | Accumulated Effects                            |
| ------ | ----------------------------------------------------- | ---------------------------------------------- |
| Zone 1 | Briar Tangle (+12% quant, Elder creatures aggressive) | 12% quant, Elder pressure                      |
| Zone 2 | Blank (opted out)                                     | 12% quant (carried)                            |
| Zone 3 | Gale Force (+8% rarity, enemies +1 action speed)      | 12% quant, 8% rarity, speed pressure           |
| Zone 4 | Unstable Ground (+10% quant, random tile shifts)      | 22% quant, 8% rarity, speed + terrain pressure |


**Reset:** Entering a new zone instance clears accumulated modifiers and provides fresh options.

---

## 30. Tonic System

### 30.1 Overview

Tonics are consumable loadout items providing sustain, utility, and tactical options during zone runs. The Technician's primary personal resource management tool, analogous to Path of Exile's flask system.


| Property            | Value                                                         |
| ------------------- | ------------------------------------------------------------- |
| **Max Tonic Slots** | 4                                                             |
| **Recharge**        | Creature kills during encounters generate charges             |
| **Loadout**         | Configured before entering a zone. Swappable at Hideout/town. |
| **Craftable**       | Endgame Tonics receive affixes modifying their behaviour      |


### 30.2 Tonic Categories


| Category      | Function                                                           | Examples                                                                                                          |
| ------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| **Defensive** | Damage reduction, resistance boost, healing, Barrier replenishment | Resist Tonic (temporary +% Elemental Resistance), Barrier Tonic (partial Barrier pool restoration)                |
| **Offensive** | Damage boost, crit chance, accuracy, ailment application rate      | Surge Tonic (temporary damage increase), Precision Tonic (temporary accuracy boost)                               |
| **Utility**   | Mana restore, Command Charge restore, general sustain              | Clarity Tonic (restore creature Mana), Command Tonic (restore Command Charges), Vitality Tonic (general recovery) |
| **Traversal** | Node-to-section movement speed for duration                        | Quickstep Tonic (increased traversal speed). Real cost — this slot not available for combat.                      |


### 30.3 Recharge from Kills

Tonics recharge through combat. Defeating creatures generates charges.


| Design Goal              | How Kill-Recharge Achieves It                                                       |
| ------------------------ | ----------------------------------------------------------------------------------- |
| **Encourage engagement** | Skipping encounters means fewer charges. Players who fight more sustain more.       |
| **Navigation decisions** | Encounter-dense path (more recharge) vs fast path (time save, risk running dry)?    |
| **Build identity**       | Fast-killing builds recharge fast. Capture-focused builds must plan more carefully. |


### 30.4 Tonic Crafting (Endgame)


| Affix Type            | Examples                                                                 |
| --------------------- | ------------------------------------------------------------------------ |
| **Immunity**          | "Grants Ignite immunity during effect"                                   |
| **Conditional**       | "Increased rarity of drops for 3 turns after use"                        |
| **Enhanced recharge** | "+2 charges gained per elite creature kill"                              |
| **Duration**          | "Effect lasts 1 additional turn"                                         |
| **Synergy**           | "If used while creature has Barrier active, also restores 10% Oura pool" |


### 30.5 Traversal Tonic

Allocating one of 4 Tonic slots to a Quickstep Tonic increases section-to-section movement speed within zones. This mirrors PoE's Quicksilver Flask — a real build cost (losing a combat Tonic) for meaningful speed improvement.

---

## 31. Loot System Architecture

### 31.1 Two-Table Model

**Table 1: Base Drop Pool (Universal)** — Everything that can drop from any encounter.


| Category                    | Always Present                               |
| --------------------------- | -------------------------------------------- |
| **NEM** (Mythoras currency) | Yes                                          |
| **Contracts**               | Yes (all tiers weighted by zone level)       |
| **Agents / ReAgents**       | Yes                                          |
| **Skill Cards**             | Yes (Common through Rare, level-appropriate) |
| **Base Type Gear**          | Yes                                          |
| **Crafting Materials**      | Yes                                          |


**Table 2: Exclusive Drop Pool (Source-Specific)** — Items that only drop from specific content.


| Source                     | Exclusive Drops                                                                              |
| -------------------------- | -------------------------------------------------------------------------------------------- |
| **Circuit Champions**      | Accreditation rewards, curated Skill Card selection, Champion-specific gear                  |
| **Region Sovereigns**      | Major Accreditation, curated Skill Card selection (10 options), gear piece or crafting cache |
| **Elite Encounters**       | Elite-specific gear bases, higher-tier Agents, rare Skill Cards                              |
| **Apex-rarity creatures**  | Apex-exclusive materials, rare crafting components                                           |
| **Endgame bosses**         | Boss-specific Uniques, Pinnacle materials                                                    |
| **Endgame systems**        | Mechanic-specific currencies and rewards                                                     |
| **Special zone modifiers** | Pool expansion items                                                                         |


### 31.2 Loot Generation Pipeline

```
ENCOUNTER RESOLVES
    │
    ├─ BASE DROP TABLE
    │   ├─ Zone Level → item level range
    │   ├─ Encounter Type → base quantities
    │   │
    │   ├─ Quantity Modifier [additive within layer]
    │   │   ├─ Zone modifier quant bonus
    │   │   ├─ Accumulated modifier quant
    │   │   └─ Threat Attunement quant bonus
    │   │
    │   ├─ Rarity Modifier [additive within layer]
    │   │   ├─ Zone modifier rarity bonus
    │   │   ├─ Encounter rarity (Charged/Resonant/Apex)
    │   │   └─ Threat Attunement rarity bonus
    │   │
    │   └─ Quality Modifier [additive within layer]
    │       └─ Zone modifier quality bonus
    │
    ├─ EXCLUSIVE DROP TABLE [if source qualifies]
    │   ├─ Elite → Elite pool
    │   ├─ Apex → Apex material pool
    │   ├─ Boss/Champion/Sovereign → specific pool
    │   └─ Endgame system → system-specific pool
    │
    ├─ POOL EXPANSION [special zone modifiers only]
    │   └─ Adds specific items to Base table for this encounter
    │
    └─ FINAL CALCULATION
        Quantity × Rarity × Quality
        [additive within each layer, multiplicative between]

```

### 31.3 Currency Display

**NEM** (Neo Energistics Monetary) is the primary currency — never shown as a decimal. Smart-stack: individual item display for gear and Skill Cards (each distinct item shown separately). Currency consolidates automatically.

**Volume is the reward.** The "piñata" moment of a high-modifier encounter dropping a large volume of items creates the emotional payoff even when individual items are not upgrades. The scrollable loot list creates this moment.

---

## 32. Circuit Champions and Region Sovereign

### 32.1 Circuit Champion Hale, the Gatewarden


| Property            | Value                                                                        |
| ------------------- | ---------------------------------------------------------------------------- |
| **Name**            | Hale                                                                         |
| **Title**           | Circuit Champion, The Gatewarden                                             |
| **Position**        | Zone 9 (Duskwatch). Blocks access to Bridgewatch and the route to Thornwall. |
| **Primary Stream**  | Physical + Tectonic                                                          |
| **Combat Style**    | Overwhelming Force                                                           |
| **Encounter Scale** | Battle (4v4 or 4v5)                                                          |
| **Phases**          | 1                                                                            |


**Character:** Hale is a veteran frontier competitor — practical, direct, unimpressed by theory. She's earned her Circuit Champion standing through consistent results, not charisma. Her team fights hard and conventional — no tricks, no gimmicks. If you can't handle honest combat, the frontier circuit has no place for you.

**Arena:** Duskwatch Yard — a fortified training ground. Stone walls restrict lateral movement, creating narrow approach lanes. No environmental hazards — the test is purely martial. A fundamentals check: physical resistance, adequate Life, consistent offense matter more than type advantage.

**Team Composition:** 3-4 Martial and Construct creatures focused on direct Physical and Tectonic damage. High base stats, aggressive positioning. One creature with [Guard] tag creates a defensive frontline. No ailment tricks, no positioning games — pure Overwhelming Force.

**Test:** Can the player take hits and respond with sustained damage?

**Rewards:**

- Choose 1 from 5 Skill Cards (curated for mid-R1 build stage, mixed types)
- +1 Passive Grid Point
- Mini Accreditation (defensive-leaning: Physical resistance bonus or Life boost)
- Narrative: Hale grants passage. "You fight clean. That's enough for the frontier."

### 32.2 Region Sovereign Seren, the Proving Arbiter


| Property            | Value                                                   |
| ------------------- | ------------------------------------------------------- |
| **Name**            | Seren                                                   |
| **Title**           | Region Sovereign, The Proving Arbiter                   |
| **Position**        | The Proving Hall (dedicated boss zone, end of Region 1) |
| **Primary Stream**  | Phenomena (Psionic/Fae) + Glacial                       |
| **Combat Style**    | Control → Synergy (layered)                             |
| **Encounter Scale** | Siege                                                   |
| **Phases**          | 1 (single phase — the player is still learning)         |


**Character:** Seren is a scholar-arbiter — precise, observant, quietly formidable. Where Hale tests brute competence, Seren tests understanding. The fight rewards players who read the battlefield and punishes those who brute-force it.

**Doctrine:** "Strength without comprehension is noise. Show me you understand what you're doing."

**Arena:** The Proving Hall — an ancient Remnant structure repurposed as an examination arena. Features shifting tile states: Psionic zones that debuff creatures, Fae-enchanted tiles that redirect skill targeting, Glacial sections that reduce movement. The terrain changes each turn cycle based on creature positioning — rewarding adaptive play.

**Team Composition:** 5 creatures across the Siege encounter. Opens with 3 establishing battlefield control. Adds 2 as the battlefield becomes complex. The signature creature is a Psi-origin psychic that scales damage based on active debuffs on the player's squad.

**AI Behaviour:** Control-first. Creatures coordinate to layer terrain effects and debuffs. Once the player's creatures are sufficiently debuffed/mispositioned, the AI shifts to Synergy — creatures chain effects for burst damage windows. Transition is organic (debuff count + positioning) rather than HP-threshold-driven.

**Test:** Can the player read and adapt to a changing battlefield? Positioning, Mana management, squad rotation, type coverage, and tactical reading all matter simultaneously.

**Rewards:**

- Choose 1 from 10 Skill Cards (broad type coverage, Supports included)
- Gear piece OR Crafting Cache
- Major Accreditation (first Circuit engine piece)
- **Command Deck starter** — quest reward grants the player's first Command Deck
- Region 1 completion
- **Region 1 Permanent Choice** (see §32.3)

### 32.3 Region 1 Permanent Choice

After defeating Seren, the player receives a one-time permanent choice:


| Option                             | Effect                                         | Playstyle                                                  |
| ---------------------------------- | ---------------------------------------------- | ---------------------------------------------------------- |
| **A: +1 Passive Grid Point**       | Additional Grid investment                     | Universal. Always useful.                                  |
| **B: +% All Elemental Resistance** | Resistance floor raised permanently            | Defensive. Smooth gearing throughout campaign and endgame. |
| **C: +% Zone Traversal Speed**     | Permanently faster section-to-section movement | Quality of life. Significant for speed-oriented play.      |


Specific values tuned during balance. Each option serves a different playstyle genuinely.

---

## 33. Scouting and Intel System

### 33.1 Design Philosophy

Scouting is the **information and encounter-crafting layer** — giving players agency over what they encounter without removing the organic discovery feel of campaign exploration. It is not a mandatory system but a powerful one for players who engage with it.

Intel is the connective resource — accumulated passively through exploration and encounter completion, spent to bias and craft encounters deliberately.

### 33.2 Intel Accumulation

Intel is **passive** — it accumulates through natural play:


| Activity                                          | Intel Gain                                         |
| ------------------------------------------------- | -------------------------------------------------- |
| Completing an encounter (Exhibition, Elite, etc.) | Small base intel gain                              |
| Entering a new section for the first time         | Exploration intel                                  |
| Visiting a Scout NPC                              | Regional/Zone Report access (cost: Agent currency) |
| Completing a zone with modifiers active           | Bonus intel proportional to modifier intensity     |


There is no dedicated "scouting action" that interrupts gameplay. Intel flows from engagement. Speedrunners who skip encounters accumulate less intel — a natural opportunity cost without punishment.

### 33.3 Intel Spend — Encounter Crafting

Accumulated intel is spent to **craft or bias encounters**:


| Spend Type                  | Effect                                                       | Availability                             |
| --------------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| **Origin bias**             | Bias zone encounter pool toward a specific Origin            | Early endgame                            |
| **Stream bias**             | Bias toward a specific Stream type                           | Mid-campaign                             |
| **Variant weight increase** | Increase probability of Rare/Exotant/Apex variant encounters | Late campaign / endgame                  |
| **Species targeting**       | Target a specific species within the zone's pool             | Endgame — requires deep intel investment |


Intel spend is applied at the **zone level** before entry — the player shapes the encounter parameters before running the zone.

**Early campaign:** Organic discovery dominates. Intel accumulates but spend options are limited to broad biases (Origin, Stream). Players learn what's out there naturally.

**Mid-campaign:** Directed scouting becomes viable. Intel spend targets specific creature types. The Bridgewatch Scout NPC unlocks this layer.

**Endgame:** Full encounter crafting. Species targeting, variant weighting, Agent-enhanced scouting. Players design their farming runs with precision. The equivalent of crafting your own map in PoE.

### 33.4 Scout NPCs

Scout NPCs appear in towns and specific Points of Interest. They are not mandatory — they expand what players can do with accumulated intel.


| Service              | Cost                      | Effect                                                                                     |
| -------------------- | ------------------------- | ------------------------------------------------------------------------------------------ |
| **Zone Report**      | Agent currency (small)    | Surfaces the zone's creature pool, approximate section counts, encounter type distribution |
| **Regional Report**  | Agent currency (moderate) | Covers the full Region — species roster, Origin distribution, encounter type patterns      |
| **Species Sighting** | Agent currency (moderate) | Flags known locations of a target species within the current Region                        |
| **enAgents**         | Agent currency (variable) | Basic scouting enAgents for encounter shaping                                              |


Scout NPCs do not replace intel — they amplify it. A player with no accumulated intel gets less value from a Scout NPC. A player with substantial intel can use Scout NPC information to craft targeted approaches.

### 33.5 Scouting Reports

Scouting Reports exist as **consumable resources** — tiered items that grant specific intel outcomes when used:


| Tier                     | Effect                                                                                                                                                                     | Rarity                                  |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| **Zone Report**          | Reveals the creature pool and approximate encounter distribution for one zone                                                                                              | Common — purchasable from Scout NPC     |
| **Regional Report**      | Reveals the full region's species roster, Origin distribution, encounter patterns                                                                                          | Uncommon — Scout NPC or endgame rewards |
| **Species Report**       | Targets a specific species — reveals known habitats, secondary stream pool, typical variant rates                                                                          | Uncommon                                |
| **Apex Scouting Report** | High-value consumable. Biases an entire biome toward a specific creature type OR facilitates legendary/Apex-tier variant encounters for a limited window. Consumed on use. | Rare — endgame rewards, boss drops      |


Apex Scouting Reports are the chase tier — spending one is a meaningful decision. Using one to trigger a legendary creature encounter window is a significant event.

### 33.6 Endgame Intel

In endgame (Cipher Network), intel is no longer tied to physical zone exploration. Intel generates from:

- Cipher run completions
- Layer-specific activities and events
- Frontier (Network passive tree) investment

Endgame intel applies to the Cipher Network rather than campaign zones — enabling creature targeting within the Network through the same fundamental mechanics.

---

## 34. Capture System

### 34.1 Fiction

Capture is a **Contract Offer** — the Technician formally offers a bond to a creature that has been tested and brought to threshold. The creature accepts because the Technician has demonstrated capability. Not imprisonment — earned acknowledgment.

This reframes capture as a professional act within the world's fiction: a certified Technician offering a legitimate bond, not a child throwing a sphere.

### 34.2 Contract Threshold

A creature can only receive a Contract Offer when its HP is at or below its **Contract Threshold**.


| Factor                   | Effect on Threshold                                                                                          |
| ------------------------ | ------------------------------------------------------------------------------------------------------------ |
| **Variant tier**         | Standard creatures have higher thresholds (more forgiving). Exotant and Apex require being brought very low. |
| **Species**              | Some species are inherently more resistant to bonding — lower thresholds.                                    |
| **Campaign progression** | Early campaign thresholds are generous. Endgame thresholds are demanding.                                    |


### 34.3 The Capture Loop — Two Phases

**Phase 1 — Mark (mid-combat):** The player queues **"Mark for Contract"** as a Technician action in the Planning Phase. This is a free action in the Setup Window — it does not consume the Contract or cost an action budget. Places a visible Contract Intent marker on the target creature. Multiple creatures can be marked in the same encounter.

**Phase 2 — Resolution (post-combat):** After combat resolves, marked creatures at or below threshold at the moment of resolution receive Contract Offers. The player selects a Contract tier per creature from inventory. Clean UI moment, no time pressure, deliberate choice.

**No RNG on success.** Contract Offers at or below threshold always succeed for tier-appropriate creatures. RNG lives entirely in outcome quality. No feel-bad failed captures.

### 34.4 Creature State Modifier

The creature's **ailment state at capture** passively influences outcome quality. No extra UI — players learn these through play:


| State at Capture | Effect                                                    |
| ---------------- | --------------------------------------------------------- |
| Frozen           | More minor implicit slots filled                          |
| Shocked          | Attribute rolls skew toward Invictus-aligned stats        |
| Poisoned         | Different attribute bias — Animus-adjacent stat weighting |
| Staggered        | Higher chance of notable-tier species mod rolls           |


This puts the interesting decision **in how the player fights**, not in item selection. Builds that apply specific ailments have capture-quality advantages as a secondary benefit.

### 34.5 Post-Capture Stat Stability

Creature stats are fixed at capture and remain stable until **very late endgame** where rare boss drops enable specific stat rerolling. Players are at the mercy of generation during the campaign — similar to PoE's item philosophy. Finding a creature with excellent rolls is an event worth celebrating.

Post-capture stat modification exists but is rare, expensive, and endgame-only (Calibrate Agent, Refine Agent, and rarer operations in DOC_v5_new).

### 34.6 Contract Roster


| #   | Contract        | Effect                                                                                                                      | Rarity            |
| --- | --------------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| 1   | **Standard**    | Baseline capture. No additional effect.                                                                                     | Common            |
| 2   | **Reveal**      | Shows full attribute rolls and substat ranges before Contract is consumed. Player can cancel and use a higher tier instead. | Common → Uncommon |
| 3   | **Condition**   | Captured creature joins at full HP.                                                                                         | Uncommon          |
| 4   | **Implicit**    | Minor implicit slots guaranteed to fill to variant tier maximum.                                                            | Uncommon          |
| 5   | **Secondary**   | Variable Secondary Stream rerolled once at capture, better result kept.                                                     | Uncommon → Rare   |
| 6   | **Integration** | Captured creature inherits a portion of squad's average Creature XP level on joining.                                       | Uncommon          |
| 7   | **Lucky Roll**  | Lucky Roll on all attributes and forward-presented substats. Best of 2 rolls kept within tier bounds.                       | Mythic Rare       |


Contracts drop within the standard loot economy — Standard Contracts from common drops and vendors, rarer Contracts from higher content. Lucky Roll is the endgame chase Contract — finding one early is a meaningful event.

---

## 35. Endgame Overview

*Detailed endgame design is covered in dedicated specifications. This section establishes the structural framework Region 1's campaign foreshadows.*

### 35.1 The Cipher Network

The Cipher Network is Mythoras's endgame traversal structure — a layered interconnected network of zones players navigate and conquer.


| Property          | Detail                                                                                                    |
| ----------------- | --------------------------------------------------------------------------------------------------------- |
| **Entry**         | Post-campaign. Technician achieves Regional Champion status.                                              |
| **Structure**     | 5 Layers: Surface Network (L1), Outer Cipher (L2), Deep Cipher (L3), Volatile Reaches (L4), Reserved (L5) |
| **Content**       | Ciphers — consumable items generating zone instances within the Network                                   |
| **Cipher rarity** | Governs max mod count (Initiate: 0-2, Magic: 3-4, Rare: 5-8)                                              |
| **Layer**         | Governs mod severity — same mod is more punishing at L4 than L1                                           |
| **Lives**         | Flat 5 per standard Cipher. Volatile mod option reduces to 3.                                             |
| **XP penalty**    | By Layer: L1 0%, L2 5%, L3 8%, L4 10%                                                                     |


### 35.2 Overrides (Per-Cipher Consumables)

**Overrides** are consumable items applied to a specific Cipher before running it — the map-crafting equivalent. They raise difficulty, add modifiers, and boost specific encounter types.

Overrides are the per-run tactical layer for Cipher Network engagement.

### 35.3 Frontier (Network Passive Tree)

The **Frontier** is the endgame Network passive tree — the strategic specialisation layer governing how players engage with the Cipher Network. A curated ~40-50 node system separated by different masters the player chooses to follow.

Inspired by but distinct from PoE 2's Atlas master system. The Frontier provides long-term directional investment into specific types of Cipher Network content. Full Frontier design is a dedicated session item.

### 35.4 Bonus Completion and Network Points

Running a Cipher at the appropriate rarity for the Layer's bonus criterion earns **Network Points** spent on the Frontier.


| Layer | Bonus Condition             |
| ----- | --------------------------- |
| L1    | Magic rarity or higher      |
| L2    | Rare rarity or higher       |
| L3    | Rare + additional condition |
| L4    | Most demanding condition    |


Players without resources to craft higher-rarity Ciphers still receive normal Cipher rewards — just no Network Points. Being at a higher Layer is always better than running lower-Layer Ciphers at rarity.

### 35.5 Resolution Markers

Incubator-style targeted progression. Players attach Resolution Markers to their progression — each marker has a faint-count requirement and a specific reward at completion.

Examples:

- "Faint 100 Martial-origin creatures: receive a Martial-themed Unique item"
- "Faint 250 Rare creatures: receive a chest of Agent currency"
- "Faint 50 Circuit Champions: receive a specific gear base"

Acquired from Cipher mod rewards, Pinnacle drops, and Frontier investment.

### 35.6 Ascension Framework (Endgame Vertical Dungeon)

*[Name pending — "Ascension" is reserved for creature Principal system. This system needs its own name.]*

A Delve-inspired vertical infinite dungeon — an endgame content pillar distinct from Cipher Network Mapping. Multi-encounter floors, traversal resource, rest sites, escalating difficulty.

Key properties:

- Multiple encounters per floor (not single binary fights)
- Branching paths within floors — entities, treasure, hidden content
- Catalyst resource required to ascend between floors (earned through Cipher Network engagement)
- Resource carry-forward between floors — no mid-floor reset
- Rest Sites at intervals (Full Rest, Restless, Reflect, Trade options)
- Town departure allowed — return to last Rest Site on re-entry
- Failure: creature faint = unavailable rest of floor; squad wipe = run ends

Full design specification deferred.

### 35.7 Pinnacle Boss Structure

Sporadic, expansion-introduced encounters. Two-tier structure:


| Tier                  | Access                                            | Lives | Exclusivity                                 |
| --------------------- | ------------------------------------------------- | ----- | ------------------------------------------- |
| **Standard Pinnacle** | Late L3 / early L4, material-gated                | 1-2   | Available after reaching content threshold  |
| **Apex Pinnacle**     | After Standard defeated, stricter material gating | 1     | Exclusive drops not available from Standard |


Material gating prevents frictionless farming. Materials drop primarily from Volatile content.

---

## 36. Narrative Overview

### 36.1 Region 1 Story Arc

Region 1 (using the retired placeholder "Velden") was drafted to tell a self-contained story with hooks for future expansion.

**Historical premise (stale naming/wrapper):** The player was drafted as a newly certified Technician deployed to the retired-placeholder Velden frontier. Accreditation and the competitive wrapper are reopened.

**Act structure:**


| Beat              | Zone(s)                               | Narrative                                                                                                                                  |
| ----------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Arrival**       | Greenhollow, Briarwood                | Player arrives at the frontier. Learns basics. Meets local NPCs. First creatures contracted.                                               |
| **Exploration**   | Dustrun Trail through Cairn Ridge     | Region's varied terrain. Encounters escalate. Side zones reveal ecological pockets. Ancient Remnant ruins hint at deeper history.          |
| **The Gate**      | Duskwatch, Hale's Garrison            | Circuit Champion Hale blocks progress. Defeating her proves basic competence.                                                              |
| **Preparation**   | Bridgewatch, Thornfield, Harrow Gorge | Rest stop access. Build configuration. Scouting system fully available.                                                                    |
| **Confrontation** | The Proving Hall                      | Seren tests the player. Upon defeat, Seren reveals: the Protocol is bleeding into the physical world faster than the Architects predicted. |
| **Foreshadowing** | Post-victory dialogue                 | Seren warns of other Regions. Mentions Severance operatives. References "the Null."                                                        |


### 36.2 Faction Introductions


| Faction            | R1 Presence                          | Nature of Introduction                                                   |
| ------------------ | ------------------------------------ | ------------------------------------------------------------------------ |
| **The Architects** | Primary. Employer. Quest givers.     | The player works for them. Their instructions frame the R1 assignment.   |
| **Severance**      | Mentioned. Not encountered directly. | NPCs reference "unauthorised Technicians" operating beyond the frontier. |
| **The Accord**     | Not present in R1.                   | No introduction yet.                                                     |
| **The Remnants**   | Ambient. Lore objects.               | Ancient ruins in Cairn Ridge and Thornfield contain Remnant writings.    |
| **The Null**       | Foreshadowed. Indirect threat.       | Creature anomalies may be Null-related. Seren names them post-victory.   |


### 36.3 Future Region Hooks


| Region       | Narrative Direction                                                         | Foreshadowed In R1 By                    |
| ------------ | --------------------------------------------------------------------------- | ---------------------------------------- |
| **Region 2** | Expansion. Severance makes direct contact. Architects' manipulation shows.  | Severance mentions, Protocol instability |
| **Region 3** | Convergence. All factions active. The Accord's offer. The Null's offensive. | Seren's warnings                         |
| **Region 4** | Climax. Final confrontations. Player enters the Protocol.                   | The Protocol's presence in R1            |


---

## 37. Command Deck (Framework)

### 37.1 Overview

The Command Deck is a supplementary tactical system where the Technician plays archetypal, named cards during combat. Introduced as a reward from defeating Seren — the player receives a themed starter deck.


| Property              | Value                                                                 |
| --------------------- | --------------------------------------------------------------------- |
| **Introduction**      | Quest reward from defeating Region Sovereign Seren                    |
| **Battle position**   | Side-of-field panel. Opt-in. Does not replace creature actions.       |
| **Card identity**     | Named, archetypal cards. Collectible.                                 |
| **Campaign presence** | Limited. Starter deck + cards found through R1 endgame zones.         |
| **Endgame presence**  | Full system. Card acquisition, deck building, card-specific crafting. |


### 37.2 Interaction with Battle Flow


| Window                      | Card Types                                           |
| --------------------------- | ---------------------------------------------------- |
| **Before creature actions** | Setup cards (terrain modification, buff application) |
| **Between turns**           | Reaction cards (counter-plays, repositioning)        |
| **After encounter events**  | Response cards (triggered by specific outcomes)      |


Players who ignore the Command Deck can still play the full game. Those who engage gain additional tactical expression.

---

## 38. Reactive Skill Tags

Certain Skill Cards carry defensive/reactive tags enabling specific combat postures:


| Tag               | Function                                                                                              | Trigger                                                                                  | Rarity   |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | -------- |
| **[Guard]**       | Temporary damage absorption for user or an ally. Fixed amount, then expires.                          | On-demand activation or threshold-triggered (auto-activates at HP%)                      | Common   |
| **[Intercept]**   | Redirect an attack targeting an ally to the tagged creature. The intercepting creature takes the hit. | Automatic during enemy attack resolution. Positional requirement (adjacent or in range). | Rare     |
| **[Retaliation]** | Counter-attack after being hit. Damage returned to attacker.                                          | Passive trigger on receiving a hit. May have cooldown.                                   | Moderate |


**Team-wide variants:** Rare Skill Cards or Accreditation bonuses grant team-wide Guard effects — squad-wide damage reduction for limited duration.

**Build implications:** A tank-oriented creature equipping [Guard] + [Intercept] sacrifices offensive slots for defensive utility — a genuine build choice within the Skill Frame economy.

---

## Part IV Summary

**Navigation:** Persistent Three.js scene with three camera scales (Regional Atlas / Zonal Map / Battle Arena). Camera tweens between scales — no reloads. Section-based traversal with spillover and Pressure Cap. Blind turn execution. Remnants vs Obstacles distinction. Single height layer.

**Campaign:** Region-based. MVP = Region 1 (retired placeholder "Velden", 14-zone draft). Future Regions are expansions. No regional type dominance — geographic diversity within each Region.

**Athletic Circuit (STALE / REOPENED):** Historical replacement for Examiner institutional framing. Competition wrapper, gym-leader analogues, Examiner naming, and associated terminology are reopened per `SESSION_DECISIONS_2026-07-15.md`.

**Region 1:** Linear spine with branches. Circuit Champion Hale (Physical/Tectonic, Overwhelming Force). Region Sovereign Seren (Phenomena/Glacial, Control→Synergy). 14 zones across varied terrain. All systems introduced through play.

**Accreditation Circuit:** Major (Region Sovereign) + Mini (Circuit Champion) × 3. Exclusive pairs create replay identity. Warping activates post-campaign in Champion state.

**Zone Modifiers:** 1 campaign slot, 4 options, accumulation across zones. Generic (quant/rarity) and Special (pool expansion) types. Blank opt-out.

**Tonic System:** 4 slots. Kill-recharge. Defensive, Offensive, Utility, Traversal categories. Endgame affix crafting.

**Loot:** Two-table model (Base universal + Exclusive source-specific). NEM as currency. Pipeline: additive within layers, multiplicative between.

**Scouting and Intel:** Passive accumulation through exploration and encounters. Scout NPCs in towns. Scouting Reports as tiered consumables (Zone/Regional/Species/Apex). Encounter crafting via intel spend. Endgame intel from Cipher completions.

**Capture:** Contract Offer fiction. Mark mid-combat (Setup Window), resolve post-combat. Always succeeds at threshold — RNG on outcome quality. Creature state at capture passively influences outcome. 7 Contract variants (Standard → Lucky Roll at Mythic Rare).

**Endgame:** Cipher Network (5 Layers). Overrides (per-cipher consumables). Frontier (Network passive tree, ~40-50 nodes). Bonus Completion / Network Points. Resolution Markers. Ascension Framework (endgame dungeon, naming pending). Pinnacle Boss two-tier structure.

**Narrative:** Protocol anomaly premise. Five factions (Architects, Severance, Accord, Remnants, Null). Seren as R1 Sovereign reveals the wider threat. Future Region hooks embedded.

**Command Deck:** Introduced as Seren reward. Supplementary tactical layer. Full system in endgame.

**Reactive Tags:** Guard, Intercept, Retaliation embedded in Skill Card system.

---

**End of Part IV: World & Campaign**