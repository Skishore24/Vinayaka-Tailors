import { buildWhatsAppUrl } from "../utils/whatsapp";
import SectionHeading from "../components/SectionHeading";
import { MessageCircle, Compass, Scissors, Layers, Sparkles } from "lucide-react";
import styles from "./FashionDesign.module.css";

const designConsultationUrl = buildWhatsAppUrl(
  "Hello Vinayaka Tailors, I would like to consult with you to design a custom outfit. Please let me know how we can discuss my ideas."
);

const designAspects = [
  {
    icon: Compass,
    title: "Custom Silhouette Planning",
    desc: "Explore A-line contours, princess seams, kalidar flares, and tailored waists that complement your height and proportions.",
  },
  {
    icon: Scissors,
    title: "Neckline & Sleeve Styling",
    desc: "From sweethearts and boat necks to keyholes, pot-necks, and elbow sleeve borders, customize every distinctive feature.",
  },
  {
    icon: Layers,
    title: "Fabric & Lining Coordination",
    desc: "Guidance on pairing silks, georgettes, cottons, and brocades with breathable, non-static inner linings and soft can-can.",
  },
  {
    icon: Sparkles,
    title: "Occasion & Festive Detailing",
    desc: "Thoughtful placement of piping, potli buttons, tassels (latkans), and border trims for a cohesive, festive celebration look.",
  },
];

export default function FashionDesign() {
  return (
    <section id="design" className={styles.section} aria-label="Fashion Designing and Custom Garment Planning">
      <div className={styles.inner}>
        <div className={styles.contentCol}>
          <SectionHeading
            eyebrow="BESPOKE DESIGN CONSULTATION"
            heading="Designs Inspired by Your Style"
            subheading="Have a unique outfit in mind or a design photograph you love? We collaborate with you to adapt fabric choices, silhouettes, and decorative details into a finished outfit made exclusively for you."
            align="left"
          />

          <div className={styles.aspectsGrid}>
            {designAspects.map((aspect) => {
              const Icon = aspect.icon;
              return (
                <div key={aspect.title} className={styles.aspectItem}>
                  <div className={styles.iconWrap}>
                    <Icon size={20} className={styles.icon} />
                  </div>
                  <div>
                    <h3 className={styles.aspectTitle}>{aspect.title}</h3>
                    <p className={styles.aspectDesc}>{aspect.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.ctaWrap}>
            <a
              href={designConsultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              <MessageCircle size={18} aria-hidden="true" />
              <span>Discuss Your Custom Design Idea</span>
            </a>
          </div>
        </div>

        {/* Visual Showcase */}
        <div className={styles.visualCol} aria-hidden="true">
          <div className={styles.imageGrid}>
            <div className={styles.imgCard1}>
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=80"
                alt="Contemporary women's fashion design silhouette"
                className={styles.image}
                loading="lazy"
              />
            </div>
            <div className={styles.imgCard2}>
              <img
                src="https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=700&q=80"
                alt="Detailed tailored garment neckline and bodice design"
                className={styles.image}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
