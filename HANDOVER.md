# OmixAI Website - 인수인계서 (Handover Document)

> **Site:** https://www.omixai.com
> **Last Updated:** 2026-01-14

---

## 1. Accounts & Access

### Required Accounts

| Service | Purpose | URL |
|---------|---------|-----|
| **GitHub** | Code repository | https://github.com/sooheon/omixai-com |
| **Cloudflare** | Hosting & deployment | https://dash.cloudflare.com |
| **PagesCMS** | Content editing | https://pagescms.org |
| **EmailJS** | Contact form emails | https://www.emailjs.com |
| **Google Search Console** | SEO monitoring | https://search.google.com/search-console |
| **Naver Search Console** | Korean SEO | https://searchadvisor.naver.com |

### Access Requirements

- **GitHub:** Need collaborator access to repository
- **Cloudflare:** Need access to the Pages project
- **PagesCMS:** Login with GitHub (auto-connects to repo)
- **EmailJS:** Account credentials for contact form service
- **Search Consoles:** Google/Naver account with site verification

---

## 2. Editing Content with PagesCMS

PagesCMS is the primary way to edit website content without touching code.

### How to Access

1. Go to https://pagescms.org
2. Click "Login with GitHub"
3. Select the `omixai-com` repository
4. You'll see the content sections

### Content Sections

| Section | What It Controls |
|---------|------------------|
| **Common** | Navigation menu labels, footer text |
| **Landing** | Homepage: hero, stats, services preview, testimonials |
| **Resources** | FAQ questions and answers |
| **About** | Team members, investors, company timeline |
| **Contact** | Email address, office address |
| **Services** | Individual service pages (Blood, Tissue, etc.) |
| **Notices** | Company announcements (공지사항) |

### Editing Tips

- **All text fields have Korean (ko) and English (en)** - edit both
- **Save** your changes in PagesCMS
- **Changes auto-deploy** to the live site within 2-3 minutes

---

## 3. Common Content Tasks

### Change Homepage Text

1. Open PagesCMS → **Landing**
2. Edit the **Hero** section for main headline
3. Edit **KPIs** for the statistics
4. Save changes

### Update FAQ

1. Open PagesCMS → **Resources**
2. Find the FAQ section (Ordering, Technical, etc.)
3. Add/edit/remove questions
4. Save changes

### Add/Edit Team Member

1. Open PagesCMS → **About**
2. Find **Team → Members**
3. Add new member or edit existing
4. Upload photo to `public/photos/` folder
5. Save changes

### Update Contact Information

1. Open PagesCMS → **Contact**
2. Edit email or address fields
3. Save changes

---

## 4. Managing Notices (공지사항)

Notices appear as a banner at the top of the website and on the `/notices` page.

### Add a New Notice

1. Open PagesCMS → **Notices**
2. Click **"Add new"**
3. Fill in the fields:

| Field | Description |
|-------|-------------|
| **Slug** | URL-friendly ID (e.g., `2026-01-15-new-announcement`) |
| **Date** | Publication date (YYYY-MM-DD format) |
| **Active** | Check this to show in the banner |
| **Title (ko/en)** | Notice title in both languages |
| **Content (ko/en)** | Notice body text (supports markdown) |

4. Save changes

### Notice Behavior

- Only **one notice** shows in the banner (the most recent with "Active" checked)
- **All notices** appear on the Notices page (`/notices` or `/ko/notices`)
- The **CEO signature** is automatically added
- **Dates** are automatically formatted per language

### Markdown in Notice Content

You can use simple formatting:

```
**Bold text**

1. Numbered list item
2. Another item

- Bullet point
- Another bullet
```

---

## 5. Managing Services

### Edit Existing Service

1. Open PagesCMS → **Services**
2. Select the service (Blood, Tissue, Cell Culture, Custom)
3. Edit any section:
   - **Title/Subtitle/Description**
   - **Features** (key benefits)
   - **Applications** (use cases)
   - **Process** (analysis steps)
   - **Deliverables** (what customer receives)
   - **Sample Requirements** (volume, storage, etc.)
4. Save changes

### Add New Service

1. Open PagesCMS → **Services**
2. Click **"Add new"**
3. Fill in all sections (Korean and English)
4. The **slug** field determines the URL (e.g., `new-service` → `/services/new-service`)
5. Save changes

---

## 6. How Deployment Works

**Automatic deployment:** When content is saved in PagesCMS, it triggers a rebuild on Cloudflare Pages. The site updates within 2-3 minutes.

### Check Deployment Status

1. Go to https://dash.cloudflare.com
2. Navigate to **Pages** → **omixai-com**
3. View **Deployments** tab
4. Green checkmark = successful deployment

### If Something Goes Wrong

1. Check the deployment logs in Cloudflare
2. If a deployment fails, the previous version stays live
3. Contact a developer if builds consistently fail

---

## 7. Domain & DNS (Cloudflare)

The domain `omixai.com` is managed in Cloudflare.

### Current Setup

- **www.omixai.com** → Main site
- **omixai.com** → Redirects to www

### SSL/HTTPS

- Handled automatically by Cloudflare
- Certificate auto-renews

---

## 8. Contact Form (EmailJS)

The contact form on `/contact` sends emails via EmailJS.

### Configuration

Stored in Cloudflare Pages environment variables:
- `PUBLIC_EMAILJS_SERVICE_ID`
- `PUBLIC_EMAILJS_TEMPLATE_ID`
- `PUBLIC_EMAILJS_PUBLIC_KEY`

### If Contact Form Stops Working

1. Check EmailJS dashboard for quota/errors
2. Verify environment variables in Cloudflare Pages settings
3. EmailJS free tier has monthly limits

---

## 9. SEO & Search Consoles

### Google Search Console

- URL: https://search.google.com/search-console
- Monitors search performance for English queries
- Sitemap submitted: `https://www.omixai.com/sitemap-index.xml`

### Naver Search Console

- URL: https://searchadvisor.naver.com
- Monitors search performance for Korean queries
- Important for Korean market visibility

### Sitemap

Automatically generated at `/sitemap-index.xml` on each deployment.

---

## 10. Website Structure

### Pages

| URL | Korean URL | Description |
|-----|------------|-------------|
| `/` | `/ko` | Homepage |
| `/about` | `/ko/about` | About us, team, investors |
| `/contact` | `/ko/contact` | Contact form |
| `/faq` | `/ko/faq` | Frequently asked questions |
| `/technical` | `/ko/technical` | Technical documentation |
| `/notices` | `/ko/notices` | Company announcements |
| `/services/blood` | `/ko/services/blood` | Blood proteomics |
| `/services/tissue` | `/ko/services/tissue` | Tissue proteomics |
| `/services/cell-culture` | `/ko/services/cell-culture` | Cell culture proteomics |
| `/services/custom` | `/ko/services/custom` | Custom analysis |
| `/privacy` | `/ko/privacy` | Privacy policy |

### Theme Toggle

Users can switch between dark and light mode using the moon/sun icon in the header. Their preference is saved in their browser.

### Language Toggle

Users switch between English and Korean using the 한/EN toggle in the header.

---

## 11. Troubleshooting

### Content not updating after PagesCMS save

- Wait 2-3 minutes for deployment
- Check Cloudflare Pages for deployment status
- Clear browser cache and refresh

### Notice not showing in banner

- Ensure **Active** is checked
- Verify date format is correct (YYYY-MM-DD)
- Only one notice shows at a time (most recent active one)

### Contact form not sending

- Check EmailJS dashboard for errors
- Verify monthly quota hasn't been exceeded
- Check Cloudflare environment variables

### Site showing old version

- Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)
- Check Cloudflare for recent deployments
- May take a few minutes for CDN cache to update

---

## 12. Emergency Contacts

For technical issues requiring code changes:

- **Repository:** https://github.com/sooheon/omixai-com
- **Issues:** https://github.com/sooheon/omixai-com/issues

---

## 13. Quick Reference

### To update homepage content
PagesCMS → Landing

### To add a notice/announcement
PagesCMS → Notices → Add new

### To edit FAQ
PagesCMS → Resources

### To update team info
PagesCMS → About → Team

### To edit a service page
PagesCMS → Services → Select service

### To check if site deployed
Cloudflare Dashboard → Pages → omixai-com → Deployments
