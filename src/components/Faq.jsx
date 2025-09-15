"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FiChevronDown, FiArrowLeft } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/utils/data";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  // number of FAQs to show at a time
  const BATCH_SIZE = 10;
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  // sentinel for intersection observer
  const loadMoreRef = useRef(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Intersection Observer to load more items
  useEffect(() => {
    const target = loadMoreRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          setVisibleCount((prev) =>
            Math.min(prev + BATCH_SIZE, faqs.length)
          );
        }
      },
      { rootMargin: "200px" } // start loading a bit early
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      {/* Header */}
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
      <section className="w-full divide-y max-w-2xl divide-gray-200 rounded-xl">
        {faqs.slice(0, visibleCount).map((faq, i) => (
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

        {/* Sentinel element to trigger more loading */}
        {visibleCount < faqs.length && (
          <div ref={loadMoreRef} className="py-6 text-center text-gray-500">
            Loading more…
          </div>
        )}
      </section>
    </main>
  );
}
