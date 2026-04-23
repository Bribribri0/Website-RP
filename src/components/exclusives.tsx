import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";

const showroomCars = [
  "AUDI RS7.png",
  "BMW M4.png",
  "BMW M5 PRIME EDITION.png",
  "BUGATTI CHIRON.png",
  "DODGE HELLCAT SRT LBWK.png",
  "FERRARI PISTA 488.png",
  "FORD GT.png",
  "HONDA CIVIC TYPE R.png",
  "INIFINITY Q60 BLACK S.png",
  "LAMBORGHINI HURCAN PRIOR BEAST.png",
  "LAMBORGHINI SIAN.png",
  "MERCEDES AMG GTR SPECIAL EDITION.png",
  "MERCEDES SLS AMG.png",
  "MITSUBISHI EVO IX.png",
  "MUSTANG SHELBY.png",
  "NISSAN 350Z DRIFT.png",
  "NISSAN GTR R35.png",
  "NISSAN GTR50.png",
  "PORCHE 911 GT3 HYCADE.png",
  "PORCHE 911 KEYVANY EDITION.png",
  "PORCHE GT3.png",
  "SUPRA A80.png",
  "TESLA MODEL X.png"
];

export function Exclusives() {
  return (
    <section
      id="exclusives"
      className="border-b border-white/8 bg-[linear-gradient(120deg,rgba(4,8,20,0.55),rgba(3,6,16,0.9))]"
    >
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div data-reveal>
          <SectionHeading
            eyebrow="Exclusives"
            title="Showroom access and supporter perks"
            description="Two lanes of premium: the exclusive car lineup and the donation paths that keep DSTRTO CITY alive."
          />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <article
            data-reveal
            data-reveal-direction="left"
            className="rounded-[1.8rem] border border-white/10 bg-black/35 p-6 shadow-panel"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/65">Showroom</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Available Cars</h3>
                <p className="mt-2 text-sm text-slate-300">Browse the exclusive builds currently ready for claim.</p>
              </div>
              <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-100/70">
                {showroomCars.length} models
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {showroomCars.map((car) => {
                const carName = car.replace(/\.png$/i, "");
                const carSrc = `/Showroom/${encodeURIComponent(car)}`;

                return (
                  <div
                    key={car}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/10"
                  >
                    <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-black/40">
                      <Image
                        src={carSrc}
                        alt={carName}
                        fill
                        sizes="(min-width: 1280px) 14rem, (min-width: 768px) 40vw, 90vw"
                        className="object-cover transition duration-300 group-hover:scale-[1.05]"
                      />
                    </div>
                    <p className="text-[0.65rem] uppercase tracking-[0.35em] text-cyan-100/60">Exclusive</p>
                    <p className="mt-1 text-sm font-semibold text-white">{carName}</p>
                  </div>
                );
              })}
            </div>
          </article>

          <aside
            data-reveal
            data-reveal-direction="right"
            className="flex h-full flex-col rounded-[1.8rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(12,236,244,0.12),transparent_40%),rgba(0,0,0,0.35)] p-6 shadow-panel"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/65">Donations</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Supporter Paths</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                VIP tiers and business packages unlock the perks that keep the city lights on and the exclusives rotating.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <p className="text-sm font-semibold text-white">VIP Tiers</p>
                <p className="mt-2 text-xs text-slate-300">Monthly perks, XP multipliers, and Discord status.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["x3 - x5 rewards", "Wardrobe perks", "Discord roles"].map((perk) => (
                    <span
                      key={perk}
                      className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-cyan-100/70"
                    >
                      {perk}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <p className="text-sm font-semibold text-white">Business + Property</p>
                <p className="mt-2 text-xs text-slate-300">
                  Custom MLOs, mansions, and gang bases with private stashes and garages.
                </p>
              </div>
            </div>

            <Link
              href="#donations"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Explore Donation Packages
            </Link>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-300">
              Exclusives are limited. Lock in your spot once you are ready to claim a build.
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
