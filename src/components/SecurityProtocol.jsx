"use client";

export default function SecurityProtocols() {
  const bullets = [
    "10-500 invoices per month. Don't have time for GST paperwork. Need expert handling.",
    "Multiple marketplaces. High transaction volume. Complex B2C and B2B mix. Need automation.",
    "Consulting, IT, professional services. Interstate supplies. Reverse charge mechanism. Expert guidance needed.",
    "Purchase and sales both. Input tax credit reconciliation critical. Inventory management integrated.",
    "Missed previous deadlines. Pending returns. Late fees accumulated. Need cleanup + ongoing filing.",
    "Registered in multiple states. Different GSTIN management. Centralized filing dashboard needed.",
  ];

  return (
    <section className="relative bg-[#f8efff]">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10 py-16 sm:py-24">
        {/* Heading + description center */}
        <div className="hidden sm:flex flex-col gap-6 max-w-[750px] mx-auto text-center">
          <h2 className="text-[42px] sm:text-[48px] font-light leading-tight">
            Who Needs GST Return Filing Services?
          </h2>

          <p className="text-[16px] text-black leading-relaxed">
          Any business that wants GST compliance without the headache.
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

            {/* CTA button */}
            {/* <a
              href="/faq"
              className="inline-flex items-center gap-3 h-[50px] px-6 rounded-[1.5rem] bg-[#4B001F] text-white mt-8 transition-colors hover:bg-yellow-300 hover:text-black"
            >
              FAQs
              <span className="w-[30px] h-[30px] rounded-full overflow-hidden bg-[#F2FF4D] text-black flex items-center justify-center">
                →
              </span>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
