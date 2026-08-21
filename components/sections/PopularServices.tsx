"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

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

export default function PopularServices() {
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
    <section className="bg-[#FBF9F7] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#825D34]">
              Our Services
            </p>

            <h2 className="font-[var(--font-syne)] text-4xl font-semibold tracking-tight text-[#021B30] md:text-5xl">
              Popular services
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[#525D5A] md:text-lg">
              Professional help for the everyday tasks that keep your home
              comfortable, clean and cared for.
            </p>
          </div>

          {/* Arrow Buttons */}
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

        {/* Carousel */}
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
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-[#F2EDE6]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 280px, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <div className="absolute left-4 top-4 rounded-full bg-[#F2EDE6]/90 px-3 py-1 text-xs font-medium text-[#021B30] backdrop-blur-sm">
                  {service.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#021B30]">
                  {service.title}
                </h3>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-[#525D5A]">
                  {service.description}
                </p>

                {/* Book Now */}
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

        {/* Mobile Arrows */}
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
  );
}