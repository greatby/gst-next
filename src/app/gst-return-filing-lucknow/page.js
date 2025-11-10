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
  heroDataReturnFilingLucknow,
  processStepsReturnBangalore,
} from "@/utils/data";
import FilingIssuesSolution from "@/components/bangalore/FilingIssuesSolution";

export const metadata = {
  title: "GST Return Filing Services in Lucknow | Timely & Accurate - UNIgst",
  description:
    "Trusted GST return filing for businesses in Lucknow. GSTR-1, GSTR-3B, ITC reconciliation, annual filing with zero missed deadlines.",
  alternates: {
    canonical: "https://www.unigst.com/gst-return-filing-lucknow",
  },
};

const GstReturnFilingLucknow = () => {
  return (
    <>
      <Head>
        <title>GST Return Filing Services in Lucknow | Timely & Accurate - UNIgst</title>
        <meta
          name="description"
          content="Professional GST return filing in Lucknow. GSTR-1, GSTR-3B, ITC reconciliation, accurate filing and complete deadline protection."
        />
        <meta
          name="keywords"
          content="GST return filing Lucknow, GSTR 1 filing Lucknow, GSTR 3B filing Lucknow, GST filing services Lucknow, ITC reconciliation Lucknow, GST consultants Lucknow"
        />
        <link rel="canonical" href="https://www.unigst.com/gst-return-filing-lucknow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="GST Return Filing Services in Lucknow | Accurate & On-Time"
        />
        <meta
          property="og:description"
          content="Reliable GST return filing in Lucknow with maximum ITC claims, accurate reconciliation and zero missed deadlines."
        />
        <meta
          property="og:url"
          content="https://www.unigst.com/gst-return-filing-lucknow"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.unigst.com/images/gst-return-filing-lucknow-og.jpg"
        />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="UNIgst" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="GST Return Filing in Lucknow | Fast & Accurate - UNIgst"
        />
        <meta
          name="twitter:description"
          content="Never miss GST deadlines. Professional filing, reconciliation & ITC maximization for Lucknow businesses."
        />
        <meta
          name="twitter:image"
          content="https://www.unigst.com/images/gst-return-filing-lucknow-twitter.jpg"
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
                  addressLocality: "Lucknow",
                  addressRegion: "Uttar Pradesh",
                  addressCountry: "IN",
                },
                telephone: "+91-9945933333",
              },
              areaServed: { "@type": "City", name: "Lucknow" },
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

      <CompanySection data={heroDataReturnFilingLucknow} />

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

export default GstReturnFilingLucknow;
