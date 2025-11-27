import { PageTransition } from "../components/PageTransition";
import { ChatResponse } from "../components/ChatResponse";
import { Section } from "../components/Section";

export default function About() {
  return (
    <PageTransition>
      <div className="container page">
        <ChatResponse
          prompt="Who are you and what do you focus on?"
          answer="I’m Rohan, a product engineer who builds calm, minimal experiences with clear interaction design."
          richAnswer="<p>I’m Rohan, a product engineer who builds <strong>calm, minimal experiences</strong> with clear interaction design.</p><p>I like pairing <em>thoughtful motion</em> with readable code so products feel steady, not noisy.</p>"
        />
        <Section
          title="Hi, I’m Rohan."
          description="I focus on calm, minimal experiences."
        >
          <div className="about-grid">
            <div className="about-copy">
              <p className="muted">
                I like early collaboration and small, shippable scopes. Clean
                interaction design and readable code are the goal.
              </p>
              <p className="muted">
                I’ve led small teams, built design systems, and shaped motion to
                keep interfaces calm.
              </p>
            </div>
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}
