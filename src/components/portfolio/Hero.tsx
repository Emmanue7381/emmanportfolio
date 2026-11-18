import { ArrowDownRight, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, profile } from "@/content/portfolio";
import { RotatingText } from "./RotatingText";
import { SocialLinks } from "./SocialLinks";

const facts = [
  { Icon: GraduationCap, title: "B.E. Computer Science", sub: "KCG College of Technology" },
  { Icon: Sparkles, title: "Class of 2028", sub: "Third-year student · CGPA 8.2" },
  { Icon: MapPin, title: contact.location, sub: "Open to internships & collaboration" },
];

export function Hero() {
  return (
    <section id="home" className="grain relative overflow-hidden pt-32 lg:pt-0">
      {/* floating background elements */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-float-slow absolute -left-32 top-24 h-80 w-80 rounded-full bg-lavender/15 blur-3xl" />
        <div
          className="animate-float-slow absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-lavender-deep/20 blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:min-h-screen lg:grid-cols-12 lg:gap-0">
        {/* Left: intro */}
        <div className="relative z-10 flex flex-col justify-center lg:col-span-6 lg:py-32">
          <p className="animate-rise text-sm text-muted-foreground" style={{ animationDelay: "0.1s" }}>
            Hi, I'm
          </p>
          <h1
            className="animate-rise mt-3 text-[clamp(3.2rem,7.2vw,6.6rem)] leading-[0.92]"
            style={{ animationDelay: "0.2s" }}
          >
            {profile.firstName}
            <br />
            {profile.lastName}
            <span className="text-primary">,</span>
          </h1>
          <p
            className="animate-rise mt-7 max-w-md text-base leading-relaxed text-foreground/85 sm:text-lg"
            style={{ animationDelay: "0.35s" }}
          >
            {profile.headline}
          </p>
          <p
            className="animate-rise mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]"
            style={{ animationDelay: "0.45s" }}
          >
            {profile.intro}
          </p>

          <p className="animate-rise mt-7 text-xl sm:text-2xl" style={{ animationDelay: "0.55s" }}>
            <span className="text-muted-foreground">Focused on </span>
            <RotatingText words={profile.rotatingFocus} />
          </p>

          <div className="animate-rise mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: "0.65s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">
                Explore My Work <ArrowDownRight />
              </a>
            </Button>
            <Button variant="ring" size="xl" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="animate-rise mt-10 flex items-end gap-6" style={{ animationDelay: "0.8s" }}>
            <div className="hidden sm:block">
              <span className="animate-draw-line block h-10 w-px bg-primary" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em]">By curiosity & code</p>
            </div>
            <SocialLinks />
          </div>
        </div>

        {/* Middle: lavender panel with portrait */}
        <div className="relative lg:col-span-4">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-[999px] bg-gradient-panel lg:absolute lg:inset-y-0 lg:aspect-auto lg:max-w-none lg:rounded-none">
            {profile.photoUrl ? (
              <img
                src={profile.photoUrl}
                alt={`${profile.firstName} ${profile.lastName}`}
                className="absolute inset-0 h-full w-full object-cover object-top grayscale"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-[18%]">
                <div className="relative grid aspect-square w-[62%] place-items-center rounded-full bg-background shadow-card">
                  <span className="font-display text-[clamp(4rem,9vw,7rem)] leading-none text-lavender-soft">
                    EE
                  </span>
                  <span className="absolute inset-3 rounded-full border border-lavender/40" />
                </div>
                <p className="mt-8 font-display text-2xl text-primary-foreground">Code · Data · Design</p>
              </div>
            )}
          </div>
        </div>

        {/* Right: quick facts */}
        <aside className="relative z-10 flex flex-col justify-center gap-8 pb-16 lg:col-span-2 lg:pb-0 lg:pl-8">
          {facts.map(({ Icon, title, sub }, i) => (
            <div key={title} className="animate-rise" style={{ animationDelay: `${0.5 + i * 0.12}s` }}>
              <Icon className="h-5 w-5 text-primary" />
              <p className="mt-2 text-sm font-semibold">{title}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
