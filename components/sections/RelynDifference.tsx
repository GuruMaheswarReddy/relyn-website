"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const highlights = [
  {
    value: "10,000+",
    label: "Happy Families",
  },
  {
    value: "98%",
    label: "Customer Satisfaction",
  },
  {
    value: "50+",
    label: "Areas We Serve",
  },
  {
    value: "24/7",
    label: "Reliable Support",
  },
];

export default function RelynDifference() {
  return (
    <section className="bg-[#FBF9F7] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT - IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Decorative background */}
            <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-[#825D34]/10" />

            <div className="relative overflow-hidden rounded-[2rem]">
              <Image
                src="/differencesectionimage.jpg"
                alt="Relyn professionals caring for a home"
                width={900}
                height={1100}
                className="h-[520px] w-full object-cover md:h-[620px]"
                priority={false}
              />

              {/* Small overlay */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-5 shadow-lg backdrop-blur-sm border border-[#E1D6C9]">
                <p className="text-sm font-medium text-[#825D34]">
                  RELYN CARE
                </p>

                <p className="mt-1 text-lg font-semibold text-[#021B30]">
                  Trusted help for everyday living.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            {/* Small heading */}
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#825D34]">
              The Relyn Difference
            </p>

            {/* Main heading */}
            <h2 className="font-[var(--font-syne)] text-4xl font-semibold leading-tight tracking-tight text-[#021B30] md:text-5xl">
              Everyday care,
              <br />
              made easier.
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-[#525D5A] md:text-lg">
              At Relyn, we believe getting reliable help at home should feel
              simple, safe and stress-free. Our trained professionals take
              care of the everyday tasks that matter, so you have more time
              for the people and moments that matter most.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-[#525D5A]">
              From housekeeping and cooking to child care and elder care, we
              bring dependable support right to your doorstep.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-[#E1D6C9] pt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <div className="text-3xl font-semibold text-[#021B30] md:text-4xl">
                    {item.value}
                  </div>

                  <div className="mt-2 text-sm text-[#525D5A]">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-10">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 rounded-full bg-[#1F4234] hover:bg-[#021B30] px-7 py-3.5 text-sm font-semibold text-white ring-2 ring-[#825D34] shadow-[0_4px_20px_rgba(130,93,52,0.3)] hover:shadow-[0_6px_25px_rgba(130,93,52,0.5)] transition-all duration-300 hover:scale-[1.03]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#825D34] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#825D34]"></span>
                </span>
                <span>Book a Service</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}