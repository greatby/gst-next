"use client";
import React from "react";
import Link from "next/link";

const processSteps = [
  {
    number: "1",
    title: "Client Consultations",
    description: "Outline and align project scope.",
    image: "/images/process_1.png",
  },
  {
    number: "2",
    title: "Create Project Sample",
    description: "Develop sample output for clients.",
    image: "/images/process_2.png",
  },
  {
    number: "3",
    title: "Data Processing",
    description: "Gather, digitize, enhance, and validate data.",
    image: "/images/process_3.png",
  },
  {
    number: "4",
    title: "Process Data in Output Format",
    description: "Aggregate, analyze, and prepare client ready output.",
    image: "/images/process_4.png",
  },
  {
    number: "5",
    title: "Perform Validation and Quality Checks",
    description: "Run quality checks and ensure data relevancy and accuracy.",
    image: "/images/process_5.png",
  },
  {
    number: "6",
    title: "On-time Delivery To Clients",
    description: "Upload data and reports to the client portal.",
    image: "/images/process_6.png",
  },
];

const ProcessSection = () => {
  return (
    <section className="relative flex flex-col items-center max-w-[90rem] mx-auto px-4 sm:-mt-12 mb-24">
      {/* Heading */}
      <div className="flex flex-col gap-y-6 text-center items-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white">Our Process</h2>
        <p className="text-gray-200 text-lg">
          Our large and growing multinational team of consultants, managers,
          data specialists, and technologists is at the very heart of our
          success. We foster a culture of continuous learning and strive every
          day to exceed our clients’ expectations.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-l border-r border-orange-500 mt-16 w-full">
        {processSteps.map((step, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-start gap-y-4 justify-end border-b sm:border-r border-orange-500 min-h-[26rem] py-10 sm:py-12 px-6 sm:px-10 text-white"
          >
            <figure className="absolute top-8 right-8 w-20 h-20">
              <img src={step.image} alt={step.title} className="object-contain" />
            </figure>
            <div className="text-5xl font-bold">{step.number}</div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-sm sm:text-base text-gray-300">{step.description}</p>
          </div>
        ))}
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
    </section>
  );
};

export default ProcessSection;
