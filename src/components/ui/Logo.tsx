"use client";

import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div 
      className="relative flex items-center justify-center w-10 h-10 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* SVG Logo */}
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10"
      >
        {/* Decorative Ring */}
        <circle 
          cx="50" 
          cy="50" 
          r="48" 
          stroke="currentColor" 
          strokeWidth="2" 
          className="text-foreground/10"
        />
        
        {/* Animated Gradient Path */}
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>

        {/* Stylized 'S' */}
        <motion.path
          d="M70 30C70 30 65 20 50 20C35 20 25 30 25 42C25 54 35 58 50 62C65 66 75 70 75 82C75 94 65 104 50 104C35 104 25 94 25 94"
          stroke="url(#logo-gradient)"
          strokeWidth="12"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          transform="translate(0, -12)"
        />
        
        {/* Tech Dot */}
        <motion.circle 
          cx="75" 
          cy="75" 
          r="6" 
          fill="#a855f7"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
        />
      </svg>
    </motion.div>
  );
}
