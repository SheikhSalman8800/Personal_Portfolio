"use client";

import { motion } from "framer-motion";
import { personalInfo, navLinks } from "@/lib/data";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import Link from "next/link";

import Logo from "@/components/ui/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background pt-24 pb-12 overflow-hidden border-t border-foreground/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/">
              <div className="flex items-center gap-2 mb-6 group cursor-pointer">
                <Logo />
                <div className="text-2xl font-black tracking-tighter">
                  SALMAN<span className="text-primary">.</span>
                </div>
              </div>
            </Link>
            <p className="text-muted-foreground text-lg mb-8 max-w-sm leading-relaxed font-medium">
              {personalInfo.tagline}
            </p>
            <div className="flex items-center gap-4">
              <SocialIcon icon={Github} href={personalInfo.github} />
              <SocialIcon icon={Linkedin} href={personalInfo.linkedin} />
              <SocialIcon icon={Mail} href={`mailto:${personalInfo.email}`} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-foreground/50 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-foreground/70 hover:text-primary transition-colors font-bold flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-foreground/50 mb-8">Get in Touch</h4>
            <div className="space-y-4">
              <p className="text-foreground/70 font-bold">{personalInfo.location}</p>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-foreground/70 hover:text-primary transition-colors font-bold block"
              >
                {personalInfo.email}
              </a>
              <div className="pt-4">
                <button 
                  onClick={scrollToTop}
                  className="group flex items-center gap-3 text-sm font-black uppercase tracking-widest text-primary hover:text-foreground transition-colors"
                >
                  Back to Top
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all">
                    <ArrowUp size={16} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm font-bold">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground text-sm font-bold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground text-sm font-bold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon, href }: { icon: any; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-xl bg-foreground/5 text-foreground hover:bg-primary hover:text-white transition-all duration-300 shadow-sm border border-foreground/5"
    >
      <Icon size={20} />
    </a>
  );
}
