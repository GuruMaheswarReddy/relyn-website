"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <>
      {/* FINAL CTA SECTION */}
      <section className="text-center py-28 bg-[#FAF6EC]">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="label justify-center mb-3">Ready when you are</div>
            <h2 className="text-[32px] sm:text-[42px] lg:text-[52px] font-serif leading-tight text-[#1F4234] mb-3.5">
              Everything. Taken care of.
            </h2>
            <div className="font-serif italic text-[19px] text-[#A8843C] mb-8">
              Your home. Our responsibility.
            </div>
            <div className="flex flex-wrap justify-center gap-3.5">
              <Link href="#contact" className="btn btn-gold">
                Get started
              </Link>
              <Link href="#services" className="btn btn-ghost">
                Explore services
              </Link>
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
              <div className="flex items-center gap-2.5 mb-3.5">
                <svg className="w-[26px] h-[22px] text-[#C6A15B]" viewBox="0 0 40 34" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 4 L36 17 L31 17 L31 30 L9 30 L9 17 L4 17 Z" />
                </svg>
                <span className="font-serif text-[21px] font-semibold text-[#FAF6EC] tracking-[0.06em]">RELYN</span>
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