# Reference images

**Images in here are never committed.** They are third-party game screenshots
and extracted game art, and this repository is public. `.gitignore` excludes
every image extension under `reference/`; this README stays tracked so the
expected structure survives even though its contents do not.

If you are setting up a fresh clone, these folders will be empty. Populate them
before running a tracing pass.

## Two surfaces, two references — do not cross them

| Folder | Governs | Reference |
| --- | --- | --- |
| `console-dd1/` | The bottom combat console, and parts of the menus and systems screens | Darkest Dungeon 1 |
| `gameview-mop/` | The game view — the isometric voxel board the fight happens on | Master of Pieces |

Darkest Dungeon has **nothing** to say about the board. Master of Pieces has
nothing to say about the console. A pass that traces DD1 into the game view, or
MoP into the plate, is wrong regardless of how good it looks.

## `console-dd1/`

Currently holds two 1920×1080 screenshots (`dd1_hero_panel.jpg`,
`dd1_hero_panel_2.jpg`).

**Both are compromised as colour references.** They are video captures carrying
a "GG" watermark, and the second has a Subscribe overlay sitting across the
middle of the console. In the first, 56% of all pixels are crushed to pure
black. Geometry and type metrics survive this and were measured from them
successfully; **colour did not, and was taken from the game's own art instead.**

### The better source

The Steam install ships the panel art uncompressed:

```
~/Library/Application Support/Steam/steamapps/common/DarkestDungeon/
  _osx/Darkest.app/Contents/Resources/data/panels/
    panel_hero.png        720×224   the combat plate chrome
    panel_inventory.png   720×360
    panel_map.png         720×360
```

Read these **in place**. Do not copy Red Hook's art into this repo, in the same
way `POSTURE_REQUIREMENTS.md` forbids copying their `.fnt` / `.tga` font files.
Measured values — hex codes, pixel ratios — are facts about the design and are
fine to record in POSTURE. The assets themselves are not ours to publish.

A clean owner-captured screenshot at native resolution with no watermark and no
overlay would be better than either jpg, and takes about two minutes.

## `gameview-mop/`

**Empty — needs populating.** Master of Pieces screenshots covering the board:
tile grammar and facet shading, the locked camera angle, how units sit on tiles,
and how threatened / walkable / special tiles are coloured.

Until this folder has images, the board has no reference to trace, which is
exactly the case where generating several structurally different variants is
the right method rather than the wrong one. See
`RESEARCH_DISCOVERY_TO_PROTOTYPE_2026-08-26.md`.
