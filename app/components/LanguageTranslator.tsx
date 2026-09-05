"use client";

import { useState, useEffect, useRef } from "react";
import { Globe, ChevronDown, Check, Search } from "lucide-react";

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  shortCode: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: "en", name: "English", nativeName: "English", shortCode: "EN" },
  { code: "fr", name: "French", nativeName: "Français", shortCode: "FR" },
  { code: "de", name: "German", nativeName: "Deutsch", shortCode: "DE" },
  { code: "es", name: "Spanish", nativeName: "Español", shortCode: "ES" },
  { code: "it", name: "Italian", nativeName: "Italiano", shortCode: "IT" },
  { code: "zh-CN", name: "Chinese", nativeName: "中文", shortCode: "ZH" },
  { code: "ja", name: "Japanese", nativeName: "日本語", shortCode: "JA" },
  { code: "ru", name: "Russian", nativeName: "Русский", shortCode: "RU" },
  { code: "pt", name: "Portuguese", nativeName: "Português", shortCode: "PT" }
];

export const INDIAN_LANGUAGES = SUPPORTED_LANGUAGES;

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

interface LanguageTranslatorProps {
  isMobile?: boolean;
}

export default function LanguageTranslator({ isMobile = false }: LanguageTranslatorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language>(SUPPORTED_LANGUAGES[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Initialize Google Translate Script
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check existing cookie to set active language label
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
      return null;
    };

    const googTransCookie = getCookie("googtrans");
    if (googTransCookie) {
      const match = googTransCookie.match(/\/en\/([a-z0-9-]{2,5})/i);
      if (match && match[1]) {
        const langCode = match[1].toLowerCase();
        const found = SUPPORTED_LANGUAGES.find((l) => l.code.toLowerCase() === langCode);
        if (found) {
          setSelectedLang(found);
        }
      }
    }

    // Add hidden container if not present
    if (!document.getElementById("google_translate_element")) {
      const div = document.createElement("div");
      div.id = "google_translate_element";
      div.style.display = "none";
      document.body.appendChild(div);
    }

    // Inject Google Translate script if not present
    if (!document.getElementById("google-translate-script")) {
      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: SUPPORTED_LANGUAGES.map((l) => l.code).join(","),
              autoDisplay: false,
            },
            "google_translate_element"
          );
        }
      };

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleSelectLanguage = (lang: Language) => {
    setSelectedLang(lang);
    setIsOpen(false);

    if (typeof window === "undefined") return;

    const hostname = window.location.hostname;
    const cookieValue = lang.code === "en" ? "/en/en" : `/en/${lang.code}`;

    // Set cookie across root path and domains
    document.cookie = `googtrans=${cookieValue}; path=/;`;
    if (hostname && hostname !== "localhost") {
      document.cookie = `googtrans=${cookieValue}; path=/; domain=.${hostname};`;
      document.cookie = `googtrans=${cookieValue}; path=/; domain=${hostname};`;
    }

    if (lang.code === "en") {
      // Clear cookie when resetting to English
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      if (hostname && hostname !== "localhost") {
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${hostname};`;
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${hostname};`;
      }
    }

    // Attempt to update Google Translate select element if initialized
    const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (combo) {
      combo.value = lang.code;
      combo.dispatchEvent(new Event("change"));
    }

    // Force page reload to guarantee instant single-click translation
    window.location.reload();
  };

  const filteredLanguages = SUPPORTED_LANGUAGES.filter(
    (l) =>
      l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.nativeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.shortCode.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button - Matches design in reference image */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
          isOpen
            ? "bg-slate-100 dark:bg-white/10 text-blue-600 dark:text-blue-400"
            : "text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/5"
        }`}
        title="Translate Website Language"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4 text-slate-600 dark:text-slate-300 shrink-0" />
        <span className="font-bold text-xs sm:text-sm tracking-wide uppercase">
          {selectedLang.shortCode}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-blue-600 dark:text-blue-400" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute ${
            isMobile ? "left-0 mt-2" : "right-0 top-full mt-2"
          } w-64 rounded-2xl bg-white dark:bg-[#070b16] border border-slate-200 dark:border-blue-900/40 shadow-2xl shadow-slate-400/20 dark:shadow-blue-950/80 overflow-hidden z-[60] animate-in fade-in slide-in-from-top-2 duration-150`}
        >
          {/* Header */}
          <div className="p-3 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                Select Language
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-medium">
                {SUPPORTED_LANGUAGES.length} Languages
              </span>
            </div>

            {/* Search filter input */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search language..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-white dark:bg-[#05070d] border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                autoFocus
              />
            </div>
          </div>

          {/* Language Options List */}
          <div className="max-h-64 overflow-y-auto p-1.5 space-y-0.5 scrollbar-thin">
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((lang) => {
                const isSelected = selectedLang.code === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleSelectLanguage(lang)}
                    className={`w-full text-left px-3 py-2 rounded-xl transition-all flex items-center justify-between text-xs group ${
                      isSelected
                        ? "bg-blue-600 text-white font-medium shadow-sm shadow-blue-600/30"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span
                        className={`text-[10px] font-mono font-bold w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${
                          isSelected
                            ? "bg-white/20 text-white"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                        }`}
                      >
                        {lang.shortCode}
                      </span>
                      <div className="flex flex-col min-w-0">
                        <span className="truncate font-medium">{lang.name}</span>
                        <span
                          className={`text-[10px] truncate ${
                            isSelected
                              ? "text-blue-100"
                              : "text-slate-400 dark:text-slate-500"
                          }`}
                        >
                          {lang.nativeName}
                        </span>
                      </div>
                    </div>

                    {isSelected && <Check className="w-4 h-4 shrink-0 text-white ml-2" />}
                  </button>
                );
              })
            ) : (
              <div className="py-4 text-center text-xs text-slate-400">
                No language found matching "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

