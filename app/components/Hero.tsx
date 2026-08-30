"use client";

import { ArrowRight, Play, Brain, Languages, Database, ShieldCheck } from "lucide-react";

interface HeroProps {
  onOpenDemo: () => void;
}

export default function Hero({ onOpenDemo }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden bg-white dark:bg-[#05070d] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Subtle top background glow (Strictly Blue) */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 dark:bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.15] mb-6">
          Where AI Meets <span className="text-blue-600 dark:text-blue-400">Language</span> &amp; <span className="text-blue-600 dark:text-blue-400">Human Intelligence</span>
        </h1>

        {/* Hero Subheadline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-10">
          WELONIX is the enterprise technology layer designed to build, evaluate, localise, and operationalise multi-modal AI systems with verified domain expertise.
        </p>

        {/* Simple & Natural Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-16">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-md shadow-blue-600/20 hover:shadow-blue-600/35 flex items-center justify-center gap-2 group"
          >
            <span>Book a demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <a
            href="#solutions"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 fill-current" />
            <span>Explore Solutions</span>
          </a>
        </div>

        {/* Four Core Dimension Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0b0f19] border border-slate-200/80 dark:border-slate-800 text-left flex items-center gap-3 hover:border-blue-500/40 transition-colors shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400">AI Models</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">Multi-Modal Scale</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0b0f19] border border-slate-200/80 dark:border-slate-800 text-left flex items-center gap-3 hover:border-blue-500/40 transition-colors shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <Languages className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400">Language</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">50+ Dialects</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0b0f19] border border-slate-200/80 dark:border-slate-800 text-left flex items-center gap-3 hover:border-blue-500/40 transition-colors shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400">Data</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">Structured Data</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0b0f19] border border-slate-200/80 dark:border-slate-800 text-left flex items-center gap-3 hover:border-blue-500/40 transition-colors shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400">Human QA</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">99.8% Precision</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
