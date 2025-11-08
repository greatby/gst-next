import AboutSection from "@/components/AboutSection";
import CoreValuesConsultants from "@/components/bangalore/CoreValuesConsultants";
import FaqSection from "@/components/bangalore/FaqSection";
import ProcessSectionConsultants from "@/components/bangalore/ProcessSectionConsultants";
import { aboutSectionDataConsultantsBangalore, faqsConsultants, heroDataConsultantsKanpur, processStepsConsultantsBangalore } from "@/utils/data";
import Script from "next/script";
import CompanySection from "@/components/CompanySection";

export const metadata = {
  title: "GST Consultants in Kanpur | GST Filing & Compliance - UNIgst",
  description:
    "Expert GST consultants in Kanpur for GST filing, compliance, reconciliation, audit support & notices. Trusted GST advisory for MSMEs, startups & enterprises.",
  keywords:
    "GST consultants Kanpur, GST filing Kanpur, GST compliance Kanpur, GST advisory Kanpur, GST notice support Kanpur",
  alternates: {
    canonical: "https://www.unigst.com/gst-consultants-kanpur",
  },
  openGraph: {
    title: "GST Consultants in Kanpur | Compliance & Advisory - UNIgst",
    description:
      "Reliable GST return filing, advisory, reconciliation, audit and compliance services in Kanpur.",
    url: "https://www.unigst.com/gst-consultants-kanpur",
    type: "website",
    locale: "en_IN",
    siteName: "UNIgst",
    images: [
      {
        url: "https://www.unigst.com/images/gst-consultants-kanpur-og.jpg",
        width: 1200,
        height: 630,
        alt: "GST Consultants in Kanpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Consultants in Kanpur | GST Compliance - UNIgst",
    description:
      "End-to-end GST filing, reconciliation, and advisory services for businesses in Kanpur.",
    images: [
      "https://www.unigst.com/images/gst-consultants-kanpur-twitter.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GstConsultantKanpur = () => {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "UNIgst - GST Consultants Kanpur",
            image: "https://www.unigst.com/images/unigst-logo.jpg",
            "@id": "https://www.unigst.com/gst-consultants-kanpur",
            url: "https://www.unigst.com/gst-consultants-kanpur",
            telephone: "+91-9945933333",
            priceRange: "₹₹",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Civil Lines",
              addressLocality: "Kanpur",
              addressRegion: "Uttar Pradesh",
              postalCode: "208001",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 26.4499,
              longitude: 80.3319,
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
              name: "Kanpur",
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
                name: "Do you provide GST audit support in Kanpur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, UNIgst provides GST audit assistance, ITC reconciliation, return filing, notice handling, and compliance support in Kanpur.",
                },
              },
              {
                "@type": "Question",
                name: "Who needs GST consultants in Kanpur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Startups, MSMEs, traders, manufacturers, service providers, and enterprises need professional GST support to avoid penalties and stay compliant.",
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
          <meta name="geo.placename" content="Kanpur">
          <meta name="geo.position" content="26.4499;80.3319">
          <meta name="ICBM" content="26.4499, 80.3319">
        `}
      </Script>

      <CompanySection data={heroDataConsultantsKanpur} />
      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionDataConsultantsBangalore}/>
        <ProcessSectionConsultants data={processStepsConsultantsBangalore}/>
        <CoreValuesConsultants />
        <FaqSection faqs={faqsConsultants}/>
      </section>
    </>
  );
};

export default GstConsultantKanpur;
