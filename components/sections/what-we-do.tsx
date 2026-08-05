"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/constants/services";

const EASE = [0.22, 1, 0.36, 1] as const;

// Map services to external URLs
const serviceUrlMap: Record<string, string> = {
  "website-development": "https://thewebsitemakers.in/website-development/",
  "digital-marketing": "https://thewebsitemakers.in/digital-marketing/",
  seo: "https://thewebsitemakers.in/seo/",
  "meta-ads": "https://thewebsitemakers.in/meta-ads/",
};

export function WhatWeDo() {
  return (
    <section
      id="services"
      aria-labelledby="what-we-do-heading"
      className="bg-[#F8FAFC] py-28 sm:py-36 text-[#0F172A]"
    >
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex items-end justify-between border-b border-[#DDE1E6] pb-8 gap-4">
          <h2
            id="what-we-do-heading"
            className="text-[42px] sm:text-[56px] lg:text-[64px] font-medium tracking-tight leading-none text-[#0038A8]"
          >
            What we do
          </h2>

          <p className="shrink-0 text-[11px] sm:text-[12px] font-semibold tracking-[0.25em] uppercase text-[#FF6600] pb-1">
            Core Capabilities
          </p>
        </div>

        {/* Cards */}
        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const number = String(index + 1).padStart(2, "0");

            // Get specific service link, fallback to slug anchor if not found
            const serviceUrl =
              serviceUrlMap[service.slug] || `https://thewebsitemakers.in/${service.slug}/`;

            return (
              <motion.li
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  ease: EASE,
                  delay: index * 0.08,
                }}
                className="flex"
              >
                <article
                  className="
                    group
                    relative
                    flex
                    w-full
                    flex-col
                    justify-between
                    overflow-hidden
                    border
                    border-[#DDE1E6]
                    bg-white
                    p-8
                    min-h-[360px]
                    transition-all
                    duration-300
                    hover:bg-[#F4F4F4]
                  "
                >
                  {/* Reverse IBM Border Animation - Brand Deep Blue (#0038A8) */}

                  {/* Top : Right -> Left */}
                  <span
                    className="
                      absolute
                      top-0
                      right-0
                      h-[2px]
                      w-0
                      bg-[#0038A8]
                      origin-right
                      transition-all
                      duration-500
                      ease-[cubic-bezier(.22,1,.36,1)]
                      group-hover:w-full
                    "
                  ></span>

                  {/* Left : Top -> Bottom */}
                  <span
                    className="
                      absolute
                      left-0
                      top-0
                      w-[2px]
                      h-0
                      bg-[#0038A8]
                      transition-all
                      duration-500
                      delay-150
                      ease-[cubic-bezier(.22,1,.36,1)]
                      group-hover:h-full
                    "
                  ></span>

                  {/* Bottom : Left -> Right */}
                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-0
                      bg-[#0038A8]
                      transition-all
                      duration-500
                      delay-300
                      ease-[cubic-bezier(.22,1,.36,1)]
                      group-hover:w-full
                    "
                  ></span>

                  {/* Right : Bottom -> Top */}
                  <span
                    className="
                      absolute
                      right-0
                      bottom-0
                      w-[2px]
                      h-0
                      bg-[#0038A8]
                      origin-bottom
                      transition-all
                      duration-500
                      delay-[450ms]
                      ease-[cubic-bezier(.22,1,.36,1)]
                      group-hover:h-full
                    "
                  ></span>

                  {/* Content Stack */}
                  <div>
                    {/* Image / Number Tile */}
                    <div className="relative w-[52px] h-[52px] shrink-0 overflow-hidden bg-[#F4F5F8] flex items-center justify-center">
                      {service.image ? (
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <span className="text-[13px] font-medium text-[#6F6F6F]">
                          {number}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="mt-8 text-[20px] leading-[1.3] font-semibold tracking-tight text-[#161616] transition-colors duration-300 group-hover:text-[#0038A8]">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-[14px] leading-relaxed text-[#6E6E6E] line-clamp-4 font-normal">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Footer Link */}
                  <div className="mt-12 pt-2 flex items-center justify-between">
                    <a
                      href={serviceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        text-[11px]
                        font-semibold
                        tracking-[0.18em]
                        uppercase
                        text-[#161616]
                        transition-colors
                        duration-300
                        group-hover:text-[#FF6600]
                      "
                    >
                      FULL PAGE
                    </a>

                    <a
                      href={serviceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-hidden
                      className="
                        text-base
                        text-[#161616]
                        transition-all
                        duration-300
                        group-hover:text-[#FF6600]
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </a>
                  </div>
                </article>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}