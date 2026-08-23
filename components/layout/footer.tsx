"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { RelynLogoIcon } from "@/components/ui/logo";

export function Footer() {
  return (
    <>
      {/* FINAL LUXURY CTA SECTION */}
      <section className="py-20 lg:py-24 bg-[#FAF6EC] relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#1F4234] via-[#14352A] to-[#0D241C] p-10 sm:p-14 lg:p-20 text-center shadow-2xl border border-[#A8843C]/30"
          >
            {/* Ambient Gold Radial Background Glow */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#A8843C]/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-20 right-10 w-[300px] h-[300px] bg-[#A8843C]/10 rounded-full blur-[80px] pointer-events-none" />

            {/* Background Decorative Relyn House Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-[500px] h-[500px] text-[#A8843C]" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M 50 15 L 85 45 L 85 85 L 15 85 L 15 45 Z" />
                <path d="M 50 45 C 42 35 32 45 50 65 C 68 45 58 35 50 45 Z" strokeWidth="1" />
              </svg>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-[680px] mx-auto">
              
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A8843C]/15 border border-[#A8843C]/40 text-[#E8D3A7] font-semibold text-[12px] tracking-widest uppercase mb-6 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#E8D3A7] animate-ping" />
                <span>READY WHEN YOU ARE</span>
              </div>

              {/* Headline */}
              <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-serif leading-[1.06] tracking-tight text-[#FAF6EC] mb-4">
                Everything.{" "}
                <span className="text-[#E8D3A7] italic font-serif font-normal block sm:inline">
                  Taken care of.
                </span>
              </h2>

              {/* Subtitle Tagline */}
              <p className="font-serif italic text-[19px] sm:text-[22px] text-[#E8D3A7]/90 max-w-[34ch] mx-auto mb-9 font-normal">
                Your home. Our responsibility.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                <Link
                  href="#contact"
                  className="group relative inline-flex items-center justify-center gap-3 bg-[#A8843C] hover:bg-[#B8944C] text-[#FAF6EC] px-8 py-4 rounded-full font-semibold text-[14.5px] shadow-[0_8px_30px_rgba(168,132,60,0.4)] hover:shadow-[0_12px_40px_rgba(168,132,60,0.6)] hover:scale-[1.04] transition-all duration-300 ring-2 ring-[#E8D3A7]/50"
                >
                  <span>Book a Service</span>
                  <ArrowRight className="w-4 h-4 text-[#FAF6EC] transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="#services"
                  className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/25 text-[#FAF6EC] px-7 py-4 rounded-full font-semibold text-[14.5px] backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
                >
                  <Sparkles className="w-4 h-4 text-[#E8D3A7]" />
                  <span>Explore Services</span>
                </Link>
              </div>

              {/* Trust Badges Divider */}
              <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-[13px] text-[#FAF6EC]/80 font-medium">
                <div className="flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4.5 h-4.5 text-[#E8D3A7]" />
                  <span>Background Verified Staff</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#E8D3A7]" />
                  <span>Replacement Support</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Sparkles className="w-4.5 h-4.5 text-[#E8D3A7]" />
                  <span>Trusted Across Bengaluru</span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#122E23] text-[rgba(250,246,236,0.75)] py-16 text-[14px]">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 pb-12 border-b border-[rgba(250,246,236,0.14)]">
            
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <RelynLogoIcon className="w-9 h-9" />
                <div className="flex flex-col">
                  <span className="font-serif text-[22px] font-bold tracking-tight text-[#FAF6EC] leading-none">
                    Relyn
                  </span>
                  <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#c08a3e] mt-0.5">
                    — TAKEN CARE OF. —
                  </span>
                </div>
              </div>
              <p className="max-w-[32ch] leading-relaxed text-[13.5px]">
                Relyn India Pvt Ltd connects families with dependable household support — housekeeping, cooking and elder care — starting in JP Nagar and Banashankari, Bengaluru.
              </p>
            </div>

            {/* Services */}
            <div>
              <h5 className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#C6A15B] mb-4">Services</h5>
              <div className="space-y-2">
                <Link href="#services" className="block text-[14px] hover:text-[#FAF6EC] transition-colors">Housekeeping</Link>
                <Link href="#services" className="block text-[14px] hover:text-[#FAF6EC] transition-colors">Cooking / Meal Support</Link>
                <Link href="#services" className="block text-[14px] hover:text-[#FAF6EC] transition-colors">Elder Care</Link>
              </div>
            </div>

            {/* Company */}
            <div>
              <h5 className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#C6A15B] mb-4">Company</h5>
              <div className="space-y-2">
                <Link href="#about" className="block text-[14px] hover:text-[#FAF6EC] transition-colors">About Relyn</Link>
                <Link href="#how" className="block text-[14px] hover:text-[#FAF6EC] transition-colors">How it works</Link>
                <Link href="#contact" className="block text-[14px] hover:text-[#FAF6EC] transition-colors">Contact</Link>
              </div>
            </div>

            {/* Coming Soon */}
            <div>
              <h5 className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#C6A15B] mb-4">Coming soon</h5>
              <div className="space-y-2">
                <Link href="#services" className="block text-[14px] hover:text-[#FAF6EC] transition-colors">Child Care</Link>
                <Link href="#services" className="block text-[14px] hover:text-[#FAF6EC] transition-colors">Laundry &amp; Assistance</Link>
                <Link href="#services" className="block text-[14px] hover:text-[#FAF6EC] transition-colors">Corporate Support</Link>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 text-[12.5px] text-[rgba(250,246,236,0.5)]">
            <span>© 2026 Relyn India Pvt Ltd</span>
            <span>Bengaluru, Karnataka</span>
          </div>

        </div>
      </footer>
    </>
  );
}