import Image from "next/image";
import { CalendarClock, Video, FileVideo, Users2 } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CTAButton } from "./CTAButton";
import { PricingSelector } from "./PricingSelector";
import { BATCH_TIMING } from "@/lib/config";

export type PlanTestimonial = {
  /** Leave as a clearly-marked placeholder until real feedback exists —
   * never invent a name + specific health-outcome quote. */
  name: string;
  quote: string;
  audioSrc?: string;
};

export function PlanPage({
  title,
  tagline,
  checkoutUrl,
  offerings,
  testimonials,
  photoSrc,
  photoPlaceholderLabel,
}: {
  title: string;
  tagline: string;
  checkoutUrl: string;
  offerings: string[];
  testimonials: PlanTestimonial[];
  /** Path under /public/images — if omitted, a placeholder box is shown instead */
  photoSrc?: string;
  photoPlaceholderLabel: string;
}) {
  return (
    <>
      <Header />
      <main>
        {/* Compact title */}
        <section className="pt-10 pb-2 md:pt-14">
          <div className="container-page text-center">
            <p className="eyebrow text-[12px] font-semibold uppercase text-sage-deep">
              {title}
            </p>
            <h1 className="mx-auto mt-3 max-w-xl text-[1.7rem] leading-[1.2] tracking-tight text-ink sm:text-3xl">
              {tagline}
            </h1>
          </div>
        </section>

        {/* Pricing — kept at the top, this is what mobile visitors see first */}
        <section className="py-8 md:py-10">
          <div className="container-page">
            <PricingSelector checkoutUrl={checkoutUrl} />
          </div>
        </section>

        {/* Photo */}
        <section className="py-4 md:py-8">
          <div className="container-page">
            <div className="relative mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-[1.75rem] bg-sand-dark/40">
              {photoSrc ? (
                <Image
                  src={photoSrc}
                  alt={photoPlaceholderLabel}
                  fill
                  sizes="(min-width: 1024px) 768px, 90vw"
                  className="object-cover"
                />
              ) : (
                <div
                  role="img"
                  aria-label={`Placeholder: ${photoPlaceholderLabel}`}
                  className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sand via-sand-dark/50 to-sage-light/40 text-center text-sm text-ink-soft/70"
                >
                  <span className="px-8">{photoPlaceholderLabel}</span>
                </div>
              )}
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

        {/* Testimonials (audio) */}
        {testimonials.length > 0 && (
          <section className="bg-sand/40 py-20 md:py-24">
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
