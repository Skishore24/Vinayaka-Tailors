import { craftsmanshipSteps } from "../data/services";
import SectionHeading from "../components/SectionHeading";
import styles from "./Craftsmanship.module.css";

export default function Craftsmanship() {
  return (
    <section id="craftsmanship" className={styles.section} aria-label="Our Tailoring Process and Craftsmanship">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="OUR CRAFTSMANSHIP"
          heading="Every Detail Matters"
          subheading="From first measurements to the final stitch, our tailoring approach emphasizes patient craftsmanship, fine seams, and a silhouette that flatters."
        />

        {/* 4-Step Process Timeline / Cards */}
        <div className={styles.stepsContainer} role="list">
          {craftsmanshipSteps.map((stepItem, idx) => (
            <article key={stepItem.step} className={styles.stepCard} role="listitem">
              <div className={styles.imageBox}>
                <img
                  src={stepItem.image}
                  alt={stepItem.title}
                  className={styles.image}
                  loading="lazy"
                />
                <span className={styles.stepBadge}>{stepItem.step}</span>
              </div>

              <div className={styles.content}>
                <div className={styles.headerRow}>
                  <h3 className={styles.stepTitle}>{stepItem.title}</h3>
                </div>
                <p className={styles.stepDesc}>{stepItem.description}</p>
              </div>

              {idx < craftsmanshipSteps.length - 1 && (
                <div className={styles.connector} aria-hidden="true" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
