import { whyChooseValues } from "../data/services";
import SectionHeading from "../components/SectionHeading";
import {
  Ruler,
  Sparkles,
  Scissors,
  CheckCircle,
  Palette,
  MessageCircle,
} from "lucide-react";
import styles from "./WhyChooseUs.module.css";

const iconMap = {
  Ruler,
  Sparkles,
  Scissors,
  CheckCircle,
  Palette,
  MessageCircle,
};

export default function WhyChooseUs() {
  return (
    <section id="why" className={styles.section} aria-label="Why Choose Vinayaka Tailors">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="OUR SERVICE VALUES"
          heading="Designed Around You"
          subheading="Every garment we stitch is treated with individual attention, precise measurements, and a commitment to authentic women's tailoring."
          light={true}
        />

        <div className={styles.grid}>
          {whyChooseValues.map((item) => {
            const Icon = iconMap[item.icon] || Scissors;
            return (
              <article key={item.title} className={styles.card}>
                <div className={styles.iconWrap} aria-hidden="true">
                  <Icon size={22} strokeWidth={1.8} className={styles.icon} />
                </div>
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
