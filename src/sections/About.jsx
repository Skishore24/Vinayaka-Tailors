import { business } from "../data/business";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import SectionHeading from "../components/SectionHeading";
import styles from "./About.module.css";

const aboutEnquireUrl = buildWhatsAppUrl(
  "Hello, I would like to know more about your tailoring and bridal services. Please share more details."
);

export default function About() {
  return (
    <section id="about" className={styles.section} aria-label="About the Business">
      <div className={styles.inner}>
        {/* Image column */}
        <div className={styles.imageCol} aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1556742521-9713bf272865?w=800&q=80"
            alt="Boutique sewing studio with fabric and tailoring supplies"
            className={styles.image}
            loading="lazy"
          />
          <div className={styles.accentBox}>
            <span className={styles.accentText}>
              Personalized. Precise. Beautiful.
            </span>
          </div>
        </div>

        {/* Text column */}
        <div className={styles.textCol}>
          <SectionHeading
            eyebrow="Our Story"
            heading="Crafted with Care. Designed for You."
            align="left"
          />

          {business.aboutText.map((para, idx) => (
            <p key={idx} className={styles.para}>
              {para}
            </p>
          ))}

          <a
            href={aboutEnquireUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            Get in Touch on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
