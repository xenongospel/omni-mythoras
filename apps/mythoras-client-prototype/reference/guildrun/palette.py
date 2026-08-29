#!/usr/bin/env python3
"""Measure the Guildrun palette from the downloaded 1920x1080 screenshots.

For each named region: the modal colour and its share of the box (the flat
fill), the mean, and the darkest/lightest pixel. Thin chrome — a 4px gold
stile, a hex edge highlight, a glyph stroke — has no useful mode, so
`lightest` is the load-bearing figure there and the region label says `[thin]`.

Coordinates were found by cropping each area, upscaling with nearest-neighbour
and overlaying `drawgrid` at a known pitch, then reading cell indices off the
zoom (see `crops/grid-*.png`). Re-derive the same way if the screenshots are
re-fetched at another size. All sources are JPEG, so every value carries
compression error of roughly +/-2 per channel; treat the low bits as noise.

    python3 palette.py

Run from this folder, with the `ss-NN.jpg` set present.
"""

import collections
import subprocess

# image, x, y, w, h, label
REGIONS = [
    # --- chrome grounds -----------------------------------------------------
    ("ss-06.jpg", 1090, 700, 60, 40, "card body, resting"),
    ("ss-09.jpg", 1830, 415, 50, 30, "docked panel body"),
    ("ss-08.jpg", 350, 850, 60, 30, "modal plate body, over painted world"),
    ("ss-00.jpg", 690, 10, 30, 20, "top bar ground"),
    ("ss-02.jpg", 24, 350, 10, 10, "rail slot interior, empty"),
    ("ss-08.jpg", 1880, 1040, 30, 30, "screen corner vignette"),
    ("ss-02.jpg", 930, 241, 40, 3, "secondary bar track, navy"),

    # --- metal chrome -------------------------------------------------------
    ("ss-06.jpg", 595, 395, 5, 25, "[thin] gold stile, outer"),
    ("ss-06.jpg", 608, 395, 4, 25, "[thin] gold stile, inner"),
    ("ss-08.jpg", 1400, 175, 60, 4, "[thin] gold button rim"),
    ("ss-08.jpg", 1355, 176, 20, 20, "gold corner bracket"),
    ("ss-02.jpg", 13, 348, 4, 16, "[thin] grey slot border"),
    ("ss-09.jpg", 1699, 420, 5, 40, "[thin] panel edge line"),

    # --- accent and state ---------------------------------------------------
    ("ss-08.jpg", 1400, 215, 40, 10, "primary action fill (PROCEED)"),
    ("ss-06.jpg", 700, 570, 60, 40, "hover wash, card upper body"),
    ("ss-06.jpg", 700, 690, 80, 30, "hover wash, card lower body"),
    ("ss-02.jpg", 6, 306, 6, 6, "active rail tab fill"),
    ("ss-06.jpg", 595, 452, 10, 12, "class pennant fill, green"),
    ("ss-08.jpg", 636, 500, 6, 80, "selection glow core"),
    ("ss-02.jpg", 935, 228, 10, 8, "enemy HP fill"),
    ("ss-09.jpg", 1820, 464, 40, 4, "stat bar segment, orange"),
    ("ss-09.jpg", 1785, 464, 12, 4, "stat bar segment, magenta"),
    ("ss-09.jpg", 1784, 586, 8, 5, "stat bar segment, green"),
    ("ss-00.jpg", 610, 12, 14, 14, "currency token, Shards"),

    # --- ink ----------------------------------------------------------------
    ("ss-06.jpg", 636, 499, 40, 10, "[thin] body ink, white"),
    ("ss-06.jpg", 684, 499, 18, 10, "[thin] keyword ink, green"),
    ("ss-06.jpg", 636, 541, 46, 10, "[thin] keyword ink, orange"),
    ("ss-06.jpg", 710, 461, 80, 12, "[thin] muted ink, subtitle"),

    # --- board: painted layer vs tile overlay -------------------------------
    ("ss-02.jpg", 100, 100, 60, 60, "painted backdrop, unlit forest"),
    ("ss-02.jpg", 620, 760, 40, 40, "painted ground, lit arena floor"),
    ("ss-02.jpg", 690, 565, 20, 20, "hex fill, over tan slab"),
    ("ss-02.jpg", 694, 620, 12, 14, "[thin] hex edge, over tan slab"),
    ("ss-02.jpg", 878, 655, 8, 14, "hex fill, over green ground"),
    ("ss-02.jpg", 878, 706, 6, 12, "[thin] hex edge, over green ground"),
    ("ss-02.jpg", 878, 742, 6, 14, "ground outside grid, green"),
    ("ss-02.jpg", 1085, 350, 24, 24, "hex edge, enemy half of board"),

    # --- painted / VFX register (not chrome) --------------------------------
    ("ss-03.jpg", 1150, 500, 90, 60, "rank card red ground"),
    ("ss-09.jpg", 720, 590, 50, 40, "ability VFX, magenta"),
]


def measure(path, x, y, w, h):
    raw = subprocess.run(
        ["ffmpeg", "-v", "error", "-i", path,
         "-vf", f"crop={w}:{h}:{x}:{y}",
         "-f", "rawvideo", "-pix_fmt", "rgb24", "-"],
        capture_output=True, check=True).stdout
    px = [tuple(raw[i:i + 3]) for i in range(0, len(raw), 3)]
    mode, n = collections.Counter(px).most_common(1)[0]
    mean = tuple(round(sum(p[c] for p in px) / len(px)) for c in range(3))
    return mode, n / len(px), mean, min(px, key=sum), max(px, key=sum)


if __name__ == "__main__":
    hx = lambda c: "#%02X%02X%02X" % c
    print(f"{'region':44} {'img':10} {'mode':8}{'share':>6}  "
          f"{'mean':8} {'darkest':8} {'lightest':8}")
    for path, x, y, w, h, label in REGIONS:
        mode, share, mean, lo, hi = measure(path, x, y, w, h)
        print(f"{label:44} {path:10} {hx(mode)}{share:6.0%}  "
              f"{hx(mean)} {hx(lo)} {hx(hi)}")
