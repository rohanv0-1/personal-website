export const experiences = [];

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

export const education = [];

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

export const aboutContent = `<h2>Hi, I’m Rohan.</h2><p>This website is still under development, thanks for your patience!</p>`;

export const posts = [];

export const socials = [
  { label: "Email", href: "mailto:roverma@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rohanver" },
  { label: "GitHub", href: "https://github.com/rohanv0-1" },
  { label: "X", href: "https://x.com/rohan_v1" },
];
