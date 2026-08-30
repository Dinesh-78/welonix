"use client";

import { useState } from "react";
import { BookOpen, ArrowRight } from "lucide-react";

export default function ResourcesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "AI Research", "LLM Evaluation", "Localization", "Document AI"];

  const resources = [
    {
      title: "2026 Multilingual LLM Benchmark Report",
      category: "LLM Evaluation",
      readTime: "12 min read",
      date: "August 2026",
      desc: "An empirical evaluation of frontier foundation models across 50 global languages for hallucination rate and cultural reasoning.",
      badge: "Featured Research",
    },
    {
      title: "Architecting Zero-Trust Data Pipelines for Medical AI",
      category: "Document AI",
      readTime: "8 min read",
      date: "July 2026",
      desc: "How HIPAA-compliant Document OCR and human-in-the-loop QA eliminate clinical data extraction errors.",
      badge: "Technical Guide",
    },
    {
      title: "The Human-in-the-Loop Paradigm in RLHF Fine-Tuning",
      category: "AI Research",
      readTime: "15 min read",
      date: "July 2026",
      desc: "Why domain-expert human annotators outperform crowd-sourced annotations for enterprise model alignment.",
      badge: "Whitepaper",
    },
    {
      title: "Neural Localization vs Traditional Machine Translation",
      category: "Localization",
      readTime: "10 min read",
      date: "June 2026",
      desc: "A comparative technical analysis of context-aware neural pipelines versus legacy word-level APIs.",
      badge: "Industry Guide",
    },
  ];

  const filteredResources =
    activeCategory === "All"
      ? resources
      : resources.filter((r) => r.category === activeCategory);

  return (
    <section id="resources" className="relative py-24 bg-white dark:bg-[#05070d] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50 mb-4 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
              Knowledge &amp; Intelligence Hub
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Insights &amp; <span className="text-blue-600 dark:text-blue-400">Technical Research</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            In-depth guides, evaluation benchmarks, and whitepapers on building and scaling high-fidelity enterprise AI.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                activeCategory === cat
                  ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20"
                  : "bg-slate-50 dark:bg-[#0b0f19] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredResources.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-md hover:border-blue-500/40 transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800/40">
                    {item.badge}
                  </span>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {item.date} • {item.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700">
                <span>Read Full Technical Paper</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
