import Image from "next/image";
import { CalendarClock, Video, FileVideo, Users2 } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CTAButton } from "./CTAButton";
import { BreathLine } from "./BreathLine";
import { OrganicBlob } from "./Decorative";
import { BATCH_TIMING } from "@/lib/config";

export type PlanTier = {
  duration: string;
  originalPrice: number;
  price: number;
  /** e.g. "Best Value" — leave undefined for no badge */
  badge?: string;
};

export type PlanTestimonial = {
  /** Leave as a clearly-marked placeholder until real feedback exists —
   * never invent a name + specific health-outcome quote. */
  name: string;
  quote: string;
  /** Path under /public/audio once you have the real mp3, e.g. "/audio/plan-x-testimonial-1.mp3" */
  audioSrc?: string;
};

export function PlanPage({
  title,
  tagline,
  checkoutUrl,
  tiers,
  offerings,
  testimonials,
  photoPlaceholderLabel,
}: {
  title: string;
  tagline: string;
  checkoutUrl: string;
  tiers: PlanTier[];
  offerings: string[];
  testimonials: PlanTestimonial[];
  photoPlaceholderLabel: string;
}) {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-14 pb-16 md:pt-20 md:pb-20">
          <OrganicBlob className="pointer-events-none absolute -right-24 top-0 -z-10 h-[380px] w-[380px]" />
          <div className="container-page text-center">
            <p className="eyebrow text-[12px] font-semibold uppercase text-sage-deep">
              {title}
            </p>
            <h1 className="mx-auto mt-5 max-w-2xl text-[2.2rem] leading-[1.15] tracking-tight text-ink sm:text-5xl">
              {tagline}
            </h1>
            <div className="mt-9 flex justify-center">
              <CTAButton href={checkoutUrl}>Choose Your Plan</CTAButton>
            </div>
            <div className="mt-10 flex justify-center">
              <BreathLine className="h-8 w-52" />
            </div>
          </div>
        </section>

        {/* Photo placeholder */}
        <section className="py-4 md:py-8">
          <div className="container-page">
            <div className="relative mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-[1.75rem] bg-sand-dark/40">
              <div
                role="img"
                aria-label={`Placeholder: ${photoPlaceholderLabel}`}
                className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sand via-sand-dark/50 to-sage-light/40 text-center text-sm text-ink-soft/70"
              >
                <span className="px-8">{photoPlaceholderLabel}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Plan offerings */}
        <section className="py-16 md:py-20">
          <div className="container-page">
            <h2 className="mx-auto max-w-xl text-center text-3xl tracking-tight text-ink md:text-4xl">
              What&apos;s included
            </h2>
            <div className="mx-auto mt-4 max-w-xl rounded-2xl border border-[#E4B98C]/60 bg-[#FCEEE1] px-5 py-3 text-center text-[13.5px] text-[#9C5F26]">
              ⚠️ Batch timing shown below is a placeholder — confirm the real
              schedule with Gayatri before this page goes live: <strong>{BATCH_TIMING}</strong>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {[
                { icon: CalendarClock, text: `Live morning batch — ${BATCH_TIMING}` },
                { icon: Video, text: "Live, guided sessions — not pre-recorded videos" },
                { icon: FileVideo, text: "Recording link shared after every class" },
                { icon: Users2, text: "Small batch sizes for personal attention" },
                ...offerings.map((o) => ({ icon: Users2, text: o })),
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-2xl border border-sand-dark/70 bg-cream p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-deep/10">
                    <item.icon size={18} className="text-sage-deep" aria-hidden="true" />
                  </span>
                  <span className="text-[14.5px] text-ink-soft">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-sand/40 py-20 md:py-24">
          <div className="container-page">
            <h2 className="mx-auto max-w-xl text-center text-3xl tracking-tight text-ink md:text-4xl">
              Choose your plan
            </h2>
            <p className="mx-auto mt-3 max-w-md text-center text-[13.5px] text-ink-soft/70">
              Sample pricing shown — update with real numbers before launch.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {tiers.map((tier) => (
                <div
                  key={tier.duration}
                  className={`relative flex flex-col items-center rounded-[1.5rem] border p-7 text-center ${
                    tier.badge
                      ? "border-sage-deep bg-cream shadow-lg"
                      : "border-sand-dark/70 bg-cream"
                  }`}
                >
                  {tier.badge && (
                    <span className="absolute -top-3 rounded-full bg-sage-deep px-4 py-1 text-[11px] font-semibold uppercase tracking-wide text-cream">
                      {tier.badge}
                    </span>
                  )}
                  <h3 className="mt-2 text-[17px] font-semibold text-ink">{tier.duration}</h3>
                  <p className="mt-4 text-sm text-ink-soft/60 line-through">
                    ₹{tier.originalPrice.toLocaleString("en-IN")}
                  </p>
                  <p className="font-display text-4xl text-sage-deep">
                    ₹{tier.price.toLocaleString("en-IN")}
                  </p>
                  <div className="mt-6 w-full">
                    <CTAButton href={checkoutUrl} className="w-full">
                      Enroll Now
                    </CTAButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials (audio) */}
        {testimonials.length > 0 && (
          <section className="py-20 md:py-24">
            <div className="container-page">
              <h2 className="mx-auto max-w-xl text-center text-3xl tracking-tight text-ink md:text-4xl">
                What students are saying
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {testimonials.map((t) => (
                  <div
                    key={t.name}
                    className="rounded-2xl border border-sand-dark/70 bg-cream p-6"
                  >
                    <p className="text-[14.5px] leading-relaxed text-ink-soft">{t.quote}</p>
                    <p className="mt-4 text-[13.5px] font-semibold text-ink">{t.name}</p>
                    {t.audioSrc ? (
                      <audio controls className="mt-4 w-full" preload="none">
                        <source src={t.audioSrc} type="audio/mpeg" />
                      </audio>
                    ) : (
                      <p className="mt-4 text-[12.5px] italic text-ink-soft/60">
                        Audio testimonial placeholder — add mp3 once available
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="bg-sage-deep py-20 text-cream md:py-24">
          <div className="container-page text-center">
            <h2 className="mx-auto max-w-xl text-3xl tracking-tight md:text-4xl">
              Ready to begin?
            </h2>
            <div className="mt-9 flex justify-center">
              <CTAButton href={checkoutUrl} variant="inverse">
                Choose Your Plan
              </CTAButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
