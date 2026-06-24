# Cezar Bononi Portfolio

Personal portfolio redesigned as a Cyber Maximalist single-page app.

Positioning:

`Software Engineer | Cloud, Frontend Modernization & AI-assisted Development`

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion

## Requirements

- Node.js 24 recommended
- npm

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

The app runs locally through Vite. The default language is `PT-BR`; manual language selection is persisted in `localStorage` with the key `cb_lang`.

## Production Build

```bash
npm run build
```

The static output is generated in `dist/`.

## Preview Build

```bash
npm run preview
```

## GitHub Pages Deploy

This repository is configured for a simple GitHub Pages deployment from the Vite `dist/` artifact.

1. Push changes to `main` or `master`.
2. In GitHub, set **Settings > Pages > Build and deployment > Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` installs dependencies, runs the production build, and publishes `dist/`.

## Design Handoff

The approved visual direction is documented in `docs/design-handoff/`.

- `README.md`: visual direction, tokens, content, behavior and motion.
- `concept-2-cyber-maximalist.dc.html`: high-fidelity Claude Design reference.
- `support.js`: Claude Design prototype runtime only. It is not imported by the production app.
