# OmixAI Website

A modern, bilingual website for OmixAI - an AI-powered omics analysis service company specializing in proteomics, multi-omics integration, and biomarker discovery.

## 🌐 Live Site

- **Korean (Default)**: [https://omixai.com](https://omixai.com)
- **English**: [https://omixai.com/en](https://omixai.com/en)

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build) 5.16.3 - Static site generation
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 4.1.17 - Utility-first CSS framework
- **TypeScript**: Strict type checking enabled
- **Deployment**: Static HTML/CSS/JS output (deploy to any static host)

## 📁 Project Structure

```
omixai-com/
├── public/                      # Static assets (images, logos, favicons)
│   ├── bwlogo.png
│   ├── favicon.png
│   └── photos/
├── src/
│   ├── components/              # Reusable Astro components
│   │   ├── Header.astro        # Navigation header with language switcher
│   │   ├── Footer.astro        # Site footer
│   │   └── Layout.astro        # Base layout wrapper
│   ├── content/                 # Content collections
│   │   └── services/
│   │       ├── en/             # English service descriptions
│   │       └── ko/             # Korean service descriptions
│   ├── i18n/                    # Internationalization
│   │   ├── en.json             # English translations
│   │   ├── ko.json             # Korean translations
│   │   └── utils.ts            # Translation utilities
│   ├── pages/                   # File-based routing (Korean default)
│   │   ├── index.astro         # Home page (Korean)
│   │   ├── about.astro         # About page (Korean)
│   │   ├── resources.astro     # Resources page (Korean)
│   │   ├── services/
│   │   │   └── [slug].astro    # Dynamic service pages (Korean)
│   │   └── en/                 # English pages
│   │       ├── index.astro     # Home page (English)
│   │       ├── about.astro     # About page (English)
│   │       ├── resources.astro # Resources page (English)
│   │       └── services/
│   │           └── [slug].astro # Dynamic service pages (English)
│   └── styles/
│       └── global.css          # Global styles with Tailwind imports
├── astro.config.mjs             # Astro configuration
├── tsconfig.json                # TypeScript configuration
└── package.json
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or pnpm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:4321

# Build for production
npm run build
# → Output: ./dist/

# Preview production build
npm run preview
```

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready static site |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## 🌍 Internationalization

The site supports Korean (default) and English using a JSON-based translation system.

### URL Structure

- **Korean**: `/`, `/about`, `/resources`, `/services/{slug}`
- **English**: `/en`, `/en/about`, `/en/resources`, `/en/services/{slug}`

### Adding Translations

1. Add translation keys to both `src/i18n/en.json` and `src/i18n/ko.json`
2. Use in templates: `{t.section.key}`

Example:
```typescript
// src/i18n/en.json
{
  "hero": {
    "title": "AI-Powered Omics Analysis"
  }
}

// In .astro file
const t = getTranslations('en');
<h1>{t.hero.title}</h1>
```

## 📄 Pages

### Main Pages
- **Home** (`/`, `/en`) - Hero, services overview, testimonials, how it works
- **About** (`/about`, `/en/about`) - Company information and team
- **Resources** (`/resources`, `/en/resources`) - FAQ and technical documentation
- **Services** (`/services/{slug}`, `/en/services/{slug}`) - Individual service pages

### Service Pages
1. Proteomics - High-throughput protein analysis
2. Multi-Omics - Integrated multi-omics analysis
3. Biomarkers - Biomarker discovery and validation
4. AI x BI - AI-powered business intelligence for omics

## 🎨 Styling

### Design System
- **Primary Color**: `#09bc8a` (Teal/Green)
- **Secondary Color**: `#172a3a` (Dark Blue)
- **Accent Color**: `#74b3ce` (Light Blue)
- **Background**: `#fafaf8` (Off-white)

### Header Modes
- **Dark Header**: Used on home page (dark background, light text)
- **Light Header**: Used on subpages (light background, dark text)

Pass `lightHeader={true}` to Layout component:
```astro
<Layout lang="ko" title="Page Title" lightHeader={true}>
```

## 🔧 Configuration

### Tailwind CSS
Integrated via Vite plugin (not standard Astro integration). Configuration in `astro.config.mjs`.

### TypeScript
Uses Astro's strict preset for type safety.

## 📦 Deployment

The site generates static HTML/CSS/JS and can be deployed to:
- Netlify
- Vercel
- Cloudflare Pages
- GitHub Pages
- Any static hosting service

Build output is in `./dist/` directory.

## 🤝 Contributing

When making changes:
1. Test both Korean and English versions
2. Ensure translations are complete in both languages
3. Verify light/dark header modes work correctly
4. Test all navigation links
5. Run build before committing: `npm run build`

## 📝 License

Copyright © 2025 OmixAI. All rights reserved.
