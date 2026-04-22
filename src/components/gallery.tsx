import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { galleryItems } from "@/lib/site-data";

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div data-reveal>
        <SectionHeading
          eyebrow="Gallery"
          title="Visual snapshots of DSTRTO CITY"
          description="Use these branded placeholders now and swap them for real screenshots, clips, or a carousel later."
        />
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {galleryItems.map((item, index) => (
          <article
            key={item.title}
            data-reveal
            data-reveal-delay={`${(index % 3) + 1}`}
            data-reveal-direction={index % 2 === 0 ? "left" : "right"}
            className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-cyan-300/12 to-white/5 p-4 shadow-panel"
          >
            <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(15,223,240,0.24),_transparent_35%),linear-gradient(180deg,_rgba(8,10,20,0.9),_rgba(2,4,10,0.98))]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_30%,rgba(255,255,255,0.08),transparent_70%)]" />
              <div className="absolute left-4 top-4 rounded-full border border-cyan-300/20 bg-black/30 px-3 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-cyan-100/70">
                0{index + 1}
              </div>
              {item.logo ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-40 w-40 items-center justify-center rounded-[2.2rem] border border-cyan-300/15 bg-black/40 p-6 shadow-neon">
                    <Image src={item.logo} alt="" width={140} height={140} className="h-28 w-28 object-contain" />
                  </div>
                </div>
              ) : null}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="mb-3 h-2 w-32 rounded-full bg-cyan-300/70" />
                <div className="h-2 w-20 rounded-full bg-white/25" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-300">{item.meta}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
