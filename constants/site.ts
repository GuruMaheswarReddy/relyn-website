import type { SiteConfig } from "@/types";

export type SiteStat = {
  value: string;
  label: string;
};

export const siteConfig: SiteConfig = {
  name: "Website Makers",
  legalName: "Website Makers",
  description:
    "Website Makers is a modern digital agency specializing in website development, UI/UX design, eCommerce solutions, SEO, branding, and digital marketing.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "gurumahesh478@gmail.com",
  phone:
    process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+91 98765 43210",
  address: "India",
  locale: "en_US",
};

export const siteStats: SiteStat[] = [
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "4.9", label: "Client Rating" },
  { value: "5+", label: "Years Experience" },
];