"use client";

import { useState } from "react";

const itemsInvoice = [
  {
    title: "Problem",
    description:
      "GST applications often get rejected due to outdated or unclear address proofs, name mismatches, illegible documents, or address formats not matching the GST system. These small errors can delay approval if not corrected before filing.",
  },
  {
    title: "Our Solution",
    description:
      "We pre-verify every document to ensure compliance with GST portal standards—checking address formats, refreshing outdated proofs, and correcting name mismatches across records. By handling document fixes and standardization before submission, we eliminate common rejection reasons and smooth the approval process.",
  },
  
];

const itemsPurchase = [
  {
    title: "Problem",
    description:
      "Bank proof errors like missing business name on account/cheque, incorrect IFSC, or outdated statements often cause GST rejections.",
  },
  {
    title: "Our Solution",
    description:
      "We validate bank details, ensure exact name match with PAN, arrange bank verification letters if required, and use updated statements to guarantee error-free GST registration.",
  },
 
];

const itemsPenalties = [
  {
    title: "Problem",
    description:
      "Name or DOB mismatches and unlinked PAN-Aadhaar lead to GST rejections, so we verify, correct discrepancies, and ensure PAN-Aadhaar linking and mobile updates before filing.",
  },
  {
    title: "Our Solution",
    description: "We verify PAN-Aadhaar linking, ensure exact name match, assist with linking if needed, and confirm Aadhaar mobile details to prevent GST application rejections.",
  },
  
];

const itemsTax = [
  {
    title: "Problem",
    description:
      "GST applications get rejected due to invalid or mismatched business proof, so we verify licenses, match addresses, and ensure proper establishment documents before filing.",
  },
  {
    title: "Our Solution",
    description:
      "We validate certificate status, match addresses, arrange landlord NOC/affidavit, and prepare clear business proof to ensure zero rejections.",
  },
];

const itemsAmendment = [
  {
    title: "Problem",
    description:
      "GST applications fail due to missing or incorrect business details like HSN/SAC, partner info, or signatory, so we structure activities clearly, assign proper roles, and finalize all codes before filing.",
  },
  {
    title: "Our Solution",
    description:
      "We verify every detail before filing, add accurate business codes, collect partner/director info, and set clear authorization to ensure error-free GST registration.",
  },
  
];

const itemsAnnual = [
  {
    title: "Problem",
    description:
      "DSC errors like expiry, wrong owner, or portal mismatch can block GST submission, so we validate and register the correct DSC, renew if needed, and ensure smooth digital signing.",
  },
  {
    title: "Our Solution",
    description:
      "We verify DSC validity, register the correct authorized signer on the portal, and manage retries to ensure smooth, error-free GST submission.",
  },
 
];



export default function RegistrationIssuesSolution() {
  const [open, setOpen] = useState(null);

  return (
    <>
      <section className="relative max-w-[1200px] px-4 mx-auto mb-16 sm:mb-28">
        <h1 className="text-2xl max-w-3xl font-norm font-normal mx-auto my-12 leading-[1] md:text-[4rem] text-center">
          Why GST Applications Get Rejected?
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
                Address Proof Issues
              </h2>
            </div>

            {/* DESCRIPTION + ACCORDION */}
            <div className="flex-1 mt-4 sm:mt-0 sm:pl-7">
              <p className="text-base text-gray-700">
               We eliminate address-proof rejections by verifying document validity, fixing name and format mismatches, and ensuring GST-compliant, clear, up-to-date submissions before filing.
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
                Bank Account Problems
              </h2>
            </div>

            {/* DESCRIPTION + ACCORDION */}
            <div className="flex-1 mt-4 sm:mt-0 sm:pl-7">
              <p className="text-base text-gray-700">
                Incorrect or outdated bank details cause GST rejections, so we verify records, match names with PAN, obtain bank verification if needed, and use updated statements for error-free approval.
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
                PAN-Aadhaar Mismatch
              </h2>
            </div>

            {/* DESCRIPTION + ACCORDION */}
            <div className="flex-1 mt-4 sm:mt-0 sm:pl-7">
              <p className="text-base text-gray-700">
              PAN-Aadhaar mismatches or unlinked records can reject GST applications.
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
                Business Proof Issues
              </h2>
            </div>

            {/* DESCRIPTION + ACCORDION */}
            <div className="flex-1 mt-4 sm:mt-0 sm:pl-7">
              <p className="text-base text-gray-700">
                Business proof mismatches or expired documents can block GST approval.
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
               Incomplete Application
              </h2>
            </div>

            {/* DESCRIPTION + ACCORDION */}
            <div className="flex-1 mt-4 sm:mt-0 sm:pl-7">
              <p className="text-base text-gray-700">
               Missing business details like HSN/SAC, partner info, or authorized signatory can reject GST applications.
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
                Digital Signature Issues
              </h2>
            </div>

            {/* DESCRIPTION + ACCORDION */}
            <div className="flex-1 mt-4 sm:mt-0 sm:pl-7">
              <p className="text-base text-gray-700">
                DSC failures like expiry, incorrect authorization, or portal errors can block GST filing.
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
      
    </>
  );
}
