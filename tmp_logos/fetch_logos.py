#!/usr/bin/env python3
"""Download partner logos and normalize to identical square PNGs."""

from __future__ import annotations

import io
import re
import zipfile
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

from PIL import Image

ROOT = Path(__file__).resolve().parent
RAW = ROOT / "raw"
OUT = ROOT / "normalized"
ZIP_PATH = ROOT / "partner_logos.zip"

SIZE = 512  # final square canvas
PAD = 48  # breathing room inside canvas

# Prefer official / well-known domains for Clearbit-style lookup
LOGOS = [
    ("01_air_university", "Air University", ["au.edu.pk", "airuniversity.edu.pk"]),
    ("02_nayatel", "Nayatel", ["nayatel.com"]),
    ("03_ctg", "China Three Gorges Corporation", ["ctg.com.cn", "ctg.com"]),
    ("04_paf", "Pakistan Air Force", ["paf.gov.pk"]),
    ("05_abnlp", "American Board of NLP", ["abh-abnlp.com", "abnlp.com"]),
    ("06_tlta", "Time Line Therapy Association", ["timeline.com", "tlta.com", "abh-abnlp.com"]),
    ("07_abnlp_coaching", "Coaching Division ABNLP", ["abh-abnlp.com"]),
    ("08_wah_medical_college", "Wah Medical College", ["wahmedicalcollege.edu.pk"]),
    ("09_army_medical_college", "Army Medical College", ["amcollege.edu.pk", "numspak.edu.pk"]),
    ("10_hubco_laraib", "HUBCO / Laraib Energy", ["hubpower.com", "laraibenergy.com"]),
    ("11_fast_nuces", "FAST / NUCES", ["nu.edu.pk", "fast.edu.pk"]),
    ("12_wapda", "WAPDA", ["wapda.gov.pk"]),
    ("13_nust", "NUST", ["nust.edu.pk"]),
    ("14_iest", "IEST / Air University", ["au.edu.pk"]),
    ("15_pide", "PIDE", ["pide.org.pk"]),
    ("16_pips", "PIPS", ["pips.gov.pk"]),
    ("17_shifa", "Shifa International Hospitals", ["shifa.com.pk"]),
    ("18_telenor", "Telenor", ["telenor.com.pk", "telenor.com"]),
    ("19_sp_global", "S&P Global", ["spglobal.com"]),
    ("20_comsats", "COMSATS University Islamabad", ["comsats.edu.pk", "cuonline.pk"]),
    ("21_aghosh", "Aghosh Alkhidmat", ["alkhidmat.org", "alkhidmatfoundation.org"]),
]

# Extra direct URL fallbacks (Wikimedia / CDN) when Clearbit fails
DIRECT = {
    "03_ctg": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/China_Three_Gorges_Corporation_logo.svg/512px-China_Three_Gorges_Corporation_logo.svg.png",
    ],
    "13_nust": [
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/NUST_logo.png/320px-NUST_logo.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/NUST_Pakistan_logo.svg/512px-NUST_Pakistan_logo.svg.png",
    ],
    "18_telenor": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Telenor_logo.svg/512px-Telenor_logo.svg.png",
    ],
    "19_sp_global": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/S%26P_Global_logo.svg/512px-S%26P_Global_logo.svg.png",
    ],
    "12_wapda": [
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/WAPDA_logo.png/320px-WAPDA_logo.png",
    ],
}


def fetch_bytes(url: str, timeout: int = 25) -> bytes | None:
    req = Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (compatible; TalenTiTLogoFetcher/1.0)",
            "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
        },
    )
    try:
        with urlopen(req, timeout=timeout) as resp:
            data = resp.read()
            ctype = (resp.headers.get("Content-Type") or "").lower()
            if "html" in ctype:
                return None
            if len(data) < 800:
                return None
            return data
    except (HTTPError, URLError, TimeoutError, ValueError):
        return None


def candidate_urls(slug: str, domains: list[str]) -> list[str]:
    urls: list[str] = []
    urls.extend(DIRECT.get(slug, []))
    for domain in domains:
        urls.append(f"https://logo.clearbit.com/{domain}?size=512")
        urls.append(f"https://www.google.com/s2/favicons?domain={domain}&sz=256")
        urls.append(f"https://icons.duckduckgo.com/ip3/{domain}.ico")
    return urls


def open_image(data: bytes) -> Image.Image | None:
    try:
        img = Image.open(io.BytesIO(data))
        img.load()
        return img
    except Exception:
        return None


def normalize(img: Image.Image) -> Image.Image:
    # Convert to RGBA
    if img.mode in ("P", "LA"):
        img = img.convert("RGBA")
    elif img.mode != "RGBA":
        img = img.convert("RGBA")

    # Trim mostly-transparent / near-white borders lightly by getting bbox of non-near-white
    rgba = img.copy()
    datas = rgba.getdata()
    # Simple content bbox: any pixel not nearly transparent and not nearly pure white
    min_x, min_y, max_x, max_y = rgba.width, rgba.height, 0, 0
    found = False
    for y in range(rgba.height):
        for x in range(rgba.width):
            r, g, b, a = rgba.getpixel((x, y))
            if a < 20:
                continue
            if r > 245 and g > 245 and b > 245:
                continue
            found = True
            min_x = min(min_x, x)
            min_y = min(min_y, y)
            max_x = max(max_x, x)
            max_y = max(max_y, y)
    if found and max_x > min_x and max_y > min_y:
        rgba = rgba.crop((min_x, min_y, max_x + 1, max_y + 1))

    max_w = SIZE - PAD * 2
    max_h = SIZE - PAD * 2
    rgba.thumbnail((max_w, max_h), Image.Resampling.LANCZOS)

    canvas = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    x = (SIZE - rgba.width) // 2
    y = (SIZE - rgba.height) // 2
    canvas.paste(rgba, (x, y), rgba)
    return canvas


def main() -> None:
    RAW.mkdir(parents=True, exist_ok=True)
    OUT.mkdir(parents=True, exist_ok=True)

    report: list[tuple[str, str, str]] = []

    for slug, name, domains in LOGOS:
        print(f"Fetching: {name} ...")
        data = None
        used = None
        for url in candidate_urls(slug, domains):
            data = fetch_bytes(url)
            if not data:
                continue
            img = open_image(data)
            if not img:
                continue
            # Reject tiny favicons when something better might exist later in list,
            # but keep if it's our only option after loop — so accept >= 64px now
            if min(img.size) < 48:
                continue
            used = url
            raw_path = RAW / f"{slug}.bin"
            raw_path.write_bytes(data)
            try:
                # Preserve format when possible
                ext = "png"
                if "jpeg" in (img.format or "").lower() or "jpg" in url.lower():
                    ext = "jpg"
                elif "webp" in (img.format or "").lower():
                    ext = "webp"
                elif "gif" in (img.format or "").lower():
                    ext = "gif"
                (RAW / f"{slug}.{ext}").write_bytes(data)
            except Exception:
                pass

            normalized = normalize(img)
            out_path = OUT / f"{slug}.png"
            normalized.save(out_path, "PNG", optimize=True)
            report.append((slug, name, f"OK via {used}"))
            print(f"  OK ({img.size[0]}x{img.size[1]}) -> {out_path.name}")
            break
        else:
            report.append((slug, name, "FAILED"))
            print("  FAILED")

    # Zip normalized logos
    if ZIP_PATH.exists():
        ZIP_PATH.unlink()
    with zipfile.ZipFile(ZIP_PATH, "w", compression=zipfile.ZIP_DEFLATED) as zf:
        for png in sorted(OUT.glob("*.png")):
            zf.write(png, arcname=png.name)
        # README
        lines = [
            "Partner logos for TalenTiT website",
            f"Normalized size: {SIZE}x{SIZE} PNG (transparent, logo centered)",
            "",
            "Status:",
        ]
        for slug, name, status in report:
            lines.append(f"- {slug} | {name} | {status}")
        zf.writestr("README.txt", "\n".join(lines) + "\n")

    ok = sum(1 for _, _, s in report if s.startswith("OK"))
    print(f"\nDone: {ok}/{len(LOGOS)} logos")
    print(f"Zip: {ZIP_PATH}")


if __name__ == "__main__":
    main()
