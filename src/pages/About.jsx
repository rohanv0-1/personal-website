import { PageTransition } from "../components/PageTransition";
import { Section } from "../components/Section";

export default function About() {
  return (
    <PageTransition>
      <div className="container page">
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
