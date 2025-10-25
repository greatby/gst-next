import AboutSection from "@/components/AboutSection";
import CoreValues from "@/components/CoreValues";
import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/ProcessSection";
import CompanySection from "@/components/CompanySection";
import React from "react";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import { aboutSectionData, aboutSectionDataComplianceBangalore, aboutSectionDataConsultantsBangalore, faqsConsultants, heroData, heroDataComplianceBangalore, heroDataConsultantsBangalore, processSteps, processStepsComplianceBangalore, processStepsConsultantsBangalore } from "@/utils/data";
import ProcessSectionCompliance from "@/components/bangalore/ProcessSectionCompliance";
import CoreValuesCompliance from "@/components/bangalore/CoreValuesCompliance";
import FaqSection from "@/components/bangalore/FaqSection";
import Script from "next/script";
import ProcessSectionConsultants from "@/components/bangalore/ProcessSectionConsultants";
import CoreValuesConsultants from "@/components/bangalore/CoreValuesConsultants";

export const metadata = {
  title: "GST Consultants in Bangalore | Expert Tax Advisory Services - UNIgst",
  description:
    "Leading GST consultants in Bangalore offering expert tax advisory, compliance management, and strategic GST planning. Serving IT, manufacturing, e-commerce & more. Call now!",
  keywords:
    "GST consultants Bangalore, GST advisory services, tax consultants Bangalore, GST compliance experts, GST planning Bangalore",
  alternates: {
    canonical: "https://www.unigst.com/gst-consultants-bangalore",
  },
  openGraph: {
    title: "GST Consultants in Bangalore | Expert Tax Advisory - UNIgst",
    description:
      "Professional GST consulting services in Bangalore. Expert advisory, compliance management, and strategic tax planning for businesses of all sizes.",
    url: "https://www.unigst.com/gst-consultants-bangalore",
    type: "website",
    locale: "en_IN",
    siteName: "UNIgst",
    images: [
      {
        url: "https://www.unigst.com/images/gst-consultants-bangalore-og.jpg",
        width: 1200,
        height: 630,
        alt: "GST Consultants in Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Consultants in Bangalore | Expert Tax Advisory - UNIgst",
    description:
      "Professional GST consulting services in Bangalore. Expert advisory, compliance, and strategic planning.",
    images: [
      "https://www.unigst.com/images/gst-consultants-bangalore-twitter.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GstComplianceBangalore = () => {
  return (
    <>
    <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "UNIgst - GST Consultants Bangalore",
            image: "https://www.unigst.com/images/unigst-logo.jpg",
            "@id": "https://www.unigst.com/gst-consultants-bangalore",
            url: "https://www.unigst.com/gst-consultants-bangalore",
            telephone: "+91-XXXXXXXXXX",
            priceRange: "₹₹",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Your Street Address",
              addressLocality: "Bangalore",
              addressRegion: "Karnataka",
              postalCode: "560XXX",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 12.9716,
              longitude: 77.5946,
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
              name: "Bangalore",
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
                name: "How much do GST consulting services cost in Bangalore?",
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
          <meta name="geo.region" content="IN-KA">
          <meta name="geo.placename" content="Bangalore">
          <meta name="geo.position" content="12.9716;77.5946">
          <meta name="ICBM" content="12.9716, 77.5946">
        `}
      </Script>
      <CompanySection data={heroDataConsultantsBangalore} />
      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionDataConsultantsBangalore}/>
        <ProcessSectionConsultants data={processStepsConsultantsBangalore}/>
        <CoreValuesConsultants />
        <FaqSection faqs={faqsConsultants}/>
      </section>
    </>
  );
};

export default GstComplianceBangalore;
