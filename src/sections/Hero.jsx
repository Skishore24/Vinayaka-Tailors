import { buildWhatsAppUrl } from "../utils/whatsapp";
import { ChevronDown, MessageCircle, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import styles from "./Hero.module.css";

const primaryEnquiryUrl = buildWhatsAppUrl(
  "Hello Vinayaka Tailors, I would like to enquire about custom stitching for my clothing. Please let me know how to proceed."
);

const scrollToCollection = (e) => {
  e.preventDefault();
  const target = document.getElementById("collection");
  if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const valuePoints = [
  "Custom-Fit Women's Wear",
  "Traditional & Contemporary Designs",
  "Attention to Stitching Details",
];

export default function Hero() {
  return (
    <section id="home" className={styles.hero} aria-label="Vinayaka Tailors Hero Banner">
      <div className={styles.inner}>
        {/* Left Column: Asymmetric Editorial Content */}
        <div className={styles.contentCol}>
          <div className={styles.eyebrowWrap}>
            <span className={styles.goldLine} aria-hidden="true" />
            <span className={styles.eyebrow}>VINAYAKA TAILORS</span>
          </div>

          <h1 className={styles.heading}>
            Perfect Fit.
            <br />
            <span className={styles.headingAccent}>Timeless Style.</span>
          </h1>

          <p className={styles.supportingText}>
            Discover beautifully tailored women's clothing crafted around your style,
            your preferences, and the details that make every outfit unique.
          </p>

          {/* Value Points */}
          <ul className={styles.valuePoints} aria-label="Key craftsmanship values">
            {valuePoints.map((point) => (
              <li key={point} className={styles.valueItem}>
                <span className={styles.checkIcon} aria-hidden="true">
                  <CheckCircle2 size={16} />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Action CTAs */}
          <div className={styles.actions}>
            <a
              href={primaryEnquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryCta}
            >
              <MessageCircle size={18} aria-hidden="true" />
              <span>Enquire for Stitching</span>
            </a>

            <a
              href="#collection"
              onClick={scrollToCollection}
              className={styles.secondaryCta}
            >
              <span>Explore Our Collection</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right Column: High Quality Tailoring & Women's Fashion Composition */}
        <div className={styles.visualCol} aria-hidden="true">
          <div className={styles.imageCardMain}>
            <img
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1000&q=85"
              alt="Handcrafted embroidered saree blouse with intricate Aari needlework"
              className={styles.mainImage}
              fetchPriority="high"
            />
            <div className={styles.imageOverlay} />
            
            {/* Elegant Floating Badge */}
            <div className={styles.floatingBadge}>
              <Sparkles size={16} className={styles.badgeIcon} />
              <div>
                <span className={styles.badgeTitle}>Bespoke Craftsmanship</span>
                <span className={styles.badgeSubtitle}>Every stitch tailored with care</span>
              </div>
            </div>
          </div>

          {/* Secondary Inset Image */}
          <div className={styles.imageCardSmall}>
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80"
              alt="Tailor sewing threads and fabric craftsmanship"
              className={styles.smallImage}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          const target = document.getElementById("about");
          if (target) {
            const top = target.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: "smooth" });
          }
        }}
        className={styles.scrollDown}
        aria-label="Scroll to about section"
      >
        <span className={styles.scrollText}>Scroll</span>
        <ChevronDown size={18} />
      </a>
    </section>
  );
}
