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
        const hasGithub = Boolean(project.github);
        const hasPdf = Boolean(project.pdf);
        const hasDemo = Boolean(project.demo);
        const hasLinks = hasGithub || hasPdf || hasDemo;

        if (hasGithub) {
          links.push(
            `<a href="${project.github}" target="_blank" rel="noreferrer" class="icon-link"><img src="${githubIconUrl}" alt="GitHub" class="icon-inline" /><span>GitHub</span></a>`
          );
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
          ${
            project.tech?.length
              ? `<p class="exp-meta">${project.tech.join(", ")}</p>`
              : ""
          }
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
