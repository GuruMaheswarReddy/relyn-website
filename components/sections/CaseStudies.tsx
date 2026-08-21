"use client";

import { motion } from "framer-motion";

export default function AboutRelyn() {
  return (
    <>
      <section className="bg-[#F3EDDD] py-24" id="about">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          
          {/* About Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 mb-16">
            
            {/* Left Intro */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="label mb-3">About Relyn</div>
              <h2 className="text-[30px] sm:text-[36px] lg:text-[42px] font-serif leading-[1.15] text-[#1F4234] mb-4.5">
                A trusted support brand, not just a services company.
              </h2>
              <div className="font-serif italic text-[19px] text-[#A8843C] mb-5">
                "Find someone you can trust and rely on."
              </div>
              <p className="text-[15px] text-[#3E5E4F] max-w-[38ch] leading-relaxed">
                Relyn was created around a common problem — finding reliable household support can be stressful, uncertain and time-consuming. We set out to make that experience organised, dependable and reassuring.
              </p>
            </motion.div>

            {/* Right Blocks */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-9"
            >
              <div>
                <h3 className="font-serif text-[18.5px] text-[#1F4234] mb-2">What Relyn is</h3>
                <p className="text-[14.8px] text-[#3E5E4F] max-w-[60ch] leading-relaxed">
                  Relyn is built to make everyday life easier by connecting individuals and families with dependable support for their household needs. The idea is simple — when you need help, you should be able to find someone you can trust and rely on.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-[18.5px] text-[#1F4234] mb-2">Our philosophy</h3>
                <p className="text-[14.8px] text-[#3E5E4F] max-w-[60ch] leading-relaxed">
                  Good support is not just about getting a task done. It is about trust, consistency, care and responsibility. When someone becomes part of your home or daily routine, you should have peace of mind knowing that responsibility is being handled properly.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-[18.5px] text-[#1F4234] mb-2">What makes Relyn different</h3>
                <p className="text-[14.8px] text-[#3E5E4F] max-w-[60ch] leading-relaxed">
                  Relyn brings a more professional, reliable and thoughtful approach to household support. The focus is not simply on providing a service, but on understanding your requirement and making the overall experience easier and more dependable.
                </p>
              </div>
            </motion.div>

          </div>

          {/* 5 Values Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-8 border-t border-[rgba(31,66,52,0.1)]"
          >
            <div className="text-center p-5">
              <svg className="w-[26px] h-[26px] text-[#A8843C] mx-auto mb-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6l7-3z" />
              </svg>
              <h4 className="font-sans font-semibold text-[14.5px] text-[#1F4234] mb-1.5">Trust</h4>
              <p className="text-[12px] text-[#3E5E4F] leading-snug">Confidence in the people and services we provide.</p>
            </div>

            <div className="text-center p-5">
              <svg className="w-[26px] h-[26px] text-[#A8843C] mx-auto mb-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 21s-7-4.6-9.5-9C.7 8.2 2.5 4 6.5 4c2 0 3.6 1.2 5.5 3.5C13.9 5.2 15.5 4 17.5 4 21.5 4 23.3 8.2 21.5 12 19 16.4 12 21 12 21z" />
              </svg>
              <h4 className="font-sans font-semibold text-[14.5px] text-[#1F4234] mb-1.5">Care</h4>
              <p className="text-[12px] text-[#3E5E4F] leading-snug">Treating every requirement with respect.</p>
            </div>

            <div className="text-center p-5">
              <svg className="w-[26px] h-[26px] text-[#A8843C] mx-auto mb-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 8v5l3 3M12 3a9 9 0 100 18 9 9 0 000-18z" />
              </svg>
              <h4 className="font-sans font-semibold text-[14.5px] text-[#1F4234] mb-1.5">Reliability</h4>
              <p className="text-[12px] text-[#3E5E4F] leading-snug">Being dependable when our customers need us.</p>
            </div>

            <div className="text-center p-5">
              <svg className="w-[26px] h-[26px] text-[#A8843C] mx-auto mb-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <h4 className="font-sans font-semibold text-[14.5px] text-[#1F4234] mb-1.5">Responsibility</h4>
              <p className="text-[12px] text-[#3E5E4F] leading-snug">Taking ownership rather than simply completing a task.</p>
            </div>

            <div className="text-center p-5 col-span-2 sm:col-span-1">
              <svg className="w-[26px] h-[26px] text-[#A8843C] mx-auto mb-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 20c1-4 4-6 8-6s7 2 8 6M12 12a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
              <h4 className="font-sans font-semibold text-[14.5px] text-[#1F4234] mb-1.5">Peace of Mind</h4>
              <p className="text-[12px] text-[#3E5E4F] leading-snug">The feeling that it is taken care of.</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Quote Strip */}
      <section className="bg-[#1F4234] text-[#FAF6EC] text-center py-20">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <motion.blockquote
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif italic text-[22px] sm:text-[28px] lg:text-[30px] max-w-[20ch] mx-auto mb-4 leading-snug"
          >
            "When someone becomes part of your home, it should never feel uncertain."
          </motion.blockquote>
          <motion.cite
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="not-italic text-[13px] text-[rgba(250,246,236,0.6)] tracking-[0.05em] uppercase font-sans"
          >
            THE RELYN PHILOSOPHY
          </motion.cite>
        </div>
      </section>
    </>
  );
}