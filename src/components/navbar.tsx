"use client";

import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { BrandLogo } from "@/components/brand-logo";
import { MusicPlayer } from "@/components/music-player";
import { navLinks } from "@/lib/site-data";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (pathname !== "/") {
      return;
    }

    const hash = window.location.hash;

    if (!hash) {
      return;
    }

    const id = hash.replace("#", "");
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [pathname]);

  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#") && !href.startsWith("/#")) {
      return;
    }

    const id = href.startsWith("/#") ? href.slice(2) : href.slice(1);

    if (!id) {
      return;
    }

    if (pathname !== "/") {
      return;
    }

    event.preventDefault();
    const target = document.getElementById(id);

    if (!target) {
      router.push(href);
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `/#${id}`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#05030d]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <BrandLogo />
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(event) => handleAnchorClick(event, link.href)}
              className="text-sm text-slate-300 transition hover:text-cyan-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <MusicPlayer src="/audio/Distrito%20Garage.mp3" showPrompt={false} />
          <Link
            href="https://discord.gg/BwkCwydr"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-300/12 px-4 py-2 text-sm font-medium text-cyan-50 transition hover:bg-cyan-300/18"
          >
            <MessageCircle className="h-4 w-4" />
            Discord
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white md:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      {menuOpen ? (
        <div className="border-t border-white/10 bg-black/40 px-4 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            <div className="flex flex-wrap gap-3">
              <MusicPlayer src="/audio/Distrito%20Garage.mp3" showPrompt={false} />
            </div>
            <div className="grid gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(event) => {
                    handleAnchorClick(event, link.href);
                    setMenuOpen(false);
                  }}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
