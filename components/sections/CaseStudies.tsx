"use client";

import { useState } from "react";

const items = [
  {
    number: "01",
    title: "Trusted Professionals",
    description:
      "We connect you with reliable and carefully selected professionals who are ready to help with your everyday home needs.",
  },
  {
    number: "02",
    title: "Easy Booking",
    description:
      "Choose the service you need, select a convenient time, and book your service in just a few simple steps.",
  },
  {
    number: "03",
    title: "Quality Service",
    description:
      "Our focus is on delivering dependable, professional and high-quality service that makes your everyday life easier.",
  },
  {
    number: "04",
    title: "Complete Peace of Mind",
    description:
      "From booking to completion, we take care of the details so you can relax and enjoy a cleaner, more comfortable home.",
  },
];

export default function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#527A55]">
            Why Relyn
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-[#29372c] sm:text-4xl md:text-5xl">
            Simple, reliable home services
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#6d756d]">
            Everything you need to make your home comfortable, clean and
            cared for — all in one place.
          </p>
        </div>

        {/* Accordion */}
        <div className="border-t border-[#e5e8e3]">
          {items.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={item.number}
                className="border-b border-[#e5e8e3]"
              >
                <button
                  type="button"
                  onClick={() => handleClick(index)}
                  className="flex w-full items-center gap-5 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  {/* Number */}
                  <span className="w-8 shrink-0 text-sm font-medium text-[#8b958b]">
                    {item.number}
                  </span>

                  {/* Title */}
                  <span
                    className={`flex-1 text-lg sm:text-xl transition-colors ${
                      isOpen
                        ? "font-semibold text-[#527A55]"
                        : "font-medium text-[#29372c]"
                    }`}
                  >
                    {item.title}
                  </span>

                  {/* Arrow */}
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-[#527A55] bg-[#527A55] text-white rotate-180"
                        : "border-[#d9ded9] text-[#527A55]"
                    }`}
                  >
                    ↓
                  </span>
                </button>

                {/* Description */}
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-7 pl-[52px] pr-10 text-sm leading-7 text-[#6d756d] sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}