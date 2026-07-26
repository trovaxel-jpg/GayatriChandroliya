import { UserCheck, Users, Sparkles, Video, PlayCircle, HeartHandshake } from "lucide-react";
import { Reveal } from "./Reveal";

const REASONS = [
  {
    icon: UserCheck,
    title: "Personalized Guidance",
    copy: "Every plan is adjusted to your flexibility, goals and any physical limitations you share with us.",
  },
  {
    icon: Users,
    title: "Small Batches",
    copy: "Classes are capped so you're seen and corrected, not lost in a large group.",
  },
  {
    icon: Sparkles,
    title: "Beginner Friendly",
    copy: "No prior experience assumed. Every pose is taught from the ground up, at your pace.",
  },
  {
    icon: Video,
    title: "Live Interaction",
    copy: "Real-time classes with direct feedback on your form — not a pre-recorded video you follow alone.",
  },
  {
    icon: PlayCircle,
    title: "Recorded Sessions",
    copy: "Missed a class? Every session is recorded so you never lose progress.",
  },
  {
    icon: HeartHandshake,
    title: "Community Support",
    copy: "A private group of women on the same journey, for accountability and encouragement.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <Reveal mode="fade">
          <p className="eyebrow text-center text-[12px] font-semibold uppercase text-sage-deep">
            Why Choose Us
          </p>
        </Reveal>
        <Reveal mode="slide-up" delay={0.05}>
          <h2 className="mx-auto mt-4 max-w-2xl text-center text-4xl tracking-tight text-ink md:text-5xl">
            Built to make consistency easy
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} mode="slide-up" delay={(i % 3) * 0.08}>
              <div className="flex gap-4">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-deep/10">
                  <r.icon size={18} className="text-sage-deep" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-[16.5px] font-semibold text-ink">{r.title}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">{r.copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
