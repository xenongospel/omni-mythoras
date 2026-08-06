# Research: Starting Complex Indie Games Without UI/Art Polish

**Date:** 2026-08-01  
**Question:** How do indie (and professional) teams—especially artist-heavy or systems-heavy ones—actually *start* complex games without getting stuck polishing UI, tiles, and presentation?  
**Scope:** Greyboxing/blockout, programmer art, vertical vs horizontal slice, UI scaffolding vs last-mile polish, artist timing vs systems timing. Explicitly addresses the trap: “every time we try to start, UI gets in the way.”  
**Stack note:** Mythoras leans Tauri + React; Unity/Unreal scene-first habits are treated as the industry reference language for the same ideas.  
**Status:** Advisory research only. Not Mythoras canon.

---

## Verdict (short)

**Industry-standard practice is: prove play with disposable visuals and functional (ugly) UI first; replace art and polish UI after the loop is real.** Official engine docs treat greybox/blockout as the *first* production step for space and flow. Design textbooks and GDC-adjacent practice treat prototypes as question-answering tools that must “forget quality.” Successful systems-heavy indies (PoE, StS, Balatro, Vampire Survivors, Last Epoch Kickstarter slice) repeatedly shipped years of playable-but-crude surfaces while iterating combat, loot, and economy. Polished UI/tiles are a *phase*, not a prerequisite—and polishing them early is a known way to create attachment, hide design problems, and burn the budget before the game exists.

---

## 1. Greyboxing / blockout (engine-standard)

### Unreal — block out before art involvement

Epic’s official Geometry Brush documentation describes a **standard level workflow** that starts with blockout and playtest, and only later moves to meshing and polish:

1. Block out and path level  
2. Playtest flow and gameplay  
3. Modify layout and repeat testing  
4. Initial meshing pass  
5. Initial lighting pass  
6. Playtest for collision/performance  
7. Polish pass  

Critical quote of practice: Geometry Brushes are used to create a shell so the team can agree on layout **“before putting any time into populating the level with Static Meshes and other finished art assets.”** They are “perfect” for this because **“it does not require any time or involvement from the art team.”** The designer iterates until layout and play are right, then gradually replaces brushes with final meshes.

- Source: [Geometry Brush Actors in Unreal Engine (Epic Developer Community)](https://dev.epicgames.com/documentation/en-us/unreal-engine/geometry-brush-actors-in-unreal-engine)

### Unity — greybox primitives for basic functionality

Unity Learn’s Creative Core prototyping path defines a **greybox** as primitive (often grey) 3D shapes used to block out a scene **so you can implement basic functionality**. Official tips:

- Use primitives as placeholders; plane for ground  
- **“Don’t worry about exactly recreating the environment… The simpler this version is, the better!”**  
- Do not progress past greyboxing until basic functionality works; iterate or pivot if needed  

ProBuilder is documented as Unity’s in-editor tool for prototyping / greybox / whitebox level geometry with on-the-fly playtesting.

- Sources:  
  - [Create your greybox prototype — Unity Learn](https://learn.unity.com/pathway/creative-core/unit/prototyping/tutorial/create-your-greybox-prototype-3?version=2021.3)  
  - [Unity Manual: ProBuilder](https://docs.unity3d.com/Manual/com.unity.probuilder.html) (keywords explicitly include greybox / graybox / whitebox / prototype)

### What this means outside Unity/Unreal

In a Tauri + React (or any non-scene) stack, the *same* practice maps to:

| Classic 3D term | Systems/UI-game analogue |
|---|---|
| Greybox rooms / corridors | Zones as colored rects / labeled panels / ASCII maps |
| Capsule player | Token, named box, or emoji stand-in for party/creatures |
| Untextured props | Placeholder gear icons (colored squares + stats text) |
| BSP → Static Mesh swap | Swap placeholder tiles/sprites once layout + loop are locked |

**The rule is identical:** no final tiles until the *play* of the space (or the campaign loop) has survived playtests.

---

## 2. Programmer art / “forget quality” (design canon)

### Jesse Schell — *The Art of Game Design*

Schell’s prototyping tips are industry-canonical:

- **Tip #1 — Answer a Question:** Every prototype exists to answer a stated question; overbuilding is a “time-wasting boondoggle.”  
- **Tip #2 — Forget Quality:** Craft pride makes people polish throwaways. “When working on a prototype all that matters is whether it answers the question… polishing your prototype may even make things worse. Playtesters… are more likely to point out problems with something that looks rough than with something that looks polished… a polished prototype can actually defeat your purpose by hiding real problems.”  
- **Tip #3 — Don’t Get Attached:** Plan to throw prototypes away (Brooks / *Mythical Man-Month* echo).  
- **Tip #6 — It Doesn’t Have to Be Digital:** Paper prototypes for turn-based / systems games.  
- **Tip #8 — Build the Toy First:** Get the fun interactive core before wrapping it in “game” structure.  
- On UI specifically: “No one gets an interface right the first time… Build prototypes of your interface… Make paper and cardboard prototypes of any button or menu systems… well before you have a complete playable game.”

- Source: Jesse Schell, *The Art of Game Design: A Book of Lenses* (CRC Press; prototyping / risk chapters; also summarized in anniversary edition TOC: “Ten Tips for Productive Prototyping,” including *Forget Quality*). Preview/reference: [Schell PDF (USC course copy)](http://ce.eng.usc.ac.ir/files/1511334071371.pdf); [Tenth Anniversary preview (PagePlace)](https://api.pageplace.de/preview/DT0400.9781351803649_A38251642/preview-9781351803649_A38251642.pdf)

### Tracy Fullerton — *Game Design Workshop*

Fullerton’s playcentric method: **physical prototype of the core mechanics immediately after brainstorming**, playable **before a single line of code or digital asset**. Industry failure mode she calls out: testing too late in production → design flaws identified too late to fix.

- Source: Tracy Fullerton, *Game Design Workshop* (CRC/Routledge); excerpt: [Book Excerpt: Game Design Workshop, 5th Edition — Game Developer](https://www.gamedeveloper.com/design/book-excerpt-game-design-workshop); TOC confirms Ch. 7 Prototyping / Ch. 8 Digital Prototyping.

### Charlie Cleveland (Unknown Worlds / Subnautica) — “Ugliness Needed”

First-person essay arguing the prototype **must be ugly**, with reasons that map directly to the UI/art trap:

1. Don’t need a scarce artist on the prototype team  
2. Theme stays flexible  
3. First prototype in **≤2 weeks**  
4–5. Fast follow-on prototypes and emotional ability to pivot  
6. Like **wireframes**, signals “early / open to candid feedback”  
7. Exploration over refinement  
8. **Nice art tempts production too early** → technical debt (explicit Subnautica war story: falling into this trap led to years of frame-rate/streaming pain)  
9–10. Anyone can retheme / add content when there’s no “look” to protect  
11. If an ugly build still pulls people, the *interactive* promise is real  
14. Ugly visuals are “contagious” toward “simplest possible that could possibly work” for systems, pacing, audio, etc.

- Source: [Ugliness Needed — Charlie Cleveland](https://www.charliecleveland.com/ugliness-needed/)

### Nuance: when programmer art *hurts*

Unity’s own blog argues pure grey cubes can **skew external playtests** (players judge “ugly game,” not mechanics). Their correction is *not* “polish UI first”—it is: use **readable** temporary art (asset packs / cohesive placeholders) for *external* fun tests, while bare programmer art remains fine for **internal math/logic** tests.

- Source: [The placeholder asset problem: How programmer art kills playtests — Unity Blog](https://unity.com/blog/placeholder-asset-problem)

**Practical rule:**  
- Internal systems iteration → ugly is a feature.  
- External “is it fun?” tests → readable placeholders, still not final art direction.

---

## 3. Vertical slice vs horizontal slice vs minimum viable game

These terms are often confused; lean-game writing and studio practice distinguish them clearly.

| Approach | Meaning | When used |
|---|---|---|
| **Horizontal slice** | Low-fidelity version of *many* systems / much of the game | Early: prove the whole loop is playable and fun enough to widen |
| **Vertical slice** | Small slice of content at *near-final* quality (one mission/area) | Gate from pre-production → production; pitch/Kickstarter; quality bar reference |
| **Minimum Viable Game (MVG)** | Smallest experience that can *test* whether the core mechanic engages | Continuous learning; first level/loop only; no menus/settings/save unless required |

Tyler York (*Game Developer*, citing Eric Ries / Lean Startup): an MVG needs **“very basic art and sound”** and **only necessary features**—explicitly: *don’t* build save systems, graphics settings, or even a starting menu into the MVG. Horizontal slice ≈ low-fi whole game; vertical slice ≈ polished tiny piece for mass-market interest proof.

- Source: [Making Lean Startup Tactics Work for Games — Tyler York, Game Developer (2012)](https://www.gamedeveloper.com/business/making-lean-startup-tactics-work-for-games)

**Volition / GDC framing:** Vertical slice (or POC / MVP) as a **gate** proving the team knows what they’re making and how to make it before full production.

- Source: [The Vertical Slice Challenge — GDC Vault (Volition)](https://gdcvault.com/play/1022329/The-Vertical-Slice)

**Studio caution — vertical slice can raise the bar too high:** Mimimi’s *Shadow Tactics* postmortem: their always-polished reference mission became more beautiful (and costly) than the original pitch; applying that quality to the whole game blew schedule/reserves.

- Source: [Postmortem: Mimimi's Shadow Tactics: Blades of the Shogun — Game Developer](https://www.gamedeveloper.com/business/postmortem-mimimi-s-i-shadow-tactics-blades-of-the-shogun-i-)

**Indie caution — confusing “horizontal mess” with MVP:** *Metal Tales* postmortem: they chased an “MVP” that wasn’t; lesson that a *publisher/press* MVP needs near-final art/mechanics—but that is a **marketing** deliverable, not how you *start* day-one systems work.

- Source: [Metal Tales: Fury of the Guitar Gods postmortem — Game Developer](https://www.gamedeveloper.com/business/metal-tales-fury-of-the-guitar-gods-postmortem)

**For a systems-heavy ARPG-like:** the usual healthy sequence is:

1. **Horizontal / MVG** ugly loop (combat ↔ rewards ↔ one progression hook)  
2. Widen systems while still placeholder  
3. **One** vertical slice only when pitching, recruiting artists to a locked loop, or locking art direction  
4. Production art/UI polish as last mile across content  

Jumping straight to a polished vertical slice of a game whose systems aren’t designed yet is a common way to polish the *wrong* game.

---

## 4. UI: scaffolding vs last mile

### Scaffolding (early — required)

Early UI exists to **expose state and afford decisions**, not to look good:

- Numbers, lists, buttons, text intents, debug overlays  
- Wireframe layouts (Schell / Cleveland analogy to interface wireframes)  
- “Press F8 to send feedback” style instrumentation (Monster Train practice—see §5)

If the game is turn combat + gear + crafting, **scaffolding UI *is* the greybox**—you cannot playtest systems with no surface. The discipline is **cap fidelity**: no icon sets, no animation, no layout perfection, no theming passes until the data model and loop are stable.

### Last mile (late — production)

Polish UI when:

- Core loop metrics/feel are trusted  
- Inventory/stat schema stopped thrashing weekly  
- Artists have a locked visual language  

Darkest Dungeon’s co-founders noted UI as an especially hard / contested domain even late—evidence that UI is *not* “solved first,” it remains a high-conflict last-mile craft.

- Source: [Partnership on Darkest Dungeon: The Double-Edged Sword — GDC / YouTube](https://www.youtube.com/watch?v=UoogT3XOl-8) (Sigman & Bourassa on art vs UI disagreements)

### Trap pattern: “UI gets in the way every time we start”

This is a **process failure**, not a stack failure. Common mechanisms:

1. **React/web habits** treat UI as the product → building screens feels like progress while no loop exists.  
2. **Artist-heavy teams** start with the visible surface (tiles, HUD, creature art) because that is their craft identity.  
3. **Polish hides problems** (Schell Tip #2)—pretty inventory makes a bad crafting economy feel “almost done.”  
4. **Attachment** (Cleveland)—nice UI makes pivots emotionally expensive.  
5. **Wrong milestone**: aiming for a Kickstarter-grade vertical slice *before* the horizontal systems slice exists.

**Professional antidote (composite of sources above):**

- Declare a **Prototype Mode** with explicit bans: no final fonts/icon packs/tile atlases; only monospace + colored rectangles + labels.  
- Separate **systems playtests** (internal, ugly) from **feel playtests** (readable placeholders).  
- Require every UI task to name the **design question** it answers (Schell Tip #1). If the answer is “it looks better,” it is out of scope for Phase 0.  
- Prefer **paper / spreadsheet / CLI / debug HUD** prototypes for economy, crafting recipes, and combat math *before* React screens.  
- Timebox scaffolding UI to “information architecture only”; schedule visual UI as a production milestone after loop lock.

---

## 5. Case studies (primary / near-primary)

### Path of Exile (Grinding Gear Games) — systems first, UI later

GGG’s own news post of oldest screenshots: late **2006** build was “basically Multiplayer Asteroids”—login, move, fire projectiles; **“no 3d graphics or items at all”** after ~one month of Chris + Jonathan. Early inventory screenshots from the first weeks of inventory’s existence are crude by modern standards. Alpha screenshots (GGG) show basic character screens, old DXUT chat boxes, etc. Community/dev threads during alpha explicitly treated current UI as **not final**, with nicer prototypes in the pipeline—gameplay and economy advanced while UI was known placeholder.

Christmas-party-era playable (staff recollection on GGG forums): ~9 random dungeon levels, **no skills, no sound, no minimap, no town, no quests/NPCs**, one class—still used to playtest dungeon generation and combat feel.

- Sources:  
  - [2.0.2b Patch Notes, 1000th News Post and Old Screenshots! — pathofexile.com](https://www.pathofexile.com/forum/view-thread/1401993)  
  - [Past of Exile - Early Alpha Screenshots — pathofexile.com](https://www.pathofexile.com/forum/view-thread/1549944)  
  - [What was Path of Exile like five years ago? (staff Xmas party build recollection) — pathofexile.com](https://www.pathofexile.com/forum/view-thread/448336/page/4)  
  - Alpha UI not final: [Tales From an Alpha Tester — pathofexile.com](https://www.pathofexile.com/forum/view-thread/692/page/7)

### Slay the Spire (Mega Crit) — ugly prototypes, systems iteration, UI as design tool

September **2015** prototype already had Strike/Block, energy, map—visually crude. Enemy telegraphs evolved through **text “Next Turn” bars** (March 2016) into icon Intents because multi-enemy text UI was a usability pain—**UI changed to serve combat clarity**, not aesthetics. Years of playtesting cards/systems in LibGDX before polish.

- Sources:  
  - [Why revealing all is the secret of Slay The Spire's success — Rock Paper Shotgun (interviews Yano & Giovannetti)](https://www.rockpapershotgun.com/why-revealing-all-is-the-secret-of-slay-the-spires-success)  
  - [Road to the IGF: Mega Crit Games' Slay the Spire — Game Developer](https://www.gamedeveloper.com/game-platforms/road-to-the-igf-mega-crit-games-i-slay-the-spire-i-)

### Balatro (LocalThunk) — weird prototype first; polish much later

LocalThunk’s own timeline: Dec 2021 “very weird prototype”—no Jokers, no blinds, random enhancements—but **CHIP × MULT bones** already present. Shared early “Joker Poker” footage shows scuffed UI layouts; creator called early balance “scuffed.” Art/UI matured after the scoring toy and economy loop existed. First proper pixel art was deck backs/cards, not a full HUD theme.

- Sources:  
  - [The Balatro Timeline — LocalThunk](https://localthunk.com/blog/balatro-timeline-3aarh)  
  - [Balatro dev gives look at first prototype, Joker Poker — Game Developer](https://www.gamedeveloper.com/business/balatro-dev-gives-look-at-first-prototype-joker-poker)

### Vampire Survivors (poncle) — circles → asset-pack placeholders → game

Documentary: started as Phaser JS side project; programmer art was **black and white circles**, then swapped for a Castlevania-inspired **asset pack** used for prototypes. Fun was discovered in annihilating enemies *without* timer/score/XP/goals first—systems layered onto a fun toy. Maps were initially same field with different background textures.

- Source: [The Making of Vampire Survivors — Documentary (YouTube)](https://www.youtube.com/watch?v=XQVdR8mJrds)

### Into the Breach (Subset Games) — year of iteration on mechanics before lock

Justin Ma (IGF interview): vague “mechs vs monsters, collateral matters”; **~a year of iteration** to figure core mechanics. Telegraphing enemy moves became core after FTL lessons. Deliberately low external expectation pressure while prototyping.

- Sources:  
  - [Road to the IGF: Subset Games' Into the Breach — Game Developer](https://www.gamedeveloper.com/game-platforms/road-to-the-igf-subset-games-i-into-the-breach-i-)  
  - [Into the Breach Design Postmortem — GDC / YouTube](https://www.youtube.com/watch?v=s_I07Iq_2XM)

### Last Epoch (Eleventh Hour) — “janky” vertical slice for Kickstarter after systems talk

Founder Judd Cobler: recruited ARPG fans on Reddit; ~18 months community systems discussion; then a **“janky” but endearing vertical slice** for Kickstarter (May 2018), then Early Access. Studio name itself references building the slice after day jobs. Systems ambition preceded polished presentation.

- Sources:  
  - [Last Epoch is an action RPG being built by Redditors — VentureBeat](https://venturebeat.com/games/last-epoch-is-an-action-rpg-being-built-by-redditors/)  
  - [Last Epoch Q&A — Wccftech (Cobler interview)](https://wccftech.com/last-epoch-qa-on-runemaster-class-1-0-launch-and-advantages-over-diablo-iv/)

### Grim Dawn (Crate) — long systems/engine path, crowdfund when scope real

Built on Titan Quest engine lineage; years of small-team ARPG work (2008–2012) before Kickstarter/Early Access when the team recognized a tiny indie ARPG needed more scale. Early Access used as community iteration with genre-expert fans—not as art-first showcase.

- Source: [How Grim Dawn carved a niche in the competitive action RPG genre — Game Developer](https://www.gamedeveloper.com/business/how-i-grim-dawn-i-carved-a-niche-in-the-competitive-action-rpg-genre)

### Darkest Dungeon (Red Hook) — design cohesion under Early Access; UI hard late

GDC design postmortem: smashing CRPG + boardgame + roguelike + stress systems into a cohesive experience was the hard problem; Early Access iteration in public. Partnership talk: UI as a recurring conflict domain—even with a strong art director, UI is not “done first.”

- Sources:  
  - [Darkest Dungeon: A Design Postmortem — GDC Vault / YouTube](https://www.youtube.com/watch?v=0IUaGQhlPwo)  
  - [Partnership on Darkest Dungeon — GDC / YouTube](https://www.youtube.com/watch?v=UoogT3XOl-8)

### Monster Train (Shiny Shoe) — prototype → feedback culture; UI as instrument

GDC postmortem covers early prototyping through launch. Public beta/demo practice: persistent **“press F8 to send feedback”** UI capturing screenshot, log, save—UI as *scaffolding for learning*, not polish.

- Sources:  
  - [Independent Games Summit: Monster Train Postmortem — GDC Vault](https://www.gdcvault.com/play/1027098/Independent-Games-Summit-Monster-Train)  
  - [Do betas & demos right, the Monster Train way! — GameDiscoverCo (Mark Cooke)](https://newsletter.gamediscover.co/p/do-betas-and-demos-right-the-monster)

### Eastshade — vertical slice as *beginning of game*, after playable chunk

Polished a representative early area (~20% map) for conventions—but that was after years focusing that area as playable; they recommend building in player order and fixing the first broken thing you hit. Vertical slice here is a *maturity* tool, not a day-one start.

- Source: [Postmortem: Eastshade — Game Developer](https://www.gamedeveloper.com/business/postmortem-eastshade)

---

## 6. When artists start vs when systems start

Composite practice from engine docs + design books + case studies:

| Phase | Systems / design | Art / UI visual |
|---|---|---|
| **0 — Question prototypes** | Paper, spreadsheet, CLI, or ugly digital toy; Schell questions | None or wireframe; Cleveland “ugly required” |
| **1 — Greybox / horizontal MVG** | Combat, loot, crafting, zone loop playable end-to-end | Primitives / programmer art / asset-pack placeholders; scaffolding HUD |
| **2 — Readable prototype** | Balance passes; external playtests | Cohesive placeholder packs (Unity blog “visual minimum”); still not final direction |
| **3 — Vertical slice (optional gate)** | Lock one content path | Artists produce *one* finished-looking corridor/mission as quality reference |
| **4 — Production** | Content + systems widen | Art replaces greybox; UI theming last mile |

**Artist-heavy teams:** artists can still work early—*on concept exploration and disposable mocks*—but production asset pipelines should wait until layout/loop questions are answered (Unreal: no art team needed for blockout). Parallel art prototypes (Schell Tip #5) are fine if they don’t become the blocker for systems play.

**Systems-heavy teams:** risk is infinite spreadsheet design without a playable toy. Counter: Schell “build the toy first” / Extra Credits-style MVP: smallest playable Super-Mario-test equivalent within weeks.

- Related: [Making Your First Game: Minimum Viable Product — Extra Credits (YouTube)](https://www.youtube.com/watch?v=UvCri1tqIxQ) (prototype within first weeks even on multi-year projects)

---

## 7. Direct answer to the trap

> “Every time we try to start, UI gets in the way.”

**What professionals do instead:**

1. **Rename the milestone.** First milestone is not “HUD v1” or “tile set”—it is “playable greybox loop answers: is combat/crafting/gearing fun yet?”  
2. **Institutionalize ugliness.** Written ban on production UI/art during Phase 0–1 (Cleveland / Schell).  
3. **Scaffold, don’t skin.** UI work allowed only if it reveals new system state or enables a new decision.  
4. **Prototype UI on paper** before React components (Fullerton / Schell).  
5. **Use throwaway tech.** Debug overlays, ImGui-equivalents, HTML tables, even Google Sheets hooked to JSON beats a themed inventory.  
6. **Separate art identity from progress.** Artist energy → concept boards & one disposable style test; not blocking tiles for zone 1.  
7. **Delay the vertical slice** until the horizontal systems slice exists—or accept Mimimi’s cost if you polish early.  
8. **Remember PoE Asteroids / StS 2015 / Balatro weird prototype / VS circles:** games that became presentation-rich ARPGs or systems showcases *started as toys that looked embarrassing*.

Tauri + React does not change this—if anything it *amplifies* the trap because the default unit of work is a component. Treat React screens as Static Meshes: **only after Geometry Brush (data + loop) is signed off.**

---

## Implications for Mythoras

Advisory only—do not invent canon.

- Treat the first Mythoras milestone as a **horizontal greybox loop** (enter zone → fight → loot/gear → craft or collect → return), with **colored rects / text UI only**—no tile polish as a start gate.  
- Map Unreal’s “no art team required for blockout” to Mythoras as: **systems owners may ship with placeholder creatures/gear forever until the loop survives internal playtests.**  
- Cap React work to **scaffolding**: inventory as a table of stats, combat as buttons + numbers (StS-style intents-as-text is a valid Phase 1). Ban iconography/theme passes until schema churn cools.  
- Prefer **paper or spreadsheet prototypes** for crafting graphs, creature collection economy, and gearing before investing in polished panels—Fullerton/Schell first, React second.  
- If an artist-heavy impulse appears, divert it to **parallel concept exploration** or one disposable “readable placeholder” pack—not production tiles—until a single vertical slice is consciously scheduled as a *later* gate.  
- Explicit anti-trap ritual: every UI ticket must state the Schell question it answers; tickets whose answer is aesthetics wait for Phase 3+.

---

## Source index (major claims)

| Claim | Primary / high-trust source |
|---|---|
| Blockout before finished art; no art team needed for shell | [Unreal Geometry Brush Actors docs](https://dev.epicgames.com/documentation/en-us/unreal-engine/geometry-brush-actors-in-unreal-engine) |
| Greybox primitives for basic functionality; keep simple | [Unity Learn — Create your greybox prototype](https://learn.unity.com/pathway/creative-core/unit/prototyping/tutorial/create-your-greybox-prototype-3?version=2021.3); [ProBuilder Manual](https://docs.unity3d.com/Manual/com.unity.probuilder.html) |
| Forget quality; polish hides problems; answer a question | Schell, *Art of Game Design* |
| Physical prototype before code/assets | Fullerton, *Game Design Workshop* ([excerpt](https://www.gamedeveloper.com/design/book-excerpt-game-design-workshop)) |
| Ugly prototypes enable speed, pivot, avoid false production | [Cleveland — Ugliness Needed](https://www.charliecleveland.com/ugliness-needed/) |
| Horizontal vs vertical slice; MVG basic art / no menus | [York — Lean tactics for games](https://www.gamedeveloper.com/business/making-lean-startup-tactics-work-for-games) |
| Vertical slice as production gate | [GDC — Vertical Slice Challenge](https://gdcvault.com/play/1022329/The-Vertical-Slice) |
| Vertical slice quality inflation risk | [Shadow Tactics postmortem](https://www.gamedeveloper.com/business/postmortem-mimimi-s-i-shadow-tactics-blades-of-the-shogun-i-) |
| Placeholder art nuance for external tests | [Unity Blog — placeholder asset problem](https://unity.com/blog/placeholder-asset-problem) |
| PoE started as Asteroids; crude inventory; incomplete UI in alpha | [GGG old screenshots](https://www.pathofexile.com/forum/view-thread/1401993); [alpha screenshots](https://www.pathofexile.com/forum/view-thread/1549944) |
| StS crude prototypes → systems → intents UI | [RPS Mechanic interview](https://www.rockpapershotgun.com/why-revealing-all-is-the-secret-of-slay-the-spires-success) |
| Balatro weird/scuffed early prototype | [LocalThunk timeline](https://localthunk.com/blog/balatro-timeline-3aarh) |
| Vampire Survivors circles → asset pack | [Making of Vampire Survivors documentary](https://www.youtube.com/watch?v=XQVdR8mJrds) |
| Into the Breach long mechanic iteration | [IGF interview](https://www.gamedeveloper.com/game-platforms/road-to-the-igf-subset-games-i-into-the-breach-i-) |
| Last Epoch janky Kickstarter slice after systems talk | [VentureBeat](https://venturebeat.com/games/last-epoch-is-an-action-rpg-being-built-by-redditors/) |
| Grim Dawn long engine/systems path then EA | [Game Developer feature](https://www.gamedeveloper.com/business/how-i-grim-dawn-i-carved-a-niche-in-the-competitive-action-rpg-genre) |

---

*End of research note.*
