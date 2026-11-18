import { Bot, BrainCircuit, Layers, MonitorSmartphone, PenTool, PanelsTopLeft } from "lucide-react";
import { services, type ServiceIcon } from "@/content/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons: Record<ServiceIcon, typeof Layers> = {
  fullstack: Layers,
  frontend: PanelsTopLeft,
  responsive: MonitorSmartphone,
  ml: BrainCircuit,
  ai: Bot,
  design: PenTool,
};

export function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeading index="04" eyebrow="What I can help with" title="Services" />

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal
                key={s.title}
                delay={(i % 3) * 100}
                className="group relative bg-background p-8 transition-colors duration-500 hover:bg-surface sm:p-10"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-7 w-7 text-primary transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
                  <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-10 text-2xl leading-tight">{s.title}</h3>
                <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                  {s.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-accent transition-transform duration-500 group-hover:scale-x-100" />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
