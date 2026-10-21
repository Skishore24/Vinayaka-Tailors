import { embroideryServices } from "../data/services";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import SectionHeading from "../components/SectionHeading";
import { MessageCircle, Check } from "lucide-react";
import styles from "./Embroidery.module.css";

export default function Embroidery() {
  return (
    <section id="embroidery" className={styles.section} aria-label="Aari and Hand Embroidery Services">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="EMBROIDERY ARTISTRY"
          heading="Beautiful Details, Thoughtfully Stitched"
          subheading="Elevate your bridal blouses and celebration outfits with exquisite hand needlework, metallic thread accents, and delicate motif craftsmanship."
        />

        {/* Two Visual Cards */}
        <div className={styles.cardsGrid}>
          {embroideryServices.map((embroidery) => {
            const waUrl = buildWhatsAppUrl(embroidery.whatsappMsg);
            return (
              <article key={embroidery.id} className={styles.card}>
                <div className={styles.imageCol}>
                  <img
                    src={embroidery.image}
                    alt={embroidery.title}
                    className={styles.image}
                    loading="lazy"
                  />
                  <div className={styles.badge}>{embroidery.title}</div>
                </div>

                <div className={styles.bodyCol}>
                  <h3 className={styles.cardTitle}>{embroidery.title}</h3>
                  <p className={styles.subtitle}>{embroidery.subtitle}</p>
                  <p className={styles.description}>{embroidery.description}</p>

                  <ul className={styles.highlightsList}>
                    {embroidery.highlights.map((item) => (
                      <li key={item} className={styles.highlightItem}>
                        <span className={styles.checkIcon}>
                          <Check size={14} strokeWidth={2.5} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.enquireBtn}
                    aria-label={`Enquire about ${embroidery.title} work on WhatsApp`}
                  >
                    <MessageCircle size={16} aria-hidden="true" />
                    <span>Enquire for {embroidery.title}</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
