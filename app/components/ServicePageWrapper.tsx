"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InteractiveDemoModal from "./InteractiveDemoModal";
import AuthModal from "./AuthModal";
import ClientDashboardModal from "./ClientDashboardModal";
import ServiceQuoteModal from "./ServiceQuoteModal";

export interface ServicePageWrapperRenderProps {
  onOpenQuote: () => void;
  onOpenDemo: () => void;
}

interface ServicePageWrapperProps {
  children: React.ReactNode | ((props: ServicePageWrapperRenderProps) => React.ReactNode);
  activeServiceName?: string;
  activeCategoryName?: string;
}

export default function ServicePageWrapper({
  children,
  activeServiceName,
  activeCategoryName,
}: ServicePageWrapperProps) {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  
  const [userProfile, setUserProfile] = useState({
    name: "Alex Morgan",
    email: "alex.morgan@acmeglobal.ai",
    company: "Acme Global AI",
    role: "Head of AI Infrastructure",
  });
  
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

  const handleAuthSuccess = (profile?: { name: string; email: string; company: string; role: string }) => {
    if (profile) {
      setUserProfile(profile);
    }
    setAuthModalOpen(false);
    setDashboardOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#05070d] text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-600/20 selection:text-blue-600 overflow-x-hidden transition-colors duration-300">
      <Navbar
        onOpenDemo={() => setDemoModalOpen(true)}
        onOpenAuth={() => setAuthModalOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="pt-24 pb-16">
        {typeof children === "function"
          ? children({
              onOpenQuote: () => setQuoteModalOpen(true),
              onOpenDemo: () => setDemoModalOpen(true),
            })
          : children}
      </main>

      <Footer />

      <InteractiveDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />

      <ClientDashboardModal
        isOpen={dashboardOpen}
        onClose={() => setDashboardOpen(false)}
        userProfile={userProfile}
      />

      <ServiceQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        serviceName={activeServiceName}
        categoryName={activeCategoryName}
      />
    </div>
  );
}
