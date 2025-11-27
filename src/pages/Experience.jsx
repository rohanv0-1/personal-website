import { PageTransition } from "../components/PageTransition";
import { ChatResponse } from "../components/ChatResponse";
import { Section } from "../components/Section";
import { Card, Tag } from "../components/UI";
import { experiences } from "../data/siteData";

export default function Experience() {
  return (
    <PageTransition>
      <div className="container page">
        <ChatResponse
          prompt="What roles have you been in recently?"
          answer="Recent snapshots: Senior Software Engineer at Minimal Labs, Product Engineer at Northwind, and Full-stack Developer at Studio One."
          richAnswer="<p>Recent snapshots:</p><ul><li><strong>Senior Software Engineer</strong> at Minimal Labs</li><li><strong>Product Engineer</strong> at Northwind</li><li><strong>Full-stack Developer</strong> at Studio One</li></ul>"
        />
        <Section
          title="Building minimal, expressive products"
          description="Snapshots of recent roles."
        >
          <div className="stack">
            {experiences.map((item) => (
              <Card key={item.company}>
                <div className="exp-header">
                  <div>
                    <div className="eyebrow">{item.period}</div>
                    <h3>{item.role}</h3>
                    <p className="muted">{item.company}</p>
                  </div>
                </div>
                <p className="muted">{item.summary}</p>
                <div className="tags-row">
                  {item.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>
      </div>
    </PageTransition>
  );
}
