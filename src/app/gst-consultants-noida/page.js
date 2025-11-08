import AboutSection from "@/components/AboutSection";
import CoreValuesConsultants from "@/components/bangalore/CoreValuesConsultants";
import FaqSection from "@/components/bangalore/FaqSection";
import ProcessSectionConsultants from "@/components/bangalore/ProcessSectionConsultants";
import { aboutSectionDataConsultantsBangalore, faqsConsultants, heroDataConsultantsNoida, processStepsConsultantsBangalore } from "@/utils/data";
import Script from "next/script";
import CompanySection from "@/components/CompanySection";

export const metadata = {
  title: "GST Consultants in Noida | Expert Tax Advisory Services - UNIgst",
  description:
    "Trusted GST consultants in Noida offering compliance, tax advisory, return filing, audits and notice handling for startups, MSMEs and enterprises.",
  keywords:
    "GST consultants Noida, GST advisory services, tax consultants Noida, GST compliance experts, GST planning Noida, GST registration Noida",
  alternates: {
    canonical: "https://www.unigst.com/gst-consultants-noida",
  },
  openGraph: {
    title: "GST Consultants in Noida | Expert Tax Advisory - UNIgst",
    description:
      "Professional GST consulting in Noida for compliance, filings, audits, notices, and tax planning support across industries.",
    url: "https://www.unigst.com/gst-consultants-noida",
    type: "website",
    locale: "en_IN",
    siteName: "UNIgst",
    images: [
      {
        url: "https://www.unigst.com/images/gst-consultants-noida-og.jpg",
        width: 1200,
        height: 630,
        alt: "GST Consultants in Noida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Consultants in Noida | Expert Tax Advisory - UNIgst",
    description:
      "Leading GST consultants in Noida for compliance, audits, filings, advisory, and notice management.",
    images: [
      "https://www.unigst.com/images/gst-consultants-noida-twitter.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GstConsultantNoida = () => {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "UNIgst - GST Consultants Noida",
            image: "https://www.unigst.com/images/unigst-logo.jpg",
            "@id": "https://www.unigst.com/gst-consultants-noida",
            url: "https://www.unigst.com/gst-consultants-noida",
            telephone: "+91-9945933333",
            priceRange: "₹₹",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Sector 62",
              addressLocality: "Noida",
              addressRegion: "Uttar Pradesh",
              postalCode: "201301",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 28.5355,
              longitude: 77.3910,
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
              name: "Noida",
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
                name: "Do companies in Noida need GST consultants?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, businesses in Noida benefit from GST consultants for accurate compliance, error-free filing, notice handling, optimized ITC, and audit support.",
                },
              },
              {
                "@type": "Question",
                name: "Does UNIgst provide GST notice and audit support in Noida?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, UNIgst offers end-to-end GST notice management, audits, reconciliations, filings, and advisory support in Noida.",
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
          <meta name="geo.placename" content="Noida">
          <meta name="geo.position" content="28.5355;77.3910">
          <meta name="ICBM" content="28.5355, 77.3910">
        `}
      </Script>

      <CompanySection data={heroDataConsultantsNoida} />
      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionDataConsultantsBangalore}/>
        <ProcessSectionConsultants data={processStepsConsultantsBangalore}/>
        <CoreValuesConsultants />
        <FaqSection faqs={faqsConsultants}/>
      </section>
    </>
  );
};

export default GstConsultantNoida;
