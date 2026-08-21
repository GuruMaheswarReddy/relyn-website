"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section className="bg-[#122E23] text-[#FAF6EC] py-24" id="how">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-[640px] mb-12"
        >
          <div className="label mb-3 text-[#C6A15B] before:bg-[#C6A15B]">How it works</div>
          <h2 className="text-[30px] sm:text-[38px] lg:text-[40px] font-serif leading-[1.14] text-[#FAF6EC]">
            A simple, four-step flow.
          </h2>
        </motion.div>

        {/* 4 Steps Grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          
          {/* Dashed Connecting Line */}
          <div className="hidden lg:block absolute top-6 left-[4%] right-[4%] h-[1px] bg-[repeating-linear-gradient(90deg,rgba(198,161,91,0.55)_0_8px,transparent_8px_16px)] z-0" />

          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative z-10"
          >
            <div className="w-[48px] h-[48px] border border-[rgba(198,161,91,0.5)] rounded-full flex items-center justify-center font-serif italic text-[18px] text-[#C6A15B] bg-[#122E23] mb-5">
              1
            </div>
            <h3 className="font-serif text-[18px] text-[#FAF6EC] mb-2.5">
              Tell us what you need
            </h3>
            <p className="text-[14px] text-[rgba(250,246,236,0.65)] max-w-[27ch]">
              Share your requirement with us.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="w-[48px] h-[48px] border border-[rgba(198,161,91,0.5)] rounded-full flex items-center justify-center font-serif italic text-[18px] text-[#C6A15B] bg-[#122E23] mb-5">
              2
            </div>
            <h3 className="font-serif text-[18px] text-[#FAF6EC] mb-2.5">
              We understand your requirement
            </h3>
            <p className="text-[14px] text-[rgba(250,246,236,0.65)] max-w-[27ch]">
              We understand your preferences, expectations and specific needs.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative z-10"
          >
            <div className="w-[48px] h-[48px] border border-[rgba(198,161,91,0.5)] rounded-full flex items-center justify-center font-serif italic text-[18px] text-[#C6A15B] bg-[#122E23] mb-5">
              3
            </div>
            <h3 className="font-serif text-[18px] text-[#FAF6EC] mb-2.5">
              We arrange the right support
            </h3>
            <p className="text-[14px] text-[rgba(250,246,236,0.65)] max-w-[27ch]">
              Relyn helps arrange the appropriate service based on your requirement.
            </p>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative z-10"
          >
            <div className="w-[48px] h-[48px] border border-[rgba(198,161,91,0.5)] rounded-full flex items-center justify-center font-serif italic text-[18px] text-[#C6A15B] bg-[#122E23] mb-5">
              4
            </div>
            <h3 className="font-serif text-[18px] text-[#FAF6EC] mb-2.5">
              We've got it from here
            </h3>
            <p className="text-[14px] text-[rgba(250,246,236,0.65)] max-w-[27ch]">
              We take care of the details so you can focus on what matters.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}