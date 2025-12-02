# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based static website for **OmixAI**, a company providing AI-powered omics analysis services (proteomics, multi-omics, biomarkers). The site is bilingual (Korean default, English secondary) and uses a modern design with Astro 5 and Tailwind CSS 4.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on localhost:4321)
npm run dev

# Build for production (outputs to ./dist/)
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI commands
npm run astro [command]
```

## Architecture

### Technology Stack
- **Framework**: Astro 5.16.3 (static site generation)
- **Styling**: Tailwind CSS 4.1.17 (via Vite plugin)
- **TypeScript**: Configured with strict type checking (extends `astro/tsconfigs/strict`)
- **No JavaScript framework**: Pure Astro components with minimal client-side JS

### Project Structure

```
src/
├── components/           # Reusable Astro components
│   ├── Header.astro     # Navigation with language switcher (supports light/dark mode)
│   ├── Footer.astro     # Site footer
│   └── Layout.astro     # Base layout (accepts lightHeader prop)
├── content/             # Content collections
│   └── services/        # Service page content
│       ├── en/          # English service descriptions (JSON)
│       └── ko/          # Korean service descriptions (JSON)
├── i18n/                # Internationalization
│   ├── en.json          # English translations
│   ├── ko.json          # Korean translations
│   └── utils.ts         # getTranslations() helper
├── pages/               # File-based routing
│   ├── index.astro      # Korean home (includes inline header)
│   ├── about.astro      # Korean about (uses Layout component)
│   ├── resources.astro  # Korean resources (uses Layout component)
│   ├── services/
│   │   └── [slug].astro # Korean dynamic service pages
│   └── en/              # English pages mirror structure
│       ├── index.astro
│       ├── about.astro
│       ├── resources.astro
│       └── services/[slug].astro
├── styles/
│   └── global.css       # Tailwind imports + custom styles
└── public/              # Static assets (logos, images, favicons)
```

### URL Structure

**Korean (Default Language)**:
- Home: `/`
- About: `/about`
- Resources: `/resources`
- Services: `/services/{proteomics|multi-omics|biomarkers|ai-bi}`

**English**:
- Home: `/en`
- About: `/en/about`
- Resources: `/en/resources`
- Services: `/en/services/{proteomics|multi-omics|biomarkers|ai-bi}`

### Key Files

**`src/components/Layout.astro`**
- Base layout wrapper for all pages (except home which has inline structure)
- Props: `lang`, `title`, `currentPage`, `serviceSlug`, `lightHeader`
- Includes Header and Footer components
- Handles font loading (Pretendard for Korean, Plus Jakarta Sans for English)

**`src/components/Header.astro`**
- Navigation with services dropdown, language switcher
- Supports two modes via `lightHeader` prop:
  - `false` (default): Dark background (#172a3a), light text, inverted logo
  - `true`: Light background (#74b3ce/20), dark text, normal logo
- Props: `lang`, `currentPage`, `serviceSlug`, `lightHeader`

**`src/pages/index.astro` (Korean)** and **`src/pages/en/index.astro` (English)**
- Home pages have inline header (not using Header component)
- Full-page layout with hero, services, testimonials, how-it-works sections
- Uses dark header style

**`src/pages/about.astro`, `resources.astro`, `services/[slug].astro`**
- Use Layout component with `lightHeader={true}`
- About: Team profiles with education/experience
- Resources: Tabbed interface (FAQ + Technical Docs) with hash-based navigation (#faq, #technical)
- Services: Dynamic pages generated from content collections

### Configuration Notes

- **Tailwind**: Integrated via Vite plugin (not standard Astro integration)
- **i18n**: Simple JSON-based system, no routing library
- **Content**: Service descriptions stored as JSON in `src/content/services/{lang}/`
- **Fonts**:
  - Korean: Pretendard (loaded from CDN)
  - English: Plus Jakarta Sans (loaded from Google Fonts)

## Internationalization (i18n)

### Translation System

Translation files are in `src/i18n/{lang}.json` with nested structure:

```json
{
  "meta": { "title": "..." },
  "nav": { "services": "...", "resources": "...", ... },
  "hero": { "title": "...", "subtitle": "...", ... },
  "services": { "items": [...] },
  ...
}
```

**Usage in components:**
```typescript
import { getTranslations } from '../i18n/utils';
const t = getTranslations('ko'); // or 'en'

<h1>{t.hero.title}</h1>
```

### Adding New Translatable Content

1. Add key/value to **both** `src/i18n/en.json` and `src/i18n/ko.json`
2. Keep structure consistent between files
3. Reference in templates: `{t.section.key}`

### Language Switcher Logic

**Header.astro** constructs language-switching URLs:
- Korean → English: Adds `/en` prefix
- English → Korean: Removes `/en` prefix
- Preserves current page context (home, about, resources, services)

## Design System

### Colors
- **Primary**: `#09bc8a` (Teal/Green) - CTAs, active states
- **Dark**: `#172a3a` (Navy) - Dark header, text
- **Light Blue**: `#74b3ce` - Light header background (with 20% opacity)
- **Accent**: `#508991` - Demo button
- **Background**: `#fafaf8` (Off-white), `#ffffff` (White)
- **Text**: Gray scale (`text-gray-700`, `text-gray-800`, etc.)

### Typography
- **Headings**: Bold, tight letter-spacing (-0.02em), line-height 1.2
- **Body**: Regular weight, line-height 1.7
- **Buttons**: Semi-bold, slight letter-spacing (-0.01em)

### Components

**Header Modes**:
- Dark header: Home page only
- Light header: All other pages (about, resources, services)
- Set via `lightHeader={true}` prop on Layout component

**Buttons**:
- Primary: `bg-[#09bc8a] hover:bg-[#004346]`
- Secondary: `bg-[#508991] hover:bg-[#004346]`
- Shape: `rounded-full` with `px-6 py-2` or `px-8 py-4`

## Development Guidelines

### When Making Changes

1. **Always update both languages**: If you modify English content, update Korean too
2. **Test both languages**: Navigate to `/` and `/en` to verify changes
3. **Check header modes**: Verify light/dark header works on all pages
4. **Verify navigation**: All links should work in both languages
5. **Build before committing**: Run `npm run build` to catch errors

### Adding a New Page

1. Create Korean version in `src/pages/{pagename}.astro`
2. Create English version in `src/pages/en/{pagename}.astro`
3. Add translations to `src/i18n/en.json` and `src/i18n/ko.json`
4. Update Header.astro if adding to navigation
5. Set `currentPage` prop on Layout component
6. Choose `lightHeader={true}` or `{false}` based on design

### Adding a New Service

1. Create JSON files:
   - `src/content/services/ko/{slug}.json`
   - `src/content/services/en/{slug}.json`
2. Structure: `{ "slug": "...", "title": "...", "subtitle": "...", "description": "...", "features": [...] }`
3. Add service link to navigation in both home pages
4. Service pages auto-generate via `[slug].astro` dynamic routes

### Modifying Translations

Edit `src/i18n/{lang}.json` files:
- Keep structure identical between languages
- Use consistent key naming (camelCase)
- Test changes by running dev server

## Common Patterns

### Layout Component Usage
```astro
<Layout
  lang="ko"
  title="페이지 제목 - 오믹스AI"
  currentPage="resources"
  lightHeader={true}
>
  <!-- Page content -->
</Layout>
```

### Resources Page Tabs
Uses hash-based navigation (`#faq`, `#technical`):
- JavaScript listens for hash changes
- Switches active tab panel
- No page reload needed

### Service Pages
Dynamic routes using `[slug].astro`:
- `getStaticPaths()` reads all JSON files from content collections
- Generates pages for each service
- Slug matches JSON filename

## Important Notes

- **Home pages** (`index.astro` and `en/index.astro`) have inline headers, not using Header component
- **All other pages** use Layout component with Header/Footer
- **Light header** should be used on all non-home pages
- **Service content** is in JSON, not MDX or Markdown
- **No client-side routing** - pure static site generation
- **Language switcher** maintains page context (if on /about, switches to /en/about)

## Troubleshooting

**Translations not showing:**
- Verify key exists in both `en.json` and `ko.json`
- Check spelling and structure match
- Ensure `getTranslations()` is called with correct language

**Links broken after language switch:**
- Check Header.astro `otherLangUrl` logic
- Verify URL structure matches pages directory
- Test all navigation paths in both languages

**Build fails:**
- Check TypeScript errors: `npm run astro check`
- Verify all imports are correct
- Ensure all required props are passed to components

**Header not showing correctly:**
- Verify `lightHeader` prop is set correctly on Layout
- Check if page is using Layout component or inline header
- Confirm `currentPage` prop matches page context
