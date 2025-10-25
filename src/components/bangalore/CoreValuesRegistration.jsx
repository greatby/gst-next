"use client";
import React from "react";

const values = [
  {
    title: "Regular GST Registration",
    description:
      "For standard businesses engaged in taxable supply of goods or services. This is the most common type suitable for manufacturers, traders, and service providers",
    image: "/images/Layer_1.png",
  },
  {
    title: "Composition Scheme Registration",
    description:
      "For small businesses with turnover up to ₹1.5 crore (₹75 lakhs for certain states). Pay tax at a reduced rate with simplified compliance.",
    image: "/images/Layer_1-1.png",
  },
  {
    title: "Casual Taxable Person Registration",
    description:
      "For businesses occasionally undertaking transactions in a state where they don't have a fixed place of business",
    image: "/images/Layer_1-2.png",
  },
   {
    title: "Non-Resident Taxable Person Registration",
    description:
      "For foreign businesses occasionally supplying goods or services in India without a fixed establishment.",
    image: "/images/Layer_1-1.png",
  },
   {
    title: "E-commerce Operator Registration",
    description:
      "Mandatory for platforms facilitating sales through digital medium.",
    image: "/images/Layer_1-2.png",
  },
  {
    title: "Input Service Distributor Registration",
    description:
      "For businesses distributing input tax credit across multiple locations or branches",
    image: "/images/Layer_1.png",
  },
];

const CoreValuesRegistartion = () => {
  return (
    <section className="relative flex flex-col items-center text-white max-w-[90rem] mx-auto px-4 py-16">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center max-w-4xl mx-auto">
        Types of GST Registration We Handle
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

export default CoreValuesRegistartion;
