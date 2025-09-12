"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiArrowLeft } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "I already use Tally/Zoho for my GST. Why do I need your service?",
      answer:
        `Your software is
the machine; we are the operator. Tally can't reconcile mismatches with vendors, chase them
down, or make strategic decisions on complex tax liabilities. Our service provides the expert
human layer that makes your existing technology work flawlessly, saving you countless hours
and mitigating all risks.`,
    },
    {
      question: "What is the benefit of your team having a system-level understanding of GST?",
      answer:
        `Our
experts, many of whom have been involved in the GST system from its inception, have a deep
understanding of its logic, common errors, and troubleshooting methods. This allows for faster
problem resolution, more accurate reconciliation, and a stronger defense in the event of an audit.`,
    },
    {
      question: "What are the most common GST penalties you protect me from?",
      answer:
        `We protect you from
"GST penalties for late filing" (₹20-50 per day), "18% interest on late payment," "ITC
disallowances" due to supplier mismatches, and the fines associated with incorrect "einvoicing"
or "e-way bill" generation.`,
    },
     {
      question: "My CA handles my GST. Why should I consider Workforce Limited?",
      answer:
        `Many CAs are
focused on advisory and traditional tax work. We specialize in the operational intricacies of GST
compliance—the data reconciliation, the tedious filing, and the technology management that CAs
often find cumbersome. We work in tandem with your CA, providing the operational excellence
they may not offer.`,
    },
     {
      question: "Do you handle GST for businesses in multiple states?",
      answer:
        `Yes, our pan-India operational
footprint and deep expertise in GST allow us to manage compliance seamlessly for businesses
with multi-state operations, ensuring consistency and accuracy across all your GSTINs.`,
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      {/* Header with Back Button + Title */}
      <div className="w-full max-w-2xl mb-8 flex items-center justify-center relative">
        <Link
          href="/"
          className="absolute left-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-black hover:bg-gray-300 transition-colors"
          aria-label="Back to Home"
        >
          <FiArrowLeft className="text-xl" />
        </Link>
        <h1 className="text-4xl font-bold text-gray-900">FAQ</h1>
      </div>

      {/* Accordion */}
      <section className="w-full max-w-2xl divide-y divide-gray-200 rounded-xl">
        {faqs.map((faq, i) => (
          <div key={i} className="py-4">
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between text-left text-lg font-medium text-gray-800 hover:text-gray-900 focus:outline-none"
              aria-expanded={openIndex === i}
            >
              {faq.question}
              <FiChevronDown
                className={`ml-2 h-5 w-5 transform transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden mt-2"
                >
                  <p className="text-gray-600 leading-relaxed px-1">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </section>
    </main>
  );
}
