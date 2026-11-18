import { careerGoals } from "@/content/portfolio";
import { Reveal } from "./Reveal";

export function Career() {
  return (
    <section aria-labelledby="career-title" className="relative px-4 sm:px-6">
      <div className="grain relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-panel px-6 py-20 text-primary-foreground sm:px-14 sm:py-28">
        <div aria-hidden className="animate-float-slow absolute -right-24 -top-24 h-72 w-72 rounded-full bg-lavender-soft/40 blur-3xl" />
        <Reveal className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] opacity-70">05 — Looking ahead</p>
          <h2 id="career-title" className="mt-5 text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
            My Career Journey
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-10 md:grid-cols-2 md:gap-0">
          <div aria-hidden className="absolute left-0 right-0 top-4 hidden h-px bg-primary-foreground/25 md:block" />
          {careerGoals.map((g, i) => (
            <Reveal key={g.label} delay={i * 150} className="relative md:pr-12">
              <span className="relative z-10 grid h-9 w-9 place-items-center rounded-full bg-primary-foreground font-display text-sm text-lavender-soft">
                {i + 1}
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] opacity-70">{g.label}</p>
              <p className="mt-4 font-display text-2xl leading-snug sm:text-3xl">{g.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
