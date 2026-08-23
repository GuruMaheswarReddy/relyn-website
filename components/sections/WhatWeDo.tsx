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
                  src="/services/indian-housekeeping.jpg"
                  alt="Housekeeping service professional"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-[50%_10%] transition-transform duration-500 group-hover:scale-105"
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
                  src="/services/indian-cooking.jpg"
                  alt="Cooking and meal support professional"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-[50%_10%] transition-transform duration-500 group-hover:scale-105"
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
                  src="/services/indian-elder-care.jpg"
                  alt="Elder care service caregiver"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-[50%_10%] transition-transform duration-500 group-hover:scale-105"
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

        {/* Coming Soon Section matching reference design image */}
        <div>
          <div className="flex items-baseline gap-3.5 mb-8">
            <div className="label m-0">Coming soon</div>
            <h3 className="font-serif italic text-[22px] text-[#3E5E4F]">More support, on the way.</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Coming Soon Card 1: Child Care */}
            <div className="bg-white rounded-[24px] lg:rounded-[28px] p-6 text-center flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 border border-[rgba(31,66,52,0.08)] relative overflow-hidden h-full group">
              <div>
                {/* Top SOON Badge */}
                <div className="flex justify-start mb-2">
                  <span className="border border-[#A8843C] text-[#A8843C] text-[10px] font-bold tracking-[0.14em] uppercase px-3 py-1 rounded-full">
                    SOON
                  </span>
                </div>

                {/* Center Circular Icon Graphic with Leaf Motif */}
                <div className="relative w-22 h-22 rounded-full bg-[#EEF1E8] mx-auto flex items-center justify-center my-3 text-[#1F4234] shrink-0">
                  <svg className="w-10 h-10 text-[#1F4234]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="7" r="3" />
                    <path d="M4 19c0-3.5 2.5-5 5-5s5 1.5 5 5" />
                    <circle cx="17" cy="11" r="2" fill="#C6A15B" stroke="none" />
                    <path d="M14 19c.5-1.8 2-3 4-3s3.5 1.2 4 3" />
                  </svg>
                  {/* Leaf Graphic Accent */}
                  <svg className="absolute -right-3 top-2 w-8 h-8 text-[#A8843C]/40 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M12 2C6.5 2 2 6.5 2 12c0 5.5 4.5 10 10 10s10-4.5 10-10C22 6.5 17.5 2 12 2z" />
                    <path d="M12 22V12" />
                    <path d="M12 12c4-2 6-6 6-10" />
                  </svg>
                </div>

                {/* Title & Description */}
                <h4 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#1F4234] text-center mb-1.5">
                  Child Care
                </h4>
                <p className="text-[12.5px] text-[#3E5E4F] max-w-[26ch] mx-auto mb-5 leading-snug">
                  Trusted childcare and everyday support for growing families.
                </p>
              </div>

              {/* Bottom Feature Box */}
              <div className="bg-[#F9F8F4] rounded-[16px] p-4 text-left space-y-2.5 mt-auto">
                <div className="text-[12px] font-medium text-[#1F4234] flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#1F4234] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                  <span>Verified &amp; trained caregivers</span>
                </div>
                <div className="text-[12px] font-medium text-[#1F4234] flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#1F4234] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                  <span>Safe, nurturing &amp; engaging care</span>
                </div>
                <div className="text-[12px] font-medium text-[#1F4234] flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#1F4234] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>Flexible schedules</span>
                </div>
              </div>
            </div>

            {/* Coming Soon Card 2: Laundry & Assistance */}
            <div className="bg-white rounded-[24px] lg:rounded-[28px] p-6 text-center flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 border border-[rgba(31,66,52,0.08)] relative overflow-hidden h-full group">
              <div>
                {/* Top SOON Badge */}
                <div className="flex justify-start mb-2">
                  <span className="border border-[#A8843C] text-[#A8843C] text-[10px] font-bold tracking-[0.14em] uppercase px-3 py-1 rounded-full">
                    SOON
                  </span>
                </div>

                {/* Center Circular Icon Graphic with Leaf Motif */}
                <div className="relative w-22 h-22 rounded-full bg-[#EEF1E8] mx-auto flex items-center justify-center my-3 text-[#1F4234] shrink-0">
                  <svg className="w-10 h-10 text-[#1F4234]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="3" width="16" height="18" rx="2" />
                    <circle cx="12" cy="13" r="4" />
                    <path d="M8 7h3" />
                  </svg>
                  {/* Leaf Graphic Accent */}
                  <svg className="absolute -right-3 top-2 w-8 h-8 text-[#A8843C]/40 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M12 2C6.5 2 2 6.5 2 12c0 5.5 4.5 10 10 10s10-4.5 10-10C22 6.5 17.5 2 12 2z" />
                    <path d="M12 22V12" />
                    <path d="M12 12c4-2 6-6 6-10" />
                  </svg>
                </div>

                {/* Title & Description */}
                <h4 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#1F4234] text-center mb-1.5">
                  Laundry &amp; Assistance
                </h4>
                <p className="text-[12.5px] text-[#3E5E4F] max-w-[26ch] mx-auto mb-5 leading-snug">
                  Laundry, ironing, folding and routine household help.
                </p>
              </div>

              {/* Bottom Feature Box */}
              <div className="bg-[#F9F8F4] rounded-[16px] p-4 text-left space-y-2.5 mt-auto">
                <div className="text-[12px] font-medium text-[#1F4234] flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#1F4234] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46A2 2 0 002 5.38V8c0 1.1.9 2 2 2h.38l.62 10a2 2 0 002 2h14a2 2 0 002-2l.62-10H20a2 2 0 002-2V5.38a2 2 0 00-1.62-1.92z" />
                  </svg>
                  <span>Wash, dry, fold &amp; iron</span>
                </div>
                <div className="text-[12px] font-medium text-[#1F4234] flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#1F4234] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                  <span>Wardrobe organization</span>
                </div>
                <div className="text-[12px] font-medium text-[#1F4234] flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#1F4234] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>On-time, every time</span>
                </div>
              </div>
            </div>

            {/* Coming Soon Card 3: Corporate Support */}
            <div className="bg-white rounded-[24px] lg:rounded-[28px] p-6 text-center flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 border border-[rgba(31,66,52,0.08)] relative overflow-hidden h-full group">
              <div>
                {/* Top SOON Badge */}
                <div className="flex justify-start mb-2">
                  <span className="border border-[#A8843C] text-[#A8843C] text-[10px] font-bold tracking-[0.14em] uppercase px-3 py-1 rounded-full">
                    SOON
                  </span>
                </div>

                {/* Center Circular Icon Graphic with Leaf Motif */}
                <div className="relative w-22 h-22 rounded-full bg-[#EEF1E8] mx-auto flex items-center justify-center my-3 text-[#1F4234] shrink-0">
                  <svg className="w-10 h-10 text-[#1F4234]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                  </svg>
                  {/* Leaf Graphic Accent */}
                  <svg className="absolute -right-3 top-2 w-8 h-8 text-[#A8843C]/40 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M12 2C6.5 2 2 6.5 2 12c0 5.5 4.5 10 10 10s10-4.5 10-10C22 6.5 17.5 2 12 2z" />
                    <path d="M12 22V12" />
                    <path d="M12 12c4-2 6-6 6-10" />
                  </svg>
                </div>

                {/* Title & Description */}
                <h4 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#1F4234] text-center mb-1.5">
                  Corporate Support
                </h4>
                <p className="text-[12.5px] text-[#3E5E4F] max-w-[26ch] mx-auto mb-5 leading-snug">
                  Reliable support services for offices and workplaces.
                </p>
              </div>

              {/* Bottom Feature Box */}
              <div className="bg-[#F9F8F4] rounded-[16px] p-4 text-left space-y-2.5 mt-auto">
                <div className="text-[12px] font-medium text-[#1F4234] flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#1F4234] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                  <span>Office housekeeping</span>
                </div>
                <div className="text-[12px] font-medium text-[#1F4234] flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#1F4234] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M18 8h1a4 4 0 010 8h-1" />
                    <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
                    <line x1="6" y1="1" x2="6" y2="4" />
                    <line x1="10" y1="1" x2="10" y2="4" />
                    <line x1="14" y1="1" x2="14" y2="4" />
                  </svg>
                  <span>Pantry &amp; cafeteria support</span>
                </div>
                <div className="text-[12px] font-medium text-[#1F4234] flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#1F4234] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>Custom schedules</span>
                </div>
              </div>
            </div>

            {/* Coming Soon Card 4: Driver / Errand Support */}
            <div className="bg-white rounded-[24px] lg:rounded-[28px] p-6 text-center flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 border border-[rgba(31,66,52,0.08)] relative overflow-hidden h-full group">
              <div>
                {/* Top SOON Badge */}
                <div className="flex justify-start mb-2">
                  <span className="border border-[#A8843C] text-[#A8843C] text-[10px] font-bold tracking-[0.14em] uppercase px-3 py-1 rounded-full">
                    SOON
                  </span>
                </div>

                {/* Center Circular Icon Graphic with Leaf Motif */}
                <div className="relative w-22 h-22 rounded-full bg-[#EEF1E8] mx-auto flex items-center justify-center my-3 text-[#1F4234] shrink-0">
                  <svg className="w-10 h-10 text-[#1F4234]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2 11.2 2 11.6 2 12v4c0 .6.4 1 1 1h2" />
                    <circle cx="7" cy="17" r="2" />
                    <circle cx="17" cy="17" r="2" />
                  </svg>
                  {/* Leaf Graphic Accent */}
                  <svg className="absolute -right-3 top-2 w-8 h-8 text-[#A8843C]/40 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M12 2C6.5 2 2 6.5 2 12c0 5.5 4.5 10 10 10s10-4.5 10-10C22 6.5 17.5 2 12 2z" />
                    <path d="M12 22V12" />
                    <path d="M12 12c4-2 6-6 6-10" />
                  </svg>
                </div>

                {/* Title & Description */}
                <h4 className="font-serif text-[18px] sm:text-[19px] font-bold text-[#1F4234] text-center mb-1.5">
                  Driver / Errand Support
                </h4>
                <p className="text-[12.5px] text-[#3E5E4F] max-w-[26ch] mx-auto mb-5 leading-snug">
                  Driver assistance, local errands, pick-up and drop-off.
                </p>
              </div>

              {/* Bottom Feature Box */}
              <div className="bg-[#F9F8F4] rounded-[16px] p-4 text-left space-y-2.5 mt-auto">
                <div className="text-[12px] font-medium text-[#1F4234] flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#1F4234] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="12" y1="3" x2="12" y2="9" />
                    <line x1="12" y1="15" x2="12" y2="21" />
                    <line x1="3" y1="12" x2="9" y2="12" />
                    <line x1="15" y1="12" x2="21" y2="12" />
                  </svg>
                  <span>Experienced &amp; verified drivers</span>
                </div>
                <div className="text-[12px] font-medium text-[#1F4234] flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#1F4234] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Errands &amp; local assistance</span>
                </div>
                <div className="text-[12px] font-medium text-[#1F4234] flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#1F4234] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Safe &amp; on-time service</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}