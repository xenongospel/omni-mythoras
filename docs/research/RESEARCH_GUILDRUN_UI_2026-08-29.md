# Research — Guildrun: UI finish, measured colour, and the background/tiling composite

**Date:** 2026-08-29
**Status:** Research note. **No decision, no LOCK, no LEAN.** Naming a reference does not close a question ([ADR-0002](../adr/0002-ui-architecture-world-view-vs-combat-plate.md), *Working note 2026-08-27*), and nothing here chooses Guildrun's look for Mythoras. Evidence only.
**Source:** *Guildrun*, Steam app 3669200, Leyline Creations GmbH — <https://store.steampowered.com/app/3669200/Guildrun/>. Ten 1920×1080 store screenshots and one 45 s announcement trailer, measured directly. No first-party statement about art direction exists: the developer site and press kit are silent on it, so every visual claim below is my own measurement or my own inference, marked as one or the other.
**Local:** `apps/mythoras-client-prototype/reference/guildrun/` — see [its README](../../apps/mythoras-client-prototype/reference/guildrun/README.md) for provenance, re-fetch commands, per-screenshot notes, and the measurement scripts. **Guildrun is a survey, not a third prototype reference**; the two-surface rule in [`reference/README.md`](../../apps/mythoras-client-prototype/reference/README.md) is untouched.
**Anchors:** [ADR-0002](../adr/0002-ui-architecture-world-view-vs-combat-plate.md) — the *black with purple and green* tension recorded 2026-08-28, and the framed-plate-vs-frameless axis. [`POSTURE_REQUIREMENTS.md`](../../apps/mythoras-client-prototype/POSTURE_REQUIREMENTS.md) §5, §5.1, §5.2. [`hud-survey/`](../../apps/mythoras-client-prototype/reference/hud-survey/README.md) — the precedent this pass follows.

---

## 0. Owner ask (faithful)

> "guildrun game has some potential for analysis with certain screens,
> navigation - potential UI design (not UI layout), certain colourings,
> background assets and then tiling under them (mainly for some parts of the
> game view that has potential for interlace with MoP for game view"

Five asks, and this note is organised as them:

1. **UI design, explicitly not UI layout** — §2. How surfaces are *finished*:
   borders, corners, frame construction, iconography, texture, depth, state.
   Nothing about where panels go or how the screen divides.
2. **Screens and navigation** — §3, as an idiom rather than a map.
3. **Colourings** — §4, as measured hex.
4. **Background assets, and the tiling under them** — §5. The reason the game
   was raised, and the actionable part.
5. **Interlace with MoP for the game view** — §6, with an honest verdict
   including where it fails.

## 1. Source hygiene

**What Guildrun is.** An unreleased single-player PvE autobattler roguelike with
a demo live. Its own store copy: "No timer, no queue, no PvP. Think as long as
you want, save mid-run." That sentence turns out to be load-bearing for §3 and
§6 — several finish choices are affordable *because* nothing is under time
pressure.

**What is measurable.** These are the publisher's own store assets at native
resolution: no watermark, no stream overlay, no crushed blacks. That is a better
starting point than `console-dd1/`, whose two jpgs were rejected for colour
because 56% of one image is pure black. They are still JPEGs, so every value
carries roughly ±2 per channel of compression error and the low bits are noise.
There is no better source: the game is unreleased, so there is no install to
read uncompressed art out of the way DD1's `panel_hero.png` was read.

**How coordinates were found.** Each region was cropped, upscaled with
nearest-neighbour, and overlaid with a `drawgrid` at a known pitch, so sample
points could be read off the zoom rather than guessed. Coordinates are committed
in `palette.py` and the zooms in `crops/grid-*.png`. Edge construction (§5.2)
could not be resolved by any box average and was done with single-pixel
scanlines.

**What I could not verify.** Listed in §8 rather than smuggled into the body.
The short version: no type measurement, no parallax test, no blend-mode proof,
and no disabled-button example.

## 2. UI design — finish, not layout

### 2.1 Two frame registers, and the difference is the point

Guildrun frames **containers** and **objects** differently, and consistently.

**Containers get a hairline and four corners.** The shop plate (`ss-08`), the
event plate (`ss-04`) and the docked `DAMAGE DEALT` panel (`ss-09`) all use a
1px light edge line with small gold L-brackets at the corners *only*. Measured
on `ss-08` at row y=420: the plate interior reads `#0F1515`, the border pixel at
x=1628 reads `#656861`, and outside it the backdrop climbs to `#62614D`. There
is no frame *object* — the frame is implied by a hairline plus four corner
marks, and it costs almost no pixels.

**Objects get real metal.** The ability cards in `ss-06` carry a continuous
double gold stile with mitred corner plates, and a notch in the top edge where a
diamond medallion straddles the boundary. Highlight `#E4D09B`, body `#BAA74B`.

The distinction — *hairline for the thing that holds, metal for the thing you
choose between* — is a finish decision independent of any arrangement, and it is
the most directly portable idea in §2.

### 2.2 Silhouette: nothing is a plain rectangle, nothing is rounded

- **Hero cards are heraldic pennants** (`ss-01`, `ss-08`): chamfered top
  corners, straight sides, a pointed bottom. Tag chips (`CRIT`, `ASSASSIN`,
  `MAGE`) hang off the left and right edges on small pennant tabs that overlap
  the card boundary rather than sitting inside it.
- **Icon slots are diamonds** — rotated squares with clipped corners. In the
  top-left cluster of `ss-00` and `ss-02` they tile as a *half-offset diamond
  lattice*, two rows interlocking, which is a denser packing than a grid of
  squares and reads as a single cluster rather than a list.
- **Buttons are stretched hexagons or chamfered bars.** `DROP HERE TO SELL` in
  `ss-08` is a hexagon with pointed ends; `REROLL SHOP` and `FREEZE SHOP` are
  chamfered rectangles.
- **The only curves in the whole chrome** are the circular portrait frames in
  the party strip and the stats dock. There is not one rounded rectangle in the
  set.

### 2.3 Depth

Bodies are flat. Depth comes from a 1px light top edge plus a soft drop shadow,
not from gradients on the fill — with one exception: buttons carry a vertical
gradient, measured on the `PROCEED` fill as `#244F46` at the top to `#276F5B` at
the bottom, a ~19-point luminance lift over 45px.

**Art breaks the frame.** In `ss-04` the painted diorama overlaps the plate's
left edge and sits *in front* of it; in `ss-06` the hero portrait and its glow do
the same. Measured at `ss-04` column x=900: the plate's border sits at y=184–186
(`#64655D`) and painted light-shaft pixels appear at y=202+ (`#736B3C`) inside
it. The plate is behind the scene's hero art, not over it.

### 2.4 State

Four states, each on a **different channel**, so no two ever read alike.

| State | How it is expressed | Measured |
| --- | --- | --- |
| Hover | Green wash rising from the card's bottom **plus** a footer hint line appearing (`Hold [Shift] for more detail`) | `#152824` upper body → `#214539` lower body |
| Selected | Cyan border with a wide outward glow, and a tinted column behind the object | glow core `#83FAFF` |
| Active tab | Fill inversion — dark ground becomes solid accent, glyph knocked out | `#48D296` |
| Empty / unavailable slot | Outline only: dark interior, grey border, tiny centre pip. Not a dimmed version of a filled thing | interior `#1E1E1E`, border `#7C7A7B` |

Two things worth noting. Hover fires **two** channels at once — colour *and*
newly revealed text — so it survives on a screen where several things are
already coloured. And hover green (128–167° hue family, §4.2) and selection cyan
(182°) are adjacent but distinct, which is why selection reads as *more* rather
than *other*.

### 2.5 How text sits on a surface

Not measured — there is no type scale in this note and no font name is
obtainable from a store page. What is observable:

- Titles are **letter-spaced small caps** on a dark ground (`DAMAGE DEALT`,
  `THE UNSTOPPABLE`, `ITEMS`, `RELIC`). Body is sentence case.
- **Colour, not weight, carries emphasis, inline inside sentences.** Green
  `#9AEDA5` for gains and status nouns, orange `#F7AD58` for stat nouns, red for
  costs, warm white `#FFFFF6` for the rest. A single sentence in `ss-06` colours
  four different token classes.
- One display step only: the `RANK A` splash (`ss-03`). Everything else on
  every screen is within one or two steps of body size.

## 3. Screens and navigation

The idiom, stated once: **the world is never replaced.** In every register the
same painted backdrop is still present — clear, dimmed, or out of focus. A
screen change is a change of *depth*, not a change of page. There is no screen in
the capture that is a flat container on a flat ground.

Three registers, and the chrome inventory in the folder README shows they are
**not** all-or-nothing:

1. **Ringed.** Chrome persists on all four edges and content opens as a
   translucent modal plate over the painted world — dimmed, but not replaced.
   World detail measurably survives *inside* `ss-08`'s plate: the box that modes
   at `#101415` has a lightest pixel of `#464A4B`, against `#62614D` on
   comparable foliage just outside it. The plate is a dark translucent fill that
   darkens heavily; I did not isolate its alpha, and I cannot tell from stills
   whether the world behind it is still animating.
2. **Partial.** The event screen (`ss-04`) keeps only the bottom `PARTY` /
   `RESERVE` strip and drops the top bar entirely.
3. **Takeover.** Hero draft (`ss-01`) and passive pick (`ss-06`) drop *every*
   piece of chrome, darken and blur the world, and float the choices with **no
   containing plate at all**. The objects are the composition. `f27` in the
   trailer shows the backdrop genuinely out of focus, not merely darkened.

Plus a full-bleed splash for reward reveal (`ss-03`).

**One thing Guildrun does not demonstrate.** ADR-0002's narrowed option D wants
a *sized* game view — quarter, half, full — with decks reflowing to it.
Guildrun runs its board full-bleed under a fixed chrome ring in every gameplay
screenshot. It is neither evidence for nor against the sizing idea.

**The green ink-splash wipe** between trailer shots is a **trailer** device — it
also appears over the red title cards, which are not game screens. Whether the
game uses it as an in-game transition is **unverified**.

## 4. Colourings — measured

All values sampled from the files in `apps/mythoras-client-prototype/reference/guildrun/`.
Reproduce with `python3 palette.py`; full output is committed as
`palette-measured.txt`. `mode` is the modal pixel of the box with its share —
the real number for a flat fill. For chrome thinner than a few pixels a mode is
meaningless, so those rows report the **brightest** pixel and say so.

### 4.1 The table

**Grounds** — every one of these is a near-black.

| Hex | Role | Sampled from |
| --- | --- | --- |
| `#101417` | Card body, resting | `ss-06` @ 1090,700 — **100%** of a 60×40 box |
| `#161B1E` | Docked panel body | `ss-09` @ 1830,415 — 93% |
| `#101415` | Modal plate body, over the painted world | `ss-08` @ 350,850 — 45% |
| `#0F1417` | Top bar ground | `ss-00` @ 690,10 — 53% |
| `#1E1E1E` | Empty rail slot interior | `ss-02` @ 24,350 — 30% |
| `#060606` | Screen corner vignette | `ss-08` @ 1880,1040 — 97% |
| `#182035` | Secondary bar track, navy | `ss-02` @ 930,241 |

**Metal chrome** — thin; these are brightest-pixel readings except the bracket.

| Hex | Role | Sampled from |
| --- | --- | --- |
| `#E8E4B7` | Gold rim highlight, button top edge | `ss-08` @ 1400,175 |
| `#E4D09B` | Gold stile highlight, card | `ss-06` @ 595,395 |
| `#BAA74B` | Gold stile body, card inner | `ss-06` @ 608,395 |
| `#8D7F5A` | Gold corner bracket body | `ss-08` @ 1355,176 — mode |
| `#7C7A7B` | Grey slot border | `ss-02` @ 13,348 — mode, 12% |
| `#727564` | Panel edge hairline | `ss-09` @ 1699,420 |

**Accent and state.**

| Hex | Role | Sampled from |
| --- | --- | --- |
| `#244F46` → `#276F5B` | Primary action fill, vertical gradient | `ss-08` column x=1470, y=182→226 |
| `#152824` / `#214539` | Hover wash, card upper / lower body | `ss-06` @ 700,570 and 700,690 |
| `#48D296` | Active rail tab fill | `ss-02` @ 6,306 |
| `#5DD78C` | Class pennant fill | `ss-06` @ 595,452 — 28% |
| `#83FAFF` | Selection glow core | `ss-08` @ 636,500 |
| `#9A1F17` | Enemy HP fill | `ss-02` @ 935,228 |
| `#C89746` | Currency token gold, mean | `ss-00` @ 610,12 |
| `#E96D51` `#D04ECA` `#499E1F` | Segmented stat bar, three segments in one bar | `ss-09` @ 1820,464 / 1785,464 / 1784,586 |

**Ink** — thin; brightest-pixel readings.

| Hex | Role | Sampled from |
| --- | --- | --- |
| `#FFFFF6` | Body ink, warm white | `ss-06` @ 636,499 |
| `#9AEDA5` | Keyword ink, green — gains, status | `ss-06` @ 684,499 |
| `#F7AD58` | Keyword ink, orange — stat nouns | `ss-06` @ 636,541 |
| `#9C9D9F` | Muted subtitle ink | `ss-06` @ 710,461 |

**Board** — the numbers §5 argues from.

| Hex | Role | Sampled from |
| --- | --- | --- |
| `#7A9136` | Painted ground, just beyond the grid perimeter | `ss-02` @ 876,740 — 12% |
| `#8F8B39` | Tile interior, over the same green ground | `ss-02` @ 716,655 |
| `#898B38` | Tile interior, over a tan stone slab | `ss-02` @ 690,565 — 29% |
| `#B7A156` / `#BFA960` | Tile edge, the two light ridges | `ss-02` column x=704, y=624 and y=632 |
| `#878530` | Tile edge, the dark groove between them | `ss-02` column x=704, y=630 |
| `#2F200D` | Painted backdrop, unlit forest, mean | `ss-02` @ 100,100 |
| `#756542` | Painted ground, lit arena floor, mean | `ss-02` @ 620,760 |

**Painted and VFX register — not chrome**, recorded so it is not mistaken for it.

| Hex | Role | Sampled from |
| --- | --- | --- |
| `#CE4058` | Rank splash red ground | `ss-03` @ 1150,500 — 19% |
| `#F45D88` | Ability VFX, magenta | `ss-09` @ 720,590 |

### 4.2 There is a dark base with saturated accents, and the accents are a hue ramp

**Yes to the dark base.** Every chrome ground measured is between luminance 6 and
30. The corner vignette is `#060606`.

**The accents are one hue family, ramped along hue and lightness together.**
Computing hue off the measured values:

| Measured | Hue | Where |
| --- | --- | --- |
| `#152824` | 167° | hover wash, darkest |
| `#276F5B` | 163° | primary action, bottom of gradient |
| `#214539` | 160° | hover wash, lower body |
| `#48D296` | 154° | active tab |
| `#5DD78C` | 143° | class pennant |
| `#9AEDA5` | 128° | keyword ink |
| `#83FAFF` | 182° | **selection** |

The pattern: **the darker the green, the more teal it is; the lighter, the more
grass.** This is a ramp along hue *and* lightness together, not one hue at
several values. Selection at 182° sits just past the top of the ramp — the same
family pushed one step further, which is why it reads as intensification.

The second chrome accent is **gold/brass** at 37–55° (`#E8E4B7` 55°, `#8D7F5A`
44°, `#C89746` 37°), doing frames, currency and corner marks.

### 4.3 Against POSTURE §5.2's neutral rule

§5.2 states the rule that makes the DD1 plate not-SaaS: DD1's neutrals are
**pure grey, R = G = B exactly**, and "if a neutral on this plate has unequal
channels, it is wrong." §5's MUST NOT names blue-tinted grey as the tell.

Guildrun **splits**, and the split is systematic:

| Measured | R,G,B | B − R | Kind |
| --- | --- | --- | --- |
| `#101417` | 16, 20, 23 | **+7** | plate ground |
| `#161B1E` | 22, 27, 30 | **+8** | plate ground |
| `#0F1417` | 15, 20, 23 | **+8** | plate ground |
| `#101415` | 16, 20, 21 | **+5** | plate ground |
| `#1E1E1E` | 30, 30, 30 | 0 | slot interior |
| `#060606` | 6, 6, 6 | 0 | vignette |
| `#7C7A7B` | 124, 122, 123 | −1 | slot border |

**Plate grounds are deliberately cool-tinted; hardware — slots, borders,
vignette — is pure grey.** For scale, the slate family §5 warns about
(`#64748b` = 100, 116, 139) carries B − R = **+39** at mid luminance. Guildrun's
+5 to +8, on grounds all under luminance 30, is a fraction of that — a cast
rather than a colour.

This does not contradict §5.2, which is a measured statement about *Darkest
Dungeon* and a rule for the DD1 trace. What it does show is that the rule is
reference-specific: a cool-tinted near-black is not automatically the slop tell.
Whether that matters for Mythoras is exactly the question §5.2 flags as open,
and this note does not answer it.

### 4.4 Direct evidence on ADR-0002's black-with-purple-and-green tension

ADR-0002 records, dated 2026-08-28, that the owner wants **black with purple and
green**, and flags that this cannot both be true with §5.2's pure greys and warm
ink. Guildrun bears on that, unevenly.

**On green: strong evidence, and it is the whole answer.** Guildrun's *entire*
functional accent language is green — primary action, hover, active tab, class
identity, and keyword ink, all of it, on a near-black ground. Nothing else in the
chrome does that work. So black-plus-green is demonstrably sufficient as a
complete state language, not merely decorative, and the hue ramp in §4.2 is how
it stays legible across five different jobs.

**On purple: evidence pointing the other way.** Purple carries **no structural
or state job anywhere in Guildrun's chrome.** It appears in exactly two places.
In painted art and VFX — hero costume, ability effects (`#F45D88`, hue 343°) —
which is the register POSTURE §5.2 already exempts from palette rules. And as
`#D04ECA` (hue 303°), one of several **categorical series colours** inside the
`DAMAGE DEALT` bars alongside `#E96D51` and `#499E1F`; that is data
classification, not an accent. The navy bar track (`#182035`) measures 223° —
blue, not purple. Where a *second* chrome accent is actually needed, Guildrun
reaches for **gold** (frames, currency, corner marks) and **cyan** (selection).

So: Guildrun is a working existence proof for black + green, and simultaneously a
data point that black + green does not *need* purple to be complete. It says
nothing about whether Mythoras wants purple — the owner may want it for reasons
that have nothing to do with sufficiency. Recorded as evidence for the palette
pass §5.2 asks for; **not** a recommendation, and this note does not touch
POSTURE.

## 5. Background assets, and the tiling under them

This is the mechanism the game was raised for. `ss-02` is the only screenshot in
the set showing the grid, and it is the frame everything here is measured from;
`crops/grid-hex-edge-macro.png` (origin 670,600, 10 source px per grid cell) is
the crop where the construction is unmistakable at 10×.

### 5.1 The layer stack

Seven layers, back to front. Read off `ss-02`, `f27`, `f36` and
`crops/hex-perimeter-front.png`.

1. **Far background.** Painted, desaturating toward blue, contrast falling with
   distance. `f36` shows it clearly: giant structures behind the arena go hazy
   and cool. On menu screens it is genuinely **out of focus** (`f27`), not just
   darkened.
2. **Arena bowl.** Painted green ground with hard-outlined irregular tan stone
   slabs and its own baked shadows. Flat-lit, low contrast, no texture noise.
3. **Tile overlay.** The hexes. Warm, translucent, and present **only in the
   placement phase** (§5.4).
4. **Units**, with heavy black outlines and stat bars pinned above them.
5. **Foreground props** — tree trunks, gold crystal clusters, grass tufts, a
   stone arch — drawn *over* the board at the screen edges. In
   `hex-perimeter-front.png` the front grass tufts sit over the region where the
   grid ends.
6. **Screen vignette**, `#060606` at the corners.
7. **Chrome.**

**Layers 5 and 6 are the framing device.** Guildrun terminates its board with
*painted props at the screen edges plus a corner vignette* — the frame is
diegetic. Nothing draws a border around the board and nothing reserves screen
for one. This is the part §6 argues is portable.

### 5.2 The tile edge, measured

A single-pixel column across one hex edge — `ss-02`, x=704, y=608→672 —
resolves the construction that no box average could:

| y | Measured | Luminance | What it is |
| --- | --- | --- | --- |
| 608–620 | `#818634` → `#948C3B` | 105–115 | neighbouring tile interior |
| 622–626 | peak `#B7A156` | **143** | **light ridge** |
| 628–630 | `#888B32`, `#878530` | 105–108 | **dark groove** |
| 632–634 | peak `#BFA960` | **152** | **light ridge** |
| 636–670 | `#9C903C` → `#908B3A` | 113–121 | this tile's interior |

**The edge is light–dark–light**, about 12px wide at 1920×1080 with a 2–3px
groove down the middle. Each tile carries its own soft light lip; the groove is
where two lips meet. It reads as a very low bevel — tiles that look slightly
raised — and it is soft-edged throughout, with no hard 1px stroke anywhere. This
is the opposite of a wireframe grid: **there are no grid lines.** There are
tile-shaped fills with lit rims, and the "lines" you perceive are the grooves
between them.

### 5.3 The tile fill is a hue shift, not a brightness lift

Comparing a tile interior with painted ground of the same material just beyond
the grid perimeter:

| Measured | R,G,B | Hue | Luminance |
| --- | --- | --- | --- |
| `#7A9136` — ground beyond the grid | 122, 145, 54 | 75° | 106 |
| `#8F8B39` — tile interior over the same green | 143, 139, 57 | **57°** | 113 |

Luminance moves 7 points. **Hue moves 18°, toward gold.** The tile fill is a
warm amber wash that barely changes value — which is why the board reads as
tiled without the grid competing with the art for contrast. A brightness-based
grid at the same legibility would have washed the painting out.

Two cross-checks:

- **The edge ridges are the same gold as the UI chrome.** Ridge over green
  ground `#C3A358` = 42° hue; ridge over the tan slab `#BBA866` = 47°. The
  chrome gold family is 37–55° (§4.2). Board tiling and panel metal are the
  **same accent**, which is presumably why the grid does not read as a debug
  overlay.
- **The paint is continuous under the overlay.** In
  `crops/grid-hex-edge-macro.png` a painted stone slab with its own hard dark
  outline crosses a hex boundary without deflecting, and adjacent tiles show
  different interior tones because the paint beneath them differs — `#898B38`
  over slab against `#8F8B39` over green. That is direct evidence the overlay is
  translucent and composited above the painting.

**Inference, not measurement:** the fill warming without brightening much is
consistent with an additive warm layer at low alpha, or with a soft-light /
overlay blend against a gold source. **A single still cannot separate those**, so
the blend mode is a guess. The translucency itself is not a guess.

**Inference on geometry.** The hex edges visibly bow in
`crops/grid-one-hex.png`, following the ground's undulation, and one tile
measures roughly 145px across its long axis against roughly 65–70px across the
short — about 2.1:1, where a face-on regular hexagon is 1.15:1. That is a
vertical compression to ~0.55×, consistent with a hex grid lying on the ground
plane viewed from around 30° above horizontal. So the grid is very probably a
**decal on the ground geometry**, not a screen-space sprite. The camera-angle
number is derived, not measured.

### 5.4 The grid is phase-gated

Observed across the whole capture, and stated as narrowly as the evidence
supports:

- The grid appears in exactly two frames — `ss-02` and trailer `f09` — and
  **both of them also show a `FIGHT` button**.
- It appears in **no** frame where combat is resolving. The load-bearing three
  are `ss-00`, `ss-09` and `f04`: all show the **full chrome ring** intact, all
  show a running combat timer (`00:16`, `00:11`, `00:01`) and a `BATTLE SPEED`
  control, and none shows a tile. Because the chrome is present in these, they
  cannot be dismissed as HUD-hidden promo captures the way `ss-05`, `ss-07` and
  `f36` can.

**What is not evidence, despite looking like it.**
`frames/fight-transition/` samples the placement-to-resolution beat at 10fps.
The grid persists through `t005` and is absent from `t006` — but *the entire
chrome ring vanishes on the same frame* and the camera jumps closer. That is a
**trailer cut to a separate HUD-hidden shot**, not the game removing its grid,
and it cannot be used to time the transition. There is no frame anywhere in the
capture showing the grid actually being removed.

Targeting during resolution is done with **free-form rings and washes on the
ground** (`ss-07`'s red AoE ring, `ss-00`'s circular ripple), never by colouring
tiles.

So the supportable claim is: **the grid is drawn during placement and is not
drawn during resolution, and tile colour is never used to express state.** How
the change is animated is unknown.

### 5.5 The perimeter fades

Observed in `crops/hex-perimeter-front.png` rather than measured: the grid does
not terminate on a hard tile edge at the arena boundary. The rims get fainter
toward the front-left and the painted foreground props take over. I did not
measure the falloff profile.

## 6. The MoP interlace question

MoP, as characterised in [`reference/README.md`](../../apps/mythoras-client-prototype/reference/README.md):
chunky isometric cubes with visibly extruded sides at a fixed camera angle,
floating in **near-black void**; terrain reads through props and surface texture
**not tile colour, because colour is reserved for state** — translucent red for
threatened, purple and teal for other conditions; heavy black outlines; a warm
tan ground against the void; chrome drawn directly onto the void with no plate
behind it.

### 6.1 Where it interlaces — the layering, and it answers a live question

**The layer discipline transfers whole.** Guildrun's ordering — painted ground,
tile decal above it, units, painted props over the board's edge, corner vignette
— is a recipe MoP's board could adopt without changing a single cube. It answers
two things Mythoras has never had an answer for: what the board **sits in**, and
how the board's edge is **terminated**.

**And that is a third position on ADR-0002's own axis.** The ADR narrowed its
question to *framed plate vs frameless chrome on void*. Guildrun is neither:
it is **frameless chrome on a painted world**, where the framing is done by
foreground art and a vignette. That costs art rather than layout — it spends no
screen at all, where the DD1 plate spends 33.5% of window height. This is
evidence for the ADR to weigh, and weighing it is not this note's job.

**One transferable colour move.** Guildrun's tile ridge lands in the same hue
band as its chrome metal (§5.3). The structural lesson is *tile edge in the
chrome accent, not a colour of its own* — which under POSTURE §5.2's palette
would mean a tile edge stepped from chrome `#434343` → `#919191`, exactly the
mechanism §5.2's LEAN already uses for selection.

### 6.2 Where it does not work — three failures, one of them decisive

**The wash needs a ground plane, and MoP's board is not one.** Guildrun's
overlay works because it lies on a *painted, flat-lit, low-contrast ground* and
only has to shift hue by 18° to read (§5.3). MoP's board is extruded cubes with
heavy black outlines and individually shaded top faces. A translucent hue wash
on that competes with the outlines and with the cubes' own shading, and the
18°-shift trick has no quiet substrate to be quiet against. **Compositing
Guildrun's tile treatment onto MoP-style voxels is the specific part that does
not transfer.** Tiles can be MoP's geometry or Guildrun's decal. Not both.

**The two references have opposite tile-colour policies.** MoP reserves tile
colour for state. Guildrun spends tile colour on decoration and then removes the
grid entirely once state starts mattering. Only one policy can hold, and taking
Guildrun's warm grid onto a MoP board would consume the exact channel MoP uses
to say *threatened*.

**Phase gating collides with Turn Program — this is the decisive one.** Guildrun
can delete its grid at `FIGHT` because it is an autobattler: after that click the
player has no spatial decisions left. Mythoras queues three Field creatures at
once, and ADR-0002's own *Where a plan would live* note says queued actions
would be "ghosted onto the board tiles, since they are spatial." A grid that
disappears when resolution begins **removes the surface those ghosts need**. This
is a systems incompatibility, not an aesthetic preference, and it does not soften
with art direction.

### 6.3 Verdict

**The layering interlaces; the tile rendering does not.** Guildrun's background
composite — painted depth behind, diegetic props framing, vignette, no border
object — is compatible with MoP's board handling and answers a question neither
current reference answers. Its *tiles* are not compatible: they are a decal
tuned to a painted ground where MoP's are geometry, they spend the colour
channel MoP reserves for state, and they are switched off at precisely the
moment a Turn Program board would most need them.

Two further honesty notes on this verdict. First, **the palette and the
composite are independent** — taking one does not commit to the other, and they
happen to have arrived in the same reference. Second, the comparison is
**asymmetric**: Guildrun now has 30-odd measured hex values and MoP still has
none, as `reference/README.md` flags. That asymmetry is a real hazard — measured
numbers argue louder than prose — and this pass could not fix it.

## 7. What not to take

- **The grid's phase gating.** §6.2. It is an autobattler affordance and
  Mythoras's plan surface is spatial.
- **Chromeless takeover screens** (`ss-01`, `ss-06`). They look excellent and
  they are the opposite of ADR-0002 option D as the owner narrowed it on
  2026-08-28: *information co-present with play*. A takeover screen is by
  definition information **not** co-present. Guildrun can afford it because its
  own store copy says "No timer... Think as long as you want." Where that
  condition does not hold, the device does not travel.
- **The full-bleed reward splash** (`ss-03`). A whole screen spent on one letter,
  carrying no information. Mythoras has many reward moments per run and this is a
  pacing cost, not a finish idea.
- **Inline keyword colouring at Guildrun's density.** `ss-06`'s cards colour four
  token classes inside single sentences and get away with it because a passive
  description is three lines. A Mythoras Skill Card carries far more keyworded
  text; at that length the same device turns a paragraph into confetti. The
  *principle* — colour rather than weight for emphasis — is separable from the
  density and is the part worth keeping.
- **The cool-tinted plate grounds**, if the DD1 trace is still the job. §4.3.
  Guildrun's +5 to +8 blue lift is a long way from slate's +39, but it is not
  zero, and POSTURE §5's MUST NOT is explicit. Take it as a deliberate deviation
  or not at all — not by accident during a trace.
- **Guildrun as a third reference.** Three studios' finish in one prototype is
  how the layout zoo happened. It is a survey, and `reference/README.md`'s
  two-surface rule stands.

## 8. Explicitly not concluded

- **Nothing here chooses Guildrun's look for Mythoras.** No LOCK, no LEAN. Naming
  a reference does not close a question.
- **The ADR-0002 palette tension stays open.** §4.4 is evidence for the palette
  pass §5.2 calls for, not that pass. POSTURE is untouched by this note.
- **The framed-plate-vs-frameless axis is not resolved.** §6.1 adds a third
  position to it and stops there.
- **MoP has still never been measured.** §6.3. Fixing that would need a separate
  pass against `gameview-mop/`.
- **Parallax: unverified.** The only camera movement in the capture sits across
  a shot cut (§5.4), and the grid is not visible on the far side of it, so there
  is no continuous shot anywhere with both a moving camera and a visible grid.
  Whether the backdrop scrolls relative to the tiles could not be tested at all.
- **Blend mode: inferred.** §5.3. The translucency is measured; how it is
  composited is a guess from one still.
- **Type: not measured.** No scale, no faces, no line metrics. A store page
  cannot supply a font name and I did not attempt to derive one.
- **Disabled button state: not found** in the capture. Empty slots are
  documented (§2.4); a disabled action is not.
- **The green ink-splash transition: unverified as an in-game device.** It
  appears in the trailer over non-game title cards.
- **No first-party statement exists.** The developer site and press kit say
  nothing about art direction or UI. Every claim above is my measurement or my
  inference, and §5.3, §5.5 and the geometry note mark which is which.
