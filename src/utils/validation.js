/**
 * Form validation utilities for Vinayaka Tailors stitching enquiry form.
 */

/**
 * Validates full name (at least 2 characters, alphabetic & basic punctuation).
 * @param {string} name
 * @returns {string|null} Error string or null
 */
export function validateName(name) {
  if (!name || name.trim().length < 2) {
    return "Please enter your full name (at least 2 characters).";
  }
  if (!/^[a-zA-Z\s'.]+$/.test(name.trim())) {
    return "Name should contain only letters and spaces.";
  }
  return null;
}

/**
 * Validates Indian 10-digit mobile number starting with 6, 7, 8, or 9.
 * @param {string} phone
 * @returns {string|null}
 */
export function validatePhone(phone) {
  const cleaned = (phone || "").replace(/[\s\-+()]/g, "");
  if (!cleaned) {
    return "Please enter your 10-digit phone number.";
  }
  // Allow with or without leading 91 or 0
  const normalized = cleaned.replace(/^(91|0)/, "");
  if (!/^[6-9]\d{9}$/.test(normalized)) {
    return "Please enter a valid 10-digit mobile number (starts with 6–9).";
  }
  return null;
}

/**
 * Validates selected garment type.
 * @param {string} garmentType
 * @returns {string|null}
 */
export function validateGarmentType(garmentType) {
  if (!garmentType || garmentType.trim() === "") {
    return "Please select a garment type.";
  }
  return null;
}

/**
 * Validates the full enquiry form.
 * @param {{ name: string, phone: string, garmentType: string }} values
 * @returns {Record<string, string>}
 */
export function validateForm({ name, phone, garmentType }) {
  const errors = {};
  const nameErr = validateName(name);
  const phoneErr = validatePhone(phone);
  const garmentErr = validateGarmentType(garmentType);

  if (nameErr) errors.name = nameErr;
  if (phoneErr) errors.phone = phoneErr;
  if (garmentErr) errors.garmentType = garmentErr;

  return errors;
}
