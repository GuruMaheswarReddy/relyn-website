"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Heart, Clock, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Trust",
    description: "Dependable support you feel comfortable bringing into your home.",
    delay: 0.1,
  },
  {
    icon: Heart,
    title: "Care",
    description: "A thoughtful, personal approach to everyday support — not just a job done.",
    delay: 0.2,
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "Support you can count on, consistently, when you actually need it.",
    delay: 0.3,
  },
  {
    icon: Sparkles,
    title: "Peace of mind",
    description: "We take care of the details, so you don't have to think twice.",
    delay: 0.4,
  },
];


export default function WhyChooseRelyn() {
  return (
    <section className="bg-[#EEF1E8] py-8 sm:py-10 lg:py-12 relative overflow-hidden min-h-[calc(100vh-75px)] flex flex-col justify-center" id="why">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 w-full">

        {/* Top Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center mb-6 lg:mb-8">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 max-w-[560px]"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-[#A8843C] font-semibold text-[12px] tracking-wider uppercase mb-2">
              <span className="w-5 h-[1.5px] bg-[#A8843C]" />
              <span>WHY RELYN</span>
            </div>

            {/* Headline */}
            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-serif leading-[1.1] tracking-tight text-[#1F4234] mb-3">
              Support that feels like peace of mind,{" "}
              <span className="text-[#A8843C] italic font-serif font-normal block sm:inline">
                not a task ticked off.
              </span>
            </h2>

            {/* Lede Paragraph */}
            <p className="text-[14px] sm:text-[15px] text-[#3E5E4F] leading-relaxed max-w-[46ch]">
              When someone becomes part of your daily routine, it should never feel uncertain. Here&apos;s what that looks like in practice.
            </p>
          </motion.div>

          {/* Right Organic Arch Visual Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 relative flex justify-center lg:justify-end"
          >
            {/* Arch Frame wrapper */}
            <div className="relative w-full max-w-[380px] h-[200px] sm:h-[250px] lg:h-[270px]">
              
              {/* Soft background glow */}
              <div className="absolute inset-0 bg-[#A8843C]/10 rounded-[140px] blur-xl transform scale-95" />

              {/* Organic Arch Mask Container */}
              <div className="relative w-full h-full rounded-t-[140px] sm:rounded-t-[160px] rounded-b-[24px] overflow-hidden border-2 border-white/80 shadow-xl shadow-[#1F4234]/10">
                <Image
                  src="/why-relyn-arch.jpg"
                  alt="Serene modern home atmosphere showcasing Relyn care"
                  fill
                  priority
                  className="object-cover object-center"
                />

                {/* Gentle Ambient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F4234]/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Relyn Logo Outline Motif Overlay on top right */}
              <div className="absolute -top-3 -right-3 w-20 h-20 pointer-events-none opacity-40 text-[#A8843C]">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M 50 15 L 85 45 L 85 85 L 15 85 L 15 45 Z" />
                  <path d="M 50 45 C 42 35 32 45 50 65 C 68 45 58 35 50 45 Z" strokeWidth="1.2" />
                </svg>
              </div>

            </div>
          </motion.div>

        </div>

        {/* 4 Luxury Floating Value Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: pillar.delay }}
                className="group relative bg-white rounded-[20px] p-5 sm:p-5.5 lg:p-6 border border-[rgba(31,66,52,0.08)] shadow-[0_8px_25px_rgba(31,66,52,0.04)] hover:shadow-[0_18px_35px_rgba(31,66,52,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
              >
                {/* Circular Icon Badge */}
                <div className="w-11 h-11 rounded-full bg-[#FAF6EC] border border-[#A8843C]/30 flex items-center justify-center mb-3 shadow-xs group-hover:bg-[#1F4234] group-hover:border-[#1F4234] transition-all duration-300">
                  <IconComponent className="w-5 h-5 text-[#A8843C] group-hover:text-[#FAF6EC] transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-[18px] sm:text-[19px] text-[#1F4234] font-normal mb-1.5">
                  {pillar.title}
                </h3>

                {/* Subtle Gold Accent Line */}
                <div className="w-7 h-[2px] bg-[#A8843C]/40 rounded-full mb-2.5 group-hover:w-10 group-hover:bg-[#A8843C] transition-all duration-300" />

                {/* Description */}
                <p className="text-[13px] sm:text-[13.5px] text-[#3E5E4F] leading-snug">
                  {pillar.description}
                </p>

                {/* Corner Botanical Leaf Watermark Accent */}
                <svg
                  className="absolute -bottom-2 -right-2 w-16 h-16 text-[#1F4234]/5 group-hover:text-[#A8843C]/15 transition-colors duration-300 pointer-events-none"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                >
                  <path d="M50 0 C70 30, 90 40, 100 100 C40 90, 30 70, 0 50 C30 50, 50 30, 50 0 Z" />
                </svg>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}