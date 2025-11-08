import AboutSection from "@/components/AboutSection";
import CoreValuesConsultants from "@/components/bangalore/CoreValuesConsultants";
import FaqSection from "@/components/bangalore/FaqSection";
import ProcessSectionConsultants from "@/components/bangalore/ProcessSectionConsultants";
import { aboutSectionDataConsultantsBangalore, faqsConsultants, heroDataConsultantsVisakhapatnam, processStepsConsultantsBangalore } from "@/utils/data";
import Script from "next/script";
import CompanySection from "@/components/CompanySection";

export const metadata = {
  title: "GST Consultants in Visakhapatnam | GST Filing & Compliance - UNIgst",
  description:
    "Trusted GST consultants in Visakhapatnam for GST filing, compliance, audits, return reconciliation and notice management for businesses.",
  keywords:
    "GST consultants Visakhapatnam, GST filing Visakhapatnam, GST compliance Visakhapatnam, GST advisory Visakhapatnam, GST notice handling Visakhapatnam",
  alternates: {
    canonical: "https://www.unigst.com/gst-consultants-visakhapatnam",
  },
  openGraph: {
    title: "GST Consultants in Visakhapatnam | Compliance & Advisory - UNIgst",
    description:
      "Expert GST filing, advisory, notice response and compliance support for businesses in Visakhapatnam.",
    url: "https://www.unigst.com/gst-consultants-visakhapatnam",
    type: "website",
    locale: "en_IN",
    siteName: "UNIgst",
    images: [
      {
        url: "https://www.unigst.com/images/gst-consultants-visakhapatnam-og.jpg",
        width: 1200,
        height: 630,
        alt: "GST Consultants in Visakhapatnam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Consultants in Visakhapatnam | GST Compliance - UNIgst",
    description:
      "Professional GST consulting, filing, reconciliation and notice support for businesses in Visakhapatnam.",
    images: [
      "https://www.unigst.com/images/gst-consultants-visakhapatnam-twitter.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GstConsultantVisakhapatnam = () => {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "UNIgst - GST Consultants Visakhapatnam",
            image: "https://www.unigst.com/images/unigst-logo.jpg",
            "@id": "https://www.unigst.com/gst-consultants-visakhapatnam",
            url: "https://www.unigst.com/gst-consultants-visakhapatnam",
            telephone: "+91-9945933333",
            priceRange: "₹₹",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Dwaraka Nagar",
              addressLocality: "Visakhapatnam",
              addressRegion: "Andhra Pradesh",
              postalCode: "530016",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 17.6868,
              longitude: 83.2185,
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
              name: "Visakhapatnam",
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
                name: "Why do businesses in Visakhapatnam need GST consultants?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To ensure accurate GST filings, ITC reconciliation, audit support, notice handling and end-to-end compliance management.",
                },
              },
              {
                "@type": "Question",
                name: "Does UNIgst offer GST notice assistance in Visakhapatnam?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, UNIgst provides notice handling, reconciliation, filings, and full GST compliance support across Visakhapatnam.",
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
          <meta name="geo.region" content="IN-AP">
          <meta name="geo.placename" content="Visakhapatnam">
          <meta name="geo.position" content="17.6868;83.2185">
          <meta name="ICBM" content="17.6868, 83.2185">
        `}
      </Script>

      <CompanySection data={heroDataConsultantsVisakhapatnam} />
      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionDataConsultantsBangalore}/>
        <ProcessSectionConsultants data={processStepsConsultantsBangalore}/>
        <CoreValuesConsultants />
        <FaqSection faqs={faqsConsultants}/>
      </section>
    </>
  );
};

export default GstConsultantVisakhapatnam;
