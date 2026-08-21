"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function WhatWeDo() {
  return (
    <section className="py-24" id="services">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-[640px] mb-12"
        >
          <div className="label mb-3">What we offer</div>
          <h2 className="text-[30px] sm:text-[38px] lg:text-[40px] font-serif leading-[1.14] text-[#1F4234]">
            Three ways Relyn looks after your home.
          </h2>
          <p className="mt-4 text-[16px] text-[#3E5E4F] max-w-[54ch]">
            Every professional is matched to one role specifically, understood, briefed and arranged around your household's actual routine.
          </p>
        </motion.div>

        {/* 3 Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-[70px]">

          {/* Card 1: Housekeeping */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group bg-white border border-[rgba(31,66,52,0.14)] rounded-[8px] p-[36px_30px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_-28px_rgba(18,46,35,0.28)]"
          >
            <svg className="w-[44px] h-[44px] text-[#1F4234] mb-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M14 40 L26 12" strokeLinecap="round" />
              <path d="M26 12 C29 8 35 8 38 12 C34 13 30 17 28 22 L20 34 Z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 40 h14" strokeLinecap="round" />
            </svg>

            <div className="relative w-full h-[205px] overflow-hidden rounded-[8px] border border-[rgba(31,66,52,0.14)] mb-6">
              <Image
                src="/services/HouseKeeping.jpg"
                alt="Housekeeping"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="font-serif text-[21px] text-[#1F4234] mb-2.5">Housekeeping</h3>
            <p className="text-[14.3px] text-[#3E5E4F] mb-4 leading-relaxed">
              Everyday cleaning and household upkeep, organised around how your home actually runs.
            </p>

            <ul className="space-y-2 mb-5">
              <li className="text-[13.3px] text-[#3E5E4F] flex items-start gap-2">
                <span className="w-[5px] h-[5px] rounded-full bg-[#A8843C] mt-[7px] shrink-0" />
                Home cleaning
              </li>
              <li className="text-[13.3px] text-[#3E5E4F] flex items-start gap-2">
                <span className="w-[5px] h-[5px] rounded-full bg-[#A8843C] mt-[7px] shrink-0" />
                General household upkeep
              </li>
              <li className="text-[13.3px] text-[#3E5E4F] flex items-start gap-2">
                <span className="w-[5px] h-[5px] rounded-full bg-[#A8843C] mt-[7px] shrink-0" />
                Organisation &amp; assistance
              </li>
            </ul>

            <Link href="#contact" className="text-[13.5px] font-semibold text-[#A8843C] inline-flex items-center gap-1.5 hover:underline group/link">
              Request housekeeping
              <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </motion.div>

          {/* Card 2: Cooking / Meal Support */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group bg-white border border-[rgba(31,66,52,0.14)] rounded-[8px] p-[36px_30px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_-28px_rgba(18,46,35,0.28)]"
          >
            <svg className="w-[44px] h-[44px] text-[#1F4234] mb-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M10 24 a14 10 0 0 0 28 0 Z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 24 h32" strokeLinecap="round" />
              <path d="M18 16 c0 -4 -3 -4 -3 -8 M24 16 c0 -4 -3 -4 -3 -8 M30 16 c0 -4 -3 -4 -3 -8" strokeLinecap="round" />
            </svg>

            <div className="relative w-full h-[205px] overflow-hidden rounded-[8px] border border-[rgba(31,66,52,0.14)] mb-6">
              <Image
                src="/services/Cooking.jpg"
                alt="Cooking / Meal Support"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="font-serif text-[21px] text-[#1F4234] mb-2.5">Cooking / Meal Support</h3>
            <p className="text-[14.3px] text-[#3E5E4F] mb-4 leading-relaxed">
              Everyday cooking and meal preparation, cooked fresh to your family's taste.
            </p>

            <ul className="space-y-2 mb-5">
              <li className="text-[13.3px] text-[#3E5E4F] flex items-start gap-2">
                <span className="w-[5px] h-[5px] rounded-full bg-[#A8843C] mt-[7px] shrink-0" />
                Everyday cooking
              </li>
              <li className="text-[13.3px] text-[#3E5E4F] flex items-start gap-2">
                <span className="w-[5px] h-[5px] rounded-full bg-[#A8843C] mt-[7px] shrink-0" />
                Meal preparation
              </li>
              <li className="text-[13.3px] text-[#3E5E4F] flex items-start gap-2">
                <span className="w-[5px] h-[5px] rounded-full bg-[#A8843C] mt-[7px] shrink-0" />
                Kitchen assistance
              </li>
            </ul>

            <Link href="#contact" className="text-[13.5px] font-semibold text-[#A8843C] inline-flex items-center gap-1.5 hover:underline group/link">
              Request meal support
              <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </motion.div>

          {/* Card 3: Elder Care */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group bg-white border border-[rgba(31,66,52,0.14)] rounded-[8px] p-[36px_30px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_-28px_rgba(18,46,35,0.28)]"
          >
            <svg className="w-[44px] h-[44px] text-[#1F4234] mb-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="18" cy="12" r="5" />
              <path d="M10 30 c0 -8 6 -12 8 -12 s8 4 8 12" strokeLinecap="round" />
              <path d="M26 24 l7 -3 c2 -1 4 1 3 3 l-5 8 c-1 2 -3 3 -5 3 h-8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <div className="relative w-full h-[205px] overflow-hidden rounded-[8px] border border-[rgba(31,66,52,0.14)] mb-6">
              <Image
                src="/services/Elder_care.jpg"
                alt="Elder Care"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="font-serif text-[21px] text-[#1F4234] mb-2.5">Elder Care</h3>
            <p className="text-[14.3px] text-[#3E5E4F] mb-4 leading-relaxed">
              Day-to-day assistance and companionship, tailored to your family's routine.
            </p>

            <ul className="space-y-2 mb-5">
              <li className="text-[13.3px] text-[#3E5E4F] flex items-start gap-2">
                <span className="w-[5px] h-[5px] rounded-full bg-[#A8843C] mt-[7px] shrink-0" />
                Day-to-day assistance
              </li>
              <li className="text-[13.3px] text-[#3E5E4F] flex items-start gap-2">
                <span className="w-[5px] h-[5px] rounded-full bg-[#A8843C] mt-[7px] shrink-0" />
                Companionship
              </li>
              <li className="text-[13.3px] text-[#3E5E4F] flex items-start gap-2">
                <span className="w-[5px] h-[5px] rounded-full bg-[#A8843C] mt-[7px] shrink-0" />
                Support for elderly family members
              </li>
            </ul>

            <Link href="#contact" className="text-[13.5px] font-semibold text-[#A8843C] inline-flex items-center gap-1.5 hover:underline group/link">
              Request elder care
              <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </motion.div>

        </div>

        {/* Coming Soon Section */}
        <div>
          <div className="flex items-baseline gap-3.5 mb-6">
            <div className="label m-0">Coming soon</div>
            <h3 className="font-serif italic text-[20px] text-[#3E5E4F]">More support, on the way.</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="relative border border-dashed border-[rgba(31,66,52,0.2)] rounded-[8px] p-6 opacity-90">
              <span className="absolute top-4 right-4 text-[10px] font-bold tracking-[0.1em] uppercase text-[#A8843C] bg-[#EEF1E8] px-2.5 py-1 rounded-full">Soon</span>
              <svg className="w-7 h-7 text-[#3E5E4F] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="8" r="3.4" />
                <path d="M6 20c0-4 2.7-6 6-6s6 2 6 6" />
              </svg>
              <h4 className="font-sans font-semibold text-[15px] text-[#1F4234] mb-1.5">Child Care</h4>
              <p className="text-[12.5px] text-[#3E5E4F] leading-relaxed">Trusted childcare and everyday support for families.</p>
            </div>

            <div className="relative border border-dashed border-[rgba(31,66,52,0.2)] rounded-[8px] p-6 opacity-90">
              <span className="absolute top-4 right-4 text-[10px] font-bold tracking-[0.1em] uppercase text-[#A8843C] bg-[#EEF1E8] px-2.5 py-1 rounded-full">Soon</span>
              <svg className="w-7 h-7 text-[#3E5E4F] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="6" y="4" width="12" height="16" rx="1.5" />
                <path d="M9 9h6M9 13h6" />
              </svg>
              <h4 className="font-sans font-semibold text-[15px] text-[#1F4234] mb-1.5">Laundry &amp; Assistance</h4>
              <p className="text-[12.5px] text-[#3E5E4F] leading-relaxed">Laundry, ironing, folding and routine household assistance.</p>
            </div>

            <div className="relative border border-dashed border-[rgba(31,66,52,0.2)] rounded-[8px] p-6 opacity-90">
              <span className="absolute top-4 right-4 text-[10px] font-bold tracking-[0.1em] uppercase text-[#A8843C] bg-[#EEF1E8] px-2.5 py-1 rounded-full">Soon</span>
              <svg className="w-7 h-7 text-[#3E5E4F] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="4" y="7" width="16" height="12" rx="1.4" />
                <path d="M9 7V5.5A1.5 1.5 0 0110.5 4h3A1.5 1.5 0 0115 5.5V7" />
              </svg>
              <h4 className="font-sans font-semibold text-[15px] text-[#1F4234] mb-1.5">Corporate Support</h4>
              <p className="text-[12.5px] text-[#3E5E4F] leading-relaxed">Reliable support services for offices and workplaces.</p>
            </div>

            <div className="relative border border-dashed border-[rgba(31,66,52,0.2)] rounded-[8px] p-6 opacity-90">
              <span className="absolute top-4 right-4 text-[10px] font-bold tracking-[0.1em] uppercase text-[#A8843C] bg-[#EEF1E8] px-2.5 py-1 rounded-full">Soon</span>
              <svg className="w-7 h-7 text-[#3E5E4F] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 16l1.5-5A2 2 0 017.4 9.5h9.2a2 2 0 011.9 1.5L20 16" />
                <rect x="3" y="16" width="18" height="4" rx="1" />
                <circle cx="8" cy="20" r="1.4" />
                <circle cx="16" cy="20" r="1.4" />
              </svg>
              <h4 className="font-sans font-semibold text-[15px] text-[#1F4234] mb-1.5">Driver / Errand Support</h4>
              <p className="text-[12.5px] text-[#3E5E4F] leading-relaxed">Driver assistance, local errands, pick-up and drop-off.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}