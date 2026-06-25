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
- Playwright for CV PDF generation

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

CV routes:

- `http://localhost:5173/cv?lang=pt`
- `http://localhost:5173/cv?lang=en`

## CV PDF Generation

The CV page uses the same visual identity as the portfolio in a controlled A4 print layout.

Generate both PDFs:

```bash
npm run generate:cv
```

Generated files:

- `public/cv/cezar-bononi-cv-pt-br.pdf`
- `public/cv/cezar-bononi-cv-en-us.pdf`

The script starts a temporary Vite server on `127.0.0.1:4173`, uses Playwright to print `/cv?lang=pt` and `/cv?lang=en` in A4, and keeps text selectable in the PDFs.

If Playwright browsers are missing after a fresh install, run:

```bash
npx playwright install chromium
```

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
