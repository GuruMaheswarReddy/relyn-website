"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Sparkles, Home, ShieldCheck, Check, X, Zap, Clock, Users } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// All 8 Housekeeping services with updated image assets
const services = [
  {
    category: "Housekeeping",
    title: "Regular Home Cleaning",
    description:
      "Reliable cleaning support to keep your home fresh and comfortable.",
    image: "/services/Regular Home Cleaning.jpg",
  },
  {
    category: "Housekeeping",
    title: "Deep Cleaning",
    description:
      "Detailed cleaning for a cleaner, healthier and refreshed home.",
    image: "/services/Deep Cleaning.jpg",
  },
  {
    category: "Housekeeping",
    title: "Kitchen Cleaning",
    description:
      "Thorough cleaning of kitchen surfaces, cabinets and appliances.",
    image: "/services/Kitchen Cleaning.jpg",
  },
  {
    category: "Housekeeping",
    title: "Bathroom Cleaning",
    description:
      "Complete bathroom cleaning for a hygienic and spotless space.",
    image: "/services/Bathroom Cleaning.jpg",
  },
  {
    category: "Housekeeping",
    title: "Dusting & Vacuuming",
    description:
      "Careful dusting and vacuuming to keep every corner clean.",
    image: "/services/HouseKeeping.jpg",
  },
  {
    category: "Housekeeping",
    title: "Floor Cleaning",
    description:
      "Professional floor care for a fresh and polished home.",
    image: "/services/HouseKeeping.jpg",
  },
  {
    category: "Housekeeping",
    title: "Laundry & Ironing",
    description:
      "Convenient laundry and ironing assistance for your everyday needs.",
    image: "/services/HouseKeeping.jpg",
  },
  {
    category: "Housekeeping",
    title: "Bed & Linen Care",
    description:
      "Fresh linen and bed care to make your home feel more comfortable.",
    image: "/services/HouseKeeping.jpg",
  },
];

export default function HouseKeepingPage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="min-h-screen bg-[#FBF9F7]">

      {/* =====================================================
          1. HOUSEKEEPING HERO SECTION
      ====================================================== */}
      <section
        aria-labelledby="housekeeping-heading"
        className="relative h-[100vh] min-h-[680px] overflow-hidden bg-[#021B30]"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="pointer-events-none absolute inset-0"
            initial={{ scale: 1.02 }}
            animate={{ scale: 1.02 }}
          >
            <Image
              src="/services/HouseKeeping.jpg"
              alt="Relyn housekeeping service"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>

          {/* Dark Overlay */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[#021B30]/40"
          />
        </div>

        {/* Fixed Side CTA */}
        <Link
          href="/contact"
          className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 items-center justify-center rounded-l-md bg-[#825D34] px-3 py-6 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-all duration-300 hover:bg-[#021B30] lg:flex"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
          aria-label="Book a Service"
        >
          Book a Service
        </Link>

        {/* Glass Content Container */}
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
                "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 100%), rgba(2,27,48,0.45)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              boxShadow:
                "0 30px 90px -20px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.25)",
              padding:
                "clamp(36px, 4.5vw, 60px) clamp(28px, 4.5vw, 64px)",
            }}
          >
            {/* Brand Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: EASE,
              }}
              className="mb-5 flex flex-wrap items-center gap-2"
            >
              <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-white backdrop-blur-md">
                Relyn • Home Services
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              id="housekeeping-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: EASE,
                delay: 0.1,
              }}
              className="max-w-[900px] text-left text-[42px] font-medium leading-[1.08] tracking-tight text-white drop-shadow-sm sm:text-[58px] lg:text-[70px]"
              style={{
                fontFamily:
                  "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              }}
            >
              Housekeeping.
              <br />
              <span className="text-white/90">
                Everything taken care of.
              </span>
            </motion.h1>

            {/* Service Highlights Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3.5 py-2 text-xs font-medium text-white backdrop-blur-md sm:text-sm">
                <Sparkles size={16} className="text-[#C3BAAE]" />
                <span>Home Cleaning</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3.5 py-2 text-xs font-medium text-white backdrop-blur-md sm:text-sm">
                <Home size={16} className="text-[#C3BAAE]" />
                <span>General Household Upkeep</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3.5 py-2 text-xs font-medium text-white backdrop-blur-md sm:text-sm">
                <ShieldCheck size={16} className="text-[#C3BAAE]" />
                <span>Organisation & Assistance</span>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="my-6 h-[1px] w-full bg-white/15 sm:my-8" />

            {/* Bottom Content */}
            <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12">

              {/* Description + CTA */}
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
                  <span className="mt-0.5 select-none text-xl font-bold text-[#825D34]">
                    &rarr;
                  </span>
                  <p className="max-w-xl text-base font-normal leading-relaxed text-slate-100 drop-shadow-sm sm:text-lg">
                    Reliable housekeeping professionals who help keep your
                    home clean, organized, and comfortable.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#825D34] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#021B30] hover:shadow-xl"
                >
                  Book a Service
                </Link>
              </motion.div>

              {/* Right Side */}
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
                  <div className="flex gap-0.5 text-xs text-[#825D34]">
                    ★ ★ ★ ★ ★
                  </div>
                </div>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200 drop-shadow-sm">
                  HOME CLEANING • UPKEEP • ORGANIZATION
                </span>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          2. HOUSEKEEPING EXPERT CAROUSEL SECTION
      ====================================================== */}
      <section className="bg-[#FBF9F7] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Header & Controls */}
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#825D34]">
                Your Dedicated Helper
              </p>

              <h2 className="font-[var(--font-syne)] text-4xl font-semibold tracking-tight text-[#021B30] md:text-5xl">
                One Housekeeping Expert, <span className="text-[#825D34]">To Do It All</span>
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-[#525D5A] md:text-lg">
                Professional help for the everyday tasks that keep your home
                comfortable, clean and cared for.
              </p>
            </div>

            {/* Navigation Arrow Buttons (Desktop) */}
            <div className="hidden gap-3 sm:flex">
              <button
                onClick={scrollLeft}
                aria-label="Previous services"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#021B30] bg-white text-[#021B30] transition-all duration-300 hover:bg-[#021B30] hover:text-white"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5" />
                  <path d="M12 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={scrollRight}
                aria-label="Next services"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#021B30] bg-[#021B30] text-white transition-all duration-300 hover:border-[#825D34] hover:bg-[#825D34]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Service Cards Carousel Container */}
          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-5 scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="group min-w-[280px] flex-[0_0_280px] snap-start overflow-hidden rounded-2xl border border-[#E1D6C9] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:min-w-[calc((100%-72px)/4)] md:flex-[0_0_calc((100%-72px)/4)]"
              >
                {/* Service Card Image */}
                <div className="relative h-52 overflow-hidden bg-[#F2EDE6]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 280px, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Category Tag */}
                  <div className="absolute left-4 top-4 rounded-full bg-[#F2EDE6]/90 px-3 py-1 text-xs font-medium text-[#021B30] backdrop-blur-sm">
                    {service.category}
                  </div>
                </div>

                {/* Card Content & Action Button */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#021B30]">
                    {service.title}
                  </h3>

                  <p className="mt-2 min-h-[48px] text-sm leading-6 text-[#525D5A]">
                    {service.description}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-5 flex w-full items-center justify-center rounded-full bg-[#021B30] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#825D34]"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrow Buttons (Mobile) */}
          <div className="mt-5 flex justify-center gap-3 sm:hidden">
            <button
              onClick={scrollLeft}
              aria-label="Previous services"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#021B30] bg-white text-[#021B30]"
            >
              ←
            </button>

            <button
              onClick={scrollRight}
              aria-label="Next services"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#021B30] text-white"
            >
              →
            </button>
          </div>

        </div>
      </section>

      {/* =====================================================
          3. ABOUT THE SERVICE SECTION
      ====================================================== */}
      <section className="bg-[#F2EDE6] py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Category / Sub-label */}
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#825D34]">
              About the Service
            </p>

            {/* Main Title */}
            <h2 className="text-3xl font-extrabold tracking-tight text-[#021B30] sm:text-4xl md:text-[42px]">
              About House Help
            </h2>

            {/* Description Text */}
            <p className="mt-4 text-base leading-relaxed text-[#525D5A] sm:text-lg">
              Relyn brings reliable, background-verified House Help right to your
              doorstep, exactly when you need it. From everyday chores to
              last-minute clean-ups, everything is handled seamlessly, just the way
              you like it. It&apos;s help you can trust in your space, without the
              usual back-and-forth. So your home runs smoothly, without you having
              to think twice.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          4. WHAT'S INCLUDED / WHAT'S NOT INCLUDED SECTION
      ====================================================== */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Section Header */}
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#825D34]">
              What's Included
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#021B30] sm:text-4xl md:text-5xl">
              What Does Our House Help Expert Do?
            </h2>
          </div>

          {/* Comparison Cards Grid */}
          <div className="grid gap-8 md:grid-cols-2">

            {/* Included Card */}
            <div className="rounded-3xl border border-[#E1D6C9] bg-[#F2EDE6]/60 p-8 shadow-sm md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#021B30] text-white">
                  <Check className="h-5 w-5 stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-bold text-[#021B30] sm:text-2xl">
                  What's Included
                </h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 stroke-[2.5] text-[#825D34]" />
                  <span className="text-base font-medium text-[#021B30]">
                    Sweep and mop accessible floors
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 stroke-[2.5] text-[#825D34]" />
                  <span className="text-base font-medium text-[#021B30]">
                    Dust and wipe furniture and wardrobe
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 stroke-[2.5] text-[#825D34]" />
                  <span className="text-base font-medium text-[#021B30]">
                    Dust reachable walls, fans, ceilings
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 stroke-[2.5] text-[#825D34]" />
                  <span className="text-base font-medium text-[#021B30]">
                    Change or rearrange existing bedding
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 stroke-[2.5] text-[#825D34]" />
                  <span className="text-base font-medium text-[#021B30]">
                    Dispose wet and dry household waste
                  </span>
                </li>
              </ul>
            </div>

            {/* Not Included Card */}
            <div className="rounded-3xl border border-[#E1D6C9] bg-[#FBF9F7] p-8 shadow-sm md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C3BAAE] text-white">
                  <X className="h-5 w-5 stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-bold text-[#525D5A] sm:text-2xl">
                  What's Not Included
                </h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <X className="mt-1 h-5 w-5 shrink-0 stroke-[2.5] text-[#C3BAAE]" />
                  <span className="text-base text-[#525D5A]">
                    Cleaning unsafe or inaccessible areas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-1 h-5 w-5 shrink-0 stroke-[2.5] text-[#C3BAAE]" />
                  <span className="text-base text-[#525D5A]">
                    Any tasks involving ladders or working at height
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-1 h-5 w-5 shrink-0 stroke-[2.5] text-[#C3BAAE]" />
                  <span className="text-base text-[#525D5A]">
                    Moving heavy furniture or appliances
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-1 h-5 w-5 shrink-0 stroke-[2.5] text-[#C3BAAE]" />
                  <span className="text-base text-[#525D5A]">
                    Cleaning outside home areas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-1 h-5 w-5 shrink-0 stroke-[2.5] text-[#C3BAAE]" />
                  <span className="text-base text-[#525D5A]">
                    Child, elderly, pet or medical care
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          5. WHY CHOOSE US / TRUST SECTION
      ====================================================== */}
      <section className="bg-[#FBF9F7] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Section Header */}
          <div className="mb-14 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#825D34]">
              Why Choose Us
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#021B30] sm:text-4xl md:text-5xl">
              Why Families Trust Relyn for House Help
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-[#525D5A] sm:text-lg">
              Why thousands of families trust Relyn for their everyday house help needs
            </p>
          </div>

          {/* 4-Column Grid Layout */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Card 1 */}
            <div className="rounded-3xl border border-[#E1D6C9] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2EDE6] text-[#825D34]">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-[#021B30]">
                Regular Cleaning Matters
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#525D5A]">
                Consistent cleaning keeps your home hygienic, fresh, and free from dust and germs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl border border-[#E1D6C9] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2EDE6] text-[#825D34]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-[#021B30]">
                Trusted & Verified Workers
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#525D5A]">
                Every Expert is background checked, ID verified, and professionally trained before joining.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl border border-[#E1D6C9] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2EDE6] text-[#825D34]">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-[#021B30]">
                Hourly Based Pricing
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#525D5A]">
                Pay only for what you need. Transparent hourly rates with no hidden fees or commitments.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-3xl border border-[#E1D6C9] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F2EDE6] text-[#825D34]">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-[#021B30]">
                100% Female Workforce
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#525D5A]">
                All our experts are trained women — trusted by families across India.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          6. FINAL CTA SECTION
      ====================================================== */}
      <section className="bg-[#F2EDE6] px-6 py-24 text-center">
        <h2 className="text-4xl font-semibold text-[#021B30] sm:text-5xl">
          A cleaner home starts here.
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#525D5A]">
          Let Relyn take care of the everyday details so you can spend more
          time enjoying your home.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-[#021B30] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#825D34]"
        >
          Book a Service &rarr;
        </Link>
      </section>

    </main>
  );
}