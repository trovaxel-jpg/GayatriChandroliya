"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

// Deterministic pseudo-random bar heights so the waveform looks organic
// but doesn't change between renders (avoids hydration mismatches).
function generateBarHeights(count: number, seed: number) {
  const heights: number[] = [];
  let s = seed;
  for (let i = 0; i < count; i++) {
    s = (s * 9301 + 49297) % 233280;
    const rnd = s / 233280;
    heights.push(6 + Math.round(rnd * 16)); // between 6px and 22px
  }
  return heights;
}

function formatTime(seconds: number) {
  if (!isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function VoiceNotePlayer({
  src,
  label,
  accent,
  seed = 1,
}: {
  src: string;
  label: string;
  accent: string;
  seed?: number;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 1
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const barCount = 28;
  const bars = generateBarHeights(barCount, seed);
  const activeBars = Math.round(progress * barCount);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      if (audio.duration) setProgress(audio.currentTime / audio.duration);
    };
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => {
      setPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  return (
    <div className="flex items-center gap-3 rounded-full bg-white/70 px-3 py-2.5">
      <audio ref={audioRef} src={src} preload="metadata" />

      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? `Pause ${label}` : `Play ${label}`}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-transform active:scale-95"
        style={{ backgroundColor: accent }}
      >
        {playing ? (
          <Pause size={16} fill="currentColor" aria-hidden="true" />
        ) : (
          <Play size={16} fill="currentColor" className="ml-0.5" aria-hidden="true" />
        )}
      </button>

      <div className="flex flex-1 items-center gap-[2.5px] overflow-hidden">
        {bars.map((h, i) => (
          <span
            key={i}
            className="w-[3px] shrink-0 rounded-full transition-colors duration-150"
            style={{
              height: `${h}px`,
              backgroundColor: i < activeBars ? accent : "#D8D2C4",
            }}
          />
        ))}
      </div>

      <span className="shrink-0 text-[11.5px] tabular-nums text-ink-soft/70">
        {playing || currentTime > 0 ? formatTime(currentTime) : formatTime(duration)}
      </span>
    </div>
  );
}
