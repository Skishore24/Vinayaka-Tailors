import { buildWhatsAppUrl } from "../utils/whatsapp";
import { ChevronDown } from "lucide-react";
import styles from "./Hero.module.css";

const bookingUrl = buildWhatsAppUrl(
  "Hello, I would like to book an appointment. Please share your availability and the services you offer."
);

const scrollToServices = (e) => {
  e.preventDefault();
  const target = document.getElementById("services");
  if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const highlights = [
  { label: "Custom Women's Tailoring" },
  { label: "Bridal Makeup & Styling" },
  { label: "Embroidery & Fashion Designing" },
];

export default function Hero() {
  return (
    <section id="home" className={styles.hero} aria-label="Welcome banner">
      {/* Background image */}
      <div className={styles.bgWrap} aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1400&q=85"
          alt=""
          className={styles.bgImage}
          fetchpriority="high"
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <span className={styles.eyebrow}>
          MADE WITH CARE, STITCHED WITH STYLE
        </span>

        <h1 className={styles.heading}>
          Beautifully Tailored.
          <br />
          <em>Uniquely You.</em>
        </h1>

        <p className={styles.subtext}>
          Discover personalized women's tailoring, intricate embroidery, elegant
          bridal styling, and beauty services designed to make every occasion
          special.
        </p>

        {/* CTA Buttons */}
        <div className={styles.ctas}>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaPrimary}
          >
            Book Your Appointment
          </a>
          <a
            href="#services"
            onClick={scrollToServices}
            className={styles.ctaSecondary}
          >
            Explore Our Services
          </a>
        </div>

        {/* Highlights */}
        <ul className={styles.highlights} aria-label="Key services">
          {highlights.map((h) => (
            <li key={h.label} className={styles.highlight}>
              <span className={styles.highlightDot} aria-hidden="true" />
              {h.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        onClick={scrollToServices}
        className={styles.scrollIndicator}
        aria-label="Scroll to services"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
