import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { footerLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#04020b]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="space-y-4">
          <BrandLogo compact />
          <p className="max-w-lg text-sm leading-7 text-slate-400">
            DSTRTO CITY is a premium FiveM roleplay concept focused on atmosphere, community, and long-term storytelling.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300/20 hover:bg-cyan-300/8">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-white/8 px-4 py-6 text-center text-xs uppercase tracking-[0.35em] text-slate-500 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} DSTRTO CITY. Built for immersive roleplay.
      </div>
    </footer>
  );
}
