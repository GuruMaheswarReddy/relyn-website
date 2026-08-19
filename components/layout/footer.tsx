"use client";

import Link from "next/link";
import { footerNav, socialLinks } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { SocialIcons } from "@/components/ui/social-icons";

// Updated list of Relyn's 8 core housekeeping services
const relynServices = [
  {
    title: "Regular Home Cleaning",
    href: "/services#regular-home-cleaning",
  },
  {
    title: "Deep Cleaning",
    href: "/services#deep-cleaning",
  },
  {
    title: "Kitchen Cleaning",
    href: "/services#kitchen-cleaning",
  },
  {
    title: "Bathroom Cleaning",
    href: "/services#bathroom-cleaning",
  },
  {
    title: "Dusting & Vacuuming",
    href: "/services#dusting-vacuuming",
  },
  {
    title: "Floor Cleaning",
    href: "/services#floor-cleaning",
  },
  {
    title: "Laundry & Ironing",
    href: "/services#laundry-ironing",
  },
  {
    title: "Bed & Linen Care",
    href: "/services#bed-linen-care",
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#064e3b]/10 bg-[#F7F0D4] text-[#304035]">
      <Container className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12">

        {/* Main Footer */}
        <div className="grid gap-12 pb-14 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1fr] lg:gap-14">

          {/* BRAND */}
          <div className="space-y-6">
            <Logo tone="light" />

            <p className="max-w-sm text-sm leading-7 text-[#687366]">
              Relyn makes everyday life easier with trusted professionals
              for housekeeping, cooking, child care, elder care and more.
            </p>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 rounded-full border border-[#b8d6b2] bg-[#DBF5D6] px-4 py-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#064e3b] text-xs text-white">
                ✓
              </span>

              <span className="text-xs font-semibold text-[#064e3b]">
                Trusted Home Services
              </span>
            </div>

            {/* Social Icons */}
            <SocialIcons
              links={socialLinks}
              iconClassName="border-[#b8d6b2] bg-white text-[#064e3b] hover:bg-[#064e3b] hover:border-[#064e3b] hover:text-white transition-all duration-200"
            />
          </div>

          {/* QUICK LINKS */}
          <nav aria-label="Footer Navigation">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#064e3b]">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#687366] transition-colors duration-200 hover:text-[#064e3b]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* OUR SERVICES */}
          <nav aria-label="Relyn Services">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#064e3b]">
              Our Services
            </h3>

            <ul className="space-y-3">
              {relynServices.map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.href}
                    className="group flex items-center text-sm text-[#687366] transition-colors duration-200 hover:text-[#064e3b]"
                  >
                    <span className="mr-2 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>

                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* NEED A HAND */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#064e3b]">
              Need a Hand?
            </h3>

            <p className="mb-6 text-sm leading-6 text-[#687366]">
              Tell us what you need and we&apos;ll help you find the right
              service for your home.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center rounded-full bg-[#064e3b] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0f7a5c]"
            >
              Book a Service
              <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>

            {/* Contact Information */}
            <div className="mt-7 space-y-4">

              {/* Contact Email */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8f7d4d]">
                  Contact
                </p>

                <a
                  href="mailto:help@relyn.com"
                  className="mt-1 block text-sm text-[#687366] transition-colors hover:text-[#064e3b]"
                >
                  help@relyn.com
                </a>
              </div>

              {/* Service Area */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8f7d4d]">
                  Service Area
                </p>

                <p className="mt-1 max-w-xs text-sm leading-6 text-[#687366]">
                  {siteConfig.address || "Serving families with care"}
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-[#064e3b]/10 pt-7 sm:flex-row">

          {/* Copyright */}
          <p className="text-xs text-[#71806f]">
            © {year} Relyn. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-[#71806f] transition-colors hover:text-[#064e3b]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-[#71806f] transition-colors hover:text-[#064e3b]"
            >
              Terms of Service
            </Link>
          </div>

        </div>

      </Container>
    </footer>
  );
}