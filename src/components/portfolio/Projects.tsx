import { ArrowUpRight, Github } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/portfolio";
import { Reveal } from "./Reveal";

function ProjectLink({ href, label, children, variant }: {
  href: string;
  label: string;
  children: React.ReactNode;
  variant: "hero" | "ring";
}) {
  if (href) {
    return (
      <Button variant={variant} size="lg" className="h-10 px-5" asChild>
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      </Button>
    );
  }
  return (
    <Button
      variant={variant}
      size="lg"
      className="h-10 px-5"
      onClick={() => toast(`${label} coming soon`, { description: "This link will be added shortly." })}
    >
      {children}
    </Button>
  );
}

export function Projects() {
  const total = String(projects.length).padStart(2, "0");
  return (
    <section id="projects" className="relative bg-surface/40 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal className="text-center">
          <p className="text-muted-foreground">{projects.length} selected works</p>
          <h2 className="mt-2 text-6xl sm:text-7xl lg:text-8xl">Projects</h2>
        </Reveal>

        <div className="mt-20 space-y-24 sm:space-y-32">
          {projects.map((p, i) => {
            const flipped = i % 2 === 1;
            return (
              <article key={p.title} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                <Reveal className={`lg:col-span-7 ${flipped ? "lg:order-2" : ""}`}>
                  <div className="group relative overflow-hidden rounded-3xl border border-border shadow-card">
                    <img
                      src={p.image}
                      alt={`${p.title} preview`}
                      loading="lazy"
                      width={1280}
                      height={896}
                      className="aspect-[16/11] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                    <span className="glass absolute left-5 top-5 rounded-full px-4 py-1.5 text-xs">
                      {p.category}
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={120} className={`lg:col-span-5 ${flipped ? "lg:order-1" : ""}`}>
                  <p className="font-display text-2xl text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                    <span className="text-sm">/{total}</span>
                  </p>
                  <h3 className="mt-4 text-4xl leading-tight sm:text-5xl">{p.title}</h3>
                  <p className="mt-5 leading-relaxed text-muted-foreground">{p.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <li key={t} className="rounded-full bg-accent px-3.5 py-1.5 text-xs text-lavender-soft">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <ProjectLink href={p.liveUrl} label="Project link" variant="hero">
                      View Project <ArrowUpRight />
                    </ProjectLink>
                    <ProjectLink href={p.githubUrl} label="GitHub repository" variant="ring">
                      <Github /> GitHub
                    </ProjectLink>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
