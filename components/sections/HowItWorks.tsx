"use client";

import { motion } from "framer-motion";
import {
  MessageSquarePlus,
  UserCheck,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquarePlus,
    title: "Tell us what you need",
    description: "Share your requirement and preferences in a few quick clicks.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "We understand your requirement",
    description: "We review your preferences and specific needs to personalize care.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "We arrange the right support",
    description: "Relyn selects and prepares the qualified expert for your task.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "We've got it from here",
    description: "We handle details start-to-finish so you can focus on what matters.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#F7F0D4] px-6 py-10 sm:px-10 sm:py-12 lg:px-16">
      {/* Background Decorative Accent */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-[#e85d04]/5 blur-2xl" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 h-52 w-52 rounded-full bg-[#064e3b]/5 blur-2xl" />

      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <span className="mb-1.5 inline-block rounded-full bg-[#e85d04]/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e85d04]">
            A Simple 4-Step Flow
          </span>

          <h2 className="font-[var(--font-syne)] text-2xl font-medium tracking-tight text-[#29372c] sm:text-3xl md:text-4xl">
            How it works
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-[#706d64] sm:text-sm">
            Getting reliable care for your home should never be complicated.
            Here is how we bring peace of mind directly to your doorstep.
          </p>

          <div className="mx-auto mt-3 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-[#b8aa7b]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#8f7d4d]" />
            <span className="h-px w-8 bg-[#b8aa7b]" />
          </div>
        </motion.div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="group relative z-10 flex flex-col items-center rounded-xl border border-[#d5c9a8]/50 bg-[#fffaf0]/80 p-4 text-center transition-all duration-300 hover:border-[#8f7d4d]/40 hover:bg-[#fffaf0] hover:shadow-md"
              >
                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-[#d5c9a8] bg-[#FAF5E4] text-[#064e3b] shadow-xs transition-colors group-hover:bg-[#064e3b] group-hover:text-white"
                >
                  <Icon size={22} strokeWidth={1.5} />

                  {/* Floating Step Number Pill */}
                  <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#e85d04] text-[9px] font-bold text-white shadow-xs">
                    {step.number}
                  </span>
                </motion.div>

                {/* Step Content */}
                <h3 className="mt-3 font-[var(--font-figtree)] text-base font-semibold text-[#304035] group-hover:text-[#064e3b]">
                  {step.title}
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-[#706d64]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Compact Tagline & CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#d5c9a8] bg-[#FAF5E4] px-6 py-4 text-center sm:flex-row sm:text-left"
        >
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#8f7d4d]">
              Everything. Taken care of.
            </span>
            <h4 className="font-[var(--font-syne)] text-lg font-medium text-[#29372c]">
              Your home. <span className="italic text-[#064e3b]">Our responsibility.</span>
            </h4>
          </div>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#064e3b] px-5 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#0f7a5c] hover:shadow-md"
          >
            <span>Request a Service</span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}