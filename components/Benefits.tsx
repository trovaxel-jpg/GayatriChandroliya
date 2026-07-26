import { Wind, Flame, Dumbbell, PersonStanding } from "lucide-react";
import { Reveal } from "./Reveal";

const CATEGORIES = [
  {
    icon: Wind,
    title: "Be Calm",
    points: ["Reduce stress", "Improve sleep quality", "Master breathing techniques"],
  },
  {
    icon: Flame,
    title: "Stay Active",
    points: ["Move daily, safely", "Boost your metabolism", "Support natural energy"],
  },
  {
    icon: Dumbbell,
    title: "Get Stronger",
    points: ["Build real strength", "Tone every muscle", "Strengthen your core"],
  },
  {
    icon: PersonStanding,
    title: "Become Flexible",
    points: ["Ease joint pain", "Increase mobility", "Relieve stiffness & tightness"],
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="bg-sand/40 py-20 md:py-24">
      <div className="container-page">
        <Reveal mode="fade">
          <p className="eyebrow text-center text-[12px] font-semibold uppercase text-sage-deep">
            Discover the Benefits
          </p>
        </Reveal>
        <Reveal mode="slide-up" delay={0.05}>
          <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl tracking-tight text-ink md:text-4xl">
            Transform your body, mind and soul
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.title} mode="slide-up" delay={(i % 4) * 0.06}>
              <div className="h-full rounded-2xl border border-sand-dark/70 bg-cream p-6 text-center transition-shadow hover:shadow-md">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sage-deep/10">
                  <c.icon size={24} className="text-sage-deep" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-[17px] font-semibold text-ink">{c.title}</h3>
                <ul className="mt-4 space-y-2 text-left text-[13.5px] text-ink-soft">
                  {c.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 text-sage-deep">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
