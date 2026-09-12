"use client";

import { useEffect, useRef } from "react";

export default function BackgroundFX() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!canHover || reduceMotion) return;

    const el = glowRef.current;
    if (!el) return;

    function handleMove(e: MouseEvent) {
      if (!el) return;
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      el.style.opacity = "1";
    }
    function handleLeave() {
      if (!el) return;
      el.style.opacity = "0";
    }

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="bg-fx" aria-hidden="true">
      <div className="bg-grid-mask" />
      <div className="bg-aurora" />
      <div className="bg-orb bg-orb-amber" />
      <div className="bg-orb bg-orb-mint" />
      {/* <div ref={glowRef} className="bg-cursor-glow" /> */}
    </div>
  );
}
