import { Reveal } from "./Reveal";
import { BreathLine } from "./BreathLine";
import { SITE } from "@/lib/config";

export function Instructor() {
  return (
    <section id="instructor" className="py-24 md:py-32">
      <div className="container-page grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal mode="slide-right">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-sand-dark/40">
            <div
              role="img"
              aria-label={`Placeholder: ${SITE.instructorName} demonstrating a deep backbend with calm, controlled breath`}
              className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sage-light/30 via-sand to-sand-dark/50 text-center text-sm text-ink-soft/70"
            >
              <span className="px-8">Instructor photograph placeholder — mid-practice</span>
            </div>
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
                Fourteen years ago, yoga wasn&apos;t a business — it was
                simply a habit she refused to skip. Early mornings, the same
                unbroken routine, a quiet insistence on doing the
                fundamentals well. That consistency is what people notice
                first when they meet her: the ease in her spine, the
                steadiness of her balance, the way she moves without strain.
              </p>
              <p>
                Most people are surprised when they learn her actual age.
                It isn&apos;t a trick or a shortcut — it&apos;s the visible
                result of a body that has been moved, stretched, and cared
                for consistently, day after day, for fourteen years. She
                doesn&apos;t promise you&apos;ll look a certain way. She
                teaches the same discipline that shaped her own practice,
                and lets your consistency do the rest.
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
