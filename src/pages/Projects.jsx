import { useMemo } from "react";
import { PageTransition } from "../components/PageTransition";
import { StreamResponse } from "../components/StreamResponse";
import { projects } from "../data/siteData";
import githubIconUrl from "../assets/github.svg";
import pdfIconUrl from "../assets/pdf.svg";
import demoIconUrl from "../assets/demo.svg";

export default function Projects() {
  const projectsContent = useMemo(() => {
    const entries = projects
      .map((project) => {
        const links = [];
        const githubLinks = Array.isArray(project.github)
          ? project.github
              .map((entry) =>
                typeof entry === "string"
                  ? { href: entry, label: "GitHub" }
                  : { href: entry?.href, label: entry?.label || "GitHub" }
              )
              .filter((entry) => Boolean(entry.href))
          : project.github
          ? [{ href: project.github, label: "GitHub" }]
          : [];
        const hasGithub = githubLinks.length > 0;
        const hasPdf = Boolean(project.pdf);
        const hasDemo = Boolean(project.demo);
        const hasLinks = hasGithub || hasPdf || hasDemo;

        if (hasGithub) {
          githubLinks.forEach((entry) => {
            links.push(
              `<a href="${entry.href}" target="_blank" rel="noreferrer" class="icon-link"><img src="${githubIconUrl}" alt="GitHub" class="icon-inline" /><span>${entry.label}</span></a>`
            );
          });
        }

        if (hasPdf) {
          links.push(
            `<a href="${project.pdf}" target="_blank" rel="noreferrer" class="icon-link"><img src="${pdfIconUrl}" alt="PDF" class="icon-inline" /><span>Report</span></a>`
          );
        }

        if (hasDemo) {
          links.push(
            `<a href="${project.demo}" target="_blank" rel="noreferrer" class="icon-link"><img src="${demoIconUrl}" alt="Demo" class="icon-inline" /><span>Demo</span></a>`
          );
        }

        const linksMarkup = hasLinks
          ? `<p class="muted">${links.join(" · ")}</p>`
          : project.collaboratorRestricted
          ? `<p class="muted private-note"><em>\nMaterials for this project are private due to collaborator restrictions.</em></p>`
          : "";

        return `
        <div>
          <h3>${project.title}</h3>
          <div class="project-meta-row">
            ${
              project.tech?.length
                ? `<p class="exp-meta">${project.tech.join(", ")}</p>`
                : `<p class="exp-meta"></p>`
            }
            <p class="project-date" aria-label="Project date">${project.date}</p>
          </div>
          <p class="project-desc">${project.description}</p>
          ${linksMarkup}
        </div>`;
      })
      .join(
        '<div class="project-break"></div><hr class="exp-sep exp-sep-projects" /><div class="project-break"></div>'
      );

    return `${entries}
    `;
  }, []);

  return (
    <PageTransition>
      <div className="container page">
        <StreamResponse content={projectsContent} speed={1} />
      </div>
    </PageTransition>
  );
}
