import { Navbar, Footer } from "@/components/layout";
import {
  Hero,
  WhyChooseRelyn,
  PhotoReel,
  WhatWeDo,
  HowItWorks,
  CaseStudies as AboutRelyn,
  Contact,
} from "@/components/sections";

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