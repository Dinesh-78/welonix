"use client";

import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

interface FinalCTAProps {
  onOpenDemo: () => void;
}

export default function FinalCTA({ onOpenDemo }: FinalCTAProps) {
  return (
    <section className="relative py-24 bg-white dark:bg-[#05070d] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Container Card */}
        <div className="p-8 sm:p-14 rounded-3xl bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-md relative overflow-hidden">
          
          {/* Subtle Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50 text-blue-600 dark:text-blue-400 font-mono text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            ENTERPRISE AI ARCHITECTURE
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Build Better AI With <br />
            <span className="text-blue-600 dark:text-blue-400">Better Intelligence.</span>
          </h2>

          {/* Supporting Text */}
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300 text-base sm:text-lg mb-10 leading-relaxed font-sans">
            Bring together artificial intelligence, linguistic semantics, multi-modal data curation, and domain human expertise with WELONIX.
          </p>

          {/* Simple & Natural CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-md shadow-blue-600/20 hover:shadow-blue-600/35 flex items-center justify-center gap-2 group"
            >
              <span>Book a demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Schedule Architecture Review</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
