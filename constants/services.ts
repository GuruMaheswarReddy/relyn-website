import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    shortDescription:
      "High-performance, conversion-focused websites built for scale.",
    description:
      "We design and engineer modern web experiences with clean architecture, responsive UI, and measurable business outcomes.",
    features: [
      "Custom Next.js applications",
      "Responsive UI systems",
      "Performance & Core Web Vitals",
      "CMS & API integrations",
      "Ongoing maintenance",
    ],
    icon: "code-2",
    image: "/services/website development.jpg",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortDescription:
      "Full-funnel strategies that turn attention into revenue.",
    description:
      "From positioning to campaign execution, we build marketing systems that attract the right audience and drive qualified demand.",
    features: [
      "Go-to-market strategy",
      "Content & funnel design",
      "Campaign orchestration",
      "Analytics & attribution",
      "Growth experimentation",
    ],
    icon: "megaphone",
    image: "/services/digital_marketeing.png",
  },
  {
    slug: "seo",
    title: "SEO",
    shortDescription:
      "Technical and content SEO that compounds organic growth.",
    description:
      "We improve discoverability with technical foundations, search intent mapping, and content systems built for long-term rankings.",
    features: [
      "Technical SEO audits",
      "Keyword & intent research",
      "On-page optimization",
      "Content strategy",
      "Rank tracking & reporting",
    ],
    icon: "search",
    image: "/services/seo.png",
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    shortDescription:
      "Paid social campaigns engineered for efficient acquisition.",
    description:
      "We plan, launch, and optimize Meta Ads with creative testing, audience refinement, and clear ROI tracking.",
    features: [
      "Campaign architecture",
      "Creative testing frameworks",
      "Audience segmentation",
      "Budget optimization",
      "Conversion tracking",
    ],
    icon: "target",
    image: "/services/branding.png",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}