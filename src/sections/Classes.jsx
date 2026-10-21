import { classes } from "../data/services";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import SectionHeading from "../components/SectionHeading";
import { GraduationCap, BookOpen, Sparkles, Scissors } from "lucide-react";
import styles from "./Classes.module.css";

const classIcons = {
  "aari-class": Sparkles,
  "embroidery-class": Scissors,
  "fashion-class": GraduationCap,
};

const classImages = {
  "aari-class":
    "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
  "embroidery-class":
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80",
  "fashion-class":
    "https://images.unsplash.com/photo-1556742521-9713bf272865?w=600&q=80",
};

const sectionEnquireUrl = buildWhatsAppUrl(
  "Hello, I would like to know more about your fashion designing and embroidery classes. Please share the details."
);

export default function Classes() {
  return (
    <section id="classes" className={styles.section} aria-label="Classes and Training">
      <div className={styles.inner}>
        {/* Left: image */}
        <div className={styles.imageCol} aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1556742521-9713bf272865?w=800&q=80"
            alt="Hands-on fashion design and embroidery learning"
            className={styles.mainImage}
            loading="lazy"
          />
        </div>

        {/* Right: content */}
        <div className={styles.contentCol}>
          <SectionHeading
            eyebrow="Skill Development"
            heading="Learn the Art of Fashion"
            subheading="Explore creative skills in embroidery and fashion designing through hands-on classes."
            align="left"
          />

          <div className={styles.classCards}>
            {classes.map((cls) => {
              const Icon = classIcons[cls.id] || BookOpen;
              return (
                <article key={cls.id} className={styles.classCard}>
                  <div className={styles.classHeader}>
                    <span className={styles.classIcon} aria-hidden="true">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <h3 className={styles.classTitle}>{cls.title}</h3>
                  </div>
                  <p className={styles.classDesc}>{cls.description}</p>
                  <a
                    href={buildWhatsAppUrl(cls.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.classLink}
                    aria-label={`Enquire about ${cls.title} class`}
                  >
                    Enquire on WhatsApp →
                  </a>
                </article>
              );
            })}
          </div>

          <div className={styles.cta}>
            <a
              href={sectionEnquireUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              Enquire About Classes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
