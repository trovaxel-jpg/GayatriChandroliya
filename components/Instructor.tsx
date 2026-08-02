import Image from "next/image";
import { Reveal } from "./Reveal";
import { BreathLine } from "./BreathLine";
import { LeafMotif, ScatterDots } from "./Decorative";
import { SITE } from "@/lib/config";

export function Instructor() {
  return (
    <section id="instructor" className="relative overflow-hidden bg-sand/30 py-14 md:py-18">
      <LeafMotif className="pointer-events-none absolute -left-3 top-8 -z-10 h-[180px] w-[75px] hidden sm:block" />
      <ScatterDots className="pointer-events-none absolute right-10 top-16 -z-10 h-20 w-24 hidden lg:block" />
      <div className="container-page grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal mode="slide-right">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-sand-dark/40">
            <Image
              src="/images/instructor-portrait.png"
              alt={`${SITE.instructorName} in a namaste pose`}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal mode="fade">
            <p className="eyebrow text-[12px] font-semibold uppercase text-sage-deep">
              Meet Your Yoga Guide
            </p>
          </Reveal>

          <Reveal mode="slide-up" delay={0.05}>
            <h2 className="mt-4 text-4xl tracking-tight text-ink md:text-5xl">
              {SITE.instructorName} is {SITE.instructorAge}.
              <span className="text-sage-deep"> Her practice is {SITE.yearsPracticing} years old.</span>
            </h2>
          </Reveal>

          <Reveal mode="slide-up" delay={0.1}>
            <div className="mt-7 space-y-5 text-[16px] leading-relaxed text-ink-soft">
              <p>
                For the past 14 years, Gayatri has taught yoga to students
                in her own community — helping people work through weight
                management, PCOS and PCOD, knee pain, low energy, and
                stiffness, while building real flexibility and stamina
                along the way. It started as in-person classes close to
                home, built one consistent session at a time.
              </p>
              <p>
                Now she&apos;s taking that same practice online — with the
                goal of growing a wider community of people committed to
                becoming healthier and stronger together, no matter where
                they&apos;re starting from. The approach hasn&apos;t
                changed: patient teaching, real fundamentals, and a pace
                that respects your body.
              </p>
            </div>
          </Reveal>

          <Reveal mode="slide-up" delay={0.16}>
            <BreathLine className="mt-9 h-8 w-48" tone="gold" />
          </Reveal>

          <Reveal mode="slide-up" delay={0.2}>
            <div className="mt-8 grid grid-cols-3 gap-4 sm:max-w-md">
              {[
                [`${SITE.yearsPracticing}`, "years of daily practice"],
                [`${SITE.instructorAge}`, "years young"],
                ["Live", "online sessions"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-xl border border-sand-dark/70 bg-sand/40 px-3 py-4 text-center">
                  <p className="font-display text-xl text-sage-deep">{value}</p>
                  <p className="mt-1 text-[11.5px] leading-snug text-ink-soft">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
