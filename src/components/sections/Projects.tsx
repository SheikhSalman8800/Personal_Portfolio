"use client";

import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import { Github, ExternalLink, Activity, Cpu, HelpCircle, ChevronDown, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  // Extract Tickify as the primary featured case study
  const tickifyProject = projects.find((p) => p.id === "tickify-scaling");
  const otherProjects = projects.filter((p) => p.id !== "tickify-scaling");

  return (
    <section id="projects" className="py-28 relative overflow-hidden bg-grid-pattern border-t border-slate-900">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/[0.02] rounded-full blur-[160px] -z-10" />

      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4"
            >
              <Activity size={12} className="text-amber-500" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-500">System Deployments</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black uppercase tracking-tight"
            >
              Featured <span className="gradient-text tracking-tighter">Case Studies</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-md font-medium"
          >
            A registry of production-ready automations, full-stack systems, and cognitive pipelines engineered to optimize operations.
          </motion.p>
        </div>

        {/* 1. TICKIFY HERO CASE STUDY (Prominent top feature) */}
        {tickifyProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-28 p-8 md:p-12 rounded-[2.5rem] bg-slate-950 border border-slate-900 relative overflow-hidden"
          >
            {/* Background subtle mesh glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              
              {/* Left Column: Metrics & Case Text */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-bold uppercase tracking-widest mb-4">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    <span>Primary Case Study / Scale Optimization</span>
                  </div>
                  <h3 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight mb-6">
                    Scaling Bangladesh&apos;s Tickify Platform
                  </h3>
                  <p className="text-slate-300 text-base leading-relaxed mb-8 font-medium">
                    {tickifyProject.longDescription}
                  </p>
                </div>

                {/* Big Metric Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                    <div className="text-3xl font-black text-white">10K+</div>
                    <div className="text-[9px] font-mono text-slate-500 uppercase tracking-wider mt-1">Concurrent Checkouts</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                    <div className="text-3xl font-black text-amber-500">-60%</div>
                    <div className="text-[9px] font-mono text-slate-500 uppercase tracking-wider mt-1">Checkout Latency</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                    <div className="text-3xl font-black text-emerald-500">0%</div>
                    <div className="text-[9px] font-mono text-slate-500 uppercase tracking-wider mt-1">Checkout Failures</div>
                  </div>
                </div>

                {/* Technical tags & Link CTA */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-900 pt-6">
                  <div className="flex flex-wrap gap-2">
                    {tickifyProject.tags.map((tag) => (
                      <span key={tag} className="text-[9px] font-mono font-bold uppercase text-slate-400 px-2.5 py-1 rounded bg-slate-900 border border-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    {tickifyProject.github && (
                      <a
                        href={tickifyProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                        aria-label="View Github"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    <a
                      href={tickifyProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
                    >
                      <span>Check Production Live</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Telemetry Board */}
              <div className="lg:col-span-5 flex items-stretch">
                <div className="w-full min-h-[300px] rounded-3xl border border-slate-900 bg-slate-950 p-6 flex flex-col justify-between relative overflow-hidden group">
                  <img
                    src={tickifyProject.image}
                    alt={tickifyProject.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-15 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />

                  {/* Top terminal details */}
                  <div className="flex items-center justify-between border-b border-slate-900 pb-3 relative z-10">
                    <div className="flex items-center gap-1.5">
                      <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Scale Dashboard</span>
                    </div>
                    <span className="text-[9px] font-mono text-indigo-400 font-bold uppercase tracking-widest">SYS_UPTIME: 100%</span>
                  </div>

                  {/* Center telemetry */}
                  <div className="my-auto py-6 relative z-10 space-y-4 font-mono text-[9px]">
                    <div className="space-y-1.5 p-3 rounded-xl bg-slate-900/60 border border-slate-900 text-slate-400">
                      <div className="text-white font-bold uppercase text-[10px]">Queue Orchestration</div>
                      <div>Engine: redis_token_bucket</div>
                      <div>Active Session Queue: <span className="text-emerald-500">10,482 clients</span></div>
                      <div>Queue Buffer Load: 4.8%</div>
                      <div>State: <span className="text-emerald-400">READY</span></div>
                    </div>
                    <div className="space-y-1.5 p-3 rounded-xl bg-slate-900/60 border border-slate-900 text-slate-400">
                      <div className="text-white font-bold uppercase text-[10px]">Database Telemetry</div>
                      <div>Reads: 142ms | Writes: 21ms</div>
                      <div>Cache Hit Ratio: 98.4% (Redis cache)</div>
                    </div>
                  </div>

                  {/* Footer telemetry */}
                  <div className="flex justify-between items-center text-[9px] font-mono text-slate-600 border-t border-slate-900 pt-3 relative z-10">
                    <span>SYS_LOAD: NORMAL</span>
                    <span>PORTS: 5432, 6379</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* 2. OTHER DEPLOYMENTS TECHNICAL LEDGER (Non-card list view) */}
        <div>
          <div className="flex items-center gap-2 mb-12 border-b border-slate-900 pb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <h3 className="text-lg font-black uppercase tracking-wider text-slate-400">
              Other Pipeline Deployments
            </h3>
          </div>

          <div className="border-t border-slate-900">
            {otherProjects.map((project, i) => {
              const isExpanded = expandedProject === project.id;
              
              return (
                <div
                  key={project.id}
                  className="border-b border-slate-900"
                >
                  {/* Ledger Header Row */}
                  <button
                    onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                    className="w-full py-8 flex flex-col md:flex-row items-start md:items-center justify-between text-left gap-4 hover:bg-slate-950/20 px-4 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-slate-600">{i < 9 ? "0" : ""}{i + 1}</span>
                      <h4 className="text-xl font-black uppercase text-white tracking-wide group-hover:text-amber-500 transition-colors">
                        {project.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                      <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                        {project.category}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-slate-500 transition-transform duration-300 ${isExpanded ? "rotate-180 text-amber-500" : ""}`}
                      />
                    </div>
                  </button>

                  {/* Ledger Expandable Case Study Details */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pt-2 px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-slate-900/40">
                          
                          {/* Left Description Column */}
                          <div className="lg:col-span-6 flex flex-col justify-between">
                            <div>
                              <p className="text-slate-400 font-medium text-sm leading-relaxed mb-6">
                                {project.longDescription}
                              </p>
                              <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag) => (
                                  <span key={tag} className="text-[9px] font-mono font-bold text-slate-500 px-2 py-0.5 rounded bg-slate-950 border border-slate-900">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-900/60">
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 px-4 rounded-lg bg-slate-950 border border-slate-900 text-xs font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                                >
                                  <Github size={12} />
                                  <span>View Code</span>
                                </a>
                              )}
                              {project.link && (
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 px-4 rounded-lg bg-slate-950 border border-slate-900 text-xs font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                                >
                                  <ExternalLink size={12} />
                                  <span>Live Demo</span>
                                </a>
                              )}
                            </div>
                          </div>

                          {/* Right Diagnostic Cards Column */}
                          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            
                            {/* Problem Card */}
                            <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex flex-col justify-between">
                              <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-red-400 uppercase tracking-widest mb-3">
                                <HelpCircle size={10} />
                                <span>Problem</span>
                              </div>
                              <p className="text-[10px] text-slate-400 leading-normal font-medium">
                                {project.problem}
                              </p>
                            </div>

                            {/* System Card */}
                            <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex flex-col justify-between">
                              <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-amber-400 uppercase tracking-widest mb-3">
                                <Cpu size={10} />
                                <span>System</span>
                              </div>
                              <p className="text-[10px] text-slate-400 leading-normal font-medium">
                                {project.system}
                              </p>
                            </div>

                            {/* Metric Card */}
                            <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex flex-col justify-between">
                              <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-widest mb-3">
                                <Activity size={10} />
                                <span>Impact</span>
                              </div>
                              <p className="text-[10px] text-slate-400 leading-normal font-medium">
                                {project.impact}
                              </p>
                            </div>

                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
