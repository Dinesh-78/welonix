"use client";

import { useState } from "react";
import { 
  Building2, 
  Stethoscope, 
  Landmark, 
  Scale, 
  ShoppingBag, 
  Film, 
  Briefcase 
} from "lucide-react";

export default function IndustriesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      name: "Technology & SaaS",
      icon: Building2,
      problem: "Expanding LLM applications into 40+ global markets without losing technical nomenclature precision.",
      capability: "Automated multi-modal neural localization paired with senior software engineer linguistic QA.",
      outcome: "99.8% reduction in localization bugs & 3x faster global feature rollout.",
      badge: "Tech & AI Platforms",
    },
    {
      name: "Healthcare & Life Sciences",
      icon: Stethoscope,
      problem: "Extracting structured data from multi-page clinical trial protocols and medical device documentation under strict HIPAA & FDA compliance.",
      capability: "HIPAA-validated Document AI OCR with MD/Ph.D. human validation loops for zero medical error tolerance.",
      outcome: "100% FDA 21 CFR Part 11 compliance with 85% reduction in manual clinical review hours.",
      badge: "Medical & Biotech",
    },
    {
      name: "Financial Services",
      icon: Landmark,
      problem: "Analyzing global earnings reports, SEC filings, and cross-border M&A contracts in real-time across multiple Asian and European languages.",
      capability: "High-density vector financial data extraction and real-time multilingual sentiment tokenization.",
      outcome: "< 50ms extraction latency on 10,000+ page quarterly filing archives.",
      badge: "FinTech & Banking",
    },
    {
      name: "Legal & Compliance",
      icon: Scale,
      problem: "Cross-border litigation document discovery and multi-jurisdictional contract clause risk benchmarking.",
      capability: "Legal Document AI with jurisdictional ontology mapping and senior legal counsel audit trails.",
      outcome: "70% lower eDiscovery costs with verifiable legal chain of custody.",
      badge: "Legal Enterprise",
    },
    {
      name: "E-Commerce & Retail",
      icon: ShoppingBag,
      problem: "Localizing millions of product listings, customer support QA logs, and search queries with local dialect context.",
      capability: "Massive scale automated multi-modal catalog translation & conversational RLHF annotation.",
      outcome: "28% higher conversion in localized markets with 10M+ updated listings daily.",
      badge: "Global Commerce",
    },
    {
      name: "Media & Entertainment",
      icon: Film,
      problem: "Subtitling, voice-over alignment, and cultural adaptation of high-volume video and audio streams.",
      capability: "Multi-speaker speech tokenization, automated subtitle time-code alignment & native voice QA.",
      outcome: "Frame-accurate audio-video sync across 50+ target language dubbing tracks.",
      badge: "Media Systems",
    },
  ];

  return (
    <section id="industries" className="relative py-24 bg-white dark:bg-[#05070d] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Domain Intelligence <span className="text-blue-600 dark:text-blue-400">For Every Sector</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            WELONIX tailors AI translation, dataset annotation, and evaluation pipelines to meet strict industry-specific compliance standards.
          </p>
        </div>

        {/* Industry Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border ${
                  isSelected
                    ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20"
                    : "bg-slate-50 dark:bg-[#0b0f19] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/40"
                }`}
              >
                <Icon className="w-4 h-4" />
                {ind.name}
              </button>
            );
          })}
        </div>

        {/* Active Industry Showcase Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {industries[activeTab].badge}
              </span>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20">
                  {(() => {
                    const Icon = industries[activeTab].icon;
                    return <Icon className="w-5 h-5" />;
                  })()}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{industries[activeTab].name}</h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-mono">
                Engineered for strict regulatory compliance, proprietary taxonomies, and high-security enterprise environments.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Problem */}
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">01. THE CHALLENGE</span>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">{industries[activeTab].problem}</p>
              </div>

              {/* WELONIX Capability */}
              <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/40 space-y-2">
                <span className="text-[10px] font-mono uppercase text-blue-600 dark:text-blue-400 font-bold block">02. WELONIX SOLUTION</span>
                <p className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-sans">{industries[activeTab].capability}</p>
              </div>

              {/* Business Outcome */}
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-[10px] font-mono uppercase text-blue-600 dark:text-blue-400 font-bold block">03. IMPACT & OUTCOME</span>
                <p className="text-xs font-semibold text-slate-900 dark:text-white leading-relaxed font-sans">{industries[activeTab].outcome}</p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
