import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "var(--bg)",
          surface: "var(--bg-surface)",
          raised: "var(--bg-raised)",
          border: "var(--border)",
        },
        paper: {
          DEFAULT: "var(--text)",
          muted: "var(--text-muted)",
          faint: "var(--text-faint)",
        },
        amber: {
          DEFAULT: "var(--accent)",
          dim: "var(--accent-dim)",
        },
        mint: {
          DEFAULT: "var(--mint)",
          dim: "var(--mint-dim)",
        },
        accentText: "#14110A",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
