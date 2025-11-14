"use client";

import { useState } from "react";

const itemsInvoice = [
  {
    title: "What We Do",
    description:
      "Our experts analyze your business model, refund type, and compliance records to confirm eligibility and estimate your refund amount. We also validate timelines, review document availability, and prepare a clear roadmap for smooth refund processing.",
  },
  {
    title: "Deliverable",
    description:
      "We provide a comprehensive assessment that includes your eligibility status, refund estimate, documentation checklist, and processing timeline—along with a transparent service fee quote. Everything you need to start your refund claim with clarity.",
  },
  {
    title: "Your Involvement",
    description:
      "Provide basic info (GSTIN, transaction details, export documents)",
  },
];

const itemsPurchase = [
  {
    title: "For Export Refunds",
    description:
      "Export refunds require a complete documentation set—shipping bills, BRC/FIRC, GSTR filings, LUT (if applicable), and proof of goods exported. We organize and validate every document to ensure a clean, error-free refund application.",
  },
  {
    title: "For Excess Payment Refund",
    description:
      "To claim an excess GST payment refund, you must submit challans, liability vs payment reconciliations, bank proofs, and statutory declarations. We compile and organize every document needed to support a smooth and successful refund application.",
  },
  {
    title: "For Inverted Duty Refund",
    description:
      "To process an inverted duty refund, businesses must submit purchase and sales invoices, ITC accumulation proof, turnover bifurcation sheets, and stock records where applicable. We prepare, validate, and organize all documents for smooth refund approval.",
  },
  {
    title: "What We Do",
    description:
      "Our experts review all documents for accuracy, match them with GST filings, and prepare detailed reconciliation sheets. We highlight missing paperwork and potential risk areas upfront so your refund application is strong and error-free.",
  },
  {
    title: "Timeline",
    description: "5-7 days (depends on document availability from you)",
  },
];

const itemsPenalties = [
  {
    title: "For Export Refunds (IGST Paid)",
    description:
      "Our team verifies IGST paid from GSTR-3B, performs invoice-wise reconciliation with shipping bills, and identifies any required corrections. The result is a precise, error-free export refund calculation.",
  },
  {
    title: "For Export Refunds (ITC Refund)",
    description:
      "Our team breaks down every component of the ITC refund formula—export turnover, adjusted turnover, and net ITC—and applies the statutory calculation to determine your exact refund eligibility with accuracy.",
  },
  {
    title: "For Inverted Duty Refund",
    description:
      "Our team performs detailed turnover segregation, computes net ITC, and applies the statutory inverted duty formula to determine your eligible refund. This complex calculation is handled end-to-end to ensure accuracy and smooth approval.",
  },
  {
    title: "Reconciliation",
    description:
      "Our team reconciles GSTR-1 with shipping bills, GSTR-2A/2B with purchase registers, and GSTR-3B with your books to verify correctness. We fix all discrepancies upfront so your refund application is clean, compliant, and approval-ready.",
  },
  {
    title: "Deliverable",
    description:
      "We provide a full set of refund workings—accurate calculations, reconciliations, and supporting documents—along with a clear summary of your claimable refund. Everything is organized and ready for filing or internal review.",
  },
  {
    title: "Timeline",
    description: "2-3 days",
  },
];

const itemsTax = [
  {
    title: "Form RFD-01 (Refund Application)",
    description:
      "Our team fills Form RFD-01 end-to-end on the GST portal—selecting the correct refund type, entering all statutory details, and uploading the required statement of invoices. This ensures your refund application is filed correctly the first time.",
  },
  {
    title: "Statement of Exports (For Export Refunds)",
    description:
      "Our team compiles invoice numbers, dates, values, IGST paid, shipping bill details, and port information into a clean, fully reconciled export statement. We ensure all entries are correctly mapped and uploaded in the mandated Excel format for seamless refund processing.",
  },
  {
    title: "Other Supporting Documents",
    description:
      "Our team provides all mandatory supporting papers—including annexures, statutory declarations, CA certification for claims above ₹2 lakhs, and verified bank proofs. This ensures your refund application is fully compliant and ready for departmental scrutiny.",
  },
  {
    title: "Quality Check",
    description:
      "Our team performs a multi-level quality check—validating formulas, cross-checking documents, and resolving GST portal issues—to ensure your refund application is error-free. This final review greatly reduces the chances of rejection or delays.",
  },
];

const itemsAmendment = [
  {
    title: "Filing Process",
    description:
      "Our team completes the entire filing on the GST portal—choosing the right refund type, uploading RFD-01 with all supporting documents, and submitting the application. We then obtain the ARN and acknowledgment to ensure your claim is officially recorded.",
  },
  {
    title: "Post-Filing",
    description:
      "After submission, we secure the ARN, notify you via email and WhatsApp, and provide the filed RFD-01 copy. Your application is officially logged and marked as “Filed, awaiting processing” by the GST department.",
  },
];

const itemsAnnual = [
  {
    title: "What Happens at GST Department",
    description:
      "Once filed, your application goes through officer review, system-based validation, and document scrutiny to ensure accuracy and compliance. If any discrepancies appear, the department issues queries seeking clarification or additional documents.",
  },
  {
    title: "Common Queries",
    description:
      "Typical refund queries relate to invoice–shipping bill mismatches, missing payment proofs, insufficient ITC workings, or refund amounts that seem disproportionately high. Responding accurately and on time ensures the application continues without delay.",
  },
  {
    title: "Our Response",
    description:
      "If the department raises a query, we prepare a complete, well-documented reply within 2–3 days, upload it on the portal, and follow up with the officer for quick resolution. Continuous monitoring ensures your refund moves forward without delays.",
  },
  {
    title: "Typical Queries Response Time",
    description: "2-5 days",
  },
  {
    title: "Department's Processing Time",
    description: "20-40 days (varies by officer workload)",
  },
];

const itemsEcommerce = [
  {
    title: "Favorable Order",
    description:
      "A favorable order means your refund has been sanctioned—fully or partially—and recorded through Form RFD-06. The approved amount is then credited directly to your bank account, followed by an official SMS notification from the GST system.",
  },
  {
    title: "Bank Credit",
    description:
      "Once sanctioned, the refund is deposited directly into the bank account mentioned in your application, usually within a few days. The credit reflects clearly in your statement under the label “GST REFUND.”",
  },
  {
    title: "Post-Credit",
    description:
      "Once the refund hits your bank, we confirm the credit, provide the official sanction order, and assess whether interest is payable due to processing delays. Where applicable, we file for interest to ensure you receive the full amount you’re entitled to.",
  },
  {
    title: "Unfavorable Order (Rejection)",
    description:
      "When a refund is denied through an RFD-08 order, we review the objections, identify errors or gaps, and advise the best course—refiling or filing an appeal. Our team handles the entire appeal process for unfair or incorrect rejections.",
  },
];

const itemsMultiState = [
  {
    title: "What We Ensure",
    description:
      "Our team makes sure your refund entries match GST portal data, ITC ledgers are updated, and your books reflect the refund properly as income or liability reduction. We also verify that no refund is claimed twice, ensuring full compliance.",
  },
  {
    title: "Advisory",
    description:
      "Our advisory covers refund optimization strategies, system improvements, and compliance best practices to strengthen your refund process. We also provide timely filing guidance so refunds don’t accumulate or get delayed.",
  },
  {
    title: "Ongoing Support",
    description:
      "Our ongoing support includes preparing your next refund claims, reviewing yearly refund eligibility, and handling any departmental follow-ups. We stay with you beyond a single refund to maintain long-term compliance and accuracy.",
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
                    <span className="font-bold text-[16px]">{item.title}</span>
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
        How GST Refund Processing Works ?
      </h1>

      <Section
        icon="/images/data-enrichment.svg"
        title="STEP 1: Refund Eligibility Assessment (Day 1-2)"
        desc="We evaluate your business, documents, and refund category to determine your exact GST refund eligibility and expected refund amount."
        items={itemsInvoice}
        secKey="invoice"
      />

      <Section
        icon="/images/workflow-processing.svg"
        title="STEP 2: Document Collection & Verification (Day 3-7)"
        desc="Documents We Collect (varies by refund type):"
        items={itemsPurchase}
        secKey="purchase"
      />

      <Section
        icon="/images/data-conversion-to-digitized-formats.svg"
        title="STEP 3: Refund Calculation & Reconciliation (Day 8-10)"
        desc="We accurately calculate your GST refund by matching export records, applying statutory formulas, and bifurcating turnover and ITC as required for IGST, LUT, and inverted duty refunds."
        items={itemsPenalties}
        secKey="penalties"
      />

      <Section
        icon="/images/data-analysis-and-reporting.svg"
        title="STEP 4: Refund Application Preparation (Day 11-13)"
        desc="What We Prepare"
        items={itemsTax}
        secKey="tax"
      />

      <Section
        icon="/images/data-enrichment.svg"
        title="STEP 5: Filing on GST Portal (Day 14)"
        desc="Your refund application is fully prepared, filed on the GST portal, and submitted with all attachments—complete with ARN generation and post-filing confirmation."
        items={itemsAmendment}
        secKey="amendment"
      />

      <Section
        icon="/images/workflow-processing.svg"
        title="STEP 6: Departmental Processing & Queries (Day 15-40)"
        desc="Your refund is actively tracked at the department, and any officer queries are answered promptly with detailed clarifications and documents to ensure fast processing.Fix past GST mistakes without stress."
        items={itemsAnnual}
        secKey="annual"
      />

      <Section
        icon="/images/data-conversion-to-digitized-formats.svg"
        title="STEP 7: Sanction Order & Credit (Day 35-45)"
        desc="From refund sanction to bank credit and interest checks, we oversee every step and also handle objections or appeals if your refund is partially or fully rejected"
        items={itemsEcommerce}
        secKey="ecommerce"
      />

      <Section
        icon="/images/data-analysis-and-reporting.svg"
        title="STEP 8: Post-Refund Compliance (Day 46+)"
        desc="We verify accurate refund reflection in your GST records, guide you on optimizing future claims, and offer ongoing assistance for quarterly filings and departmental follow-up."
        items={itemsMultiState}
        secKey="multi"
      />
    </>
  );
}
