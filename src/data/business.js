/**
 * Central configuration file for all business information.
 * Edit this file to update business name, contact details,
 * location, and other key information across the entire website.
 */

export const business = {
  name: "YOUR BUSINESS NAME",        // ← Replace with actual business name
  tagline: "Women's Tailoring & Bridal Studio",
  description:
    "A dedicated women's tailoring, fashion designing, bridal makeup, embroidery, and beauty services studio — crafted to make every outfit and occasion truly special.",
  phone: "9698480433",
  phoneLink: "tel:+919698480433",
  whatsapp: "+919698480433",
  whatsappNumber: "919698480433",    // Used in wa.me links (no + or spaces)
  mapUrl: "https://maps.app.goo.gl/ntVafAavrGTANWVF6",

  /** Announcement bar message (keep it short and factual) */
  announcement:
    "Personalized Stitching  •  Bridal Services  •  Fashion Designing Classes",

  /**
   * About section description — edit freely to reflect real business story.
   * Do NOT invent owner name, years of experience, or awards.
   */
  aboutText: [
    "Welcome to our women's tailoring and bridal studio — a space dedicated to personalized fashion, elegant stitching, and beauty services tailored to every occasion.",
    "We offer a wide range of services including custom blouse stitching, traditional and designer garment tailoring, Aari and hand embroidery, bridal makeup, saree draping, mehendi, and grooming. We also conduct fashion designing and embroidery classes for those who wish to learn the art of needlework and design.",
    "Every stitch is made with care, every design is crafted with attention to detail, and every customer is treated with warmth and respect. We believe that the right outfit and look can transform how you feel — and that's exactly what we strive to deliver.",
  ],

  /** SEO metadata */
  seo: {
    title:
      "YOUR BUSINESS NAME | Women's Tailoring, Bridal Makeup & Fashion Designing",
    description:
      "Premium women's tailoring, Aari embroidery, bridal makeup & hair styling, saree draping, mehendi, and fashion designing classes. Personalized stitching for every occasion. Enquire on WhatsApp.",
    ogImage: "/og-image.jpg",        // Place a 1200×630 image in /public/
    canonical: "https://yourdomain.com", // ← Replace with actual domain
  },
};
