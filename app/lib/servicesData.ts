export interface ChildService {
  slug: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  heroHeadline: string;
  benefits: string[];
  features: { title: string; desc: string }[];
  useCases: string[];
  workflow: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export interface ServiceCategory {
  slug: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badgeText: string;
  items: ChildService[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "ai-language-services",
    name: "AI Language Services",
    badgeText: "Next-Gen AI & NLP",
    iconName: "Cpu",
    shortDesc: "Neural translation engines, MT post-editing, LLM evaluation, speech-to-text, and voice AI.",
    fullDesc: "WELONIX AI Language Services combine state-of-the-art neural architecture with specialized linguistic oversight to train, fine-tune, and evaluate multi-lingual AI models for enterprise scale.",
    items: [
      {
        slug: "ai-translation",
        name: "AI Translation",
        shortDesc: "Real-time, enterprise-grade neural machine translation across 120+ language pairs.",
        fullDesc: "Deploy high-throughput, context-aware AI translation engines tailored to your domain terminology, glossaries, and security standards.",
        heroHeadline: "Enterprise AI Translation Powered by Contextual Neural Networks",
        benefits: [
          "120+ Language Pairs Supported",
          "Sub-100ms Latency Engine Integration",
          "Custom Domain Terminology Glossaries",
          "SOC 2 Type II Certified Zero-Retention Pipeline"
        ],
        features: [
          { title: "Dynamic Adaptive Translation", desc: "Learns directly from custom translation memories and updated enterprise glossaries." },
          { title: "Enterprise API Connectivity", desc: "Seamless REST/gRPC endpoints with high availability SLA for real-time translation pipelines." },
          { title: "Quality Estimation (QE) Scoring", desc: "Automated sentence-level confidence scoring using COMET and BLEU metrics." }
        ],
        useCases: ["Global Knowledge Base Sync", "E-commerce Product Catalogs", "Customer Support Chat", "Real-Time News Monitoring"],
        workflow: [
          { step: "01", title: "Ingestion & Scrubbing", desc: "Secure intake of files or API streams with automatic PII redaction." },
          { step: "02", title: "Neural Processing", desc: "Inference across domain-customized transformer engines with glossary enforcement." },
          { step: "03", title: "Quality Scoring", desc: "Automated sentence-level confidence rating and anomaly detection." }
        ],
        faqs: [
          { question: "How does WELONIX AI Translation handle specialized terminology?", answer: "We embed custom client termbases and translation memories directly into our neural inference layers, guaranteeing term consistency." },
          { question: "Is my data stored or used to train public models?", answer: "No. WELONIX enforces strict Zero Data Retention policies; your data is never used to train external models." }
        ]
      },
      {
        slug: "mt-post-editing",
        name: "MT Post-Editing",
        shortDesc: "Human-in-the-loop refinement for Machine Translation output (Light & Full MTPE).",
        fullDesc: "Bridge the gap between raw neural translation speed and publishable human accuracy with native domain-expert post-editors.",
        heroHeadline: "Machine Translation Post-Editing (MTPE) for Publishable Accuracy",
        benefits: [
          "Light MTPE & Full MTPE Tiers",
          "ISO 18587 Certified Process",
          "60% Faster Delivery than Traditional Translation",
          "Continuous Feedback Loop to Retrain MT Models"
        ],
        features: [
          { title: "Domain-Matched Linguists", desc: "Certified native post-editors specialized in legal, medical, and technical domains." },
          { title: "Automated Error Tagging", desc: "MQM framework tagging for grammar, style, accuracy, and terminology compliance." },
          { title: "Adaptive Retraining Pipeline", desc: "Corrected outputs feed back into your custom MT engine to improve future baseline accuracy." }
        ],
        useCases: ["Large-Scale Document Localization", "Software UI Strings", "Technical Documentation", "Marketing Copy Adaptations"],
        workflow: [
          { step: "01", title: "MT Pre-processing", desc: "Raw MT generation followed by automated quality scoring to route segments." },
          { step: "02", title: "Linguist Review", desc: "Expert post-editing for accuracy, syntax, fluency, and tone." },
          { step: "03", title: "Final QA Audit", desc: "Automated QA checks and LQA sampling before delivery." }
        ],
        faqs: [
          { question: "What is the difference between Light and Full MTPE?", answer: "Light MTPE fixes major factual and grammatical errors for internal comprehension, while Full MTPE delivers native, publication-ready quality." }
        ]
      },
      {
        slug: "llm-linguistic-evaluation",
        name: "LLM Linguistic Evaluation",
        shortDesc: "Benchmarking LLM output accuracy, safety, hallucination rates, and nuance.",
        fullDesc: "Validate, benchmark, and red-team Large Language Models across diverse languages, cultural contexts, and domain verticals.",
        heroHeadline: "Rigorous Multilingual Evaluation & RLHF for Frontier LLMs",
        benefits: [
          "Human Evaluation & RLHF Pipelines",
          "Hallucination & Bias Identification",
          "Multilingual Nuance & Idiom Assessment",
          "Custom Benchmarking Frameworks"
        ],
        features: [
          { title: "Prompt-Response Scoring", desc: "Qualitative rating of coherence, ground truth fidelity, and instruction following." },
          { title: "Safety & Toxicity Auditing", desc: "Red-teaming across sensitive socio-cultural contexts and regional nuances." },
          { title: "Fine-Tuning Preference Datasets", desc: "Pairwise comparisons and ranking datasets curated by native domain experts." }
        ],
        useCases: ["LLM Pre-training Alignment", "Chatbot Safety Benchmarking", "Cross-cultural Model Evaluation", "RAG Pipeline Accuracy"],
        workflow: [
          { step: "01", title: "Benchmark Definition", desc: "Establishing rubric parameters, evaluation guidelines, and edge-case datasets." },
          { step: "02", title: "Expert Annotator Rating", desc: "Native linguists rate responses on multi-dimensional quality matrices." },
          { step: "03", title: "Synthesis & Analytics", desc: "Detailed error distribution reports and alignment analytics delivery." }
        ],
        faqs: [
          { question: "Which LLM architectures do you evaluate?", answer: "We support evaluating closed and open-source models including OpenAI GPT-4, Claude, Gemini, Llama, and specialized domain SLMs." }
        ]
      },
      {
        slug: "ai-transcription",
        name: "AI Transcription",
        shortDesc: "Automated speech-to-text with multi-speaker diarization and timestamping.",
        fullDesc: "Convert audio and video streams into highly accurate text transcripts across 90+ languages with automated speaker identification.",
        heroHeadline: "Ultra-Accurate Multilingual Speech-to-Text Transcription",
        benefits: [
          "98%+ Accuracy with Custom Vocabulary",
          "Multi-Speaker Diarization",
          "Time-coded Output (SRT, VTT, JSON)",
          "Low-latency Live Stream Transcription"
        ],
        features: [
          { title: "Acoustic Noise Reduction", desc: "Pre-processing filtering for clear transcript generation from noisy real-world recordings." },
          { title: "Custom Dictionary Injection", desc: "Upload specialized jargon, acronyms, and names for accurate phonetic decoding." },
          { title: "Human Proofreading Option", desc: "Combine automated AI speed with human editor review for critical transcripts." }
        ],
        useCases: ["Earnings Calls & Financial Meetings", "Legal Depositions", "Media & Broadcast Subtitling", "Medical Consultations"],
        workflow: [
          { step: "01", title: "Audio Normalization", desc: "Multi-channel audio cleanup and acoustic pre-processing." },
          { step: "02", title: "ASR Inference", desc: "Speech recognition inference with speaker identification and timestamping." },
          { step: "03", title: "Formatting & Export", desc: "Export in web-ready timestamped formats or editable documents." }
        ],
        faqs: [
          { question: "Can the engine distinguish between overlapping speakers?", answer: "Yes, our advanced speaker diarization model isolates individual voices even in multi-party roundtable discussions." }
        ]
      },
      {
        slug: "ai-voice",
        name: "AI Voice",
        shortDesc: "Text-to-speech synthesis, voice cloning, and AI dubbing in natural human cadence.",
        fullDesc: "Create expressive, emotional, and context-aware synthetic voice agents and localized voiceovers using generative voice models.",
        heroHeadline: "Hyper-Realistic Multilingual Generative Voice Synthesis",
        benefits: [
          "Hyper-realistic Emotional Pitch & Cadence",
          "Zero-shot Voice Cloning Across Languages",
          "SSML & Fine-grained Phoneme Control",
          "Licensing & Ethical Voice Safeguards"
        ],
        features: [
          { title: "Cross-Lingual Voice Synthesis", desc: "Maintain the original speaker's timbre and tone while speaking fluently in another language." },
          { title: "Lip-Sync & Timing Alignment", desc: "Automated audio time-warping to match visual mouth movements in video." },
          { title: "API Streaming Integration", desc: "Low-latency streaming audio output for interactive voice assistants." }
        ],
        useCases: ["E-learning & Training Modules", "Global Video Dubbing", "Interactive IVR & Voice Assistants", "Audiobook Publishing"],
        workflow: [
          { step: "01", title: "Voice Training / Selection", desc: "Select from curated voices or clone target voice actor with permission." },
          { step: "02", title: "Script Phonetic Synthesis", desc: "Generate neural speech with SSML inflection markers." },
          { step: "03", title: "Audio Mastering", desc: "Equalization, background noise mixing, and final audio mastering." }
        ],
        faqs: [
          { question: "Are synthetic voices ethically sourced?", answer: "Yes. WELONIX adheres to strict voice licensing standards and consent verification for all voice cloning projects." }
        ]
      }
    ]
  },
  {
    slug: "data-annotation",
    name: "Data | Annotation",
    badgeText: "High-Precision Training Data",
    iconName: "Database",
    shortDesc: "High-precision text, image, audio, NLP, and sentiment labeling for machine learning models.",
    fullDesc: "Scale your AI models with human-annotated, domain-verified datasets. WELONIX delivers structured training data under rigorous quality control standards.",
    items: [
      {
        slug: "text-annotation",
        name: "Text Annotation",
        shortDesc: "Named Entity Recognition (NER), POS tagging, relation extraction, and text categorization.",
        fullDesc: "Structure unstructured text data with precise semantic tags for training state-of-the-art NLP models.",
        heroHeadline: "Precision Text Data Annotation for NLP & LLM Training",
        benefits: [
          "NER, POS, Intent & Slot Labeling",
          "99.5%+ Consensus Accuracy SLA",
          "Multi-Annotator Verification",
          "Secure HIPAA & GDPR Compliant Workspaces"
        ],
        features: [
          { title: "Granular Entity Labeling", desc: "Annotate complex entities across multi-sentence contexts with custom taxonomy schemas." },
          { title: "Coreference Resolution", desc: "Link pronouns and references across long-form documents for deep semantic understanding." },
          { title: "Dynamic Quality Auditing", desc: "Real-time disagreement matrix calculation between multiple human annotators." }
        ],
        useCases: ["Legal Document Extraction", "Medical Record Classification", "Customer Ticket Intent Mapping", "Financial Report Structuring"],
        workflow: [
          { step: "01", title: "Taxonomy Setup", desc: "Configure annotation guidelines, bounding rules, and class definitions." },
          { step: "02", title: "Batch Labeling", desc: "Vetted annotators label data using specialized annotation workbenches." },
          { step: "03", title: "Quality Review", desc: "Gold-standard data comparison and inter-annotator agreement verification." }
        ],
        faqs: [
          { question: "What formats do you output text annotations in?", answer: "We export in JSON, JSONL, CoNLL, CSV, SpaCy, and custom schema representations." }
        ]
      },
      {
        slug: "image-annotation",
        name: "Image Annotation",
        shortDesc: "Bounding boxes, polygons, keypoints, semantic segmentation, and 3D cuboids.",
        fullDesc: "Power computer vision algorithms with pixel-level annotated image datasets for autonomous systems, healthcare imaging, and robotics.",
        heroHeadline: "Pixel-Perfect Computer Vision Image & Video Annotation",
        benefits: [
          "Semantic & Instance Segmentation",
          "Bounding Boxes & 3D Bounding Cuboids",
          "Keypoint & Skeletal Pose Estimation",
          "Automated Pre-labeling Assistance"
        ],
        features: [
          { title: "Sub-Pixel Polygon Accuracy", desc: "Extreme precision boundaries for fine objects and complex overlapping visual elements." },
          { title: "Video Object Tracking", desc: "Interpolated frame-by-frame object tracking across continuous video streams." },
          { title: "Multi-Spectral Image Labeling", desc: "Annotation support for thermal, infrared, satellite, and DICOM medical imagery." }
        ],
        useCases: ["Autonomous Driving Vision", "Medical Diagnostics Imaging", "Retail Shelf Monitoring", "Aerial & Drone Surveillance"],
        workflow: [
          { step: "01", title: "Image Pre-processing", desc: "Data ingestion, anonymization, and resolution optimization." },
          { step: "02", title: "Visual Annotation", desc: "Annotators apply boxes, polygons, or masks using specialized tools." },
          { step: "03", title: "QA Validation", desc: "Automated overlap testing and senior reviewer spot-checks." }
        ],
        faqs: [
          { question: "Do you support medical DICOM imaging format?", answer: "Yes, our platform natively ingests DICOM files with anonymized patient metadata." }
        ]
      },
      {
        slug: "multilingual-annotation",
        name: "Multilingual Annotation",
        shortDesc: "Data labeling across 80+ global languages with native cultural context.",
        fullDesc: "Train global NLP systems with native linguist annotations, handling regional dialects, slang, and localized script nuances.",
        heroHeadline: "Global Multilingual Dataset Annotation & Curation",
        benefits: [
          "80+ Global Languages & Regional Dialects",
          "Native Language Annotators",
          "Code-Switching & Mixed Script Handling",
          "Culturally Informed Classification"
        ],
        features: [
          { title: "Dialect & Slang Mapping", desc: "Accurately annotate localized vernacular, regional idioms, and informal text." },
          { title: "RTL & Non-Latin Script Support", desc: "Native handling of Arabic, Hebrew, Devanagari, Hanzi, Kanji, and Cyrillic." },
          { title: "Cross-lingual Entity Linking", desc: "Map entities across different language texts to unified knowledge graphs." }
        ],
        useCases: ["Global Social Media Listening", "Multilingual Chatbot Datasets", "Search Engine Relevance", "Cross-Border E-commerce"],
        workflow: [
          { step: "01", title: "Linguist Matching", desc: "Assign native speaker annotators with specific regional dialect knowledge." },
          { step: "02", title: "Multilingual Tagging", desc: "Execute semantic annotation according to localized guidelines." },
          { step: "03", title: "Linguistic Validation", desc: "Secondary validation by senior linguist team leads." }
        ],
        faqs: [
          { question: "How do you handle code-switching (mixing two languages in one sentence)?", answer: "Our native annotators specialize in bilingual code-switching, tagging token-level language switches accurately." }
        ]
      },
      {
        slug: "nlp-annotation",
        name: "NLP Annotation",
        shortDesc: "Syntactic parsing, semantic role labeling, discourse analysis, and coreference.",
        fullDesc: "Deep linguistic annotations to help complex natural language processing models understand syntax, grammar structure, and relationship graphs.",
        heroHeadline: "Advanced NLP Structural & Semantic Annotation",
        benefits: [
          "Dependency & Constituency Tree Parsing",
          "Semantic Role Labeling (SRL)",
          "Discourse & Dialogue Structure Tagging",
          "Custom Knowledge Graph Extraction"
        ],
        features: [
          { title: "Predicate-Argument Annotation", desc: "Identify who did what to whom, where, and when across complex sentences." },
          { title: "Dialogue Act Classification", desc: "Tag conversational turns for greeting, question, command, confirmation, or refusal." },
          { title: "Ontology Mapping", desc: "Connect unstructured text phrases to standard enterprise knowledge ontologies." }
        ],
        useCases: ["Conversational AI Dialogue Models", "Automated Knowledge Graph Generation", "Voice Assistant NLU Engine", "Contract Clause Analysis"],
        workflow: [
          { step: "01", title: "Ontology Definition", desc: "Map client relational schemas to annotation tool setup." },
          { step: "02", title: "NLP Deep Annotation", desc: "Annotate parse trees, role labels, and coreferences." },
          { step: "03", title: "Graph Verification", desc: "Verify graph consistency and export clean datasets." }
        ],
        faqs: [
          { question: "What guidelines framework do you use for SRL?", answer: "We support PropBank, FrameNet, and custom client-defined semantic role frameworks." }
        ]
      },
      {
        slug: "sentiment-annotation",
        name: "Sentiment Annotation",
        shortDesc: "Aspect-based sentiment analysis, emotion detection, and tone categorization.",
        fullDesc: "Determine granular emotional valence, aspect-specific sentiment, and subtle sarcasm across customer reviews and social interactions.",
        heroHeadline: "Granular Aspect-Based Sentiment & Emotion Data Labeling",
        benefits: [
          "Aspect-Based Sentiment Analysis (ABSA)",
          "Multi-Class Emotion Categorization",
          "Sarcasm & Irony Tagging",
          "Subjectivity & Stance Identification"
        ],
        features: [
          { title: "Targeted Aspect Association", desc: "Link sentiment polarity (positive, negative, neutral) to specific product features." },
          { title: "Nuanced Emotion Spectrum", desc: "Label complex emotions (frustration, delight, skepticism, urgency) beyond binary ratings." },
          { title: "Contextual Sarcasm Identification", desc: "Annotators evaluate subtle context cues to correctly classify ironic statements." }
        ],
        useCases: ["Product Feedback Mining", "Brand Reputation Monitoring", "Customer Care Escalation Models", "Financial Sentiment Indexing"],
        workflow: [
          { step: "01", title: "Aspect Taxonomy Setup", desc: "Define target attributes (e.g. price, quality, shipping)." },
          { step: "02", title: "Polarity Tagging", desc: "Annotators assign sentiment scores per identified aspect." },
          { step: "03", title: "Consensus Score Audit", desc: "Review low-confidence or conflicting sentiment ratings." }
        ],
        faqs: [
          { question: "How do you maintain consistency in subjective sentiment scoring?", answer: "We use detailed calibration guidelines, multi-annotator consensus voting, and regular gold-standard benchmarks." }
        ]
      }
    ]
  },
  {
    slug: "translation-services",
    name: "Translation Services",
    badgeText: "Enterprise Human Translation",
    iconName: "Languages",
    shortDesc: "Expert human translation for technical, legal, medical, financial, and certified documents.",
    fullDesc: "Certified native human translators providing rigorous language translation across specialized domain fields with strict regulatory compliance.",
    items: [
      {
        slug: "documents",
        name: "Documents Translation",
        shortDesc: "Precision translation for corporate reports, business manuals, and correspondence.",
        fullDesc: "High-volume document translation managed by dedicated account managers and native linguists.",
        heroHeadline: "Enterprise Document Translation with Uncompromised Accuracy",
        benefits: [
          "Preserved Formatting & Layout",
          "Native Sector-Specific Translators",
          "ISO 17100 Certified Quality Workflow",
          "Rapid Turnaround Times"
        ],
        features: [
          { title: "Desktop Publishing Integration", desc: "Deliverables retain exact original layout, typography, and image positions." },
          { title: "Translation Memory Savings", desc: "Re-use previously translated content to lower costs and accelerate delivery." },
          { title: "Strict Confidentiality SLA", desc: "Encrypted file transfer and legally binding non-disclosure agreements." }
        ],
        useCases: ["Corporate Annual Reports", "Standard Operating Procedures", "Internal Communications", "Training Manuals"],
        workflow: [
          { step: "01", title: "File Analysis", desc: "Extraction of word counts, formatting, and translation memory matches." },
          { step: "02", title: "Translation & Proofreading", desc: "Two-step TEP (Translation, Editing, Proofreading) process by native linguists." },
          { step: "03", title: "Final Layout Review", desc: "Visual QA to ensure flawless page layout presentation." }
        ],
        faqs: [
          { question: "Which file formats do you accept?", answer: "We accept DOCX, PDF, XLSX, PPTX, XML, JSON, InDesign INDD, and over 40 file formats." }
        ]
      },
      {
        slug: "technical",
        name: "Technical Translation",
        shortDesc: "User manuals, engineering specs, patents, and complex technical guides.",
        fullDesc: "Translate complex engineering, manufacturing, and IT documentation with absolute mathematical and mechanical precision.",
        heroHeadline: "Technical & Engineering Translation by Subject Matter Experts",
        benefits: [
          "SME Technical Translators (Engineers & Scientists)",
          "Controlled Language & STE Standard Compliance",
          "CAD File & Drawing Translation Support",
          "Custom Terminology Management"
        ],
        features: [
          { title: "Simplified Technical English (STE)", desc: "Adherence to ASD-STE100 standards for aerospace and defense documentation." },
          { title: "Schematic & Visual Tagging", desc: "Accurate translation of callout numbers, legend labels, and diagram specs." },
          { title: "Continuous Termbase Alignment", desc: "Maintain standardized glossaries for engineering components across global teams." }
        ],
        useCases: ["Heavy Machinery Manuals", "Aerospace Operating Specs", "Semiconductor Datasheets", "Software Architecture Guides"],
        workflow: [
          { step: "01", title: "Glossary Compilation", desc: "Extract and verify technical terms prior to translation." },
          { step: "02", title: "SME Translation", desc: "Translation by qualified engineers and domain-expert linguists." },
          { step: "03", title: "Technical Review", desc: "Peer audit by secondary domain expert for operational accuracy." }
        ],
        faqs: [
          { question: "Are your translators subject-matter experts?", answer: "Yes, our technical translation teams hold degrees or industry background in engineering, IT, or physical sciences." }
        ]
      },
      {
        slug: "legal",
        name: "Legal Translation",
        shortDesc: "Contracts, litigation materials, patents, compliance policies, and NDAs.",
        fullDesc: "Flawless legal translation executed by certified legal translators versed in international jurisdiction terminology.",
        heroHeadline: "Legal & Regulatory Translation for International Jurisdictions",
        benefits: [
          "Certified Legal Translators",
          "Court-Admissible Translations",
          "Strict NDAs & Zero Data Retention",
          "Rapid e-Discovery Translation Services"
        ],
        features: [
          { title: "Jurisdiction-Specific Nuance", desc: "Precision mapping of Civil Law, Common Law, and Sharia legal terminology." },
          { title: "Bilingual Clause Verification", desc: "Side-by-side legal alignment to preserve intent, rights, and obligations." },
          { title: "Secure Vault Upload", desc: "End-to-end 256-bit encrypted document transfer and destruction options." }
        ],
        useCases: ["Cross-Border Mergers & Acquisitions", "International Patents & Intellectual Property", "Litigation Discovery Documents", "Commercial Leases & Contracts"],
        workflow: [
          { step: "01", title: "Legal Review", desc: "Assess target jurisdiction court requirements and terminology requirements." },
          { step: "02", title: "Legal Translator TEP", desc: "Translation and editing by attorney-vetted legal translators." },
          { step: "03", title: "Certification & Delivery", desc: "Attestation of accuracy and secure delivery." }
        ],
        faqs: [
          { question: "Can you provide certified legal translations for court submission?", answer: "Yes, we provide signed Certificates of Accuracy accepted by federal and international courts." }
        ]
      },
      {
        slug: "financial",
        name: "Financial Translation",
        shortDesc: "Annual reports, financial statements, SEC filings, tax reports, and audits.",
        fullDesc: "Accurate translation of financial statements, balance sheets, and regulatory audit documentation under tight reporting deadlines.",
        heroHeadline: "Financial & Regulatory Translation for Capital Markets",
        benefits: [
          "IFRS & US GAAP Accounting Terminology",
          "Same-Day Market Announcement Support",
          "Strict NDA & Insider Data Controls",
          "XBRL & Structured Financial Formats"
        ],
        features: [
          { title: "Numerical & Data Accuracy", desc: "Automated numeric validation scripts to guarantee zero transposition errors in financial tables." },
          { title: "Market Sensitivity Protocol", desc: "Air-gapped security workflow for confidential earnings reports prior to public release." },
          { title: "Multi-Currency Formatting", desc: "Localization of currency formatting, comma/period decimal placement, and accounting standards." }
        ],
        useCases: ["Earnings Press Releases", "IPO Prospectuses", "Audit Reports & Tax Filings", "Asset Management Investment Summaries"],
        workflow: [
          { step: "01", title: "Data Lockdown", desc: "Secure environment setup for sensitive financial documents." },
          { step: "02", title: "Financial Specialist Translation", desc: "Translation by linguists with background in accounting or finance." },
          { step: "03", title: "Numeric Audit", desc: "Automated verification of numbers, formulas, and balance sheet integrity." }
        ],
        faqs: [
          { question: "How do you handle urgent market-closing financial announcements?", answer: "We maintain 24/7 financial translation desks with dedicated SLAs for real-time market releases." }
        ]
      },
      {
        slug: "medical",
        name: "Medical Translation",
        shortDesc: "Patient records, medical device manuals, pharma docs, and regulatory filings.",
        fullDesc: "Life sciences translation following ISO 13485 standards, covering pharmaceutical, biotech, and medical device sectors.",
        heroHeadline: "ISO 13485 Certified Medical & Life Sciences Translation",
        benefits: [
          "ISO 13485 Certified Life Sciences Process",
          "Medical Doctor & PharmD Linguist Reviewers",
          "Back-Translation & Reconciliation Workflow",
          "EMA & FDA Compliance Standard"
        ],
        features: [
          { title: "Clinical Terminology Accuracy", desc: "Strict adherence to MedDRA, ICD-10, and SNOMED CT medical classification coding." },
          { title: "Patient-Facing Simplicity", desc: "Adapting complex clinical language into clear, accessible terms for Patient Informed Consent." },
          { title: "Regulatory Package Prep", desc: "Formatting documents to comply with FDA, EMA, and NMPA filing guidelines." }
        ],
        useCases: ["Medical Device IFUs (Instructions For Use)", "Patient Medical History Records", "Pharmaceutical Lab Studies", "Healthcare Marketing"],
        workflow: [
          { step: "01", title: "Medical Assignment", desc: "Routing to certified medical translators and clinicians." },
          { step: "02", title: "Translation & Edit", desc: "Rigorous translation with clinical term verification." },
          { step: "03", title: "Back-Translation", desc: "Independent back-translation to verify zero semantic variance." }
        ],
        faqs: [
          { question: "What is back-translation and why is it necessary in medical translation?", answer: "Back-translation translates the target document back to the source language to prove zero ambiguity for ethics committees and regulators." }
        ]
      },
      {
        slug: "marketing",
        name: "Marketing Translation",
        shortDesc: "Transcreation, localized brand campaigns, ad copy, and social media.",
        fullDesc: "Adapt brand messaging to resonate emotionally and culturally with international target demographics.",
        heroHeadline: "Creative Transcreation & Localized Brand Marketing",
        benefits: [
          "Creative Transcreation & Copywriting",
          "Cultural Resonance & Idiomatic Relevance",
          "Multilingual SEO Keyword Optimization",
          "Brand Voice Consistency Across Markets"
        ],
        features: [
          { title: "Cultural Sensitivity Screening", desc: "Evaluate imagery, slogans, and puns to prevent inadvertent cultural missteps." },
          { title: "Multilingual SEO Integration", desc: "Integrate localized search volume keywords directly into website and ad translations." },
          { title: "Alternative Copy Options", desc: "Provide multiple translated creative headline options with literal back-translations." }
        ],
        useCases: ["Global Ad Campaigns", "Social Media Content", "Brand Slogans & Taglines", "Product Launch Media Kits"],
        workflow: [
          { step: "01", title: "Creative Brief Intake", desc: "Review brand persona, target demographic, and emotional tone objectives." },
          { step: "02", title: "Transcreation Workshop", desc: "Creative linguists rewrite copy to achieve equivalent impact in target language." },
          { step: "03", title: "Client Review & Selection", desc: "Present back-translated copy options with cultural context notes." }
        ],
        faqs: [
          { question: "How does marketing transcreation differ from translation?", answer: "Transcreation goes beyond word-for-word translation to adapt concepts, jokes, and metaphors so they feel natively written for the target culture." }
        ]
      },
      {
        slug: "e-learning",
        name: "E-learning Translation",
        shortDesc: "SCORM packages, corporate training, LMS course content, and quizzes.",
        fullDesc: "Complete localization of interactive online learning modules, video subtitles, voiceovers, and LMS platforms.",
        heroHeadline: "Multilingual E-learning & Corporate LMS Course Translation",
        benefits: [
          "SCORM, xAPI & Storyline Compatibility",
          "Localized Quizzes, Assessments & UI",
          "Synchronized Audio & Voiceovers",
          "Turnkey LMS Package Testing"
        ],
        features: [
          { title: "Articulate & Captivate Support", desc: "Direct translation and re-import of Articulate Storyline, Rise 360, and Adobe Captivate modules." },
          { title: "Interactive UI Expansion Fixes", desc: "Adjust layout containers to accommodate text length changes across languages." },
          { title: "Audio & Subtitle Syncing", desc: "Integrate multilingual voice tracks and on-screen subtitle captions flawlessly." }
        ],
        useCases: ["Global Compliance Training", "Employee Onboarding Modules", "Technical Certification Courses", "University Online Programs"],
        workflow: [
          { step: "01", title: "Course Extraction", desc: "Extract XML/XLIFF strings and multimedia assets from LMS package." },
          { step: "02", title: "Translation & Audio Dubbing", desc: "Translate text and record localized narration." },
          { step: "03", title: "LMS QA Re-assembly", desc: "Rebuild SCORM package and perform interactive course testing." }
        ],
        faqs: [
          { question: "Can you re-integrate translated text directly into Articulate Storyline files?", answer: "Yes, we export XLIFF files from Storyline, translate them, and re-import them with full layout formatting preservation." }
        ]
      },
      {
        slug: "certified",
        name: "Certified Translation",
        shortDesc: "Official translations backed by a signed Certificate of Accuracy.",
        fullDesc: "Official translation of personal and business documents accepted by government agencies, universities, and immigration authorities.",
        heroHeadline: "Official Certified Translation Services for Global Compliance",
        benefits: [
          "Signed Certificate of Accuracy Included",
          "Accepted by USCIS, Embassies, & Universities",
          "Guaranteed Legal Acceptance",
          "Fast 24-Hour Express Delivery Option"
        ],
        features: [
          { title: "Official Stamp & Signature", desc: "Includes formal company seal, credentials statement, and authorized signature." },
          { title: "Strict Document Integrity", desc: "Verbatim translation of all stamps, seals, signatures, and marginalia." },
          { title: "Digital PDF & Hard Copy Delivery", desc: "Instant encrypted PDF delivery plus physical certified copies shipped upon request." }
        ],
        useCases: ["Immigration & USCIS Applications", "Academic Transcripts & Diplomas", "Birth, Marriage, & Death Certificates", "Corporate Articles of Incorporation"],
        workflow: [
          { step: "01", title: "Document Scan Submission", desc: "Upload clear digital scan or picture of document." },
          { step: "02", title: "Certified Translation", desc: "Translated by accredited certified translator." },
          { step: "03", title: "Certification Issuance", desc: "Final review, statement of accuracy attachment, and digital sealing." }
        ],
        faqs: [
          { question: "Will USCIS accept your certified translations?", answer: "Yes, 100% guaranteed. Our certified translations comply with all USCIS immigration standards." }
        ]
      },
      {
        slug: "sworn",
        name: "Sworn Translation",
        shortDesc: "Translations by court-sworn translators for international legal validity.",
        fullDesc: "Legally binding sworn translations performed by court-appointed sworn translators across Europe, Latin America, and Asia.",
        heroHeadline: "Sworn Translation by Court-Appointed Sworn Translators",
        benefits: [
          "Official Sworn Translator Stamp & Signature",
          "Direct Legal Validity in Foreign Courts",
          "Apostille & Legalization Compatibility",
          "International Consular Acceptance"
        ],
        features: [
          { title: "Court Registration Verification", desc: "Executed strictly by translators registered with state ministries or high courts." },
          { title: "Physical Registry Stamping", desc: "Includes official state registration numbers, physical embossed seals, and legal endorsements." },
          { title: "Cross-Border Consular Compliance", desc: "Tailored to satisfy specific embassy requirement guidelines." }
        ],
        useCases: ["Foreign Property Purchases", "Cross-Border Extradition & Court Filings", "International Adoption Documents", "Foreign Branch Registrations"],
        workflow: [
          { step: "01", title: "Jurisdiction Intake", desc: "Verify destination country sworn translation legal codes." },
          { step: "02", title: "Sworn Execution", desc: "Translation and physical stamping by accredited court-sworn translator." },
          { step: "03", title: "Secure Dispatch", desc: "Physical delivery of stamped originals via tracked courier." }
        ],
        faqs: [
          { question: "What is the difference between a Certified and Sworn translation?", answer: "A certified translation includes a signed accuracy statement, while a sworn translation is executed by a government-appointed sworn translator whose stamp carries automatic legal validity in that country." }
        ]
      },
      {
        slug: "clinical-trial",
        name: "Clinical Trial Translation",
        shortDesc: "Protocols, ICFs, PROs/ePROs, investigator brochures, and dossiers.",
        fullDesc: "Highly specialized clinical trial translation and linguistic validation for global multi-center medical research studies.",
        heroHeadline: "Clinical Trial & Medical Research Translation Services",
        benefits: [
          "COA & ePRO Linguistic Validation",
          "Cognitive Debriefing with Native Patients",
          "ICH-GCP Compliance Assurance",
          "IRB & Ethics Committee Audit Ready"
        ],
        features: [
          { title: "Linguistic Validation Protocol", desc: "Dual forward-translation, reconciliation, back-translation, and cognitive debriefing." },
          { title: "ePRO Interface Testing", desc: "Screen-by-screen validation of localized clinical trial mobile app interfaces." },
          { title: "Regulatory Dossier Formatting", desc: "Assembly of multi-language clinical data for global drug approval applications." }
        ],
        useCases: ["Informed Consent Forms (ICFs)", "Clinical Study Protocols", "Investigator Brochures (IB)", "Patient-Reported Outcomes (PRO)"],
        workflow: [
          { step: "01", title: "Forward Translation", desc: "Two independent translations by clinical specialists." },
          { step: "02", title: "Reconciliation & Back Translation", desc: "Merge into single baseline and back-translate to verify zero loss of meaning." },
          { step: "03", title: "Cognitive Debriefing", desc: "Pilot test with target patient group to verify readability." }
        ],
        faqs: [
          { question: "Why is cognitive debriefing required for Clinical Trial ICFs?", answer: "Cognitive debriefing ensures actual patients in the target country understand the medical terms before signing trial consent forms." }
        ]
      }
    ]
  },
  {
    slug: "localization-services",
    name: "Localization Services",
    badgeText: "Global Digital Product Adaptation",
    iconName: "Globe",
    shortDesc: "End-to-end localization for websites, apps, software, games, products, and video.",
    fullDesc: "Adapt user experiences, codebases, graphics, and interactive assets to fit the cultural, linguistic, and technical norms of local markets worldwide.",
    items: [
      {
        slug: "website",
        name: "Website Localization",
        shortDesc: "SEO-optimized web content localization, CMS integration, and multi-currency UI.",
        fullDesc: "Transform digital storefronts and web portals into high-converting, localized experiences powered by dynamic proxy or CMS connector tools.",
        heroHeadline: "End-to-End Website Localization & Global SEO Engine",
        benefits: [
          "Seamless CMS Connectors (WordPress, Contentful, Webflow)",
          "Multilingual SEO & Keyword Mapping",
          "Dynamic RTL (Right-to-Left) CSS Styling",
          "Automated Continuous String Sync"
        ],
        features: [
          { title: "Continuous Localization Workflow", desc: "Automatically detect and translate new site content via webhooks and GitHub integrations." },
          { title: "Locale-Specific Metadata", desc: "Translate meta titles, descriptions, open-graph tags, and alt texts for search engine indexing." },
          { title: "Visual Context QA Editor", desc: "Linguists translate inside live web previews to prevent text clipping and overlap." }
        ],
        useCases: ["Enterprise SaaS Websites", "Global E-commerce Portals", "Corporate Landing Pages", "Help Center Documentation"],
        workflow: [
          { step: "01", title: "Site Scraping / API Connect", desc: "Extract strings directly via CMS API or code repository connector." },
          { step: "02", title: "In-Context Translation", desc: "Native linguists translate content with real-time visual UI layout feedback." },
          { step: "03", title: "Deployment & SEO Audit", desc: "Publish localized pages and verify hreflang tag setups." }
        ],
        faqs: [
          { question: "Do you support automatic translation sync with GitHub?", answer: "Yes, our platform connects directly to GitHub, GitLab, and Bitbucket repos to automate continuous localization PRs." }
        ]
      },
      {
        slug: "app",
        name: "App Localization",
        shortDesc: "iOS App Store and Android Play Store app localization with XLIFF & String files.",
        fullDesc: "Localize mobile app interfaces, onboarding flows, push notifications, and App Store Optimization (ASO) assets.",
        heroHeadline: "Native iOS & Android Mobile App Localization",
        benefits: [
          "iOS (.strings, .xcstrings) & Android (strings.xml) Support",
          "App Store Optimization (ASO) in 40+ Languages",
          "Pseudo-Localization UI Stress Testing",
          "Over-The-Air (OTA) Translation Updates"
        ],
        features: [
          { title: "Pluralization & Variable Handling", desc: "Preserve string variables ({count}, %s) and adapt plural rules across complex languages." },
          { title: "ASO Localized Assets", desc: "Translate screenshots, promo videos, and App Store keywords to maximize organic downloads." },
          { title: "In-App UI Layout Testing", desc: "Verify layout fitting on multiple screen sizes and orientation angles." }
        ],
        useCases: ["Fintech Mobile Apps", "Healthcare & Fitness Apps", "On-Demand Delivery Platforms", "Social Networking Apps"],
        workflow: [
          { step: "01", title: "Resource File Extraction", desc: "Ingest string files directly from mobile repo codebase." },
          { step: "02", title: "Variable-Safe Translation", desc: "Linguists translate while locking developer variables and code tags." },
          { step: "03", title: "Build Testing & ASO", desc: "Test compiled test builds on iOS TestFlight / Android Internal Track." }
        ],
        faqs: [
          { question: "How do you handle string length differences in mobile UI buttons?", answer: "We perform pseudo-localization testing to identify character expansion issues before code release." }
        ]
      },
      {
        slug: "software",
        name: "Software Localization",
        shortDesc: "Desktop software, Cloud SaaS platforms, UI strings, and online help docs.",
        fullDesc: "Adapt complex enterprise software suites, GUI navigation, dialog boxes, and user documentation for international markets.",
        heroHeadline: "Enterprise Cloud & Desktop Software Internationalization (i18n) & Localization (l10n)",
        benefits: [
          "Internationalization (i18n) Engineering Audit",
          "XLIFF, PO, JSON, YAML File Parsing",
          "GUI Clipping & String Expansion QA",
          "API & Microservice Localization"
        ],
        features: [
          { title: "i18n Code Remediation", desc: "Identify hardcoded strings, date/time formatting errors, and non-UTF-8 encodings in codebase." },
          { title: "Hotkey & Shortcut Alignment", desc: "Re-map keyboard shortcuts to prevent conflicts with localized keyboard layouts." },
          { title: "Online Help Syncing", desc: "Keep software UI strings synchronized with localized online user guide documentation." }
        ],
        useCases: ["Enterprise ERP / CRM Platforms", "Cybersecurity Dashboards", "CAD & Creative Suite Software", "Developer Toolkits & IDEs"],
        workflow: [
          { step: "01", title: "i18n Source Audit", desc: "Scan repository for internationalization readiness." },
          { step: "02", title: "String Extraction & Translation", desc: "Translate UI resource files using glossaries." },
          { step: "03", title: "Build Compilation QA", desc: "Execute automated LQA smoke tests on compiled software software builds." }
        ],
        faqs: [
          { question: "Can your team assist with i18n code refactoring?", answer: "Yes, our localization engineers can audit and refactor code bases to support external string resource bundles." }
        ]
      },
      {
        slug: "games",
        name: "Games Localization",
        shortDesc: "Video game scripts, voice acting, subtitle timing, LQA, and store pages.",
        fullDesc: "Immersive video game localization (L10n) covering narrative dialogue, lore, UI, voice dubbing, and compliance LQA across PC, Console, and Mobile.",
        heroHeadline: "Immersive Multilingual Video Game Localization & Audio Production",
        benefits: [
          "Narrative Adaptation & Cultural Lore Alignment",
          "Voice Acting & Character Dubbing Production",
          "Console Manufacturer Compliance (Sony, Microsoft, Nintendo)",
          "In-Game Linguistic Quality Assurance (LQA)"
        ],
        features: [
          { title: "Character Voice Direction", desc: "Casting native voice actors with theatrical direction matching original character personas." },
          { title: "Subtitles & Text Overflow Fixes", desc: "Adjust dialogue subtitle box sizes, line wraps, and reading speed pacing." },
          { title: "TRC / TCR Terminology Compliance", desc: "Ensure localized builds pass mandatory platform certification terms." }
        ],
        useCases: ["AAA Console Narrative Titles", "Mobile Gacha & RPG Games", "PC Esports & Multiplayer Games", "VR / AR Interactive Titles"],
        workflow: [
          { step: "01", title: "Game Script Worldbuilding", desc: "Review game lore bible, character personality profiles, and tone guides." },
          { step: "02", title: "Translation & Studio Dubbing", desc: "Translate dialogue scripts and record voice tracks in audio studios." },
          { step: "03", title: "In-Game LQA Playtesting", desc: "Testers play through game builds to find visual clipping, context errors, and audio bugs." }
        ],
        faqs: [
          { question: "Do you provide native voice actors for game character dubbing?", answer: "Yes, we work with specialized game voice talent and directors worldwide to produce authentic voiceovers." }
        ]
      },
      {
        slug: "product",
        name: "Product Localization",
        shortDesc: "Packaging, user guides, UI firmware, hardware labeling, and manuals.",
        fullDesc: "Adapt physical hardware products, consumer electronics packaging, firmware menus, and regulatory safety labels for international sale.",
        heroHeadline: "Consumer Hardware & Product Packaging Localization",
        benefits: [
          "Packaging DTP & Print File Preparation",
          "Embedded Firmware UI String Optimization",
          "CE, FCC, & International Compliance Labeling",
          "Multi-Language Quick Start Guides"
        ],
        features: [
          { title: "Firmware Memory Optimization", desc: "Compress and format localized UI strings to fit tight microcontroller memory limits." },
          { title: "Print Layout DTP Verification", desc: "Ensure translated text fits physical box dimensions, die-lines, and insert booklets." },
          { title: "Regulatory Safety Warnings", desc: "Accurately translate electrical, battery, and safety hazard disclosures per region." }
        ],
        useCases: ["Consumer Electronics Packaging", "IoT Smart Home Devices", "Medical Hardware UI", "Automotive Infotainment Displays"],
        workflow: [
          { step: "01", title: "Physical Asset Intake", desc: "Gather CAD dielines, firmware string files, and regulatory requirements." },
          { step: "02", title: "Translation & DTP Lay-in", desc: "Translate text and lay in artwork using Illustrator/InDesign." },
          { step: "03", title: "Pre-Print Proof Inspection", desc: "Inspect final PDF print proofs for layout alignment." }
        ],
        faqs: [
          { question: "Can you work directly with Adobe Illustrator packaging dielines?", answer: "Yes, our DTP team translates and adjusts artwork directly inside native .AI and .INDD dieline files." }
        ]
      },
      {
        slug: "e-learning",
        name: "E-learning Localization",
        shortDesc: "Localization for global online academies, corporate training, & multimedia.",
        fullDesc: "Adapt educational courses, interactive quizzes, video tutorials, and LMS interfaces into 50+ languages.",
        heroHeadline: "Global E-learning & Interactive Course Localization",
        benefits: [
          "Multi-Format Courseware Translation",
          "Localized Narrator Voiceovers",
          "Culturally Adapted Video Graphics",
          "LMS SCORM Package Quality Assurance"
        ],
        features: [
          { title: "Interactive Quiz Adaptation", desc: "Translate multiple-choice, drag-and-drop, and open-ended assessment questions." },
          { title: "On-Screen Text Replacement", desc: "Edit slide graphics and embedded video text callouts in native source files." },
          { title: "Cultural Symbol Assessment", desc: "Swap localized imagery, currency figures, and scenario names." }
        ],
        useCases: ["Global Workforce Safety Courses", "Higher Education Online Degrees", "K-12 Educational Software", "Software User Certification"],
        workflow: [
          { step: "01", title: "Media Asset Audit", desc: "Extract slide decks, audio scripts, and quiz banks." },
          { step: "02", title: "Localization & Voice Recording", desc: "Translate content and record matching voice audio." },
          { step: "03", title: "Course Reconstruction", desc: "Compile localized SCORM files and run full LMS playback tests." }
        ],
        faqs: [
          { question: "Do you handle voiceover recording for course narrators?", answer: "Yes, we provide voiceover casting in 60+ languages with synchronized timing to on-screen slides." }
        ]
      },
      {
        slug: "video",
        name: "Video Localization",
        shortDesc: "Video subtitles, voice dubbing, screen graphic edits, and closed captioning.",
        fullDesc: "Complete video content transformation including subtitle translation, localized voice tracks, and graphic screen replacements.",
        heroHeadline: "Comprehensive Video & Multimedia Localization Services",
        benefits: [
          "Burned-In & Soft Subtitle Formatting (SRT, VTT)",
          "Studio Lip-Sync & Lip-Match Dubbing",
          "On-Screen Motion Graphic Translation",
          "Streaming Platform Spec Compliance (Netflix, YouTube, Vimeo)"
        ],
        features: [
          { title: "Subtitling Character-per-Second (CPS) Limits", desc: "Format subtitle line breaks and display duration for maximum viewer readability." },
          { title: "After Effects Graphic Localization", desc: "Replace English lower-thirds, titles, and text callouts inside After Effects source projects." },
          { title: "Multilingual Audio Mastering", desc: "Mix localized speech tracks with original background music and sound effects (M&E)." }
        ],
        useCases: ["Brand Promotional Videos", "Product Demo Tutorials", "Corporate Keynotes & Webinars", "Entertainment & Documentary Film"],
        workflow: [
          { step: "01", title: "Transcription & Timecoding", desc: "Generate precise master timestamped transcript." },
          { step: "02", title: "Translation & Dubbing", desc: "Translate subtitle lines and record localized audio tracks." },
          { step: "03", title: "Video Render & QA", desc: "Render localized video files and perform final playback QA." }
        ],
        faqs: [
          { question: "What video formats can you deliver?", answer: "We deliver localized MP4, MOV, ProRes files, or standalone SRT/VTT subtitle files." }
        ]
      },
      {
        slug: "cultural-adaptation",
        name: "Cultural Adaptation",
        shortDesc: "Deep transcreation, idiom conversion, imagery, and brand resonance checks.",
        fullDesc: "Adapt visual imagery, metaphors, color symbolism, and brand messaging to respect target cultural norms and maximize consumer trust.",
        heroHeadline: "Cultural Adaptation & Cross-Border Brand Alignment",
        benefits: [
          "Cultural Taboo & Sensitivity Audits",
          "Idiomatic & Metaphor Replacement",
          "Color & Visual Symbolism Analysis",
          "Local Market Consumer Focus Testing"
        ],
        features: [
          { title: "Visual Asset Auditing", desc: "Review marketing photos, icons, and character artwork for cultural appropriateness." },
          { title: "Local Market Tone Adjustment", desc: "Adjust brand messaging between direct, polite, authoritative, or casual conversational tones." },
          { title: "Regulatory Advertising Check", desc: "Verify campaign claims meet regional advertising standards and disclosure laws." }
        ],
        useCases: ["Global Market Expansion Campaigns", "Consumer Packaging Design", "Brand Name & Tagline Validation", "Public Relations Releases"],
        workflow: [
          { step: "01", title: "Cultural Audit", desc: "Evaluate original assets against target region socio-cultural norms." },
          { step: "02", title: "Adaptation Recommendations", desc: "Provide detailed report with suggested visual and textual substitutions." },
          { step: "03", title: "Asset Refinement", desc: "Collaborate with client creative team to execute final localized assets." }
        ],
        faqs: [
          { question: "Why is cultural adaptation necessary beyond language translation?", answer: "Translating words literally can cause offense or fail if local cultural values, humor, or visual symbols differ from the origin market." }
        ]
      }
    ]
  },
  {
    slug: "validation-qa-lqa",
    name: "Validation | QA | LQA",
    badgeText: "Quality Assurance & LQA",
    iconName: "ShieldCheck",
    shortDesc: "Proofreading, linguistic QA, localization testing, audio QA, and bug tracking.",
    fullDesc: "Eliminate linguistic bugs, visual truncation, functional glitches, and audio defects across digital products before public release.",
    items: [
      {
        slug: "proofreading",
        name: "Proofreading",
        shortDesc: "Spelling, grammar, punctuation, and style checks by native senior editors.",
        fullDesc: "Rigorous final-stage proofreading to eliminate typos, grammatical errors, awkward phrasing, and formatting inconsistencies.",
        heroHeadline: "Meticulous Native Proofreading & Editorial Quality Control",
        benefits: [
          "100% Native Senior Proofreaders",
          "Spelling, Grammar, & Punctuation Cleanup",
          "Style Guide & Tone Consistency",
          "Tracked Changes Deliverable Options"
        ],
        features: [
          { title: "Style Guide Compliance", desc: "Ensure adherence to Chicago Manual of Style, AP, or custom corporate style books." },
          { title: "Cross-Reference Verification", desc: "Check internal table of contents, page numbers, figure callouts, and hyperlinked references." },
          { title: "Typographic Fine-Tuning", desc: "Fix orphan words, widow lines, improper hyphens, and font spacing." }
        ],
        useCases: ["Publishing & Manuscripts", "Executive Speeches & PR", "Whitepapers & Case Studies", "Marketing Collateral"],
        workflow: [
          { step: "01", title: "Document Review", desc: "Scan document against style guides and baseline glossary." },
          { step: "02", title: "Proofreading Pass", desc: "Senior native proofreader meticulously checks every sentence." },
          { step: "03", title: "Clean & Tracked Delivery", desc: "Deliver final clean copy alongside tracked changes markup." }
        ],
        faqs: [
          { question: "What is the difference between proofreading and editing?", answer: "Editing addresses sentence structure, clarity, and paragraph flow, while proofreading is the final check for surface typos and layout flaws." }
        ]
      },
      {
        slug: "linguistic-qa",
        name: "Linguistic QA",
        shortDesc: "MQM-based quality evaluation, terminology check, and linguistic validation.",
        fullDesc: "Structured linguistic quality assessment evaluating accuracy, fluency, terminology, and formatting using international MQM standards.",
        heroHeadline: "Multilingual Quality Metric (MQM) Linguistic QA Auditing",
        benefits: [
          "Standardized MQM Framework Scoring",
          "Objective Quality Index Reports",
          "Terminology & Glossary Enforcement",
          "Vendor Performance Benchmarking"
        ],
        features: [
          { title: "Categorized Error Indexing", desc: "Log error severity (Critical, Major, Minor) across accuracy, terminology, and style." },
          { title: "Pass/Fail Threshold Auditing", desc: "Calculate overall quality score percentage to validate translation vendor compliance." },
          { title: "Root-Cause Analysis Reports", desc: "Provide actionable feedback to improve upstream translation workflows." }
        ],
        useCases: ["Third-Party Translation Audit", "Regulatory Filing QA", "High-Risk Legal Content", "Customer Facing Knowledge Bases"],
        workflow: [
          { step: "01", title: "Sample Extraction", desc: "Select representative statistical sample from target translation batches." },
          { step: "02", title: "MQM Assessment", desc: "Independent LQA auditor evaluates sample against error typology." },
          { step: "03", title: "Scorecard Generation", desc: "Deliver detailed quality scorecard with improvement recommendations." }
        ],
        faqs: [
          { question: "What is the MQM framework?", answer: "MQM (Multilingual Quality Metrics) is an open industry standard for declaring, categorizing, and scoring translation quality errors objectively." }
        ]
      },
      {
        slug: "localization-qa",
        name: "Localization QA",
        shortDesc: "In-context UI string testing, text truncation, alignment, and encoding checks.",
        fullDesc: "Validate localized user interfaces in their actual runtime context to catch visual overlap, truncated text, and improper line wraps.",
        heroHeadline: "In-Context Visual & Structural Localization QA (LQA)",
        benefits: [
          "In-Context Visual UI Auditing",
          "Text Truncation & Overlap Fixes",
          "RTL & Character Encoding Testing",
          "Cross-Device & Screen Density Testing"
        ],
        features: [
          { title: "Dynamic String Expansion Testing", desc: "Identify UI buttons and containers broken by longer translated words." },
          { title: "Special Character & Font Check", desc: "Ensure non-Latin characters, diacritics, and accents render crisply without corrupt blocks." },
          { title: "Concatenation Bug Identification", desc: "Detect broken sentences caused by dynamically assembled UI code strings." }
        ],
        useCases: ["Mobile App UI Localization", "SaaS Web Platform Testing", "Video Game Interface QA", "Embedded Hardware Screen Display"],
        workflow: [
          { step: "01", title: "Test Environment Setup", desc: "Configure localized OS builds, browsers, and mobile devices." },
          { step: "02", title: "Screen-by-Screen Pass", desc: "LQA tester navigates all application screens taking defect screenshots." },
          { step: "03", title: "Bug Logging & Re-Testing", desc: "Log visual bugs in Jira/Linear with precise fix instructions." }
        ],
        faqs: [
          { question: "Do your LQA testers log bugs directly into our Jira workspace?", answer: "Yes, our QA team can log defects directly in Jira, GitHub Issues, Linear, or your preferred bug tracker." }
        ]
      },
      {
        slug: "ai-voice-audio-qa",
        name: "AI Voice/Audio QA",
        shortDesc: "Quality testing for AI voice synthesis, speech naturalness, and audio sync.",
        fullDesc: "Evaluate synthetic voice outputs, TTS pronunciation accuracy, noise artifacts, and audio-video timing synchronization.",
        heroHeadline: "AI Voice, TTS & Audio Stream Quality Assurance",
        benefits: [
          "Pronunciation & Phoneme Accuracy Check",
          "MOS (Mean Opinion Score) Naturalness Rating",
          "Audio Artifact & Glitch Detection",
          "Lip-Sync & Subtitle Sync Verification"
        ],
        features: [
          { title: "Phonetic Pronunciation Audit", desc: "Ensure proper stress and pronunciation on brand names, medical terms, and numbers." },
          { title: "Acoustic Artifact Cleanup", desc: "Flag robotic metallic buzz, unexpected pauses, or breath volume glitches in TTS output." },
          { title: "Cadence & Pacing Audit", desc: "Verify speech delivery speed matches human listener comprehension comfort." }
        ],
        useCases: ["Voice Assistant Applications", "AI Audiobooks & Podcasts", "Automated IVR Call Centers", "Localized Video Voiceovers"],
        workflow: [
          { step: "01", title: "Audio File Intake", desc: "Ingest synthetic audio clips and original target text scripts." },
          { step: "02", title: "Linguistic Audio Review", desc: "Native acoustic reviewer listens for pronunciation, cadence, and unnatural stress." },
          { step: "03", title: "MOS Scoring & Fix Log", desc: "Provide audio feedback logs and corrected SSML phoneme tags." }
        ],
        faqs: [
          { question: "What is MOS (Mean Opinion Score)?", answer: "MOS is a standardized rating system from 1 to 5 used to measure perceived audio naturalness and clarity." }
        ]
      },
      {
        slug: "localization-testing",
        name: "Localization Testing",
        shortDesc: "End-to-end functional and linguistic testing of localized digital builds.",
        fullDesc: "Comprehensive testing of localized software functionality, regional payment methods, date formats, and localized APIs.",
        heroHeadline: "End-to-End Functional & Cultural Localization Testing",
        benefits: [
          "Functional Regional Testing",
          "Local Payment & Currency Gateway QA",
          "Regional Keyboard & Input Method Testing",
          "Local Search & Geo-location QA"
        ],
        features: [
          { title: "Regional Payment Gateway Test", desc: "Verify checkout flows with local credit cards, e-wallets, and regional tax rules." },
          { title: "Input Method Editor (IME) Testing", desc: "Test complex text input handling for Japanese, Chinese, and Korean keyboards." },
          { title: "Geo-Targeting & IP Routing QA", desc: "Verify localized redirection based on user location and browser language settings." }
        ],
        useCases: ["Global E-commerce Checkout Testing", "Fintech Payment Platforms", "Global Gaming Client Builds", "SaaS Enterprise Deployments"],
        workflow: [
          { step: "01", title: "Test Suite Adaptation", desc: "Adapt existing functional test cases for localized regional requirements." },
          { step: "02", title: "Execution on Real Devices", desc: "Run manual and automated tests on physical devices located in target regions." },
          { step: "03", title: "Defect Verification", desc: "Deliver comprehensive test summary and bug verification logs." }
        ],
        faqs: [
          { question: "Do you test on real physical mobile devices in target countries?", answer: "Yes, we utilize localized device labs and native in-country testers to verify regional behavior." }
        ]
      }
    ]
  },
  {
    slug: "interpretation-services",
    name: "Interpretation Services",
    badgeText: "Real-Time Spoken Interpretation",
    iconName: "Mic",
    shortDesc: "Consecutive, simultaneous, remote (VRI/OPI), business, conference, and legal interpretation.",
    fullDesc: "Certified real-time spoken language interpretation for global conferences, legal depositions, medical consultations, and executive board meetings.",
    items: [
      {
        slug: "consecutive",
        name: "Consecutive Interpretation",
        shortDesc: "Face-to-face or virtual interpretation where the speaker pauses for translation.",
        fullDesc: "High-accuracy interpretation suited for small meetings, legal depositions, medical appointments, and press interviews.",
        heroHeadline: "Precision Consecutive Interpretation for High-Stakes Interactions",
        benefits: [
          "Certified Professional Interpreters",
          "In-Person & Virtual Meeting Delivery",
          "Subject Matter Expertise (Legal, Medical, Tech)",
          "Attentive Note-Taking Methodology"
        ],
        features: [
          { title: "Domain-Specialized Interpreters", desc: "Matched based on technical vocabulary requirements of your discussion topic." },
          { title: "Specialized Note-Taking", desc: "Interpreters use structured short-hand systems to reproduce complex statements with 100% fidelity." },
          { title: "Flexible Scheduling", desc: "Available for half-day, full-day, or multi-week international assignments." }
        ],
        useCases: ["Executive Board Negotiations", "Legal Witness Interviews", "Doctor-Patient Medical Consultations", "Diplomatic Meetings"],
        workflow: [
          { step: "01", title: "Briefing Material Review", desc: "Interpreter reviews agenda, terminology glossaries, and attendee lists." },
          { step: "02", title: "On-Site / Virtual Arrival", desc: "Setup check 30 minutes prior to session start." },
          { step: "03", title: "Interpretation Execution", desc: "Flawless turn-by-turn interpretation delivery." }
        ],
        faqs: [
          { question: "How far in advance should I book a consecutive interpreter?", answer: "We recommend booking 5 to 7 days in advance, but emergency 24-hour dispatch is available." }
        ]
      },
      {
        slug: "simultaneous",
        name: "Simultaneous Interpretation",
        shortDesc: "Real-time, zero-delay interpretation for large international conferences & summits.",
        fullDesc: "Real-time concurrent interpretation delivered through ISO soundproof booths, headsets, or digital streaming apps for large audiences.",
        heroHeadline: "Seamless Real-Time Simultaneous Conference Interpretation",
        benefits: [
          "Zero-Delay Real-Time Delivery",
          "ISO 4043 Certified Booths & Audio Gear",
          "Dual-Interpreter Relay Teams",
          "Hybrid & Virtual Event Streaming Integration"
        ],
        features: [
          { title: "Dual Interpreter Rotation", desc: "Interpreters work in paired teams, rotating every 30 minutes to maintain peak cognitive focus." },
          { title: "Multi-Language Relay Systems", desc: "Translate from a source language through a central relay channel to multiple target languages simultaneously." },
          { title: "Mobile App Audio Streaming", desc: "Attendees listen directly on their smartphones without needing physical headset distribution." }
        ],
        useCases: ["International Government Summits", "Global Corporate Conventions", "Keynote Product Launches", "Multilingual Webinars"],
        workflow: [
          { step: "01", title: "Event Technical Planning", desc: "Coordinate booth placement, audio feeds, and channel assignments." },
          { step: "02", title: "Speaker Prep Session", desc: "Interpreters review presentations, scripts, and specialized jargon." },
          { step: "03", title: "Live Event Execution", desc: "Continuous simultaneous audio transmission across target channels." }
        ],
        faqs: [
          { question: "Why are two interpreters required for simultaneous interpretation?", answer: "Simultaneous interpretation causes intense mental fatigue; two interpreters rotate every 30 minutes to guarantee 100% accuracy throughout the event." }
        ]
      },
      {
        slug: "remote",
        name: "Remote Interpretation",
        shortDesc: "Video Remote Interpretation (VRI) & Over-the-Phone Interpretation (OPI).",
        fullDesc: "Instant access to certified interpreters on-demand 24/7/365 via encrypted video or telephone connections.",
        heroHeadline: "24/7 On-Demand Remote Video & Phone Interpretation (VRI / OPI)",
        benefits: [
          "Under 30-Second Connect Time for Major Languages",
          "HIPAA & SOC 2 Encrypted Connection",
          "Web Browser, Mobile App, & Phone Line Access",
          "200+ Languages Available On-Demand"
        ],
        features: [
          { title: "One-Touch Connection", desc: "Connect instantly to an interpreter without pre-booking or complex hardware." },
          { title: "HD Video & Visual Cue Support", desc: "VRI allows interpreters to read facial expressions and body language for clearer communication." },
          { title: "Custom Call Routing", desc: "Route call center inquiries directly through an interpreter line before reaching agents." }
        ],
        useCases: ["Emergency Room Triage", "Customer Service Call Centers", "Insurance Claims Processing", "Remote Court Hearings"],
        workflow: [
          { step: "01", title: "Platform Login", desc: "Open mobile app, web portal, or dial toll-free pin number." },
          { step: "02", title: "Language Selection", desc: "Select target language and domain specialty." },
          { step: "03", title: "Instant Connection", desc: "Interpreter joins call in under 30 seconds." }
        ],
        faqs: [
          { question: "Is your VRI platform HIPAA compliant for medical use?", answer: "Yes, our remote platform is 100% HIPAA compliant with end-to-end encryption." }
        ]
      },
      {
        slug: "business",
        name: "Business Interpretation",
        shortDesc: "Executive meeting, negotiation, trade show, and audit interpretation.",
        fullDesc: "Facilitate smooth international commercial meetings, investor presentations, factory tours, and joint venture negotiations.",
        heroHeadline: "Strategic Business & Executive Meeting Interpretation",
        benefits: [
          "Commercial & Corporate Vocabulary Mastery",
          "Cultural Protocol & Business Etiquette Advisory",
          "On-Site Escort & Virtual Meeting Support",
          "Strict Non-Disclosure Guarantee"
        ],
        features: [
          { title: "Diplomatic & Business Etiquette", desc: "Interpreters are trained in international business customs and corporate protocol." },
          { title: "Trade Show Escort", desc: "Guide foreign clients through exhibition floors and vendor negotiations smoothly." },
          { title: "Auditing & Quality Inspections", desc: "Accompany factory auditors during site inspections and worker interviews." }
        ],
        useCases: ["Cross-Border M&A Meetings", "International Vendor Audits", "Trade Show Exhibitions", "Investor Pitch Presentations"],
        workflow: [
          { step: "01", title: "Corporate Briefing", desc: "Review company profile, meeting goals, and key negotiation points." },
          { step: "02", title: "Escort / Meeting Service", desc: "Professional interpreter attends all scheduled agenda sessions." },
          { step: "03", title: "Debrief Summary", desc: "Optional post-meeting summary notes on cultural observations." }
        ],
        faqs: [
          { question: "Can the interpreter travel internationally with our executive team?", answer: "Yes, we assign escort interpreters available for multi-city international business trips." }
        ]
      },
      {
        slug: "conference",
        name: "Conference Interpretation",
        shortDesc: "Turnkey interpretation management for international conventions & summits.",
        fullDesc: "Complete management of multi-language conference interpretation including hardware setup, sound engineers, and multi-language teams.",
        heroHeadline: "Turnkey International Conference & Event Interpretation",
        benefits: [
          "Full Audio Hardware & Booth Supply",
          "On-Site Technical Sound Engineers",
          "Multi-Channel Mobile Streaming Apps",
          "Dedicated Event Project Management"
        ],
        features: [
          { title: "End-to-End AV Management", desc: "Provide soundproof booths, receivers, transmitters, microphones, and sound technicians." },
          { title: "Hybrid Event Streaming Integration", desc: "Broadcast live translated audio channels into Zoom, Teams, or custom event portals." },
          { title: "Multi-Hall Coordination", desc: "Manage simultaneous interpretation across dozens of breakout tracks concurrently." }
        ],
        useCases: ["Global Industry Conventions", "Association Annual Meetings", "Intergovernmental Assemblies", "Global Tech Keynotes"],
        workflow: [
          { step: "01", title: "AV Site Survey", desc: "Inspect venue layout, stage feeds, and booth locations." },
          { step: "02", title: "Equipment Installation", desc: "Set up booths, wireless transmitters, and run audio tests." },
          { step: "03", title: "Live Event Support", desc: "Sound engineers manage audio levels while interpreters deliver live audio." }
        ],
        faqs: [
          { question: "Do you supply physical headsets and soundproof booths?", answer: "Yes, we provide full turnkey hardware setup including ISO soundproof booths, wireless headsets, and technician support." }
        ]
      },
      {
        slug: "deposition",
        name: "Deposition Interpretation",
        shortDesc: "Sworn legal court interpreters for depositions, arbitrations, and trials.",
        fullDesc: "State-certified and federally-certified court interpreters trained in legal protocol, sworn oaths, and verbatim testimony interpretation.",
        heroHeadline: "Certified Court & Legal Deposition Interpretation",
        benefits: [
          "State & Federally Certified Court Interpreters",
          "Verbatim Sworn Testimony Standards",
          "Virtual Deposition Integration (Zoom, Veritext)",
          "Immediate Deposition Transcript Compatibility"
        ],
        features: [
          { title: "Strict Verbatim Rule Adherence", desc: "Interpreters translate exact statements without summarizing, modifying, or explaining." },
          { title: "Third-Person Protocol", desc: "Interpreter speaks strictly in the first person as the witness to preserve record integrity." },
          { title: "Remote Legal Platform Sync", desc: "Seamless operation inside court reporting and virtual deposition software." }
        ],
        useCases: ["Civil & Criminal Court Depositions", "International Arbitrations", "Witness Preparation Sessions", "Worker's Compensation Hearings"],
        workflow: [
          { step: "01", title: "Case File Intake", desc: "Review case caption, party names, and specialized legal terminology." },
          { step: "02", title: "Sworn Oath Administration", desc: "Interpreter takes official court oath on the record." },
          { step: "03", title: "Deposition Execution", desc: "Deliver continuous, accurate consecutive or simultaneous legal interpretation." }
        ],
        faqs: [
          { question: "Are your legal interpreters certified for federal court proceedings?", answer: "Yes, we assign Federally Certified Court Interpreters and state court certified specialists." }
        ]
      },
      {
        slug: "ime",
        name: "IME Interpretation",
        shortDesc: "Independent Medical Examination interpretation for claims and legal medical reviews.",
        fullDesc: "Certified medical interpreters for Independent Medical Examinations (IMEs), workers' comp evaluations, and disability claims.",
        heroHeadline: "Certified Independent Medical Examination (IME) Interpretation",
        benefits: [
          "Medical Board & Claims Certified Interpreters",
          "Neutral, Objective Medical Record Reporting",
          "Detailed Familiarity with Orthopedic & Neurological Terms",
          "Nationwide On-Site & Virtual Availability"
        ],
        features: [
          { title: "Neutral Non-Advocacy Protocol", desc: "Maintain absolute neutrality between examining physician and claimant." },
          { title: "Anatomical & Pain Scale Accuracy", desc: "Precisely convey patient symptom descriptions, pain scores, and physical limitations." },
          { title: "Punctual On-Site Attendance", desc: "Guaranteed on-time arrival to prevent costly medical appointment cancellations." }
        ],
        useCases: ["Independent Medical Examinations (IME)", "Workers' Compensation Disputes", "Personal Injury Medical Audits", "Disability Claim Assessments"],
        workflow: [
          { step: "01", title: "Appointment Scheduling", desc: "Lock in date, location, and claimant language dialect." },
          { step: "02", title: "On-Site Examination", desc: "Interpreter facilitates clear communication during physical exam." },
          { step: "03", title: "Attendance Confirmation", desc: "Deliver verified attendance confirmation sheet for claims file." }
        ],
        faqs: [
          { question: "Why is specialized interpretation necessary for an IME?", answer: "IMEs require strict medical vocabulary accuracy and absolute neutrality so the examining physician's report holds up in court." }
        ]
      }
    ]
  },
  {
    slug: "content-services",
    name: "Content Services",
    badgeText: "Multilingual Content Creation",
    iconName: "FileText",
    shortDesc: "Content writing, adaptation, copywriting, technical writing, and creative writing.",
    fullDesc: "Create original, SEO-optimized, culturally targeted content tailored to your industry, brand voice, and global audience objectives.",
    items: [
      {
        slug: "content-writing",
        name: "Content Writing",
        shortDesc: "SEO blog posts, articles, web pages, and thought leadership content.",
        fullDesc: "High-impact, search-optimized original content written by native industry journalists and subject matter copywriters.",
        heroHeadline: "SEO-Driven Multilingual Content Writing & Editorial Production",
        benefits: [
          "Native Subject-Matter Content Writers",
          "Comprehensive Keyword & Search Intent Integration",
          "Engaging Thought Leadership & Whitepapers",
          "Strict Originality & Anti-Plagiarism Guarantee"
        ],
        features: [
          { title: "Search-Engine Optimized Structure", desc: "Crafted with H1/H2 hierarchy, internal linking recommendations, and meta descriptions." },
          { title: "Editorial Guidelines Alignment", desc: "Written directly in your brand voice, whether authoritative, friendly, or technical." },
          { title: "Multimedia Asset Recommendations", desc: "Includes suggestions for diagrams, charts, and callout graphics." }
        ],
        useCases: ["Corporate Tech Blogs", "B2B SaaS Content Hubs", "Industry Trend Reports", "Customer Case Studies"],
        workflow: [
          { step: "01", title: "Briefing & Keyword Strategy", desc: "Establish target audience, topic outline, and primary SEO keywords." },
          { step: "02", title: "Drafting", desc: "Native writer crafts engaging, original article draft." },
          { step: "03", title: "Editor QA & Polish", desc: "Senior editor verifies facts, flow, SEO density, and formatting." }
        ],
        faqs: [
          { question: "Do you write content directly in target foreign languages?", answer: "Yes! We assign native writers born and living in the target country to write authentic original content rather than translating from English." }
        ]
      },
      {
        slug: "adaptation",
        name: "Content Adaptation",
        shortDesc: "Adapting existing content formats for new channels, audiences, & regions.",
        fullDesc: "Repurpose existing whitepapers, blogs, or reports into slide decks, social snippets, infographics, and localized formats.",
        heroHeadline: "Multi-Channel Content Adaptation & Repurposing",
        benefits: [
          "Cross-Channel Asset Multiplication",
          "Regional Market Nuance Adjustment",
          "Format Optimization (Long-Form to Micro-Copy)",
          "Brand Story Preservation"
        ],
        features: [
          { title: "Format Modularization", desc: "Break down long-form ebooks into bite-sized social posts, infographics, and email sequences." },
          { title: "Audience Level Tuning", desc: "Adapt deep technical documents into executive summary decks or consumer-facing blogs." },
          { title: "Local Market Relevance", desc: "Swap regional stats and case studies to match local reader interests." }
        ],
        useCases: ["Repurposing Ebooks into Social Campaigns", "Adapting US Marketing Decks for Europe", "Technical Whitepaper Summarization", "Podcast Transcript to Blog Conversion"],
        workflow: [
          { step: "01", title: "Source Content Audit", desc: "Analyze existing asset and target channel requirements." },
          { step: "02", title: "Adaptation & Restructuring", desc: "Rewrite content for new visual formats or audience technical levels." },
          { step: "03", title: "Design Lay-in & Delivery", desc: "Package final copy ready for social scheduling or slide deck publication." }
        ],
        faqs: [
          { question: "Why adapt content instead of creating from scratch?", answer: "Content adaptation maximizes your original research ROI by multiplying a single pillar asset into dozens of channel-ready pieces." }
        ]
      },
      {
        slug: "copywriting",
        name: "Copywriting",
        shortDesc: "Conversion-focused copywriting for landing pages, ad campaigns, and emails.",
        fullDesc: "Persuasive, high-converting sales copy crafted to capture attention, build desire, and drive immediate user action.",
        heroHeadline: "High-Conversion Copywriting for Ads, Landing Pages & Emails",
        benefits: [
          "Direct-Response & Conversion-Focused",
          "A/B Testing Copy Variant Creation",
          "Emotional Hook & Value Proposition Clarity",
          "Global Ad Network Policy Compliance"
        ],
        features: [
          { title: "Hook & Headline Generation", desc: "Create multiple compelling headline variations designed to maximize click-through rates (CTR)." },
          { title: "Objection Handling Matrix", desc: "Address customer doubts and risk barriers directly in the body copy flow." },
          { title: "CTA Optimization", desc: "Craft urgent, clear call-to-action buttons that convert casual visitors into leads." }
        ],
        useCases: ["Google & Meta Ad Campaigns", "SaaS Product Landing Pages", "SaaS Cold Email Sequences", "E-commerce Product Description Pages"],
        workflow: [
          { step: "01", title: "Customer Persona Deep Dive", desc: "Analyze pain points, desires, and competitor messaging." },
          { step: "02", title: "Direct Response Drafting", desc: "Write persuasive headlines, body copy, and CTAs." },
          { step: "03", title: "A/B Variant Creation", desc: "Supply multiple headline and button options for testing." }
        ],
        faqs: [
          { question: "Do you provide A/B testing headline variations?", answer: "Yes, every copywriting package includes 3 to 5 headline and CTA variants for conversion split testing." }
        ]
      },
      {
        slug: "technical-writing",
        name: "Technical Writing",
        shortDesc: "API documentation, developer guides, user manuals, and system architecture docs.",
        fullDesc: "Clear, structured technical documentation authored by experienced technical writers for developers, engineers, and end-users.",
        heroHeadline: "Clear, Structured Technical Documentation & Developer Guides",
        benefits: [
          "Developer-Centric Code Sample Documentation",
          "API & SDK Reference Authoring (OpenAPI / Swagger)",
          "Standard Operating Procedures (SOPs)",
          "DITA & Markdown Publishing Formats"
        ],
        features: [
          { title: "Interactive API Specs", desc: "Build clean, interactive documentation with code snippets in Python, JavaScript, cURL, and Go." },
          { title: "Information Architecture Design", desc: "Organize complex technical hierarchies so users find answers in under 3 clicks." },
          { title: "Diagram & Flowchart Creation", desc: "Integrate Mermaid diagrams, architecture schematics, and UI callouts." }
        ],
        useCases: ["Developer API Portals", "Enterprise Software Admin Guides", "Hardware Assembly Instructions", "Internal SOP Knowledge Bases"],
        workflow: [
          { step: "01", title: "Subject Matter Interview", desc: "Interview product engineers and review raw code / specs." },
          { step: "02", title: "Structured Authoring", desc: "Write documentation using Markdown, DITA, or Docs-as-Code setups." },
          { step: "03", title: "Technical Verification", desc: "Execute code samples and test step-by-step instructions for accuracy." }
        ],
        faqs: [
          { question: "Can your technical writers work directly in GitHub repositories?", answer: "Yes, our writers use Git workflows, submitting pull requests in Markdown directly to your documentation repo." }
        ]
      },
      {
        slug: "creative-writing",
        name: "Creative Writing",
        shortDesc: "Brand storytelling, scripts, video concepts, narrative lore, and speeches.",
        fullDesc: "Evocative brand narratives, video scripts, keynote speeches, and creative storytelling that captivate audiences and build deep brand affinity.",
        heroHeadline: "Captivating Brand Storytelling & Scriptwriting",
        benefits: [
          "Award-Winning Creative Concepting",
          "Video & Commercial Scriptwriting",
          "Executive Keynote & Speechwriting",
          "Original Narrative Fiction & Lore"
        ],
        features: [
          { title: "Narrative Arc Construction", desc: "Build compelling story arcs that take audiences on emotional, memorable brand journeys." },
          { title: "Dual-Column Script Formatting", desc: "Deliver production-ready video scripts with visual cues in the left column and audio copy in the right." },
          { title: "Executive Voice Matching", desc: "Capture the distinct cadence and charisma of company founders and C-suite speakers." }
        ],
        useCases: ["Brand Anthem Videos", "CEO Conference Keynotes", "Interactive Game Storytelling", "Podcast Series Concepting"],
        workflow: [
          { step: "01", title: "Discovery Session", desc: "Uncover core brand philosophy, story objectives, and key takeaway emotions." },
          { step: "02", title: "Concept Pitching", desc: "Present 2-3 distinct creative directions and narrative treatments." },
          { step: "03", title: "Script Production", desc: "Flesh out full script with stage directions and voice instructions." }
        ],
        faqs: [
          { question: "Can you write speeches for executive keynotes under tight deadlines?", answer: "Yes, we specialize in high-stakes speechwriting with fast turnarounds for executive events." }
        ]
      }
    ]
  },
  {
    slug: "audio-visual-services",
    name: "Audio Visual Services",
    badgeText: "Multimedia & Studio Production",
    iconName: "Video",
    shortDesc: "Transcription, subtitling, voice-over, dubbing, and multimedia QA.",
    fullDesc: "Complete multimedia localization and production services ensuring your audio, video, and broadcast assets sound and look exceptional worldwide.",
    items: [
      {
        slug: "transcription",
        name: "AV Transcription",
        shortDesc: "Timecoded human & AI transcription for broadcast video, podcasts, and interviews.",
        fullDesc: "Verbatim or edited transcription of audio and video recordings delivered with precise frame-accurate timecodes.",
        heroHeadline: "Frame-Accurate Multilingual Audio & Video Transcription",
        benefits: [
          "Verbatim & Clean Read Tiers",
          "Frame-Accurate Timecodes (SMPTE)",
          "Speaker Diarization & Labeling",
          "Multi-Format Output (Text, DOCX, Subtitle Files)"
        ],
        features: [
          { title: "SMPTE Timecode Precision", desc: "Sync timecodes directly to video frames for effortless video editor workflow alignment." },
          { title: "Verbatim vs Clean Read Options", desc: "Choose exact 'um/uh' transcription or polished, clean readable prose." },
          { title: "Overlapping Dialogue Handling", desc: "Isolate complex background chatter and multi-party conversations clearly." }
        ],
        useCases: ["Documentary Raw Footage Log", "Podcast Audio Transcripts", "Broadcast TV Editing", "Qualitative Research Interviews"],
        workflow: [
          { step: "01", title: "Media Intake", desc: "Secure video file upload with timecode track detection." },
          { step: "02", title: "Transcription Pass", desc: "Human transcriptionist logs dialogue with speaker tags." },
          { step: "03", title: "Timecode Audit & Delivery", desc: "Verify timecode alignment and export in desired format." }
        ],
        faqs: [
          { question: "What is the difference between verbatim and clean read transcription?", answer: "Verbatim captures every single sound, stutter, and false start, while clean read removes filler words for effortless reading." }
        ]
      },
      {
        slug: "subtitling",
        name: "Subtitling",
        shortDesc: "Multilingual subtitling, closed captioning (CC), and SDH for hard of hearing.",
        fullDesc: "Professional subtitling and closed captioning formatted to strict broadcast and streaming platform specifications.",
        heroHeadline: "Multilingual Subtitling & Closed Captioning (CC / SDH)",
        benefits: [
          "SRT, VTT, DFXP, TTML, & CAP Formats",
          "Subtitles for the Deaf and Hard of Hearing (SDH)",
          "Reading Speed & Line Length Optimization",
          "Burned-In Video Subtitle Rendering"
        ],
        features: [
          { title: "CPS & CPL Compliance", desc: "Enforce strict Characters Per Second (CPS) and Characters Per Line (CPL) to prevent visual clutter." },
          { title: "SDH Audio Description", desc: "Include non-speech sound cues ([door slams], [dramatic music]) for accessibility compliance." },
          { title: "RTL Subtitle Alignment", desc: "Correct text rendering for Arabic, Hebrew, and Persian subtitles." }
        ],
        useCases: ["Streaming Platform Movies & Series", "Corporate Training Videos", "Social Media Short Videos", "Film Festival Screenings"],
        workflow: [
          { step: "01", title: "Master Subtitle Spotting", desc: "Create master timing file with exact in/out timecodes." },
          { step: "02", title: "Linguistic Translation", desc: "Translate subtitle lines within character constraints." },
          { step: "03", title: "Visual QA & Export", desc: "Preview video playback to verify zero overlap or line clipping." }
        ],
        faqs: [
          { question: "What is SDH subtitling?", answer: "SDH (Subtitles for the Deaf and Hard of Hearing) adds descriptive text for sound effects and speaker identification alongside dialogue." }
        ]
      },
      {
        slug: "voice-over",
        name: "Voice-over",
        shortDesc: "Professional voice talent narration for videos, commercials, and e-learning.",
        fullDesc: "Native voice actors recording high-caliber voiceover tracks in professional acoustic studios worldwide.",
        heroHeadline: "Native Voice-Over Narration in 60+ Global Languages",
        benefits: [
          "Vetted Native Voice Talent Roster",
          "Professional Studio Audio Quality",
          "UN-Style & Off-Camera Narration Tiers",
          "Commercial & Broadcast Usage Licensing Included"
        ],
        features: [
          { title: "Voice Casting Demos", desc: "Receive customized voice sample auditions to select the ideal voice for your brand." },
          { title: "Timed Audio Matching", desc: "Narration audio engineered to align precisely with original video cut points." },
          { title: "Mastered Audio Files", desc: "Delivered as 24-bit 48kHz WAV files with background noise floor elimination." }
        ],
        useCases: ["Corporate Brand Anthems", "E-learning Course Narrators", "Documentary Voice Tracks", "Museum Audio Guides"],
        workflow: [
          { step: "01", title: "Talent Audition & Selection", desc: "Review audio samples and pick primary voice actor." },
          { step: "02", title: "Studio Recording", desc: "Director-led studio recording session with script pronunciation checks." },
          { step: "03", title: "Post-Production Mixing", desc: "Master audio tracks and sync to video timeline." }
        ],
        faqs: [
          { question: "Do I own full commercial rights to the voiceover recording?", answer: "Yes, all our voiceover packages include full commercial usage rights tailored to your broadcast scope." }
        ]
      },
      {
        slug: "dubbing",
        name: "Dubbing",
        shortDesc: "Full theatrical dialogue dubbing, lip-syncing, and voice replacement.",
        fullDesc: "Immersive multi-character dubbing with precise lip-sync adaptation, preserving emotional weight and dramatic timing.",
        heroHeadline: "Theatrical Lip-Sync Video & Film Dubbing Production",
        benefits: [
          "Strict Lip-Sync & Phonation Alignment",
          "Multi-Character Voice Cast Teams",
          "M&E (Music & Effects) Track Mixing",
          "International Studio Network"
        ],
        features: [
          { title: "Rhythmic Lip Adaptation", desc: "Adapts dialogue script phonemes to match the opening and closing of on-screen mouth shapes." },
          { title: "Multi-Voice Character Ensembles", desc: "Dedicated voice actor for every major and supporting character in the project." },
          { title: "5.1 & 7.1 Surround Mastering", desc: "Professional mixing into surround sound stems ready for theatrical exhibition." }
        ],
        useCases: ["Animated Series & Feature Films", "Television Drama Series", "Video Game Cinematic Scenes", "High-Budget Commercials"],
        workflow: [
          { step: "01", title: "Rythmo-Band Scripting", desc: "Adapt script into precise lip-sync rythmoband format." },
          { step: "02", title: "Voice Recording", desc: "Voice actors record lines while watching synchronized video playback." },
          { step: "03", title: "Audio Stem Mix", desc: "Combine voice stems with original Music & Effects (M&E) track." }
        ],
        faqs: [
          { question: "What is the difference between voice-over and lip-sync dubbing?", answer: "Voice-over places a narrative voice over the audio, while lip-sync dubbing completely replaces original actor dialogue to match target language mouth movements." }
        ]
      },
      {
        slug: "multimedia-qa",
        name: "Multimedia QA",
        shortDesc: "Audio-visual sync checks, volume normalization, and screen asset testing.",
        fullDesc: "Final quality assurance pass inspecting audio loudness, sync, graphic positioning, and video rendering integrity.",
        heroHeadline: "Rigorous Audio-Visual & Multimedia Quality Control",
        benefits: [
          "EBU R128 & ATSC A/85 Audio Loudness Standards",
          "Frame-Level Sync & Drift Auditing",
          "Graphics & On-Screen Text QA",
          "Multi-Platform Device Playback Testing"
        ],
        features: [
          { title: "Audio Normalization Check", desc: "Ensure audio tracks meet strict broadcast decibel loudness specifications (-24 LUFS)." },
          { title: "Screen Graphic Position Check", desc: "Verify lower-third text stays inside TV safe-title margins." },
          { title: "Codec & Bitrate Verification", desc: "Inspect output files for video compression artifacts or dropped frames." }
        ],
        useCases: ["Broadcast Television Delivery", "OTT Streaming Platform Uploads", "Digital Out-Of-Home (DOOH) Billboards", "Interactive Kiosk Video"],
        workflow: [
          { step: "01", title: "Technical File Scan", desc: "Automated analysis of video codecs, audio decibels, and resolutions." },
          { step: "02", title: "Human AV Pass", desc: "Quality engineer watches video end-to-end to flag visual glitches." },
          { step: "03", title: "Compliance Sign-off", desc: "Deliver certificate of technical broadcast compliance." }
        ],
        faqs: [
          { question: "What is LUFS audio normalization?", answer: "LUFS is the international standard measuring audio loudness; broadcast networks mandate specific LUFS levels to ensure consistent volume." }
        ]
      }
    ]
  },
  {
    slug: "legalization-services",
    name: "Legalization Services",
    badgeText: "Global Document Certification",
    iconName: "Award",
    shortDesc: "Apostille, MEA attestation, notarization, embassy attestation, and certificates attestation.",
    fullDesc: "End-to-end international document legalization, notary authentication, state attestation, and embassy authentication for overseas use.",
    items: [
      {
        slug: "apostille",
        name: "Apostille Services",
        shortDesc: "Hague Convention Apostille certification for international legal document validity.",
        fullDesc: "Fast-track Hague Apostille stamp procurement from federal and state authorities for international acceptance.",
        heroHeadline: "Hague Convention Official Apostille Certificate Services",
        benefits: [
          "Valid Across All Hague Convention Member Nations",
          "State & Federal Secretary of State Processing",
          "Fast-Track Expedited Processing Options",
          "Secure Tracked Courier Handling"
        ],
        features: [
          { title: "Document Eligibility Check", desc: "Pre-screen documents to ensure correct notary seals before state filing." },
          { title: "State Department Filing", desc: "Direct hand-delivery processing at Secretary of State authentication offices." },
          { title: "Certified Translation Combo", desc: "Bundle certified translation directly with Apostille stamping." }
        ],
        useCases: ["Overseas Employment Visas", "Foreign Power of Attorney", "International Corporate Registration", "Study Abroad Diplomas"],
        workflow: [
          { step: "01", title: "Document Physical Review", desc: "Verify original notary seal and signature authenticity." },
          { step: "02", title: "Apostille Processing", desc: "Submit document to designated Secretary of State office." },
          { step: "03", title: "Secured Return", desc: "Ship Apostilled document via trackable courier to client." }
        ],
        faqs: [
          { question: "What is an Apostille?", answer: "An Apostille is an official certificate issued under the Hague Convention that authenticates the origin of a public document for use in another member country." }
        ]
      },
      {
        slug: "mea-attestation",
        name: "MEA Attestation",
        shortDesc: "Ministry of External Affairs attestation for personal, educational, & commercial docs.",
        fullDesc: "Official Ministry of External Affairs (MEA) stamp authentication required for non-Hague member nations.",
        heroHeadline: "Ministry of External Affairs (MEA) Official Attestation",
        benefits: [
          "Required for Non-Hague Member Countries",
          "Personal, Educational, & Commercial Document Coverage",
          "State Authentication Pre-clearing",
          "Government Portal Tracking"
        ],
        features: [
          { title: "HRD & Home Department Clearing", desc: "Process initial state-level HRD or Home Department attestation prerequisite stamps." },
          { title: "MEA Sticker & Stamp", desc: "Secure official MEA central government authentication seal." },
          { title: "Embassy Follow-Through", desc: "Seamlessly transition MEA attested documents directly to target embassy." }
        ],
        useCases: ["Middle East Work Visas (UAE, Saudi, Qatar)", "Foreign Commercial Contracts", "Medical Degree Attestation", "Global Trade Certificates"],
        workflow: [
          { step: "01", title: "State Level Verification", desc: "Obtain required Regional Authentication Center or Home Dept stamp." },
          { step: "02", title: "MEA Submission", desc: "Submit to Ministry of External Affairs for central government attestation." },
          { step: "03", title: "Dispatch / Embassy Hand-off", desc: "Forward to embassy or return via insured delivery." }
        ],
        faqs: [
          { question: "When is MEA attestation needed instead of an Apostille?", answer: "MEA attestation is required when presenting documents in countries that are NOT signatories to the Hague Apostille Convention (such as UAE, Qatar, Kuwait)." }
        ]
      },
      {
        slug: "notarization",
        name: "Notarization Services",
        shortDesc: "State notary public witness, remote online notarization (RON), and legal acknowledgments.",
        fullDesc: "Certified Notary Public authentication of legal signatures, affidavits, contracts, and sworn statements.",
        heroHeadline: "In-Person & Remote Online Notarization (RON) Services",
        benefits: [
          "Commissioned Notary Public Verification",
          "Remote Online Notarization (RON) 24/7",
          "In-Person Mobile Notary Dispatch",
          "Legal Identity & Identity Proofing Compliance"
        ],
        features: [
          { title: "Remote Online Notarization (RON)", desc: "Execute legally binding electronic notarizations via encrypted live video call." },
          { title: "Identity Verification Protocol", desc: "KBA (Knowledge-Based Authentication) and passport credential analysis." },
          { title: "Digital Embossed Seal", desc: "Tamper-evident digital notary seal attachment." }
        ],
        useCases: ["Affidavits & Sworn Statements", "Real Estate Deeds & Mortgages", "Corporate Resolution Signatures", "Powers of Attorney"],
        workflow: [
          { step: "01", title: "Identity Pre-Check", desc: "Upload government photo ID for automated verification." },
          { step: "02", title: "Live Video Notary Call", desc: "Meet commissioned notary online to sign document electronically." },
          { step: "03", title: "Instant Download", desc: "Download tamper-sealed notarized PDF document immediately." }
        ],
        faqs: [
          { question: "Is Remote Online Notarization (RON) legally recognized everywhere?", answer: "Yes, RON is legally recognized across the US and accepted internationally under interstate and international notary recognition laws." }
        ]
      },
      {
        slug: "embassy-attestation",
        name: "Embassy Attestation",
        shortDesc: "Consular legalization and embassy seals for international travel and business.",
        fullDesc: "Complete embassy legalization service handling submission and retrieval across foreign consulates worldwide.",
        heroHeadline: "Consular & Foreign Embassy Legalization Services",
        benefits: [
          "Direct Embassy Representation",
          "Full Consular Fee & Voucher Management",
          "Pre-Submission Compliance Audits",
          "Global Consulate Network Coverage"
        ],
        features: [
          { title: "Consular Requirement Audit", desc: "Ensure documents meet strict individual embassy formatting and fee requirements." },
          { title: "In-Person Hand Submission", desc: "Couriers hand-deliver files directly to consulate windows." },
          { title: "Chamber of Commerce Coordination", desc: "Obtain prerequisite Chamber of Commerce stamps for commercial invoices." }
        ],
        useCases: ["Commercial Export Documents", "Work & Family Visa Packets", "Foreign Business Branch Registrations", "International Bidding Tenders"],
        workflow: [
          { step: "01", title: "Prerequisite Verification", desc: "Verify document has required notary, state, and MEA seals." },
          { step: "02", title: "Consulate Filing", desc: "Submit document and pay official embassy legalization fees." },
          { step: "03", title: "Consular Stamp Verification", desc: "Inspect final embassy sticker/seal before secure dispatch." }
        ],
        faqs: [
          { question: "How long does Embassy Attestation take?", answer: "Turnaround varies by country consulate, typically ranging from 3 to 10 business days." }
        ]
      },
      {
        slug: "certificates-attestation",
        name: "Certificates Attestation",
        shortDesc: "Birth, marriage, degree, commercial invoice, and experience certificate attestation.",
        fullDesc: "Hassle-free attestation management for personal certificates, educational diplomas, and corporate credentials.",
        heroHeadline: "Personal, Educational & Commercial Certificate Attestation",
        benefits: [
          "Complete Turnkey Certificate Handling",
          "Educational Degree Verification",
          "Birth & Marriage Certificate Attestation",
          "Corporate Articles & Invoice Legalization"
        ],
        features: [
          { title: "University Verification Assistance", desc: "Coordinate directly with universities to verify degree transcript authenticity." },
          { title: "Vital Records Processing", desc: "Attest government-issued birth, marriage, and death certificates." },
          { title: "End-to-End Tracking Portal", desc: "Real-time SMS and online tracking updates as document moves through government departments." }
        ],
        useCases: ["Global Job Employment Offers", "Overseas Family Visas", "International University Enrollment", "Cross-Border Trade Invoices"],
        workflow: [
          { step: "01", title: "Intake Scan", desc: "Review certificate details and destination country requirements." },
          { step: "02", title: "Sequential Stamp Processing", desc: "Execute notary, state, central government, and embassy stamps." },
          { step: "03", title: "Final Return Delivery", desc: "Deliver fully attested original certificate via insured courier." }
        ],
        faqs: [
          { question: "Do I need to send the original physical certificate?", answer: "For most attestation processes, government authorities mandate physical original certificates, which we transport via insured courier." }
        ]
      }
    ]
  },
  {
    slug: "desktop-publishing-dtp",
    name: "Desktop Publishing | DTP",
    badgeText: "Multilingual Layout & Design",
    iconName: "Layout",
    shortDesc: "InDesign, Illustrator, Photoshop, brochures, catalogs, AutoCAD drafting, and technical drawings.",
    fullDesc: "Multilingual graphic formatting, typesetting, prepress layout, and CAD drafting ensuring translated documents match original designs perfectly.",
    items: [
      {
        slug: "indesign",
        name: "InDesign DTP",
        shortDesc: "Multilingual page layout, typography, master pages, and prepress in Adobe InDesign.",
        fullDesc: "Format translated InDesign (.INDD) documents into pixel-perfect multilingual publications adhering to strict print standards.",
        heroHeadline: "Multilingual Adobe InDesign Page Layout & Prepress Formatting",
        benefits: [
          "Native .INDD & .IDML File Formatting",
          "Right-to-Left (RTL) Layout Adaptations",
          "Font Substitution & Kerning Fine-Tuning",
          "Print-Ready PDF/X Output Generation"
        ],
        features: [
          { title: "Master Page & Style Sheet Sync", desc: "Update Paragraph Styles, Character Styles, and Master Pages across localized languages." },
          { title: "RTL Script Mirroring", desc: "Invert book layouts, page numbering, and margin columns for Arabic and Hebrew." },
          { title: "Preflight Error Elimination", desc: "Fix overset text frames, missing links, and RGB-to-CMYK color conversions." }
        ],
        useCases: ["Corporate Magazines & Annual Reports", "Product Instruction Manuals", "Marketing Booklets & Whitepapers", "Multi-Language Books"],
        workflow: [
          { step: "01", title: "IDML Export", desc: "Export clean IDML package for translation." },
          { step: "02", title: "Translated Lay-in", desc: "Import target translation back into InDesign layout." },
          { step: "03", title: "DTP Layout Fixes", desc: "Adjust text frames, font sizes, leading, and image positions." }
        ],
        faqs: [
          { question: "How do you handle languages that expand in length compared to English?", answer: "Our DTP specialists carefully adjust font size, tracking, leading, and frame dimensions without violating design aesthetics." }
        ]
      },
      {
        slug: "illustrator",
        name: "Illustrator DTP",
        shortDesc: "Vector graphics localization, vector fonts, packaging dielines, and infographics.",
        fullDesc: "Localize complex vector illustrations, packaging art, logos, and infographics directly inside Adobe Illustrator files.",
        heroHeadline: "Multilingual Vector Graphics & Illustrator Asset Localization",
        benefits: [
          "Native Adobe Illustrator (.AI) File Editing",
          "Outlined Vector Font Conversion",
          "Layered Vector Infographic Translation",
          "Packaging Dieline Layout Formatting"
        ],
        features: [
          { title: "Vector Text Layer Management", desc: "Translate text layers while preserving dropshadows, masks, and vector effects." },
          { title: "Font License & Outline Safety", desc: "Convert text to vector outlines prior to prepress to prevent missing font rendering errors." },
          { title: "Multi-Artboard Formatting", desc: "Manage multi-page campaign artwork across complex Illustrator artboards." }
        ],
        useCases: ["Consumer Product Box Packaging", "Infographics & Diagrams", "Vector Marketing Banners", "Logo & Brand Mark Adaptation"],
        workflow: [
          { step: "01", title: "Layer Extraction", desc: "Isolate text layers from background vector artwork." },
          { step: "02", title: "Text Lay-in & Formatting", desc: "Insert translated text and re-center vector callouts." },
          { step: "03", title: "Prepress Vector Export", desc: "Export high-resolution EPS or vector PDF files." }
        ],
        faqs: [
          { question: "Can you edit text that has been converted to curves/outlines in Illustrator?", answer: "Yes, our designers can re-type and match original vector fonts even if original text was converted to outlines." }
        ]
      },
      {
        slug: "photoshop",
        name: "Photoshop DTP",
        shortDesc: "Raster image text editing, multi-layer PSD editing, and localized visual assets.",
        fullDesc: "Retouch and format text overlays inside multi-layered Photoshop (.PSD) raster graphics, web banners, and posters.",
        heroHeadline: "Multilingual Photoshop Raster Graphics & Image Editing",
        benefits: [
          "Layered Adobe Photoshop (.PSD) Text Editing",
          "Non-Destructive Retouching & Text Erasure",
          "Web & Print DPI Optimization",
          "Special Effects & Blending Match"
        ],
        features: [
          { title: "Seamless Text Background Inpainting", desc: "Remove embedded source text from complex flattened image backgrounds." },
          { title: "Blending Mode & Filter Matching", desc: "Recreate exact layer styles, glows, drop shadows, and color gradients on translated text." },
          { title: "Web & Mobile Image Export", desc: "Export optimized WebP, PNG, and JPEG formats in required resolutions." }
        ],
        useCases: ["Digital Marketing Web Banners", "Movie & Event Posters", "Social Media Graphics", "E-commerce Hero Images"],
        workflow: [
          { step: "01", title: "PSD Layer Inspection", desc: "Analyze text layers and background retouching needs." },
          { step: "02", title: "Text Inpainting & Lay-in", desc: "Clean background and insert localized text." },
          { step: "03", title: "Layer Style Sync", desc: "Apply matching drop shadows, gradients, and export." }
        ],
        faqs: [
          { question: "What if I only have a flattened JPEG image without the original PSD layers?", answer: "Our Photoshop artists can perform background reconstruction to remove English text and seamlessly lay in target translation text." }
        ]
      },
      {
        slug: "brochure-flyer",
        name: "Brochure & Flyer DTP",
        shortDesc: "Trifold, bifold, marketing flyers, sales slicks, and print promotion layout.",
        fullDesc: "Typesetting and prepress layout formatting for promotional trifold brochures, corporate flyers, and sales slicks.",
        heroHeadline: "Multilingual Brochure, Flyer & Sales Slick DTP",
        benefits: [
          "Trifold, Bifold, & Z-Fold Folding Alignment",
          "High-Impact Marketing Layout Polish",
          "Print Bleed & Crop Mark Setup",
          "Fast Turnaround Prepress Services"
        ],
        features: [
          { title: "Panel Folding Crease Check", desc: "Ensure text columns do not cross physical brochure fold lines when localized text expands." },
          { title: "High-Resolution Image Inspection", desc: "Verify embedded images maintain 300 DPI print quality." },
          { title: "Commercial Print Specs", desc: "Include 3mm print bleeds, trim marks, and CMYK color profiles." }
        ],
        useCases: ["Trade Show Handout Flyers", "Corporate Sales Slicks", "Product Spec Sheets", "Event Trifold Pamphlets"],
        workflow: [
          { step: "01", title: "Fold Geometry Audit", desc: "Review brochure fold dimensions and margin limits." },
          { step: "02", title: "Multilingual Lay-in", desc: "Format translated copy per panel fold." },
          { step: "03", title: "Print Proof Approval", desc: "Deliver press-ready PDF with crop marks." }
        ],
        faqs: [
          { question: "Do you supply print-ready PDFs with crop marks and bleeds?", answer: "Yes, we deliver press-ready PDFs configured to your printing company's exact bleed and CMYK specs." }
        ]
      },
      {
        slug: "catalog",
        name: "Catalog DTP",
        shortDesc: "Large multi-page product catalogs, SKUs, tables, and price list layouts.",
        fullDesc: "High-volume DTP formatting for multi-hundred page product catalogs, indexing, tabular data, and price sheets.",
        heroHeadline: "Enterprise Product Catalog & Indexing DTP Formatting",
        benefits: [
          "High-Volume Multi-Page Catalog Processing",
          "Automated Table & SKU Price Formatting",
          "Index & Table of Contents Relinking",
          "Database-Driven Layout Automation"
        ],
        features: [
          { title: "Tabular SKU Data Alignment", desc: "Align complex product number grids, dimensions, and multi-currency price columns." },
          { title: "Automated TOC & Index Update", desc: "Re-generate dynamic page number references for index and table of contents." },
          { title: "Cross-Catalog Style Consistency", desc: "Maintain uniform paragraph style sheets across 500+ page publication files." }
        ],
        useCases: ["Industrial Parts Catalogs", "Retail Product Directories", "Wholesale Price Guides", "Medical Equipment Directories"],
        workflow: [
          { step: "01", title: "Catalog Template Setup", desc: "Configure global style sheets and table formats." },
          { step: "02", title: "Batch Page Lay-in", desc: "Import translated SKU tables and product descriptions." },
          { step: "03", title: "TOC & Index Regeneration", desc: "Rebuild index page numbers and perform full page audit." }
        ],
        faqs: [
          { question: "How do you handle 500+ page catalogs efficiently?", answer: "We use automated data merge scripts in InDesign combined with dedicated DTP teams working in parallel." }
        ]
      },
      {
        slug: "autocad-drafting",
        name: "AutoCAD Drafting",
        shortDesc: "Multilingual CAD text layer translation, DWG/DXF editing, and drafting.",
        fullDesc: "Translate and re-format text layers inside AutoCAD (.DWG, .DXF) engineering schematics, architectural blueprints, and CAD models.",
        heroHeadline: "Multilingual AutoCAD (.DWG / .DXF) Text Drafting & Schematic Translation",
        benefits: [
          "Native DWG & DXF File Translation",
          "Preserved Layer Geometry & CAD Dimensions",
          "SHX & TrueType Font Substitution",
          "Plot Style (.CTB) Print Preset Preserved"
        ],
        features: [
          { title: "CAD Layer Separation", desc: "Isolate text annotation layers without modifying underlying vector geometry or dimensional constraints." },
          { title: "Specialized Font Substitution", desc: "Replace missing CAD SHX fonts with Unicode-compliant TrueType fonts that support target language characters." },
          { title: "Title Block & Legend Translation", desc: "Translate title block metadata, revision history notes, and symbol legend keys." }
        ],
        useCases: ["Architectural Construction Blueprints", "Electrical & Plumbing Schematics", "Civil Infrastructure Drawings", "Mechanical Component Models"],
        workflow: [
          { step: "01", title: "DXF Extraction", desc: "Extract CAD text entities to translation environment." },
          { step: "02", title: "SME Technical Translation", desc: "Translate engineering callouts and legend terms." },
          { step: "03", title: "CAD Re-injection & Plot QA", desc: "Import text back into DWG layer, adjust text box bounds, and plot test PDF." }
        ],
        faqs: [
          { question: "Will translating text alter the exact measurements or lines in my CAD drawing?", answer: "No. CAD drawing lines and dimensions are locked on separate layers; only annotation text layers are updated." }
        ]
      },
      {
        slug: "engineering-drawings",
        name: "Engineering Drawings",
        shortDesc: "BOM (Bill of Materials), mechanical schematics, assembly diagrams, and CAD translation.",
        fullDesc: "Comprehensive translation and typesetting for complex engineering drawings, Bill of Materials (BOM) tables, and technical blueprints.",
        heroHeadline: "Engineering Drawings & Bill of Materials (BOM) Translation",
        benefits: [
          "BOM Table Translation & Structuring",
          "ISO & ANSI Standard Blueprint Compliance",
          "SolidWorks, MicroStation, & AutoCAD Support",
          "Sub-contractor Pre-Manufacturing Verification"
        ],
        features: [
          { title: "Bill of Materials (BOM) Sync", desc: "Translate part descriptions, material specifications, and quantities accurately." },
          { title: "Geometric Dimensioning & Tolerancing (GD&T)", desc: "Preserve standard GD&T symbols and callout pointers." },
          { title: "Multi-Sheet Set Management", desc: "Process complex multi-sheet drawing packages consistently." }
        ],
        useCases: ["Aerospace Manufacturing Blueprints", "Automotive Sub-Assembly Drawings", "Industrial Plant Piping Layouts", "Electronics Circuit Board Schematics"],
        workflow: [
          { step: "01", title: "Drawing Set Intake", desc: "Catalog all drawing sheets, assembly callouts, and BOM tables." },
          { step: "02", title: "Technical Translation", desc: "Translate specs using standardized engineering glossaries." },
          { step: "03", title: "Pre-Manufacturing QA", desc: "Verify zero overlap between translated text and drawing leader lines." }
        ],
        faqs: [
          { question: "Which engineering software formats do you accept?", answer: "We accept AutoCAD DWG/DXF, MicroStation DGN, SolidWorks, Revit, and PDF technical drawing packages." }
        ]
      }
    ]
  }
];

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return SERVICE_CATEGORIES.find((cat) => cat.slug === slug);
}

export function getServiceBySlugs(categorySlug: string, serviceSlug: string): { category: ServiceCategory; service: ChildService } | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  const service = category.items.find((item) => item.slug === serviceSlug);
  if (!service) return undefined;
  return { category, service };
}

export function getAllServiceParams() {
  const params: { category: string; service: string }[] = [];
  SERVICE_CATEGORIES.forEach((cat) => {
    cat.items.forEach((item) => {
      params.push({ category: cat.slug, service: item.slug });
    });
  });
  return params;
}
