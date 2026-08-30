"use client";

import { useState } from "react";
import { 
  Languages, 
  Database, 
  ShieldCheck, 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  Layers, 
  Bot, 
  Cpu, 
  Check, 
  Terminal,
  ScanText
} from "lucide-react";

type SolutionTab = "translation" | "data" | "eval" | "docai";

export default function CoreSolutions() {
  const [activeSolution, setActiveSolution] = useState<SolutionTab>("translation");

  // State for AI Translation Demo
  const [selectedLang, setSelectedLang] = useState<"es" | "ja" | "de" | "ar">("ja");
  const translationSamples = {
    es: {
      source: "The autonomous agent evaluated high-dimensional vector embeddings with zero-shot generalization.",
      aiContext: "Technical AI SaaS domain detected. Preserving precision vector terminology for enterprise localized docs.",
      neuralOutput: "El agente autónomo evaluó incrustaciones vectoriales de alta dimensión con generalización zero-shot.",
      humanValidation: "Verified by Senior AI Systems Linguist (Madrid). Terminology matches ISO 27001 AI lexicon.",
      status: "Verified 100% Fidelity",
    },
    ja: {
      source: "The autonomous agent evaluated high-dimensional vector embeddings with zero-shot generalization.",
      aiContext: "AI Technical Architecture context. Converting vector terminology to Japanese enterprise AI standards.",
      neuralOutput: "自律型エージェントは、ゼロショット汎化を備えた高次元ベクトル埋め込みを評価しました。",
      humanValidation: "Verified by Tokyo Lead LLM Engineer. Respects Japanese enterprise honorifics and technical syntax.",
      status: "Verified 100% Fidelity",
    },
    de: {
      source: "The autonomous agent evaluated high-dimensional vector embeddings with zero-shot generalization.",
      aiContext: "German enterprise engineering context. High precision compound noun alignment required.",
      neuralOutput: "Der autonome Agent bewertete hochdimensionale Vektoreinbettungen mit Zero-Shot-Generalisierung.",
      humanValidation: "Verified by Berlin Technical Localization Auditor. Grammar & syntax validated.",
      status: "Verified 100% Fidelity",
    },
    ar: {
      source: "The autonomous agent evaluated high-dimensional vector embeddings with zero-shot generalization.",
      aiContext: "RTL Arabic technical localization. Modern standard Arabic AI terminology applied.",
      neuralOutput: "قام الوكيل المستقل بتقييم تضمينات المتجهات عالية الأبعاد مع التعميم دون تدريب مسبق.",
      humanValidation: "Verified by Dubai Senior AI Translator. Contextual integrity confirmed.",
      status: "Verified 100% Fidelity",
    },
  };

  // State for LLM Eval Metrics
  const evalMetrics = [
    { name: "Accuracy & Factuality", score: "99.4%", status: "Optimal" },
    { name: "Hallucination Suppression", score: "99.8%", status: "Optimal" },
    { name: "Safety & Guardrails", score: "100%", status: "Secured" },
    { name: "Bias Detection", score: "99.1%", status: "Passed" },
    { name: "Instruction Following", score: "98.9%", status: "High" },
    { name: "Multilingual Nuance", score: "99.6%", status: "Native" },
  ];

  // State for Document AI Scanner
  const [activeDocType, setActiveDocType] = useState<"invoice" | "contract" | "clinical">("contract");
  const docSamples = {
    invoice: {
      title: "Enterprise Vendor Invoice #INV-9042",
      fields: [
        { key: "vendor_name", value: "Aura Neural Cloud Corp", confidence: 99.8 },
        { key: "total_amount", value: "$142,500.00 USD", confidence: 99.9 },
        { key: "tax_id", value: "US-849204192", confidence: 100 },
        { key: "line_items", value: "128K GPU Cluster Compute Hours", confidence: 99.7 },
      ],
    },
    contract: {
      title: "Master Services Agreement (MSA) v4.2",
      fields: [
        { key: "governing_law", value: "State of Delaware", confidence: 100 },
        { key: "indemnification_cap", value: "$10,000,000.00 USD", confidence: 99.5 },
        { key: "sla_availability", value: "99.99% Uptime Guarantee", confidence: 99.8 },
        { key: "data_sovereignty", value: "Zero EU Cross-Border Transfer", confidence: 99.9 },
      ],
    },
    clinical: {
      title: "Clinical Trial Patient Study Protocol",
      fields: [
        { key: "trial_phase", value: "Phase III Multicenter Double-Blind", confidence: 99.6 },
        { key: "sample_size", value: "N=4,800 Cohort Patients", confidence: 99.8 },
        { key: "primary_endpoint", value: "Efficacy & Immunogenicity Ratio", confidence: 99.9 },
        { key: "regulatory_compliance", value: "FDA 21 CFR Part 11 Validated", confidence: 100 },
      ],
    },
  };

  const solutionTabs = [
    {
      id: "translation" as SolutionTab,
      name: "AI Translation & Localization",
      icon: Languages,
      tagline: "Neural translation powered by deep contextual understanding and expert linguists.",
    },
    {
      id: "data" as SolutionTab,
      name: "AI Data & Annotation",
      icon: Database,
      tagline: "High-precision dataset curation, token cleaning, RLHF & multi-modal labeling.",
    },
    {
      id: "eval" as SolutionTab,
      name: "LLM Evaluation & Auditing",
      icon: ShieldCheck,
      tagline: "Rigorous model benchmarking for safety, hallucination suppression & accuracy.",
    },
    {
      id: "docai" as SolutionTab,
      name: "Document AI Intelligence",
      icon: FileText,
      tagline: "Convert unstructured PDFs, scans, and documents into structured AI vectors.",
    },
  ];

  return (
    <section id="solutions" className="relative py-24 bg-slate-50/60 dark:bg-[#070912] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
         
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Built for <span className="text-blue-600 dark:text-blue-400">Scale, Precision &amp; Trust</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Four specialized technology pillars designed to accelerate AI model deployment across international markets.
          </p>
        </div>

        {/* Horizontal Solutions Selector Navigation Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {solutionTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSolution === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveSolution(tab.id)}
                className={`p-4 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                  isActive
                    ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20"
                    : "bg-white dark:bg-[#0b0f19] text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/40"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {isActive && <CheckCircle className="w-5 h-5 text-white" />}
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base leading-snug mb-1">{tab.name}</h3>
                  <p className={`text-xs line-clamp-2 ${isActive ? "text-blue-100" : "text-slate-500 dark:text-slate-400"}`}>
                    {tab.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Solution Interactive Display Workspace */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-md">
          
          {/* TAB 1: AI TRANSLATION */}
          {activeSolution === "translation" && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Languages className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    Neural AI Translation Engine
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Select a target locale to observe real-time context-aware neural translation & expert validation.
                  </p>
                </div>

                {/* Target Language Switcher Buttons */}
                <div className="flex items-center gap-2">
                  {(["es", "ja", "de", "ar"] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLang(lang)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                        selectedLang === lang
                          ? "bg-blue-600 text-white shadow-sm"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                      }`}
                    >
                      {lang === "es" && "Spanish"}
                      {lang === "ja" && "Japanese"}
                      {lang === "de" && "German"}
                      {lang === "ar" && "Arabic"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Translation Demo Visual Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Source Input */}
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase font-mono">
                    <span>Source Text (English)</span>
                    <span className="text-blue-600 dark:text-blue-400 font-sans">Domain: Technical AI</span>
                  </div>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed p-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
                    "{translationSamples[selectedLang].source}"
                  </p>
                  <div className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 p-3 rounded-xl border border-blue-200 dark:border-blue-800/40 font-medium">
                    <span className="font-bold">Context Engine:</span> {translationSamples[selectedLang].aiContext}
                  </div>
                </div>

                {/* Target Output */}
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase font-mono">
                    <span>Localized Target Output</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-sans flex items-center gap-1 font-bold">
                      <Check className="w-3.5 h-3.5" /> Verified
                    </span>
                  </div>
                  <p className="text-sm font-bold text-blue-600 dark:text-blue-400 leading-relaxed p-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800">
                    "{translationSamples[selectedLang].neuralOutput}"
                  </p>
                  <div className="text-xs text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800 leading-relaxed">
                    <span className="font-bold text-slate-900 dark:text-white">Human Validation:</span> {translationSamples[selectedLang].humanValidation}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: AI DATA & ANNOTATION */}
          {activeSolution === "data" && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    Multi-Modal Data & Annotation Pipeline
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Structured datasets curated and labeled for foundation model pre-training & RLHF alignment.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">RLHF & SFT Datasets</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">10M+ Pairs</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    High-quality prompt-response pairs curated by domain experts for post-training alignment.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Token Cleaning & Scrubbing</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">99.9% PII Redacted</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Automated scrubbing of personal data, duplicates, and low-quality token sequences.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Multi-Modal Formats</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Text, Audio, Vision</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Integrated tokenization for text, acoustic speech, image segmentation, and OCR bounds.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: LLM EVALUATION */}
          {activeSolution === "eval" && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    Enterprise LLM Evaluation & Safety Audit
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Continuous model benchmarking across hallucination, safety, bias, and domain precision metrics.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {evalMetrics.map((item, index) => (
                  <div key={index} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{item.name}</span>
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/40">
                        {item.status}
                      </span>
                    </div>
                    <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">{item.score}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: DOCUMENT AI */}
          {activeSolution === "docai" && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    Unstructured Document AI Intelligence
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Extract structured entities and vectors from complex legal, financial, and medical documents.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {(["contract", "invoice", "clinical"] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setActiveDocType(type)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                        activeDocType === type
                          ? "bg-blue-600 text-white shadow-sm"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sample Output Card */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{docSamples[activeDocType].title}</span>
                  <span className="text-xs font-mono text-blue-600 dark:text-blue-400">OCR & Vector Extracted</span>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  {docSamples[activeDocType].fields.map((field, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-mono uppercase text-slate-400">{field.key}</div>
                        <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{field.value}</div>
                      </div>
                      <div className="text-xs font-bold text-blue-600 dark:text-blue-400 font-mono">
                        {field.confidence}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
