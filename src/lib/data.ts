import { 
  Code2, Cpu, Database, Bot, Zap, Mail, 
  Workflow, PhoneCall, Github, Linkedin, Terminal, 
  Layers, Volume2, ShieldCheck, Play
} from "lucide-react";

export const personalInfo = {
  name: "Sheikh Salman",
  firstName: "Sheikh",
  lastName: "Salman",
  title: "Full-Stack Developer & AI Automation Specialist",
  location: "Dhaka, Bangladesh",
  tagline: "I build responsive web systems and intelligent automation pipelines that eliminate operational friction.",
  email: "salman@sheikhsalman.dev", 
  formspreeId: "xqewlped",
  github: "https://github.com/sheikhsalman",
  linkedin: "https://linkedin.com/in/sheikhsalman",
  phone: "+880 1700-000000", // Placeholder but formatted
};

export const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Systems Automated", value: "25+" },
  { label: "Client NPS", value: "100%" },
  { label: "Hours Saved / Yr", value: "800+" },
];

export const skills = {
  ingress: [
    { name: "Vapi Voice AI", icon: Volume2, color: "#10B981" },
    { name: "Retell AI", icon: Volume2, color: "#06B6D4" },
    { name: "Twilio API", icon: PhoneCall, color: "#F22F46" },
    { name: "Webhooks", icon: Zap, color: "#F59E0B" },
  ],
  orchestration: [
    { name: "n8n", icon: Workflow, color: "#FF6D5A" },
    { name: "Make.com", icon: Zap, color: "#EA2861" },
    { name: "Custom Python Queues", icon: Terminal, color: "#3776AB" },
    { name: "Zapier", icon: Zap, color: "#FF4A00" },
  ],
  cognition: [
    { name: "Claude (Anthropic)", icon: Bot, color: "#D97706" },
    { name: "OpenAI API", icon: Bot, color: "#10B981" },
    { name: "Vector Databases", icon: Database, color: "#2563EB" },
    { name: "LangChain", icon: Layers, color: "#38BDF8" },
  ],
  core: [
    { name: "Next.js", icon: Code2, color: "#000000" },
    { name: "React.js", icon: Code2, color: "#61DAFB" },
    { name: "Node.js", icon: Cpu, color: "#339933" },
    { name: "PostgreSQL / Supabase", icon: Database, color: "#4169E1" },
    { name: "TypeScript", icon: Code2, color: "#3178C6" },
    { name: "Docker", icon: Layers, color: "#2496ED" },
  ]
};

export const experiences = [
  {
    company: "Freelance Operator",
    role: "Full-Stack Dev & AI Automation Engineer",
    period: "Late 2025 - Present",
    description: "Architecting end-to-end web applications and complex automation systems for clients worldwide. Integrating real-time Voice AI, auto-healing LLM scraping pipelines, and central CRM systems to drive structural efficiency.",
    branch: "freelance",
    milestones: ["Implemented low-latency custom Voice AI streams", "Built auto-retrying n8n pipelines", "Optimized enterprise client HubSpot syncs"]
  },
  {
    company: "The Analytics Team",
    role: "Remote Web Developer",
    period: "2025 (6 Months)",
    description: "Developed modern, data-intensive web dashboards and telemetry layouts using React, Node.js, and third-party dashboard APIs. Streamlined database indexing and dashboard render times.",
    branch: "web-dev",
    milestones: ["Created drag-and-drop analytics dashboard", "Integrated live WebSocket telemetry charts"]
  },
  {
    company: "Tickify",
    role: "Web Developer",
    period: "Jan 2023 - Jun 2025",
    description: "Built and scaled the core features of Bangladesh's premier online ticketing platform. Optimized relational database queries, implemented ticket locking strategies, and designed dynamic ticket buyer checkout interfaces.",
    branch: "web-dev",
    milestones: ["Successfully scaled for 10k+ concurrent users", "Implemented Redis queuing token mechanism", "Decreased API load times by 40%"]
  },
];

export const services = [
  {
    step: "01",
    phase: "Capture",
    title: "Ingress & Voice Streams",
    description: "Setting up real-time interaction channels using low-latency Voice AI, messaging hooks, and custom API trigger endpoints to capture client actions instantly.",
    icon: Volume2,
    details: [
      "Retell & Vapi AI Voice integration",
      "Twilio SMS & Phone trunk routing",
      "Low-latency streaming webhooks",
      "Dynamic interactive form ingress"
    ]
  },
  {
    step: "02",
    phase: "Orchestrate",
    title: "Process Automation",
    description: "Connecting databases, CRMs, and APIs through complex workflow orchestration. Engineered with self-healing, auto-retrying loops and real-time failure alerts.",
    icon: Workflow,
    details: [
      "Advanced n8n workflow engineering",
      "Make.com business automations",
      "Custom Python background queues",
      "Auto-healing error recovery loops"
    ]
  },
  {
    step: "03",
    phase: "Think",
    title: "Cognitive AI Layers",
    description: "Injecting LLM-based reasoning into workflows. We use semantic analysis, custom RAG (Retrieval-Augmented Generation), and vector indexes to parse complex queries.",
    icon: Bot,
    details: [
      "Claude & GPT agent pipelines",
      "Semantic intent analysis",
      "Vector search & Supabase pgvector",
      "Context-aware automatic replies"
    ]
  },
  {
    step: "04",
    phase: "Deliver",
    title: "Full-Stack Core Apps",
    description: "Designing the custom interfaces and dashboards required to run your systems. Fast, modern React/Next.js platforms tailored to your business operations.",
    icon: Code2,
    details: [
      "Production-grade Next.js & React",
      "Supabase & PostgreSQL database setups",
      "Admin telemetry & KPI dashboards",
      "Dockerized container deployments"
    ]
  },
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Devizly Agency", href: "https://devizly.cloud" },
  { name: "Contact", href: "/contact" },
];

export const projects = [
  {
    id: "voice-receptionist",
    title: "AI Voice Agent Receptionist",
    description: "Automated real-time customer support system utilizing voice AI agents with n8n and Supabase integration.",
    longDescription: "An end-to-end voice automation system designed for clinical and customer service environments. The agent answers phone calls, understands user intent (booking, rescheduling, billing inquiries), answers custom business FAQs using vector semantic search, and dynamically writes booking details directly into the scheduling software database.",
    problem: "High volume of incoming patient booking calls during peak hours led to missed calls, lost revenue, and over-stressed administrative staff.",
    system: "Built using Retell AI and Vapi for low-latency bidirectional voice streams. Connected voice transcripts via webhook to n8n workflows. Configured Claude 3.5 Sonnet to parse structured data (dates, user intent, client details). Integrated Supabase as the central database and synchronized data via scheduling APIs (Cal.com / custom EHR systems). Custom Next.js dashboard was built for the clinic staff to monitor transcripts and call analytics.",
    impact: "Automated 85% of standard patient support and booking calls. Handled 350+ weekly calls with an average call duration of 2.5 minutes, resulting in zero missed bookings and over 20 hours saved weekly per clinic.",
    tags: ["Retell AI", "Vapi", "n8n", "Next.js", "Claude 3.5", "Supabase"],
    category: "AI Voice Automation",
    github: "https://github.com/sheikhsalman/voice-agent-dispatcher",
    link: "https://voice-demo.sheikhsalman.dev",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "lead-gen-pipeline",
    title: "Autonomous Lead Sourcing Pipeline",
    description: "Intelligent crawling and personalization pipeline powered by Python agents and Claude.",
    longDescription: "An intelligent autonomous system that web-scrapes niche target directories, gathers corporate lead information, runs semantic validation of their business model, and drafts tailored hyper-personalized cold outreach emails based on recent news or website copy.",
    problem: "Sales representatives spent more than 15 hours weekly manually finding lead lists, searching for contacts on LinkedIn, and copying templates that resulted in very low response rates.",
    system: "Developed a distributed scraping system in Python utilizing Playwright to extract leads. The raw company URLs were fed into n8n pipelines where a Claude-powered subagent crawled their landing page to extract core pain points. A custom personalization pipeline crafted custom emails, warmed up sending domains dynamically via Instantly API, and synchronized leads into HubSpot CRM.",
    impact: "Reduced lead sourcing and email draft creation time by 90%. Improved cold email open rates to 62% and increased positive response rates by 40% due to deep customization.",
    tags: ["n8n", "Claude API", "Python", "Playwright", "HubSpot", "Instantly API"],
    category: "AI Agent Pipelines",
    github: "https://github.com/sheikhsalman/autonomous-leadgen",
    link: "",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "tickify-scaling",
    title: "Tickify Ticket Engine Scaling",
    description: "High-performance queuing and database optimizations to support peak ticket launch events.",
    longDescription: "Re-architected and scaled the backend infrastructure of Tickify, Bangladesh's leading online ticketing platform, enabling it to process thousands of transactions per minute without locking the database.",
    problem: "During major concert and sports ticketing launches, massive concurrent spikes (10k+ concurrent users) caused database locking, API timeouts, and double-booking errors.",
    system: "Designed and implemented a Redis-based token bucket queuing system inside a Django/Python backend to regulate incoming checkout requests. Optimized PostgreSQL query indices, separated database reads and writes with replica nodes, and built an optimized ticket reservation and locking pipeline.",
    impact: "Successfully handled multiple 10,000+ concurrent traffic spikes. Checkout latency decreased by 60% and transaction failure rates dropped to 0%, resulting in over $50k in ticket sales processed smoothly in minutes.",
    tags: ["Django", "Python", "Redis", "PostgreSQL"],
    category: "Full-Stack Scale",
    github: "https://github.com/sheikhsalman/tickify-scale",
    link: "https://tickify.live",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "self-healing-crm",
    title: "Self-Healing CRM Orchestrator",
    description: "Enterprise workflow integration with automated error recovery and Slack notifications.",
    longDescription: "An enterprise integration dashboard connecting customer purchases from Stripe, automated contracts in DocuSign, GoHighLevel CRM contacts, and internal Slack alerts, featuring automated error retries and self-healing pipelines.",
    problem: "API rate limits or temporary service downtime frequently broke workflow connections, leading to missing client records, unsent contracts, and manual reconciliation overhead.",
    system: "Built a central Hub in n8n. Implemented a robust queue-based webhook receiver that caches events in Redis. Created dynamic error-handling loops in n8n that detect failed requests, verify error codes, wait for exponential backoff intervals, and auto-retry transactions. Integrates a Slack webhook that alerts the engineering team with diagnostic logs only if retries fail after 5 attempts.",
    impact: "Reduced synchronization and data loss errors from ~2.5% to 0%. Handled over 100,000 operations monthly, saving the client company over 300 engineering hours in manual auditing and data entry.",
    tags: ["n8n", "Make.com", "Stripe API", "GoHighLevel", "Slack API", "Redis"],
    category: "Workflow Automation",
    github: "https://github.com/sheikhsalman/self-healing-crm",
    link: "",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  }
];
