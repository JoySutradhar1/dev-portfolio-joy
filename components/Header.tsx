"use client";

import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/resume";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBg = scrolled
    ? "bg-[var(--header-bg)] backdrop-blur border-ink-border"
    : "bg-transparent border-transparent";

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${headerBg}`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="group font-display text-lg font-semibold tracking-tight text-paper"
        >
          Joy
          <span className="text-amber transition-[text-shadow] duration-300 group-hover:[text-shadow:0_0_12px_rgba(242,184,75,0.8)]">
            .
          </span>
          Sutradhar
        </a>

        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-8 font-mono text-sm text-paper-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link transition-colors hover:text-amber"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href={`mailto:${profile.email}`}
            className="rounded-sm border border-ink-border px-4 py-2 font-mono text-sm text-paper transition-all duration-300 hover:-translate-y-0.5 hover:border-amber hover:text-amber hover:shadow-[0_0_22px_-6px_rgba(242,184,75,0.55)]"
          >
            Say hello
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`h-px w-6 bg-paper transition-transform ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-paper transition-transform ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-ink-border bg-ink px-6 py-6 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-5 font-mono text-base text-paper-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="transition-colors hover:text-amber"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="inline-block text-amber"
              >
                Say hello →
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
