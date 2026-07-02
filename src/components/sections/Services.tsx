"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/data";
import { Check, Cpu, HelpCircle, Server, Activity, ArrowRight, Play, Terminal } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="services" className="py-28 relative overflow-hidden bg-dot-pattern border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute bottom-10 right-10 w-[600px] h-[300px] bg-secondary/5 rounded-full blur-[140px] -z-10" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4"
          >
            <Activity size={12} className="text-secondary" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">System Capabilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tight"
          >
            My <span className="gradient-text tracking-tighter">Capabilities Pipeline</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto mt-4 font-medium"
          >
            A modular approach to building automated logic networks, low-latency AI integrations, and full-stack systems.
          </motion.p>
        </div>

        {/* Pipeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Vertical Steps Accordion */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            {services.map((service, index) => {
              const isActive = activeStep === index;
              const Icon = service.icon;

              return (
                <div
                  key={service.step}
                  onClick={() => setActiveStep(index)}
                  className={`group text-left p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    isActive
                      ? "bg-slate-900/60 border-slate-700 shadow-xl shadow-amber-500/[0.02]"
                      : "bg-slate-950/30 border-slate-900 hover:border-slate-800"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* Step Tag */}
                      <span className={`text-xs font-mono font-bold tracking-widest ${isActive ? "text-amber-500" : "text-slate-500"}`}>
                        STAGE {service.step}
                      </span>
                      <h3 className={`text-xl font-black uppercase tracking-tight transition-colors ${isActive ? "text-white" : "text-slate-400 group-hover:text-slate-200"}`}>
                        {service.title}
                      </h3>
                    </div>
                    <div className={`p-2 rounded-xl transition-colors ${isActive ? "bg-amber-500 text-black" : "bg-slate-900 text-slate-400"}`}>
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Expandable content */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 border-t border-slate-800/60 mt-4">
                          <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                            {service.description}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                            {service.details.map((detail) => (
                              <div key={detail} className="flex items-center gap-2.5 text-xs font-bold text-slate-300">
                                <Check size={14} className="text-secondary flex-shrink-0" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                          <Link href="/contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500 hover:gap-3 transition-all">
                            <span>Initialize Service Request</span>
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Blueprint Board */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full h-full min-h-[300px] lg:min-h-[400px] rounded-3xl border border-slate-800 bg-slate-950 p-8 flex flex-col justify-between relative overflow-hidden">
              {/* Radial glow matching active step */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-slate-900 pb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">Pipeline Visualizer</span>
                </div>
                <span className="text-[10px] font-mono text-amber-500 uppercase font-bold tracking-widest">
                  SYS.STAGE_0{activeStep + 1}
                </span>
              </div>

              {/* Render dynamic mockup graph matching active step */}
              <div className="my-auto py-8 flex flex-col items-center justify-center relative z-10">
                {activeStep === 0 && (
                  <div className="w-full space-y-6">
                    <div className="flex justify-around items-center">
                      <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col items-center text-center">
                        <Terminal size={20} className="text-emerald-400 mb-2" />
                        <span className="text-[9px] font-bold text-slate-400 uppercase">Incoming Call</span>
                      </div>
                      <div className="w-8 h-px border-t-2 border-dashed border-slate-800" />
                      <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col items-center text-center">
                        <Cpu size={20} className="text-amber-500 mb-2 animate-pulse" />
                        <span className="text-[9px] font-bold text-slate-400 uppercase">Webhook Ingest</span>
                      </div>
                    </div>
                    <div className="bg-slate-900/40 border border-slate-900 p-4 rounded-xl text-[10px] font-mono text-slate-500 space-y-1 text-left">
                      <div><span className="text-emerald-500">GET</span> /webhook/ingress - 200 OK</div>
                      <div><span className="text-amber-500">Payload:</span> {"{ stream_id: 'vapi_12a8f' }"}</div>
                    </div>
                  </div>
                )}

                {activeStep === 1 && (
                  <div className="w-full space-y-6">
                    <div className="flex flex-col items-center gap-4">
                      <div className="px-5 py-3 bg-slate-900 border border-slate-800 rounded-xl text-center">
                        <span className="text-[10px] font-mono text-slate-400">TRIGGER: webhook_event</span>
                      </div>
                      <div className="h-6 w-px bg-amber-500" />
                      <div className="flex justify-center gap-4">
                        <div className="px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-center text-[9px] font-bold text-slate-400 uppercase">n8n filter</div>
                        <div className="px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-center text-[9px] font-bold text-slate-400 uppercase">Auto retry</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="w-full space-y-4">
                    <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col items-start gap-3">
                      <div className="flex items-center gap-2">
                        <span className="p-1 rounded bg-amber-500/10 text-amber-500"><Cpu size={12} /></span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white">Claude 3.5 Agent Execution</span>
                      </div>
                      <div className="w-full bg-slate-950 p-3 rounded-lg text-[9px] font-mono text-emerald-400 text-left space-y-1 leading-relaxed">
                        <div>&gt; Analyzing patient sentiment...</div>
                        <div>&gt; Extraction matches: <span className="text-white">{"{ date: 'July 5th' }"}</span></div>
                        <div>&gt; Status: Intent verified. Routing checkout.</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="w-full space-y-4">
                    <div className="flex justify-around items-center">
                      <div className="text-center">
                        <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 mx-auto mb-2"><Server size={18} /></div>
                        <span className="text-[8px] font-bold uppercase text-slate-500">Supabase</span>
                      </div>
                      <div className="text-center">
                        <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 mx-auto mb-2 animate-bounce"><Cpu size={18} /></div>
                        <span className="text-[8px] font-bold uppercase text-slate-500">Next.js UI</span>
                      </div>
                      <div className="text-center">
                        <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 mx-auto mb-2"><Terminal size={18} /></div>
                        <span className="text-[8px] font-bold uppercase text-slate-500">Stripe Sync</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center text-[9px] font-mono text-slate-600 border-t border-slate-900 pt-4 relative z-10">
                <span>SYS_HEALTH: 99.98%</span>
                <span>THREAD: ACTIVE_CONCURRENT</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
