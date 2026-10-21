import { business } from "../data/business";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import { Phone, MapPin, Scissors, Heart } from "lucide-react";
import styles from "./Footer.module.css";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const serviceLinks = [
  { href: "#tailoring", label: "Women's Tailoring" },
  { href: "#tailoring", label: "Blouse Stitching" },
  { href: "#bridal", label: "Bridal Makeup" },
  { href: "#bridal", label: "Saree Draping" },
  { href: "#classes", label: "Fashion Designing Classes" },
  { href: "#bridal", label: "Mehendi Services" },
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

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logoRow}>
            <span className={styles.logoIcon} aria-hidden="true">
              <Scissors size={18} strokeWidth={1.8} />
            </span>
            <span className={styles.logoText}>{business.name}</span>
          </div>
          <p className={styles.brandDesc}>{business.tagline}</p>
          <p className={styles.brandAbout}>{business.description}</p>
        </div>

        {/* Quick Links */}
        <div className={styles.col}>
          <h3 className={styles.colHeading}>Quick Links</h3>
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

        {/* Services */}
        <div className={styles.col}>
          <h3 className={styles.colHeading}>Our Services</h3>
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

        {/* Contact */}
        <div className={styles.col}>
          <h3 className={styles.colHeading}>Contact</h3>
          <ul className={styles.contactList}>
            <li>
              <Phone size={14} aria-hidden="true" />
              <a href={business.phoneLink} className={styles.link}>
                {business.phone}
              </a>
            </li>
            <li>
              <span className={styles.waIcon} aria-hidden="true">💬</span>
              <a
                href={buildWhatsAppUrl(
                  "Hello, I would like to enquire about your services."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                WhatsApp Us
              </a>
            </li>
            <li>
              <MapPin size={14} aria-hidden="true" />
              <a
                href={business.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Get Directions
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} {business.name}. All rights
          reserved.
        </p>
        <p className={styles.madeWith}>
          Made with <Heart size={12} aria-label="love" className={styles.heart} /> for every occasion
        </p>
      </div>
    </footer>
  );
}
