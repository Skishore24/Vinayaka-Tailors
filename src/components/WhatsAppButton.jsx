import { buildWhatsAppUrl } from "../utils/whatsapp";
import { MessageCircleMore } from "lucide-react";
import styles from "./WhatsAppButton.module.css";

const waUrl = buildWhatsAppUrl(
  "Hello, I would like to enquire about your services. Please share more details."
);

/**
 * Floating WhatsApp button — visible on all pages.
 * Respects reduced-motion preferences via CSS.
 */
export default function WhatsAppButton() {
  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircleMore size={26} strokeWidth={1.8} />
      <span className={styles.tooltip}>Chat on WhatsApp</span>
    </a>
  );
}
