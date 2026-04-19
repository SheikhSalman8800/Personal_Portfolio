"use client";

import PageTransition from "@/components/PageTransition";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <PageTransition>
        <div className="pt-32 pb-12">
          <div className="container mx-auto px-6 mb-20 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black mb-8 gradient-text inline-block"
            >
              The Story
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed"
            >
              A developer by passion, an automation expert by trade. My mission is to build digital tools that empower businesses to scale effortlessly.
            </motion.p>
          </div>
          <About />
          <Experience />
          <Skills />
        </div>
      </PageTransition>
      <Footer />
    </main>
  );
}
