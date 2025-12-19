# Content Management Guide

This guide explains how to update text, images, and other content on the OmixAI website without needing to understand the code structure.

## Overview

The OmixAI website uses a **JSON-based content system** instead of a traditional CMS. All text content is stored in JSON files that you can edit with any text editor. The site is bilingual (Korean and English), so most content needs to be updated in both languages.

## Quick Reference

| What to Update | File Location |
|----------------|---------------|
| Navigation menu, hero text, footer | `src/content/ko.json` and `src/content/en.json` |
| Team members (About page) | `src/content/ko.json` and `src/content/en.json` |
| Timeline/milestones | `src/content/ko.json` and `src/content/en.json` |
| Service pages | `src/content/services/ko/*.json` and `src/content/services/en/*.json` |
| FAQ content | `src/content/ko.json` and `src/content/en.json` |
| Team photos | `public/photos/` |
| Company logos | `public/` |

## Editing General Site Content

### Main Translation Files

Most of the website text is in two main files:
- **Korean**: `src/content/ko.json`
- **English**: `src/content/en.json`

These files contain all the text for:
- Navigation menu
- Hero section (homepage headline and subtitle)
- Footer
- About page (team members, investors, timeline)
- Resources page (FAQ, technical docs)
- Contact page

### How to Edit

1. Open the file in a text editor (VS Code, Sublime Text, or even Notepad)
2. Find the section you want to edit using the structure below
3. Change the text inside the quotes
4. **Important**: Keep the structure intact (commas, brackets, quotes)
5. Save the file
6. Rebuild the site (see "Building and Deploying" below)

### File Structure Example

```json
{
  "hero": {
    "title": "Decoding the True Language of Life",
    "subtitle": "Fast, accurate proteomics..."
  }
}
```

To change the hero title, just change the text between the quotes:
```json
{
  "hero": {
    "title": "Your New Title Here",
    "subtitle": "Fast, accurate proteomics..."
  }
}
```

## Common Content Updates

### 1. Changing Hero Section Text

**File**: `src/content/ko.json` and `src/content/en.json`

Look for the `"hero"` section:
```json
"hero": {
  "title": "생명의 진정한 언어를 해독하다",
  "subtitle": "생물학의 숨겨진 암호를 드러내는 빠르고 정확한 프로테오믹스...",
  "cta": "문의하기"
}
```

### 2. Updating Team Members

**File**: `src/content/ko.json` and `src/content/en.json`

Look for the `"about" → "team"` section:
```json
"about": {
  "team": [
    {
      "name": "신동명",
      "title": "CEO",
      "photo": "/photos/shindongmyeong.jpg",
      "education": [
        "2018 ~ 2022     서울대학교 Electrical and Computer Engineering Ph. D"
      ],
      "experience": [
        "2025 ~ 현재     주식회사 오믹스에이아이 대표이사"
      ]
    }
  ]
}
```

**To add a new team member**:
1. Copy an existing team member block
2. Paste it after the last team member (before the closing `]`)
3. Add a comma after the previous team member
4. Update the name, title, photo, education, and experience
5. Add the team member's photo to `public/photos/`

### 3. Adding Timeline Events

**File**: `src/content/ko.json` and `src/content/en.json`

Look for the `"about" → "timeline" → "milestones"` section:
```json
"timeline": {
  "title": "연혁",
  "milestones": [
    {
      "date": "2025. 12",
      "event": "온코크로스와 서비스 용역 계약 체결"
    }
  ]
}
```

**To add a new event**:
1. Add a new object with `date` and `event` fields
2. Place it in chronological order (newest first)
3. Don't forget the comma between items

### 4. Updating FAQ Questions

**File**: `src/content/ko.json` and `src/content/en.json`

Look for the `"resources" → "faq"` section:
```json
"faq": {
  "ordering": {
    "title": "주문 및 가격",
    "items": [
      {
        "question": "어떻게 주문하나요?",
        "answer": "프로젝트 세부 정보와 함께 omixai@omixai.com으로 문의해 주세요..."
      }
    ]
  }
}
```

### 5. Changing Contact Information

**File**: `src/content/ko.json` and `src/content/en.json`

Look for the `"contact"` section:
```json
"contact": {
  "email": {
    "label": "이메일",
    "value": "omixai@omixai.com"
  },
  "phone": {
    "label": "전화",
    "value": "+82-2-1234-5678"
  },
  "address": {
    "label": "서울 본사",
    "value": "서울특별시 동대문구 장한로 43",
    "detail": "광성빌딩 5층, 02629"
  }
}
```

## Editing Service Pages

Service pages have their own dedicated JSON files.

**Location**:
- Korean: `src/content/services/ko/`
- English: `src/content/services/en/`

**Files**:
- `proteomics.json`
- `multi-omics.json`
- `biomarkers.json`
- `ai-bi.json`

### Service File Structure

```json
{
  "slug": "proteomics",
  "title": "Proteomics Analysis",
  "subtitle": "Deep proteome profiling...",
  "description": "Our proteomics service...",
  "features": [
    {
      "icon": "🔬",
      "title": "Deep Coverage",
      "description": "8,000-12,000 proteins identified..."
    }
  ]
}
```

**To edit a service**:
1. Open the appropriate file (e.g., `proteomics.json`)
2. Update the title, subtitle, description, or features
3. Keep the `slug` field unchanged (it's used for the URL)
4. Save and rebuild

**To add a new service**:
1. Create a new JSON file in both `src/content/services/ko/` and `src/content/services/en/`
2. Use the structure above
3. Choose a unique `slug` (this becomes the URL: `/services/your-slug`)
4. Add the service to the navigation menu in `src/content/ko.json` and `src/content/en.json`:

```json
"services": {
  "items": [
    {
      "icon": "🧫",
      "title": "Your Service Name",
      "slug": "your-slug"
    }
  ]
}
```

## Managing Images

### Team Photos

**Location**: `public/photos/`

**How to add/update**:
1. Add the photo file to `public/photos/`
2. Use lowercase filename, no spaces (e.g., `johnsmith.jpg`)
3. Update the team member's `photo` field in the JSON to `/photos/filename.jpg`

**Recommended specs**:
- Format: JPG or PNG
- Size: 400x400px minimum
- Keep file size under 500KB

### Company Logos (Investors)

**Location**: `public/`

**How to add an investor logo**:
1. Add logo image to `public/` folder
2. Update `src/content/ko.json` and `src/content/en.json`:

```json
"investors": {
  "title": "투자자",
  "list": [
    {
      "name": "Company Name",
      "logo": "/logo-filename.png"
    }
  ]
}
```

### Hero Image

The hero background image is located at:
- `public/research.png` (currently used)

To change it:
1. Add new image to `public/`
2. Update `src/pages/index.astro` and `src/pages/en/index.astro`
3. Search for `background-image: url(/research.png)` and replace the filename

## Building and Deploying

After making content changes, you need to rebuild the site:

### 1. Install Dependencies (first time only)
```bash
npm install
```

### 2. Preview Changes Locally
```bash
npm run dev
```
Open http://localhost:4321 in your browser to see your changes.

### 3. Build for Production
```bash
npm run build
```

This creates a `dist/` folder with the production-ready site.

### 4. Deploy
Upload the contents of the `dist/` folder to your web hosting service.

## JSON Editing Tips

### Common Mistakes to Avoid

❌ **Missing comma between items**:
```json
{
  "title": "First"
  "subtitle": "Second"  // ERROR: missing comma
}
```

✅ **Correct**:
```json
{
  "title": "First",
  "subtitle": "Second"
}
```

❌ **Trailing comma on last item**:
```json
{
  "items": [
    "First",
    "Second",  // ERROR: trailing comma
  ]
}
```

✅ **Correct**:
```json
{
  "items": [
    "First",
    "Second"
  ]
}
```

❌ **Unescaped quotes**:
```json
{
  "text": "We're the "best" company"  // ERROR
}
```

✅ **Correct**:
```json
{
  "text": "We're the \"best\" company"
}
```

### Validating JSON

Use a JSON validator to check your changes:
- Online: https://jsonlint.com/
- VS Code: Install "JSON" extension for automatic validation
- Command line: `npm run astro check`

## Troubleshooting

### Site won't build after editing

1. **Check for JSON syntax errors**: Use jsonlint.com to validate your JSON files
2. **Check for missing commas**: Most common error
3. **Check for unescaped quotes**: Use `\"` inside strings
4. **Verify file paths**: Image paths should start with `/` (e.g., `/photos/image.jpg`)

### Changes not appearing

1. **Restart dev server**: Stop `npm run dev` (Ctrl+C) and run it again
2. **Clear browser cache**: Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
3. **Rebuild**: Run `npm run build` again

### Image not showing

1. **Check file path**: Should be `/photos/filename.jpg` (starting with `/`)
2. **Check file exists**: File must be in `public/` folder
3. **Check filename**: Case-sensitive, no spaces

## Content Checklist

When updating content, remember to:

- [ ] Update both Korean (`ko.json`) and English (`en.json`) versions
- [ ] Validate JSON syntax
- [ ] Test locally with `npm run dev`
- [ ] Check both desktop and mobile views
- [ ] Verify all links work
- [ ] Check images load correctly
- [ ] Build for production with `npm run build`
- [ ] Test the production build with `npm run preview`

## Getting Help

If you encounter issues:

1. **Check the build output**: Error messages often point to the exact problem
2. **Validate your JSON**: Use jsonlint.com to find syntax errors
3. **Refer to existing content**: Copy the structure of working content
4. **Check git history**: See what was changed: `git diff`

## Advanced: Adding New Pages

If you need to add entirely new pages (beyond services), you'll need to:

1. Create new `.astro` files in:
   - `src/pages/pagename.astro` (Korean)
   - `src/pages/en/pagename.astro` (English)

2. Add navigation links in `src/components/Header.astro`

3. Add translations to `src/content/ko.json` and `src/content/en.json`

**Note**: This requires understanding Astro components. Consider consulting a developer for this task.

## File Structure Reference

```
omixai-com/
├── public/               # Static assets
│   ├── photos/          # Team member photos
│   ├── bwlogo.png       # Company logo
│   └── *.png/jpg        # Other images
├── src/
│   ├── components/      # Reusable components (edit with caution)
│   ├── content/         # Main content files
│   │   ├── ko.json      # ⭐ Korean site content
│   │   ├── en.json      # ⭐ English site content
│   │   ├── translations.ts  # Translation helper (don't edit)
│   │   └── services/    # Service page content
│   │       ├── ko/      # Korean service pages
│   │       └── en/      # English service pages
│   ├── pages/           # Page templates (edit with caution)
│   └── styles/          # CSS styles (edit with caution)
└── dist/                # Built site (auto-generated, don't edit)
```

⭐ = Files you'll edit most often
