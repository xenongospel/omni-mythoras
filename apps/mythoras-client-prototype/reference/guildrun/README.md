# guildrun/ — one owner-supplied game, pulled from its Steam store page

**This is not a third prototype reference.** `console-dd1/` and `gameview-mop/`
are, and the two-surface rule in [`../README.md`](../README.md) still holds.
This folder is a **survey**, the same kind of thing as
[`../hud-survey/`](../hud-survey/README.md): a one-off capture taken on
2026-08-29 so that a specific set of owner questions could be answered against
pixels instead of memory.

The owner's ask was narrow, and it is worth repeating here because it is what
these images were captured to answer: **UI design and explicitly not UI layout**
— finish, borders, iconography, state; screens and navigation as an idiom;
**colourings as measured values**; and above all **background assets and the
tiling under them**, with a view to whether that treatment could interlace with
MoP's board handling for the Mythoras game view.

Findings live in
[`docs/research/RESEARCH_GUILDRUN_UI_2026-08-29.md`](../../../../docs/research/RESEARCH_GUILDRUN_UI_2026-08-29.md).
Nothing here is a decision and nothing here should be traced.

## Provenance

*Guildrun*, Steam app **3669200**, by **Leyline Creations GmbH** (credited on
Steam as "Leyline"). Unreleased at capture time — the store page reads
"Coming soon / To be announced" with a demo live. Genre tags: Action, Indie,
Strategy; store copy calls it a "PvE autobattler roguelike".

- Store page — <https://store.steampowered.com/app/3669200/Guildrun/>
- Developer site — <https://www.playguildrun.com/>
- Press kit — <https://impress.games/press-kit/leyline/guildrun>

**Neither the developer site nor the press kit says anything about art direction
or UI.** The press kit renders client-side and returns an empty document to
`curl`. So every visual claim in the research note comes from measuring these
store assets, not from a first-party statement.

Ten screenshots at 1920×1080 and one 45-second announcement trailer at
1920×1080. Everything in here is Leyline's art and **none of it is committed** —
`.gitignore` excludes every image extension under `apps/*/reference/**`, and
`*.mp4` repo-wide. The tracked files in this folder are this README and the two
measurement scripts.

## Re-fetch

The storefront API gives the structured asset list; screenshots come straight off
the Steam CDN and the trailer off its HLS master playlist.

```bash
cd apps/mythoras-client-prototype/reference/guildrun

curl -s "https://store.steampowered.com/api/appdetails?appids=3669200" \
  -o /tmp/guildrun.json

python3 -c "
import json, urllib.request
d = json.load(open('/tmp/guildrun.json'))['3669200']['data']
for i, s in enumerate(d['screenshots']):
    urllib.request.urlretrieve(s['path_full'], 'ss-%02d.jpg' % i)
print(json.dumps(d['movies'], indent=2))
"

# movies[0].hls_h264 from the line above; the URL carries a ?t= cache token
ffmpeg -y -i "<hls_h264 url>" -c copy trailer.mp4
```

Sampled frames and crops, all regenerable:

```bash
mkdir -p frames frames/fight-transition crops

# 45 frames, one per second, 1280px wide
ffmpeg -y -i trailer.mp4 -vf "fps=1,scale=1280:-1" frames/f%02d.png

# contact sheets, 15 frames each, for scanning the reel quickly
ffmpeg -y -i trailer.mp4 -vf "fps=1,scale=426:240,tile=5x3" -frames:v 3 \
  frames/sheet%02d.png

# the placement -> resolution cut, at 10fps, full resolution
ffmpeg -y -ss 8.5 -t 3 -i trailer.mp4 -vf "fps=10" \
  frames/fight-transition/t%03d.png

# a detail crop; nearest-neighbour upscale with a coordinate grid over it is
# how every sample coordinate in palette.py was found
ffmpeg -y -i ss-02.jpg \
  -vf "crop=70:90:670:600,scale=700:900:flags=neighbor,\
drawgrid=w=100:h=100:t=1:c=magenta@0.9" crops/grid-hex-edge-macro.png
```

## Measurement

Two tracked scripts, because measured values are facts about the design and are
fine to keep, in the same way `POSTURE_REQUIREMENTS.md` §5.2 keeps DD1's hex
codes while refusing to copy Red Hook's art.

| Script | Job |
| --- | --- |
| `palette.py` | Every palette region, by name, with its coordinates. Prints modal / mean / darkest / lightest per box. Output committed as `palette-measured.txt`. |
| `scanline.py` | Dumps one pixel row or column as hex. This is what resolved the hex-edge construction, which no box average could show. |

```bash
python3 palette.py                       # the whole table
python3 palette.py > palette-measured.txt
python3 scanline.py ss-02.jpg col 704 608 64   # across one hex edge
```

**These are JPEGs.** Every value carries roughly ±2 per channel of compression
error; the low bits are noise. Unlike `console-dd1/`, though, there is no
watermark, no overlay, and no crushed-black problem — these are the publisher's
own store assets at native resolution, so colour off them is usable. There is no
better source available: the game is unreleased, so there is no install to read
art out of the way DD1's `panel_hero.png` was read.

## What each screenshot shows

Named by their index in the store page's `screenshots[]` array.

| File | Screen | Why it matters |
| --- | --- | --- |
| `ss-00.jpg` | Combat resolving — ability VFX, floating damage numbers, full chrome ring | The load-bearing "no tile grid during resolution" frame |
| `ss-01.jpg` | `CHOOSE HERO` — three hero banners on a darkened, blurred world | Full-screen takeover with **all** chrome removed and no containing plate |
| `ss-02.jpg` | **Placement phase** — hex grid over the painted arena floor, `FIGHT` button | **The frame the whole tiling section is measured from** |
| `ss-03.jpg` | `RANK A` reveal splash | Full-bleed reward card; the only large display type in the set |
| `ss-04.jpg` | `TRIAL: SINGLE COMBAT` event — translucent plate with three option rows | Painted diorama **breaking the plate's left edge**; keeps only the bottom strip |
| `ss-05.jpg` | Boss cinematic, dragon, no chrome at all | Foreground crystal clusters framing the arena; likely a HUD-hidden promo capture |
| `ss-06.jpg` | Passive-ability pick — three gold-framed cards, one hovered | The best frame for card construction and for the **hover state** |
| `ss-07.jpg` | Red AoE ring cinematic, no chrome | Targeting reads as free-form rings, not highlighted tiles |
| `ss-08.jpg` | Shop — translucent modal plate over the painted world, one hero card selected | Modal navigation register, and the cyan selection idiom |
| `ss-09.jpg` | Combat resolving in a second biome, docked `DAMAGE DEALT` panel | Multi-colour segmented stat bars; magenta VFX register |

Chrome inventory across the ten, since "which screens keep which chrome" is the
navigation finding and it is **not** all-or-nothing:

| Element | Present in |
| --- | --- |
| Top bar (currency, encounter track, timer) | `ss-00`, `ss-02`, `ss-08`, `ss-09` |
| Bottom `PARTY` / `RESERVE` strip | `ss-00`, `ss-02`, `ss-04`, `ss-08`, `ss-09` |
| No chrome whatsoever | `ss-01`, `ss-03`, `ss-05`, `ss-06`, `ss-07` |

## What the trailer adds

45 seconds, `frames/f01.png`–`f45.png` at 1fps. It is a marketing reel with
title cards, not a UI walkthrough, so most frames are worth nothing here. Three
things are worth having:

- **`f09`.** The only frame besides `ss-02` showing the hex grid, and it also
  shows a `FIGHT` button. Together with `f04` — same arena, chrome intact,
  timer running, no grid — this is what supports the grid being drawn in
  placement and not in resolution.
- **`frames/fight-transition/` is a trap.** It samples that beat at 10fps and
  the grid does vanish between `t005` and `t006` — but the *whole chrome ring*
  vanishes on the same frame and the camera jumps closer. It is a trailer cut to
  a separate HUD-hidden shot, not the game removing its grid. Do not use it to
  time the transition.
- **`f27`.** An event screen where the world behind the plate is visibly
  **out of focus**, not merely darkened.
- **`f36`.** A chromeless boss shot with the clearest read on background depth:
  foreground props at high contrast, mid-ground arena, background structures
  desaturating toward blue.

The bright green ink-splash wipe between shots (`f13`, `f17`, `sheet-fight.png`)
is the **trailer's** transition device. It also appears over the red title cards,
which are not game screens. **Whether the game uses it in-game is unverified** —
do not record it as a Guildrun screen transition.

## Crops

`crops/` holds detail cuts, all regenerable from the `ffmpeg` lines above.
`grid-*.png` are nearest-neighbour upscales with a `drawgrid` overlay at a known
pitch — the header line printed when each was made records the crop origin and
the pitch, which is how every coordinate in `palette.py` was derived. Re-derive
the same way if the screenshots are ever re-fetched at a different size.

The two worth opening first are `grid-hex-edge-macro.png` (origin 670,600, 10
source px per cell — the hex edge at 10×, where the light-dark-light bevel is
unmistakable) and `hex-perimeter-front.png` (the grid's front boundary, where it
fades out under the painted foreground props).
