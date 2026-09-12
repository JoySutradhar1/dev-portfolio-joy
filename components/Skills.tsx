import { skills, education } from "@/data/resume";

export default function Skills() {
  const groups = Object.entries(skills);

  return (
    <section id="skills" className="border-b border-ink-border">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
        <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <p className="section-label">// skills</p>

          <div className="grid gap-10 sm:grid-cols-3">
            {groups.map(([group, items]) => (
              <div key={group}>
                <h3 className="font-display text-base font-semibold text-paper">
                  {group}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="cursor-default rounded-sm border border-ink-border px-2.5 py-1 font-mono text-xs text-paper-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-amber/50 hover:text-amber hover:shadow-[0_0_16px_-6px_rgba(242,184,75,0.5)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-ink-border pt-12 md:grid-cols-[200px_1fr] md:gap-16">
          <p className="section-label">// education</p>
          <div>
            <h3 className="font-display text-xl font-semibold text-paper">
              {education.degree}
            </h3>
            <p className="mt-1 font-mono text-sm text-amber">
              {education.school} · {education.location}
            </p>
            <p className="mt-1 text-sm text-paper-faint">{education.year}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
