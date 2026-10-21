import { business } from "../data/business";

/**
 * Builds a fully-encoded WhatsApp URL with the given message.
 * @param {string} message - Plain text message to pre-fill.
 * @returns {string} wa.me URL
 */
export function buildWhatsAppUrl(message) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Default general enquiry WhatsApp link.
 */
export const generalEnquiryUrl = buildWhatsAppUrl(
  "Hello, I would like to enquire about your services. Please share more details."
);

/**
 * Opens WhatsApp with the given message in a new tab.
 * @param {string} message
 */
export function openWhatsApp(message) {
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}
