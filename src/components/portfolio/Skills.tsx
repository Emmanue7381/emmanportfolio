import { BrainCircuit, Database, Layout, Palette, Server } from "lucide-react";
import { skillGroups, type SkillGroupIcon } from "@/content/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons: Record<SkillGroupIcon, typeof Layout> = {
  frontend: Layout,
  backend: Server,
  database: Database,
  ai: BrainCircuit,
  design: Palette,
};

export function Skills() {
  return (
    <section id="skills" className="relative bg-surface/40 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading index="02" eyebrow="Toolkit" title="Technical Skills" />
          <Reveal delay={100} className="max-w-sm text-sm text-muted-foreground">
            The languages, tools and disciplines I use to build for the web, experiment with machine
            learning and design visuals.
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon];
            const wide = i < 2;
            return (
              <Reveal
                key={group.title}
                delay={i * 90}
                className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow ${
                  wide ? "lg:col-span-3" : "lg:col-span-2"
                }`}
              >
                <div
                  aria-hidden
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lavender/0 blur-2xl transition-all duration-700 group-hover:bg-lavender/20"
                />
                <div className="relative flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-lavender-soft transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="relative mt-6 text-2xl">{group.title}</h3>
                <ul className="relative mt-5 flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-sm text-foreground/90"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                {/* indicator: one segment per skill in this group (no invented levels) */}
                <div className="relative mt-6 flex gap-1.5" aria-hidden>
                  {group.skills.map((s, j) => (
                    <span
                      key={s}
                      className="h-1 flex-1 origin-left scale-x-50 rounded-full bg-primary/40 transition-transform duration-700 group-hover:scale-x-100 group-hover:bg-primary"
                      style={{ transitionDelay: `${j * 80}ms` }}
                    />
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
