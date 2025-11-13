"use client";
import React from "react";

const values = [
  {
    title: "Automated System Alerts",
    description:
      "Automated GST systems compare your sales and purchase data every month and flag mismatches between GSTR-1, GSTR-3B, and suppliers’ filings. Most triggers come from incorrect invoice values, unreported amendments, or claiming ITC before suppliers file GSTR-1. Preventing these notices requires monthly reconciliation and filing after supplier updates. With our monthly reconciliation service, 90% of automated GST notices are avoided.",
    image: "/images/Layer_1.png",
  },
  {
    title: "High ITC Claims (Reverse Charge)",
    description:
      "The GST system closely monitors unusually high ITC claims, especially under reverse charge for imports of services, GTA, or professional fees. Notices are typically triggered when ITC exceeds 80% of tax liability, reverse charge credits lack documentation, or ineligible expenses are claimed. Maintaining proper records, avoiding blocked ITC, and following an eligibility checklist prevents most issues. Our pre-filing ITC audit ensures clean, compliant ITC claims and prevents related notices.",
    image: "/images/Layer_1-1.png",
  },
  {
    title: "Export Without Payment of Tax (LUT)",
    description:
      "GST issues notices for export-related non-compliance when LUT is not filed or has expired, or when export payments aren’t received within one year. Notices are commonly triggered by missing shipping bill details, delayed foreign payments, or exporting without a valid LUT. Filing/renewing LUT on time, updating export documents promptly, and tracking remittances help avoid these issues. Our export compliance monitoring ensures timely filings and prevents export-related GST notices.",
    image: "/images/Layer_1-2.png",
  },
  {
    title: "Vendor Non-Compliance",
    description:
      "ITC reversal happens when you claim credit based on a vendor invoice but the vendor fails to file GSTR-1 or pay the tax. This is common with irregular filers, fake vendors, or suppliers whose GST registrations get cancelled. Preventing reversals requires checking vendor GST status, filing behaviour, and invoice validity every month. Our vendor compliance monitoring ensures only eligible ITC is claimed and prevents auto-reversals.",
    image: "/images/Layer_1-1.png",
  },
   {
    title: "Audit Selection (Risk-Based)",
    description:
      "GST audits are triggered based on risk parameters such as high turnover, large refund claims, export-heavy operations, new registrations, or past compliance issues. Businesses with turnover above ₹5 crores or ongoing refunds face higher audit probability. Maintaining timely filings, clean records, and proper documentation helps prevent audit objections. Our pre-audit preparation ensures you stay audit-ready and minimizes departmental issues.",
    image: "/images/Layer_1.png",
  },
   {
    title: "Non-Filing or Delayed Filing",
    description:
      "GST automatically issues non-filing notices when returns aren’t filed on time, leading to late fees and potential cancellation for repeated defaults. Most cases happen due to missed deadlines, portal issues, or assuming a return was filed when it wasn't. Setting up reminders, filing early, and verifying submissions help prevent this. Our automated filing system ensures you never miss a GST return deadline",
    image: "/images/Layer_1-1.png",
  },
 
   {
    title: "Intelligence & Complaints",
    description:
      "GST investigations often start from intelligence inputs, competitor complaints, or customer grievances. Businesses can get flagged due to dealing with suspicious vendors, industry-wide probes, or even complaints from ex-employees. Preventing such notices requires strong vendor due diligence, transparent documentation, and clean operational practices. Our due-diligence support ensures you avoid risky entities and stay clear of investigation triggers.",
    image: "/images/Layer_1-1.png",
  },
   {
    title: "Genuine Errors (Unintentional)",
    description:
      "Most GST notices arise from simple filing mistakes—wrong data entry, misunderstanding GST rules, or not updating processes after rule changes. Common errors include incorrect place of supply, wrong HSN codes, missed reverse charge entries, and unreported amendments. Preventing these requires expert review, trained staff, and monthly reconciliations. Our professional GST filing service ensures 95% of errors are caught before filing.",
    image: "/images/Layer_1-2.png",
  },
];

const CoreValuesNotice = () => {
  return (
    <section className="relative flex flex-col items-center text-white max-w-[90rem] mx-auto px-4 py-16">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center max-w-4xl mx-auto">
        Common Reasons for GST Notices
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

export default CoreValuesNotice;
