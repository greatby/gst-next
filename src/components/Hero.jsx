"use client";

import { FaArrowRight, FaCheck } from "react-icons/fa";

export default function HeroTechspeed({ data }) {
  return (
    <section className="bg-[#f9f3f8] min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* LEFT SECTION */}
      <div className="flex-1 flex flex-col justify-start px-6 lg:pl-20 pt-16 lg:pt-24 relative z-10">
        {/* Headline */}
        <h1 className="text-5xl font-norm lg:text-6xl font-normal text-[#1a001a] leading-[1.1] mb-4">
          {data?.title} <br />
          <span>{data?.subTitle}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-[_clamp(12px_20px_1.95rem)_]  text-[#2c2c2c] mb-8">
          {data?.description}
        </p>

        {/* Button (outside purple box) */}
        <a
          href={`mailto:hello@unigst.com?subject=GST%20Consultation&body=Hi%20Team,%0A%0AI%20would%20like%20to%20get%20started%20with%20your%20GST%20services.%0A%0AThanks.`}
          className="group relative inline-flex w-[40%] justify-center items-center gap-4 h-[50px] px-6 sm:px-4 rounded-[1rem] font-semibold text-sm sm:text-base leading-none bg-[#4b0a1b] text-white transition-colors duration-250 ease-out hover:bg-[#c7e410] hover:text-black"
          aria-label="Get Free Estimate"
        >
          <span className="z-10 text-sm font-normal">Get Free Estimate</span>

          {/* circle pill (3rem wide) */}
          <span className="relative z-20 h-[35px] min-w-[35px] max-w-[35px] rounded-full overflow-hidden">
            {/* Base layer: visible by default (yellow background, black arrow) */}
            <span
              className="absolute inset-0 flex items-center justify-center bg-[#c7e410] text-black transition-opacity duration-250 ease-out
                     group-hover:opacity-0"
            >
              <svg
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-3 stroke-current"
              >
                <path
                  d="M6.55 0.83L10.25 5.22M10.25 5.22L6.55 9.29M10.25 5.22H0.19"
                  strokeWidth="2"
                  stroke="currentColor"
                />
              </svg>
            </span>

            {/* Overlay layer: visible on hover (wine background, yellow arrow) */}
            <span
              className="absolute inset-0 flex items-center justify-center bg-[#4b0a1b] text-[#c7e410] opacity-0 transition-opacity duration-250 ease-out
                     group-hover:opacity-100"
            >
              <svg
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-3 stroke-current"
              >
                <path
                  d="M6.55 0.83L10.25 5.22M10.25 5.22L6.55 9.29M10.25 5.22H0.19"
                  strokeWidth="2"
                  stroke="currentColor"
                />
              </svg>
            </span>
          </span>
        </a>

        {/* Purple Box — touches left edge */}
        <div className="bg-[#4b0a1b] text-white rounded-none mt-10 w-[600px] -ml-6 lg:-ml-20 overflow-hidden">
          <div className="px-16 py-18 max-w-xl mx-auto">
            <div className="divide-y text-sm font-normal divide-white/20">
              <div className="py-4 flex items-center gap-3">
                <FaCheck className="text-[#d16fe8]" />
                <span className="text-sm font-medium">
                  Hands-on operators managing all aspects of GST processes.
                </span>
              </div>
              <div className="py-4 flex items-center gap-3">
                <FaCheck className="text-[#d16fe8]" />
                <span className="text-sm font-medium">
                  Elite expertise to ensure your GST technology runs flawlessly.
                </span>
              </div>
              <div className="py-4 flex items-center gap-3">
                <FaCheck className="text-[#d16fe8]" />
                <span className="text-sm font-medium">
                  Turning GST from a compliance risk into a streamlined,
                  value-adding function.
                </span>
              </div>
              <div className="py-4 flex items-center gap-3">
                <FaCheck className="text-[#d16fe8]" />
                <span className="text-sm font-medium">
                  Eliminating hours of manual reconciliation and data-chasing by
                  leveraging technology to its fullest{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION (Empty for now) */}
      <div className="flex-1 bg-transparent"></div>
    </section>
  );
}
