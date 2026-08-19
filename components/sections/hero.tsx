"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative h-[100vh] min-h-[680px] overflow-hidden bg-[#060c14]"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ scale: 1.02 }}
          animate={{ scale: 1.02 }}
        >
          <Image
            src="/hero_banner.jpg"
            alt="Hero background banner"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>

        {/* Soft Dark Overlay */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[#060c14]/30"
        />
      </div>

      {/* Floating Navbar */}
      <Navbar />

      {/* Fixed Vertical CTA Tab */}
      <Link
        href="/contact"
        className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 items-center justify-center rounded-l-md bg-[#094B3D] px-3 py-6 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#0F7A5C] lg:flex"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
        aria-label="Book a Service"
      >
        Book a Service
      </Link>

      {/* Transparent Glass Content Container */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 pt-16 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: EASE,
          }}
          className={cn(
            "relative mx-auto w-full max-w-[1140px] overflow-hidden",
            "rounded-[28px] sm:rounded-[36px]",
            "border border-white/20"
          )}
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.03) 100%), rgba(6, 12, 20, 0.25)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            boxShadow:
              "0 30px 90px -20px rgba(0, 0, 0, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.25)",
            padding:
              "clamp(36px, 4.5vw, 60px) clamp(28px, 4.5vw, 64px)",
          }}
        >
          {/* Brand Pre-heading Pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: EASE,
            }}
            className="mb-4"
          >
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-white backdrop-blur-md">
              Relyn
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: EASE,
              delay: 0.1,
            }}
            className="max-w-[900px] text-left text-[40px] font-medium leading-[1.08] tracking-tight text-white drop-shadow-sm sm:text-[58px] lg:text-[70px]"
            style={{
              fontFamily:
                "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            }}
          >
            Everything. Taken care of.
          </motion.h1>

          {/* Divider */}
          <div className="my-6 h-[1px] w-full bg-white/15 sm:my-10" />

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12">

            {/* Description & Primary CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: EASE,
                delay: 0.2,
              }}
              className="flex flex-col items-start gap-6 sm:flex-row sm:items-center lg:col-span-8"
            >
              <div className="flex items-start gap-3">
                {/* Green Arrow */}
                <span className="mt-0.5 select-none text-xl font-bold text-[#094B3D]">
                  &rarr;
                </span>

                <p className="max-w-xl text-base font-normal leading-relaxed text-slate-100 drop-shadow-sm sm:text-lg">
                  Trusted professionals providing reliable support for your home, 
                  bringing you complete comfort and true peace of mind.
                </p>
              </div>

              {/* Primary CTA */}
              <Link
                href="/booking"
                className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#094B3D] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#0F7A5C] hover:shadow-xl"
              >
                Book a Service
              </Link>
            </motion.div>

            {/* Right Rating / Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: EASE,
                delay: 0.3,
              }}
              className="mt-4 flex flex-col justify-end lg:col-span-4 lg:mt-0 lg:items-end"
            >
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold tracking-wide text-white drop-shadow-sm">
                  Trusted Care
                </span>

                {/* Green Stars */}
                <div className="flex gap-0.5 text-xs text-[#094B3D]">
                  ★ ★ ★ ★ ★
                </div>
              </div>

              <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200 drop-shadow-sm">
                HOUSEKEEPING • COOKING • CARE
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}