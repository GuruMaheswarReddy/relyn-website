"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Web Development",
    image: "/services/website development.jpg",
  },
  {
    title: "UI/UX Design",
    image: "/services/ui,ux design.jpg",
  },
  {
    title: "E-Commerce",
    image: "/services/E-commerce.jpg",
  },
  {
    title: "Digital Marketing",
    image: "/services/digital_marketeing.png",
  },
  {
    title: "SEO",
    image: "/services/seo.png",
  },
  {
    title: "Branding",
    image: "/services/branding.png",
  },
  {
    title: "AI Solutions",
    image: "/services/ai.png",
  },
];

export default function ServicesShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Angle gap between each card on the wheel
  const CARD_GAP_DEG = 8.5;

  // Wheel starting position (first card slightly right of center)
  const initialAngle = 18;

  // Stops rotation EXACTLY when the last card reaches the resting position
  const maxRotation = (services.length - 1) * CARD_GAP_DEG - 2;

  const wheelRotation = useTransform(
    scrollYProgress,
    [0, 1],
    [initialAngle, -maxRotation]
  );

  return (
    <section ref={sectionRef} className="relative h-[450vh] bg-[#FBF9F7]">
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Header Section */}
        <div className="absolute top-0 left-0 w-full z-20 pt-10 px-8 lg:px-16 pointer-events-none">
          <div className="max-w-[1400px] mx-auto">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#825D34] mb-1.5">
              WE HAVE ALL YOUR NEEDS COVERED
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-[#021B30] tracking-tight">
              Services for Today&apos;s Business
            </h2>
          </div>
        </div>

        {/* Arc Container */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center mt-6 z-10 pointer-events-none">
          <motion.div
            style={{
              rotate: wheelRotation,
              transformOrigin: "50% 320%",
            }}
            className="absolute top-0 left-0 w-full h-full pointer-events-none will-change-transform"
          >
            {services.map((service, index) => {
              const cardAngle = index * CARD_GAP_DEG;

              return (
                <div
                  key={service.title}
                  style={{
                    transformOrigin: "50% 320%",
                    transform: `rotate(${cardAngle}deg)`,
                  }}
                  className="absolute top-0 left-0 w-full h-full pointer-events-none"
                >
                  {/* Card Element */}
                  <div className="absolute top-[24%] sm:top-[26%] left-1/2 -translate-x-1/2 w-[210px] sm:w-[230px] lg:w-[250px] h-[300px] lg:h-[340px] bg-white rounded-[24px] shadow-[0_12px_32px_rgba(2,27,48,0.1)] overflow-hidden border border-[#E1D6C9] pointer-events-auto cursor-pointer group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />

                    {/* Gradient Fade & Label */}
                    <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-white via-white/90 to-transparent" />
                    <h3 className="absolute bottom-5 left-0 right-0 text-center text-base font-semibold text-[#021B30] group-hover:text-[#825D34] transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}