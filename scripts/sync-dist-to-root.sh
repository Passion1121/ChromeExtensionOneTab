#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST_DIR="$ROOT_DIR/dist"

if [[ ! -f "$DIST_DIR/popup.html" ]]; then
  echo "Error: $DIST_DIR/popup.html not found. Run 'npm run build' first." >&2
  exit 1
fi

rm -rf "$ROOT_DIR/assets" "$ROOT_DIR/icons"
mkdir -p "$ROOT_DIR/assets" "$ROOT_DIR/icons"

cp -f "$DIST_DIR/popup.html" "$ROOT_DIR/popup.html"
cp -f "$DIST_DIR/assets"/* "$ROOT_DIR/assets/"
cp -f "$DIST_DIR/icons"/* "$ROOT_DIR/icons/"

echo "Runtime files synced from dist to project root."
