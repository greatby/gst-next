import AboutSection from "@/components/AboutSection";
import CompanySection from "@/components/CompanySection";
import React from "react";

import {
  aboutSectionDataRefundProcessingBangalore,
  faqsRefundBangalore,
  processStepsRefundProcessingBangalore,
  heroDataRefundProcessingKanpur,
} from "@/utils/data";

import FaqSection from "@/components/bangalore/FaqSection";
import Head from "next/head";
import ProcessSectionRefund from "@/components/bangalore/ProcessSectionRefund";
import CoreValuesRefund from "@/components/bangalore/CoreValuesRefund";
import FilingIssuesSolutionRefund from "@/components/bangalore/FilingIssuesSolutionRefund";
import SecurityProtocolsRefund from "@/components/SecurityProtocolRefund";

export const metadata = {
  title: "GST Refund Processing Services in Kanpur | Fast ITC & Export Refunds",
  description:
    "Fast GST refund processing in Kanpur. Export refunds in 30–45 days. ITC refunds handled with expert documentation for maximum refund recovery.",
  alternates: {
    canonical: "https://www.unigst.com/gst-refund-processing-kanpur",
  },
};

const GstRefundProcessingKanpur = () => {
  return (
    <>
      <Head>
        {/* Primary Title */}
        <title>
          GST Refund Processing Services in Kanpur | Fast ITC & Export Refunds
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Expert GST refund processing in Kanpur. Export refunds in 30–45 days, ITC refunds with strong documentation, and maximum refund recovery."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="GST refund Kanpur, GST refund processing, ITC refund Kanpur, export refund Kanpur, GST RFD-01 filing, GST consultant Kanpur"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://www.unigst.com/gst-refund-processing-kanpur"
        />

        {/* Open Graph Meta */}
        <meta
          property="og:title"
          content="GST Refund Processing Services in Kanpur | Fast ITC & Export Refunds"
        />
        <meta
          property="og:description"
          content="Fast GST refund services in Kanpur for exporters and ITC claimants. Strong documentation and maximum refund recovery."
        />
        <meta
          property="og:url"
          content="https://www.unigst.com/gst-refund-processing-kanpur"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.unigst.com/images/gst-refund-processing-kanpur-og.jpg"
        />

        <meta property="og:site_name" content="UNIgst" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="GST Refund Processing in Kanpur | Fast ITC & Export Refunds"
        />
        <meta
          name="twitter:description"
          content="Fast GST refund processing for exporters and ITC claimants in Kanpur with expert filing and documentation."
        />
        <meta
          name="twitter:image"
          content="https://www.unigst.com/images/gst-refund-processing-kanpur-twitter.jpg"
        />

        {/* Schema Markup - Service */}
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
                  addressLocality: "Kanpur",
                  addressRegion: "Uttar Pradesh",
                  addressCountry: "IN",
                },
                telephone: "+91-9945933333",
              },
              description:
                "GST refund processing for exporters and ITC applicants in Kanpur. Fast refund timelines and expert documentation.",
              areaServed: {
                "@type": "City",
                name: "Kanpur",
              },
              category: "GST Refund Service",
            }),
          }}
        />

        {/* Schema Markup - FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How long do GST refunds take in Kanpur?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Export refunds are processed in 30–45 days. ITC refunds typically complete in 30–60 days depending on verification.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you assist with both export and ITC refunds?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we assist with ITC refunds, export refunds, zero-rated supplies, inverted duty structure refunds, and accumulated credit refunds.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What documents are required for GST refund filing?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Invoices, LUT, GSTR-1, GSTR-3B, export documents, bank realization certificates, and ledger statements are required.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      {/* Hero Section */}
      <CompanySection data={heroDataRefundProcessingKanpur} />

      {/* Body Sections */}
      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionDataRefundProcessingBangalore} />
        <ProcessSectionRefund data={processStepsRefundProcessingBangalore} />
        <CoreValuesRefund />
        <SecurityProtocolsRefund />
      </section>

      <FilingIssuesSolutionRefund />

      {/* FAQ Section */}
      <FaqSection faqs={faqsRefundBangalore} />
    </>
  );
};

export default GstRefundProcessingKanpur;
