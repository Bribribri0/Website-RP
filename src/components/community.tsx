import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { communityLinks } from "@/lib/site-data";

export function Community() {
  return (
    <section id="community" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div data-reveal>
        <SectionHeading
          eyebrow="Community"
          title="Join the conversation beyond the server"
          description="Put Discord and socials front and center so players can join, ask questions, and stay connected."
        />
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div data-reveal className="rounded-[1.75rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/12 to-white/5 p-8 shadow-panel">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/60">Discord Hub</p>
          <h3 className="mt-4 text-3xl font-semibold text-white">Keep the city alive</h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
            Announcements, staff updates, support, applications, and event drops all live inside the Discord.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="https://discord.gg/BwkCwydr"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Join Discord
            </Link>
            <Link href="/apply" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-cyan-300/10">
              Whitelist Apply
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {communityLinks.map((item, index) => (
            <Link
              key={item.label}
              data-reveal
              data-reveal-delay={`${(index % 3) + 1}`}
              data-reveal-direction={index % 2 === 0 ? "left" : "right"}
              href={item.href}
              className="rounded-[1.5rem] border border-white/10 bg-black/25 p-6 shadow-panel transition hover:border-cyan-300/20 hover:bg-cyan-300/8"
            >
              <p className="text-lg font-semibold text-white">{item.label}</p>
              <p className="mt-2 text-sm text-slate-300">{item.note}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
