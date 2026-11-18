import os, math
from PIL import Image, ImageDraw, ImageOps

out_dir = r"C:\Users\moham\.gemini\antigravity\scratch\PortfolioWork\immersive-lab\assets\tavistock_archive"
os.makedirs(out_dir, exist_ok=True)

landmarks = [
    {
        "id": "abbey_ruins",
        "title": "Tavistock Abbey Ruins & Cloisters (c. 961 AD)",
        "bw_year": "1890",
        "sky_c": [(18, 32, 48), (55, 90, 105), (150, 185, 175)],
        "ground_c": [(32, 52, 28), (48, 72, 42)],
        "accent_c": (135, 155, 125),
        "water": True
    },
    {
        "id": "pannier_market",
        "title": "Pannier Market & Town Hall (c. 1860s)",
        "bw_year": "1895",
        "sky_c": [(28, 38, 58), (85, 105, 135), (190, 175, 145)],
        "ground_c": [(55, 50, 46), (75, 70, 65)],
        "accent_c": (185, 135, 75),
        "water": False
    },
    {
        "id": "st_eustachius",
        "title": "St Eustachius Church & Square (c. 1318)",
        "bw_year": "1910",
        "sky_c": [(22, 32, 52), (70, 90, 120), (165, 180, 195)],
        "ground_c": [(36, 56, 32), (60, 80, 50)],
        "accent_c": (155, 170, 185),
        "water": False
    },
    {
        "id": "canal_wharf",
        "title": "Tavistock Canal Wharf & Lock (c. 1817)",
        "bw_year": "1900",
        "sky_c": [(18, 36, 52), (65, 105, 120), (145, 185, 185)],
        "ground_c": [(28, 46, 32), (42, 66, 42)],
        "accent_c": (95, 175, 185),
        "water": True
    }
]

W, H = 2048, 1024

for lm in landmarks:
    base = Image.new("RGB", (W, H))
    draw = ImageDraw.Draw(base)
    
    # Sky gradient
    for y in range(int(H * 0.65)):
        t = y / (H * 0.65)
        if t < 0.5:
            t2 = t * 2.0
            r = int(lm["sky_c"][0][0] * (1-t2) + lm["sky_c"][1][0] * t2)
            g = int(lm["sky_c"][0][1] * (1-t2) + lm["sky_c"][1][1] * t2)
            b = int(lm["sky_c"][0][2] * (1-t2) + lm["sky_c"][1][2] * t2)
        else:
            t2 = (t - 0.5) * 2.0
            r = int(lm["sky_c"][1][0] * (1-t2) + lm["sky_c"][2][0] * t2)
            g = int(lm["sky_c"][1][1] * (1-t2) + lm["sky_c"][2][1] * t2)
            b = int(lm["sky_c"][1][2] * (1-t2) + lm["sky_c"][2][2] * t2)
        draw.line([(0, y), (W, y)], fill=(r, g, b))
        
    # Dartmoor rolling hills silhouette
    for x in range(W):
        rad = (x / W) * math.pi * 4
        hill_y = int(H * 0.52 + math.sin(rad * 0.7) * 45 + math.cos(rad * 1.5) * 25)
        draw.line([(x, hill_y), (x, int(H * 0.65))], fill=(lm["ground_c"][0][0]-10, lm["ground_c"][0][1]-10, lm["ground_c"][0][2]-10))
        
    # Foreground ground
    for y in range(int(H * 0.65), H):
        t = (y - H * 0.65) / (H * 0.35)
        r = int(lm["ground_c"][0][0] * (1-t) + lm["ground_c"][1][0] * t)
        g = int(lm["ground_c"][0][1] * (1-t) + lm["ground_c"][1][1] * t)
        b = int(lm["ground_c"][0][2] * (1-t) + lm["ground_c"][1][2] * t)
        draw.line([(0, y), (W, y)], fill=(r, g, b))
        
    # Water river / canal if applicable
    if lm["water"]:
        for x in range(int(W * 0.25), int(W * 0.75)):
            t = (x - W * 0.25) / (W * 0.5)
            wy = int(H * 0.72 + math.sin(t * math.pi) * 30)
            for y in range(wy, H):
                draw.point((x, y), fill=(30, 80, 100))
                
    # Architectural arches / towers silhouettes
    arc_c = lm["accent_c"]
    draw.rectangle([int(W*0.12), int(H*0.38), int(W*0.22), int(H*0.68)], fill=arc_c)
    draw.polygon([(int(W*0.12), int(H*0.38)), (int(W*0.17), int(H*0.28)), (int(W*0.22), int(H*0.38))], fill=arc_c)
    for i in range(4):
        bx = int(W * (0.42 + i * 0.08))
        draw.rectangle([bx, int(H*0.48), bx + int(W*0.06), int(H*0.68)], fill=arc_c)
        draw.arc([bx, int(H*0.42), bx + int(W*0.06), int(H*0.54)], 180, 360, fill=(240, 240, 240), width=4)
        
    # Living Colour version
    colour_path = os.path.join(out_dir, f"{lm['id']}_colour.jpg")
    base.save(colour_path, "JPEG", quality=88)
    
    # Grayscale conversion
    gray = base.convert("L")
    
    # Sepia version
    sepia_tinted = ImageOps.colorize(gray, black=(25, 18, 10), white=(245, 225, 185), mid=(150, 115, 75))
    sepia_path = os.path.join(out_dir, f"{lm['id']}_sepia.jpg")
    sepia_tinted.save(sepia_path, "JPEG", quality=88)
    
    # B&W Archive plate version with slight contrast & vignette
    bw_img = ImageOps.colorize(gray, black=(15, 15, 15), white=(240, 240, 240))
    bw_path = os.path.join(out_dir, f"{lm['id']}_bw_{lm['bw_year']}.jpg")
    bw_img.save(bw_path, "JPEG", quality=88)

print("Generated all 12 heritage archive plates successfully in:", out_dir)
