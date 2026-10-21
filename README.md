# Vinayaka Tailors — Women's Tailoring & Custom Stitching Website

A complete, production-ready, premium website for **Vinayaka Tailors**, specializing exclusively in women's custom tailoring, designer blouse stitching, bridal wear, traditional dresses, and intricate Aari embroidery.

Built with **Vite + React 19**, styled with **Vanilla CSS Modules**, and architected for high performance, accessibility, technical SEO, and WhatsApp-driven customer enquiries.

---

## Brand Identity

- **Brand Name**: Vinayaka Tailors
- **Tagline**: *"Perfect Fit. Timeless Style."*
- **Category**: Women's Tailoring & Custom Stitching
- **Contact Number**: 9698480433
- **WhatsApp**: +91 9698480433
- **Google Maps**: [https://maps.app.goo.gl/ntVafAavrGTANWVF6](https://maps.app.goo.gl/ntVafAavrGTANWVF6)
- **Palette**: Deep Burgundy (`#702C3B`), Rich Wine (`#51202D`), Muted Antique Gold (`#B89A63`), Warm Ivory (`#FFF9F2`), Pure White (`#FFFFFF`), Soft Blush (`#F4E8E6`), Charcoal (`#292328`)
- **Typography**: Playfair Display (headings) & Poppins (body & navigation)

---

## 15 Confirmed Garment Categories

1. **Anarkali** (Kalidar suits & floor-length gowns)
2. **Blouse** (Saree blouses, princess cut, padded/unpadded)
3. **Bridal Wear** (Heavy lehenga cholis, ceremonial outfits)
4. **Churidar** (Comfortable leg gathers, stretch & cotton)
5. **Designer Wear** (Indo-western fusion silhouettes, party tunics)
6. **Jacket** (Tailored ethnic shrugs, kotis, capes)
7. **Kurta** (Straight cut, A-line, slit kurtas)
8. **Kurta Pyjama** (Comfortable traditional sets)
9. **Kurti** (Casual, office, and festive tunics)
10. **Lehenga** (Full flare skirts, can-can structuring)
11. **Salwar & Kameez** (Gathered patiala, straight salwar sets)
12. **Saree-Related Blouse Stitching** (Custom blouse, fall & piko)
13. **Uniform** (Women's institutional & professional uniforms)
14. **Wedding Gown** (Tailored evening & bridal reception gowns)
15. **Wedding Suit** (Ornate festive celebratory suits)

### Additional Services
- **Aari Embroidery** (Fine zardozi, metallic thread, beadwork on blouses)
- **Hand Embroidery** (Artisanal floral threadwork, mirror highlights)
- **Custom Design Consultation** (Silhouette planning & neckline styling)
- **Garment Alterations & Restyling** (Perfect fitting adjustments)

---

## Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or later
- npm v9 or later

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
Generates production-optimized assets in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## Project Structure

```
src/
├── assets/                  # Brand and visual assets
├── components/
│   ├── BackToTop.jsx        # Scroll-to-top floating button
│   ├── BrandLogo.jsx        # Custom SVG V needle & thread emblem logo
│   ├── Footer.jsx           # Editorial brand footer with quick links & map
│   ├── Header.jsx           # Sticky nav with announcement bar & mobile menu
│   ├── SectionHeading.jsx   # Consistent typography and decorative headings
│   ├── ServiceCard.jsx      # Women's tailoring service cards with WhatsApp CTA
│   └── WhatsAppButton.jsx   # Floating WhatsApp button with prefilled enquiry
├── data/
│   ├── business.js          # Central config: name, phone, map URL, SEO
│   ├── gallery.js           # Portfolio items with categories & descriptions
│   ├── garments.js          # Showcase collection data & filters
│   ├── reviews.js           # Verified customer reviews
│   └── services.js          # Services, 15 categories, 4-step craft, values
├── sections/
│   ├── About.jsx            # "Tailoring That Feels Personal" introduction
│   ├── Contact.jsx          # "Let's Stitch Something Special" form & map
│   ├── Craftsmanship.jsx    # 4-step tailoring process (Design to Stitching)
│   ├── DesignBanner.jsx     # "Have a Design in Mind?" WhatsApp enquiry banner
│   ├── Embroidery.jsx       # Aari & Hand Embroidery spotlight cards
│   ├── FashionDesign.jsx    # Custom silhouette & neckline design consultation
│   ├── Gallery.jsx          # Stitching & Style Gallery with modal lightbox
│   ├── GarmentCollection.jsx# Filterable women's garment collection
│   ├── Hero.jsx             # Asymmetric hero with value points & CTAs
│   ├── TailoringServices.jsx# "Made for Your Style" services grid
│   └── WhyChooseUs.jsx      # Realistic service values on deep wine background
├── utils/
│   ├── validation.js        # Name, 10-digit Indian phone, and garment validation
│   └── whatsapp.js          # Centralized wa.me URL builder with encoding
├── App.jsx                  # Main application container with Helmet SEO
├── index.css                # Global CSS tokens, reset, typography, & focus
└── main.jsx                 # React root entry
public/
├── favicon.svg              # Custom Vinayaka Tailors needle & thread icon
├── robots.txt               # Search engine directives
└── sitemap.xml              # XML sitemap for SEO
```

---

## Features & Highlights

1. **Custom Vector Logo**:
   - Integrates the letter **"V"** with a tailor's sewing needle, looped gold embroidery thread, and delicate stitch markings.
   - Available in horizontal, stacked, emblem-only, light, and dark background variants.

2. **Strict Women's Tailoring Scope**:
   - Zero beauty salon, makeup, skincare, haircut, or nail-polish content.
   - High quality photography exclusively depicting women's Indian ethnic garments, blouses, fabrics, and sewing equipment.

3. **WhatsApp Integration**:
   - Pre-fills polite, relevant messages including the exact garment or service chosen.
   - Centralized encoding through `encodeURIComponent()`.

4. **Technical SEO & Structured Data**:
   - Semantic HTML5 landmarks (`header`, `main`, `section`, `article`, `footer`).
   - Open Graph and Twitter card meta tags.
   - Schema.org `LocalBusiness` structured data with verified telephone, name, and services.

5. **Accessibility (WCAG 2.1)**:
   - Visible gold focus rings on interactive elements.
   - Keyboard accessible navigation and modal lightbox (Escape, Left/Right arrow keys).
   - `prefers-reduced-motion` media query support.

---

## Deployment to Vercel

The project includes a ready-to-deploy [`vercel.json`](file:///c:/Users/kisho/Downloads/Tailor/vercel.json) configuration for Vite with automatic routing, SPA fallback rewrites, and asset cache headers.

### Option A: Via GitHub (Recommended)
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Redesign Vinayaka Tailors website and add Vercel config"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository `Vinayaka-Tailors`.
4. Vercel will automatically detect **Vite** with:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**.

### Option B: Via Vercel CLI
```bash
npx vercel
```
For production release:
```bash
npx vercel --prod
```

---

## License

Private & Proprietary — Vinayaka Tailors. All rights reserved.
