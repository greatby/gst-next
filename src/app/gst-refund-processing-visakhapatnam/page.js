import AboutSection from "@/components/AboutSection";
import CompanySection from "@/components/CompanySection";
import React from "react";

import {
  aboutSectionDataRefundProcessingBangalore,
  faqsRefundBangalore,
  processStepsRefundProcessingBangalore,
  heroDataRefundProcessingVisakhapatnam,
} from "@/utils/data";

import FaqSection from "@/components/bangalore/FaqSection";
import Head from "next/head";
import ProcessSectionRefund from "@/components/bangalore/ProcessSectionRefund";
import CoreValuesRefund from "@/components/bangalore/CoreValuesRefund";
import FilingIssuesSolutionRefund from "@/components/bangalore/FilingIssuesSolutionRefund";
import SecurityProtocolsRefund from "@/components/SecurityProtocolRefund";

export const metadata = {
  title:
    "GST Refund Processing Services in Visakhapatnam | Fast ITC & Export Refunds",
  description:
    "Fast GST refund processing in Visakhapatnam. Export refunds in 30–45 days. ITC refunds handled with expert documentation for maximum refund recovery.",
  alternates: {
    canonical: "https://www.unigst.com/gst-refund-processing-visakhapatnam",
  },
};

const GstRefundProcessingVisakhapatnam = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          GST Refund Processing Services in Visakhapatnam | Fast ITC & Export Refunds
        </title>

        <meta
          name="description"
          content="Fast GST refund processing in Visakhapatnam. Export refunds processed in 30–45 days. Expert ITC refund claims with maximum recovery and error-free documentation."
        />

        <meta
          name="keywords"
          content="GST refund Visakhapatnam, GST refund Vizag, ITC refund Visakhapatnam, export refund Vizag, GST consultant Visakhapatnam"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.unigst.com/gst-refund-processing-visakhapatnam"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="GST Refund Processing Services in Visakhapatnam | Fast ITC & Export Refunds"
        />
        <meta
          property="og:description"
          content="Fast GST refund claims for exporters and ITC claimants in Vizag. Strong documentation and maximum refund recovery."
        />
        <meta
          property="og:url"
          content="https://www.unigst.com/gst-refund-processing-visakhapatnam"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.unigst.com/images/gst-refund-processing-visakhapatnam-og.jpg"
        />

        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="UNIgst" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="GST Refund Processing in Visakhapatnam | Fast ITC & Export Refunds"
        />
        <meta
          name="twitter:description"
          content="Fast GST refund processing for exporters and ITC applicants in Vizag. Expert filing and documentation support."
        />
        <meta
          name="twitter:image"
          content="https://www.unigst.com/images/gst-refund-processing-visakhapatnam-twitter.jpg"
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
                  addressLocality: "Visakhapatnam",
                  addressRegion: "Andhra Pradesh",
                  addressCountry: "IN",
                },
                telephone: "+91-9945933333",
              },
              areaServed: {
                "@type": "City",
                name: "Visakhapatnam",
              },
              description:
                "GST refund services for exporters and ITC applicants in Visakhapatnam. Fast processing and maximum refund recovery.",
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
                  name: "How long does GST refund processing take in Visakhapatnam?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Export refunds take 30–45 days. ITC refunds generally take 30–60 days depending on verification.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you handle both export and ITC refunds?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, including ITC refunds, export refunds, zero-rated supply refunds, and inverted duty structure refunds.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What documents are required?",
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
      <CompanySection data={heroDataRefundProcessingVisakhapatnam} />

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

export default GstRefundProcessingVisakhapatnam;
