"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { 
  Code2, Cpu, Workflow, Bot, Users, Globe, Layers, LucideIcon 
} from "lucide-react";
import { useState } from "react";

export default function Skills() {
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const }
    }
  };

  const groups = [
    {
      id: "frontend",
      num: "01",
      layer: "INTERFACE",
      title: "Frontend",
      description: "Modern, responsive client-side architectures built for speed and visual premium.",
      icon: Code2,
      items: skills.frontend
    },
    {
      id: "backend",
      num: "02",
      layer: "RUNTIME",
      title: "Backend",
      description: "Scalable logic layers, database setups, and custom server architectures.",
      icon: Cpu,
      items: skills.backend
    },
    {
      id: "automation",
      num: "03",
      layer: "FLOWS",
      title: "Automation",
      description: "Automated event-driven pipelines designed with error recovery.",
      icon: Workflow,
      items: skills.automation
    },
    {
      id: "aiVoice",
      num: "04",
      layer: "AGENTS",
      title: "AI & Voice",
      description: "Low-latency conversational voice streams and intelligent LLM layers.",
      icon: Bot,
      items: skills.aiVoice
    },
    {
      id: "crm",
      num: "05",
      layer: "PIPELINES",
      title: "CRM",
      description: "Enterprise sales automation, marketing integration, and contact syncing.",
      icon: Users,
      items: skills.crm
    },
    {
      id: "cmsNoCode",
      num: "06",
      layer: "PLATFORMS",
      title: "CMS & No-Code",
      description: "Rapid site deployment and e-commerce setups with web-standards.",
      icon: Globe,
      items: skills.cmsNoCode
    },
    {
      id: "other",
      num: "07",
      layer: "UTILITIES",
      title: "Other",
      description: "Financial integrations, telephony services, and data enrichment APIs.",
      icon: Layers,
      items: skills.other
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-grid-pattern border-t border-zinc-900">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-primary/[0.01] rounded-full blur-[160px] -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-zinc-500"
          >
            {"// infrastructure stack"}
          </motion.div>
        </div>

        {/* Pipeline Tech Stack Columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch relative"
        >
          {groups.map((group) => {
            const GroupIcon = group.icon;
            return (
              <motion.div
                key={group.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredGroup(group.id)}
                onMouseLeave={() => setHoveredGroup(null)}
                className={`p-5 rounded-lg border transition-all duration-300 flex flex-col justify-between ${
                  hoveredGroup === group.id
                    ? "bg-zinc-900/50 border-primary/30"
                    : "bg-zinc-950/40 border-zinc-900/60"
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded bg-zinc-900 border border-zinc-800/80 text-zinc-400">
                      <GroupIcon size={16} />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-zinc-600 block">{group.num} / {group.layer}</span>
                      <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-zinc-200">{group.title}</h3>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-mono min-h-[48px]">
                    {group.description}
                  </p>
                  <div className="space-y-2">
                    {group.items.map((tech) => (
                      <SkillItem key={tech.name} name={tech.name} Icon={tech.icon} color={tech.color} />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function SkillItem({ name, Icon, color }: { name: string; Icon: LucideIcon; color?: string }) {
  return (
    <div className="flex items-center justify-between p-2.5 rounded bg-zinc-950 border border-zinc-900/60 hover:border-zinc-800 transition-colors">
      <div className="flex items-center gap-2.5">
        <div className="text-zinc-500" style={{ color: color }}>
          <Icon size={13} />
        </div>
        <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-wide">{name}</span>
      </div>
      <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: color || "var(--primary)" }} />
    </div>
  );
}
