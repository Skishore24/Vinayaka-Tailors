import { buildWhatsAppUrl } from "../utils/whatsapp";
import styles from "./ServiceCard.module.css";

/**
 * Service card used in the Services Overview grid.
 * Props: title, description, image, whatsappMsg, icon (Lucide element)
 */
export default function ServiceCard({ title, description, image, whatsappMsg, icon: Icon }) {
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
              "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80";
          }}
        />
        {Icon && (
          <span className={styles.iconBadge} aria-hidden="true">
            <Icon size={18} strokeWidth={1.8} />
          </span>
        )}
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <a
          href={buildWhatsAppUrl(whatsappMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.enquireLink}
          aria-label={`Enquire on WhatsApp about ${title}`}
        >
          Enquire on WhatsApp →
        </a>
      </div>
    </article>
  );
}
