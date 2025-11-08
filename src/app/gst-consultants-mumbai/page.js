import AboutSection from "@/components/AboutSection";
import CoreValuesConsultants from "@/components/bangalore/CoreValuesConsultants";
import FaqSection from "@/components/bangalore/FaqSection";
import ProcessSectionConsultants from "@/components/bangalore/ProcessSectionConsultants";
import { aboutSectionDataConsultantsBangalore, faqsConsultants, heroDataConsultantsMumbai, processStepsConsultantsBangalore } from "@/utils/data";
import CompanySection from "@/components/CompanySection"
import Script from "next/script";

export const metadata = {
  title: "GST Consultants in Mumbai | Expert Tax Advisory Services - UNIgst",
  description:
    "Leading GST consultants in Mumbai offering expert tax advisory, compliance management, and strategic GST planning. Serving IT, manufacturing, e-commerce & more. Call now!",
  keywords:
    "GST consultants Mumbai, GST advisory services, tax consultants Mumbai, GST compliance experts, GST planning Mumbai",
  alternates: {
    canonical: "https://www.unigst.com/gst-consultants-mumbai",
  },
  openGraph: {
    title: "GST Consultants in Mumbai | Expert Tax Advisory - UNIgst",
    description:
      "Professional GST consulting services in Mumbai. Expert advisory, compliance management, and strategic tax planning for businesses of all sizes.",
    url: "https://www.unigst.com/gst-consultants-mumbai",
    type: "website",
    locale: "en_IN",
    siteName: "UNIgst",
    images: [
      {
        url: "https://www.unigst.com/images/gst-consultants-mumbai-og.jpg",
        width: 1200,
        height: 630,
        alt: "GST Consultants in Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Consultants in Mumbai | Expert Tax Advisory - UNIgst",
    description:
      "Professional GST consulting services in Mumbai. Expert advisory, compliance, and strategic planning.",
    images: [
      "https://www.unigst.com/images/gst-consultants-mumbai-twitter.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GstConsultantMumbai = () => {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "UNIgst - GST Consultants Mumbai",
            image: "https://www.unigst.com/images/unigst-logo.jpg",
            "@id": "https://www.unigst.com/gst-consultants-mumbai",
            url: "https://www.unigst.com/gst-consultants-mumbai",
            telephone: "+91-9945933333",
            priceRange: "₹₹",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Nariman Point",
              addressLocality: "Mumbai",
              addressRegion: "Maharashtra",
              postalCode: "400021",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 19.0760,
              longitude: 72.8777,
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
              name: "Mumbai",
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

      {/* ✅ FAQ Schema */}
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
                name: "How much do GST consulting services cost in Mumbai?",
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

      {/* ✅ Technical Meta Tags */}
      <Script id="extra-meta" strategy="beforeInteractive">
        {`
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
          <meta name="language" content="English">
          <meta name="revisit-after" content="7 days">
          <meta name="author" content="UNIgst">
          <meta name="geo.region" content="IN-MH">
          <meta name="geo.placename" content="Mumbai">
          <meta name="geo.position" content="19.0760;72.8777">
          <meta name="ICBM" content="19.0760, 72.8777">
        `}
      </Script>

      <CompanySection data={heroDataConsultantsMumbai} />
      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionDataConsultantsBangalore}/>
        <ProcessSectionConsultants data={processStepsConsultantsBangalore}/>
        <CoreValuesConsultants />
        <FaqSection faqs={faqsConsultants}/>
      </section>
    </>
  );
};

export default GstConsultantMumbai;
