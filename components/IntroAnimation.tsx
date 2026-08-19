"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState } from "react";

interface IntroAnimationProps {
  onComplete?: () => void;
}

// Custom Easing Curves for Senior-Level Feel
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];
const EASE_IN_OUT_CUBIC = [0.65, 0, 0.35, 1];

// Text Stagger Variants
const logoVariants: Variants = {
  hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE_OUT_EXPO },
  },
};

const taglineVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 4.0 + i * 0.15, duration: 0.6, ease: EASE_OUT_EXPO },
  }),
};

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Total animation sequence timer
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5200);

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
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: EASE_IN_OUT_CUBIC }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#F7F4EE] select-none"
        >
          {/* Subtle Ambient Background Flare */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.6, scale: 1.2 }}
            transition={{ delay: 2.2, duration: 2, ease: "easeOut" }}
            className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-gradient-radial from-[#FEEAA1]/40 via-[#F7F4EE]/20 to-transparent blur-3xl"
          />

          {/* Minimal Skip Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ delay: 1 }}
            onClick={handleSkip}
            className="absolute top-6 right-8 text-xs tracking-widest uppercase text-[#736858] font-medium hover:underline cursor-pointer focus:outline-none z-10"
          >
            Skip Intro →
          </motion.button>

          <div className="relative flex h-[440px] w-[540px] items-center justify-center">
            {/* Main Illustration Container */}
            <svg
              viewBox="0 0 520 420"
              className="absolute h-full w-full drop-shadow-sm"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Soft Gradient for Lit Windows */}
                <radialGradient id="windowGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFF9E6" />
                  <stop offset="100%" stopColor="#FDE68A" />
                </radialGradient>
              </defs>

              {/* 1. Smoke Puffs from Chimney */}
              {[0, 0.4, 0.8].map((delayOffset, index) => (
                <motion.circle
                  key={index}
                  cx={367 + index * 4}
                  cy="70"
                  r="4"
                  fill="#A89B88"
                  initial={{ opacity: 0, y: 15, scale: 0.5 }}
                  animate={{
                    opacity: [0, 0.4, 0],
                    y: [-5, -35, -55],
                    x: [0, index % 2 === 0 ? 8 : -8, index % 2 === 0 ? 15 : -15],
                    scale: [0.6, 1.2, 1.8],
                  }}
                  transition={{
                    delay: 2.2 + delayOffset,
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              ))}

              {/* 2. Roof Outline */}
              <motion.path
                d="M75 205 L260 60 L445 205"
                stroke="#4A3B2C"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, ease: EASE_IN_OUT_CUBIC }}
              />

              {/* Roof Chimney */}
              <motion.path
                d="M350 130 V82 H385 V158"
                stroke="#4A3B2C"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 1.6, ease: "easeInOut" }}
              />

              {/* Main Body Wall Outline */}
              <motion.path
                d="M105 190 V345 H415 V190"
                stroke="#4A3B2C"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: EASE_IN_OUT_CUBIC }}
              />

              {/* Ground Line Accent */}
              <motion.path
                d="M60 345 H460"
                stroke="#4A3B2C"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
              />

              {/* 3. Windows with Pane Grids */}
              {/* Left Window Base */}
              <motion.rect
                x="145"
                y="230"
                width="60"
                height="60"
                rx="4"
                fill="url(#windowGlow)"
                stroke="#4A3B2C"
                strokeWidth="2.5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2, duration: 0.8, ease: EASE_OUT_EXPO }}
              />
              {/* Left Window Crossbars */}
              <motion.path
                d="M175 230 V290 M145 260 H205"
                stroke="#4A3B2C"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 2.5, duration: 0.4 }}
              />

              {/* Right Window Base */}
              <motion.rect
                x="315"
                y="230"
                width="60"
                height="60"
                rx="4"
                fill="url(#windowGlow)"
                stroke="#4A3B2C"
                strokeWidth="2.5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.4, duration: 0.8, ease: EASE_OUT_EXPO }}
              />
              {/* Right Window Crossbars */}
              <motion.path
                d="M345 230 V290 M315 260 H375"
                stroke="#4A3B2C"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 2.7, duration: 0.4 }}
              />

              {/* 4. Door Animation (Spring Unfold) */}
              <motion.rect
                x="230"
                y="245"
                width="60"
                height="100"
                rx="3"
                fill="#8C5E34"
                stroke="#4A3B2C"
                strokeWidth="2.5"
                style={{ originY: 1 }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  delay: 2.9,
                  type: "spring",
                  stiffness: 120,
                  damping: 14,
                }}
              />

              {/* Brass Door Knob */}
              <motion.circle
                cx="278"
                cy="295"
                r="3.5"
                fill="#FEEAA1"
                stroke="#4A3B2C"
                strokeWidth="1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 3.4, type: "spring", stiffness: 300 }}
              />

              {/* 5. Custom Vector Potted Botanical Plants (Replacing Emojis) */}
              {/* Left Plant Pot & Leaves */}
              <g transform="translate(100, 305)">
                {/* Pot */}
                <motion.path
                  d="M8 40 L12 20 H28 L32 40 Z"
                  fill="#C87D55"
                  stroke="#4A3B2C"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 3.3, duration: 0.5, ease: "backOut" }}
                />
                {/* Growing Leaves */}
                <motion.path
                  d="M20 20 C10 10, 5 12, 2 5 C15 5, 18 12, 20 20 Z"
                  fill="#4D6B53"
                  stroke="#4A3B2C"
                  strokeWidth="1.5"
                  style={{ originX: 1, originY: 1 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 3.5, type: "spring", stiffness: 180 }}
                />
                <motion.path
                  d="M20 20 C30 10, 35 12, 38 5 C25 5, 22 12, 20 20 Z"
                  fill="#618264"
                  stroke="#4A3B2C"
                  strokeWidth="1.5"
                  style={{ originX: 0, originY: 1 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 3.6, type: "spring", stiffness: 180 }}
                />
              </g>

              {/* Right Plant Pot & Leaves */}
              <g transform="translate(380, 305)">
                {/* Pot */}
                <motion.path
                  d="M8 40 L12 20 H28 L32 40 Z"
                  fill="#C87D55"
                  stroke="#4A3B2C"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 3.4, duration: 0.5, ease: "backOut" }}
                />
                {/* Sprouting Foliage */}
                <motion.circle
                  cx="20"
                  cy="14"
                  r="10"
                  fill="#618264"
                  stroke="#4A3B2C"
                  strokeWidth="1.5"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 3.7, type: "spring", stiffness: 200 }}
                />
                <motion.circle
                  cx="14"
                  cy="10"
                  r="7"
                  fill="#799A77"
                  stroke="#4A3B2C"
                  strokeWidth="1.5"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 3.8, type: "spring", stiffness: 200 }}
                />
              </g>
            </svg>

            {/* 6. Brand Typography & Tagline */}
            <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
              <motion.div
                variants={logoVariants}
                initial="hidden"
                animate="visible"
                className="text-6xl font-serif tracking-tight text-[#2D3B2D] font-semibold drop-shadow-xs"
              >
                relyn
              </motion.div>

              <div className="mt-2 space-y-0.5 overflow-hidden">
                <motion.div
                  custom={0}
                  variants={taglineVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-xs tracking-[0.25em] uppercase text-[#6B5E4C] font-medium"
                >
                  Everything at home.
                </motion.div>

                <motion.div
                  custom={1}
                  variants={taglineVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-xs tracking-[0.2em] text-[#8C7A65] italic font-light"
                >
                  taken care of.
                </motion.div>
              </div>
            </div>

            {/* 7. Bottom Narrative Caption */}
            <motion.div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs tracking-[0.22em] uppercase text-[#8A7C6A]/80 font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.3, duration: 0.8, ease: EASE_OUT_EXPO }}
            >
              A story of care • In just a few seconds
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}