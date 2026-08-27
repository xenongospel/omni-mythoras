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

### A third folder that is not a third reference

`shell-stitch/` holds screens the **owner** generated in Google Stitch. It is not
another studio's game and it does not govern a surface. It is evidence about
*arrangement* for [ADR-0002](../../../docs/adr/0002-ui-architecture-world-view-vs-combat-plate.md)
— the shell, the panel manager, and where the game view sits — and it carries no
usable finish. Do not trace it. See `shell-stitch/README.md`.

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

**Populated 2026-08-27** by `scripts/grab-reference-frames.sh`, which pulls
scene-distinct frames out of gameplay video. Frames live in `frames-<slug>/`
subfolders and are gitignored like everything else here.

| Folder | Source | Covers |
| --- | --- | --- |
| `frames-mop-15sec-trailer/` | "My indie game in 15 seconds — Master of Piece" | Boss battle board, mid-ability VFX |
| `frames-mop-hideout-world-battle/` | "Bosses Hate This Ability in Master of Piece! (#65)", first 15 min | Hideout, world map, battles |

Re-run the script to refresh; it reuses already-downloaded segments.

### What the frames actually show

Recorded here because it contradicts an assumption the specs were carrying.

**MoP has no framed plate — but it is not chrome-free.** An earlier reading of
these frames recorded "MoP has no console", which overstates it. Chrome runs
along all four edges: a slim top bar (HP, resources, zone title, menu icons), a
left icon column, a titled pictographic "Battle log" docked right, and a bottom
strip carrying reserve units, a turn-order track, and end turn. That bottom strip
is a console by function.

What MoP lacks is a **frame**. Its chrome is drawn directly onto the same black
void the board floats in, with no plate object behind it, which is why the board
reads as near-full-bleed. The axis between the two references is therefore
*framed plate vs frameless chrome on void*, not *panel vs no panel*.

**Information rides on the units, not in a panel.** Each unit carries small
hexagonal and square stat badges — HP, attack, and status — pinned directly to
its tile. You read the fight by looking at the board. This is a *third* answer
to "information co-present with play" (POSTURE §0) and, unlike a panel, it costs
almost no screen.

**Board grammar.** Chunky isometric cubes with visibly extruded sides at a fixed
camera angle, floating in near-black void. Terrain reads through props and
surface texture, not tile colour — because **colour is reserved for state**:
translucent red wash for threatened tiles, purple and teal for other conditions.
Heavy black outlines on every element; a warm tan/ochre ground against the void.

**VFX register.** Abilities fire as bright, high-chroma vertical light columns
with glyph accents, saturated well above the muted board so they read instantly.
See IDEA-064 for the Three.js technique reference.

**Consequence for the specs.** The board-plus-plate layout in POSTURE comes from
Darkest Dungeon alone. The reference we chose for the *board* solves the same
problem a different way. That is not a reason to abandon the plate, but it is
live evidence for ADR-0002 option D and it should be weighed before the layout
is treated as settled.

It was weighed on 2026-08-27 and the plate held, on the grounds that MoP's badges
carry roughly three numbers per unit while a Mythoras creature carries far more.
See the *Lean for this pass* section of ADR-0002. **MoP has still never been
measured** — there is no type table or palette for it the way §5.1 and §5.2 exist
for DD1, which is a real gap if the board is ever the surface being traced.
