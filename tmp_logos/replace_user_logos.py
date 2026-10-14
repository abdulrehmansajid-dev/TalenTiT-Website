#!/usr/bin/env python3
"""Compress user-provided logos and write WebP partners assets."""
from __future__ import annotations

import io
from pathlib import Path

from PIL import Image

ASSETS = Path(r"C:\Users\user\.cursor\projects\f-MERN-TalenTiT\assets")
DEST = Path(__file__).resolve().parents[1] / "src" / "assets" / "partners"
SIZE = 240
QUALITY = 80

# (dest slug, source filename substring)
REPLACEMENTS = [
    ("03_ctg", "CTG-1485b8e3"),
    ("16_pips", "PIPS-3f6116df"),
    ("19_sp_global", "S_P_Global-941af9dc"),
    ("06_tlta", "Time_Line_Therapy_Association-52f827c1"),
    # Filename says Shifa, but image is the classic WAPDA crest — apply to WAPDA.
    ("12_wapda", "Shifa-1ee32d92"),
    ("10_hubco_laraib", "HUBCO-bbcacc57"),
]


def find_src(token: str) -> Path:
    matches = list(ASSETS.glob(f"*{token}*"))
    if not matches:
        raise FileNotFoundError(token)
    return matches[0]


def knock_uniform_bg(img: Image.Image, threshold: int = 24) -> Image.Image:
    img = img.convert("RGBA")
    px = img.load()
    w, h = img.size
    corners = [px[0, 0], px[w - 1, 0], px[0, h - 1], px[w - 1, h - 1]]
    avg = tuple(sum(c[i] for c in corners) // 4 for i in range(3))
    dark = all(v < 35 for v in avg)
    light = all(v > 235 for v in avg)
    if not (dark or light):
        return img
    out = img.copy()
    opx = out.load()
    for y in range(h):
        for x in range(w):
            r, g, b, a = opx[x, y]
            if dark and r < threshold and g < threshold and b < threshold:
                opx[x, y] = (r, g, b, 0)
            elif light and r > 255 - threshold and g > 255 - threshold and b > 255 - threshold:
                opx[x, y] = (r, g, b, 0)
    return out


def normalize(img: Image.Image) -> Image.Image:
    img = knock_uniform_bg(img)
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
    # keep aspect; pad to square
    pad = 16
    max_side = SIZE - pad * 2
    img.thumbnail((max_side, max_side), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    canvas.paste(img, ((SIZE - img.width) // 2, (SIZE - img.height) // 2), img)
    return canvas


def main() -> None:
    DEST.mkdir(parents=True, exist_ok=True)
    for slug, token in REPLACEMENTS:
        src = find_src(token)
        print(f"{slug} <- {src.name} ({src.stat().st_size})")
        data = src.read_bytes()
        img = Image.open(io.BytesIO(data))
        img.load()
        out = normalize(img)
        dest = DEST / f"{slug}.webp"
        out.save(dest, "WEBP", quality=QUALITY, method=6)
        print(f"  -> {dest.name} {dest.stat().st_size}")


if __name__ == "__main__":
    main()
