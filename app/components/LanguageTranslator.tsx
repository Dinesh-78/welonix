"use client";

import { useState, useEffect, useRef } from "react";
import { Globe, ChevronDown, Check, Search } from "lucide-react";

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  shortCode: string;
}

export const INDIAN_LANGUAGES: Language[] = [
  { code: "en", name: "English", nativeName: "English", shortCode: "EN" },
  { code: "hi", name: "Hindi", nativeName: "हिंदी", shortCode: "HI" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు", shortCode: "TE" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்", shortCode: "TA" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা", shortCode: "BN" },
  { code: "mr", name: "Marathi", nativeName: "मराठी", shortCode: "MR" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી", shortCode: "GU" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ", shortCode: "KN" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം", shortCode: "ML" },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", shortCode: "PA" },
  { code: "or", name: "Odia", nativeName: "ଓଡ଼ିଆ", shortCode: "OR" },
  { code: "as", name: "Assamese", nativeName: "অসমীয়া", shortCode: "AS" },
  { code: "ur", name: "Urdu", nativeName: "اردو", shortCode: "UR" },
  { code: "sa", name: "Sanskrit", nativeName: "संस्कृतम्", shortCode: "SA" },
  { code: "ne", name: "Nepali", nativeName: "नेपाली", shortCode: "NE" },
  { code: "mai", name: "Maithili", nativeName: "मैथिली", shortCode: "MAI" },
  { code: "sd", name: "Sindhi", nativeName: "સિંધિ", shortCode: "SD" },
];

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
  const [selectedLang, setSelectedLang] = useState<Language>(INDIAN_LANGUAGES[0]);
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
      const match = googTransCookie.match(/\/en\/([a-z]{2,3})/i);
      if (match && match[1]) {
        const langCode = match[1].toLowerCase();
        const found = INDIAN_LANGUAGES.find((l) => l.code === langCode);
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
              includedLanguages: INDIAN_LANGUAGES.map((l) => l.code).join(","),
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

    // Helper to set cookies across domain variations
    const setCookie = (cookieName: string, value: string, domain?: string) => {
      let cookieStr = `${cookieName}=${value}; path=/;`;
      if (domain) cookieStr += ` domain=${domain};`;
      document.cookie = cookieStr;
    };

    if (lang.code === "en") {
      // Reset translation
      setCookie("googtrans", "/en/en");
      setCookie("googtrans", "/en/en", hostname);
    } else {
      setCookie("googtrans", `/en/${lang.code}`);
      setCookie("googtrans", `/en/${lang.code}`, hostname);
    }

    // Dispatch change event to hidden Google Translate select box if available
    const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (combo) {
      combo.value = lang.code;
      combo.dispatchEvent(new Event("change"));
    } else {
      // Fallback: Reload page to apply google translate cookie
      window.location.reload();
    }
  };

  const filteredLanguages = INDIAN_LANGUAGES.filter(
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
                {INDIAN_LANGUAGES.length} Languages
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
