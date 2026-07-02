"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Send, Mail, MapPin, Github, Linkedin, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("System Ping Successful! I will get back to you shortly.");
      setFormState({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-dot-pattern border-t border-slate-900">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-amber-500/5 rounded-full blur-[160px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <span className="text-xs font-mono font-bold text-amber-500/80 uppercase tracking-widest mb-3 block">
              PORT_INITIALIZE
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-8">
              Establish <span className="gradient-text tracking-tighter">Connection</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md leading-relaxed font-medium">
              Want to scale your business with custom voice AI, automate complex backend steps, or optimize your web systems? Ping my console.
            </p>

            <div className="space-y-6 mb-12">
              <ContactInfoItem 
                icon={Mail} 
                title="Node Email" 
                value={personalInfo.email} 
                href={`mailto:${personalInfo.email}`}
              />
              <ContactInfoItem 
                icon={MapPin} 
                title="Physical Coordinates" 
                value={personalInfo.location} 
              />
              <ContactInfoItem 
                icon={Phone} 
                title="Direct Line" 
                value={personalInfo.phone} 
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <SocialLink icon={Github} href={personalInfo.github} label="GitHub" />
              <SocialLink icon={Linkedin} href={personalInfo.linkedin} label="LinkedIn" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-slate-950 border border-slate-900 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient indicator */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 ml-1">Identity / Name</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. John Doe"
                    className="w-full px-5 py-4 rounded-xl bg-slate-900/50 border border-slate-900 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500 outline-none transition-all placeholder:text-slate-600 text-sm font-semibold text-white"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 ml-1">Return Port / Email</label>
                  <input
                    required
                    type="email"
                    placeholder="e.g. name@domain.com"
                    className="w-full px-5 py-4 rounded-xl bg-slate-900/50 border border-slate-900 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500 outline-none transition-all placeholder:text-slate-600 text-sm font-semibold text-white"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 ml-1">Payload / Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Detail your system specifications or project scope..."
                  className="w-full px-5 py-4 rounded-xl bg-slate-900/50 border border-slate-900 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500 outline-none transition-all placeholder:text-slate-600 text-sm font-semibold text-white resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>
              <motion.button
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full cyber-button flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group shadow-xl shadow-amber-500/10 text-black uppercase tracking-wider text-xs font-bold py-4"
              >
                {isSubmitting ? (
                  <div className="h-4 w-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Broadcast Message</span>
                    <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({ icon: Icon, title, value, href }: { icon: any; title: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-5 group">
      <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-900 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300 shadow-md">
        <Icon size={20} />
      </div>
      <div>
        <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 mb-1">{title}</h4>
        <p className="text-lg font-bold text-white group-hover:text-amber-500 transition-colors">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block w-fit">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
}

function SocialLink({ icon: Icon, href, label }: { icon: any; href: string; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      className="p-3 px-5 rounded-2xl bg-slate-950 text-slate-300 hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 border border-slate-900"
      aria-label={label}
    >
      <Icon size={16} />
      <span className="font-bold text-xs uppercase tracking-wider pr-1">{label}</span>
    </motion.a>
  );
}
