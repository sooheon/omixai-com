# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based static website project for Plasmidsaurus (though the repo is named `omixai-com`), a DNA sequencing service. It uses Astro 5 with Tailwind CSS 4 for styling.

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

### Project Structure
- `src/pages/` - File-based routing. Each `.astro` or `.md` file becomes a route
- `src/styles/` - Global styles (currently just imports Tailwind CSS)
- `public/` - Static assets (images, fonts, etc.) served directly at root path
  - Files here are not processed by the build system
  - Reference with absolute paths: `/logo.png`, `/images/hero.jpg`
- `astro.config.mjs` - Astro configuration with Tailwind integration via Vite

### Configuration Notes
- Tailwind is integrated through the Vite plugin system (not the standard Astro integration)
- Uses Tailwind CSS 4's `@import "tailwindcss"` syntax in global.css
- TypeScript is configured with Astro's strict preset

### Current Site Structure
The site is a single-page application (index.astro) with:
- Navigation header with internal anchor links and language switcher
- Hero section with CTAs
- Services grid (6 service offerings)
- Testimonials section
- "How It Works" process flow
- Footer

All sections are in the same Astro component - there are no separate components extracted.

### Internationalization (i18n)

The site supports English and Korean using a simple JSON-based approach:

- **Translation files**: `src/i18n/en.json` and `src/i18n/ko.json`
- **Utility**: `src/i18n/utils.ts` provides `getTranslations(lang)` function
- **Pages**:
  - English: `src/pages/index.astro` (default, uses `getTranslations('en')`)
  - Korean: `src/pages/ko/index.astro` (uses `getTranslations('ko')`)
- **Language switcher**: Navigation includes links to switch between `/` (English) and `/ko` (Korean)

To add new translatable content:
1. Add the key/value to both `en.json` and `ko.json`
2. Reference in the template with `{t.section.key}`
