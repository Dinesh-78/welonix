"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Play, 
  Sparkles, 
  CheckCircle2, 
  Languages, 
  ArrowRightLeft, 
  ShieldCheck,
  Check,
  Bot,
  UserCheck
} from "lucide-react";

interface HeroProps {
  onOpenDemo: () => void;
}

const translationExamples = [
  {
    sourceLang: "English",
    targetLang: "Mandarin Chinese",
    sourceCode: "EN",
    targetCode: "ZH",
    sourceText: "Enterprise multi-modal AI models with verified accuracy.",
    targetText: "具有經驗證精準度的企業級多模態人工智能模型。",
    targetChar: "支",
  },
  {
    sourceLang: "English",
    targetLang: "Japanese",
    sourceCode: "EN",
    targetCode: "JA",
    sourceText: "Human-perfected domain localization for global scale.",
    targetText: "グローバルスケールのための人間が完璧にしたドメインローカライゼーション。",
    targetChar: "あ",
  },
  {
    sourceLang: "English",
    targetLang: "German",
    sourceCode: "EN",
    targetCode: "DE",
    sourceText: "High-precision AI speed combined with expert human oversight.",
    targetText: "Hochpräzise KI-Geschwindigkeit kombiniert mit menschlicher Expertenkontrolle.",
    targetChar: "Ä",
  },
];

const trustedBrandsRow1 = [
  {
    name: "HDFC Bank",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-[#004B8D] border border-rose-500 rounded flex items-center justify-center p-0.5 shrink-0">
          <div className="w-full h-full bg-[#ED1C24] flex items-center justify-center">
            <div className="w-2 h-2 bg-white" />
          </div>
        </div>
        <span className="font-extrabold tracking-tight text-[#004B8D] dark:text-blue-400 text-sm">HDFC BANK</span>
      </div>
    ),
  },
  {
    name: "Godrej",
    logo: (
      <span className="font-serif italic font-bold text-lg text-pink-600 dark:text-pink-400 tracking-wide">
        Godrej
      </span>
    ),
  },
  {
    name: "IDFC FIRST Bank",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-[#991b1b] rounded flex items-center justify-center text-white text-[10px] font-black leading-none">
          ≡
        </div>
        <div className="flex flex-col text-left leading-tight">
          <span className="font-black text-xs text-[#991b1b] dark:text-red-400 tracking-tighter">IDFC FIRST</span>
          <span className="text-[9px] font-bold text-slate-700 dark:text-slate-300">Bank</span>
        </div>
      </div>
    ),
  },
  {
    name: "Kotak",
    logo: (
      <div className="flex items-center gap-1.5">
        <div className="w-6 h-6 rounded-full bg-[#003366] text-white flex items-center justify-center text-xs font-bold">
          ∞
        </div>
        <span className="font-extrabold text-sm text-[#e11d48] dark:text-rose-400">kotak</span>
      </div>
    ),
  },
  {
    name: "Cipla",
    logo: (
      <span className="font-black text-base tracking-tight text-[#1e3a8a] dark:text-blue-300 flex items-center">
        C<span className="text-[#f97316]">i</span>pla
      </span>
    ),
  },
  {
    name: "CNBC",
    logo: (
      <div className="flex items-center gap-1.5">
        <div className="flex -space-x-1">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block" />
        </div>
        <span className="font-black text-sm tracking-tighter text-slate-900 dark:text-white">CNBC</span>
      </div>
    ),
  },
  {
    name: "DHL",
    logo: (
      <div className="px-2.5 py-0.5 bg-[#FFCC00] rounded flex items-center justify-center">
        <span className="font-black text-sm italic tracking-widest text-[#D40511]">DHL</span>
      </div>
    ),
  },
  {
    name: "MSRDC",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-6 h-5 bg-rose-600 rounded-t-full flex items-end justify-center">
          <div className="w-2 h-2 bg-white rounded-t-sm" />
        </div>
        <span className="font-extrabold text-xs tracking-wider text-slate-800 dark:text-slate-200">MSRDC</span>
      </div>
    ),
  },
  {
    name: "TCS",
    logo: (
      <div className="flex items-center gap-1.5">
        <span className="font-black text-base text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          tcs
        </span>
        <div className="flex flex-col text-[8px] font-bold text-slate-500 dark:text-slate-400 leading-none">
          <span>TATA</span>
          <span>CONSULTANCY</span>
          <span>SERVICES</span>
        </div>
      </div>
    ),
  },
  {
    name: "BOSCH",
    logo: (
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-[9px] font-extrabold text-slate-600 dark:text-slate-300">
          ⚙
        </div>
        <span className="font-black text-sm tracking-wider text-[#e11d48] dark:text-rose-500">BOSCH</span>
      </div>
    ),
  },
  {
    name: "NTPC",
    logo: (
      <div className="px-2 py-1 bg-[#0284c7] rounded text-white flex items-center gap-1 text-[11px] font-bold">
        <span>एनटीपीसी</span>
        <span className="font-black">NTPC</span>
      </div>
    ),
  },
  {
    name: "NSDL",
    logo: (
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs font-bold">
          ✹
        </div>
        <div className="flex flex-col text-left leading-none">
          <span className="font-extrabold text-xs text-[#7c2d12] dark:text-amber-400">NSDL</span>
          <span className="text-[7px] text-slate-400 font-medium">Technology, Trust &amp; Reach</span>
        </div>
      </div>
    ),
  },
];

const trustedBrandsRow2 = [
  {
    name: "Liberty General Insurance",
    logo: (
      <div className="flex items-center gap-1.5">
        <span className="text-sm">🗽</span>
        <div className="flex flex-col text-left leading-none">
          <span className="font-bold text-xs text-slate-900 dark:text-slate-100">Liberty</span>
          <span className="text-[8px] text-slate-500 dark:text-slate-400">General Insurance</span>
        </div>
      </div>
    ),
  },
  {
    name: "L&T Infotech",
    logo: (
      <div className="flex items-center gap-1.5">
        <div className="w-6 h-6 rounded-full bg-amber-400 text-slate-900 font-black text-[9px] flex items-center justify-center">
          L&amp;T
        </div>
        <span className="font-bold text-xs text-slate-800 dark:text-slate-200">Infotech</span>
      </div>
    ),
  },
  {
    name: "Mahindra Lifespaces",
    logo: (
      <div className="flex flex-col text-left leading-none">
        <span className="font-extrabold text-xs text-rose-600 dark:text-rose-400">Mahindra</span>
        <span className="text-[9px] text-slate-600 dark:text-slate-400 font-medium">Lifespaces</span>
      </div>
    ),
  },
  {
    name: "PHILIPS",
    logo: (
      <span className="font-black text-sm tracking-widest text-[#0066cc] dark:text-blue-400">
        PHILIPS
      </span>
    ),
  },
  {
    name: "Schneider Electric",
    logo: (
      <div className="flex items-center gap-1.5">
        <span className="font-black text-xs text-[#009944] dark:text-emerald-400">Schneider</span>
        <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-500">Electric</span>
      </div>
    ),
  },
  {
    name: "KEC International",
    logo: (
      <div className="flex flex-col text-left leading-none">
        <span className="font-black text-xs text-indigo-900 dark:text-indigo-300 tracking-wider">KEC</span>
        <span className="text-[7px] font-bold text-slate-500 dark:text-slate-400">INTERNATIONAL LIMITED</span>
      </div>
    ),
  },
  {
    name: "Lufthansa",
    logo: (
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center text-[#05164d] text-xs font-bold">
          🕊
        </div>
        <span className="font-extrabold text-xs text-[#05164d] dark:text-blue-300">Lufthansa</span>
      </div>
    ),
  },
  {
    name: "LUPIN",
    logo: (
      <div className="flex items-center gap-1">
        <span className="text-emerald-500 font-bold text-xs">🌿</span>
        <span className="font-black text-xs text-emerald-600 dark:text-emerald-400 tracking-wider">LUPIN</span>
      </div>
    ),
  },
  {
    name: "YES BANK",
    logo: (
      <div className="px-2 py-0.5 bg-sky-700 rounded flex items-center gap-1">
        <span className="text-rose-500 font-black text-xs">✓</span>
        <span className="font-black text-xs text-white tracking-tight">YES BANK</span>
      </div>
    ),
  },
  {
    name: "Varun Beverages",
    logo: (
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 bg-indigo-900 text-sky-400 font-black text-[9px] rounded flex items-center justify-center">
          V3
        </div>
        <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300">Varun Beverages Ltd</span>
      </div>
    ),
  },
  {
    name: "HSBC",
    logo: (
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-4 bg-white border border-rose-600 relative flex items-center justify-center overflow-hidden">
          <div className="w-3 h-3 bg-rose-600 rotate-45" />
        </div>
        <span className="font-black text-xs text-slate-900 dark:text-white tracking-widest">HSBC</span>
      </div>
    ),
  },
  {
    name: "Sun Pharma",
    logo: (
      <div className="flex items-center gap-1.5">
        <div className="w-5 h-5 rounded-full border-2 border-amber-500 flex items-center justify-center text-amber-500 text-[10px] font-bold">
          ☼
        </div>
        <span className="font-extrabold text-xs text-slate-900 dark:text-white tracking-tight">SUN PHARMA</span>
      </div>
    ),
  },
];

export default function Hero({ onOpenDemo }: HeroProps) {
  const [activeExampleIndex, setActiveExampleIndex] = useState(0);

  // Smooth Cursor Follow Animation State
  const mouseX = useMotionValue(600);
  const mouseY = useMotionValue(300);
  const mouseOpacity = useMotionValue(0);

  // Physics Spring Interpolation for Butter-Smooth Movement
  const springConfig = { damping: 28, stiffness: 160, mass: 0.6 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  const cursorOpacity = useSpring(mouseOpacity, { damping: 20, stiffness: 120 });

  // 3D Parallax Tilt based on Cursor Position
  const tiltX = useTransform(cursorY, [0, 800], [6, -6]);
  const tiltY = useTransform(cursorX, [0, 1400], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    mouseOpacity.set(1);
  };

  const handleMouseLeave = () => {
    mouseOpacity.set(0);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveExampleIndex((prev) => (prev + 1) % translationExamples.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentExample = translationExamples[activeExampleIndex];

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white dark:bg-[#05070d] text-slate-900 dark:text-slate-100 transition-colors duration-300 select-none"
    >
      
      {/* Background Lighting & Glows */}
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[500px] h-[400px] bg-indigo-500/10 dark:bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[450px] h-[350px] bg-blue-500/10 dark:bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Smooth Cursor-Follow Ambient Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full w-[450px] h-[450px] bg-gradient-to-tr from-indigo-500/20 via-blue-500/15 to-purple-500/20 dark:from-indigo-600/25 dark:via-blue-600/20 dark:to-purple-600/25 blur-[90px] z-0"
        style={{
          left: cursorX,
          top: cursorY,
          opacity: cursorOpacity,
        }}
      />
      <motion.div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full w-56 h-56 bg-indigo-400/20 dark:bg-indigo-400/30 blur-[45px] z-0"
        style={{
          left: cursorX,
          top: cursorY,
          opacity: cursorOpacity,
        }}
      />

      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-40 animate-grid-horizontal pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16 lg:mb-20">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-left">
            
            {/* Pill Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wide mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 animate-pulse" />
              <span>AI-POWERED TRANSLATION &amp; LOCALIZATION</span>
            </motion.div>

            {/* Main Headline matching LinguaFlow style */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] mb-6"
            >
              AI Powered Translation. <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 dark:from-indigo-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Human Perfected.
              </span>
            </motion.h1>

            {/* Description Text */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-xl mb-8"
            >
              We combine AI speed with human accuracy to deliver high-quality, domain-specific translations in 100+ languages for modern enterprises.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              <button
                onClick={onOpenDemo}
                className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base transition-all shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#solutions"
                className="px-7 py-4 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold text-base transition-all flex items-center justify-center gap-2.5 shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950/80 flex items-center justify-center">
                  <Play className="w-3 h-3 text-indigo-600 dark:text-indigo-400 fill-current translate-x-0.5" />
                </div>
                <span>How It Works</span>
              </a>
            </motion.div>

            {/* Mini Trust Highlights */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-800/80 pt-6"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>99.8% Verified Accuracy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-indigo-500" />
                <span>Enterprise SOC 2 Security</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: LinguaFlow Interactive Translation Visual Card with 3D Cursor Parallax */}
          <div className="lg:col-span-5 relative flex justify-center items-center perspective-1000">
            
            {/* Outer Container with Soft Glow and Cursor 3D Parallax Tilt */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                rotateX: tiltX,
                rotateY: tiltY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full max-w-lg transition-transform duration-200 ease-out"
            >
              
              {/* Backing Card Decorative Blur Shape */}
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-3xl blur-xl opacity-20 dark:opacity-30 pointer-events-none" />

              {/* Main Window Card Frame */}
              <div className="relative rounded-3xl bg-slate-50/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-2xl backdrop-blur-xl">
                
                {/* Header Window Bar */}
                <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span>AI Engine Active</span>
                  </div>
                </div>

                {/* Central Translation Interactive Card */}
                <div className="relative my-4 flex flex-col items-center">
                  
                  {/* Floating 3D Main Icon Card (Aa <-> 支) */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full p-6 rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 text-white shadow-xl shadow-indigo-600/30 relative overflow-hidden"
                  >
                    {/* Glassy Background Overlay */}
                    <div className="absolute inset-0 bg-white/5 pointer-events-none" />
                    
                    {/* Card Content Header */}
                    <div className="flex items-center justify-between text-xs text-indigo-100/90 mb-4 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Bot className="w-4 h-4 text-indigo-200" />
                        AI Instant Translation
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/20 text-[10px] uppercase font-bold tracking-wider">
                        {currentExample.sourceCode} ➔ {currentExample.targetCode}
                      </span>
                    </div>

                    {/* Source & Target Main Glyph Icons */}
                    <div className="flex items-center justify-around py-3">
                      
                      {/* Source Glyph */}
                      <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center shadow-inner">
                        <span className="text-3xl font-extrabold tracking-tight">Aa</span>
                      </div>

                      {/* Animated Arrow Icon */}
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shadow-md">
                        <ArrowRightLeft className="w-5 h-5 text-white animate-pulse" />
                      </div>

                      {/* Target Glyph */}
                      <AnimatePresence mode="wait">
                        <motion.div 
                          key={currentExample.targetChar}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-16 h-16 rounded-2xl bg-white/25 border border-white/30 flex items-center justify-center shadow-inner"
                        >
                          <span className="text-3xl font-bold">{currentExample.targetChar}</span>
                        </motion.div>
                      </AnimatePresence>

                    </div>

                    {/* Dynamic Text Output Preview */}
                    <div className="mt-4 pt-4 border-t border-white/15 text-left">
                      <div className="text-[11px] text-indigo-200 uppercase font-semibold tracking-wider mb-1">
                        Live Preview ({currentExample.targetLang})
                      </div>
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={currentExample.targetText}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.3 }}
                          className="text-sm font-medium text-white/95 leading-snug line-clamp-2"
                        >
                          "{currentExample.targetText}"
                        </motion.p>
                      </AnimatePresence>
                    </div>

                  </motion.div>

                  {/* Floating Green Badge: Human Review */}
                  <motion.div 
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -bottom-6 -right-3 sm:-right-4 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-xl flex items-center gap-2.5 z-20"
                  >
                    <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight flex items-center gap-1">
                        <span>Human Review</span>
                        <UserCheck className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                        Linguistic Specialist Verified
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Left Badge: Languages Badge */}
                  <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -top-4 -left-3 sm:-left-4 px-3.5 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg flex items-center gap-2 z-20 text-xs font-semibold text-slate-800 dark:text-slate-200"
                  >
                    <Languages className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span>100+ Dialects</span>
                  </motion.div>

                </div>

              </div>
            </motion.div>

          </div>

        </div>

        {/* Scrollable Prestigious Clients Brands Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full pt-6 flex flex-col items-center"
        >
          {/* Top Pill Badge matching image */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/60 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
            <span>SOME OF OUR PRESTIGIOUS CLIENTS</span>
          </div>

          {/* Marquee Row 1 (Scrolling Left to Right) */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] mb-4">
            <div className="flex gap-4 animate-marquee-reverse hover:[animation-play-state:paused] py-1.5">
              {[...trustedBrandsRow1, ...trustedBrandsRow1, ...trustedBrandsRow1, ...trustedBrandsRow1].map((brand, idx) => (
                <div 
                  key={idx}
                  className="flex-shrink-0 flex items-center justify-center px-6 py-4 h-16 min-w-[170px] rounded-xl bg-white dark:bg-[#0b0f19] border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200 cursor-pointer"
                >
                  {brand.logo}
                </div>
              ))}
            </div>
          </div>

        
        </motion.div>

      </div>
    </section>
  );
}
