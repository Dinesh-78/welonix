"use client";

import Link from "next/link";
import { Cpu } from "lucide-react";
import { SERVICE_CATEGORIES } from "../lib/servicesData";

export default function Footer() {
  return (
    <footer className="relative bg-slate-50 dark:bg-[#04060b] border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12 text-slate-600 dark:text-slate-400 text-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
                WELONIX
              </span>
            </Link>

            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              WELONIX sits at the intersection of AI, Language Intelligence, Data Intelligence, and Human Judgment — helping global organizations build, evaluate, and operate frontier AI systems across 10 specialized domain sectors.
            </p>

            {/* Live System Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/40 text-blue-700 dark:text-blue-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>All Systems Operational (99.99% SLA)</span>
            </div>
          </div>

          {/* Major Service Categories */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-slate-900 dark:text-slate-200 font-bold mb-4">
              AI &amp; Data Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICE_CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.slug}>
                  <Link 
                    href={`/services/${cat.slug}`} 
                    className="hover:text-blue-600 dark:hover:text-white transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                  View All 60+ Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Localization & Media Services */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-slate-900 dark:text-slate-200 font-bold mb-4">
              Localization &amp; Media
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICE_CATEGORIES.slice(5).map((cat) => (
                <li key={cat.slug}>
                  <Link 
                    href={`/services/${cat.slug}`} 
                    className="hover:text-blue-600 dark:hover:text-white transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Compliance */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-slate-900 dark:text-slate-200 font-bold mb-4">
              Trust &amp; Security
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <span className="hover:text-blue-600 dark:hover:text-white transition-colors cursor-default">SOC 2 Type II Certified</span>
              </li>
              <li>
                <span className="hover:text-blue-600 dark:hover:text-white transition-colors cursor-default">ISO 17100 &amp; ISO 18587</span>
              </li>
              <li>
                <span className="hover:text-blue-600 dark:hover:text-white transition-colors cursor-default">HIPAA &amp; GDPR Compliant</span>
              </li>
              <li>
                <span className="hover:text-blue-600 dark:hover:text-white transition-colors cursor-default">Zero Data Retention SLA</span>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Services Directory
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} WELONIX Inc. All rights reserved. AI × LANGUAGE × DATA.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-blue-600 dark:hover:text-slate-300 transition-colors cursor-default">Privacy Policy</span>
            <span className="hover:text-blue-600 dark:hover:text-slate-300 transition-colors cursor-default">Terms of Service</span>
            <span className="hover:text-blue-600 dark:hover:text-slate-300 transition-colors cursor-default">Security Disclosures</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
