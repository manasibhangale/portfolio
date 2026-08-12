import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";

import {
  About,
  Achievements,
  Contact,
  Education,
  Experience,
  Footer,
  Skills,
} from "@/components/portfolio/Sections";

const TITLE =
  "Manasi Bhangale | Software Developer, AI & GenAI";

const DESCRIPTION =
  "Portfolio of Manasi Bhangale — Computer Engineer and software developer building full-stack applications, RAG pipelines and on-device LLM systems with Python, Java, FastAPI, LangChain and FAISS.";

export const Route = createFileRoute("/")({
  component: Index,

  head: () => ({
    meta: [
      {
        title: TITLE,
      },
      {
        name: "description",
        content: DESCRIPTION,
      },
      {
        property: "og:title",
        content: TITLE,
      },
      {
        property: "og:description",
        content: DESCRIPTION,
      },
      {
        property: "og:type",
        content: "profile",
      },
      {
        property: "og:url",
        content: "/",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "/",
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Manasi Bhangale",
          jobTitle: "Software Developer — AI / GenAI",
          email: "mailto:manasibhangale2004@gmail.com",
          alumniOf:
            "Dr. Babasaheb Ambedkar Technological University, Lonere",
          knowsAbout: [
            "Software Development",
            "Generative AI",
            "Retrieval-Augmented Generation",
            "Machine Learning",
            "Computer Vision",
          ],
          sameAs: [
            "https://github.com/manasibhangale",
            "https://www.linkedin.com/in/manasi-bhangale-5878662b3/",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <main>
        <Hero />

        <About />

        <Experience />

        <Skills />

        <Projects />

        <Achievements />

        <Education />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}