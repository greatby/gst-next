import AboutSection from "@/components/AboutSection";
import CompanySection from "@/components/CompanySection";
import FaqSection from "@/components/bangalore/FaqSection";
import ProcessSectionRegistration from "@/components/bangalore/ProcessSectionRegistration";
import CoreValuesRegistartion from "@/components/bangalore/CoreValuesRegistration";
import {
  aboutSectionDataRegistrationBangalore,
  faqsRegistration,
  processStepsRegistrationBangalore,
  heroDataRegistrationVisakhapatnam,
} from "@/utils/data";
import Script from "next/script";
import SecurityProtocolRegistration from "@/components/SecurityProtocolRegistration";
import RegistrationIssuesSolution from "@/components/RegistrationIssuesSolution";

export const metadata = {
  title: "GST Registration Services in Visakhapatnam | Fast 3-5 Days - UNIgst",
  description:
    "Get GST registration in Visakhapatnam in just 3-5 days. Expert assistance, 100% online process, all business types. Register for GST quickly and hassle-free!",
  keywords:
    "GST registration Visakhapatnam, new GST registration, online GST registration, GST number Visakhapatnam, GSTIN registration services",
  alternates: {
    canonical: "https://www.unigst.com/gst-registration-visakhapatnam",
  },
};

const GstRegistrationVisakhapatnam = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "GST Registration",
    provider: {
      "@type": "ProfessionalService",
      name: "UNIgst",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Visakhapatnam",
        addressRegion: "Andhra Pradesh",
        addressCountry: "IN",
      },
      telephone: "+91-9945933333",
      url: "https://www.unigst.com",
    },
    areaServed: { "@type": "City", name: "Visakhapatnam" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      description: "Professional GST registration services in Visakhapatnam",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does GST registration take in Visakhapatnam?",
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
        name: "GST Registration Visakhapatnam",
        item: "https://www.unigst.com/gst-registration-visakhapatnam",
      },
    ],
  };

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
       id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
       id="bread-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <CompanySection data={heroDataRegistrationVisakhapatnam} />
      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionDataRegistrationBangalore} />
        <ProcessSectionRegistration data={processStepsRegistrationBangalore} />
        <CoreValuesRegistartion />
        <SecurityProtocolRegistration />
      </section>
      <RegistrationIssuesSolution />
      <FaqSection faqs={faqsRegistration} />
    </>
  );
};

export default GstRegistrationVisakhapatnam;
