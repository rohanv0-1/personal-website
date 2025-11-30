export const experiences = [
  {
    role: "AI Infra",
    company: "Meta",
    companyUrl: "https://ai.meta.com/infrastructure/",
    period: "Nov 2025 — Present",
    summary: "Design-forward front-ends and lightweight systems.",
    tags: ["Python", "Training", "System Design"],
  },
  {
    role: "Software Engineer",
    company: "WhatsApp",
    companyUrl: "https://www.whatsapp.com/",
    period: "Jul 2024 — Nov 2025",
    summary: "Customer dashboards, onboarding, and motion polish.",
    tags: ["UX", "Animations", "Analytics"],
  },
  {
    role: "Software Engineer",
    company: "Microsoft",
    period: "Jul 2024 — Nov 2025",
    summary: "Customer dashboards, onboarding, and motion polish.",
    tags: ["UX", "Animations", "Analytics"],
  },
  {
    role: "Research Assistant",
    company: "GRASP Lab",
    companyUrl: "https://www.grasp.upenn.edu/",
    period: "Jul 2022 — Jul 2023",
    summary: "Marketing sites and internal tools with lean stacks.",
    tags: ["Node", "Next.js", "Content"],
  },
];

export const education = [
  {
    degree: "B.S.E., Computer Science",
    school: "University of Pennsylvania",
    schoolUrl: "http://seas.upenn.edu/",
    period: "2020 — 2024",
    summary: "Eta Kappa Nu (IEEE-HKN), Tau Beta Pi",
    tags: ["Robotics", "HCI", "Systems"],
  },
  {
    degree: "B.S., Economics",
    school: "The Wharton School",
    schoolUrl: "https://fnce.wharton.upenn.edu/",
    period: "2020 - 2024",
    summary: "Concentration in Finance",
  },
];

export const experienceRichAnswer = (() => {
  const items = experiences
    .map(({ role, company, companyUrl, period, summary, tags }) => {
      const companyLabel = companyUrl
        ? `<a href="${companyUrl}" target="_blank" rel="noreferrer">${company}</a>`
        : company;
      return `<li><strong>${role}</strong> at ${companyLabel} <span class="muted">(${period})</span><br/><span class="muted">${summary}</span><br/><small>${tags.join(
        " · "
      )}</small></li>`;
    })
    .join("");
  return `<ul>${items}</ul>`;
})();

export const educationRichAnswer = (() => {
  if (!education.length) return "";

  const items = education
    .map(({ degree, school, schoolUrl, period, summary, tags }) => {
      const schoolLabel = schoolUrl
        ? `<a href="${schoolUrl}" target="_blank" rel="noreferrer">${school}</a>`
        : school;
      const summaryLine = summary
        ? `<br/><span class="muted">${summary}</span>`
        : "";
      const tagsLine =
        tags && tags.length ? `<br/><small>${tags.join(" · ")}</small>` : "";
      return `<li><strong>${degree}</strong> at ${schoolLabel} <span class="muted">(${period})</span>${summaryLine}${tagsLine}</li>`;
    })
    .join("");

  return `<ul>${items}</ul>`;
})();

export const posts = [
  {
    slug: "designing-minimal-personal-sites",
    title: "Optimizing the tail-end",
    date: "Nov 2025",
    body: [
      "Use one column, one accent color, and generous spacing. Motion should be quiet—short fades and slides are enough. Keep copy short. Guide people to the next action fast.",
    ],
  },
];

export const socials = [
  { label: "Email", href: "mailto:roverma@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rohanver" },
  { label: "GitHub", href: "https://github.com/rohanv0-1" },
  { label: "X", href: "https://x.com/rohan_v1" },
];
