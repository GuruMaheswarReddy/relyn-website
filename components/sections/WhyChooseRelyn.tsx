"use client";

import { motion } from "framer-motion";

export default function WhyChooseRelyn() {
  return (
    <section className="bg-[#EEF1E8] py-20 lg:py-24" id="why">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-[640px] mb-12"
        >
          <div className="label mb-3">Why Relyn</div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-serif leading-[1.14] text-[#1F4234]">
            Support that feels like peace of mind, not a task ticked off.
          </h2>
          <p className="mt-4 text-[16px] text-[#3E5E4F] max-w-[54ch]">
            When someone becomes part of your daily routine, it should never feel uncertain. Here's what that looks like in practice.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-[6px] p-8 shadow-[0_1px_0_rgba(31,66,52,0.14)]"
          >
            <svg className="w-8 h-8 text-[#A8843C] mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6l7-3z" />
            </svg>
            <h3 className="font-serif text-[18px] text-[#1F4234] mb-2.5">Trust</h3>
            <p className="text-[13.8px] text-[#3E5E4F] leading-relaxed">
              Dependable support you feel comfortable bringing into your home.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-[6px] p-8 shadow-[0_1px_0_rgba(31,66,52,0.14)]"
          >
            <svg className="w-8 h-8 text-[#A8843C] mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 21s-7-4.6-9.5-9C.7 8.2 2.5 4 6.5 4c2 0 3.6 1.2 5.5 3.5C13.9 5.2 15.5 4 17.5 4 21.5 4 23.3 8.2 21.5 12 19 16.4 12 21 12 21z" />
            </svg>
            <h3 className="font-serif text-[18px] text-[#1F4234] mb-2.5">Care</h3>
            <p className="text-[13.8px] text-[#3E5E4F] leading-relaxed">
              A thoughtful, personal approach to everyday support — not just a job done.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-[6px] p-8 shadow-[0_1px_0_rgba(31,66,52,0.14)]"
          >
            <svg className="w-8 h-8 text-[#A8843C] mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 8v5l3 3M12 3a9 9 0 100 18 9 9 0 000-18z" />
            </svg>
            <h3 className="font-serif text-[18px] text-[#1F4234] mb-2.5">Reliability</h3>
            <p className="text-[13.8px] text-[#3E5E4F] leading-relaxed">
              Support you can count on, consistently, when you actually need it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-[6px] p-8 shadow-[0_1px_0_rgba(31,66,52,0.14)]"
          >
            <svg className="w-8 h-8 text-[#A8843C] mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 20c1-4 4-6 8-6s7 2 8 6M12 12a4 4 0 100-8 4 4 0 000 8z" />
              <path d="M19 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
            </svg>
            <h3 className="font-serif text-[18px] text-[#1F4234] mb-2.5">Peace of mind</h3>
            <p className="text-[13.8px] text-[#3E5E4F] leading-relaxed">
              We take care of the details, so you don't have to think twice.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}