import { useState } from "react";
import { PROJECTS, type Project } from "./data";
import { ArrowIcon, GithubIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function Architecture({ steps }: { steps: string[] }) {
  return (
    <ol className="mt-6 space-y-0 border border-border p-5 font-mono text-[11px] tracking-wide">
      {steps.map((step, i) => (
        <li key={step}>
          <div className="flex items-center gap-3">
            <span className="text-primary">{String(i + 1).padStart(2, "0")}</span>
            <span>{step}</span>
          </div>
          {i < steps.length - 1 && (
            <div className="my-1 ml-[0.6rem] h-4 w-px bg-border" aria-hidden="true" />
          )}
        </li>
      ))}
    </ol>
  );
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal as="article" className="border-t border-border py-12 first:border-t-0 first:pt-0">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="label">Featured / {String(index + 1).padStart(2, "0")}</p>
          <h3 className="mt-4 font-display text-4xl leading-none tracking-tight sm:text-5xl">
            {project.name}
          </h3>
          <p className="mt-3 font-display text-lg tracking-tight text-muted-foreground">
            {project.tagline}
          </p>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">{project.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="border border-primary/30 px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] uppercase text-primary/90"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 border border-primary/30 px-5 py-2.5 font-mono text-[11px] tracking-[0.18em] uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <GithubIcon className="h-4 w-4" /> Repository
              <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            {project.depth && (
              <button
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center gap-2 border border-border px-5 py-2.5 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors hover:border-primary/50 hover:text-primary"
                aria-expanded={open}
              >
                {open ? "Hide breakdown" : "Technical breakdown"}
              </button>
            )}
          </div>
        </div>

        <div>
          <p className="label">Key features</p>
          <ul className="mt-4 space-y-2.5">
            {project.features.map((f) => (
              <li key={f} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 inline-block h-px w-4 shrink-0 bg-primary" />
                {f}
              </li>
            ))}
          </ul>

          {project.architecture && (
            <>
              <p className="label mt-8">Architecture</p>
              <Architecture steps={project.architecture} />
            </>
          )}
        </div>
      </div>

      {project.depth && (
        <div
          className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ${
            open ? "mt-10 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <dl className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {project.depth.map((d) => (
                <div key={d.q} className="bg-background p-6">
                  <dt className="label">{d.q}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      )}
    </Reveal>
  );
}

export function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="04" title="Projects" note="Selected work, deepest first" />

      <div className="mt-14">
        {featured.map((p, i) => (
          <FeaturedProject key={p.name} project={p} index={i} />
        ))}
      </div>

      <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2">
        {rest.map((p, i) => (
          <Reveal
            key={p.name}
            delay={i * 60}
            as="article"
            className="invert-card group bg-background p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl tracking-tight">{p.name}</h3>
                <p className="mt-1 font-mono text-[11px] tracking-[0.12em] uppercase opacity-70">
                  {p.tagline}
                </p>
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${p.name} repository`}
                className="shrink-0 text-muted-foreground transition-colors hover:text-primary"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-75">{p.summary}</p>
            <ul className="mt-4 space-y-1.5">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm opacity-70">
                  <span className="mt-2 inline-block h-px w-3 shrink-0 bg-primary opacity-80" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="border border-primary/30 px-2 py-0.5 font-mono text-[10px] tracking-[0.12em] uppercase text-primary/90"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
