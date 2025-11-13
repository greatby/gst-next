"use client";

import { useState } from "react";

const itemsInvoice = [
  {
    title: "What We Do",
    description:
      "We review your GST notice in detail, identify the exact notice type, and assess the severity and legal provisions involved. Our team also verifies reply deadlines and analyzes the department’s allegations so you know exactly what you’re dealing with.",
  },
  {
    title: "Deliverable",
    description:
      "We deliver a detailed 5–10 page analysis report with penalty risk assessment and a clear strategy—whether to pay, defend, or negotiate. You also receive a reply timeline and a complete document checklist to streamline the preparation process.",
  },
  {
    title: "Timeline",
    description: "24 hours from receipt",
  },
];

const itemsPurchase = [
  {
    title: "What We Collect",
    description:
      "We gather all essential documents—GST returns, invoices, bank statements, contracts, past correspondence, and any prior reconciliations—to fully understand the disputed transactions and build a solid foundation for your notice reply.",
  },
  {
    title: "What We Do",
    description:
      "We match your records with the department’s allegations, separate genuine errors from system issues, calculate the correct tax impact, compile a factual timeline, and highlight the strongest defense points for your reply.",
  },
  {
    title: "Deliverable",
    description:
      "We provide a complete fact sheet with detailed error analysis and a three-scenario liability calculation—worst case, likely case, and best case—to help you understand your true exposure.",
  },
  {
    title: "Timeline",
    description: "3-5 days",
  },
];

const itemsPenalties = [
  {
    title: "What We Prepare",
    description:
      "We draft a comprehensive reply that addresses every point in the notice, supported by legal arguments, documentary evidence, and reconciliation statements, while also requesting a personal hearing and justified penalty waiver to strengthen your defense.",
  },
  {
    title: "Our Team Involved",
    description:
      "Your reply is prepared by a senior GST-expert CA, supported by a GST legal consultant and a documentation specialist who ensures all evidence is compiled accurately.",
  },
  {
    title: "Legal Strength",
    description:
      "We strengthen your reply with authoritative legal backing—citing Supreme Court and High Court judgments, CBIC circulars, AAR rulings, and GST Council recommendations to support your interpretation and weaken the department’s case.",
  },
  {
    title: "Deliverable",
    description:
      "You receive a complete submission set— a 15–30 page detailed reply, all supporting annexures, and a covering letter—fully organized and ready to submit to the GST department.",
  },
  {
    title: "Timeline",
    description: "5-7 days for complex notices",
  },
];

const itemsTax = [
  {
    title: "Submission",
    description:
      "We file your reply on the GST portal, submit a physical copy with acknowledgment, send an additional email to the officer, and continuously track the submission status to ensure nothing is missed",
  },
  {
    title: "Personal Hearing",
    description:
      "We arrange the personal hearing, brief you in advance, and accompany you with our CA and legal advisor to present your case, answer queries carefully, and ensure accurate recording of the hearing minutes.",
  },
  {
    title: "Who Attends",
    description:
      "Your personal hearing is attended by you as the business representative, supported by our senior GST-expert CA and, when required, an experienced legal counsel for cases involving high penalties or prosecution risk",
  },
  {
    title: "Hearing Strategy",
    description:
      "During the hearing, we highlight unintentional errors, demonstrate corrective actions taken, request penalty waiver where justified, and negotiate a fair settlement if any liability remains.",
  },
];

const itemsAmendment = [
  {
    title: "After Hearing",
    description:
      "We monitor your case after the hearing, track the order status daily, and download the final order as soon as it is issued—typically within 15–30 days.",
  },
  {
    title: "If Order Favorable (Demand Dropped/Reduced)",
    description:
      "If the order is favorable, the case is closed—any reduced liability is paid, and we help update your compliance processes to prevent future notices.",
  },
  {
    title: "If Order Unfavorable (Demand Confirmed)",
    description:
      "If the order is unfavorable, we analyze its legal defects, assess whether it’s worth appealing or settling, and provide clear recommendations on the best next steps.",
  },
];

const itemsAnnual = [
  {
    title: "Appeal to Appellate Authority",
    description:
      "We file your appeal within the 3-month deadline, make the mandatory 10% pre-deposit, draft strong legal and factual grounds, and represent you before the Appellate Authority—typically resulting in an order within 6–12 months.",
  },
  {
    title: "Appeal to Tribunal",
    description:
      "If the first appeal is unsuccessful, we escalate the case to the GST Appellate Tribunal, make the additional 10% pre-deposit, and provide senior legal representation—Tribunal decisions typically take 12–24 months.",
  },
  {
    title: "High Court / Supreme Court",
    description:
      "For serious legal or procedural violations, we approach the High Court through a writ petition—handled by senior legal counsel—typically used in high-value matters and decided over a 2–5 year timeframe.",
  },
  {
    title: "Our Service Coverage",
    description:
      "Appeals before the Appellate Authority are covered under our standard service, while Tribunal matters are handled on an additional retainer. High Court cases are managed through our empaneled senior GST litigation partners for specialized representation.",
  },
];

export default function FilingIssuesSolutionNotice() {
  const [openInvoice, setOpenInvoice] = useState(null);
  const [openPurchase, setOpenPurchase] = useState(null);
  const [openPenalties, setOpenPenalties] = useState(null);
  const [openTax, setOpenTax] = useState(null);
  const [openAmendment, setOpenAmendment] = useState(null);
  const [openAnnual, setOpenAnnual] = useState(null);

  return (
    <>
      {/* SECTION 1 */}
      <section className="relative max-w-[1200px] px-4 mx-auto mb-16 sm:mb-28">
        <h1 className="text-2xl max-w-3xl font-norm font-normal mx-auto my-12 leading-[1] md:text-[4rem] text-center">
          Complete GST Notice Handling Service
        </h1>

        <div className="border-t border-black/20 pt-10 sm:pt-28">
          <div className="flex flex-col sm:flex-row gap-8 mt-10">
            <figure className="h-20 w-20 min-w-[80px]">
              <img
                src="/images/data-enrichment.svg"
                className="w-full object-contain"
                alt=""
              />
            </figure>

            <div className="sm:w-[500px] mt-4 sm:mt-0">
              <h2 className="text-3xl font-semibold">
                Immediate Notice Analysis (Within 24 Hours)
              </h2>
            </div>

            <div className="flex-1 mt-4 sm:mt-0 sm:pl-7">
              <p className="text-base text-gray-700">
                We provide a free 24-hour GST notice analysis report detailing
                risks…
              </p>

              <ul className="mt-8 border-t border-black/20">
                {itemsInvoice.map((item, i) => (
                  <li key={i} className="border-b border-black/20">
                    <button
                      onClick={() =>
                        setOpenInvoice(openInvoice === i ? null : i)
                      }
                      className="w-full flex justify-between items-center py-5 text-left group"
                    >
                      <span className="font-bold text-[16px] group-hover:opacity-60 transition">
                        {item.title}
                      </span>

                      <svg
                        className={`w-3 h-3 transition-transform ${
                          openInvoice === i ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 11 13"
                      >
                        <path d="M4.3 8.8 1.5 6.5.3 8l5 4.3 4.7-4.2-1.3-1.5-2.4 2.2V.9h-2v7.9Z" />
                      </svg>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openInvoice === i ? "max-h-[200px] pb-5" : "max-h-0"
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

      {/* -----------------------------
          SECTION 2 — PURCHASE
      ------------------------------ */}
      <section className="relative max-w-[1200px] px-4 mx-auto mb-16 sm:mb-28">
        <div className="border-t border-black/20 pt-10 sm:pt-28">
          <div className="flex flex-col sm:flex-row gap-8 mt-10">
            <figure className="h-20 w-20 min-w-[80px]">
              <img src="/images/workflow-processing.svg" className="w-full" />
            </figure>

            <div className="sm:w-[500px] mt-4">
              <h2 className="text-3xl font-semibold">
                Document Collection & Reconciliation (Day 2-5)
              </h2>
            </div>

            <div className="flex-1 mt-4 sm:pl-7">
              <p className="text-base text-gray-700">
                We collect all relevant GST records…
              </p>

              <ul className="mt-8 border-t border-black/20">
                {itemsPurchase.map((item, i) => (
                  <li key={i} className="border-b border-black/20">
                    <button
                      onClick={() =>
                        setOpenPurchase(openPurchase === i ? null : i)
                      }
                      className="w-full flex justify-between items-center py-5 text-left group"
                    >
                      <span className="font-bold">{item.title}</span>

                      <svg
                        className={`w-3 h-3 transition-transform ${
                          openPurchase === i ? "rotate-180" : ""
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

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openPurchase === i ? "max-h-[200px] pb-5" : "max-h-0"
                      }`}
                    >
                      <p className="text-sm text-gray-600">
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

      {/* -----------------------------
          SECTION 3 — PENALTIES
      ------------------------------ */}
      <section className="relative max-w-[1200px] px-4 mx-auto mb-16 sm:mb-28">
        <div className="border-t border-black/20 pt-10 sm:pt-28">
          <div className="flex flex-col sm:flex-row gap-8 mt-10">
            <figure className="h-20 w-20 min-w-[80px]">
              <img
                src="/images/data-conversion-to-digitized-formats.svg"
                className="w-full"
              />
            </figure>

            <div className="sm:w-[500px] mt-4">
              <h2 className="text-3xl font-semibold">
                Legal Research & Reply Drafting (Day 6–10)
              </h2>
            </div>

            <div className="flex-1 mt-4 sm:pl-7">
              <p className="text-base text-gray-700">
                We prepare a strong, legally-backed GST notice reply…
              </p>

              <ul className="mt-8 border-t border-black/20">
                {itemsPenalties.map((item, i) => (
                  <li key={i} className="border-b border-black/20">
                    <button
                      onClick={() =>
                        setOpenPenalties(openPenalties === i ? null : i)
                      }
                      className="w-full flex justify-between items-center py-5 group"
                    >
                      <span className="font-bold">{item.title}</span>

                      <svg
                        className={`w-3 h-3 transition-transform ${
                          openPenalties === i ? "rotate-180" : ""
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

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openPenalties === i ? "max-h-[200px] pb-5" : "max-h-0"
                      }`}
                    >
                      <p className="text-sm text-gray-600">
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

      {/* -----------------------------
          SECTION 4 — TAX
      ------------------------------ */}
      <section className="relative max-w-[1200px] px-4 mx-auto mb-16 sm:mb-28">
        <div className="border-t border-black/20 pt-10 sm:pt-28">
          <div className="flex flex-col sm:flex-row gap-8 mt-10">
            <figure className="h-20 w-20 min-w-[80px]">
              <img
                src="/images/data-analysis-and-reporting.svg"
                className="w-full"
              />
            </figure>

            <div className="sm:w-[500px] mt-4">
              <h2 className="text-3xl font-semibold">
                Submission & Personal Hearing (Day 11–14)
              </h2>
            </div>

            <div className="flex-1 mt-4 sm:pl-7">
              <p className="text-base text-gray-700">
                We handle complete submission…
              </p>

              <ul className="mt-8 border-t border-black/20">
                {itemsTax.map((item, i) => (
                  <li key={i} className="border-b border-black/20">
                    <button
                      onClick={() => setOpenTax(openTax === i ? null : i)}
                      className="w-full flex justify-between items-center py-5"
                    >
                      <span className="font-bold">{item.title}</span>

                      <svg
                        className={`w-3 h-3 transition-transform ${
                          openTax === i ? "rotate-180" : ""
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

                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        openTax === i ? "max-h-[200px] pb-5" : "max-h-0"
                      }`}
                    >
                      <p className="text-sm text-gray-600">
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

      {/* -----------------------------
          SECTION 5 — AMENDMENT
      ------------------------------ */}
      <section className="relative max-w-[1200px] px-4 mx-auto mb-16 sm:mb-28">
        <div className="border-t border-black/20 pt-10 sm:pt-28">
          <div className="flex flex-col sm:flex-row gap-8 mt-10">
            <figure className="h-20 w-20 min-w-[80px]">
              <img src="/images/data-enrichment.svg" className="w-full" />
            </figure>

            <div className="sm:w-[500px] mt-4">
              <h2 className="text-3xl font-semibold">
                Post-Hearing Follow-up & Order Defense (Day 15–45)
              </h2>
            </div>

            <div className="flex-1 mt-4 sm:pl-7">
              <p className="text-base text-gray-700">
                After the hearing, we track your case…
              </p>

              <ul className="mt-8 border-t border-black/20">
                {itemsAmendment.map((item, i) => (
                  <li key={i} className="border-b border-black/20">
                    <button
                      onClick={() =>
                        setOpenAmendment(openAmendment === i ? null : i)
                      }
                      className="w-full flex justify-between items-center py-5"
                    >
                      <span className="font-bold">{item.title}</span>

                      <svg
                        className={`w-3 h-3 transition-transform ${
                          openAmendment === i ? "rotate-180" : ""
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

                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        openAmendment === i ? "max-h-[200px] pb-5" : "max-h-0"
                      }`}
                    >
                      <p className="text-sm text-gray-600">
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

      {/* -----------------------------
          SECTION 6 — ANNUAL
      ------------------------------ */}
      <section className="relative max-w-[1200px] px-4 mx-auto mb-16 sm:mb-28">
        <div className="border-t border-black/20 pt-10 sm:pt-28">
          <div className="flex flex-col sm:flex-row gap-8 mt-10">
            <figure className="h-20 w-20 min-w-[80px]">
              <img src="/images/workflow-processing.svg" className="w-full" />
            </figure>

            <div className="sm:w-[500px] mt-4">
              <h2 className="text-3xl font-semibold">Appeal & Litigation</h2>
            </div>

            <div className="flex-1 mt-4 sm:pl-7">
              <p className="text-base text-gray-700">
                We manage the complete GST appeals journey…
              </p>

              <ul className="mt-8 border-t border-black/20">
                {itemsAnnual.map((item, i) => (
                  <li key={i} className="border-b border-black/20">
                    <button
                      onClick={() => setOpenAnnual(openAnnual === i ? null : i)}
                      className="w-full flex justify-between items-center py-5"
                    >
                      <span className="font-bold">{item.title}</span>

                      <svg
                        className={`w-3 h-3 transition-transform ${
                          openAnnual === i ? "rotate-180" : ""
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

                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        openAnnual === i ? "max-h-[200px] pb-5" : "max-h-0"
                      }`}
                    >
                      <p className="text-sm text-gray-600">
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
