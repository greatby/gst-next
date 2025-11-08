import AboutSection from "@/components/AboutSection";
import CoreValuesConsultants from "@/components/bangalore/CoreValuesConsultants";
import FaqSection from "@/components/bangalore/FaqSection";
import ProcessSectionConsultants from "@/components/bangalore/ProcessSectionConsultants";
import { aboutSectionDataConsultantsBangalore, faqsConsultants, heroDataConsultantsIndore, processStepsConsultantsBangalore } from "@/utils/data";
import Script from "next/script";
import CompanySection from "@/components/CompanySection";

export const metadata = {
  title: "GST Consultants in Indore | Expert Tax Advisory Services - UNIgst",
  description:
    "Trusted GST consultants in Indore providing GST filing, compliance, notice support, reconciliation, and end-to-end advisory for startups and enterprises.",
  keywords:
    "GST consultants Indore, GST advisory services, tax consultants Indore, GST notice support Indore, GST compliance Indore, GST filing Indore",
  alternates: {
    canonical: "https://www.unigst.com/gst-consultants-indore",
  },
  openGraph: {
    title: "GST Consultants in Indore | Expert Tax Advisory - UNIgst",
    description:
      "Professional GST consulting, filing, audit, notice and compliance support in Indore for startups, MSMEs and enterprises.",
    url: "https://www.unigst.com/gst-consultants-indore",
    type: "website",
    locale: "en_IN",
    siteName: "UNIgst",
    images: [
      {
        url: "https://www.unigst.com/images/gst-consultants-indore-og.jpg",
        width: 1200,
        height: 630,
        alt: "GST Consultants in Indore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Consultants in Indore | Expert Tax Advisory - UNIgst",
    description:
      "Best GST advisory, compliance, filings, and notice support for businesses in Indore.",
    images: [
      "https://www.unigst.com/images/gst-consultants-indore-twitter.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GstConsultantIndore = () => {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "UNIgst - GST Consultants Indore",
            image: "https://www.unigst.com/images/unigst-logo.jpg",
            "@id": "https://www.unigst.com/gst-consultants-indore",
            url: "https://www.unigst.com/gst-consultants-indore",
            telephone: "+91-9945933333",
            priceRange: "₹₹",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Vijay Nagar",
              addressLocality: "Indore",
              addressRegion: "Madhya Pradesh",
              postalCode: "452010",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 22.7196,
              longitude: 75.8577,
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
              name: "Indore",
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
                name: "Do businesses in Indore need a GST consultant?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. A GST consultant helps ensure accurate GST filings, avoid penalties, optimize ITC, handle notices, and maintain compliance with changing laws.",
                },
              },
              {
                "@type": "Question",
                name: "Does UNIgst handle GST notices in Indore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, UNIgst provides GST notice response, audits, reconciliation, return filing, ITC optimization, and full compliance management in Indore.",
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
          <meta name="geo.region" content="IN-MP">
          <meta name="geo.placename" content="Indore">
          <meta name="geo.position" content="22.7196;75.8577">
          <meta name="ICBM" content="22.7196, 75.8577">
        `}
      </Script>

      <CompanySection data={heroDataConsultantsIndore} />
      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionDataConsultantsBangalore}/>
        <ProcessSectionConsultants data={processStepsConsultantsBangalore}/>
        <CoreValuesConsultants />
        <FaqSection faqs={faqsConsultants}/>
      </section>
    </>
  );
};

export default GstConsultantIndore;
