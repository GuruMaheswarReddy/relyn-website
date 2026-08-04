import { Footer } from "@/components/layout";
import { Hero, WhatWeDo } from "@/components/sections";

export default function Home() {
  return (
    <>
      <main id="main-content" className="flex-1">
        <Hero />
        <WhatWeDo />
      </main>
      <Footer />
    </>
  );
}
