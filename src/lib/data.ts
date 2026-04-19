import { 
  Code2, Globe, Cpu, Smartphone, Database, Bot, Zap, Mail, 
  MessageSquare, Layout, Rocket, Workflow, BarChart, PhoneCall,
  Search, Shield, Users, Layers, MousePointer2, ExternalLink,
  Github, Linkedin, Send, Share2, Terminal, Flame
} from "lucide-react";

export const personalInfo = {
  name: "Sheikh Salman",
  firstName: "Sheikh",
  lastName: "Salman",
  title: "Full-Stack Developer & AI Automation Specialist",
  location: "Dhaka, Bangladesh",
  tagline: "I build websites and intelligent automation systems that save time and drive growth",
  email: "salman@example.com", 
  formspreeId: "xqewlped",
  github: "https://github.com/sheikhsalman",
  linkedin: "https://linkedin.com/in/sheikhsalman",
};

export const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Delivered", value: "10+" },
  { label: "Clients Worldwide", value: "5+" },
  { label: "Hours Saved", value: "500+" },
];

export const skills = {
  web: [
    { name: "TypeScript", icon: Code2, color: "#3178C6" },
    { name: "React.js", icon: Code2, color: "#61DAFB" },
    { name: "Next.js", icon: Globe, color: "#000000" },
    { name: "Node.js", icon: Cpu, color: "#339933" },
    { name: "JavaScript", icon: Terminal, color: "#F7DF1E" },
    { name: "Tailwind", icon: Layers, color: "#06B6D4" },
    { name: "Redux", icon: Share2, color: "#764ABC" },
    { name: "HTML5", icon: Layout, color: "#E34F26" },
    { name: "Vite", icon: Zap, color: "#646CFF" },
    { name: "Python", icon: Terminal, color: "#3776AB" },
    { name: "Django", icon: Database, color: "#092E20" },
    { name: "Nest.js", icon: Rocket, color: "#E0234E" },
  ],
  automation: [
    { name: "Docker", icon: Smartphone, color: "#2496ED" },
    { name: "PostgreSQL", icon: Database, color: "#4169E1" },
    { name: "MongoDB", icon: Database, color: "#47A248" },
    { name: "MySQL", icon: Database, color: "#4479A1" },
    { name: "Redis", icon: Zap, color: "#DC382D" },
    { name: "Firebase", icon: Flame, color: "#FFCA28" },
    { name: "C++", icon: Cpu, color: "#00599C" },
    { name: "Bash", icon: Terminal, color: "#4EAA25" },
    { name: "N8N", icon: Workflow, color: "#FF6D5A" },
    { name: "Make.com", icon: Zap, color: "#EA2861" },
    { name: "AI Agents", icon: Bot, color: "#412991" },
    { name: "Lead Gen", icon: Search, color: "#0077B5" },
  ],
};

export const experiences = [
  {
    company: "Freelancer",
    role: "Full-Stack Dev & AI Automation Specialist",
    period: "Sep 2024 - Present",
    description: "Architecting end-to-end web solutions and complex AI-driven automation workflows for a global clientele. Specializing in N8N, Make, and custom AI agents to optimize business operations.",
  },
  {
    company: "Tickify",
    role: "Full-Stack Developer → Part-time Consultant",
    period: "Jan 1, 2023 - Present",
    description: "Started as a core Full-time Developer (Jan 2023 - Sep 2024) at Bangladesh's largest ticketing platform. Currently leading technical maintenance and platform scaling remotely.",
  },
  {
    company: "The Analytics Team",
    role: "Remote Web Developer",
    period: "6 Months",
    description: "Built high-performance dashboards and data-driven web applications, focusing on React and Node.js integrations.",
  },
];

export const services = [
  {
    title: "Web Development",
    description: "Custom-built, high-performance websites using the latest tech stacks (React, Next.js, Django). Focused on speed, SEO, and conversion.",
    icon: Code2,
    details: ["Single Page Applications", "Progressive Web Apps", "API Integrations", "Database Architecture"]
  },
  {
    title: "AI Automation",
    description: "Intelligent systems that handle your repetitive tasks 24/7. From lead nurturing to customer support agents.",
    icon: Bot,
    details: ["Custom AI Agents", "Voice AI Implementation", "WhatsApp Business Bots", "LLM Fine-tuning"]
  },
  {
    title: "Workflow Automation",
    description: "Connecting your favorite apps to create a seamless, hands-free business operation using N8N, Make, or Zapier.",
    icon: Workflow,
    details: ["Tool Integrations", "Data Mapping", "Error Handling", "Process Optimization"]
  },
  {
    title: "E-commerce & Shopify",
    description: "Full store setup, custom theme development, and conversion rate optimization (CRO) for Shopify and WooCommerce.",
    icon: Smartphone,
    details: ["Shopify Liquid Dev", "App Customization", "Payment Gateways", "Inventory Sync"]
  },
  {
    title: "GHL & CRM Strategy",
    description: "Comprehensive Go High Level (GHL) setup, including snapshots, funnels, and automated follow-up sequences.",
    icon: BarChart,
    details: ["Funnel Building", "SMS/Email Automation", "CRM Migration", "Lead Scoring"]
  },
  {
    title: "Lead Generation",
    description: "Automated systems designed to find, capture, and qualify leads without manual intervention.",
    icon: Zap,
    details: ["Scraper Bots", "Email Warmup", "LinkedIn Automation", "CRM Auto-population"]
  },
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export const projects = [];
