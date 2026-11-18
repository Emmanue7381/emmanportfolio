import { Clapperboard, Cpu, Gamepad2, Sparkles } from "lucide-react";
import { about } from "@/content/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const interestIcons = [Clapperboard, Gamepad2, Cpu, Sparkles];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading index="01" eyebrow="A bit about myself" title="About Me" />
            <Reveal delay={150} className="mt-10">
              <p className="eyebrow">Interests</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {about.interests.map((item, i) => {
                  const Icon = interestIcons[i % interestIcons.length] ?? Sparkles;
                  return (
                    <li
                      key={item}
                      className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                    >
                      <Icon className="h-3.5 w-3.5 text-primary" /> {item}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-6">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 100}>
                  <p
                    className={
                      i === 0
                        ? "font-display text-2xl leading-snug text-foreground sm:text-3xl"
                        : "text-base leading-relaxed text-muted-foreground sm:text-lg"
                    }
                  >
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {about.academics.map((a, i) => (
                <Reveal
                  key={a.label}
                  delay={i * 80}
                  className={`group bg-background p-6 transition-colors duration-500 hover:bg-surface ${
                    i === 0 ? "sm:col-span-2" : ""
                  }`}
                >
                  <p className="eyebrow">{a.label}</p>
                  <p className="mt-3 font-display text-2xl transition-colors group-hover:text-lavender-soft">
                    {a.value}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
