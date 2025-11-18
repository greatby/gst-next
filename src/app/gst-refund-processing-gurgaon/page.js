import AboutSection from "@/components/AboutSection";
import CompanySection from "@/components/CompanySection";
import React from "react";

import {
  aboutSectionDataRefundProcessingBangalore,
  faqsRefundBangalore,
  processStepsRefundProcessingBangalore,
  heroDataRefundProcessingGurgaon,
} from "@/utils/data";

import FaqSection from "@/components/bangalore/FaqSection";
import Head from "next/head";
import ProcessSectionRefund from "@/components/bangalore/ProcessSectionRefund";
import CoreValuesRefund from "@/components/bangalore/CoreValuesRefund";
import FilingIssuesSolutionRefund from "@/components/bangalore/FilingIssuesSolutionRefund";
import SecurityProtocolsRefund from "@/components/SecurityProtocolRefund";

export const metadata = {
  title:
    "GST Refund Processing Services in Gurgaon | Fast ITC & Export Refunds",
  description:
    "Fast GST refund processing in Gurgaon. Export refunds in 30–45 days. ITC refunds handled with expert documentation for maximum refund recovery.",
  alternates: {
    canonical: "https://www.unigst.com/gst-refund-processing-gurgaon",
  },
};

const GstRefundProcessingGurgaon = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          GST Refund Processing Services in Gurgaon | Fast ITC & Export Refunds
        </title>

        <meta
          name="description"
          content="Fast GST refund processing in Gurgaon. Export refunds processed in 30–45 days. Expert ITC refund claims with maximum recovery and error-free documentation."
        />

        <meta
          name="keywords"
          content="GST refund Gurgaon, GST refund Gurugram, ITC refund Gurgaon, export refund Gurgaon, GST RFD-01 filing, GST consultant Gurgaon"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.unigst.com/gst-refund-processing-gurgaon"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="GST Refund Processing Services in Gurgaon | Fast ITC & Export Refunds"
        />
        <meta
          property="og:description"
          content="Fast GST refund claims handled by experts. Export refunds in 30–45 days. ITC refunds filed with strong documentation for maximum recovery."
        />
        <meta
          property="og:url"
          content="https://www.unigst.com/gst-refund-processing-gurgaon"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.unigst.com/images/gst-refund-processing-gurgaon-og.jpg"
        />

        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="UNIgst" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="GST Refund Processing in Gurgaon | Fast ITC & Export Refunds"
        />
        <meta
          name="twitter:description"
          content="Fast GST refund processing for exporters and ITC claimants in Gurgaon. Expert filing with maximum refund recovery."
        />
        <meta
          name="twitter:image"
          content="https://www.unigst.com/images/gst-refund-processing-gurgaon-twitter.jpg"
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "GST Refund Processing Services",
              provider: {
                "@type": "ProfessionalService",
                name: "UNIgst",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Gurgaon",
                  addressRegion: "Haryana",
                  addressCountry: "IN",
                },
                telephone: "+91-9945933333",
              },
              areaServed: {
                "@type": "City",
                name: "Gurgaon",
              },
              description:
                "Fast GST refund claims for exporters and ITC applicants in Gurgaon. Expert filing with maximum refund recovery.",
              category: "GST Refund Service",
            }),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How fast can I get my GST refund processed?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Export refunds are processed in 30–45 days on average. ITC refunds typically complete within 30–60 days depending on verification.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you handle both ITC and export refunds?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. We handle ITC refunds, export refunds, zero-rated supplies, accumulated credit refunds, and inverted duty structure refunds.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What documents are needed for GST refund processing?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Invoice records, LUT, GSTR-1, GSTR-3B, export documentation, ledger statements, and bank realization certificates where applicable.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      {/* Hero + Sections */}
      <CompanySection data={heroDataRefundProcessingGurgaon} />

      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionDataRefundProcessingBangalore} />
        <ProcessSectionRefund data={processStepsRefundProcessingBangalore} />
        <CoreValuesRefund />
        <SecurityProtocolsRefund />
      </section>

      <FilingIssuesSolutionRefund />

      {/* FAQs */}
      <FaqSection faqs={faqsRefundBangalore} />
    </>
  );
};

export default GstRefundProcessingGurgaon;
