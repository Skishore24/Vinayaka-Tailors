import { useState } from "react";
import { business } from "../data/business";
import { serviceOptions } from "../data/services";
import { validateForm } from "../utils/validation";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import SectionHeading from "../components/SectionHeading";
import { Phone, MapPin, MessageCircleMore, Info } from "lucide-react";
import styles from "./Contact.module.css";

const INITIAL_FORM = {
  name: "",
  phone: "",
  service: "",
  date: "",
  message: "",
};

function buildEnquiryMessage({ name, phone, service, date, message }) {
  let msg = `Hello, I would like to make an enquiry.\n\n`;
  msg += `Name: ${name}\n`;
  msg += `Phone: ${phone}\n`;
  msg += `Service: ${service}\n`;
  if (date) msg += `Preferred Date: ${date}\n`;
  if (message.trim()) msg += `\nMessage: ${message.trim()}`;
  return msg;
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    // Clear error on change if field already touched
    if (touched[name]) {
      const newErrors = validateForm({ ...form, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    const newErrors = validateForm(form);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mark all relevant fields as touched
    setTouched({ name: true, phone: true, service: true });
    const errs = validateForm(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    // Open WhatsApp
    const waMsg = buildEnquiryMessage(form);
    window.open(buildWhatsAppUrl(waMsg), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className={styles.section} aria-label="Contact and Appointment">
      <div className={styles.inner}>
        {/* Heading */}
        <SectionHeading
          eyebrow="Get in Touch"
          heading="Let's Create Something Beautiful"
          subheading="Reach out via WhatsApp, call, or fill in the form below and we will get back to you."
        />

        <div className={styles.layout}>
          {/* Contact info panel */}
          <div className={styles.infoPanel}>
            <h3 className={styles.infoPanelHeading}>Contact Information</h3>

            <a href={business.phoneLink} className={styles.contactItem}>
              <span className={styles.contactIcon}>
                <Phone size={18} />
              </span>
              <div>
                <span className={styles.contactLabel}>Call Us</span>
                <span className={styles.contactValue}>{business.phone}</span>
              </div>
            </a>

            <a
              href={buildWhatsAppUrl(
                "Hello, I would like to enquire about your services."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
            >
              <span className={styles.contactIcon}>
                <MessageCircleMore size={18} />
              </span>
              <div>
                <span className={styles.contactLabel}>WhatsApp</span>
                <span className={styles.contactValue}>+{business.whatsapp}</span>
              </div>
            </a>

            <a
              href={business.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
            >
              <span className={styles.contactIcon}>
                <MapPin size={18} />
              </span>
              <div>
                <span className={styles.contactLabel}>Get Directions</span>
                <span className={styles.contactValue}>Open in Google Maps →</span>
              </div>
            </a>

            {/* Quick action buttons */}
            <div className={styles.quickActions}>
              <a href={business.phoneLink} className={styles.callBtn}>
                <Phone size={16} />
                Call Now
              </a>
              <a
                href={business.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.directionsBtn}
              >
                <MapPin size={16} />
                Get Directions
              </a>
            </div>
          </div>

          {/* Enquiry form */}
          <div className={styles.formPanel}>
            {/* Notice */}
            <div className={styles.formNotice} role="note">
              <Info size={15} />
              <span>
                Your enquiry will open in WhatsApp. Please send the message to
                confirm your request.
              </span>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Enquiry form"
              className={styles.form}
            >
              {/* Name */}
              <div className={styles.fieldGroup}>
                <label htmlFor="contact-name" className={styles.label}>
                  Full Name <span aria-label="required">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={[
                    styles.input,
                    errors.name && touched.name ? styles.inputError : "",
                  ].join(" ")}
                  aria-required="true"
                  aria-describedby={errors.name && touched.name ? "name-error" : undefined}
                  placeholder="e.g. Priya Sharma"
                />
                {errors.name && touched.name && (
                  <span id="name-error" className={styles.errorMsg} role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Phone */}
              <div className={styles.fieldGroup}>
                <label htmlFor="contact-phone" className={styles.label}>
                  Phone Number <span aria-label="required">*</span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="numeric"
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={[
                    styles.input,
                    errors.phone && touched.phone ? styles.inputError : "",
                  ].join(" ")}
                  aria-required="true"
                  aria-describedby={errors.phone && touched.phone ? "phone-error" : undefined}
                  placeholder="10-digit mobile number"
                />
                {errors.phone && touched.phone && (
                  <span id="phone-error" className={styles.errorMsg} role="alert">
                    {errors.phone}
                  </span>
                )}
              </div>

              {/* Service */}
              <div className={styles.fieldGroup}>
                <label htmlFor="contact-service" className={styles.label}>
                  Service Required <span aria-label="required">*</span>
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={[
                    styles.select,
                    errors.service && touched.service ? styles.inputError : "",
                  ].join(" ")}
                  aria-required="true"
                  aria-describedby={errors.service && touched.service ? "service-error" : undefined}
                >
                  <option value="">Select a service…</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.service && touched.service && (
                  <span id="service-error" className={styles.errorMsg} role="alert">
                    {errors.service}
                  </span>
                )}
              </div>

              {/* Date (optional) */}
              <div className={styles.fieldGroup}>
                <label htmlFor="contact-date" className={styles.label}>
                  Preferred Appointment Date{" "}
                  <span className={styles.optional}>(optional)</span>
                </label>
                <input
                  id="contact-date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              {/* Message (optional) */}
              <div className={styles.fieldGroup}>
                <label htmlFor="contact-message" className={styles.label}>
                  Message{" "}
                  <span className={styles.optional}>(optional)</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  placeholder="Share any additional details, design preferences, or questions…"
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                <MessageCircleMore size={18} />
                Send Enquiry via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
