import { tailoringServices } from "../data/services";
import ServiceCard from "../components/ServiceCard";
import SectionHeading from "../components/SectionHeading";
import styles from "./TailoringServices.module.css";

export default function TailoringServices() {
  return (
    <section id="services" className={styles.section} aria-label="Women's Tailoring Services">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="OUR TAILORING SERVICES"
          heading="Made for Your Style"
          subheading="Every garment is cut and stitched to your exact measurements, ensuring a graceful silhouette, superior comfort, and durable finishing."
        />

        <div className={styles.grid}>
          {tailoringServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              whatsappMsg={service.whatsappMsg}
              badge={service.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
