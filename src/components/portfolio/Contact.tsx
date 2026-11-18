import { useState, type FormEvent } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contact } from "@/content/portfolio";
import { Reveal } from "./Reveal";

const fieldClass =
  "h-12 rounded-xl border-border bg-background/60 px-4 text-base font-light placeholder:text-muted-foreground/60 focus-visible:ring-primary";

export function Contact() {
  const [sending, setSending] = useState(false);

  const details = [
    { Icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { Icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { Icon: Linkedin, label: "LinkedIn", value: contact.linkedinLabel, href: contact.linkedin },
    { Icon: Github, label: "GitHub", value: contact.githubLabel, href: contact.github },
    { Icon: MapPin, label: "Location", value: contact.location },
  ];

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      toast.error("Please fill in every field.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!contact.web3formsKey) {
      toast.error("The form isn't connected yet.", { description: `Please email ${contact.email} directly.` });
      return;
    }

    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: contact.web3formsKey,
          subject: `Portfolio: ${subject}`,
          from_name: name,
          name,
          email,
          replyto: email,
          message,
          botcheck: String(data.get("botcheck") ?? ""),
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.success) throw new Error(json.message || "Failed");
      toast.success("Message sent!", { description: "Emmanuel will get back to you soon." });
      form.reset();
    } catch {
      toast.error("Couldn't send your message.", { description: "Please check your connection and try again." });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="eyebrow">06 — Get in touch</span>
                <span className="h-px w-12 bg-primary" />
              </div>
              <h2 className="mt-5 text-5xl leading-[1.02] sm:text-6xl">
                Let's Build <span className="text-gradient">Something</span> Together
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                Have a project idea, collaboration opportunity, or just want to connect? Feel free to reach out!
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="link-underline mt-10 inline-block break-all font-display text-2xl text-lavender-soft sm:text-3xl"
              >
                {contact.email}
              </a>
            </Reveal>

            <Reveal delay={120} as="ul" className="mt-10 divide-y divide-border border-y border-border">
              {details.map(({ Icon, label, value, href }) => {
                const inner = (
                  <>
                    <span className="flex min-w-0 items-center gap-4">
                      <Icon className="h-4 w-4 shrink-0 text-primary" />
                      <span className="w-20 shrink-0 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {label}
                      </span>
                      <span className="truncate text-sm">{value}</span>
                    </span>
                    {href && (
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    )}
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="group flex items-center justify-between gap-4 py-4"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center justify-between gap-4 py-4">{inner}</div>
                    )}
                  </li>
                );
              })}
            </Reveal>
          </div>

          <Reveal delay={150} className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              noValidate
              className="glass rounded-[2rem] p-6 shadow-card sm:p-10"
              aria-label="Contact form"
            >
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" autoComplete="name" placeholder="Your name" className={fieldClass} maxLength={100} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className={fieldClass} maxLength={255} />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="What's this about?" className={fieldClass} maxLength={150} />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell me about your idea…"
                    maxLength={2000}
                    className="rounded-xl border-border bg-background/60 px-4 py-3 text-base font-light placeholder:text-muted-foreground/60 focus-visible:ring-primary"
                  />
                </div>
              </div>
              <Button type="submit" variant="hero" size="xl" className="mt-8 w-full sm:w-auto" disabled={sending}>
                <Send /> {sending ? "Sending…" : "Send Message"}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
