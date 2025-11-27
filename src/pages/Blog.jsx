import { PageTransition } from "../components/PageTransition";
import { ChatResponse } from "../components/ChatResponse";
import { Section } from "../components/Section";
import { Card, Tag } from "../components/UI";
import { posts } from "../data/siteData";

export default function Blog() {
  return (
    <PageTransition>
      <div className="container page">
        <ChatResponse
          prompt="What kind of writing do you share?"
          answer="I jot down short notes on building calm products, shaping motion, and tightening delivery processes."
          richAnswer="<p>I jot down short notes on building <strong>calm products</strong>, shaping motion, and tightening delivery processes.</p><p>Think of it as quick field notes, not essays.</p>"
        />
        <Section
          title="Notes on building"
          description="Brief thoughts on design and product."
        >
          <div className="stack">
            {posts.map((post) => (
              <Card key={post.slug} to={`/blog/${post.slug}`}>
                <div className="eyebrow">
                  {post.date} · {post.readTime}
                </div>
                <h3>{post.title}</h3>
                <p className="muted">{post.excerpt}</p>
                <div className="tags-row">
                  {post.tags.map((tag) => (
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
