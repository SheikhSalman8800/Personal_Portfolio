"use client";

import PageTransition from "@/components/PageTransition";
import Services from "@/components/sections/Services";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { services } from "@/lib/data";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="bg-background min-h-screen selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <PageTransition>
        <div className="pt-32 pb-24">
          <div className="container mx-auto px-6 mb-24 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black mb-8 gradient-text inline-block tracking-tighter"
            >
              Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium"
            >
              End-to-end solutions for web development and business process automation.
            </motion.p>
          </div>

          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card p-10 flex flex-col group hover:border-primary/40 transition-all duration-500 relative overflow-hidden h-full shadow-2xl shadow-primary/5"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl shadow-primary/5">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground mb-8 flex-1 leading-relaxed font-medium">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-10">
                  {service.details?.map((detail) => (
                    <li key={detail} className="flex items-center space-x-3 text-sm font-bold text-foreground/60 group-hover:text-foreground transition-colors">
                      <Check size={16} className="text-primary flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-auto inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-primary hover:gap-4 transition-all group/link">
                  Get Started <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>

                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </PageTransition>
      <Footer />
    </main>
  );
}
