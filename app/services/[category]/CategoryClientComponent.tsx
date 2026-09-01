"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, ChevronRight, Layers, Sparkles } from "lucide-react";
import ServicePageWrapper, { ServicePageWrapperRenderProps } from "../../components/ServicePageWrapper";
import { ServiceCategory } from "../../lib/servicesData";

interface CategoryClientComponentProps {
  category: ServiceCategory;
}

export default function CategoryClientComponent({ category }: CategoryClientComponentProps) {
  return (
    <ServicePageWrapper activeCategoryName={category.name}>
      {({ onOpenQuote, onOpenDemo }: ServicePageWrapperRenderProps) => (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Breadcrumb Trail */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 dark:text-white font-semibold">{category.name}</span>
          </nav>

          {/* Hero Banner Section */}
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-blue-950 via-[#070e20] to-[#040711] border border-blue-800/40 text-white overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{category.badgeText}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                {category.name}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
                {category.fullDesc}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenQuote}
                  className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2"
                >
                  <span>Request Category SLA Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenDemo}
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-sm transition-all"
                >
                  Book Demo Session
                </button>
              </div>
            </div>
          </div>

          {/* Sub-Services Grid Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Included Sub-Services ({category.items.length})
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Select any service below to view detailed operational specifications, workflows, and FAQs.
                </p>
              </div>
              <Link 
                href="/services" 
                className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                All 60+ Services →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <div
                  key={item.slug}
                  className="group p-6 rounded-2xl bg-white dark:bg-[#070b16] border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center font-mono text-xs font-bold border border-blue-200 dark:border-blue-800/40">
                      <Layers className="w-4 h-4" />
                    </div>

                    <Link href={`/services/${category.slug}/${item.slug}`}>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center justify-between">
                        <span>{item.name}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                      </h3>
                    </Link>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {item.shortDesc}
                    </p>

                    <ul className="space-y-1.5 pt-2">
                      {item.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                          <span className="truncate">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <Link
                      href={`/services/${category.slug}/${item.slug}`}
                      className="text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:underline flex items-center gap-1"
                    >
                      <span>Explore Service Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={onOpenQuote}
                      className="text-[11px] font-medium px-2.5 py-1 rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 hover:bg-blue-100 transition-colors"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee Banner */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#070b16] border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0" />
              <div>
                <p className="font-bold text-slate-900 dark:text-white">
                  SOC 2 Type II Certified &amp; ISO Quality Standard Compliant
                </p>
                <p className="text-slate-500 dark:text-slate-400">
                  All {category.name} workflows run under non-disclosure confidentiality agreements with zero model retraining retention.
                </p>
              </div>
            </div>
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-all shrink-0"
            >
              Request Proposal
            </button>
          </div>

        </div>
      )}
    </ServicePageWrapper>
  );
}
