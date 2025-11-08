import AboutSection from "@/components/AboutSection";
import CoreValuesConsultants from "@/components/bangalore/CoreValuesConsultants";
import FaqSection from "@/components/bangalore/FaqSection";
import ProcessSectionConsultants from "@/components/bangalore/ProcessSectionConsultants";
import { aboutSectionDataConsultantsBangalore, faqsConsultants, heroDataConsultantsNagpur, processStepsConsultantsBangalore } from "@/utils/data";
import Script from "next/script";
import CompanySection from "@/components/CompanySection";

export const metadata = {
  title: "GST Consultants in Nagpur | GST Filing & Compliance - UNIgst",
  description:
    "Trusted GST consultants in Nagpur offering GST filing, compliance, ITC reconciliation, audits, and notice management for businesses.",
  keywords:
    "GST consultants Nagpur, GST filing Nagpur, GST compliance Nagpur, GST advisory Nagpur, GST notice handling Nagpur",
  alternates: {
    canonical: "https://www.unigst.com/gst-consultants-nagpur",
  },
  openGraph: {
    title: "GST Consultants in Nagpur | Compliance & Advisory - UNIgst",
    description:
      "Expert GST filing, advisory, reconciliation & compliance support for businesses in Nagpur.",
    url: "https://www.unigst.com/gst-consultants-nagpur",
    type: "website",
    locale: "en_IN",
    siteName: "UNIgst",
    images: [
      {
        url: "https://www.unigst.com/images/gst-consultants-nagpur-og.jpg",
        width: 1200,
        height: 630,
        alt: "GST Consultants in Nagpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Consultants in Nagpur | GST Compliance - UNIgst",
    description:
      "Professional GST consulting, filing, reconciliation, and notice support in Nagpur.",
    images: [
      "https://www.unigst.com/images/gst-consultants-nagpur-twitter.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GstConsultantNagpur = () => {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "UNIgst - GST Consultants Nagpur",
            image: "https://www.unigst.com/images/unigst-logo.jpg",
            "@id": "https://www.unigst.com/gst-consultants-nagpur",
            url: "https://www.unigst.com/gst-consultants-nagpur",
            telephone: "+91-9945933333",
            priceRange: "₹₹",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Civil Lines",
              addressLocality: "Nagpur",
              addressRegion: "Maharashtra",
              postalCode: "440001",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 21.1458,
              longitude: 79.0882,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "09:00",
              closes: "18:00",
            },
            sameAs: [
              "https://www.facebook.com/unigst",
              "https://www.linkedin.com/company/unigst",
              "https://twitter.com/unigst",
            ],
            areaServed: {
              "@type": "City",
              name: "Nagpur",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "GST Consulting Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "GST Advisory Services",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "GST Compliance Management",
                  },
                },
              ],
            },
          }),
        }}
      />

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Why do businesses in Nagpur need GST consultants?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To ensure accurate GST return filing, ITC reconciliation, audit readiness, notice management and complete compliance support.",
                },
              },
              {
                "@type": "Question",
                name: "Does UNIgst provide GST notice support in Nagpur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, UNIgst provides notice handling, reconciliation, filings, audits, and full GST compliance services in Nagpur.",
                },
              },
            ],
          }),
        }}
      />

      <Script id="extra-meta" strategy="beforeInteractive">
        {`
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
          <meta name="language" content="English">
          <meta name="revisit-after" content="7 days">
          <meta name="author" content="UNIgst">
          <meta name="geo.region" content="IN-MH">
          <meta name="geo.placename" content="Nagpur">
          <meta name="geo.position" content="21.1458;79.0882">
          <meta name="ICBM" content="21.1458, 79.0882">
        `}
      </Script>

      <CompanySection data={heroDataConsultantsNagpur} />
      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionDataConsultantsBangalore}/>
        <ProcessSectionConsultants data={processStepsConsultantsBangalore}/>
        <CoreValuesConsultants />
        <FaqSection faqs={faqsConsultants}/>
      </section>
    </>
  );
};

export default GstConsultantNagpur;
