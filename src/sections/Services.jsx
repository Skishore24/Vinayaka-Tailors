import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";
import SectionHeading from "../components/SectionHeading";
import {
  Scissors,
  Sparkles,
  Star,
  Flower2,
  BookOpen,
  Palette,
  Gem,
  Heart,
} from "lucide-react";
import styles from "./Services.module.css";

// Map icon strings from data to Lucide components
const iconMap = {
  Scissors,
  Sparkles,
  Star,
  Flower2,
  BookOpen,
  Palette,
  Gem,
  Heart,
};

export default function Services() {
  return (
    <section id="services" className={styles.section} aria-label="Our Services">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="What We Offer"
          heading="Our Services"
          subheading="Thoughtfully crafted tailoring, bridal styling, and beauty services to help you look and feel your best."
        />

        <div className={styles.grid}>
          {services.map((svc) => (
            <ServiceCard
              key={svc.id}
              title={svc.title}
              description={svc.description}
              image={svc.image}
              whatsappMsg={svc.whatsappMsg}
              icon={iconMap[svc.icon]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
