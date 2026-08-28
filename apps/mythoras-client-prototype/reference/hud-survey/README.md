# hud-survey/ — four HUDs pulled from owner-supplied video links

**These are not the prototype's references.** `dd1/` and `mop/` are, and the
two-surface rule in [`../README.md`](../README.md) still holds. This folder is a
one-off **survey** taken on 2026-08-28 to answer a specific question that came up
in [ADR-0002](../../../../docs/adr/0002-ui-architecture-world-view-vs-combat-plate.md):
*can edge chrome carry a heavy information payload, or does heavy payload force a
framed plate?*

Nothing here is measured and nothing here should be traced. Frames exist so the
claims below can be checked rather than taken on trust.

## Provenance

The owner supplied four X links on 2026-08-27. Each is a video. Tweet text and
direct media URLs came from the `api.fxtwitter.com` mirror; the MP4s were
downloaded from `video.twimg.com` and sampled with `ffmpeg`.

| Folder | Game | Author | Source |
| --- | --- | --- | --- |
| `neversend/` | *Never's End* — turn-based strategy RPG | Ryan Juckett / Hypersect (made INVERSUS) | [status/2092745780364759488](https://x.com/Hypersect/status/2092745780364759488) |
| `calame/` | *Calame* — narrative tactical SRPG | Nextale Games | [status/2092990519857020951](https://x.com/NextaleGames/status/2092990519857020951) |
| `fortryv/` | *Fortryv* — live browser ARPG, alpha 0.7.12 | Fortryv | [status/2092749094070419730](https://x.com/Fortryv/status/2092749094070419730) |
| `frameofsuffering/` | *Frame of Suffering* — mech ARPG roguelite | Heavy Shield | [status/2062631355922436603](https://x.com/HeavyShieldGame/status/2062631355922436603) |

To re-fetch, resolve the tweet through the mirror, then pull the `videos[].url`
it returns:

```bash
curl -s https://api.fxtwitter.com/<user>/status/<id> | python3 -m json.tool
```

Frames were sampled at a fixed interval per clip (`fps=1/N`), scaled to 960px
wide. Images are gitignored by `apps/*/reference/**/*.jpg` like every other
reference frame — this repo is public.

## What each one shows

### `neversend/` — heavy payload without a plate

The load-bearing frame is `08.jpg`, which shows the full HUD with a unit
selected. Isometric tile board, full-bleed, letterboxed onto black. Every readout
sits on an edge:

- **Top strip** — initiative queue as a row of portrait heads, bracketed by
  `SHFT` and `TAB` keycaps; resource counters top-left, currency top-right.
- **Top-left** — the combat log as **bare colour-coded text directly on the
  board**. No panel, no frame, no background plate.
- **Bottom-left corner card** — portrait, name, HP `41/43`, three stat readouts,
  a status-icon row, and a row of equipment slots each with its own counter
  (`11/25`, `25/25`, `63/65`, `1/1`, `1/1`).
- **Bottom-centre** — numbered ability bar plus a Stamina bar.
- **Bottom rail** — keybind hints.

Resources are **Time and Stamina**; `08.jpg`'s tooltip reads "End this
character's turn to recover all of their Time and some of their Stamina." The
shield tweet confirms Time is an equipment-facing cost — bucklers are "easy on
Time-cost", tower shields "trade speed for superior protection." That is close to
Load and worth knowing about, but it is a systems note, not a UI one.

`01.jpg` shows a hub scene with the HUD **entirely absent**. The chrome is modal:
it exists in combat and nowhere else.

### `calame/` — the closest surface to the Field problem

`06.jpg`. Isometric board, full-bleed, and the arrangement is a **thin bottom
deck rather than a plate**:

- **Bottom-left** — active unit card: portrait, `Breena`, `Witch`, `HP 130/130`,
  an Overdrive bar, `Exp. 22/100`, and three resource pips.
- **Bottom-right** — the same card mirrored for the current enemy target.
- **Bottom-centre** — the turn queue as numbered portrait tiles, **split by an
  hourglass** that marks where the round ends. Flanked by two large hourglass
  medallions.
- **On the board** — each unit wears a small number badge, an HP bar, and status
  chips.

The device worth stealing is the **cross-reference**: the number on the badge
over a unit is the same number as its tile in the queue. That is how a badge
system stays readable at squad scale without the badge having to carry the
information itself — the badge is an index, not a summary. Palette is dark
blue-violet with warm fire accents.

### `fortryv/` — a deck layout running in production

`05.jpg`. Browser game, and it is the owner's quarter-view-plus-decks idea
already shipped: a **right deck** roughly a fifth of the width holding Equipment
paperdoll over a 60-slot Bag grid; a **bottom deck** with orb HUD, skill bar and
XP; a **left rail** of panel icons; a chat panel bottom-left with tabs; and two
dense top strips — about ten currency readouts over about eighteen system
buttons. The game view is whatever is left in the middle.

It demonstrates the density is achievable. It also demonstrates the failure mode:
nothing on that screen has a hierarchy, so the eye has no entry point.

### `frameofsuffering/` — a vertical rail readout

`06.jpg`. Near-total full-bleed with a compact bottom-centre cluster and one
unusual element: a **vertical `THREAT` meter on the right edge**, text set
vertically, with a numeral. Worth noting only because Mythoras has a Threat dial
and this is one answer to where a persistent single-axis readout can live without
taking deck space. Palette is near-black with magenta and cyan bloom.

## What the survey concluded

Recorded properly in ADR-0002 under *Counter-evidence to the payload argument*.
In short: three of the four carry substantial payload with **no framed plate**,
which weakens the claim that Mythoras's payload forces one. The plate lean
survives on finish and on the fact that DD1 is the only measured reference — not
on payload being impossible without it.
