# Research — PoE Player-Facing Visual / Session Shape

**Source video:** [The Worst Guide To Path of Exile](https://youtu.be/yLij_001vUU) — Connor Conquers (~24m)  
**Local assets:** `.scratch/poe-player-visual/` (`video.mp4`, `video.en.srt`, `frame_t*.jpg`, `frame_extra_t*.jpg`)  
**Date:** 2026-08-08  
**Status:** Advisory visual / player-experience research. **Not Mythoras canon.**  
**Scope:** What a player *sees and does* across campaign → maps → pinnacles — HUD, overlays, density, juice, session rhythm — complementary to existing systems docs (`POE_*.md`, endgame/crafting/currency).  
**Mythoras lens (advisory only):** World View default + Workspace on demand; no permanent surrounding management chrome ([SESSION_DECISIONS_2026-07-15.md](SESSION_DECISIONS_2026-07-15.md), [PATHWAY_SINGULAR_PRACTICAL_BUILD_2026-08.md](PATHWAY_SINGULAR_PRACTICAL_BUILD_2026-08.md)). Steal principles, not PoE chrome.

Timestamps cite caption clock / frame filenames (`frame_tN.jpg` ≈ N seconds; `frame_extra_tN.jpg` = ffmpeg extracts).

---

## 1. Executive picture (player session story)

PoE’s player-facing shape is a **two-tempo loop**:

1. **World tempo** — isometric action in a dark fantasy stage; vitals, flasks, skills, minimap, and a buff strip stay pinned to screen edges while the center fills with VFX, ground telegraphs, and loot labels.
2. **Workspace tempo** — full or half-screen overlays (character select, inventory/gems, passive tree, Atlas tree, Map Device, trade, advanced tooltips) that pause or dominate the world so the player can *configure the next session*.

The video’s joke premise (“spreadsheet masquerading as a video game,” ~00:01:05–00:01:09) matches the visuals: late-game play is less “read the room” and more “run a prepared machine through juiced instances while filtering the floor.”

---

## 2. Section-by-section: what the player sees and does

### Intro (~00:00–00:00:54) — tone before chrome

- Cold open: NZ / Cook / Diablo 2 gag → “what if meth had a skill check” (~00:00:00–00:00:28). Frame `frame_t5.jpg`: collage, not gameplay.
- Pitch: free-to-pay ARPG; heavy crafting, itemization, customizable progression; “infamously over complicated… so much worse” (~00:00:54–00:01:17).
- League = full character + economy reset + new central mechanic; old systems stay relevant forever (~00:01:29–00:01:52). **Session implication:** the “real” game is seasonal re-onboarding into a stacked ruleset, not a clean campaign story.

### The Basics (~00:02:06–00:03:15) — entry screens

- Account → create character; class pick is aesthetic first (“whoever looks cool”) (~00:02:06–00:02:18).
- Frame `frame_t130.jpg` (~00:02:10): **character select** — cinematic class tableau left; dense list right (portrait, name, class/level, league); CREATE / DELETE / **PLAY** + private league. Management chrome as a gate, world as backdrop.
- Class skits (Templar → Witch); Scion unlocked Act 3 (~00:02:20–00:03:12). Campaign lore treated as disposable (“finished… still don’t know why,” ~00:03:15–00:03:26).

### Welcome to Path of Exile (~00:03:32–00:10:02) — campaign as tutorial surface

**Early world + skills**

- Wake on Wraeclast shore; “barebones tutorial for skills, links, and combat” (~00:03:32–00:03:39).
- Skills = colored gems (active/support) into colored **sockets** linked on gear (~00:03:41–00:03:53). Visual: socket colors + gold link lines on items later dominate inventory overlays (`frame_extra_t420.jpg` ~00:07:00).
- Kill Hillock → town: vendors, quests, waypoints, **stash** (~00:04:18–00:04:28). Hub pattern: labeled interactables (`STASH` in `frame_extra_t240.jpg` ~00:04:00).

**First passive-tree moment (Workspace takeover)**

- First skill point → tree reveal (~00:04:28–00:04:39). Described as a “skill graph”: shared tree, class = start position; INT/STR/DEX sections; small → notable → mastery (~00:04:48–00:05:07). Advice: path toward interesting/alive (~00:05:11–00:05:22).
- Frame `frame_extra_t310.jpg` (~00:05:10): **full-screen tree** — constellation of nodes; jewel socket radius circle; dense Unique jewel tooltip + computed socket results. Pure Workspace; world gone.
- Frame `frame_extra_t270.jpg` (~00:04:30): bottom HUD slice — flask arches + **`+` (unspent passive)** / **`!` (quest)** badges. Progression prompts stay in World View as *invites*, not auto-opening the tree.

**Campaign montage → Kitava**

- Speed-run of Acts 1–10; Act 6+ as remix; Kitava as “pretty great end of the campaign… appropriately epic” (~00:05:32–00:06:35).
- Punchline: 20–30 hours and you finished the **tutorial**; “now the real game begins” (~00:06:35–00:06:46).
- Quiet atmospheric beat exists in the cut: `frame_t410.jpg` (~00:06:50) shows a gothic interior **without HUD** (edit/cinematic) — reminder that PoE’s world art can read when chrome is stripped.

**Build fantasy, currency, crafting (off-screen systems that reshape sessions)**

- Build zoo (Righteous Fire, SRS, Toxic Rain, Flicker…) (~00:07:12–00:07:27); goal framed as “get rich and die trying” (~00:07:36–00:07:38).
- Chaos / Divines / Mirrors as trade gold standard among “several dozen currencies” (~00:07:40–00:07:53); economy as speculative stock market (~00:08:10–00:08:17).
- “True boss… the crafting system” (~00:08:37–00:08:40): affix slots, tiers, weights (~00:08:58–00:09:27). Frame `frame_extra_t550.jpg` (~00:09:10): **advanced modifier tooltip** — Prefix/Suffix tiers, tags, roll ranges; hideout locker names in background. Workspace = reading math on hover.
- Inventory / trade frames (`frame_extra_t420.jpg`, `frame_extra_t490.jpg`): ornate equipment doll, socket spaghetti, flask row, backpack grid; trade window + “hover each item to enable Accept”; life/mana globes still peek under overlays.

### The Atlas of Worlds (~00:10:06–00:15:14) — endgame session machine

**Atlas + Map Device (session launcher)**

- Atlas = endgame progression; maps = procedural areas opened via **Map Device**; tiers 1–16 (+17) (~00:10:08–00:10:37).
- Frame `frame_extra_t700.jpg` (~00:11:40): hideout Map Device as labeled world object; hub NPC names on minimap list — prep space before launch.
- Frame `frame_t620.jpg` (~00:10:20): Map Device **overlay** — center map slot + fragment/scarab cross; influence toggles (Eater / Maven / Exarch); mission counters; **ACTIVATE**. This is the clearest “configure then enter” Workspace in the video.

**Atlas passive tree (second graph)**

- Bonus map objectives → Atlas passive points (~00:10:39–00:10:51). “Last graph I swear” (~00:10:51).
- Atlas tree = steroid version of old league mechanics; customize what you farm (~00:10:56–00:11:02). Favorites named: Expedition, Harbinger, Betrayal, Ritual, Incursion, Blight (“attacks your frame rate,” ~00:11:08–00:11:32).
- Frame `frame_extra_t650.jpg` (~00:10:50): **ATLAS SKILLS** full overlay — searchable constellation, tree slots, points left / refund / APPLY; **bottom HUD globes + skills remain visible under the tree**. Workspace contracts the world but does not always remove combat chrome.

**Mapping feel on screen**

- Red maps → anomalies / mini-boss knowledge (~00:11:51–00:12:12); pinnacle roster listed on Atlas tree (~00:12:16–00:12:28).
- Mapping = offense / defense / **speed** balance; Flicker as “clarity of combat” irony + “six portal defense” (~00:12:49–00:13:11).
- **Juice:** alch/scarabs/chisels etc.; roll mods your build can survive (reflect as embarrassment) (~00:13:18–00:13:40).
- Frame `frame_extra_t630.jpg` (~00:10:30 mapping combat): Crystal Ore, ML 83 — life/mana globes, flasks, skill grid, long buff strip with timers, translucent **minimap over center**, gold + jewel loot labels, character buried in white/gold VFX. **High juice = low readability.**
- Frame `frame_t760.jpg` (~00:12:40-class density): Elder objective text; ~20 buff icons; empty mana globe (Blood Magic); filtered loot labels (`ORB OF REGRET`, `EXPEDITION SCARAB`); red hazard ribbons + purple slash VFX.

**External tools as part of the “visual” session (important)**

- Trade leagues → **trade site addiction**; hideout invites; SSF → Craft of Exile (~00:13:43–00:14:15).
- **Loot filter** required: FilterBlade basic; “iconic tink”; ignore 99% of floor (~00:14:20–00:14:40). Visible consequence in combat frames: sparse, color-coded labels instead of item spam.
- **Path of Building** “isn’t optional”; PoE as tool to test PoB (~00:14:45–00:15:09). Session shape extends *outside* the client.

### Pinnacle Bosses (~00:15:12–00:18:42)

- Enter pinnacles after gearing (~00:15:12–00:15:14).
- Practice + **clear telegraphs**, often with **audio** cues (Sirus “die” beam, Eater hunger) (~00:15:46–00:16:05).
- Frame `frame_t1260.jpg` (~00:21:00-class boss arena): dark circular arena; life + flasks left; skills + resource globe right; fewer buffs than map blast; Maven chat lines; gold pickup toast top-right. Boss sessions are still HUD-heavy but center stage is more about arena geometry than loot soup.
- Sisyphean juice: after you can clear anything, players ask for a bigger boulder (~00:16:22–00:16:46). Uber via T17 fragments; harder + special drop pool; mostly trash (~00:16:48–00:17:11). Chase T0 uniques (e.g. Mageblood) (~00:17:27–00:17:52).

### STILL SANE, EXILE? (~00:16:22 theme / Maven ~00:18:42–00:21:04)

- Interstitial: Nietzsche quote misattributed to Family Circus (`frame_t980.jpg` ~00:16:20) — complexity as identity joke.
- Maven framed as cultural “final test” (not unique hardest content) (~00:18:46–00:18:55): summons into maps, stores bosses in invitations, scales to multi-boss and pinnacle mashups (~00:19:06–00:19:57). Uber Maven as climax attempt (~00:20:26–00:20:31).
- Player fantasy verbally: not victory — “big numbers and even bigger memes” (~00:16:44–00:16:46).

### Conclusion (~00:21:04–00:24:00)

- “Spreadsheet-based gambling addiction”; good after hundreds of hours (~00:21:04–00:21:17).
- Deep customization; “optimization is part of the fun” (~00:21:50–00:21:56).
- F2P caveat: stash tabs (currency + map recommended) as QoL MTX (~00:21:59–00:22:35); cosmetics (“drip”) (~00:22:37–00:22:41).
- Community / guides / Twitch as onboarding surface (~00:22:43–00:23:33).

---

## 3. HUD & chrome inventory (what stays on screen)

| Layer | Typical placement | Permanent? | Notes from frames |
| --- | --- | --- | --- |
| Life / ES–mana **globes** | Bottom-left / bottom-right | Yes in World View | Large ornate orbs; strong genre identity (`frame_extra_t240`, `t630`, `t760`, `t1260`) |
| Flasks (5) | Beside life | Yes | Reactive consumables; stone arch chrome (`frame_extra_t270`) |
| Skill hotbar | Beside mana | Yes | Q/W/E/R/T + mouse binds; aura/support gems as icons |
| Buff / aura strip | Top | Yes (grows) | Early: few icons; maps: 12–21+ with timers |
| Minimap | Top-right | Yes | Can expand as translucent overlay over center (`frame_extra_t630`) |
| Zone / ML / league text | Near minimap | Yes | Session context chrome |
| XP bar | Bottom edge | Yes | Thin strip |
| Loot labels | World-space | On drop | Filter-dependent; primary “juice readability” channel |
| Quest / unspent point badges | Near flasks | Event | Soft invite to Workspace (`+`, `!`) |
| Chat / boss VO | Bottom-left | Situational | Maven lines in `frame_t1260` |
| Inventory / tree / Atlas / Map Device / trade | Center overlays | On demand | True Workspace; often leave bottom HUD visible under Atlas |

**Density curve:** town/hideout (readable character + labels) → campaign combat (moderate) → juiced maps (character + threats often illegible) → pinnacle arenas (telegraph/audio priority; less loot soup).

---

## 4. Portable lessons for Mythoras (principles, not chrome)

Aligned to locked direction: **World View default; Workspace invoked; no permanent surrounding management frame.**

1. **Session has a launcher, not a permanent ops desk.**  
   PoE’s Map Device is a single ACTIVATE ritual that packs map + scarabs + influence into one overlay (`frame_t620`). Mythoras analogue: open Workspace to configure the next traverse/battle beat, then return to a clean World View — don’t keep juicing controls as always-on side panels.

2. **Progression prompts as badges, trees as destinations.**  
   Unspent points as a small `+` invite (`frame_extra_t270`) beats auto-forcing a graph. Deep graphs (character tree, Atlas tree) are full Workspace takeovers — fine when *player-invoked*, toxic as permanent chrome.

3. **Filter the floor; don’t make the player read the landfill.**  
   Community loot filters + “tink” dopamine (~00:14:20–00:14:32) are how juiced maps stay playable. Portable idea: reward salience (labels/audio) as a first-class session readability system, not more permanent UI widgets.

4. **Juice is a prep verb that should be legible before commit.**  
   Rolling maps/scarabs/mods is Workspace prep; combat is the consequence (~00:13:18–00:13:34). Prep should surface “can my build survive this?” before ACTIVATE — same spirit as Mythoras configuring a session, then playing it in World View.

5. **Peripheral vitals, empty center — but keep vitals compact.**  
   Corner anchoring leaves a stage for the character (`frame_extra_t240`). Steal the *layout intent* (center for action); do not steal globe bulk. Prefer a thin InfoBand / contextual vitals over Diablo-clone orbs ([PATHWAY…](PATHWAY_SINGULAR_PRACTICAL_BUILD_2026-08.md) visual language open).

6. **Layered tooltips beat always-visible spreadsheets.**  
   Advanced mod details on hold/toggle (`frame_extra_t550`) keep World View sane while still serving theorycrafters. Good pattern for Mythoras gear/skills: simple default, deep on demand.

7. **Hub as calm Workspace between loud sessions.**  
   Hideout/town with STASH + Map Device + NPC list (`frame_extra_t700`, `t240`) is the breath between maps. Mythoras zone hubs can be World View–first with interactables, not a dashboard.

8. **Boss sessions need telegraph language, not buff-bar novels.**  
   Audio + clear telegraphs called out for pinnacles (~00:15:46–00:16:05). Prefer readable arena grammar over stacking 20 status icons as the “skill expression” surface.

9. **Optional: dual progression graphs with different jobs.**  
   Character tree = *me*; Atlas tree = *what the next sessions contain* (`frame_extra_t650`). Portable split: identity build vs content/route preferences — both as Workspace surfaces, neither as permanent chrome.

---

## 5. Explicitly do **not** copy (visible / discussed in this pass)

| Do not import | Evidence | Why it fights Mythoras direction |
| --- | --- | --- |
| Permanent life/mana **globes** as brand identity | All combat HUD frames | Bulky surrounding chrome; Mythoras wants compact contextual HUD |
| Always-on gothic stone HUD frame + SHOP button chrome | `frame_extra_t240`, `t860` | Permanent surrounding management / MTX surface |
| Buff-strip as primary combat readability (12–21 icons) | `frame_t760`, `frame_extra_t630` | Cognitive landfill; obscures World View |
| Center-screen minimap overlay as default | `frame_extra_t630` | Competes with the stage during juice |
| Trade-site / hideout hop as core economy UX | ~00:13:56–00:14:15 | Out-of-client dependency; breaks continuous World View session stories |
| Community loot-filter requirement as onboarding tax | ~00:14:20–00:14:28 | External toolchain as mandatory; if filtering is needed, ship it in-product |
| Path of Building as the “real game” | ~00:14:45–00:15:09 | Spreadsheet-outside-client as primary build UX |
| Stash-tab MTX as default inventory UX | ~00:22:07–00:22:35 | Paid Workspace QoL; Mythoras stash plans are design, not monetization copy |
| “Campaign is disposable tutorial; only Atlas matters” framing as product story | ~00:06:35–00:06:46 | Mythoras wants meaningful traverse→battle session stories, not a throwaway Act run |
| Socket-link spaghetti on every gear glance as default readability | `frame_extra_t420` | Skill configuration density that forces inventory as combat identity |
| League-reset + “everything forever relevant” cognitive stack as default complexity | ~00:01:29–00:01:56 | Seasonal encyclopedia tax — systems research already covers this; don’t aestheticize it into UI |

---

## 6. Relation to existing PoE research in-repo

| Existing docs | Cover | This doc adds |
| --- | --- | --- |
| `POE_RESEARCH.md`, skill/class/crafting/currency/endgame `POE_*.md` | Mechanics, economy, trees as systems | **On-screen** density, HUD permanence, overlay rituals, juice readability |
| `RESEARCH_POE_LUMINARY_MERC_VECTOR_2026-08.md` | Ascendancy/merc identity vector | Session chrome around combat hubs — not merc rules |
| `CURSE_OF_THE_ALLFLAME_ANALYSIS.md` | League patch content | Not required here; overview video is pre-/generic endgame montage |

---

## 7. Frame index (local)

| File | ~Time | What it shows |
| --- | --- | --- |
| `frame_t5.jpg` | 0:05 | Intro collage (non-gameplay) |
| `frame_t130.jpg` | 2:10 | Character select Workspace |
| `frame_extra_t240.jpg` | 4:00 | Hub + full permanent HUD + STASH |
| `frame_extra_t270.jpg` | 4:30 | Flasks + unspent `+` / quest `!` |
| `frame_extra_t310.jpg` | 5:10 | Passive tree + jewel Workspace |
| `frame_t410.jpg` | 6:50 | Atmospheric world, HUD stripped |
| `frame_extra_t420.jpg` | 7:00 | Inventory / sockets / flasks |
| `frame_extra_t490.jpg` | 8:10 | Trade + inventory overlays |
| `frame_extra_t550.jpg` | 9:10 | Advanced affix tooltip |
| `frame_t620.jpg` | 10:20 | Map Device ACTIVATE Workspace |
| `frame_extra_t630.jpg` | 10:30 | Juiced map combat density |
| `frame_extra_t650.jpg` | 10:50 | Atlas skill tree overlay |
| `frame_extra_t700.jpg` | 11:40 | Hideout Map Device object |
| `frame_t760.jpg` | 12:40 | Pinnacle/map VFX soup + filter labels |
| `frame_extra_t860.jpg` | 14:20 | Hideout idle with full HUD |
| `frame_t980.jpg` | 16:20 | “Still sane” quote card |
| `frame_t1260.jpg` | 21:00 | Boss arena HUD + Maven chat |

---

## 8. Bottom line for Mythoras agents

PoE’s player-facing power is not the globes — it is the **rhythm**: quiet hub → configure Workspace (tree / map / juice) → blast a short World instance under loot filters → return with currency → deepen the machine. Steal that **session punctuation**. Reject the **permanent surrounding chrome**, out-of-client trade/PoB dependency, and “campaign is trash, Atlas is life” story shape when shaping Mythoras World View + Workspace View.
