# Godot Editor UI Grammar → Mythoras ADE (2026-08-10)

> Research / inspiration only. **Not canon.** Feeds ADE wayfinder and stage-0 redesign: how an engine editor *feels like a tool for designing systems* rather than a module list / dashboard chrome.  
> **Primary engine:** Godot 4.x editor docs. Unreal (and one adjacent pattern) only where they sharpen a distinct alternative.

**Problem this note answers:** The stage-0 shell (`apps/mythoras-ade-prototype`) exposes Scene | Systems | Preview mode tabs plus a rail of module names. Owner reaction: it reads as a **meaningless dashboard**, not an authoring surface for Creature / Zone / Tile / Tags / Mods / Motherboard Grid systems. Godot’s dock grammar is the clearest living reference for “always editing *something*, with immediate spatial feedback.”

---

## 1. Godot’s default composition (what the screen *is*)

Official first-look overview: [First look at Godot’s interface](https://docs.godotengine.org/en/stable/getting_started/introduction/first_look_at_the_editor.html).

| Region | Role |
| --- | --- |
| **Top:** main menu · **workspace buttons** (2D / 3D / Script / Game / AssetLib) · playtest | Workspaces switch the *center craft surface*, not a catalog of empty modules |
| **Scene tabs** under workspaces | Open documents (scenes). Plus = new scene. Distraction-free hides docks to grow the viewport |
| **Center: viewport + context toolbar** | The thing being shaped. Toolbar tools change with workspace and selection |
| **Side docks** | Structure (Scene), assets (FileSystem), properties (Inspector), plus Node/Signals/Groups in the right stack |
| **Bottom panel** (folded by default) | Console, Animation, Audio, Debugger, etc. — dense tools that steal height, so they stay collapsed until needed |

**Core ontology** ([Key concepts](https://docs.godotengine.org/en/stable/getting_started/introduction/key_concepts_overview.html)):

- A game is a **tree of nodes** grouped into **scenes**.
- Scenes nest; the running game is the **scene tree**.
- Nodes communicate via **signals** (observer wiring without hard-coding).

The UI is not “apps in a launcher.” It is **document (scene) → hierarchy (Scene dock) → selection → properties (Inspector) → live viewport**, with optional bottom tools and plugin-added surfaces.

---

## 2. Dock grammar (primary reference)

### Built-in docks (default layout)

From [First look](https://docs.godotengine.org/en/stable/getting_started/introduction/first_look_at_the_editor.html) and [`EditorDock` slot docs](https://docs.godotengine.org/en/stable/classes/class_editordock.html):

| Dock | Default slot (docs) | Job |
| --- | --- | --- |
| **Scene** | Left upper-right (`DOCK_SLOT_LEFT_UR`) | Tree of nodes in the *active* scene — select, reparent, instance |
| **Import** | Same left upper stack (tabbed with Scene) | Asset import settings for selected files |
| **FileSystem** | Left bottom-right (`DOCK_SLOT_LEFT_BR`) | Project assets (scripts, images, audio, scenes…) |
| **History** | Same left bottom stack | Undo/selection history |
| **Inspector** | Right upper-left (`DOCK_SLOT_RIGHT_UL`) | Editable properties of selected **node / resource / object** |
| **Node** (Signals) | Same right stack as Inspector | List signals on selected node; connect to receivers |
| **Groups** | Same right stack / Groups dock | Tag-like membership for selected nodes ([Groups](https://docs.godotengine.org/en/stable/tutorials/scripting/groups.html)) |

Slots are a fixed *grammar of places* (left UL/BL/UR/BR, right UL/BL/UR/BR, bottom, bottom-L/R). Plugins pick a `default_slot`; users can move docks; the editor remembers layout ([`EditorDock`](https://docs.godotengine.org/en/stable/classes/class_editordock.html)).

**Transient docks:** `transient = true` means docks that open for specific selections (e.g. TileMap / AnimationTree editors) — not always-visible chrome ([`EditorDock.transient`](https://docs.godotengine.org/en/stable/classes/class_editordock.html)).

### Bottom panel

- Hosts debug console, animation editor, audio mixer, etc.
- **Folded by default** because they “take precious space” ([First look](https://docs.godotengine.org/en/stable/getting_started/introduction/first_look_at_the_editor.html)).
- Plugins can add bottom items via `add_control_to_bottom_panel` / `DOCK_SLOT_BOTTOM` ([`EditorPlugin`](https://docs.godotengine.org/en/stable/classes/class_editorplugin.html)).

### Workspaces vs docks

- **Workspaces** (2D, 3D, Script, Game, AssetLib) replace the *center* craft mode.
- **Docks** stay around that center (unless distraction-free).
- Selecting a 3D node can auto-focus the 3D workspace — selection drives surface ([main screen plugins / `handles`](https://docs.godotengine.org/en/stable/tutorials/plugins/editor/making_main_screen_plugins.html)).

---

## 3. What the user edits — and immediate feedback

### Edit targets

| Object | Where you find it | What you change | Immediate feedback |
| --- | --- | --- | --- |
| **Nodes** | Scene dock + viewport selection | Transform, type-specific props, exported script vars | Viewport updates (sprite, collision shape, UI layout…); Inspector shows live values; revert icon on non-defaults ([Inspector Dock](https://docs.godotengine.org/en/stable/tutorials/editor/inspector_dock.html)) |
| **Resources / sub-resources** | FileSystem “Open”, Inspector resource pickers, drag-drop from FileSystem | Materials, shapes, scripts-as-resources, etc. | Nested Inspector dive; compatible drop targets highlight while dragging ([Inspector Dock](https://docs.godotengine.org/en/stable/tutorials/editor/inspector_dock.html)) |
| **Signals** | Node dock next to Inspector | Connect emitter → method on another node | Connection recorded; Script workspace can jump to generated callback ([Using signals](https://docs.godotengine.org/en/stable/getting_started/step_by_step/signals.html)) |
| **Groups** | Groups dock | Membership checkboxes / create groups | Membership visible in dock; queryable at runtime as tags ([Groups](https://docs.godotengine.org/en/stable/tutorials/scripting/groups.html)) |
| **Scenes as documents** | Scene tabs + FileSystem | Save/load whole trees | Nesting: a saved scene appears as one node with internals hidden until open ([Key concepts](https://docs.godotengine.org/en/stable/getting_started/introduction/key_concepts_overview.html)) |
| **Running game** | Game workspace + play buttons | Live tweak while paused/running | Runtime view; **changes in Game screen are not saved** when play stops ([First look](https://docs.godotengine.org/en/stable/getting_started/introduction/first_look_at_the_editor.html)) |

### Inspector behavior that makes it feel like a tool

From [Inspector Dock](https://docs.godotengine.org/en/stable/tutorials/editor/inspector_dock.html):

1. **Selection-bound:** click Scene tree → properties refresh. No separate “open properties” step when the dock is visible.
2. **Typed editors:** sliders, resource dropdowns, drag-from-FileSystem onto compatible fields.
3. **Diff vs default:** revert icon when a value differs from original; “Expand Non-Default” to see only what you changed.
4. **History:** back/forward through edited objects.
5. **Script exports appear as first-class properties** — authoring surface extends when you add `@export` fields.

**Feedback loop in one sentence:** select in hierarchy or viewport → edit in Inspector → see the same object change in the viewport (or jump to Script for signal handlers) → optionally Play to validate behavior.

---

## 4. How Godot avoids “empty module list that does nothing”

### Minimum viable editor experience (MVE)

On a fresh project you still get a **complete authoring circuit**:

1. **A document** — create/open a scene (even empty).
2. **A hierarchy** — Scene dock is ready to add nodes (Create New Node).
3. **A canvas** — 2D/3D viewport shows what you place.
4. **Properties** — Inspector fills as soon as *anything* is selected.
5. **Assets** — FileSystem is the library, not a separate “Modules” app.
6. **Run** — playtest is one click away.

There is no screen whose primary content is “here are future tools.” Empty state is “empty *scene*,” not “empty *product shell*.”

### Why Scene | Systems | Preview rails feel like a dashboard

Contrast with stage-0 ADE:

| Godot | Stage-0 ADE (observed) |
| --- | --- |
| Modes switch **craft surfaces** that share the same selection/document | Modes switch **product areas** (Scene / Systems / Preview) |
| Rail content is the **live tree of the open document** | Rail is a **static menu of module names** (Tiles, Creature, Mods…) |
| Empty Preview does not exist as a top-level mode; Game workspace still shows a running project | Preview mode is literally “Preview — not yet” |
| Fog-of-war modules are rare in the default chrome; specialized editors appear when you select TileMap / AnimationTree (`transient` docks) | Fog entries (Region, Zone) sit in the rail as placeholders |

Godot’s “extensions” are **plugins that attach to the same grammar** (dock / bottom / inspector / main screen), not a longer list of inactive product tiles.

### Plugin extension model (how the grammar scales)

Primary: [Making plugins](https://docs.godotengine.org/en/stable/tutorials/plugins/editor/making_plugins.html), [`EditorPlugin`](https://docs.godotengine.org/en/stable/classes/class_editorplugin.html), [`EditorDock`](https://docs.godotengine.org/en/stable/classes/class_editordock.html), [Main screen plugins](https://docs.godotengine.org/en/stable/tutorials/plugins/editor/making_main_screen_plugins.html).

| Extension point | Mechanism | When it appears |
| --- | --- | --- |
| **Custom dock** | `EditorDock` + `add_dock()`; `default_slot`, title, layouts | Always-available tool panel in a known slot |
| **Bottom panel** | `add_control_to_bottom_panel` / bottom dock slot | Dense, optional vertical space |
| **Inspector plugin** | `add_inspector_plugin` | Custom property UI for specific types |
| **Type handler** | `_handles` → `_edit` + `_make_visible` | Specialized editor when that type is selected |
| **Main screen** | `_has_main_screen` + center panel | New workspace button beside 2D/3D/Script |
| **Custom node type** | `class_name` / `add_custom_type` | Appears in Create New Node — extends the *vocabulary*, not the chrome list |
| **Toolbar / side containers** | `add_control_to_container` | Context chrome for 2D/3D editors |

**Design lesson:** plugins deepen *how you edit existing objects* or add a *real center surface*; they do not accumulate dead mode tabs.

---

## 5. Brief Unreal / other notes (only distinct patterns)

### Unreal Level Editor triad (parallel to Godot)

| Unreal | Godot analogue | Source |
| --- | --- | --- |
| **World Outliner** — hierarchical Actors in the level | Scene dock | [World Outliner (UE4.27 docs)](https://docs.unrealengine.com/4.27/en-US/BuildingWorlds/LevelEditor/SceneOutliner/) |
| **Details** — properties + type-specific utilities for selection | Inspector | [Details Panel](https://docs.unrealengine.com/4.27/en-US/BuildingWorlds/LevelEditor/Details/) |
| **Content Browser** — project asset hub | FileSystem | Blueprint creation flows through Content Browser ([Creating Blueprint Classes](https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/UserGuide/Types/ClassBlueprint/Creation/)) |

Same grammar: **outliner ↔ viewport selection ↔ details**, with assets in a browser. Reinforces that ADE should not invent a third pattern of “module gallery.”

### Distinct Unreal patterns worth knowing for Mythoras systems

1. **Blueprint Editor as a systems editor** — selecting a Blueprint opens a *graph authoring surface* (Event Graph, Construction Script) with **My Blueprint** outlining graphs / functions / variables / event dispatchers ([My Blueprint](https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/Editor/UIComponents/MyBlueprint/)).  
   **Mythoras lean:** Motherboard Grid, Skill Frame topology, and mod graphs deserve a **center surface that is the system**, not a form next to an empty Preview tab.

2. **Data Assets (pattern)** — Unreal’s designer-facing typed data objects (stats tables, encounter defs) edited as assets rather than only as placed Actors. Even when docs fetch is flaky, the *pattern* is: **systems data lives as inspectable assets in the Content Browser, not as admin pages**.  
   **Mythoras lean:** Creature / Mod / Tag dictionaries as **selectable fixtures** that fill an Inspector-like panel and optionally preview in a still Zone/battle pane — GGG-like inner dictionary, PoB-like outer craft face.

### Unity (one line)

Hierarchy + Inspector + Scene view + Project window is the same triad again. No additional Mythoras-specific signal beyond confirming industry consensus.

---

## 6. Mythoras ADE takeaways — dashboard chrome → authoring surface

Domain objects in play: **Creature**, **Zone**, **Tile**, **Tags**, **Mods**, **Motherboard Grid** (Technician-global; slot-local subroutes — see `CONTEXT.md`). ADE is a **systems authoring IDE** (PoB-like outer face + GGG-like dictionary), not game HUD.

Related prior note: [RESEARCH_ADE_LAYOUT_REFS_2026-08-08.md](RESEARCH_ADE_LAYOUT_REFS_2026-08-08.md) wanted an *engaging* multipurpose ADE with a still game pane — that is compatible with Godot **if** “dashboard” means *workstation around a live document*, not *module launcher*.

### Principles (narrowing Scene | Systems | Preview)

1. **One open document, always.**  
   Open fixture = “scene”: e.g. a Creature sheet, a Tile net seed, a Zone fragment, a Mod definition. Tabs for open documents; the rail should list **instances / hierarchy of the open document**, not a static product sitemap.

2. **Selection is the spine.**  
   Click Tile cell / Creature slot / Mod entry / Grid node → **Inspector-equivalent** shows only that object’s fields (Tags, Channels, Support links…). No selection ⇒ empty inspector is honest; a full page of disabled module cards is not.

3. **Center surface is craft, not status.**  
   - Tiles: net2D canvas (already closest to Godot).  
   - Creature: Skill Frame / species topology / tag chips as the canvas.  
   - Mods: affix stack or graph.  
   - Motherboard Grid: the grid itself as main screen.  
   Preview should be a **dock or bottom/side pane bound to the same selection**, or a Play-like validation mode — not a third top-level mode that says “not yet.”

4. **Modes = craft surfaces, not departments.**  
   Map Godot workspaces onto ADE carefully:
   - **Spatial / Scene** — Zone/Tile layout (2D net).  
   - **Systems** — dictionary + graph editors for Creature/Mods/Grid (like Script or a Blueprint main screen).  
   Do **not** use mode tabs to park unfinished modules. Prefer fog *inside* Create New… / asset types, or transient editors that appear when that type exists.

5. **Bottom panel for dense secondary tools.**  
   Seed bar, generation log, validation/console, combat sim step-through — folded by default (Godot’s reason: precious vertical space). Keep the viewport/system canvas dominant.

6. **Plugins = deepen types, don’t lengthen the rail.**  
   Future Combat / Loot / Cipher modules should register as: custom inspector sections, type handlers (`_handles`-style), or a main-screen graph — appearing when relevant data is selected. Stub modules as grey menu items recreate the dashboard smell.

7. **Immediate feedback contract (ADE MVE).**  
   Minimum viable ADE moment:
   - Open or create one fixture (Creature *or* Tile net).
   - See it in a hierarchy or asset list.
   - Edit a property.
   - See the still preview / net / tag readout update in the same frame.
   - Optionally “Play” / step a thin validation.  
   If a click only switches rail highlight with no editable object + feedback, it is still a dashboard.

8. **Address the owner complaint directly.**  
   - **Dashboard feeling** = chrome enumerates *capabilities*; content is empty or fog.  
   - **Tool feeling** = chrome enumerates *structure of the thing under edit*; every control mutates that thing and something visible responds.  
   Godot never makes you walk a product IA to reach the Inspector. ADE’s Scene | Systems | Preview should collapse toward **document + docks around a craft surface**, with Systems meaning “dictionary/graph workspace,” not “list of future systems.”

### Concrete remapping sketch (not locked)

| Godot | ADE candidate |
| --- | --- |
| Scene dock | Open fixture tree (Zone → Nodes; Creature → Skill Frame nodes; Grid → route nodes) |
| FileSystem | Fixture library / seed browser (Creatures, Mods, Tile packs, Tags) |
| Inspector | Typed fields for selection (stats, Tags, Mod rolls, Grid node effects) |
| Node / Signals | Optional later: Tag interaction wiring, Support→Skill links as connections |
| Bottom panel | Seed / validate / combat step / compile log |
| 2D workspace | Tile/Zone net authoring |
| Script / custom main screen | Motherboard Grid + Mod/Skill graph editors |
| Game workspace | Preview/play validation of current fixtures (bound, not orphan) |
| Transient dock | Tile palette, Mod roll debugger — only when that type is selected |

---

## 7. Sources (primary)

### Godot

- [First look at Godot’s interface](https://docs.godotengine.org/en/stable/getting_started/introduction/first_look_at_the_editor.html)
- [Overview of Godot’s key concepts](https://docs.godotengine.org/en/stable/getting_started/introduction/key_concepts_overview.html) (nodes, scenes, scene tree, signals)
- [Inspector Dock](https://docs.godotengine.org/en/stable/tutorials/editor/inspector_dock.html)
- [Using signals](https://docs.godotengine.org/en/stable/getting_started/step_by_step/signals.html) (Node dock connections)
- [Groups](https://docs.godotengine.org/en/stable/tutorials/scripting/groups.html)
- [Making plugins](https://docs.godotengine.org/en/stable/tutorials/plugins/editor/making_plugins.html) (custom docks)
- [Making main screen plugins](https://docs.godotengine.org/en/stable/tutorials/plugins/editor/making_main_screen_plugins.html)
- [`EditorPlugin` class](https://docs.godotengine.org/en/stable/classes/class_editorplugin.html) (`_handles`, docks, bottom panel, inspector plugins)
- [`EditorDock` class](https://docs.godotengine.org/en/stable/classes/class_editordock.html) (slots, transient, layouts)

### Unreal (light compare)

- [World Outliner](https://docs.unrealengine.com/4.27/en-US/BuildingWorlds/LevelEditor/SceneOutliner/)
- [Details Panel](https://docs.unrealengine.com/4.27/en-US/BuildingWorlds/LevelEditor/Details/)
- [Creating Blueprint Classes](https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/UserGuide/Types/ClassBlueprint/Creation/)
- [My Blueprint](https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/Editor/UIComponents/MyBlueprint/)

### Mythoras context

- [`CONTEXT.md`](CONTEXT.md) — domain vocabulary
- [RESEARCH_ADE_LAYOUT_REFS_2026-08-08.md](RESEARCH_ADE_LAYOUT_REFS_2026-08-08.md) — still-game / workstation lean
- Stage-0 shell observation: `apps/mythoras-ade-prototype/src/App.tsx` (Scene | Systems | Preview + module rail)

---

## 8. One-line verdict

**Steal Godot’s loop — open document → hierarchy → selection → inspector → craft viewport (plus folded bottom tools) — and stop treating Scene/Systems/Preview as a product sitemap; Systems should be craft surfaces for Creature/Mods/Grid dictionaries, with Preview bound to selection, not an empty mode.**
