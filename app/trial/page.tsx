"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  Clock,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Phone,
  PersonStanding,
  Wind,
  Dumbbell,
  Flame,
} from "lucide-react";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import { CountdownBar, CountdownBoxes } from "@/components/CountdownTimer";
import { StickyPriceBar } from "@/components/StickyPriceBar";
import { VoiceNotePlayer } from "@/components/VoiceNotePlayer";
import { SITE, TRIAL_ENROLLMENT_URL, MASTERCLASS_START_AT } from "@/lib/config";

const BENEFITS = [
  {
    icon: PersonStanding,
    title: "Improved Flexibility & Posture",
    copy: "Gentle, guided stretching that loosens tight joints and helps you stand and move with ease.",
  },
  {
    icon: Wind,
    title: "Reduced Stress & Better Sleep",
    copy: "Breath-led sequences that calm the nervous system, so you feel lighter by the end of class.",
  },
  {
    icon: Dumbbell,
    title: "Increased Strength & Stamina",
    copy: "Build real, functional strength — climbing stairs and daily tasks start feeling easier.",
  },
  {
    icon: Flame,
    title: "Better Digestion & Energy",
    copy: "Consistent practice supports digestion and leaves you with steadier energy through the day.",
  },
];

const FREEBIES = [
  {
    label: "Bonus 1",
    title: "5-Minute Morning Energizer",
    copy: "A short guided routine to start your day with energy, not grogginess.",
    image: "/images/bonus-morning.png",
  },
  {
    label: "Bonus 2",
    title: "7-Day Wellness Diet Chart",
    copy: "Simple, realistic meal guidance to support your practice — no fad diets.",
    image: "/images/bonus-diet.png",
  },
  {
    label: "Bonus 3",
    title: "Pranayam Audio Guide",
    copy: "A guided breathing (pranayam) audio you can follow anytime, even without video.",
    image: "/images/bonus-pranayam.png",
  },
];

const AUDIO_TESTIMONIAL = {
  name: "Savitri ji",
  age: 42,
  summary:
    "After 40, Savitri noticed her energy dropping and weight creeping up — even climbing stairs left her tired. Since joining Gayatri's classes, she feels noticeably more active, has lost weight steadily, and says her clothes fit better than they have in years.",
  // Corrected mapping — this file is Savitri's real audio (originally mislabeled)
  audioSrc: "/audio/aaliyah-testimonial.mp3",
  portrait: "/images/testimonial-savitri.png",
};

const TEXT_TESTIMONIALS = [
  {
    name: "Sunita",
    location: "Pune",
    quote:
      "I am 48 and never did yoga before... honestly I thought online class will be difficult 😅 But Gayatri ji teaches very calmly. She keeps reminding to do only what our body allows. After few weeks I started feeling much more fresh in morning. Very happy I joined ❤️",
  },
  {
    name: "Poonam",
    location: "Ahmedabad",
    quote:
      "I joined because of back stiffness and stress from daily work at home. Didn't expect much... but these classes became my me-time 😊 Gayatri's way of teaching is very simple, no showing off, no pressure. I actually wait for the class now.",
  },
  {
    name: "Madhura",
    location: "Mumbai",
    quote:
      "At this age I wanted something gentle... not heavy exercise. Gayatri's sessions are peaceful and easy to follow. Some days I cannot do every pose and she always says it's okay. That made me feel comfortable from first class. Thank you so much.",
  },
];

const FAQS = [
  {
    q: "I'm a complete beginner. Can I still join?",
    a: "Yes — most students start with zero yoga experience. Fundamentals are taught from the ground up, at a pace that respects your body.",
  },
  {
    q: "Do I need any equipment?",
    a: "A yoga mat and enough open floor space to stretch out are enough to begin.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most students notice easier movement and better sleep within the first few weeks. Visible change builds gradually with consistency.",
  },
  {
    q: "What if I miss the class?",
    a: "You'll get the recording so you can catch up in your own time.",
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="rounded-2xl bg-[#FBE4E9] p-5 sm:p-7">
      {FAQS.map((f, i) => (
        <div key={f.q} className={i > 0 ? "mt-3 border-t border-[#F3C9D2] pt-3" : ""}>
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
            className="flex w-full items-center justify-between gap-4 py-2 text-left"
          >
            <span className="text-[15px] font-semibold text-ink">{f.q}</span>
            <ChevronDown
              size={18}
              className={`shrink-0 text-[#C2185B] transition-transform ${
                openIndex === i ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </button>
          {openIndex === i && (
            <p className="pb-2 text-[13.5px] leading-relaxed text-ink-soft">{f.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}

function TestimonialCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth ?? 280;
    el.scrollBy({ left: dir * (cardWidth + 16), behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [scroll-snap-type:x_mandatory] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {TEXT_TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className="w-[82%] shrink-0 rounded-2xl bg-[#FBE4E9] p-5 [scroll-snap-align:start] sm:w-[46%]"
          >
            <p className="text-[13.5px] leading-relaxed text-ink-soft">&ldquo;{t.quote}&rdquo;</p>
            <p className="mt-3 text-[13.5px] font-bold text-[#C2185B]">
              — {t.name}, {t.location}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 flex justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous testimonial"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F3C9D2] text-[#C2185B]"
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next testimonial"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F3C9D2] text-[#C2185B]"
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default function TrialPage() {
  return (
    <>
      <MarqueeBanner text="•  Register Now  •  Yoga Masterclass  •  Limited Seats  " />

      <header className="border-b border-sand-dark/60 bg-cream">
        <div className="container-page flex h-16 items-center">
          <span className="font-display text-lg text-ink">{SITE.name}</span>
        </div>
      </header>

      <main className="pb-24">
        <section className="pt-8 pb-4 text-center">
          <div className="container-page">
            <h1 className="mx-auto max-w-lg bg-gradient-to-r from-[#C2185B] via-[#E64A19] to-[#F57C00] bg-clip-text text-[2.1rem] font-extrabold leading-tight text-transparent sm:text-5xl">
              Transform Your Body & Mind!
            </h1>
          </div>
        </section>

        {/* Full, uncropped photo — sized to the image's real 1067:767 ratio */}
        <section className="px-4">
          <div className="relative mx-auto aspect-[1067/767] w-full max-w-md overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/plan-trial.png"
              alt={`${SITE.instructorName} in a deep backbend`}
              fill
              sizes="(min-width: 640px) 448px, 100vw"
              className="object-cover"
            />
          </div>
        </section>

        <div className="mt-6">
          <CountdownBar targetIso={MASTERCLASS_START_AT} />
        </div>

        <section className="bg-cream px-4 py-4">
          <div className="mx-auto flex max-w-md items-center justify-between">
            <div>
              <span className="mr-2 text-[15px] text-ink-soft/60 line-through">₹999</span>
              <span className="text-[13px] font-bold text-[#C2185B]">90% OFF</span>
              <p className="text-[22px] font-extrabold text-ink">Just ₹99</p>
            </div>
            <div className="text-right">
              <p className="text-[12.5px] font-semibold text-[#C2185B]">Limited Seats Only!</p>
              <a
                href={TRIAL_ENROLLMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block rounded-full bg-ink px-6 py-2.5 text-[13.5px] font-bold text-[#FCD34D]"
              >
                Register Now
              </a>
            </div>
          </div>
        </section>

        {/* Duration only — Date & Time card removed */}
        <section className="px-4 py-4">
          <div className="mx-auto max-w-md">
            <div className="rounded-2xl bg-[#FBE4E9] p-4">
              <p className="flex items-center gap-2 text-[13.5px] font-bold text-ink">
                <Clock size={16} className="text-[#C2185B]" aria-hidden="true" />
                Duration
              </p>
              <p className="mt-1 text-[13px] text-ink-soft">60 Minutes</p>
            </div>
          </div>
        </section>

        <section className="px-4 py-4">
          <div className="mx-auto max-w-md rounded-2xl bg-gradient-to-br from-[#FBE4E9] to-[#FDE6D3] p-5">
            <p className="text-center text-[16px] font-bold text-[#C2185B]">
              Hurry! Masterclass Starts In
            </p>
            <div className="mt-4">
              <CountdownBoxes targetIso={MASTERCLASS_START_AT} />
            </div>
          </div>
        </section>

        {/* Benefits — now with icons */}
        <section className="px-4 py-6">
          <div className="mx-auto max-w-md">
            <h2 className="text-center text-[22px] font-bold text-ink">What You&apos;ll Gain</h2>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {BENEFITS.map((b) => (
                <div key={b.title} className="rounded-2xl border-2 border-[#F6C6D0] p-5 text-center">
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#C2185B]/10">
                    <b.icon size={20} className="text-[#C2185B]" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 text-[15.5px] font-bold text-ink">{b.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{b.copy}</p>
                </div>
              ))}
            </div>
            <a
              href={TRIAL_ENROLLMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block rounded-full bg-ink py-4 text-center text-[15px] font-bold text-[#FCD34D]"
            >
              Register Now @ Just ₹99
            </a>
          </div>
        </section>

        <div>
          <CountdownBar targetIso={MASTERCLASS_START_AT} />
        </div>

        {/* Free bonuses — with images and a much bolder FREE callout */}
        <section className="px-4 py-6">
          <div className="mx-auto max-w-md">
            <h2 className="text-center text-[22px] font-bold text-ink">
              Free Bonuses When You Register
            </h2>
            <div className="mt-5 space-y-4">
              {FREEBIES.map((f) => (
                <div key={f.label} className="overflow-hidden rounded-2xl bg-[#FBE4E9]">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={f.image}
                      alt={f.title}
                      fill
                      sizes="(min-width: 640px) 448px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[13px] font-bold text-[#C2185B]">{f.label}</p>
                    <h3 className="mt-1 text-[17px] font-extrabold text-ink">{f.title}</h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">{f.copy}</p>
                    <p className="mt-3 flex items-center gap-2">
                      <span className="text-[13px] text-ink-soft/60 line-through">₹499</span>
                      <span className="rounded-full bg-[#C2185B] px-3 py-1 text-[15px] font-extrabold tracking-wide text-white">
                        FREE
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-[15px] text-ink-soft">
              Total Value: <span className="font-bold text-ink">₹2,500/-</span>
            </p>
            <a
              href={TRIAL_ENROLLMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block rounded-full bg-ink py-4 text-center text-[15px] font-bold text-[#FCD34D]"
            >
              Register Now @ Just ₹99
            </a>
          </div>
        </section>

        {/* Real audio testimonial */}
        <section className="px-4 py-6">
          <div className="mx-auto max-w-md rounded-2xl bg-[#FBE4E9] p-5">
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white/60">
                <Image
                  src={AUDIO_TESTIMONIAL.portrait}
                  alt={`Illustrated portrait representing ${AUDIO_TESTIMONIAL.name}`}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[15px] font-bold text-ink">{AUDIO_TESTIMONIAL.name}</p>
                <p className="text-[12.5px] text-ink-soft">Age — {AUDIO_TESTIMONIAL.age}</p>
              </div>
            </div>
            <p className="mt-4 text-[13.5px] leading-relaxed text-ink-soft">
              {AUDIO_TESTIMONIAL.summary}
            </p>
            <div className="mt-4">
              <VoiceNotePlayer
                src={AUDIO_TESTIMONIAL.audioSrc}
                label={`${AUDIO_TESTIMONIAL.name}'s story`}
                accent="#C2185B"
                seed={2}
              />
            </div>
          </div>
        </section>

        {/* Text testimonials — sliding carousel, not a plain stack */}
        <section className="py-6">
          <div className="container-page">
            <h2 className="mb-4 text-center text-[20px] font-bold text-ink">
              More Students, More Stories
            </h2>
            <TestimonialCarousel />
          </div>
        </section>

        {/* Founder bio — now with the namaste photo */}
        <section className="px-4 py-6">
          <div className="mx-auto max-w-md overflow-hidden rounded-2xl bg-[#FBE4E9]">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/instructor-portrait.png"
                alt={`${SITE.instructorName} in a namaste pose`}
                fill
                sizes="(min-width: 640px) 448px, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="p-6">
              <h2 className="text-[18px] font-bold text-ink">Hi, I&apos;m {SITE.instructorName}</h2>
              <div className="mt-3 space-y-3 text-[13.5px] leading-relaxed text-ink-soft">
                <p>
                  For the past {SITE.yearsPracticing} years, I&apos;ve taught yoga to students
                  in my own community — helping people work through weight
                  management, joint pain, low energy, and stiffness, while
                  building real flexibility and stamina along the way.
                </p>
                <p>
                  Now I&apos;m taking that same practice online — with the goal
                  of growing a wider community of people committed to
                  becoming healthier and stronger together, no matter where
                  they&apos;re starting from.
                </p>
              </div>
            </div>
          </div>
          <a
            href={TRIAL_ENROLLMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-5 block max-w-md rounded-full bg-ink py-4 text-center text-[15px] font-bold text-[#FCD34D]"
          >
            Register Now @ Just ₹99
          </a>
        </section>

        <section className="px-4 py-6">
          <div className="mx-auto max-w-md">
            <h2 className="mb-4 text-center text-[22px] font-bold text-ink">
              Frequently Asked Questions
            </h2>
            <FAQAccordion />
          </div>
        </section>

        <section className="px-4 py-6">
          <div className="mx-auto max-w-md rounded-2xl border border-sand-dark/70 bg-cream p-6 text-center">
            <h2 className="text-[18px] font-bold text-ink">Want to know more?</h2>
            <div className="mt-4 space-y-3">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border-2 border-[#25D366] py-3 text-[14px] font-bold text-[#128C4A]"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Connect on WhatsApp
              </a>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2 rounded-full border-2 border-[#F0C6A8] bg-[#FDF0E4] py-3 text-[14px] font-bold text-[#C2185B]"
              >
                <Phone size={17} aria-hidden="true" />
                Talk to Us Now
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-6">
          <div className="bg-[#FDF0E4] px-4 py-8">
            <div className="mx-auto max-w-md">
              <p className="text-[13px] leading-relaxed text-ink-soft">
                At {SITE.name}, yoga is taught live and online — supporting
                goals like flexibility, weight management, stress relief,
                and overall well-being, at a pace that respects real bodies.
              </p>
              <p className="mt-5 text-[14px] font-bold text-ink">{SITE.name}</p>
              <div className="mt-2 flex flex-col gap-1.5 text-[13px] text-ink-soft">
                <a href="/about">About Us</a>
                <a href="/contact">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="bg-[#C2703D] py-4 text-center text-[12.5px] font-bold text-white">
            © 2026 {SITE.name.toUpperCase()}
          </div>
        </footer>
      </main>

      <StickyPriceBar checkoutUrl={TRIAL_ENROLLMENT_URL} />
    </>
  );
}
