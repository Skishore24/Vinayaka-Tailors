/**
 * Form validation utilities for the contact / enquiry form.
 */

/**
 * Validates a full name (2+ characters, letters and spaces only).
 * @param {string} name
 * @returns {string|null} Error message or null if valid.
 */
export function validateName(name) {
  if (!name || name.trim().length < 2) {
    return "Please enter your full name (at least 2 characters).";
  }
  if (!/^[a-zA-Z\s'.]+$/.test(name.trim())) {
    return "Name should contain only letters, spaces, and punctuation.";
  }
  return null;
}

/**
 * Validates an Indian mobile number (10 digits, starting 6-9).
 * @param {string} phone
 * @returns {string|null}
 */
export function validatePhone(phone) {
  const cleaned = phone.replace(/\s+/g, "");
  if (!cleaned) return "Please enter your phone number.";
  if (!/^[6-9]\d{9}$/.test(cleaned)) {
    return "Please enter a valid 10-digit mobile number (starting with 6–9).";
  }
  return null;
}

/**
 * Validates that a service has been selected.
 * @param {string} service
 * @returns {string|null}
 */
export function validateService(service) {
  if (!service || service === "") {
    return "Please select a service.";
  }
  return null;
}

/**
 * Validates the full contact form and returns an errors object.
 * @param {{ name: string, phone: string, service: string, message: string }} fields
 * @returns {{ name?: string, phone?: string, service?: string }} Error map
 */
export function validateForm({ name, phone, service }) {
  const errors = {};
  const nameErr = validateName(name);
  const phoneErr = validatePhone(phone);
  const serviceErr = validateService(service);
  if (nameErr) errors.name = nameErr;
  if (phoneErr) errors.phone = phoneErr;
  if (serviceErr) errors.service = serviceErr;
  return errors;
}
