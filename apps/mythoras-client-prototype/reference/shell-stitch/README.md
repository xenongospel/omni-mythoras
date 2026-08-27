# Stitch shell explorations — owner's own design work

**This is not a third game reference.** `console-dd1/` and `gameview-mop/` hold
screenshots of other people's games and exist to teach a surface. This folder
holds screens the owner generated in Google Stitch, so it is *ours*, and it is
evidence about **arrangement**, not about finish.

The images are gitignored like everything else under `reference/` — not for
licensing reasons here, but because they are regenerable and this repo does not
carry binaries. Re-fetch them any time; see below.

## Why this folder exists

The screens were made 2026-04-04, months before ADR-0002 was written, and they
independently draw **option D** — persistent customisable panels with the game
view as one panel among many. The ADR was arguing about whether that direction
was worth its cost while a concrete sketch of it already existed. Recorded so it
stops being rediscovered. See *Evidence: the owner's own Stitch shell* in
[ADR-0002](../../../../docs/adr/0002-ui-architecture-world-view-vs-combat-plate.md).

## What the screens show

| File | Screen | Carries |
| --- | --- | --- |
| `app_shell.png` | App Shell | The panel manager: `SAVE / LOAD / RESET LAYOUT`, `PANEL WIZARD`, and an **ADD PANELS** list — Game View, Inventory, World Map, Map Designer, Chat, Passive Tree, Creatures, Squad |
| `mythoras_shell_v2.png` | Mythoras Shell v2 | Same idea, quieter: thin top bar, titled `GAME VIEW` / `ACTIVE SQUAD` / `BACKPACK` panels |
| `game_view_panel.png` | Game View Panel | The game view as a **draggable window** — tabs (Hideout / Route 1 / Battle), voxel board, minimap inset, move dial, waypoint toggle, status bar. Black-and-green chrome |
| `mythoras_landing_page.png` | Landing Page | Main menu with the panel manager already docked right |
| `hand_painted_dark_fantasy_ga.png` | — | A generated background plate, not a layout |
| `preview_webp.png` | — | Thumbnail, no design content |

Three details in `app_shell.png` matter more than the styling:

1. **Game View is an entry in the panel list.** Not the viewport the rest hangs
   off. That is the principle — the game view does not need to dominate —
   already drawn.
2. **Layouts are saved and restored.** Arrangement is treated as player state,
   which is the part option D calls expensive.
3. **Map Designer is one of the panels.** An authoring tool living inside the
   game shell, which is a live argument about whether the ADE is a separate
   application at all. Relevant to issue #6.

## Finish is not usable from these

The Stitch project's theme is `INTER` for headline and body, `SPACE_GROTESK` for
labels, `ROUND_FOUR` corner radius, accent `#a78bfa`. Stitch's body-font
enumeration contains **no Ubuntu and no blackletter face of any kind**.

That is close to the exact combination `POSTURE_REQUIREMENTS.md` §5 rules out —
neutral SaaS with 4px radius. Read these screens for *where things sit*. The type
scale and palette stay measured; see POSTURE §5.1–5.2.

## Re-fetching

The Stitch MCP is configured in `.cursor/mcp.json`, which is gitignored because
it holds an API key in plain text and this repo is public.

- Project: `18359695435470696760` — "Mythoras Stitch Prompts", created
  2026-04-04, `TEXT_TO_UI_PRO`, `PRIVATE`
- Endpoint: `https://stitch.googleapis.com/mcp`, header `X-Goog-Api-Key`
- Tools: `list_screens` takes `projectId` (bare, no `projects/` prefix);
  `get_screen` takes the full resource `name`

| Screen | ID |
| --- | --- |
| App Shell | `6d8c649a0b6b41c195f6665a627d1243` |
| Mythoras Shell v2 | `b7fdcde9beae4bb0a9a02cdd5baf0911` |
| Game View Panel | `75ccd8b0c62b48a4932cea463ffa63fa` |
| Mythoras Landing Page | `8bf80f9b9c83495b9244cbe030e80d85` |

Each screen carries a `screenshot.downloadUrl` and `htmlCode`. The download URLs
expire, so re-list rather than reusing an old link.
