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
      {/* SVG ClipPath Definition matching reference screenshot */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <clipPath id="hero-curvy-frame" clipPathUnits="objectBoundingBox">
            <path d="M 0.24 0 C 0.04 0.30, 0 0.68, 0 1 L 1 1 L 1 0 Z" />
          </clipPath>
        </defs>
      </svg>

      <section className="relative overflow-hidden bg-[#FAF6EC] pt-6 lg:pt-8 pb-4 flex flex-col justify-between min-h-[calc(100vh-75px)]">
        
        {/* Right Background Image spanning all the way to the RIGHT EDGE (right-0) */}
        <div className="absolute top-0 right-0 bottom-[120px] lg:bottom-[95px] w-full lg:w-[50vw] z-0 pointer-events-none hidden lg:block overflow-hidden">
          <div
            className="w-full h-full relative"
            style={{ clipPath: "url(#hero-curvy-frame)" }}
          >
            <Image
              src="/hero-cleaner-bg.jpg"
              alt="Relyn housekeeper preparing and cleaning home"
              fill
              priority
              className="object-cover object-[70%_top]"
            />
            {/* Soft Left Gradient Overlay blending into Ivory background */}
            <div className="absolute inset-y-0 left-0 w-[25%] bg-gradient-to-r from-[#FAF6EC] via-[#FAF6EC]/30 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Hero Left Content Container */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10 w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pt-2 pb-4">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 max-w-[560px]">
            {/* Top Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="label mb-2.5 text-[#A8843C]"
            >
              TRUSTED HOUSEHOLD SUPPORT &middot; BENGALURU
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[40px] sm:text-[50px] lg:text-[58px] font-serif leading-[1.04] tracking-tight mb-2 text-[#1F4234]"
            >
              Everything.{" "}
              <span className="text-[#A8843C] italic font-serif font-normal block sm:inline">
                Taken care of.
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif italic text-[18px] sm:text-[20px] text-[#1F4234] mb-3 font-normal"
            >
              Your home. Our responsibility.
            </motion.div>

            {/* Lede Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[14px] sm:text-[15px] text-[#3E5E4F] leading-relaxed max-w-[45ch] mb-6"
            >
              Relyn connects you with dependable, verified professionals for housekeeping, cooking and elder care &mdash; so the people in your home are people you can genuinely rely on.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 mb-6"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#1F4234] hover:bg-[#122E23] text-[#FAF6EC] px-6 py-3 rounded-full font-semibold text-[13.5px] transition-all duration-200 group shadow-md"
              >
                <span>Book a Service</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#how"
                className="inline-flex items-center justify-center gap-2 bg-white border border-[#1F4234]/25 hover:border-[#1F4234] text-[#1F4234] px-5 py-3 rounded-full font-semibold text-[13.5px] transition-all duration-200 shadow-xs"
              >
                <div className="w-5 h-5 rounded-full border border-[#1F4234]/30 flex items-center justify-center">
                  <Play className="w-2 h-2 text-[#1F4234] fill-[#1F4234] ml-0.5" />
                </div>
                <span>How It Works</span>
              </Link>
            </motion.div>

            {/* Social Proof / Avatars */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex items-center gap-3 pt-0.5"
            >
              <div className="flex -space-x-2.5 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Client avatar 1"
                  className="w-8.5 h-8.5 rounded-full ring-2 ring-[#FAF6EC] object-cover shadow-xs"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Client avatar 2"
                  className="w-8.5 h-8.5 rounded-full ring-2 ring-[#FAF6EC] object-cover shadow-xs"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Client avatar 3"
                  className="w-8.5 h-8.5 rounded-full ring-2 ring-[#FAF6EC] object-cover shadow-xs"
                />
              </div>

              <div className="text-[12.5px] text-[#3E5E4F] leading-snug">
                Trusted by <strong className="font-bold text-[#1F4234]">500+ families</strong>
                <br />
                across your city
              </div>
            </motion.div>
          </div>

          {/* Mobile/Tablet Fallback Card for Image */}
          <div className="lg:hidden w-full h-[320px] sm:h-[380px] relative rounded-[24px] overflow-hidden shadow-lg border border-[#1F4234]/10">
            <Image
              src="/hero-cleaner-bg.jpg"
              alt="Relyn housekeeper preparing and cleaning home"
              fill
              priority
              className="object-cover object-[70%_center]"
            />
          </div>

        </div>

        {/* Floating 6 Feature Badges Bar */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-20 w-full mb-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-[24px] lg:rounded-[30px] p-4 sm:p-5 lg:p-6 shadow-xl shadow-[#1F4234]/5 border border-[rgba(31,66,52,0.1)]"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-3 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(31,66,52,0.08)]">
              
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center p-1.5">
                <div className="w-10 h-10 rounded-full bg-[#EEF1E8] flex items-center justify-center text-[#1F4234] mb-2 shadow-xs">
                  <ShieldCheck className="w-4.5 h-4.5 text-[#1F4234]" />
                </div>
                <h4 className="font-semibold text-[13px] text-[#1F4234] leading-snug">
                  Verified Professionals
                </h4>
                <p className="text-[11px] text-[#3E5E4F] mt-0.5 leading-normal">
                  Background verified for your safety
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center p-1.5 pt-3 sm:pt-1.5">
                <div className="w-10 h-10 rounded-full bg-[#EEF1E8] flex items-center justify-center text-[#1F4234] mb-2 shadow-xs">
                  <Calendar className="w-4.5 h-4.5 text-[#1F4234]" />
                </div>
                <h4 className="font-semibold text-[13px] text-[#1F4234] leading-snug">
                  Flexible Scheduling
                </h4>
                <p className="text-[11px] text-[#3E5E4F] mt-0.5 leading-normal">
                  Choose timing that works for you
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center p-1.5 pt-3 sm:pt-1.5">
                <div className="w-10 h-10 rounded-full bg-[#EEF1E8] flex items-center justify-center text-[#1F4234] mb-2 shadow-xs">
                  <RotateCcw className="w-4.5 h-4.5 text-[#1F4234]" />
                </div>
                <h4 className="font-semibold text-[13px] text-[#1F4234] leading-snug">
                  Replacement Support
                </h4>
                <p className="text-[11px] text-[#3E5E4F] mt-0.5 leading-normal">
                  We&apos;ve got you covered when they can&apos;t make it
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center text-center p-1.5 pt-3 sm:pt-1.5">
                <div className="w-10 h-10 rounded-full bg-[#EEF1E8] flex items-center justify-center text-[#1F4234] mb-2 shadow-xs">
                  <Award className="w-4.5 h-4.5 text-[#1F4234]" />
                </div>
                <h4 className="font-semibold text-[13px] text-[#1F4234] leading-snug">
                  Quality Assured
                </h4>
                <p className="text-[11px] text-[#3E5E4F] mt-0.5 leading-normal">
                  Trained professionals you can rely on
                </p>
              </div>

              {/* Feature 5 */}
              <div className="flex flex-col items-center text-center p-1.5 pt-3 sm:pt-1.5">
                <div className="w-10 h-10 rounded-full bg-[#EEF1E8] flex items-center justify-center text-[#1F4234] mb-2 shadow-xs">
                  <Headphones className="w-4.5 h-4.5 text-[#1F4234]" />
                </div>
                <h4 className="font-semibold text-[13px] text-[#1F4234] leading-snug">
                  Customer Support
                </h4>
                <p className="text-[11px] text-[#3E5E4F] mt-0.5 leading-normal">
                  We&apos;re here to help, always
                </p>
              </div>

              {/* Feature 6 */}
              <div className="flex flex-col items-center text-center p-1.5 pt-3 sm:pt-1.5">
                <div className="w-10 h-10 rounded-full bg-[#EEF1E8] flex items-center justify-center text-[#1F4234] mb-2 shadow-xs">
                  <Lock className="w-4.5 h-4.5 text-[#1F4234]" />
                </div>
                <h4 className="font-semibold text-[13px] text-[#1F4234] leading-snug">
                  Secure Payments
                </h4>
                <p className="text-[11px] text-[#3E5E4F] mt-0.5 leading-normal">
                  Safe, cashless and hassle-free
                </p>
              </div>

            </div>
          </motion.div>
        </div>

      </section>

      {/* Decorative Thread Divider */}
      <div className="thread my-2">
        <svg viewBox="0 0 120 20" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M0 10 h44 M76 10 h44 M52 10 c2,-6 6,-6 8,0 s6,6 8,0" />
        </svg>
      </div>
    </>
  );
}