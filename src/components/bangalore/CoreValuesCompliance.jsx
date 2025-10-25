"use client";
import React from "react";

const values = [
  {
    title: "Month 1: Assessment & Setup",
    description:
      "We conduct a thorough GST assessment to evaluate current compliance, identify gaps, and establish a clear compliance calendar. Key processes and systems are set up, and the team is oriented to ensure smooth operations and readiness for ongoing GST management.",
    image: "/images/Layer_1.png",
  },
  {
    title: "Ongoing: Proactive Management",
    description:
      "This phase focuses on continuous GST management through regular data collection, monthly reconciliations, and timely filing of returns and payments. Ongoing monitoring of regulatory changes ensures compliance, supported by quarterly review meetings to address issues and optimize processes.",
    image: "/images/Layer_1-1.png",
  },
  {
    title: "Year-End: Annual Compliance",
    description:
      "At year-end, we ensure complete GST compliance by preparing annual returns, supporting audits, and reconciling accounts. A thorough assessment of the year’s compliance is conducted, along with planning for the next financial year and providing recommendations for tax optimization.",
    image: "/images/Layer_1-2.png",
  },
];

const CoreValuesCompliance = () => {
  return (
    <section className="relative flex flex-col items-center text-white max-w-[90rem] mx-auto px-4 py-16">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center max-w-4xl mx-auto">
        Our GST Compliance Approach
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-24 mt-12 md:mt-16 w-full">
        {values.map((value, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-y-6 md:gap-y-8 text-center"
          >
            {/* Icon */}
            <figure className="w-20 md:w-24 h-20 md:h-24">
              <img
                src={value.image}
                alt={value.title}
                className="w-full h-full object-contain"
              />
            </figure>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-semibold text-orange-500">
              {value.title}
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-300 -mt-2">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValuesCompliance;
