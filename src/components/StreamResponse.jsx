import { useEffect, useMemo, useState } from "react";

export function StreamResponse({ content, speed = 8 }) {
  const [displayed, setDisplayed] = useState("");

  const frames = useMemo(() => {
    if (!content) return [];

    const tokens = content.match(/<[^>]+>|[^<]+/g) ?? [];
    const steps = [];
    let acc = "";

    tokens.forEach((token) => {
      const isTag = token.startsWith("<") && token.endsWith(">");
      if (isTag) {
        acc += token;
        steps.push(acc);
        return;
      }

      // Include leading spaces so we don't drop whitespace that belongs before the word
      const words = token.match(/\s*\S+\s*/g) ?? [];
      words.forEach((word) => {
        acc += word;
        steps.push(acc);
      });
    });

    return steps;
  }, [content]);

  useEffect(() => {
    setDisplayed("");
    if (!frames.length) return;

    let index = 0;
    const interval = setInterval(() => {
      setDisplayed(frames[index]);
      index += 1;
      if (index >= frames.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [frames, speed]);

  return (
    <div className="chat-shell" aria-live="polite">
      <div className="chat-bubble response">
        <div className="chat-stream">
          <span
            className="stream-text"
            dangerouslySetInnerHTML={{ __html: displayed }}
          />
        </div>
      </div>
    </div>
  );
}
