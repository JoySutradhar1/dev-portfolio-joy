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
          DEFAULT: "#0A0E14",
          surface: "#10151D",
          raised: "#161C26",
          border: "#232B37",
        },
        paper: {
          DEFAULT: "#E8ECEF",
          muted: "#8B96A5",
          faint: "#5B6572",
        },
        amber: {
          DEFAULT: "#F2B84B",
          dim: "#C99638",
        },
        mint: {
          DEFAULT: "#7CE0C4",
          dim: "#4FA98F",
        },
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
