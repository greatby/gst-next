"use client";

import { useState } from "react";

const itemsInvoice = [
  {
    title: "Problem",
    description:
      "Manual data entry leads to mismatches. Wrong GSTIN, incorrect HSN codes, amount errors.",
  },
  {
    title: "Our Solution",
    description:
      "Automated invoice upload from your accounting software. AI-powered validation checks GSTIN format, HSN/SAC codes, tax rates. Errors flagged before filing. Clean data guaranteed.",
  },
  {
    title: "Result",
    description: "Zero data entry errors. 100% match between books and returns",
  },
];

const itemsPurchase = [
  {
    title: "Problem",
    description:
      "Your vendors didn't file their returns. Missing invoices in GSTR-2A. Can't claim ITC.",
  },
  {
    title: "Our Solution",
    description:
      "Daily GSTR-2B monitoring. Identify missing vendor invoices within 5 days. Proactive vendor follow-up. Alternative ITC claim methods for valid purchases.",
  },
  {
    title: "Result",
    description:
      "Maximize ITC claims. Recover ₹50,000-5,00,000 annually for typical business.",
  },
];

const itemsPenalties = [
  {
    title: "Problem",
    description:
      "Missed deadlines = ₹50/day late fees. Adds up to ₹1,500/month, ₹18,000/year unnecessarily.",
  },
  {
    title: "Our Solution",
    description: "File 2 days before deadline. Never miss. Penalty = ₹0.",
  },
  {
    title: "Result",
    description:
      "Save ₹18,000/year in late fees alone. ROI on our service: 300%+.",
  },
];

const itemsTax = [
  {
    title: "Problem",
    description:
      "Reverse charge, export invoices, composition scheme—complex calculations. Overpay or underpay tax.",
  },
  {
    title: "Our Solution",
    description:
      "Automated tax calculation based on transaction type. Expert review before filing. Correct liability every time",
  },
  {
    title: "Result",
    description:
      "Pay exactly what's due. No more, no less. Avoid interest and penalties.",
  },
];

const itemsAmendment = [
  {
    title: "Problem",
    description:
      "Found error in past return. Need to file amendment. Don't know how. Worried about penalties.",
  },
  {
    title: "Our Solution",
    description:
      "Identify errors during reconciliation. File amendment returns (GSTR-1A) correctly. Handle liability adjustments. Minimize penalty impact.",
  },
  {
    title: "Result",
    description: "Clean compliance history. Past errors corrected legally.",
  },
];

const itemsAnnual = [
  {
    title: "Problem",
    description:
      "Annual return due December 31st. Need to reconcile 12 months of data. Mismatches between GSTR-1 and GSTR-3B. Don't match with books.",
  },
  {
    title: "Our Solution",
    description:
      "Monthly reconciliation throughout year. Annual return pre-populated and verified. Discrepancy resolution. Filed 15 days before deadline.",
  },
  {
    title: "Result",
    description:
      "Stress-free annual filing. No last-minute panic. Audit-ready records.",
  },
];

const itemsEcommerce = [
  {
    title: "Problem",
    description:
      "Amazon, Flipkart collect TCS. Need to reconcile. B2C and B2B invoices mixed. High transaction volume overwhelming.",
  },
  {
    title: "Our Solution",
    description:
      "Marketplace data integration. TCS auto-reconciliation. Bulk invoice upload. Transaction categorization. Specialized e-commerce filing.",
  },
  {
    title: "Result",
    description:
      "Handle 1000+ monthly transactions easily. Perfect TCS matching.",
  },
];

const itemsMultiState = [
  {
    title: "Problem",
    description:
      "Multiple GSTINs for different states. Different tax rates. Interstate vs intrastate. Which return to file where?",
  },
  {
    title: "Our Solution",
    description:
      "Centralized multi-state dashboard. State-wise invoice segregation. Automated IGST vs SGST calculation. All states filed from one platform.",
  },
  {
    title: "Result",
    description:
      "Manage 5-10 GSTINs easily. Zero confusion. Complete compliance across India.",
  },
];

export default function FilingIssuesSolution() {
  const [open, setOpen] = useState(null);

  return (
    <>
      <section className="relative max-w-[1200px] px-4 mx-auto mb-16 sm:mb-28">
        <h1 className="text-2xl max-w-3xl font-norm font-normal mx-auto my-12 leading-[1] md:text-[4rem] text-center">
          Common filing issues we solve
        </h1>
        <div className="border-t border-black/20 pt-10 sm:pt-28">
          <div className="flex flex-col sm:flex-row gap-8 mt-10">
            {/* ICON */}
            <figure className="h-20 w-20 min-w-[80px]">
              <img
                src="/images/data-enrichment.svg"
                className="w-full object-contain"
                alt="Data Enrichment Icon"
              />
            </figure>

            {/* TITLE */}
            <div className="sm:w-[500px] mt-4 sm:mt-0">
              <h2 className="text-3xl font-semibold">
                Invoice Data Entry Errors
              </h2>
            </div>

            {/* DESCRIPTION + ACCORDION */}
            <div className="flex-1 mt-4 sm:mt-0 sm:pl-7">
              <p className="text-base text-gray-700">
                Eliminate manual data errors with intelligent automation.
              </p>

              {/* ACCORDION LIST */}
              <ul className="mt-8 border-t border-black/20">
                {itemsInvoice.map((item, i) => (
                  <li key={i} className="border-b border-black/20">
                    <button
                      onClick={() => setOpen(open === i ? null : i)}
                      className="w-full flex justify-between items-center py-5 text-left group"
                    >
                      <span className="font-bold text-[16px] group-hover:opacity-60 transition">
                        {item.title}
                      </span>

                      <svg
                        className={`w-3 h-3 transition-transform ${
                          open === i ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 11 13"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.3399 8.85461 1.5937 6.54124.305175 8.07085 5.36504 12.3332l4.71526-4.28727-1.34551-1.47977L6.3399 8.74371V.947266h-2V8.85461Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {/* CONTENT */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        open === i ? "max-h-[200px] pb-5" : "max-h-0"
                      }`}
                    >
                      <p className="text-[15px] text-gray-600 pr-3">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="relative max-w-[1200px] px-4 mx-auto mb-16 sm:mb-28">
        <div className="border-t border-black/20 pt-10 sm:pt-28">
          <div className="flex flex-col sm:flex-row gap-8 mt-10">
            {/* ICON */}
            <figure className="h-20 w-20 min-w-[80px]">
              <img
                src="/images/workflow-processing.svg"
                className="w-full object-contain"
                alt="Data Enrichment Icon"
              />
            </figure>

            {/* TITLE */}
            <div className="sm:w-[500px] mt-4 sm:mt-0">
              <h2 className="text-3xl font-semibold">
                GSTR-2A vs Purchase Book Mismatch
              </h2>
            </div>

            {/* DESCRIPTION + ACCORDION */}
            <div className="flex-1 mt-4 sm:mt-0 sm:pl-7">
              <p className="text-base text-gray-700">
                Protect your ITC even when vendors delay filing.
              </p>

              {/* ACCORDION LIST */}
              <ul className="mt-8 border-t border-black/20">
                {itemsPurchase.map((item, i) => (
                  <li key={i} className="border-b border-black/20">
                    <button
                      onClick={() => setOpen(open === i ? null : i)}
                      className="w-full flex justify-between items-center py-5 text-left group"
                    >
                      <span className="font-bold text-[16px] group-hover:opacity-60 transition">
                        {item.title}
                      </span>

                      <svg
                        className={`w-3 h-3 transition-transform ${
                          open === i ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 11 13"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.3399 8.85461 1.5937 6.54124.305175 8.07085 5.36504 12.3332l4.71526-4.28727-1.34551-1.47977L6.3399 8.74371V.947266h-2V8.85461Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {/* CONTENT */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        open === i ? "max-h-[200px] pb-5" : "max-h-0"
                      }`}
                    >
                      <p className="text-[15px] text-gray-600 pr-3">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="relative max-w-[1200px] px-4 mx-auto mb-16 sm:mb-28">
        <div className="border-t border-black/20 pt-10 sm:pt-28">
          <div className="flex flex-col sm:flex-row gap-8 mt-10">
            {/* ICON */}
            <figure className="h-20 w-20 min-w-[80px]">
              <img
                src="/images/data-conversion-to-digitized-formats.svg"
                className="w-full object-contain"
                alt="Data Enrichment Icon"
              />
            </figure>

            {/* TITLE */}
            <div className="sm:w-[500px] mt-4 sm:mt-0">
              <h2 className="text-3xl font-semibold">
                Late Filing Penalties Accumulating
              </h2>
            </div>

            {/* DESCRIPTION + ACCORDION */}
            <div className="flex-1 mt-4 sm:mt-0 sm:pl-7">
              <p className="text-base text-gray-700">
                Stop paying avoidable late fees.
              </p>

              {/* ACCORDION LIST */}
              <ul className="mt-8 border-t border-black/20">
                {itemsPenalties.map((item, i) => (
                  <li key={i} className="border-b border-black/20">
                    <button
                      onClick={() => setOpen(open === i ? null : i)}
                      className="w-full flex justify-between items-center py-5 text-left group"
                    >
                      <span className="font-bold text-[16px] group-hover:opacity-60 transition">
                        {item.title}
                      </span>

                      <svg
                        className={`w-3 h-3 transition-transform ${
                          open === i ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 11 13"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.3399 8.85461 1.5937 6.54124.305175 8.07085 5.36504 12.3332l4.71526-4.28727-1.34551-1.47977L6.3399 8.74371V.947266h-2V8.85461Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {/* CONTENT */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        open === i ? "max-h-[200px] pb-5" : "max-h-0"
                      }`}
                    >
                      <p className="text-[15px] text-gray-600 pr-3">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="relative max-w-[1200px] px-4 mx-auto mb-16 sm:mb-28">
        <div className="border-t border-black/20 pt-10 sm:pt-28">
          <div className="flex flex-col sm:flex-row gap-8 mt-10">
            {/* ICON */}
            <figure className="h-20 w-20 min-w-[80px]">
              <img
                src="/images/data-analysis-and-reporting.svg"
                className="w-full object-contain"
                alt="Data Enrichment Icon"
              />
            </figure>

            {/* TITLE */}
            <div className="sm:w-[500px] mt-4 sm:mt-0">
              <h2 className="text-3xl font-semibold">
                Incorrect Tax Liability Calculation
              </h2>
            </div>

            {/* DESCRIPTION + ACCORDION */}
            <div className="flex-1 mt-4 sm:mt-0 sm:pl-7">
              <p className="text-base text-gray-700">
                Eliminate errors in complex tax calculations.
              </p>

              {/* ACCORDION LIST */}
              <ul className="mt-8 border-t border-black/20">
                {itemsTax.map((item, i) => (
                  <li key={i} className="border-b border-black/20">
                    <button
                      onClick={() => setOpen(open === i ? null : i)}
                      className="w-full flex justify-between items-center py-5 text-left group"
                    >
                      <span className="font-bold text-[16px] group-hover:opacity-60 transition">
                        {item.title}
                      </span>

                      <svg
                        className={`w-3 h-3 transition-transform ${
                          open === i ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 11 13"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.3399 8.85461 1.5937 6.54124.305175 8.07085 5.36504 12.3332l4.71526-4.28727-1.34551-1.47977L6.3399 8.74371V.947266h-2V8.85461Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {/* CONTENT */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        open === i ? "max-h-[200px] pb-5" : "max-h-0"
                      }`}
                    >
                      <p className="text-[15px] text-gray-600 pr-3">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="relative max-w-[1200px] px-4 mx-auto mb-16 sm:mb-28">
        <div className="border-t border-black/20 pt-10 sm:pt-28">
          <div className="flex flex-col sm:flex-row gap-8 mt-10">
            {/* ICON */}
            <figure className="h-20 w-20 min-w-[80px]">
              <img
                src="images/data-enrichment.svg"
                className="w-full object-contain"
                alt="Data Enrichment Icon"
              />
            </figure>

            {/* TITLE */}
            <div className="sm:w-[500px] mt-4 sm:mt-0">
              <h2 className="text-3xl font-semibold">
                Amendment Returns Nightmare
              </h2>
            </div>

            {/* DESCRIPTION + ACCORDION */}
            <div className="flex-1 mt-4 sm:mt-0 sm:pl-7">
              <p className="text-base text-gray-700">
                Fix past GST mistakes without stress
              </p>

              {/* ACCORDION LIST */}
              <ul className="mt-8 border-t border-black/20">
                {itemsAmendment.map((item, i) => (
                  <li key={i} className="border-b border-black/20">
                    <button
                      onClick={() => setOpen(open === i ? null : i)}
                      className="w-full flex justify-between items-center py-5 text-left group"
                    >
                      <span className="font-bold text-[16px] group-hover:opacity-60 transition">
                        {item.title}
                      </span>

                      <svg
                        className={`w-3 h-3 transition-transform ${
                          open === i ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 11 13"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.3399 8.85461 1.5937 6.54124.305175 8.07085 5.36504 12.3332l4.71526-4.28727-1.34551-1.47977L6.3399 8.74371V.947266h-2V8.85461Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {/* CONTENT */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        open === i ? "max-h-[200px] pb-5" : "max-h-0"
                      }`}
                    >
                      <p className="text-[15px] text-gray-600 pr-3">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="relative max-w-[1200px] px-4 mx-auto mb-16 sm:mb-28">
        <div className="border-t border-black/20 pt-10 sm:pt-28">
          <div className="flex flex-col sm:flex-row gap-8 mt-10">
            {/* ICON */}
            <figure className="h-20 w-20 min-w-[80px]">
              <img
                src="/images/workflow-processing.svg"
                className="w-full object-contain"
                alt="Data Enrichment Icon"
              />
            </figure>

            {/* TITLE */}
            <div className="sm:w-[500px] mt-4 sm:mt-0">
              <h2 className="text-3xl font-semibold">
                Annual Return (GSTR-9) Reconciliation
              </h2>
            </div>

            {/* DESCRIPTION + ACCORDION */}
            <div className="flex-1 mt-4 sm:mt-0 sm:pl-7">
              <p className="text-base text-gray-700">
                Fix past GST mistakes without stress
              </p>

              {/* ACCORDION LIST */}
              <ul className="mt-8 border-t border-black/20">
                {itemsAnnual.map((item, i) => (
                  <li key={i} className="border-b border-black/20">
                    <button
                      onClick={() => setOpen(open === i ? null : i)}
                      className="w-full flex justify-between items-center py-5 text-left group"
                    >
                      <span className="font-bold text-[16px] group-hover:opacity-60 transition">
                        {item.title}
                      </span>

                      <svg
                        className={`w-3 h-3 transition-transform ${
                          open === i ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 11 13"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.3399 8.85461 1.5937 6.54124.305175 8.07085 5.36504 12.3332l4.71526-4.28727-1.34551-1.47977L6.3399 8.74371V.947266h-2V8.85461Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {/* CONTENT */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        open === i ? "max-h-[200px] pb-5" : "max-h-0"
                      }`}
                    >
                      <p className="text-[15px] text-gray-600 pr-3">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="relative max-w-[1200px] px-4 mx-auto mb-16 sm:mb-28">
        <div className="border-t border-black/20 pt-10 sm:pt-28">
          <div className="flex flex-col sm:flex-row gap-8 mt-10">
            {/* ICON */}
            <figure className="h-20 w-20 min-w-[80px]">
              <img
                src="/images/data-conversion-to-digitized-formats.svg"
                className="w-full object-contain"
                alt="Data Enrichment Icon"
              />
            </figure>

            {/* TITLE */}
            <div className="sm:w-[500px] mt-4 sm:mt-0">
              <h2 className="text-3xl font-semibold">
                E-commerce Sellers - Marketplace Returns
              </h2>
            </div>

            {/* DESCRIPTION + ACCORDION */}
            <div className="flex-1 mt-4 sm:mt-0 sm:pl-7">
              <p className="text-base text-gray-700">
                Simplify high-volume e-commerce GST.
              </p>

              {/* ACCORDION LIST */}
              <ul className="mt-8 border-t border-black/20">
                {itemsEcommerce.map((item, i) => (
                  <li key={i} className="border-b border-black/20">
                    <button
                      onClick={() => setOpen(open === i ? null : i)}
                      className="w-full flex justify-between items-center py-5 text-left group"
                    >
                      <span className="font-bold text-[16px] group-hover:opacity-60 transition">
                        {item.title}
                      </span>

                      <svg
                        className={`w-3 h-3 transition-transform ${
                          open === i ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 11 13"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.3399 8.85461 1.5937 6.54124.305175 8.07085 5.36504 12.3332l4.71526-4.28727-1.34551-1.47977L6.3399 8.74371V.947266h-2V8.85461Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {/* CONTENT */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        open === i ? "max-h-[200px] pb-5" : "max-h-0"
                      }`}
                    >
                      <p className="text-[15px] text-gray-600 pr-3">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="relative max-w-[1200px] px-4 mx-auto mb-16 sm:mb-28">
        <div className="border-t border-black/20 pt-10 sm:pt-28">
          <div className="flex flex-col sm:flex-row gap-8 mt-10">
            {/* ICON */}
            <figure className="h-20 w-20 min-w-[80px]">
              <img
                src="/images/data-analysis-and-reporting.svg"
                className="w-full object-contain"
                alt="Data Enrichment Icon"
              />
            </figure>

            {/* TITLE */}
            <div className="sm:w-[500px] mt-4 sm:mt-0">
              <h2 className="text-3xl font-semibold">
                Multi-State Operations Confusion
              </h2>
            </div>

            {/* DESCRIPTION + ACCORDION */}
            <div className="flex-1 mt-4 sm:mt-0 sm:pl-7">
              <p className="text-base text-gray-700">
                Manage multi-state GST effortlessly.
              </p>

              {/* ACCORDION LIST */}
              <ul className="mt-8 border-t border-black/20">
                {itemsMultiState.map((item, i) => (
                  <li key={i} className="border-b border-black/20">
                    <button
                      onClick={() => setOpen(open === i ? null : i)}
                      className="w-full flex justify-between items-center py-5 text-left group"
                    >
                      <span className="font-bold text-[16px] group-hover:opacity-60 transition">
                        {item.title}
                      </span>

                      <svg
                        className={`w-3 h-3 transition-transform ${
                          open === i ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 11 13"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.3399 8.85461 1.5937 6.54124.305175 8.07085 5.36504 12.3332l4.71526-4.28727-1.34551-1.47977L6.3399 8.74371V.947266h-2V8.85461Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {/* CONTENT */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        open === i ? "max-h-[200px] pb-5" : "max-h-0"
                      }`}
                    >
                      <p className="text-[15px] text-gray-600 pr-3">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
