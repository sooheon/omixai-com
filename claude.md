# OmixAI Website

Astro site for OmixAI, a proteomics/bioanalysis company. Bilingual (EN/KO).

## Tech Stack
- **Framework**: Astro with Cloudflare Pages adapter
- **Styling**: Tailwind CSS, custom CSS variables in `src/styles/global.css`
- **Effects**: tsparticles (click-to-spawn enabled)
- **Forms**: Native mailto (main), Formspree (sample-report-form branch)

## File Structure
- `/src/pages/` - English pages
- `/src/pages/ko/` - Korean pages (mirror structure)
- `/src/content/` - Content data files
  - `translations.ts` - i18n strings
  - `services.json` - Service page content
  - `resources.json` - FAQ and technical docs
  - `common.json` - Shared metadata

## Key Components
- `Layout.astro` - SEO meta tags, JSON-LD (Organization, WebSite), hreflang
- `Breadcrumb.astro` - Visual breadcrumbs + BreadcrumbList schema
- `Header.astro` - Navigation, scroll position preservation on language switch
- `ParticleBackground.astro` - Interactive particle effects

## SEO Implementation
- BreadcrumbList schema on all subpages
- FAQPage schema on `/resources` and `/ko/resources`
- Korean keyword strategy: include "오믹스AI", "오믹스에이아이" in Korean page titles/descriptions
- Canonical URLs and hreflang alternates in Layout

## Deployment
- Cloudflare Pages (manages robots.txt)
- Sitemap via @astrojs/sitemap at `/sitemap-index.xml`

## Conventions
- All content supports `{ en: string, ko: string }` structure for i18n
- Service pages use `[slug].astro` with data from services.json
- Korean pages should include both "오믹스AI" and "오믹스에이아이" for SEO
