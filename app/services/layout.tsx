import { Footer } from "@/components/layout";
import { Navbar } from "@/components/layout/navbar";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      {children}

      <Footer />
    </>
  );
}