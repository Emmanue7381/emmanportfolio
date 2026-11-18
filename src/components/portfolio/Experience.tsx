import { experience } from "@/content/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <SectionHeading index="03" eyebrow="Where I've worked" title="Experience" />

        <ol className="relative mt-16 border-l border-border pl-8 sm:pl-12">
          {experience.map((item, i) => (
            <Reveal as="li" key={item.role} delay={i * 120} className="relative pb-16 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[calc(2rem+5px)] top-2 h-2.5 w-2.5 rounded-full bg-primary shadow-glow sm:-left-[calc(3rem+5px)]"
              />
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="eyebrow">{item.type}</span>
                <span className="h-px w-8 bg-border" />
                <span className="text-xs text-muted-foreground">{item.period}</span>
              </div>
              <h3 className="mt-4 text-3xl sm:text-4xl">{item.role}</h3>
              <p className="mt-2 text-lavender-soft">{item.org}</p>
              <ul className="mt-6 space-y-3">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-3 text-muted-foreground">
                    <span className="mt-2.5 h-px w-4 shrink-0 bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
