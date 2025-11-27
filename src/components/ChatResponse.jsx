import { useEffect, useMemo, useState } from "react";

export function ChatResponse({
  prompt,
  answer,
  richAnswer,
  speed = 16,
  showPrompt = true,
}) {
  const [displayed, setDisplayed] = useState("");

  const tokens = useMemo(() => {
    if (!richAnswer) return null;
    return richAnswer.match(/<[^>]+>|[^<]+/g) ?? [];
  }, [richAnswer]);

  useEffect(() => {
    setDisplayed("");
    const content = richAnswer ?? answer ?? "";
    const useTokens = Boolean(tokens && tokens.length);
    if (!content.length) return;

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
      setDisplayed(answer.slice(0, index));
      if (index >= content.length) {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [prompt, answer, richAnswer, tokens, speed]);

  const hasRichAnswer = Boolean(richAnswer);

  return (
    <div className="chat-shell" aria-live="polite">
      {showPrompt && prompt && (
        <div className="chat-bubble prompt">
          <div className="chat-meta">You</div>
          <p>{prompt}</p>
        </div>
      )}
      <div className="chat-bubble response">
        <div className="chat-stream">
          {hasRichAnswer ? (
            <span
              className="stream-text"
              dangerouslySetInnerHTML={{ __html: displayed }}
            />
          ) : (
            <span className="stream-text">{displayed}</span>
          )}
        </div>
      </div>
    </div>
  );
}
