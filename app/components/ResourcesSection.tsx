"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Search,
  ChevronDown,
  Sparkles,
  ThumbsUp,
  ThumbsDown,
  CheckCircle2,
  ArrowRight,
  X
} from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: "AI & RLHF" | "Security & Compliance" | "Multilingual & Data" | "Operations & SLAs";
  tags: string[];
}

const FAQS_DATA: FAQItem[] = [
  {
    id: 1,
    category: "AI & RLHF",
    question: "What makes the WELONIX Human + AI approach different from automated translation or raw crowdsourced annotations?",
    answer: "WELONIX couples frontier model automation with a rigorously vetted global network of subject-matter specialists (physicians, legal scholars, computational linguists, and senior AI engineers). Unlike standard crowdsourced platforms where data quality fluctuates, our domain specialists operate under strict double-blind review, ISO 17100, and ISO 18587 standards to achieve 99.5%+ annotation and evaluation accuracy.",
    tags: ["Human-in-the-Loop", "RLHF", "Domain Experts"]
  },
  {
    id: 2,
    category: "Security & Compliance",
    question: "How do you protect client IP, confidential training data, and ensure compliance with HIPAA, GDPR, and SOC 2?",
    answer: "We enforce a zero-trust, Zero Data Retention policy: customer data is strictly isolated, never cached beyond processing, and never used to train external models. Our infrastructure is SOC 2 Type II certified with customer-dedicated VPC peering and air-gapped processing options. Data is encrypted using AES-256 at rest and TLS 1.3 in transit, with full support for HIPAA Business Associate Agreements (BAA).",
    tags: ["SOC 2 Type II", "HIPAA", "Zero-Retention", "VPC Peering"]
  },
  {
    id: 3,
    category: "AI & RLHF",
    question: "What formats, schemas, and cloud storage providers do you support for feeding training datasets?",
    answer: "We support end-to-end integration with AWS S3, Google Cloud Storage, Azure Blob, Snowflake, and Hugging Face Hub. We natively deliver formatted datasets in JSON, JSONL, Parquet, CoNLL, Arrow, and custom proprietary schemas configured directly for fine-tuning pipelines on PyTorch, Hugging Face, OpenAI, or Anthropic models.",
    tags: ["Data Pipelines", "S3 / GCS", "JSONL", "Parquet"]
  },
  {
    id: 4,
    category: "Multilingual & Data",
    question: "How many global languages and regional dialects does WELONIX support?",
    answer: "Our network covers over 120 languages and 300+ regional dialects. Beyond mainstream tier-1 languages (Mandarin, Spanish, Arabic, German, Japanese), we specialize in sourcing and annotating low-resource, regional, and colloquial linguistic datasets across Southeast Asia, Sub-Saharan Africa, and Latin America with verified native speakers.",
    tags: ["120+ Languages", "Low-Resource Dialects", "Native Linguists"]
  },
  {
    id: 5,
    category: "Operations & SLAs",
    question: "What are your standard delivery turnaround times and enterprise SLAs?",
    answer: "Turnaround times vary by pipeline complexity, volume, and review tiers. High-urgency batches can be processed under 24-hour turnaround SLAs, while multi-million token RLHF and localization initiatives are executed in structured multi-week sprints with guaranteed 99.99% API uptime, transparent milestone tracking, and a dedicated Solutions Architect.",
    tags: ["99.99% SLA", "24hr Turnaround", "Dedicated PM"]
  },
  {
    id: 6,
    category: "AI & RLHF",
    question: "Can WELONIX perform custom AI red-teaming, adversarial safety evaluation, and bias auditing?",
    answer: "Yes. Our AI Safety & Red-Teaming unit simulates multi-turn adversarial interactions, prompt injections, cultural bias extraction, and jailbreak vulnerabilities across dozens of cultural contexts. We deliver detailed telemetry, safety scoring matrices, and actionable remediation guidelines prior to foundation model deployment.",
    tags: ["Red-Teaming", "Adversarial Testing", "Model Safety"]
  },
  {
    id: 7,
    category: "Operations & SLAs",
    question: "How does enterprise pricing work? Can we start with a Proof of Concept (PoC)?",
    answer: "We offer tailored engagement structures including milestone-based volume pricing, dedicated dedicated-team (FTE) staffing, and flexible enterprise consumption credits. We actively support complimentary Proof of Concept (PoC) sample batches so your machine learning and localization teams can inspect output quality before scaling commitments.",
    tags: ["Pilot PoC", "Flexible Pricing", "Transparent Billing"]
  },
  {
    id: 8,
    category: "Multilingual & Data",
    question: "Do you handle official, notarized, and legally certified document translations?",
    answer: "Yes. In addition to AI datasets, our Global Document Bureau provides certified, notarized, and apostilled translations recognized by international courts, regulatory bodies, patent offices, and embassies globally, accompanied by sworn affidavits of linguistic accuracy.",
    tags: ["Certified Translation", "Apostille", "Court Admissible"]
  }
];

const CATEGORIES = [
  "All",
  "AI & RLHF",
  "Security & Compliance",
  "Multilingual & Data",
  "Operations & SLAs"
] as const;

interface ResourcesSectionProps {
  onOpenDemo?: () => void;
}

export default function ResourcesSection({ onOpenDemo }: ResourcesSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openIds, setOpenIds] = useState<number[]>([1]); // First FAQ open by default
  const [feedbackState, setFeedbackState] = useState<Record<number, "yes" | "no">>({});

  // Filter FAQs based on search query and category
  const filteredFaqs = useMemo(() => {
    return FAQS_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      return (
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [searchQuery, selectedCategory]);

  const toggleFaq = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleExpandAll = () => {
    if (openIds.length === filteredFaqs.length) {
      setOpenIds([]);
    } else {
      setOpenIds(filteredFaqs.map((f) => f.id));
    }
  };

  const handleFeedback = (id: number, type: "yes" | "no") => {
    setFeedbackState((prev) => ({ ...prev, [id]: type }));
  };

  return (
    <section
      id="faq"
      className="relative py-24 bg-slate-50/50 dark:bg-[#05070d] text-slate-900 dark:text-slate-100 transition-colors duration-300 scroll-mt-20"
    >
      {/* Target anchor for legacy #resources links */}
      <span id="resources" className="absolute -top-24 opacity-0 pointer-events-none" />

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 text-xs font-mono font-medium">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Answers &amp; Technical{" "}
            <span className="text-blue-600 dark:text-blue-400">Specifications</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Everything you need to know about our human-in-the-loop AI pipelines, security protocols, multilingual dataset sourcing, and enterprise SLAs.
          </p>
        </div>

        {/* Search & Category Filter Control Hub */}
        <div className="space-y-4">
          
          {/* Live Search Input */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search questions by topic, keyword, or standard (e.g., 'HIPAA', 'RLHF', 'SLA', 'JSONL')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills & Expand All Toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              {CATEGORIES.map((cat) => {
                const count =
                  cat === "All"
                    ? FAQS_DATA.length
                    : FAQS_DATA.filter((f) => f.category === cat).length;
                const isActive = selectedCategory === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all border flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? "bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-600/25"
                        : "bg-white dark:bg-[#0b0f19] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/40"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {filteredFaqs.length > 0 && (
              <button
                onClick={handleExpandAll}
                className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shrink-0 cursor-pointer"
              >
                {openIds.length === filteredFaqs.length
                  ? "Collapse All"
                  : "Expand All"}
              </button>
            )}
          </div>
        </div>

        {/* FAQ Accordion List */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-3xl bg-white dark:bg-[#0b0f19] border border-dashed border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              No matching questions found
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
              We couldn’t find an answer matching &ldquo;{searchQuery}&rdquo;. Try adjusting your keywords or clearing the search filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-sm cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="space-y-3.5">
            {filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              const userVote = feedbackState[faq.id];

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-white dark:bg-[#080c18] border-blue-200 dark:border-blue-900/60 shadow-md shadow-blue-600/5 ring-1 ring-blue-500/10"
                      : "bg-white dark:bg-[#0b0f19] border-slate-200 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  {/* Accordion Question Header */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <div className="pr-2">
                      <h3
                        className={`text-base sm:text-lg font-bold transition-colors leading-snug ${
                          isOpen
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                        isOpen
                          ? "bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 rotate-180"
                          : "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Accordion Answer Content */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-100 dark:border-slate-800/60 space-y-4">
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>

                      {/* Tag Badges */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {faq.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Interactive Feedback & Helpfulness Bar */}
                      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                          {userVote ? (
                            <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              Thank you for your feedback!
                            </span>
                          ) : (
                            <>
                              <span className="font-medium">Was this answer helpful?</span>
                              <button
                                onClick={() => handleFeedback(faq.id, "yes")}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 transition-all font-mono cursor-pointer"
                              >
                                <ThumbsUp className="w-3 h-3" />
                                <span>Yes</span>
                              </button>
                              <button
                                onClick={() => handleFeedback(faq.id, "no")}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-300 dark:hover:border-rose-700 transition-all font-mono cursor-pointer"
                              >
                                <ThumbsDown className="w-3 h-3" />
                                <span>No</span>
                              </button>
                            </>
                          )}
                        </div>

                        <Link
                          href="/services"
                          className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                        >
                          <span>Explore related services</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Still Have Questions CTA Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-600/10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Background Decorative Rings */}
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />

          <div className="space-y-2 text-center md:text-left relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-mono font-medium backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span>Direct AI Advisory &amp; Architecture</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Have a question not listed here?
            </h3>
            <p className="text-sm text-blue-100 leading-relaxed">
              Our Senior Solutions Architects can review your custom dataset requirements, security compliance needs, or design a custom Proof of Concept.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 w-full sm:w-auto shrink-0">
            {onOpenDemo && (
              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 transition-all shadow-md active:scale-95 text-center cursor-pointer"
              >
                Schedule Consultation
              </button>
            )}
            <Link
              href="/services"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-800/60 hover:bg-blue-800/80 border border-white/20 text-white font-semibold text-sm transition-all text-center flex items-center justify-center gap-1.5"
            >
              <span>View All 60+ Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

