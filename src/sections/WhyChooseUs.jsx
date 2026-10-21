import { whyChooseUs } from "../data/services";
import SectionHeading from "../components/SectionHeading";
import {
  Ruler,
  Scissors,
  Layers,
  MessageCircle,
  Smartphone,
  CalendarHeart,
} from "lucide-react";
import styles from "./WhyChooseUs.module.css";

const iconMap = {
  Ruler,
  Scissors,
  Layers,
  MessageCircle,
  Smartphone,
  CalendarHeart,
};

export default function WhyChooseUs() {
  return (
    <section id="why" className={styles.section} aria-label="Why Choose Us">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Our Promise"
          heading="Why Choose Us"
          subheading="We are committed to personalized service, quality craftsmanship, and making you feel valued at every step."
        />

        <div className={styles.grid}>
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon] || Scissors;
            return (
              <article key={item.title} className={styles.card}>
                <span className={styles.icon} aria-hidden="true">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
