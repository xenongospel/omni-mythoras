# Owner inspiration links — 2026-08-14

**Status:** Inspiration / borrow-candidates only. **Not Mythoras canon. Not ADE blockers.** ADE continues independently.  
**Date:** 2026-08-14  
**Audience:** Later greybox / VFX / Tile / combat-readability grill. Do not stall Systems ADE.

Owner shared these as a Slack dump (local screenshot). Cluster is mostly **procedural 3D / VFX / motion craft** plus one recently released card RPG called out for **art + a concept** Mythoras could consider.

---

## Question

What are the owner-shared links, factually? What is each project? Which craft ideas are steal-candidates for Mythoras, and what must not be copied — especially **Shards of Order** art and systems, mapped onto existing Mythoras vocabulary (Creature, Zone, Tile, Tags, Skill Cards as an open representation, Turn Program, Protocol, Attributes Authority / Invictus / Animus / Order, creature-local Gear) without inventing new terms or locking ADE work?

---

## Sources

### Slack dump (owner primary for *what was shared*)

Local screenshot: `.cursor/.../assets/image-2842a3f6-9585-4fe2-b7b2-39c7b4683741.png`  
**FACT:** Thursday evening messages, all from the owner:

| Time | Content |
| --- | --- |
| 18:11 | https://github.com/majidmanzarpour/threejs-vfx |
| 18:51 | https://x.com/majidmanzarpour/status/2087235875713307014 |
| 18:51 | https://x.com/FitWorldGO (account, not a status) |
| 18:51 | https://x.com/chirovisuals/status/2086800825217606073 |
| 18:51 | https://x.com/_adishj/status/2087587836627496980 |
| 19:15 | https://x.com/funktroniclabs/status/2087898132382105923 |
| 19:15 | https://x.com/ring_hyacinth/status/2087715809284239475 |
| 19:15 | https://x.com/benjitaylor/status/2087227155076046995 |
| ~7h before capture | text: **Shards of Order** |

### Fetch method (X)

Direct `x.com` HTML is often 403. Tweets **1, 4–8** retrieved **2026-08-14** via `api.fxtwitter.com` (code 200) plus video thumbnails from `pbs.twimg.com`. Slack handle `@FitWorldGO` 404s; **owner correction 2026-08-14:** the account is [`@GameFXlab`](https://x.com/GameFXlab) (display name **FitWorldGo**). Extra like: [`@KAIJIUUUUU`](https://x.com/KAIJIUUUUU). See §3 and §3b.

### High-trust per topic

| Topic | Primary | Secondary (labelled) |
| --- | --- | --- |
| threejs-vfx | [GitHub README](https://github.com/majidmanzarpour/threejs-vfx) + [`docs/ROSTER.md`](https://github.com/majidmanzarpour/threejs-vfx/blob/main/docs/ROSTER.md); Majid tweet 2087235875713307014 | — |
| Original sandbox | [chirovisuals tweet](https://x.com/chirovisuals/status/2086800825217606073); [achrefelouafi/LinearAbiltyCastingThreeJS](https://github.com/achrefelouafi/LinearAbiltyCastingThreeJS) | chirostudio.xyz (studio site; not required for this note) |
| Motion V2 | [_adishj tweet](https://x.com/_adishj/status/2087587836627496980); [motion.so](https://motion.so); [mosaic.so](https://mosaic.so) | — |
| Scramble Knights | Funktronic tweet; [Steam app 2379350](https://store.steampowered.com/app/2379350/Scramble_Knights_Online/); [scrambleknights.com](https://scrambleknights.com) | — |
| Sanxingdui / Jinsha scene | [ring_hyacinth tweet](https://x.com/ring_hyacinth/status/2087715809284239475); [funes.world](https://funes.world/) | Press on Funes as heritage 3D archive |
| Grok Bot icon | [benjitaylor tweet](https://x.com/benjitaylor/status/2087227155076046995) | — |
| Shards of Order | [Steam appdetails 3432480](https://store.steampowered.com/app/3432480/Shards_of_Order/); [shardsoforder.awakenrealms.com](https://shardsoforder.awakenrealms.com/); Steam header + store screenshots (fetched 2026-08-14) | [RPGamer 2026-06-23](https://rpgamer.com/2026/06/shards-of-order-releasing-next-month/); [Into Indie Games combat guide 2026-07-27](https://intoindiegames.com/walkthroughs/tips-tricks/shards-of-order-combat-guide-for-beginners/) |
| FitWorldGo / GameFXlab | [x.com/GameFXlab](https://x.com/GameFXlab); fxtwitter user 200; jina profile scrape 2026-08-14 | Slack `@FitWorldGO` was a stale/wrong handle |
| Direland / KAIJIUUUUU | [x.com/KAIJIUUUUU](https://x.com/KAIJIUUUUU); [Steam app 4414860](https://store.steampowered.com/app/4414860/Direland/) | [Niche Gamer 2026-04-04](https://nichegamer.com/direland-announced/); [Game*Spark 2026-03-30](https://www.gamespark.jp/article/2026/03/30/164514.html) |

### Mythoras locks used as mapping rails (repo FACT, not claims about the refs)

- [`CONTEXT.md`](CONTEXT.md): Mythoras is **not** a universally dark game; Skill Cards are **creature-local**; Turn Program = Planning then Execution; Protocol = metaphysical network; Gear is creature-local; Attribute **Order** is a stat family — not a world-law.
- [`RESEARCH_OWNER_ANSWERS_2026-08-06.md`](RESEARCH_OWNER_ANSWERS_2026-08-06.md): greybox stays **basic** (color-coded tiles / default mesh; no stone/tree/grass shader now). Skill Cards = idea vector; owner prefers **not** a deckbuilder bottom-row draw; action bar currently preferred among those options.
- [`RESEARCH_OWNER_ADE_NARROWING_2026-08-11.md`](RESEARCH_OWNER_ADE_NARROWING_2026-08-11.md): ADE Scene owns **abstract tile-grid documents**; Protocol dressing later; Preview deferred; Skills lean **maybe not cards**.

Claims below are tagged **FACT** / **INFERENCE** / **SECONDARY**.

---

## Per-link findings

### 1. `majidmanzarpour/threejs-vfx` (GitHub)

**What it is — FACT.** A browser **skillshot VFX sandbox**: Three.js + Vite + hand-written GLSL. README: **100 abilities across 15 schools**; 50 **line casts** (LoL-style ground arrow) and 50 **far casts** (thick-boundary ground circle). Eight slots on a loadout bar; Tab opens a **spellbook** (filter by name / school / description; drag a card onto a slot). Expanded from achrefelouafi’s original six-ability sandbox. **Nothing is a texture** except the Mixamo character + HDR probe. MIT license still attributed to **mohamedachrefelouafi**. ~16,000 live sliders; **P** pauses the sim while sliders still reshape the standing effect.

**Fifteen schools (README editor folders) — FACT:** Frost, Flame, Storm, Stone, Verdant, Void, Arcane, Blood, Aether, Tide, Forge, Lumen, Ink, Chrono, Hive.

**Roster rules (`docs/ROSTER.md`) — FACT:** (1) nothing is a texture; (2) no metres/radians/seconds stored on the CPU — only dice rolls and timestamps; (3) one trick per ability; (4) beats `travel → impact → fade` (+ optional wind-up); (5) every colour a picker, every dimension a slider.

**Default six (README) — FACT:** Frost Lance (Q), Storm Lance (E), Cinder Fall (R), Nova Beam (F), Voltaic Snare (V, far), Glacial Crown (X, far).

**Steal candidates (INFERENCE, later client / VFX, not ADE now):**

- Skill **readability as silhouette + timing**, not as a sprite sheet. Good later bar for Stream-coloured skill FX (Inferno / Glacial / Voltaic / …) without locking Three.js as the game stack.
- **Aim language:** line vs zone, metres-true indicators, far-cast circle whose outer lip is the actual radius. Useful if Battle footprints stay variable and skills have range.
- **One trick per skill** as an authoring discipline when ADE eventually has a skill dictionary — each Skill Card (or non-card skill) should *look* distinct, not recolour.
- Pause-and-sculpt VFX as a *tooling idea* for a future preview, not a v1 ADE feature.

**Do not steal:**

- LoL skillshot real-time aiming as Mythoras combat (Turn Program is Planning → Execution; Q10 automatic Speed-driven order).
- Spellbook-as-deck UI as a lock on Skill Card presentation (owner already leans maybe-not-cards; prefers action bar over bottom-row draw).
- 15 sandbox schools as Mythoras Streams / Categories (Mythoras already has 11 damage types + 4 Categories).
- Dark void stage as default world tone ([`CONTEXT.md`](CONTEXT.md) #1).
- Shipping this repo as the game client or ADE preview stack.

---

### 2. Majid tweet — 100 VFX expansion

https://x.com/majidmanzarpour/status/2087235875713307014  
**Fetched:** api.fxtwitter.com 200. **Created:** Tue Aug 11 2026, 17:53 UTC.

**FACT:** Text: *“hey @claudeai Opus 5, expand the @threejs library to 100 VFX based on the awesome work by @chirovisuals”* + ~123s video. Quotes chirovisuals’ sandbox tweet. Author: Majid Manzarpour (GitHub linked). Thumbnail / UI: “ELEMENTAL SANDBOX”, “100 of 100 spells”, loadout bar, lil-gui **VFX EDITOR** with school folders matching the README.

**Steal / do-not-steal:** same as §1. Extra steal-candidate: **agent-expanded roster from a tight original** (six → 100 under documented rules) as a *process* for later VFX volume — not a mandate to generate Mythoras skills by prompt.

---

### 3. `@FitWorldGO` → `@GameFXlab` (FitWorldGo)

**Correction (owner, 2026-08-14):** Slack `https://x.com/FitWorldGO` was the wrong/stale handle. Working account: https://x.com/GameFXlab

**FACT (fxtwitter user, 2026-08-14):** `screen_name` **GameFXlab**; display name **FitWorldGo**; joined Aug 2024; ~438 followers; empty bio; no website. Handle casing on X is `GameFXlab`.

**FACT (jina profile scrape, 2026-08-14 — timeline copy, not a Steam page):** Pinned: *“Want to make a game with AI? Delete Unity. Delete Unreal. Delete Godot. They were never designed for AI to work with. Use Three.js instead. LLMs suck at heavy engine UIs, but they excel at writing WebGL → playable browser link in 30 seconds.”* Follow-up admits Three.js trade-offs (no mature editor, limited console/mobile, fewer built-in game systems, browser cannot use full machine). Other posts: generating “unlimited” spells / enemies / bosses with Opus; planning a **demo multiplayer dragon PvP**; “Can't wait for the day AI can make AAA ultimate attacks.”

**INFERENCE:** Same VFX/AI-browser-game cluster as Majid/chirovisuals — **skill-volume + Three.js as an AI-writable runtime**, not a shipped title. Display name FitWorldGo is the project/persona; no Steam app found under that name as of this fetch.

**Steal candidates (later client / tooling, not ADE now):**

- Treat **playable WebGL as the cheap experiment loop** (aligned with existing Tauri+React+Three.js *intent*, not a lock).
- **High skill/creature volume** via generated-then-curated FX — rhymes with Mythoras global + pocket skill banks, but **curation stays authored** (CONTEXT tags/types are not “Opus dumps 1000 spells”).
- Honest about editor-less Three.js: Mythoras still wants a **thin ADE**, not “delete the editor.”

**Do not steal:** “Delete Unity/Godot” as ADE policy (owner already prefers Godot’s *loop*, not Godot-the-product). Do not make LLM-generated spell dumps the skill dictionary. Do not assume FitWorldGo’s dragon-PvP is a Mythoras mode.

### 3b. `@KAIJIUUUUU` — Direland (extra like)

https://x.com/KAIJIUUUUU  
https://store.steampowered.com/app/4414860/Direland/

**FACT (fxtwitter user):** Display name **jockie - Direland**; Tokyo; bio: hobby project **Direland** — quarter-view, combat-heavy sandbox survival; **custom engine C++ / OpenGL / Qt**; career CG designer → TA → graphics programmer, currently technical artist at a game company. Steam link in bio.

**FACT (Steam app 4414860, fetched 2026-08-14):** Sandbox survival craft RPG; release TBA; no user reviews yet. Copy: wake with no memory; break terrain / gather / build block-by-block; character creation; craft tools/weapons/armor; level by defeating enemies; **massive monsters that reshape the battlefield**. AI disclosure: **AI-assisted localization only**. Min GPU: OpenGL 4.5.

**SECONDARY (Niche Gamer 2026-04-04; Game*Spark 2026-03-30):** Press shorthand “Terraria meets Monster Hunter”; top-down/quarter-view; colossal monsters that **destroy terrain**. Not first-party.

**Steal candidates (later greybox / Creature / Zone, not ADE v1):**

- **Readable quarter-view combat in a built world** — closer to Mythoras zone-surface battles than Shards’ side-on card stage.
- **Creatures that change the battlefield** (footprint, fixtures) — aligns with variable footprints / adaptive continuity, not a copy of block-mining.
- **TA-authored look** (custom engine, hand-built water/VFX on X) as a bar for “how good greybox-plus-one-pass can feel” without AAA pipeline.
- Custom engine as **GGG-shaped lesson** (tools around *this* game) — already the ADE stance; Direland is another existence proof, not a stack to adopt.

**Do not steal:** Minecraft/Terraria block survival as Mythoras loop; amnesia-wake framing; OpenGL/Qt engine; Monster Hunter hunt structure as the campaign. Do not treat Direland’s “hostile vast world” as Mythoras tone lock.

---

### 4. chirovisuals — original Elemental Sandbox

https://x.com/chirovisuals/status/2086800825217606073  
**Fetched:** api.fxtwitter.com 200. **Created:** Mon Aug 10 2026. Note tweet. ~220k views.

**FACT:** *“I've built a new opensource Elemental Sandbox, VFX playground built with @threejs . it contains 6 fully custamizable abilities. Everything you see is generated: no textures, no sprite sheets, no baked meshes. hand-written GLSL, GPU-simulated instanced particles, World position resolved in the vertex shaders…”* Source: https://github.com/achrefelouafi/LinearAbiltyCastingThreeJS (~470 stars). Author site: chirostudio.xyz. Video ~39s. Thumbnail: Mixamo-style caster on a dark floor, glowing **ground arrow** + ring, six hotkeys (Frost Lance / Storm Lance / Cinder Fall / Nova Beam / Voltaic Snare / Glacial Crown).

**FACT (repo README vs tweet):** Tweet says **6** abilities. README as fetched describes **five** named casts (Q/E/R/F/V) plus the far-cast circle pattern; Glacial Crown is the sixth in Majid’s shipped default bar. Treat “six” as the tweet’s count.

**Steal candidates:** the **craft bar** Majid then scaled — generated FX, live sliders, line vs zone aim. Same later-client bucket as §1.

**Do not steal:** Three.js as engine lock; dark sandbox as Mythoras Zone look; real-time skillshots as Turn Program.

---

### 5. `_adishj` — Motion V2

https://x.com/_adishj/status/2087587836627496980  
**Fetched:** api.fxtwitter.com 200. **Created:** Wed Aug 12 2026. 4K video ~43s.

**FACT:** Text: *“Internally, we have solved Motion. Tomorrow, we give it to you. @motion_so V2 made this.”* Author: Adish Jain — “building frontier video agents @mosaic_so & @motion_so”. Thumbnail: split graphic **“Shot at 60 fps → 120 fps”**.

**FACT ([motion.so](https://motion.so)):** Motion by Mosaic is **text-to-video for launches, demos, ads** — prompt → research brand → storyboard → build scenes (type, VO, music) → edit. MCP/API to call from agents. Not a game engine.

**FACT ([mosaic.so](https://mosaic.so)):** Mosaic = AI video-editing company; Motion is a product line (“A video agent for tasteful motion design”).

**Steal candidates (INFERENCE):** motion-design **quality bar** for trailers, Sequence/Region mood pieces, skill reveal spots — kinetic type, 120 fps presentation, brand-locked palette. Optional later: generate ADE walkthrough clips. Not a combat VFX pipeline.

**Do not steal:** Motion/Mosaic as the in-engine FX stack; dark kinetic launch-video chrome as game HUD; “we solved Motion” marketing voice as Protocol voice.

---

### 6. Funktronic Labs — Scramble Knights Online open beta

https://x.com/funktroniclabs/status/2087898132382105923  
**Fetched:** api.fxtwitter.com 200. **Created:** Thu Aug 13 2026.

**FACT:** *“the open beta for our 2d zelda-inspired mmo-lite goes live tomorrow. sign up on Steam now.”* Profile: “cooking SCRAMBLE KNIGHTS ONLINE -- a zelda-inspired online adventure RPG.” Steam: [app 2379350](https://store.steampowered.com/app/2379350/Scramble_Knights_Online/). Developer/publisher **Funktronic Labs**. Planned release **Q4 2026**. Beta playtest called out for **August 14th** (Steam about text). Site: [scrambleknights.com](https://scrambleknights.com).

**FACT (Steam about):** Shared online kingdom **Terracott**; bite-sized Zelda-inspired quests; top-down combat (electric slimes, rock-hurling crabs, dungeon bosses); Town Square social hub; solo or co-op up to 4; PvP invasions; local split-screen; **Chicken Mode** on death. Thumbnail: toy-like / chibi knights, cracked **stone tile** dungeon floor, “Void Knight” boss, party portraits + hearts, parchment mini-map, “0/1 SLAY VOID KNIGHT”.

**Steal candidates (INFERENCE, later greybox / Zone / Tile — not ADE blocker):**

- **Tile floor as readable combat stage** — large cracked tiles, pillars, debris. Rhymes with ADE’s abstract tile-grid → later isometric view ([narrowing note](RESEARCH_OWNER_ADE_NARROWING_2026-08-11.md) Q2) without needing finished Protocol chrome.
- **Compact party HUD** (portraits + glanceable HP) vs full sheets — already an owner lean (DD-like lower band; glanceables).
- **Tone contrast:** dungeon is moody but characters stay warm/toy-like — closer to Mythoras’s *allowed light register* than Shards’ grimdark. Useful as a “dark biome ≠ dark game” example.

**Do not steal:** MMO-lite, PvP, Town Square as social MMO, Chicken Mode, real-time action combat (Mythoras Battle is Turn Program on the zone surface), 4-player knight fantasy as Squad fiction (Technician + Creatures).

---

### 7. ring_hyacinth — Sanxingdui / Jinsha underwater Three.js

https://x.com/ring_hyacinth/status/2087715809284239475  
**Fetched:** api.fxtwitter.com 200. **Created:** Thu Aug 13 2026. Chinese; ~118s video.

**FACT (tweet, translation):** Built a **Sanxingdui & Jinsha** cultural-relic scene in a work break with Codex; some scene assets from **@HanyangWang’s Funes**. Intent: try **three.js + WebGL underwater**; underwater mystery “fits” Sanxingdui. Still in progress; may ship if ideas run out.

**FACT (thumbnail / UI):** Title **“THE SUBMERGED SUN”** / 沉海金沙; “01 太阳神鸟”; F2 editor toggle; music/quality chips; gold disc + concentric golden swarm over a luminous cyan floor in dark water; small gold figure for scale.

**FACT (owner screenshot 2026-08-14, `.scratch/x-refs-2026-08-11/jinsha-text-border.png`):** Overlay **info plaque** on a blurred close-up of the relic (bronze mask). Frame: aged bronze / verdigris, 3D-sculpted — gold sun-bird emblem top-center, flanking birds, gem-like side eyes, thick organic corner curls. Interior: dark semi-transparent panel with **breathing room**. Hierarchy: small site label (三星堆遗址) · gold object title (青铜面具) · small dynasty meta · quoted body in clean white sans · footer `02 / 04` · prompts `结束 · ESC` / `继续聆听 · I`. Museum-exhibit grammar on a cinematic 3D scene.

**Owner lean (not lock):** The **text border + internal arrangement** are the steal. Frame should be **much thinner**, or the border **more transparent**, so it does not bury the scene. Do not import Sanxingdui bronze as Protocol chrome.

**Steal candidates (INFERENCE, later World View / Workspace / POI inspect — not ADE now):**

- **Biome-specific plaque language:** frame *motif* shifts with Zone/biome; interior type stays clean and readable (CONTEXT #1 — register via fixtures, not one gothic HUD).
- **Inspect overlay:** category · title · meta · quoted body · pager · key prompts. Ceremony for Nodes/POIs without a full sheet.
- **Scene stays primary:** heavy DOF behind the plaque; UI is a *lens*, not a dashboard. Same impulse as DD scene-vs-info band.
- Thinner/more-transparent frame = Mythoras adaptation of this craft (owner).

**Do not steal:** Sanxingdui / Jinsha / sun-bird cosmology as Protocol lore; Funes/blockchain heritage-museum framing; underwater as a default Zone; thick bronze picture-frame as default HUD (owner already wants it thinner/more transparent).

**FACT ([funes.world](https://funes.world/)):** FUNES is a **3D cultural-heritage archive** (photogrammetry models of buildings/sites; 2000+ models, 19+ countries; free access). Not a game.

**Steal candidates (INFERENCE, later Zone dressing / skybox-mood, not ADE now):**

- **Biome register via water + gold + haze** — a dark *situation* that is still luminous, not grimdark-as-brand. Maps to CONTEXT #1 (skybox / particles / fixtures shift together).
- Heritage **photogrammetry as optional fixture source** for later Zone landmarks (OD-009 static fixture grammar) — principle only; do not paste Sanxingdui into the Protocol.
- Tiny “editor” affordance inside a web scene (F2) as a *preview* pattern, not v1 ADE.

**Do not steal:** Sanxingdui / Jinsha / sun-bird cosmology as Protocol lore; Funes/blockchain heritage-museum framing; underwater as a default Zone.

---

### 8. Benji Taylor — Grok Bot icon in code

https://x.com/benjitaylor/status/2087227155076046995  
**Fetched:** api.fxtwitter.com 200. **Created:** Tue Aug 11 2026. ~1.2M views.

**FACT:** *“Had a lot of fun animating our new Grok Bot icon. It's entirely made in code, with every state, shape and expression able to morph smoothly into the other. And of course, I made it with Grok Build.”* Author: Benji Taylor, head of design @x/@spacexai. Thumbnail: black circle, two white stadium “eyes” on pale ground — minimal mascot.

**Steal candidates (INFERENCE):** **code-driven identity that morphs between states** (idle / alert / cast / biome register) instead of a sprite sheet of expressions. Could inform later Creature silhouette language or a tiny HUD glyph — not ADE chrome now.

**Do not steal:** Grok Bot brand, xAI visual identity, “made with Grok Build” as a pipeline mandate.

---

### 9. Shards of Order (owner: recently released; interesting **art** + a **concept**)

Primary: [Steam](https://store.steampowered.com/app/3432480/Shards_of_Order/) · [Official site](https://shardsoforder.awakenrealms.com/)  
Deeper mapping: **§ Shards of Order** below. One-line: grimdark card RPG, **no turns / no mana** (marketing), time-countdown combat, **shared party deck**, gear injects cards, restore shattered **Laws**. Steal art *craft* and a few system *shapes*; do not copy tone, shared deck, or Laws-as-Protocol.

---

## Shards of Order — art + systems concepts for Mythoras

### Identity (FACT)

| Field | Value | Source |
| --- | --- | --- |
| Title | Shards of Order | Steam |
| Appid | 3432480 | Steam |
| Developer | **Fardust** | Steam `developers` |
| Publisher | **Awaken Realms** | Steam `publishers` |
| Release | **Jul 28, 2026** (`coming_soon: false`) | Steam `release_date` |
| Price | $9.99 USD | Steam `price_overview` |
| Reviews | Very Positive — **89% of 452** | Steam store + `recommendations.total` |
| Genres | Adventure, Indie, RPG, Strategy | Steam |
| User tags | RPG, Card Battler, Story Rich, Deckbuilding, **Dark Fantasy**, Party-Based RPG, **Turn-Based Combat**, Card Game, Lore-Rich, Singleplayer, CRPG, Adventure, **Dark**, **Horror**, Exploration, Indie, Dungeon Crawler, Turn-Based Tactics, Fantasy, Strategy | Steam store tag row |
| Support | m.bernat@awakenrealms.com | Steam API |
| Content | Stylized extreme violence/gore (dismemberment, entrails, pulp); no sexual content | Steam `content_descriptors` |
| Achievements (named) | include **Law of Identity**, **Law of Hunger**, **Law of Light**, Whole Again, Break the Curse, Riddles in the Sand | Steam API highlighted list |

**FACT (official site, fetched 2026-08-14):** Hero copy matches Steam. Site still frames **“Coming soon” / “Wishlist now”** despite Steam showing released — treat as marketing-page lag, not a second release date.

**FACT (RPGamer, 2026-06-23, secondary press):** Billed as a **full RPG without roguelike/roguelite elements**; three regions; restore lost Laws; attention of an all-seeing God.

**Tension — FACT:** Marketing: “there are **no turns**.” Steam user tags still include **Turn-Based Combat** / Turn-Based Tactics. Press (Turn-Based Lovers pull-quote on Steam) also frames it as turn-based. **INFERENCE:** players/taggers file countdown-card combat under “turn-based” even when the designer refuses the phrase.

### Art (FACT from Steam header + store screenshots, 2026-08-14)

**Key art:** Painterly grimdark. Jagged distressed **SHARDS OF ORDER** type; huge tilted bell with a warm gold clapper-light; three tiny silhouettes on a ledge; megalithic sword-monuments in haze; palette of black / mud / crimson / one gold hope-light.

**Combat screens:** 2.5D **side-on** party-left / enemies-right on a flat ground plane (not a square grid). Hand-painted, elongated, graphic-novel figures. Biomes sampled: cavern + sigil + eclipsed moon; brown mountain waste; barren field of planted giant swords under an orange sky with a watching orange “eye.” FX pops (red slash rings, cyan/gold weapons, green scythe) sit on a desaturated world.

**UI craft:** Single **shared hand** along the bottom (weathered card frames; colour-coded by hero — red / green / blue). Per-unit HP fractions + icon clusters (shields, hourglasses, pips). Draw / discard / exhaust piles. No conventional “End Turn” button in the sampled shots; a circular control with a number (redraw / time) sits bottom-right. Deck browser: grid of cards + character filters + cost filters; gear (e.g. a named sword) on the same screen as the card pool. Progression: **radial three-sector skill tree** (one sector per hero) with a hovered card whose text (from screenshot) manipulates **Time**.

**Owner ask:** interesting **ART** and a **CONCEPT**. Art steal is **craft**, not register.

**Art steal candidates (INFERENCE):**

- **Megalithic scale** — creatures small against Protocol-scale fixtures (bells, planted swords, watching sky). Useful for Zone landmarks later; does not require grimdark.
- **Desaturated ground + saturated skill FX** so Stream VFX read in battle.
- **Side-on party vs threat** as *one* Battle camera option — not a lock (Mythoras Battle is on the existing zone surface with variable footprints).
- **Card (or skill) frames colour-coded by owner-creature**, if presentation stays card-like. If presentation becomes an action bar, keep the colour-coding idea only.

**Art do-not-steal:**

- Universal grimdark / decaying-world brand. [`CONTEXT.md`](CONTEXT.md) #1: tone is biome- and stakes-dependent; parlour-light routes exist. Steam tags **Dark + Horror + Dark Fantasy** are the opposite of a locked Mythoras register.
- Gore as signature (entrails, pulp).
- Distressed thorn typography as Protocol UI (OD-004 UI language still open; Arcane Cartographer retired).
- “Watching God / orange eye in the sky” as Protocol imagery.

### Systems (FACT from Steam about + official site)

Steam/official copy, compressed:

1. **No turns, no mana points** (designer-facing claim).
2. Every enemy acts on a **visible countdown**; every card played **winds those counters down**. Time is the scarce resource.
3. **Three heroes, one shared deck.** Adding a card changes draw odds. Stack one hero or spread.
4. Full RPG under the cards: level-up, equipment, dialogue, skill checks; **not** marketed as a roguelike (RPGamer).
5. Weapons/armor **define playstyle** and can **inject unique cards** into the shared deck.
6. Restore shattered **Laws** (life, death, time); each Law restored draws an all-seeing God closer; God may “help” mischievously.
7. Three regions; handcrafted bosses.

**SECONDARY (Into Indie Games guide, 2026-07-27 — community guide, not Fardust):** Time Cost on cards **0–8**; high cost lets enemies act more before the card resolves; **Redraw** starts at **4 Time** and becomes free after 4 Time spent. Heroes named **Lev** (Warrior / Rage / Strength / Shield), **Ayla** (Exile / Quiver / Sharp), **Thade** (Scholar / Rot / colour-mana generated by *which hero’s card you play*). Fallen hero’s cards become **Revive** (1 Time); revive applies **Fracture** (redraw damages everyone). **Ethereal Power** = once-per-battle full revive + a tarot-like card; True Ending asks you to use it little. Enemies target **positions**; swap costs 1 Time unless Momentum. **Memories** are not hero-locked. Deck size uncapped — smaller deck cycles faster.

Use the guide for *how the Steam sentences feel in play*. Do not treat named numbers as canon unless re-checked in-game.

### Map to Mythoras — carefully

| Shards concept | Mythoras rail | Steal-candidate? | Do not |
| --- | --- | --- | --- |
| Time-as-resource; visible enemy countdown; playing spends Time and advances enemy clocks | **Turn Program** is non-negotiable: Planning Phase queues all creature actions, Execution interleaves by Speed + skill-inherent timing (CONTEXT; Q10 locked). Priority labels do **not** exist. | **Readability:** show *when* an enemy will act during Execution (telegraph / countdown-as-UI), and let some skills **nudge timing** (already possible via Speed costs / Support initiative penalties). | Replace Planning+Execution with “each card ticks the clock.” Do not add High/Normal/Slow Priority. Do not make Time a second mana. |
| Shared party deck | Skill Cards / skills are **creature-local** (CONTEXT #9). Command Deck is Technician-owned and is **not** a substitute for creature skills. Owner leans **maybe not cards**; prefers action bar over deckbuilder draw. | **INFERENCE only:** Technician Command Deck already *is* a small shared tactical layer — keep it small. Variation can live in banks (global + exceptional) without a shared draw pile. | One Squad-wide skill deck. Do not make drawing/cycling the core Battle verb. |
| Gear injects cards into the shared deck | Gear is **creature-local**. Skills install in that creature’s Skill Frame. | **Shape:** gear that **unlocks or alters that creature’s available skills** (inject into *its* Frame, not the Squad). Matches “weapons aren’t just stat sticks.” | Gear that dumps skills into a shared draw bag. |
| Laws restore / reshape the rules of the game | **Protocol** = already-there metaphysical network; power is structural/compiled. **Warbanner** = opt-in battle modifier (naming TBD). **Cipher** = endgame deployable zone. Attribute **Order** is a **stat**, not a restored cosmic law. | **Shape:** authored rule-shards as **opt-in modifiers** (Warbanner / Cipher mods) that change what a run allows — player-chosen, disclosed. “Restoring structure changes the rules” as *endgame authorship*, not as the campaign’s grim restore-the-dead plot. | Plot of shattered Laws + all-seeing God. Do not rename Protocol to Laws. Do not conflate Attribute Order with “Order restored.” Do not make campaign progress = rewriting combat rules by default. |
| Three heroes, radial shared tree | Technician owns **one Motherboard Grid** (global + 5 slot-local subroutes). Creatures own Frames. Squad is 3 Field + 2 Bench. | **Owner 2026-08-14:** rare public example of a **big tree that manages the whole party**, not one avatar. Steal the *job* (Technician-global Grid already is this). Art/topology will be **totally different** (PCB / Protocol, not Shards’ radial three-sector card tree). Slot-local subroutes already give “this slot plays differently.” | One radial tree that *is* three class kits glued together. Do not copy Shards’ three-sector art. Do not put Skill Cards on the Grid. |
| Full RPG, not a roguelike | Mythoras is a **campaign RPG with endgame**; roguelike-adjacent = **zone runs**, not the whole game (CONTEXT #7). | Alignment, not a steal. | Import Shards’ three-region linear campaign as Sequence design. |
| Card presentation | Skill Cards = idea vector; representation open. | Keyword-dense skill text + colour by owner-creature, **if** cards survive. | Bottom-row deckbuilder as the Battle HUD. |

**Mana note (FACT vs marketing):** Steam says “no mana points.” The guide and screenshots still show **colour mana** on the Scholar and “consume all Red/Blue/Green mana” cards. **INFERENCE:** “no mana” means Time replaced *the* spend-to-play resource; colour mana is a **build resource on one hero**, not a universal energy pool. Mythoras already has **creature Mana** as creature-local — do not flatten that into Shards’ Time, and do not copy colour-mana-from-other-heroes’-cards (that is shared-deck logic).

---

## ADE vs game-client

**ADE continues independently.** None of these links are v1 ADE blockers. Owner ADE brief already: Systems craft = Mods + Gear; Scene = abstract **tile-grid document** + view transforms; Preview deferred; no finished Zone chrome; greybox = basic colour-coded tiles / default mesh ([owner answers](RESEARCH_OWNER_ANSWERS_2026-08-06.md) A1, [narrowing](RESEARCH_OWNER_ADE_NARROWING_2026-08-11.md) Q1–Q4).

| Ref | ADE now | Later greybox / Tile / Zone | Later game-client VFX / Battle HUD | Trailer / brand / tools |
| --- | --- | --- | --- | --- |
| threejs-vfx + chirovisuals | No. Do not embed a 16k-slider VFX editor. | Optional: metres-true **line vs zone** overlays on the tile net (debug). | Yes: procedural skill silhouettes, Stream palettes, one-trick-per-skill discipline. Stack still unset. | — |
| Motion V2 | No. | No. | No (not in-engine). | Yes: launch/demo/skill-spot motion bar. |
| FitWorldGo / @GameFXlab | No. Do not put an LLM spell factory in ADE. | Weak: browser WebGL as a later Preview experiment. | Yes: generated-then-curated skill FX volume; Three.js as *one* cheap runtime, not a lock. | AI-native engine rant — ignore as ADE policy. |
| Direland / @KAIJIUUUUU | No survival-craft modules. | **Yes, later:** quarter-view readability; creatures that reshape tiles. | Boss/creature scale vs Technician; not hunt-loop. | Custom-engine craft ethic (one-game tools). |
| Scramble Knights | No MMO features. | **Yes:** tile readability, compact party glanceables, dungeon-vs-warm-character contrast. | Real-time action = no. | Tone reference (lighter than Shards). |
| ring_hyacinth / Funes | No. | **Yes, late:** biome atmosphere; photogrammetry as a *fixture-source idea* for OD-009. | Particle swarms as mood, not skill FX lock. | — |
| Grok Bot icon | No. | No. | Maybe: code-morphing glyphs for Creature/Protocol states. | Mascot-craft only; not Grok. |
| Shards of Order | No. Do not build a deckbuilder in ADE. Skill Frame topology still fog. | Weak: side-on staging is a camera option to try later, not a tile schema. | **Yes, grill later:** timing telegraph; gear→creature-local skills; Laws-shape as opt-in modifiers. Art craft without grimdark. | Artbook/soundtrack are theirs; do not paste. |

**Working rule:** ADE keeps shipping Creature / Tile / Tags / Gear. VFX sandboxes, FitWorldGo spell-volume, Motion, Scramble Knights tiles, Direland quarter-view, Sanxingdui water, and Shards combat all wait for **client / greybox / combat-readability** work. Inspiration here does not reopen Motherboard Grid or Skill Frame topology in ADE.

---

## Open questions

1. **FitWorldGo / GameFXlab** — Is the owner pointing at the *Three.js + generated spell/boss volume* stance, a specific clip on that timeline, or a playable demo not linked here? Need a screenshot or demo URL to go deeper than the pinned rant.
2. **Shards — play vs marketing.** Is Time Cost 0–8 / Redraw-at-4 / Fracture / Ethereal Power accurate in the shipped build? Guide is secondary. Only matters if a combat grill wants numbers.
3. **Timing telegraph without breaking Turn Program.** If Execution already interleaves by Speed, is a visible “acts in N” widget additive (steal Shards *readability*) or a second resource (do not steal)? Needs a combat grill, not ADE.
4. **Gear → skills.** How far may creature-local Gear go toward *injecting* Skill Cards / Frame nodes vs remaining stat sticks? CONTEXT ownership is clear; the injection *shape* is open. Shards is a prompt, not a model.
5. **Laws-shape vs Warbanner / Cipher.** Is “restore a rule, change what combat allows” a campaign beat, an opt-in Warbanner, a Cipher craft, or none? Do not name it Laws. Do not collide with Attribute **Order**.
6. **Skill presentation.** Shards is a strong card-RPG. Owner already leans maybe-not-cards and not a bottom-row draw. Does seeing Shards push *away* from cards (avoid looking like this) or toward keyword-cards for creature-local skills only?
7. **VFX stack later.** threejs-vfx is a **craft reference** (GLSL, no textures, live params). It is not a stack decision for the Mythoras client (engine unset). When greybox leaves “default mesh,” which two Streams get a silhouette pass first?
8. **Official Shards site vs Steam.** Site still “coming soon” after Jul 28 2026 release — ignore for dates; Steam API is source of truth.
9. **Direland vs Mythoras Battle camera.** Quarter-view combat-in-world is closer to zone-surface battles than Shards’ side-on stage — worth a later camera grill, not ADE.

---

## Executive summary (for the parent session)

1. **Inspiration only** — not ADE blockers, not canon. ADE keeps Creature / Tile / Tags / Gear; these refs feed **later** greybox, VFX, Tile readability, and a combat-readability grill.
2. **VFX cluster (Majid + chirovisuals):** MIT Three.js sandbox, 6 → 100 procedural skillshots, no textures, line vs zone aim, live sliders. Steal **silhouette + one-trick-per-skill**; do not steal LoL aiming or a spellbook deck as Skill Card lock.
3. **`@FitWorldGO` was `@GameFXlab` (FitWorldGo)** — Three.js/AI-writable WebGL + generated spells/bosses/dragon-PvP demo talk. Steal cheap experiment loop + curated skill volume; do not steal “delete the editor” or LLM-as-dictionary.
4. **`@KAIJIUUUUU` / Direland** — custom C++/OpenGL quarter-view sandbox; Steam TBA. Steal battlefield-reshaping creatures + readable combat-in-world; do not steal block-survival or hunt campaign.
5. **Motion V2 / Grok Bot / Sanxingdui scene:** trailer-grade motion, code-morphing glyphs, biome atmosphere + Funes photogrammetry as *late* Zone dressing. None of these are v1 ADE.
6. **Scramble Knights Online** (Funktronic, beta ~Aug 14 2026): tile dungeon + compact party HUD + warm characters in a dark room — better **tone/tile** ref than Shards’ grimdark.
7. **Shards of Order** (Fardust / Awaken Realms, Steam Jul 28 2026): steal art *craft* (scale, FX pops) and *shapes* (timing telegraph, gear that changes that creature’s skills, opt-in rule-shards). Do **not** copy grimdark, shared deck, Time-as-the-turn, or Laws-as-Protocol; Attribute **Order** stays a stat.
