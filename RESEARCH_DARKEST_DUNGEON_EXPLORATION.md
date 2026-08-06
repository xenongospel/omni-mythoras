# Research — Darkest Dungeon (2016) Close-to-Full Exploration

> Research / inspiration only. **Does not invent Mythoras canon.**  
> Does **not** recommend grimdark as Mythoras’s default tone (owner wants lighter multi-register / Pokémon-athletic with scene-specific darkness — see [CONTEXT.md](CONTEXT.md) Tone & World Register).  
> Related owner direction: [RESEARCH_OWNER_ANSWERS_2026-08-06.md](RESEARCH_OWNER_ANSWERS_2026-08-06.md) §B9, A2, A4–A5; [RESEARCH_OWNER_DIRECTION_PRACTICAL_TURN_2026-08-05.md](RESEARCH_OWNER_DIRECTION_PRACTICAL_TURN_2026-08-05.md); combat clarity sibling [RESEARCH_MOP_CURSOR_EA_2026-08.md](RESEARCH_MOP_CURSOR_EA_2026-08.md).

**Date:** 2026-08-06  
**Subject:** *Darkest Dungeon* (Red Hook Studios; Steam app [262060](https://store.steampowered.com/app/262060/Darkest_Dungeon/); full release 2016-01-19)  
**Status:** Close-to-full systems / presentation exploration from high-trust sources. Advisory transfer only.  
**Scope note:** DD1 (2016 + base systems). DD2 / Butcher’s Circus mentioned only where they clarify a DD1 mechanic.

---

## Table of contents

1. [Owner intent filter](#1-owner-intent-filter)
2. [Source map](#2-source-map)
3. [Overall loop](#3-overall-loop-hamlet--expedition--combat--resolve)
4. [UI layout grammar](#4-ui-layout-grammar)
5. [Party, roster, camping, stress, death](#5-party-roster-camping-stress-death--retire)
6. [Narrative presentation](#6-narrative-presentation)
7. [Art, orchestration, clarity](#7-art-orchestration--clarity-techniques)
8. [Defensive / resistance / protection model](#8-defensive--resistance--protection-model-factual)
9. [Scene-based vs tile-based](#9-scene-based-vs-tile-based)
10. [Steal / adapt / do not copy](#10-steal--adapt--do-not-copy)
11. [Top transferable principles for Mythoras](#11-top-transferable-principles-for-mythoras-advisory)
12. [Open questions / follow-ups](#12-open-questions--follow-ups)
13. [Cited sources](#13-cited-sources)

---

## 1. Owner intent filter

From [RESEARCH_OWNER_ANSWERS_2026-08-06.md](RESEARCH_OWNER_ANSWERS_2026-08-06.md):

| Owner want | How this note treats DD |
| --- | --- |
| Orchestration, scene transitions, comic-strip depth layers | Document as **presentation grammar** — steal structure, not gothic palette |
| Battle **info band vs scene band**; asset clarity | Primary UI lesson for Squad gear / combat composition experiments |
| Still wants **tile-based** combat + MoP clarity + multi-biome lighter tone | Explicitly separate DD’s **1D rank formation** from Mythoras’s locked grid Battle ([CONTEXT.md](CONTEXT.md)) |
| Squad gear UX primary lean = DD (over Battle Brothers as primary) | Emphasize character-sheet + shared bag + roster band patterns; note DD gear is *lighter* than Mythoras’s intended per-creature gear |
| Shared Technician stash + per-creature gear; 5-creature Squad | Map DD’s 16-slot mission bag + 2 trinkets/hero + town trinket vault onto that lean — adapt, don’t clone slot counts |
| DD defenses briefly vs Grim Dawn soft-cap resists; **prefer GD-leaning hybrid** for Mythoras | §8 facts + short contrast; do not recommend DD PROT/status-resist stack as Mythoras default |

---

## 2. Source map

| Tier | Sources used |
| --- | --- |
| **Primary / first-party** | [Steam store page](https://store.steampowered.com/app/262060/Darkest_Dungeon/); Tyler Sigman [GDC 2016 Design Postmortem](https://www.youtube.com/watch?v=0IUaGQhlPwo) ([GDC Vault](https://gdcvault.com/play/1023089/Darkest-Dungeon-A-Design)); Chris Bourassa [Questionable Characters](https://www.youtube.com/watch?v=77NfJLARwPQ) (hero/monster design); Red Hook cofounder interviews (Game Developer / RPS / GameSpot / IGF Road) |
| **Systems facts** | Official wiki.gg: [Combat Mechanics](https://darkestdungeon.wiki.gg/wiki/Combat_Mechanics_(Darkest_Dungeon)), [Inventory](https://darkestdungeon.wiki.gg/wiki/Inventory), [Death’s Door](https://darkestdungeon.wiki.gg/wiki/Death%27s_Door_(Darkest_Dungeon)), [Affliction](https://darkestdungeon.wiki.gg/wiki/Affliction), [Stress](https://darkestdungeon.wiki.gg/wiki/Stress_(Darkest_Dungeon)), [Hamlet](https://darkestdungeon.wiki.gg/wiki/Hamlet), [Getting Started](https://darkestdungeon.wiki.gg/wiki/Getting_Started), [Provisions](https://darkestdungeon.wiki.gg/wiki/Provisions), [Camping](https://darkestdungeon.wiki.gg/wiki/Camping) |
| **Design writeups** | [RPS — turn-based combat / side view](https://www.rockpapershotgun.com/how-darkest-dungeon-found-new-horror-through-its-turn-based-combat); [RPS — making of art](https://www.rockpapershotgun.com/darkest-dungeon-making-of-art); [Game Developer — designing for despair](https://www.gamedeveloper.com/business/-i-darkest-dungeon-i-designing-for-despair-and-kicking-you-when-you-re-down); [Road to the IGF](https://www.gamedeveloper.com/audio/road-to-the-igf-red-hook-studios-i-darkest-dungeon-i-); [GameSpot — Gothic sensibilities](https://www.gamespot.com/articles/the-gothic-sensibilities-of-darkest-dungeon/1100-6424880/) |
| **Cross-ref (Mythoras research)** | Owner answers 2026-08-06; MoP cursor EA note; Grim Dawn vs PoE resist brief in owner-direction note |

---

## 3. Overall loop (Hamlet → expedition → combat → resolve)

Steam’s own framing: recruit / train / lead flawed heroes through twisted locales; fight monsters **and** stress, famine, disease, darkness; camp; rest in town ([Steam About](https://store.steampowered.com/app/262060/Darkest_Dungeon/)).

Sigman’s GDC pillars of play time: **town, exploration, combat, camping** — combat + exploration dominate clock time; camping and town are shorter but strategically critical ([GDC 2016](https://www.youtube.com/watch?v=0IUaGQhlPwo)).

```
HAMLET (hub week)
  Stage Coach → recruit into roster
  Guild / Blacksmith / Survivalist → skills, weapons/armor tiers, camp skills
  Abbey / Tavern → stress relief (commit heroes for the next week)
  Sanitarium → quirks / diseases
  Nomad Wagon → buy trinkets
  Select dungeon + difficulty + party of 4 → Provisions (16-slot bag)
        │
        ▼
EXPEDITION (side-view hallways + rooms)
  Torchlight, hunger checks, curios, traps, obstacles
  Room clears → optional Camp (firewood)
  Encounter → COMBAT (same side view; ranks 1–4)
        │
        ▼
RESOLVE
  Retreat / success / failure / deaths
  Loot tally → return to Hamlet
  Week advances; treatment slots resolve; heirlooms upgrade buildings
```

### Hamlet (estate hub)

Per [Hamlet](https://darkestdungeon.wiki.gg/wiki/Hamlet) / [Getting Started](https://darkestdungeon.wiki.gg/wiki/Getting_Started):

| Building | Job |
| --- | --- |
| **Stage Coach** | Recruit heroes; upgrade roster size / weekly recruit count / recruit level |
| **Blacksmith** | Linear weapon (DMG/CRIT/SPD) and armor (MAX HP/DODGE) upgrades |
| **Guild** | Unlock / upgrade combat skills |
| **Survivalist** | Unlock camping skills |
| **Abbey / Tavern** | Stress relief activities (cost + risk of quirk side-effects; Abbey generally safer) |
| **Sanitarium** | Remove/lock quirks; treat diseases |
| **Nomad Wagon** | Weekly trinket shop |

Heirloom currencies (Busts, Portraits, Deeds, Crests) upgrade buildings; gold pays services. This is a **persistent roster meta** wrapped around roguelike expeditions — not a pure run-delete loop.

### Expedition

- Party size in the field: **4 heroes** in fixed ranks.
- Procedural dungeon graph of hallways + rooms; light meter (torch) modulates stress, loot, and combat modifiers.
- Shared **16-slot** provision/loot bag ([Inventory](https://darkestdungeon.wiki.gg/wiki/Inventory)).
- Medium/Long quests grant firewood for mid-run **Camping** ([Camping](https://darkestdungeon.wiki.gg/wiki/Camping)).

### Combat → resolve

- Turn-based, SPD-ordered rounds; skills gated by **rank** and target ranks ([Combat Mechanics](https://darkestdungeon.wiki.gg/wiki/Combat_Mechanics_(Darkest_Dungeon))).
- Attrition is intentional: healing does not keep pace with damage over a long quest ([GDC 2016](https://www.youtube.com/watch?v=0IUaGQhlPwo); [Game Developer interview](https://www.gamedeveloper.com/business/-i-darkest-dungeon-i-designing-for-despair-and-kicking-you-when-you-re-down)).
- Return to Hamlet → spend gold/heirlooms → rotate stressed heroes into Abbey/Tavern → next week’s expedition.

**Loop lesson (neutral):** DD’s “band” hierarchy — combat/exploration as lead guitar; stress meta and town facilities as supporting parts that only work because the RPG base is solid ([Game Developer](https://www.gamedeveloper.com/business/-i-darkest-dungeon-i-designing-for-despair-and-kicking-you-when-you-re-down)).

---

## 4. UI layout grammar

### 4.1 Combat: scene band vs information band

Observable product grammar (consistent across official screenshots / trailers / play):

| Band | Contents | Function |
| --- | --- | --- |
| **Scene (upper / mid)** | Large side-view heroes + enemies on a shared stage; torch/light; VFX for skills, crits, Death’s Door, Affliction poses | Emotional + spatial readability; “bond with bodies,” not top-down heads ([RPS combat](https://www.rockpapershotgun.com/how-darkest-dungeon-found-new-horror-through-its-turn-based-combat)) |
| **Information (lower)** | Skill buttons for active hero; move; pass; party portraits with HP / stress / status pip language; torch meter; inventory access | Decision surface without covering the stage |
| **Transient overlays** | Skill targeting highlights on ranks; floating damage/stress numbers; Ancestor barks | Teach without permanent chrome |

This matches the owner’s lean: **scene carries presence; lower band carries decisions and glanceables** ([RESEARCH_OWNER_ANSWERS_2026-08-06.md](RESEARCH_OWNER_ANSWERS_2026-08-06.md) A2).

**Mythoras mapping (advisory, not canon):** World View already locks “battle dominates viewport + compact HUD” ([CONTEXT.md](CONTEXT.md)). DD argues for keeping the **board/scene large**, putting Squad glanceables + skill/command surface in a **dedicated info band**, and opening deep sheets on demand (Workspace View) — same separation MoP uses with board vs tray ([RESEARCH_MOP_CURSOR_EA_2026-08.md](RESEARCH_MOP_CURSOR_EA_2026-08.md)).

### 4.2 Character sheets

- Right-click / select hero → sheet: class identity, quirks, diseases, resistances, weapon/armor tier, **2 trinket slots**, skill loadout.
- Sheet is a **modal inspect**, not a permanent surrounding management ring — aligns with Mythoras Workspace-on-demand more than with permanent CRPG side panels.

### 4.3 Inventory / gear UX (why owner leaned DD for Squad gear)

DD deliberately **underbuilt** paper-doll loot so Affliction could stay the hook ([GDC 2016](https://www.youtube.com/watch?v=0IUaGQhlPwo) — “what we didn’t do”).

| Layer | Size / rule | Source |
| --- | --- | --- |
| Mission provision/loot bag | **16 slots**, shared by whole party; stack limits per item type | [Inventory](https://darkestdungeon.wiki.gg/wiki/Inventory) |
| Equipped gear per hero | Weapon + armor (linear Blacksmith tiers) + **2 trinkets** | Inventory; [Trinkets](https://darkestdungeon.wiki.gg/wiki/Trinkets_(Darkest_Dungeon)) / fandom |
| Town trinket vault | Up to **999** unequipped trinket slots | [Inventory](https://darkestdungeon.wiki.gg/wiki/Inventory) |
| Gold / heirlooms | Separate town counters (not competing with 16-bag) | Same |

**UX pattern to steal (not slot counts):**

1. **Shared expedition stash** + **tiny per-unit equip surface** visible from the same management flow.  
2. Select unit from a **roster strip** → sheet shows that unit’s slots while stash stays reachable.  
3. Mission bag scarcity forces **provisioning as composition** (what you bring *is* a build decision).

**Adapt for Mythoras:** Owner wants **shared Technician stash (multi-cell)** + **fuller per-creature gear** for a **5-creature Squad** — denser than DD’s 2 trinkets, closer to Battle Brothers’ doll, but with DD’s *layout grammar* (scene/roster band + inspect sheet) as the primary lean over BB’s tent as primary ([RESEARCH_OWNER_ANSWERS_2026-08-06.md](RESEARCH_OWNER_ANSWERS_2026-08-06.md) A2, A4).

### 4.4 Hamlet UI grammar

Estate is a **illustrated hub with building hotspots** — comic/manuscript atmosphere — not a spreadsheet. Management depth lives *inside* buildings. Transitions into/out of buildings and into embarkation reinforce “chapter beats.”

---

## 5. Party, roster, camping, stress, death / retire

### 5.1 Roster vs party

- **Roster:** large persistent pool (Stage Coach upgrades raise cap). Heroes are treated as **loot-like recruits** — excitement when the class you need appears ([GDC 2016](https://www.youtube.com/watch?v=0IUaGQhlPwo)).
- **Party:** exactly **4** for a mission; composition = ranks + skill coverage + stress resilience + dungeon-appropriate DoT/resist matchups.
- Level clamping prevents high Resolve heroes from trivializing low-level quests (tension preservation; GDC Q&A).

**Mythoras parallel (existing canon, not invented):** Squad = 5 (3 Field + 2 Bench), locked on zone entry ([CONTEXT.md](CONTEXT.md)). DD’s lesson is **roster backlog + deliberate embark selection**, not copying 4-rank parties. Owner already flagged Mewgenics-like “choose who goes out” interest ([RESEARCH_OWNER_ANSWERS_2026-08-06.md](RESEARCH_OWNER_ANSWERS_2026-08-06.md) B7).

### 5.2 Stress & Affliction (the hook)

Facts ([Stress](https://darkestdungeon.wiki.gg/wiki/Stress_(Darkest_Dungeon)), [Affliction](https://darkestdungeon.wiki.gg/wiki/Affliction), GDC):

| Threshold | Effect |
| --- | --- |
| Stress accumulates | Combat crits/stress skills, darkness, traps, hunger fails, ally Death’s Door/death, curios, etc. |
| **100** | Resolve check → **Virtue** (~25% base) or **Affliction** |
| Afflicted | Stat penalties + **loss of agency** (act-outs: pass, move, random skill, attack ally/self, refuse heals/camp/food) + party stress barks |
| **200** | **Heart attack** → forced to Death’s Door; if already there → instant death. Virtuous heroes instead clear virtue and reset stress |

Design notes from Sigman ([GDC 2016](https://www.youtube.com/watch?v=0IUaGQhlPwo)):

- Stress meter is **visible like HP** (they considered obfuscating it; rejected — players need a break-point for push/retreat/camp decisions).
- Affliction *behaviors* are partly **obfuscated** so discovery stays experiential.
- Explicitly **not** a mental-illness sim; framed as human response to stress.
- Loss of agency is “bad design” by textbook UX — kept because it serves the thesis “heroes are human.”

**Town relief:** Abbey/Tavern activities reduce stress (and can clear Affliction when stress hits 0); Sanitarium handles quirks/diseases ([Hamlet](https://darkestdungeon.wiki.gg/wiki/Hamlet)).

### 5.3 Camping

([Camping](https://darkestdungeon.wiki.gg/wiki/Camping))

- Spend firewood in a cleared room; consume food tiers; spend **Respite points** on camping skills (heal, stress heal, buffs, ambush prevention, mortality-debuff cleanses).
- Afflicted heroes may refuse food/skills (still spend Respite on refused skills — gotcha).
- Mid-run recovery is a **second composition game**: who brought which camp skills?

### 5.4 Death’s Door, death, “retire”

([Death’s Door](https://darkestdungeon.wiki.gg/wiki/Death%27s_Door_(Darkest_Dungeon)), GDC)

- Hitting 0 HP does **not** kill immediately → Death’s Door state with penalties.
- Further hits roll **Death Blow** resistance (base ~67% resist → ~33% die chance; hard-capped at **87%** resist).
- Heal ≥1 HP clears Death’s Door but applies **Mortality / recovery debuffs** until quest end (or certain camp skills).
- Permadeath is real; trinkets can be scavenged if survivors remain ([Inventory](https://darkestdungeon.wiki.gg/wiki/Inventory) notes).
- Soft “retire” pressure: dismiss underleveled / quirk-ruined heroes; high-level wipes are the retention danger Red Hook later mitigated with Stage Coach higher-level recruits ([GDC Q&A](https://www.youtube.com/watch?v=0IUaGQhlPwo)).

**Mythoras existing analogue (do not rename):** **Load** is the fatigue/rotation lever ([CONTEXT.md](CONTEXT.md)) — structurally closer to “persistent expedition tax + bench recovery” than to Affliction’s loss-of-agency. Steal the *visibility + threshold + town/camp relief* pattern; do not default-copy act-outs or heart attacks.

---

## 6. Narrative presentation

| Layer | Mechanism | Sources |
| --- | --- | --- |
| **Ancestor narrator** | Wayne June VO — success, failure, crits, stress beats, embarkation; written to his cadence | [IGF Road](https://www.gamedeveloper.com/audio/road-to-the-igf-red-hook-studios-i-darkest-dungeon-i-); [GameSpot](https://www.gamespot.com/articles/the-gothic-sensibilities-of-darkest-dungeon/1100-6424880/); GDC |
| **Emergent story over dialogue trees** | Deliberately **low lore feed**; player constructs “that run with the slugs” narratives; ~70k words still exist as barks/strings | [GDC 2016](https://www.youtube.com/watch?v=0IUaGQhlPwo) |
| **Comic / manuscript panels** | Affliction/Virtue reveals, camping, key story beats use illustrated panel language; estate art as illuminated-manuscript pages | [RPS art](https://www.rockpapershotgun.com/darkest-dungeon-making-of-art); Bourassa quotes on manuscripts + comics |
| **Custom poses for key states** | Afflicted heroes get new art/poses so the mechanic is *felt* | [RPS art](https://www.rockpapershotgun.com/darkest-dungeon-making-of-art) |
| **Audio as design** | Music tempo rises with panic; VO reinforces state changes — “enhances the game design,” not just mood | GDC; early interviews |

**Steal for Mythoras (tone-agnostic):** layered depth — world scene → comic/panel beat for rare state changes → optional narrator/bark → log.  
**Do not steal:** constant gothic contempt VO as default register. Mythoras already specifies multi-register skybox/score ([CONTEXT.md](CONTEXT.md)).

---

## 7. Art, orchestration & clarity techniques

### 7.1 Why silhouettes read

Bourassa’s stated recipe ([IGF Road](https://www.gamedeveloper.com/audio/road-to-the-igf-red-hook-studios-i-darkest-dungeon-i-); [RPS art](https://www.rockpapershotgun.com/darkest-dungeon-making-of-art); [Mash Those Buttons interview](https://mashthosebuttons.com/2013/11/a-talk-with-darkest-dungeons-chris-bourassa/)):

- **Period + comic hybrids:** woodcuts, Dürer, illuminated manuscripts + Mignola / Davis / Bachalo / etc.
- **Pooling blacks + hard edges** → high-contrast silhouettes; empty eyes as identity mark (tone-specific).
- **Flat / readable staging** over photoreal detail — production efficiency for one lead artist *and* in-combat readability.
- Pinch of **iconic “cute”** proportion so classes stay mascot-clear even in a grim setting.
- **Spine** skeletal animation for expressive attacks without full traditional frame blowouts ([IGF Road](https://www.gamedeveloper.com/audio/road-to-the-igf-red-hook-studios-i-darkest-dungeon-i-)).
- Class/monster design from **theme → role**, then silhouette tests; avoid competing with established fantasy tropes by remixing (e.g. swine-orc faction logic in Bourassa’s character talk).

### 7.2 Orchestration / transitions

- **Same camera language** for crawl and combat (no fade-to-black mode swap) — intimacy + budget ([RPS combat](https://www.rockpapershotgun.com/how-darkest-dungeon-found-new-horror-through-its-turn-based-combat)).
- Fake “3D” combat camera sway added later as polish (GDC anecdote).
- State changes get **ceremony**: Affliction panel, Death’s Door sting, narrator line, pose swap — ceremony = comprehension.
- UI fights between founders were real; clarity was treated as a hill ([GDC partnership talk](https://www.youtube.com/watch?v=UoogT3XOl-8)).

### 7.3 Clarity principles transferable without gothic paint

1. Silhouette-first characters/creatures (AI asset pipeline still needs this bar — owner note B13).  
2. One strong contrast language for “who is selectable / afflicted / dying.”  
3. Ceremony on rare state transitions; quiet chrome the rest of the time.  
4. Icons for statuses that share a shape grammar (bleed drop vs blight drop, etc.).

---

## 8. Defensive / resistance / protection model (factual)

### 8.1 Core combat defenses

From [Combat Mechanics](https://darkestdungeon.wiki.gg/wiki/Combat_Mechanics_(Darkest_Dungeon)):

| Stat | Role |
| --- | --- |
| **HP** | Pool; heroes at 0 → Death’s Door (enemies die) |
| **DODGE** | Subtracted from attacker **ACC** for hit chance |
| **PROT** | % reduction to **direct** damage only; **does not** reduce Bleed/Blight DoT; **hard cap 80%**; rare Pierce skills ignore PROT |
| **SPD** | Initiative; round order = SPD + d8, with tie-break rules |
| **ACC / DMG / CRIT** | Offense axes (CRIT ≈ 1.5× max of skill range on hit) |

### 8.2 Status resistances (not damage-type resists)

Heroes/enemies have resist chances vs **Stun, Blight, Bleed, Disease, Debuff, Move, Trap** (and Death Blow as a special case). These are **application resists**, not Grim Dawn–style elemental damage mitigation grids.

Biome/faction matchups matter: e.g. Ruins/Cove often weaker to Blight; Warrens/Weald patterns differ for Bleed vs Blight ([Status Effects / Bleed wiki material](https://darkestdungeon.wiki.gg/wiki/Status_Effects_(Darkest_Dungeon))). Party composition is partly **coverage drafting** against dungeon threat profiles.

Resolve Level commonly adds **+10%** to many hero resists per level (Bleed page and glossary tradition) — progression softens status pressure.

### 8.3 Death Blow resist

Base ~**67%** Death Blow resist (≈33% die on hit at Death’s Door); hard cap **87%** ([Death’s Door](https://darkestdungeon.wiki.gg/wiki/Death%27s_Door_(Darkest_Dungeon))).

### 8.4 Brief contrast: DD vs Grim Dawn (owner prefers GD lean)

| Axis | Darkest Dungeon | Grim Dawn (from prior research) | Mythoras owner lean |
| --- | --- | --- | --- |
| Primary mitigation | DODGE + PROT% + HP + Death’s Door buffer | Wide **typed resist %** grid + armor/DA etc. | **GD-leaning hybrid** soft-cap / penalty / RR feel ([RESEARCH_OWNER_ANSWERS_2026-08-06.md](RESEARCH_OWNER_ANSWERS_2026-08-06.md) A5) |
| Cap culture | PROT 80% hard; Death Blow 87% hard | Soft 80% / hard ~95%; overcap vs RR | Prefer one difficulty framing, not many cap ladders |
| Party role | 4 heroes cover **status + rank roles**; little “all elemental resists on one body” | One avatar must cover many resists | Squad-composed coverage already seeded in CONTEXT |
| What to learn from DD anyway | Visible stress-like meters; Death’s Door as **tension buffer**; DoTs bypass armor-like PROT; drafting for dungeon threats | Glanceable resist icons; soft-cap pedagogy | Hybrid: GD math/UI instincts + DD composition & clarity lessons |

**Do not treat DD PROT as Mythoras’s resist model.** Use it as a **party-composition & clarity** reference; keep GD soft-cap hybrid as the preferred numeric culture unless a later grill locks otherwise.

---

## 9. Scene-based vs tile-based

| Dimension | Darkest Dungeon | Mythoras (locked / owner) |
| --- | --- | --- |
| Traversal space | Side-scrolling hallway nodes; room nodes | Zone tiles / nodes; net2D preference for env/greybox |
| Combat space | **1D ranks (1–4)** facing 1–4; size can span ranks | **Tile grid Battle** on zone surface; variable footprints ([CONTEXT.md](CONTEXT.md)) |
| Positioning verbs | Move rank, shuffle, pull/push, corpses holding formation | Grid move, footprints, Field/Bench rotation |
| Why DD isn’t “tile combat” | Rank index is the whole spatial puzzle; no free 2D pathing | Owner explicitly keeps tiles + MoP clarity |

**What Mythoras can steal without importing static formation:**

| Steal | Without importing |
| --- | --- |
| Large readable units on a dedicated stage | Side-view-only camera |
| Skills that care about **relative position** | Fixed 4-slot corridors (use tiles/lanes/adjacency instead) |
| Corpses / blockers as anti-dominant-strategy tech | Literal corpse ranks |
| Info band under scene | Rank portraits as the only spatial UI |
| Same art pass for travel + fight when continuity matters | Forcing no mode change if World View continuity already differs (OD-004 / MoP contrast) |

Early DD prototypes considered top-down tiles then combat cutaway; they **rejected** dual modes for art budget + intimacy ([RPS combat](https://www.rockpapershotgun.com/how-darkest-dungeon-found-new-horror-through-its-turn-based-combat)). Mythoras’s adaptive continuity (battle on zone surface) is a *different* answer to the same “don’t lose the world” impulse — keep the impulse, not the 1D formation.

---

## 10. Steal / adapt / do not copy

### Steal (high confidence for experiments)

1. **Scene band vs information band** combat/management composition.  
2. **Ceremony** for rare state changes (panel + pose + sting + log line).  
3. **Shared mission stash + per-unit equip slots** management flow; roster strip → sheet.  
4. **Silhouette-first** creature/hero clarity; status icon grammar.  
5. **Visible threshold meters** for expedition taxes (DD Stress; Mythoras already has Load — pattern, not rename).  
6. **Death’s Door–style buffer** as a *design pattern* (prevent one-shot from full / near-full from feeling meaningless) — only if a grill wants an analogue; not automatic canon.  
7. **Hub buildings as verbs** (heal fatigue, train, recruit, craft) rather than one undifferentiated menu.  
8. **Narrator/bark layer** as optional orchestration — register-switched, not gothic-only.

### Adapt (reshape to Mythoras constraints)

| DD thing | Adapt toward |
| --- | --- |
| 4-rank party | 5 Squad / 3+2 Field-Bench; tile roles instead of ranks |
| 2 trinkets + linear weapon/armor | Richer per-creature gear + shared multi-cell Technician stash |
| Affliction act-outs | If any “break” fantasy exists, prefer disclosed mechanics; owner already skeptical of Affliction-as-fiction-tax ([RESEARCH_OWNER_ANSWERS_2026-08-06.md](RESEARCH_OWNER_ANSWERS_2026-08-06.md) B4) |
| Torchlight | Biome/register lighting as mood + rules — multi-register, not only dread |
| PROT / status resists | Keep **composition coverage** lesson; prefer **GD soft-cap hybrid** numbers/UI |
| Permanent ironman saves | Campaign persistence without copying rage-quit save cruelty |
| Emergent bark narrative | Protocol / athletic / biome voices instead of Ancestor contempt |

### Do not copy

1. **Grimdark as default tone** / empty-eyed hopelessness as brand.  
2. **Static 1D formation** as Mythoras combat identity.  
3. **Loss-of-agency Affliction** as a mandatory core hook.  
4. **Heart-attack-at-200** cruelty curve as onboarding default.  
5. **Underbuilt gear** as an excuse — DD skipped paper dolls to fund Affliction; Mythoras *wants* creature gear depth.  
6. **Narrator that insults failure** as primary feedback channel.  
7. **PROT-as-primary-mitigation** replacing typed resist hybrid the owner prefers.  
8. Treating the whole game as a stress-roguelike — Mythoras is campaign RPG with zone-run structure ([CONTEXT.md](CONTEXT.md) correction #7).

---

## 11. Top transferable principles for Mythoras (advisory)

1. **Split stage from sheet.** Let the battle/world scene own emotional clarity; put skills, glanceables, and stash/gear in a stable information band / Workspace inspect — DD’s composition without DD’s ranks.  
2. **Ceremony teaches better than tooltips alone.** Spend art/animation budget on state transitions (Downed/Load break/Protocol events); keep baseline chrome quiet.  
3. **Shared stash + per-creature slots is a proven mid-complexity UX.** DD proves the *flow*; Mythoras should raise per-creature depth toward BB/GD density while keeping DD’s select-unit-from-strip grammar.  
4. **Draft coverage across the Squad, not one perfect body.** DD’s dungeon-appropriate status/role drafting supports CONTEXT’s “combined resistance coverage,” even if the math leans Grim Dawn.  
5. **Orchestrate register, don’t freeze it.** DD unifies art/audio/VO into one gothic register; Mythoras should reuse that *unification craft* across **many** biome/stakes registers (Pokémon-athletic baseline, scene-specific darkness).

---

## 12. Open questions / follow-ups

- Vertical vs horizontal vs “diagonal” slice of DD layout — owner explicitly undecided ([RESEARCH_OWNER_ANSWERS_2026-08-06.md](RESEARCH_OWNER_ANSWERS_2026-08-06.md) A2).  
- How many glanceables in the info band before Workspace sheet (A3: HP + maybe attributes).  
- Whether any Death’s Door–like buffer belongs beside Oura (temp) / Barrier investment rules (CONTEXT #6) — needs grill, not silent add.  
- Montabi squad-layout video analysis (spawned in owner answers D2) as a succinctness check against DD’s denser band.  
- Optional: Bourassa creative-direction GDC talk (referenced in Sigman postmortem) for deeper panel/transition craft if composition lab starts.

---

## 13. Cited sources

### Official / store

- [Darkest Dungeon on Steam](https://store.steampowered.com/app/262060/Darkest_Dungeon/)  
- Red Hook Studios (developer/publisher)

### Dev talks & interviews

- Tyler Sigman — [Darkest Dungeon: A Design Postmortem (GDC 2016, YouTube)](https://www.youtube.com/watch?v=0IUaGQhlPwo); [GDC Vault entry](https://gdcvault.com/play/1023089/Darkest-Dungeon-A-Design)  
- Chris Bourassa — [Questionable Characters: Hero & Monster Design (YouTube)](https://www.youtube.com/watch?v=77NfJLARwPQ)  
- Sigman & Bourassa — [Partnership on Darkest Dungeon: The Double-Edged Sword (GDC, YouTube)](https://www.youtube.com/watch?v=UoogT3XOl-8)  
- [Road to the IGF: Red Hook Studios' Darkest Dungeon](https://www.gamedeveloper.com/audio/road-to-the-igf-red-hook-studios-i-darkest-dungeon-i-)  
- [Designing for despair… (Game Developer)](https://www.gamedeveloper.com/business/-i-darkest-dungeon-i-designing-for-despair-and-kicking-you-when-you-re-down)  
- [RPS — How DD found horror through turn-based combat](https://www.rockpapershotgun.com/how-darkest-dungeon-found-new-horror-through-its-turn-based-combat)  
- [RPS — Beautiful art even in the Darkest Dungeon](https://www.rockpapershotgun.com/darkest-dungeon-making-of-art)  
- [GameSpot — Gothic Sensibilities](https://www.gamespot.com/articles/the-gothic-sensibilities-of-darkest-dungeon/1100-6424880/)  
- [Mash Those Buttons — Talk with Chris Bourassa (2013)](https://mashthosebuttons.com/2013/11/a-talk-with-darkest-dungeons-chris-bourassa/)

### Wiki (systems)

- [Combat Mechanics](https://darkestdungeon.wiki.gg/wiki/Combat_Mechanics_(Darkest_Dungeon))  
- [Inventory](https://darkestdungeon.wiki.gg/wiki/Inventory)  
- [Death’s Door](https://darkestdungeon.wiki.gg/wiki/Death%27s_Door_(Darkest_Dungeon))  
- [Affliction](https://darkestdungeon.wiki.gg/wiki/Affliction)  
- [Stress](https://darkestdungeon.wiki.gg/wiki/Stress_(Darkest_Dungeon))  
- [Camping](https://darkestdungeon.wiki.gg/wiki/Camping)  
- [Hamlet](https://darkestdungeon.wiki.gg/wiki/Hamlet)  
- [Getting Started](https://darkestdungeon.wiki.gg/wiki/Getting_Started)  
- [Provisions](https://darkestdungeon.wiki.gg/wiki/Provisions)  
- [Glossary](https://darkestdungeon.wiki.gg/wiki/Glossary)

### Prior Mythoras research

- [RESEARCH_OWNER_ANSWERS_2026-08-06.md](RESEARCH_OWNER_ANSWERS_2026-08-06.md)  
- [RESEARCH_OWNER_DIRECTION_PRACTICAL_TURN_2026-08-05.md](RESEARCH_OWNER_DIRECTION_PRACTICAL_TURN_2026-08-05.md) (incl. GD vs PoE resists)  
- [RESEARCH_MOP_CURSOR_EA_2026-08.md](RESEARCH_MOP_CURSOR_EA_2026-08.md)  
- [CONTEXT.md](CONTEXT.md)

---

*End of Darkest Dungeon exploration note.*
