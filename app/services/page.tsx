"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, CheckCircle, Sparkles, Filter, Layers, Cpu, Database, Languages, Globe, ShieldCheck, Mic, FileText, Video, Award, Layout } from "lucide-react";
import ServicePageWrapper, { ServicePageWrapperRenderProps } from "../components/ServicePageWrapper";
import { SERVICE_CATEGORIES, ServiceCategory } from "../lib/servicesData";

const ICON_MAP: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Languages: <Languages className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Mic: <Mic className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
  Video: <Video className="w-5 h-5" />,
  Award: <Award className="w-5 h-5" />,
  Layout: <Layout className="w-5 h-5" />
};

export default function ServicesDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCategories = SERVICE_CATEGORIES.map((category) => {
    if (selectedCategory !== "all" && category.slug !== selectedCategory) {
      return null;
    }

    const matchingItems = category.items.filter((item) => {
      const q = searchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(q) ||
        item.shortDesc.toLowerCase().includes(q) ||
        category.name.toLowerCase().includes(q)
      );
    });

    if (matchingItems.length === 0) return null;

    return {
      ...category,
      items: matchingItems,
    };
  }).filter(Boolean) as ServiceCategory[];

  const totalServicesCount = SERVICE_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <ServicePageWrapper>
      {({ onOpenQuote, onOpenDemo }: ServicePageWrapperRenderProps) => (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Hero Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WELONIX Enterprise Services Hub</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Comprehensive Services Directory
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Explore our 10 specialized domain categories covering <span className="font-semibold text-blue-600 dark:text-blue-400">{totalServicesCount} enterprise services</span> across AI, Language Intelligence, Multilingual Annotation, QA, and Content Creation.
            </p>
          </div>

          {/* Search & Filter Control Bar */}
          <div className="bg-slate-50 dark:bg-[#090d1a] border border-slate-200 dark:border-blue-950/60 rounded-2xl p-4 sm:p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search Box */}
              <div className="relative flex-1">
                <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search across all 60+ services (e.g., 'Annotation', 'Apostille', 'Dubbing', 'Legal')..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                />
              </div>

              {/* Category Dropdown Filter */}
              <div className="relative sm:w-64">
                <Filter className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                >
                  <option value="all">All 10 Categories</option>
                  {SERVICE_CATEGORIES.map((cat) => (
                    <option key={cat.slug} value={cat.slug}>
                      {cat.name} ({cat.items.length})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quick Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-none">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-3 py-1.5 rounded-full font-medium transition-all shrink-0 ${
                  selectedCategory === "all"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                All Categories
              </button>
              {SERVICE_CATEGORIES.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-3 py-1.5 rounded-full font-medium transition-all shrink-0 ${
                    selectedCategory === cat.slug
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Service Categories & Sub-items Grid */}
          <div className="space-y-12">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-16 bg-slate-50 dark:bg-slate-900/40 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800">
                <p className="text-base font-semibold text-slate-700 dark:text-slate-300">
                  No services matching &quot;{searchQuery}&quot;
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Try adjusting your search keywords or clear the category filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white text-xs font-medium rounded-lg"
                >
                  Reset Search
                </button>
              </div>
            ) : (
              filteredCategories.map((category) => (
                <section
                  key={category.slug}
                  id={category.slug}
                  className="space-y-4 scroll-mt-28"
                >
                  {/* Category Header Card */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl bg-gradient-to-r from-blue-900/10 via-blue-600/5 to-transparent border border-blue-200/60 dark:border-blue-900/40 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shrink-0">
                        {ICON_MAP[category.iconName] || <Layers className="w-5 h-5" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                            {category.name}
                          </h2>
                          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-semibold">
                            {category.badgeText}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                          {category.shortDesc}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/services/${category.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700 shrink-0 self-start sm:self-auto"
                    >
                      <span>Category Overview</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* Grid of Sub-services in this category */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.items.map((item) => (
                      <div
                        key={item.slug}
                        className="group p-5 rounded-2xl bg-white dark:bg-[#070b16] border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono tracking-wider uppercase text-blue-600 dark:text-blue-400 font-bold">
                              {category.name}
                            </span>
                            <CheckCircle className="w-4 h-4 text-emerald-500" />
                          </div>

                          <Link href={`/services/${category.slug}/${item.slug}`}>
                            <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {item.name}
                            </h3>
                          </Link>

                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                            {item.shortDesc}
                          </p>

                          {/* Quick Benefits Bullet Badges */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {item.benefits.slice(0, 2).map((benefit, i) => (
                              <span
                                key={i}
                                className="text-[10px] bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-800"
                              >
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                          <Link
                            href={`/services/${category.slug}/${item.slug}`}
                            className="text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform flex items-center gap-1"
                          >
                            <span>Learn More &amp; Specs</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>

                          <button
                            onClick={onOpenQuote}
                            className="text-[11px] font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white underline transition-colors"
                          >
                            Quote
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))
            )}
          </div>

          {/* Bottom Custom Consultation Callout */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-bold">
                Need a Custom Multilingual AI or Localization SLA?
              </h3>
              <p className="text-sm text-blue-100 max-w-xl">
                Our solutions engineering team builds dedicated human-in-the-loop pipelines tailored to your strict security, domain jargon, and API latency standards.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3 rounded-full bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 transition-all shadow-lg"
              >
                Request Enterprise SLA Quote
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
