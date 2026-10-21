import { HelmetProvider, Helmet } from "react-helmet-async";
import { business } from "./data/business";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";

import Hero from "./sections/Hero";
import About from "./sections/About";
import TailoringServices from "./sections/TailoringServices";
import GarmentCollection from "./sections/GarmentCollection";
import Craftsmanship from "./sections/Craftsmanship";
import Embroidery from "./sections/Embroidery";
import FashionDesign from "./sections/FashionDesign";
import Gallery from "./sections/Gallery";
import WhyChooseUs from "./sections/WhyChooseUs";
import DesignBanner from "./sections/DesignBanner";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Primary Technical SEO */}
        <title>{business.seo.title}</title>
        <meta name="description" content={business.seo.description} />
        <link rel="canonical" href={business.seo.canonical} />

        {/* Open Graph */}
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={business.seo.title} />
        <meta property="og:description" content={business.seo.description} />
        <meta property="og:url" content={business.seo.canonical} />
        <meta property="og:site_name" content={business.name} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={business.seo.title} />
        <meta name="twitter:description" content={business.seo.description} />

        {/* LocalBusiness / Tailor Schema (Verified data only) */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "${business.name}",
            "description": "${business.description}",
            "telephone": "+91${business.phone}",
            "url": "${business.seo.canonical}",
            "hasMap": "${business.mapUrl}",
            "priceRange": "$$",
            "makesOffer": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Women's Custom Tailoring"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Aari & Hand Embroidery"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Designer Blouse Stitching"
                }
              }
            ]
          }
        `}</script>
      </Helmet>

      {/* Main Layout */}
      <Header />

      <main id="main-content">
        <Hero />
        <About />
        <TailoringServices />
        <GarmentCollection />
        <Craftsmanship />
        <Embroidery />
        <FashionDesign />
        <Gallery />
        <WhyChooseUs />
        <DesignBanner />
        <Contact />
      </main>

      <Footer />

      {/* Floating Utilities */}
      <WhatsAppButton />
      <BackToTop />
    </HelmetProvider>
  );
}
