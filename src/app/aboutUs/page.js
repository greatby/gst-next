import React from 'react'
import CompanySection from "@/components/CompanySection"
import { aboutUsAboutSectionData, heroDataAboutUs } from '@/utils/data'
import AboutSection from '@/components/AboutSection'
import ProcessSection from '@/components/ProcessSection'
const AboutUs = () => {
  return (
   <>
   <CompanySection data={heroDataAboutUs}/>
    <section className="bg-[#41001f] w-full">
        <AboutSection data={aboutUsAboutSectionData}/>
        {/* <ProcessSection /> */}
        {/* <CoreValues /> */}
        {/* <TeamSection /> */}
      </section>
   </>
  )
}

export default AboutUs
