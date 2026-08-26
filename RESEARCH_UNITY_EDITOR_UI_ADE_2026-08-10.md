# Unity Editor UI / IDE Grammar — ADE Narrowing (2026-08-10)

**Status:** Research note. **Not canon.** Feeds Mythoras ADE / systems-IDE design after Grill #2 (Scene \| Systems \| Preview) and the stage-0 shell reaction (“meaningless dashboard”).

**Scope:** How Unity Editor layout grammar makes an empty shell feel like an authoring tool — and which pieces Mythoras ADE should keep vs refuse to cargo-cult. ADE is a PoB-like **systems IDE above a future game client**, not the player-facing game UI (CONTEXT: World View / Workspace View are game concerns).

---

## Question

1. What is Unity’s actual **layout grammar** (docked panes, focus/selection, Inspector as consequence, Scene as edit surface)?
2. Why can an empty Scene \| Hierarchy \| Inspector shell still feel like “Unity,” while Mythoras’s empty Systems \| Creature \| Calc shell feels like a **dashboard**?
3. What **must be manipulable** for a surface to feel like a design / authoring tool?
4. How do Unity teams build **game-specific** editors (custom Inspectors, EditorWindows, ScriptableObject authoring, Prefab Mode, graphs) — not marketing chrome?
5. What are 5–10 concrete **narrowing principles** for Mythoras ADE (keep / don’t cargo-cult; dashboard vs design tool)?

---

## Sources

Primary Unity documentation (docs.unity3d.com / ScriptReference), consulted 2026-08-10:

| # | Source | URL |
| --- | --- | --- |
| S1 | Unity’s interface (default window roles) | https://docs.unity3d.com/2023.2/Documentation/Manual/UsingTheEditor.html |
| S2 | Editor windows and views reference | https://docs.unity3d.com/Manual/editor-windows-views-reference.html |
| S3 | Scene view reference | https://docs.unity3d.com/Manual/UsingTheSceneView.html |
| S4 | Scene view navigation | https://docs.unity3d.com/Manual/SceneViewNavigation.html |
| S5 | Hierarchy — manage GameObjects | https://docs.unity3d.com/Manual/Hierarchy.html |
| S6 | Inspector window reference | https://docs.unity3d.com/Manual/UsingTheInspector.html |
| S7 | Project window reference | https://docs.unity3d.com/Manual/ProjectView.html |
| S8 | Game view reference | https://docs.unity3d.com/Manual/GameView.html |
| S9 | Console window reference | https://docs.unity3d.com/Manual/Console.html |
| S10 | Customize workspace layout | https://docs.unity3d.com/Manual/CustomizingYourWorkspace.html |
| S11 | Prefabs overview | https://docs.unity3d.com/Manual/Prefabs.html |
| S12 | Edit prefab assets (Prefab Mode) | https://docs.unity3d.com/Manual/EditingInPrefabMode.html |
| S13 | ScriptableObject | https://docs.unity3d.com/Manual/class-ScriptableObject.html |
| S14 | Create custom Editor window (UI Toolkit) | https://docs.unity3d.com/Manual/UIE-HowTo-CreateEditorWindow.html |
| S15 | EditorWindow API | https://docs.unity3d.com/ScriptReference/EditorWindow.html |
| S16 | Create custom Inspector (UI Toolkit) | https://docs.unity3d.com/Manual/UIE-HowTo-CreateCustomInspector.html |
| S17 | Create custom Editors with IMGUI (incl. OnSceneGUI / Handles) | https://docs.unity3d.com/Manual/editor-CustomEditors.html |
| S18 | GraphView API | https://docs.unity3d.com/ScriptReference/Experimental.GraphView.GraphView.html |
| S19 | GraphViewEditorWindow API | https://docs.unity3d.com/ScriptReference/Experimental.GraphView.GraphViewEditorWindow.html |

Related Mythoras notes (context only, not Unity evidence):

- Stage-0 shell: `apps/mythoras-ade-prototype/` (Scene \| Systems \| Preview chrome; owner: feels like meaningless dashboard).
- Layout inspiration owner note: [RESEARCH_ADE_LAYOUT_REFS_2026-08-08.md](RESEARCH_ADE_LAYOUT_REFS_2026-08-08.md) (Algolemeth-style systems-as-workspace lean — complementary, not Unity).
- Domain vocabulary: [CONTEXT.md](CONTEXT.md) (Creature, Zone, Tags, Mod Catalogue, Motherboard Grid, Authority / Invictus / Animus / Order).

---

## Findings

### 1. Unity’s layout grammar (what the panes *are for*)

Unity’s default Editor is not “a dashboard with modules.” It is a small set of **roles** that interact [S1][S2]:

| Pane | Role in the grammar |
| --- | --- |
| **Scene view** | Spatial / visual **edit surface** — select, manipulate, navigate the authored world [S3][S4]. |
| **Hierarchy** | Structural list of everything *in the current scene*; **inherently linked** to Scene (add/remove in one updates the other) [S1][S5]. |
| **Inspector** | Properties of the **current selection** (GameObject, asset, or component). Layout changes when selection changes [S1][S6]. |
| **Project** | Asset **library** — create, search, organize authorable files (including Prefabs, ScriptableObject assets) [S7]. |
| **Game view** | **Preview** of what the built application shows through a Camera; Play / Pause / Step [S8]. |
| **Console** | Feedback / errors / authored debug output — not a content module [S9]. |
| **Toolbar** | Play mode, layout menu, shared Editor chrome [S1]. |

**Docking is secondary.** Tabs can be dragged, docked, floated, and saved as layouts [S10]. That is workspace ergonomics. The *identity* of the tool is the role graph above, not the chrome.

**Selection is the bus.** Unity’s mental model:

```
Project (assets) ──instantiate/open──► Scene + Hierarchy (instances)
                                              │
                                         selection
                                              ▼
                                         Inspector (consequence)
                                              │
                                    edit / Handles / Prefab Mode
                                              ▼
                                         Game view (Play = temporary run)
```

Docs state Hierarchy and Scene are “inherently linked,” and Inspector contents “change each time you select a different GameObject” [S1][S5][S6].

**Scene vs Game is author vs preview.** Scene is for editing with tools and navigation [S3][S4]. Game is for simulating the player camera; Play mode darkens other UI and treats edits as temporary [S8]. That split is why Scene \| Preview (or Scene \| Game) reads as an editor, not two empty panels.

**Create is first-class.** Hierarchy context menu and shortcuts create GameObjects immediately into the linked Scene/Hierarchy [S5]. Project’s Create menu adds assets into the library [S7]. An “empty” Unity project is never empty of *verbs*.

---

### 2. Why empty Unity still feels like Unity; empty ADE feels like a dashboard

#### Empty Unity Scene \| Hierarchy \| Inspector

Even with no content authored yet, the shell still offers:

1. **A manipulable surface with tools** — Scene navigation (pan/orbit/zoom, View tool, Frame Selected) [S4]; overlays and gizmos/handles for interaction [S2][S17].
2. **Immediate create → select → inspect** — right-click Hierarchy → create empty → Inspector shows Transform → drag Handles in Scene [S5][S6][S17].
3. **Cross-pane consequence** — selecting in Hierarchy frames/highlights in Scene; selecting in Scene fills Inspector [S1][S5].
4. **A library that is not a nav destination** — Project is where assets live; you don’t “go to Project mode” as the primary identity of the app [S7].
5. **Preview as a different contract** — Game view exists to *run*, not to host another empty module list [S8].

Chrome alone is not what sells Unity. The **selection → consequence → manipulate** loop is. An empty Scene still has grid, camera, and create verbs; emptiness is a starting state of *content*, not of *agency*.

#### Empty Mythoras Systems \| Creature \| Calc

Stage-0 ADE (`apps/mythoras-ade-prototype`) correctly locks Scene \| Systems \| Preview as modes, but an empty Systems face still tends to read as:

1. **Named destinations without a selection bus** — “Creature,” “Mods,” “Passive” behave like admin sections / routes, not like Hierarchy + Scene roles over one focus object.
2. **Inspector-shaped panes without a focus object** — a Calc or property column with no selected authored entity is a form waiting for a page load, not a consequence of selection [contrast S6].
3. **No primary manipulable surface in Systems** — Unity’s Scene is always a surface you can grab. A Systems mode whose center is blank chrome or static labels is a dashboard card grid, even in B&W.
4. **Mode switch without mode verbs** — Unity’s Scene vs Game differ in *what you can do* (edit vs play) [S3][S8]. If Scene / Systems / Preview only swap side-nav labels and leave the same empty docks, modes are theatre.
5. **Module labels ≠ authoring roles** — “Creature module” sounds like a product area. “Hierarchy of Creatures + Skill Frame surface + Inspector of selection” sounds like an IDE.

**Critical distinction:** Unity feels like a design tool because panes are **roles in one authoring loop**. Dashboards feel like admin theatre because panes are **places you visit**.

---

### 3. What must be manipulable (minimum authoring agency)

For a surface to feel like an authoring tool (Unity-grade), at least these must be true:

| Must-have | Unity evidence | ADE translation (conceptual) |
| --- | --- | --- |
| **Focus object** | Selection drives Inspector [S6]; `OnSelectionChange` on EditorWindows [S15] | Always one selected authored thing (Creature, Zone fixture, Mod Catalogue entry, Grid node, etc.) |
| **Primary edit surface** | Scene: select/manipulate/modify [S3]; Handles / OnSceneGUI [S17] | Per mode: a canvas you *act on* (tile/zone compose; Motherboard Grid; Skill Frame topology; tag/mod graph) — not a blank panel |
| **Structural twin of the surface** | Hierarchy ↔ Scene linked [S1][S5] | List/tree of entities that *are* the surface contents (not a separate “nav”) |
| **Create / duplicate / delete** | Hierarchy + Project Create [S5][S7] | Instant new fixture appears in list *and* on surface |
| **Property panel as consequence** | Inspector varies by type [S1][S6] | Attributes (Authority / Invictus / Animus / Order), Tags, etc. appear because something is selected |
| **Visible consequence of edits** | Scene gizmos; Play mode; Console [S8][S9][S17] | Calc / Preview / validation update from the same selection (not a separate admin page) |
| **Author vs run contract** | Edit mode vs Play mode [S8] | Systems edit vs Preview step/run of authored state |

If any of these are missing, empty docks become dashboard theatre.

---

### 4. How Unity teams build *game-specific* editors (patterns, not marketing)

Unity’s extensibility story is: **keep the grammar, specialize the Inspectors and windows for your data**.

#### A. ScriptableObjects as data authoring assets

ScriptableObjects are project assets (not scene components) used as data stores and as the base for many authoring tools (`EditorWindow` / `EditorTool` derive from ScriptableObject) [S13]. Typical pattern:

- Domain data as assets (`CreateAssetMenu`).
- Default Inspector edits fields; custom Inspector when UX needs structure [S13][S16].
- Custom `EditorWindow` for tables / browsers that mutate SO assets (with `EditorUtility.SetDirty` so edits persist) [S13].

**ADE lean:** treat Creature definitions, Mod Catalogue entries, Zone fixtures, Tag sets as *assets under selection*, not as dashboard pages.

#### B. Custom Inspectors (domain-shaped property UI)

Custom Inspectors replace the default property layout for a type: group fields, show/hide by choice, add meaning [S16]. IMGUI path still documents `OnSceneGUI` + `Handles` so domain edits happen *on the Scene surface*, not only in forms [S17]. Docs note complex built-in Inspectors (terrain, animation import) use the same APIs [S17].

**ADE lean:** Authority / Invictus / Animus / Order, Tags, Skill Frame links — specialized inspectors *for the selected type*, not a permanent “Creature admin” screen.

#### C. Custom EditorWindows (tools that are not the Inspector)

`EditorWindow` subclasses dock or float like native panes [S15]. Official UI Toolkit tutorial builds a **sprite browser**: ListView selection → detail pane (TwoPaneSplitView) — selection drives the right pane [S14]. That is the same grammar as Hierarchy → Inspector, specialized to an asset type.

**ADE lean:** Mod Catalogue browser, balance table, seed/fixture picker = EditorWindows. They should still speak **selection**, not “open the Mods app.”

#### D. Prefab Mode — isolation vs in-context edit

Prefab Mode edits a template asset affecting all instances; **isolation** hides the rest of the scene; **in context** keeps surroundings visible but locked [S11][S12]. Breadcrumbs navigate out; Auto Save optional [S12].

**ADE lean:** editing a Creature template vs editing that Creature *as placed in a Zone / Squad context* — same hard mode idea Grill #2 wants, but applied to *focus depth*, not only Scene \| Systems \| Preview.

#### E. Graph tools

`GraphView` / `GraphViewEditorWindow` exist for node-graph editor windows (Blackboard, MiniMap helpers) [S18][S19]. Unity ships this as Editor infrastructure for game-specific graphs (dialogue, AI, shader-like tools), not as default Layout chrome.

**ADE lean:** Motherboard Grid / Skill Frame topology are candidates for graph-surface authoring *inside Systems*, with selection still feeding an Inspector — not a separate “grid dashboard widget.”

#### F. Feedback channels

Console is for errors, warnings, and `Debug` output; Error Pause can freeze Play to inspect [S9]. Authoring tools that don’t talk back feel dead.

**ADE lean:** validation / calc mismatches / “this Tag combination is illegal” belong in a Console-like feedback strip, not toast theatre.

---

### 5. Dashboard vs design tool (explicit)

| Dashboard theatre | Design / authoring tool |
| --- | --- |
| Panes labeled by product area | Panes labeled by **role** (structure / surface / properties / library / preview / log) |
| Empty panels wait for “content modules” | Empty state still has **create + navigate + select** |
| Nav switches destinations | Selection switches **Inspector content**; mode switches **verbs** |
| Calc/properties always visible as a page | Properties appear as **consequence of focus** |
| Preview is another empty dock | Preview **runs** authored state (Play analog) |
| Custom tools = more sidebar items | Custom tools = specialized Inspectors / EditorWindows over the same bus |

Owner reaction to stage-0 (“meaningless dashboard”) matches this table: chrome and mode tabs without a focus object and manipulable surface produce admin energy even when the visual language is sparse B&W.

---

## Mythoras implications — narrowing principles for ADE

1. **Keep the role grammar, not the Unity skin.** ADE needs Structure (list) + Surface (manipulable) + Consequence (Inspector) + Library (fixtures/assets) + Preview (run) + Feedback (log). Do not keep “four empty docks with module names.”

2. **Hard mode switch = verb switch, not tab chrome.** Scene \| Systems \| Preview (Grill #2) is valid only if each mode changes what you can manipulate: Scene = Zone / spatial compose; Systems = Motherboard Grid / Skill Frame / Mod Catalogue / Tags as edit surfaces; Preview = temporary run of authored state (Game/Play analog) [S3][S8].

3. **Selection bus is non-negotiable.** Every Systems face must share one focus object. Changing selection must rewrite the property/calc column. If Calc can be full while nothing is selected, it is a dashboard widget [S6][S15].

4. **The empty-shell test:** On first paint, the user must be able to **create one entity, select it, and manipulate it on a surface** (tile paint, grid node, frame link, tag assignment) within seconds — Hierarchy Create + Scene Handles energy [S5][S17]. If they can only click nav, the shell fails.

5. **Do not cargo-cult dock theatre.** Unity docking/layouts are optional ergonomics [S10]. ADE stage-0 should prove the authoring loop before investing in rearrangeable chrome.

6. **Inspector is never a destination.** Creature / Mod Catalogue / Grid node UIs are **type-specific Inspectors** (and occasional EditorWindows) over selected assets — Unity’s custom Inspector / ScriptableObject pattern [S13][S16]. Avoid permanent “Creature admin page.”

7. **Systems needs a real surface.** For Mythoras, the Systems manipulable surfaces are domain objects already named in CONTEXT: Motherboard Grid, Skill Frame topology, Mod Catalogue / Tags interactions, Creature attribute vectors (Authority / Invictus / Animus / Order) as properties of selection — not as empty module homes.

8. **Preview must consume authored state.** Preview is not “another layout with a viewport placeholder.” It is Play-mode energy: step/run using current fixtures, with temporary or clearly marked simulation [S8].

9. **Specialize with EditorWindow / graph patterns; don’t invent a second IDE.** Balance tables, catalogue browsers, dialogue-like graphs = dockable tools that still emit selection into the shared Inspector [S14][S18]. Resist a parallel “tools app” identity (already rejected in ADE layout refs).

10. **Prefab Mode idea for depth, not for chrome:** Isolation vs in-context edit [S12] maps cleanly to editing a Creature / Zone fixture alone vs in Squad / Zone surroundings — use when focus depth matters; do not add a fourth top-level mode until the first three have verbs.

**Dashboard vs design tool (one line for grilling):**  
ADE is a design tool when **selection + surface manipulation** are the product; it is a dashboard when **navigation chrome** is the product.

---

## Open questions

1. **Systems primary surface for v1:** Motherboard Grid vs Skill Frame vs Mod Catalogue / Tags — which single surface makes Systems mode pass the empty-shell test first?
2. **Does Scene mode own Zone tiles only, or also “still Protocol environment” dressing?** (Owner Algolemeth lean wants game-like still pane — Unity Scene is abstract grid, not brand world.)
3. **Calc placement:** Always a docked consequence column (Unity Inspector), or a floating overlay on the surface (more PoB)? Unity grammar favors docked consequence [S6]; PoB favors dense overlay on the tree — ADE may hybridize, but selection must still drive it.
4. **Library pane:** Separate Project-like fixture browser always visible, or modal/quick-open? Unity keeps Project visible by default [S7].
5. **How hard is Preview without a real client?** Minimum Play analog may be deterministic calc + 2D net / battle stub — need a grill on “honest preview” vs theatre viewport.
6. **Multi-select / multi-edit:** Unity Inspectors support multi-object edit [S17]. Does ADE need batch Tag / mod edits early, or is single-focus enough for stage-1?

---

## Executive takeaways (for parent agent)

1. Unity’s Editor identity is a **role loop** (Scene ↔ Hierarchy → Inspector; Project library; Game Play), not docked empty modules [S1][S2].
2. Empty Unity still feels like an editor because **create / select / manipulate / inspect** work immediately; empty ADE feels like a dashboard when panes are **nav destinations** without a focus object.
3. ADE must prioritize a **selection bus + manipulable Systems surface** over chrome; Scene \| Systems \| Preview only helps if modes change verbs [S3][S8].
4. Game-specific Unity tools specialize via **ScriptableObject assets, custom Inspectors, EditorWindows, Prefab Mode, GraphView** — same grammar, domain UI [S13]–[S19].
5. Narrowing rule: **keep roles and selection; refuse module-dashboard cargo-cult.**
