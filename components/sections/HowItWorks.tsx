"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section className="bg-[#122E23] text-[#FAF6EC] py-20 lg:py-24" id="how">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        
        {/* Section Header matching Image 1 */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-[640px] mb-16"
        >
          <div className="label mb-3 text-[#C6A15B] before:bg-[#C6A15B]">
            HOW IT WORKS
          </div>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-serif leading-[1.14] text-[#FAF6EC]">
            A simple, four-step{" "}
            <span className="text-[#C6A15B] italic font-serif font-normal">
              flow.
            </span>
          </h2>
          <p className="mt-3 text-[15px] sm:text-[16px] text-[#C5D6CC]">
            Getting the right support for your home is easy.
          </p>
        </motion.div>

        {/* 4 Steps Grid matching Image 1 */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Connecting Horizontal Dashed Line */}
          <div className="hidden lg:block absolute top-[22px] left-[10%] right-[10%] h-[1px] bg-[repeating-linear-gradient(90deg,rgba(198,161,91,0.55)_0_8px,transparent_8px_16px)] z-0" />

          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            {/* Step Number Circle */}
            <div className="w-11 h-11 border border-[#C6A15B] rounded-full flex items-center justify-center font-serif italic text-[18px] text-[#C6A15B] bg-[#122E23] mb-6 shadow-md">
              1
            </div>

            {/* Ivory Circular Icon Badge */}
            <div className="w-22 h-22 rounded-full bg-[#FAF6EC] flex items-center justify-center mb-5 text-[#122E23] shadow-lg shrink-0 transition-transform duration-300 hover:scale-105">
              <svg className="w-10 h-10 text-[#122E23]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                <circle cx="9" cy="12" r="1.2" fill="#122E23" />
                <circle cx="12" cy="12" r="1.2" fill="#122E23" />
                <circle cx="15" cy="12" r="1.2" fill="#122E23" />
              </svg>
            </div>

            {/* Title & Accent Line & Description */}
            <h3 className="font-serif text-[19px] sm:text-[20px] font-bold text-white mb-2 leading-snug">
              Tell us what you need
            </h3>
            <div className="w-8 h-[2px] bg-[#C6A15B] rounded-full mb-3" />
            <p className="text-[13px] sm:text-[13.5px] text-[#A3B8AD] leading-relaxed max-w-[25ch]">
              Share your requirement with us.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            {/* Step Number Circle */}
            <div className="w-11 h-11 border border-[#C6A15B] rounded-full flex items-center justify-center font-serif italic text-[18px] text-[#C6A15B] bg-[#122E23] mb-6 shadow-md">
              2
            </div>

            {/* Ivory Circular Icon Badge */}
            <div className="w-22 h-22 rounded-full bg-[#FAF6EC] flex items-center justify-center mb-5 text-[#122E23] shadow-lg shrink-0 transition-transform duration-300 hover:scale-105">
              <svg className="w-10 h-10 text-[#122E23]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="4" width="14" height="17" rx="2" />
                <path d="M9 9h6M9 13h6M9 17h4" />
                <path d="M9 2h6v4H9z" />
                <path d="M15 10l-2 2-1-1" stroke="#C6A15B" strokeWidth="2" />
                <path d="M15 14l-2 2-1-1" stroke="#C6A15B" strokeWidth="2" />
              </svg>
            </div>

            {/* Title & Accent Line & Description */}
            <h3 className="font-serif text-[19px] sm:text-[20px] font-bold text-white mb-2 leading-snug">
              We understand your requirement
            </h3>
            <div className="w-8 h-[2px] bg-[#C6A15B] rounded-full mb-3" />
            <p className="text-[13px] sm:text-[13.5px] text-[#A3B8AD] leading-relaxed max-w-[27ch]">
              We understand your preferences, expectations and specific needs.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            {/* Step Number Circle */}
            <div className="w-11 h-11 border border-[#C6A15B] rounded-full flex items-center justify-center font-serif italic text-[18px] text-[#C6A15B] bg-[#122E23] mb-6 shadow-md">
              3
            </div>

            {/* Ivory Circular Icon Badge */}
            <div className="w-22 h-22 rounded-full bg-[#FAF6EC] flex items-center justify-center mb-5 text-[#122E23] shadow-lg shrink-0 transition-transform duration-300 hover:scale-105">
              <svg className="w-10 h-10 text-[#122E23]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
                <circle cx="17.5" cy="17.5" r="3.5" fill="#C6A15B" stroke="none" />
                <path d="M16 17.5l1 1 2-2" stroke="#FAF6EC" strokeWidth="1.5" />
              </svg>
            </div>

            {/* Title & Accent Line & Description */}
            <h3 className="font-serif text-[19px] sm:text-[20px] font-bold text-white mb-2 leading-snug">
              We arrange the right support
            </h3>
            <div className="w-8 h-[2px] bg-[#C6A15B] rounded-full mb-3" />
            <p className="text-[13px] sm:text-[13.5px] text-[#A3B8AD] leading-relaxed max-w-[27ch]">
              Relyn helps arrange the appropriate service based on your requirement.
            </p>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            {/* Step Number Circle */}
            <div className="w-11 h-11 border border-[#C6A15B] rounded-full flex items-center justify-center font-serif italic text-[18px] text-[#C6A15B] bg-[#122E23] mb-6 shadow-md">
              4
            </div>

            {/* Ivory Circular Icon Badge */}
            <div className="w-22 h-22 rounded-full bg-[#FAF6EC] flex items-center justify-center mb-5 text-[#122E23] shadow-lg shrink-0 transition-transform duration-300 hover:scale-105">
              <svg className="w-10 h-10 text-[#122E23]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <path d="M12 11.5a2.5 2.5 0 0 0-3.5 0 2.5 2.5 0 0 0 0 3.5l3.5 3.5 3.5-3.5a2.5 2.5 0 0 0 0-3.5 2.5 2.5 0 0 0-3.5 0z" fill="#C6A15B" stroke="none" />
              </svg>
            </div>

            {/* Title & Accent Line & Description */}
            <h3 className="font-serif text-[19px] sm:text-[20px] font-bold text-white mb-2 leading-snug">
              We&apos;ve got it from here
            </h3>
            <div className="w-8 h-[2px] bg-[#C6A15B] rounded-full mb-3" />
            <p className="text-[13px] sm:text-[13.5px] text-[#A3B8AD] leading-relaxed max-w-[27ch]">
              We take care of the details so you can focus on what matters.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}