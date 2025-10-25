"use client";
import React from "react";

const values = [
  {
    title: "Input Tax Credit Issues",
    description:
      "Unmatched invoices, ineligible ITC claims, and reversal calculations - we help maximize legitimate credit claims while ensuring compliance.",
    image: "/images/Layer_1.png",
  },
  {
    title: "GST Notice Management",
    description:
      "Received a notice from GST department? Our consultants provide expert representation and resolution support for all types of GST notices and assessments",
    image: "/images/Layer_1-1.png",
  },
  {
    title: "Inter-State Supply Confusion",
    description:
      "Determining place of supply, applicable tax rates, and documentation for inter-state transactions requires expertise we readily provide.",
    image: "/images/Layer_1-2.png",
  },
   {
    title: "E-Way Bill Compliance",
    description:
      "For businesses involved in goods movement, we ensure seamless e-way bill generation and compliance with transport regulations.",
    image: "/images/Layer_1-1.png",
  },
];

const CoreValuesConsultants = () => {
  return (
    <section className="relative flex flex-col items-center text-white max-w-[90rem] mx-auto px-4 py-16">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center max-w-4xl mx-auto">
        Common GST Challenges We Solve
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

export default CoreValuesConsultants;
