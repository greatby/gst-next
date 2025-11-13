import AboutSection from "@/components/AboutSection";
import CompanySection from "@/components/CompanySection";
import React from "react";

import {
  aboutSectionDataNoticeServicesBangalore,
  faqsNoticeBangalore,
  processStepsNoticeservicesBangalore,
  heroDataNoticeServicesVadodara,
} from "@/utils/data";

import FaqSection from "@/components/bangalore/FaqSection";
import Head from "next/head";

import ProcessSectionNotice from "@/components/bangalore/ProcessSectionNotice";
import CoreValuesNotice from "@/components/bangalore/CoreValuesNotice";
import SecurityProtocolsNotice from "@/components/SecurityProtocolNotice";
import FilingIssuesSolutionNotice from "@/components/bangalore/FilingIssuesSolutionNotice";

export const metadata = {
  title:
    "GST Notice Reply Services in Vadodara | Expert GST notice handling. Strong legal replies. Penalty reduction.",
  description:
    "Expert GST notice handling. Strong legal replies. Penalty reduction. Professional response within 48 hours. Legal representation included.",
  alternates: {
    canonical: "https://www.unigst.com/gst-notice-services-vadodara",
  },
};

const GstNoticeServicesVadodara = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          GST Notice Reply Services in Vadodara | Expert GST notice handling.
          Strong legal replies. Penalty reduction.
        </title>

        <meta
          name="description"
          content="Expert GST notice handling. Strong legal replies. Penalty reduction. Professional response within 48 hours. Legal representation included."
        />

        <meta
          name="keywords"
          content="GST notice services Vadodara, GST notice reply Vadodara, GST audit notice reply Vadodara, DRC-01 reply Vadodara, GST legal reply Vadodara, GST show cause notice reply Vadodara"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.unigst.com/gst-notice-services-vadodara"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="GST Notice Reply Services in Vadodara | Expert Handling & Strong Legal Drafts"
        />
        <meta
          property="og:description"
          content="Professional GST notice reply services in Vadodara. Expert handling of DRC-01, DRC-02, SCN, audit notices & more. Reduce penalties with strong legal responses."
        />
        <meta
          property="og:url"
          content="https://www.unigst.com/gst-notice-services-vadodara"
        />
        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://www.unigst.com/images/gst-notice-services-vadodara-og.jpg"
        />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="UNIgst" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="GST Notice Services in Vadodara | Fast & Accurate Legal Reply - UNIgst"
        />

        <meta
          name="twitter:description"
          content="Fast, professional GST notice reply drafting, assessment, and representation. Reduce penalties with strong legal responses in Vadodara."
        />

        <meta
          name="twitter:image"
          content="https://www.unigst.com/images/gst-notice-services-vadodara-twitter.jpg"
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "GST Notice Reply Services",
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
              category: "GST Legal Service",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "GST Notice Reply Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "DRC-01 / DRC-02 Notice Reply",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "GST Audit Notice Reply",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Show Cause Notice (SCN) Reply",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "GST Assessment Notice Reply",
                    },
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
                  name: "How quickly can you help with a GST notice reply?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We prepare and deliver strong legal replies within 24–48 hours depending on notice type and documentation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you handle all GST notice types?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. We handle DRC-01, DRC-02, SCN notices, audit notices, scrutiny notices, assessment notices, and more.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you reduce GST penalties and interest?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. We specialize in drafting replies that minimize penalties through strong legal arguments and proper documentation.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      {/* HERO */}
      <CompanySection data={heroDataNoticeServicesVadodara} />

      {/* DO NOT CHANGE ANYTHING BELOW */}
      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionDataNoticeServicesBangalore} />
        <ProcessSectionNotice data={processStepsNoticeservicesBangalore} />
        <CoreValuesNotice />
        <SecurityProtocolsNotice />
      </section>

      <FilingIssuesSolutionNotice />
      <FaqSection faqs={faqsNoticeBangalore} />
    </>
  );
};

export default GstNoticeServicesVadodara;
