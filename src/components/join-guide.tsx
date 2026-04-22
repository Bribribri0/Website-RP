import { SectionHeading } from "@/components/section-heading";
import { joinSteps } from "@/lib/site-data";

export function JoinGuide() {
  return (
    <section id="join" className="border-y border-white/8 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div data-reveal>
          <SectionHeading
            eyebrow="How To Join"
            title="A simple path into the city"
            description="Keep the onboarding friction low so new players can move from first visit to first session with confidence."
          />
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {joinSteps.map((step, index) => (
            <article
              key={step.number}
              data-reveal
              data-reveal-delay={`${(index % 3) + 1}`}
              className="rounded-[1.5rem] border border-white/10 bg-black/25 p-6 shadow-panel"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/65">Step {step.number}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
