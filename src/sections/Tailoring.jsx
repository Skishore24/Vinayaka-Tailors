import { tailoringCategories } from "../data/services";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import SectionHeading from "../components/SectionHeading";
import { Check } from "lucide-react";
import styles from "./Tailoring.module.css";

const enquireUrl = buildWhatsAppUrl(
  "Hello, I would like to enquire about your Women's Tailoring services. Please share more details."
);
const designUrl = buildWhatsAppUrl(
  "Hello, I would like to discuss my garment design with you. Please let me know the best way to share my requirements."
);

export default function Tailoring() {
  return (
    <section id="tailoring" className={styles.section} aria-label="Women's Tailoring">
      <div className={styles.inner}>
        {/* Text side */}
        <div className={styles.textCol}>
          <SectionHeading
            eyebrow="Stitched to Perfection"
            heading="Tailoring That Fits Your Style"
            subheading="From everyday ethnic wear to special-occasion outfits, explore personalized stitching tailored to your preferences."
            align="left"
          />

          {/* Garment categories */}
          <div className={styles.categories}>
            {tailoringCategories.map((col, ci) => (
              <ul key={ci} className={styles.categoryList}>
                {col.map((item) => (
                  <li key={item} className={styles.categoryItem}>
                    <span className={styles.checkIcon} aria-hidden="true">
                      <Check size={14} strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>

          {/* CTA buttons */}
          <div className={styles.ctas}>
            <a
              href={enquireUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              Enquire About Stitching
            </a>
            <a
              href={designUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnOutline}
            >
              Discuss Your Design
            </a>
          </div>
        </div>

        {/* Image side */}
        <div className={styles.imageCol} aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80"
            alt="Colorful fabric swatches and tailoring accessories"
            className={styles.image}
            loading="lazy"
          />
          <div className={styles.imageBadge}>
            <span className={styles.badgeText}>
              Custom Stitching<br />
              <em>for every occasion</em>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
