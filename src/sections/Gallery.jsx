import { useState, useEffect, useCallback } from "react";
import { galleryImages, galleryCategories } from "../data/gallery";
import SectionHeading from "../components/SectionHeading";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import styles from "./Gallery.module.css";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  /* ── Lightbox helpers ──────────────────────────────────────────── */
  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i + 1) % filtered.length);
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);
  }, [filtered.length]);

  // Keyboard navigation for lightbox
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

  // Prevent scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [lightboxIndex]);

  return (
    <section id="gallery" className={styles.section} aria-label="Style and Craftsmanship Gallery">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Portfolio"
          heading="Style & Craftsmanship Gallery"
          subheading="A curated showcase of our tailoring, embroidery, bridal work, and beauty services."
        />

        {/* Category filters */}
        <div className={styles.filters} role="group" aria-label="Filter gallery by category">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={[
                styles.filterBtn,
                activeCategory === cat.id ? styles.filterActive : "",
              ].join(" ")}
              aria-pressed={activeCategory === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className={styles.grid} role="list">
          {filtered.map((img, idx) => (
            <button
              key={img.id}
              className={styles.gridItem}
              onClick={() => openLightbox(idx)}
              role="listitem"
              aria-label={`View ${img.title}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={styles.gridImg}
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80";
                }}
              />
              <div className={styles.gridOverlay} aria-hidden="true">
                <ZoomIn size={22} />
                <span className={styles.gridTitle}>{img.title}</span>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className={styles.empty}>No images in this category yet.</p>
        )}
      </div>

      {/* ── Lightbox ───────────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Image lightbox — ${filtered[lightboxIndex]?.title}`}
        >
          <div
            className={styles.lbBackdrop}
            onClick={closeLightbox}
            aria-hidden="true"
          />

          <button
            className={styles.lbClose}
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={22} />
          </button>

          <button
            className={[styles.lbArrow, styles.lbPrev].join(" ")}
            onClick={goPrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={26} />
          </button>

          <div className={styles.lbContent}>
            <img
              src={filtered[lightboxIndex]?.src}
              alt={filtered[lightboxIndex]?.alt}
              className={styles.lbImage}
            />
            <p className={styles.lbCaption}>{filtered[lightboxIndex]?.title}</p>
          </div>

          <button
            className={[styles.lbArrow, styles.lbNext].join(" ")}
            onClick={goNext}
            aria-label="Next image"
          >
            <ChevronRight size={26} />
          </button>

          {/* Counter */}
          <span className={styles.lbCounter} aria-live="polite">
            {lightboxIndex + 1} / {filtered.length}
          </span>
        </div>
      )}
    </section>
  );
}
