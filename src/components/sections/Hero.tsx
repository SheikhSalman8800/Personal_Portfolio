"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { ArrowRight, MapPin, Sparkles, Terminal, Activity, Bot, ExternalLink } from "lucide-react";
import Hero3DNodeGraph from "./Hero3DNodeGraph";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-dot-pattern">
      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center w-full">
          
          {/* Left Text Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-950 border border-slate-900 text-[9px] uppercase font-bold tracking-[0.25em] text-slate-400 mb-6 shadow-sm"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <span className="flex items-center gap-1.5">
                Active Automation Pipelines Online <Sparkles size={10} className="text-amber-500" />
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-[5.5rem] font-black tracking-tight leading-[0.95] mb-8 font-sans uppercase text-white"
            >
              Engineering <br />
              <span className="gradient-text tracking-tighter">Cognitive Flows</span> <br />
              & Web Core Systems
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-slate-400 mb-10 max-w-xl leading-relaxed font-medium"
            >
              Hi, I&apos;m <span className="text-white font-bold underline decoration-amber-500/70 decoration-2 underline-offset-4">Sheikh Salman</span>. 
              I design custom AI agent networks, voice agents, and full-stack web platforms to automate operations and eliminate manual bottlenecks.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16"
            >
              <motion.a
                href="#projects"
                whileTap={{ scale: 0.98 }}
                className="cyber-button w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-widest font-bold text-center"
              >
                <span>Explore Case Studies</span>
                <ArrowRight size={14} className="ml-1" />
              </motion.a>
              <motion.a
                href="https://devizly.cloud"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ borderColor: "rgba(0, 245, 212, 0.4)", backgroundColor: "rgba(0, 245, 212, 0.03)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-xl border border-teal-500/20 bg-teal-500/5 text-teal-400 text-xs uppercase tracking-widest font-bold w-full sm:w-auto transition-all text-center flex items-center justify-center gap-2 hover:text-white"
              >
                <Bot size={14} className="text-teal-400" />
                <span>Devizly Agency</span>
                <ExternalLink size={12} className="opacity-60" />
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-xl border border-slate-900 text-slate-400 text-xs uppercase tracking-widest font-bold w-full sm:w-auto transition-all text-center backdrop-blur-sm flex items-center justify-center gap-2 hover:text-white hover:border-slate-800"
              >
                <Terminal size={14} className="text-emerald-500" />
                <span>Initialize Call</span>
              </motion.a>
            </motion.div>

            {/* Micro Stats & Location */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-y-4 gap-x-8 text-[10px] text-slate-500 border-t border-slate-900 pt-8 w-full max-w-xl font-mono uppercase tracking-wider"
            >
              <div className="flex items-center space-x-2">
                <MapPin size={12} className="text-amber-500" />
                <span className="font-bold text-slate-400">{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Activity size={12} className="text-emerald-500" />
                <span className="font-bold text-slate-400">Node Latency: ~120ms</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right 3D Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="lg:col-span-5 relative w-full h-[24rem] lg:h-[36rem] flex items-center justify-center bg-slate-950/40 rounded-3xl border border-slate-900/60 backdrop-blur-sm p-4 overflow-hidden"
          >
            <div className="absolute inset-0 bg-radial-gradient from-amber-500/[0.02] to-transparent blur-3xl pointer-events-none -z-10" />
            <Hero3DNodeGraph />
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none hidden md:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-bold">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-0.5 h-6 bg-gradient-to-b from-amber-500 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
