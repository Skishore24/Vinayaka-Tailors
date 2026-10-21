import { bridalServices, mehendiServices, groomingServices } from "../data/services";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import SectionHeading from "../components/SectionHeading";
import styles from "./BridalServices.module.css";

const bridalSectionUrl = buildWhatsAppUrl(
  "Hello, I would like to enquire about your Bridal Makeup and Styling services. Please share more details."
);

const bridalImages = {
  "bridal-full":
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80",
  "bridal-package":
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=80",
  "saree-draping":
    "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=700&q=80",
};

export default function BridalServices() {
  return (
    <section id="bridal" className={styles.section} aria-label="Bridal and Beauty Services">
      {/* Bridal Section */}
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Bridal & Beauty"
          heading="Your Special Day, Beautifully Styled"
          subheading="Celebrate your special moments with bridal styling and beauty services tailored to your preferences."
        />

        <div className={styles.bridalGrid}>
          {bridalServices.map((svc) => (
            <article key={svc.id} className={styles.bridalCard}>
              <div className={styles.cardImgWrap}>
                <img
                  src={bridalImages[svc.id]}
                  alt={svc.title}
                  className={styles.cardImg}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80";
                  }}
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{svc.title}</h3>
                <p className={styles.cardDesc}>{svc.description}</p>
                <a
                  href={buildWhatsAppUrl(svc.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.enquireLink}
                >
                  Enquire on WhatsApp →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <a
            href={bridalSectionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            Enquire About Bridal Services
          </a>
        </div>
      </div>

      {/* Mehendi Section */}
      <div className={styles.mehendiSection}>
        <div className={styles.inner}>
          <SectionHeading
            eyebrow="Mehendi Art"
            heading="Beautiful Mehendi for Every Occasion"
            subheading="Intricate and beautiful mehendi designs for weddings, engagements, and celebrations."
          />

          <div className={styles.mehendiGrid}>
            {mehendiServices.map((svc) => (
              <article key={svc.id} className={styles.mehendiCard}>
                <div className={styles.mehendiImgWrap}>
                  <img
                    src={
                      svc.id === "indian-mehendi"
                        ? "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=700&q=80"
                        : "https://images.unsplash.com/photo-1597983073493-88cd51aae7d3?w=700&q=80"
                    }
                    alt={svc.title}
                    className={styles.mehendiImg}
                    loading="lazy"
                  />
                </div>
                <div className={styles.mehendiBody}>
                  <h3 className={styles.mehendiTitle}>{svc.title}</h3>
                  <p className={styles.mehendiDesc}>{svc.description}</p>
                  <a
                    href={buildWhatsAppUrl(svc.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.enquireLink}
                  >
                    Enquire on WhatsApp →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Grooming & Nails Section */}
      <div className={styles.groomSection}>
        <div className={styles.inner}>
          <SectionHeading
            eyebrow="Finishing Touches"
            heading="Little Details, Beautifully Finished"
            subheading="Grooming and nail services designed to give you the perfect finishing touch."
          />

          <div className={styles.groomGrid}>
            {groomingServices.map((svc) => (
              <article key={svc.id} className={styles.groomCard}>
                <h3 className={styles.groomTitle}>{svc.title}</h3>
                <p className={styles.groomDesc}>{svc.description}</p>
                <a
                  href={buildWhatsAppUrl(svc.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.groomLink}
                >
                  Enquire on WhatsApp →
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
