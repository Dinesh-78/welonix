"use client";

import { useState } from "react";
import { Search, Cpu, CheckCircle2, ShieldCheck, TrendingUp, Send, Layers } from "lucide-react";

export default function ProcessPipeline() {
  const [activeStep, setActiveStep] = useState(0);

  const pipelineSteps = [
    {
      step: "01",
      title: "Understand",
      icon: Search,
      desc: "Ingest client requirements, domain glossaries, security parameters, and data architecture goals.",
      telemetry: "Ingestion: 100M+ tokens/sec | Schema: Auto-Mapped",
    },
    {
      step: "02",
      title: "Process",
      icon: Cpu,
      desc: "Neural translation models and data scrubbing pipelines execute contextual processing and tokenization.",
      telemetry: "Latency: < 45ms | GPU Cluster: Active",
    },
    {
      step: "03",
      title: "Validate",
      icon: CheckCircle2,
      desc: "Verified domain experts perform multi-pass human-in-the-loop quality assurance and terminology validation.",
      telemetry: "Human QA: 100% Audit | Pass Rate: 99.8%",
    },
    {
      step: "04",
      title: "Evaluate",
      icon: ShieldCheck,
      desc: "Empirical benchmarking for hallucination, safety guardrails, BLEU/COMET score, and bias detection.",
      telemetry: "Hallucination Index: 0.002% | Safety: Passed",
    },
    {
      step: "05",
      title: "Improve",
      icon: TrendingUp,
      desc: "Feed RLHF preference pairs back into model alignment loops to continuously improve accuracy over time.",
      telemetry: "RLHF Feedback Loop: Synchronized",
    },
    {
      step: "06",
      title: "Deliver",
      icon: Send,
      desc: "Export enterprise-ready structured datasets, localized assets, or API endpoints into production systems.",
      telemetry: "Deployment: Private VPC / API Stream",
    },
  ];

  return (
    <section className="relative py-24 bg-white dark:bg-[#05070d] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50 mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
              End-to-End Operational Pipeline
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            How WELONIX <span className="text-blue-600 dark:text-blue-400">Operates</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A seamless six-stage AI &amp; data pipeline designed for high throughput, security, and enterprise accuracy.
          </p>
        </div>

        {/* Step Progression Controls */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-10">
          {pipelineSteps.map((item, idx) => {
            const StepIcon = item.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden ${
                  isSelected
                    ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20"
                    : "bg-slate-50 dark:bg-[#0b0f19] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/40"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isSelected ? "text-blue-100" : "text-blue-600 dark:text-blue-400"}`}>
                    {item.step}
                  </span>
                  <StepIcon className={`w-4 h-4 ${isSelected ? "text-white" : "text-slate-400"}`} />
                </div>
                <div className="text-sm font-bold truncate">
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed View Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-300">
                <span>STAGE {pipelineSteps[activeStep].step} OF 06</span>
              </div>
              
              <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                {pipelineSteps[activeStep].title}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                {pipelineSteps[activeStep].desc}
              </p>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs text-blue-600 dark:text-blue-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1">
                <span>REAL-TIME PIPELINE TELEMETRY:</span>
                <span className="font-bold">{pipelineSteps[activeStep].telemetry}</span>
              </div>
            </div>

            {/* Visual Step Indicator */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/25">
                {(() => {
                  const Icon = pipelineSteps[activeStep].icon;
                  return <Icon className="w-8 h-8" />;
                })()}
              </div>
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                STAGE {pipelineSteps[activeStep].step}: ACTIVE RUNTIME
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
