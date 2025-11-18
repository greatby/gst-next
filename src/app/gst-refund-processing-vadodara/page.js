import AboutSection from "@/components/AboutSection";
import CompanySection from "@/components/CompanySection";
import React from "react";

import {
  aboutSectionDataRefundProcessingBangalore,
  faqsRefundBangalore,
  processStepsRefundProcessingBangalore,
  heroDataRefundProcessingVadodara,
} from "@/utils/data";

import FaqSection from "@/components/bangalore/FaqSection";
import Head from "next/head";
import ProcessSectionRefund from "@/components/bangalore/ProcessSectionRefund";
import CoreValuesRefund from "@/components/bangalore/CoreValuesRefund";
import FilingIssuesSolutionRefund from "@/components/bangalore/FilingIssuesSolutionRefund";
import SecurityProtocolsRefund from "@/components/SecurityProtocolRefund";

export const metadata = {
  title:
    "GST Refund Processing Services in Vadodara | Fast ITC & Export Refunds",
  description:
    "Fast GST refund processing in Vadodara. Export refunds in 30–45 days. ITC refunds handled with expert documentation for maximum refund recovery.",
  alternates: {
    canonical: "https://www.unigst.com/gst-refund-processing-vadodara",
  },
};

const GstRefundProcessingVadodara = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          GST Refund Processing Services in Vadodara | Fast ITC & Export Refunds
        </title>

        <meta
          name="description"
          content="Fast GST refund processing in Vadodara. Export refunds processed in 30–45 days. Expert ITC refund claims with maximum recovery and thorough documentation."
        />

        <meta
          name="keywords"
          content="GST refund Vadodara, GST refund processing, ITC refund Vadodara, export refund Vadodara, GST RFD-01 filing, GST consultant Vadodara"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.unigst.com/gst-refund-processing-vadodara"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="GST Refund Processing Services in Vadodara | Fast ITC & Export Refunds"
        />
        <meta
          property="og:description"
          content="Fast GST refund claims handled by experts. Export refunds in 30–45 days. ITC refunds filed with strong supporting documentation."
        />
        <meta
          property="og:url"
          content="https://www.unigst.com/gst-refund-processing-vadodara"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.unigst.com/images/gst-refund-processing-vadodara-og.jpg"
        />

        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="UNIgst" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="GST Refund Processing in Vadodara | Fast ITC & Export Refunds"
        />
        <meta
          name="twitter:description"
          content="Fast GST refund processing for exporters and ITC claimants in Vadodara. Expert filing with maximum refund recovery."
        />
        <meta
          name="twitter:image"
          content="https://www.unigst.com/images/gst-refund-processing-vadodara-twitter.jpg"
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
                  addressLocality: "Vadodara",
                  addressRegion: "Gujarat",
                  addressCountry: "IN",
                },
                telephone: "+91-9945933333",
              },
              areaServed: {
                "@type": "City",
                name: "Vadodara",
              },
              description:
                "Fast GST refund claims for exporters and ITC applicants in Vadodara. Expert filing with maximum refund recovery.",
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
                    text: "Export refunds usually take 30–45 days. ITC refunds generally complete within 30–60 days depending on verification.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you handle both ITC and export refunds?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, including ITC refunds, export refunds, zero-rated supplies, inverted duty refunds, and accumulated ITC refunds.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What documents are required for GST refund processing?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Invoices, LUT, GSTR-1, GSTR-3B, export documentation, bank realization certificates, and ledger statements.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      {/* Hero + Sections */}
      <CompanySection data={heroDataRefundProcessingVadodara} />

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

export default GstRefundProcessingVadodara;
