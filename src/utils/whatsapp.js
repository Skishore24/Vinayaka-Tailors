import { business } from "../data/business";

/**
 * Builds a fully-encoded WhatsApp URL with the given message.
 * Uses exact business WhatsApp number.
 *
 * @param {string} message - Plain text message to pre-fill.
 * @returns {string} wa.me URL
 */
export function buildWhatsAppUrl(message) {
  const cleanMsg = (message || "Hello Vinayaka Tailors, I would like to enquire about your tailoring services.").trim();
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(cleanMsg)}`;
}

/**
 * Builds a WhatsApp URL specifically for a garment or service enquiry.
 *
 * @param {string} serviceName - e.g. "Blouse Stitching"
 * @param {string} [customNote]
 * @returns {string}
 */
export function buildServiceEnquiryUrl(serviceName, customNote = "") {
  let msg = `Hello Vinayaka Tailors, I would like to enquire about ${serviceName}.`;
  if (customNote.trim()) {
    msg += ` ${customNote.trim()}`;
  }
  msg += ` Please let me know the details.`;
  return buildWhatsAppUrl(msg);
}

/**
 * Default general enquiry WhatsApp link.
 */
export const generalEnquiryUrl = buildWhatsAppUrl(
  "Hello Vinayaka Tailors, I would like to enquire about your women's tailoring and custom stitching services. Please share more details."
);

/**
 * Opens WhatsApp with the given message in a new tab.
 * @param {string} message
 */
export function openWhatsApp(message) {
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}
