import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function ChatResponse({
  prompt,
  answer,
  richAnswer,
  loadingMs = 700,
  speed = 16,
}) {
  const [phase, setPhase] = useState("loading");
  const [displayed, setDisplayed] = useState("");

  const tokens = useMemo(() => {
    if (!richAnswer) return null;
    return richAnswer.match(/<[^>]+>|[^<]+/g) ?? [];
  }, [richAnswer]);

  useEffect(() => {
    setPhase("loading");
    setDisplayed("");
    const loadingTimer = setTimeout(() => setPhase("typing"), loadingMs);
    return () => clearTimeout(loadingTimer);
  }, [prompt, answer, richAnswer, loadingMs]);

  useEffect(() => {
    if (phase !== "typing") return;
    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      if (tokens) {
        setDisplayed(tokens.slice(0, index).join(""));
        if (index >= tokens.length) {
          clearInterval(interval);
          setPhase("done");
        }
        return;
      }
      setDisplayed(answer.slice(0, index));
      if (index >= answer.length) {
        clearInterval(interval);
        setPhase("done");
      }
    }, speed);
    return () => clearInterval(interval);
  }, [phase, answer, tokens, speed]);

  const isLoading = phase === "loading";
  const hasRichAnswer = Boolean(richAnswer);

  return (
    <div className="chat-shell" aria-live="polite" role="status">
      <div className="chat-bubble prompt">
        <div className="chat-meta">You</div>
        <p>{prompt}</p>
      </div>
      <div className="chat-bubble response">
        <div className="chat-meta">GPT</div>
        <div className="chat-stream">
          <AnimatePresence initial={false}>
            {isLoading && (
              <motion.div
                key="dots"
                className="typing-dots"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                aria-label="ChatGPT is thinking"
              >
                <span />
                <span />
                <span />
              </motion.div>
            )}
          </AnimatePresence>
          {hasRichAnswer ? (
            <span
              className={`stream-text ${isLoading ? "sr-only" : ""}`}
              dangerouslySetInnerHTML={{ __html: displayed }}
            />
          ) : (
            <span className={`stream-text ${isLoading ? "sr-only" : ""}`}>
              {displayed}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
