"use client";
import React from "react";

const values = [
  {
    title: "For Export Refunds (IGST Paid)",
    description:
      "To claim IGST export refunds, businesses must have valid GST registration, pay IGST on exports, file shipping bills or FIRC/BRC, and maintain proper documentation. We help exporters meet every eligibility requirement and secure timely refunds with no errors or delays.",
    image: "/images/Layer_1.png",
  },
  {
    title: "For Export Refunds (ITC Refund under LUT)",
    description:
      "You qualify for an ITC refund under LUT if you export without IGST payment, have a valid LUT, and possess accumulated eligible ITC backed by proper books of accounts. Our team validates every requirement to ensure accurate refund claims and smooth processing.",
    image: "/images/Layer_1-1.png",
  },
  {
    title: "For Excess Payment Refund",
    description:
      "Excess GST paid can be refunded when supported by challan proof, filed within the time limit, and not already adjusted elsewhere. Our team verifies eligibility, prepares declarations, and compiles all evidence to secure a fast and accurate refund.",
    image: "/images/Layer_1-2.png",
  },
  {
    title: "For Inverted Duty Refund",
    description:
      "Inverted duty refunds are available when ITC builds up due to higher input tax rates and is supported by clean records and period-wise calculations. Our team verifies eligibility, applies the correct formula, and prepares precise refund claims for faster processing.",
    image: "/images/Layer_1-1.png",
  },
   {
    title: "For SEZ Supplies",
    description:
      "SEZ refund eligibility requires endorsed invoices, proof of supply to the SEZ unit, acknowledgment certificates, and compliance with IGST or LUT conditions. Our team verifies every requirement and files accurate refund claims for faster, error-free processing.",
    image: "/images/Layer_1.png",
  },
   {
    title: "Common Ineligibility Reasons",
    description:
      "Refund ineligibility usually arises from missing documents, unreceived export proceeds, blocked ITC, time-barred claims, or tax being passed on to customers. Our experts review every criterion carefully to ensure your claim meets all compliance requirements.",
    image: "/images/Layer_1-1.png",
  },
];

const CoreValuesRefund = () => {
  return (
    <section className="relative flex flex-col items-center text-white max-w-[90rem] mx-auto px-4 py-16">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center max-w-4xl mx-auto">
        Am I Eligible for GST Refund?
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

export default CoreValuesRefund;
