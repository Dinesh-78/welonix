"use client";

import { useState } from "react";
import { X, ArrowRight, CheckCircle2, Languages, Database, ShieldCheck, FileText, Sparkles } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InteractiveDemoModal({ isOpen, onClose }: ModalProps) {
  const [useCase, setUseCase] = useState<string>("translation");
  const [dataVolume, setDataVolume] = useState<string>("10m");
  const [securityTier, setSecurityTier] = useState<string>("vpc");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-2xl p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#080d1a] border border-slate-200 dark:border-blue-500/30 shadow-2xl overflow-hidden text-slate-900 dark:text-slate-100 transition-colors duration-300">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold uppercase mb-3">
                
                Interactive Architecture Estimator
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Configure Your WELONIX Pipeline
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Customize your enterprise AI, language, and data requirements for a tailored blueprint.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Step 1: Select Solution */}
              <div>
                <label className="block text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                  01. Primary Enterprise Solution
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: "translation", label: "AI Translation Engine", icon: Languages },
                    { id: "data", label: "AI Data & Annotation", icon: Database },
                    { id: "eval", label: "LLM Evaluation & QA", icon: ShieldCheck },
                    { id: "docai", label: "Document AI Extraction", icon: FileText },
                  ].map((s) => {
                    const Icon = s.icon;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setUseCase(s.id)}
                        className={`p-3 rounded-xl border text-xs font-semibold flex items-center gap-2.5 text-left transition-all ${
                          useCase === s.id
                            ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                            : "bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-400"
                        }`}
                      >
                        <Icon className={`w-4 h-4 shrink-0 ${useCase === s.id ? "text-white" : "text-blue-600 dark:text-blue-400"}`} />
                        {s.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Data Volume Scale */}
              <div>
                <label className="block text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                  02. Estimated Monthly Token Scale
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "1m", label: "< 5M Tokens" },
                    { id: "10m", label: "5M - 50M Tokens" },
                    { id: "100m+", label: "50M+ Enterprise" },
                  ].map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setDataVolume(v.id)}
                      className={`py-2 px-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                        dataVolume === v.id
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-400"
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Security & Deployment */}
              <div>
                <label className="block text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                  03. Deployment & Security Tier
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "saas", label: "Multi-Tenant SaaS (SOC 2)" },
                    { id: "vpc", label: "Private VPC / Air-Gap" },
                  ].map((sec) => (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => setSecurityTier(sec.id)}
                      className={`py-2 px-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                        securityTier === sec.id
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-400"
                      }`}
                    >
                      {sec.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Contact Form Input */}
              <div className="pt-2">
                <label className="block text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                  04. Work Email Address
                </label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="flex-1 px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-600"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/20 flex items-center gap-2"
                  >
                    <span>Request Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation View */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-blue-600/25">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Architecture Blueprint Prepared!</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
              We have dispatched your custom technical specification to <span className="font-semibold text-blue-600 dark:text-blue-400">{email}</span>. Our AI Systems Architect will reach out within 2 hours.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
