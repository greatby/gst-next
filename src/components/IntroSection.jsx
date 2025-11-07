"use client";
import React from "react";

export default function IntroSection({data}) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#32001A] text-white px-6 md:px-20 py-16 md:py-24 relative overflow-hidden">
      {/* LEFT IMAGE PLACEHOLDER */}
      <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
       <img src="/images/infoSectionImg.PNG" alt="" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full md:w-1/2 space-y-6 relative">
        {/* Floating badge */}
        <div className="absolute top-[-110px] bg-[#c7e410] text-black text-sm font-medium rounded-full w-28 h-28 flex items-center justify-center rotate-[45deg]">
          <p className="text-center leading-tight">
            UNIGST.com
          </p>
        </div>

        <h2 className="text-2xl text-white/90 font-norm md:text-4xl font-normal leading-[1.175]">
         {data?.title}
        </h2>

        <p className="text-sm  leading-relaxed text-gray-200">
          {data?.description}
        </p>

        <p className="text-sm  text-gray-300">
          {data?.subDesc}
        </p>
      </div>
    </section>
  );
}
