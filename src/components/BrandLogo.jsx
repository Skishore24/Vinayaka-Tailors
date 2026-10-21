import styles from "./BrandLogo.module.css";

/**
 * Custom Brand Logo for VINAYAKA TAILORS
 * Features a stylized "V" integrated with a tailor's sewing needle,
 * looped embroidery thread, and delicate stitch accents.
 *
 * @param {'horizontal' | 'stacked' | 'emblem'} [props.variant='horizontal']
 * @param {'light' | 'dark'} [props.theme='light']
 * @param {number} [props.size=40]
 * @param {string} [props.className='']
 */
export default function BrandLogo({
  variant = "horizontal",
  theme = "light",
  size = 40,
  className = "",
}) {
  const isDark = theme === "dark";
  const primaryColor = isDark ? "#FFF9F2" : "#702C3B";
  const goldColor = "#B89A63";
  const threadColor = isDark ? "#D8BF8E" : "#B89A63";

  // Stylized "V" emblem with needle & golden thread loop
  const emblemSvg = (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={styles.emblemSvg}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`goldGrad-${theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#B89A63" />
          <stop offset="100%" stopColor="#8E7037" />
        </linearGradient>
        <linearGradient id={`burgundyGrad-${theme}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={isDark ? "#FAF1E6" : "#8A3347"} />
          <stop offset="100%" stopColor={isDark ? "#FFF9F2" : "#51202D"} />
        </linearGradient>
      </defs>

      {/* Decorative Outer Stitch Ring */}
      <circle
        cx="32"
        cy="32"
        r="30"
        fill="none"
        stroke={goldColor}
        strokeWidth="1.2"
        strokeDasharray="3 3"
        opacity={isDark ? "0.6" : "0.5"}
      />

      {/* Needle - Left arm of the "V" */}
      <path
        d="M 18 12 L 21 13 L 33 54 L 31 54 L 18 12 Z"
        fill={`url(#burgundyGrad-${theme})`}
      />

      {/* Needle eyelet at top of left arm */}
      <ellipse
        cx="19.5"
        cy="18"
        rx="1.2"
        ry="3"
        transform="rotate(-15 19.5 18)"
        fill={isDark ? "#1A1518" : "#FFF9F2"}
      />

      {/* Right arm of the "V" - elegant curved serif stroke */}
      <path
        d="M 46 12 C 45 15, 42 16, 39 24 L 31 54 L 33 54 L 47 16 C 49 14, 51 13, 52 12 Z"
        fill={`url(#burgundyGrad-${theme})`}
      />

      {/* Golden Thread swooping through the needle eyelet and swirling across the V */}
      <path
        d="M 10 26 C 14 12, 19.5 16, 19.5 18 C 19.5 22, 22 36, 32 37 C 42 38, 50 30, 48 22 C 46 16, 40 18, 38 23 C 35 30, 36 44, 44 48"
        fill="none"
        stroke={`url(#goldGrad-${theme})`}
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Tailor's delicate stitch markings near thread apex */}
      <line x1="28" y1="36" x2="30" y2="38" stroke={threadColor} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="33" y1="37" x2="35" y2="39" stroke={threadColor} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="38" y1="36" x2="40" y2="38" stroke={threadColor} strokeWidth="1.5" strokeLinecap="round" />

      {/* Tiny ornamental golden diamond at bottom apex */}
      <polygon points="32,56 34,58 32,60 30,58" fill={goldColor} />
    </svg>
  );

  if (variant === "emblem") {
    return (
      <div className={`${styles.emblemWrapper} ${className}`} title="Vinayaka Tailors">
        {emblemSvg}
      </div>
    );
  }

  return (
    <div
      className={`${styles.brandLogo} ${styles[variant]} ${styles[theme]} ${className}`}
    >
      <div className={styles.emblemContainer}>{emblemSvg}</div>

      <div className={styles.textContainer}>
        <span className={styles.brandTitle} style={{ color: primaryColor }}>
          VINAYAKA
        </span>
        <span className={styles.brandSubtitle} style={{ color: goldColor }}>
          TAILORS
        </span>
      </div>
    </div>
  );
}
