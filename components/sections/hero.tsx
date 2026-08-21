"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Calendar,
  RotateCcw,
  Award,
  Headphones,
  Lock,
} from "lucide-react";

export function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#FBF9F7] pt-[115px] pb-6 lg:pt-[130px] lg:pb-8 flex flex-col justify-between min-h-[90vh]">
        {/* Full Hero Background Image 1 starting at top-0 spanning behind transparent navbar */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/hero-cleaner-bg.jpg"
            alt="Professional housekeeper cleaning home"
            fill
            priority
            className="object-cover object-[70%_top] sm:object-[72%_0%]"
          />
        </div>

        {/* Hero Content Container - Aligned left over background */}
        <div className="relative z-10 max-w-[1360px] mx-auto px-6 md:px-10 lg:px-16 w-full flex-1 flex items-center pt-2 pb-6">
          <div className="max-w-[620px] lg:max-w-[560px]">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="label mb-3.5 text-[#825D34]"
            >
              Trusted Household Support · Bengaluru
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[44px] sm:text-[56px] lg:text-[68px] font-serif leading-[1.03] tracking-tight mb-4 text-[#021B30]"
            >
              Everything.{" "}
              <span className="text-[#825D34] italic font-serif font-normal block sm:inline">
                Taken care of.
              </span>
            </motion.h1>

            {/* Subtitle Lines */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-1 mb-7"
            >
              <p className="text-[16.5px] sm:text-[18px] text-[#021B30] font-medium leading-snug">
                Trusted professionals for your home and family.
              </p>
              <p className="text-[15px] sm:text-[16.5px] text-[#525D5A] leading-normal">
                Reliable. Verified. On your schedule.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex flex-wrap items-center gap-4 mb-7"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 bg-[#021B30] hover:bg-[#0b2d4b] text-[#FBF9F7] px-7 py-3.5 rounded-full font-semibold text-[14.5px] shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>Book a Service</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#how"
                className="inline-flex items-center justify-center gap-2.5 bg-white/90 hover:bg-white border border-[#C3BAAE] hover:border-[#825D34] text-[#021B30] px-6 py-3.5 rounded-full font-semibold text-[14.5px] shadow-xs backdrop-blur-xs transition-all duration-200"
              >
                <div className="w-5.5 h-5.5 rounded-full border border-[#021B30]/30 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 text-[#021B30] fill-[#021B30] ml-0.5" />
                </div>
                <span>How It Works</span>
              </Link>
            </motion.div>

            {/* Trust Badge / Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex items-center gap-3 pt-1"
            >
              {/* Stacked Avatars */}
              <div className="flex -space-x-2.5 overflow-hidden">
                <div className="w-9 h-9 rounded-full ring-2 ring-[#FBF9F7] bg-[#021B30] text-[#FBF9F7] flex items-center justify-center text-xs font-bold shadow-xs">
                  P
                </div>
                <div className="w-9 h-9 rounded-full ring-2 ring-[#FBF9F7] bg-[#825D34] text-[#FBF9F7] flex items-center justify-center text-xs font-bold shadow-xs">
                  A
                </div>
                <div className="w-9 h-9 rounded-full ring-2 ring-[#FBF9F7] bg-[#525D5A] text-[#FBF9F7] flex items-center justify-center text-xs font-bold shadow-xs">
                  S
                </div>
              </div>

              <div className="text-[13.5px] text-[#525D5A] leading-snug">
                Trusted by <strong className="font-semibold text-[#021B30]">500+ families</strong>
                <br />
                across your city
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating 6 Feature Badges Bar overlapping bottom hero fold */}
        <div className="max-w-[1360px] mx-auto px-6 md:px-10 lg:px-16 relative z-20 w-full mb-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-[28px] lg:rounded-[36px] p-5 md:p-7 shadow-xl shadow-[#021B30]/5 border border-[#E1D6C9]"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#F2EDE6]">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center p-2">
                <div className="w-11 h-11 rounded-full bg-[#F2EDE6] flex items-center justify-center text-[#021B30] mb-2.5 shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-[#021B30]" />
                </div>
                <h4 className="font-semibold text-[13.5px] text-[#021B30] leading-snug">
                  Verified Professionals
                </h4>
                <p className="text-[11.5px] text-[#525D5A]/90 mt-1 leading-normal">
                  Background verified for your safety
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center p-2 pt-4 sm:pt-2">
                <div className="w-11 h-11 rounded-full bg-[#F2EDE6] flex items-center justify-center text-[#021B30] mb-2.5 shadow-xs">
                  <Calendar className="w-5 h-5 text-[#021B30]" />
                </div>
                <h4 className="font-semibold text-[13.5px] text-[#021B30] leading-snug">
                  Flexible Scheduling
                </h4>
                <p className="text-[11.5px] text-[#525D5A]/90 mt-1 leading-normal">
                  Choose timing that works for you
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center p-2 pt-4 sm:pt-2">
                <div className="w-11 h-11 rounded-full bg-[#F2EDE6] flex items-center justify-center text-[#021B30] mb-2.5 shadow-xs">
                  <RotateCcw className="w-5 h-5 text-[#021B30]" />
                </div>
                <h4 className="font-semibold text-[13.5px] text-[#021B30] leading-snug">
                  Replacement Support
                </h4>
                <p className="text-[11.5px] text-[#525D5A]/90 mt-1 leading-normal">
                  We&apos;ve got you covered when they can&apos;t make it
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center text-center p-2 pt-4 sm:pt-2">
                <div className="w-11 h-11 rounded-full bg-[#F2EDE6] flex items-center justify-center text-[#021B30] mb-2.5 shadow-xs">
                  <Award className="w-5 h-5 text-[#021B30]" />
                </div>
                <h4 className="font-semibold text-[13.5px] text-[#021B30] leading-snug">
                  Quality Assured
                </h4>
                <p className="text-[11.5px] text-[#525D5A]/90 mt-1 leading-normal">
                  Trained professionals you can rely on
                </p>
              </div>

              {/* Feature 5 */}
              <div className="flex flex-col items-center text-center p-2 pt-4 sm:pt-2">
                <div className="w-11 h-11 rounded-full bg-[#F2EDE6] flex items-center justify-center text-[#021B30] mb-2.5 shadow-xs">
                  <Headphones className="w-5 h-5 text-[#021B30]" />
                </div>
                <h4 className="font-semibold text-[13.5px] text-[#021B30] leading-snug">
                  Customer Support
                </h4>
                <p className="text-[11.5px] text-[#525D5A]/90 mt-1 leading-normal">
                  We&apos;re here to help, always
                </p>
              </div>

              {/* Feature 6 */}
              <div className="flex flex-col items-center text-center p-2 pt-4 sm:pt-2">
                <div className="w-11 h-11 rounded-full bg-[#F2EDE6] flex items-center justify-center text-[#021B30] mb-2.5 shadow-xs">
                  <Lock className="w-5 h-5 text-[#021B30]" />
                </div>
                <h4 className="font-semibold text-[13.5px] text-[#021B30] leading-snug">
                  Secure Payments
                </h4>
                <p className="text-[11.5px] text-[#525D5A]/90 mt-1 leading-normal">
                  Safe, cashless and hassle-free
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Decorative Thread Divider */}
      <div className="thread my-6">
        <svg viewBox="0 0 120 20" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M0 10 h44 M76 10 h44 M52 10 c2,-6 6,-6 8,0 s6,6 8,0" />
        </svg>
      </div>
    </>
  );
}