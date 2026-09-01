"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle, 
  Layers, 
  Workflow, 
  Target,
  FileCheck,
  ChevronDown
} from "lucide-react";
import ServicePageWrapper, { ServicePageWrapperRenderProps } from "../../../components/ServicePageWrapper";
import { ServiceCategory, ChildService } from "../../../lib/servicesData";

interface ServiceDetailClientComponentProps {
  category: ServiceCategory;
  service: ChildService;
}

export default function ServiceDetailClientComponent({
  category,
  service,
}: ServiceDetailClientComponentProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Find sibling services in the same category (excluding current)
  const siblingServices = category.items.filter((item) => item.slug !== service.slug);

  return (
    <ServicePageWrapper
      activeServiceName={service.name}
      activeCategoryName={category.name}
    >
      {({ onOpenQuote, onOpenDemo }: ServicePageWrapperRenderProps) => (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Breadcrumb Trail */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href={`/services/${category.slug}`} className="hover:text-blue-600 transition-colors">{category.name}</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 dark:text-white font-semibold">{service.name}</span>
          </nav>

          {/* Service Hero Header */}
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-[#0a0f1d] to-[#040711] border border-blue-900/40 text-white overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{category.name} &bull; Enterprise SLA</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                {service.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
                {service.fullDesc}
              </p>

              {/* Key Benefits Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenQuote}
                  className="px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-xl shadow-blue-600/30 flex items-center gap-2"
                >
                  <span>Request Custom Quote &amp; SLA</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenDemo}
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-sm transition-all"
                >
                  Book Live Demo
                </button>
              </div>
            </div>
          </div>

          {/* Key Features & Operational Capabilities Grid */}
          <div className="space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
              <span className="text-xs uppercase font-mono tracking-widest text-blue-600 dark:text-blue-400 font-bold">
                Capabilities
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                Core Features &amp; Specifications
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-[#070b16] border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm hover:border-blue-500/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-mono font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Target Use Cases & Industry Applications */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-slate-50 dark:bg-[#070b16] border border-slate-200 dark:border-slate-800 rounded-3xl p-8">
            <div className="md:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-mono">
                <Target className="w-3.5 h-3.5" />
                <span>Industry Application</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Primary Use Cases
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Designed for high-throughput enterprise scenarios requiring zero error margins, regulatory compliance, and seamless software integration.
              </p>
              <button
                onClick={onOpenQuote}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-all flex items-center gap-2"
              >
                <span>Discuss Your Specific Use Case</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.useCases.map((useCase, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3"
                >
                  <FileCheck className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {useCase}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Standard Operating Workflow Pipeline */}
          <div className="space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
              <span className="text-xs uppercase font-mono tracking-widest text-blue-600 dark:text-blue-400 font-bold">
                Workflow
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                Standard Operating Pipeline
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.workflow.map((wf, idx) => (
                <div
                  key={idx}
                  className="relative p-6 rounded-2xl bg-white dark:bg-[#070b16] border border-slate-200 dark:border-slate-800 space-y-3"
                >
                  <span className="text-3xl font-black font-mono text-blue-600/20 dark:text-blue-500/20 block">
                    {wf.step}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {wf.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {wf.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-blue-600 dark:text-blue-400 font-bold">
                  FAQ
                </span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  Frequently Asked Questions
                </h2>
              </div>
              <HelpCircle className="w-6 h-6 text-slate-400" />
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#070b16] overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4"
                    >
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform ${
                          isOpen ? "rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Category Siblings Navigation */}
          {siblingServices.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Related Services in {category.name}
                </h3>
                <Link
                  href={`/services/${category.slug}`}
                  className="text-xs text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  View Category Overview →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {siblingServices.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${category.slug}/${item.slug}`}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-all group block"
                  >
                    <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors block truncate">
                      {item.name}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 block mt-0.5">
                      {item.shortDesc}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Final CTA Banner */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-bold">
                Ready to deploy {service.name}?
              </h3>
              <p className="text-sm text-blue-100 max-w-xl">
                Get an instant quote with custom SLAs, security parameters, and turnaround guarantees tailored to your dataset scope.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3 rounded-full bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 transition-all shadow-lg"
              >
                Request Quote
              </button>
              <button
                onClick={onOpenDemo}
                className="px-6 py-3 rounded-full bg-blue-800/60 border border-white/20 text-white font-semibold text-sm hover:bg-blue-800/90 transition-all"
              >
                Book Demo Call
              </button>
            </div>
          </div>

        </div>
      )}
    </ServicePageWrapper>
  );
}
