import argparse
from pathlib import Path
from typing import Dict, List, Tuple

import cv2
import numpy as np
from PIL import Image


def _to_rgba_pil(path: Path) -> Image.Image:
    img = Image.open(path)
    if img.mode != 'RGBA':
        img = img.convert('RGBA')
    return img


def _square_crop_rgba(img: Image.Image, bbox: Tuple[int, int, int, int], pad: int) -> Image.Image:
    x, y, w, h = bbox
    left = max(0, x - pad)
    top = max(0, y - pad)
    right = min(img.width, x + w + pad)
    bottom = min(img.height, y + h + pad)

    crop = img.crop((left, top, right, bottom))

    side = max(crop.width, crop.height)
    out = Image.new('RGBA', (side, side), (0, 0, 0, 0))
    ox = (side - crop.width) // 2
    oy = (side - crop.height) // 2
    out.paste(crop, (ox, oy))
    return out


def slice_pills(
    input_path: Path,
    output_dir: Path,
    size: int = 64,
    alpha_threshold: int = 8,
    min_area: int = 2500,
    min_fill_ratio: float = 0.36,
) -> List[Path]:
    output_dir.mkdir(parents=True, exist_ok=True)

    # Use OpenCV for component stats; keep PIL for high-quality resize.
    rgba = cv2.imread(str(input_path), cv2.IMREAD_UNCHANGED)
    if rgba is None:
        raise FileNotFoundError(f"Could not read image: {input_path}")
    if rgba.shape[2] < 4:
        raise ValueError('Expected an RGBA image with an alpha channel')

    alpha = rgba[:, :, 3]
    # Use alpha to find connected components. We'll later use per-label masks
    # to keep ONLY the pixels that belong to the pill component.
    mask = (alpha > alpha_threshold).astype(np.uint8)

    num, labels, stats, centroids = cv2.connectedComponentsWithStats(mask, connectivity=8)

    # Load the original image once via PIL.
    pil = _to_rgba_pil(input_path)

    candidates: List[Dict] = []
    for label in range(1, num):
        x, y, w, h, area = (int(stats[label, 0]), int(stats[label, 1]), int(stats[label, 2]), int(stats[label, 3]), int(stats[label, 4]))
        if area < min_area:
            continue
        if w <= 0 or h <= 0:
            continue

        fill_ratio = float(area) / float(w * h)
        if fill_ratio < min_fill_ratio:
            # This reliably drops the central “IGNORE” ring/markup in the provided sheet.
            continue

        cx, cy = (float(centroids[label, 0]), float(centroids[label, 1]))
        candidates.append({
            'label': label,
            'bbox': (x, y, w, h),
            'area': area,
            'fill_ratio': fill_ratio,
            'cx': cx,
            'cy': cy,
        })

    # Stable ordering: top-to-bottom, left-to-right.
    candidates.sort(key=lambda c: (c['cy'], c['cx']))

    written: List[Path] = []
    for i, c in enumerate(candidates, start=1):
        label = int(c['label'])
        x, y, w, h = c['bbox']
        pad = max(2, int(round(max(w, h) * 0.08)))

        # Crop a padded ROI from the full RGBA image.
        left = max(0, x - pad)
        top = max(0, y - pad)
        right = min(pil.width, x + w + pad)
        bottom = min(pil.height, y + h + pad)

        crop_rgba = pil.crop((left, top, right, bottom))

        # Build a matching ROI label mask and apply it so ONLY this pill's pixels remain.
        roi_labels = labels[top:bottom, left:right]
        roi_keep = (roi_labels == label)

        crop_arr = np.array(crop_rgba, dtype=np.uint8)
        if crop_arr.ndim != 3 or crop_arr.shape[2] != 4:
            raise ValueError('Unexpected crop array shape')

        crop_arr[~roi_keep, 3] = 0  # clear alpha for non-pill pixels
        masked_crop = Image.fromarray(crop_arr, mode='RGBA')

        # Square-pad and resize to target.
        side = max(masked_crop.width, masked_crop.height)
        square = Image.new('RGBA', (side, side), (0, 0, 0, 0))
        ox = (side - masked_crop.width) // 2
        oy = (side - masked_crop.height) // 2
        square.paste(masked_crop, (ox, oy))

        resized = square.resize((size, size), resample=Image.LANCZOS)

        # Final cleanup: keep only the main pill blob (largest alpha component)
        # to remove tiny stray pixels from nearby crops/resampling.
        arr = np.array(resized, dtype=np.uint8)
        a = arr[..., 3]
        m = (a > 0).astype(np.uint8)
        num2, lab2, stats2, _ = cv2.connectedComponentsWithStats(m, connectivity=8)
        if num2 > 2:
            # Find largest non-background component.
            best_label = 1
            best_area = int(stats2[1, cv2.CC_STAT_AREA])
            for lab in range(2, num2):
                area2 = int(stats2[lab, cv2.CC_STAT_AREA])
                if area2 > best_area:
                    best_label = lab
                    best_area = area2
            keep = (lab2 == best_label)
            arr[~keep, 3] = 0
            resized = Image.fromarray(arr, mode='RGBA')

        out_path = output_dir / f"pill_{i:02d}.png"
        resized.save(out_path)
        written.append(out_path)

    return written


def main() -> None:
    parser = argparse.ArgumentParser(description='Slice a pill sprite-sheet into individual square PNGs.')
    parser.add_argument('--input', default='assets/pills.png', help='Input sprite-sheet path')
    parser.add_argument('--output', default='assets/pills', help='Output directory')
    parser.add_argument('--size', type=int, default=64, help='Output size (square)')
    parser.add_argument('--alpha-threshold', type=int, default=8, help='Alpha threshold for mask')
    parser.add_argument('--min-area', type=int, default=2500, help='Minimum component area to keep')
    parser.add_argument('--min-fill-ratio', type=float, default=0.36, help='Minimum fill ratio to keep')

    args = parser.parse_args()

    input_path = Path(args.input)
    output_dir = Path(args.output)

    written = slice_pills(
        input_path=input_path,
        output_dir=output_dir,
        size=args.size,
        alpha_threshold=args.alpha_threshold,
        min_area=args.min_area,
        min_fill_ratio=args.min_fill_ratio,
    )

    print(f"Wrote {len(written)} pills to {output_dir}")
    for p in written:
        print(p.as_posix())


if __name__ == '__main__':
    main()
