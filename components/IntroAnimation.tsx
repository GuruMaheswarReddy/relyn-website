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
            {/* SVG house outline animation */}
            <svg
              viewBox="0 0 200 160"
              className="w-[120px] h-[100px] overflow-visible"
            >
              <motion.path
                d="M100,22 L168,80 L150,80 L150,142 L50,142 L50,80 L32,80 Z"
                fill="none"
                stroke="#C6A15B"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.05, ease: "easeInOut" }}
              />
              <motion.path
                d="M84,142 L84,104 L116,104 L116,142"
                fill="none"
                stroke="#C6A15B"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.75, ease: "easeInOut" }}
              />
              <motion.path
                d="M118,132 c8,-4 8,-14 16,-16"
                fill="none"
                stroke="#C6A15B"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 0.95, ease: "easeInOut" }}
              />
            </svg>

            {/* RELYN wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.5 }}
              className="mt-5 font-serif text-[20px] font-semibold tracking-[0.32em] text-[#FAF6EC]"
            >
              RELYN
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}