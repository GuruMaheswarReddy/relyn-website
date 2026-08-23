"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  src: string;
  label: string;
  k: string;
}

const slides: Slide[] = [
  {
    src: "/reel/indian-cooking-essentials.jpg",
    label: "Fresh home-cooked rotis & curries",
    k: "Cooking / Meal Support",
  },
  {
    src: "/reel/indian-spices-dabba.jpg",
    label: "Aromatic Indian spices & masala dabba",
    k: "Cooking / Meal Support",
  },
  {
    src: "/reel/indian-living-room-decor.jpg",
    label: "Immaculate Indian living room & decor",
    k: "Housekeeping",
  },
  {
    src: "/reel/indian-housekeeping-care.jpg",
    label: "Thoughtful housekeeping & care",
    k: "Housekeeping",
  },
  {
    src: "/reel/indian-elder-care.jpg",
    label: "Compassionate elder care & companionship",
    k: "Elder Care",
  },
  {
    src: "/reel/indian-kitchen-counter.jpg",
    label: "Spotless countertops & daily upkeep",
    k: "Housekeeping",
  },
];



export function PhotoReel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const triggerBounce = (dotEl: HTMLElement | null, dir: number) => {
    if (!dotEl || !stageRef.current || !ballRef.current) return;
    const wrapRect = stageRef.current.getBoundingClientRect();
    const r = dotEl.getBoundingClientRect();
    const ball = ballRef.current;
    ball.style.left = `${r.left - wrapRect.left + r.width / 2 - 5}px`;
    ball.style.setProperty("--bx", `${dir * 26}px`);
    ball.classList.remove("bounce");
    void ball.offsetWidth;
    ball.classList.add("bounce");
  };

  const goTo = (index: number, dotEl: HTMLElement | null = null, dir?: number) => {
    const direction = dir ?? (index > current ? 1 : -1);
    if (dotEl) {
      triggerBounce(dotEl, direction);
    }
    setCurrent((index + slides.length) % slides.length);
  };

  const handlePrev = () => {
    const dots = stageRef.current?.querySelectorAll<HTMLElement>(".reel-dot");
    const currentDot = dots ? dots[current] : null;
    goTo(current - 1, currentDot, -1);
  };

  const handleNext = () => {
    const dots = stageRef.current?.querySelectorAll<HTMLElement>(".reel-dot");
    const currentDot = dots ? dots[current] : null;
    goTo(current + 1, currentDot, 1);
  };

  const filmstripList = [...slides, ...slides];

  return (
    <section className="reel-wrap" id="reel">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-head mb-[52px]"
        >
          <div className="label mb-3">A day in the life</div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-serif leading-[1.14] text-[#FAF6EC]">
            What &quot;taken care of&quot; actually looks like.
          </h2>
          <p className="mt-4 text-[16px] text-[#FAF6EC]/70 max-w-[54ch]">
            Real work, every day — mopping, cooking, dishes, bathrooms and quiet companionship for the people who need it most.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="reel-stage"
          ref={stageRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`reel-slide ${index === current ? "active" : ""}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={slide.src} alt={`${slide.label} — Relyn`} />
            </div>
          ))}

          {/* Dots Indicator */}
          <div className="reel-dots">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`reel-dot ${index === current ? "active" : ""}`}
                onClick={(e) => goTo(index, e.currentTarget)}
              />
            ))}
          </div>

          {/* Caption Box */}
          <div className="reel-caption glass-dark">
            <div className="k text-[10.5px] tracking-[0.14em] uppercase text-[#C6A15B] font-bold">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}{" "}
              &middot; {slides[current].k}
            </div>
            <h4 className="font-serif text-[19px] text-[#FAF6EC] mt-1 font-medium">
              {slides[current].label}
            </h4>
          </div>

          {/* Controls */}
          <div className="reel-controls">
            <div
              className="reel-arrow"
              onClick={handlePrev}
              aria-label="Previous"
              role="button"
              tabIndex={0}
            >
              <ChevronLeft className="w-[17px] h-[17px]" />
            </div>
            <div
              className="reel-arrow"
              onClick={handleNext}
              aria-label="Next"
              role="button"
              tabIndex={0}
            >
              <ChevronRight className="w-[17px] h-[17px]" />
            </div>
          </div>

          {/* Ball Animation */}
          <div className="reel-ball" ref={ballRef} />
        </motion.div>

        {/* Filmstrip */}
        <div className="filmstrip-outer">
          <div className="filmstrip">
            {filmstripList.map((slide, index) => {
              const realIndex = index % slides.length;
              const isActive = realIndex === current;
              return (
                <div
                  key={index}
                  className={`fcard ${isActive ? "active" : ""}`}
                  onClick={() => goTo(realIndex)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={slide.src}
                    alt={slide.label}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhotoReel;
