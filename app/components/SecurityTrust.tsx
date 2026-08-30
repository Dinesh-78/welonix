"use client";

import { Shield, Lock, EyeOff, Server, CheckCircle, Award } from "lucide-react";

export default function SecurityTrust() {
  const securityPillars = [
    {
      title: "Zero Data Retention Guarantee",
      desc: "Client text, documents, and data vectors are never stored or used to train public foundation models.",
      icon: EyeOff,
      badge: "Privacy Guarantee",
    },
    {
      title: "SOC 2 Type II & ISO 27001 Certified",
      desc: "Audited annually by independent security auditors for strict operational control and encryption standard adherence.",
      icon: Shield,
      badge: "Compliance Verified",
    },
    {
      title: "On-Premise & Private VPC Deployments",
      desc: "Deploy the WELONIX pipeline inside your AWS, Azure, GCP, or sovereign air-gapped infrastructure.",
      icon: Server,
      badge: "Infrastructure Control",
    },
    {
      title: "End-to-End Encryption (AES-256)",
      desc: "TLS 1.3 encryption in transit with hardware-backed KMS key management for data at rest.",
      icon: Lock,
      badge: "Hardware Encrypted",
    },
  ];

  return (
    <section id="quality" className="relative py-24 bg-slate-50/60 dark:bg-[#070a14] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Security &amp; Data Governance <span className="text-blue-600 dark:text-blue-400">Without Compromise</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Built for enterprise CTOs, Chief Data Officers, and Security Architects who demand uncompromising data isolation and verifiable compliance.
          </p>
        </div>

        {/* 4 Security Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {securityPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-md hover:border-blue-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800/40">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Audited &amp; Active</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real-Time Security Telemetry Banner */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-slate-700 dark:text-slate-300 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="font-semibold">SECURITY ARCHITECTURE STATUS: ALL SYSTEMS ENCRYPTED</span>
          </div>
          <div className="flex items-center gap-6 text-slate-500 dark:text-slate-400">
            <span>PII SCRUB: AUTOMATED</span>
            <span>AIR-GAP READY: YES</span>
            <span>SLA UPTIME: 99.99%</span>
          </div>
        </div>

      </div>
    </section>
  );
}
