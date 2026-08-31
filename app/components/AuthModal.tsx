"use client";

import { useState } from "react";
import { 
  X, 
  Lock, 
  Mail, 
  ArrowRight, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2,
  Building2,
  Globe2,
  KeyRound
} from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (userProfile?: { name: string; email: string; company: string; role: string }) => void;
}

export default function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activePreset, setActivePreset] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDemoSignIn = (preset: "enterprise" | "localization") => {
    setIsLoading(true);
    setActivePreset(preset);

    setTimeout(() => {
      setIsLoading(false);
      if (preset === "enterprise") {
        onSuccess({
          name: "Alex Morgan",
          email: "alex.morgan@acmeglobal.ai",
          company: "Acme Global AI",
          role: "Head of AI Infrastructure",
        });
      } else {
        onSuccess({
          name: "Elena Rostova",
          email: "elena.r@welonix-partner.io",
          company: "Vertex Localization Lab",
          role: "Lead Data Scientist",
        });
      }
    }, 800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onSuccess({
        name: email ? email.split("@")[0] : "Client User",
        email: email || "client@welonix.ai",
        company: company || "Enterprise AI Partner",
        role: "Client Administrator",
      });
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-blue-900/40 shadow-2xl shadow-blue-950/50 p-6 sm:p-8 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
          aria-label="Close Auth Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-2xl bg-blue-600/10 dark:bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              WELONIX Client Portal
              <span className="text-[10px] font-mono uppercase bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-md border border-blue-200 dark:border-blue-800">
                Enterprise
              </span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Sign in to manage AI document workflows &amp; live processing progress
            </p>
          </div>
        </div>

        {/* Quick Demo Sign In Cards */}
        <div className="mb-6 space-y-2">
          <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 font-semibold mb-2">
            Instant Demo Sign In (1-Click Access)
          </p>
          
          <button
            type="button"
            onClick={() => handleDemoSignIn("enterprise")}
            disabled={isLoading}
            className="w-full p-3 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50 hover:border-blue-500 dark:hover:border-blue-500 transition-all flex items-center justify-between text-left group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/20">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  Acme Global AI (Enterprise Client)
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  alex.morgan@acmeglobal.ai &bull; Multilingual Document Processing
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
          </button>

          <button
            type="button"
            onClick={() => handleDemoSignIn("localization")}
            disabled={isLoading}
            className="w-full p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all flex items-center justify-between text-left group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-600/20">
                <Globe2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Vertex Localization Lab
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  elena.r@welonix-partner.io &bull; LLM Fine-Tuning Pipeline
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
          </button>
        </div>

        {/* Divider */}
        <div className="relative flex items-center my-5">
          <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
          <span className="flex-shrink mx-3 text-[11px] font-mono text-slate-400 uppercase">Or custom credentials</span>
          <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
        </div>

        {/* Custom Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Company / Organization Name
              </label>
              <div className="relative">
                <Building2 className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Nexus Tech AI"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-500"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Work Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
              <input
                type="email"
                required
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
              <input
                type="password"
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 disabled:opacity-70 mt-2"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <span>{isSignUp ? "Create Client Account" : "Sign In & Open Dashboard"}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Modal Footer Toggle */}
        <div className="mt-5 text-center">
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-xs text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 font-medium transition-colors"
          >
            {isSignUp ? "Already have an enterprise account? Sign in" : "Need a new enterprise account? Register here"}
          </button>
        </div>

        {/* Security Badge */}
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-center gap-2 text-[11px] font-mono text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
          <span>SOC 2 Type II Certified &bull; 256-Bit Encrypted Auth Session</span>
        </div>
      </div>
    </div>
  );
}
