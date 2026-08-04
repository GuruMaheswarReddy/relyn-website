import type { SiteConfig } from "@/types";

export type SiteStat = {
  value: string;
  label: string;
};

export const siteConfig: SiteConfig = {
  name: "Aether Digital",
  legalName: "Aether Digital Agency",
  description:
    "Enterprise digital agency specializing in website development, digital marketing, SEO, and Meta Ads.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@aetherdigital.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+1 (415) 555-0142",
  address: "San Francisco, CA",
  locale: "en_US",
};

export const siteStats: SiteStat[] = [
  { value: "120+", label: "Projects delivered" },
  { value: "98%", label: "Client retention" },
  { value: "4.9", label: "Average rating" },
  { value: "12+", label: "Years in market" },
];
