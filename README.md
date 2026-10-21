# YOUR BUSINESS NAME — Women's Tailoring & Bridal Studio Website

A complete, professional, responsive React.js website for a women's tailoring, embroidery, bridal makeup, and beauty services business. Built with **Vite + React**, styled with **vanilla CSS Modules**, and designed for elegance, performance, and WhatsApp-first enquiries.

---

## Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or later
- [VS Code](https://code.visualstudio.com/) (recommended)

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Locally

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### 3. Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### 4. Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
src/
├── assets/          # Static assets (add your own images here)
├── components/
│   ├── BackToTop.jsx / .module.css
│   ├── Button.jsx / .module.css
│   ├── Footer.jsx / .module.css
│   ├── Header.jsx / .module.css
│   ├── SectionHeading.jsx / .module.css
│   ├── ServiceCard.jsx / .module.css
│   └── WhatsAppButton.jsx / .module.css
├── data/
│   ├── business.js     ← Edit business name, phone, description, SEO
│   ├── gallery.js      ← Edit gallery images and categories
│   ├── reviews.js      ← Add verified customer reviews here
│   └── services.js     ← Edit all service details, descriptions, and categories
├── sections/
│   ├── About.jsx / .module.css
│   ├── BridalServices.jsx / .module.css
│   ├── Classes.jsx / .module.css
│   ├── Contact.jsx / .module.css
│   ├── Gallery.jsx / .module.css
│   ├── Hero.jsx / .module.css
│   ├── Reviews.jsx / .module.css
│   ├── Services.jsx / .module.css
│   ├── Tailoring.jsx / .module.css
│   └── WhyChooseUs.jsx / .module.css
├── utils/
│   ├── validation.js   ← Form validation helpers
│   └── whatsapp.js     ← WhatsApp URL builder
├── App.jsx
├── index.css           ← Global CSS design system
└── main.jsx
public/
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

---

## How to Customize

### Change the Business Name
Open `src/data/business.js` and update the `name` field:
```js
name: "Priya Fashion Studio",
```

### Change the Phone / WhatsApp Number
In `src/data/business.js`:
```js
phone: "9876543210",
whatsappNumber: "919876543210",  // +91 prefix, no + or spaces
```

### Change the Google Maps Link
In `src/data/business.js`:
```js
mapUrl: "https://maps.app.goo.gl/YourActualLink",
```

### Update the About Section Text
In `src/data/business.js`, edit the `aboutText` array:
```js
aboutText: [
  "First paragraph about your business...",
  "Second paragraph...",
],
```

### Add or Edit Services
Open `src/data/services.js`. Each service has:
- `title` — displayed on the card
- `description` — shown below the title
- `whatsappMsg` — pre-filled WhatsApp message
- `image` — URL to a photo (replace with your own)

### Replace Gallery Images with Real Portfolio Photos
1. Add your images to `src/assets/images/` (or any folder in `public/`)
2. Open `src/data/gallery.js`
3. Replace the `src` URLs with paths to your images:
   ```js
   src: "/portfolio/blouse-design-1.jpg",
   alt: "Custom blouse designed for a wedding",
   ```

### Add Customer Reviews
Open `src/data/reviews.js` and add real review objects:
```js
export const reviews = [
  {
    id: 1,
    name: "Customer Name",
    rating: 5,
    review: "The blouse stitching was perfect and exactly to my measurements.",
    service: "Women's Tailoring",
  },
];
```
The Reviews section will automatically show the carousel once data is present.

### Change the Color Palette
All colors are CSS custom properties in `src/index.css`:
```css
:root {
  --color-brand:  #702C3B;
  --color-accent: #B76E79;
  --color-blush:  #F5E6E8;
  /* ... */
}
```

### Update SEO Metadata
In `src/data/business.js`:
```js
seo: {
  title: "Your Business Name | Women's Tailoring...",
  description: "Your meta description here...",
  canonical: "https://yourdomain.com",
},
```
Also update `public/robots.txt` and `public/sitemap.xml` with your actual domain.

---

## Deployment

### Netlify (Recommended — Free)
1. Run `npm run build`
2. Drag the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Set a custom domain in Netlify settings

### Vercel
```bash
npx vercel
```

### GitHub Pages
Use the [vite-plugin-gh-pages](https://github.com/nickthetj/vite-plugin-gh-pages) plugin.

---

## Testing Checklist

Before publishing, verify:

**Responsiveness**
- [ ] 360px mobile (small Android phone)
- [ ] 390px (iPhone 14)
- [ ] 768px (tablet)
- [ ] 1024px (laptop)
- [ ] 1440px (desktop)

**Links & Buttons**
- [ ] All WhatsApp enquiry buttons open correct chat
- [ ] Call button opens phone dialer
- [ ] Get Directions opens Google Maps
- [ ] Nav links scroll to correct sections
- [ ] Back-to-top button works

**Gallery**
- [ ] Category filter buttons work
- [ ] Lightbox opens on click
- [ ] Keyboard navigation (← → Esc) works in lightbox

**Contact Form**
- [ ] Blank name shows error
- [ ] Invalid phone shows error
- [ ] No service selected shows error
- [ ] Valid form opens WhatsApp with formatted message
- [ ] No fake success message is shown

**Production Build**
- [ ] `npm run build` completes without errors
- [ ] `npm run preview` shows the built site correctly

---

## Support

To make changes or add features, edit the data files first — most customizations require no code changes.

For questions, use the WhatsApp number configured in `src/data/business.js`.
