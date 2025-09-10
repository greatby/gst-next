import React from "react";
import Navbar from "./components/Navbar";
import CompanySection from "./components/CompanySection";
import AboutSection from "./components/AboutSection";
import ProcessSection from "./components/ProcessSection";
import CoreValues from "./components/CoreValues";
import Footer from "./components/Footer";

const Page = () => {
  return (
    <>
      <Navbar />
      <CompanySection />
      <section className="bg-[#41001f] w-full">
        <AboutSection />
        <ProcessSection/>
        <CoreValues />
        <Footer />
      </section>
    </>
  );
};

export default Page;
