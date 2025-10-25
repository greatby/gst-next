"use client";
import React from "react";

const values = [
  {
    title: "Monthly Returns (GSTR-1 & GSTR-3B)",
    description:
      "We ensure timely GST return filing by the 11th of the following month, covering all your sales accurately, including B2B and B2C invoices, credit/debit notes, exports, and exempt or nil-rated supplies.",
    image: "/images/Layer_1.png",
  },
  {
    title: "GSTR-3B: Summary Return with Tax Payment",
    description:
      "We prepare and file GSTR-3B by the 20th of the following month, including a summary of outward/inward supplies, input tax credit claims, tax liability computation, payments, and applicable interest or late fees.",
    image: "/images/Layer_1-1.png",
  },
  {
    title: "Quarterly Returns",
    description:
      "We handle quarterly GST returns, including GSTR-3B under the QRMP scheme and CMP-08 for composition taxpayers, ensuring accurate calculations, complete documentation, and timely filing.",
    image: "/images/Layer_1-2.png",
  },
   {
    title: "Annual Returns",
    description:
      "We manage annual GST returns, including GSTR-9, GSTR-9C, and GSTR-9A, providing complete reconciliation of supplies, input tax credits, payments, refunds, and HSN summaries, while ensuring compliance and timely filing.",
    image: "/images/Layer_1-1.png",
  },
];

const CoreValuesReturn = () => {
  return (
    <section className="relative flex flex-col items-center text-white max-w-[90rem] mx-auto px-4 py-16">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center max-w-4xl mx-auto">
      With UNIgst, stay compliant and stress-free.
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
