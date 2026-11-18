import { ArrowUp } from "lucide-react";
import { navItems, profile } from "@/content/portfolio";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <p className="font-display text-4xl sm:text-5xl">
              {profile.firstName} {profile.lastName}
              <span className="text-primary">.</span>
            </p>
            <p className="mt-3 max-w-md text-muted-foreground">{profile.tagline}</p>
            <SocialLinks className="mt-6" />
          </div>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-3 self-start text-sm text-muted-foreground transition-colors hover:text-foreground md:self-end"
          >
            Back to top
            <span className="grid h-11 w-11 place-items-center rounded-full border border-border transition-all group-hover:-translate-y-1 group-hover:border-primary group-hover:text-primary">
              <ArrowUp className="h-4 w-4" />
            </span>
          </button>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {navItems.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} className="link-underline hover:text-foreground">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {profile.firstName} {profile.lastName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
