#!/usr/bin/env python3
from __future__ import annotations

import base64
import io
import zipfile
from pathlib import Path
from urllib.parse import quote
from urllib.request import Request, urlopen

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "normalized"
RAW = ROOT / "raw"
ZIP_PATH = ROOT / "partner_logos.zip"
SIZE, PAD = 512, 48
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"


def fetch(url: str) -> bytes:
    req = Request(url, headers={"User-Agent": UA, "Accept": "*/*", "Referer": "https://www.alkhidmat.com/"})
    with urlopen(req, timeout=40) as r:
        return r.read()


def to_rgba(img: Image.Image) -> Image.Image:
    return img.convert("RGBA") if img.mode != "RGBA" else img


def knock_out_bg(img: Image.Image, threshold: int = 28) -> Image.Image:
    """Make near-black OR near-white uniform backgrounds transparent."""
    img = to_rgba(img)
    pixels = img.load()
    w, h = img.size
    # sample corners
    corners = [pixels[0, 0], pixels[w - 1, 0], pixels[0, h - 1], pixels[w - 1, h - 1]]
    avg = tuple(sum(c[i] for c in corners) // 4 for i in range(3))
    # only knock out if corners are very dark or very light and similar
    dark = all(v < 40 for v in avg)
    light = all(v > 230 for v in avg)
    if not (dark or light):
        return img
    out = img.copy()
    px = out.load()
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if dark and r < threshold and g < threshold and b < threshold:
                px[x, y] = (r, g, b, 0)
            elif light and r > 255 - threshold and g > 255 - threshold and b > 255 - threshold:
                px[x, y] = (r, g, b, 0)
    return out


def normalize(img: Image.Image, knockout: bool = True) -> Image.Image:
    img = to_rgba(img)
    if knockout:
        img = knock_out_bg(img)
    # trim transparent edges
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
    max_side = SIZE - PAD * 2
    img.thumbnail((max_side, max_side), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    canvas.paste(img, ((SIZE - img.width) // 2, (SIZE - img.height) // 2), img)
    return canvas


def save_slug(slug: str, img: Image.Image, knockout: bool = True) -> None:
    normalize(img, knockout=knockout).save(OUT / f"{slug}.png", "PNG", optimize=True)
    print(f"saved {slug}")


def from_data_url(data_url: str) -> Image.Image:
    header, b64 = data_url.split(",", 1)
    return Image.open(io.BytesIO(base64.b64decode(b64)))


def main() -> None:
    OUT.mkdir(exist_ok=True)
    RAW.mkdir(exist_ok=True)

    # TLTA full seal
    tlta = fetch("https://timelinetherapy.com/wp-content/uploads/2022/03/Screenshot_4.png")
    (RAW / "06_tlta.bin").write_bytes(tlta)
    save_slug("06_tlta", Image.open(io.BytesIO(tlta)))

    # Prefer New-Project-1 if it's a clearer TLTA mark (inspect size)
    alt = fetch("https://timelinetherapy.com/wp-content/uploads/2022/03/New-Project-1.png")
    alt_img = Image.open(io.BytesIO(alt))
    print("tlta alt size", alt_img.size)

    # Alkhidmat SVG via browser-exported PNG if present
    export = ROOT / "alkhidmat_export.png"
    if export.exists():
        save_slug("21_aghosh", Image.open(export), knockout=False)
    else:
        # Fallback: try SVG rendered externally later
        svg = fetch("https://www.alkhidmat.com/assets/images/AK_Logo%20Minimal%20Version.svg")
        (RAW / "21_aghosh.svg").write_bytes(svg)
        print("SVG saved; awaiting canvas export")

    # Improve CTG / ABNLP black backgrounds if files exist
    for slug in ["03_ctg", "05_abnlp", "07_abnlp_coaching", "02_nayatel", "18_telenor"]:
        f = OUT / f"{slug}.png"
        if not f.exists():
            continue
        # re-normalize from raw if available else from current
        raw = RAW / f"{slug}.bin"
        if raw.exists():
            try:
                img = Image.open(io.BytesIO(raw.read_bytes()))
                img.load()
                save_slug(slug, img)
                continue
            except Exception:
                pass
        save_slug(slug, Image.open(f))

    # Rebuild zip
    names = {
        "01_air_university": "Air University",
        "02_nayatel": "Nayatel",
        "03_ctg": "China Three Gorges Corporation (CTG)",
        "04_paf": "Pakistan Air Force (PAF)",
        "05_abnlp": "ABNLP (American Board of NLP)",
        "06_tlta": "Time Line Therapy Association (TLTA)",
        "07_abnlp_coaching": "Coaching Division of The American Board of NLP",
        "08_wah_medical_college": "Wah Medical College",
        "09_army_medical_college": "Army Medical College (AMC)",
        "10_hubco_laraib": "HUBCO / Laraib Energy Ltd",
        "11_fast_nuces": "FAST / NUCES",
        "12_wapda": "WAPDA",
        "13_nust": "NUST",
        "14_iest": "IEST (Air University)",
        "15_pide": "PIDE",
        "16_pips": "PIPS",
        "17_shifa": "Shifa International Hospitals Ltd.",
        "18_telenor": "Telenor",
        "19_sp_global": "S&P Global",
        "20_comsats": "COMSATS University Islamabad",
        "21_aghosh": "Aghosh (Alkhidmat Foundation)",
    }
    if ZIP_PATH.exists():
        ZIP_PATH.unlink()
    with zipfile.ZipFile(ZIP_PATH, "w", zipfile.ZIP_DEFLATED) as zf:
        present = []
        for slug, label in names.items():
            f = OUT / f"{slug}.png"
            assert f.exists(), slug
            img = Image.open(f)
            assert img.size == (512, 512), (slug, img.size)
            zf.write(f, arcname=f"{slug}.png")
            present.append(f"{slug}.png — {label}")
        zf.writestr(
            "README.txt",
            "\n".join(
                [
                    "Partner logos for TalenTiT website",
                    "All files: 512x512 PNG, transparent background, logo centered.",
                    "",
                    "Trademark notice: logos belong to their respective owners.",
                    "Confirm permission before public commercial use.",
                    "",
                    "Included:",
                    *present,
                    "",
                    "Notes:",
                    "- 14_iest uses the Air University logo (IEST is under AU).",
                    "- 21_aghosh uses Alkhidmat Foundation branding (Aghosh is an Alkhidmat program).",
                    "- 07_abnlp_coaching uses the ABNLP mark (separate coaching logo unavailable).",
                ]
            )
            + "\n",
        )
    print("ZIP", ZIP_PATH, ZIP_PATH.stat().st_size)


if __name__ == "__main__":
    main()
