import { useState, useEffect, useCallback } from "react";
import { galleryImages, galleryCategories } from "../data/gallery";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import SectionHeading from "../components/SectionHeading";
import { X, ChevronLeft, ChevronRight, ZoomIn, MessageCircle } from "lucide-react";
import styles from "./Gallery.module.css";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i + 1) % filtered.length);
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);
  }, [filtered.length]);

  // Keyboard controls for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  // Lock body scroll when lightbox is active
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const currentItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <section id="gallery" className={styles.section} aria-label="Vinayaka Tailors Stitching and Style Gallery">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="TAILORING PORTFOLIO"
          heading="Stitching & Style Gallery"
          subheading="Explore our showcase of designer blouses, handcrafted embroidery, traditional silhouettes, and fine finishing."
        />

        {/* Category Filters */}
        <div className={styles.filters} role="group" aria-label="Filter gallery by garment category">
          {galleryCategories.map((cat) => (
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

        {/* Mosaic / Responsive Grid */}
        <div className={styles.grid} role="list">
          {filtered.map((img, idx) => (
            <button
              key={img.id}
              type="button"
              className={styles.gridItem}
              onClick={() => openLightbox(idx)}
              role="listitem"
              aria-label={`View full size: ${img.title} — ${img.subtitle}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={styles.gridImg}
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=700&q=80";
                }}
              />
              <div className={styles.gridOverlay}>
                <span className={styles.zoomIcon} aria-hidden="true">
                  <ZoomIn size={20} />
                </span>
                <span className={styles.gridTitle}>{img.title}</span>
                <span className={styles.gridSubtitle}>{img.subtitle}</span>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className={styles.empty}>No designs found in this category.</p>
        )}
      </div>

      {/* Accessible Lightbox Modal */}
      {lightboxIndex !== null && currentItem && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Image details: ${currentItem.title}`}
        >
          <div className={styles.lbBackdrop} onClick={closeLightbox} aria-hidden="true" />

          {/* Close button */}
          <button
            type="button"
            className={styles.lbClose}
            onClick={closeLightbox}
            aria-label="Close lightbox modal (Esc)"
          >
            <X size={24} />
          </button>

          {/* Prev Arrow */}
          <button
            type="button"
            className={`${styles.lbArrow} ${styles.lbPrev}`}
            onClick={goPrev}
            aria-label="Previous image (Left arrow key)"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Modal Content */}
          <div className={styles.lbContent}>
            <div className={styles.lbImgWrapper}>
              <img
                src={currentItem.src}
                alt={currentItem.alt}
                className={styles.lbImage}
              />
            </div>
            
            <div className={styles.lbMeta}>
              <div>
                <h3 className={styles.lbTitle}>{currentItem.title}</h3>
                <p className={styles.lbSubtitle}>{currentItem.subtitle}</p>
              </div>

              {currentItem.whatsappMsg && (
                <a
                  href={buildWhatsAppUrl(currentItem.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.lbEnquireBtn}
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  <span>Enquire for This Work</span>
                </a>
              )}
            </div>
          </div>

          {/* Next Arrow */}
          <button
            type="button"
            className={`${styles.lbArrow} ${styles.lbNext}`}
            onClick={goNext}
            aria-label="Next image (Right arrow key)"
          >
            <ChevronRight size={28} />
          </button>

          {/* Counter */}
          <div className={styles.lbCounter} aria-live="polite">
            {lightboxIndex + 1} / {filtered.length}
          </div>
        </div>
      )}
    </section>
  );
}
