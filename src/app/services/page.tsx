"use client";

import PageTransition from "@/components/PageTransition";
import OperationsPipeline from "@/components/sections/OperationsPipeline";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <main className="bg-background min-h-screen selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <PageTransition>
        <div className="pt-32 pb-12">
          <div className="container mx-auto px-6 mb-16 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black mb-8 gradient-text inline-block tracking-tighter uppercase"
            >
              My Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-medium"
            >
              Interactive pipeline-oriented system integrations designed to scale your operational throughput.
            </motion.p>
          </div>
          <OperationsPipeline />
        </div>
      </PageTransition>
      <Footer />
    </main>
  );
}
