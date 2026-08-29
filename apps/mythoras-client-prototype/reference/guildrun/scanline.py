#!/usr/bin/env python3
"""Dump a 1px-wide row or column of an image as hex, for locating edges.

Usage: python3 scanline.py <image> row <y> <x0> <len>
       python3 scanline.py <image> col <x> <y0> <len>
"""

import subprocess
import sys


def strip(path, w, h, x, y):
    raw = subprocess.run(
        ["ffmpeg", "-v", "error", "-i", path,
         "-vf", f"crop={w}:{h}:{x}:{y}",
         "-f", "rawvideo", "-pix_fmt", "rgb24", "-"],
        capture_output=True, check=True).stdout
    return [tuple(raw[i:i + 3]) for i in range(0, len(raw), 3)]


if __name__ == "__main__":
    img, axis, fixed, start, length = (
        sys.argv[1], sys.argv[2], *map(int, sys.argv[3:6]))
    if axis == "row":
        px = strip(img, length, 1, start, fixed)
        coords = [(start + i, fixed) for i in range(length)]
    else:
        px = strip(img, 1, length, fixed, start)
        coords = [(fixed, start + i) for i in range(length)]
    for (x, y), p in zip(coords, px):
        print(f"{x},{y}  #%02X%02X%02X  lum={sum(p) // 3}" % p)
