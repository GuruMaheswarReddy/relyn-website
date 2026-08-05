"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  tag: string;
  description: string;
  focusArea: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Manoj C R",
    role: "CMO AND CO-FOUNDER",
    tag: "MARKETING LEAD",
    description:
      "I'm excited to introduce myself as the CMO and co-founder of The Website Makers. Marketing has always been my passion, and I've always envisioned creating a company that revolutionizes how businesses connect with their audiences online.",
    focusArea: "Marketing & Growth",
    image: "/services/Manoj_Sir.png",
  },
  {
    id: "2",
    name: "Daveedu Raju Akurathi",
    role: "CEO AND CO-FOUNDER",
    tag: "FOUNDERSHIP",
    description:
      "I'm thrilled to welcome you to The Website Makers. As the CEO and Co-Founder of The Website Makers, I've always had a passion for technology and a vision to create a company that helps businesses thrive online.",
    focusArea: "Leadership & Strategy",
    image: "/services/Raju_sir.png",
  },
  {
    id: "3",
    name: "Chaithali S",
    role: "CO-FOUNDER",
    tag: "CO-FOUNDER",
    description:
      "Passionate about building scalable digital platforms, driving innovation, and transforming business visions into impactful online experiences.",
    focusArea: "Product & Operations",
    image: "/services/cha_mam.png",
  },
];

export default function WebsiteMakersTeamSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="w-full bg-[#f8fafc] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="mx-auto max-w-[1400px]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#ff6600] mb-3">
              THE WEBSITE MAKERS
            </p>
            <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-bold leading-[1.12] text-[#0038a8]">
              Meet The Visionaries <br className="hidden sm:block" />
              Behind Our Digital Innovation
            </h2>
          </div>

          <button
            type="button"
            className="self-start md:self-auto rounded-full bg-[#ff6600] px-8 py-3.5 text-[14px] font-semibold text-white shadow-md transition-all hover:bg-[#e05500] hover:shadow-lg"
          >
            Work With Us
          </button>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => {
            const isHovered = hoveredId === member.id;

            return (
              <div
                key={member.id}
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative min-h-[520px] w-full cursor-pointer"
              >
                {/* DEFAULT BRAND BLUE CARD STATE */}
                {!isHovered && (
                  <div className="flex h-full w-full flex-col justify-between rounded-[24px] bg-[#0038a8] p-8 transition-all duration-300 shadow-md">
                    <div>
                      <h3 className="text-[24px] font-bold leading-snug text-white">
                        {member.name}
                      </h3>
                      <p className="mt-2 text-[12px] font-bold tracking-wider text-[#ff9955] uppercase">
                        {member.role}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <p className="text-[13px] font-medium text-slate-200">
                        TAG: {member.tag}
                      </p>
                      <p className="mt-3 text-[14px] leading-relaxed text-slate-100 font-normal">
                        {member.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* HOVER / POP-OUT ANIMATED STATE */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, rotateZ: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1.06,
                        rotateZ: -3,
                        y: -15,
                      }}
                      exit={{ opacity: 0, scale: 0.95, rotateZ: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 22,
                      }}
                      className="absolute inset-0 z-50 flex flex-col justify-end overflow-visible"
                    >
                      {/* Image Card Container */}
                      <div className="absolute -top-12 inset-x-0 bottom-0 overflow-hidden rounded-[24px] bg-[#0b0f19] shadow-[0_20px_50px_rgba(0,56,168,0.3)]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          priority
                          className="object-cover object-top"
                        />
                      </div>

                      {/* Tilted Frosted Glass Bottom Overlay */}
                      <motion.div
                        initial={{ y: 25, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.08, duration: 0.25 }}
                        className="relative z-10 m-3 rounded-[20px] bg-white/80 p-6 backdrop-blur-md border border-white/70 shadow-xl"
                      >
                        <h3 className="text-[20px] font-bold text-[#0038a8]">
                          {member.name}
                        </h3>
                        <p className="mt-1 text-[10px] font-bold tracking-wider text-[#ff6600] uppercase leading-tight">
                          {member.role}
                        </p>
                        <p className="mt-1 text-[11px] font-medium text-[#475569]">
                          TAG: {member.tag}
                        </p>

                        <div className="mt-4 border-t border-slate-300/50 pt-3">
                          <p className="flex items-center gap-1.5 text-[12px] font-semibold text-[#0038a8]">
                            <span className="text-[#ff6600]">🚀</span>{" "}
                            Focus: {member.focusArea}
                          </p>
                          <p className="mt-1 text-[10px] text-[#64748b] italic">
                            Click card to connect
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}