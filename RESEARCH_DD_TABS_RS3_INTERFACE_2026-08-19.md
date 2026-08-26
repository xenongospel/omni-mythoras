# Research: DD Bottom-Console Tabs & RS3 Interface System

**Date:** 2026-08-19
**Status:** Narrow lookup pass — two specific questions, not a synthesis. Read alongside `RESEARCH_MOP_POE_DD_PROTOTYPE_PRIORITIES_2026-08-16.md` §2 and §6 item 4, which this doc directly feeds (DD-style bottom console layout, dockable-panel layout exploration).

---

## 1. Darkest Dungeon's bottom-right console context-switch icons

### What it is

During an in-mission expedition, the bottom-right corner of the HUD hosts a single panel that toggles between two contents: **Inventory** and **Map**. The Steam Community "Darkest UI Guide" (written with input from the original 2016-era HUD, referenced widely by other guides since) states this plainly: "Map Icon: select Map. Inventory Icon: select Inventory." ([Steam Community: The Darkest UI Guide](https://steamcommunity.com/sharedfiles/filedetails/?id=470786370))

This is corroborated independently by two unrelated community threads that both describe the same panel as a **two-state toggle**, not a multi-tab switcher:
- A Steam feedback thread titled "TAB key to switch between inventory and map" — the original poster explicitly asks for a keybind "to switch between the **two** views" (singular pairing, no third option mentioned). ([Steam Community feedback thread](https://steamcommunity.com/app/262060/discussions/2/537402115077287236))
- A separate Steam keyboard-shortcuts discussion lists "Tab — Switch between inventory and map" as a single, self-contained shortcut, with no additional panel states mentioned anywhere in that thread. ([Steam Community: Keyboard shortcuts?](https://steamcommunity.com/app/262060/discussions/0/412449508282278256))
- The DefKey community-sourced shortcut list for Darkest Dungeon also does not surface any third panel-toggle shortcut beyond map/inventory (attempted fetch returned 403, so this is listed as a search-result data point only, not a verified quote — see Confidence note below).

**Quest/objective information is NOT part of this switcher.** Search results consistently place the mission objective readout in a separate location — the top-left/top area of the screen during a mission — distinct from the bottom-right inventory/map panel. No source found ties an "objectives" tab to the bottom-right console specifically.

### What the icons are (best-supported answer)

| Icon | Function | Source |
|---|---|---|
| Map icon | Switches the panel to the dungeon map view (top-down room/corridor layout, pannable via right-click-drag, zoomable via scroll wheel, click a room to travel) | Steam UI Guide; corroborated by the (paywalled/inaccessible) Fandom "Dungeon Map" article surfaced in search snippets |
| Inventory icon | Switches the panel to the loot/provisions grid (the same 16-slot grid used for both starting provisions and collected loot mid-mission) | Steam UI Guide; Fandom "Inventory" article search snippet |

Default keyboard shortcut: **Tab** toggles between the two (confirmed by two independent Steam threads).

### Visual presentation — NOT confirmed to primary-source standard

None of the sources reachable in this pass (official wiki.gg, Fandom wiki, Steam guides, keyboard-shortcut aggregators) describe the icon *style* (line art vs. filled, monochrome vs. colored), the *active/inactive visual state* (e.g., highlighted border, depressed/pressed look, color shift), or *tooltip behavior on hover* in any detail. Several direct fetch attempts against the Fandom wiki (`darkestdungeon.fandom.com/wiki/Inventory`, `darkestdungeon-archive.fandom.com/wiki/Map`) returned HTTP 402 (paywalled/blocked for this tool), and the official wiki.gg `Inventory` page's fetched content did not include HUD/icon description at all — it only covers inventory *mechanics* (slot counts, stacking rules), not the console chrome. This is a real gap: it means the visual-presentation half of the brief could not be answered from primary sources in this pass.

### Confidence level: MEDIUM on count/identity, LOW on visual presentation

**On "how many icons and what do they switch between":** Medium-high confidence the answer is **two**, not three — Inventory and Map, full stop. This rests on convergent agreement across three independent community sources (a UI guide, a feedback-request thread, and a keyboard-shortcuts thread) all describing the same two-way toggle with no mention of a third state, plus the structural fact that the Tab-key binding request/documentation consistently frames it as a *pair* ("switch between the two views"). No source — including a deliberate search for "quest icon" / "objectives" tied to this panel — surfaced a third context-switch option. One synthesized search-engine summary briefly implied a third "Quest/Objectives" icon might exist in this panel, but on inspection that appears to be the search tool inferring/blending unrelated information (objectives are independently confirmed to live elsewhere on screen) rather than quoting an actual source — it is explicitly **not** treated as evidence here.

**On visual presentation (icon style, active/inactive state, tooltip behavior):** Low confidence — no primary or secondary source reachable in this pass actually describes it. This should be verified against a direct gameplay screenshot or the game itself before being used as a hard input to a UI mock, rather than assumed from this research pass.

**Recommendation given the confidence gap:** Treat "two icons, Map and Inventory, toggled via a small tab pair on the panel's edge, bound to Tab" as reliable enough to design around. Do **not** treat any specific claim about icon glyph style, hover/active visual treatment, or tooltip text as settled — if that level of fidelity matters for the Mythoras mock, pull a real screenshot (Steam store page, YouTube gameplay footage) rather than relying on this text-only research pass.

### What makes this a (mildly) good design choice

A two-state toggle is the cheapest possible version of "the player has more than one thing to check but only one place to look" — it avoids a multi-tab bar's complexity while still giving the bottom-right real estate two jobs (spatial awareness via map, resource awareness via inventory) without permanently splitting screen space between them. The tradeoff is that only one of the two is visible at a time, so DD accepts a context-switch cost (a keypress or click) in exchange for not shrinking either view to fit both simultaneously.

### Mythoras-native takeaway

If Mythoras adopts a DD-style bottom console, the "how many things can the right-hand panel show" question has a clean, verified precedent to anchor against: **DD ships with exactly two**, not a sprawling tab bar. That's a useful anti-scope-creep data point — a bottom console panel doesn't need three-plus context switches to feel complete; two well-chosen ones (in DD's case, "where am I" and "what do I have") already cover the two questions a player asks most during an expedition. For Mythoras's squad-RPG shape, the equivalent pairing is an open question worth prototyping cheaply (per the priorities doc's item 4) rather than assumed — candidates might be "squad/loadout" and "map/objectives," but which two (or whether a third is actually warranted, e.g., a Protocol/skill-assembly panel) should be decided by what the Planning Phase actually needs at a glance, not by copying DD's specific pairing. Given the visual-presentation gap above, don't let this research pass be the source of truth for icon *styling* — get a real screenshot before that becomes a locked layout decision.

---

## 2. RuneScape 3's interface system and configurability

### What it is

RS3's UI is built from independent, moveable "interface" windows (inventory, chat, minimap, action bars, etc.) governed by two selectable layout modes, per the official RuneScape Wiki:

- **Modern layout** — "a fully customisable layout where all interface components can be moved and resized." ([RuneScape Wiki: Interface](https://runescape.wiki/w/Interface))
- **Classic layout** — "a more traditional layout where interface components have a fixed position and the game window is easily resizable," deliberately built to resemble "how the game looked before early 2011" / Old School RuneScape's fixed layout. ([RuneScape Wiki: Interface](https://runescape.wiki/w/Interface))

Docking mechanics, per the same page: windows with a "brown header" can be combined into tabbed groups with any number of other brown-header windows; placement is constrained by "an invisible grid that divides your screen and dictates exactly where windows may go"; dragging a window onto another shows a translucent blue box and either auto-repositions or swaps the two windows' locations. Resizing is directional — dragging a top/bottom edge resizes only vertically, a left/right edge only horizontally, and a corner resizes both — for every window except the Action Bar and the Ribbon (the two windows that stay fixed-size).

### Depth of configurability

- **Edit Layout Mode** (via Options menu) is the dedicated customization mode — it exposes even normally-hidden interfaces (bank window, minigame overlays) for repositioning, and is the only place layout presets are managed. ([RuneScape Wiki: Interface](https://runescape.wiki/w/Interface))
- **Save/load presets:** players can save up to **4 custom layout presets** in addition to the 1 default, and switch between all 5 instantly via a Load Layout option — explicitly framed as a way to keep separate configurations for different activities (e.g., a combat layout vs. a skilling layout) without manual rearrangement each time. ([RuneScape Wiki: Interface](https://runescape.wiki/w/Interface))
- **Lock/unlock:** a padlock toggle in the corner of the Ribbon switches the whole interface between locked (headers greyed out, nothing moves) and unlocked (headers turn brown, everything becomes draggable/resizable) — a single global switch rather than a per-window setting. ([RuneScape Wiki: Interface](https://runescape.wiki/w/Interface))
- **Interface Sharing** (added February 2025): players can load another specific player's saved interface layout by username, directly inside Edit Layout Mode — turning layout presets into a community-shareable artifact rather than a purely personal setting. ([RuneScape Wiki: Interface](https://runescape.wiki/w/Interface); the update's own wiki page, [Update:Player Interface Sharing](https://runescape.wiki/w/Update:Player_Interface_Sharing_-_This_Week_In_RuneScape), and third-party coverage at [MassivelyOP, Feb 3 2025](https://massivelyop.com/2025/02/03/runescapes-latest-patch-lets-players-trade-their-interface-loadouts-among-themselves/) — MassivelyOP fetch was blocked (403) in this pass, so it's cited as a corroborating search-result data point, not a verified quote)
- Additional granular settings confirmed via the wiki's Settings/Interfaces page: dynamic backpack column count (0–28, adjustable), slim headers, title-bar visibility toggle, per-interface background transparency for "top-level" windows, minimap shape (square/circle), and separate chat style (Modern/Classic) — i.e., configurability goes beyond gross layout into per-element visual density. ([RuneScape Wiki: Settings/Interfaces](https://runescape.wiki/w/Settings/Interfaces))

So: yes to custom layouts, yes to save/load presets (5 slots total), yes to full HUD rearrangement in Modern mode, yes to independent per-window resizing (directional, not just uniform scaling) — this is a materially deeper configurability model than DD's fixed-chrome HUD.

### Recent critique / retrospective / planned changes (2024–2026)

Jagex has an active, dated 2026 roadmap that explicitly names UI decluttering as a workstream, not merely incidental polish:

- The RS3 2026 roadmap (reported via [PCGamesN, "As Runescape turns 25..."](https://www.pcgamesn.com/runescape/2026-roadmap)) lists a **"UI update"** and **"a decluttering of RS[3]'s visuals"** as named, planned initiatives sitting alongside combat modernization, a DailyScape/Aura system overhaul, and a broader content rebalance — these are described as Jagex's own stated roadmap items, not the article author's editorializing (the author's own commentary in that piece is enthusiasm about the volume of work, not a specific complaint about the UI).
- Jagex ran a **Reddit feedback-gathering thread** specifically to prioritize UI complaints ahead of the update, per search-result summaries of community coverage — cited concrete community asks included separately-configurable UI color options, an option to detach/hide the clock element, and colorblind-accessibility concerns about red text legibility in the current interface. **This is community-sourced sentiment relayed through secondary coverage, not a direct primary-source quote** — the Reddit thread itself and the specific Jagex news post (`secure.runescape.com/m=news/ui-tweaks--world-repairs`) both returned HTTP 403/blocked when fetched directly in this pass, so treat the specifics of "what players are unhappy about" as plausible-but-unverified rather than confirmed quotes.
- Broader roadmap context (per [MassivelyOP coverage, Jan 19 2026](https://massivelyop.com/2026/01/19/runescape-is-revamping-everything-from-its-player-housing-to-its-player-avatars-in-2026/) — fetch blocked 403, cited as a search-result data point only) frames 2026 as a "revamp everything" year for RS3 including player housing and avatar models, with UI/visual decluttering positioned as one thread among several, following the removal of the Treasure Hunter monetization system and an apparent push to rebuild player trust.

**Net read:** there is credible evidence (Jagex's own named 2026 roadmap items, corroborated by two independent outlets) that Jagex itself considers the current interface due for a declutter/refresh pass, and that this is tied to active community feedback-gathering — but the deepest specifics (exact Reddit thread content, exact Jagex news-post wording) could not be verified via direct fetch in this pass due to access blocks, so those specifics are flagged as secondary-sourced rather than primary-confirmed.

### What makes this system good/bad design

**Good:** RS3's model treats the HUD as player-owned real estate rather than a fixed designer decision — the same underlying interface set can serve wildly different playstyles (a minimalist combat-focused layout vs. a dense skilling/banking layout) without the game needing to ship multiple HUD "modes" as a hardcoded feature. Directional per-edge resizing (not just corner-drag uniform scaling) is a genuinely more granular affordance than most game UIs bother with. Presets solve the real friction of "I don't want to rebuild my layout every time I switch activities."

**Bad / the cost of this approach:** the same power that makes it flexible is also cited (per the 2026 roadmap items) as a contributor to clutter and a dated feel over a 15+ year accretion of interface elements — a system this open-ended tends to accumulate more windows/toggles over a game's lifetime than a curated fixed layout does, and Jagex's own 2026 plans treat "decluttering" as separate, necessary work rather than something the flexible system self-corrects. A fully player-configurable HUD also has a steeper first-hour learning curve (there's a reason RS3 ships a fixed "Classic" mode as an alternative) — configurability and onboarding-friendliness pull in opposite directions.

### Mythoras-native takeaway

RS3 is the concrete existence-proof for the "floating/dockable panel" option named as one of the layout skeletons worth prototyping in the priorities doc (§6 item 4). Two things worth carrying forward specifically:

1. **If Mythoras prototypes a dockable-panel layout, steal the narrow mechanism, not the whole system.** RS3's full player-authored HUD (grid-snap dragging, arbitrary window combination, 5 saved presets, per-edge resize) is a decade-plus feature built for a game whose players span radically different playstyles (PvM, skilling, PvP, minigames) simultaneously — a squad-RPG prototype almost certainly does not need that scope. The transferable piece is narrower: a small number of panels (squad status, map/loadout, whatever else Mythoras settles on) that can be repositioned or resized within *constrained* slots, not a fully open canvas — closer to RS3's grid-constrained placement than to true freeform dragging.
2. **RS3's own 2026 roadmap is a cautionary data point, not just a positive example.** A system that gives players maximum configurability up front can still end up needing a "decluttering" pass years later — flexibility doesn't automatically prevent visual noise from accumulating. For a small-team prototype, this argues for **starting with a small, curated set of panels** (per the "prototype rough and fast" philosophy already established for Mythoras) rather than building generalized dock/float/resize infrastructure speculatively before there's even a second or third panel that needs it — the RS3 story suggests that infrastructure earns its complexity from *scale of feature accretion over years*, which is exactly the kind of premature generality the owner has flagged wariness about elsewhere in this project.

---

*End of research pass.*
