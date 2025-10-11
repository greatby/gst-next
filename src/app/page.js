import AboutSection from "@/components/AboutSection";
import CoreValues from "@/components/CoreValues";
import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/ProcessSection";
import CompanySection from "@/components/CompanySection";
import React from "react";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import { aboutSectionData, heroData } from "@/utils/data";

const Page = () => {
  return (
    <>
      <CompanySection data={heroData} />
      <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutSectionData}/>
        <ProcessSection />
        <CoreValues />
        {/* <TeamSection /> */}
      </section>
    </>
  );
};

export default Page;
