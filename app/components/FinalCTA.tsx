"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, Zap, Lock, Globe } from "lucide-react";

interface FinalCTAProps {
  onOpenDemo: () => void;
}

export default function FinalCTA({ onOpenDemo }: FinalCTAProps) {
  return (
    <section className="relative py-28 bg-white dark:bg-[#05070d] text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-hidden">
      {/* Background Ambient Spotlights */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/10 dark:bg-blue-600/15 blur-[140px] rounded-full pointer-events-none"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.6, 0.85, 0.6],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated Container Card */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="group/card relative p-8 sm:p-14 md:p-16 rounded-3xl bg-slate-50/90 dark:bg-[#0b0f19]/90 border border-slate-200/80 dark:border-slate-800/80 shadow-xl dark:shadow-2xl backdrop-blur-xl overflow-hidden text-center"
        >
          {/* Animated Border Beam Trace Effect */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden">
            <motion.div
              className="absolute -top-[100%] left-0 w-full h-[200%] bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.25),transparent_70%)]"
              animate={{
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Top Glowing Beam Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
          </div>

          {/* Grid Background Pattern */}
          <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-30 pointer-events-none" />

          {/* Corner Tech Decorative Elements */}
          <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-blue-500/40 rounded-tl-sm pointer-events-none" />
          <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-blue-500/40 rounded-tr-sm pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-blue-500/40 rounded-bl-sm pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-blue-500/40 rounded-br-sm pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">


            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 max-w-3xl"
            >
              Build Better AI With <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 bg-clip-text text-transparent">
                Better Intelligence.
              </span>
            </motion.h2>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300 text-base sm:text-lg mb-10 leading-relaxed font-sans"
            >
              Bring together artificial intelligence, linguistic semantics, multi-modal data curation, and domain human expertise with WELONIX.
            </motion.p>

            {/* CTA Buttons & White Lighting Beam Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-5 w-full"
            >
              {/* Special Wrapper for Book A Demo Button with Overhead White Lighting */}
              <div className="relative group/light-wrapper flex flex-col items-center w-full sm:w-auto">
                {/* 1. OVERHEAD WHITE LIGHTING EMITTER FIXTURE */}
                <div className="relative z-20 flex flex-col items-center">
                  {/* Overhead White Halo Glow */}
                  <motion.div
                    className="absolute -top-4 w-32 h-8 bg-white rounded-full blur-md opacity-90"
                    animate={{
                      opacity: [0.7, 1, 0.7],
                      scaleX: [0.95, 1.15, 0.95],
                    }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  {/* Central Radiant Light Source Bar */}
                  <div className="w-20 h-1.5 bg-white rounded-full shadow-[0_0_15px_#ffffff,0_0_30px_#ffffff,0_0_45px_#ffffff] z-10" />
                </div>

                {/* 2. CONICAL WHITE SPOTLIGHT BEAM SHINING DOWN ONTO BUTTON */}
                <motion.div
                  className="w-36 h-10 pointer-events-none -mt-1 relative z-10 overflow-hidden"
                  animate={{
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Tapered White Light Beam Polygon */}
                  <div
                    className="w-full h-full bg-gradient-to-b from-white via-white/50 to-transparent blur-[2px]"
                    style={{ clipPath: "polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)" }}
                  />
                  {/* Intense Laser-White Core Beam */}
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-transparent blur-[0.5px]"
                    style={{ clipPath: "polygon(42% 0%, 58% 0%, 85% 100%, 15% 100%)" }}
                  />
                  {/* Floating White Light Particle Rays */}
                  <motion.div
                    className="absolute left-1/2 top-0 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_#ffffff]"
                    animate={{ y: [0, 28], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeIn" }}
                  />
                  <motion.div
                    className="absolute left-1/3 top-1 -translate-x-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_6px_#ffffff]"
                    animate={{ y: [0, 24], opacity: [0, 0.9, 0] }}
                    transition={{ duration: 2.1, delay: 0.5, repeat: Infinity, ease: "easeIn" }}
                  />
                  <motion.div
                    className="absolute right-1/3 top-0 -translate-x-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_6px_#ffffff]"
                    animate={{ y: [0, 26], opacity: [0, 0.95, 0] }}
                    transition={{ duration: 1.4, delay: 0.9, repeat: Infinity, ease: "easeIn" }}
                  />
                </motion.div>

                {/* 3. BOOK A DEMO BUTTON illuminated by the White Overhead Spotlight */}
                <motion.button
                  onClick={onOpenDemo}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full sm:w-auto px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-600 text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.45),0_10px_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.7),0_12px_40px_rgba(37,99,235,0.6)] border-t-2 border-t-white overflow-hidden flex items-center justify-center gap-2.5 group cursor-pointer"
                >
                  {/* Top Edge White Reflection Glow under the light fixture */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-white/40 via-white to-white/40 shadow-[0_2px_8px_#ffffff]" />

                  {/* Animated Light Sweep Across Button Surface */}
                  <motion.div
                    className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                    animate={{ x: ["-150%", "300%"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
                  />

                  
                  <span className="relative z-10 tracking-wide font-semibold">Book a demo</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </div>

              {/* Secondary Action Button */}
              <div className="w-full sm:w-auto self-end md:mb-[1px]">
                <motion.button
                  onClick={onOpenDemo}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold text-sm transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2.5 cursor-pointer group"
                >
                  <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>Schedule Architecture Review</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Feature Highlights Grid Pill bar inside container */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-slate-200/70 dark:border-slate-800/70 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl text-left"
            >
              <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>99.8% Precision SLA</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                <Globe className="w-4 h-4 text-blue-500 shrink-0" />
                <span>50+ Dialects & Languages</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                <Lock className="w-4 h-4 text-blue-500 shrink-0" />
                <span>SOC2 & ISO Compliant</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                <Zap className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Rapid Model Fine-Tuning</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

