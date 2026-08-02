import Image from "next/image";
import { User } from "lucide-react";
import { VoiceNotePlayer } from "./VoiceNotePlayer";

/**
 * Real student testimonials — audio is real, summaries below are an
 * honest English paraphrase of the actual transcript each student gave.
 * Do not add an entry here without a real audio file + a real transcript
 * behind the summary.
 */
const TESTIMONIALS = [
  {
    name: "Savitri",
    age: 42,
    program: "Weight Loss & Anti-Ageing",
    summary:
      "After 40, Savitri noticed her energy dropping and weight creeping up — even climbing stairs left her tired. Since joining Gayatri's classes, she feels noticeably more active, has lost weight steadily, and says her clothes fit better than they have in years.",
    audioSrc: "/audio/aaliyah-testimonial.mp3",
    portrait: "/images/testimonial-savitri.png",
    cardBg: "#FCEEE1",
    accent: "#9C5F26",
  },
  {
    name: "Aaliyah",
    age: 32,
    program: "Women's Wellness Yoga",
    summary:
      "Aaliyah used to dread her periods every month — painful cramps in the first two days and constant stress alongside it. After joining Gayatri's classes, her cramps became far more manageable and the anxiety around that time of month eased considerably.",
    audioSrc: "/audio/savitri-testimonial.mp3",
    portrait: "/images/testimonial-aaliyah.png",
    cardBg: "#E3EFEF",
    accent: "#2F6F6B",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-16">
      <div className="container-page">
        <p className="eyebrow text-center text-[12px] font-semibold uppercase text-sage-deep">
          Real Stories
        </p>
        <h2 className="mx-auto mt-4 max-w-xl text-center text-3xl tracking-tight text-ink md:text-4xl">
          Hear it from students themselves
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="rounded-[1.75rem] p-6 sm:p-8"
              style={{ backgroundColor: t.cardBg }}
            >
              <div className="flex items-start gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-white/50">
                  <Image
                    src={t.portrait}
                    alt={`Illustrated portrait representing ${t.name}`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-[13px] text-ink-soft">Meet</p>
                  <h3 className="font-display text-xl text-ink">{t.name} ji</h3>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] text-ink-soft">
                    <span className="flex items-center gap-1">
                      <User size={13} style={{ color: t.accent }} aria-hidden="true" />
                      Age — {t.age}
                    </span>
                    <span>{t.program}</span>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-[14.5px] leading-relaxed text-ink-soft">
                {t.summary}
              </p>

              <div className="mt-6">
                <p className="mb-2 text-[12.5px] font-semibold uppercase tracking-wide" style={{ color: t.accent }}>
                  Hear from {t.name} ji
                </p>
                <VoiceNotePlayer
                  src={t.audioSrc}
                  label={`${t.name} ji's story`}
                  accent={t.accent}
                  seed={i + 1}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
