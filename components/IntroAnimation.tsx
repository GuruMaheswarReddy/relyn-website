"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface IntroAnimationProps {
  onComplete?: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  const handleSkip = () => {
    setShowIntro(false);
  };

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#122E23] select-none"
        >
          {/* Skip button */}
          <button
            onClick={handleSkip}
            className="absolute top-6 right-8 text-xs tracking-[0.2em] uppercase text-[#C6A15B] font-semibold hover:underline cursor-pointer focus:outline-none z-10"
          >
            Skip Intro →
          </button>

          <div className="relative flex flex-col items-center justify-center">
            {/* Concept 4 Logo SVG Intro Animation */}
            <motion.svg
              viewBox="0 0 200 200"
              className="w-[180px] h-[180px] mb-6 overflow-visible"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <rect x="4" y="4" width="192" height="192" rx="42" fill="#133a2b" />
              
              {/* House outline stroke draw */}
              <motion.path
                d="M 46 148 L 46 96 L 100 48 L 154 96 L 154 148"
                fill="none"
                stroke="#faf7f1"
                strokeWidth="9"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.9, delay: 0.4, ease: "easeInOut" }}
              />

              {/* 4 Gold Window Panes popping up */}
              <motion.rect
                x="80"
                y="112"
                width="16"
                height="16"
                rx="3"
                fill="#c08a3e"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.15, ease: [0.34, 1.56, 0.64, 1] }}
              />
              <motion.rect
                x="104"
                y="112"
                width="16"
                height="16"
                rx="3"
                fill="#c08a3e"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.25, ease: [0.34, 1.56, 0.64, 1] }}
              />
              <motion.rect
                x="80"
                y="136"
                width="16"
                height="16"
                rx="3"
                fill="#c08a3e"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.35, ease: [0.34, 1.56, 0.64, 1] }}
              />
              <motion.rect
                x="104"
                y="136"
                width="16"
                height="16"
                rx="3"
                fill="#c08a3e"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.45, ease: [0.34, 1.56, 0.64, 1] }}
              />
            </motion.svg>

            {/* RELYN wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="font-serif text-[32px] sm:text-[38px] font-bold tracking-[0.25em] text-[#faf7f1]"
            >
              RELYN
            </motion.div>

            {/* Gold rule line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ delay: 1.85, duration: 0.4 }}
              className="h-[2.5px] bg-[#c08a3e] my-3 rounded-full"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.05, duration: 0.5 }}
              className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#c08a3e]"
            >
              EVERYTHING. TAKEN CARE OF.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}