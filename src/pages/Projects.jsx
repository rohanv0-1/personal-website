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

        if (project.github) {
          links.push(
            `<a href="${project.github}" target="_blank" rel="noreferrer" class="icon-link"><img src="${githubIconUrl}" alt="GitHub" class="icon-inline" /><span>GitHub</span></a>`
          );
        }

        if (project.pdf) {
          links.push(
            `<a href="${project.pdf}" target="_blank" rel="noreferrer" class="icon-link"><img src="${pdfIconUrl}" alt="PDF" class="icon-inline" /><span>PDF</span></a>`
          );
        }

        if (project.demo) {
          links.push(
            `<a href="${project.demo}" target="_blank" rel="noreferrer" class="icon-link"><img src="${demoIconUrl}" alt="Demo" class="icon-inline" /><span>Demo</span></a>`
          );
        }

        const linksMarkup = links.length
          ? `<p class="muted">${links.join(" · ")}</p>`
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

    return `
      <h2>Projects</h2>
      ${entries}
    `;
  }, []);

  return (
    <PageTransition>
      <div className="container page">
        <StreamResponse content={projectsContent} speed={2} />
      </div>
    </PageTransition>
  );
}
