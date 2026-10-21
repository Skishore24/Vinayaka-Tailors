import { useState, useEffect, useRef } from "react";
import { business } from "../data/business";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import { Menu, X, Phone, Scissors } from "lucide-react";
import styles from "./Header.module.css";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#tailoring", label: "Tailoring" },
  { href: "#bridal", label: "Bridal & Beauty" },
  { href: "#classes", label: "Classes" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const whatsappBookingUrl = buildWhatsAppUrl(
  "Hello, I would like to book an appointment. Please share your availability and details."
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef(null);

  // Sticky header shadow on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight active nav link based on scroll position
  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close menu on outside click
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
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

      {/* Main Header */}
      <header
        className={[styles.header, isScrolled ? styles.scrolled : ""].join(" ")}
        ref={navRef}
      >
        <div className={styles.inner}>
          {/* Brand / Logo */}
          <a
            href="#home"
            className={styles.logo}
            onClick={(e) => handleNavClick(e, "#home")}
            aria-label={`${business.name} – Home`}
          >
            <span className={styles.logoIcon} aria-hidden="true">
              <Scissors size={20} strokeWidth={1.8} />
            </span>
            <span className={styles.logoText}>{business.name}</span>
          </a>

          {/* Desktop Nav */}
          <nav className={styles.nav} aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={[
                  styles.navLink,
                  activeSection === link.href.replace("#", "")
                    ? styles.active
                    : "",
                ].join(" ")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className={styles.actions}>
            <a
              href={whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bookBtn}
            >
              Book on WhatsApp
            </a>
            <a href={business.phoneLink} className={styles.phoneBtn} aria-label="Call us">
              <Phone size={16} />
            </a>
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {menuOpen && (
          <div className={styles.drawer} role="dialog" aria-label="Navigation menu">
            <nav aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={[
                    styles.drawerLink,
                    activeSection === link.href.replace("#", "")
                      ? styles.drawerActive
                      : "",
                  ].join(" ")}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.drawerBook}
              >
                Book on WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
