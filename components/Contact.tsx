import { profile } from "@/data/resume";

export default function Contact() {
  return (
    <section id="contact" className="grain-bg">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <p className="section-label">// contact</p>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight text-paper sm:text-4xl">
          Have a project in mind, or an opening on your team?
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-paper-muted">
          I&apos;m currently open to new roles and freelance work involving
          React, Next.js, or React Native.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-sm bg-amber px-6 py-3 font-mono text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_-4px_rgba(242,184,75,0.65)]"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="rounded-sm border border-ink-border px-6 py-3 font-mono text-sm text-paper transition-all duration-300 hover:-translate-y-0.5 hover:border-mint hover:text-mint hover:shadow-[0_0_22px_-6px_rgba(124,224,196,0.45)]"
          >
            {profile.phone}
          </a>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-ink-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-paper-faint">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js.
          </p>
          <div className="flex gap-6 font-mono text-sm text-paper-muted">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="nav-link transition-colors hover:text-amber"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="nav-link transition-colors hover:text-amber"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
