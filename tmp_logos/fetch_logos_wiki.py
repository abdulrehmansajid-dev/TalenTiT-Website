#!/usr/bin/env python3
"""Fetch logos via Wikipedia pageimages + Wikimedia + a few official URLs, normalize to 512x512."""

from __future__ import annotations

import io
import json
import re
import zipfile
from pathlib import Path
from urllib.parse import quote
from urllib.request import Request, urlopen

from PIL import Image

ROOT = Path(__file__).resolve().parent
RAW = ROOT / "raw"
OUT = ROOT / "normalized"
ZIP_PATH = ROOT / "partner_logos.zip"
SIZE = 512
PAD = 56
UA = "TalenTiTLogoBot/1.0 (educational site asset prep; contact info@talentithospitality.com)"

ITEMS = [
    ("01_air_university", "Air University", ["Air University, Islamabad", "Air University Pakistan"]),
    ("02_nayatel", "Nayatel", ["Nayatel"]),
    ("03_ctg", "China Three Gorges Corporation", ["China Three Gorges Corporation"]),
    ("04_paf", "Pakistan Air Force", ["Pakistan Air Force"]),
    ("05_abnlp", "American Board of NLP", []),
    ("06_tlta", "Time Line Therapy Association", ["Time Line Therapy"]),
    ("07_abnlp_coaching", "Coaching Division ABNLP", []),
    ("08_wah_medical_college", "Wah Medical College", ["Wah Medical College"]),
    ("09_army_medical_college", "Army Medical College", ["Army Medical College", "National University of Medical Sciences"]),
    ("10_hubco_laraib", "HUBCO / Laraib Energy", ["Hub Power Company", "HUBCO"]),
    ("11_fast_nuces", "FAST / NUCES", ["National University of Computer and Emerging Sciences"]),
    ("12_wapda", "WAPDA", ["Water and Power Development Authority"]),
    ("13_nust", "NUST", ["National University of Sciences and Technology (Pakistan)"]),
    ("14_iest", "IEST / Air University", ["Air University, Islamabad"]),
    ("15_pide", "PIDE", ["Pakistan Institute of Development Economics"]),
    ("16_pips", "PIPS", ["Pakistan Institute for Parliamentary Services"]),
    ("17_shifa", "Shifa International Hospitals", ["Shifa International Hospitals"]),
    ("18_telenor", "Telenor", ["Telenor", "Telenor Pakistan"]),
    ("19_sp_global", "S&P Global", ["S&P Global"]),
    ("20_comsats", "COMSATS University Islamabad", ["COMSATS University Islamabad"]),
    ("21_aghosh", "Aghosh Alkhidmat", ["Alkhidmat Foundation"]),
]

EXTRA_URLS = {
    "01_air_university": [
        "https://au.edu.pk/Assets/images/logo.png",
    ],
    "02_nayatel": [
        "https://play-lh.googleusercontent.com/placeholder",  # skip
    ],
    "05_abnlp": [
        "https://abh-abnlp.com/wp-content/uploads/2024/01/cropped-ABH-ABNLP-logo.png",
        "https://abh-abnlp.com/favicon.ico",
    ],
    "11_fast_nuces": [
        "https://nu.edu.pk/Content/images/logo.png",
    ],
    "13_nust": [
        "https://commons.wikimedia.org/wiki/Special:FilePath/Final_logo_8_dec.jpg?width=800",
    ],
    "18_telenor": [
        "https://commons.wikimedia.org/wiki/Special:FilePath/Telenor_logo.svg?width=800",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Telenor_logo.svg/800px-Telenor_logo.svg.png",
    ],
    "19_sp_global": [
        "https://commons.wikimedia.org/wiki/Special:FilePath/S%26P_Global_logo.svg?width=800",
        "https://www.spglobal.com/_media/images/logo-spglobal.svg",
    ],
    "20_comsats": [
        "https://commons.wikimedia.org/wiki/Special:FilePath/COMSATS_new_logo.jpg?width=800",
        "https://www.comsats.edu.pk/Images/logo.png",
    ],
    "21_aghosh": [
        "https://commons.wikimedia.org/wiki/Special:FilePath/Alkhidmat_Foundation_Pakistan.png?width=800",
    ],
    "04_paf": [
        "https://commons.wikimedia.org/wiki/Special:FilePath/Roundel_of_Pakistan_%E2%80%93_Air_Force.svg?width=800",
        "https://commons.wikimedia.org/wiki/Special:FilePath/Pakistan_Air_Force_Ensign.svg?width=800",
    ],
    "03_ctg": [
        "https://commons.wikimedia.org/wiki/Special:FilePath/China_Three_Gorges_Corporation_logo.svg?width=800",
    ],
    "12_wapda": [
        "https://commons.wikimedia.org/wiki/Special:FilePath/WAPDA_logo.png?width=800",
    ],
}


def fetch(url: str, timeout: int = 35) -> bytes | None:
    req = Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
    try:
        with urlopen(req, timeout=timeout) as resp:
            data = resp.read()
            if len(data) < 300:
                return None
            return data
    except Exception as e:
        print(f"    fetch err: {e.__class__.__name__}")
        return None


def wiki_thumb(title: str, size: int = 800) -> str | None:
    api = (
        "https://en.wikipedia.org/w/api.php?"
        f"action=query&titles={quote(title)}&prop=pageimages&format=json&pithumbsize={size}&pilicense=any"
    )
    data = fetch(api)
    if not data:
        return None
    try:
        js = json.loads(data.decode("utf-8", errors="ignore"))
        pages = js.get("query", {}).get("pages", {})
        for page in pages.values():
            thumb = page.get("thumbnail", {}).get("source")
            if thumb:
                return thumb
            original = page.get("original", {}).get("source")
            if original:
                return original
    except Exception:
        return None
    return None


def open_img(data: bytes) -> Image.Image | None:
    try:
        if b"<svg" in data[:1000].lower():
            return None
        img = Image.open(io.BytesIO(data))
        img.load()
        return img
    except Exception:
        return None


def normalize(img: Image.Image) -> Image.Image:
    if img.mode != "RGBA":
        img = img.convert("RGBA")
    min_x, min_y, max_x, max_y = img.width, img.height, 0, 0
    found = False
    px = img.load()
    step = max(1, min(img.width, img.height) // 400)
    for y in range(0, img.height, step):
        for x in range(0, img.width, step):
            r, g, b, a = px[x, y]
            if a < 18:
                continue
            if r > 248 and g > 248 and b > 248:
                continue
            found = True
            min_x = min(min_x, x)
            min_y = min(min_y, y)
            max_x = max(max_x, x)
            max_y = max(max_y, y)
    if found and max_x > min_x and max_y > min_y:
        # expand a bit for step sampling
        min_x = max(0, min_x - step)
        min_y = max(0, min_y - step)
        max_x = min(img.width - 1, max_x + step)
        max_y = min(img.height - 1, max_y + step)
        img = img.crop((min_x, min_y, max_x + 1, max_y + 1))

    max_side = SIZE - PAD * 2
    img.thumbnail((max_side, max_side), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    canvas.paste(img, ((SIZE - img.width) // 2, (SIZE - img.height) // 2), img)
    return canvas


def save(slug: str, data: bytes, source: str) -> bool:
    img = open_img(data)
    if not img:
        return False
    if max(img.size) < 80:
        return False
    (RAW / f"{slug}.src").write_bytes(data)
    normalize(img).save(OUT / f"{slug}.png", "PNG", optimize=True)
    print(f"  OK {img.size[0]}x{img.size[1]} <- {source}")
    return True


def main() -> None:
    RAW.mkdir(parents=True, exist_ok=True)
    OUT.mkdir(parents=True, exist_ok=True)
    report = []

    for slug, name, wiki_titles in ITEMS:
        print(f"\n{name}")
        ok = False

        # Wikipedia thumbs
        for title in wiki_titles:
            thumb = wiki_thumb(title)
            if not thumb:
                continue
            data = fetch(thumb)
            if data and save(slug, data, f"wikipedia:{title}"):
                ok = True
                break

        # Extra URLs
        if not ok:
            for url in EXTRA_URLS.get(slug, []):
                if "placeholder" in url:
                    continue
                data = fetch(url)
                if data and save(slug, data, url):
                    ok = True
                    break

        report.append((slug, name, "OK" if ok else "FAILED"))
        if not ok:
            print("  FAILED")

    if ZIP_PATH.exists():
        ZIP_PATH.unlink()
    with zipfile.ZipFile(ZIP_PATH, "w", zipfile.ZIP_DEFLATED) as zf:
        for png in sorted(OUT.glob("*.png")):
            zf.write(png, arcname=png.name)
        lines = [
            "Partner logos — TalenTiT",
            f"Format: {SIZE}x{SIZE} PNG, transparent, centered.",
            "Trademarks belong to their owners; verify usage rights before publishing.",
            "",
            "Files:",
        ]
        for slug, name, status in report:
            lines.append(f"- {slug}.png | {name} | {status}")
        zf.writestr("README.txt", "\n".join(lines) + "\n")

    print(f"\nSaved {sum(1 for *_, s in report if s=='OK')}/{len(ITEMS)}")
    print(ZIP_PATH)


if __name__ == "__main__":
    main()
