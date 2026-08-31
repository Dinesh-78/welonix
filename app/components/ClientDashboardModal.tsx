"use client";

import { useState, useEffect } from "react";
import { 
  X, 
  Upload, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Download, 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  Languages, 
  Database, 
  ArrowRight, 
  RefreshCw, 
  BarChart3, 
  Settings, 
  FolderCheck, 
  Zap, 
  FileCode, 
  Layers,
  LogOut,
  AlertCircle,
  FileCheck,
  Search,
  ChevronRight,
  User,
  Sliders,
  CheckCircle,
  Check
} from "lucide-react";

interface ClientDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  userProfile?: {
    name: string;
    email: string;
    company: string;
    role: string;
  };
}

interface ProcessJob {
  id: string;
  fileName: string;
  fileSize: string;
  service: string;
  targetLangs: string[];
  status: "processing" | "completed" | "queued";
  progress: number;
  currentStep: number;
  tokensProcessed: number;
  totalTokens: number;
  speed: string;
  accuracy: string;
  timestamp: string;
}

export default function ClientDashboardModal({
  isOpen,
  onClose,
  userProfile = {
    name: "Alex Morgan",
    email: "alex.morgan@acmeglobal.ai",
    company: "Acme Global AI",
    role: "Head of AI Infrastructure",
  },
}: ClientDashboardModalProps) {
  const [activeTab, setActiveTab] = useState<"upload" | "progress" | "deliverables" | "analytics">("upload");
  const [selectedService, setSelectedService] = useState<string>("translation");
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(["Spanish", "German", "Japanese"]);
  const [selectedQuality, setSelectedQuality] = useState<"autonomous" | "human">("human");

  // Drag and drop / selected file state
  const [selectedFile, setSelectedFile] = useState<{ name: string; size: string } | null>({
    name: "Q3_Enterprise_Financial_Audit.pdf",
    size: "12.4 MB",
  });

  // Jobs state
  const [jobs, setJobs] = useState<ProcessJob[]>([
    {
      id: "JOB-9823",
      fileName: "LLM_Dataset_Medical_Spanish.json",
      fileSize: "8.5 MB",
      service: "LLM Fine-Tuning & RLHF",
      targetLangs: ["Spanish", "English"],
      status: "completed",
      progress: 100,
      currentStep: 5,
      tokensProcessed: 48500,
      totalTokens: 48500,
      speed: "520 T/s",
      accuracy: "99.9%",
      timestamp: "10 mins ago",
    },
    {
      id: "JOB-9824",
      fileName: "Legal_Contracts_Batch_04.docx",
      fileSize: "6.2 MB",
      service: "Multilingual Neural Translation",
      targetLangs: ["German", "French", "Japanese"],
      status: "completed",
      progress: 100,
      currentStep: 5,
      tokensProcessed: 32100,
      totalTokens: 32100,
      speed: "490 T/s",
      accuracy: "99.7%",
      timestamp: "1 hour ago",
    },
  ]);

  const [activeJob, setActiveJob] = useState<ProcessJob | null>(null);

  // Simulate real-time progress for active job
  useEffect(() => {
    if (!activeJob || activeJob.status === "completed") return;

    const interval = setInterval(() => {
      setActiveJob((prev) => {
        if (!prev) return null;
        if (prev.progress >= 100) {
          const completedJob: ProcessJob = {
            ...prev,
            progress: 100,
            status: "completed",
            currentStep: 5,
          };
          setJobs((oldJobs) => [completedJob, ...oldJobs]);
          return completedJob;
        }

        const nextProgress = prev.progress + 15;
        const nextStep = Math.min(5, Math.ceil((nextProgress / 100) * 5));
        const nextTokens = Math.min(prev.totalTokens, Math.floor((nextProgress / 100) * prev.totalTokens));

        return {
          ...prev,
          progress: nextProgress,
          currentStep: nextStep,
          tokensProcessed: nextTokens,
        };
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [activeJob]);

  if (!isOpen) return null;

  const handleStartProcessing = () => {
    if (!selectedFile) return;

    const newJob: ProcessJob = {
      id: `JOB-${Math.floor(1000 + Math.random() * 9000)}`,
      fileName: selectedFile.name,
      fileSize: selectedFile.size,
      service:
        selectedService === "translation"
          ? "Multilingual Neural Translation"
          : selectedService === "llm"
          ? "LLM Fine-Tuning & RLHF"
          : selectedService === "pii"
          ? "PII Scrubbing & Anonymization"
          : "Document AI Extraction",
      targetLangs: selectedLanguages,
      status: "processing",
      progress: 10,
      currentStep: 1,
      tokensProcessed: 2500,
      totalTokens: 28400,
      speed: "460 T/s",
      accuracy: "99.8%",
      timestamp: "Just now",
    };

    setActiveJob(newJob);
    setActiveTab("progress");
  };

  const handleSelectSampleFile = (name: string, size: string) => {
    setSelectedFile({ name, size });
  };

  const stepsList = [
    { number: 1, title: "File Ingestion & Virus Scan", desc: "SHA-256 Checksum & Encryption" },
    { number: 2, title: "Automated PII Scrubbing", desc: "Entity anonymization & HIPAA rules" },
    { number: 3, title: "Neural Model Processing", desc: "Transformer inference & tokenization" },
    { number: 4, title: "Linguistic Quality Audit", desc: "BLEU / COMET score verification" },
    { number: 5, title: "Encrypted Export & Delivery", desc: "Ready for download & API push" },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Container */}
      <div 
        className="relative w-full max-w-6xl h-[92vh] max-h-[850px] overflow-hidden rounded-3xl bg-white dark:bg-[#070b15] border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col transition-all text-slate-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <header className="px-6 py-4 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50/70 dark:bg-[#0b0f1d]/90 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/30">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white">
                  WELONIX AI Workspace
                </h1>
                <span className="text-[10px] font-mono font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  API Operational
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {userProfile.company} &bull; {userProfile.role}
              </p>
            </div>
          </div>

          {/* User Profile & Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
              <User className="w-3.5 h-3.5 text-blue-500" />
              <span className="font-medium text-slate-700 dark:text-slate-300">{userProfile.name}</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
              title="Close Dashboard"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Dashboard Body Grid */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Sidebar */}
          <aside className="w-64 border-r border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#090d18]/60 p-4 hidden md:flex flex-col justify-between shrink-0">
            <div className="space-y-1">
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 px-3 py-2 font-bold">
                Client Navigation
              </p>

              <button
                onClick={() => setActiveTab("upload")}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === "upload"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-white/5"
                }`}
              >
                <Upload className="w-4 h-4" />
                <span>Upload &amp; Process</span>
              </button>

              <button
                onClick={() => setActiveTab("progress")}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === "progress"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-white/5"
                }`}
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Live Work Progress</span>
                {activeJob && activeJob.status === "processing" && (
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping ml-auto" />
                )}
              </button>

              <button
                onClick={() => setActiveTab("deliverables")}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === "deliverables"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-white/5"
                }`}
              >
                <FolderCheck className="w-4 h-4 text-emerald-400" />
                <span>Completed Deliverables</span>
                <span className="ml-auto text-[10px] font-mono bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded-md font-bold">
                  {jobs.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab("analytics")}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === "analytics"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-white/5"
                }`}
              >
                <BarChart3 className="w-4 h-4 text-purple-400" />
                <span>Analytics &amp; Accuracy</span>
              </button>
            </div>

            {/* Bottom Support & Security Card */}
            <div className="p-3.5 rounded-2xl bg-white dark:bg-[#0b101d] border border-slate-200 dark:border-slate-800 text-xs">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Data Retention</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                All client documents are processed in ephemeral memory and auto-scrubbed after download.
              </p>
            </div>
          </aside>

          {/* Main Content View */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-white dark:bg-[#070b15]">
            
            {/* Mobile Navigation Tabs */}
            <div className="md:hidden flex items-center gap-1 mb-4 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setActiveTab("upload")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 ${activeTab === "upload" ? "bg-blue-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"}`}
              >
                Upload
              </button>
              <button
                onClick={() => setActiveTab("progress")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 ${activeTab === "progress" ? "bg-blue-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"}`}
              >
                Live Progress
              </button>
              <button
                onClick={() => setActiveTab("deliverables")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 ${activeTab === "deliverables" ? "bg-blue-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"}`}
              >
                Deliverables ({jobs.length})
              </button>
            </div>

            {/* TAB 1: UPLOAD & PROCESS */}
            {activeTab === "upload" && (
              <div className="max-w-4xl mx-auto space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    Submit Document for AI Processing
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Upload your enterprise documents, datasets, or transcripts to run through WELONIX neural pipelines.
                  </p>
                </div>

                {/* Drag and Drop Zone */}
                <div className="p-8 rounded-3xl border-2 border-dashed border-blue-500/40 dark:border-blue-500/30 bg-blue-50/40 dark:bg-blue-950/10 hover:border-blue-600 dark:hover:border-blue-400 transition-all text-center group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Upload className="w-7 h-7" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    Drag and drop your enterprise files here
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto mb-4">
                    Supports PDF, DOCX, TXT, JSON, CSV, WAV, MP4 up to 500MB per batch.
                  </p>
                  
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <span className="text-[11px] font-mono font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1 rounded-full text-slate-600 dark:text-slate-300">
                      PDF Documents
                    </span>
                    <span className="text-[11px] font-mono font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1 rounded-full text-slate-600 dark:text-slate-300">
                      LLM Datasets (JSONL)
                    </span>
                    <span className="text-[11px] font-mono font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1 rounded-full text-slate-600 dark:text-slate-300">
                      Audio Transcripts
                    </span>
                  </div>
                </div>

                {/* Selected File & Demo Sample Selectors */}
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0b101e] border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase">
                      Or Choose Sample Enterprise Files (Quick Demo)
                    </span>
                    {selectedFile && (
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Selected: {selectedFile.name}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      onClick={() => handleSelectSampleFile("Q3_Enterprise_Financial_Audit.pdf", "12.4 MB")}
                      className={`p-3 rounded-xl border text-left text-xs transition-all ${
                        selectedFile?.name === "Q3_Enterprise_Financial_Audit.pdf"
                          ? "border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 font-bold"
                          : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300"
                      }`}
                    >
                      <div className="font-semibold flex items-center gap-1.5 mb-1">
                        <FileText className="w-4 h-4 text-blue-500" />
                        Financial Audit PDF
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">12.4 MB &bull; 140 Pages</span>
                    </button>

                    <button
                      onClick={() => handleSelectSampleFile("Multilingual_Customer_Support_Transcripts.json", "8.1 MB")}
                      className={`p-3 rounded-xl border text-left text-xs transition-all ${
                        selectedFile?.name === "Multilingual_Customer_Support_Transcripts.json"
                          ? "border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 font-bold"
                          : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300"
                      }`}
                    >
                      <div className="font-semibold flex items-center gap-1.5 mb-1">
                        <FileCode className="w-4 h-4 text-indigo-500" />
                        LLM Training Corpus
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">8.1 MB &bull; 25K Rows</span>
                    </button>

                    <button
                      onClick={() => handleSelectSampleFile("Clinical_Trial_Protocols_Spanish_DE.docx", "5.7 MB")}
                      className={`p-3 rounded-xl border text-left text-xs transition-all ${
                        selectedFile?.name === "Clinical_Trial_Protocols_Spanish_DE.docx"
                          ? "border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 font-bold"
                          : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300"
                      }`}
                    >
                      <div className="font-semibold flex items-center gap-1.5 mb-1">
                        <FileText className="w-4 h-4 text-emerald-500" />
                        Medical Protocols DOCX
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">5.7 MB &bull; 64 Pages</span>
                    </button>
                  </div>
                </div>

                {/* Pipeline Service Selection Grid */}
                <div className="space-y-3">
                  <label className="block text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase">
                    Select Processing AI Service
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => setSelectedService("translation")}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3 ${
                        selectedService === "translation"
                          ? "border-blue-600 bg-blue-50/60 dark:bg-blue-950/30 ring-1 ring-blue-600"
                          : "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0b101e] hover:border-slate-300"
                      }`}
                    >
                      <Languages className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                          Multilingual Neural Translation
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          100+ native languages with deep domain terminology preservation.
                        </p>
                      </div>
                    </button>

                    <button
                      onClick={() => setSelectedService("llm")}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3 ${
                        selectedService === "llm"
                          ? "border-blue-600 bg-blue-50/60 dark:bg-blue-950/30 ring-1 ring-blue-600"
                          : "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0b101e] hover:border-slate-300"
                      }`}
                    >
                      <Database className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                          LLM Fine-Tuning &amp; RLHF Dataset
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          Generate high-quality token pairs, instruction datasets &amp; RLHF scores.
                        </p>
                      </div>
                    </button>

                    <button
                      onClick={() => setSelectedService("pii")}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3 ${
                        selectedService === "pii"
                          ? "border-blue-600 bg-blue-50/60 dark:bg-blue-950/30 ring-1 ring-blue-600"
                          : "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0b101e] hover:border-slate-300"
                      }`}
                    >
                      <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                          Automated PII Scrubbing &amp; Anonymization
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          Mask HIPAA, GDPR, SSN, and financial records automatically.
                        </p>
                      </div>
                    </button>

                    <button
                      onClick={() => setSelectedService("document_ai")}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3 ${
                        selectedService === "document_ai"
                          ? "border-blue-600 bg-blue-50/60 dark:bg-blue-950/30 ring-1 ring-blue-600"
                          : "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0b101e] hover:border-slate-300"
                      }`}
                    >
                      <FileCheck className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                          Document AI Vector Extraction
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          Parse tables, unstructured text, and OCR into structured JSON embeddings.
                        </p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Quality & Processing Options */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0b101e] border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Sliders className="w-4 h-4 text-blue-500" />
                    <div>
                      <h5 className="text-xs font-bold text-slate-900 dark:text-white">Quality Control Assurance</h5>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Select verification layer before final delivery export
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedQuality("autonomous")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        selectedQuality === "autonomous"
                          ? "bg-blue-600 text-white"
                          : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                      }`}
                    >
                      Fast Autonomous AI
                    </button>
                    <button
                      onClick={() => setSelectedQuality("human")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        selectedQuality === "human"
                          ? "bg-blue-600 text-white"
                          : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                      }`}
                    >
                      Human-in-the-Loop Verified
                    </button>
                  </div>
                </div>

                {/* Action CTA Button */}
                <button
                  onClick={handleStartProcessing}
                  className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5 text-amber-300 fill-amber-300" />
                  <span>Start AI Processing &amp; Track Live Work Progress</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* TAB 2: LIVE WORK PROGRESS TRACKER */}
            {activeTab === "progress" && (
              <div className="max-w-4xl mx-auto space-y-6">
                <div>
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      Live Work Processing Telemetry
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </h2>
                    {activeJob && (
                      <span className="text-xs font-mono font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
                        {activeJob.id}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Real-time execution pipeline monitor displaying multi-stage progress, token throughput &amp; verification scores.
                  </p>
                </div>

                {activeJob ? (
                  <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#0b101e] border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                    {/* Active File Header */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 border-b border-slate-200 dark:border-slate-800 gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-500/20">
                          <FileText className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                            {activeJob.fileName}
                          </h3>
                          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            <span>{activeJob.fileSize}</span>
                            &bull;
                            <span className="font-mono text-blue-600 dark:text-blue-400">{activeJob.service}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {activeJob.status === "completed" ? (
                          <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-bold flex items-center gap-1.5 border border-emerald-300 dark:border-emerald-800">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            Work Completed (100%)
                          </span>
                        ) : (
                          <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400 font-mono text-xs font-bold flex items-center gap-1.5 border border-amber-300 dark:border-amber-800">
                            <RefreshCw className="w-4 h-4 animate-spin text-amber-500" />
                            Processing Live ({activeJob.progress}%)
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Progress Bar Component */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-500 dark:text-slate-400 font-semibold">
                          Overall Work Pipeline Completion
                        </span>
                        <span className="font-bold text-blue-600 dark:text-blue-400">
                          {activeJob.progress}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-3 overflow-hidden p-0.5">
                        <div 
                          className="bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500 h-full rounded-full transition-all duration-500 relative"
                          style={{ width: `${activeJob.progress}%` }}
                        >
                          <span className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                        </div>
                      </div>
                    </div>

                    {/* 5-Stage Live Status Steps */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase">
                        Stage-by-Stage Verification Pipeline
                      </h4>

                      <div className="space-y-2">
                        {stepsList.map((step) => {
                          const isDone = step.number < activeJob.currentStep || activeJob.status === "completed";
                          const isCurrent = step.number === activeJob.currentStep && activeJob.status !== "completed";
                          const isPending = step.number > activeJob.currentStep && activeJob.status !== "completed";

                          return (
                            <div 
                              key={step.number}
                              className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                                isDone
                                  ? "bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/50"
                                  : isCurrent
                                  ? "bg-blue-50/80 dark:bg-blue-950/40 border-blue-500 shadow-sm"
                                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-60"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold ${
                                  isDone
                                    ? "bg-emerald-500 text-white"
                                    : isCurrent
                                    ? "bg-blue-600 text-white animate-pulse"
                                    : "bg-slate-200 dark:bg-slate-800 text-slate-500"
                                }`}>
                                  {isDone ? <Check className="w-4 h-4" /> : step.number}
                                </div>
                                <div>
                                  <h5 className={`text-xs font-bold ${isCurrent ? "text-blue-600 dark:text-blue-400" : "text-slate-900 dark:text-white"}`}>
                                    {step.title}
                                  </h5>
                                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                                    {step.desc}
                                  </p>
                                </div>
                              </div>

                              <span className="text-[11px] font-mono font-bold">
                                {isDone && <span className="text-emerald-600 dark:text-emerald-400">Completed</span>}
                                {isCurrent && <span className="text-blue-600 dark:text-blue-400 flex items-center gap-1"><RefreshCw className="w-3 h-3 animate-spin" /> In Progress</span>}
                                {isPending && <span className="text-slate-400">Queued</span>}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Live Throughput Metrics */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                      <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <span className="text-[10px] font-mono text-slate-400 uppercase">Tokens Processed</span>
                        <div className="text-sm font-extrabold text-slate-900 dark:text-white font-mono mt-0.5">
                          {activeJob.tokensProcessed.toLocaleString()} / {activeJob.totalTokens.toLocaleString()}
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <span className="text-[10px] font-mono text-slate-400 uppercase">Processing Speed</span>
                        <div className="text-sm font-extrabold text-blue-600 dark:text-blue-400 font-mono mt-0.5">
                          {activeJob.speed}
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <span className="text-[10px] font-mono text-slate-400 uppercase">BLEU Confidence</span>
                        <div className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">
                          {activeJob.accuracy}
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <span className="text-[10px] font-mono text-slate-400 uppercase">Est. Completion</span>
                        <div className="text-sm font-extrabold text-purple-600 dark:text-purple-400 font-mono mt-0.5">
                          {activeJob.status === "completed" ? "0 sec" : `${Math.max(2, Math.floor((100 - activeJob.progress) / 8))} sec`}
                        </div>
                      </div>
                    </div>

                    {/* Download CTA when complete */}
                    {activeJob.status === "completed" && (
                      <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                          <div>
                            <h4 className="text-xs font-bold text-emerald-900 dark:text-emerald-200">
                              Work Delivery Ready for Download
                            </h4>
                            <p className="text-[11px] text-emerald-700 dark:text-emerald-400">
                              Verified with 99.9% BLEU score. Ready in JSON &amp; PDF formats.
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => setActiveTab("deliverables")}
                          className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-md flex items-center gap-1.5 shrink-0"
                        >
                          <Download className="w-4 h-4" />
                          <span>Download Encrypted Package</span>
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-12 text-center rounded-3xl bg-slate-50 dark:bg-[#0b101e] border border-slate-200 dark:border-slate-800 space-y-3">
                    <Clock className="w-10 h-10 text-slate-400 mx-auto" />
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">No active work in progress</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                      Go to the Upload tab to submit a new file or simulate a demo document run.
                    </p>
                    <button
                      onClick={() => setActiveTab("upload")}
                      className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold text-xs inline-flex items-center gap-1.5"
                    >
                      <Upload className="w-4 h-4" />
                      <span>Upload Document Now</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: COMPLETED DELIVERABLES ARCHIVE */}
            {activeTab === "deliverables" && (
              <div className="max-w-4xl mx-auto space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    Completed Deliverables &amp; Export Archive
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Download processed datasets, translated documents, and structured AI embeddings.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-[#0b101e] shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 dark:bg-slate-900/80 text-slate-500 dark:text-slate-400 font-mono text-[11px] uppercase border-b border-slate-200 dark:border-slate-800">
                        <tr>
                          <th className="px-4 py-3">Document Name</th>
                          <th className="px-4 py-3">Service</th>
                          <th className="px-4 py-3">Score</th>
                          <th className="px-4 py-3">Status</th>
                          <th className="px-4 py-3 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                        {jobs.map((j) => (
                          <tr key={j.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-900/40 transition-colors">
                            <td className="px-4 py-3.5 font-medium text-slate-900 dark:text-white flex items-center gap-2">
                              <FileText className="w-4 h-4 text-blue-500 shrink-0" />
                              <div>
                                <div className="font-bold">{j.fileName}</div>
                                <div className="text-[10px] text-slate-400 font-mono">{j.fileSize} &bull; {j.timestamp}</div>
                              </div>
                            </td>
                            <td className="px-4 py-3.5 text-slate-600 dark:text-slate-300">
                              {j.service}
                            </td>
                            <td className="px-4 py-3.5 font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                              {j.accuracy}
                            </td>
                            <td className="px-4 py-3.5">
                              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-mono text-[10px] font-bold border border-emerald-200 dark:border-emerald-800">
                                Completed
                              </span>
                            </td>
                            <td className="px-4 py-3.5 text-right">
                              <button
                                onClick={() => alert(`Downloading verified package for ${j.fileName}`)}
                                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs inline-flex items-center gap-1 shadow-sm transition-all"
                              >
                                <Download className="w-3.5 h-3.5" />
                                <span>Download</span>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: ANALYTICS & ACCURACY */}
            {activeTab === "analytics" && (
              <div className="max-w-4xl mx-auto space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    Quality &amp; Processing Telemetry
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Historical BLEU scores, token throughput metrics, and SLA compliance logs.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0b101e] border border-slate-200 dark:border-slate-800">
                    <span className="text-xs font-mono text-slate-400 uppercase font-semibold">Total Tokens Processed</span>
                    <div className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">1.48M Tokens</div>
                    <span className="text-[11px] font-mono text-emerald-500 font-semibold">+14% this month</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0b101e] border border-slate-200 dark:border-slate-800">
                    <span className="text-xs font-mono text-slate-400 uppercase font-semibold">Average BLEU Score</span>
                    <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 mt-1">98.9 Rating</div>
                    <span className="text-[11px] font-mono text-slate-500">Industry Leader</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0b101e] border border-slate-200 dark:border-slate-800">
                    <span className="text-xs font-mono text-slate-400 uppercase font-semibold">SLA On-Time Delivery</span>
                    <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">100.0%</div>
                    <span className="text-[11px] font-mono text-emerald-500 font-semibold">Zero SLA Breaches</span>
                  </div>
                </div>
              </div>
            )}

          </main>
        </div>

      </div>
    </div>
  );
}
