import { buildWhatsAppUrl } from "../utils/whatsapp";
import { MessageCircle, Sparkles, Phone } from "lucide-react";
import { business } from "../data/business";
import styles from "./DesignBanner.module.css";

const bannerWhatsAppUrl = buildWhatsAppUrl(
  "Hello Vinayaka Tailors, I have a design in mind for my clothing and would like to discuss stitching details."
);

export default function DesignBanner() {
  return (
    <section className={styles.bannerSection} aria-label="Custom Stitching Enquiry Callout">
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <Sparkles size={14} className={styles.sparkle} />
            <span>CUSTOM DESIGN & STITCHING</span>
          </div>

          <h2 className={styles.heading}>Have a Design in Mind?</h2>
          
          <p className={styles.text}>
            Whether you have fabric ready for an upcoming wedding or festive occasion,
            or a specific neck and sleeve pattern saved on your phone, contact Vinayaka Tailors.
            We are glad to discuss measurements, styling, and stitching details with you.
          </p>

          <div className={styles.actions}>
            <a
              href={bannerWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <MessageCircle size={18} aria-hidden="true" />
              <span>Discuss on WhatsApp</span>
            </a>

            <a href={business.phoneLink} className={styles.callBtn}>
              <Phone size={16} aria-hidden="true" />
              <span>Call: {business.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
