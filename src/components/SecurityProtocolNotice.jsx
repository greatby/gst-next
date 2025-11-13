"use client";

export default function SecurityProtocolsNotice() {
  const bullets = [
    "If GST evasion over ₹1 crore is alleged, the department can initiate arrest and criminal prosecution with imprisonment up to 5 years. Our senior GST lawyer handles anticipatory bail, court representation, and full criminal defense to protect you at every stage.",
    "When GST officers conduct a raid and seize goods or documents, your business faces major disruption and the risk of incriminating statements. We deploy a lawyer within 2 hours to protect your rights during the search and handle all post-search legal remedies, including writ petitions if the raid is illegal.",
    "When a show cause notice raises a tax demand exceeding ₹10 lakhs, the financial risk can quickly escalate to ₹20–50 lakhs with penalties and interest. Our CA + GST lawyer team prepares a solid legal reply, represents you in hearings, and negotiates aggressively to minimize or eliminate penalties.",
    "When a GST order is arbitrary or procedurally flawed, it can set a dangerous precedent for your business and requires immediate judicial intervention. We file a writ petition in the High Court through senior GST litigation counsel, handling all coordination and legal support end-to-end.",
    "When the appellate authority’s order goes against you, a further appeal to the GST Tribunal becomes the final opportunity before approaching the High Court. Our empaneled GST lawyers handle full representation, prepare all appeal documentation, and manage the entire Tribunal process end-to-end.",
  ];

  return (
    <section className="relative bg-[#f8efff]">
      <div className="max-w-[1300px] mx-auto px-6 sm:px-10 py-16 sm:py-24">
        {/* Heading + description center */}
        <div className="hidden sm:flex flex-col gap-6 max-w-[750px] mx-auto text-center">
          <h2 className="text-[42px] sm:text-[48px] font-light leading-tight">
            Legal Representation for GST Disputes
          </h2>

          <p className="text-[16px] text-black leading-relaxed">
          Complex cases need legal expertise. We have GST lawyers on retainer.
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
