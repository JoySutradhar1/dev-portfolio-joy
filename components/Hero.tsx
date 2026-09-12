import Spotlight from "@/components/Spotlight";
import { profile, stats } from "@/data/resume";
import { ArrowRight, Send } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="grain-bg border-b border-ink-border">
      <div className="mx-auto grid max-w-content gap-12 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:items-center md:px-10 md:py-28">
        <div>
          <div className="flex items-center gap-4">
            <Image
              src="/profile-avatar.jpg"
              alt={`${profile.name} profile photo`}
              width={96}
              height={96}
              priority
              className="h-20 w-20 rounded-full border-2 border-amber/70 object-cover shadow-[0_0_24px_-8px_rgba(242,184,75,0.8)] sm:h-24 sm:w-24"
            />
            <div>
              <p className="section-label">// frontend developer</p>
              <h1 className="mt-2 font-display text-4xl font-semibold leading-[1.1] text-paper sm:text-5xl lg:text-[3.4rem]">
                {profile.name}
              </h1>
            </div>
          </div>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-paper-muted">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-sm bg-amber px-6 py-3 font-mono text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_-4px_rgba(242,184,75,0.65)]"
            >
              View projects
              <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm border border-ink-border px-6 py-3 font-mono text-sm text-paper transition-all duration-300 hover:-translate-y-0.5 hover:border-mint hover:text-mint hover:shadow-[0_0_22px_-6px_rgba(124,224,196,0.45)]"
            >
              Get in touch
              <Send size={15} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-ink-border pt-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group cursor-default transition-transform duration-300 hover:-translate-y-1"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-mono text-2xl font-medium text-amber transition-[text-shadow] duration-300 group-hover:[text-shadow:0_0_16px_rgba(242,184,75,0.6)] sm:text-3xl">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs leading-snug text-paper-faint transition-colors duration-300 group-hover:text-paper-muted">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <CodePanel />
      </div>
    </section>
  );
}

function CodePanel() {
  return (
    <Spotlight className="overflow-hidden rounded-md border border-ink-border bg-ink-surface shadow-2xl shadow-black/40 transition-colors duration-300 hover:border-amber/40">
      <div className="flex items-center gap-2 border-b border-ink-border bg-ink-raised px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#4b4f58]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4b4f58]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4b4f58]" />
        <span className="ml-3 font-mono text-xs text-paper-faint">
          developer.tsx
        </span>
      </div>
      <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed text-paper-muted">
        <code>
          <span className="text-mint">const</span> developer = {"{"}
          {"\n"}
          {"  "}name:{" "}
          <span className="text-amber">&quot;Joy Sutradhar&quot;</span>,{"\n"}
          {"  "}stack: [<span className="text-amber">&quot;React&quot;</span>,{" "}
          <span className="text-amber">&quot;Next.js&quot;</span>,{" "}
          <span className="text-amber">&quot;React Native&quot;</span>],
          {"\n"}
          {"  "}focus:{" "}
          <span className="text-amber">
            &quot;scalable architecture & exceptional user experiences&quot;
          </span>
          ,{"\n"}
          {"  "}shipping: <span className="text-mint">true</span>,{"\n"}
          {"}"};{"\n\n"}
        </code>
      </pre>
    </Spotlight>
  );
}
