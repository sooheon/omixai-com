# PagesCMS Setup Guide

This guide explains how to set up and use PagesCMS for the OmixAI website.

## What is PagesCMS?

PagesCMS is a visual CMS that runs on top of GitHub, allowing non-technical users to edit website content through a graphical interface instead of editing JSON files manually.

**Key Features:**
- Visual editor with rich-text support
- Media management (drag-and-drop uploads)
- Mobile-responsive
- No database required - edits go directly to GitHub
- Free and open-source (MIT license)

## Setup Options

### Option 1: Use Hosted Version (Recommended)

1. Go to [app.pagescms.org](https://app.pagescms.org)
2. Click "Login with GitHub"
3. Authorize PagesCMS to access your repository
4. Select the `omixai-com` repository
5. PagesCMS will automatically detect the `.pages.yml` configuration

### Option 2: Self-Host

1. Fork the [PagesCMS repository](https://github.com/pages-cms/pages-cms)
2. Deploy to Vercel (free) using the "Deploy" button
3. Configure GitHub OAuth app
4. Point to your repository

## Configuration File

The site's CMS configuration is in `.pages.yml` at the repository root. This file defines:
- Where media files are stored
- What content can be edited
- The structure of each content type

## Current CMS Coverage

The `.pages.yml` file currently provides editing for:

### ✅ Configured
- **Korean Site Content** (`src/content/ko.json`)
  - Meta information
  - Navigation labels
  - Hero section
  - Footer tagline

- **English Site Content** (`src/content/en.json`)
  - Meta information
  - Navigation labels
  - Hero section
  - Footer tagline

- **Service Pages**
  - Korean services (`src/content/services/ko/*.json`)
  - English services (`src/content/services/en/*.json`)

- **Media**
  - All files in `public/` folder
  - Team photos in `public/photos/`

### ⚠️ Not Yet Configured

The following content is **not yet editable** through the CMS and still requires manual JSON editing:

- About page content (team members, investors, timeline)
- Resources page (FAQ sections)
- Contact information
- Testimonials
- Services navigation items

## Extending the CMS

To add more editable sections, update `.pages.yml`. Here's how:

### Example: Adding Team Members to CMS

```yaml
content:
  - name: team-members
    label: Team Members (Korean)
    type: file
    path: src/content/ko.json
    fields:
      - name: about
        label: About Section
        type: object
        fields:
          - name: team
            label: Team Members
            type: list
            fields:
              - name: name
                label: Name
                type: string
              - name: title
                label: Title
                type: string
              - name: photo
                label: Photo
                type: image
              - name: education
                label: Education
                type: list
                item_type: string
              - name: experience
                label: Experience
                type: list
                item_type: string
```

### Example: Adding FAQ to CMS

```yaml
- name: faq-ordering
  label: FAQ - Ordering
  type: file
  path: src/content/ko.json
  fields:
    - name: resources
      type: object
      fields:
        - name: faq
          type: object
          fields:
            - name: ordering
              type: object
              fields:
                - name: items
                  label: Questions
                  type: list
                  fields:
                    - name: question
                      label: Question
                      type: string
                    - name: answer
                      label: Answer
                      type: text
```

## Using the CMS

### Logging In

1. Visit [app.pagescms.org](https://app.pagescms.org)
2. Log in with your GitHub account
3. Select the OmixAI repository
4. You'll see a list of editable content types

### Editing Content

1. **Select content type** from the sidebar (e.g., "Korean Site Content")
2. **Edit fields** using the visual editor
3. **Preview changes** (if available)
4. **Save** - This creates a commit to your GitHub repository
5. **Deploy** - The site will automatically rebuild (if CI/CD is configured)

### Uploading Media

1. Click **Media** in the sidebar
2. **Drag and drop** images or click to browse
3. Images are uploaded to the `public/` folder
4. Use the uploaded URLs in content fields

### Best Practices

- **Always edit both languages**: Remember to update both Korean and English content
- **Use meaningful commit messages**: PagesCMS auto-generates commits, but you can customize them
- **Test changes**: Use the preview deployment to verify changes before publishing
- **Backup**: All changes are in Git, so you can always revert if needed

## Workflow

### Content Editor Workflow

1. Log in to PagesCMS
2. Navigate to the content you want to edit
3. Make changes in the visual editor
4. Save (this commits to GitHub)
5. Wait for automatic deployment
6. Verify changes on the live site

### Developer Workflow

1. Pull latest changes: `git pull origin main`
2. Make code changes locally
3. Test: `npm run dev`
4. Commit and push
5. Changes from both CMS and code are merged via Git

## Troubleshooting

### Changes not appearing on site

- **Check build status**: Look at your CI/CD pipeline (Vercel, Netlify, etc.)
- **Clear cache**: Hard refresh your browser (Cmd+Shift+R or Ctrl+Shift+R)
- **Verify commit**: Check GitHub to ensure the commit was made

### Can't see a content field in CMS

- **Check `.pages.yml`**: The field must be defined in the configuration
- **Restart CMS**: Log out and log back in to refresh configuration
- **Check field type**: Ensure the field type matches the content structure

### Permission denied

- **Check GitHub access**: Ensure your GitHub account has write access to the repository
- **Reauthorize**: Go to GitHub settings → Applications → PagesCMS → Grant access

## Advanced Configuration

### Adding Content Validation

```yaml
fields:
  - name: email
    label: Email Address
    type: string
    required: true
    pattern: '^[^\s@]+@[^\s@]+\.[^\s@]+$'
```

### Adding Help Text

```yaml
fields:
  - name: slug
    label: URL Slug
    type: string
    help: 'Used in the URL. Use lowercase and hyphens only (e.g., "my-service")'
```

### Setting Default Values

```yaml
fields:
  - name: published
    label: Published
    type: boolean
    default: false
```

## Migration Path

### Current State
- Manual JSON editing via text editor
- Requires technical knowledge
- Risk of syntax errors

### With PagesCMS
- Visual editing interface
- No JSON knowledge required
- Automatic validation
- Change history via Git

### Gradual Migration
You can use both approaches simultaneously:
- Use CMS for simple content updates (text, images)
- Use manual editing for complex structural changes
- Extend CMS configuration as needed

## Resources

- **PagesCMS Documentation**: https://pagescms.org/docs
- **Field Types**: https://pagescms.org/docs/configuration#fields
- **GitHub Repository**: https://github.com/pages-cms/pages-cms
- **OmixAI Content Guide**: See `CONTENT.md` for manual editing reference

## Next Steps

1. **Test the setup**: Log in to PagesCMS and try editing content
2. **Extend configuration**: Add more fields to `.pages.yml` as needed
3. **Train users**: Share this guide with content editors
4. **Monitor**: Watch for any issues or edge cases
5. **Iterate**: Refine the configuration based on user feedback

## Support

For issues specific to:
- **PagesCMS**: https://github.com/pages-cms/pages-cms/issues
- **OmixAI site**: Contact the development team
- **Content editing**: See `CONTENT.md` for manual editing guide
