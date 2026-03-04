# AetherTabs

Chrome extension project organized for Web Store upload with a single manifest.

## Project Layout

- `manifest.json`: the only manifest file for extension runtime and packaging.
- `popup.html`: popup entry.
- `assets/`: bundled popup JS/CSS used by runtime.
- `icons/`: extension icons used by runtime.
- `src/`: source code.
- `dist/`: build output (intermediate, not uploaded directly).

## Build and Package

1. Build and sync runtime files to root:

```bash
npm run build:runtime
```

2. Create Chrome Web Store zip package:

```bash
npm run package:webstore
```

Package output:

- `release/aethertabs-webstore.zip`

The generated zip includes only:

- `manifest.json`
- `popup.html`
- `assets/`
- `icons/`

This guarantees there is only one `manifest.json` in the upload package.
