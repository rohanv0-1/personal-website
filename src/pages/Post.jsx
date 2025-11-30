import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageTransition } from "../components/PageTransition";
import { Tag } from "../components/UI";
import { posts } from "../data/siteData";

export default function Post() {
  const { slug } = useParams();
  const post = useMemo(() => posts.find((item) => item.slug === slug), [slug]);

  if (!post) {
    return (
      <PageTransition>
        <div className="container page">
          <div className="eyebrow">Writing</div>
          <h2>Post not found</h2>
          <Link className="nav-link" to="/blog">
            ← Back to all posts
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="container page post">
        <div className="eyebrow">
          {post.date} · {post.readTime}
        </div>
        <h1>{post.title}</h1>
        {post.tags?.length ? (
          <div className="tags-row">
            {post.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        ) : null}
        <div className="post-body">
          {post.body.map((paragraph, idx) => (
            <motion.p
              key={paragraph}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="muted"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
        <Link className="nav-link muted back-link" to="/blog">
          ← Back to writing
        </Link>
      </div>
    </PageTransition>
  );
}
