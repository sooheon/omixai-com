# Content Editing Guide

Edit JSON files in `src/content/` to update site content. All fields use bilingual format:

```json
{ "title": { "ko": "한국어", "en": "English" } }
```

## File Locations

| Content | File |
|---------|------|
| Nav, footer | `common.json` |
| Homepage | `landing.json` |
| Team, timeline | `about.json` |
| FAQ | `resources.json` |
| Contact info | `contact.json` |
| Services | `services/*.json` |
| Images | `public/` or `public/photos/` |

## Examples

**Hero text** (`landing.json`):
```json
"hero": {
  "title": { "ko": "생명의 언어를 해독하다", "en": "Decoding Life" }
}
```

**Team member** (`about.json`):
```json
"team": [{
  "name": { "ko": "홍길동", "en": "Gildong Hong" },
  "title": "CEO",
  "photo": "/photos/gildong.jpg",
  "education": { "ko": ["서울대 Ph.D"], "en": ["Seoul Nat'l Univ Ph.D"] }
}]
```

**FAQ item** (`resources.json`):
```json
"faq": {
  "ordering": {
    "items": [{
      "question": { "ko": "어떻게 주문하나요?", "en": "How do I order?" },
      "answer": { "ko": "이메일로 문의하세요.", "en": "Email us." }
    }]
  }
}
```

## Adding Images

1. Add file to `public/photos/` (lowercase, no spaces)
2. Reference as `/photos/filename.jpg`

## Testing

```bash
npm run dev
```
- English: http://localhost:4321
- Korean: http://localhost:4321/ko

## Common JSON Mistakes

```json
// Missing comma
{ "a": "1" "b": "2" }      // wrong
{ "a": "1", "b": "2" }     // right

// Trailing comma
{ "items": ["a", "b",] }   // wrong
{ "items": ["a", "b"] }    // right

// Unescaped quotes
{ "text": "say "hello"" }  // wrong
{ "text": "say \"hello\"" } // right
```

Validate at https://jsonlint.com if build fails.
