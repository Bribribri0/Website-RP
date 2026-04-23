"use client";

import { useEffect, useRef, useState } from "react";

import { featureItems } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

export function Features() {
  const [isGolemOpen, setIsGolemOpen] = useState(false);
  const golemVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = golemVideoRef.current;

    if (!video) {
      return;
    }

    if (isGolemOpen) {
      video.muted = false;
      const playPromise = video.play();

      if (playPromise && typeof playPromise.then === "function") {
        playPromise.catch(() => undefined);
      }

      return;
    }

    video.pause();
    video.currentTime = 0;
  }, [isGolemOpen]);

  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div data-reveal>
        <SectionHeading
        eyebrow="Server Features"
        title="Built for deep roleplay and a premium city feel"
        description="Every part of the server experience is designed to feel intentional, alive, and worth coming back to."
        />
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <article
          data-reveal
          data-reveal-delay="1"
          className={`group rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-panel transition ${
            isGolemOpen
              ? "scale-[1.02] border-cyan-300/40 bg-cyan-300/10"
              : "hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-cyan-300/8"
          }`}
        >
          <button
            type="button"
            aria-pressed={isGolemOpen}
            onClick={() => setIsGolemOpen((prev) => !prev)}
            className="mb-5 block w-full overflow-hidden rounded-2xl border border-cyan-300/20 bg-slate-950/60 text-left transition"
          >
            <video
              ref={golemVideoRef}
              className={`h-56 w-full object-cover transition ${
                isGolemOpen ? "scale-[1.03]" : "group-hover:scale-[1.01]"
              }`}
              src="/video-features/GOLEM.mp4"
              muted={!isGolemOpen}
              controls={isGolemOpen}
              loop
              playsInline
            />
          </button>
          <h3 className="text-xl font-semibold text-white">Golem Olivarez in the City</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Golem Olivarez is also enjoying the city, soaking in the lights and the nonstop RP energy.
          </p>
        </article>
        {featureItems.map((feature, index) => (
          <article
            key={feature.title}
            data-reveal
            data-reveal-delay={`${(index % 3) + 1}`}
            className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-panel transition hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-cyan-300/8"
          >
            <div className="mb-5 h-12 w-12 rounded-2xl border border-cyan-300/20 bg-cyan-300/10" />
            <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
