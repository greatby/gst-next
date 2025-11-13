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
  const [openSection, setOpenSection] = useState({
    invoice: null,
    purchase: null,
    penalties: null,
    tax: null,
    amendment: null,
    annual: null,
    ecommerce: null,
    multi: null,
  });

  const toggle = (section, index) => {
    setOpenSection((prev) => ({
      ...prev,
      [section]: prev[section] === index ? null : index,
    }));
  };

  const Arrow = ({ isOpen }) => (
    <svg
      className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
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
  );

  const Section = ({ icon, title, desc, items, secKey }) => (
    <section className="relative max-w-[1200px] px-4 mx-auto mb-16 sm:mb-28">
      <div className="border-t border-black/20 pt-10 sm:pt-28">
        <div className="flex flex-col sm:flex-row gap-8 mt-10">
          <figure className="h-20 w-20 min-w-[80px]">
            <img src={icon} className="w-full object-contain" alt="" />
          </figure>

          <div className="sm:w-[500px] mt-4 sm:mt-0">
            <h2 className="text-3xl font-semibold">{title}</h2>
          </div>

          <div className="flex-1 mt-4 sm:mt-0 sm:pl-7">
            <p className="text-base text-gray-700">{desc}</p>

            <ul className="mt-8 border-t border-black/20">
              {items.map((item, i) => (
                <li key={i} className="border-b border-black/20">
                  <button
                    onClick={() => toggle(secKey, i)}
                    className="w-full flex justify-between items-center py-5 text-left group"
                  >
                    <span className="font-bold text-[16px]">
                      {item.title}
                    </span>
                    <Arrow isOpen={openSection[secKey] === i} />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openSection[secKey] === i
                        ? "max-h-[200px] pb-5"
                        : "max-h-0"
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
  );

  return (
    <>
      <h1 className="text-2xl max-w-3xl font-norm font-normal mx-auto my-12 leading-[1] md:text-[4rem] text-center">
        Common filing issues we solve
      </h1>

      <Section
        icon="/images/data-enrichment.svg"
        title="Invoice Data Entry Errors"
        desc="Eliminate manual data errors with intelligent automation."
        items={itemsInvoice}
        secKey="invoice"
      />

      <Section
        icon="/images/workflow-processing.svg"
        title="GSTR-2A vs Purchase Book Mismatch"
        desc="Protect your ITC even when vendors delay filing."
        items={itemsPurchase}
        secKey="purchase"
      />

      <Section
        icon="/images/data-conversion-to-digitized-formats.svg"
        title="Late Filing Penalties Accumulating"
        desc="Stop paying avoidable late fees."
        items={itemsPenalties}
        secKey="penalties"
      />

      <Section
        icon="/images/data-analysis-and-reporting.svg"
        title="Incorrect Tax Liability Calculation"
        desc="Eliminate errors in complex tax calculations."
        items={itemsTax}
        secKey="tax"
      />

      <Section
        icon="/images/data-enrichment.svg"
        title="Amendment Returns Nightmare"
        desc="Fix past GST mistakes without stress."
        items={itemsAmendment}
        secKey="amendment"
      />

      <Section
        icon="/images/workflow-processing.svg"
        title="Annual Return (GSTR-9) Reconciliation"
        desc="Fix past GST mistakes without stress."
        items={itemsAnnual}
        secKey="annual"
      />

      <Section
        icon="/images/data-conversion-to-digitized-formats.svg"
        title="E-commerce Sellers - Marketplace Returns"
        desc="Simplify high-volume e-commerce GST."
        items={itemsEcommerce}
        secKey="ecommerce"
      />

      <Section
        icon="/images/data-analysis-and-reporting.svg"
        title="Multi-State Operations Confusion"
        desc="Manage multi-state GST effortlessly."
        items={itemsMultiState}
        secKey="multi"
      />
    </>
  );
}
