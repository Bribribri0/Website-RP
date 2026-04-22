import { featureItems } from "@/lib/site-data";
import { SectionHeading } from "@/components/section-heading";

export function Features() {
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
