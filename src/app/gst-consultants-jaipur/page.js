import AboutSection from "@/components/AboutSection";
import CoreValuesConsultants from "@/components/bangalore/CoreValuesConsultants";
import FaqSection from "@/components/bangalore/FaqSection";
import ProcessSectionConsultants from "@/components/bangalore/ProcessSectionConsultants";
import { aboutSectionDataConsultantsBangalore, faqsConsultants, heroDataConsultantsJaipur, processStepsConsultantsBangalore } from "@/utils/data";
import Script from "next/script";
import CompanySection from "@/components/CompanySection";

export const metadata = {
  title: "GST Consultants in Jaipur | Expert Tax Advisory Services - UNIgst",
  description:
    "Trusted GST consultants in Jaipur offering compliance, tax advisory, return filing, audits and notice handling for startups, MSMEs and enterprises.",
  keywords:
    "GST consultants Jaipur, GST advisory services, tax consultants Jaipur, GST compliance experts, GST planning Jaipur, GST registration Jaipur",
  alternates: {
    canonical: "https://www.unigst.com/gst-consultants-jaipur",
  },
  openGraph: {
    title: "GST Consultants in Jaipur | Expert Tax Advisory - UNIgst",
    description:
      "Professional GST consulting in Jaipur for compliance, filings, audits, notices, and tax planning support across industries.",
    url: "https://www.unigst.com/gst-consultants-jaipur",
    type: "website",
    locale: "en_IN",
    siteName: "UNIgst",
    images: [
      {
        url: "https://www.unigst.com/images/gst-consultants-jaipur-og.jpg",
        width: 1200,
        height: 630,
        alt: "GST Consultants in Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Consultants in Jaipur | Expert Tax Advisory - UNIgst",
    description:
      "Leading GST consultants in Jaipur for compliance, audits, filings, advisory, and notice management.",
    images: [
      "https://www.unigst.com/images/gst-consultants-jaipur-twitter.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GstConsultantJaipur = () => {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "UNIgst - GST Consultants Jaipur",
            image: "https://www.unigst.com/images/unigst-logo.jpg",
            "@id": "https://www.unigst.com/gst-consultants-jaipur",
            url: "https://www.unigst.com/gst-consultants-jaipur",
            telephone: "+91-9945933333",
            priceRange: "₹₹",
            address: {
              "@type": "PostalAddress",
              streetAddress: "C-Scheme",
              addressLocality: "Jaipur",
              addressRegion: "Rajasthan",
              postalCode: "302001",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 26.9124,
              longitude: 75.7873,
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
              name: "Jaipur",
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
                name: "Do companies in Jaipur need GST consultants?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, businesses in Jaipur benefit from GST consultants for accurate compliance, error-free filing, notice handling, optimized ITC, and audit support.",
                },
              },
              {
                "@type": "Question",
                name: "Does UNIgst provide GST notice and audit support in Jaipur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, UNIgst offers end-to-end GST notice management, audits, reconciliations, filings, and advisory support in Jaipur.",
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
          <meta name="geo.region" content="IN-RJ">
          <meta name="geo.placename" content="Jaipur">
          <meta name="geo.position" content="26.9124;75.7873">
          <meta name="ICBM" content="26.9124, 75.7873">
        `}
      </Script>

      <CompanySection data={heroDataConsultantsJaipur} />
      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionDataConsultantsBangalore}/>
        <ProcessSectionConsultants data={processStepsConsultantsBangalore}/>
        <CoreValuesConsultants />
        <FaqSection faqs={faqsConsultants}/>
      </section>
    </>
  );
};

export default GstConsultantJaipur;
