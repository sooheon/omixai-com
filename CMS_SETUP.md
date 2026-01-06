# PagesCMS Setup

Visual CMS for editing content via GitHub. Alternative to manual JSON editing.

## Setup

1. Go to [app.pagescms.org](https://app.pagescms.org)
2. Login with GitHub
3. Select `omixai-com` repository
4. CMS reads config from `.pages.yml`

## Content Files

| File | Content |
|------|---------|
| `src/content/common.json` | Nav, footer |
| `src/content/landing.json` | Homepage |
| `src/content/about.json` | Team, timeline |
| `src/content/resources.json` | FAQ |
| `src/content/contact.json` | Contact info |
| `src/content/services/*.json` | Service pages |

All use bilingual format: `{ "ko": "...", "en": "..." }`

## Usage

1. Select content type in sidebar
2. Edit fields
3. Save (commits to GitHub)
4. Site rebuilds automatically

## Extending

Add fields to `.pages.yml`:

```yaml
content:
  - name: landing
    path: src/content/landing.json
    fields:
      - name: hero
        type: object
        fields:
          - name: title
            type: object
            fields:
              - { name: ko, type: string }
              - { name: en, type: string }
```

## Resources

- Docs: https://pagescms.org/docs
- Manual editing: see [CONTENT.md](./CONTENT.md)
