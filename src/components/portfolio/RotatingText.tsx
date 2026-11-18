import { useEffect, useState } from "react";

export function RotatingText({ words, interval = 2600 }: { words: string[]; interval?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => window.clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="relative inline-flex overflow-hidden align-bottom" aria-live="polite">
      <span key={index} className="animate-word-in text-gradient font-display">
        {words[index]}
      </span>
    </span>
  );
}
