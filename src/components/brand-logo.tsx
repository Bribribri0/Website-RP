import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <Link href="/" className="group flex items-center gap-3 text-white">
      <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-cyan-400/30 bg-white/5 p-1.5 shadow-neon">
        <Image
          src="/brand/DSTRTO2.png"
          alt="DSTRTO CITY logo"
          fill
          sizes="48px"
          className="object-contain"
          priority
        />
      </span>
      {!compact ? (
        <span className="flex flex-col leading-none">
          <span className="text-[0.65rem] uppercase tracking-[0.45em] text-cyan-200/70">FiveM RP</span>
          <span className="text-base font-semibold tracking-[0.28em] text-white">DSTRTO CITY</span>
        </span>
      ) : null}
    </Link>
  );
}
