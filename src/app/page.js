import AboutSection from "@/components/AboutSection";
import CoreValues from "@/components/CoreValues";
import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/ProcessSection";
import CompanySection from "@/components/CompanySection"
import React from "react";
import Footer from "@/components/Footer";


const Page = () => {
  return (
    <>
      <Navbar />
      <CompanySection/>
      <section className="bg-[#41001f] w-full">
        <AboutSection/>
        <ProcessSection/>
        <CoreValues/>
        <Footer/>
      </section>
    </>
  );
};

export default Page;
