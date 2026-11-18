import { Github, Linkedin, Mail } from "lucide-react";
import { contact } from "@/content/portfolio";
import { cn } from "@/lib/utils";

export function SocialLinks({ className }: { className?: string }) {
  const links = [
    { href: contact.github, label: "GitHub", Icon: Github },
    { href: contact.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: `mailto:${contact.email}`, label: "Email", Icon: Mail },
  ];
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {links.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={label}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
          >
            <Icon className="h-4 w-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}
