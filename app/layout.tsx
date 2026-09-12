import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import BackgroundFX from "@/components/BackgroundFX";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body text-paper antialiased`}
      >
        <BackgroundFX />
        {children}
      </body>
    </html>
  );
}
