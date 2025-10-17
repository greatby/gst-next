import AboutSection from "@/components/AboutSection";
import CoreValues from "@/components/CoreValues";
import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/ProcessSection";
import CompanySection from "@/components/CompanySection";
import React from "react";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import { aboutSectionData, heroData, processSteps } from "@/utils/data";

export const metadata = {
  title: "UNIGST — GST Sorted. For Every business",
  description:
    "From startups to conglomerates, we handle your GST filings, reconciliations, notices, and compliance—so you never miss a deadline or lose a night’s sleep. Powered by experts. Driven by trust. Built for Bharat.",
  alternates: { canonical: "https://unigst.com" },
  openGraph: {
    title: "UNIGST — GST Sorted. For Every business",
    url: "https://unigst.com",
  },
};

const Page = () => {
  return (
    <>
      <CompanySection data={heroData} />
      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionData}/>
        <ProcessSection data={processSteps}/>
        <CoreValues />
        {/* <TeamSection /> */}
      </section>
    </>
  );
};

export default Page;
