"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ClockCheck, HeartHandshake, SmilePlus } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Trust",
    subtitle: "Vetted & Safe",
    description:
      "Dependable support you can feel completely comfortable bringing into your home.",
  },
  {
    icon: ClockCheck,
    title: "Reliability",
    subtitle: "Always On Time",
    description:
      "Support you can count on, exactly when you need it, without standard delays.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Care",
    subtitle: "Thoughtful Touch",
    description:
      "A tailored, warm, and personal approach to handling your everyday household support.",
  },
  {
    icon: SmilePlus,
    title: "Peace of Mind",
    subtitle: "Hassle-Free",
    description:
      "We manage all the intricate details start-to-finish so you don't have to stress.",
  },
];

export default function WhyChooseRelyn() {
  return (
    <section className="relative overflow-hidden bg-[#DBF5D6] px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
      {/* Background Subtle Accents */}
      <div className="pointer-events-none absolute -left-16 -top-16 h-60 w-60 rounded-full bg-[#52784c]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 -bottom-16 h-60 w-60 rounded-full bg-[#52784c]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="mb-2 inline-block rounded-full bg-[#52784c]/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3e5d38]">
            Why Relyn
          </span>

          <h2 className="font-[var(--font-syne)] text-2xl font-medium tracking-tight text-[#29372c] sm:text-3xl md:text-4xl">
            Why families choose us
          </h2>

          <div className="mx-auto mt-3 flex items-center justify-center gap-2.5">
            <span className="h-px w-10 bg-[#8aaa83]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#648a5d]" />
            <span className="h-px w-10 bg-[#8aaa83]" />
          </div>
        </motion.div>

        {/* 4 Pillars Benefits Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative z-10 flex flex-col items-center rounded-2xl border border-[#9fc49a]/60 bg-white/70 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-[#648a5d] hover:bg-white hover:shadow-lg hover:shadow-[#52784c]/10"
              >
                {/* Icon Badge */}
                <motion.div
                  whileHover={{ scale: 1.08, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#9fc49a]/50 bg-[#f4fbf3] text-[#40623a] shadow-xs transition-colors group-hover:bg-[#40623a] group-hover:text-white"
                >
                  <Icon size={26} strokeWidth={1.5} />
                </motion.div>

                {/* Subtitle Pill */}
                <span className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[#648a5d]">
                  {benefit.subtitle}
                </span>

                {/* Title */}
                <h3 className="font-[var(--font-figtree)] text-lg font-semibold text-[#29372c] group-hover:text-[#40623a]">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs leading-relaxed text-[#526052] sm:text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}