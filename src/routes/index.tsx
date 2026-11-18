import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/portfolio/About";
import { Career } from "@/components/portfolio/Career";
import { Contact } from "@/components/portfolio/Contact";
import { Experience } from "@/components/portfolio/Experience";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { Navbar } from "@/components/portfolio/Navbar";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Skills } from "@/components/portfolio/Skills";

const title = "Emmanuel Ebenezer — Full-Stack & AI/ML Developer";
const description =
  "Portfolio of Emmanuel Ebenezer, a CSE student at KCG College of Technology building modern web apps and exploring AI, ML and Generative AI.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Career />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
