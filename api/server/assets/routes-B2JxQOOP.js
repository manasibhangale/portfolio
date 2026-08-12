import { useEffect, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/portfolio/icons.tsx
function Monogram({ className = "" }) {
	return /* @__PURE__ */ jsxs("svg", {
		viewBox: "0 0 40 40",
		className,
		"aria-hidden": "true",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		children: [
			/* @__PURE__ */ jsx("rect", {
				x: "1",
				y: "1",
				width: "38",
				height: "38",
				rx: "3"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M9 29V13l6.5 9L22 13v16",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ jsx("path", { d: "M26 29V13h4.5a4.5 4.5 0 0 1 0 9H26m0 0h5a4 4 0 0 1 0 7h-5" })
		]
	});
}
function GithubIcon({ className = "" }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "currentColor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsx("path", { d: "M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" })
	});
}
function LinkedinIcon({ className = "" }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "currentColor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsx("path", { d: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.9 21.5V9.75h4.17V21.5H2.9Zm7.03 0V9.75h4v1.6h.06c.56-1.02 1.93-2.1 3.98-2.1 4.25 0 5.03 2.72 5.03 6.26v5.99h-4.17v-5.31c0-1.27-.02-2.9-1.8-2.9-1.8 0-2.08 1.38-2.08 2.81v5.4H9.93Z" })
	});
}
function MailIcon({ className = "" }) {
	return /* @__PURE__ */ jsxs("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.8",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ jsx("rect", {
			x: "2.5",
			y: "4.5",
			width: "19",
			height: "15",
			rx: "2"
		}), /* @__PURE__ */ jsx("path", { d: "m3 6 9 7 9-7" })]
	});
}
function ArrowIcon({ className = "" }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.8",
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsx("path", {
			d: "M7 17 17 7M9 7h8v8",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
function DownloadIcon({ className = "" }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.8",
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsx("path", {
			d: "M12 3v12m0 0 4-4m-4 4-4-4M4 19h16",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
function LeetCodeIcon({ className = "" }) {
	return /* @__PURE__ */ jsxs("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ jsx("path", { d: "M13.5 4.5 8 10l-3-3 5.5-5.5 3 3Z" }),
			/* @__PURE__ */ jsx("path", { d: "M20 13.5 8 10" }),
			/* @__PURE__ */ jsx("path", { d: "M13 16H5.5a3 3 0 0 1 0-6H16" }),
			/* @__PURE__ */ jsx("path", { d: "M13 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" })
		]
	});
}
//#endregion
//#region src/components/portfolio/data.ts
var RESUME_URL = "/resume.pdf";
var LINKS = {
	github: "https://github.com/manasibhangale",
	linkedin: "https://www.linkedin.com/in/manasi-bhangale-5878662b3/",
	leetcode: "https://leetcode.com/u/codewithmanasi/",
	email: "manasibhangale2004@gmail.com"
};
var PROJECTS = [
	{
		name: "AcademIQ",
		tagline: "Academic Document Intelligence & RAG Platform",
		summary: "A retrieval-augmented Q&A system that lets students query academic material across 5 input formats — PDF, DOCX, TXT, images and URLs — with answers grounded in the source document and inference kept fully on-device.",
		tech: [
			"Python",
			"LangChain",
			"FAISS",
			"Sentence Transformers",
			"Ollama",
			"Streamlit"
		],
		features: [
			"Multi-format ingestion (PDF · DOCX · TXT · image · URL)",
			"Overlapping chunking — 400-char chunks with 50-char overlap",
			"Embeddings via all-MiniLM-L6-v2",
			"FAISS similarity search over the vector index",
			"Grounded generation with Mistral / Phi-3 Mini through Ollama",
			"Layered features: document Q&A, quiz generation, paper analysis"
		],
		architecture: [
			"Documents (PDF · DOCX · TXT · IMG · URL)",
			"Document Loader",
			"Text Splitter (400 / 50 overlap)",
			"Embeddings — all-MiniLM-L6-v2",
			"FAISS Vector Index",
			"Retriever (top-k context)",
			"Local LLM — Mistral / Phi-3 via Ollama",
			"Grounded Answer"
		],
		depth: [
			{
				q: "Problem",
				a: "Students lose time hunting through long academic PDFs, and generic chatbots answer without the source in front of them."
			},
			{
				q: "Why this architecture",
				a: "Retrieval keeps answers tied to the actual document, and running the LLM locally through Ollama means coursework never leaves the machine."
			},
			{
				q: "What I built",
				a: "The full backend pipeline — loaders, the chunking strategy, embedding generation, FAISS indexing and the retrieval-to-LLM handoff."
			},
			{
				q: "Hardest part",
				a: "Chunk sizing. Large chunks diluted the retrieval signal, small chunks cut sentences in half. A 400-character window with 50-character overlap held context across boundaries, validated on a 500+ page test set."
			},
			{
				q: "Result",
				a: "Answers stay anchored to retrieved context, noticeably reducing hallucinations compared with asking the same model without retrieval."
			}
		],
		github: "https://github.com/manasibhangale/final_year_BTech_project",
		featured: true
	},
	{
		name: "Onyx",
		tagline: "Offline AI Voice Assistant with Tool Calling",
		summary: "A fully offline, wake-word activated assistant that chains speech recognition, local LLM reasoning, tool calling and speech synthesis into one conversational loop — no cloud service anywhere in the path.",
		tech: [
			"Python",
			"Ollama",
			"Qwen3:14B",
			"Qwen2.5-VL",
			"Faster-Whisper",
			"openWakeWord",
			"Coqui XTTS-v2",
			"ChromaDB"
		],
		features: [
			"Custom-trained openWakeWord model for hands-free activation",
			"Speech-to-text with Faster-Whisper",
			"Tool calling: web search, GitHub search, Wikipedia, Windows automation",
			"Vision-based screen analysis via Qwen2.5-VL",
			"Text-to-speech with XTTS-v2 and GPU / CPU / Piper fallback",
			"Persistent conversational memory in ChromaDB"
		],
		architecture: [
			"Wake word — openWakeWord",
			"Speech to Text — Faster-Whisper",
			"Local LLM — Qwen3:14B via Ollama",
			"Tool Router (search · vision · system automation)",
			"Memory — ChromaDB",
			"Text to Speech — Coqui XTTS-v2",
			"HUD Overlay"
		],
		depth: [
			{
				q: "Problem",
				a: "Voice assistants stream everything you say to a server. I wanted the same interaction loop with nothing leaving the device."
			},
			{
				q: "What I built",
				a: "The modular pipeline itself — wake word, STT, the tool-calling layer over the local LLM, memory and TTS with automatic hardware fallback."
			},
			{
				q: "Hardest part",
				a: "Latency and hardware variability. XTTS-v2 needs a GPU to feel responsive, so I added an automatic CPU and Piper fallback so it degrades instead of failing."
			}
		],
		github: "https://github.com/manasibhangale/Onyx",
		featured: true
	},
	{
		name: "Clarity",
		tagline: "On-Device AI Reading Assistant — Chrome Extension",
		summary: "A browser extension that summarises and explains page content using on-device AI, so reading assistance works without shipping page text to an external API.",
		tech: [
			"JavaScript",
			"Chrome Extensions API",
			"On-device AI",
			"HTML/CSS"
		],
		features: [
			"In-page summarisation of selected text",
			"Simplified explanations for dense passages",
			"Runs locally in the browser — no page content uploaded"
		],
		github: "https://github.com/manasibhangale/Clarity--On-Device-AI-Reading-Assistant-Chrome-Extension-"
	},
	{
		name: "CartWise Analytics",
		tagline: "Retail Data Analytics & Business Intelligence",
		summary: "An end-to-end analytics workflow over retail transaction data — cleaning, exploratory analysis and dashboards surfacing sales patterns and customer behaviour.",
		tech: [
			"Python",
			"Pandas",
			"NumPy",
			"Power BI",
			"SQL"
		],
		features: [
			"Data cleaning and preprocessing pipeline",
			"Exploratory analysis of sales and basket patterns",
			"Interactive Power BI dashboard for business metrics"
		],
		github: "https://github.com/manasibhangale/Cartwise_Analytics"
	},
	{
		name: "Resume Analyzer",
		tagline: "NLP-Based Resume Screening Tool",
		summary: "Parses resumes, extracts skills and experience, and scores them against a job description using natural language processing.",
		tech: [
			"Python",
			"NLP",
			"Scikit-learn",
			"Streamlit"
		],
		features: [
			"Resume parsing and skill extraction",
			"Job-description matching and scoring",
			"Streamlit interface for quick review"
		],
		github: "https://github.com/manasibhangale/resumeanalyzer"
	},
	{
		name: "Intruder Detection",
		tagline: "Real-Time Computer Vision Surveillance",
		summary: "A webcam-based detection system that flags unrecognised presence in a monitored frame and logs the event.",
		tech: [
			"Python",
			"OpenCV",
			"Computer Vision"
		],
		features: [
			"Real-time motion and face detection",
			"Event capture and logging",
			"Runs on a standard webcam feed"
		],
		github: "https://github.com/manasibhangale/intruder-detection-opencv"
	}
];
var SKILLS = [
	{
		group: "Languages",
		items: [
			{
				name: "Python",
				slug: "python"
			},
			{
				name: "Java",
				slug: "openjdk"
			},
			{
				name: "JavaScript",
				slug: "javascript"
			},
			{
				name: "SQL",
				slug: "postgresql"
			}
		]
	},
	{
		group: "AI / GenAI",
		items: [
			{
				name: "LangChain",
				slug: "langchain"
			},
			{
				name: "RAG",
				slug: "langchain"
			},
			{
				name: "LLMs",
				slug: "openai"
			},
			{
				name: "Prompt Engineering",
				slug: "openai"
			},
			{
				name: "Hugging Face",
				slug: "huggingface"
			},
			{
				name: "Transformers",
				slug: "huggingface"
			},
			{
				name: "Vector Embeddings",
				slug: "meta"
			},
			{
				name: "Ollama",
				slug: "ollama"
			}
		]
	},
	{
		group: "ML & Computer Vision",
		items: [
			{
				name: "Scikit-learn",
				slug: "scikitlearn"
			},
			{
				name: "TensorFlow",
				slug: "tensorflow"
			},
			{
				name: "Keras",
				slug: "keras"
			},
			{
				name: "XGBoost",
				slug: "python"
			},
			{
				name: "OpenCV",
				slug: "opencv"
			},
			{
				name: "MediaPipe",
				slug: "mediapipe"
			},
			{
				name: "YOLOv8",
				slug: "ultralytics"
			}
		]
	},
	{
		group: "Backend & MLOps",
		items: [
			{
				name: "FastAPI",
				slug: "fastapi"
			},
			{
				name: "Flask",
				slug: "flask"
			},
			{
				name: "REST APIs",
				slug: "openapiinitiative"
			},
			{
				name: "SQLAlchemy",
				slug: "sqlalchemy"
			},
			{
				name: "Docker",
				slug: "docker"
			},
			{
				name: "Docker Compose",
				slug: "docker"
			}
		]
	},
	{
		group: "Data & Analytics",
		items: [
			{
				name: "Pandas",
				slug: "pandas"
			},
			{
				name: "NumPy",
				slug: "numpy"
			},
			{
				name: "EDA",
				slug: "pandas"
			},
			{
				name: "Power BI",
				slug: "powerbi"
			},
			{
				name: "Tableau",
				slug: "tableau"
			},
			{
				name: "Advanced Excel",
				slug: "microsoftexcel"
			}
		]
	},
	{
		group: "Databases & Vector Stores",
		items: [
			{
				name: "MySQL",
				slug: "mysql"
			},
			{
				name: "MongoDB",
				slug: "mongodb"
			},
			{
				name: "SQLite",
				slug: "sqlite"
			},
			{
				name: "FAISS",
				slug: "meta"
			}
		]
	},
	{
		group: "Tools",
		items: [
			{
				name: "Git",
				slug: "git"
			},
			{
				name: "GitHub",
				slug: "github"
			},
			{
				name: "Postman",
				slug: "postman"
			},
			{
				name: "Swagger",
				slug: "swagger"
			},
			{
				name: "Streamlit",
				slug: "streamlit"
			},
			{
				name: "VS Code",
				slug: "visualstudiocode"
			}
		]
	},
	{
		group: "Core CS",
		items: [
			{
				name: "DSA",
				slug: "leetcode"
			},
			{
				name: "OOP",
				slug: "openjdk"
			},
			{
				name: "DBMS",
				slug: "postgresql"
			},
			{
				name: "Operating Systems",
				slug: "linux"
			},
			{
				name: "Computer Networks",
				slug: "openapiinitiative"
			}
		]
	}
];
var EXPERIENCE = {
	role: "Software Developer Intern",
	company: "SiliconMount Tech Services",
	mode: "Remote",
	period: "Dec 2025 — Present",
	points: [
		"Developed an AI-powered smart proctoring system with Python, FastAPI, OpenCV, MediaPipe and YOLOv8 for real-time candidate monitoring, facial analysis and automated detection across multiple violation scenarios.",
		"Built an AI chatbot for myBOQ enabling natural-language interaction with BOQ documents, integrating backend services with LLM-based workflows for contextual query resolution.",
		"Performed business analysis for warehouse and inventory systems — documenting functional requirements across product master, purchase orders, batch/lot tracking, expiry management, repacking and warehouse operations.",
		"Translated client requirements into technical solutions and contributed to BOQ estimation software enhancements, backend feature development, documentation and deployment-oriented practices."
	]
};
var ACHIEVEMENTS = [
	{
		title: "Open Source Contributor",
		detail: "GirlScript Summer of Code (GSSoC) 2025"
	},
	{
		title: "Smart India Hackathon 2025",
		detail: "Cleared the internal evaluation round"
	},
	{
		title: "LeetCode — Rating 1,749",
		detail: "Top 10.45% · 200+ problems solved · 74.81% acceptance"
	},
	{
		title: "Technical Coordinator, GDSC DBATU",
		detail: "Organised workshops and peer learning initiatives"
	}
];
var CERTIFICATIONS = [
	"Data Science, Machine Learning, Deep Learning & NLP — Udemy",
	"Generative AI with LangChain & Hugging Face — Udemy",
	"Artificial Intelligence — Acmegrade (Mood Indigo, IIT Bombay)"
];
var EDUCATION = {
	school: "Dr. Babasaheb Ambedkar Technological University, Lonere",
	degree: "B.Tech — Computer Engineering",
	cgpa: "CGPA 8.13",
	period: "2022 — 2026"
};
//#endregion
//#region src/components/portfolio/Nav.tsx
var NAV = [
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Experience",
		href: "#experience"
	},
	{
		label: "Skills",
		href: "#skills"
	},
	{
		label: "Projects",
		href: "#projects"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function Nav() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "border-b border-transparent"}`,
		children: [/* @__PURE__ */ jsxs("nav", {
			className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: "#top",
					className: "flex items-center gap-3",
					"aria-label": "Manasi Bhangale — home",
					children: [/* @__PURE__ */ jsx(Monogram, { className: "h-8 w-8" }), /* @__PURE__ */ jsx("span", {
						className: "label !text-foreground hidden sm:block",
						children: "Manasi Bhangale"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "hidden items-center gap-8 md:flex",
					children: [NAV.map((item) => /* @__PURE__ */ jsx("a", {
						href: item.href,
						className: "label rule-link transition-colors hover:!text-primary",
						children: item.label
					}, item.href)), /* @__PURE__ */ jsxs("a", {
						href: RESUME_URL,
						download: true,
						className: "inline-flex items-center gap-2 border border-primary/30 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground",
						children: ["Resume ", /* @__PURE__ */ jsx(DownloadIcon, { className: "h-3.5 w-3.5" })]
					})]
				}),
				/* @__PURE__ */ jsxs("button", {
					onClick: () => setOpen((v) => !v),
					className: "flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden",
					"aria-label": "Toggle menu",
					"aria-expanded": open,
					children: [/* @__PURE__ */ jsx("span", { className: `h-px w-5 bg-foreground transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}` }), /* @__PURE__ */ jsx("span", { className: `h-px w-5 bg-foreground transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}` })]
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: `overflow-hidden border-t border-border bg-background transition-[max-height] duration-400 md:hidden ${open ? "max-h-96" : "max-h-0 border-t-transparent"}`,
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-1 px-6 py-4",
				children: [NAV.map((item) => /* @__PURE__ */ jsx("a", {
					href: item.href,
					onClick: () => setOpen(false),
					className: "label py-2 !text-foreground transition-colors hover:!text-primary",
					children: item.label
				}, item.href)), /* @__PURE__ */ jsx("a", {
					href: RESUME_URL,
					download: true,
					className: "label py-2 !text-primary",
					children: "Resume ↓"
				})]
			})
		})]
	});
}
//#endregion
//#region src/components/portfolio/Reveal.tsx
function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			if (entries.some((e) => e.isIntersecting)) {
				setVisible(true);
				io.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -60px 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ jsx(Tag, {
		ref,
		className: `reveal ${className}`,
		"data-visible": visible,
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
//#endregion
//#region src/components/portfolio/Hero.tsx
var MARQUEE = [
	"Python",
	"Java",
	"LangChain",
	"FAISS",
	"FastAPI",
	"RAG",
	"Ollama",
	"OpenCV",
	"Docker",
	"Spring Boot",
	"SQL",
	"Transformers"
];
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		id: "top",
		className: "relative overflow-hidden pt-32 pb-16 sm:pt-40",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "aurora-glow pointer-events-none absolute inset-0",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "grid-lines pointer-events-none absolute inset-0 opacity-60",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto max-w-6xl px-6",
				children: [
					/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("p", {
						className: "label flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("span", { className: "inline-block h-px w-10 bg-border" }), "Available for full-time SDE / AI roles"]
					}) }),
					/* @__PURE__ */ jsx(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ jsxs("h1", {
							className: "mt-8 font-display text-[clamp(2.75rem,9vw,7rem)] leading-[0.92] font-medium tracking-[-0.04em]",
							children: [
								"Manasi",
								/* @__PURE__ */ jsx("br", {}),
								"Bhangale",
								/* @__PURE__ */ jsx("span", {
									className: "caret text-muted-foreground",
									children: "."
								})
							]
						})
					}),
					/* @__PURE__ */ jsx(Reveal, {
						delay: 160,
						children: /* @__PURE__ */ jsxs("div", {
							className: "mt-8 grid gap-8 border-t border-border pt-8 md:grid-cols-[1fr_1.1fr]",
							children: [/* @__PURE__ */ jsx("p", {
								className: "font-display text-xl leading-snug tracking-tight sm:text-2xl",
								children: "Computer Engineer · Software Developer · AI / GenAI"
							}), /* @__PURE__ */ jsx("p", {
								className: "max-w-xl text-base leading-relaxed text-muted-foreground",
								children: "I build complete applications end to end — frontend, backend, APIs, databases and the AI layer on top. Currently working with Python, Java, FastAPI, RAG pipelines and locally hosted LLMs."
							})]
						})
					}),
					/* @__PURE__ */ jsx(Reveal, {
						delay: 240,
						children: /* @__PURE__ */ jsxs("div", {
							className: "mt-10 flex flex-wrap items-center gap-3",
							children: [
								/* @__PURE__ */ jsxs("a", {
									href: "#projects",
									className: "group inline-flex items-center gap-2 bg-primary px-6 py-3 font-mono text-[11px] tracking-[0.18em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5 glow-primary",
									children: ["View Projects", /* @__PURE__ */ jsx(ArrowIcon, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
								}),
								/* @__PURE__ */ jsxs("a", {
									href: LINKS.github,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors hover:border-primary/50 hover:text-primary",
									children: [/* @__PURE__ */ jsx(GithubIcon, { className: "h-4 w-4" }), " GitHub"]
								}),
								/* @__PURE__ */ jsxs("a", {
									href: LINKS.linkedin,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors hover:border-primary/50 hover:text-primary",
									children: [/* @__PURE__ */ jsx(LinkedinIcon, { className: "h-4 w-4" }), " LinkedIn"]
								}),
								/* @__PURE__ */ jsxs("a", {
									href: LINKS.leetcode,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors hover:border-primary/50 hover:text-primary",
									children: [/* @__PURE__ */ jsx(LeetCodeIcon, { className: "h-4 w-4" }), " LeetCode"]
								}),
								/* @__PURE__ */ jsxs("a", {
									href: RESUME_URL,
									download: true,
									className: "inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors hover:border-primary/50 hover:text-primary",
									children: [/* @__PURE__ */ jsx(DownloadIcon, { className: "h-4 w-4" }), " Resume"]
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative mt-20 overflow-hidden border-y border-border py-4",
				children: /* @__PURE__ */ jsx("div", {
					className: "marquee-track",
					children: [0, 1].map((dup) => /* @__PURE__ */ jsx("div", {
						className: "flex shrink-0 items-center",
						"aria-hidden": dup === 1,
						children: MARQUEE.map((item) => /* @__PURE__ */ jsxs("span", {
							className: "label flex items-center gap-8 px-8",
							children: [item, /* @__PURE__ */ jsx("span", { className: "inline-block h-1 w-1 rounded-full bg-primary" })]
						}, item))
					}, dup))
				})
			})
		]
	});
}
//#endregion
//#region src/components/portfolio/SectionHeading.tsx
function SectionHeading({ index, title, note }) {
	return /* @__PURE__ */ jsx(Reveal, {
		as: "header",
		className: "border-b border-border pb-6",
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex flex-wrap items-end justify-between gap-4",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-baseline gap-5",
				children: [/* @__PURE__ */ jsx("span", {
					className: "label",
					children: index
				}), /* @__PURE__ */ jsx("h2", {
					className: "font-display text-[clamp(2rem,5vw,3.25rem)] leading-none tracking-[-0.03em]",
					children: title
				})]
			}), note && /* @__PURE__ */ jsx("p", {
				className: "label max-w-xs text-right",
				children: note
			})]
		})
	});
}
//#endregion
//#region src/components/portfolio/Projects.tsx
function Architecture({ steps }) {
	return /* @__PURE__ */ jsx("ol", {
		className: "mt-6 space-y-0 border border-border p-5 font-mono text-[11px] tracking-wide",
		children: steps.map((step, i) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ jsx("span", {
				className: "text-primary",
				children: String(i + 1).padStart(2, "0")
			}), /* @__PURE__ */ jsx("span", { children: step })]
		}), i < steps.length - 1 && /* @__PURE__ */ jsx("div", {
			className: "my-1 ml-[0.6rem] h-4 w-px bg-border",
			"aria-hidden": "true"
		})] }, step))
	});
}
function FeaturedProject({ project, index }) {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs(Reveal, {
		as: "article",
		className: "border-t border-border py-12 first:border-t-0 first:pt-0",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "grid gap-10 md:grid-cols-[0.9fr_1.1fr]",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsxs("p", {
					className: "label",
					children: ["Featured / ", String(index + 1).padStart(2, "0")]
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "mt-4 font-display text-4xl leading-none tracking-tight sm:text-5xl",
					children: project.name
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 font-display text-lg tracking-tight text-muted-foreground",
					children: project.tagline
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-6 max-w-md leading-relaxed text-muted-foreground",
					children: project.summary
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: project.tech.map((t) => /* @__PURE__ */ jsx("span", {
						className: "border border-primary/30 px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] uppercase text-primary/90",
						children: t
					}, t))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ jsxs("a", {
						href: project.github,
						target: "_blank",
						rel: "noreferrer",
						className: "group inline-flex items-center gap-2 border border-primary/30 px-5 py-2.5 font-mono text-[11px] tracking-[0.18em] uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground",
						children: [
							/* @__PURE__ */ jsx(GithubIcon, { className: "h-4 w-4" }),
							" Repository",
							/* @__PURE__ */ jsx(ArrowIcon, { className: "h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
						]
					}), project.depth && /* @__PURE__ */ jsx("button", {
						onClick: () => setOpen((v) => !v),
						className: "inline-flex items-center gap-2 border border-border px-5 py-2.5 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors hover:border-primary/50 hover:text-primary",
						"aria-expanded": open,
						children: open ? "Hide breakdown" : "Technical breakdown"
					})]
				})
			] }), /* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("p", {
					className: "label",
					children: "Key features"
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "mt-4 space-y-2.5",
					children: project.features.map((f) => /* @__PURE__ */ jsxs("li", {
						className: "flex gap-3 text-sm leading-relaxed text-muted-foreground",
						children: [/* @__PURE__ */ jsx("span", { className: "mt-2 inline-block h-px w-4 shrink-0 bg-primary" }), f]
					}, f))
				}),
				project.architecture && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("p", {
					className: "label mt-8",
					children: "Architecture"
				}), /* @__PURE__ */ jsx(Architecture, { steps: project.architecture })] })
			] })]
		}), project.depth && /* @__PURE__ */ jsx("div", {
			className: `grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ${open ? "mt-10 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
			children: /* @__PURE__ */ jsx("div", {
				className: "min-h-0",
				children: /* @__PURE__ */ jsx("dl", {
					className: "grid gap-px border border-border bg-border sm:grid-cols-2",
					children: project.depth.map((d) => /* @__PURE__ */ jsxs("div", {
						className: "bg-background p-6",
						children: [/* @__PURE__ */ jsx("dt", {
							className: "label",
							children: d.q
						}), /* @__PURE__ */ jsx("dd", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: d.a
						})]
					}, d.q))
				})
			})
		})]
	});
}
function Projects() {
	const featured = PROJECTS.filter((p) => p.featured);
	const rest = PROJECTS.filter((p) => !p.featured);
	return /* @__PURE__ */ jsxs("section", {
		id: "projects",
		className: "mx-auto max-w-6xl scroll-mt-24 px-6 py-24",
		children: [
			/* @__PURE__ */ jsx(SectionHeading, {
				index: "04",
				title: "Projects",
				note: "Selected work, deepest first"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-14",
				children: featured.map((p, i) => /* @__PURE__ */ jsx(FeaturedProject, {
					project: p,
					index: i
				}, p.name))
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-16 grid gap-px border border-border bg-border sm:grid-cols-2",
				children: rest.map((p, i) => /* @__PURE__ */ jsxs(Reveal, {
					delay: i * 60,
					as: "article",
					className: "invert-card group bg-background p-7",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "font-display text-2xl tracking-tight",
								children: p.name
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-1 font-mono text-[11px] tracking-[0.12em] uppercase opacity-70",
								children: p.tagline
							})] }), /* @__PURE__ */ jsx("a", {
								href: p.github,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": `${p.name} repository`,
								className: "shrink-0 text-muted-foreground transition-colors hover:text-primary",
								children: /* @__PURE__ */ jsx(GithubIcon, { className: "h-5 w-5" })
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-sm leading-relaxed opacity-75",
							children: p.summary
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "mt-4 space-y-1.5",
							children: p.features.map((f) => /* @__PURE__ */ jsxs("li", {
								className: "flex gap-3 text-sm opacity-70",
								children: [/* @__PURE__ */ jsx("span", { className: "mt-2 inline-block h-px w-3 shrink-0 bg-primary opacity-80" }), f]
							}, f))
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-5 flex flex-wrap gap-2",
							children: p.tech.map((t) => /* @__PURE__ */ jsx("span", {
								className: "border border-primary/30 px-2 py-0.5 font-mono text-[10px] tracking-[0.12em] uppercase text-primary/90",
								children: t
							}, t))
						})
					]
				}, p.name))
			})
		]
	});
}
//#endregion
//#region src/components/portfolio/Sections.tsx
function About() {
	return /* @__PURE__ */ jsxs("section", {
		id: "about",
		className: "mx-auto max-w-6xl scroll-mt-24 px-6 py-24",
		children: [/* @__PURE__ */ jsx(SectionHeading, {
			index: "01",
			title: "About"
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-12 grid gap-12 md:grid-cols-[1.2fr_0.8fr]",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", {
				className: "space-y-6 text-lg leading-relaxed text-muted-foreground",
				children: [
					/* @__PURE__ */ jsx("p", { children: "I'm a final-year Computer Engineering student at DBATU Lonere, graduating in 2026. My work sits where software engineering meets applied AI — I like building the whole thing: the API, the database, the retrieval layer and the interface that makes it usable." }),
					/* @__PURE__ */ jsxs("p", { children: [
						"Most of my recent projects revolve around retrieval-augmented generation and on-device inference — running LLMs locally with Ollama so that documents, voice and screen data never leave the machine. Alongside that I keep my fundamentals sharp with DSA, DBMS and systems, and I'm an active",
						" ",
						/* @__PURE__ */ jsx("a", {
							href: LINKS.leetcode,
							target: "_blank",
							rel: "noreferrer",
							className: "rule-link text-primary",
							children: "LeetCode"
						}),
						" ",
						"participant."
					] }),
					/* @__PURE__ */ jsx("p", {
						className: "text-foreground",
						children: "Right now I'm looking for a full-time role where I can build production software and keep going deeper on GenAI systems."
					})
				]
			}) }), /* @__PURE__ */ jsx(Reveal, {
				delay: 100,
				children: /* @__PURE__ */ jsx("dl", {
					className: "divide-y divide-border border-y border-border",
					children: [
						["Location", "India · open to relocate"],
						["Focus", "Software Development · AI / GenAI"],
						["Graduating", "2026 · CGPA 8.13"],
						["Currently", "SDE Intern @ SiliconMount"]
					].map(([k, v]) => /* @__PURE__ */ jsxs("div", {
						className: "flex items-baseline justify-between gap-4 py-4",
						children: [/* @__PURE__ */ jsx("dt", {
							className: "label",
							children: k
						}), /* @__PURE__ */ jsx("dd", {
							className: "text-right text-sm",
							children: v
						})]
					}, k))
				})
			})]
		})]
	});
}
function Experience() {
	return /* @__PURE__ */ jsxs("section", {
		id: "experience",
		className: "mx-auto max-w-6xl scroll-mt-24 px-6 py-24",
		children: [/* @__PURE__ */ jsx(SectionHeading, {
			index: "02",
			title: "Experience"
		}), /* @__PURE__ */ jsx(Reveal, {
			className: "mt-12",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid gap-8 border-t border-border pt-8 md:grid-cols-[0.8fr_1.2fr]",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("p", {
						className: "label",
						children: EXPERIENCE.period
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "mt-3 font-display text-2xl tracking-tight",
						children: EXPERIENCE.role
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-1 text-muted-foreground",
						children: [
							EXPERIENCE.company,
							" · ",
							EXPERIENCE.mode
						]
					})
				] }), /* @__PURE__ */ jsx("ul", {
					className: "space-y-5",
					children: EXPERIENCE.points.map((p) => /* @__PURE__ */ jsxs("li", {
						className: "flex gap-4 leading-relaxed text-muted-foreground",
						children: [/* @__PURE__ */ jsx("span", { className: "mt-3 inline-block h-px w-5 shrink-0 bg-border" }), p]
					}, p))
				})]
			})
		})]
	});
}
function Skills() {
	return /* @__PURE__ */ jsxs("section", {
		id: "skills",
		className: "mx-auto max-w-6xl scroll-mt-24 px-6 py-24",
		children: [/* @__PURE__ */ jsx(SectionHeading, {
			index: "03",
			title: "Skills",
			note: "Grouped by discipline"
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4",
			children: SKILLS.map((group, i) => /* @__PURE__ */ jsxs(Reveal, {
				delay: i * 50,
				className: "invert-card group bg-background p-6",
				children: [/* @__PURE__ */ jsx("p", {
					className: "font-mono text-[11px] tracking-[0.22em] uppercase opacity-60",
					children: group.group
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-4 space-y-2.5",
					children: group.items.map((item) => /* @__PURE__ */ jsxs("li", {
						className: "flex items-center gap-2.5 text-sm",
						children: [/* @__PURE__ */ jsx("span", {
							className: "flex size-5 shrink-0 items-center justify-center",
							children: item.slug ? /* @__PURE__ */ jsx("img", {
								src: `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${item.slug}.svg`,
								alt: "",
								"aria-hidden": "true",
								loading: "lazy",
								width: 16,
								height: 16,
								className: "size-4 opacity-80 invert transition duration-300 group-hover:invert-0"
							}) : /* @__PURE__ */ jsx("span", {
								"aria-hidden": "true",
								className: "font-mono text-[10px] opacity-50",
								children: item.name.slice(0, 2).toUpperCase()
							})
						}), item.name]
					}, item.name))
				})]
			}, group.group))
		})]
	});
}
function Achievements() {
	return /* @__PURE__ */ jsxs("section", {
		id: "achievements",
		className: "mx-auto max-w-6xl scroll-mt-24 px-6 py-24",
		children: [/* @__PURE__ */ jsx(SectionHeading, {
			index: "05",
			title: "Achievements"
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-12 grid gap-12 md:grid-cols-[1.1fr_0.9fr]",
			children: [/* @__PURE__ */ jsx("ul", {
				className: "divide-y divide-border border-y border-border",
				children: ACHIEVEMENTS.map((a, i) => /* @__PURE__ */ jsxs(Reveal, {
					as: "li",
					delay: i * 50,
					className: "py-5",
					children: [/* @__PURE__ */ jsx("p", {
						className: "font-display text-xl tracking-tight",
						children: a.title
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: a.detail
					})]
				}, a.title))
			}), /* @__PURE__ */ jsxs(Reveal, {
				delay: 100,
				children: [/* @__PURE__ */ jsx("p", {
					className: "label",
					children: "Certifications"
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-4 space-y-3",
					children: CERTIFICATIONS.map((c) => /* @__PURE__ */ jsxs("li", {
						className: "flex gap-3 text-sm leading-relaxed text-muted-foreground",
						children: [/* @__PURE__ */ jsx("span", { className: "mt-2 inline-block h-px w-4 shrink-0 bg-border" }), c]
					}, c))
				})]
			})]
		})]
	});
}
function Education() {
	return /* @__PURE__ */ jsxs("section", {
		id: "education",
		className: "mx-auto max-w-6xl scroll-mt-24 px-6 py-24",
		children: [/* @__PURE__ */ jsx(SectionHeading, {
			index: "06",
			title: "Education"
		}), /* @__PURE__ */ jsxs(Reveal, {
			className: "mt-12 flex flex-wrap items-end justify-between gap-6 border-t border-border pt-8",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
				className: "font-display text-2xl tracking-tight",
				children: EDUCATION.degree
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-2 text-muted-foreground",
				children: EDUCATION.school
			})] }), /* @__PURE__ */ jsxs("p", {
				className: "label",
				children: [
					EDUCATION.cgpa,
					" · ",
					EDUCATION.period
				]
			})]
		})]
	});
}
function Contact() {
	return /* @__PURE__ */ jsx("section", {
		id: "contact",
		className: "scroll-mt-24 border-t border-border",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-6 py-28",
			children: [/* @__PURE__ */ jsxs(Reveal, { children: [/* @__PURE__ */ jsx("p", {
				className: "label",
				children: "07 / Contact"
			}), /* @__PURE__ */ jsxs("h2", {
				className: "mt-6 font-display text-[clamp(2.25rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.04em]",
				children: [
					"Let's build",
					/* @__PURE__ */ jsx("br", {}),
					"something real."
				]
			})] }), /* @__PURE__ */ jsx(Reveal, {
				delay: 100,
				children: /* @__PURE__ */ jsxs("div", {
					className: "mt-12 flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ jsxs("a", {
							href: `mailto:${LINKS.email}`,
							className: "group inline-flex items-center gap-2 bg-primary px-6 py-3 font-mono text-[11px] tracking-[0.18em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5 glow-primary",
							children: [
								/* @__PURE__ */ jsx(MailIcon, { className: "h-4 w-4" }),
								" ",
								LINKS.email,
								/* @__PURE__ */ jsx(ArrowIcon, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
							]
						}),
						/* @__PURE__ */ jsxs("a", {
							href: RESUME_URL,
							download: true,
							className: "inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors hover:border-primary/50 hover:text-primary",
							children: [/* @__PURE__ */ jsx(DownloadIcon, { className: "h-4 w-4" }), " Download Resume"]
						}),
						/* @__PURE__ */ jsxs("a", {
							href: LINKS.leetcode,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors hover:border-primary/50 hover:text-primary",
							children: [/* @__PURE__ */ jsx(LeetCodeIcon, { className: "h-4 w-4" }), " LeetCode"]
						})
					]
				})
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-10",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx(Monogram, { className: "h-7 w-7" }), /* @__PURE__ */ jsx("span", {
						className: "label !text-foreground",
						children: "Manasi Bhangale"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-5",
					children: [
						/* @__PURE__ */ jsx("a", {
							href: LINKS.github,
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "GitHub",
							className: "text-muted-foreground transition-colors hover:text-primary",
							children: /* @__PURE__ */ jsx(GithubIcon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ jsx("a", {
							href: LINKS.linkedin,
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "LinkedIn",
							className: "text-muted-foreground transition-colors hover:text-primary",
							children: /* @__PURE__ */ jsx(LinkedinIcon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ jsx("a", {
							href: LINKS.leetcode,
							target: "_blank",
							rel: "noreferrer",
							"aria-label": "LeetCode",
							className: "text-muted-foreground transition-colors hover:text-primary",
							children: /* @__PURE__ */ jsx(LeetCodeIcon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ jsx("a", {
							href: `mailto:${LINKS.email}`,
							"aria-label": "Email",
							className: "text-muted-foreground transition-colors hover:text-primary",
							children: /* @__PURE__ */ jsx(MailIcon, { className: "h-5 w-5" })
						})
					]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "label",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" — Built from scratch"
					]
				})
			]
		})
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ jsx(Nav, {}),
			/* @__PURE__ */ jsxs("main", { children: [
				/* @__PURE__ */ jsx(Hero, {}),
				/* @__PURE__ */ jsx(About, {}),
				/* @__PURE__ */ jsx(Experience, {}),
				/* @__PURE__ */ jsx(Skills, {}),
				/* @__PURE__ */ jsx(Projects, {}),
				/* @__PURE__ */ jsx(Achievements, {}),
				/* @__PURE__ */ jsx(Education, {}),
				/* @__PURE__ */ jsx(Contact, {})
			] }),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
