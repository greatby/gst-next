import AboutSection from "@/components/AboutSection";
import CoreValuesConsultants from "@/components/bangalore/CoreValuesConsultants";
import FaqSection from "@/components/bangalore/FaqSection";
import ProcessSectionConsultants from "@/components/bangalore/ProcessSectionConsultants";
import { aboutSectionDataConsultantsBangalore, faqsConsultants, heroDataConsultantsAhmedabad, processStepsConsultantsBangalore } from "@/utils/data";
import Script from "next/script";
import CompanySection from "@/components/CompanySection";

export const metadata = {
  title: "GST Consultants in Ahmedabad | Expert Tax Advisory Services - UNIgst",
  description:
    "Top GST consultants in Ahmedabad offering compliance, advisory, filing & tax planning. GST solutions for manufacturers, startups, traders, and enterprises.",
  keywords:
    "GST consultants Ahmedabad, GST advisory services, tax consultants Ahmedabad, GST compliance experts, GST planning Ahmedabad",
  alternates: {
    canonical: "https://www.unigst.com/gst-consultants-ahmedabad",
  },
  openGraph: {
    title: "GST Consultants in Ahmedabad | Expert Tax Advisory - UNIgst",
    description:
      "Reliable GST consulting and compliance services in Ahmedabad. End-to-end tax planning, filing, and advisory for all business types.",
    url: "https://www.unigst.com/gst-consultants-ahmedabad",
    type: "website",
    locale: "en_IN",
    siteName: "UNIgst",
    images: [
      {
        url: "https://www.unigst.com/images/gst-consultants-ahmedabad-og.jpg",
        width: 1200,
        height: 630,
        alt: "GST Consultants in Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Consultants in Ahmedabad | Expert Tax Advisory - UNIgst",
    description:
      "Trusted GST consultants in Ahmedabad for compliance, advisory, filings, and audit support.",
    images: [
      "https://www.unigst.com/images/gst-consultants-ahmedabad-twitter.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GstConsultantAhmedabad = () => {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "UNIgst - GST Consultants Ahmedabad",
            image: "https://www.unigst.com/images/unigst-logo.jpg",
            "@id": "https://www.unigst.com/gst-consultants-ahmedabad",
            url: "https://www.unigst.com/gst-consultants-ahmedabad",
            telephone: "+91-9945933333",
            priceRange: "₹₹",
            address: {
              "@type": "PostalAddress",
              streetAddress: "CG Road",
              addressLocality: "Ahmedabad",
              addressRegion: "Gujarat",
              postalCode: "380009",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 23.0225,
              longitude: 72.5714,
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
              name: "Ahmedabad",
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
                name: "Do I need a GST consultant for my business in Ahmedabad?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, a GST consultant ensures error-free compliance, timely filings, optimized tax planning, and protection from penalties and notices.",
                },
              },
              {
                "@type": "Question",
                name: "Can UNIgst handle GST notices and audits in Ahmedabad?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, UNIgst provides end-to-end support for GST filings, notices, reconciliations, audits, and advisory services in Ahmedabad.",
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
          <meta name="geo.placename" content="Ahmedabad">
          <meta name="geo.position" content="23.0225;72.5714">
          <meta name="ICBM" content="23.0225, 72.5714">
        `}
      </Script>

      <CompanySection data={heroDataConsultantsAhmedabad} />
      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionDataConsultantsBangalore}/>
        <ProcessSectionConsultants data={processStepsConsultantsBangalore}/>
        <CoreValuesConsultants />
        <FaqSection faqs={faqsConsultants}/>
      </section>
    </>
  );
};

export default GstConsultantAhmedabad;
