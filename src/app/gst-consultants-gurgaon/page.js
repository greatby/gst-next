import AboutSection from "@/components/AboutSection";
import CoreValuesConsultants from "@/components/bangalore/CoreValuesConsultants";
import FaqSection from "@/components/bangalore/FaqSection";
import ProcessSectionConsultants from "@/components/bangalore/ProcessSectionConsultants";
import { aboutSectionDataConsultantsBangalore, faqsConsultants, heroDataConsultantsGurgaon, processStepsConsultantsBangalore } from "@/utils/data";
import Script from "next/script";
import CompanySection from "@/components/CompanySection";

export const metadata = {
  title: "GST Consultants in Gurgaon | Expert Tax Advisory Services - UNIgst",
  description:
    "Top GST consultants in Gurgaon offering GST compliance, filing, advisory, audit & litigation support for corporates, startups, and MSMEs.",
  keywords:
    "GST consultants Gurgaon, GST advisory services, tax consultants Gurgaon, GST compliance experts, GST planning Gurgaon, GST for startups Gurgaon",
  alternates: {
    canonical: "https://www.unigst.com/gst-consultants-gurgaon",
  },
  openGraph: {
    title: "GST Consultants in Gurgaon | Expert Tax Advisory - UNIgst",
    description:
      "Reliable GST consulting in Gurgaon for startups, IT/ITES, corporates, and MSMEs. Compliance, audits, filings and tax advisory support.",
    url: "https://www.unigst.com/gst-consultants-gurgaon",
    type: "website",
    locale: "en_IN",
    siteName: "UNIgst",
    images: [
      {
        url: "https://www.unigst.com/images/gst-consultants-gurgaon-og.jpg",
        width: 1200,
        height: 630,
        alt: "GST Consultants in Gurgaon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Consultants in Gurgaon | Expert Tax Advisory - UNIgst",
    description:
      "Expert GST consultants in Gurgaon for filings, audits, compliance, notices and advisory.",
    images: [
      "https://www.unigst.com/images/gst-consultants-gurgaon-twitter.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GstConsultantGurgaon = () => {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "UNIgst - GST Consultants Gurgaon",
            image: "https://www.unigst.com/images/unigst-logo.jpg",
            "@id": "https://www.unigst.com/gst-consultants-gurgaon",
            url: "https://www.unigst.com/gst-consultants-gurgaon",
            telephone: "+91-9945933333",
            priceRange: "₹₹",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Cyber City",
              addressLocality: "Gurgaon",
              addressRegion: "Haryana",
              postalCode: "122002",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 28.4595,
              longitude: 77.0266,
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
              name: "Gurgaon",
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
                name: "Is GST mandatory for startups in Gurgaon?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GST registration is mandatory for startups crossing the prescribed turnover threshold or those involved in inter-state supply, e-commerce, or B2B services.",
                },
              },
              {
                "@type": "Question",
                name: "Can UNIgst manage GST notices and audits in Gurgaon?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, UNIgst offers end-to-end support for GST notices, audits, reconciliations, return filing, and compliance management for businesses in Gurgaon.",
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
          <meta name="geo.region" content="IN-HR">
          <meta name="geo.placename" content="Gurgaon">
          <meta name="geo.position" content="28.4595;77.0266">
          <meta name="ICBM" content="28.4595, 77.0266">
        `}
      </Script>

      <CompanySection data={heroDataConsultantsGurgaon} />
      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionDataConsultantsBangalore}/>
        <ProcessSectionConsultants data={processStepsConsultantsBangalore}/>
        <CoreValuesConsultants />
        <FaqSection faqs={faqsConsultants}/>
      </section>
    </>
  );
};

export default GstConsultantGurgaon;
