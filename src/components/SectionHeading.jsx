import styles from "./SectionHeading.module.css";

/**
 * Reusable section heading component.
 * Props:
 *   eyebrow    — small text above the heading
 *   heading    — main <h2> text
 *   subheading — optional supporting paragraph
 *   align      — "left" | "center" (default "center")
 *   light      — if true, uses light (white) text for dark backgrounds
 */
export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "center",
  light = false,
}) {
  return (
    <div
      className={[
        styles.wrapper,
        styles[align],
        light ? styles.light : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.heading}>{heading}</h2>
      {subheading && <p className={styles.subheading}>{subheading}</p>}
    </div>
  );
}
