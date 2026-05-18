"use client";

import { RefreshCw } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type StatusResponse = {
  online: boolean;
  players: number;
  maxPlayers: number;
  updatedAt: string;
  source?: "mock" | "cfx";
  error?: string;
};

const fallbackStatus: StatusResponse = {
  online: true,
  players: 61,
  maxPlayers: 128,
  updatedAt: ""
};

/** How often we re-query CFX / the status route while the tab is visible. */
const POLL_MS = 4000;

function formatRelativeUpdated(iso: string, clock: Date): string {
  if (!iso) {
    return "—";
  }
  const t = new Date(iso).getTime();
  if (Number.isNaN(t)) {
    return "—";
  }
  const sec = Math.max(0, Math.floor((clock.getTime() - t) / 1000));
  if (sec < 8) {
    return "Just now";
  }
  if (sec < 60) {
    return `${sec}s ago`;
  }
  const min = Math.floor(sec / 60);
  if (min < 60) {
    return `${min}m ago`;
  }
  const hr = Math.floor(min / 60);
  return `${hr}h ago`;
}

type ServerStatusProps = {
  /** Anchor for in-page links (e.g. navbar /#status). */
  id?: string;
  className?: string;
};

export function ServerStatus({ id, className }: ServerStatusProps) {
  const [status, setStatus] = useState<StatusResponse>(fallbackStatus);
  const [loading, setLoading] = useState(true);
  const [now, setNow] = useState(() => new Date());
  const cancelledRef = useRef(false);

  const loadStatus = useCallback(async (opts?: { silent?: boolean }) => {
    if (!opts?.silent) {
      setLoading(true);
    }
    try {
      const response = await fetch("/api/status", { cache: "no-store" });
      if (!response.ok) {
        throw new Error("Status fetch failed");
      }
      const data = (await response.json()) as StatusResponse;
      if (!cancelledRef.current) {
        setStatus(data);
      }
    } catch {
      if (!cancelledRef.current) {
        setStatus(fallbackStatus);
      }
    } finally {
      if (!cancelledRef.current && !opts?.silent) {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    cancelledRef.current = false;
    void loadStatus();

    let pollId: number | undefined;

    const startPolling = () => {
      if (pollId !== undefined) {
        return;
      }
      pollId = window.setInterval(() => {
        void loadStatus({ silent: true });
      }, POLL_MS);
    };

    const stopPolling = () => {
      if (pollId !== undefined) {
        window.clearInterval(pollId);
        pollId = undefined;
      }
    };

    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        void loadStatus({ silent: true });
        stopPolling();
        startPolling();
      } else {
        stopPolling();
      }
    };

    if (document.visibilityState === "visible") {
      startPolling();
    }
    document.addEventListener("visibilitychange", onVisibility);

    const clock = window.setInterval(() => setNow(new Date()), 1000);

    return () => {
      cancelledRef.current = true;
      stopPolling();
      document.removeEventListener("visibilitychange", onVisibility);
      window.clearInterval(clock);
    };
  }, [loadStatus]);

  return (
    <div id={id} className={className}>
      <div className="rounded-[1.75rem] border border-white/10 bg-black/30 p-5 shadow-panel sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/60">Current State</p>
            <div className="mt-3 flex items-center gap-3">
              <span className={`h-3 w-3 rounded-full ${status.online ? "bg-emerald-400" : "bg-rose-400"}`} />
              <p className="text-2xl font-semibold text-white">{status.online ? "Online" : "Offline"}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => void loadStatus()}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/25 hover:bg-cyan-300/8"
          >
            <RefreshCw className={loading ? "h-4 w-4 animate-spin" : "h-4 w-4"} />
            Refresh
          </button>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Players</p>
            <p className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{status.players}</p>
            <p className="mt-2 text-sm text-slate-300">of {status.maxPlayers} slots occupied</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Last Sync</p>
            <p className="mt-3 text-base font-medium text-white sm:text-lg">{formatRelativeUpdated(status.updatedAt, now)}</p>
            {status.updatedAt ? (
              <p className="mt-1 text-xs text-slate-500">{new Date(status.updatedAt).toLocaleTimeString()}</p>
            ) : null}
            <p className="mt-2 text-sm text-slate-300">
              {status.source === "cfx"
                ? `Live from CFX · auto-refresh about every ${POLL_MS / 1000}s while this tab is open`
                : status.source === "mock"
                  ? "Demo data · set CFX_SERVER_ID for live counts"
                  : "Status route updates automatically"}
            </p>
            {status.error ? <p className="mt-3 text-xs text-rose-300/90">{status.error}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
