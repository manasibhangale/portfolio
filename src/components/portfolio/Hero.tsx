import { LINKS, RESUME_URL } from "./data";
import { ArrowIcon, DownloadIcon, GithubIcon, LeetCodeIcon, LinkedinIcon } from "./icons";
import { Reveal } from "./Reveal";

const MARQUEE = [
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
  "Transformers",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      <div className="aurora-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="label flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-border" />
            Available for full-time SDE / AI roles
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-8 font-display text-[clamp(2.75rem,9vw,7rem)] leading-[0.92] font-medium tracking-[-0.04em]">
            Manasi
            <br />
            Bhangale<span className="caret text-muted-foreground">.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-8 grid gap-8 border-t border-border pt-8 md:grid-cols-[1fr_1.1fr]">
            <p className="font-display text-xl leading-snug tracking-tight sm:text-2xl">
              Computer Engineer · Software Developer · AI / GenAI
            </p>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              I build complete applications end to end — frontend, backend, APIs, databases and
              the AI layer on top. Currently working with Python, Java, FastAPI, RAG pipelines and
              locally hosted LLMs.
            </p>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-primary px-6 py-3 font-mono text-[11px] tracking-[0.18em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5 glow-primary"
            >
              View Projects
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors hover:border-primary/50 hover:text-primary"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors hover:border-primary/50 hover:text-primary"
            >
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={LINKS.leetcode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors hover:border-primary/50 hover:text-primary"
            >
              <LeetCodeIcon className="h-4 w-4" /> LeetCode
            </a>
            <a
              href={RESUME_URL}
              download
              className="inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors hover:border-primary/50 hover:text-primary"
            >
              <DownloadIcon className="h-4 w-4" /> Resume
            </a>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-20 overflow-hidden border-y border-border py-4">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
              {MARQUEE.map((item) => (
                <span key={item} className="label flex items-center gap-8 px-8">
                  {item}
                  <span className="inline-block h-1 w-1 rounded-full bg-primary" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
