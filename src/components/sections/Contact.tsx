"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Send, Mail, MapPin, Github, Linkedin, MessageSquare } from "lucide-react";
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
      alert("Message sent! I'll get back to you soon.");
      setFormState({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              Let&apos;s <span className="gradient-text">Talk</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-md leading-relaxed">
              Have a project in mind? Looking to hire? Or just want to say hi? I&apos;m always open to new opportunities and discussions.
            </p>

            <div className="space-y-8 mb-12">
              <ContactInfoItem 
                icon={Mail} 
                title="Email" 
                value={personalInfo.email} 
                href={`mailto:${personalInfo.email}`}
              />
              <ContactInfoItem 
                icon={MapPin} 
                title="Location" 
                value={personalInfo.location} 
              />
              <ContactInfoItem 
                icon={MessageSquare} 
                title="WhatsApp" 
                value="+880 1XXXXXXXXX" 
                href="#"
              />
            </div>

            <div className="flex items-center gap-6">
              <SocialLink icon={Github} href={personalInfo.github} label="GitHub" />
              <SocialLink icon={Linkedin} href={personalInfo.linkedin} label="LinkedIn" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl glass-card border-foreground/5 shadow-2xl shadow-primary/5 relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16" />
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-foreground/70 ml-1">Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 rounded-xl bg-foreground/5 border border-foreground/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/50 font-medium"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-foreground/70 ml-1">Email</label>
                  <input
                    required
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 rounded-xl bg-foreground/5 border border-foreground/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/50 font-medium"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-black uppercase tracking-widest text-foreground/70 ml-1">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 rounded-xl bg-foreground/5 border border-foreground/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/50 font-medium resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full cyber-button flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group shadow-xl shadow-primary/20"
              >
                {isSubmitting ? (
                  <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span className="text-lg font-black uppercase tracking-widest">Send Message</span>
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
    <div className="flex items-start gap-6 group">
      <div className="p-4 rounded-2xl bg-foreground/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg shadow-primary/5">
        <Icon size={24} />
      </div>
      <div>
        <h4 className="text-sm font-black uppercase tracking-widest text-foreground/50 mb-1">{title}</h4>
        <p className="text-xl font-bold group-hover:text-primary transition-colors">{value}</p>
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
      whileHover={{ y: -5 }}
      className="p-4 rounded-2xl bg-foreground/5 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 flex items-center gap-3 border border-foreground/5"
      aria-label={label}
    >
      <Icon size={22} />
      <span className="font-black text-sm uppercase tracking-widest pr-2">{label}</span>
    </motion.a>
  );
}
