import { HelmetProvider, Helmet } from "react-helmet-async";
import { business } from "./data/business";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";

import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Tailoring from "./sections/Tailoring";
import Classes from "./sections/Classes";
import BridalServices from "./sections/BridalServices";
import WhyChooseUs from "./sections/WhyChooseUs";
import Gallery from "./sections/Gallery";
import About from "./sections/About";
import Reviews from "./sections/Reviews";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Primary SEO */}
        <title>{business.seo.title}</title>
        <meta name="description" content={business.seo.description} />
        <link rel="canonical" href={business.seo.canonical} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={business.seo.title} />
        <meta property="og:description" content={business.seo.description} />
        <meta property="og:url" content={business.seo.canonical} />
        <meta property="og:image" content={business.seo.ogImage} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={business.seo.title} />
        <meta name="twitter:description" content={business.seo.description} />
        <meta name="twitter:image" content={business.seo.ogImage} />

        {/* Structured Data — LocalBusiness (only verified facts) */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "${business.name}",
            "description": "${business.tagline}",
            "telephone": "+91${business.phone}",
            "url": "${business.seo.canonical}",
            "hasMap": "${business.mapUrl}",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91${business.phone}",
              "contactType": "customer service",
              "areaServed": "IN"
            }
          }
        `}</script>
      </Helmet>

      {/* Layout */}
      <Header />

      <main id="main-content">
        <Hero />
        <Services />
        <Tailoring />
        <Classes />
        <BridalServices />
        <WhyChooseUs />
        <Gallery />
        <About />
        <Reviews />
        <Contact />
      </main>

      <Footer />

      {/* Floating utilities */}
      <WhatsAppButton />
      <BackToTop />
    </HelmetProvider>
  );
}
