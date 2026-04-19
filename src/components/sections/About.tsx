"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight leading-[1.1]">
              From Web Dev to <br />
              <span className="gradient-text tracking-tighter italic">AI Specialist</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-medium">
              <p>
                My journey began right after graduation as a web developer. I joined{" "}
                <a href="https://www.tickify.live" target="_blank" className="text-primary hover:underline font-bold transition-all">
                  Tickify
                </a>, the largest ticketing company in Bangladesh, where I spent 2 years building and managing their extensive platform.
              </p>
              <p>
                Later, I transitioned to remote work with The Analytics Team as a Web Developer, further honing my skills in full-stack applications and data-driven dashboards.
              </p>
              <p className="p-6 rounded-2xl bg-foreground/5 border-l-4 border-primary text-foreground font-bold italic">
                &quot;Today, I freelance full-time, specializing in not just web development but also high-impact AI automation. I help businesses worldwide save thousands of hours by automating repetitive tasks.&quot;
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <motion.div 
                  key={stat.label} 
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 border-foreground/5 text-center group transition-all duration-300"
                >
                  <div className="text-3xl font-black text-foreground mb-1 group-hover:text-primary transition-colors">{stat.value}</div>
                  <div className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-8 border-foreground/5 group shadow-2xl shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-purple-500/30 group-hover:opacity-0 transition-opacity duration-700 mix-blend-overlay" />
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
                alt="Sheikh Salman working"
                className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] -z-10 animate-pulse" />
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 md:right-10 glass-card p-6 border-primary/30 shadow-2xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-black text-xl">S</div>
                <div>
                  <div className="text-sm font-black uppercase tracking-widest">Available</div>
                  <div className="text-xs text-muted-foreground font-bold">For Freelance</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
