#!/usr/bin/env python3
"""Improved logo fetcher: Wikimedia + official site scrape + normalize to 512x512."""

from __future__ import annotations

import io
import re
import zipfile
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urljoin, urlparse
from urllib.request import Request, urlopen

from PIL import Image

ROOT = Path(__file__).resolve().parent
RAW = ROOT / "raw"
OUT = ROOT / "normalized"
ZIP_PATH = ROOT / "partner_logos.zip"
SIZE = 512
PAD = 56

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"

# Explicit high-quality / official / Wikimedia URLs first
DIRECT: dict[str, list[str]] = {
    "01_air_university": [
        "https://au.edu.pk/wp-content/uploads/2023/08/AU-Logo.png",
        "https://au.edu.pk/Assets/images/logo.png",
        "https://www.au.edu.pk/Pages/Images/logo.png",
    ],
    "02_nayatel": [
        "https://www.nayatel.com/wp-content/uploads/2019/07/nayatel-logo.png",
        "https://nayatel.com/wp-content/themes/nayatel/images/logo.png",
    ],
    "03_ctg": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/China_Three_Gorges_Corporation_logo.svg/800px-China_Three_Gorges_Corporation_logo.svg.png",
        "https://www.ctg.com.cn/images/logo.png",
    ],
    "04_paf": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Pakistan_Air_Force_Emblem.svg/512px-Pakistan_Air_Force_Emblem.svg.png",
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Pakistan_Air_Force_roundel.svg/512px-Pakistan_Air_Force_roundel.svg.png",
    ],
    "05_abnlp": [
        "https://abh-abnlp.com/wp-content/uploads/2023/01/abh-abnlp-logo.png",
        "https://abh-abnlp.com/wp-content/uploads/abh-logo.png",
    ],
    "06_tlta": [
        "https://abh-abnlp.com/wp-content/uploads/2023/01/timeline-therapy-logo.png",
        "https://www.timeline.com/images/logo.png",
    ],
    "07_abnlp_coaching": [
        "https://abh-abnlp.com/wp-content/uploads/2023/01/abh-abnlp-logo.png",
    ],
    "08_wah_medical_college": [
        "https://wahmedicalcollege.edu.pk/wp-content/uploads/2021/logo.png",
        "https://wahmedicalcollege.edu.pk/images/logo.png",
    ],
    "09_army_medical_college": [
        "https://amcollege.edu.pk/images/logo.png",
        "https://numspak.edu.pk/assets/images/logo.png",
        "https://www.amcollege.edu.pk/Content/images/logo.png",
    ],
    "10_hubco_laraib": [
        "https://www.hubpower.com/wp-content/uploads/2021/hubco-logo.png",
        "https://hubpower.com/assets/images/logo.png",
    ],
    "11_fast_nuces": [
        "https://nu.edu.pk/Content/images/logo.png",
        "https://www.nu.edu.pk/Content/Images/FAST-logo.png",
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/FAST_National_University_logo.png/320px-FAST_National_University_logo.png",
    ],
    "12_wapda": [
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/WAPDA_logo.png/480px-WAPDA_logo.png",
        "https://www.wapda.gov.pk/assets/images/logo.png",
    ],
    "13_nust": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Final_logo_8_dec.jpg/800px-Final_logo_8_dec.jpg",
        "https://nust.edu.pk/wp-content/uploads/2020/07/nust-logo.png",
        "https://nust.edu.pk/wp-content/themes/nust/images/logo.png",
    ],
    "14_iest": [
        "https://au.edu.pk/wp-content/uploads/2023/08/AU-Logo.png",
    ],
    "15_pide": [
        "https://pide.org.pk/wp-content/uploads/pide-logo.png",
        "https://pide.org.pk/wp-content/themes/pide/assets/images/logo.png",
    ],
    "16_pips": [
        "https://www.pips.gov.pk/assets/images/logo.png",
        "https://pips.gov.pk/images/logo.png",
    ],
    "17_shifa": [
        "https://www.shifa.com.pk/wp-content/uploads/shifa-logo.png",
        "https://www.shifa.com.pk/assets/images/logo.png",
    ],
    "18_telenor": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Telenor_logo.svg/800px-Telenor_logo.svg.png",
        "https://www.telenor.com.pk/wp-content/themes/telenor/assets/images/telenor-logo.svg",
    ],
    "19_sp_global": [
        "https://www.spglobal.com/_media/images/logo-spglobal.svg",
        "https://upload.wikimedia.org/wikipedia/commons/c/c5/S%26P_Global_logo.svg",
    ],
    "20_comsats": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/COMSATS_new_logo.jpg/800px-COMSATS_new_logo.jpg",
        "https://www.comsats.edu.pk/Images/logo.png",
        "https://islamabad.comsats.edu.pk/assets/images/logo.png",
    ],
    "21_aghosh": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Alkhidmat_Foundation_Pakistan.png/800px-Alkhidmat_Foundation_Pakistan.png",
        "https://alkhidmat.org/wp-content/uploads/alkhidmat-logo.png",
        "https://aghosh.us/wp-content/uploads/logo.png",
    ],
}

META = [
    ("01_air_university", "Air University", ["https://au.edu.pk/", "https://www.au.edu.pk/"]),
    ("02_nayatel", "Nayatel", ["https://www.nayatel.com/", "https://nayatel.com/"]),
    ("03_ctg", "China Three Gorges Corporation", ["https://www.ctg.com.cn/"]),
    ("04_paf", "Pakistan Air Force", ["https://www.paf.gov.pk/"]),
    ("05_abnlp", "American Board of NLP", ["https://abh-abnlp.com/"]),
    ("06_tlta", "Time Line Therapy Association", ["https://abh-abnlp.com/"]),
    ("07_abnlp_coaching", "Coaching Division ABNLP", ["https://abh-abnlp.com/"]),
    ("08_wah_medical_college", "Wah Medical College", ["https://wahmedicalcollege.edu.pk/"]),
    ("09_army_medical_college", "Army Medical College", ["https://amcollege.edu.pk/", "https://numspak.edu.pk/"]),
    ("10_hubco_laraib", "HUBCO / Laraib Energy", ["https://www.hubpower.com/"]),
    ("11_fast_nuces", "FAST / NUCES", ["https://nu.edu.pk/", "https://www.nu.edu.pk/"]),
    ("12_wapda", "WAPDA", ["https://www.wapda.gov.pk/"]),
    ("13_nust", "NUST", ["https://nust.edu.pk/"]),
    ("14_iest", "IEST / Air University", ["https://au.edu.pk/"]),
    ("15_pide", "PIDE", ["https://pide.org.pk/"]),
    ("16_pips", "PIPS", ["https://www.pips.gov.pk/", "https://pips.gov.pk/"]),
    ("17_shifa", "Shifa International Hospitals", ["https://www.shifa.com.pk/"]),
    ("18_telenor", "Telenor", ["https://www.telenor.com.pk/", "https://www.telenor.com/"]),
    ("19_sp_global", "S&P Global", ["https://www.spglobal.com/"]),
    ("20_comsats", "COMSATS University Islamabad", ["https://www.comsats.edu.pk/", "https://islamabad.comsats.edu.pk/"]),
    ("21_aghosh", "Aghosh Alkhidmat", ["https://alkhidmat.org/", "https://aghosh.us/"]),
]


def fetch(url: str, timeout: int = 30) -> bytes | None:
    req = Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
    try:
        with urlopen(req, timeout=timeout) as resp:
            data = resp.read()
            ctype = (resp.headers.get("Content-Type") or "").lower()
            if "text/html" in ctype and not url.lower().endswith((".svg", ".png", ".jpg", ".jpeg", ".webp", ".gif")):
                return None
            if len(data) < 400:
                return None
            return data
    except Exception:
        return None


def open_img(data: bytes) -> Image.Image | None:
    try:
        # Pillow may not open SVG; skip
        if data.lstrip().startswith(b"<svg") or b"<svg" in data[:500].lower():
            return None
        img = Image.open(io.BytesIO(data))
        img.load()
        return img
    except Exception:
        return None


def scrape_logo_urls(page_url: str) -> list[str]:
    html_b = fetch(page_url)
    if not html_b:
        return []
    try:
        html = html_b.decode("utf-8", errors="ignore")
    except Exception:
        return []

    urls: list[str] = []
    # og:image / twitter
    for pat in [
        r'property=["\']og:image["\']\s+content=["\']([^"\']+)["\']',
        r'content=["\']([^"\']+)["\']\s+property=["\']og:image["\']',
        r'rel=["\'](?:icon|shortcut icon|apple-touch-icon)["\'][^>]*href=["\']([^"\']+)["\']',
        r'href=["\']([^"\']+)["\'][^>]*rel=["\'](?:icon|shortcut icon|apple-touch-icon)["\']',
    ]:
        urls.extend(re.findall(pat, html, flags=re.I))

    # img tags with logo-ish names
    for src in re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html, flags=re.I):
        if re.search(r"logo|brand|emblem|seal", src, flags=re.I):
            urls.append(src)

    abs_urls = []
    for u in urls:
        abs_urls.append(urljoin(page_url, u))
    # de-dupe preserve order
    seen = set()
    out = []
    for u in abs_urls:
        if u not in seen:
            seen.add(u)
            out.append(u)
    return out


def normalize(img: Image.Image) -> Image.Image:
    if img.mode != "RGBA":
        img = img.convert("RGBA")

    # content bbox skip near-transparent / near-white
    min_x, min_y, max_x, max_y = img.width, img.height, 0, 0
    found = False
    px = img.load()
    for y in range(img.height):
        for x in range(img.width):
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
        img = img.crop((min_x, min_y, max_x + 1, max_y + 1))

    max_side = SIZE - PAD * 2
    img.thumbnail((max_side, max_side), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    canvas.paste(img, ((SIZE - img.width) // 2, (SIZE - img.height) // 2), img)
    return canvas


def try_save(slug: str, data: bytes, source: str) -> bool:
    img = open_img(data)
    if not img:
        return False
    if min(img.size) < 64 and max(img.size) < 120:
        return False  # reject tiny icons when possible
    (RAW / f"{slug}.bin").write_bytes(data)
    out = normalize(img)
    out.save(OUT / f"{slug}.png", "PNG", optimize=True)
    print(f"  OK {img.size[0]}x{img.size[1]} via {source}")
    return True


def main() -> None:
    RAW.mkdir(parents=True, exist_ok=True)
    OUT.mkdir(parents=True, exist_ok=True)
    report = []

    for slug, name, sites in META:
        print(f"\n{name}")
        saved = False

        # 1) direct URLs
        for url in DIRECT.get(slug, []):
            data = fetch(url)
            if data and try_save(slug, data, url):
                saved = True
                break

        # 2) scrape official sites
        if not saved:
            for site in sites:
                for url in scrape_logo_urls(site)[:20]:
                    # skip huge photos
                    if re.search(r"\.(mp4|webm|pdf)(\?|$)", url, re.I):
                        continue
                    data = fetch(url)
                    if data and try_save(slug, data, url):
                        saved = True
                        break
                if saved:
                    break

        # 3) clearbit / duckduckgo last resort
        if not saved:
            domain = urlparse(sites[0]).netloc.replace("www.", "")
            for url in [
                f"https://logo.clearbit.com/{domain}?size=512",
                f"https://icons.duckduckgo.com/ip3/{domain}.ico",
                f"https://www.google.com/s2/favicons?domain={domain}&sz=256",
            ]:
                data = fetch(url)
                if data and try_save(slug, data, url):
                    saved = True
                    break

        report.append((slug, name, "OK" if saved else "FAILED"))
        if not saved:
            print("  FAILED")

    if ZIP_PATH.exists():
        ZIP_PATH.unlink()
    with zipfile.ZipFile(ZIP_PATH, "w", zipfile.ZIP_DEFLATED) as zf:
        for png in sorted(OUT.glob("*.png")):
            zf.write(png, arcname=png.name)
        lines = [
            "Partner logos for TalenTiT",
            f"All files: {SIZE}x{SIZE} PNG, transparent background, logo centered with padding.",
            "",
            "IMPORTANT: Logos are trademarks of their respective owners.",
            "Use only with permission / fair brand-reference practice for client listings.",
            "",
            "Status:",
        ]
        for slug, name, status in report:
            lines.append(f"- {slug} | {name} | {status}")
        zf.writestr("README.txt", "\n".join(lines) + "\n")

    ok = sum(1 for *_, s in report if s == "OK")
    print(f"\n=== {ok}/{len(META)} saved ===")
    print(f"Zip: {ZIP_PATH}")


if __name__ == "__main__":
    main()
