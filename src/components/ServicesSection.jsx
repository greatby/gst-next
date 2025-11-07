"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    {
      title: "Flawless Data Reconciliation & ITC Maximization",
      desc: "Maximized ITC utilization, a healthier cash flow, and zero time wasted on manual reconciliation.",
      color: "text-purple-400",
      bg: "bg-[#32001A]",
      links: [
        { text: "AI Data Extraction" },
        { text: "AI Assisted Data Processing" },
        { text: "AI & ML Optimization" },
      ],
      image: "/images/Ai.PNG", // Replace with actual path
    },
    {
      title: "Flawless Return Filing & Audit-Proof Documentation",
      desc: "Guaranteed on-time GST filings with zero late fees or interest, plus full audit readiness backed by expert professionals.",
      color: "text-[#c7e410]",
      bg: "bg-[#32001A]",
     
      image: "/images/data.PNG", // Replace with actual path
    },
    {
      title: "Unparalleled Expertise that Software Can't Replicate",
      desc: "Unmatched GST expertise that keeps your business compliant and strategically ready for any GST challenge.",
      color: "text-[#ec5b29]",
      bg: "bg-[#32001A]",
      
      image: "/images/customer.PNG", // Replace with actual path
    },
  ];

  return (
    <section className="bg-[#F8EBFF] py-20 px-6 md:px-16 lg:px-28 text-center">
      <h2 className="text-2xl max-w-xl mx-auto font-norm md:text-3xl font-light text-black mb-8 leading-[1.175]">
       Your Solution: UNIGST.COM, The Ultimate GST Operator
      </h2>
      <p className="text-gray-800 text-lg mb-8">Our service is not just about using software; it's about providing the unparalleled expertise that makes your software work perfectly. We are the architects and the operators of flawless GST compliance</p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white flex flex-col justify-between rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all"
          >
            <div className="p-8 text-center">
              <div className="w-full flex justify-center mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-32 object-contain"
                />
              </div>
              <h3 className="text-[12px] uppercase font-normal text-black tracking-[1.3]">
                {service.title}
              </h3>
              <p className="text-black font-normal tracking-[1.3] text-sm mt-3">{service.desc}</p>
            </div>

            {/* Bottom links */}
            {/* <div className={`${service.bg} px-8 py-6 text-left`}>
              <ul className={`space-y-3 ${service.color}`}>
                {service.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="flex items-center gap-3 group text-[12px] hover:underline underline-offset-2 transition-all"
                    >
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                      <span>{link.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}
