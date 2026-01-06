# CLAUDE.md

Developer reference for the OmixAI website. For content editing, see [CONTENT.md](./CONTENT.md).

## Commands

```bash
npm run dev      # localhost:4321
npm run build    # outputs to ./dist/
npm run preview  # preview production build
```

## Structure

```
src/
├── content/                 # Bilingual JSON content
│   ├── common.json         # Nav, footer, meta
│   ├── landing.json        # Homepage
│   ├── about.json          # Team, investors, timeline
│   ├── resources.json      # FAQ
│   ├── contact.json        # Contact info, form
│   ├── translations.ts     # getTranslations() helper
│   └── services/           # cell-culture.json, tissue.json, blood.json, custom.json
├── components/
│   ├── Layout.astro        # Base layout (lightHeader prop)
│   ├── Header.astro        # Nav with lang switcher
│   ├── Footer.astro
│   ├── AnnouncementBanner.astro
│   └── ParticleBackground.astro
├── pages/                   # English (default)
│   ├── index.astro         # Has inline header
│   ├── about.astro
│   ├── resources.astro
│   ├── contact.astro
│   ├── services/[slug].astro
│   └── ko/                 # Korean mirror
└── styles/global.css
```

## URLs

| English | Korean |
|---------|--------|
| `/` | `/ko` |
| `/about` | `/ko/about` |
| `/services/cell-culture` | `/ko/services/cell-culture` |

## i18n

Content uses bilingual fields:
```json
{ "title": { "ko": "한국어", "en": "English" } }
```

Usage:
```typescript
import { getTranslations } from '../content/translations';
const t = getTranslations('en');
<h1>{t.hero.title}</h1>
```

## Header Modes

- **Dark**: Home page only (default)
- **Light**: All other pages - set `lightHeader={true}` on Layout

```astro
<Layout lang="en" title="About" currentPage="about" lightHeader={true}>
```

## Adding Content

**New page:**
1. Create `src/pages/{name}.astro` and `src/pages/ko/{name}.astro`
2. Add content to appropriate JSON file
3. Update Header.astro nav if needed

**New service:**
1. Create `src/content/services/{slug}.json`
2. Add to `landing.json` services.items

## Colors

- Primary: `#09bc8a` (teal)
- Dark: `#172a3a` (navy)
- Light: `#74b3ce` (blue)
- Background: `#fafaf8`
