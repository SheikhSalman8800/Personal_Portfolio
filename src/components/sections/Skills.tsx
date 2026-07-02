"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { Terminal, Activity, ArrowRight, Layers, Volume2, Workflow, Bot, Code2 } from "lucide-react";
import { useState } from "react";

export default function Skills() {
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const }
    }
  };

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-grid-pattern border-t border-slate-900">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-emerald-500/5 rounded-full blur-[160px] -z-10" />

      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4"
          >
            <Terminal size={12} className="text-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500">Infrastructure Stack</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tight"
          >
            Technical <span className="gradient-text tracking-tighter">Architecture</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto mt-4 font-medium"
          >
            A grouped breakdown of my technical ecosystem mapped to how data flows from trigger to execution.
          </motion.p>
        </div>

        {/* Pipeline Tech Stack Columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch relative"
        >
          {/* Group 1: Ingress Layer */}
          <motion.div
            variants={itemVariants}
            onMouseEnter={() => setHoveredGroup("ingress")}
            onMouseLeave={() => setHoveredGroup(null)}
            className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
              hoveredGroup === "ingress"
                ? "bg-slate-900 border-emerald-500/40 shadow-lg shadow-emerald-500/[0.02]"
                : "bg-slate-950/40 border-slate-900"
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-400">
                  <Volume2 size={20} />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-500 font-bold block">01 / TRIGGER</span>
                  <h3 className="text-sm font-black uppercase tracking-wider text-white">Ingress & Voice</h3>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-8 font-medium">
                Audio streams and API endpoints designed to capture user actions and voice inputs under 200ms latency.
              </p>
              <div className="space-y-3">
                {skills.ingress.map((tech) => (
                  <SkillItem key={tech.name} name={tech.name} Icon={tech.icon} color={tech.color} />
                ))}
              </div>
            </div>
            <div className="hidden lg:flex justify-end mt-8 text-slate-700">
              <ArrowRight size={18} className="animate-pulse" />
            </div>
          </motion.div>

          {/* Group 2: Orchestration Layer */}
          <motion.div
            variants={itemVariants}
            onMouseEnter={() => setHoveredGroup("orchestration")}
            onMouseLeave={() => setHoveredGroup(null)}
            className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
              hoveredGroup === "orchestration"
                ? "bg-slate-900 border-amber-500/40 shadow-lg shadow-amber-500/[0.02]"
                : "bg-slate-950/40 border-slate-900"
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-400">
                  <Workflow size={20} />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-500 font-bold block">02 / ROUTING</span>
                  <h3 className="text-sm font-black uppercase tracking-wider text-white">Orchestration</h3>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-8 font-medium">
                Workflow automation engines designed with built-in error retry structures and self-healing webhooks.
              </p>
              <div className="space-y-3">
                {skills.orchestration.map((tech) => (
                  <SkillItem key={tech.name} name={tech.name} Icon={tech.icon} color={tech.color} />
                ))}
              </div>
            </div>
            <div className="hidden lg:flex justify-end mt-8 text-slate-700">
              <ArrowRight size={18} className="animate-pulse" />
            </div>
          </motion.div>

          {/* Group 3: Brain Layer */}
          <motion.div
            variants={itemVariants}
            onMouseEnter={() => setHoveredGroup("cognition")}
            onMouseLeave={() => setHoveredGroup(null)}
            className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
              hoveredGroup === "cognition"
                ? "bg-slate-900 border-secondary/40 shadow-lg shadow-secondary/[0.02]"
                : "bg-slate-950/40 border-slate-900"
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-2xl bg-cyan-500/10 text-cyan-400">
                  <Bot size={20} />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-500 font-bold block">03 / COGNITION</span>
                  <h3 className="text-sm font-black uppercase tracking-wider text-white">Reasoning</h3>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-8 font-medium">
                Integrating large language models with vector databases for semantic reasoning and context-aware responses.
              </p>
              <div className="space-y-3">
                {skills.cognition.map((tech) => (
                  <SkillItem key={tech.name} name={tech.name} Icon={tech.icon} color={tech.color} />
                ))}
              </div>
            </div>
            <div className="hidden lg:flex justify-end mt-8 text-slate-700">
              <ArrowRight size={18} className="animate-pulse" />
            </div>
          </motion.div>

          {/* Group 4: Core Applications Layer */}
          <motion.div
            variants={itemVariants}
            onMouseEnter={() => setHoveredGroup("core")}
            onMouseLeave={() => setHoveredGroup(null)}
            className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
              hoveredGroup === "core"
                ? "bg-slate-900 border-slate-700 shadow-lg shadow-white/[0.01]"
                : "bg-slate-950/40 border-slate-900"
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-2xl bg-white/5 text-white">
                  <Code2 size={20} />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-500 font-bold block">04 / DELIVERY</span>
                  <h3 className="text-sm font-black uppercase tracking-wider text-white">Full-Stack Core</h3>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-8 font-medium">
                High-performance frameworks and database layers built to render pages instantly and store data securely.
              </p>
              <div className="space-y-3">
                {skills.core.map((tech) => (
                  <SkillItem key={tech.name} name={tech.name} Icon={tech.icon} color={tech.color} />
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

function SkillItem({ name, Icon, color }: { name: string; Icon: any; color: string }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-900 hover:border-slate-800 transition-colors">
      <div className="flex items-center gap-3">
        <div style={{ color }} className="opacity-80">
          <Icon size={14} />
        </div>
        <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wide">{name}</span>
      </div>
      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
    </div>
  );
}
