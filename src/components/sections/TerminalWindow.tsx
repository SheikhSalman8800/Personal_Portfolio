"use client";

import { useState, useEffect } from "react";

interface TerminalLine {
  type: "input" | "output";
  text: string;
}

export default function TerminalWindow() {
  const lines: TerminalLine[] = [
    { type: "input", text: "whoami" },
    { type: "output", text: "Sheikh Salman - Full-Stack & AI Agent Architect" },
    { type: "input", text: "cat devizly_info.json" },
    { type: "output", text: '{\n  "role": "Co-Founder",\n  "agency": "Devizly (devizly.cloud)",\n  "focus": "AI Automation & Code Scale"\n}' },
    { type: "input", text: "n8n --status" },
    { type: "output", text: "[system] 12 active agent pipelines online\n[system] voice streams (Vapi/ElevenLabs): active\n[system] status: Ready for next integration build" }
  ];

  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([]);
  const [currentInputTyped, setCurrentInputTyped] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check prefers-reduced-motion on mount
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    // If user prefers reduced motion, set final state immediately
    if (mediaQuery.matches) {
      setVisibleLines(lines);
      setIsTyping(false);
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || lineIndex >= lines.length) {
      setIsTyping(false);
      return;
    }

    const currentLine = lines[lineIndex];

    if (currentLine.type === "input") {
      if (charIndex < currentLine.text.length) {
        const timeout = setTimeout(() => {
          setCurrentInputTyped((prev) => prev + currentLine.text[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 30 + Math.random() * 40); // Realistic, fast typing
        return () => clearTimeout(timeout);
      } else {
        // Finished typing input, push to visible list and reset typed buffer
        setVisibleLines((prev) => [...prev, { ...currentLine, text: currentLine.text }]);
        setCurrentInputTyped("");
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }
    } else {
      // It's an output line: wait a brief moment and display it instantly
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => [...prev, currentLine]);
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }, 250);
      return () => clearTimeout(timeout);
    }
  }, [lineIndex, charIndex, prefersReducedMotion]);

  return (
    <div className="w-full h-full font-mono text-[11px] md:text-[13px] text-slate-300 flex flex-col bg-[#020202] border border-zinc-800 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#080808] border-b border-zinc-900 select-none">
        <div className="flex items-center space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-600">sheikhsalman.sh</span>
        <div className="w-8" />
      </div>

      {/* Terminal Body */}
      <div className="flex-1 p-5 overflow-y-auto space-y-4 select-text text-left leading-relaxed">
        {/* Render visible lines */}
        {visibleLines.map((line, idx) => (
          <div key={idx} className="whitespace-pre-wrap">
            {line.type === "input" ? (
              <div className="flex items-start">
                <span className="text-emerald-500 mr-2 shrink-0 select-none">guest@sheikhsalman:~$</span>
                <span className="text-white font-bold">{line.text}</span>
              </div>
            ) : (
              <div className="text-zinc-400 font-medium pl-2 border-l border-zinc-800/80">
                {line.text}
              </div>
            )}
          </div>
        ))}

        {/* Current typing line */}
        {isTyping && lines[lineIndex]?.type === "input" && (
          <div className="flex items-start whitespace-pre-wrap">
            <span className="text-emerald-500 mr-2 shrink-0 select-none">guest@sheikhsalman:~$</span>
            <span className="text-white font-bold">
              {currentInputTyped}
              <span className="inline-block w-1.5 h-3.5 bg-emerald-400 ml-0.5 animate-pulse" />
            </span>
          </div>
        )}

        {/* Final flashing cursor prompt */}
        {!isTyping && (
          <div className="flex items-center">
            <span className="text-emerald-500 mr-2 shrink-0 select-none">guest@sheikhsalman:~$</span>
            <span className="inline-block w-1.5 h-3.5 bg-emerald-400 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}
