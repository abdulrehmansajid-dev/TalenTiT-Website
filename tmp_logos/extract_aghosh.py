#!/usr/bin/env python3
import base64
import io
import json
from pathlib import Path

from PIL import Image

p = Path(r"C:\Users\user\.cursor\browser-logs\cdp-response-Runtime.evaluate-2026-10-14T20-04-22-571Z.json")
data = json.loads(p.read_text(encoding="utf-8"))


def find_data_url(obj):
    if isinstance(obj, str) and obj.startswith("data:image/png;base64,"):
        return obj
    if isinstance(obj, dict):
        for v in obj.values():
            found = find_data_url(v)
            if found:
                return found
    if isinstance(obj, list):
        for v in obj:
            found = find_data_url(v)
            if found:
                return found
    return None


data_url = find_data_url(data)
if not data_url:
    raise SystemExit("no data url found")

raw = base64.b64decode(data_url.split(",", 1)[1])
out = Path(__file__).resolve().parent / "alkhidmat_export.png"
out.write_bytes(raw)
img = Image.open(io.BytesIO(raw))
print("saved", out, img.size, img.mode)
