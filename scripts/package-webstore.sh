#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT_DIR="$ROOT_DIR/release"
OUT_FILE="$OUT_DIR/aethertabs-webstore.zip"
INCLUDE_FILES=("manifest.json" "popup.html" "assets" "icons")

mkdir -p "$OUT_DIR"
rm -f "$OUT_FILE"

for item in "${INCLUDE_FILES[@]}"; do
  if [[ ! -e "$ROOT_DIR/$item" ]]; then
    echo "Error: required file/folder missing: $ROOT_DIR/$item" >&2
    exit 1
  fi
done

(
  cd "$ROOT_DIR"
  zip -q -r "$OUT_FILE" "${INCLUDE_FILES[@]}"
)

echo "Web Store package created: $OUT_FILE"
