"use client";
import React from "react";

const AboutSection = ({data}) => {
  return (
    <section className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center py-36 gap-12 mt-10 lg:mt-24 px-4">
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
          <span className="block">{data.title}</span>
          
        </h3>

        <div className="mt-6 text-white space-y-4">
          <p>
       {data.description}
          </p>
          {data?.subDesc && <p>
            At <span className="text-[#c7e410]">UNIGST.COM</span>, {data.subDesc}
          </p>}
          
        </div>

        {/* Button */}
        {/* <a
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
        </a> */}
      </div>
    </section>
  );
};

export default AboutSection;
