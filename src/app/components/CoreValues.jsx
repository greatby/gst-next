"use client";
import React from "react";

const values = [
  {
    title: "Accuracy",
    description:
      "Our process ensures near-perfect data accuracy through double-key data entry, quality checks, validation routines, and verification checks.",
    image: "/images/Layer_1.png", // replace with your actual path
  },
  {
    title: "Security",
    description:
      "At TechSpeed, we take our role as temporary stewards of your data seriously. Our security systems, including VPNs, SSLs, and PGP encryptions, are compliant with industry standards.",
    image: "/images/Layer_1-1.png", // replace with your actual path
  },
  {
    title: "Agility",
    description:
      "We guarantee 100% on-time delivery for your urgent data needs. Simply share your outsourcing objectives and we'll build a customized solution.",
    image: "/images/Layer_1-2.png", // replace with your actual path
  },
];

const CoreValues = () => {
  return (
    <section className="relative flex flex-col items-center text-white max-w-[90rem] mx-auto px-4 py-16">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center max-w-4xl mx-auto">
        Our Core Values
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

export default CoreValues;
