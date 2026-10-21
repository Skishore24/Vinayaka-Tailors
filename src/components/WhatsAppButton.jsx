import { buildWhatsAppUrl } from "../utils/whatsapp";
import { MessageCircle } from "lucide-react";
import styles from "./WhatsAppButton.module.css";

const waUrl = buildWhatsAppUrl(
  "Hello Vinayaka Tailors, I would like to enquire about your women's tailoring and custom stitching services."
);

/**
 * Floating WhatsApp button — visible on all pages.
 */
export default function WhatsAppButton() {
  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Enquire with Vinayaka Tailors on WhatsApp"
      title="Enquire on WhatsApp"
    >
      <MessageCircle size={26} strokeWidth={2} />
      <span className={styles.tooltip}>Chat on WhatsApp</span>
    </a>
  );
}
