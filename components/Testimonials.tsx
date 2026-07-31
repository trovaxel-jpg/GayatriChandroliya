import Image from "next/image";
import { User, Quote } from "lucide-react";

/**
 * Real student testimonials — audio + condensed quotes are drawn from
 * actual transcripts provided by the student/family. Do not add any new
 * entry here without a real audio file + real transcript text to match.
 */
const TESTIMONIALS = [
  {
    name: "Savitri",
    age: 42,
    program: "Weight Loss & Anti-Ageing",
    quote:
      "40 के बाद weight बढ़ गया था, energy भी पहले जैसी नहीं रहती थी और सीढ़ियाँ चढ़ने में भी जल्दी थक जाती थी। गायत्री जी की classes join कीं — धीरे-धीरे body ज़्यादा active लगने लगी, weight भी कम हुआ और clothes पहले से better fit होने लगे।",
    audioSrc: "/audio/savitri-testimonial.mp3",
    // Placeholder path — swap once the real portrait PNG is added to public/images/
    portrait: "/images/testimonial-savitri.png",
    cardBg: "#FCEEE1",
    accent: "#9C5F26",
  },
  {
    name: "Aaliyah",
    age: 32,
    program: "Women's Wellness Yoga",
    quote:
      "हर महीने periods बहुत painful होते थे, पहले दो दिन cramps की वजह से कुछ करने का मन नहीं करता था और साथ में stress भी बहुत रहता था। गायत्री जी की classes join करने के बाद cramps काफी manageable हो गए और periods के time की anxiety भी काफी कम हो गई।",
    audioSrc: "/audio/aaliyah-testimonial.mp3",
    portrait: "/images/testimonial-aaliyah.png",
    cardBg: "#E3EFEF",
    accent: "#2F6F6B",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-24">
      <div className="container-page">
        <p className="eyebrow text-center text-[12px] font-semibold uppercase text-sage-deep">
          Real Stories
        </p>
        <h2 className="mx-auto mt-4 max-w-xl text-center text-3xl tracking-tight text-ink md:text-4xl">
          Hear it from students themselves
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="relative overflow-hidden rounded-[1.75rem] p-6 sm:p-8"
              style={{ backgroundColor: t.cardBg }}
            >
              <div className="grid grid-cols-[auto_1fr] gap-6">
                <div className="relative h-full w-[110px] shrink-0 overflow-hidden rounded-2xl bg-white/40 sm:w-[140px]">
                  <Image
                    src={t.portrait}
                    alt={`Illustrated portrait representing ${t.name}`}
                    fill
                    sizes="140px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-[13px] text-ink-soft">Meet</p>
                  <h3 className="font-display text-2xl text-ink">{t.name} ji</h3>

                  <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[13px] text-ink-soft">
                    <span className="flex items-center gap-1.5">
                      <User size={14} style={{ color: t.accent }} aria-hidden="true" />
                      Age — {t.age}
                    </span>
                    <span>{t.program}</span>
                  </div>

                  <Quote
                    size={20}
                    className="mt-4"
                    style={{ color: t.accent, opacity: 0.5 }}
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{t.quote}</p>
                </div>
              </div>

              <div className="mt-6">
                <audio controls preload="none" className="w-full">
                  <source src={t.audioSrc} type="audio/mpeg" />
                </audio>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
