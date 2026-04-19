"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Terminal, Cpu, Globe, Database, Layers, Workflow, Bot, Zap, Code2 } from "lucide-react";

export default function Skills() {
  const allSkills = [...skills.web, ...skills.automation];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Terminal size={14} className="text-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Technical Arsenal</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black mb-6 tracking-tighter"
          >
            My <span className="gradient-text">Tech Stack</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium"
          >
            I leverage a modern ecosystem of tools to build scalable, AI-driven applications and automated workflows.
          </motion.p>
        </div>

        {/* Skill Ribbon / Marquee (Infinite Scroll) */}
        <div className="relative mb-20 flex overflow-hidden py-10 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:after:from-background after:to-transparent">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex flex-none gap-8 pr-8"
          >
            {[...allSkills, ...allSkills].map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 rounded-2xl glass-card border-foreground/5 whitespace-nowrap group hover:border-primary/50 transition-all duration-300"
              >
                <div style={{ color: skill.color }} className="group-hover:scale-110 transition-transform">
                  <skill.icon size={20} />
                </div>
                <span className="text-sm font-bold tracking-tight">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Detailed Skill Categories */}
          <div className="space-y-12">
            <CategoryHeader title="Web Engineering" icon={Globe} color="text-blue-500" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.web.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <CategoryHeader title="Automation & Systems" icon={Cpu} color="text-purple-500" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.automation.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryHeader({ title, icon: Icon, color }: { title: string; icon: any; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4"
    >
      <div className={cn("p-3 rounded-2xl bg-foreground/5 shadow-inner", color)}>
        <Icon size={24} />
      </div>
      <h3 className="text-2xl font-black tracking-tight">{title}</h3>
      <div className="flex-grow h-px bg-gradient-to-r from-foreground/10 to-transparent ml-4" />
    </motion.div>
  );
}

function SkillCard({ skill, index }: { skill: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="group relative p-5 rounded-2xl glass-card border-foreground/5 flex flex-col items-start gap-4 hover:bg-foreground/5 transition-all duration-300"
    >
      <div 
        className="p-2 rounded-lg bg-foreground/5 transition-colors duration-300"
        style={{ color: skill.color }}
      >
        <skill.icon size={20} />
      </div>
      <span className="text-xs font-black uppercase tracking-widest text-foreground/70 group-hover:text-foreground">
        {skill.name}
      </span>
      
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-2 h-2 border-t-2 border-r-2 border-primary/50" />
      </div>
    </motion.div>
  );
}
