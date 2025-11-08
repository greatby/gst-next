import AboutSection from "@/components/AboutSection";
import CoreValuesConsultants from "@/components/bangalore/CoreValuesConsultants";
import FaqSection from "@/components/bangalore/FaqSection";
import ProcessSectionConsultants from "@/components/bangalore/ProcessSectionConsultants";
import { aboutSectionDataConsultantsBangalore, faqsConsultants, heroDataConsultantsSurat, processStepsConsultantsBangalore } from "@/utils/data";
import Script from "next/script";
import CompanySection from "@/components/CompanySection";

export const metadata = {
  title: "GST Consultants in Surat | Expert Tax Advisory Services - UNIgst",
  description:
    "Top GST consultants in Surat for tax advisory, compliance, filing, audits & litigation. Trusted GST experts supporting Diamond, Textile, Manufacturing & SME sectors.",
  keywords:
    "GST consultants Surat, GST advisory services, tax consultants Surat, GST compliance experts, GST planning Surat",
  alternates: {
    canonical: "https://www.unigst.com/gst-consultants-surat",
  },
  openGraph: {
    title: "GST Consultants in Surat | Expert Tax Advisory - UNIgst",
    description:
      "Professional GST consulting in Surat for compliance, filings, audits and tax planning. Serving textile, diamond, manufacturing and SME sectors.",
    url: "https://www.unigst.com/gst-consultants-surat",
    type: "website",
    locale: "en_IN",
    siteName: "UNIgst",
    images: [
      {
        url: "https://www.unigst.com/images/gst-consultants-surat-og.jpg",
        width: 1200,
        height: 630,
        alt: "GST Consultants in Surat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Consultants in Surat | Expert Tax Advisory - UNIgst",
    description:
      "Trusted GST experts in Surat for compliance, notices, filing, audits and advisory services.",
    images: [
      "https://www.unigst.com/images/gst-consultants-surat-twitter.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GstConsultantSurat = () => {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "UNIgst - GST Consultants Surat",
            image: "https://www.unigst.com/images/unigst-logo.jpg",
            "@id": "https://www.unigst.com/gst-consultants-surat",
            url: "https://www.unigst.com/gst-consultants-surat",
            telephone: "+91-9945933333",
            priceRange: "₹₹",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Ring Road",
              addressLocality: "Surat",
              addressRegion: "Gujarat",
              postalCode: "395002",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 21.1702,
              longitude: 72.8311,
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
              name: "Surat",
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
                name: "Which industries in Surat benefit the most from GST consultants?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Industries like textiles, diamonds, manufacturing, trading, logistics, SMEs and exporters benefit the most from professional GST advisory in Surat.",
                },
              },
              {
                "@type": "Question",
                name: "Can UNIgst handle GST notices for Surat businesses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, UNIgst provides end-to-end GST notice handling, reconciliation, responses, audits, and litigation support for Surat-based businesses.",
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
          <meta name="geo.placename" content="Surat">
          <meta name="geo.position" content="21.1702;72.8311">
          <meta name="ICBM" content="21.1702, 72.8311">
        `}
      </Script>

      <CompanySection data={heroDataConsultantsSurat} />
      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionDataConsultantsBangalore}/>
        <ProcessSectionConsultants data={processStepsConsultantsBangalore}/>
        <CoreValuesConsultants />
        <FaqSection faqs={faqsConsultants}/>
      </section>
    </>
  );
};

export default GstConsultantSurat;
