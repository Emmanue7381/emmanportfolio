import { Reveal } from "./Reveal";

type Props = { index: string; eyebrow: string; title: string; align?: "left" | "center" };

export function SectionHeading({ index, eyebrow, title, align = "left" }: Props) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "text-center" : ""}>
      <div className={`flex items-center gap-4 ${centered ? "justify-center" : ""}`}>
        <span className="eyebrow">
          {index} — {eyebrow}
        </span>
        <span className="h-px w-12 bg-primary" aria-hidden />
      </div>
      <h2 className="mt-5 text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">{title}</h2>
    </Reveal>
  );
}
