"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ChevronDown, 
  Languages, 
  Database, 
  ShieldCheck, 
  FileText, 
  ArrowRight, 
  Menu, 
  X,
  Cpu,
  Sun,
  Moon
} from "lucide-react";

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenAuth: () => void;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export default function Navbar({ onOpenDemo, onOpenAuth, theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#05070d]/90 backdrop-blur-xl border-b border-slate-200 dark:border-blue-950/40 py-3.5 shadow-sm dark:shadow-black/50"
          : "bg-transparent py-5"
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
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-500 dark:text-blue-300/70 font-medium">
                AI Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            
            {/* Solutions Dropdown Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  solutionsOpen 
                    ? "text-blue-600 dark:text-white bg-blue-50 dark:bg-blue-600/10" 
                    : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                }`}
                aria-expanded={solutionsOpen}
              >
                Solutions
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? "rotate-180 text-blue-600 dark:text-blue-400" : "text-slate-400"}`} />
              </button>

              {/* Mega Dropdown */}
              {solutionsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] p-3 rounded-2xl bg-white dark:bg-[#080d1a]/95 backdrop-blur-2xl border border-slate-200 dark:border-blue-500/20 shadow-xl dark:shadow-2xl shadow-slate-200/50 dark:shadow-blue-950/40 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link 
                    href="#solutions" 
                    className="p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-600/10 transition-all border border-transparent hover:border-blue-200 dark:hover:border-blue-500/20 group flex gap-3"
                    onClick={() => setSolutionsOpen(false)}
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                      <Languages className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1">
                        AI Translation
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600 dark:text-blue-400" />
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                        Neural engine localization across 100+ native languages.
                      </p>
                    </div>
                  </Link>

                  <Link 
                    href="#solutions" 
                    className="p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-600/10 transition-all border border-transparent hover:border-blue-200 dark:hover:border-blue-500/20 group flex gap-3"
                    onClick={() => setSolutionsOpen(false)}
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1">
                        AI Data & Annotation
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600 dark:text-blue-400" />
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                        High-precision multi-modal datasets for LLM training.
                      </p>
                    </div>
                  </Link>

                  <Link 
                    href="#solutions" 
                    className="p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-600/10 transition-all border border-transparent hover:border-blue-200 dark:hover:border-blue-500/20 group flex gap-3"
                    onClick={() => setSolutionsOpen(false)}
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1">
                        LLM Evaluation
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600 dark:text-blue-400" />
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                        Benchmark accuracy, safety, and domain alignment.
                      </p>
                    </div>
                  </Link>

                  <Link 
                    href="#solutions" 
                    className="p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-600/10 transition-all border border-transparent hover:border-blue-200 dark:hover:border-blue-500/20 group flex gap-3"
                    onClick={() => setSolutionsOpen(false)}
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1">
                        Document AI
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600 dark:text-blue-400" />
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                        Convert unstructured documents into structured intelligence.
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="#industries" 
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
            >
              Industries
            </Link>

            <Link 
              href="#human-ai" 
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
            >
              Platform
            </Link>

            <Link 
              href="#resources" 
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
            >
              Resources
            </Link>

            <button 
              onClick={onOpenAuth}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-all"
            >
              Client Portal
            </button>
          </nav>

          {/* Right Action CTA & Theme Switcher */}
          <div className="hidden md:flex items-center gap-3">
            
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

          {/* Mobile Menu & Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
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

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 dark:bg-[#060a14]/98 backdrop-blur-2xl border-b border-slate-200 dark:border-blue-900/30 px-4 pt-4 pb-6 mt-3 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            <p className="text-xs uppercase font-mono tracking-widest text-slate-400 px-3 py-1">Solutions</p>
            <Link href="#solutions" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-600/10 hover:text-blue-600 dark:hover:text-white text-sm font-medium">
              <Languages className="w-4 h-4 text-blue-600 dark:text-blue-400" /> AI Translation
            </Link>
            <Link href="#solutions" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-600/10 hover:text-blue-600 dark:hover:text-white text-sm font-medium">
              <Database className="w-4 h-4 text-blue-600 dark:text-blue-400" /> AI Data & Annotation
            </Link>
            <Link href="#solutions" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-600/10 hover:text-blue-600 dark:hover:text-white text-sm font-medium">
              <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" /> LLM Evaluation
            </Link>
            <Link href="#solutions" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-600/10 hover:text-blue-600 dark:hover:text-white text-sm font-medium">
              <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Document AI
            </Link>
          </div>

          <div className="border-t border-slate-200 dark:border-white/10 pt-3 space-y-1">
            <Link href="#industries" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 text-sm">
              Industries
            </Link>
            <Link href="#human-ai" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 text-sm">
              Platform
            </Link>
            <Link href="#resources" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 text-sm">
              Resources
            </Link>
            <Link href="#quality" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 text-sm">
              Trust & Security
            </Link>
          </div>

          <div className="pt-2 flex flex-col gap-2">
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
