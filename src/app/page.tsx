"use client";

import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import OperationsPipeline from "@/components/sections/OperationsPipeline";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import BackToTop from "@/components/sections/BackToTop";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary selection:text-primary-foreground">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-primary origin-left z-[100] shadow-[0_0_10px_rgba(245,158,11,0.5)]"
        style={{ scaleX }}
      />
      <Navbar />
      <PageTransition>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <OperationsPipeline />
        <Experience />
        <Contact />
      </PageTransition>
      <Footer />
      <BackToTop />
    </main>
  );
}
