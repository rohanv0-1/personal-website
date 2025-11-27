export const hero = {
  name: "Rohan",
  title: "Product engineer",
  blurb: "I build clean, fast web experiences with a calm touch.",
  ctaPrimary: "Experience",
  ctaSecondary: "Writing",
  location: "Based in",
  city: "San Francisco",
};

export const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Minimal Labs",
    period: "2022 — Present",
    summary: "Design-forward front-ends and lightweight systems.",
    tags: ["React", "TypeScript", "Design systems"],
  },
  {
    role: "Product Engineer",
    company: "Northwind",
    period: "2020 — 2022",
    summary: "Customer dashboards, onboarding, and motion polish.",
    tags: ["UX", "Animations", "Analytics"],
  },
  {
    role: "Full-stack Developer",
    company: "Studio One",
    period: "2018 — 2020",
    summary: "Marketing sites and internal tools with lean stacks.",
    tags: ["Node", "Next.js", "Content"],
  },
];

export const posts = [
  {
    slug: "designing-minimal-personal-sites",
    title: "Minimal personal sites",
    date: "May 2024",
    readTime: "6 min",
    tags: ["Design", "Process"],
    excerpt: "A quick checklist for calm, legible personal sites.",
    body: [
      "Use one column, one accent color, and generous spacing.",
      "Motion should be quiet—short fades and slides are enough.",
      "Keep copy short. Guide people to the next action fast.",
    ],
  },
  {
    slug: "micro-interactions-that-matter",
    title: "Micro-interactions that matter",
    date: "Feb 2024",
    readTime: "4 min",
    tags: ["Motion", "UI"],
    excerpt: "Where subtle animations add clarity instead of noise.",
    body: [
      "Use motion to confirm intent and focus attention.",
      "Stay under 220ms with ease-out curves for calm feel.",
      "Respect reduced-motion and keep layouts readable.",
    ],
  },
  {
    slug: "shipping-with-constraints",
    title: "Shipping with constraints",
    date: "Nov 2023",
    readTime: "5 min",
    tags: ["Process", "Delivery"],
    excerpt: "Constraints keep scope honest and products crisp.",
    body: [
      "Decide the single question each page answers.",
      "Lock tokens early—color, spacing, type—and stick to them.",
      "Add motion last to support what already works statically.",
    ],
  },
];

export const socials = [
  { label: "Email", href: "mailto:hello@rohan.build" },
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "RSS", href: "/rss.xml" },
];
