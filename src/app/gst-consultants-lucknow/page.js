import AboutSection from "@/components/AboutSection";
import CoreValuesConsultants from "@/components/bangalore/CoreValuesConsultants";
import FaqSection from "@/components/bangalore/FaqSection";
import ProcessSectionConsultants from "@/components/bangalore/ProcessSectionConsultants";
import { aboutSectionDataConsultantsBangalore, faqsConsultants, heroDataConsultantsLucknow, processStepsConsultantsBangalore } from "@/utils/data";
import Script from "next/script";
import CompanySection from "@/components/CompanySection";

export const metadata = {
  title: "GST Consultants in Lucknow | Expert Tax Advisory Services - UNIgst",
  description:
    "Top GST consultants in Lucknow offering compliance, return filing, reconciliation, notice support and tax advisory for startups, MSMEs, and enterprises.",
  keywords:
    "GST consultants Lucknow, GST advisory services, tax consultants Lucknow, GST compliance experts, GST registration Lucknow, GST filing Lucknow",
  alternates: {
    canonical: "https://www.unigst.com/gst-consultants-lucknow",
  },
  openGraph: {
    title: "GST Consultants in Lucknow | Expert Tax Advisory - UNIgst",
    description:
      "Professional GST consulting services in Lucknow including compliance, audits, notices, filings and advisory for all business types.",
    url: "https://www.unigst.com/gst-consultants-lucknow",
    type: "website",
    locale: "en_IN",
    siteName: "UNIgst",
    images: [
      {
        url: "https://www.unigst.com/images/gst-consultants-lucknow-og.jpg",
        width: 1200,
        height: 630,
        alt: "GST Consultants in Lucknow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Consultants in Lucknow | Expert Tax Advisory - UNIgst",
    description:
      "End-to-end GST advisory, filings, compliance, notice and audit support in Lucknow.",
    images: [
      "https://www.unigst.com/images/gst-consultants-lucknow-twitter.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GstConsultantLucknow = () => {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "UNIgst - GST Consultants Lucknow",
            image: "https://www.unigst.com/images/unigst-logo.jpg",
            "@id": "https://www.unigst.com/gst-consultants-lucknow",
            url: "https://www.unigst.com/gst-consultants-lucknow",
            telephone: "+91-9945933333",
            priceRange: "₹₹",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Hazratganj",
              addressLocality: "Lucknow",
              addressRegion: "Uttar Pradesh",
              postalCode: "226001",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 26.8467,
              longitude: 80.9462,
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
              name: "Lucknow",
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
                name: "Why should businesses in Lucknow hire a GST consultant?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A GST consultant ensures accurate filings, optimized tax credits, notice handling, audit support, and penalty-free compliance with evolving GST laws.",
                },
              },
              {
                "@type": "Question",
                name: "Does UNIgst provide GST filing and notice support in Lucknow?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, UNIgst handles GST filings, reconciliations, audits, notice responses, ITC optimization and end-to-end compliance support in Lucknow.",
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
          <meta name="geo.region" content="IN-UP">
          <meta name="geo.placename" content="Lucknow">
          <meta name="geo.position" content="26.8467;80.9462">
          <meta name="ICBM" content="26.8467, 80.9462">
        `}
      </Script>

      <CompanySection data={heroDataConsultantsLucknow} />
      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionDataConsultantsBangalore}/>
        <ProcessSectionConsultants data={processStepsConsultantsBangalore}/>
        <CoreValuesConsultants />
        <FaqSection faqs={faqsConsultants}/>
      </section>
    </>
  );
};

export default GstConsultantLucknow;
