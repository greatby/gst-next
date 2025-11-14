"use client";

export default function SecurityProtocolsRefund() {
  const bullets = [
    "Refunds are often denied due to incomplete or improperly uploaded documents, leading to delays of 30–60 days. Our rigorous documentation checklist, format validation, and quality review ensure your application is accepted on the first submission.",
    "A mismatch between invoice dates or numbers in GSTR filings and shipping bills often leads to partial refund rejection. Our team identifies these discrepancies upfront and fixes them through amendments or structured filing, catching 98% of mismatches before submission.",
    "A missing BRC leads to immediate refund rejection because the department can’t verify export payment realization. We prevent this by coordinating with your bank for BRC/FIRC issuance and advising the right strategy for delayed or partial payments to ensure smooth refund approval.",
    "Time-barred refunds occur when businesses delay filing beyond the 2-year limit, leading to permanent rejection. Our proactive filing schedule, deadline monitoring, and quarterly submissions ensure your claims are always filed well within time.",
    "A common rejection occurs when ITC blocked under Section 17(5) is wrongly included in the refund claim. Our meticulous ITC screening ensures only eligible credits are considered, resulting in clean calculations that the department readily accepts.",
    "A common rejection occurs when exempt supplies are wrongly added to total turnover, distorting the refund formula. Our team applies the CGST Rules correctly, segregates turnover accurately, and performs senior-level reviews—achieving 98% formula accuracy.",
    "A major rejection happens when suppliers are flagged as non-existent or fraudulent, leading to ITC reversal and refund loss. Our due-diligence process—GSTIN validation, risk checks, vendor assessment, and proof of genuine transactions—protects you from such cases.",
    "A mismatch between your refund calculation and the department’s working can lead to reduced sanction amounts. Our conservative, rule-based approach and pre-filing validation ensure a 94% match rate with departmental calculations, minimizing reductions."
];

  return (
    <section className="relative bg-[#f8efff]">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10 py-16 sm:py-24">
        {/* Heading + description center */}
        <div className="hidden sm:flex flex-col gap-6 max-w-[750px] mx-auto text-center">
          <h2 className="text-[42px] sm:text-[48px] font-light leading-tight">
            Common GST Refund Rejection Reasons
          </h2>

          <p className="text-[16px] text-black leading-relaxed">
          Most refund rejections are avoidable. We prevent 90% of these issues.
          </p>
        </div>

        {/* MOBILE heading (below canvas image on mobile) */}
        <div className="flex sm:hidden flex-col gap-6 max-w-[750px] mx-auto text-center mt-6">
          <h2 className="text-[32px] font-light leading-tight">
               Who Needs GST Return Filing Services?
          </h2>
          <p className="text-[15px] text-black leading-relaxed">
            Any business that wants GST compliance without the headache.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 items-center mt-16">
          {/* Canvas image on RIGHT (desktop) */}
          <div className="col-span-1 order-1 sm:order-2 relative sm:pl-[90px]">
            <img
              src="/images/security.png"
              alt="security illustration"
              className="w-full h-auto pointer-events-none select-none"
            />
          </div>

          {/* Bullet list on LEFT */}
          <div className="col-span-1 order-2 sm:order-1 mt-10 sm:mt-0">
            <ul>
              {bullets.map((b, i) => (
                <li
                  key={i}
                  className="relative text-[15px] py-4 border-t border-[#CFCFCA] last:border-b"
                >
                  <div className="relative flex items-center gap-4 pl-10">
                    <svg
                      viewBox="0 0 13 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-black shrink-0"
                    >
                      <path
                        d="M0.974659 10.3971L5.26459 14.7594L11.5464 3.8789"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-[15px] leading-tight">{b}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
