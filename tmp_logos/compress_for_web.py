#!/usr/bin/env python3
"""Compress partner logos to optimized WebP for the website."""
from __future__ import annotations

from pathlib import Path

from PIL import Image

SRC = Path(__file__).resolve().parent / "normalized"
DEST = Path(__file__).resolve().parents[1] / "src" / "assets" / "partners"
SIZE = 200  # square export for retina-friendly ~100px display
WEBP_QUALITY = 78

NAMES = [
    "01_air_university",
    "02_nayatel",
    "03_ctg",
    "04_paf",
    "05_abnlp",
    "06_tlta",
    "07_abnlp_coaching",
    "08_wah_medical_college",
    "09_army_medical_college",
    "10_hubco_laraib",
    "11_fast_nuces",
    "12_wapda",
    "13_nust",
    "14_iest",
    "15_pide",
    "16_pips",
    "17_shifa",
    "18_telenor",
    "19_sp_global",
    "20_comsats",
    "21_aghosh",
]


def main() -> None:
    DEST.mkdir(parents=True, exist_ok=True)
    total_in = total_out = 0
    for slug in NAMES:
        src = SRC / f"{slug}.png"
        if not src.exists():
            print("MISSING", slug)
            continue
        img = Image.open(src).convert("RGBA")
        img = img.resize((SIZE, SIZE), Image.Resampling.LANCZOS)
        out = DEST / f"{slug}.webp"
        img.save(out, "WEBP", quality=WEBP_QUALITY, method=6)
        total_in += src.stat().st_size
        total_out += out.stat().st_size
        print(f"{slug}.webp  {src.stat().st_size:7d} -> {out.stat().st_size:6d}")
    print(f"Total {total_in} -> {total_out} ({100 * total_out / max(total_in, 1):.1f}%)")


if __name__ == "__main__":
    main()
