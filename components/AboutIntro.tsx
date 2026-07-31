import { BadgeCheck, HeartHandshake, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { BreathLine } from "./BreathLine";
import { OrganicBlob, LeafMotif } from "./Decorative";
import { SITE } from "@/lib/config";

const CREDENTIALS = [
  {
    icon: BadgeCheck,
    label: `${SITE.yearsPracticing} Years of Teaching Experience`,
  },
  {
    icon: Users,
    label: "Growing Wellness Community",
  },
  {
    icon: HeartHandshake,
    label: "Personal Attention, Every Session",
  },
];

export function AboutIntro() {
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-28">
      <LeafMotif className="pointer-events-none absolute -right-2 top-6 -z-10 h-[200px] w-[80px] hidden sm:block" />
      <OrganicBlob
        className="pointer-events-none absolute -left-28 bottom-0 -z-10 h-[360px] w-[360px]"
        color="#E3D0A8"
      />
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal mode="fade">
            <p className="eyebrow text-[12px] font-semibold uppercase text-sage-deep">
              Welcome to {SITE.name}
            </p>
          </Reveal>
          <Reveal mode="slide-up" delay={0.05}>
            <h2 className="mt-4 text-3xl tracking-tight text-ink md:text-4xl">
              Your path to wellness starts here
            </h2>
          </Reveal>
          <Reveal mode="slide-up" delay={0.1}>
            <div className="mt-3 flex justify-center">
              <BreathLine className="h-8 w-48" tone="gold" />
            </div>
          </Reveal>
        </div>

        <Reveal mode="slide-up" delay={0.14}>
          <div className="mx-auto mt-10 max-w-2xl rounded-[1.75rem] border-2 border-dashed border-[#E4B98C] bg-[#FCEEE1] p-7 sm:p-9">
            <p className="text-[15px] font-semibold uppercase tracking-wide text-[#C97A3D]">
              About Us
            </p>
            <div className="mt-4 space-y-4 text-[15.5px] leading-relaxed text-ink-soft">
              <p>
                Welcome to {SITE.name}, where mindfulness meets movement.
                I&apos;m Gayatri, and yoga has been part of my daily life for{" "}
                {SITE.yearsPracticing} years now — teaching yogasana and
                pranayam to help people build real, lasting health.
              </p>
              <p>
                Whether you&apos;re a complete beginner or returning to
                practice after years away, every session is paced to meet
                you where you are — no shortcuts, no gimmicks, just
                consistent, guided practice.
              </p>
            </div>

            {/* Real intro video */}
            <div className="relative mx-auto mt-7 aspect-[9/16] w-full max-w-xs overflow-hidden rounded-2xl bg-black">
              <video
                controls
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              >
                <source src="/video/intro.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </Reveal>

        <Reveal mode="slide-up" delay={0.2}>
          <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10">
            {CREDENTIALS.map((c) => (
              <div key={c.label} className="flex flex-col items-center text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-deep/10">
                  <c.icon size={22} className="text-sage-deep" aria-hidden="true" />
                </span>
                <span className="mt-3 max-w-[10rem] text-[13.5px] font-medium text-ink">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
