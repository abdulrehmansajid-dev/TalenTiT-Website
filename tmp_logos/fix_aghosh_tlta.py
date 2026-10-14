#!/usr/bin/env python3
from __future__ import annotations

import io
import re
import zipfile
from pathlib import Path
from urllib.parse import urljoin
from urllib.request import Request, urlopen

from PIL import Image

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "normalized"
RAW = ROOT / "raw"
ZIP_PATH = ROOT / "partner_logos.zip"
SIZE, PAD = 512, 56
UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
)


def fetch(url: str) -> bytes | None:
    try:
        req = Request(
            url,
            headers={
                "User-Agent": UA,
                "Accept": "*/*",
                "Referer": urljoin(url, "/"),
            },
        )
        with urlopen(req, timeout=40) as r:
            return r.read()
    except Exception as e:
        print("fail", url[:100], e.__class__.__name__, e)
        return None


def normalize(img: Image.Image) -> Image.Image:
    if img.mode != "RGBA":
        img = img.convert("RGBA")
    max_side = SIZE - PAD * 2
    img.thumbnail((max_side, max_side), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    canvas.paste(img, ((SIZE - img.width) // 2, (SIZE - img.height) // 2), img)
    return canvas


def save(slug: str, data: bytes, src: str) -> bool:
    # Try raster first
    try:
        if b"<svg" not in data[:1500].lower():
            img = Image.open(io.BytesIO(data))
            img.load()
            if max(img.size) >= 64:
                (RAW / f"{slug}.bin").write_bytes(data)
                normalize(img).save(OUT / f"{slug}.png", "PNG", optimize=True)
                print(f"OK {slug} raster {img.size} <- {src}")
                return True
    except Exception:
        pass

    # SVG via cairosvg if available
    if b"<svg" in data[:2000].lower() or src.lower().endswith(".svg"):
        try:
            import cairosvg

            png = cairosvg.svg2png(bytestring=data, output_width=800)
            img = Image.open(io.BytesIO(png))
            img.load()
            (RAW / f"{slug}.bin").write_bytes(data)
            normalize(img).save(OUT / f"{slug}.png", "PNG", optimize=True)
            print(f"OK {slug} svg->png {img.size} <- {src}")
            return True
        except Exception as e:
            print("svg convert fail", e)
            # crude fallback: try svglib/reportlab
            try:
                from io import BytesIO

                from reportlab.graphics import renderPM
                from svglib.svglib import svg2rlg

                drawing = svg2rlg(BytesIO(data))
                if drawing is None:
                    raise RuntimeError("svg2rlg returned None")
                png_io = BytesIO()
                renderPM.drawToFile(drawing, png_io, fmt="PNG")
                img = Image.open(BytesIO(png_io.getvalue()))
                img.load()
                (RAW / f"{slug}.bin").write_bytes(data)
                normalize(img).save(OUT / f"{slug}.png", "PNG", optimize=True)
                print(f"OK {slug} svglib {img.size} <- {src}")
                return True
            except Exception as e2:
                print("svglib fail", e2)
    return False


def scrape_imgs(url: str) -> list[str]:
    data = fetch(url)
    if not data:
        return []
    html = data.decode("utf-8", "ignore")
    urls = []
    for m in re.findall(r"""(?:src|href)=["']([^"']+\.(?:png|jpe?g|webp|svg|gif))["']""", html, re.I):
        full = urljoin(url, m)
        low = full.lower()
        if any(k in low for k in ("logo", "brand", "alkhidmat", "aghosh", "timeline", "tlta")):
            urls.append(full)
    # also meta images
    for m in re.findall(r"""content=["'](https?://[^"']+\.(?:png|jpe?g|webp))["']""", html, re.I):
        urls.append(m)
    out, seen = [], set()
    for u in urls:
        if u not in seen:
            seen.add(u)
            out.append(u)
    return out


def rebuild_zip() -> None:
    names = [
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
    if ZIP_PATH.exists():
        ZIP_PATH.unlink()
    with zipfile.ZipFile(ZIP_PATH, "w", zipfile.ZIP_DEFLATED) as zf:
        for slug in names:
            f = OUT / f"{slug}.png"
            if f.exists():
                zf.write(f, arcname=f"{slug}.png")
                img = Image.open(f)
                print("zip", slug, img.size, f.stat().st_size)
            else:
                print("MISSING", slug)
        zf.writestr(
            "README.txt",
            "Partner logos 512x512 PNG transparent.\n"
            "Trademarks belong to owners; confirm permission before commercial use.\n"
            "14_iest = Air University mark.\n"
            "21_aghosh = Alkhidmat Foundation branding (Aghosh program).\n"
            "07_abnlp_coaching may use ABNLP mark.\n",
        )
    print("Zip rebuilt:", ZIP_PATH, ZIP_PATH.stat().st_size)


def main() -> None:
    RAW.mkdir(exist_ok=True)
    OUT.mkdir(exist_ok=True)

    aghosh_candidates = [
        "https://www.alkhidmat.com/assets/images/alkhidmat-logo-bluebg.svg",
        "https://www.alkhidmat.com/assets/images/AK_Logo%20Minimal%20Version.svg",
        "https://www.alkhidmat.com/assets/images/AK_Logo Minimal Version.svg",
        "https://crystalpng.com/wp-content/uploads/2022/03/alkhidmat-logo.png",
        "https://www.freepnglogos.com/uploads/alkhidmat-logo-png.png",
    ]
    # scrape more
    for page in [
        "https://www.alkhidmat.com/",
        "https://www.alkhidmat.com/programs/aghosh-home",
        "https://en.wikipedia.org/wiki/Alkhidmat_Foundation_Pakistan",
    ]:
        found = scrape_imgs(page)
        print("scrape", page, "->", found[:8])
        aghosh_candidates.extend(found)

    # Prefer real Alkhidmat, skip tika/unicef
    filtered = []
    for u in aghosh_candidates:
        low = u.lower()
        if any(x in low for x in ("tika", "unicef", "favicon", "icon-")):
            continue
        if u not in filtered:
            filtered.append(u)

    ok = False
    for u in filtered:
        data = fetch(u)
        if data and save("21_aghosh", data, u):
            ok = True
            break
    if not ok:
        print("FAILED aghosh")

    # Better TLTA
    tlta_candidates = [
        "https://www.timelinetherapy.com/",
        "https://timelinetherapy.com/",
        "https://abh-abnlp.com/",
    ]
    urls = []
    for page in tlta_candidates:
        found = scrape_imgs(page)
        print("tlta scrape", page, found[:10])
        urls.extend(found)
    # direct guesses
    urls.extend(
        [
            "https://abh-abnlp.com/wp-content/uploads/2022/10/ABH-logo.png",
        ]
    )
    prefer = [u for u in urls if "timeline" in u.lower() or "tlta" in u.lower()]
    rest = [u for u in urls if u not in prefer]
    for u in prefer + rest:
        data = fetch(u)
        if data and save("06_tlta", data, u):
            break

    rebuild_zip()


if __name__ == "__main__":
    main()
