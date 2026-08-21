import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import WhyChooseRelyn from "@/components/sections/WhyChooseRelyn";
import { PhotoReel } from "@/components/sections/PhotoReel";
import { WhatWeDo } from "@/components/sections/what-we-do";
import HowItWorks from "@/components/sections/HowItWorks";
import AboutRelyn from "@/components/sections/CaseStudies";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="top" className="flex-1">
        {/* Hero Banner */}
        <Hero />

        {/* Why Relyn */}
        <WhyChooseRelyn />

        {/* Photo Reel - A Day in the Life */}
        <PhotoReel />

        {/* What We Offer / Services */}
        <WhatWeDo />

        {/* How It Works */}
        <HowItWorks />

        {/* About Relyn & Quote Strip */}
        <AboutRelyn />

        {/* Contact & Enquiry Forms */}
        <Contact />
      </main>

      {/* Final CTA & Footer */}
      <Footer />
    </>
  );
}