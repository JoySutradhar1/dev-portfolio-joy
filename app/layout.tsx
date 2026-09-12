import BackgroundFX from "@/components/BackgroundFX";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joy Sutradhar — Frontend Developer",
  description:
    "Frontend Developer specializing in React, Next.js, and React Native. Building responsive, scalable web and mobile applications.",
  keywords: [
    "Joy Sutradhar",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "React Native",
    "Bangladesh",
  ],
};

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored === "light" || stored === "dark"
      ? stored
      : (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body
        suppressHydrationWarning
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body text-paper antialiased`}
      >
        <BackgroundFX />
        {children}
      </body>
    </html>
  );
}
