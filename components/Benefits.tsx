import { Wind, Flame, Dumbbell, PersonStanding } from "lucide-react";
import { Reveal } from "./Reveal";

const CATEGORIES = [
  {
    icon: Wind,
    title: "Be Calm",
    points: ["Reduce stress", "Improve sleep quality", "Master breathing techniques"],
    bg: "#E3EFEF",
    iconBg: "#CFE3E2",
    titleColor: "#2F6F6B",
  },
  {
    icon: Flame,
    title: "Stay Active",
    points: ["Move daily, safely", "Boost your metabolism", "Support natural energy"],
    bg: "#FCEFE3",
    iconBg: "#F8DDBF",
    titleColor: "#C4712E",
  },
  {
    icon: Dumbbell,
    title: "Get Stronger",
    points: ["Build real strength", "Tone every muscle", "Strengthen your core"],
    bg: "#F3EBF6",
    iconBg: "#E5D3ED",
    titleColor: "#7A4E96",
  },
  {
    icon: PersonStanding,
    title: "Become Flexible",
    points: ["Ease joint pain", "Increase mobility", "Relieve stiffness & tightness"],
    bg: "#EAF1E3",
    iconBg: "#D3E4C4",
    titleColor: "#4F7A34",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="bg-sand/40 py-20 md:py-24">
      <div className="container-page">
        <Reveal mode="fade">
          <p className="eyebrow text-center text-[12px] font-semibold uppercase text-sage-deep">
            Discover the Benefits
          </p>
        </Reveal>
        <Reveal mode="slide-up" delay={0.05}>
          <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl tracking-tight text-ink md:text-4xl">
            Transform your body, mind and soul
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.title} mode="slide-up" delay={(i % 4) * 0.06}>
              <div
                className="flex h-full flex-col items-center rounded-[1.5rem] p-7 text-center transition-transform hover:-translate-y-1"
                style={{ backgroundColor: c.bg }}
              >
                <h3 className="text-[19px] font-bold" style={{ color: c.titleColor }}>
                  {c.title}
                </h3>
                <ul className="mt-4 space-y-2 text-[13.5px] text-ink-soft">
                  {c.points.map((point) => (
                    <li key={point}>✓ {point}</li>
                  ))}
                </ul>
                <span
                  className="mt-6 flex h-20 w-20 items-center justify-center rounded-full"
                  style={{ backgroundColor: c.iconBg }}
                >
                  <c.icon size={34} style={{ color: c.titleColor }} aria-hidden="true" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
