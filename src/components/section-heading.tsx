type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-sm uppercase tracking-[0.4em] text-cyan-200/65">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      <p className="text-sm leading-7 text-slate-300 md:text-base">{description}</p>
    </div>
  );
}
