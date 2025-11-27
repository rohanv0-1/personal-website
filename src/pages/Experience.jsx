import { PageTransition } from '../components/PageTransition'
import { Section } from '../components/Section'
import { Card, Tag } from '../components/UI'
import { experiences } from '../data/siteData'

export default function Experience() {
  return (
    <PageTransition>
      <div className="container page">
        <Section
          eyebrow="Experience"
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
  )
}
