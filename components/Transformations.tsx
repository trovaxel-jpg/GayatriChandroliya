import { Reveal } from "./Reveal";

const STORIES = [
  {
    name: "Priya Nair",
    age: 34,
    city: "Bengaluru",
    quote:
      "Six months in, I can finally touch my toes without bending my knees. My back pain from sitting all day has quietened down a lot too.",
  },
  {
    name: "Sunita Deshmukh",
    age: 47,
    city: "Pune",
    quote:
      "I joined for weight management and stayed for how calm I feel afterward. The small batch means she actually corrects my form every class.",
  },
  {
    name: "Ritu Malhotra",
    age: 52,
    city: "Delhi",
    quote:
      "At my age I was nervous about starting something new. The pace was gentle enough to begin, and I've never once felt out of place.",
  },
  {
    name: "Anjali Pillai",
    age: 29,
    city: "Kochi",
    quote:
      "My posture at my desk job has genuinely changed. Colleagues have asked if I've been doing something different — it's just been consistency.",
  },
  {
    name: "Kavita Rao",
    age: 41,
    city: "Hyderabad",
    quote:
      "The morning sequence takes twenty minutes and sets the tone for my whole day. I sleep better and I'm noticeably less reactive with my kids.",
  },
  {
    name: "Neha Kapadia",
    age: 38,
    city: "Ahmedabad",
    quote:
      "I was skeptical about online classes but the live feedback feels personal. My balance and core strength have improved more than I expected.",
  },
];

export function Transformations() {
  return (
    <section id="stories" className="bg-sand/40 py-24 md:py-32">
      <div className="container-page">
        <Reveal mode="fade">
          <p className="eyebrow text-center text-[12px] font-semibold uppercase text-sage-deep">
            Real Students
          </p>
        </Reveal>
        <Reveal mode="slide-up" delay={0.05}>
          <h2 className="mx-auto mt-4 max-w-2xl text-center text-4xl tracking-tight text-ink md:text-5xl">
            Stories from women who kept showing up
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((s, i) => (
            <Reveal key={s.name} mode="slide-up" delay={(i % 3) * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-sand-dark/70 bg-cream p-7">
                <blockquote className="flex-1 text-[15px] leading-relaxed text-ink-soft">
                  &ldquo;{s.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-sand-dark/60 pt-4">
                  <p className="text-[14.5px] font-semibold text-ink">{s.name}</p>
                  <p className="text-[13px] text-ink-soft">
                    Age {s.age} · {s.city}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal mode="fade" delay={0.1}>
          <p className="mt-8 text-center text-[12.5px] text-ink-soft/70">
            Individual results vary based on consistency, starting point and body.
            These are personal accounts, not guarantees.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
