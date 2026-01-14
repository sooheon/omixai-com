# OmixAI Website - 인수인계서 (Handover Document)

> **Last Updated:** 2026-01-14
> **Site:** https://www.omixai.com
> **Stack:** Astro 5 + Tailwind CSS 4 + Cloudflare Pages

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 1. Project Structure

```
omixai-com/
├── src/
│   ├── pages/                    # URL routes
│   │   ├── index.astro          # / (English homepage)
│   │   ├── about.astro          # /about
│   │   ├── contact.astro        # /contact
│   │   ├── faq.astro            # /faq
│   │   ├── technical.astro      # /technical
│   │   ├── notices.astro        # /notices (공지사항)
│   │   ├── privacy.astro        # /privacy
│   │   ├── services/
│   │   │   └── [slug].astro     # /services/{slug} (dynamic)
│   │   └── ko/                  # Korean versions (/ko/*)
│   │       └── (same structure)
│   │
│   ├── components/
│   │   ├── Layout.astro         # Master layout (SEO, fonts, structure)
│   │   ├── Header.astro         # Navigation + language/theme toggle
│   │   ├── Footer.astro         # Footer
│   │   ├── AnnouncementBanner.astro  # Notice banner + modal
│   │   ├── Breadcrumb.astro     # Breadcrumb with JSON-LD
│   │   └── ParticleBackground.astro  # Animated background
│   │
│   ├── content/                 # All content data
│   │   ├── translations.ts      # Translation helper functions
│   │   ├── content.config.ts    # Collection schemas (Zod)
│   │   ├── common.json          # Nav, footer text
│   │   ├── landing.json         # Homepage content
│   │   ├── about.json           # Team, investors, timeline
│   │   ├── resources.json       # FAQ sections
│   │   ├── contact.json         # Contact info
│   │   ├── services/            # Service pages (collection)
│   │   │   ├── blood.json
│   │   │   ├── cell-culture.json
│   │   │   ├── tissue.json
│   │   │   └── custom.json
│   │   └── notices/             # Announcements (collection)
│   │       └── 2025-12-23-share-issuance.json
│   │
│   └── styles/
│       └── global.css           # Tailwind + theme variables
│
├── public/                      # Static assets (images, favicon)
├── .pages.yml                   # PagesCMS configuration
├── astro.config.mjs             # Astro configuration
├── wrangler.jsonc               # Cloudflare Workers config
└── package.json
```

---

## 2. Bilingual Content System

**All user-facing text uses this pattern:**

```json
{
  "title": {
    "ko": "한글 제목",
    "en": "English Title"
  }
}
```

**In Astro pages:**

```astro
---
import { getTranslations } from '../content/translations';
const t = getTranslations('en');  // or 'ko'
const lang = 'en';
---
<h1>{t.hero.title}</h1>
```

**Language routing:**
- English: `/`, `/about`, `/services/blood`
- Korean: `/ko`, `/ko/about`, `/ko/services/blood`

---

## 3. Content Management

### 3.1 Using PagesCMS

The site is configured for [PagesCMS](https://pagescms.org). Configuration is in `.pages.yml`.

**To edit content via CMS:**
1. Go to PagesCMS and connect the repository
2. Edit content through the visual interface
3. Changes are saved to JSON files in `src/content/`
4. Commit and deploy

### 3.2 Manual Content Editing

**Homepage (`src/content/landing.json`):**
- Hero section (title, subtitle, CTA buttons)
- KPIs (4 stats displayed)
- Services showcase
- Testimonials
- How it works steps

**Navigation & Footer (`src/content/common.json`):**
- Nav labels
- Footer tagline

**FAQ (`src/content/resources.json`):**
- Three sections: ordering, samplePrep, technical
- Each has title + items array

**About Page (`src/content/about.json`):**
- Team members (name, title, image)
- Investors
- Timeline milestones

---

## 4. Adding/Editing Services

Services are in `src/content/services/`. Each service is a JSON file.

**To add a new service:**

1. Create `src/content/services/{slug}.json`:

```json
{
  "slug": "new-service",
  "title": { "ko": "새 서비스", "en": "New Service" },
  "subtitle": { "ko": "부제목", "en": "Subtitle" },
  "description": { "ko": "설명", "en": "Description" },
  "features": [
    {
      "title": { "ko": "특징 1", "en": "Feature 1" },
      "description": { "ko": "설명", "en": "Description" }
    }
  ],
  "applications": {
    "title": { "ko": "응용 분야", "en": "Applications" },
    "items": [
      {
        "title": { "ko": "응용 1", "en": "Application 1" },
        "description": { "ko": "설명", "en": "Description" }
      }
    ]
  },
  "process": {
    "title": { "ko": "분석 과정", "en": "Analysis Process" },
    "steps": [
      {
        "title": { "ko": "1단계", "en": "Step 1" },
        "description": { "ko": "설명", "en": "Description" }
      }
    ]
  },
  "deliverables": {
    "title": { "ko": "제공 결과", "en": "Deliverables" },
    "items": [
      { "ko": "결과물 1", "en": "Deliverable 1" }
    ]
  },
  "sampleRequirements": {
    "title": { "ko": "샘플 요구사항", "en": "Sample Requirements" },
    "items": [
      {
        "label": { "ko": "양", "en": "Volume" },
        "value": { "ko": "100μL", "en": "100μL" }
      }
    ]
  }
}
```

2. The page will be auto-generated at `/services/{slug}` and `/ko/services/{slug}`

3. Add to nav dropdown in `src/content/common.json` if needed

---

## 5. Notices System (공지사항)

Notices appear in a banner at the top of the site and on the `/notices` page.

### Adding a Notice

Create `src/content/notices/{YYYY-MM-DD-slug}.json`:

```json
{
  "slug": "2025-12-23-share-issuance",
  "date": "2025-12-23",
  "active": true,
  "title": {
    "ko": "신주발행공고",
    "en": "New Share Issuance Notice"
  },
  "content": {
    "ko": "공고 내용 (마크다운 지원)\n\n1. 항목 1\n2. 항목 2",
    "en": "Notice content (markdown supported)\n\n1. Item 1\n2. Item 2"
  }
}
```

### Notice Behavior

- **Banner:** Shows the most recent notice with `active: true`
- **If no active notices:** Shows most recent by date
- **Notices page:** Shows all notices, newest first
- **Badge:** "Latest" / "최신" shown for active notice
- **Signature:** Auto-appended (CEO name)
- **Date:** Auto-formatted per language

---

## 6. Theme System (Dark/Light Mode)

**CSS Variables** in `src/styles/global.css`:

```css
:root {
  /* Dark theme (default) */
  --bg-page: #0f172a;
  --text-heading: #ffffff;
  --text-body: #e2e8f0;
  /* ... */
}

[data-theme="light"] {
  /* Light theme */
  --bg-page: #f8fafc;
  --text-heading: #0f172a;
  --text-body: #334155;
  /* ... */
}
```

**Brand colors (constant):**
- `--brand-green: #31c27c`
- `--brand-teal: #1ea4a1`
- `--brand-blue: #1a5fbe`

**Toggle logic** is in `Header.astro`. Theme is stored in `localStorage.theme`.

---

## 7. Deployment

### Cloudflare Pages (Automatic)

1. Push to `master` branch
2. Cloudflare Pages auto-builds and deploys
3. Build command: `npm run build`
4. Output directory: `dist/`

### Manual Deploy

```bash
npm run build
npx wrangler pages deploy dist/
```

### Environment Variables

For contact form (EmailJS), set in Cloudflare Pages dashboard:
- `PUBLIC_EMAILJS_SERVICE_ID`
- `PUBLIC_EMAILJS_TEMPLATE_ID`
- `PUBLIC_EMAILJS_PUBLIC_KEY`

---

## 8. Key Files Reference

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Build config, integrations |
| `wrangler.jsonc` | Cloudflare Workers settings |
| `.pages.yml` | PagesCMS schema |
| `src/content/translations.ts` | `getTranslations()` helper |
| `src/content/content.config.ts` | Collection schemas (Zod) |
| `src/components/Layout.astro` | SEO, fonts, page structure |
| `src/components/Header.astro` | Navigation, theme/language toggle |
| `src/styles/global.css` | Theme variables, custom styles |

---

## 9. Common Tasks

### Change navigation labels
Edit `src/content/common.json` → `nav` section

### Update homepage hero
Edit `src/content/landing.json` → `hero` section

### Add team member
Edit `src/content/about.json` → `team.members` array

### Add FAQ question
Edit `src/content/resources.json` → appropriate section's `items` array

### Change footer text
Edit `src/content/common.json` → `footer` section

### Update SEO meta
Edit the `<Layout>` props in each page file (title, description)

---

## 10. Troubleshooting

### Content not showing
- Check JSON has both `ko` and `en` keys
- Verify `getTranslations()` called with correct language
- Rebuild after editing content files

### Theme not persisting
- Check `localStorage.theme` in browser DevTools
- Verify `data-theme` attribute on `<html>`

### New service page not appearing
- Verify JSON file is in `src/content/services/`
- Check `slug` field matches desired URL
- Rebuild: `npm run build`

### Notice not showing in banner
- Set `active: true` in notice JSON
- Verify date format: `YYYY-MM-DD`
- Check for JSON syntax errors

### Build fails
```bash
# Check TypeScript errors
npx tsc --noEmit

# Check for missing dependencies
npm install
```

---

## 11. Tech Stack

| Technology | Version | Docs |
|------------|---------|------|
| Astro | 5.16.3 | https://docs.astro.build |
| Tailwind CSS | 4.1.17 | https://tailwindcss.com/docs |
| TypeScript | Latest | https://www.typescriptlang.org |
| Cloudflare Pages | - | https://developers.cloudflare.com/pages |
| marked | 17.0.1 | https://marked.js.org |
| tsparticles | 3.9.1 | https://particles.js.org |

---

## 12. SEO Checklist

- [x] Sitemap auto-generated at `/sitemap-index.xml`
- [x] Hreflang tags for EN/KO alternates
- [x] JSON-LD structured data (Organization, Breadcrumb, FAQ)
- [x] Google Search Console verified
- [x] Naver Search Console verified
- [x] Canonical URLs set
- [x] Open Graph / Twitter Cards configured

**Verification codes** (in `Layout.astro`):
- Google: `kN6uY4QFgi3IE87l3l8ZenJ1zduAASO2GVdfaGbjRmA`
- Naver: `9737a4d3c43d0ca09fcc72e421b92323e78c92c6`

---

## 13. File Naming Conventions

- **Pages:** `kebab-case.astro`
- **Components:** `PascalCase.astro`
- **Content JSON:** `kebab-case.json`
- **Notices:** `YYYY-MM-DD-slug.json`
- **Services:** `{slug}.json` (matches URL)

---

## Summary

This is a static Astro site with:
- **Bilingual support** (EN/KO) via JSON content files
- **PagesCMS integration** for non-technical content editing
- **Theme system** (dark/light mode)
- **Notices system** with banner + archive page
- **Cloudflare Pages** deployment with SSR capability

All content is in `src/content/`. Edit JSON files, rebuild, deploy. For structural changes, edit `.astro` files in `src/pages/` and `src/components/`.
