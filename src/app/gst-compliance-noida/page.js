import AboutSection from "@/components/AboutSection";
import CoreValuesCompliance from "@/components/bangalore/CoreValuesCompliance";
import FaqSection from "@/components/bangalore/FaqSection";
import ProcessSectionCompliance from "@/components/bangalore/ProcessSectionCompliance";
import { aboutSectionDataComplianceBangalore, faqsCompliance, heroDataComplianceNoida, processStepsComplianceBangalore } from "@/utils/data";
import Script from "next/script";
import CompanySection from "@/components/CompanySection";

export const metadata = {
  title: "GST Compliance Services in Noida | Complete Peace of Mind - UNIgst",
  description:
    "End-to-end GST compliance services in Noida. Registration, returns, audit support, notice management. Stay penalty-free & audit-ready. 100% compliance guaranteed!",
  keywords:
    "GST compliance services Noida, GST audit support, GST notice management, complete GST services, GST compliance management Noida",
  alternates: {
    canonical: "https://www.unigst.com/gst-compliance-noida",
  },
  openGraph: {
    title: "GST Compliance Services in Noida | Complete Solutions",
    description:
      "Comprehensive GST compliance management in Noida. Stay penalty-free with expert support for all GST requirements.",
    url: "https://www.unigst.com/gst-compliance-noida",
    type: "website",
    locale: "en_IN",
    siteName: "UNIgst",
    images: [
      {
        url: "https://www.unigst.com/images/gst-compliance-noida-og.jpg",
        width: 1200,
        height: 630,
        alt: "GST Compliance Services Noida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST Compliance Services Noida | Complete Peace of Mind",
    description:
      "End-to-end GST compliance management. Expert support, audit-ready systems, 100% compliance guarantee.",
    images: ["https://www.unigst.com/images/gst-compliance-noida-twitter.jpg"],
  },
};

const GstComplianceNoida = () => {
  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "GST Compliance Services",
            provider: {
              "@type": "ProfessionalService",
              name: "UNIgst",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Noida",
                addressRegion: "Uttar Pradesh",
                addressCountry: "IN",
              },
              telephone: "+91-9945933333",
            },
            areaServed: { "@type": "City", name: "Noida" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Comprehensive GST Compliance Services",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "GST Registration & Maintenance" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Return Filing Management" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "GST Audit Support" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Notice Management & Litigation" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "ITC Management & Optimization" } },
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
                name: "What's included in complete GST compliance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Complete compliance includes registration maintenance, timely return filing, accurate record-keeping, tax payments, ITC management, invoice compliance, e-way bills, notice responses, and staying updated with law changes.",
                },
              },
              {
                "@type": "Question",
                name: "How much does GST compliance cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Costs depend on your business size, transaction volume, and complexity. We offer packages starting from affordable monthly retainers.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if you miss a deadline?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "While we have systems to prevent this, in the rare event of our error, we bear the late fee and penalty costs.",
                },
              },
            ],
          }),
        }}
      />

      <CompanySection data={heroDataComplianceNoida} />
      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionDataComplianceBangalore}/>
        <ProcessSectionCompliance data={processStepsComplianceBangalore}/>
        <CoreValuesCompliance />
        <FaqSection faqs={faqsCompliance}/>
      </section>
    </>
  );
};

export default GstComplianceNoida;
