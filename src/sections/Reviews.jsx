import { reviews } from "../data/reviews";
import SectionHeading from "../components/SectionHeading";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import { Star } from "lucide-react";
import styles from "./Reviews.module.css";

const enquireUrl = buildWhatsAppUrl(
  "Hello, I would like to enquire about your services. Please share more details."
);

export default function Reviews() {
  /* If no verified reviews, show a neutral invite instead */
  if (!reviews || reviews.length === 0) {
    return (
      <section id="reviews" className={styles.section} aria-label="Customer Reviews">
        <div className={styles.inner}>
          <SectionHeading
            eyebrow="Testimonials"
            heading="Hear from Our Customers"
            subheading="We are proud to serve our customers. Have a great experience? We'd love to hear from you!"
          />
          <div className={styles.placeholder}>
            <p className={styles.placeholderText}>
              Customer testimonials will appear here once they are verified and
              shared by the business. We keep all reviews genuine.
            </p>
            <a
              href={enquireUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              Enquire About Our Services
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reviews" className={styles.section} aria-label="Customer Reviews">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Testimonials"
          heading="Hear from Our Customers"
        />

        <div className={styles.reviewGrid}>
          {reviews.map((r) => (
            <article key={r.id} className={styles.reviewCard}>
              {/* Stars */}
              <div className={styles.stars} aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < r.rating ? "currentColor" : "none"}
                    className={i < r.rating ? styles.starFilled : styles.starEmpty}
                  />
                ))}
              </div>
              <blockquote className={styles.reviewText}>
                "{r.review}"
              </blockquote>
              <div className={styles.reviewer}>
                <span className={styles.reviewerName}>{r.name}</span>
                {r.service && (
                  <span className={styles.reviewerService}>{r.service}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
