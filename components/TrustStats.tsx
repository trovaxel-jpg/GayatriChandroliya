import { Reveal } from "./Reveal";

import { SITE } from "@/lib/config";

const STATS = [
  { value: `${SITE.yearsPracticing}+`, label: "Years of disciplined practice" },
  { value: "Live", label: "Guided online sessions" },
  { value: "Small", label: "Batch sizes, always" },
  { value: "₹99", label: "First trial class" },
];

export function TrustStats() {
  return (
    <section aria-label="Why students trust us" className="border-y border-sand-dark/60 bg-sand/40 py-8">
      <div className="container-page grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} mode="slide-up" delay={i * 0.08}>
            <div className="rounded-xl border border-sand-dark/70 bg-cream px-4 py-3.5 text-center shadow-sm">
              <p className="font-display text-[1.7rem] text-sage-deep">{stat.value}</p>
              <p className="mt-0.5 text-[12.5px] leading-snug text-ink-soft">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
