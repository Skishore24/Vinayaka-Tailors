import { useState, useEffect, useRef } from "react";
import { business } from "../data/business";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import BrandLogo from "./BrandLogo";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import styles from "./Header.module.css";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Our Services" },
  { href: "#collection", label: "Garment Collection" },
  { href: "#embroidery", label: "Embroidery" },
  { href: "#craftsmanship", label: "Craftsmanship" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const whatsappHeaderUrl = buildWhatsAppUrl(
  "Hello Vinayaka Tailors, I would like to enquire about your women's tailoring and stitching services."
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef(null);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection observer for active navigation state
  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close menu on click outside
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Escape key closes mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className={styles.announcementBar} role="banner">
        <p className={styles.announcementText}>{business.announcement}</p>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
        ref={navRef}
      >
        <div className={styles.inner}>
          {/* Brand Logo */}
          <a
            href="#home"
            className={styles.logoLink}
            onClick={(e) => handleNavClick(e, "#home")}
            aria-label={`${business.name} – Return to top`}
          >
            <BrandLogo variant="horizontal" size={40} />
          </a>

          {/* Desktop Navigation */}
          <nav className={styles.nav} aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`${styles.navLink} ${
                  activeSection === link.href.replace("#", "")
                    ? styles.active
                    : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className={styles.actions}>
            <a
              href={whatsappHeaderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.enquireBtn}
              aria-label="Enquire on WhatsApp"
            >
              <MessageCircle size={16} aria-hidden="true" />
              <span>Enquire on WhatsApp</span>
            </a>

            <a
              href={business.phoneLink}
              className={styles.phoneBtn}
              aria-label={`Call ${business.phone}`}
              title={`Call ${business.phone}`}
            >
              <Phone size={16} aria-hidden="true" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className={styles.drawer}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <nav className={styles.drawerNav} aria-label="Mobile navigation links">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`${styles.drawerLink} ${
                    activeSection === link.href.replace("#", "")
                      ? styles.drawerActive
                      : ""
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className={styles.drawerDivider} />
              <a
                href={whatsappHeaderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.drawerWhatsApp}
              >
                <MessageCircle size={18} aria-hidden="true" />
                Enquire on WhatsApp
              </a>
              <a
                href={business.phoneLink}
                className={styles.drawerPhone}
              >
                <Phone size={18} aria-hidden="true" />
                Call: {business.phone}
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
