"use client";

export default function SecurityProtocolRegistration () {
  const bullets = [
    "GST registration is mandatory if your turnover exceeds ₹40L (goods) or ₹20L (services) in a financial year. The limit is based on aggregate all-India turnover across all your businesses.",
    "GST registration is mandatory for any interstate supply, even if the turnover is just ₹1. It applies to both goods and services, for B2B and B2C transactions, without any threshold exemption.",
    "GST registration is mandatory for all e-commerce sellers on platforms like Amazon, Flipkart, and Meesho, regardless of turnover. Even ₹10,000/month sales require GST, and marketplaces will collect TCS on your behalf.",
    "Certain business categories must take GST registration regardless of turnover, including temporary/casual sellers, non-residents, agents, ISDs, e-commerce operators, and suppliers covered under reverse charge or marketplace sales.",
    "GST registration is mandatory for entities deducting TDS or collecting TCS, including government departments and e-commerce operators, even if no actual supply is made.",
  ];

  return (
    <section className="relative bg-[#f8efff]">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10 py-16 sm:py-24">
        {/* Heading + description center */}
        <div className="hidden sm:flex flex-col gap-6 max-w-[750px] mx-auto text-center">
          <h2 className="text-[42px] sm:text-[48px] font-light leading-tight">
            Who needs GST registration?
          </h2>

          <p className="text-[16px] text-black leading-relaxed">
         Check if GST registration is mandatory or beneficial for you.
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
