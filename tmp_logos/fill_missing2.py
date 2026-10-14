#!/usr/bin/env python3
from __future__ import annotations

import io
import json
import re
import shutil
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

URLS = {
    "03_ctg": [
        "https://www.ctg.com.cn/ctgenglish/template/common/img/logo.png",
        "https://www.ctg.com.cn/ctgenglish/template/common/img/logo.jpg",
    ],
    "05_abnlp": [
        "https://abh-abnlp.com/wp-content/uploads/2016/02/abnlp20logo.172165611_std.jpg",
        "https://abh-abnlp.com/wp-content/uploads/2022/10/ABH-logo.png",
    ],
    "06_tlta": [
        # will try scrape from timeline therapy / abh pages below
    ],
    "07_abnlp_coaching": [
        "https://abh-abnlp.com/wp-content/uploads/2016/02/abnlp20logo.172165611_std.jpg",
    ],
    "15_pide": [
        "https://file.pide.org.pk/uploads/pide-logo-green.png",
        "https://pide.org.pk/wp-content/uploads/2021/01/pide-logo.png",
    ],
    "21_aghosh": [
        "https://www.alkhidmat.com/assets/images/tika-logo.png",
        "https://akkweb.alkhidmat.com/wp-content/uploads/2021/01/logo.png",
    ],
}

SCRAPE = {
    "06_tlta": [
        "https://abh-abnlp.com/",
        "https://timeline therapy.com/",
        "https://www.timelinetherapy.com/",
        "https://timelinetherapy.com/",
    ],
    "03_ctg": [
        "https://www.ctg.com.cn/ctgenglish/about_ctg6/group_profile/index.html",
        "https://www.ctg.com.cn/ctgenglish/",
    ],
    "21_aghosh": [
        "https://www.alkhidmat.com/",
        "https://www.alkhidmat.com/programs/aghosh-home",
        "https://akkweb.alkhidmat.com/",
        "https://commons.wikimedia.org/wiki/File:Alkhidmat_Foundation_Pakistan.png",
    ],
}


def fetch(url: str) -> bytes | None:
    try:
        req = Request(
            url,
            headers={
                "User-Agent": UA,
                "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
                "Referer": urljoin(url, "/"),
            },
        )
        with urlopen(req, timeout=35) as r:
            data = r.read()
            return data if len(data) > 200 else None
    except Exception as e:
        print(f"  fail {url[:90]} ({e.__class__.__name__})")
        return None


def fetch_text(url: str) -> str | None:
    data = fetch(url)
    if not data:
        return None
    return data.decode("utf-8", "ignore")


def extract_logo_urls(html: str, base: str) -> list[str]:
    patterns = [
        r"""(?:src|href|content)=["']([^"']*(?:logo|Logo|brand|Brand|seal|Seal)[^"']*)["']""",
        r"""url\((['"]?)([^)'"]*(?:logo|Logo)[^)'"]*)\1\)""",
        r"""(?:og:image|twitter:image)["'\s]+content=["']([^"']+)["']""",
        r"""content=["']([^"']+)["'][^>]+(?:og:image|twitter:image)""",
    ]
    found: list[str] = []
    for p in patterns:
        for m in re.findall(p, html):
            s = m[-1] if isinstance(m, tuple) else m
            if not s or s.startswith("data:"):
                continue
            found.append(urljoin(base, s))
    # Wikimedia original file link
    for m in re.findall(r'href="(https://upload\.wikimedia\.org/wikipedia/commons/[^"]+)"', html):
        if m.lower().endswith((".png", ".jpg", ".jpeg", ".webp", ".gif")):
            found.append(m)
    # dedupe preserve order
    out, seen = [], set()
    for u in found:
        if u not in seen:
            seen.add(u)
            out.append(u)
    return out


def normalize(img: Image.Image) -> Image.Image:
    if img.mode != "RGBA":
        img = img.convert("RGBA")
    max_side = SIZE - PAD * 2
    img.thumbnail((max_side, max_side), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    canvas.paste(img, ((SIZE - img.width) // 2, (SIZE - img.height) // 2), img)
    return canvas


def save(slug: str, data: bytes, src: str) -> bool:
    try:
        if b"<svg" in data[:1200].lower():
            print(f"  skip svg {src[:80]}")
            return False
        img = Image.open(io.BytesIO(data))
        img.load()
    except Exception as e:
        print(f"  bad image {src[:80]} ({e})")
        return False
    if max(img.size) < 48:
        print(f"  too small {img.size} {src[:80]}")
        return False
    (RAW / f"{slug}.bin").write_bytes(data)
    normalize(img).save(OUT / f"{slug}.png", "PNG", optimize=True)
    print(f"OK {slug} {img.size} <- {src}")
    return True


def try_urls(slug: str, urls: list[str]) -> bool:
    for url in urls:
        data = fetch(url)
        if data and save(slug, data, url):
            return True
    return False


def wiki_commons_url(filename: str) -> str | None:
    api = (
        "https://commons.wikimedia.org/w/api.php?action=query"
        f"&titles=File:{filename}&prop=imageinfo&iiprop=url&format=json"
    )
    text = fetch_text(api)
    if not text:
        return None
    try:
        data = json.loads(text)
        pages = data["query"]["pages"]
        for page in pages.values():
            infos = page.get("imageinfo") or []
            if infos:
                return infos[0]["url"]
    except Exception:
        return None
    return None


def main() -> None:
    RAW.mkdir(exist_ok=True)
    OUT.mkdir(exist_ok=True)

    # Prefer commons for Alkhidmat
    commons = wiki_commons_url("Alkhidmat_Foundation_Pakistan.png")
    if commons:
        URLS["21_aghosh"].insert(0, commons)
        print("commons alkhidmat:", commons)

    # Scrape extra candidates
    for slug, pages in SCRAPE.items():
        for page in pages:
            html = fetch_text(page)
            if not html:
                continue
            extras = extract_logo_urls(html, page)
            print(f"scrape {slug} from {page[:60]} -> {len(extras)}")
            URLS.setdefault(slug, [])
            for u in extras:
                if u not in URLS[slug]:
                    URLS[slug].append(u)

    # Also search ABH for timeline / coaching assets
    html = fetch_text("https://abh-abnlp.com/")
    if html:
        for u in extract_logo_urls(html, "https://abh-abnlp.com/"):
            low = u.lower()
            if "timeline" in low or "tlta" in low:
                URLS["06_tlta"].append(u)
            if "coach" in low:
                URLS["07_abnlp_coaching"].append(u)
            if "abnlp" in low:
                URLS["05_abnlp"].append(u)
                URLS["07_abnlp_coaching"].append(u)

    targets = ["03_ctg", "05_abnlp", "06_tlta", "07_abnlp_coaching", "15_pide", "21_aghosh"]
    for slug in targets:
        existing = OUT / f"{slug}.png"
        # Always refresh weak/missing
        force = slug in ("03_ctg", "05_abnlp", "06_tlta", "07_abnlp_coaching", "21_aghosh", "15_pide")
        if existing.exists() and not force:
            print(f"keep {slug}")
            continue
        ok = try_urls(slug, URLS.get(slug, []))
        if not ok:
            print("FAILED", slug)

    # IEST = Air University
    src = OUT / "01_air_university.png"
    if src.exists():
        shutil.copyfile(src, OUT / "14_iest.png")
        print("OK 14_iest copied")

    # If TLTA failed, reuse ABNLP branding as closest available board mark
    if not (OUT / "06_tlta.png").exists() and (OUT / "05_abnlp.png").exists():
        shutil.copyfile(OUT / "05_abnlp.png", OUT / "06_tlta.png")
        print("OK 06_tlta fallback from ABNLP")

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
        present, missing = [], []
        for slug, label in names.items():
            f = OUT / f"{slug}.png"
            if f.exists():
                zf.write(f, arcname=f"{slug}.png")
                present.append(f"{slug}.png — {label}")
            else:
                missing.append(f"{slug}.png — {label}")
        readme = [
            "Partner logos for TalenTiT website",
            "All PNGs are 512x512 with transparent background (logo centered).",
            "",
            "Trademark notice: logos belong to their respective owners.",
            "Confirm permission before public commercial use.",
            "",
            "Included:",
            *present,
            "",
            "Missing:",
            *(missing or ["(none)"]),
            "",
            "Notes:",
            "- 14_iest uses Air University logo (department under AU).",
            "- 07_abnlp_coaching uses ABNLP mark when a separate coaching logo was unavailable.",
            "- 06_tlta may use ABNLP-related branding if a distinct TLTA file was unavailable.",
            "- 21_aghosh uses Alkhidmat Foundation branding (Aghosh is an Alkhidmat program).",
        ]
        zf.writestr("README.txt", "\n".join(readme) + "\n")

    print("Zip:", ZIP_PATH)
    print("Count:", len(present), "missing:", len(missing))
    for m in missing:
        print("  -", m)


if __name__ == "__main__":
    main()
