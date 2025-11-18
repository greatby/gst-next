import AboutSection from "@/components/AboutSection";
import CompanySection from "@/components/CompanySection";
import React from "react";

import {
  aboutSectionDataRefundProcessingBangalore,
  faqsRefundBangalore,
  processStepsRefundProcessingBangalore,
  heroDataRefundProcessingBhopal,
} from "@/utils/data";

import FaqSection from "@/components/bangalore/FaqSection";
import Head from "next/head";
import ProcessSectionRefund from "@/components/bangalore/ProcessSectionRefund";
import CoreValuesRefund from "@/components/bangalore/CoreValuesRefund";
import FilingIssuesSolutionRefund from "@/components/bangalore/FilingIssuesSolutionRefund";
import SecurityProtocolsRefund from "@/components/SecurityProtocolRefund";

export const metadata = {
  title:
    "GST Refund Processing Services in Bhopal | Fast ITC & Export Refunds",
  description:
    "Fast GST refund processing in Bhopal. Export refunds in 30–45 days. ITC refunds handled with expert documentation for maximum refund recovery.",
  alternates: {
    canonical: "https://www.unigst.com/gst-refund-processing-bhopal",
  },
};

const GstRefundProcessingBhopal = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          GST Refund Processing Services in Bhopal | Fast ITC & Export Refunds
        </title>

        <meta
          name="description"
          content="Fast GST refund processing in Bhopal. Export refunds processed in 30–45 days. Expert ITC refund filings with maximum recovery and error-free documentation."
        />

        <meta
          name="keywords"
          content="GST refund Bhopal, GST refund processing, ITC refund Bhopal, export refund Bhopal, GST RFD-01 filing, GST consultant Bhopal"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.unigst.com/gst-refund-processing-bhopal"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="GST Refund Processing Services in Bhopal | Fast ITC & Export Refunds"
        />
        <meta
          property="og:description"
          content="Expert GST refund filing in Bhopal. Export refunds within 30–45 days. ITC refunds completed with strong documentation support."
        />
        <meta
          property="og:url"
          content="https://www.unigst.com/gst-refund-processing-bhopal"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.unigst.com/images/gst-refund-processing-bhopal-og.jpg"
        />

        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="UNIgst" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="GST Refund Processing in Bhopal | Fast ITC & Export Refunds"
        />
        <meta
          name="twitter:description"
          content="Trusted GST refund experts in Bhopal with fast export and ITC refund processing."
        />
        <meta
          name="twitter:image"
          content="https://www.unigst.com/images/gst-refund-processing-bhopal-twitter.jpg"
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
                  addressLocality: "Bhopal",
                  addressRegion: "Madhya Pradesh",
                  addressCountry: "IN",
                },
                telephone: "+91-9945933333",
              },
              areaServed: {
                "@type": "City",
                name: "Bhopal",
              },
              description:
                "GST refund services for exporters and ITC applicants in Bhopal. Fast processing and expert documentation support.",
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
                  name: "How fast are GST refunds processed in Bhopal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Export refunds take 30–45 days. ITC refunds usually take 30–60 days depending on GST department verification.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you assist with both ITC and export refunds?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we assist with ITC refunds, export refunds, zero-rated supply refunds, and inverted duty refunds.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What documents are required for GST refund filing?",
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
      <CompanySection data={heroDataRefundProcessingBhopal} />

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

export default GstRefundProcessingBhopal;
