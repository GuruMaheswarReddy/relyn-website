"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { mainNav } from "@/constants/navigation";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF6EC] border-b border-[rgba(31,66,52,0.06)]">
      <nav className="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between h-[75px]">
        {/* Brand Logo & Subtitle */}
        <Link href="#top" className="flex items-center gap-3.5 group">
          <div className="w-10 h-10 relative shrink-0">
            <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
              <path
                d="M30 8 L48 24 L42 24 L42 46 L18 46 L18 24 L12 24 Z"
                stroke="#021B30"
                strokeWidth="3.2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="30" cy="27" r="4" fill="#825D34" />
              <path
                d="M22 42 C22 35 38 35 38 42"
                stroke="#021B30"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-[24px] font-bold tracking-tight text-[#021B30] leading-none">
              Relyn
            </span>
            <span className="text-[8.5px] font-bold uppercase tracking-[0.25em] text-[#525D5A] mt-1">
              — TAKEN CARE OF. —
            </span>
          </div>
        </Link>

        {/* Desktop Links floating on top of background photo */}
        <div className="hidden md:flex items-center gap-9 text-[15px] font-medium text-[#525D5A]">
          {mainNav.map((item, idx) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-1 hover:text-[#021B30] transition-colors group"
            >
              <span>{item.label}</span>
              {idx === 0 ? (
                <span className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-[#021B30] rounded-full" />
              ) : (
                <span className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-[#021B30] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200 rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 bg-[#1F4234] hover:bg-[#021B30] text-[#FAF6EC] px-6 py-2.5 rounded-full text-[14px] font-semibold ring-2 ring-[#A8843C]/80 hover:ring-[#A8843C] shadow-[0_4px_20px_rgba(168,132,60,0.3)] hover:shadow-[0_6px_28px_rgba(168,132,60,0.5)] hover:scale-[1.03] transition-all duration-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A8843C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A8843C]"></span>
            </span>
            <span>Book a Service</span>
            <ArrowRight className="w-4 h-4 text-[#A8843C] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[#021B30]"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#FBF9F7]/95 backdrop-blur-md px-6 py-4 space-y-3 border-b border-[#021B30]/10">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-[#021B30] py-1.5"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="group relative inline-flex items-center justify-center gap-2 w-full bg-[#1F4234] text-[#FAF6EC] py-3 rounded-full text-sm font-semibold ring-2 ring-[#A8843C] shadow-[0_4px_20px_rgba(168,132,60,0.3)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A8843C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A8843C]"></span>
              </span>
              <span>Book a Service</span>
              <ArrowRight className="w-4 h-4 text-[#A8843C]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}