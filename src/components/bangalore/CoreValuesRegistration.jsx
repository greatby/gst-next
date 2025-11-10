"use client";
import React from "react";

const values = [
  {
    title: "Step 1: Document Collection (Day 1)",
    description:
      "We make GST registration fast and effortless. On Day 1, you share your documents via WhatsApp or email, and we handle the entire verification and application preparation within the same day. All essentials—including PAN, Aadhaar, business address proof, and bank details—are checked for accuracy, and if you don’t have a digital signature, we arrange that too. Fast, simple, and zero errors from the start.",
    image: "/images/Layer_1.png",
  },
  {
    title: "Step 2: Application Filing (Day 2)",
    description:
      "We prepare complete GST application. File on GST portal. Get Application Reference Number (ARN). Track status in real-time.",
    image: "/images/Layer_1-1.png",
  },
  {
    title: "Step 3: Verification (Day 3-4)",
    description:
      "GST department verifies your application. Sometimes asks for clarifications. We handle all queries. No involvement needed from you.",
    image: "/images/Layer_1-2.png",
  },
   {
    title: "Step 4: GSTIN Issued (Day 5)",
    description:
      "Get your 15-digit GST Identification Number (GSTIN). GST certificate emailed. Login credentials shared. Portal training provided.",
    image: "/images/Layer_1-1.png",
  },
  //  {
  //   title: "E-commerce Operator Registration",
  //   description:
  //     "Mandatory for platforms facilitating sales through digital medium.",
  //   image: "/images/Layer_1-2.png",
  // },
  // {
  //   title: "Input Service Distributor Registration",
  //   description:
  //     "For businesses distributing input tax credit across multiple locations or branches",
  //   image: "/images/Layer_1.png",
  // },
];

const CoreValuesRegistartion = () => {
  return (
    <section className="relative flex flex-col items-center text-white max-w-[90rem] mx-auto px-4 py-16">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center max-w-4xl mx-auto">
       GST Registration Process - Simple & Fast
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
