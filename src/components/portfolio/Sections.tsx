import {
  ACHIEVEMENTS,
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCE,
  LINKS,
  RESUME_URL,
  SKILLS,
} from "./data";
import { ArrowIcon, DownloadIcon, GithubIcon, LeetCodeIcon, LinkedinIcon, MailIcon, Monogram } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="01" title="About" />
      <div className="mt-12 grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a final-year Computer Engineering student at DBATU Lonere, graduating in 2026.
              My work sits where software engineering meets applied AI — I like building the
              whole thing: the API, the database, the retrieval layer and the interface that
              makes it usable.
            </p>
            <p>
              Most of my recent projects revolve around retrieval-augmented generation and
              on-device inference — running LLMs locally with Ollama so that documents, voice and
              screen data never leave the machine. Alongside that I keep my fundamentals sharp
              with DSA, DBMS and systems, and I'm an active{" "}
              <a
                href={LINKS.leetcode}
                target="_blank"
                rel="noreferrer"
                className="rule-link text-primary"
              >
                LeetCode
              </a>{" "}
              participant.
            </p>
            <p className="text-foreground">
              Right now I'm looking for a full-time role where I can build production software and
              keep going deeper on GenAI systems.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <dl className="divide-y divide-border border-y border-border">
            {[
              ["Location", "India · open to relocate"],
              ["Focus", "Software Development · AI / GenAI"],
              ["Graduating", "2026 · CGPA 8.13"],
              ["Currently", "SDE Intern @ SiliconMount"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-4 py-4">
                <dt className="label">{k}</dt>
                <dd className="text-right text-sm">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="02" title="Experience" />
      <Reveal className="mt-12">
        <div className="grid gap-8 border-t border-border pt-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="label">{EXPERIENCE.period}</p>
            <h3 className="mt-3 font-display text-2xl tracking-tight">{EXPERIENCE.role}</h3>
            <p className="mt-1 text-muted-foreground">
              {EXPERIENCE.company} · {EXPERIENCE.mode}
            </p>
          </div>
          <ul className="space-y-5">
            {EXPERIENCE.points.map((p) => (
              <li key={p} className="flex gap-4 leading-relaxed text-muted-foreground">
                <span className="mt-3 inline-block h-px w-5 shrink-0 bg-border" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="03" title="Skills" note="Grouped by discipline" />
      <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((group, i) => (
          <Reveal
            key={group.group}
            delay={i * 50}
            className="invert-card group bg-background p-6"
          >
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase opacity-60">
              {group.group}
            </p>
            <ul className="mt-4 space-y-2.5">
              {group.items.map((item) => (
                <li key={item.name} className="flex items-center gap-2.5 text-sm">
                  <span className="flex size-5 shrink-0 items-center justify-center">
                    {item.slug ? (
                      <img
                        src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${item.slug}.svg`}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        width={16}
                        height={16}
                        className="size-4 opacity-80 invert transition duration-300 group-hover:invert-0"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="font-mono text-[10px] opacity-50"
                      >
                        {item.name.slice(0, 2).toUpperCase()}
                      </span>
                    )}
                  </span>
                  {item.name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="05" title="Achievements" />
      <div className="mt-12 grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <ul className="divide-y divide-border border-y border-border">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a.title} as="li" delay={i * 50} className="py-5">
              <p className="font-display text-xl tracking-tight">{a.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{a.detail}</p>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={100}>
          <p className="label">Certifications</p>
          <ul className="mt-4 space-y-3">
            {CERTIFICATIONS.map((c) => (
              <li key={c} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 inline-block h-px w-4 shrink-0 bg-border" />
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="06" title="Education" />
      <Reveal className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t border-border pt-8">
        <div>
          <h3 className="font-display text-2xl tracking-tight">{EDUCATION.degree}</h3>
          <p className="mt-2 text-muted-foreground">{EDUCATION.school}</p>
        </div>
        <p className="label">
          {EDUCATION.cgpa} · {EDUCATION.period}
        </p>
      </Reveal>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <p className="label">07 / Contact</p>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.04em]">
            Let's build
            <br />
            something real.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${LINKS.email}`}
              className="group inline-flex items-center gap-2 bg-primary px-6 py-3 font-mono text-[11px] tracking-[0.18em] text-primary-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5 glow-primary"
            >
              <MailIcon className="h-4 w-4" /> {LINKS.email}
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={RESUME_URL}
              download
              className="inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors hover:border-primary/50 hover:text-primary"
            >
              <DownloadIcon className="h-4 w-4" /> Download Resume
            </a>
            <a
              href={LINKS.leetcode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors hover:border-primary/50 hover:text-primary"
            >
              <LeetCodeIcon className="h-4 w-4" /> LeetCode
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-10">
        <div className="flex items-center gap-3">
          <Monogram className="h-7 w-7" />
          <span className="label !text-foreground">Manasi Bhangale</span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={LINKS.leetcode}
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <LeetCodeIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${LINKS.email}`}
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
        <p className="label">© {new Date().getFullYear()} — Built from scratch</p>
      </div>
    </footer>
  );
}
