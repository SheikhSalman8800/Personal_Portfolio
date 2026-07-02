"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";

export default function Projects() {
  // Accordion state: holds the active expanded project ID
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  // Define the top 5 featured project IDs in order (starting with Tickify scaling)
  const featuredIds = [
    "tickify-scaling",
    "voice-receptionist",
    "lead-gen-pipeline",
    "self-healing-crm",
    "voice-appointment-booking"
  ];

  // Map to get featured projects in exact order
  const featuredProjects = featuredIds
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is typeof projects[0] => !!p);

  // Filter out featured projects to get the remaining ones
  const otherProjects = projects.filter((p) => !featuredIds.includes(p.id));

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-grid-pattern border-t border-zinc-900">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/[0.02] rounded-full blur-[160px] -z-10" />

      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-zinc-500"
          >
            {"// selected work"}
          </motion.div>
        </div>

        {/* FEATURED PROJECTS SUBSECTION */}
        <div className="space-y-8 mb-20">
          <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-4 block">
            / featured deployments
          </div>
          
          <div className="space-y-6">
            {featuredProjects.map((project, i) => {
              const indexStr = String(i + 1).padStart(3, "0");
              const isExpanded = expandedId === project.id;
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  onClick={() => toggleExpand(project.id)}
                  className="pl-5 border-l border-zinc-900 hover:border-primary/50 py-3 transition-all duration-300 flex flex-col gap-3 group cursor-pointer select-none"
                >
                  {/* Collapsed view header */}
                  <div className="flex items-start justify-between gap-4 w-full">
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                        <span className="text-[10px] font-mono text-zinc-600 group-hover:text-primary transition-colors select-none">
                          {indexStr}.
                        </span>
                        <h3 className="text-sm sm:text-base font-bold font-mono text-zinc-200 group-hover:text-zinc-100 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed max-w-2xl">
                        {project.description}
                      </p>
                    </div>

                    {/* Interactive indicator (+ rotates to x when open) */}
                    <div className="text-zinc-600 group-hover:text-primary transition-colors pt-0.5 shrink-0">
                      <motion.span
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="inline-block font-mono text-sm font-bold w-4 h-4 text-center leading-none"
                      >
                        +
                      </motion.span>
                    </div>
                  </div>

                  {/* Expanded Problem, System, Impact details */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden space-y-4"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-[11px] font-mono text-zinc-500">
                          <div className="space-y-1 pl-3 border-l border-zinc-900 group-hover:border-zinc-800 transition-colors">
                            <div className="text-zinc-600 font-bold uppercase text-[9px] tracking-wider">{"// problem"}</div>
                            <p className="text-zinc-400 font-sans leading-relaxed">{project.problem}</p>
                          </div>
                          <div className="space-y-1 pl-3 border-l border-zinc-900 group-hover:border-zinc-800 transition-colors">
                            <div className="text-zinc-600 font-bold uppercase text-[9px] tracking-wider">{"// system"}</div>
                            <p className="text-zinc-400 font-sans leading-relaxed">{project.system}</p>
                          </div>
                          <div className="space-y-1 pl-3 border-l border-zinc-900 group-hover:border-zinc-800 transition-colors">
                            <div className="text-zinc-600 font-bold uppercase text-[9px] tracking-wider">{"// impact"}</div>
                            <p className="text-zinc-400 font-sans leading-relaxed">{project.impact}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-x-2 gap-y-1 pt-1">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-[9px] font-mono text-zinc-600">
                              #{tag.toLowerCase().replace(/\s+/g, "")}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* OTHER PROJECTS SUBSECTION */}
        <div className="space-y-8 pt-6 border-t border-zinc-900/60">
          <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-4 block">
            / other deployments
          </div>

          <div className="space-y-8">
            {otherProjects.map((project, i) => {
              // Indexing starts after featured projects (006, 007...)
              const indexStr = String(featuredProjects.length + i + 1).padStart(3, "0");
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03, duration: 0.4 }}
                  className="pl-5 border-l border-zinc-900 hover:border-primary/50 py-1 transition-all duration-300 flex flex-col sm:flex-row sm:items-baseline justify-between gap-6 group"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <span className="text-[10px] font-mono text-zinc-600 group-hover:text-primary transition-colors select-none">
                        {indexStr}.
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold font-mono text-zinc-200 group-hover:text-zinc-100 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 font-sans leading-relaxed max-w-2xl">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-x-2 gap-y-1 pt-1">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[9px] font-mono text-zinc-500">
                          #{tag.toLowerCase().replace(/\s+/g, "")}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
