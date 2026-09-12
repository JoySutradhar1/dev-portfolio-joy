"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme");

    if (current === "light" || current === "dark") {
      setTheme(current);
      return;
    }

    try {
      const saved = localStorage.getItem("theme");
      const nextTheme = saved === "light" || saved === "dark" ? saved : "dark";
      root.setAttribute("data-theme", nextTheme);
      setTheme(nextTheme);
    } catch {
      root.setAttribute("data-theme", "dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = theme === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", nextTheme);
    setTheme(nextTheme);

    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // ignore storage errors (private browsing, etc.)
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "light"}
      className="flex h-9 w-9 items-center justify-center rounded-sm border border-ink-border text-paper-muted transition-all duration-300 hover:border-amber hover:text-amber hover:shadow-[0_0_16px_-6px_rgba(242,184,75,0.5)]"
    >
      {theme === "dark" ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="4.5"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
