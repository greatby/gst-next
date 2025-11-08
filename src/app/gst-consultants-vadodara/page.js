import AboutSection from "@/components/AboutSection";
import CoreValuesConsultants from "@/components/bangalore/CoreValuesConsultants";
import FaqSection from "@/components/bangalore/FaqSection";
import ProcessSectionConsultants from "@/components/bangalore/ProcessSectionConsultants";
import { aboutSectionDataConsultantsBangalore, faqsConsultants, heroDataConsultantsVadodara, processStepsConsultantsBangalore } from "@/utils/data";
import Script from "next/script";
import CompanySection from "@/components/CompanySection";

export const metadata = {
  title: "GST Consultants in Vadodara | Expert Tax Advisory Services - UNIgst",
  description:
    "Reliable GST consultants in Vadodara offering GST filing, compliance, audits, notice support, and tax advisory for startups and enterprises.",
  keywords:
    "GST consultants Vadodara, GST advisory Vadodara, GST compliance Vadodara, GST filing Vadodara, GST notice support Vadodara, tax consultants Vadodara",
  alternates: {
    canonical: "https://www.unigst.com/gst-consultants-vadodara",
  },
  openGraph: {
    title: "GST Consultants in Vadodara | Expert Tax Advisory - UNIgst",
    description:
      "Professional GST consulting, return filing, compliance, audit and notice support for businesses in Vadodara.",
    url: "https://www.unigst.com/gst-consultants-vadodara",
    type: "website",
    locale: "en_IN",
    siteName: "UNIgst",
    images: [
      {
        url: "https://www.unigst.com/images/gst-consultants-vadodara-og.jpg",
        width: 1200,
        height: 630,
        alt: "GST Consultants in Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Consultants in Vadodara | Expert Tax Advisory - UNIgst",
    description:
      "Trusted GST advisory, filing, compliance & notice support for businesses in Vadodara.",
    images: [
      "https://www.unigst.com/images/gst-consultants-vadodara-twitter.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GstConsultantVadodara = () => {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "UNIgst - GST Consultants Vadodara",
            image: "https://www.unigst.com/images/unigst-logo.jpg",
            "@id": "https://www.unigst.com/gst-consultants-vadodara",
            url: "https://www.unigst.com/gst-consultants-vadodara",
            telephone: "+91-9945933333",
            priceRange: "₹₹",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Alkapuri",
              addressLocality: "Vadodara",
              addressRegion: "Gujarat",
              postalCode: "390007",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 22.3072,
              longitude: 73.1812,
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
              name: "Vadodara",
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
                name: "Do businesses in Vadodara need GST consultants?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. GST consultants help ensure error-free filings, ITC optimization, notice handling, audit support, and full compliance with GST laws.",
                },
              },
              {
                "@type": "Question",
                name: "Does UNIgst handle GST notices in Vadodara?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, UNIgst provides GST notice response, audits, reconciliation, return filing and complete compliance assistance in Vadodara.",
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
          <meta name="geo.region" content="IN-GJ">
          <meta name="geo.placename" content="Vadodara">
          <meta name="geo.position" content="22.3072;73.1812">
          <meta name="ICBM" content="22.3072, 73.1812">
        `}
      </Script>

      <CompanySection data={heroDataConsultantsVadodara} />
      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionDataConsultantsBangalore}/>
        <ProcessSectionConsultants data={processStepsConsultantsBangalore}/>
        <CoreValuesConsultants />
        <FaqSection faqs={faqsConsultants}/>
      </section>
    </>
  );
};

export default GstConsultantVadodara;
