import { CTAButton } from "./CTAButton";
import { BreathLine } from "./BreathLine";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="bg-sage-deep py-24 text-cream md:py-28">
      <div className="container-page text-center">
        <Reveal mode="fade">
          <p className="eyebrow text-[12px] font-semibold uppercase text-sage-light">
            Your Practice Starts Here
          </p>
        </Reveal>
        <Reveal mode="slide-up" delay={0.06}>
          <h2 className="mx-auto mt-5 max-w-2xl text-4xl tracking-tight md:text-5xl">
            Twenty minutes a day is all it takes to begin.
          </h2>
        </Reveal>
        <Reveal mode="slide-up" delay={0.12}>
          <p className="mx-auto mt-6 max-w-lg text-[16px] leading-relaxed text-cream/80">
            Join a small, live batch guided by an instructor whose own
            practice speaks for itself. No experience needed — just a mat
            and a willingness to show up.
          </p>
        </Reveal>
        <Reveal mode="scale" delay={0.18}>
          <div className="mt-10 flex justify-center">
            <CTAButton variant="inverse">Start Your Journey</CTAButton>
          </div>
        </Reveal>
        <Reveal mode="fade" delay={0.24}>
          <BreathLine className="mx-auto mt-12 h-8 w-56" tone="cream" />
        </Reveal>
      </div>
    </section>
  );
}
