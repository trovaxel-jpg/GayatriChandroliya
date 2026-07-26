import {
  Feather,
  PersonStanding,
  Scale,
  Wind,
  Footprints,
  Sunrise,
  Move,
  Sprout,
} from "lucide-react";
import { Reveal } from "./Reveal";

const BENEFITS = [
  {
    icon: Feather,
    title: "Better Flexibility",
    copy: "Gradual, safe range-of-motion work that loosens tight hips, hamstrings and shoulders.",
  },
  {
    icon: PersonStanding,
    title: "Improved Posture",
    copy: "Strengthen the muscles that hold you upright, so standing tall stops feeling like effort.",
  },
  {
    icon: Scale,
    title: "Weight Management",
    copy: "Steady, sustainable movement that supports a healthy weight alongside your daily habits.",
  },
  {
    icon: Wind,
    title: "Reduced Stress",
    copy: "Breath-led sequences that calm the nervous system and quiet a busy mind.",
  },
  {
    icon: Footprints,
    title: "Better Mobility",
    copy: "Move through your day — stairs, floor, travel — with less stiffness and more ease.",
  },
  {
    icon: Sunrise,
    title: "Daily Energy",
    copy: "Morning sequences designed to leave you alert and steady, not depleted.",
  },
  {
    icon: Move,
    title: "Better Balance",
    copy: "Core and stability work that protects you as coordination naturally shifts with age.",
  },
  {
    icon: Sprout,
    title: "Healthy Habits",
    copy: "A routine simple enough to keep — because consistency matters more than intensity.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="bg-sand/40 py-24 md:py-32">
      <div className="container-page">
        <Reveal mode="fade">
          <p className="eyebrow text-center text-[12px] font-semibold uppercase text-sage-deep">
            What Changes
          </p>
        </Reveal>
        <Reveal mode="slide-up" delay={0.05}>
          <h2 className="mx-auto mt-4 max-w-2xl text-center text-4xl tracking-tight text-ink md:text-5xl">
            Eight things a consistent practice gives back
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} mode="slide-up" delay={(i % 4) * 0.06}>
              <div className="h-full rounded-2xl border border-sand-dark/70 bg-cream p-6 transition-shadow hover:shadow-md">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-deep/10">
                  <b.icon size={20} className="text-sage-deep" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-[17px] font-semibold text-ink">{b.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{b.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
