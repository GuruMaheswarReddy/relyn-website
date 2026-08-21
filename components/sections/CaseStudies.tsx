"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ValuePillars } from "@/components/sections/ValuePillars";

export default function AboutRelyn() {
  return (
    <>
      {/* SVG ClipPath Definition for Left Image Curve */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <clipPath id="about-image-curve" clipPathUnits="objectBoundingBox">
            <path d="M 0 0.44 C 0.32 0.16, 0.68 0, 1 0 L 1 1 L 0 1 Z" />
          </clipPath>
        </defs>
      </svg>

      <section className="bg-[#FAF6EC] py-6 sm:py-8 lg:py-10" id="about">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">

          {/* Main Top 2-Column Grid matching Image 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-0">

            {/* Left Column: Typography & Curved Living Room Photo */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 flex flex-col justify-between"
            >
              <div>
                {/* Top Label */}
                <div className="label mb-1.5 text-[#A8843C] font-bold text-[11px] tracking-[0.14em] uppercase">
                  &mdash; ABOUT RELYN
                </div>

                {/* Headline */}
                <h2 className="text-[28px] sm:text-[34px] lg:text-[36px] font-serif leading-[1.12] text-[#1F4234] mb-2">
                  A trusted support brand, not just a{" "}
                  <span className="text-[#A8843C] font-serif italic font-normal block sm:inline">
                    services company.
                  </span>
                </h2>

                {/* Quote Callout */}
                <div className="font-serif italic text-[16px] sm:text-[18px] font-normal text-[#A8843C] mb-2 flex items-center gap-1.5">
                  <span className="text-[22px] leading-none text-[#A8843C]">&ldquo;</span>
                  <span>Find someone you can trust and rely on.</span>
                  <span className="text-[22px] leading-none text-[#A8843C]">&rdquo;</span>
                </div>

                {/* Intro Paragraph */}
                <p className="text-[12.5px] sm:text-[13px] text-[#3E5E4F] max-w-[46ch] leading-relaxed mb-2">
                  Relyn was created around a common problem &mdash; finding reliable household support can be stressful, uncertain and time-consuming. We set out to make that experience organised, dependable and reassuring.
                </p>
              </div>

              {/* Curved Living Room Photo Container */}
              <div className="relative w-full h-[200px] sm:h-[220px] lg:h-[235px] mt-1">
                {/* Curved Living Room Photo */}
                <div className="w-full h-full relative overflow-hidden rounded-t-[80px] sm:rounded-t-[100px] rounded-b-[16px] shadow-xs">
                  <Image
                    src="/differencesectionimage.jpg?v=2"
                    alt="Relyn warm living room interior"
                    fill
                    unoptimized
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Column: 3 Stacked Cards matching Image 2 */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 flex flex-col gap-2.5 sm:gap-3 justify-start"
            >
              {/* Card 1: What Relyn is */}
              <div className="bg-[#F8F5EE] rounded-[16px] lg:rounded-[18px] px-3.5 py-3 sm:px-4.5 sm:py-3.5 shadow-2xs border border-[rgba(31,66,52,0.06)] flex items-center gap-3.5 hover:shadow-xs transition-all">
                <div className="w-11 h-11 rounded-full bg-[#122E23] text-[#C6A15B] flex items-center justify-center shrink-0 shadow-xs">
                  <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
                    <path d="M12 11.2a2.1 2.1 0 00-3 0 2.1 2.1 0 000 3l3 3 3-3a2.1 2.1 0 000-3 2.1 2.1 0 00-3 0z" stroke="#C6A15B" strokeWidth="1.6" />
                  </svg>
                </div>
                <div className="border-l border-[rgba(31,66,52,0.12)] pl-3.5">
                  <h3 className="font-serif text-[16.5px] sm:text-[17.5px] font-bold text-[#1F4234] mb-0.5">
                    What Relyn is
                  </h3>
                  <p className="text-[12px] sm:text-[12.5px] text-[#3E5E4F] leading-snug">
                    Relyn is built to make everyday life easier by connecting individuals and families with dependable support for their household needs. The idea is simple &mdash; when you need help, you should be able to find someone you can trust and rely on.
                  </p>
                </div>
              </div>

              {/* Card 2: Our philosophy */}
              <div className="bg-[#F8F5EE] rounded-[16px] lg:rounded-[18px] px-3.5 py-3 sm:px-4.5 sm:py-3.5 shadow-2xs border border-[rgba(31,66,52,0.06)] flex items-center gap-3.5 hover:shadow-xs transition-all">
                <div className="w-11 h-11 rounded-full bg-[#122E23] text-[#C6A15B] flex items-center justify-center shrink-0 shadow-xs">
                  <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M16.5 12.2a1.8 1.8 0 00-2.5 0 1.8 1.8 0 000 2.5l2.5 2.5 2.5-2.5a1.8 1.8 0 00-2.5 0z" stroke="#C6A15B" strokeWidth="1.6" />
                  </svg>
                </div>
                <div className="border-l border-[rgba(31,66,52,0.12)] pl-3.5">
                  <h3 className="font-serif text-[16.5px] sm:text-[17.5px] font-bold text-[#1F4234] mb-0.5">
                    Our philosophy
                  </h3>
                  <p className="text-[12px] sm:text-[12.5px] text-[#3E5E4F] leading-snug">
                    Good support is not just about getting a task done. It is about trust, consistency, care and responsibility. When someone becomes part of your home or daily routine, you should have peace of mind knowing that responsibility is being handled properly.
                  </p>
                </div>
              </div>

              {/* Card 3: What makes Relyn different */}
              <div className="bg-[#F8F5EE] rounded-[16px] lg:rounded-[18px] px-3.5 py-3 sm:px-4.5 sm:py-3.5 shadow-2xs border border-[rgba(31,66,52,0.06)] flex items-center gap-3.5 hover:shadow-xs transition-all">
                <div className="w-11 h-11 rounded-full bg-[#122E23] text-[#C6A15B] flex items-center justify-center shrink-0 shadow-xs">
                  <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polygon points="12 7.8 13.2 10.3 16 10.7 14 12.6 14.5 15.3 12 14 9.5 15.3 10 12.6 8 10.7 10.8 10.3" stroke="#C6A15B" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="border-l border-[rgba(31,66,52,0.12)] pl-3.5">
                  <h3 className="font-serif text-[16.5px] sm:text-[17.5px] font-bold text-[#1F4234] mb-0.5">
                    What makes Relyn different
                  </h3>
                  <p className="text-[12px] sm:text-[12.5px] text-[#3E5E4F] leading-snug">
                    Relyn brings a more professional, reliable and thoughtful approach to household support. The focus is not simply on providing a service, but on understanding your requirement and making the overall experience easier and more dependable.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom 5-Value Pillar Card Bar matching Image 2 */}
          <div className="relative z-20 -mt-5 sm:-mt-7 lg:-mt-8">
            <ValuePillars />
          </div>

        </div>
      </section>

      {/* Quote Strip */}
      <section className="bg-[#1F4234] text-[#FAF6EC] text-center py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <motion.blockquote
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif italic text-[22px] sm:text-[28px] lg:text-[30px] max-w-[24ch] mx-auto mb-3.5 leading-snug text-[#FAF6EC]"
          >
            &ldquo;When someone becomes part of your home, it should never feel uncertain.&rdquo;
          </motion.blockquote>
          <motion.cite
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="not-italic text-[12.5px] text-[#A8843C] tracking-[0.14em] uppercase font-sans font-bold"
          >
            THE RELYN PHILOSOPHY
          </motion.cite>
        </div>
      </section>
    </>
  );
}