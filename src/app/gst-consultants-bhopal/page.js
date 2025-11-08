import AboutSection from "@/components/AboutSection";
import CoreValuesConsultants from "@/components/bangalore/CoreValuesConsultants";
import FaqSection from "@/components/bangalore/FaqSection";
import ProcessSectionConsultants from "@/components/bangalore/ProcessSectionConsultants";
import { aboutSectionDataConsultantsBangalore, faqsConsultants, heroDataConsultantsBhopal, processStepsConsultantsBangalore } from "@/utils/data";
import Script from "next/script";
import CompanySection from "@/components/CompanySection";

export const metadata = {
  title: "GST Consultants in Bhopal | GST Filing & Compliance - UNIgst",
  description:
    "Reliable GST consultants in Bhopal for GST filing, compliance, ITC reconciliation, audits, and notice handling for businesses of all sizes.",
  keywords:
    "GST consultants Bhopal, GST filing Bhopal, GST compliance Bhopal, GST advisory Bhopal, GST notice support Bhopal",
  alternates: {
    canonical: "https://www.unigst.com/gst-consultants-bhopal",
  },
  openGraph: {
    title: "GST Consultants in Bhopal | Compliance & Advisory - UNIgst",
    description:
      "Trusted GST filing, advisory, reconciliation & compliance services for businesses in Bhopal.",
    url: "https://www.unigst.com/gst-consultants-bhopal",
    type: "website",
    locale: "en_IN",
    siteName: "UNIgst",
    images: [
      {
        url: "https://www.unigst.com/images/gst-consultants-bhopal-og.jpg",
        width: 1200,
        height: 630,
        alt: "GST Consultants in Bhopal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Consultants in Bhopal | GST Compliance - UNIgst",
    description:
      "Professional GST consulting, filing, reconciliation, and notice support in Bhopal.",
    images: [
      "https://www.unigst.com/images/gst-consultants-bhopal-twitter.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GstConsultantBhopal = () => {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "UNIgst - GST Consultants Bhopal",
            image: "https://www.unigst.com/images/unigst-logo.jpg",
            "@id": "https://www.unigst.com/gst-consultants-bhopal",
            url: "https://www.unigst.com/gst-consultants-bhopal",
            telephone: "+91-9945933333",
            priceRange: "₹₹",
            address: {
              "@type": "PostalAddress",
              streetAddress: "MP Nagar",
              addressLocality: "Bhopal",
              addressRegion: "Madhya Pradesh",
              postalCode: "462011",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 23.2599,
              longitude: 77.4126,
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
              name: "Bhopal",
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
                name: "Why hire GST consultants in Bhopal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To ensure accurate GST filings, ITC reconciliation, audit support, notice handling, and full regulatory compliance.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide GST notice support in Bhopal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, UNIgst offers complete GST notice handling, filings, audits, reconciliation, and compliance support in Bhopal.",
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
          <meta name="geo.placename" content="Bhopal">
          <meta name="geo.position" content="23.2599;77.4126">
          <meta name="ICBM" content="23.2599, 77.4126">
        `}
      </Script>

      <CompanySection data={heroDataConsultantsBhopal} />
      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionDataConsultantsBangalore}/>
        <ProcessSectionConsultants data={processStepsConsultantsBangalore}/>
        <CoreValuesConsultants />
        <FaqSection faqs={faqsConsultants}/>
      </section>
    </>
  );
};

export default GstConsultantBhopal;
