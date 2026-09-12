import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-ink-border">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
        <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <p className="section-label">// experience</p>

          <ol>
            {experience.map((job) => (
              <li
                key={job.company}
                className="group relative border-l border-ink-border pb-2 pl-8 transition-colors duration-300 hover:border-amber/50"
              >
                <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-amber transition-shadow duration-300 group-hover:shadow-[0_0_0_5px_rgba(242,184,75,0.18)]" />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-xl font-semibold text-paper sm:text-2xl">
                    {job.role}
                  </h3>
                  <span className="font-mono text-xs text-paper-faint">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 font-mono text-sm text-amber">
                  {job.company} · {job.location}
                </p>
                <ul className="mt-5 space-y-3">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-base leading-relaxed text-paper-muted"
                    >
                      <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-paper-faint" />
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
