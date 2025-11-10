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
  heroDataReturnFilingKolkata,
  processStepsReturnBangalore,
} from "@/utils/data";
import FilingIssuesSolution from "@/components/bangalore/FilingIssuesSolution";

export const metadata = {
  title: "GST Return Filing Services in Kolkata | Timely & Accurate - UNIgst",
  description:
    "UNIgst provides reliable, accurate, and timely GST return filing services for businesses across Kolkata. End-to-end GST compliance without missing deadlines.",
  alternates: {
    canonical: "https://www.unigst.com/gst-return-filing-kolkata",
  },
};

const GstReturnFilingKolkata = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          GST Return Filing Services in Kolkata | Timely & Accurate - UNIgst
        </title>
        <meta
          name="description"
          content="Professional GST return filing in Kolkata. GSTR-1, GSTR-3B and annual filing with reconciliation and ITC optimization. Never miss deadlines again."
        />
        <meta
          name="keywords"
          content="GST return filing Kolkata, GSTR-1 filing Kolkata, GSTR-3B filing Kolkata, GST services Kolkata, ITC reconciliation Kolkata, annual GST filing"
        />
        <link
          rel="canonical"
          href="https://www.unigst.com/gst-return-filing-kolkata"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="GST Return Filing Services in Kolkata | Fast & Accurate"
        />
        <meta
          property="og:description"
          content="Trusted GST return filing services in Kolkata. Accurate reconciliation, maximum ITC claims and zero missed deadlines."
        />
        <meta
          property="og:url"
          content="https://www.unigst.com/gst-return-filing-kolkata"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.unigst.com/images/gst-return-filing-kolkata-og.jpg"
        />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="UNIgst" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="GST Return Filing in Kolkata | Accurate & On-Time - UNIgst"
        />
        <meta
          name="twitter:description"
          content="Never miss GST deadlines. Professional filing, reconciliation and ITC maximization in Kolkata."
        />
        <meta
          name="twitter:image"
          content="https://www.unigst.com/images/gst-return-filing-kolkata-twitter.jpg"
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
                  addressLocality: "Kolkata",
                  addressRegion: "West Bengal",
                  addressCountry: "IN",
                },
                telephone: "+91-9945933333",
              },
              areaServed: { "@type": "City", name: "Kolkata" },
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
      </Head>

      <CompanySection data={heroDataReturnFilingKolkata} />

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

export default GstReturnFilingKolkata;
