"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TiTick } from "react-icons/ti";

gsap.registerPlugin(ScrollTrigger);

export default function StackedReveal() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  // Helper: set ref
  const setCardRef = (el, i) => {
    cardRefs.current[i] = el;
  };

  // useLayoutEffect(() => {
  //   const container = containerRef.current;
  //   const cards = cardRefs.current.filter(Boolean);
  //   if (!container || cards.length === 0) return;

  //   // Clear previous ScrollTriggers if any
  //   ScrollTrigger.getAll().forEach((t) => {
  //     if (t.vars && t.vars.trigger === container) t.kill();
  //   });

  //   // Create timeline
  //   const tl = gsap.timeline({
  //     defaults: { ease: "power1.out" },
  //   });

  //   // Initial state: make only first visible, others hidden below
  //   gsap.set(cards, {
  //     autoAlpha: 0,
  //     yPercent: 6,
  //     scale: 0.98,
  //   });
  //   gsap.set(cards[0], {
  //     autoAlpha: 1,
  //     yPercent: 0,
  //     scale: 1,
  //   });

  //   // For each card, hold visible, then hide it while showing next
  //   const hold = 0.6; // seconds to hold visible
  //   const hideDuration = 0.8; // seconds to hide current and show next
  //   cards.forEach((card, i) => {
  //     // Ensure the current card is visible at start of its block
  //     tl.to(card, { autoAlpha: 1, yPercent: 0, scale: 1, duration: 0.3 });

  //     // If there's a next card, animate current out and next in together
  //     const next = cards[i + 1];
  //     if (next) {
  //       // Slight pause while visible
  //       tl.to({}, { duration: hold });

  //       // Animate current up/fade and next from below
  //       tl.to(
  //         card,
  //         { autoAlpha: 0, yPercent: -18, scale: 0.98, duration: hideDuration },
  //         "<"
  //       );
  //       tl.fromTo(
  //         next,
  //         { autoAlpha: 0, yPercent: 6, scale: 0.98 },
  //         { autoAlpha: 1, yPercent: 0, scale: 1, duration: hideDuration },
  //         "<"
  //       );
  //     } else {
  //       // last card: hold a bit
  //       tl.to({}, { duration: hold });
  //     }
  //   });

  //   // ScrollTrigger: pin the container and scrub through the timeline
  //   const totalDuration = (hold + hideDuration) * (cards.length - 1) + 0.6;
  //   // Convert duration (seconds) to scroll length in pixels (approx)
  //   const pinSpacing = Math.max(1000, Math.round(totalDuration * 900)); // tweak this multiplier for longer/shorter scroll

  //   const st = ScrollTrigger.create({
  //     animation: tl,
  //     trigger: container,
  //     start: "top top",
  //     end: `+=${pinSpacing}`,
  //     scrub: 1,
  //     pin: true,
  //     anticipatePin: 1,
  //   });

  //   // Cleanup on unmount
  //   return () => {
  //     tl.kill();
  //     st.kill();
  //     ScrollTrigger.refresh();
  //   };
  // }, []);

  // Example card content - replace text/images as required

  useLayoutEffect(() => {
    const container = containerRef.current;
    const cards = cardRefs.current.filter(Boolean);
    if (!container || cards.length === 0) return;

    ScrollTrigger.getAll().forEach((t) => {
      if (t.vars && t.vars.trigger === container) t.kill();
    });

    // ✅ All cards start below (hidden)
    gsap.set(cards, {
      yPercent: 100,
      autoAlpha: 1,
      zIndex: 0,
    });

    // ✅ First card starts visible on top
    gsap.set(cards[0], {
      yPercent: 0,
      zIndex: 10,
    });

    const tl = gsap.timeline({
      defaults: { ease: "power2.out", duration: 1.1 },
    });

    cards.forEach((card, i) => {
      const next = cards[i + 1];
      if (!next) return;

      tl.set(next, { zIndex: 20 }); // 🟢 next card goes ABOVE current
      tl.to(card, {
        yPercent: -20, // moves up a bit
        scale: 0.92, // ✅ shrink effect
        autoAlpha: 0, // fade out
        duration: 0.8,
        ease: "power3.inOut",
      });

      tl.to(
        next,
        {
          yPercent: 0, // slide from bottom to middle
          duration: 0.8,
        },
        "<" // run same time
      );

      tl.set(card, { zIndex: 0 }); // card stays behind after animation
    });

    ScrollTrigger.create({
      animation: tl,
      trigger: container,
      start: "top top",
      end: `+=${cards.length * 700}`,
      scrub: 1.4,
      pin: true,
      anticipatePin: 1,
    });
  }, []);

  const cardsData = [
    {
      title: "Flawless Data Reconciliation & ITC Maximization",
      body: `We eliminate the manual reconciliation burden and safeguard every rupee of your eligible Input Tax Credit. Our team cleanses, verifies, and reconciles GST data, follows up with vendors to protect ITC eligibility, and optimizes claims for complex cases—ensuring healthier cash flow and zero reconciliation stress.`,

      accentImage:
        "https://wordpress.techspeed.com/wp-content/uploads/2024/03/bg-pattern-01.png",
    },
    {
      title: "Accurate Return Filing & Audit-Proof Compliance",
      body: `Our experts guarantee precise, on-time GST return filing while managing e-invoicing, e-way bills, and error corrections. We prepare and defend your records for audits, ensuring zero late fees, no interest penalties, and full audit readiness.`,

      accentImage:
        "https://wordpress.techspeed.com/wp-content/uploads/2024/03/bg-pattern-02.png",
    },
    {
      title: "Human Expertise Beyond Software",
      body: `We bring unmatched GST knowledge that no software can replicate. From advanced advisory on complex rules to real-time monitoring of regulatory changes and rapid troubleshooting, our seasoned operators keep your business fully compliant and strategically prepared.`,

      accentImage:
        "https://wordpress.techspeed.com/wp-content/uploads/2024/03/bg-pattern-01.png",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#32001A] text-[#1b0b12]"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Optional heading above pin region */}
        <h2 className="text-center text-2xl md:text-4xl font-light text-[#ffeaf7] mb-8">
          Our Core Values
        </h2>
        {/* <p className="text-gray-200 text-lg">Our service is not just about using software; it's about providing the unparalleled expertise that makes your software work perfectly. We are the architects and the operators of flawless GST compliance.</p> */}

        {/* Pin region: fixed height area (content will be pinned while timeline runs) */}
        <div className="relative py-16">
          <div
            className="relative w-full mx-auto"
            style={{ maxWidth: 1200, height: 520 }}
          >
            {/* Each card absolutely stacked inside this container */}
            {cardsData.map((c, i) => (
              <article
                key={i}
                ref={(el) => setCardRef(el, i)}
                className="absolute left-0 right-0 mx-auto rounded-[1rem] shadow-xl overflow-hidden bg-white"
                style={{ top: 0, minHeight: 400 }}
              >
                {/* ✅ 1. Heading ALWAYS at top */}
                <h3 className="px-12 pt-12 font-norm text-4xl text-center font-normal text-[#240014]">
                  {c.title}
                </h3>

                {/* ✅ 2. Content below heading */}
                <div className="flex px-16 h-full mt-12">
                  {/* LEFT column */}
                  <div className="w-full px-12 pb-12">
                    <p className="text-[18px] text-center leading-[1.3] text-black whitespace-pre-line">
                      {c.body}
                    </p>

                    {/* <a
                      href="#"
                      className="inline-flex mt-8 px-6 py-3 rounded-full bg-[#4b0f20] text-white hover:bg-yellow-300 hover:text-black transition-all"
                    >
                      {c.cta}
                    </a> */}
                  </div>

                  {/* RIGHT column */}

                  <div
                    className="absolute top-0 right-[-40px] h-full w-[90px]"
                    style={{
                      backgroundImage: `url(${c.accentImage})`,
                      backgroundSize: "cover",
                    }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
