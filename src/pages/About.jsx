import { PageTransition } from '../components/PageTransition'
import { Section } from '../components/Section'
import { quickFacts } from '../data/siteData'

export default function About() {
  return (
    <PageTransition>
      <div className="container page">
        <Section
          eyebrow="About"
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
            <div className="about-facts">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="fact">
                  <div className="eyebrow">{fact.label}</div>
                  <p>{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </PageTransition>
  )
}
