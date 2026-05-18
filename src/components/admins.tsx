import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";

const headAdminPhoto = "/admin-images/admin%20ejay.jpg";

export function Admins() {
  return (
    <section id="admins" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div data-reveal>
        <SectionHeading
          eyebrow="Admins"
          title="Leadership behind the city"
          description="Meet the staff who help steer the server, support players, and keep departments aligned with the RP vision."
        />
      </div>
      <article
        data-reveal
        data-reveal-delay="1"
        className="mt-12 overflow-hidden rounded-[1.75rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/12 to-white/5 shadow-panel lg:grid lg:grid-cols-[minmax(0,340px)_1fr] lg:items-stretch"
      >
        <div className="relative aspect-[4/5] min-h-[280px] border-b border-white/10 lg:min-h-0 lg:border-b-0 lg:border-r">
          <Image
            src={headAdminPhoto}
            alt="Head Admin Joaquin"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 340px"
            priority={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(5,3,13,0.85))] lg:bg-[linear-gradient(90deg,transparent_40%,rgba(5,3,13,0.5))]" />
        </div>
        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-100/60">Head Admin</p>
          <h3 className="mt-3 font-[family-name:var(--font-orbitron)] text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Joaquin
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            This is Head Admin Joaquin. He manages the police department—overseeing PD direction, training, and how enforcement
            fits the city&apos;s RP.
          </p>
        </div>
      </article>
    </section>
  );
}
