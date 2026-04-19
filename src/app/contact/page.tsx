"use client";

import PageTransition from "@/components/PageTransition";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <PageTransition>
        <div className="pt-32 pb-24 min-h-[90vh] flex flex-col justify-center">
          <Contact />
        </div>
      </PageTransition>
      <Footer />
    </main>
  );
}
