# Cuts the "Design a pattern" screens from the app's promo captures and writes
# them at web size into public/images/pattern/.
#
#   python tools/pattern-shots.py
#
# Pillow, not Chromium: these are plain crops and resizes. The phone captures
# are Android at 1080x2400 with the system status bar (time, icons) in the top
# 120 px, which is cut off so the screens read like the other app shots. The
# swatch is the knitted area of the tablet "Knitted up" view, tiled 3 x 3 -
# the tablet capture is twice the resolution of the phone one.
from pathlib import Path
from PIL import Image

SHOTS = Path(r'C:/Users/houss/.gemini/antigravity-ide/scratch/madeby/promo/shots/pattern')
OUT = Path(__file__).resolve().parent.parent / 'public' / 'images' / 'pattern'
STATUS_BAR = 120

# (source, output, crop box or None for "phone minus status bar", width, quality)
JOBS = [
    ('s_editor2.png',    'chart.webp',   None, 640, 84),
    ('s_fabric.png',     'knitted.webp', None, 640, 84),
    # Knitted area measured on the dark ground, then inset a few px so no
    # dark edge pixels survive the resize.
    ('t_fabric_rep.png', 'swatch.webp',  (32, 484, 2032, 2381), 840, 72),
]

OUT.mkdir(parents=True, exist_ok=True)
for src, dst, box, width, q in JOBS:
    im = Image.open(SHOTS / src).convert('RGB')
    if box is None:
        box = (0, STATUS_BAR, im.width, im.height)
    im = im.crop(box)
    h = round(im.height * width / im.width)
    im = im.resize((width, h), Image.LANCZOS)
    im.save(OUT / dst, 'WEBP', quality=q, method=6)
    print(f'{dst}: {width}x{h}  {(OUT / dst).stat().st_size // 1024} KB')
