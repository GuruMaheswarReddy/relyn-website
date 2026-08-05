"use client";

import Link from "next/link";
import { footerNav, socialLinks } from "@/constants/navigation";
import { services } from "@/constants/services";
import { siteConfig } from "@/constants/site";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { SocialIcons } from "@/components/ui/social-icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#FAFAFA] text-slate-700 border-t border-slate-200/80 pt-16 pb-12 font-sans">
      <Container className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr_0.9fr_1.3fr] lg:gap-12 pb-16">
          
          {/* Column 1: Logo, Description & Address */}
          <div className="space-y-6">
            <Logo tone="light" />
            
            <p className="text-sm leading-relaxed text-slate-500 max-w-sm">
              {siteConfig.description}
            </p>

            <div className="pt-2">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF6600] mb-2">
                HEADQUARTERS
              </p>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
                {siteConfig.address}
              </p>
            </div>

            <SocialIcons
              links={socialLinks}
              iconClassName="border-slate-200 bg-white text-slate-600 hover:bg-[#0038A8] hover:border-[#0038A8] hover:text-white transition-all duration-200"
            />
          </div>

          {/* Column 2: Quick Links */}
          <nav aria-label="Footer Navigation">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-6">
              QUICK LINKS
            </h3>
            <ul className="space-y-3.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-500 hover:text-[#0038A8] transition-colors duration-200 block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Services */}
          <nav aria-label="Footer Services">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-6">
              SERVICES
            </h3>
            <ul className="space-y-3.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-sm text-slate-500 hover:text-[#0038A8] transition-colors duration-200 block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4: Stay Updated & CTA */}
          <div className="space-y-8">
            {/* Stay Updated / Newsletter */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-3">
                STAY UPDATED
              </h3>
              <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                Subscribe to digital strategy updates and industry insights. No spam.
              </p>
              
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address..."
                  className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#0038A8] text-slate-800 placeholder:text-slate-400 shadow-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-[#0038A8] hover:bg-[#FF6600] rounded-lg transition-colors duration-300 shrink-0 shadow-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Direct Consultation Button */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-3">
                READY TO BUILD?
              </h3>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-slate-800 bg-white border border-slate-200 rounded-lg hover:border-[#FF6600] hover:text-[#FF6600] transition-all duration-200 shadow-sm"
              >
                Book a Consultation
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {year} {siteConfig.legalName}. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-800 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-800 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}