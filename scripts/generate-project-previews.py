"""Generate 1200x630 Open Graph images from the portfolio screenshots.

Requires Pillow: python -m pip install Pillow
"""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "apps" / "og"
SIZE = (1200, 630)

PROJECTS = (
    {
        "name": "Bridgely",
        "lines": ("Bridgely",),
        "screenshot": "public/apps/bridgely/screenshots/windows-pairing.webp",
        "accent": "#14b8a6",
        "background": "#071b1b",
        "surface": "#0d2928",
        "filename": "bridgely.png",
        "portrait": True,
    },
    {
        "name": "xConnect File Manager",
        "lines": ("xConnect", "File Manager"),
        "screenshot": "public/apps/xconnect/screenshots/connection.webp",
        "accent": "#3b9bff",
        "background": "#081326",
        "surface": "#10213a",
        "filename": "xconnect-file-manager.png",
        "portrait": False,
    },
    {
        "name": "Calctron",
        "lines": ("Calctron",),
        "screenshot": "public/apps/calctron/screenshots/scientific.webp",
        "accent": "#a7c681",
        "background": "#111a16",
        "surface": "#202c24",
        "filename": "calctron.png",
        "portrait": False,
    },
)


def find_font(bold: bool) -> str | None:
    candidates = (
        (
            r"C:\Windows\Fonts\segoeuib.ttf",
            "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        )
        if bold
        else (
            r"C:\Windows\Fonts\segoeui.ttf",
            "/System/Library/Fonts/Supplemental/Arial.ttf",
            "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        )
    )
    return next((font for font in candidates if Path(font).exists()), None)


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    path = find_font(bold)
    return ImageFont.truetype(path, size) if path else ImageFont.load_default()


def color(hex_value: str, alpha: int = 255) -> tuple[int, int, int, int]:
    value = hex_value.lstrip("#")
    return int(value[0:2], 16), int(value[2:4], 16), int(value[4:6], 16), alpha


def crop_to_fill(image: Image.Image, size: tuple[int, int]) -> Image.Image:
    scale = max(size[0] / image.width, size[1] / image.height)
    resized = image.resize(
        (round(image.width * scale), round(image.height * scale)),
        Image.Resampling.LANCZOS,
    )
    left = (resized.width - size[0]) // 2
    top = (resized.height - size[1]) // 2
    return resized.crop((left, top, left + size[0], top + size[1]))


def contain(image: Image.Image, size: tuple[int, int]) -> Image.Image:
    image.thumbnail(size, Image.Resampling.LANCZOS)
    return image


def render(project: dict[str, object]) -> None:
    width, height = SIZE
    accent = str(project["accent"])
    image = Image.new("RGB", SIZE)
    draw = ImageDraw.Draw(image)

    start = color(str(project["background"]))[:3]
    end = color(str(project["surface"]))[:3]
    for x in range(width):
        ratio = x / (width - 1)
        shade = tuple(round(start[i] * (1 - ratio) + end[i] * ratio) for i in range(3))
        draw.line((x, 0, x, height), fill=shade)

    glow = Image.new("RGBA", SIZE, (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse((70, 100, 660, 680), fill=color(accent, 30))
    glow_draw.ellipse((780, -200, 1350, 420), fill=color(accent, 28))
    image = Image.alpha_composite(image.convert("RGBA"), glow.filter(ImageFilter.GaussianBlur(95)))

    grid = Image.new("RGBA", SIZE, (0, 0, 0, 0))
    grid_draw = ImageDraw.Draw(grid)
    for x in range(40, width, 64):
        for y in range(28, height, 64):
            grid_draw.ellipse((x, y, x + 2, y + 2), fill=(210, 230, 255, 17))
    image = Image.alpha_composite(image, grid)
    draw = ImageDraw.Draw(image)

    draw.rounded_rectangle((72, 72, 86, 116), radius=7, fill=color(accent))
    draw.text((105, 73), "TB BUILDS", font=font(23, True), fill=(244, 248, 255, 255))
    draw.text(
        (107, 109),
        "SOFTWARE PROJECT",
        font=font(12, True),
        fill=color(accent),
        spacing=2,
    )

    title_lines = project["lines"]
    title_font = font(63 if len(title_lines) == 1 else 52, True)
    title_y = 226 if len(title_lines) == 1 else 195
    for line in title_lines:
        draw.text((74, title_y), line, font=title_font, fill=(247, 249, 253, 255))
        title_y += 72

    draw.rounded_rectangle((76, title_y + 17, 178, title_y + 23), radius=3, fill=color(accent))
    draw.text((76, 564), "tb-builds.com", font=font(18, True), fill=(180, 193, 210, 255))

    panel = (622, 94, 1136, 536)
    shadow = Image.new("RGBA", SIZE, (0, 0, 0, 0))
    ImageDraw.Draw(shadow).rounded_rectangle(
        (panel[0] + 2, panel[1] + 14, panel[2] + 2, panel[3] + 14),
        radius=28,
        fill=(0, 0, 0, 135),
    )
    image = Image.alpha_composite(image, shadow.filter(ImageFilter.GaussianBlur(22)))
    draw = ImageDraw.Draw(image)
    draw.rounded_rectangle(panel, radius=26, fill=(11, 17, 26, 235), outline=color(accent, 115), width=2)

    screenshot = Image.open(ROOT / str(project["screenshot"])).convert("RGB")
    if bool(project["portrait"]):
        screenshot = contain(screenshot, (228, 392))
        left = panel[0] + (panel[2] - panel[0] - screenshot.width) // 2
        top = panel[1] + (panel[3] - panel[1] - screenshot.height) // 2
        screenshot_size = screenshot.size
    else:
        screenshot_size = (470, 264)
        screenshot = crop_to_fill(screenshot, screenshot_size)
        left = panel[0] + (panel[2] - panel[0] - screenshot.width) // 2
        top = panel[1] + (panel[3] - panel[1] - screenshot.height) // 2

    mask = Image.new("L", screenshot_size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, screenshot.width - 1, screenshot.height - 1), radius=16, fill=255)
    image.paste(screenshot, (left, top), mask)
    draw = ImageDraw.Draw(image)
    draw.rounded_rectangle(
        (left, top, left + screenshot.width - 1, top + screenshot.height - 1),
        radius=16,
        outline=(255, 255, 255, 52),
        width=2,
    )

    target = OUTPUT / str(project["filename"])
    image.convert("RGB").save(target, format="PNG", optimize=True)
    print(f"Created {target.relative_to(ROOT)}")


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    for project in PROJECTS:
        render(project)


if __name__ == "__main__":
    main()
