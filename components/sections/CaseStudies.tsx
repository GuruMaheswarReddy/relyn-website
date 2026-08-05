"use client";

import { useState } from "react";

const items = [
  {
    number: "01",
    title: "CLIENT-FIRST APPROACH",
    description:
      "Every project starts by understanding your business goals. We take the time to learn your vision, industry, and target audience to deliver solutions that create real business impact rather than just attractive designs.",
    color: "#FDC391",
  },
  {
    number: "02",
    title: "END-TO-END EXECUTION",
    description:
      "From strategy and planning to design, development, deployment, and ongoing support, our team manages every stage of your digital journey under one roof for a seamless experience.",
    color: "#9DDEE2",
  },
  {
    number: "03",
    title: "QUALITY & PERFORMANCE",
    description:
      "We build websites and digital experiences that prioritize speed, security, responsiveness, accessibility, and scalability, ensuring your business performs reliably as it grows.",
    color: "#A9BAF4",
  },
  {
    number: "04",
    title: "LONG-TERM PARTNERSHIP",
    description:
      "Our relationship doesn't end after launch. We provide continuous maintenance, updates, technical support, and optimization to help your business stay ahead in a constantly evolving digital landscape.",
    color: "#F2CDD3",
  },
  {
    number: "05",
    title: "TRANSPARENT COMMUNICATION",
    description:
      "We believe successful projects are built on trust. Regular progress updates, clear timelines, and honest communication keep you informed throughout the entire development process.",
    color: "#D2EBD4",
  },
  {
    number: "06",
    title: "RESULTS THAT MATTER",
    description:
      "Our focus is on delivering measurable outcomes—improving online visibility, generating qualified leads, enhancing user engagement, and helping businesses achieve sustainable growth.",
    color: "#E5D4F4",
  },
];

export default function CaseStudies() {
  // 0 means the FIRST item is open by default
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#f7f8fa] py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">

        {/* Heading */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] text-[#FF6600] uppercase mb-2 block">
                WHAT WE DO
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#0038A8]">
                Why Businesses Trust Us
              </h2>
            </div>

            <p className="max-w-md text-sm md:text-base text-[#475569] leading-relaxed">
              More than a service provider—we&apos;re your long-term digital growth partner.
            </p>
          </div>

          <div className="mt-8 h-px bg-[#dce1e8]" />
        </div>

        {/* Accordion */}
        <div className="overflow-hidden rounded-sm">
          {items.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={item.number}
                style={{ backgroundColor: item.color }}
                className="transition-all duration-500"
              >
                <button
                  onClick={() => handleClick(index)}
                  className={`w-full text-left px-8 md:px-12 transition-all duration-500 ${
                    isOpen ? "pt-12 pb-6" : "py-8"
                  }`}
                >
                  <div className="grid grid-cols-[50px_35px_1fr_40px] md:grid-cols-[55px_45px_1fr_50px] items-center">

                    <span className="text-sm tracking-widest text-[#263246]">
                      {item.number}
                    </span>

                    <span className="text-xl text-[#263246]">→</span>

                    <h3
                      className={`text-xl md:text-2xl lg:text-3xl text-[#101827] ${
                        isOpen ? "font-semibold text-[#0038A8]" : "font-normal"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <span className="text-2xl text-right text-[#101827]">
                      {isOpen ? "×" : "→"}
                    </span>
                  </div>
                </button>

                {/* Open content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen
                      ? "max-h-[250px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 md:px-12 pb-12">
                    <p className="ml-[85px] md:ml-[100px] max-w-[760px] text-lg md:text-xl lg:text-2xl leading-relaxed text-[#263246]">
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