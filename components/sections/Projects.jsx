import { FaArrowRight, FaCodeBranch, FaGithub } from "react-icons/fa";

import ProjectPreview from "@/components/ui/ProjectPreview";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section-shell py-12 sm:py-16">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured Projects"
          description="A selection of applications built around real users and practical workflows."
        />
        <a
          href="#contact"
          className="inline-flex items-center gap-2 font-bold text-blue-600 transition hover:text-blue-800"
        >
          Start a conversation <FaArrowRight aria-hidden="true" />
        </a>
      </div>

      <div className="mt-9 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <ProjectPreview variant={project.preview} images={project.images} />
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start gap-3">
                <FaCodeBranch
                  className="mt-1 shrink-0 text-blue-600"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-xl font-bold text-slate-950">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-blue-700">
                    {project.subtitle}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="tech-tag">
                    {technology}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-bold">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-slate-700 transition hover:text-blue-600"
                  >
                    <FaGithub aria-hidden="true" /> Repository
                  </a>
                ) : (
                  <span className="text-slate-400">Private project</span>
                )}
                <a
                  href={project.github ?? "#contact"}
                  target={project.github ? "_blank" : undefined}
                  rel={project.github ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-blue-600 transition hover:text-blue-800"
                >
                  {project.github ? "Explore repository" : "Discuss project"}
                  <FaArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
