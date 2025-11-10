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
  heroDataReturnFilingVisakhapatnam,
  processStepsReturnBangalore,
} from "@/utils/data";
import FilingIssuesSolution from "@/components/bangalore/FilingIssuesSolution";

export const metadata = {
  title:
    "GST Return Filing Services in Visakhapatnam | Timely & Accurate - UNIgst",
  description:
    "Reliable GST return filing for businesses in Visakhapatnam. GSTR-1, GSTR-3B, ITC reconciliation, annual return filing with zero missed deadlines.",
  alternates: {
    canonical: "https://www.unigst.com/gst-return-filing-visakhapatnam",
  },
};

const GstReturnFilingVisakhapatnam = () => {
  return (
    <>
      <Head>
        <title>
          GST Return Filing Services in Visakhapatnam | Timely & Accurate -
          UNIgst
        </title>
        <meta
          name="description"
          content="Professional GST return filing in Visakhapatnam. GSTR-1, GSTR-3B, ITC reconciliation, accurate filing with zero deadline misses."
        />
        <meta
          name="keywords"
          content="GST return filing Visakhapatnam, GSTR 1 filing Visakhapatnam, GSTR 3B filing Visakhapatnam, GST filing services Visakhapatnam, ITC reconciliation Visakhapatnam, GST consultants Visakhapatnam"
        />
        <link
          rel="canonical"
          href="https://www.unigst.com/gst-return-filing-visakhapatnam"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="GST Return Filing Services in Visakhapatnam | Accurate & On-Time"
        />
        <meta
          property="og:description"
          content="Reliable GST return filing in Visakhapatnam with ITC maximization, reconciliation and zero missed deadlines."
        />
        <meta
          property="og:url"
          content="https://www.unigst.com/gst-return-filing-visakhapatnam"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.unigst.com/images/gst-return-filing-visakhapatnam-og.jpg"
        />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="UNIgst" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="GST Return Filing in Visakhapatnam | Fast & Accurate - UNIgst"
        />
        <meta
          name="twitter:description"
          content="Never miss GST deadlines. Professional filing, reconciliation & maximum ITC for Visakhapatnam businesses."
        />
        <meta
          name="twitter:image"
          content="https://www.unigst.com/images/gst-return-filing-visakhapatnam-twitter.jpg"
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
                  addressLocality: "Visakhapatnam",
                  addressRegion: "Andhra Pradesh",
                  addressCountry: "IN",
                },
                telephone: "+91-9945933333",
              },
              areaServed: { "@type": "City", name: "Visakhapatnam" },
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
                    itemOffered: {
                      "@type": "Service",
                      name: "Quarterly GST Returns",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Annual GST Returns (GSTR-9)",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "GST Reconciliation Services",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </Head>

      <CompanySection data={heroDataReturnFilingVisakhapatnam} />

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

export default GstReturnFilingVisakhapatnam;
