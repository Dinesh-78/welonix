"use client";

import { Shield, Lock, CheckCircle2, Globe2, Cpu, Building, Layers } from "lucide-react";

export default function TrustBar() {
  const enterpriseCategories = [
    { label: "Global AI Labs", icon: Cpu },
    { label: "FinTech Enterprise", icon: Building },
    { label: "Healthcare & Life Sciences", icon: Shield },
    { label: "Autonomous Systems", icon: Layers },
    { label: "Multilingual SaaS Platforms", icon: Globe2 },
  ];

  return (
    <section className="relative py-14 bg-slate-50/70 dark:bg-[#070912] border-y border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header caption */}
        <div className="text-center mb-8">
          <p className="text-xs uppercase font-mono tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
            Trusted Architecture for Enterprise AI Systems
          </p>
        </div>

        {/* Enterprise Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5 mb-10">
          {enterpriseCategories.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-2.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-500/40 transition-all shadow-sm group"
              >
                <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span className="text-xs font-semibold tracking-wide font-sans">{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* Trust Badges Banner */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-md grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
          
          <div className="pt-4 md:pt-0 flex flex-col items-center">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-lg mb-1">
              <Shield className="w-4 h-4" />
              SOC 2 Type II
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Enterprise Security Certified</p>
          </div>

          <div className="pt-4 md:pt-0 flex flex-col items-center">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-lg mb-1">
              <Lock className="w-4 h-4" />
              Zero Retention
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Complete Privacy Guarantee</p>
          </div>

          <div className="pt-4 md:pt-0 flex flex-col items-center">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-lg mb-1">
              <CheckCircle2 className="w-4 h-4" />
              99.8% Precision
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Human-Verified Fidelity</p>
          </div>

          <div className="pt-4 md:pt-0 flex flex-col items-center">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-lg mb-1">
              <Globe2 className="w-4 h-4" />
              100+ Languages
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Native Linguistic Depth</p>
          </div>

        </div>

      </div>
    </section>
  );
}
