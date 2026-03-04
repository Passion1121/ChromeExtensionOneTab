# AetherTabs

Chrome extension package (runtime-only layout) for Chrome Web Store upload.

## Runtime Files

- `manifest.json`: the only manifest file for extension runtime and packaging.
- `popup.html`: popup entry.
- `assets/`: bundled popup JS/CSS used by runtime.
- `icons/`: extension icons used by runtime.

## Web Store Upload

Upload a zip that contains only:

- `manifest.json`
- `popup.html`
- `assets/`
- `icons/`

On Linux/macOS, zip from project root:

```bash
zip -r aethertabs-webstore.zip manifest.json popup.html assets icons
```
