import AboutSection from "@/components/AboutSection";
import CoreValues from "@/components/CoreValues";
import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/ProcessSection";
import CompanySection from "@/components/CompanySection";
import React from "react";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import { aboutSectionData, aboutSectionDataComplianceBangalore, aboutSectionDataConsultantsBangalore, aboutSectionDataRegistrationBangalore, aboutSectionDataReturnFilingBangalore, faqsConsultants, faqsRegistration, faqsReturnfiling, heroData, heroDataComplianceBangalore, heroDataConsultantsBangalore, heroDataRegistrationBangalore, heroDataReturnFilingBangalore, processSteps, processStepsComplianceBangalore, processStepsConsultantsBangalore, processStepsRegistrationBangalore, processStepsReturnBangalore } from "@/utils/data";
import ProcessSectionCompliance from "@/components/bangalore/ProcessSectionCompliance";
import CoreValuesCompliance from "@/components/bangalore/CoreValuesCompliance";
import FaqSection from "@/components/bangalore/FaqSection";
import Script from "next/script";
import ProcessSectionConsultants from "@/components/bangalore/ProcessSectionConsultants";
import CoreValuesConsultants from "@/components/bangalore/CoreValuesConsultants";
import Head from "next/head";
import ProcessSectionRegistration from "@/components/bangalore/ProcessSectionRegistration";
import CoreValuesRegistartion from "@/components/bangalore/CoreValuesRegistration";
import CoreValuesReturn from "@/components/bangalore/CoreValuesReturn";
import ProcessSectionReturn from "@/components/bangalore/processSectionReturn";


export const metadata = {
  title: "GST Return Filing Services in Bangalore | Timely & Accurate - UNIgst",
  description:
    "Never miss a GST return deadline again. UNIgst provides reliable, accurate, and timely GST return filing services for businesses across Bangalore. From startups to established enterprises, we ensure your GST compliance is always on track.",
 
  alternates: {
    canonical: "https://www.unigst.com/gst-return-filing-bangalore",
  },
};

const GstReturnFilingBangalore = () => {
  return (
    <>
  <Head>
        {/* Primary Meta Tags */}
        <title>GST Return Filing Services in Bangalore | Timely & Accurate - UNIgst</title>
        <meta
          name="description"
          content="Professional GST return filing in Bangalore. Monthly GSTR-1, GSTR-3B, annual returns. Never miss a deadline. Expert reconciliation & ITC optimization. Get started!"
        />
        <meta
          name="keywords"
          content="GST return filing Bangalore, GSTR-1 filing, GSTR-3B filing, monthly GST returns, annual GST returns Bangalore, GST filing services"
        />
        <link
          rel="canonical"
          href="https://www.unigst.com/gst-return-filing-bangalore"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="GST Return Filing Services in Bangalore | Never Miss a Deadline"
        />
        <meta
          property="og:description"
          content="Professional GST return filing services in Bangalore. Timely, accurate filing with maximum ITC claims. Monthly and annual returns handled expertly."
        />
        <meta
          property="og:url"
          content="https://www.unigst.com/gst-return-filing-bangalore"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.unigst.com/images/gst-return-filing-bangalore-og.jpg"
        />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="UNIgst" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="GST Return Filing in Bangalore | Timely & Accurate - UNIgst"
        />
        <meta
          name="twitter:description"
          content="Never miss GST return deadlines. Professional filing services with ITC optimization and accurate reconciliation."
        />
        <meta
          name="twitter:image"
          content="https://www.unigst.com/images/gst-return-filing-bangalore-twitter.jpg"
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "GST Return Filing",
              provider: {
                "@type": "ProfessionalService",
                name: "UNIgst",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Bangalore",
                  addressRegion: "Karnataka",
                  addressCountry: "IN",
                },
                telephone: "+91-XXXXXXXXXX",
              },
              areaServed: {
                "@type": "City",
                name: "Bangalore",
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
                    text: "Yes, we manage GST compliance for businesses with multiple locations across Karnataka and other states.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What if I've missed filing returns for several months?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We can help file all arrear returns. Late fees and interest will apply, but we'll minimize penalties and get you compliant.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <CompanySection data={heroDataReturnFilingBangalore} />
      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionDataReturnFilingBangalore}/>
        <ProcessSectionReturn data={processStepsReturnBangalore}/>
        <CoreValuesReturn />
        <FaqSection faqs={faqsReturnfiling}/>
      </section>
    </>
  );
};

export default GstReturnFilingBangalore;
