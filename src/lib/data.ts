import { 
  Code2, Cpu, Database, Bot, Zap, Mail, 
  Workflow, PhoneCall, Github, Linkedin, Terminal, 
  Layers, Volume2, ShieldCheck, Play,
  Globe, Palette, Users, Briefcase, ShoppingBag, CreditCard, Search, Server, Layout
} from "lucide-react";

export const personalInfo = {
  name: "Sheikh Salman",
  firstName: "Sheikh",
  lastName: "Salman",
  title: "Full-Stack Developer & AI Automation Specialist",
  location: "Dhaka, Bangladesh",
  tagline: "I build responsive web systems and intelligent automation pipelines that eliminate operational friction.",
  email: "salman.advertor@gmail.com",
  formspreeId: "xqewlped",
  github: "https://github.com/SheikhSalman8800",
  linkedin: "https://www.linkedin.com/in/sheikh-salman-4392a1128?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  phone: "+8801724026502",
  whatsapp: "sheikh.salman_ | +8801724026502",
  whatsappLink: "https://wa.me/8801724026502",
};

export const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Systems Automated", value: "25+" },
  { label: "Client NPS", value: "100%" },
  { label: "Hours Saved / Yr", value: "800+" },
];

export const skills = {
  frontend: [
    { name: "React", icon: Code2, color: "#61DAFB" },
    { name: "Next.js", icon: Code2, color: "#FFFFFF" },
    { name: "JavaScript", icon: Terminal, color: "#F7DF1E" },
    { name: "HTML5", icon: Code2, color: "#E34F26" },
    { name: "CSS3", icon: Palette, color: "#1572B6" },
  ],
  backend: [
    { name: "NestJS", icon: Cpu, color: "#E0234E" },
    { name: "Python", icon: Terminal, color: "#3776AB" },
    { name: "Django", icon: Server, color: "#44B78B" },
    { name: "Supabase", icon: Database, color: "#3ECF8E" },
  ],
  automation: [
    { name: "n8n", icon: Workflow, color: "#FF6D5A" },
    { name: "Make", icon: Zap, color: "#EA2861" },
    { name: "Zapier", icon: Zap, color: "#FF4A00" },
  ],
  aiVoice: [
    { name: "OpenAI", icon: Bot, color: "#10B981" },
    { name: "ElevenLabs", icon: Volume2, color: "#F59E0B" },
    { name: "Vapi", icon: Volume2, color: "#10B981" },
    { name: "Retell", icon: Volume2, color: "#06B6D4" },
    { name: "HeyGen", icon: Play, color: "#FF3366" },
    { name: "Synthesia", icon: Play, color: "#4F46E5" },
  ],
  crm: [
    { name: "GoHighLevel", icon: Users, color: "#2A85FF" },
    { name: "Zoho", icon: Briefcase, color: "#F4B400" },
    { name: "HubSpot", icon: Users, color: "#FF7A59" },
  ],
  cmsNoCode: [
    { name: "WordPress", icon: Globe, color: "#21759B" },
    { name: "Webflow", icon: Layout, color: "#4353FF" },
    { name: "Shopify", icon: ShoppingBag, color: "#96BF48" },
  ],
  other: [
    { name: "Apollo", icon: Search, color: "#118DFF" },
    { name: "Stripe", icon: CreditCard, color: "#635BFF" },
    { name: "Twilio", icon: PhoneCall, color: "#F22F46" },
  ]
};

export const experiences = [
  {
    company: "Devizly (Co-Founder) & Freelance",
    role: "Full-Stack Dev & AI Automation Engineer",
    period: "Late 2025 - Present",
    description: "Co-founding Devizly agency and freelancing full-time as an AI & Automation Architect. Designing custom voice AI streams, dual-agent prompt chains, and self-healing n8n workflow orchestrations for global clients.",
    branch: "freelance",
    milestones: ["Co-founded Devizly automation agency", "Implemented low-latency custom Voice AI streams", "Built auto-retrying n8n pipelines", "Optimized enterprise client HubSpot syncs"]
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
    github: "",
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
  },
  {
    id: "voice-appointment-booking",
    title: "AI Voice Agent for Automated Appointment Booking",
    description: "Conversational ElevenLabs voice agent for Black Rock Clinic integrated with Gemini and GoHighLevel to automate 24/7 bookings.",
    longDescription: "Developed for Black Rock Clinic, this system features an ElevenLabs conversational voice agent connected via webhook to an n8n backend powered by Google Gemini, which checks real-time GoHighLevel calendar availability, creates/updates patient contact records, and books confirmed appointments automatically.",
    problem: "Black Rock Clinic patients could only book appointments during staffed hours, causing missed bookings and administrative overload.",
    system: "Integrated ElevenLabs Voice AI for realistic voice responses and low latency. Linked voice webhook callbacks to n8n pipelines. Utilized Google Gemini to interpret patient voice requests, match calendar availability via the GoHighLevel API, and handle scheduling. Built auto-confirmation SMS and email sequences.",
    impact: "Eliminated double-bookings entirely, freed front-desk staff from scheduling calls, and enabled 24/7 patient booking.",
    tags: ["ElevenLabs", "n8n", "Google Gemini", "GoHighLevel API"],
    category: "AI Voice Automation",
    github: "https://github.com/sheikhsalman/blackrock-booking",
    link: "",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "whatsapp-medical-assistant",
    title: "WhatsApp Medical Assistant Bot",
    description: "A conversational GPT-4o WhatsApp agent for Perfilab laboratory that handles patient FAQs and specialist bookings.",
    longDescription: "Designed and deployed for Perfilab medical laboratory, a GPT-4o powered conversational agent on WhatsApp via the Evolution API that answers patient questions from a live Google Sheets/Docs knowledge base and manages the full specialist appointment booking flow with conversational memory.",
    problem: "Perfilab medical laboratory front-desk staff manually handled every patient inquiry and appointment request, causing response delays.",
    system: "Connected WhatsApp messaging interface to n8n using Evolution API. Integrated GPT-4o with conversational memory to contextually answer queries. Hooked the agent to Google Docs and Sheets to dynamically query test pricing, preparation instructions, and doctor schedules.",
    impact: "Provided 24/7 patient support, standardized accurate laboratory answers, and significantly reduced front-desk administrative load.",
    tags: ["n8n", "GPT-4o", "Evolution API", "Google Sheets/Docs"],
    category: "Workflow Automation",
    github: "https://github.com/sheikhsalman/whatsapp-medical-bot",
    link: "",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "email-triage-routing",
    title: "Multi-Inbox Intelligent Email Triage & Compliance Routing",
    description: "Intelligent categorization and routing system monitoring Microsoft Outlook inboxes to ensure compliance SLAs.",
    longDescription: "Designed three parallel n8n workflows that monitor Microsoft Outlook inboxes, cross-reference senders against a CRM, use specialized AI classifiers to categorize each email's exact intent, then auto-route to folders, send acknowledgment auto-replies, and fire real-time Slack alerts for urgent compliance items.",
    problem: "A business was manually sorting thousands of emails across 3 departmental inboxes (general info, data-subject-access-requests, and legal), risking missed compliance deadlines and legal exposure.",
    system: "Built parallel n8n trigger workflows connected to MS Graph API (Outlook). Integrated OpenAI APIs to analyze email content and classify intent. Configured router logic to auto-archive, tag, draft replies, and push urgent Slack alerts for critical legal items.",
    impact: "Eliminated manual inbox sorting, ensured time-sensitive compliance requests were never missed, and reduced message handling latency from 24 hours to seconds.",
    tags: ["n8n", "Microsoft Outlook API", "OpenAI", "Slack API"],
    category: "Workflow Automation",
    github: "https://github.com/sheikhsalman/email-triage",
    link: "",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "seo-audit-agent",
    title: "Autonomous SEO Audit & Reporting Agent",
    description: "Multi-agent Google Gemini workflow that performs technical audits and generates branded Google Doc report files.",
    longDescription: "Triggered by adding a domain to a Google Sheet, the workflow runs parallel technical checks (sitemaps, robots.txt, HTTPS, Schema markup, PageSpeed Insights), then utilizes two chained Gemini AI agents—one auditing on-page issues, one generating prioritized fixes—to populate a branded Google Doc report automatically.",
    problem: "Agency-grade SEO audits took hours of manual analysis, formatting, and data collection per site, limiting lead generation capacity.",
    system: "Designed n8n workflow listening to Google Sheets events. Integrated Google PageSpeed API to grab performance metrics. Built a dual-agent Gemini prompt chain: Agent A acts as the technical auditor; Agent B formats and prioritizes recommendations. Programmed a Google Docs API integration to compile the report dynamically.",
    impact: "Reduced audit preparation time from hours to minutes, enabling the agency to use it as an instant, automated lead magnet.",
    tags: ["n8n", "Google Gemini", "PageSpeed API", "Google Docs API"],
    category: "AI Agent Pipelines",
    github: "https://github.com/sheikhsalman/seo-audit-agent",
    link: "",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "fathom-call-coach",
    title: "Fathom Sales Call Coach AI",
    description: "Automated sales transcript analysis and coaching reports triggered by Fathom meeting webhooks.",
    longDescription: "When a sales call ends in Fathom, a webhook triggers extraction of the transcript and action items; a Gemini agent scores the call out of 10, flags strengths/weaknesses, and generates a formatted coaching report delivered via email and Slack.",
    problem: "Sales representatives received inconsistent and delayed feedback on call performance, causing long ramp-up times and missed revenue opportunities.",
    system: "Constructed a webhook endpoint in n8n to ingest Fathom call transcripts. Engineered structured prompt templates for Google Gemini to critique active listening, objection handling, and pricing discovery. Connected Slack and Gmail nodes to distribute structured markdown cards to team leads.",
    impact: "Provided near-instant, standardized sales coaching after every call with zero managerial bottleneck, accelerating rep onboarding.",
    tags: ["n8n", "Fathom Webhook", "Google Gemini", "Google Docs", "Slack"],
    category: "AI Agent Pipelines",
    github: "https://github.com/sheikhsalman/fathom-coach",
    link: "",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "b2b-scraping-enrichment",
    title: "Autonomous B2B Lead Scraping & Enrichment Agent",
    description: "A multi-step AI agent that crawls websites to identify target contacts and decision-maker emails.",
    longDescription: "A multi-step AI agent searches for target businesses, then autonomously navigates each company's website hunting for contact/compliance pages (e.g. 'Impressum', 'Kontakt') to extract the Managing Director's name and direct email, logging everything to a tracking sheet.",
    problem: "Manually researching decision-maker contacts (name + direct email) for B2B outreach took hours of tedious lookup per target company.",
    system: "Built an n8n AI Agent with web browsing and scraping helper tools. The agent dynamically parses HTML, identifies compliance links, extracts names using NER (Named Entity Recognition), and filters out generic info@ emails to save direct contacts.",
    impact: "Replaced hours of manual research per lead with a scalable, fully automated outreach list building loop.",
    tags: ["n8n", "LangChain", "AI Web Scraper", "Google Sheets"],
    category: "AI Agent Pipelines",
    github: "https://github.com/sheikhsalman/b2b-lead-enrichment",
    link: "",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "telegram-angie-assistant",
    title: "Telegram AI Personal Assistant (\"Angie\")",
    description: "Claude-powered Telegram bot executing math, Wikipedia search, and nested crypto-analysis.",
    longDescription: "A Claude (Anthropic)-powered conversational agent in Telegram with persistent memory per user, that autonomously routes to specialized tools—a calculator, live Wikipedia lookups, and a nested crypto-analysis sub-agent—synthesizing results into natural replies.",
    problem: "Needed an always-available personal assistant capable of performing real-time tools execution and reasoning beyond simple text QA.",
    system: "Configured Claude 3.5 Sonnet to decide on tool usage. Built custom n8n workflows representing tools (Wikipedia API, math processor, and a nested OpenAI GPT-4o crypto analysis agent). Utilized the Telegram Bot API for media-rich formatting.",
    impact: "Demonstrated complex multi-model orchestration, persistent user state management, and real-time tool-augmented reasoning in a chat interface.",
    tags: ["n8n", "Anthropic Claude", "OpenAI", "Telegram Bot API"],
    category: "AI Agent Pipelines",
    github: "https://github.com/sheikhsalman/telegram-angie",
    link: "",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "apollo-outreach-automation",
    title: "Automated B2B Lead Generation & Outreach from Apollo",
    description: "A Telegram trigger workflow scraping Apollo leads, generating custom emails, and drafting Gmails.",
    longDescription: "A Telegram bot accepts natural-language requests or Apollo search URLs, an AI agent structures the query, an Apify actor scrapes verified leads, filters duplicates, and a second AI agent drafts personalized cold emails saved directly as Gmail drafts for human review.",
    problem: "Manual Apollo.io lead scraping, duplicate filtering, CRM entry, and cold email drafting did not scale for outbound marketing campaigns.",
    system: "Wired Telegram Bot triggers to n8n. Designed a query-parsing agent to format URL parameters. Integrated Apify scrape tasks for Apollo database extraction. Connected Gmail draft APIs to store personalized outbound copy with approval placeholders.",
    impact: "Turns a one-line chat request into a verified, enriched, personalized outreach batch, retaining human-in-the-loop review before sending.",
    tags: ["n8n", "Telegram Bot", "Apify", "Apollo.io", "Gmail API"],
    category: "Workflow Automation",
    github: "https://github.com/sheikhsalman/apollo-email-automation",
    link: "",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1000&auto=format&fit=crop"
  }
];


