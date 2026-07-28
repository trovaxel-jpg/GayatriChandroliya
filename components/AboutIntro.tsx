import { BadgeCheck, HeartHandshake, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { BreathLine } from "./BreathLine";
import { SITE } from "@/lib/config";

const CREDENTIALS = [
  {
    icon: BadgeCheck,
    label: `${SITE.yearsPracticing} Years of Daily Practice`,
  },
  {
    icon: Users,
    label: "Live, Small-Batch Online Classes",
  },
  {
    icon: HeartHandshake,
    label: "Personal Attention, Every Session",
  },
];

export function AboutIntro() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal mode="fade">
            <p className="eyebrow text-[12px] font-semibold uppercase text-sage-deep">
              About Us
            </p>
          </Reveal>

          <Reveal mode="slide-up" delay={0.05}>
            <h2 className="mt-4 text-3xl tracking-tight text-ink md:text-4xl">
              Your path to wellness starts here
            </h2>
          </Reveal>

          <Reveal mode="slide-up" delay={0.1}>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-ink-soft">
              Welcome — I&apos;m {SITE.instructorName}, and I teach live
              online yoga built around real, sustainable results:
              yogasana and pranayam, practiced consistently, with no
              shortcuts and no gimmicks. Whether you&apos;re a complete
              beginner or returning to practice after years away, every
              session is paced to meet you where you are.
            </p>
          </Reveal>

          <Reveal mode="slide-up" delay={0.16}>
            <BreathLine className="mt-8 h-8 w-48" tone="gold" />
          </Reveal>

          <Reveal mode="slide-up" delay={0.2}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              {CREDENTIALS.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-3 rounded-full border border-sand-dark/70 bg-sand/40 px-5 py-3"
                >
                  <c.icon size={18} className="shrink-0 text-sage-deep" aria-hidden="true" />
                  <span className="text-[13.5px] font-medium text-ink">{c.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal mode="slide-left">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-sand-dark/40">
            <div
              role="img"
              aria-label={`Placeholder: ${SITE.instructorName} in a calm seated pose`}
              className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sage-light/30 via-sand to-sand-dark/50 text-center text-sm text-ink-soft/70"
            >
              <span className="px-8">About section photograph placeholder</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
