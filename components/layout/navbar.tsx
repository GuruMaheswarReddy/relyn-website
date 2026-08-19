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
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">

      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-[#064E3B] focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      {/* Navbar */}
      <div
        className={cn(
          "w-full transition-all duration-300 ease-out",
          scrolled
            ? "border-b border-[#064E3B]/10 bg-white shadow-sm"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <Container className="flex h-20 max-w-[1400px] items-center justify-between gap-6">

          {/* Relyn Logo */}
          <Logo
            tone={scrolled ? "light" : "dark"}
            className={cn(
              "transition-colors duration-300",
              !scrolled && "text-white"
            )}
          />

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 md:flex"
          >
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[12px] font-bold uppercase tracking-[0.18em] transition-colors duration-200",
                  scrolled
                    ? "text-[#064E3B] hover:text-[#0F7A5C]"
                    : "text-white hover:text-[#9FCDBE]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Book a Service Button */}
          <div className="hidden items-center gap-3 md:flex">
            <ButtonLink
              href="/contact"
              className={cn(
                "h-11 rounded-full px-7 text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-300",
                scrolled
                  ? "border border-[#064E3B] bg-[#064E3B] text-white hover:bg-[#0F7A5C]"
                  : "border border-white bg-white text-[#064E3B] hover:border-[#064E3B] hover:bg-[#064E3B] hover:text-white"
              )}
            >
              BOOK A SERVICE
            </ButtonLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-200 md:hidden",
              scrolled
                ? "border-[#064E3B]/20 bg-white text-[#064E3B]"
                : "border-white/30 bg-white/10 text-white backdrop-blur-md"
            )}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
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
            {/* Overlay */}
            <button
              type="button"
              aria-label="Close menu overlay"
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Menu */}
            <motion.nav
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="absolute inset-x-0 top-20 border-b border-[#064E3B]/10 bg-white p-6 shadow-xl"
              aria-label="Mobile"
            >
              <ul className="flex flex-col gap-3">
                {mainNav.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{
                      opacity: 0,
                      x: -8,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.03 * index,
                      duration: 0.2,
                    }}
                  >
                    <Link
                      href={item.href}
                      className="block py-2 text-[13px] font-bold uppercase tracking-[0.18em] text-[#064E3B] transition-colors hover:text-[#0F7A5C]"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile CTA */}
              <div className="mt-6 border-t border-[#064E3B]/10 pt-6">
                <ButtonLink
                  href="/contact"
                  className="h-11 w-full justify-center rounded-full bg-[#064E3B] text-[12px] font-bold uppercase tracking-[0.15em] text-white transition-all hover:bg-[#0F7A5C]"
                >
                  BOOK A SERVICE
                </ButtonLink>
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}