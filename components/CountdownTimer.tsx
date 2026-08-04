"use client";

import { useEffect, useState } from "react";

function getRemaining(targetIso: string) {
  const diff = new Date(targetIso).getTime() - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0, expired: true };
  return {
    d: Math.floor(diff / (1000 * 60 * 60 * 24)),
    h: Math.floor((diff / (1000 * 60 * 60)) % 24),
    m: Math.floor((diff / (1000 * 60)) % 60),
    s: Math.floor((diff / 1000) % 60),
    expired: false,
  };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

const INITIAL = { d: 0, h: 0, m: 0, s: 0, expired: false };

/** Slim bar variant — used in the sticky footer and mid-page banners */
export function CountdownBar({ targetIso }: { targetIso: string }) {
  const [t, setT] = useState(INITIAL);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing to an external clock is the intended use case here
    setT(getRemaining(targetIso));
    const id = setInterval(() => setT(getRemaining(targetIso)), 1000);
    return () => clearInterval(id);
  }, [targetIso]);

  return (
    <div className="flex items-center gap-2 bg-ink px-4 py-2 text-cream">
      <span className="text-[12.5px] font-medium">
        {t.expired ? "Batch is starting!" : "Masterclass Starts in"}
      </span>
      {!t.expired && (
        <span className="font-mono text-[13px] font-bold text-[#FCD34D]">
          {pad(t.d)}D : {pad(t.h)}H : {pad(t.m)}M : {pad(t.s)}S
        </span>
      )}
    </div>
  );
}

/** Boxed variant — big split day/hour/min/sec tiles for the mid-page urgency block */
export function CountdownBoxes({ targetIso }: { targetIso: string }) {
  const [t, setT] = useState(INITIAL);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing to an external clock is the intended use case here
    setT(getRemaining(targetIso));
    const id = setInterval(() => setT(getRemaining(targetIso)), 1000);
    return () => clearInterval(id);
  }, [targetIso]);

  const units = [
    { label: "Days", value: t.d },
    { label: "Hours", value: t.h },
    { label: "Mins", value: t.m },
    { label: "Secs", value: t.s },
  ];

  return (
    <div className="grid grid-cols-4 gap-2.5">
      {units.map((u) => (
        <div
          key={u.label}
          className="rounded-xl bg-white px-2 py-3 text-center shadow-sm"
        >
          <p className="font-display text-2xl text-[#9A3412] sm:text-3xl">{pad(u.value)}</p>
          <p className="mt-0.5 text-[10.5px] font-medium uppercase tracking-wide text-ink-soft/70">
            {u.label}
          </p>
        </div>
      ))}
    </div>
  );
}
