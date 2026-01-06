# OmixAI Website Changelog
## December 23-26, 2024

---

## 🎨 Visual & Design Updates

### Particle Animation Background
- Added animated particle background to landing page
- Modern, high-tech aesthetic matching brand identity
- Subtle movement creates dynamic feel without distraction

### Light Theme System
- Implemented semantic color token system throughout site
- All colors now use CSS variables (backgrounds, text, borders)
- Foundation for future light/dark theme toggle

### About Page Layout
- Improved leadership bio presentation
- Better visual hierarchy for education and experience sections

### Landing Page Polish
- Updated metrics labels for clarity
- Refined styling for hero section

---

## 📄 Content & Structure Changes

### Service Pages Reorganization
**Content Added:**
- Comprehensive "Applications" section for each service
- Detailed 6-step "Analysis Process" workflows
- Complete "Deliverables" lists
- "Sample Requirements" specifications with processing instructions

**Content Removed:**
- Technical Specifications sections (consolidated into Resources page)

**New Section Order:**
1. Overview with key features
2. Applications (moved to top - most important for users)
3. Analysis Process
4. Deliverables
5. Sample Requirements
6. Call-to-Action

### Service Consolidation
**Before:** 9 separate services (cell-lines, organoid, plasma, serum, FFPE, frozen-tissue, CSF, conditioned-media, custom)

**After:** 4 main service categories
- Cell Culture (includes cell lines, organoids)
- Tissue (includes FFPE, frozen)
- Blood (includes plasma, serum)
- Custom (includes CSF, conditioned media, specialty samples)

**Benefit:** Clearer service offerings, easier navigation, less overwhelming for users

---

## 📚 Resources Page Enhancement

### Technical Documentation (NEW)
Added comprehensive service-specific technical content:
- Sample Requirements by Service
- Analysis Workflows by Service
- Standard Deliverables

**Navigation:** Tab-based interface with 4 service tabs (Cell Culture, Tissue, Blood, Custom)
- Reduces vertical scrolling
- Easy comparison between services
- Each section operates independently

### FAQ Redesign
- Animated accordion interface (smooth expand/collapse)
- Visual indicators (plus/minus icons)
- Cleaner layout with border separators
- Hashtag navigation (#faq, #technical)

---

## 📧 Contact Page & Order Form (NEW)

### Order Form Implementation
**New Features:**
- Professional order form on contact page
- Fields: Sample Type (dropdown), Name, Email, CC (optional), Message (optional)
- Real-time validation
- Success/error messaging
- Bilingual support (Korean/English)

**Integration:**
- EmailJS for form submission (no backend needed)
- Environment variable configuration for security
- 300 free submissions/month on EmailJS free tier

### Contact Page Layout
**Before:** Simple contact info + map

**After:** Two-column layout
- Left: Order form + contact info
- Right: Google Maps embed (zoom level 15)

### Service Page Integration
- "Order Now" buttons now link to contact page (previously opened email client)
- Smoother user flow from service pages to order form

---

## 🔧 Technical Improvements

### Environment Configuration
- Added `.env.example` for easy setup
- EmailJS credentials managed securely
- Ready for Cloudflare Pages deployment

### Build Performance
- Build time: ~1.5-2 seconds
- Static site generation (all pages pre-rendered)
- Minimal client-side JavaScript

---

## 📊 Summary of Changes

### Pages Modified
- Landing page (index)
- About page
- Contact page (major redesign)
- Resources page (new content + tabs)
- Service pages (content expansion)
- All pages: bilingual (Korean + English)

### Files Changed
- **Latest commit:** 7 files (order form)
- **Last 3 days total:** 30+ files
- **Net change:** +2,600 lines added, -1,500 lines removed

### New Features
1. ✅ Particle animation background
2. ✅ Theme-ready color system
3. ✅ Service page content expansion (4 services × 2 languages)
4. ✅ Resources technical documentation
5. ✅ FAQ accordion interface
6. ✅ Contact page order form
7. ✅ Tab-based navigation

---

## 🚀 Next Steps

### To Activate Order Form
1. Create EmailJS account (emailjs.com)
2. Configure email service and template
3. Set environment variables:
   - `PUBLIC_EMAILJS_SERVICE_ID`
   - `PUBLIC_EMAILJS_TEMPLATE_ID`
   - `PUBLIC_EMAILJS_PUBLIC_KEY`

### Future Considerations
- Light/dark theme toggle
- Form file uploads
- reCAPTCHA spam protection
- Analytics integration

---

*Last Updated: December 26, 2024*
