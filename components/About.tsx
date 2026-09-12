import { profile } from "@/data/resume";
import { Mail, MapPin, Phone } from "lucide-react";

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
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 font-mono text-sm text-paper-muted">
              <span className="inline-flex items-center gap-2">
                <MapPin
                  size={15}
                  strokeWidth={1.8}
                  className="text-amber"
                  aria-hidden="true"
                />
                {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-amber"
              >
                <Mail
                  size={15}
                  strokeWidth={1.8}
                  className="text-amber"
                  aria-hidden="true"
                />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-amber"
              >
                <Phone
                  size={15}
                  strokeWidth={1.8}
                  className="text-amber"
                  aria-hidden="true"
                />
                {profile.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
