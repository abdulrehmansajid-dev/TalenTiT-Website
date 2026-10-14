#!/usr/bin/env python3
from __future__ import annotations

import io
import shutil
import zipfile
from pathlib import Path
from urllib.request import Request, urlopen

from PIL import Image

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "normalized"
RAW = ROOT / "raw"
ZIP_PATH = ROOT / "partner_logos.zip"
SIZE, PAD = 512, 56
UA = "Mozilla/5.0"

URLS = {
    "02_nayatel": [
        "https://nayatel.com/_next/static/media/Nayatel-logo3.757e22ef.webp",
        "https://nayatel.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNayatel-logo3.757e22ef.webp&w=828&q=75",
    ],
    "03_ctg": [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/China_Three_Gorges_Corporation_logo.svg/800px-China_Three_Gorges_Corporation_logo.svg.png",
        "https://logo.clearbit.com/ctg.com.cn",
    ],
    "05_abnlp": [
        "https://abh-abnlp.com/wp-content/uploads/2022/09/cropped-favicon-192x192.png",
        "https://abh-abnlp.com/wp-content/uploads/2022/09/cropped-favicon-180x180.png",
    ],
    "06_tlta": [
        "https://abh-abnlp.com/wp-content/uploads/2022/09/cropped-favicon-192x192.png",
    ],
    "07_abnlp_coaching": [
        "https://abh-abnlp.com/wp-content/uploads/2022/09/cropped-favicon-192x192.png",
    ],
    "14_iest": [],  # copy from air university
    "15_pide": [
        "https://pide.org.pk/wp-content/uploads/2021/01/pide-logo.png",
        "https://file.pide.org.pk/uploads/pide-logo.png",
        "https://pide.org.pk/wp-content/themes/hello-elementor/assets/images/logo.png",
    ],
    "21_aghosh": [
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/Alkhidmat_Foundation_Pakistan.png",
        "https://alkhidmat.org/wp-content/uploads/2020/01/alkhidmat-logo.png",
        "https://aghosh.us/wp-content/uploads/2023/logo.png",
    ],
}


def fetch(url: str) -> bytes | None:
    try:
        with urlopen(Request(url, headers={"User-Agent": UA}), timeout=30) as r:
            data = r.read()
            return data if len(data) > 400 else None
    except Exception as e:
        print("  fail", url, e.__class__.__name__)
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
    try:
        if b"<svg" in data[:800].lower():
            return False
        img = Image.open(io.BytesIO(data))
        img.load()
    except Exception:
        return False
    if max(img.size) < 40:
        return False
    (RAW / f"{slug}.bin").write_bytes(data)
    normalize(img).save(OUT / f"{slug}.png", "PNG", optimize=True)
    print(f"OK {slug} {img.size} <- {src}")
    return True


def main() -> None:
    RAW.mkdir(exist_ok=True)
    OUT.mkdir(exist_ok=True)

    # IEST uses Air University logo
    src = OUT / "01_air_university.png"
    if src.exists():
        shutil.copyfile(src, OUT / "14_iest.png")
        print("OK 14_iest copied from Air University")

    for slug, urls in URLS.items():
        if slug == "14_iest":
            continue
        for url in urls:
            data = fetch(url)
            if data and save(slug, data, url):
                break
        else:
            if not (OUT / f"{slug}.png").exists():
                print("FAILED", slug)

    # Rebuild zip with all normalized
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
        missing = []
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
            "Missing / could not fetch automatically:",
            *(missing or ["(none)"]),
            "",
            "Notes:",
            "- 14_iest uses Air University logo (department under AU).",
            "- 05/06/07 may share ABH-ABNLP branding if separate marks were unavailable.",
        ]
        zf.writestr("README.txt", "\n".join(readme) + "\n")

    print("Zip:", ZIP_PATH)
    print("Count in zip:", len(present), "missing:", len(missing))


if __name__ == "__main__":
    main()
