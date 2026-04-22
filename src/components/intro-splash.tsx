"use client";

import { useEffect, useState } from "react";

const SPLASH_DURATION_MS = 3600;

type IntroSplashProps = {
  src: string;
};

export function IntroSplash({ src }: IntroSplashProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      return;
    }

    const timer = window.setTimeout(() => setVisible(false), SPLASH_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[#02010b]/95 backdrop-blur-sm"
      role="presentation"
      aria-hidden="true"
      onClick={() => setVisible(false)}
    >
      <div className="relative w-[220px] max-w-[70vw] overflow-hidden rounded-3xl border border-cyan-300/20 bg-black/60 p-4 shadow-neon">
        <div className="relative aspect-square w-full">
          <img src={src} alt="" className="h-full w-full object-contain" />
        </div>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full animate-[introfill_1.8s_linear_forwards] rounded-full bg-cyan-300" />
        </div>
      </div>
    </div>
  );
}
