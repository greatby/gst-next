"use client";
import { useState } from "react";
import { FaCircleChevronDown } from "react-icons/fa6";

export default function FaqSection({faqs}) {
  const [activeIndex, setActiveIndex] = useState(null);

  

  const toggle = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section className="bg-[#fffafc] min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl text-center font-light mb-16">
          Frequently Asked Q&apos;s
        </h1>

        <div className="divide-y divide-black/20 border-t border-black/20">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-black/20">
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center py-6 text-left group"
              >
                <span className="text-base md:text-lg transition-opacity duration-300 group-hover:opacity-70">
                  {faq.question}
                </span>
                <FaCircleChevronDown
                  className={`w-5 h-5 text-black transition-transform duration-300 ${
                    activeIndex === i ? "rotate-180 text-purple-600" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  activeIndex === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="bg-purple-100 rounded-3xl px-6 py-4 mb-6 text-gray-800">
                  <p className="text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
