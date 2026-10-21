import { useState } from "react";
import { business } from "../data/business";
import { confirmedGarmentCategories } from "../data/services";
import { validateForm } from "../utils/validation";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import SectionHeading from "../components/SectionHeading";
import { Phone, MapPin, MessageCircle, Info, Send } from "lucide-react";
import styles from "./Contact.module.css";

const INITIAL_FORM = {
  name: "",
  phone: "",
  garmentType: "",
  preferredDate: "",
  designDetails: "",
};

function buildEnquiryMessage({ name, phone, garmentType, preferredDate, designDetails }) {
  let msg = `Hello Vinayaka Tailors,\n\nI would like to enquire about stitching services.\n`;
  msg += `• Full Name: ${name.trim()}\n`;
  msg += `• Phone: ${phone.trim()}\n`;
  msg += `• Garment Type: ${garmentType}\n`;
  if (preferredDate) {
    msg += `• Preferred Date / Occasion: ${preferredDate}\n`;
  }
  if (designDetails && designDetails.trim()) {
    msg += `• Design Details: ${designDetails.trim()}\n`;
  }
  msg += `\nPlease let me know the stitching details and visit timings.`;
  return msg;
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Re-validate if field was already blurred
    if (touched[name]) {
      const updatedErrors = validateForm({ ...form, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: updatedErrors[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const updatedErrors = validateForm(form);
    setErrors((prev) => ({ ...prev, [name]: updatedErrors[name] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, garmentType: true });
    const errs = validateForm(form);
    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      return;
    }

    const waText = buildEnquiryMessage(form);
    window.open(buildWhatsAppUrl(waText), "_blank", "noopener,noreferrer");
  };

  const directWhatsAppUrl = buildWhatsAppUrl(
    "Hello Vinayaka Tailors, I would like to enquire about your women's tailoring services."
  );

  return (
    <section id="contact" className={styles.section} aria-label="Contact and Stitching Enquiry">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="CONTACT & ENQUIRY"
          heading="Let's Stitch Something Special"
          subheading="Have a design in mind? Contact Vinayaka Tailors to discuss the garment you would like stitched."
        />

        <div className={styles.layout}>
          {/* Left Info Panel */}
          <div className={styles.infoPanel}>
            <div className={styles.infoHead}>
              <h3 className={styles.infoHeading}>Vinayaka Tailors</h3>
              <p className={styles.infoTagline}>Women's Tailoring & Custom Stitching</p>
            </div>

            <div className={styles.contactDetails}>
              {/* Phone */}
              <div className={styles.contactCard}>
                <div className={styles.cardIconWrap}>
                  <Phone size={20} className={styles.cardIcon} />
                </div>
                <div>
                  <span className={styles.cardLabel}>Phone Number</span>
                  <a href={business.phoneLink} className={styles.cardValue}>
                    +91 {business.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className={styles.contactCard}>
                <div className={styles.cardIconWrap}>
                  <MessageCircle size={20} className={styles.cardIcon} />
                </div>
                <div>
                  <span className={styles.cardLabel}>WhatsApp Chat</span>
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardValue}
                  >
                    +91 {business.phone}
                  </a>
                </div>
              </div>

              {/* Location Directions */}
              <div className={styles.contactCard}>
                <div className={styles.cardIconWrap}>
                  <MapPin size={20} className={styles.cardIcon} />
                </div>
                <div>
                  <span className={styles.cardLabel}>Location</span>
                  <a
                    href={business.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardValue}
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className={styles.quickButtons}>
              <a href={business.phoneLink} className={styles.callNowBtn}>
                <Phone size={16} aria-hidden="true" />
                <span>Call Now</span>
              </a>

              <a
                href={business.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.directionsBtn}
              >
                <MapPin size={16} aria-hidden="true" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className={styles.formPanel}>
            {/* WhatsApp Explanatory Notice */}
            <div className={styles.formNotice} role="note">
              <Info size={16} className={styles.noticeIcon} />
              <span>
                Submitting this form prepares your message and opens WhatsApp with Vinayaka Tailors. Please send the message in WhatsApp to complete your enquiry.
              </span>
            </div>

            <form onSubmit={handleSubmit} noValidate className={styles.form} aria-label="Stitching enquiry form">
              {/* Full Name */}
              <div className={styles.fieldGroup}>
                <label htmlFor="name" className={styles.label}>
                  Full Name <span className={styles.required}>*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="e.g. S. Meenakshi"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${styles.input} ${errors.name && touched.name ? styles.inputError : ""}`}
                  aria-required="true"
                  aria-invalid={errors.name && touched.name ? "true" : "false"}
                  aria-describedby={errors.name && touched.name ? "name-error" : undefined}
                />
                {errors.name && touched.name && (
                  <span id="name-error" className={styles.errorText} role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Phone Number */}
              <div className={styles.fieldGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone Number <span className={styles.required}>*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="numeric"
                  placeholder="10-digit mobile number"
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${styles.input} ${errors.phone && touched.phone ? styles.inputError : ""}`}
                  aria-required="true"
                  aria-invalid={errors.phone && touched.phone ? "true" : "false"}
                  aria-describedby={errors.phone && touched.phone ? "phone-error" : undefined}
                />
                {errors.phone && touched.phone && (
                  <span id="phone-error" className={styles.errorText} role="alert">
                    {errors.phone}
                  </span>
                )}
              </div>

              {/* Garment Type Dropdown (all 15 categories) */}
              <div className={styles.fieldGroup}>
                <label htmlFor="garmentType" className={styles.label}>
                  Garment Type <span className={styles.required}>*</span>
                </label>
                <select
                  id="garmentType"
                  name="garmentType"
                  value={form.garmentType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${styles.select} ${errors.garmentType && touched.garmentType ? styles.inputError : ""}`}
                  aria-required="true"
                  aria-invalid={errors.garmentType && touched.garmentType ? "true" : "false"}
                  aria-describedby={errors.garmentType && touched.garmentType ? "garment-error" : undefined}
                >
                  <option value="">Select a garment category…</option>
                  {confirmedGarmentCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                {errors.garmentType && touched.garmentType && (
                  <span id="garment-error" className={styles.errorText} role="alert">
                    {errors.garmentType}
                  </span>
                )}
              </div>

              {/* Preferred Date (optional) */}
              <div className={styles.fieldGroup}>
                <label htmlFor="preferredDate" className={styles.label}>
                  Preferred Date / Occasion Date <span className={styles.optional}>(optional)</span>
                </label>
                <input
                  id="preferredDate"
                  name="preferredDate"
                  type="date"
                  value={form.preferredDate}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              {/* Design Details (optional) */}
              <div className={styles.fieldGroup}>
                <label htmlFor="designDetails" className={styles.label}>
                  Design Details <span className={styles.optional}>(optional)</span>
                </label>
                <textarea
                  id="designDetails"
                  name="designDetails"
                  rows={4}
                  placeholder="Share details like fabric type, preferred neckline (e.g. boat neck, deep back), sleeve length, or embroidery requirements…"
                  value={form.designDetails}
                  onChange={handleChange}
                  className={styles.textarea}
                />
              </div>

              {/* Submit CTA */}
              <button type="submit" className={styles.submitBtn}>
                <Send size={16} aria-hidden="true" />
                <span>Send Stitching Enquiry via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
