import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { BreathLine } from "./BreathLine";

/**
 * Testimonials — intentionally left with placeholder copy.
 *
 * Do NOT fill these with invented names, quotes, or health-outcome claims
 * (e.g. "cured my PCOS") — fabricated testimonials making specific medical
 * claims are deceptive advertising and can create real legal exposure.
 *
 * Once real students share feedback (even a casual WhatsApp message),
 * swap the placeholder objects below for their actual words — keep the
 * original phrasing/imperfections rather than polishing them, that's what
 * makes this section credible.
 */
const TESTIMONIALS: { quote: string; name: string }[] = [
  // { quote: "Real student quote goes here, in their own words.", name: "Real Student Name" },
];

export function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section id="testimonials" className="bg-sand/40 py-20 md:py-24">
      <div className="container-page">
        <Reveal mode="fade">
          <p className="eyebrow text-center text-[12px] font-semibold uppercase text-sage-deep">
            Testimonials
          </p>
        </Reveal>
        <Reveal mode="slide-up" delay={0.05}>
          <div className="mt-3 flex justify-center">
            <BreathLine className="h-8 w-48" />
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} mode="slide-up" delay={(i % 4) * 0.06}>
              <div className="h-full rounded-2xl border border-sand-dark/70 bg-cream p-6">
                <Quote size={22} className="text-sage-deep/60" aria-hidden="true" />
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                  {t.quote}
                </p>
                <p className="mt-4 text-[13.5px] font-semibold text-ink">{t.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
