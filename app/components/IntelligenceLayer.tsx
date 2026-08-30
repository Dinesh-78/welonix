"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Brain, 
  Languages, 
  Database, 
  UserCheck, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  UploadCloud, 
  Cpu, 
  Lock
} from "lucide-react";

type DimensionKey = "ai" | "language" | "data" | "human";

interface DimensionDetails {
  title: string;
  subtitle: string;
  icon: typeof Brain;
  metrics: { label: string; value: string }[];
  features: string[];
  flowStep: string;
}

// Staggered Animations for Header Words
const titleContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(3px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: custom * 0.08,
      ease: "easeOut",
    },
  }),
};

export default function IntelligenceLayer() {
  const [activeTab, setActiveTab] = useState<DimensionKey>("ai");
  const [activeAgent, setActiveAgent] = useState<string>("translation");

  const dimensions: Record<DimensionKey, DimensionDetails> = {
    ai: {
      title: "Artificial Intelligence",
      subtitle: "Multi-modal model integration, LLM fine-tuning & autonomous neural pipelines",
      icon: Brain,
      metrics: [
        { label: "Processing Speed", value: "< 45ms / Token" },
        { label: "Supported Architecture", value: "Transformers & Diffusion" },
        { label: "Context Window", value: "128K Tokens" },
      ],
      features: [
        "Autonomous multi-modal model evaluation & benchmarking",
        "Neural translation pipeline with real-time semantic caching",
        "Custom LoRA & RLHF fine-tuning dataset generation",
      ],
      flowStep: "AI Models ingest raw input and construct initial semantic embeddings.",
    },
    language: {
      title: "Language Intelligence",
      subtitle: "Deep linguistic semantics, dialect nuance, localization & contextual depth",
      icon: Languages,
      metrics: [
        { label: "Native Languages", value: "100+ Languages" },
        { label: "Regional Dialects", value: "350+ Variants" },
        { label: "BLEU / COMET Score", value: "98.4 Rating" },
      ],
      features: [
        "Cultural nuance & colloquial idiom mapping across global markets",
        "Domain-specific terminology dictionaries (Medical, Legal, Technical)",
        "Bi-directional neural localization with context retention",
      ],
      flowStep: "Linguistic engine applies context rules and regional terminology filters.",
    },
    data: {
      title: "Data Intelligence",
      subtitle: "Enterprise dataset curation, token cleaning, deduplication & structured labeling",
      icon: Database,
      metrics: [
        { label: "Token Processing", value: "10B+ Tokens / Mo" },
        { label: "Data Quality Score", value: "99.9% Cleaned" },
        { label: "Formats Supported", value: "Text, Audio, OCR, Video" },
      ],
      features: [
        "Automated data scrubbing, PII redaction & deduplication",
        "Structured multi-modal JSON/Parquet dataset export",
        "High-density vector database indexing & retrieval",
      ],
      flowStep: "Data processing layer transforms unstructured inputs into AI-ready vectors.",
    },
    human: {
      title: "Human Intelligence",
      subtitle: "Domain experts, RLHF annotators, native linguists & safety auditors",
      icon: UserCheck,
      metrics: [
        { label: "Verified Experts", value: "12,000+ Global QA" },
        { label: "Human-in-the-Loop", value: "100% Auditability" },
        { label: "RLHF Precision", value: "99.8% Accuracy" },
      ],
      features: [
        "Subject matter experts (Doctors, Lawyers, Financial Analysts, Engineers)",
        "RLHF preference ranking, red-teaming & hallucination audit",
        "Continuous feedback loop to retrain and align foundation models",
      ],
      flowStep: "Human expert audit validates nuances, eliminates hallucinations & approves output.",
    },
  };

  const activeData = dimensions[activeTab];
  const ActiveIcon = activeData.icon;

  const headerWords = ["Four", "Dimensions", "of"];
  const accentWords = ["Enterprise", "AI"];
  const subTextWords = [
    "A", "cohesive", "intelligence", "matrix", "orchestrating", "raw", "models,", 
    "global", "languages,", "clean", "data,", "and", "human", "judgment."
  ];

  const agentNodes = [
    { id: "translation", name: "Neural Translation Agent", icon: Languages, badge: "Context Engine", status: "32ms Latency" },
    { id: "data", name: "Data Scrubbing Agent", icon: Database, badge: "PII Removal", status: "99.9% Cleaned" },
    { id: "eval", name: "Safety Audit Agent", icon: ShieldCheck, badge: "Hallucination Check", status: "0.002% Error Rate" },
    { id: "human", name: "Human QA Expert Agent", icon: UserCheck, badge: "Domain SME Review", status: "99.8% Precision" },
  ];

  return (
    <section id="human-ai" className="relative py-24 bg-white dark:bg-[#05070d] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 font-sans"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleContainerVariants}
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 flex flex-wrap justify-center gap-x-2.5 gap-y-1 font-sans">
            {headerWords.map((word, i) => (
              <motion.span key={i} className="inline-block" variants={wordVariants}>
                {word}
              </motion.span>
            ))}
            <span className="inline-flex gap-x-2 text-blue-600 dark:text-blue-400">
              {accentWords.map((word, i) => (
                <motion.span key={i} className="inline-block" variants={wordVariants}>
                  {word}
                </motion.span>
              ))}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 flex flex-wrap justify-center gap-x-1.5 gap-y-1 font-sans">
            {subTextWords.map((word, i) => (
              <motion.span 
                key={i} 
                className="inline-block" 
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
                }}
              >
                {word}
              </motion.span>
            ))}
          </p>
        </motion.div>

        {/* ------------------------------------------------------------- */}
        {/* CLEAN, SIMPLE & SLEEK SYSTEM ARCHITECTURE FLOW (NO DOTS PASSING) */}
        {/* ------------------------------------------------------------- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-20 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#070b16] border border-slate-200 dark:border-slate-800 shadow-sm font-sans"
        >
          {/* Header Caption */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-8 pb-5 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">
                System Architecture Overview
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Client Data Ingestion &amp; Agent Orchestration Pipeline
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-800">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>Operational Pipeline</span>
            </div>
          </div>

          {/* 3 Architecture Steps Grid with Clean Arrow Indicators */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* STEP 1: CLIENT DATA INGESTION */}
            <div className="lg:col-span-3">
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <UploadCloud className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-blue-600 dark:text-blue-400 block">Step 01</span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Client Data Stream</h4>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                  Client inputs raw data feeds directly into the secure pipeline:
                </p>

                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-slate-700 dark:text-slate-300">
                    <span>PDFs &amp; Unstructured Docs</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">100M+ Tokens</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-slate-700 dark:text-slate-300">
                    <span>Multilingual Text</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">50+ Locales</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-slate-700 dark:text-slate-300">
                    <span>Multi-Modal Datasets</span>
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Real-Time</span>
                  </div>
                </div>
              </div>
            </div>

            {/* STATIC ARROW CONNECTOR 1 */}
            <div className="hidden lg:flex lg:col-span-1 justify-center items-center">
              <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* STEP 2: CONNECTED AGENT ORCHESTRATION PANEL */}
            <div className="lg:col-span-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-blue-500/30 shadow-sm">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase text-blue-600 dark:text-blue-400 block">Step 02</span>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">Agent Processing Panel</h4>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2">
                  {agentNodes.map((agent) => {
                    const AgentIcon = agent.icon;
                    const isSelected = activeAgent === agent.id;

                    return (
                      <div
                        key={agent.id}
                        onClick={() => setActiveAgent(agent.id)}
                        className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? "bg-blue-50 dark:bg-blue-950/50 border-blue-500"
                            : "bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 hover:border-blue-300"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center shrink-0">
                            <AgentIcon className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-slate-900 dark:text-white block">{agent.name}</span>
                            <span className="text-[11px] text-slate-500 dark:text-slate-400">{agent.badge}</span>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-blue-600 dark:text-blue-400">{agent.status}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* STATIC ARROW CONNECTOR 2 */}
            <div className="hidden lg:flex lg:col-span-1 justify-center items-center">
              <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* STEP 3: VERIFIED QUALITY OUTCOME DELIVERED */}
            <div className="lg:col-span-3">
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-blue-600 dark:text-blue-400 block">Step 03</span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Quality Outcome Received</h4>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                  Client receives verified, production-ready enterprise deliverables:
                </p>

                <div className="space-y-1.5 text-xs font-sans">
                  <div className="p-2 rounded-lg bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/40 flex items-center gap-2 text-slate-800 dark:text-slate-200 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>99.8% Verified Precision Output</span>
                  </div>
                  <div className="p-2 rounded-lg bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/40 flex items-center gap-2 text-slate-800 dark:text-slate-200 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>Zero-Hallucination Vector JSON</span>
                  </div>
                  <div className="p-2 rounded-lg bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/40 flex items-center gap-2 text-slate-800 dark:text-slate-200 font-medium">
                    <Lock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>SOC 2 Type II Audited Payload</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Four Interactive Dimension Selector Tabs */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {(Object.keys(dimensions) as DimensionKey[]).map((key, index) => {
            const dim = dimensions[key];
            const Icon = dim.icon;
            const isSelected = activeTab === key;

            return (
              <motion.button
                key={key}
                onClick={() => setActiveTab(key)}
                variants={fadeUpVariants}
                custom={index}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`p-4 rounded-2xl text-left transition-all flex items-center gap-3.5 border cursor-pointer ${
                  isSelected
                    ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20"
                    : "bg-slate-50 dark:bg-[#0b0f19] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/40"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  isSelected 
                    ? "bg-white/20 text-white" 
                    : "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50"
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-xs uppercase font-semibold tracking-wider ${isSelected ? "text-blue-100" : "text-slate-500 dark:text-slate-400"}`}>
                    Dimension
                  </div>
                  <div className="text-sm font-bold truncate">{dim.title}</div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Selected Tab Active Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 shadow-sm font-sans"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/25">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{activeData.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">{activeData.subtitle}</p>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {activeData.metrics.map((m, i) => (
                    <div 
                      key={i} 
                      className="p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800"
                    >
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{m.label}</div>
                      <div className="text-sm sm:text-base font-bold text-blue-600 dark:text-blue-400 mt-1">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <div className="space-y-2.5 pt-2">
                  <p className="text-xs uppercase font-semibold tracking-wider text-slate-500 dark:text-slate-400">Core Capabilities</p>
                  {activeData.features.map((feat, i) => (
                    <div 
                      key={i} 
                      className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                    >
                      <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Interactive Pipeline Preview */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Pipeline Step</span>
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400">Active</span>
                </div>
                
                <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50 text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                  "{activeData.flowStep}"
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-sans">
                  <span>STATUS: Operational</span>
                  <span>LATENCY: Real-time</span>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
