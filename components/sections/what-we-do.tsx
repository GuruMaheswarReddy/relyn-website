"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const activeServices = [
  {
    title: "Housekeeping",
    slug: "house-keeping",
    image: "/services/HouseKeeping.jpg",
    url: "/services/house-keeping",
    bullets: [
      "Home cleaning",
      "General household upkeep",
      "Organisation and assistance",
    ],
  },
  {
    title: "Cooking / Meal Support",
    slug: "cooking",
    image: "/services/Cooking.jpg",
    url: "/services/cooking",
    bullets: [
      "Everyday cooking",
      "Meal preparation",
      "Kitchen assistance",
    ],
  },
  {
    title: "Elder Care",
    slug: "elder-care",
    image: "/services/Elder_care.jpg",
    url: "/services/elder-care",
    bullets: [
      "Day-to-day assistance",
      "Companionship",
      "Support for elderly family members",
    ],
  },
];

const comingSoonServices = [
  {
    title: "Child Care",
    slug: "child-care",
    tagline: "Trusted childcare and everyday support for families.",
  },
  {
    title: "Laundry & Household Assistance",
    slug: "laundry-household-assistance",
    tagline: "Laundry, ironing, folding and other routine household assistance.",
  },
  {
    title: "Corporate / Workplace Support",
    slug: "corporate-workplace-support",
    tagline: "Reliable support services for offices and workplaces.",
  },
  {
    title: "Driver / Errand Support",
    subtitle: "(Permanent placement)",
    slug: "driver-errand-support",
    tagline: "Driver assistance, local errands, pick-up/drop-off and other day-to-day requirements.",
  },
];

export function WhatWeDo() {
  return (
    <section
      id="services"
      aria-labelledby="our-services-heading"
      className="bg-[#F8FAFC] py-20 text-[#0F172A] sm:py-28 lg:py-32"
    >
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-end justify-between gap-4 border-b border-[#DDE1E6] pb-8">
          <div>
            <span className="mb-2 inline-block rounded-full bg-[#094B3D]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#094B3D]">
              Core Offerings
            </span>
            <h2
              id="our-services-heading"
              className="font-[var(--font-syne)] text-[36px] font-medium leading-none tracking-tight text-[#094B3D] sm:text-[52px] lg:text-[60px]"
            >
              Our Services
            </h2>
          </div>
          <p className="hidden shrink-0 pb-1 text-[12px] font-semibold uppercase tracking-[0.25em] text-[#094B3D] sm:block">
            Tailored For Your Home
          </p>
        </div>

        {/* Active Launch Services (3 Column Grid) */}
        <div className="mt-12">
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {activeServices.map((service, index) => {
              const number = String(index + 1).padStart(2, "0");

              return (
                <motion.li
                  key={service.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    ease: EASE,
                    delay: index * 0.1,
                  }}
                  className="flex"
                >
                  <Link href={service.url} className="group relative flex w-full flex-col justify-between overflow-hidden rounded-2xl border border-[#DDE1E6] bg-white p-5 transition-all duration-300 hover:bg-[#F4F8F6] hover:shadow-xl hover:shadow-[#094B3D]/10">
                    {/* Animated Borders on Hover */}
                    <span className="absolute right-0 top-0 h-[2px] w-0 bg-[#094B3D] transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-full" />
                    <span className="absolute left-0 top-0 h-0 w-[2px] bg-[#094B3D] transition-all delay-150 duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:h-full" />
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#094B3D] transition-all delay-300 duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:w-full" />
                    <span className="absolute bottom-0 right-0 h-0 w-[2px] bg-[#094B3D] transition-all delay-[450ms] duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:h-full" />

                    <div>
                      {/* Service Image Container */}
                      <div className="relative flex h-[240px] w-full items-center justify-center overflow-hidden rounded-xl bg-slate-100 sm:h-[260px]">
                        {service.image ? (
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        ) : (
                          <span className="text-4xl font-bold text-slate-300">
                            {number}
                          </span>
                        )}
                        <div className="absolute left-3 top-3 rounded-md bg-white/90 px-2.5 py-1 text-xs font-bold text-[#094B3D] shadow-xs backdrop-blur-xs">
                          {number}
                        </div>
                      </div>

                      {/* Details & Bullet Points */}
                      <div className="pb-2 pt-5">
                        <h3 className="text-center text-[20px] font-bold tracking-tight text-[#094B3D] sm:text-[22px]">
                          {service.title}
                        </h3>
                        <ul className="mt-4 space-y-2 text-left">
                          {service.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-[#475569] sm:text-sm">
                              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#094B3D]" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Navigation Action Button */}
                    <div className="mt-6 flex items-center justify-center">
                      <span className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#094B3D] bg-[#094B3D]/5 px-5 py-2.5 text-xs font-bold text-[#094B3D] transition-all duration-300 group-hover:bg-[#094B3D] group-hover:text-white group-hover:shadow-md">
                        Explore Service
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 rounded-3xl border border-[#DDE1E6] bg-linear-to-b from-white to-[#F1F5F9] p-6 sm:p-10"
        >
          <div className="mb-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2 text-[#094B3D]">
                <Clock size={18} className="animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Future Phases
                </span>
              </div>
              <h3 className="mt-1 text-2xl font-bold text-[#0F172A] sm:text-3xl">
                Coming Soon
              </h3>
            </div>
            <p className="max-w-md text-xs text-[#64748B] sm:text-sm">
              The following services are planned for future phases of Relyn and will be available shortly.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {comingSoonServices.map((service) => (
              <div
                key={service.slug}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#E2E8F0] bg-white p-5 transition-all duration-300 hover:border-[#094B3D]/30 hover:shadow-md"
              >
                <div>
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="rounded-full bg-[#094B3D]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#094B3D]">
                      Coming Soon
                    </span>
                    <Sparkles className="h-4 w-4 text-[#094B3D]/40" />
                  </div>
                  <h4 className="text-base font-bold text-[#0F172A]">
                    {service.title}
                    {service.subtitle && (
                      <span className="block text-xs font-normal text-[#64748B]">{service.subtitle}</span>
                    )}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#64748B]">
                    {service.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}