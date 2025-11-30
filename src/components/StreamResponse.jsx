import { useEffect, useMemo, useState } from "react";

export function StreamResponse({ content, speed = 16 }) {
  const [displayed, setDisplayed] = useState("");

  const tokens = useMemo(() => {
    if (!content) return null;
    return content.match(/<[^>]+>|[^<]+/g) ?? [];
  }, [content]);

  useEffect(() => {
    setDisplayed("");
    if (!content?.length) return;

    const useTokens = Boolean(tokens && tokens.length);
    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      if (useTokens) {
        setDisplayed(tokens.slice(0, index).join(""));
        if (index >= tokens.length) {
          clearInterval(interval);
        }
        return;
      }
      setDisplayed(content.slice(0, index));
      if (index >= content.length) {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [content, tokens, speed]);

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
