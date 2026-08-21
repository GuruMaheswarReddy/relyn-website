"use client";

import { motion } from "framer-motion";
import {
  UserCheck,
  ShieldCheck,
  HeartHandshake,
  Clock,
  Leaf,
} from "lucide-react";

export function ValuePillars() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-[#FCFAFA] rounded-[20px] lg:rounded-[24px] px-4 py-4 sm:px-6 sm:py-5 shadow-md border border-[#EBDCB7]/80 relative z-20"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 divide-y sm:divide-y-0 sm:divide-x divide-[#EBDCB7]/50">
        {/* Pillar 1 */}
        <div className="flex flex-col items-center text-center px-2 py-1">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F3EFE6] flex items-center justify-center text-[#1F4234] mb-2 shadow-2xs">
            <UserCheck className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#1F4234]" />
          </div>
          <h4 className="font-serif font-bold text-[13.5px] sm:text-[14px] text-[#1F4234] mb-1">
            Built on Trust
          </h4>
          <p className="text-[10.5px] sm:text-[11px] text-[#3E5E4F] leading-tight max-w-[20ch]">
            Verified and reliable professionals you can count on.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="flex flex-col items-center text-center px-2 py-1 pt-2 sm:pt-1">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F3EFE6] flex items-center justify-center text-[#1F4234] mb-2 shadow-2xs">
            <ShieldCheck className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#1F4234]" />
          </div>
          <h4 className="font-serif font-bold text-[13.5px] sm:text-[14px] text-[#1F4234] mb-1">
            Care in Every Detail
          </h4>
          <p className="text-[10.5px] sm:text-[11px] text-[#3E5E4F] leading-tight max-w-[20ch]">
            We treat every home with respect, care and responsibility.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="flex flex-col items-center text-center px-2 py-1 pt-2 sm:pt-1">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F3EFE6] flex items-center justify-center text-[#1F4234] mb-2 shadow-2xs">
            <HeartHandshake className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#1F4234]" />
          </div>
          <h4 className="font-serif font-bold text-[13.5px] sm:text-[14px] text-[#1F4234] mb-1">
            Peace of Mind
          </h4>
          <p className="text-[10.5px] sm:text-[11px] text-[#3E5E4F] leading-tight max-w-[20ch]">
            Focus on what matters while we take care of the rest.
          </p>
        </div>

        {/* Pillar 4 */}
        <div className="flex flex-col items-center text-center px-2 py-1 pt-2 sm:pt-1">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F3EFE6] flex items-center justify-center text-[#1F4234] mb-2 shadow-2xs">
            <Clock className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#1F4234]" />
          </div>
          <h4 className="font-serif font-bold text-[13.5px] sm:text-[14px] text-[#1F4234] mb-1">
            Time that Matters
          </h4>
          <p className="text-[10.5px] sm:text-[11px] text-[#3E5E4F] leading-tight max-w-[20ch]">
            We help you save time so you can live life on your terms.
          </p>
        </div>

        {/* Pillar 5 */}
        <div className="flex flex-col items-center text-center px-2 py-1 pt-2 sm:pt-1 col-span-2 sm:col-span-1">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F3EFE6] flex items-center justify-center text-[#1F4234] mb-2 shadow-2xs">
            <Leaf className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#1F4234]" />
          </div>
          <h4 className="font-serif font-bold text-[13.5px] sm:text-[14px] text-[#1F4234] mb-1">
            Designed for Real Life
          </h4>
          <p className="text-[10.5px] sm:text-[11px] text-[#3E5E4F] leading-tight max-w-[20ch]">
            Simple, flexible and thoughtfully created for your everyday needs.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
