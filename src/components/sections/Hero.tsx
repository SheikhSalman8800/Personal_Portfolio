"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-20 overflow-hidden bg-dot-pattern">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card border-foreground/5 mb-10"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            <span className="text-xs font-bold uppercase tracking-widest text-foreground/80 flex items-center gap-2">
              Available for new projects <Sparkles size={12} className="text-primary" />
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1]"
          >
            Crafting <span className="gradient-text">Digital</span> <br />
            Experiences <span className="text-primary">&</span> Automation
          </motion.h1>

          {/* Title/Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-3xl font-medium text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Hi, I&apos;m <span className="font-black underline decoration-primary decoration-4 underline-offset-4">Salman</span>. I build high-performance web apps and <span className="text-primary italic">AI-driven</span> systems.
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="cyber-button w-full sm:w-auto flex items-center justify-center space-x-2 group shadow-2xl shadow-primary/20"
            >
              <span>View My Work</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2, backgroundColor: "hsl(var(--foreground) / 0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl border border-foreground/10 text-foreground font-bold w-full sm:w-auto transition-all backdrop-blur-sm"
            >
              Let&apos;s Talk
            </motion.a>
          </motion.div>

          {/* Location Badge */}
          <motion.div
            variants={itemVariants}
            className="mt-16 mb-24 flex items-center justify-center space-x-2 text-muted-foreground"
          >
            <div className="p-2 rounded-lg bg-foreground/5">
              <MapPin size={16} className="text-primary" />
            </div>
            <span className="text-sm font-semibold tracking-wide uppercase">{personalInfo.location}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern Scroll Indicator - Positioned lower to avoid overlap */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50 font-black">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-1 h-10 bg-gradient-to-b from-primary/50 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
