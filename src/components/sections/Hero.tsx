"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Bot, ExternalLink, Terminal } from "lucide-react";

const roles = [
  "Full-Stack Developer",
  "AI Automation Engineer",
  "Devizly Co-Founder"
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-16 overflow-hidden bg-dot-pattern">
      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Text Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Terminal prompt label */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-2 text-zinc-500 font-mono text-xs uppercase tracking-widest mb-6"
            >
              <span>salman@dhaka — zsh</span>
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
            </motion.div>

            {/* Rotating Role Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-black font-mono tracking-tight text-white mb-6 uppercase min-h-[60px] md:min-h-[80px] w-full"
            >
              <span className="text-zinc-600">~/</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="text-primary font-mono inline-block"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-zinc-300 mb-8 max-w-xl leading-relaxed font-sans font-medium"
            >
              Hi, I&apos;m <span className="text-white font-bold">Sheikh Salman</span>. I design custom AI agent networks, voice integrations, and full-stack web platforms to automate operations and eliminate manual bottlenecks.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8 font-mono"
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-black font-bold text-xs uppercase tracking-wider rounded hover:bg-amber-400 transition-colors flex items-center justify-center gap-2"
              >
                <span>[Explore Work]</span>
                <ArrowRight size={14} />
              </a>
              <a
                href="https://devizly.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-zinc-800 bg-zinc-950/80 text-zinc-400 hover:text-white hover:border-zinc-700 font-bold text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
              >
                <Bot size={14} />
                <span>Devizly Agency</span>
                <ExternalLink size={12} className="opacity-60" />
              </a>
              <a
                href="/contact"
                className="px-6 py-3 text-zinc-500 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Terminal size={14} className="text-primary" />
                <span>Initialize Call</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: profile.ts Code Block Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 w-full flex flex-col items-center justify-center"
          >
            <div className="w-full max-w-xl bg-zinc-950 border border-zinc-900 rounded-lg overflow-hidden shadow-2xl font-mono text-[11px] sm:text-xs md:text-sm text-zinc-400">
              
              {/* Tab Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-[#0c0c0e] border-b border-zinc-900 select-none">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                </div>
                <div className="flex items-center space-x-2 px-3 py-1 bg-zinc-950 border border-zinc-900 border-b-transparent rounded-t text-xs font-semibold text-zinc-300">
                  <span className="text-blue-400 font-bold text-[10px]">TS</span>
                  <span>profile.ts</span>
                </div>
                <div className="w-10" />
              </div>

              {/* Editor Workspace */}
              <div className="flex p-4 overflow-x-auto">
                {/* Gutter / Line Numbers */}
                <div className="flex select-none text-right text-zinc-700 pr-4 border-r border-zinc-900/60 flex-col">
                  {Array.from({ length: 17 }, (_, i) => (
                    <span key={i} className="leading-relaxed w-4">{i + 1}</span>
                  ))}
                </div>

                {/* Highlighted Code */}
                <div className="pl-4 leading-relaxed whitespace-pre-wrap break-words text-left">
                  <div>
                    <span className="text-zinc-600">// Developer Bio & System Facts</span>
                  </div>
                  <div>
                    <span className="text-primary font-bold">export const</span> <span className="text-zinc-100">engineer</span> = &#123;
                  </div>
                  <div>
                    &nbsp;&nbsp;<span className="text-zinc-300">name</span>: <span className="text-zinc-100">&quot;Sheikh Salman&quot;</span>,
                  </div>
                  <div>
                    &nbsp;&nbsp;<span className="text-zinc-300">experience</span>: <span className="text-zinc-100">&quot;3+ years&quot;</span>,
                  </div>
                  <div>
                    &nbsp;&nbsp;<span className="text-zinc-300">location</span>: <span className="text-zinc-100">&quot;Dhaka, Bangladesh&quot;</span>,
                  </div>
                  <div>
                    &nbsp;&nbsp;<span className="text-zinc-300">currentFocus</span>: <span className="text-zinc-100">&quot;AI agent networks &amp; full-stack systems&quot;</span>,
                  </div>
                  <div>
                    &nbsp;&nbsp;<span className="text-zinc-300">stack</span>: [
                  </div>
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-100">&quot;Next.js&quot;</span>, <span className="text-zinc-100">&quot;TypeScript&quot;</span>, <span className="text-zinc-100">&quot;n8n&quot;</span>,
                  </div>
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-100">&quot;Python&quot;</span>, <span className="text-zinc-100">&quot;Supabase&quot;</span>, <span className="text-zinc-100">&quot;Redis&quot;</span>
                  </div>
                  <div>
                    &nbsp;&nbsp;],
                  </div>
                  <div>
                    &nbsp;&nbsp;<span className="text-zinc-300">quantifiedImpact</span>: &#123;
                  </div>
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-300">concurrentCheckouts</span>: <span className="text-primary">&quot;10k+ concurrent&quot;</span>,
                  </div>
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-300">checkoutLatency</span>: <span className="text-primary">&quot;-60%&quot;</span>,
                  </div>
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-300">manualFrictionReduced</span>: <span className="text-primary">&quot;85%&quot;</span>
                  </div>
                  <div>
                    &nbsp;&nbsp;&#125;,
                  </div>
                  <div>
                    &nbsp;&nbsp;<span className="text-zinc-300">availability</span>: <span className="text-zinc-100">&quot;Ready for next integration build&quot;</span>
                  </div>
                  <div>
                    &#125;;
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
