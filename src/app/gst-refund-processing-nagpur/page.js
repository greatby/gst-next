import AboutSection from "@/components/AboutSection";
import CompanySection from "@/components/CompanySection";
import React from "react";

import {
  aboutSectionDataRefundProcessingBangalore,
  faqsRefundBangalore,
  processStepsRefundProcessingBangalore,
  heroDataRefundProcessingNagpur,
} from "@/utils/data";

import FaqSection from "@/components/bangalore/FaqSection";
import Head from "next/head";
import ProcessSectionRefund from "@/components/bangalore/ProcessSectionRefund";
import CoreValuesRefund from "@/components/bangalore/CoreValuesRefund";
import FilingIssuesSolutionRefund from "@/components/bangalore/FilingIssuesSolutionRefund";
import SecurityProtocolsRefund from "@/components/SecurityProtocolRefund";

export const metadata = {
  title:
    "GST Refund Processing Services in Nagpur | Fast ITC & Export Refunds",
  description:
    "Fast GST refund processing in Nagpur. Export refunds in 30–45 days. ITC refunds handled with expert documentation for maximum refund recovery.",
  alternates: {
    canonical: "https://www.unigst.com/gst-refund-processing-nagpur",
  },
};

const GstRefundProcessingNagpur = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          GST Refund Processing Services in Nagpur | Fast ITC & Export Refunds
        </title>

        <meta
          name="description"
          content="Fast GST refund processing in Nagpur. Export refunds processed in 30–45 days. Expert ITC refund claims with maximum recovery and error-free documentation."
        />

        <meta
          name="keywords"
          content="GST refund Nagpur, GST refund processing, ITC refund Nagpur, export refund Nagpur, GST RFD-01 filing, GST consultant Nagpur"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.unigst.com/gst-refund-processing-nagpur"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="GST Refund Processing Services in Nagpur | Fast ITC & Export Refunds"
        />
        <meta
          property="og:description"
          content="Fast GST refund claims handled by experts. Export refunds in 30–45 days. ITC refunds filed with strong documentation for maximum recovery."
        />
        <meta
          property="og:url"
          content="https://www.unigst.com/gst-refund-processing-nagpur"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.unigst.com/images/gst-refund-processing-nagpur-og.jpg"
        />

        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="UNIgst" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="GST Refund Processing in Nagpur | Fast ITC & Export Refunds"
        />
        <meta
          name="twitter:description"
          content="Fast GST refund processing for exporters and ITC claimants in Nagpur. Expert filing with maximum refund recovery."
        />
        <meta
          name="twitter:image"
          content="https://www.unigst.com/images/gst-refund-processing-nagpur-twitter.jpg"
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
                  addressLocality: "Nagpur",
                  addressRegion: "Maharashtra",
                  addressCountry: "IN",
                },
                telephone: "+91-9945933333",
              },
              areaServed: {
                "@type": "City",
                name: "Nagpur",
              },
              description:
                "Fast GST refund claims for exporters and ITC applicants in Nagpur. Expert filing with maximum refund recovery.",
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
                  name: "How long does GST refund processing take in Nagpur?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Export refunds typically take 30–45 days. ITC refunds generally complete within 30–60 days depending on verification.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you assist with both ITC and export refunds?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. We handle ITC refunds, export refunds, zero-rated supplies, inverted duty structure refunds, and accumulated credit refunds.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What documents are required for GST refund processing?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Invoices, LUT, GSTR-1, GSTR-3B, export documentation, ledger statements, and bank realization certificates.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      {/* Hero + Sections */}
      <CompanySection data={heroDataRefundProcessingNagpur} />

      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionDataRefundProcessingBangalore} />
        <ProcessSectionRefund data={processStepsRefundProcessingBangalore} />
        <CoreValuesRefund />
        <SecurityProtocolsRefund />
      </section>

      <FilingIssuesSolutionRefund />
      <FaqSection faqs={faqsRefundBangalore} />
    </>
  );
};

export default GstRefundProcessingNagpur;
