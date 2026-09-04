"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  Cpu,
  Sun,
  Moon,
  Menu,
  X,
  ArrowRight,
  Database,
  Languages,
  Globe,
  ShieldCheck,
  Mic,
  FileText,
  Video,
  Award,
  Layout,
} from "lucide-react";
import { SERVICE_CATEGORIES} from "../lib/servicesData";
import LanguageTranslator from "./LanguageTranslator";

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenAuth: () => void;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

// Icon mapping helper
const ICON_MAP: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-4 h-4" />,
  Database: <Database className="w-4 h-4" />,
  Languages: <Languages className="w-4 h-4" />,
  Globe: <Globe className="w-4 h-4" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4" />,
  Mic: <Mic className="w-4 h-4" />,
  FileText: <FileText className="w-4 h-4" />,
  Video: <Video className="w-4 h-4" />,
  Award: <Award className="w-4 h-4" />,
  Layout: <Layout className="w-4 h-4" />
};

export default function Navbar({ onOpenDemo, onOpenAuth, theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeCategorySlug, setActiveCategorySlug] = useState<string>(SERVICE_CATEGORIES[0].slug);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeCategory = SERVICE_CATEGORIES.find((c) => c.slug === activeCategorySlug) || SERVICE_CATEGORIES[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/90 dark:bg-[#05070d]/90 backdrop-blur-xl border-b border-slate-200 dark:border-blue-950/40 py-3 shadow-sm dark:shadow-black/50"
          : "bg-white/70 dark:bg-[#05070d]/70 backdrop-blur-md py-4 border-b border-slate-200/50 dark:border-white/5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <Cpu className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5 font-sans">
                WELONIX
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-500 dark:text-blue-300/70 font-medium">
                AI Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">



            <Link
              href="/services"
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
            >
              Platform
            </Link>

            <Link
              href="/#industries"
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
            >
              Industries
            </Link>

            <Link
              href="/#faq"
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
            >
              FAQ
            </Link>
                        <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${servicesOpen
                    ? "text-blue-600 dark:text-white bg-blue-50 dark:bg-blue-600/10"
                    : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                  }`}
                aria-expanded={servicesOpen}
              >

                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-blue-600 dark:text-blue-400" : "text-slate-400"}`} />
              </button>

              {/* Mega Dropdown Panel */}
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[920px] rounded-2xl bg-white dark:bg-[#070b16]/98 backdrop-blur-2xl border border-slate-200 dark:border-blue-500/20 shadow-2xl shadow-slate-300/50 dark:shadow-blue-950/60 overflow-hidden grid grid-cols-12 animate-in fade-in slide-in-from-top-2 duration-200">

                  {/* Left Column: 10 Main Categories List */}
                  <div className="col-span-5 bg-slate-50/80 dark:bg-[#040711]/90 p-3 border-r border-slate-200 dark:border-slate-800/80 max-h-[520px] overflow-y-auto space-y-1 scrollbar-thin">
                    <div className="px-3 py-1.5 flex items-center justify-between">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold">
                        Service Categories
                      </span>
                    </div>

                    {SERVICE_CATEGORIES.map((cat) => {
                      const isActive = cat.slug === activeCategorySlug;
                      return (
                        <button
                          key={cat.slug}
                          onMouseEnter={() => setActiveCategorySlug(cat.slug)}
                          onClick={() => {
                            setActiveCategorySlug(cat.slug);
                          }}
                          className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between text-xs group cursor-pointer ${
                            isActive
                              ? "bg-blue-600 text-white shadow-sm shadow-blue-600/30 font-semibold"
                              : "text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800/60 hover:text-blue-600 dark:hover:text-white"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div
                              className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                isActive
                                  ? "bg-white/20 text-white"
                                  : "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white"
                              }`}
                            >
                              {ICON_MAP[cat.iconName] || <Cpu className="w-3.5 h-3.5" />}
                            </div>
                            <span className="truncate">{cat.name}</span>
                          </div>
                          <ChevronRight
                            className={`w-3.5 h-3.5 shrink-0 transition-all ${
                              isActive
                                ? "text-white opacity-100 translate-x-0"
                                : "text-slate-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Column: Active Category Sub-items Grid */}
                  <div className="col-span-7 p-5 flex flex-col justify-between bg-white dark:bg-[#070b16]">
                    <div>
                      {/* Active Category Header */}
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                        <div>
                          <Link
                            href={`/services/${activeCategory.slug}`}
                            onClick={() => setServicesOpen(false)}
                            className="group flex items-center gap-1.5 text-base font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            <span>{activeCategory.name}</span>
                            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600 dark:text-blue-400" />
                          </Link>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                            {activeCategory.shortDesc}
                          </p>
                        </div>
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50 shrink-0">
                          {activeCategory.badgeText}
                        </span>
                      </div>

                      {/* Child Items Grid */}
                      <div className="grid grid-cols-2 gap-2 max-h-[360px] overflow-y-auto pr-1 scrollbar-thin">
                        {activeCategory.items.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/services/${activeCategory.slug}/${item.slug}`}
                            onClick={() => setServicesOpen(false)}
                            className="p-2.5 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-transparent hover:border-blue-200 dark:hover:border-blue-800/40 transition-all group/item block"
                          >
                            <div className="text-xs font-semibold text-slate-900 dark:text-slate-100 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors flex items-center justify-between">
                              <span className="truncate">{item.name}</span>
                              <ChevronRight className="w-3 h-3 text-slate-400 opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0" />
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2 leading-tight">
                              {item.shortDesc}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Footer CTA inside Dropdown */}
                    <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-slate-500 dark:text-slate-400">
                        Need specialized custom AI or linguistic workflows?
                      </span>
                      <Link
                        href={`/services/${activeCategory.slug}`}
                        onClick={() => setServicesOpen(false)}
                        className="font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                      >
                        Explore Category Page →
                      </Link>
                    </div>

                  </div>
                </div>
              )}
            </div>

            <Link
              href="/#contact"
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
            >
              Contact
            </Link>
            <button
              onClick={onOpenAuth}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-all"
            >
              Client Portal
            </button>

            {/* Services Mega Menu Trigger */}

          </nav>

          {/* Right Action CTA & Theme Switcher */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors border border-slate-200 dark:border-slate-800"
              title={`Switch to ${theme === "light" ? "Dark" : "Light"} mode`}
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-slate-700" />
              ) : (
                <Sun className="w-4 h-4 text-blue-400" />
              )}
            </button>

            {/* Language Translate Selector - Beside Sign In option */}
            <LanguageTranslator />

            <button
              onClick={onOpenAuth}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors px-2 py-1"
            >
              Sign In
            </button>
            <button
              onClick={onOpenDemo}
              className="group px-4.5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-all duration-200 flex items-center gap-1.5 shadow-md shadow-blue-600/20 hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Book a demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageTranslator isMobile />
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon className="w-5 h-5 text-slate-700" /> : <Sun className="w-5 h-5 text-blue-400" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer with Nested Accordions for all 10 categories & 62 sub-items */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-[#060a14]/98 backdrop-blur-2xl border-b border-slate-200 dark:border-blue-900/30 px-4 pt-4 pb-6 mt-3 max-h-[80vh] overflow-y-auto space-y-4 animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            <div className="flex items-center justify-between px-3 py-1">
              <span className="text-xs uppercase font-mono tracking-widest text-slate-400 font-bold">
                Service Categories
              </span>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs text-blue-600 dark:text-blue-400 font-medium"
              >
                View All
              </Link>
            </div>

            {SERVICE_CATEGORIES.map((cat) => {
              const isExpanded = mobileExpandedCat === cat.slug;
              return (
                <div key={cat.slug} className="border-b border-slate-100 dark:border-white/5 last:border-0">
                  <button
                    onClick={() => setMobileExpandedCat(isExpanded ? null : cat.slug)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-800 dark:text-slate-200 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-white/5 text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                        {ICON_MAP[cat.iconName] || <Cpu className="w-3 h-3" />}
                      </div>
                      <span>{cat.name}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180 text-blue-600" : "text-slate-400"}`} />
                  </button>

                  {isExpanded && (
                    <div className="pl-9 pr-2 py-2 space-y-1.5 bg-slate-50/50 dark:bg-blue-950/20 rounded-b-lg">
                      <Link
                        href={`/services/${cat.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs font-bold text-blue-600 dark:text-blue-400 py-1 hover:underline"
                      >
                        → Category Overview Page
                      </Link>
                      {cat.items.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/services/${cat.slug}/${item.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white py-1 transition-colors"
                        >
                          • {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="border-t border-slate-200 dark:border-white/10 pt-3 space-y-1">
            <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 text-sm font-medium">
              Services Directory
            </Link>
            <Link href="/#industries" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 text-sm font-medium">
              Industries
            </Link>
            <Link href="/#faq" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 text-sm font-medium">
              FAQ
            </Link>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAuth(); }}
              className="w-full py-2.5 rounded-full border border-blue-600 text-blue-600 dark:text-blue-400 font-medium text-sm text-center"
            >
              Sign In / Client Portal
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
              className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
            >
              Book a demo →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
