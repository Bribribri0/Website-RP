"use client";

import { RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

import { SectionHeading } from "@/components/section-heading";

type StatusResponse = {
  online: boolean;
  players: number;
  maxPlayers: number;
  updatedAt: string;
};

const fallbackStatus: StatusResponse = {
  online: true,
  players: 61,
  maxPlayers: 128,
  updatedAt: ""
};

export function ServerStatus() {
  const [status, setStatus] = useState<StatusResponse>(fallbackStatus);
  const [loading, setLoading] = useState(true);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    let cancelled = false;

    const loadStatus = async () => {
      try {
        const response = await fetch("/api/status", { cache: "no-store" });
        if (!response.ok) {
          throw new Error("Status fetch failed");
        }
        const data = (await response.json()) as StatusResponse;
        if (!cancelled) {
          setStatus(data);
        }
      } catch {
        if (!cancelled) {
          setStatus(fallbackStatus);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    void loadStatus();
    const interval = window.setInterval(loadStatus, 30000);
    const clock = window.setInterval(() => setNow(new Date()), 1000);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
      window.clearInterval(clock);
    };
  }, []);

  return (
    <section id="status" className="border-y border-white/8 bg-white/[0.02]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div data-reveal>
          <SectionHeading
            eyebrow="Server Status"
            title="A live pulse for the city"
            description="This is wired to a mock API route now, so swapping in a real backend later is straightforward."
          />
        </div>
        <div data-reveal className="rounded-[1.75rem] border border-white/10 bg-black/30 p-6 shadow-panel">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/60">Current State</p>
              <div className="mt-3 flex items-center gap-3">
                <span className={`h-3 w-3 rounded-full ${status.online ? "bg-emerald-400" : "bg-rose-400"}`} />
                <p className="text-2xl font-semibold text-white">{status.online ? "Online" : "Offline"}</p>
              </div>
            </div>
            <button type="button" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <RefreshCw className={loading ? "h-4 w-4 animate-spin" : "h-4 w-4"} />
              Refresh
            </button>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Players</p>
              <p className="mt-4 text-4xl font-semibold text-white">{status.players}</p>
              <p className="mt-2 text-sm text-slate-300">of {status.maxPlayers} slots occupied</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Last Sync</p>
              <p className="mt-4 text-lg font-medium text-white">
                {status.updatedAt ? new Date(status.updatedAt).toLocaleTimeString() : now.toLocaleTimeString()}
              </p>
              <p className="mt-2 text-sm text-slate-300">Status route updates automatically</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
