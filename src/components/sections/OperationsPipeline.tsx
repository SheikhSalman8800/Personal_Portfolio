"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services, skills } from "@/lib/data";
import { Check, Cpu, Server, Activity, ArrowRight, Terminal, ArrowDown, Workflow } from "lucide-react";

export default function OperationsPipeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  // Map step index to active tools for each pipeline stage
  const getActiveTools = (index: number) => {
    switch (index) {
      case 0: // Capture
        return [
          ...skills.aiVoice.filter(t => ["Vapi", "Retell"].includes(t.name)),
          ...skills.other.filter(t => ["Twilio"].includes(t.name))
        ];
      case 1: // Orchestrate
        return skills.automation;
      case 2: // Think
        return skills.aiVoice.filter(t => ["OpenAI"].includes(t.name));
      case 3: // Deliver
        return [
          ...skills.frontend.filter(t => ["Next.js", "React"].includes(t.name)),
          ...skills.backend.filter(t => ["Supabase", "NestJS"].includes(t.name))
        ];
      default:
        return [];
    }
  };

  const activeTools = getActiveTools(activeStep);
  const activeService = services[activeStep];

  return (
    <section id="pipeline" className="py-24 relative overflow-hidden bg-dot-pattern border-t border-zinc-900">
      {/* Radial ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[300px] bg-primary/[0.01] rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Section Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-zinc-500"
          >
            {"// operations pipeline"}
          </motion.div>
        </div>

        {/* Desktop Node Tabs Navigation (Replacing circular badges) */}
        <div className="hidden lg:flex items-center justify-between gap-4 w-full mb-16 border-b border-zinc-900/60 pb-3 font-mono">
          {services.map((service, index) => {
            const isActive = activeStep === index;
            const StepIcon = service.icon;
            
            return (
              <button
                key={service.step}
                onClick={() => setActiveStep(index)}
                className={`flex items-center gap-2.5 px-3 py-2 border-b-2 transition-all duration-300 focus:outline-none ${
                  isActive
                    ? "border-primary text-white font-bold"
                    : "border-transparent text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <StepIcon size={13} className={isActive ? "text-primary" : "text-zinc-500"} />
                <span className="text-[10px] tracking-wider uppercase">
                  {service.phase}
                </span>
                <span className="text-zinc-700 text-[10px]">|</span>
                <span className="text-xs uppercase tracking-wider">
                  {service.title.split("&")[0].trim()}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mobile Cascade Layout Nodes (Mobile only) */}
        <div className="flex lg:hidden flex-col space-y-2 mb-12 max-w-sm mx-auto font-mono">
          {services.map((service, index) => {
            const isActive = activeStep === index;
            const StepIcon = service.icon;
            return (
              <button
                key={service.step}
                onClick={() => setActiveStep(index)}
                className={`flex items-center justify-between p-3 rounded border transition-all duration-300 text-left ${
                  isActive ? "bg-zinc-900/50 border-primary/30 text-white" : "bg-zinc-950/40 border-zinc-900/60 text-zinc-500"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <StepIcon size={13} className={isActive ? "text-primary" : "text-zinc-500"} />
                  <span className="text-[10px] tracking-wider uppercase font-bold">{service.phase}</span>
                </div>
                <ArrowDown size={12} className={`${isActive ? "text-primary rotate-180" : "text-zinc-600"} transition-transform duration-300`} />
              </button>
            );
          })}
        </div>

        {/* Main Details Screen Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Stage details & Feature list */}
          <div className="lg:col-span-7 rounded-lg border border-zinc-900 bg-zinc-950/40 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 font-mono">
                <span className="text-[10px] font-bold text-primary bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
                  STAGE 0{activeStep + 1}
                </span>
                <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">
                  {activeService.phase} Module
                </span>
              </div>

              <h3 className="text-xl font-bold font-mono uppercase tracking-tight text-zinc-100 mb-4">
                {activeService.title}
              </h3>
              
              <p className="text-zinc-400 font-sans text-sm mb-6 leading-relaxed">
                {activeService.description}
              </p>

              {/* Bullet Features details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {activeService.details.map((detail) => (
                  <div key={detail} className="flex items-center gap-2.5 text-xs text-zinc-300 font-mono">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Grouped Stack / Tech Arsenal Section */}
            <div className="border-t border-zinc-900/60 pt-6 mt-4">
              <h4 className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-widest mb-3">
                Pipeline Stack For This Stage
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {activeTools.map((tech) => {
                  const TechIcon = tech.icon;
                  return (
                    <div 
                      key={tech.name}
                      className="flex items-center gap-2 p-2 rounded bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-colors group"
                    >
                      <span className="text-zinc-500 group-hover:text-primary transition-colors">
                        <TechIcon size={12} />
                      </span>
                      <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wide truncate">
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
            <div className="w-full h-full min-h-[320px] rounded-lg border border-zinc-900 bg-zinc-950 p-6 flex flex-col justify-between relative overflow-hidden font-mono">
              
              {/* Header bar */}
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3.5 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">Log Visualizer</span>
                </div>
                <span className="text-[9px] text-primary font-bold uppercase tracking-widest">
                  CONSOLE.NODE_0{activeStep + 1}
                </span>
              </div>

              {/* Dynamic Console Telemetry */}
              <div className="my-auto py-4 relative z-10 text-left text-[11px] leading-relaxed">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    {activeStep === 0 && (
                      <div className="space-y-2">
                        <div className="text-primary">&gt; listening on port 5002/vapi-ingress</div>
                        <div className="p-3 rounded bg-zinc-900/60 border border-zinc-900/80 text-[10px] text-zinc-400 space-y-1">
                          <div className="text-zinc-200 font-bold uppercase">webhook_payload</div>
                          <div>source: &quot;retell_voice_stream&quot;</div>
                          <div>caller_id: &quot;+12025550143&quot;</div>
                          <div>intent: &quot;reschedule_booking&quot;</div>
                        </div>
                        <div className="text-zinc-500 animate-pulse">&gt; waiting for trigger validation...</div>
                      </div>
                    )}

                    {activeStep === 1 && (
                      <div className="space-y-2">
                        <div className="text-primary">&gt; executing n8n subagent loop</div>
                        <div className="p-3 rounded bg-zinc-900/60 border border-zinc-900/80 text-[10px] text-zinc-400 space-y-1">
                          <div>STATUS: <span className="text-primary font-bold">ROUTE_RESOLVED</span></div>
                          <div>TASK: parse_transcript_intent</div>
                          <div>ATTEMPT: 1/5 - <span className="text-primary font-bold">SUCCESS</span></div>
                          <div>SYNC: syncing CRM properties...</div>
                        </div>
                        <div className="text-zinc-500 animate-pulse">&gt; trigger next node in pipeline...</div>
                      </div>
                    )}

                    {activeStep === 2 && (
                      <div className="space-y-2">
                        <div className="text-primary">&gt; prompting Claude-3-5-Sonnet</div>
                        <div className="p-3 rounded bg-zinc-900/60 border border-zinc-900/80 text-[10px] text-zinc-400 space-y-1 leading-normal">
                          <div className="text-zinc-500 italic">{"// System Context injected"}</div>
                          <div>Input: &quot;Reschedule me to Friday afternoon&quot;</div>
                          <div>Response: <span className="text-zinc-200">&quot;Confirming Friday July 5th at 3:00 PM.&quot;</span></div>
                        </div>
                        <div className="text-zinc-500 animate-pulse">&gt; response token count: 184</div>
                      </div>
                    )}

                    {activeStep === 3 && (
                      <div className="space-y-2">
                        <div className="text-primary">&gt; writing payload state to DB</div>
                        <div className="p-3 rounded bg-zinc-900/60 border border-zinc-900/80 text-[10px] text-zinc-400 space-y-1">
                          <div>ENGINE: supabase_pgvector</div>
                          <div>MUTATION: <span className="text-primary">INSERT</span> INTO booking_logs</div>
                          <div>RESPONSE: 201 Created</div>
                          <div>DISPATCH: Stripe checkouts updated</div>
                        </div>
                        <div className="text-primary animate-pulse">&gt; pipeline execution finished (142ms)</div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer bar */}
              <div className="flex justify-between items-center text-[9px] text-zinc-600 border-t border-zinc-900 pt-3.5 relative z-10">
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
