import { buildWhatsAppUrl } from "../utils/whatsapp";
import { MessageCircle } from "lucide-react";
import styles from "./ServiceCard.module.css";

/**
 * ServiceCard for Vinayaka Tailors Women's Stitching Services
 */
export default function ServiceCard({
  title,
  description,
  image,
  whatsappMsg,
  badge,
}) {
  const url = buildWhatsAppUrl(
    whatsappMsg ||
      `Hello Vinayaka Tailors, I would like to enquire about ${title}. Please let me know the details.`
  );

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={image}
          alt={title}
          className={styles.image}
          loading="lazy"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=700&q=80";
          }}
        />
        {badge && <span className={styles.badge}>{badge}</span>}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.enquireBtn}
          aria-label={`Enquire on WhatsApp about ${title}`}
        >
          <MessageCircle size={15} aria-hidden="true" />
          <span>Enquire for This Style</span>
        </a>
      </div>
    </article>
  );
}
