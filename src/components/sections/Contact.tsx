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
      setFormState({ name: "", email: "", message: "" });
      alert("System Dispatch: Message received successfully.");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid-pattern border-t border-zinc-900">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/[0.01] rounded-full blur-[160px] -z-10" />

      <div className="container mx-auto px-6 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">// establish connection</span>
            </div>
            
            <p className="text-zinc-400 text-sm mb-10 leading-relaxed font-mono">
              Want to scale your business with custom voice AI, automate complex backend steps, or optimize your web systems? Ping my console.
            </p>

            <div className="space-y-5 mb-10">
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
                href={`tel:${personalInfo.phone}`}
              />
              <ContactInfoItem 
                icon={MessageSquare} 
                title="WhatsApp" 
                value={personalInfo.whatsapp} 
                href={personalInfo.whatsappLink}
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <SocialLink icon={Github} href={personalInfo.github} label="GitHub" />
              <SocialLink icon={Linkedin} href={personalInfo.linkedin} label="LinkedIn" />
            </div>
          </motion.div>

          {/* Contact Form Terminal Box */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full bg-zinc-950 border border-zinc-900 rounded-lg overflow-hidden shadow-2xl font-mono text-[11px] sm:text-xs text-zinc-400"
          >
            {/* Tab Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#0c0c0e] border-b border-zinc-900 select-none">
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              </div>
              <div className="flex items-center space-x-2 px-3 py-1 bg-zinc-950 border border-zinc-900 border-b-transparent rounded-t text-xs font-semibold text-zinc-300">
                <span className="text-primary font-bold text-[10px]">&gt;_</span>
                <span>contact.sh</span>
              </div>
              <div className="w-10" />
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500 ml-1">Identity / Name</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. John Doe"
                    className="w-full px-3 py-2 rounded bg-zinc-900/60 border border-zinc-900 focus:border-primary/50 focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-zinc-700 text-xs font-mono text-zinc-300"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500 ml-1">Return Port / Email</label>
                  <input
                    required
                    type="email"
                    placeholder="e.g. name@domain.com"
                    className="w-full px-3 py-2 rounded bg-zinc-900/60 border border-zinc-900 focus:border-primary/50 focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-zinc-700 text-xs font-mono text-zinc-300"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500 ml-1">Payload / Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Detail your system specifications or project scope..."
                  className="w-full px-3 py-2 rounded bg-zinc-900/60 border border-zinc-900 focus:border-primary/50 focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-zinc-700 text-xs font-mono text-zinc-300 resize-none leading-relaxed"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>
              <motion.button
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group text-black bg-primary uppercase tracking-wider text-xs font-bold py-3 rounded hover:bg-amber-400 transition-colors"
              >
                {isSubmitting ? (
                  <div className="h-4 w-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                ) : (
                  <>
                    <span>[Broadcast Message]</span>
                    <Send size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-black" />
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
    <div className="flex items-start gap-4 group">
      <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
        <Icon size={14} />
      </div>
      <div>
        <h4 className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-500 mb-0.5">{title}</h4>
        <p className="text-sm font-mono font-bold text-zinc-300 group-hover:text-primary transition-colors truncate max-w-[280px] sm:max-w-none">{value}</p>
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
      whileHover={{ y: -2 }}
      className="p-2 px-4 rounded border border-zinc-900 bg-zinc-950 text-zinc-400 hover:text-white hover:border-zinc-800 transition-colors flex items-center gap-2 font-mono text-xs uppercase"
      aria-label={label}
    >
      <Icon size={13} />
      <span className="font-bold text-[10px] tracking-wider">{label}</span>
    </motion.a>
  );
}
