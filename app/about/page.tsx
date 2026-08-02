import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { BreathLine } from "@/components/BreathLine";
import { SITE, TRIAL_ENROLLMENT_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Us",
  description: `Meet ${SITE.instructorName}, the teacher behind ${SITE.name}.`,
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-14 pb-10 md:pt-20">
          <div className="container-page text-center">
            <p className="eyebrow text-[12px] font-semibold uppercase text-sage-deep">
              About Us
            </p>
            <h1 className="mx-auto mt-4 max-w-2xl text-4xl tracking-tight text-ink md:text-5xl">
              A practice built on {SITE.yearsPracticing} years of showing up.
            </h1>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container-page grid items-start gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-sand-dark/40">
              <div
                role="img"
                aria-label={`Placeholder: portrait of ${SITE.instructorName}`}
                className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sage-light/30 via-sand to-sand-dark/50 text-center text-sm text-ink-soft/70"
              >
                <span className="px-8">Portrait placeholder — {SITE.instructorName}</span>
              </div>
            </div>

            <div>
              <h2 className="text-3xl tracking-tight text-ink md:text-4xl">
                Hi, I&apos;m {SITE.instructorName}
              </h2>
              <BreathLine className="mt-6 h-8 w-48" tone="gold" />

              <div className="mt-7 space-y-5 text-[16px] leading-relaxed text-ink-soft">
                <p>
                  I&apos;m {SITE.instructorAge} years old, and yoga has been
                  part of my daily life for {SITE.yearsPracticing} years now.
                  What started as a personal discipline — something I did
                  quietly, every morning, for myself — slowly became the
                  thing everyone around me kept asking about.
                </p>
                <p>
                  I don&apos;t teach shortcuts, and I don&apos;t promise
                  overnight results. What I teach is what actually worked
                  for me: full-body yogasana and pranayam, practiced
                  consistently, without needing a gym or any equipment. It&apos;s
                  given me my flexibility, my energy, and — people tell me —
                  a lot of my looks too.
                </p>
                <p>
                  I started {SITE.name} because I wanted to teach this
                  properly, to more people, without either of us needing to
                  leave the house. Every class is live, guided, and paced
                  for real bodies — including yours, wherever you&apos;re
                  starting from.
                </p>
              </div>

              <div className="mt-9">
                <CTAButton href={TRIAL_ENROLLMENT_URL}>Start Your Journey</CTAButton>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-sand/40 py-16 md:py-20">
          <div className="container-page">
            <h2 className="text-center text-2xl tracking-tight text-ink md:text-3xl">
              What I believe about practice
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Consistency over intensity",
                  copy: "Twenty focused minutes, done daily, beats an occasional hour every time.",
                },
                {
                  title: "Every body, every age",
                  copy: "There's a modification for every pose — nobody is rushed into something they aren't ready for.",
                },
                {
                  title: "No equipment required",
                  copy: "A mat and a little floor space is all you need to begin, wherever you are.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-sand-dark/70 bg-cream p-6 text-center"
                >
                  <h3 className="text-[16px] font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
