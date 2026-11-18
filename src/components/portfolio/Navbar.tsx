import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems, profile } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { openResume } from "./resume";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6",
      )}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-full px-5 transition-all duration-500 sm:px-7",
          "glass mx-4 xl:mx-auto",
          scrolled ? "py-2.5 shadow-card" : "py-3",
        )}
      >
        <a href="#home" className="flex items-baseline gap-1 font-display text-lg tracking-[0.18em]">
          {profile.logo}
          <span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm transition-colors",
                  active === id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {label}
                <span
                  className={cn(
                    "absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-primary transition-transform duration-500",
                    active === id ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button variant="ring" size="sm" className="hidden h-9 px-4 sm:inline-flex" onClick={openResume}>
            <Download /> Resume
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "glass-solid mx-4 mt-3 overflow-hidden rounded-3xl transition-all duration-500 lg:hidden",
          open ? "max-h-[520px] opacity-100" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col p-4">
          {navItems.map(({ id, label }, i) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-border px-2 py-3.5 font-display text-2xl last:border-0"
              >
                {label}
                <span className="font-sans text-xs text-muted-foreground">0{i + 1}</span>
              </a>
            </li>
          ))}
          <li className="pt-4">
            <Button variant="hero" size="xl" className="w-full" onClick={openResume}>
              <Download /> Download Resume
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
