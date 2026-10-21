import { business } from "../data/business";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import SectionHeading from "../components/SectionHeading";
import { Check, MessageCircle, HeartHandshake } from "lucide-react";
import styles from "./About.module.css";

const aboutWhatsAppUrl = buildWhatsAppUrl(
  "Hello Vinayaka Tailors, I would like to know more about your custom stitching and tailoring services."
);

export default function About() {
  const { about } = business;

  return (
    <section id="about" className={styles.section} aria-label="About Vinayaka Tailors">
      <div className={styles.inner}>
        {/* Visual Column */}
        <div className={styles.imageCol} aria-hidden="true">
          <div className={styles.imageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1556742521-9713bf272865?w=800&q=80"
              alt="Tailor cutting pattern and drafting women's clothing measurements"
              className={styles.mainImage}
              loading="lazy"
            />
            {/* Experience & Trust Accent Card */}
            <div className={styles.accentCard}>
              <HeartHandshake size={24} className={styles.accentIcon} />
              <div>
                <span className={styles.accentTitle}>Tailored to You</span>
                <span className={styles.accentText}>Crafted with care, patience & precision</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className={styles.contentCol}>
          <SectionHeading
            eyebrow="ABOUT VINAYAKA TAILORS"
            heading={about.heading}
            subheading={about.subheading}
            align="left"
          />

          <div className={styles.paragraphs}>
            {about.paragraphs.map((para, idx) => (
              <p key={idx} className={styles.paragraph}>
                {para}
              </p>
            ))}
          </div>

          {/* Bullet Values */}
          <div className={styles.valuesGrid}>
            {about.values.map((val) => (
              <div key={val} className={styles.valItem}>
                <span className={styles.valCheck}>
                  <Check size={14} strokeWidth={2.5} />
                </span>
                <span className={styles.valText}>{val}</span>
              </div>
            ))}
          </div>

          <div className={styles.ctaWrapper}>
            <a
              href={aboutWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              <MessageCircle size={18} aria-hidden="true" />
              <span>Discuss Your Stitching Needs</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
