"use client";
import React from "react";

const AboutSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center py-36 gap-12 mt-10 lg:mt-24 mb-20 lg:mb-28 px-4">
      {/* Left side */}
      <figure className="relative flex-1 w-full max-w-md">
        <div className="relative w-full">
          {/* Replace canvas with image */}
          <div className="pt-[108%]" />
          <img
            src="images/about-bg.png" // replace with your screenshot
            alt="About background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </figure>

      {/* Right side */}
      <div className="flex flex-col items-start w-full lg:max-w-2xl mt-10 lg:mt-0">
        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          <span className="block">Pioneers in Outsourcing</span>
          <span className="block">Services since 2002</span>
        </h3>

        <div className="mt-6 text-white space-y-4">
          <p>
            Founded and headquartered in Portland, Oregon in 2002, TechSpeed Inc
            is a women-owned and led technology company. We enable businesses of
            all sizes to accelerate growth with comprehensive and scalable
            outsourcing services. As pioneers in data services, we specialize in
            pairing human support with technology automation.
          </p>
          <p>
            Headquartered in the USA, with production offices in India,
            TechSpeed employs a unique onshore and offshore team model that
            prioritizes customer service with US-based project management and
            scalable offshore production teams.
          </p>
          <p>
            Our large and growing multinational team of consultants, managers,
            data specialists and technologists is at the very heart of our
            success. We foster a culture of continuous learning and strive every
            day to exceed our clients’ expectations.
          </p>
        </div>

        {/* Button */}
        <a
          href="/get-started/"
          className="inline-flex items-center gap-3 h-12 px-6 mt-8 rounded-2xl font-mono text-sm md:text-base bg-white text-black hover:bg-[#c7e410] transition"
        >
          Build your team now
          <span className="flex items-center justify-center h-8 w-8 rounded-full bg-[#c7e410] hover:bg-[#460021] text-black">
            <svg
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-3"
            >
              <path
                d="M6.55 0.83L10.25 5.22M10.25 5.22L6.55 9.29M10.25 5.22H0.19"
                strokeWidth="2"
                stroke="currentColor"
              />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
