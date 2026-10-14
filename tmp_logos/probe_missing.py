#!/usr/bin/env python3
from __future__ import annotations

import re
from urllib.request import Request, urlopen

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"


def get(url: str):
    try:
        req = Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
        with urlopen(req, timeout=30) as r:
            data = r.read()
            return data, r.headers.get_content_type(), r.geturl()
    except Exception as e:
        return None, f"{e.__class__.__name__}: {e}", url


urls = [
    "https://commons.wikimedia.org/wiki/Special:FilePath/Alkhidmat_Foundation_Pakistan.png",
    "https://upload.wikimedia.org/wikipedia/commons/8/8e/Alkhidmat_Foundation_Pakistan.png",
    "https://alkhidmat.org/wp-content/uploads/2020/02/Alkhidmat-Foundation-Pakistan.png",
    "https://www.ctg.com.cn/ctgenglish/images/logo.png",
    "https://www.ctg.com.cn/images/logo.png",
    "https://logo.clearbit.com/ctg.com.cn",
    "https://www.google.com/s2/favicons?domain=ctg.com.cn&sz=128",
    "https://icons.duckduckgo.com/ip3/ctg.com.cn.ico",
    "https://abh-abnlp.com/",
    "https://pide.org.pk/",
    "https://www.alkhidmat.com/",
    "https://www.ctg.com.cn/ctgenglish/about_ctg6/group_profile/index.html",
    "https://en.wikipedia.org/w/api.php?action=query&titles=China_Three_Gorges_Corporation&prop=pageimages&format=json&pithumbsize=800",
    "https://en.wikipedia.org/w/api.php?action=query&titles=Pakistan_Institute_of_Development_Economics&prop=pageimages&format=json&pithumbsize=800",
]

for u in urls:
    data, info, final = get(u)
    if not data:
        print(f"FAIL {info} | {u[:90]}")
        continue
    print(f"OK {len(data):7d} {str(info)[:28]:28s} {final[:100]}")
    head = data[:300].lower()
    if b"<html" in head or b"<!doctype" in head or b"{" == data[:1]:
        text = data.decode("utf-8", "ignore")
        if text.strip().startswith("{"):
            print("   json:", text[:300].replace("\n", " "))
        srcs = re.findall(
            r"""(?:src|href|content)=["']([^"']*(?:logo|Logo|brand|Brand)[^"']*)["']""",
            text,
        )
        for s in sorted(set(srcs))[:12]:
            print("   logo-ish:", s[:140])
