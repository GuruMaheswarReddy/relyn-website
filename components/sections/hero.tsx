"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative h-[100vh] min-h-[680px] overflow-hidden bg-[#060c14]"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {!videoFailed ? (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ scale: 1.02 }}
            animate={{ scale: 1.02 }}
          >
            <video
              className="absolute inset-0 h-full w-full object-cover will-change-transform"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onError={() => setVideoFailed(true)}
            >
              <source
                src="/videos/0_Sci_fi_Worldwide_3840x2160 (1).mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>
        ) : null}

        {/* Dark Video Overlay */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[#060c14]/40"
        />
      </div>

      {/* Floating Navbar */}
      <Navbar />

      {/* Fixed Vertical "Start a project" CTA Tab on Right Edge */}
      <Link
        href="/contact"
        className="fixed top-1/2 right-0 z-40 hidden -translate-y-1/2 items-center justify-center bg-[#ff5a00] px-3 py-6 text-[11px] font-bold tracking-[0.2em] text-white uppercase transition-opacity hover:opacity-90 lg:flex"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        aria-label="Start a project"
      >
        Start a project
      </Link>

      {/* Hero Glass Content Container */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-8 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className={cn(
            "relative mx-auto w-full max-w-[1140px] overflow-hidden",
            "rounded-[28px] sm:rounded-[36px]",
            "border border-white/10"
          )}
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%), rgba(8, 14, 24, 0.55)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow:
              "0 30px 90px -20px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.12)",
            padding: "clamp(40px, 5vw, 68px) clamp(32px, 5vw, 72px)",
          }}
        >
          {/* Main Headline */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="max-w-[900px] text-left text-[44px] sm:text-[62px] lg:text-[76px] font-medium tracking-tight text-white leading-[1.06]"
            style={{
              fontFamily:
                "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            }}
          >
            Building digital experiences that drive real growth.
          </motion.h1>

          {/* Divider Line */}
          <div className="my-8 sm:my-12 h-[1px] w-full bg-white/10" />

          {/* Bottom Grid Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            {/* Left Description with Orange Arrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
              className="lg:col-span-8 flex items-start gap-3"
            >
              <span className="text-[#ff5a00] text-xl font-bold mt-0.5 select-none">
                &rarr;
              </span>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                The Website Makers builds high-performing websites and
                result-driven digital strategies designed to grow your brand,
                increase visibility, and generate leads.
              </p>
            </motion.div>

            {/* Right Badge / Rating Area */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
              className="lg:col-span-4 flex flex-col lg:items-end justify-end mt-4 lg:mt-0"
            >
              <div className="flex items-center gap-2">
                <span className="text-white text-base font-semibold tracking-wide">
                  Digital Growth
                </span>
                <div className="flex text-[#ff5a00] text-xs gap-0.5">
                  ★ ★ ★ ★ ★
                </div>
              </div>
              <span className="text-[10px] tracking-[0.25em] text-slate-400 uppercase font-semibold mt-1">
                WEBSITE • MARKETING • SEO
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}