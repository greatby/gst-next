"use client";
import React from "react";
import Link from "next/link";



const ProcessSectionCompliance = ({data}) => {
  return (
    <section className="relative flex flex-col items-center max-w-[90rem] mx-auto px-4 sm:-mt-12">
      {/* Heading */}
      <div className="flex flex-col gap-y-6 text-center items-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white">
          Why GST Compliance is Critical for Your Business
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-l border-r border-orange-500 my-16 w-full">
        {data.map((step, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-start gap-y-4 justify-end border-b sm:border-r border-orange-500 min-h-[26rem] py-10 sm:py-12 px-6 sm:px-10 text-white"
          >
            <figure className="absolute top-8 right-8 w-20 h-20">
              <img
                src={step.image}
                alt={step.title}
                className="object-contain"
              />
            </figure>
            <div className="text-5xl font-bold">{step.number}</div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-sm sm:text-base text-gray-300">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSectionCompliance;
