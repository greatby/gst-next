import React from 'react'
import CompanySection from "@/components/CompanySection"
import { aboutUsAboutSectionData, heroDataAboutUs, processStepsAbout } from '@/utils/data'
import AboutSection from '@/components/AboutSection'
import ProcessSection from '@/components/ProcessSection'

export const metadata = {
  title: "UNIGST — The Fiscal Operating System of a New India",
  description:
    "UNIGST exists to keep that rhythm unbroken. We are not a product, not a SaaS, not a consultancy. We are the execution layer of India’s fiscal sovereignty — the system that ensures compliance isn’t a burden, but a backbone.",
  alternates: { canonical: "https://unigst.com/aboutUs" },
  openGraph: {
    title: "UNIGST — The Fiscal Operating System of a New India",
    url: "https://unigst.com/aboutUs",
  },
};
const AboutUs = () => {
  return (
   <>
   <CompanySection data={heroDataAboutUs}/>
    <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutUsAboutSectionData}/>
        <ProcessSection data={processStepsAbout}/>
        {/* <CoreValues /> */}
        {/* <TeamSection /> */}
      </section>
   </>
  )
}

export default AboutUs
