"use client";
import React from "react";

const values = [
  {
    title: "Step 1: Connect Your Data",
    description:
      "Link your accounting software (Tally, Zoho, QuickBooks) or share invoices monthly. One-time setup.",
    image: "/images/Layer_1.png",
  },
  {
    title: "Step 2: We Process Everything",
    description:
      "Invoice validation, ITC reconciliation, error checking, tax calculation. All handled by our team.",
    image: "/images/Layer_1-1.png",
  },
  {
    title: "Step 3: You Review & Approve",
    description:
      "Get return summary 3 days before deadline. Review on dashboard. Approve with one click.",
    image: "/images/Layer_1-2.png",
  },
  {
    title: "Step 4: We File & Confirm",
    description:
      "Filed on time, every time. Get confirmation with ARN. Payment challan if tax due. Done.",
    image: "/images/Layer_1-1.png",
  },
];

const CoreValuesReturn = () => {
  return (
    <section className="relative flex flex-col items-center text-white max-w-[90rem] mx-auto px-4 py-16">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center max-w-4xl mx-auto">
        HOW IT WORKS
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

export default CoreValuesReturn;
