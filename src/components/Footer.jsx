import { business } from "../data/business";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import BrandLogo from "./BrandLogo";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import styles from "./Footer.module.css";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Our Services" },
  { href: "#collection", label: "Garment Collection" },
  { href: "#embroidery", label: "Aari & Embroidery" },
  { href: "#craftsmanship", label: "Our Craftsmanship" },
  { href: "#gallery", label: "Style Gallery" },
  { href: "#contact", label: "Contact & Enquiry" },
];

const serviceLinks = [
  { href: "#services", label: "Women's Blouse Stitching" },
  { href: "#services", label: "Bridal Wear & Lehengas" },
  { href: "#services", label: "Anarkali & Salwar Suits" },
  { href: "#services", label: "Churidar & Kurti Stitching" },
  { href: "#embroidery", label: "Aari Embroidery Work" },
  { href: "#embroidery", label: "Hand Embroidery Detailing" },
  { href: "#services", label: "Saree Blouse Tailoring" },
  { href: "#services", label: "Wedding Gowns & Suits" },
];

const handleScroll = (e, href) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const whatsappFooterMsg = buildWhatsAppUrl(
    "Hello Vinayaka Tailors, I would like to enquire about women's tailoring and stitching services."
  );

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        {/* Brand Column */}
        <div className={styles.brandCol}>
          <div className={styles.brandLogoWrap}>
            <BrandLogo variant="horizontal" theme="dark" size={38} />
          </div>
          <p className={styles.brandTagline}>{business.tagline}</p>
          <p className={styles.brandDesc}>
            {business.description}
          </p>
          <div className={styles.categoryBadge}>
            {business.category}
          </div>
        </div>

        {/* Quick Links Column */}
        <div className={styles.col}>
          <h3 className={styles.colHeading}>Quick Navigation</h3>
          <ul className={styles.linkList}>
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={(e) => handleScroll(e, l.href)}
                  className={styles.link}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Services Column */}
        <div className={styles.col}>
          <h3 className={styles.colHeading}>Stitching Services</h3>
          <ul className={styles.linkList}>
            {serviceLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={(e) => handleScroll(e, l.href)}
                  className={styles.link}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className={styles.col}>
          <h3 className={styles.colHeading}>Contact Us</h3>
          <ul className={styles.contactList}>
            <li>
              <Phone size={16} aria-hidden="true" className={styles.contactIcon} />
              <div className={styles.contactDetail}>
                <span className={styles.contactSmall}>Phone Call</span>
                <a href={business.phoneLink} className={styles.contactLink}>
                  +91 {business.phone}
                </a>
              </div>
            </li>
            <li>
              <MessageCircle size={16} aria-hidden="true" className={styles.contactIcon} />
              <div className={styles.contactDetail}>
                <span className={styles.contactSmall}>WhatsApp Enquiry</span>
                <a
                  href={whatsappFooterMsg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  Chat with Us on WhatsApp
                </a>
              </div>
            </li>
            <li>
              <MapPin size={16} aria-hidden="true" className={styles.contactIcon} />
              <div className={styles.contactDetail}>
                <span className={styles.contactSmall}>Google Maps Location</span>
                <a
                  href={business.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  View on Google Maps →
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p className={styles.copyText}>
            &copy; {CURRENT_YEAR} {business.name}. All rights reserved.
          </p>
          <p className={styles.bottomNote}>
            Specializing exclusively in women's custom tailoring & craftsmanship.
          </p>
        </div>
      </div>
    </footer>
  );
}
