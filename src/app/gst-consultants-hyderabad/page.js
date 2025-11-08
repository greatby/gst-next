import AboutSection from "@/components/AboutSection";
import CoreValuesConsultants from "@/components/bangalore/CoreValuesConsultants";
import FaqSection from "@/components/bangalore/FaqSection";
import ProcessSectionConsultants from "@/components/bangalore/ProcessSectionConsultants";
import { aboutSectionDataConsultantsBangalore, faqsConsultants, heroDataConsultantsHyderabad, processStepsConsultantsBangalore } from "@/utils/data";
import Script from "next/script";
import CompanySection from "@/components/CompanySection";

export const metadata = {
  title: "GST Consultants in Hyderabad | Expert Tax Advisory Services - UNIgst",
  description:
    "Leading GST consultants in Hyderabad offering expert tax advisory, compliance management, and strategic GST planning. Serving businesses across all sectors. Call now!",
  keywords:
    "GST consultants Hyderabad, GST advisory services, tax consultants Hyderabad, GST compliance experts, GST planning Hyderabad",
  alternates: {
    canonical: "https://www.unigst.com/gst-consultants-hyderabad",
  },
  openGraph: {
    title: "GST Consultants in Hyderabad | Expert Tax Advisory - UNIgst",
    description:
      "Professional GST consulting services in Hyderabad. Expert advisory, compliance management, and strategic tax planning for businesses of all sizes.",
    url: "https://www.unigst.com/gst-consultants-hyderabad",
    type: "website",
    locale: "en_IN",
    siteName: "UNIgst",
    images: [
      {
        url: "https://www.unigst.com/images/gst-consultants-hyderabad-og.jpg",
        width: 1200,
        height: 630,
        alt: "GST Consultants in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Consultants in Hyderabad | Expert Tax Advisory - UNIgst",
    description:
      "Professional GST consulting services in Hyderabad. Expert advisory, compliance, and strategic planning.",
    images: [
      "https://www.unigst.com/images/gst-consultants-hyderabad-twitter.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GstConsultantHyderabad = () => {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "UNIgst - GST Consultants Hyderabad",
            image: "https://www.unigst.com/images/unigst-logo.jpg",
            "@id": "https://www.unigst.com/gst-consultants-hyderabad",
            url: "https://www.unigst.com/gst-consultants-hyderabad",
            telephone: "+91-9945933333",
            priceRange: "₹₹",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Begumpet",
              addressLocality: "Hyderabad",
              addressRegion: "Telangana",
              postalCode: "500016",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 17.3850,
              longitude: 78.4867,
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
              name: "Hyderabad",
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
                name: "How much do GST consulting services cost in Hyderabad?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our fees depend on your business size and requirements. We offer flexible packages starting from affordable monthly retainers. Contact us for a customized quote.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need a GST consultant if I'm a small business?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Even small businesses benefit from expert guidance to avoid penalties, optimize tax liability, and ensure accurate compliance from the start.",
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
          <meta name="geo.region" content="IN-TG">
          <meta name="geo.placename" content="Hyderabad">
          <meta name="geo.position" content="17.3850;78.4867">
          <meta name="ICBM" content="17.3850, 78.4867">
        `}
      </Script>

      <CompanySection data={heroDataConsultantsHyderabad} />
      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionDataConsultantsBangalore}/>
        <ProcessSectionConsultants data={processStepsConsultantsBangalore}/>
        <CoreValuesConsultants />
        <FaqSection faqs={faqsConsultants}/>
      </section>
    </>
  );
};

export default GstConsultantHyderabad;
