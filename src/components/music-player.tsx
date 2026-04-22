"use client";

import { Pause, Play, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const STORAGE_ENABLED = "dstrto-city-music-enabled";
const STORAGE_VOLUME = "dstrto-city-music-volume";

type MusicPlayerProps = {
  src: string;
  showPrompt?: boolean;
};

export function MusicPlayer({ src, showPrompt = true }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.18);

  useEffect(() => {
    const hydratePreferences = () => {
      const savedEnabled = window.localStorage.getItem(STORAGE_ENABLED);
      const savedVolume = window.localStorage.getItem(STORAGE_VOLUME);

      if (savedVolume) {
        const parsed = Number(savedVolume);
        if (!Number.isNaN(parsed)) {
          setVolume(Math.min(0.35, Math.max(0, parsed)));
        }
      }

      if (savedEnabled === "true") {
        setIsEnabled(true);
        setIsPlaying(true);
      }
    };

    const frame = window.requestAnimationFrame(hydratePreferences);

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    audioRef.current.volume = volume;
    audioRef.current.muted = volume === 0;
    window.localStorage.setItem(STORAGE_VOLUME, String(volume));
  }, [volume]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_ENABLED, String(isEnabled));
  }, [isEnabled]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    audio.loop = true;
    audio.volume = volume;
    audio.muted = volume === 0;

    if (isEnabled && isPlaying) {
      void audio.play().catch(() => {
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isEnabled, isPlaying, volume]);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (!isEnabled) {
      setIsEnabled(true);
      setIsPlaying(true);
      await audio.play().catch(() => {
        setIsPlaying(false);
      });
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    await audio.play().catch(() => {
      setIsPlaying(false);
    });
    setIsPlaying(true);
  };

  const onFirstPlay = async () => {
    setIsEnabled(true);
    setIsPlaying(true);
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    await audio.play().catch(() => {
      setIsPlaying(false);
    });
  };

  return (
    <>
      <audio ref={audioRef} src={src} preload="none" />
      <div className="hidden min-w-[260px] items-center gap-3 rounded-full border border-white/10 bg-black/25 px-4 py-2 backdrop-blur xl:flex">
        <button
          type="button"
          onClick={toggleMusic}
          className="inline-flex w-[92px] items-center justify-center gap-2 rounded-full bg-cyan-300/10 px-3 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/20"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          <span className="inline-block w-[44px] text-center">{isPlaying ? "Pause" : "Play"}</span>
        </button>
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-400">
          <Volume2 className="h-4 w-4 text-cyan-200" />
          <input
            aria-label="Music volume"
            type="range"
            min="0"
            max="0.35"
            step="0.01"
            value={volume}
            onChange={(event) => setVolume(Number(event.target.value))}
            className="w-28 accent-cyan-300"
          />
        </div>
      </div>
      <button
        type="button"
        onClick={toggleMusic}
        className="inline-flex w-[132px] items-center justify-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/20 xl:hidden"
      >
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        <span className="inline-block w-[64px] text-center">{isPlaying ? "Music On" : "Music Off"}</span>
      </button>
      {!isEnabled && showPrompt ? (
        <button
          type="button"
          onClick={onFirstPlay}
          className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-300/30 hover:bg-cyan-300/10"
        >
          Play Music
        </button>
      ) : null}
    </>
  );
}
