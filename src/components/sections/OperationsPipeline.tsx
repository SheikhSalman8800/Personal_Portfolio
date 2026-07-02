"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services, skills } from "@/lib/data";
import { Check, Cpu, Server, Activity, ArrowRight, Terminal, ArrowDown, Workflow } from "lucide-react";
import Link from "next/link";

export default function OperationsPipeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  // Map step index to skills category key
  const getSkillsKey = (index: number): keyof typeof skills => {
    switch (index) {
      case 0: return "ingress";
      case 1: return "orchestration";
      case 2: return "cognition";
      case 3: return "core";
      default: return "ingress";
    }
  };

  const activeCategory = getSkillsKey(activeStep);
  const activeTools = skills[activeCategory];
  const activeService = services[activeStep];
  const ActiveIcon = activeService.icon;

  return (
    <section id="pipeline" className="py-28 relative overflow-hidden bg-dot-pattern border-t border-slate-900">
      {/* Radial ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[300px] bg-amber-500/[0.02] rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[300px] bg-cyan-500/[0.02] rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-4"
          >
            <Activity size={12} className="text-emerald-500" />
            <span>Operational Architecture</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tight"
          >
            The Operations <span className="gradient-text tracking-tighter">Pipeline</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto mt-4 font-medium"
          >
            How logic, intelligence, and interfaces are synthesized into automated networks.
          </motion.p>
        </div>

        {/* Pipeline Diagram Connector Rows (Desktop only) */}
        <div className="hidden lg:flex items-center justify-between max-w-5xl mx-auto mb-16 relative px-8">
          {/* Animated Connecting SVG Path behind nodes */}
          <div className="absolute inset-0 top-1/2 -translate-y-1/2 h-1 left-12 right-12 bg-slate-900 -z-10">
            <motion.div 
              className="h-full bg-gradient-to-r from-emerald-500 via-amber-500 to-cyan-500 origin-left"
              animate={{ scaleX: [0, 1, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
          </div>

          {services.map((service, index) => {
            const isActive = activeStep === index;
            const StepIcon = service.icon;
            
            return (
              <button
                key={service.step}
                onClick={() => setActiveStep(index)}
                className={`relative flex flex-col items-center group focus:outline-none transition-all duration-300 ${
                  isActive ? "scale-105" : "hover:scale-102"
                }`}
              >
                {/* Node Ring */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-500 ${
                  isActive
                    ? "bg-slate-900 border-amber-500 text-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.25)]"
                    : "bg-slate-950 border-slate-800 text-slate-500 group-hover:text-slate-300 group-hover:border-slate-700"
                }`}>
                  <StepIcon size={22} className={isActive ? "animate-pulse" : ""} />
                </div>

                {/* Node Text */}
                <span className={`text-[10px] font-mono font-bold tracking-widest mt-4 uppercase transition-colors duration-300 ${isActive ? "text-amber-500" : "text-slate-500 group-hover:text-slate-400"}`}>
                  {service.phase}
                </span>
                <span className={`text-xs font-black uppercase mt-1 tracking-wide transition-colors duration-300 ${isActive ? "text-white" : "text-slate-400 group-hover:text-slate-300"}`}>
                  {service.title.split("&")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mobile Cascade Layout Nodes (Mobile only) */}
        <div className="flex lg:hidden flex-col items-center space-y-4 mb-12">
          {services.map((service, index) => {
            const isActive = activeStep === index;
            return (
              <button
                key={service.step}
                onClick={() => setActiveStep(index)}
                className={`w-full max-w-sm flex items-center justify-between p-4 rounded-xl border transition-all duration-300 text-left ${
                  isActive ? "bg-slate-900 border-amber-500" : "bg-slate-950/60 border-slate-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-mono font-bold ${isActive ? "text-amber-500" : "text-slate-600"}`}>0{index + 1}</span>
                  <span className={`text-sm font-black uppercase tracking-wider ${isActive ? "text-white" : "text-slate-400"}`}>{service.title}</span>
                </div>
                <ArrowDown size={14} className={`${isActive ? "text-amber-500 rotate-180" : "text-slate-600"} transition-transform duration-300`} />
              </button>
            );
          })}
        </div>

        {/* Main Details Screen Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left Block: Stage details & Feature list */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-900 bg-slate-950/40 p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-mono font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md">
                  STAGE 0{activeStep + 1}
                </span>
                <span className="text-xs font-mono text-slate-500 font-bold uppercase tracking-widest">
                  {activeService.phase} Module
                </span>
              </div>

              <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-6">
                {activeService.title}
              </h3>
              
              <p className="text-slate-400 font-medium text-base mb-8 leading-relaxed">
                {activeService.description}
              </p>

              {/* Bullet Features details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {activeService.details.map((detail) => (
                  <div key={detail} className="flex items-center gap-3 text-sm font-bold text-slate-300">
                    <Check size={16} className="text-emerald-500 flex-shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Grouped Stack / Tech Arsenal Section */}
            <div className="border-t border-slate-900 pt-8 mt-4">
              <h4 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-4">
                Pipeline Stack For This Stage
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {activeTools.map((tech) => {
                  const TechIcon = tech.icon;
                  return (
                    <div 
                      key={tech.name}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-900 hover:border-slate-800 transition-colors"
                    >
                      <span style={{ color: tech.color }} className="opacity-80">
                        <TechIcon size={14} />
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide truncate">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Block: Live Dashboard Schematic visualizer */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full h-full min-h-[350px] rounded-3xl border border-slate-900 bg-slate-950 p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-amber-500/[0.015] to-transparent blur-2xl pointer-events-none" />
              
              {/* Header bar */}
              <div className="flex items-center justify-between border-b border-slate-900 pb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-500">Log Visualizer</span>
                </div>
                <span className="text-[9px] font-mono text-amber-500 font-bold uppercase tracking-widest">
                  CONSOLE.NODE_0{activeStep + 1}
                </span>
              </div>

              {/* Dynamic Console Telemetry */}
              <div className="my-auto py-6 relative z-10 font-mono text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    {activeStep === 0 && (
                      <div className="space-y-3">
                        <div className="text-[10px] text-emerald-400">&gt; listening on port 5002/vapi-ingress</div>
                        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-900 text-[10px] text-slate-400 space-y-1.5">
                          <div className="text-white font-bold uppercase">webhook_payload</div>
                          <div>source: &quot;retell_voice_stream&quot;</div>
                          <div>caller_id: &quot;+12025550143&quot;</div>
                          <div>intent: &quot;reschedule_booking&quot;</div>
                        </div>
                        <div className="text-[10px] text-slate-500 animate-pulse">&gt; waiting for trigger validation...</div>
                      </div>
                    )}

                    {activeStep === 1 && (
                      <div className="space-y-3">
                        <div className="text-[10px] text-amber-500">&gt; executing n8n subagent loop</div>
                        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-900 text-[10px] text-slate-400 space-y-1">
                          <div>STATUS: <span className="text-emerald-500 font-bold">ROUTE_RESOLVED</span></div>
                          <div>TASK: parse_transcript_intent</div>
                          <div>ATTEMPT: 1/5 - <span className="text-emerald-500">SUCCESS</span></div>
                          <div>SYNC: syncing CRM properties...</div>
                        </div>
                        <div className="text-[10px] text-slate-500 animate-pulse">&gt; trigger next node in pipeline...</div>
                      </div>
                    )}

                    {activeStep === 2 && (
                      <div className="space-y-3">
                        <div className="text-[10px] text-cyan-400">&gt; prompting Claude-3-5-Sonnet</div>
                        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-900 text-[10px] text-slate-400 space-y-1.5 leading-relaxed">
                          <div className="text-slate-500 italic">// System Context injected</div>
                          <div>Input: &quot;Reschedule me to Friday afternoon&quot;</div>
                          <div>Response: <span className="text-white">&quot;Confirming Friday July 5th at 3:00 PM.&quot;</span></div>
                        </div>
                        <div className="text-[10px] text-slate-500 animate-pulse">&gt; response token count: 184</div>
                      </div>
                    )}

                    {activeStep === 3 && (
                      <div className="space-y-3">
                        <div className="text-[10px] text-white">&gt; writing payload state to DB</div>
                        <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-900 text-[10px] text-slate-400 space-y-1">
                          <div>ENGINE: supabase_pgvector</div>
                          <div>MUTATION: <span className="text-emerald-500">INSERT</span> INTO booking_logs</div>
                          <div>RESPONSE: 201 Created</div>
                          <div>DISPATCH: Stripe checkouts updated</div>
                        </div>
                        <div className="text-[10px] text-emerald-400">&gt; pipeline execution finished (142ms)</div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer bar */}
              <div className="flex justify-between items-center text-[9px] font-mono text-slate-600 border-t border-slate-900 pt-4 relative z-10">
                <span>SYS_PING: 42ms</span>
                <span>PACKETS_FLOWING: 100%</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
