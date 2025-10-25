import AboutSection from "@/components/AboutSection";
import CoreValues from "@/components/CoreValues";
import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/ProcessSection";
import CompanySection from "@/components/CompanySection";
import React from "react";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import { aboutSectionData, aboutSectionDataComplianceBangalore, aboutSectionDataConsultantsBangalore, aboutSectionDataRegistrationBangalore, faqsConsultants, faqsRegistration, heroData, heroDataComplianceBangalore, heroDataConsultantsBangalore, heroDataRegistrationBangalore, processSteps, processStepsComplianceBangalore, processStepsConsultantsBangalore, processStepsRegistrationBangalore } from "@/utils/data";
import ProcessSectionCompliance from "@/components/bangalore/ProcessSectionCompliance";
import CoreValuesCompliance from "@/components/bangalore/CoreValuesCompliance";
import FaqSection from "@/components/bangalore/FaqSection";
import Script from "next/script";
import ProcessSectionConsultants from "@/components/bangalore/ProcessSectionConsultants";
import CoreValuesConsultants from "@/components/bangalore/CoreValuesConsultants";
import Head from "next/head";
import ProcessSectionRegistration from "@/components/bangalore/ProcessSectionRegistration";
import CoreValuesRegistartion from "@/components/bangalore/CoreValuesRegistration";


export const metadata = {
  title: "GST Registration Services in Bangalore | Fast 3-5 Days - UNIgst",
  description:
    "Get GST registration in Bangalore in just 3-5 days. Expert assistance, 100% online process, all business types. Starting a business? Register for GST today!",
  keywords:
    "GST registration Bangalore, new GST registration, online GST registration, GST number Bangalore, GSTIN registration services",
  alternates: {
    canonical: "https://www.unigst.com/gst-registration-bangalore",
  },
};

const GstRegistrationBangalore = () => {
    const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "GST Registration",
    provider: {
      "@type": "ProfessionalService",
      name: "UNIgst",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      telephone: "+91-9945933333",
      url: "https://www.unigst.com",
    },
    areaServed: {
      "@type": "City",
      name: "Bangalore",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "GST Registration Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Regular GST Registration",
            description: "Standard GST registration for businesses",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Composition Scheme Registration",
            description: "GST registration under composition scheme",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-commerce Operator Registration",
            description: "GST registration for e-commerce platforms",
          },
        },
      ],
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      description:
        "Professional GST registration services in Bangalore",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does GST registration take in Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With UNIgst, standard GST registration is completed in 3-5 working days once all documents are submitted.",
        },
      },
      {
        "@type": "Question",
        name: "What is the cost of GST registration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The government doesn't charge any fee for GST registration. Our service fee depends on your business structure and complexity.",
        },
      },
      {
        "@type": "Question",
        name: "Is GST registration mandatory for online sellers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all e-commerce sellers must register for GST regardless of turnover.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.unigst.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "GST Registration Bangalore",
        item: "https://www.unigst.com/gst-registration-bangalore",
      },
    ],
  };
  return (
    <>
    <Head>
        {/* 🔹 Primary Meta Tags */}
        <title>
          GST Registration Services in Bangalore | Fast 3-5 Days - UNIgst
        </title>
        <meta
          name="description"
          content="Get GST registration in Bangalore in just 3-5 days. Expert assistance, 100% online process, all business types. Starting a business? Register for GST today!"
        />
        <meta
          name="keywords"
          content="GST registration Bangalore, new GST registration, online GST registration, GST number Bangalore, GSTIN registration services"
        />
        <link
          rel="canonical"
          href="https://www.unigst.com/gst-registration-bangalore"
        />

        {/* 🔹 Open Graph Tags */}
        <meta
          property="og:title"
          content="GST Registration in Bangalore | Fast & Hassle-Free - UNIgst"
        />
        <meta
          property="og:description"
          content="Professional GST registration services in Bangalore. Get your GSTIN in 3-5 days. Expert support for all business types."
        />
        <meta
          property="og:url"
          content="https://www.unigst.com/gst-registration-bangalore"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.unigst.com/images/gst-registration-bangalore-og.jpg"
        />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="UNIgst" />

        {/* 🔹 Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="GST Registration in Bangalore | Fast 3-5 Days - UNIgst"
        />
        <meta
          name="twitter:description"
          content="Get GST registration in Bangalore quickly. Expert assistance, affordable pricing, hassle-free process."
        />
        <meta
          name="twitter:image"
          content="https://www.unigst.com/images/gst-registration-bangalore-twitter.jpg"
        />

        {/* 🔹 Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </Head>
      <CompanySection data={heroDataRegistrationBangalore} />
      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionDataRegistrationBangalore}/>
        <ProcessSectionRegistration data={processStepsRegistrationBangalore}/>
        <CoreValuesRegistartion />
        <FaqSection faqs={faqsRegistration}/>
      </section>
    </>
  );
};

export default GstRegistrationBangalore;
