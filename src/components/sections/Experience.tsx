"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/lib/data";
import { Calendar, GitBranch, GitCommit, GitMerge, Activity, ShieldCheck, ChevronRight } from "lucide-react";

export default function Experience() {
  const [selectedNode, setSelectedNode] = useState<number>(0);

  const activeExp = experiences[selectedNode];
  const isAI = activeExp.branch === "freelance";

  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-dot-pattern border-t border-slate-900">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-500/[0.015] rounded-full blur-[140px] -z-10" />

      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4"
            >
              <GitBranch size={12} className="text-indigo-400" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-indigo-400">Branching Logic</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black uppercase tracking-tight"
            >
              Branching <span className="gradient-text tracking-tighter">Evolution</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-md font-medium"
          >
            An interactive representation of my engineering path, charting the transition from standard web developer to AI specialist.
          </motion.p>
        </div>

        {/* 1. HORIZONTAL GIT FLOW VISUALIZER (Desktop only) */}
        <div className="hidden lg:block max-w-4xl mx-auto mb-16 relative bg-slate-950 border border-slate-900 rounded-[2rem] p-8">
          
          {/* Legend */}
          <div className="flex items-center gap-6 mb-8 text-[10px] font-mono border-b border-slate-900 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
              <span className="text-slate-400">main_branch (Full-Stack Core)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full border border-dashed border-amber-500" />
              <span className="text-slate-400">ai_branch (Automation & LLMs)</span>
            </div>
          </div>

          <div className="relative h-44 flex items-center justify-around px-8">
            {/* SVG Git lines drawing in background */}
            <svg className="absolute inset-0 w-full h-full text-slate-800" fill="none" preserveAspectRatio="none">
              {/* Main Line */}
              <path d="M 50 110 L 450 110 L 850 110" stroke="#6366F1" strokeWidth="4" strokeLinecap="round" />
              {/* AI Branching path */}
              <path d="M 450 110 Q 650 30 850 35" stroke="#F59E0B" strokeWidth="4" strokeDasharray="6 4" strokeLinecap="round" />
            </svg>

            {/* Step 1 Node (Tickify, 2023-2025) */}
            <button
              onClick={() => setSelectedNode(2)}
              className={`relative z-10 flex flex-col items-center group focus:outline-none -translate-x-32`}
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                selectedNode === 2
                  ? "bg-slate-950 border-indigo-500 scale-125 shadow-[0_0_12px_rgba(99,102,241,0.5)]"
                  : "bg-slate-950 border-slate-700 hover:border-indigo-400"
              }`} />
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase mt-3">2023 - 2025</span>
              <span className="text-xs font-black uppercase text-white mt-1">Tickify Scale</span>
            </button>

            {/* Step 2 Node (The Analytics Team, 2025, Branch point) */}
            <button
              onClick={() => setSelectedNode(1)}
              className="relative z-10 flex flex-col items-center group focus:outline-none"
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                selectedNode === 1
                  ? "bg-slate-950 border-indigo-500 scale-125 shadow-[0_0_12px_rgba(99,102,241,0.5)]"
                  : "bg-slate-950 border-slate-700 hover:border-indigo-400"
              }`} />
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase mt-3">2025 (6 mos)</span>
              <span className="text-xs font-black uppercase text-white mt-1">Analytics Team</span>
            </button>

            {/* Step 3 Node (Freelance AI Specialist, Late 2025-Present, Top Node) */}
            <button
              onClick={() => setSelectedNode(0)}
              className="relative z-10 flex flex-col items-center group focus:outline-none translate-x-32 -translate-y-[38px]"
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                selectedNode === 0
                  ? "bg-slate-950 border-amber-500 scale-125 shadow-[0_0_12px_rgba(245,158,11,0.5)]"
                  : "bg-slate-950 border-slate-700 hover:border-amber-400"
              }`} />
              <span className="text-[10px] font-mono font-bold text-amber-500 uppercase mt-3">LATE 2025 - PRESENT</span>
              <span className="text-xs font-black uppercase text-white mt-1">Freelance AI</span>
            </button>
          </div>
        </div>

        {/* 2. CASCADING VERTICAL SELECTORS (Mobile only) */}
        <div className="flex lg:hidden flex-col gap-4 max-w-sm mx-auto mb-8">
          {experiences.map((exp, index) => {
            const isActive = selectedNode === index;
            return (
              <button
                key={index}
                onClick={() => setSelectedNode(index)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 text-left ${
                  isActive ? "bg-slate-900 border-indigo-500" : "bg-slate-950/60 border-slate-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-mono font-bold ${isActive ? "text-indigo-400" : "text-slate-600"}`}>
                    {exp.period.split(" ")[0]}
                  </span>
                  <span className={`text-sm font-black uppercase tracking-wider ${isActive ? "text-white" : "text-slate-400"}`}>
                    {exp.company}
                  </span>
                </div>
                <ChevronRight size={14} className={`${isActive ? "text-indigo-400 translate-x-1" : "text-slate-600"} transition-transform duration-300`} />
              </button>
            );
          })}
        </div>

        {/* 3. DYNAMIC DETAILS PANEL */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedNode}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className={`p-8 md:p-10 rounded-3xl border ${
                isAI ? "bg-slate-950/80 border-amber-500/20" : "bg-slate-950/80 border-indigo-500/20"
              }`}
            >
              {/* Header block */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-900 pb-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-2">
                    {activeExp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-400">
                    <span className="text-white">{activeExp.company}</span>
                    <span>•</span>
                    <span className="font-mono text-xs">{activeExp.period}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  {isAI ? (
                    <>
                      <GitBranch size={10} className="text-amber-500" />
                      <span className="text-amber-500 font-bold">AI & Automation Branch</span>
                    </>
                  ) : (
                    <>
                      <GitCommit size={10} className="text-indigo-500" />
                      <span className="text-indigo-400 font-bold">Standard Dev Branch</span>
                    </>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 font-medium text-base mb-8 leading-relaxed">
                {activeExp.description}
              </p>

              {/* Milestones / Commits list */}
              <div>
                <h4 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-4">
                  Branch Commits / Key Accomplishments
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeExp.milestones.map((milestone) => (
                    <div key={milestone} className="flex items-start gap-2.5 text-sm text-slate-300 font-medium">
                      <ShieldCheck size={16} className={`mt-0.5 flex-shrink-0 ${isAI ? "text-amber-500" : "text-indigo-500"}`} />
                      <span>{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
