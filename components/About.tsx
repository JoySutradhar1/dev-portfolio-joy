import { profile } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="border-b border-ink-border">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24">
        <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <p className="section-label">// about</p>
          <div>
            <p className="max-w-2xl text-xl leading-relaxed text-paper sm:text-2xl">
              {profile.summary}
            </p>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 font-mono text-sm text-paper-muted">
              <span>{profile.location}</span>
              <span className="text-ink-border">/</span>
              <a
                href={`mailto:${profile.email}`}
                className="transition-colors hover:text-amber"
              >
                {profile.email}
              </a>
              <span className="text-ink-border">/</span>
              <span>{profile.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
