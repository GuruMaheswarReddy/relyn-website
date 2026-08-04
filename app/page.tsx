import { Footer, Navbar } from "@/components/layout";
import { Hero } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <div id="explore" className="sr-only" aria-hidden />
      </main>
      <Footer />
    </>
  );
}
