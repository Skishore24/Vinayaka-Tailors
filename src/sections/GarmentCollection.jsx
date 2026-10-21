import { useState } from "react";
import { garmentCategories, garmentCollection } from "../data/garments";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import SectionHeading from "../components/SectionHeading";
import { MessageCircle, Sparkles } from "lucide-react";
import styles from "./GarmentCollection.module.css";

export default function GarmentCollection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? garmentCollection
      : garmentCollection.filter((item) => item.category === activeCategory);

  return (
    <section id="collection" className={styles.section} aria-label="Traditional and Designer Garments">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="GARMENT SHOWCASE"
          heading="Discover Your Style"
          subheading="A curated showcase of bespoke women's silhouettes, designer blouses, and festive wear tailored to perfection."
        />

        {/* Category Filters */}
        <div className={styles.filters} role="group" aria-label="Filter garments by category">
          {garmentCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`${styles.filterBtn} ${
                activeCategory === cat.id ? styles.filterActive : ""
              }`}
              aria-pressed={activeCategory === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Garment Grid */}
        <div className={styles.editorialGrid} role="list">
          {filteredItems.map((item) => {
            const waUrl = buildWhatsAppUrl(item.whatsappMsg);
            return (
              <article
                key={item.id}
                className={`${styles.garmentCard} ${
                  item.featured ? styles.featuredCard : ""
                }`}
                role="listitem"
              >
                <div className={styles.imageBox}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.image}
                    loading="lazy"
                  />
                  <span className={styles.categoryBadge}>{item.categoryLabel}</span>
                </div>

                <div className={styles.cardInfo}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                  
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.enquireLink}
                    aria-label={`Enquire about custom stitching for ${item.title}`}
                  >
                    <MessageCircle size={15} aria-hidden="true" />
                    <span>Enquire About This Style</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Clarification note */}
        <p className={styles.footnote}>
          <Sparkles size={14} className={styles.footnoteIcon} aria-hidden="true" />
          <span>
            Garments displayed are design inspirations for custom stitching tailored to your measurements and chosen fabrics.
          </span>
        </p>
      </div>
    </section>
  );
}
