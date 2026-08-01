import { Info, CalendarClock, Video, FileVideo, Users2 } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CTAButton } from "./CTAButton";
import { BATCH_TIMING } from "@/lib/config";

export type PlanTestimonial = {
  /** Leave as a clearly-marked placeholder until real feedback exists —
   * never invent a name + specific health-outcome quote. */
  name: string;
  quote: string;
  audioSrc?: string;
};

// Real pricing structure — confirmed from Superprofile's own plan selector.
// Same across all three yoga types unless told otherwise per-plan.
const TIERS = [
  { duration: "6 Months", original: 11999, price: 2999, months: 6, badge: "Best Value" },
  { duration: "3 Months", original: 5999, price: 1899, months: 3 },
];
const MONTHLY_TIER = { duration: "1 Month", original: 1499, price: 699, months: 1 };

function pctOff(original: number, price: number) {
  return Math.round((1 - price / original) * 100);
}
function perMonth(price: number, months: number) {
  return Math.round(price / months);
}

function PriceCard({
  duration,
  original,
  price,
  months,
  badge,
}: {
  duration: string;
  original: number;
  price: number;
  months: number;
  badge?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl border p-5 ${
        badge ? "border-sage-deep bg-cream shadow-md" : "border-sand-dark/70 bg-cream"
      }`}
    >
      {badge && (
        <span className="absolute -top-3 right-4 rounded-full bg-sage-deep px-3 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-cream">
          {badge}
        </span>
      )}
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2.5">
          <span
            className="h-4 w-4 shrink-0 rounded-full border-2"
            style={{ borderColor: badge ? "#4A5730" : "#D8D2C4" }}
          />
          <span className="text-[15px] font-semibold text-ink">{duration}</span>
        </span>
        <span className="text-[12px] text-ink-soft/70">₹{perMonth(price, months)}/month</span>
      </div>
      <div className="mt-3 flex items-center gap-2.5">
        <span className="text-[11.5px] text-ink-soft/50 line-through">
          ₹{original.toLocaleString("en-IN")}
        </span>
        <span className="font-display text-2xl text-sage-deep">
          ₹{price.toLocaleString("en-IN")}
        </span>
        <span className="rounded-full bg-[#DCEDE0] px-2.5 py-0.5 text-[11px] font-semibold text-[#3D7A4C]">
          {pctOff(original, price)}% off
        </span>
      </div>
    </div>
  );
}

export function PlanPage({
  title,
  tagline,
  checkoutUrl,
  offerings,
  testimonials,
  photoPlaceholderLabel,
}: {
  title: string;
  tagline: string;
  checkoutUrl: string;
  offerings: string[];
  testimonials: PlanTestimonial[];
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
          <div className="container-page mx-auto max-w-md">
            <h2 className="text-[13px] font-semibold uppercase tracking-wide text-ink-soft">
              Choose your plan type
            </h2>

            <p className="mt-4 text-[12px] font-medium text-ink-soft/70">Prepaid Plans</p>
            <div className="mt-2 grid grid-cols-1 gap-3">
              {TIERS.map((t) => (
                <a key={t.duration} href={checkoutUrl}>
                  <PriceCard
                    duration={t.duration}
                    original={t.original}
                    price={t.price}
                    months={t.months}
                    badge={t.badge}
                  />
                </a>
              ))}
            </div>

            <p className="mt-6 text-[12px] font-medium text-ink-soft/70">Monthly Plan</p>
            <p className="mt-1 flex items-center gap-1.5 text-[11.5px] text-ink-soft/60">
              This is a recurring plan
              <span className="group relative inline-flex">
                <Info size={13} className="cursor-help" aria-hidden="true" />
                <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 w-56 -translate-x-1/2 rounded-xl bg-ink px-3 py-2 text-[11px] leading-relaxed text-cream opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                  Your subscription will automatically renew each month. You
                  can cancel anytime before the next billing cycle to avoid
                  being charged.
                </span>
              </span>
            </p>
            <div className="mt-2">
              <a href={checkoutUrl}>
                <PriceCard
                  duration={MONTHLY_TIER.duration}
                  original={MONTHLY_TIER.original}
                  price={MONTHLY_TIER.price}
                  months={MONTHLY_TIER.months}
                />
              </a>
            </div>

            <div className="mt-6">
              <CTAButton href={checkoutUrl} className="w-full">
                Choose Your Plan
              </CTAButton>
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
