import { useMemo } from "react";
import { PageTransition } from "../components/PageTransition";
import { StreamResponse } from "../components/StreamResponse";

export default function About() {
  const richAbout = useMemo(
    () =>
      `<h2>Hi, I’m Rohan.</h2><p>I’m a product engineer who builds <strong>calm, minimal experiences</strong> with clear interaction design.</p><p>I like pairing <em>thoughtful motion</em> with readable code so products feel steady, not noisy.</p><h3>How I work</h3><ul><li>Early collaboration and small, shippable scopes.</li><li>Design systems and motion that stay quiet and purposeful.</li><li>Readable code that keeps teams moving quickly.</li></ul>`,
    []
  );

  return (
    <PageTransition>
      <div className="container page">
        <StreamResponse content={richAbout} />
      </div>
    </PageTransition>
  );
}
