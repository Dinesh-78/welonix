"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import IntelligenceLayer from "./components/IntelligenceLayer";
import CoreSolutions from "./components/CoreSolutions";
import ProcessPipeline from "./components/ProcessPipeline";
import HumanPlusAI from "./components/HumanPlusAI";
import IndustriesSection from "./components/IndustriesSection";
import ResourcesSection from "./components/ResourcesSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import InteractiveDemoModal from "./components/InteractiveDemoModal";

export default function Home() {
  const [demoModalOpen, setDemoModalOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("welonix-theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // White mode by default as requested
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("welonix-theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#05070d] text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-600/20 selection:text-blue-600 overflow-x-hidden transition-colors duration-300">
      
      {/* Primary Navigation Bar */}
      <Navbar 
        onOpenDemo={() => setDemoModalOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        {/* 01 - Hero */}
        <Hero onOpenDemo={() => setDemoModalOpen(true)} />

        {/* 02 - Trust & Credibility Ticker */}
        <TrustBar />

        {/* 04 - The WELONIX Intelligence Layer */}
        <IntelligenceLayer />

        {/* 03 - Core Solutions Hub */}
        <CoreSolutionsHub />

        {/* 05 - How WELONIX Works Process Pipeline */}
        <ProcessPipeline />

        {/* 07 - Human + AI Brand Differentiator */}
        <HumanPlusAI />

        {/* 06 - Industry Specializations */}
        <IndustriesSection />


        {/* 09 - Resources & Technical Research */}
        <ResourcesSection />

        {/* 10 - Final CTA */}
        <FinalCTA onOpenDemo={() => setDemoModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Blueprint & Consultation Modal */}
      <InteractiveDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />

    </div>
  );
}

function CoreSolutionsHub() {
  return <CoreSolutions />;
}
