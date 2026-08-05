"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/constants/navigation";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

export function Navbar() {
  const scrolled = useScrolled(80);
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-none focus:bg-[#0038A8] focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <div
        className={cn(
          "w-full transition-all duration-300 ease-out",
          scrolled
            ? "border-b border-slate-200/80 bg-white shadow-sm"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <Container className="flex h-20 items-center justify-between gap-6 max-w-[1400px]">
          {/* Logo */}
          <Logo
            tone={scrolled ? "light" : "dark"}
            className={cn(
              "transition-colors duration-300",
              !scrolled && "text-white"
            )}
          />

          {/* Nav Items - CYBRISK Font & Size */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 md:flex"
          >
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[12px] font-bold tracking-[0.18em] uppercase transition-colors duration-200",
                  scrolled
                    ? "text-[#0F172A] hover:text-[#FF6600]"
                    : "text-white hover:text-[#FF6600]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Exact CYBRISK Style */}
          <div className="hidden items-center gap-3 md:flex">
            <ButtonLink
              href="/contact"
              className={cn(
                "h-11 px-7 rounded-none text-[12px] font-bold tracking-[0.18em] uppercase transition-all duration-300",
                scrolled
                  ? "bg-[#FF6600] text-white hover:bg-[#0038A8] border border-[#FF6600]"
                  : "bg-white text-[#0F172A] border border-white hover:bg-[#FF6600] hover:border-[#FF6600] hover:text-white"
              )}
            >
              START A PROJECT
            </ButtonLink>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-none border transition-colors duration-200 md:hidden",
              scrolled
                ? "border-slate-300 bg-white text-[#0F172A]"
                : "border-white/30 bg-white/10 text-white backdrop-blur-md"
            )}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </Container>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <button
              type="button"
              aria-label="Close menu overlay"
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <motion.nav
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute inset-x-0 top-20 border-b border-slate-200 bg-white p-6 shadow-xl"
              aria-label="Mobile"
            >
              <ul className="flex flex-col gap-3">
                {mainNav.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * index, duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-2 text-[13px] font-bold tracking-[0.18em] uppercase text-[#0F172A] hover:text-[#FF6600]"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6 border-t border-slate-100 pt-6">
                <ButtonLink
                  href="/contact"
                  className="w-full h-11 justify-center rounded-none bg-[#FF6600] text-white text-[12px] font-bold tracking-[0.18em] uppercase hover:bg-[#0038A8]"
                >
                  START A PROJECT
                </ButtonLink>
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}