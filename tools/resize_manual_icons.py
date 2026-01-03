from __future__ import annotations

import argparse
import os
import shutil
from pathlib import Path

from PIL import Image


def resize_png(src: Path, dst: Path, size: int, backup_dir: Path | None) -> None:
    if not src.exists():
        raise FileNotFoundError(str(src))

    if backup_dir is not None:
        backup_dir.mkdir(parents=True, exist_ok=True)
        backup_path = backup_dir / src.name
        if not backup_path.exists():
            shutil.copy2(src, backup_path)

    with Image.open(src) as im:
        im = im.convert("RGBA")
        im = im.resize((size, size), resample=Image.Resampling.NEAREST)
        dst.parent.mkdir(parents=True, exist_ok=True)
        im.save(dst, format="PNG", optimize=True)


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Resize manual icons to NxN (pixel-art friendly, keeps alpha)."
    )
    parser.add_argument(
        "--assets",
        default=str(Path(__file__).resolve().parents[1] / "assets"),
        help="Path to assets folder",
    )
    parser.add_argument("--size", type=int, default=64, help="Output size (NxN)")
    parser.add_argument(
        "--no-backup",
        action="store_true",
        help="Do not create backups of original images",
    )

    args = parser.parse_args()
    assets_dir = Path(args.assets).resolve()
    size = int(args.size)
    if size <= 0:
        raise ValueError("--size must be > 0")

    backup_dir = None if args.no_backup else (assets_dir / "_originals")

    jobs = [
        (assets_dir / "Heavenly_demon_manual.png", assets_dir / "Heavenly_demon_manual.png"),
        (assets_dir / "Demonic_manual.png", assets_dir / "Demonic_manual.png"),
        (assets_dir / "Orthodox_manual.png", assets_dir / "Orthodox_manual.png"),
    ]

    for src, dst in jobs:
        resize_png(src, dst, size=size, backup_dir=backup_dir)
        print(f"OK: {src.name} -> {dst.name} ({size}x{size})")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
