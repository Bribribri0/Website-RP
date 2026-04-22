import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";
import { heroHighlights } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(14,236,244,0.2),_transparent_34%),linear-gradient(180deg,_rgba(4,6,15,0.2),_rgba(2,3,9,0.9))]" />
      <div className="absolute inset-0 -z-20 bg-grid bg-[size:42px_42px] opacity-[0.15]" />
      <div className="absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/12 blur-3xl animate-glow" />
      <div className="mx-auto grid min-h-[calc(100vh-82px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="space-y-8">
          <div className="max-w-[320px]" data-reveal data-reveal-direction="left" />
          <div className="space-y-5" data-reveal data-reveal-direction="left" data-reveal-delay="1">
            <p className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.45em] text-cyan-100">
              Premium FiveM Roleplay
            </p>
            <h1 className="max-w-3xl text-5xl font-black uppercase tracking-[-0.08em] text-white sm:text-6xl lg:text-7xl">
              DSTRTO CITY
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Your Story Begins Here. Step into a neon-soaked city built for serious roleplay, custom economies, and unforgettable stories.
            </p>
          </div>
          <div className="flex flex-wrap gap-3" data-reveal data-reveal-direction="left" data-reveal-delay="2">
            <Link href="#join" className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">
              Join Now <ChevronRight className="h-4 w-4" />
            </Link>
            <Link href="#status" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-cyan-300/10">
              Connect to Server <ExternalLink className="h-4 w-4" />
            </Link>
            <Link
              href="https://discord.gg/BwkCwydr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-cyan-300/10"
            >
              Discord <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3" data-reveal data-reveal-direction="left" data-reveal-delay="3">
            {heroHighlights.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 text-sm text-slate-300 shadow-panel backdrop-blur">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative" data-reveal data-reveal-direction="right">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-transparent to-fuchsia-500/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-[rgba(6,8,18,0.72)] p-6 shadow-panel backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/60">City broadcast</p>
                <p className="mt-2 text-2xl font-semibold text-white">Live Storytelling</p>
              </div>
              <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                Online
              </div>
            </div>
            <div className="mb-6 overflow-hidden rounded-3xl border border-white/10 bg-black/40">
              <div className="relative aspect-[4/3] w-full">
                <img
                  src="/GIF%20LOGO/DP_1.gif"
                  alt="DSTRTO CITY animated logo"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Cinematic street scenes",
                "Custom interiors and businesses",
                "Police, EMS, and civillian RP",
                "Events that keep the city active"
              ].map((item, index) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4" style={{ animationDelay: `${index * 120}ms` }}>
                  <div className="mb-3 h-2 w-14 rounded-full bg-cyan-300/70" />
                  <p className="text-sm text-slate-200">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-3xl border border-cyan-300/15 bg-gradient-to-br from-cyan-300/10 to-transparent p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/60">Immersive soundtrack</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Set the mood with background music, low default volume, and persisted playback controls.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
