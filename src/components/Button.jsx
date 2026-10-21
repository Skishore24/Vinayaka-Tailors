import { buildWhatsAppUrl } from "../utils/whatsapp";
import styles from "./Button.module.css";

/**
 * Reusable Button component.
 *
 * Props:
 *   variant  — "primary" | "secondary" | "outline" | "whatsapp"
 *   href     — if supplied, renders an <a> tag (opens new tab for external links)
 *   onClick  — click handler (used when href is not set)
 *   whatsappMsg — if supplied with variant="whatsapp", builds the WA link automatically
 *   size     — "sm" | "md" | "lg"  (default "md")
 *   fullWidth — boolean
 *   children
 */
export default function Button({
  variant = "primary",
  href,
  onClick,
  whatsappMsg,
  size = "md",
  fullWidth = false,
  children,
  className = "",
  ...rest
}) {
  const classes = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (whatsappMsg) {
    return (
      <a
        href={buildWhatsAppUrl(whatsappMsg)}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:");
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}
