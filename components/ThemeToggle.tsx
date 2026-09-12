"use client";

import { Moon, Sun } from "lucide-react";
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
        <Sun size={16} strokeWidth={1.8} aria-hidden="true" />
      ) : (
        <Moon size={16} strokeWidth={1.8} aria-hidden="true" />
      )}
    </button>
  );
}
