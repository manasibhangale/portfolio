import { useEffect, useState } from "react";
import { Monogram, DownloadIcon } from "./icons";
import { RESUME_URL } from "./data";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3" aria-label="Manasi Bhangale — home">
          <Monogram className="h-8 w-8" />
          <span className="label !text-foreground hidden sm:block">Manasi Bhangale</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="label rule-link transition-colors hover:!text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href={RESUME_URL}
            download
            className="inline-flex items-center gap-2 border border-primary/30 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Resume <DownloadIcon className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`h-px w-5 bg-foreground transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-foreground transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-border bg-background transition-[max-height] duration-400 md:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-transparent"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="label py-2 !text-foreground transition-colors hover:!text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href={RESUME_URL}
            download
            className="label py-2 !text-primary"
          >
            Resume ↓
          </a>
        </div>
      </div>
    </header>
  );
}
