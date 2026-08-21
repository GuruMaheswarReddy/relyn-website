"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Sparkles, Utensils, ShieldCheck, Check, X, Zap, Clock, Heart } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    category: "Cooking Support",
    title: "Everyday Cooking",
    description:
      "Wholesome, home-style daily meal preparation tailored to your family's taste and dietary preferences.",
    image: "/services/Cooking.jpg",
  },
  {
    category: "Cooking Support",
    title: "Meal Prep & Chopping",
    description:
      "Assistance with vegetable cutting, ingredient prep, dough kneading, and kitchen organization.",
    image: "/services/Kitchen Cleaning.jpg",
  },
  {
    category: "Cooking Support",
    title: "Special Occasion Cooking",
    description:
      "Expert preparation for weekend family gatherings, small dinners, and festive celebrations.",
    image: "/services/Cooking.jpg",
  },
  {
    category: "Cooking Support",
    title: "Dietary & Health Meals",
    description:
      "Nutrition-focused cooking including low-oil, diabetic-friendly, or high-protein customized menus.",
    image: "/services/Cooking.jpg",
  },
];

export default function CookingPage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#FBF9F7]">

      {/* HERO SECTION */}
      <section
        aria-labelledby="cooking-heading"
        className="relative h-[100vh] min-h-[680px] overflow-hidden bg-[#021B30]"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="pointer-events-none absolute inset-0"
            initial={{ scale: 1.02 }}
            animate={{ scale: 1.02 }}
          >
            <Image
              src="/services/Cooking.jpg"
              alt="Relyn cooking service"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>

          <div
            aria-hidden
            className="absolute inset-0 bg-[#021B30]/50"
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

        {/* Content Container */}
        <div className="relative z-10 flex h-full items-center justify-center px-4 pt-16 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
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
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-5 flex flex-wrap items-center gap-2"
            >
              <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-white backdrop-blur-md">
                Relyn • Meal Support
              </span>
            </motion.div>

            <motion.h1
              id="cooking-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              className="max-w-[900px] text-left text-[42px] font-medium leading-[1.08] tracking-tight text-white drop-shadow-sm sm:text-[58px] lg:text-[70px]"
            >
              Cooking &amp; Meal Support.
              <br />
              <span className="text-white/90">
                Fresh, home-cooked goodness.
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3.5 py-2 text-xs font-medium text-white backdrop-blur-md sm:text-sm">
                <Utensils size={16} className="text-[#C3BAAE]" />
                <span>Everyday Cooking</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3.5 py-2 text-xs font-medium text-white backdrop-blur-md sm:text-sm">
                <Sparkles size={16} className="text-[#C3BAAE]" />
                <span>Meal Prep &amp; Chopping</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3.5 py-2 text-xs font-medium text-white backdrop-blur-md sm:text-sm">
                <ShieldCheck size={16} className="text-[#C3BAAE]" />
                <span>Hygiene &amp; Health</span>
              </div>
            </motion.div>

            <div className="my-6 h-[1px] w-full bg-white/15 sm:my-8" />

            <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
                className="flex flex-col items-start gap-6 sm:flex-row sm:items-center lg:col-span-8"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 select-none text-xl font-bold text-[#825D34]">
                    &rarr;
                  </span>
                  <p className="max-w-xl text-base font-normal leading-relaxed text-slate-100 drop-shadow-sm sm:text-lg">
                    Experienced home cooks who prepare delicious, clean, and nutritious meals customized strictly to your palate.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#825D34] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#021B30] hover:shadow-xl"
                >
                  Book a Cook
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
                className="mt-4 flex flex-col justify-end lg:col-span-4 lg:mt-0 lg:items-end"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold tracking-wide text-white drop-shadow-sm">
                    Trusted Cooks
                  </span>
                  <div className="flex gap-0.5 text-xs text-[#825D34]">
                    ★ ★ ★ ★ ★
                  </div>
                </div>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-200 drop-shadow-sm">
                  MEAL PREP • DAILY COOKING • HYGIENE
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CAROUSEL SECTION */}
      <section className="bg-[#FBF9F7] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#825D34]">
                Meal Support Services
              </p>
              <h2 className="font-[var(--font-syne)] text-4xl font-semibold tracking-tight text-[#021B30] md:text-5xl">
                Tailored Cooking, <span className="text-[#825D34]">Every Day</span>
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#525D5A] md:text-lg">
                Enjoy home-cooked meals prepared with care, freeing up your time for work and family.
              </p>
            </div>

            <div className="hidden gap-3 sm:flex">
              <button
                onClick={scrollLeft}
                aria-label="Previous"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#021B30] bg-white text-[#021B30] hover:bg-[#021B30] hover:text-white transition-all"
              >
                ←
              </button>
              <button
                onClick={scrollRight}
                aria-label="Next"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#021B30] text-white hover:bg-[#825D34] transition-all"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-5 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group min-w-[280px] flex-[0_0_280px] snap-start overflow-hidden rounded-2xl border border-[#E1D6C9] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:min-w-[calc((100%-72px)/4)] md:flex-[0_0_calc((100%-72px)/4)]"
              >
                <div className="relative h-52 overflow-hidden bg-[#F2EDE6]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 280px, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-[#F2EDE6]/90 px-3 py-1 text-xs font-medium text-[#021B30]">
                    {service.category}
                  </div>
                </div>

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
        </div>
      </section>

      {/* ABOUT & INCLUDED */}
      <section className="bg-[#F2EDE6] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#825D34]">
              Home-Style Cooking
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#021B30] sm:text-4xl">
              About Cooking Support
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#525D5A] sm:text-lg">
              Relyn pairs your home with background-verified, skilled cooks who understand hygiene, spice levels, and custom dietary requirements. Enjoy hot, nutritious meals right when you return home without the hassle of cooking after long days.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-[#E1D6C9] bg-[#F2EDE6]/60 p-8 shadow-sm md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#021B30] text-white">
                  <Check className="h-5 w-5 stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-bold text-[#021B30]">What's Included</h3>
              </div>
              <ul className="space-y-4 text-sm text-[#021B30]">
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 text-[#825D34] shrink-0" />
                  <span>Breakfast, lunch, or dinner cooking as per schedule</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 text-[#825D34] shrink-0" />
                  <span>Vegetable washing, chopping, and ingredient preparation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 text-[#825D34] shrink-0" />
                  <span>Post-cooking stove and platform wipe down</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 text-[#825D34] shrink-0" />
                  <span>Custom spice level &amp; diet accommodations</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[#E1D6C9] bg-[#FBF9F7] p-8 shadow-sm md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C3BAAE] text-white">
                  <X className="h-5 w-5 stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-bold text-[#525D5A]">What's Not Included</h3>
              </div>
              <ul className="space-y-4 text-sm text-[#525D5A]">
                <li className="flex items-start gap-3">
                  <X className="mt-1 h-5 w-5 text-[#C3BAAE] shrink-0" />
                  <span>Purchasing groceries or raw supplies (unless requested as errand)</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-1 h-5 w-5 text-[#C3BAAE] shrink-0" />
                  <span>Deep kitchen scrubbing or heavy appliance cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-1 h-5 w-5 text-[#C3BAAE] shrink-0" />
                  <span>Commercial catering for massive events</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#F2EDE6] px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-[#021B30] sm:text-4xl">
          Delicious home meals, made easy.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[#525D5A]">
          Book a trusted cook with Relyn and enjoy fresh home meals daily.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-[#021B30] px-8 py-4 text-sm font-semibold text-white hover:bg-[#825D34] transition-all"
        >
          Book a Cook &rarr;
        </Link>
      </section>
    </main>
  );
}
