# Handoff: Cezar Bononi — Portfolio (Concept 2 · Cyber Maximalist)

## Overview
Personal portfolio site that repositions Cezar Bononi as **Software Engineer | Cloud, Frontend Modernization & AI-assisted Development**. Single-page, dark "controlled chaos" aesthetic (cyber-maximalist: grid, glitch, chrome). Fully **bilingual PT-BR / EN-US** with a header language switcher. Mobile-first and responsive.

This package documents the **chosen direction (Concept 2)**. The full prototype has 7 sections: Hero, Marquee, About/Manifesto, Selected Work, Stack, Experience, Contact.

## About the Design Files
The files in this bundle (`concept-2-cyber-maximalist.dc.html`, `index.dc.html`) are **design references created in HTML** — prototypes that show the intended look, motion and behavior. They are **not production code to copy directly**. They run on a small in-house rendering runtime (`support.js`), so treat the markup as a visual spec, not a component library.

The task is to **recreate these designs in the target codebase's environment** using its established patterns. Cezar's stack is Angular/TypeScript, so the natural target is a **standalone Angular app** (Angular 17+ standalone components, SCSS, Angular animations). If you prefer, plain Vite + TS or Astro also fit. Whatever the framework, reproduce the design **pixel-faithfully** using the tokens below.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, motion and interactions are all defined here. Recreate the UI faithfully.

## Tech notes / recommended structure (Angular example)
- One route/page composed of section components: `HeaderComponent`, `HeroComponent`, `MarqueeComponent`, `AboutComponent`, `WorkComponent`, `StackComponent`, `ExperienceComponent`, `ContactComponent`.
- **i18n**: the prototype stores all copy in a single dictionary keyed by `pt` / `en` and toggles a signal. In Angular use either a `LanguageService` with a `signal<'pt'|'en'>('pt')` + a typed content map (fastest, matches the prototype), or Angular's official `@angular/localize` if you want build-time i18n. The prototype persists the choice in `localStorage` under key `cb_lang`. Default is `pt`.
- **Scroll reveal**: `IntersectionObserver` (threshold 0.12) adds `opacity:1; transform:none` to `[data-reveal]` elements that start at `opacity:0; transform:translateY(28px)` with a `.7s cubic-bezier(.2,.7,.2,1)` transition. In Angular, a small `appReveal` directive is the clean equivalent.
- No external image assets are required. Decorative texture is pure CSS/SVG (see Assets).

---

## Design Tokens

### Colors
| Token | Hex / value | Use |
|---|---|---|
| `--bg` | `#060608` | Page background |
| `--panel` | `#0a0a0f` | Cards, stack cells |
| `--panel-2` | `rgba(11,11,16,0.6)` | Marquee strip bg |
| `--panel-3` | `rgba(10,10,15,0.5)` | Stack section bg |
| `--contact-bg` | `rgba(8,8,12,0.7)` | Contact section bg |
| `--text` | `#d7dbe0` | Body text |
| `--text-strong` | `#eef1f4` | Headings |
| `--text-muted` | `rgba(215,219,224,0.62–0.74)` | Secondary copy |
| `--accent-purple` | `#9d6bff` | Primary accent, borders, glitch |
| `--accent-cyan` | `#59f0c8` | Secondary accent, links hover, selection |
| `--accent-magenta` | `#ff3ea5` | Glitch chromatic shadow only |
| `--grid-line` | `rgba(157,107,255,0.05)` | Background grid |
| `--border` | `rgba(157,107,255,0.22)` | Card/cell borders, dividers |
| `--border-strong` | `rgba(157,107,255,0.4–0.45)` | Buttons, tag borders |
| `--border-cyan` | `rgba(89,240,200,0.4)` | Contact top border |
| Selection | bg `#59f0c8`, text `#060608` | `::selection` |

### Typography
- **Display / headings**: `Chakra Petch` (Google Fonts), weights 400/500/600/700. Uppercase for hero, section H2s, work/contact titles. `letter-spacing: 0.01em`.
- **Mono / labels / body-tech**: `Space Mono` (Google Fonts), weights 400/700. Used for kickers, tags, stat labels, periods, buttons, language switcher.
- **Body**: also `Chakra Petch` 400 for paragraphs.

Type scale (responsive `clamp`):
| Element | Size |
|---|---|
| Hero H1 | `clamp(52px, 13vw, 180px)`, line-height 0.88 |
| Contact H2 | `clamp(34px, 8vw, 110px)`, line-height 0.92 |
| Work H2 | `clamp(30px, 5vw, 64px)` |
| About / Stack / Exp H2 | `clamp(26–28px, 4–4.6vw, 52–56px)` |
| Work card H3 | `clamp(20px, 2.6vw, 28px)` |
| Exp role H3 | `clamp(19px, 2.6vw, 28px)` |
| Sub / lead | `clamp(16px, 2.2vw, 22px)` |
| Body | 14–15px, line-height 1.5–1.6 |
| Labels / kickers / tags | 10–13px, letter-spacing 0.08–0.28em |

### Spacing & shape
- Section vertical padding: `clamp(54px, 8vw, 100px)` (contact `clamp(60px,10vw,120px)`); horizontal `26px`; max content width `1280px`, centered.
- Border radius: `2px` (buttons), `3px` (cards). Mostly sharp.
- Grid background tile: `46px × 46px`.

### Motion
| Name | Spec |
|---|---|
| `cyGlitch` | Chromatic text-shadow on hero + contact H2. Steady state: `0.03em 0 0 rgba(89,240,200,.7), -0.03em 0 0 rgba(157,107,255,.7)`. Brief jumps at ~90–96% of a 5–6s loop using magenta/cyan offsets + ±2px translate. |
| `cyDrift` | Marquee: `translateX(0 → -50%)`, 24s linear infinite. Content duplicated twice for seamless loop. |
| `cyScan` | Scanline: 60px-tall cyan gradient bar sweeping `translateY(-100% → 100vh)`, 7s linear infinite, fixed, pointer-events none. |
| Reveal | `[data-reveal]`: from `opacity:0; translateY(28px)` to `opacity:1; none`, transition `.7s cubic-bezier(.2,.7,.2,1)`, triggered by IntersectionObserver (threshold 0.12), one-shot. |
| Hovers | See Interactions. All `.2–.3s` ease. |

---

## Screens / Views

There is **one page**. `index.dc.html` is a separate landing/index that links to the three explored concepts — for the final build you only need Concept 2; the index is optional reference.

### Global chrome
- **Decorative overlays** (all `position:fixed; inset:0; pointer-events:none`, stacked behind content `z-index 1–4`):
  1. Grid: `linear-gradient(rgba(157,107,255,0.05) 1px, transparent 1px)` + 90deg variant, `background-size:46px 46px`.
  2. Radial glow: `radial-gradient(ellipse at 50% 0%, rgba(157,107,255,0.14), transparent 55%)` + `radial-gradient(ellipse at 90% 90%, rgba(89,240,200,0.10), transparent 50%)`.
  3. Scanline bar (`cyScan`).
  4. Film grain: inline SVG `feTurbulence baseFrequency=0.9`, opacity 0.05, `mix-blend-mode:screen`.
- Content sits at `z-index:10`.

### Header (sticky)
- `position:sticky; top:0`, `padding:14px 26px`, bg `rgba(6,6,8,0.7)` + `backdrop-filter:blur(10px)`, bottom border `rgba(157,107,255,0.3)`.
- **Left**: link to index — 26×26 chip with gradient `linear-gradient(135deg,#9d6bff,#59f0c8)` showing "CB" (color `#060608`, weight 700), then `← INDEX` (Space Mono 12px, opacity 0.6, `white-space:nowrap`). Hidden under 620px.
- **Center nav** (`.cy-nav`, hidden under 780px): Space Mono 12px, letter-spacing 0.12em, links: SOBRE/ABOUT · PROJETOS/WORK · STACK · EXPERIÊNCIA/EXPERIENCE · CONTATO/CONTACT. Hover: bottom-border + color → `#59f0c8` / `#eef1f4`.
- **Right**: language switcher — bordered pill (`1px rgba(157,107,255,0.4)`, radius 2px, overflow hidden) with two buttons `PT-BR` / `EN-US`. Active button: gradient `135deg #9d6bff→#59f0c8`, text `#060608`, weight 700. Inactive: transparent, `rgba(215,219,224,0.6)`. `white-space:nowrap`.

### 1 · Hero
- Top status row (Space Mono 11px, letter-spacing 0.18em, cyan `rgba(89,240,200,0.8)`): left `[ SYS://CEZAR_BONONI ]`, right `STATUS: ONLINE · BUILD 2026.6` (ONLINE in purple; right item hidden < 620px).
- Kicker: `SOFTWARE ENGINEER // CLOUD · AI · FRONTEND` (Space Mono 12px, letter-spacing 0.28em, `#9d6bff`).
- H1: `Cezar` / `Bononi` (Chakra Petch 700, uppercase, color `#eef1f4`, `cyGlitch 5s infinite`).
- Two-column intro: left `sub` = "Cloud · Frontend Modernization · AI-assisted Development." (16–22px). Right `manifesto` = mono blurb with left cyan border, `rgba(89,240,200,0.85)`.
- Button row: `▸ VIEW WORK` (primary gradient) → `#work`; `LinkedIn`, `GitHub`, `DOWNLOAD CV` (ghost). See Interactions for hovers & links.

### 2 · Marquee
- Full-width strip, top+bottom border `rgba(157,107,255,0.3)`, bg `rgba(11,11,16,0.6)`, padding 14px 0.
- Text duplicated ×2, `cyDrift 24s`. Space Mono 700, `clamp(16px,2.4vw,26px)`, letter-spacing 0.06em, color `#59f0c8`.
- Content: `CONTROLLED CHAOS · SOFTWARE ENGINEER · CLOUD · AI WORKFLOW · ANGULAR · TYPESCRIPT · AZURE · DOCKER · CI/CD ·`

### 3 · About / Manifesto (`#about`)
- Grid `repeat(auto-fit, minmax(260px,1fr))`, gap 36px. Left column = label (`// 01_ABOUT` cyan + `SOBRE / MANIFESTO`). Right column (`grid-column: span 2`, `[data-reveal]`):
  - H2 (uppercase): PT "Eu modernizo frontends financeiros e workflows de engenharia." / EN "I modernize financial frontends and engineering workflows."
  - Body: PT "IA não é buzzword no meu trabalho — ela faz parte do workflow de engenharia. Atuo conectando frontend, cloud, arquitetura, testes, UX/CX e restrições reais de produto. Engenharia moderna, técnica e autoral, com código que sobrevive em produção." / EN equivalent (see file).
  - **Stats strip** (3 cells, 1px gap on `rgba(157,107,255,0.22)` bg, cells `#0a0a0f`): `7+` YEARS ENG. · `∞` CONTROLLED CHAOS · `PT/EN` BILINGUAL. Numbers Chakra Petch 32px cyan; labels Space Mono 11px.

### 4 · Selected Work (`#work`)
- Header: `// 02_SELECTED_WORK` (purple) + H2 "Projetos"/"Work".
- Card grid `repeat(auto-fit, minmax(280px,1fr))`, gap 16px, wrapped in `[data-reveal]`.
- **5 cards** (`<a href="#">` — wire to real case pages/modals later). Each: cell `#0a0a0f`, border `rgba(157,107,255,0.25)`, radius 3px, padding 20px.
  - Top row: index `001`–`005` (mono cyan) + `▸`.
  - H3 (Chakra Petch 600, `#eef1f4`).
  - Body 14px muted.
  - Tag chips: mono 10px, purple text, border `rgba(157,107,255,0.4)`, padding 3px 8px.
- Card content (PT/EN both in file):
  1. **001 — Financial Frontend Modernization** · Angular, TypeScript, MFE · "High-traffic banking interface migrated to modular Angular architecture. Zero downtime."
  2. **002 — Cloud Migration & CI/CD** · Azure, Docker, Actions · "Legacy deploys on Azure with pipelines, Docker and automated gates. On-demand releases."
  3. **003 — AI-assisted Workflow** · AI, TDD, DX · "AI in code review, test generation and refactors. Measurable velocity, quality preserved."
  4. **004 — Self-hosted Infra Lab** · Docker, Networking, Linux · "Personal cloud with self-hosted services, reverse proxies and monitoring. Production discipline in a home lab."
  5. **005 — Interactive PWA** · PWA, Performance, UX · "Offline-first PWA with native-feel motion, push and installability. Frontend at the limit."

### 5 · Stack (`#stack`)
- Section bg `rgba(10,10,15,0.5)`, top border `rgba(157,107,255,0.25)`.
- Header `// 03_STACK` (cyan) + H2.
- Grid `repeat(auto-fill, minmax(150px,1fr))`, 1px gaps over `rgba(157,107,255,0.22)` bg → hairline grid of cells. Each cell `#0a0a0f`, padding 16px 14px, Space Mono 13px.
- Items: Angular, React, TypeScript, JavaScript, Azure, Docker, GitHub Actions, Node.js, BFF, TDD, Clean Arch, Hexagonal, UX/CX, AI Tools, Git, CI/CD.
- Hover: cell bg → `#9d6bff`, text → `#060608`.

### 6 · Experience (`#exp`)
- Header `// 04_EXPERIENCE` (purple) + H2.
- 3 rows, each `[data-reveal]`, grid `minmax(120px,180px) 1fr`, top border `rgba(157,107,255,0.25)`, padding `clamp(20px,3vw,32px) 0`.
  - Left: period (mono 13px cyan). Right: role H3 + place (mono 12px purple) + body.
- Entries (no sensitive/company data):
  1. **2022 — Present** · Software Engineer — Financial Products · FINANCIAL SECTOR · HIGH SCALE · "Technical lead on frontend modernization, cloud migration and AI workflow adoption…"
  2. **2019 — 2022** · Frontend Engineer — Enterprise Web · ANGULAR · DESIGN SYSTEMS · BFF · "Built large-scale Angular applications, design systems and BFF layers…"
  3. **Ongoing** · Independent Engineering & Labs · SELF-HOSTED · PWA · OPEN SOURCE · "Personal experiments in self-hosted infrastructure, PWAs and tooling…"

### 7 · Contact (`#contact`)
- Top border cyan `rgba(89,240,200,0.4)`, bg `rgba(8,8,12,0.7)`.
- Kicker `// 05_CONNECT`. H2 (uppercase, `white-space:pre-line`, `cyGlitch 6s`): PT "Vamos\nconstruir" / EN "Let's\nbuild" (the `\n` is an intentional line break).
- Body (PT/EN in file). Buttons: `cezarbononi@gmail.com` (primary, `mailto:`) + `← ALL CONCEPTS` (ghost, → index).

---

## Interactions & Behavior
- **Language switch**: clicking PT-BR / EN-US sets `lang` state, writes `localStorage.cb_lang`, and re-renders all copy. All text content has both languages; tech terms (Angular, Docker…) stay identical. Persist + read on load. Default `pt`.
- **Primary buttons** (gradient): hover → `filter:brightness(1.15)` + `translateY(-2px)`.
- **Ghost buttons**: hover → border + text → `#59f0c8`.
- **Nav links**: hover → bottom-border `#59f0c8`, color `#eef1f4`.
- **Work cards**: hover → `translateY(-5px)`, border → `#9d6bff`, `box-shadow:0 16px 40px -20px #9d6bff`.
- **Stack cells**: hover → bg `#9d6bff`, text `#060608`.
- **Anchor nav**: header links smooth-scroll to `#about/#work/#stack/#exp/#contact` (`scroll-behavior:smooth` on root).
- **External links**: LinkedIn `https://www.linkedin.com/in/cezar-bononi/`, GitHub `https://github.com/cezarbononi`, email `cezarbononi@gmail.com` — all real. **Download CV is a placeholder (`href="#"`)** — wire to the real PDF when available.
- **Responsive**: center nav hides < 780px (add a mobile menu in production); index back-label + right status hide < 620px. All type uses `clamp`.

## State Management
- `lang: 'pt' | 'en'` — persisted in `localStorage['cb_lang']`, default `'pt'`.
- `revealed: Set<Element>` — runtime only; tracks elements that have entered the viewport so a re-render (language switch) keeps them revealed.
- No data fetching. All content is static in the i18n dictionary.

## Assets
- **No external images.** All texture is generated: CSS grid/radial gradients, an inline SVG `feTurbulence` grain filter, and the CSS scanline bar.
- **Fonts**: Google Fonts — `Chakra Petch` (400,500,600,700) and `Space Mono` (400,700). Import via `<link>` or self-host.
- **Icons/glyphs**: Unicode only (`▸` U+25B8, `←` U+2190). No icon library required.

## Files
- `concept-2-cyber-maximalist.dc.html` — the chosen design (full 7 sections). **Primary reference.**
- `index.dc.html` — landing index that links the three explored concepts (optional reference).
- `support.js` — the prototype's rendering runtime (needed only to open the `.dc.html` files in a browser; **not** part of the production build).

> To preview the prototype locally: serve this folder over HTTP (e.g. `npx serve .`) and open `index.dc.html` or `concept-2-cyber-maximalist.dc.html`. Opening via `file://` may block the runtime script.
