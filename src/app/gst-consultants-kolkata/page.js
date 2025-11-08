import AboutSection from "@/components/AboutSection";
import CoreValuesConsultants from "@/components/bangalore/CoreValuesConsultants";
import FaqSection from "@/components/bangalore/FaqSection";
import ProcessSectionConsultants from "@/components/bangalore/ProcessSectionConsultants";
import { aboutSectionDataConsultantsBangalore, faqsConsultants, heroDataConsultantsKolkata, processStepsConsultantsBangalore } from "@/utils/data";
import Script from "next/script";
import CompanySection from "@/components/CompanySection";

export const metadata = {
  title: "GST Consultants in Kolkata | Expert Tax Advisory Services - UNIgst",
  description:
    "Trusted GST consultants in Kolkata providing expert tax advisory, compliance, and filing services. End-to-end GST solutions for all business types.",
  keywords:
    "GST consultants Kolkata, GST advisory services, tax consultants Kolkata, GST compliance experts, GST planning Kolkata",
  alternates: {
    canonical: "https://www.unigst.com/gst-consultants-kolkata",
  },
  openGraph: {
    title: "GST Consultants in Kolkata | Expert Tax Advisory - UNIgst",
    description:
      "Professional GST consulting in Kolkata for compliance, advisory, and strategic tax planning. Reliable services for all business sectors.",
    url: "https://www.unigst.com/gst-consultants-kolkata",
    type: "website",
    locale: "en_IN",
    siteName: "UNIgst",
    images: [
      {
        url: "https://www.unigst.com/images/gst-consultants-kolkata-og.jpg",
        width: 1200,
        height: 630,
        alt: "GST Consultants in Kolkata",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Consultants in Kolkata | Expert Tax Advisory - UNIgst",
    description:
      "Reliable GST consulting and compliance services in Kolkata. End-to-end tax solutions for all business needs.",
    images: [
      "https://www.unigst.com/images/gst-consultants-kolkata-twitter.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GstConsultantKolkata = () => {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "UNIgst - GST Consultants Kolkata",
            image: "https://www.unigst.com/images/unigst-logo.jpg",
            "@id": "https://www.unigst.com/gst-consultants-kolkata",
            url: "https://www.unigst.com/gst-consultants-kolkata",
            telephone: "+91-9945933333",
            priceRange: "₹₹",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Park Street",
              addressLocality: "Kolkata",
              addressRegion: "West Bengal",
              postalCode: "700016",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 22.5726,
              longitude: 88.3639,
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
              name: "Kolkata",
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
                name: "Why should I hire a GST consultant in Kolkata?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A GST consultant helps ensure accuracy, compliance, seamless filings, optimized tax decisions, and risk-free audits — protecting your business from penalties.",
                },
              },
              {
                "@type": "Question",
                name: "Does UNIgst handle GST filings and notices?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we manage GST filings, notices, audits, reconciliations, advisory, and complete compliance for businesses in Kolkata.",
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
          <meta name="geo.region" content="IN-WB">
          <meta name="geo.placename" content="Kolkata">
          <meta name="geo.position" content="22.5726;88.3639">
          <meta name="ICBM" content="22.5726, 88.3639">
        `}
      </Script>

      <CompanySection data={heroDataConsultantsKolkata} />
      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionDataConsultantsBangalore}/>
        <ProcessSectionConsultants data={processStepsConsultantsBangalore}/>
        <CoreValuesConsultants />
        <FaqSection faqs={faqsConsultants}/>
      </section>
    </>
  );
};

export default GstConsultantKolkata;
