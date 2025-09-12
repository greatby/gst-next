"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiArrowLeft } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "I already use Tally/Zoho for my GST. Why do I need your service?",
      answer: `Your software is
the machine; we are the operator. Tally can't reconcile mismatches with vendors, chase them
down, or make strategic decisions on complex tax liabilities. Our service provides the expert
human layer that makes your existing technology work flawlessly, saving you countless hours
and mitigating all risks.`,
    },
    {
      question:
        "What is the benefit of your team having a system-level understanding of GST?",
      answer: `Our
experts, many of whom have been involved in the GST system from its inception, have a deep
understanding of its logic, common errors, and troubleshooting methods. This allows for faster
problem resolution, more accurate reconciliation, and a stronger defense in the event of an audit.`,
    },
    {
      question: "What are the most common GST penalties you protect me from?",
      answer: `We protect you from
"GST penalties for late filing" (₹20-50 per day), "18% interest on late payment," "ITC
disallowances" due to supplier mismatches, and the fines associated with incorrect "einvoicing"
or "e-way bill" generation.`,
    },
    {
      question:
        "My CA handles my GST. Why should I consider Workforce Limited?",
      answer: `Many CAs are
focused on advisory and traditional tax work. We specialize in the operational intricacies of GST
compliance—the data reconciliation, the tedious filing, and the technology management that CAs
often find cumbersome. We work in tandem with your CA, providing the operational excellence
they may not offer.`,
    },
    {
      question: "Do you handle GST for businesses in multiple states?",
      answer: `Yes, our pan-India operational
footprint and deep expertise in GST allow us to manage compliance seamlessly for businesses
with multi-state operations, ensuring consistency and accuracy across all your GSTINs.`,
    },
     {
    question: "What is GST registration and how do I apply for it?",
    answer:
      "GST registration is the process of obtaining a unique GSTIN to collect and remit GST. You can apply online at gst.gov.in by submitting business details, PAN, and supporting documents. Registration is mandatory once your turnover crosses the prescribed threshold.",
  },
  {
    question: "What are the GST rates and slabs for products and services?",
    answer:
      "GST has four primary slabs—5%, 12%, 18%, and 28%. The rate depends on the product or service category. Updated rate lists and changes are published after every GST Council meeting on the official portal.",
  },
  {
    question: "How do I file GST returns and what are the key return types?",
    answer:
      "Common returns include GSTR-1 (outward supplies) and GSTR-3B (summary return). File them online by uploading sales/purchase data and paying any tax due. Due dates vary depending on the return type and your business turnover.",
  },
  {
    question: "What is Input Tax Credit (ITC) and how do I claim it?",
    answer:
      "ITC lets you offset the GST you paid on purchases against the GST you collect on sales. To claim, ensure suppliers have filed accurate returns, maintain invoices, and reconcile your purchase data with GSTR-2B.",
  },
  {
    question: "What is an e-way bill and when is it required?",
    answer:
      "An e-way bill is a digital permit for transporting goods worth more than the specified limit (usually ₹50,000). Generate it on the e-way bill portal before movement to avoid penalties.",
  },
  {
    question: "How do I use the GST portal and troubleshoot login/issues?",
    answer:
      "Visit gst.gov.in to register, file returns, pay tax, and track ITC. For login errors, clear browser cache, use an updated browser, or raise a ticket through the helpdesk section on the portal.",
  },
  {
    question: "What are HSN and SAC codes and how do I find the right one?",
    answer:
      "HSN codes classify goods, and SAC codes classify services for correct GST rate application. You can find the appropriate code on the CBIC website or the GST portal’s HSN/SAC lookup.",
  },
  {
    question: "Where can I find a GST calculator to compute tax quickly?",
    answer:
      "Use the free GST calculator on gst.gov.in or trusted tax websites. Enter the product value and applicable GST rate to instantly calculate tax and total invoice amount.",
  },
  {
    question: "What is the Reverse Charge Mechanism (RCM) and when does it apply?",
    answer:
      "Under RCM, the recipient of goods or services pays the GST instead of the supplier. It applies to specified goods/services like legal fees or imports of services.",
  },
  {
    question: "What is the GST Composition Scheme and who can opt for it?",
    answer:
      "The Composition Scheme allows small businesses with turnover up to ₹1.5 crore (₹75 lakh in some states) to pay tax at a lower fixed rate and file simplified returns. No ITC can be claimed under this scheme.",
  },
  {
    question: "How can I verify a GSTIN (GST Identification Number)?",
    answer:
      "Go to gst.gov.in → ‘Search Taxpayer’ and enter the GSTIN. The portal will display the business name and registration status for verification.",
  },
  {
    question: "How does GST apply to exports and what is the refund process?",
    answer:
      "Exports are zero-rated. You can export without paying GST using a Letter of Undertaking (LUT) or pay IGST and later claim a refund through the GST portal.",
  },
  {
    question: "How is GST charged on imports and how is IGST calculated?",
    answer:
      "Imports attract IGST, levied on the total value including customs duty. The IGST paid can usually be claimed as ITC, subject to eligibility and proper documentation.",
  },
  {
    question: "What should I know about GST audit and assessment procedures?",
    answer:
      "Businesses exceeding the audit turnover limit or selected by authorities may face a GST audit. Keep reconciled records, invoices, and returns ready to ensure compliance and avoid penalties.",
  },
  {
    question: "Why are GST Council meetings important and where can I find updates?",
    answer:
      "The GST Council decides on tax rates, exemptions, and policy changes. Updates and press releases are published after every meeting on the CBIC and GST Council websites.",
  },
  {
    question: "How does GST apply to e-commerce and marketplace operators?",
    answer:
      "E-commerce operators must collect TCS (Tax Collected at Source) on sales and remit it to the government. Sellers must also register and comply with regular GST return filing.",
  },
  {
    question: "How do I claim a GST refund and check its status?",
    answer:
      "Log in to gst.gov.in, fill Form RFD-01 with required documents, and track the status under the ‘Refunds’ tab. Refunds apply for exports, excess tax paid, or ITC accumulation.",
  },
  {
    question: "What are the GST rules for real estate and construction services?",
    answer:
      "GST applies at 1% for affordable housing and 5% for other residential projects (without ITC). Construction services for commercial property attract 18%. Check current notifications for updates.",
  },
  {
    question: "What does GST compliance involve and how can businesses stay compliant?",
    answer:
      "Compliance includes timely registration, accurate invoicing, regular return filing, ITC reconciliation, and prompt tax payment. Missing deadlines may attract late fees and interest.",
  },
  {
    question: "Where can I find the latest GST news, updates and changes in law?",
    answer:
      "Follow the CBIC, GST Council websites, or reputable tax news portals. Subscribing to official newsletters or professional tax bulletins ensures you never miss key changes.",
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
      <section className="w-full divide-y max-w-2xl divide-gray-200 rounded-xl">
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
