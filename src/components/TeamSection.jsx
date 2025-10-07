'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function TechspeedStack() {
  const ref = useRef(null);

  // Track the scroll position just for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // First card fades and scales down as we scroll
  const firstOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const firstScale   = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  // Second card fades & slides up after 30% scroll
  const secondOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const secondY       = useTransform(scrollYProgress, [0.3, 1], ['40%', '0%']);

  return (
    <section ref={ref} className="relative h-[220vh] bg-[#4B0D30]">
      {/* Sticky container holds both cards in place */}
      <div className="sticky top-0 flex items-center justify-center h-screen">
        {/* === FIRST CARD === */}
        <motion.article
          style={{ opacity: firstOpacity, scale: firstScale, zIndex: 0 }}
          className="absolute max-w-6xl w-[90%] rounded-3xl bg-white p-10 shadow-2xl"
        >
          <h3 className="text-3xl font-bold text-center mb-6">
            Build your team with experienced experts.
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Outsource your non-core activities to us so you can stay focused on
            growing your business. Our dedicated team integrates seamlessly with
            your company so you can scale with confidence.
          </p>
          <a
            href="/get-started"
            className="inline-flex mt-8 items-center gap-2 rounded-2xl bg-rose-800 text-white px-6 py-3 hover:bg-yellow-400 hover:text-black"
          >
            Start Building your Team →
          </a>
        </motion.article>

        {/* === SECOND CARD === */}
        <motion.article
          style={{ opacity: secondOpacity, y: secondY, zIndex: 10 }}
          className="absolute max-w-6xl w-[90%] rounded-3xl bg-white p-10 shadow-2xl"
        >
          <h3 className="text-3xl font-bold text-center mb-6">
            Why TechSpeed is different?
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8">
            We specialize in customizing our AI-driven processing solutions to
            meet your challenges. Our hybrid model leverages onshore project
            management and offshore production for top value.
          </p>
          <ul className="space-y-3 text-left max-w-md mx-auto">
            <li>✔ Local US-based support</li>
            <li>✔ High-quality work</li>
            <li>✔ Cost-effective global teams</li>
            <li>✔ AI-driven processing</li>
          </ul>
        </motion.article>
      </div>
    </section>
  );
}
