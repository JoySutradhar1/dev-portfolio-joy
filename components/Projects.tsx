import { projects } from "@/data/resume";
import Spotlight from "@/components/Spotlight";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-ink-border">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
        <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <p className="section-label">// projects</p>

          <div className="flex flex-col gap-6">
            {projects.map((project) => (
              <Spotlight
                key={project.name}
                className="group rounded-md border border-ink-border bg-ink-surface/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-[0_0_36px_-14px_rgba(242,184,75,0.5)]"
              >
                <article>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-display text-2xl font-semibold text-paper">
                      {project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          className="transition-colors hover:text-amber"
                        >
                          {project.name}
                        </a>
                      ) : (
                        project.name
                      )}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-sm border border-ink-border px-2.5 py-1 font-mono text-xs text-mint transition-colors duration-300 group-hover:border-mint/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-paper-faint">
                    {project.subtitle}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {project.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-base leading-relaxed text-paper-muted"
                      >
                        <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-paper-faint" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-block font-mono text-sm text-amber transition-colors hover:text-paper"
                    >
                      View source →
                    </a>
                  )}
                </article>
              </Spotlight>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
