from __future__ import annotations

from pathlib import Path

from PIL import Image


def build_mask(
    input_path: Path,
    output_path: Path,
    *,
    bg_threshold: int = 245,
    alpha_threshold: int = 15,
) -> None:
    """Create a PNG alpha mask from a silhouette-on-white image.

    Assumptions (matches your Paint-edited JPG):
    - Background is near-white
    - Silhouette is dark

    Output:
    - Transparent background
    - Opaque silhouette (alpha)

    The mask is intended for CSS `mask-image` so progress fill only colors the
    silhouette, not the background.
    """

    img = Image.open(input_path).convert("RGBA")
    w, h = img.size

    out = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    src = img.load()
    dst = out.load()

    for y in range(h):
        for x in range(w):
            r, g, b, a = src[x, y]
            # Treat near-white as background.
            if r >= bg_threshold and g >= bg_threshold and b >= bg_threshold:
                dst[x, y] = (0, 0, 0, 0)
                continue

            # Compute darkness (0=white, 255=black) and map to alpha.
            # This keeps anti-aliased edges smooth.
            lum = int(0.2126 * r + 0.7152 * g + 0.0722 * b)
            darkness = 255 - lum
            alpha = max(0, min(255, darkness))

            if alpha < alpha_threshold:
                dst[x, y] = (0, 0, 0, 0)
            else:
                dst[x, y] = (0, 0, 0, alpha)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    out.save(output_path, format="PNG")


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    inp = root / "assets" / "Cultivation_silhouette_new.jpg"
    out = root / "assets" / "Cultivation_silhouette_new_mask.png"

    if not inp.exists():
        raise SystemExit(f"Input not found: {inp}")

    build_mask(inp, out)
    print(f"Wrote: {out}")


if __name__ == "__main__":
    main()
