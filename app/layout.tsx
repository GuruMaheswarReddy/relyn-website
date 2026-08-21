import type { Metadata } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import { siteConfig } from "@/constants/site";
import IntroAnimation from "@/components/IntroAnimation";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "Relyn — Everything. Taken care of.",
    template: `%s | ${siteConfig.name}`,
  },

  description: "Trusted household support in Bengaluru — housekeeping, cooking and elder care.",

  openGraph: {
    title: "Relyn — Everything. Taken care of.",
    description: "Trusted household support in Bengaluru — housekeeping, cooking and elder care.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Relyn — Everything. Taken care of.",
    description: "Trusted household support in Bengaluru — housekeeping, cooking and elder care.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${publicSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FAF6EC] text-[#1F4234]">
        <IntroAnimation />

        {children}
      </body>
    </html>
  );
}