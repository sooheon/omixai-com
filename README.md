# OmixAI Website

Bilingual (EN/KO) static website for OmixAI - AI-powered proteomics services.

- **[CONTENT.md](./CONTENT.md)** - Content editing guide
- **[CLAUDE.md](./CLAUDE.md)** - Developer docs

## Quick Start

```bash
npm install
npm run dev      # localhost:4321
npm run build    # outputs to ./dist/
```

## Structure

```
src/
├── content/           # Bilingual JSON content
│   ├── common.json    # Nav, footer
│   ├── landing.json   # Homepage
│   ├── about.json     # Team, timeline
│   ├── resources.json # FAQ
│   ├── contact.json   # Contact page
│   └── services/      # Service pages
├── pages/             # English (default)
│   └── ko/            # Korean
└── components/        # Astro components
```

## URLs

- English: `/`, `/about`, `/resources`, `/contact`, `/services/{slug}`
- Korean: `/ko`, `/ko/about`, `/ko/resources`, `/ko/contact`, `/ko/services/{slug}`

## Content Format

All content uses bilingual fields:
```json
{ "title": { "ko": "한국어", "en": "English" } }
```

## Tech

Astro 5, Tailwind CSS 4, TypeScript, static output.
