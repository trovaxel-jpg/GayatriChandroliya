import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { ENROLLMENT_URL } from "@/lib/config";

const PROGRAMS = [
  {
    title: "Beginner Yoga",
    copy: "Start from zero with proper form, breath, and confidence — no experience needed.",
    tag: "Foundations",
  },
  {
    title: "Weight Loss Yoga",
    copy: "Dynamic, flowing sequences that build strength and support a healthy metabolism.",
    tag: "Active",
  },
  {
    title: "Morning Yoga",
    copy: "A 20-minute wake-up practice to start your day steady, alert, and unhurried.",
    tag: "Daily Ritual",
  },
  {
    title: "Flexibility Program",
    copy: "Targeted mobility work for hips, spine and shoulders — the areas that stiffen first.",
    tag: "6-Week Track",
  },
  {
    title: "Meditation & Breathing",
    copy: "Pranayama and stillness practices to lower stress and steady an overactive mind.",
    tag: "Calm",
  },
  {
    title: "Personalized Sessions",
    copy: "One-on-one coaching built entirely around your body, goals, and schedule.",
    tag: "1:1 Coaching",
  },
];

export function Programs() {
  return (
    <section id="programs" className="py-24 md:py-32">
      <div className="container-page">
        <Reveal mode="fade">
          <p className="eyebrow text-center text-[12px] font-semibold uppercase text-sage-deep">
            Programs
          </p>
        </Reveal>
        <Reveal mode="slide-up" delay={0.05}>
          <h2 className="mx-auto mt-4 max-w-2xl text-center text-4xl tracking-tight text-ink md:text-5xl">
            Find the practice that fits where you are today
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.title} mode="slide-up" delay={(i % 3) * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-sand-dark/70 bg-cream p-7 transition-shadow hover:shadow-md">
                <span className="eyebrow inline-block w-fit rounded-full bg-sage-deep/10 px-3 py-1 text-[10.5px] font-semibold uppercase text-sage-deep">
                  {p.tag}
                </span>
                <h3 className="mt-5 text-xl text-ink">{p.title}</h3>
                <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-ink-soft">{p.copy}</p>
                <a
                  href={ENROLLMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-sage-deep transition-colors hover:text-ink"
                  aria-label={`Enroll in ${p.title}`}
                >
                  Enroll in this program
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
