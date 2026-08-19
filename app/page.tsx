import { Footer } from "@/components/layout";

import {
  Hero,
  WhatWeDo,
  Reviews,
  Contact,
} from "@/components/sections";

import CaseStudies from "@/components/sections/CaseStudies";
import WhyChooseRelyn from "@/components/sections/WhyChooseRelyn";
import PopularServices from "@/components/sections/PopularServices";
import MostBookedServices from "@/components/sections/MostBookedServices";
import HowItWorks from "@/components/sections/HowItWorks";
import RelynDifference from "@/components/sections/RelynDifference";

export default function Home() {
  return (
    <>
      <main id="main-content" className="flex-1">

        {/* Hero */}
        <Hero />

        {/* Why Relyn */}
        <WhyChooseRelyn />

        {/* What We Do */}
        <WhatWeDo />

        {/* Popular Services */}
        <PopularServices />

        {/* How It Works */}
        <HowItWorks />

        {/* Most Booked Services */}
        <MostBookedServices />

        {/* Frequently Asked Questions */}
        <RelynDifference />

        {/* Reviews */}
        <Reviews />

        {/* Contact */}
        <Contact />

        {/* Case Studies - Last Section */}
        <CaseStudies />

      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}