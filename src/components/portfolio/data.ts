export const RESUME_URL = "/resume.pdf";

export const LINKS = {
  github: "https://github.com/manasibhangale",
  linkedin: "https://www.linkedin.com/in/manasi-bhangale-5878662b3/",
  leetcode: "https://leetcode.com/u/codewithmanasi/",
  email: "manasibhangale2004@gmail.com",
};

export type Project = {
  name: string;
  tagline: string;
  summary: string;
  tech: string[];
  features: string[];
  architecture?: string[];
  depth?: { q: string; a: string }[];
  github: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    name: "AcademIQ",
    tagline: "Academic Document Intelligence & RAG Platform",
    summary:
      "A retrieval-augmented Q&A system that lets students query academic material across 5 input formats — PDF, DOCX, TXT, images and URLs — with answers grounded in the source document and inference kept fully on-device.",
    tech: [
      "Python",
      "LangChain",
      "FAISS",
      "Sentence Transformers",
      "Ollama",
      "Streamlit",
    ],
    features: [
      "Multi-format ingestion (PDF · DOCX · TXT · image · URL)",
      "Overlapping chunking — 400-char chunks with 50-char overlap",
      "Embeddings via all-MiniLM-L6-v2",
      "FAISS similarity search over the vector index",
      "Grounded generation with Mistral / Phi-3 Mini through Ollama",
      "Layered features: document Q&A, quiz generation, paper analysis",
    ],
    architecture: [
      "Documents (PDF · DOCX · TXT · IMG · URL)",
      "Document Loader",
      "Text Splitter (400 / 50 overlap)",
      "Embeddings — all-MiniLM-L6-v2",
      "FAISS Vector Index",
      "Retriever (top-k context)",
      "Local LLM — Mistral / Phi-3 via Ollama",
      "Grounded Answer",
    ],
    depth: [
      {
        q: "Problem",
        a: "Students lose time hunting through long academic PDFs, and generic chatbots answer without the source in front of them.",
      },
      {
        q: "Why this architecture",
        a: "Retrieval keeps answers tied to the actual document, and running the LLM locally through Ollama means coursework never leaves the machine.",
      },
      {
        q: "What I built",
        a: "The full backend pipeline — loaders, the chunking strategy, embedding generation, FAISS indexing and the retrieval-to-LLM handoff.",
      },
      {
        q: "Hardest part",
        a: "Chunk sizing. Large chunks diluted the retrieval signal, small chunks cut sentences in half. A 400-character window with 50-character overlap held context across boundaries, validated on a 500+ page test set.",
      },
      {
        q: "Result",
        a: "Answers stay anchored to retrieved context, noticeably reducing hallucinations compared with asking the same model without retrieval.",
      },
    ],
    github: "https://github.com/manasibhangale/final_year_BTech_project",
    featured: true,
  },
  {
    name: "Onyx",
    tagline: "Offline AI Voice Assistant with Tool Calling",
    summary:
      "A fully offline, wake-word activated assistant that chains speech recognition, local LLM reasoning, tool calling and speech synthesis into one conversational loop — no cloud service anywhere in the path.",
    tech: [
      "Python",
      "Ollama",
      "Qwen3:14B",
      "Qwen2.5-VL",
      "Faster-Whisper",
      "openWakeWord",
      "Coqui XTTS-v2",
      "ChromaDB",
    ],
    features: [
      "Custom-trained openWakeWord model for hands-free activation",
      "Speech-to-text with Faster-Whisper",
      "Tool calling: web search, GitHub search, Wikipedia, Windows automation",
      "Vision-based screen analysis via Qwen2.5-VL",
      "Text-to-speech with XTTS-v2 and GPU / CPU / Piper fallback",
      "Persistent conversational memory in ChromaDB",
    ],
    architecture: [
      "Wake word — openWakeWord",
      "Speech to Text — Faster-Whisper",
      "Local LLM — Qwen3:14B via Ollama",
      "Tool Router (search · vision · system automation)",
      "Memory — ChromaDB",
      "Text to Speech — Coqui XTTS-v2",
      "HUD Overlay",
    ],
    depth: [
      {
        q: "Problem",
        a: "Voice assistants stream everything you say to a server. I wanted the same interaction loop with nothing leaving the device.",
      },
      {
        q: "What I built",
        a: "The modular pipeline itself — wake word, STT, the tool-calling layer over the local LLM, memory and TTS with automatic hardware fallback.",
      },
      {
        q: "Hardest part",
        a: "Latency and hardware variability. XTTS-v2 needs a GPU to feel responsive, so I added an automatic CPU and Piper fallback so it degrades instead of failing.",
      },
    ],
    github: "https://github.com/manasibhangale/Onyx",
    featured: true,
  },
  {
    name: "Clarity",
    tagline: "On-Device AI Reading Assistant — Chrome Extension",
    summary:
      "A browser extension that summarises and explains page content using on-device AI, so reading assistance works without shipping page text to an external API.",
    tech: ["JavaScript", "Chrome Extensions API", "On-device AI", "HTML/CSS"],
    features: [
      "In-page summarisation of selected text",
      "Simplified explanations for dense passages",
      "Runs locally in the browser — no page content uploaded",
    ],
    github:
      "https://github.com/manasibhangale/Clarity--On-Device-AI-Reading-Assistant-Chrome-Extension-",
  },
  {
    name: "CartWise Analytics",
    tagline: "Retail Data Analytics & Business Intelligence",
    summary:
      "An end-to-end analytics workflow over retail transaction data — cleaning, exploratory analysis and dashboards surfacing sales patterns and customer behaviour.",
    tech: ["Python", "Pandas", "NumPy", "Power BI", "SQL"],
    features: [
      "Data cleaning and preprocessing pipeline",
      "Exploratory analysis of sales and basket patterns",
      "Interactive Power BI dashboard for business metrics",
    ],
    github: "https://github.com/manasibhangale/Cartwise_Analytics",
  },
  {
    name: "Resume Analyzer",
    tagline: "NLP-Based Resume Screening Tool",
    summary:
      "Parses resumes, extracts skills and experience, and scores them against a job description using natural language processing.",
    tech: ["Python", "NLP", "Scikit-learn", "Streamlit"],
    features: [
      "Resume parsing and skill extraction",
      "Job-description matching and scoring",
      "Streamlit interface for quick review",
    ],
    github: "https://github.com/manasibhangale/resumeanalyzer",
  },
  {
    name: "Intruder Detection",
    tagline: "Real-Time Computer Vision Surveillance",
    summary:
      "A webcam-based detection system that flags unrecognised presence in a monitored frame and logs the event.",
    tech: ["Python", "OpenCV", "Computer Vision"],
    features: [
      "Real-time motion and face detection",
      "Event capture and logging",
      "Runs on a standard webcam feed",
    ],
    github: "https://github.com/manasibhangale/intruder-detection-opencv",
  },
];

export const SKILLS: {
  group: string;
  items: { name: string; slug?: string }[];
}[] = [
  {
    group: "Languages",
    items: [
      { name: "Python", slug: "python" },
      { name: "Java", slug: "openjdk" },
      { name: "JavaScript", slug: "javascript" },
      { name: "SQL", slug: "postgresql" },
    ],
  },
  {
    group: "AI / GenAI",
    items: [
      { name: "LangChain", slug: "langchain" },
      { name: "RAG", slug: "langchain" },
      { name: "LLMs", slug: "openai" },
      { name: "Prompt Engineering", slug: "openai" },
      { name: "Hugging Face", slug: "huggingface" },
      { name: "Transformers", slug: "huggingface" },
      { name: "Vector Embeddings", slug: "meta" },
      { name: "Ollama", slug: "ollama" },
    ],
  },
  {
    group: "ML & Computer Vision",
    items: [
      { name: "Scikit-learn", slug: "scikitlearn" },
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "Keras", slug: "keras" },
      { name: "XGBoost", slug: "python" },
      { name: "OpenCV", slug: "opencv" },
      { name: "MediaPipe", slug: "mediapipe" },
      { name: "YOLOv8", slug: "ultralytics" },
    ],
  },
  {
    group: "Backend & MLOps",
    items: [
      { name: "FastAPI", slug: "fastapi" },
      { name: "Flask", slug: "flask" },
      { name: "REST APIs", slug: "openapiinitiative" },
      { name: "SQLAlchemy", slug: "sqlalchemy" },
      { name: "Docker", slug: "docker" },
      { name: "Docker Compose", slug: "docker" },
    ],
  },
  {
    group: "Data & Analytics",
    items: [
      { name: "Pandas", slug: "pandas" },
      { name: "NumPy", slug: "numpy" },
      { name: "EDA", slug: "pandas" },
      { name: "Power BI", slug: "powerbi" },
      { name: "Tableau", slug: "tableau" },
      { name: "Advanced Excel", slug: "microsoftexcel" },
    ],
  },
  {
    group: "Databases & Vector Stores",
    items: [
      { name: "MySQL", slug: "mysql" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "SQLite", slug: "sqlite" },
      { name: "FAISS", slug: "meta" },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "Postman", slug: "postman" },
      { name: "Swagger", slug: "swagger" },
      { name: "Streamlit", slug: "streamlit" },
      { name: "VS Code", slug: "visualstudiocode" },
    ],
  },
  {
    group: "Core CS",
    items: [
      { name: "DSA", slug: "leetcode" },
      { name: "OOP", slug: "openjdk" },
      { name: "DBMS", slug: "postgresql" },
      { name: "Operating Systems", slug: "linux" },
      { name: "Computer Networks", slug: "openapiinitiative" },
    ],
  },
];

export const EXPERIENCE = {
  role: "Software Developer Intern",
  company: "SiliconMount Tech Services",
  mode: "Remote",
  period: "Dec 2025 — Present",
  points: [
    "Developed an AI-powered smart proctoring system with Python, FastAPI, OpenCV, MediaPipe and YOLOv8 for real-time candidate monitoring, facial analysis and automated detection across multiple violation scenarios.",
    "Built an AI chatbot for myBOQ enabling natural-language interaction with BOQ documents, integrating backend services with LLM-based workflows for contextual query resolution.",
    "Performed business analysis for warehouse and inventory systems — documenting functional requirements across product master, purchase orders, batch/lot tracking, expiry management, repacking and warehouse operations.",
    "Translated client requirements into technical solutions and contributed to BOQ estimation software enhancements, backend feature development, documentation and deployment-oriented practices.",
  ],
};

export const ACHIEVEMENTS = [
  {
    title: "Open Source Contributor",
    detail: "GirlScript Summer of Code (GSSoC) 2025",
  },
  {
    title: "Smart India Hackathon 2025",
    detail: "Cleared the internal evaluation round",
  },
  {
    title: "LeetCode — Rating 1,749",
    detail: "Top 10.45% · 200+ problems solved · 74.81% acceptance",
  },
  {
    title: "Technical Coordinator, GDSC DBATU",
    detail: "Organised workshops and peer learning initiatives",
  },
];

export const CERTIFICATIONS = [
  "Data Science, Machine Learning, Deep Learning & NLP — Udemy",
  "Generative AI with LangChain & Hugging Face — Udemy",
  "Artificial Intelligence — Acmegrade (Mood Indigo, IIT Bombay)",
];

export const EDUCATION = {
  school: "Dr. Babasaheb Ambedkar Technological University, Lonere",
  degree: "B.Tech — Computer Engineering",
  cgpa: "CGPA 8.13",
  period: "2022 — 2026",
};
