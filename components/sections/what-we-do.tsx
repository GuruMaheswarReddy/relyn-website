"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Check } from "lucide-react";

export function WhatWeDo() {
  return (
    <section className="py-20 lg:py-24 bg-[#FAF6EC]" id="services">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-[640px] mb-12"
        >
          <div className="label mb-3">What we offer</div>
          <h2 className="text-[30px] sm:text-[38px] lg:text-[42px] font-serif leading-[1.14] text-[#1F4234]">
            Three ways Relyn looks after your home.
          </h2>
          <p className="mt-4 text-[16px] text-[#3E5E4F] max-w-[54ch]">
            Every professional is matched to one role specifically, understood, briefed and arranged around your household&apos;s actual routine.
          </p>
        </motion.div>

        {/* 3 Main Services Grid with Compact & Neat Spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">

          {/* Card 1: Housekeeping */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group bg-white border border-[rgba(31,66,52,0.1)] rounded-[20px] lg:rounded-[24px] p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full"
          >
            <div>
              {/* Top Header - Compact & Tight Spacing */}
              <div className="flex items-start gap-3.5 mb-3.5">
                <div className="w-12 h-12 rounded-full bg-[#EEF1E8] flex items-center justify-center text-[#1F4234] shrink-0 shadow-xs mt-0.5">
                  <svg className="w-6 h-6 text-[#1F4234]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <div className="flex flex-col justify-start">
                  <h3 className="font-serif text-[19px] sm:text-[20px] font-bold text-[#1F4234] leading-snug">
                    Housekeeping
                  </h3>
                  <div className="w-7 h-[2px] bg-[#A8843C] rounded-full my-1" />
                  <p className="text-[12.5px] sm:text-[13px] text-[#3E5E4F] leading-snug">
                    Spotless spaces, organised homes and everyday cleaning you can rely on.
                  </p>
                </div>
              </div>

              {/* Middle Image */}
              <div className="relative w-full h-[180px] sm:h-[195px] rounded-[14px] overflow-hidden mb-3.5">
                <Image
                  src="/services/HouseKeeping.jpg"
                  alt="Housekeeping service professional"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Compact Light Features Container */}
              <div className="bg-[#F9F8F4] rounded-[14px] p-3.5 sm:p-4 mb-4 space-y-2">
                <div className="text-[12.5px] sm:text-[13px] font-medium text-[#1F4234] flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border border-[#1F4234] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-[#1F4234]" />
                  </div>
                  <span>Home cleaning</span>
                </div>
                <div className="text-[12.5px] sm:text-[13px] font-medium text-[#1F4234] flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border border-[#1F4234] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-[#1F4234]" />
                  </div>
                  <span>General household upkeep</span>
                </div>
                <div className="text-[12.5px] sm:text-[13px] font-medium text-[#1F4234] flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border border-[#1F4234] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-[#1F4234]" />
                  </div>
                  <span>Organisation &amp; assistance</span>
                </div>
              </div>
            </div>

            {/* Bottom Footer Link & Circular Button */}
            <div className="flex items-center justify-between pt-2 border-t border-[rgba(31,66,52,0.06)]">
              <Link
                href="#contact"
                className="text-[13px] sm:text-[13.5px] font-semibold text-[#1F4234] hover:text-[#A8843C] inline-flex items-center gap-1.5 transition-colors group/link"
              >
                <span>Request housekeeping</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#A8843C] transition-transform duration-200 group-hover/link:translate-x-1" />
              </Link>
              <div className="w-9 h-9 rounded-full border border-[#A8843C]/40 flex items-center justify-center text-[#A8843C] group-hover:bg-[#A8843C] group-hover:text-white transition-all duration-200 shrink-0">
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Cooking / Meal Support */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group bg-white border border-[rgba(31,66,52,0.1)] rounded-[20px] lg:rounded-[24px] p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full"
          >
            <div>
              {/* Top Header - Compact & Tight Spacing */}
              <div className="flex items-start gap-3.5 mb-3.5">
                <div className="w-12 h-12 rounded-full bg-[#EEF1E8] flex items-center justify-center text-[#1F4234] shrink-0 shadow-xs mt-0.5">
                  <svg className="w-6 h-6 text-[#1F4234]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4M8 3v3M16 3v3" />
                    <path d="M4 11h16a1 1 0 011 1v2a8 8 0 01-16 0v-2a1 1 0 011-1z" />
                  </svg>
                </div>
                <div className="flex flex-col justify-start">
                  <h3 className="font-serif text-[19px] sm:text-[20px] font-bold text-[#1F4234] leading-snug">
                    Cooking / Meal Support
                  </h3>
                  <div className="w-7 h-[2px] bg-[#A8843C] rounded-full my-1" />
                  <p className="text-[12.5px] sm:text-[13px] text-[#3E5E4F] leading-snug">
                    Nutritious, home-style meals prepared fresh, just the way you like.
                  </p>
                </div>
              </div>

              {/* Middle Image */}
              <div className="relative w-full h-[180px] sm:h-[195px] rounded-[14px] overflow-hidden mb-3.5">
                <Image
                  src="/services/Cooking.jpg"
                  alt="Cooking and meal support professional"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Compact Light Features Container */}
              <div className="bg-[#F9F8F4] rounded-[14px] p-3.5 sm:p-4 mb-4 space-y-2">
                <div className="text-[12.5px] sm:text-[13px] font-medium text-[#1F4234] flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border border-[#1F4234] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-[#1F4234]" />
                  </div>
                  <span>Everyday cooking</span>
                </div>
                <div className="text-[12.5px] sm:text-[13px] font-medium text-[#1F4234] flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border border-[#1F4234] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-[#1F4234]" />
                  </div>
                  <span>Meal preparation</span>
                </div>
                <div className="text-[12.5px] sm:text-[13px] font-medium text-[#1F4234] flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border border-[#1F4234] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-[#1F4234]" />
                  </div>
                  <span>Kitchen assistance</span>
                </div>
              </div>
            </div>

            {/* Bottom Footer Link & Circular Button */}
            <div className="flex items-center justify-between pt-2 border-t border-[rgba(31,66,52,0.06)]">
              <Link
                href="#contact"
                className="text-[13px] sm:text-[13.5px] font-semibold text-[#1F4234] hover:text-[#A8843C] inline-flex items-center gap-1.5 transition-colors group/link"
              >
                <span>Request meal support</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#A8843C] transition-transform duration-200 group-hover/link:translate-x-1" />
              </Link>
              <div className="w-9 h-9 rounded-full border border-[#A8843C]/40 flex items-center justify-center text-[#A8843C] group-hover:bg-[#A8843C] group-hover:text-white transition-all duration-200 shrink-0">
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Elder Care */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group bg-white border border-[rgba(31,66,52,0.1)] rounded-[20px] lg:rounded-[24px] p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full"
          >
            <div>
              {/* Top Header - Compact & Tight Spacing */}
              <div className="flex items-start gap-3.5 mb-3.5">
                <div className="w-12 h-12 rounded-full bg-[#EEF1E8] flex items-center justify-center text-[#1F4234] shrink-0 shadow-xs mt-0.5">
                  <svg className="w-6 h-6 text-[#1F4234]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </div>
                <div className="flex flex-col justify-start">
                  <h3 className="font-serif text-[19px] sm:text-[20px] font-bold text-[#1F4234] leading-snug">
                    Elder Care
                  </h3>
                  <div className="w-7 h-[2px] bg-[#A8843C] rounded-full my-1" />
                  <p className="text-[12.5px] sm:text-[13px] text-[#3E5E4F] leading-snug">
                    Compassionate care and companionship tailored to your family&apos;s routine.
                  </p>
                </div>
              </div>

              {/* Middle Image */}
              <div className="relative w-full h-[180px] sm:h-[195px] rounded-[14px] overflow-hidden mb-3.5">
                <Image
                  src="/services/Elder_care.jpg"
                  alt="Elder care service caregiver"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Compact Light Features Container */}
              <div className="bg-[#F9F8F4] rounded-[14px] p-3.5 sm:p-4 mb-4 space-y-2">
                <div className="text-[12.5px] sm:text-[13px] font-medium text-[#1F4234] flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border border-[#1F4234] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-[#1F4234]" />
                  </div>
                  <span>Day-to-day assistance</span>
                </div>
                <div className="text-[12.5px] sm:text-[13px] font-medium text-[#1F4234] flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border border-[#1F4234] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-[#1F4234]" />
                  </div>
                  <span>Companionship</span>
                </div>
                <div className="text-[12.5px] sm:text-[13px] font-medium text-[#1F4234] flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border border-[#1F4234] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-[#1F4234]" />
                  </div>
                  <span>Support for elderly family members</span>
                </div>
              </div>
            </div>

            {/* Bottom Footer Link & Circular Button */}
            <div className="flex items-center justify-between pt-2 border-t border-[rgba(31,66,52,0.06)]">
              <Link
                href="#contact"
                className="text-[13px] sm:text-[13.5px] font-semibold text-[#1F4234] hover:text-[#A8843C] inline-flex items-center gap-1.5 transition-colors group/link"
              >
                <span>Request elder care</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#A8843C] transition-transform duration-200 group-hover/link:translate-x-1" />
              </Link>
              <div className="w-9 h-9 rounded-full border border-[#A8843C]/40 flex items-center justify-center text-[#A8843C] group-hover:bg-[#A8843C] group-hover:text-white transition-all duration-200 shrink-0">
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Coming Soon Section */}
        <div>
          <div className="flex items-baseline gap-3.5 mb-6">
            <div className="label m-0">Coming soon</div>
            <h3 className="font-serif italic text-[20px] text-[#3E5E4F]">More support, on the way.</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="relative border border-dashed border-[rgba(31,66,52,0.2)] rounded-[16px] p-5 opacity-90 bg-white/50">
              <span className="absolute top-4 right-4 text-[10px] font-bold tracking-[0.1em] uppercase text-[#A8843C] bg-[#EEF1E8] px-2.5 py-1 rounded-full">Soon</span>
              <svg className="w-6.5 h-6.5 text-[#3E5E4F] mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="8" r="3.4" />
                <path d="M6 20c0-4 2.7-6 6-6s6 2 6 6" />
              </svg>
              <h4 className="font-sans font-semibold text-[14.5px] text-[#1F4234] mb-1">Child Care</h4>
              <p className="text-[12px] text-[#3E5E4F] leading-relaxed">Trusted childcare and everyday support for families.</p>
            </div>

            <div className="relative border border-dashed border-[rgba(31,66,52,0.2)] rounded-[16px] p-5 opacity-90 bg-white/50">
              <span className="absolute top-4 right-4 text-[10px] font-bold tracking-[0.1em] uppercase text-[#A8843C] bg-[#EEF1E8] px-2.5 py-1 rounded-full">Soon</span>
              <svg className="w-6.5 h-6.5 text-[#3E5E4F] mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="6" y="4" width="12" height="16" rx="1.5" />
                <path d="M9 9h6M9 13h6" />
              </svg>
              <h4 className="font-sans font-semibold text-[14.5px] text-[#1F4234] mb-1">Laundry &amp; Assistance</h4>
              <p className="text-[12px] text-[#3E5E4F] leading-relaxed">Laundry, ironing, folding and routine household assistance.</p>
            </div>

            <div className="relative border border-dashed border-[rgba(31,66,52,0.2)] rounded-[16px] p-5 opacity-90 bg-white/50">
              <span className="absolute top-4 right-4 text-[10px] font-bold tracking-[0.1em] uppercase text-[#A8843C] bg-[#EEF1E8] px-2.5 py-1 rounded-full">Soon</span>
              <svg className="w-6.5 h-6.5 text-[#3E5E4F] mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="4" y="7" width="16" height="12" rx="1.4" />
                <path d="M9 7V5.5A1.5 1.5 0 0110.5 4h3A1.5 1.5 0 0115 5.5V7" />
              </svg>
              <h4 className="font-sans font-semibold text-[14.5px] text-[#1F4234] mb-1">Corporate Support</h4>
              <p className="text-[12px] text-[#3E5E4F] leading-relaxed">Reliable support services for offices and workplaces.</p>
            </div>

            <div className="relative border border-dashed border-[rgba(31,66,52,0.2)] rounded-[16px] p-5 opacity-90 bg-white/50">
              <span className="absolute top-4 right-4 text-[10px] font-bold tracking-[0.1em] uppercase text-[#A8843C] bg-[#EEF1E8] px-2.5 py-1 rounded-full">Soon</span>
              <svg className="w-6.5 h-6.5 text-[#3E5E4F] mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 16l1.5-5A2 2 0 017.4 9.5h9.2a2 2 0 011.9 1.5L20 16" />
                <rect x="3" y="16" width="18" height="4" rx="1" />
                <circle cx="8" cy="20" r="1.4" />
                <circle cx="16" cy="20" r="1.4" />
              </svg>
              <h4 className="font-sans font-semibold text-[14.5px] text-[#1F4234] mb-1">Driver / Errand Support</h4>
              <p className="text-[12px] text-[#3E5E4F] leading-relaxed">Driver assistance, local errands, pick-up and drop-off.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}