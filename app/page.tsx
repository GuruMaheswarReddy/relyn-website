import { Footer } from "@/components/layout";
import { Hero, WhatWeDo, CaseStudies, Products,  ServicesShowcase,  Reviews, Contact, } from "@/components/sections";
export default function Home() {
  return (
    <>
      <main id="main-content" className="flex-1">
        <Hero />
        <WhatWeDo />
        <ServicesShowcase />
         <Products />
        <CaseStudies />
         <Reviews />
          <Contact />
      </main>
      <Footer />
    </>
  );
}
