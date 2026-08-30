"use client";

import { Check, X, ShieldCheck, UserCheck, Bot, Sparkles, Scale } from "lucide-react";

export default function HumanPlusAI() {
  return (
    <section className="relative py-24 bg-slate-50/60 dark:bg-[#070a14] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50 mb-4 shadow-sm">
            <Scale className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
              Brand Philosophy &amp; Core Differentiator
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            AI Scales Intelligence. <span className="text-blue-600 dark:text-blue-400">Humans Provide Judgment.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            We don&apos;t replace human expertise with autonomous algorithms. We empower native linguists and domain experts with high-throughput neural AI infrastructure.
          </p>
        </div>

        {/* Visual Paradigm Equation Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-md mb-16 max-w-4xl mx-auto text-center relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 font-sans">
            
            {/* AI Automation Pill */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50">
              <Bot className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <div className="text-left">
                <span className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 block">Neural Scale</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">AI Automation</span>
              </div>
            </div>

            <span className="text-xl font-bold text-slate-400">+</span>

            {/* Human Expertise Pill */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50">
              <UserCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <div className="text-left">
                <span className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 block">Domain Judgment</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">Human Expertise</span>
              </div>
            </div>

            <span className="text-xl font-bold text-slate-400">=</span>

            {/* WELONIX Outcome */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
              <Sparkles className="w-5 h-5 text-blue-200" />
              <div className="text-left">
                <span className="text-[10px] uppercase text-blue-100 block">The WELONIX Standard</span>
                <span className="text-sm font-extrabold text-white">100% Fidelity Intelligence</span>
              </div>
            </div>

          </div>
        </div>

        {/* Comparative Matrix Table */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-md overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-500 dark:text-slate-400 uppercase">
                <th className="py-4 px-4 font-semibold">Capability Dimension</th>
                <th className="py-4 px-4 font-semibold text-slate-500">Raw AI Alone</th>
                <th className="py-4 px-4 font-semibold text-slate-500">Human-Only Agency</th>
                <th className="py-4 px-4 font-bold text-blue-600 dark:text-blue-400 bg-blue-50/60 dark:bg-blue-950/30 rounded-t-xl">WELONIX Hybrid</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-sm">
              <tr>
                <td className="py-4 px-4 font-semibold text-slate-900 dark:text-white">Processing Throughput</td>
                <td className="py-4 px-4 text-slate-500 dark:text-slate-400">Instantaneous (ms)</td>
                <td className="py-4 px-4 text-slate-500 dark:text-slate-400">Slow (Days/Weeks)</td>
                <td className="py-4 px-4 font-bold text-blue-600 dark:text-blue-400 bg-blue-50/30 dark:bg-blue-950/20">Instant + Real-time QA</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-slate-900 dark:text-white">Hallucination Risk</td>
                <td className="py-4 px-4 text-rose-500 flex items-center gap-1.5"><X className="w-4 h-4" /> High (Unpredictable)</td>
                <td className="py-4 px-4 text-slate-700 dark:text-slate-300 flex items-center gap-1.5"><Check className="w-4 h-4 text-blue-600" /> Low</td>
                <td className="py-4 px-4 font-bold text-blue-600 dark:text-blue-400 bg-blue-50/30 dark:bg-blue-950/20 flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-blue-600" /> 0.002% Audited</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-slate-900 dark:text-white">Cultural &amp; Nuance Depth</td>
                <td className="py-4 px-4 text-slate-500">Surface Level</td>
                <td className="py-4 px-4 text-slate-700 dark:text-slate-300">Native Excellence</td>
                <td className="py-4 px-4 font-bold text-blue-600 dark:text-blue-400 bg-blue-50/30 dark:bg-blue-950/20">Native Native Linguists</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-slate-900 dark:text-white">Enterprise Scalability</td>
                <td className="py-4 px-4 text-slate-700 dark:text-slate-300">High API Scale</td>
                <td className="py-4 px-4 text-rose-500">Low Bottlenecks</td>
                <td className="py-4 px-4 font-bold text-blue-600 dark:text-blue-400 bg-blue-50/30 dark:bg-blue-950/20">Unlimited Elastic Scale</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold text-slate-900 dark:text-white">Domain Expertise</td>
                <td className="py-4 px-4 text-slate-500">Generic Data Set</td>
                <td className="py-4 px-4 text-slate-500">Expensive Specialists</td>
                <td className="py-4 px-4 font-bold text-blue-600 dark:text-blue-400 bg-blue-50/30 dark:bg-blue-950/20">12,000+ Vetted SMEs</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
