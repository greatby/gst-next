import AboutSection from "@/components/AboutSection";
import CoreValuesReturn from "@/components/bangalore/CoreValuesReturn";
import ProcessSectionReturn from "@/components/bangalore/processSectionReturn";
import CompanySection from "@/components/CompanySection";
import FaqSection from "@/components/bangalore/FaqSection";
import React from "react";
import SecurityProtocols from "@/components/SecurityProtocol";
import Head from "next/head";
import {
  aboutSectionDataReturnFilingBangalore,
  faqsReturnfiling,
  heroDataReturnFilingChennai,
  processStepsReturnBangalore,
} from "@/utils/data";
import FilingIssuesSolution from "@/components/bangalore/FilingIssuesSolution";

export const metadata = {
  title: "GST Return Filing Services in Chennai | Timely & Accurate - UNIgst",
  description:
    "Never miss a GST return deadline again. UNIgst provides reliable, accurate, and timely GST return filing services for businesses across Chennai. From startups to large enterprises, we ensure complete GST compliance with zero stress.",
  alternates: {
    canonical: "https://www.unigst.com/gst-return-filing-chennai",
  },
};

const GstReturnFilingChennai = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          GST Return Filing Services in Chennai | Timely & Accurate - UNIgst
        </title>
        <meta
          name="description"
          content="Professional GST return filing in Chennai. GSTR-1, GSTR-3B, annual GST returns, ITC reconciliation, error-free filing and deadline protection. Get started today!"
        />
        <meta
          name="keywords"
          content="GST return filing Chennai, GSTR-1 filing Chennai, GSTR-3B filing Chennai, monthly GST returns Chennai, annual GST returns Chennai, ITC reconciliation Chennai"
        />
        <link
          rel="canonical"
          href="https://www.unigst.com/gst-return-filing-chennai"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="GST Return Filing Services in Chennai | 100% Timely & Accurate"
        />
        <meta
          property="og:description"
          content="Trusted GST return filing services in Chennai. Accurate reconciliation, maximum ITC claims, and zero missed deadlines for your business."
        />
        <meta
          property="og:url"
          content="https://www.unigst.com/gst-return-filing-chennai"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.unigst.com/images/gst-return-filing-chennai-og.jpg"
        />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="UNIgst" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="GST Return Filing in Chennai | Fast & Accurate - UNIgst"
        />
        <meta
          name="twitter:description"
          content="Never miss GST deadlines. Expert filing, reconciliation, and ITC optimization for companies in Chennai."
        />
        <meta
          name="twitter:image"
          content="https://www.unigst.com/images/gst-return-filing-chennai-twitter.jpg"
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "GST Return Filing",
              provider: {
                "@type": "ProfessionalService",
                name: "UNIgst",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Chennai",
                  addressRegion: "Tamil Nadu",
                  addressCountry: "IN",
                },
                telephone: "+91-9945933333",
              },
              areaServed: {
                "@type": "City",
                name: "Chennai",
              },
              category: "Tax Filing Service",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "GST Return Filing Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Monthly GST Returns (GSTR-1 & GSTR-3B)",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Quarterly GST Returns" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Annual GST Returns (GSTR-9)" },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "GST Reconciliation Services" },
                  },
                ],
              },
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
                  name: "What documents do I need to provide for GST return filing?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You need to provide sales invoices, purchase invoices, expense bills, bank statements, and payment vouchers for the return period.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you handle GST returns for multiple branches?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we manage GST compliance for businesses with multiple locations across states including Tamil Nadu.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What if I've missed filing returns for several months?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We can help file all backdated returns. Late fees and interest may apply, but we minimize penalties and restore compliance quickly.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <CompanySection data={heroDataReturnFilingChennai} />

      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionDataReturnFilingBangalore} />
        <ProcessSectionReturn data={processStepsReturnBangalore} />
        <CoreValuesReturn />
        <SecurityProtocols />
      </section>
      <FilingIssuesSolution />
        <FaqSection faqs={faqsReturnfiling} />
    </>
  );
};

export default GstReturnFilingChennai;
