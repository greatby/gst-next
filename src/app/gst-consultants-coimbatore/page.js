import AboutSection from "@/components/AboutSection";
import CoreValuesConsultants from "@/components/bangalore/CoreValuesConsultants";
import FaqSection from "@/components/bangalore/FaqSection";
import ProcessSectionConsultants from "@/components/bangalore/ProcessSectionConsultants";
import { aboutSectionDataConsultantsBangalore, faqsConsultants, heroDataConsultantsCoimbatore, processStepsConsultantsBangalore } from "@/utils/data";
import Script from "next/script";
import CompanySection from "@/components/CompanySection";

export const metadata = {
  title: "GST Consultants in Coimbatore | Expert Tax Advisory Services - UNIgst",
  description:
    "Top GST consultants in Coimbatore offering GST filing, compliance, audits, notice support, and tax advisory for startups and enterprises.",
  keywords:
    "GST consultants Coimbatore, GST advisory services, tax consultants Coimbatore, GST compliance Coimbatore, GST filing Coimbatore, GST notice support Coimbatore",
  alternates: {
    canonical: "https://www.unigst.com/gst-consultants-coimbatore",
  },
  openGraph: {
    title: "GST Consultants in Coimbatore | Expert Tax Advisory - UNIgst",
    description:
      "Professional GST consulting, return filing, compliance, audit and notice support for businesses in Coimbatore.",
    url: "https://www.unigst.com/gst-consultants-coimbatore",
    type: "website",
    locale: "en_IN",
    siteName: "UNIgst",
    images: [
      {
        url: "https://www.unigst.com/images/gst-consultants-coimbatore-og.jpg",
        width: 1200,
        height: 630,
        alt: "GST Consultants in Coimbatore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Consultants in Coimbatore | Expert Tax Advisory - UNIgst",
    description:
      "Trusted GST advisory, filings, compliance & notice support for businesses in Coimbatore.",
    images: [
      "https://www.unigst.com/images/gst-consultants-coimbatore-twitter.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GstConsultantCoimbatore = () => {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "UNIgst - GST Consultants Coimbatore",
            image: "https://www.unigst.com/images/unigst-logo.jpg",
            "@id": "https://www.unigst.com/gst-consultants-coimbatore",
            url: "https://www.unigst.com/gst-consultants-coimbatore",
            telephone: "+91-9945933333",
            priceRange: "₹₹",
            address: {
              "@type": "PostalAddress",
              streetAddress: "RS Puram",
              addressLocality: "Coimbatore",
              addressRegion: "Tamil Nadu",
              postalCode: "641002",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 11.0168,
              longitude: 76.9558,
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
              name: "Coimbatore",
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
                name: "Do businesses in Coimbatore need GST consultants?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. GST consultants help maintain compliance, optimize ITC, file timely returns, and handle notices, audits, and reconciliations efficiently.",
                },
              },
              {
                "@type": "Question",
                name: "Does UNIgst provide GST notice support in Coimbatore?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, UNIgst offers end-to-end GST notice response, compliance management, filing, reconciliation, and audit assistance in Coimbatore.",
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
          <meta name="geo.region" content="IN-TN">
          <meta name="geo.placename" content="Coimbatore">
          <meta name="geo.position" content="11.0168;76.9558">
          <meta name="ICBM" content="11.0168, 76.9558">
        `}
      </Script>

      <CompanySection data={heroDataConsultantsCoimbatore} />
      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionDataConsultantsBangalore}/>
        <ProcessSectionConsultants data={processStepsConsultantsBangalore}/>
        <CoreValuesConsultants />
        <FaqSection faqs={faqsConsultants}/>
      </section>
    </>
  );
};

export default GstConsultantCoimbatore;
