"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CalendarCheck,
  Clock,
  ChevronDown,
  MessageCircle,
  Phone,
  Link2,
  Camera,
  PlayCircle,
} from "lucide-react";
import { MarqueeBanner } from "@/components/MarqueeBanner";
import { CountdownBar, CountdownBoxes } from "@/components/CountdownTimer";
import { StickyPriceBar } from "@/components/StickyPriceBar";
import { VoiceNotePlayer } from "@/components/VoiceNotePlayer";
import { SITE, TRIAL_ENROLLMENT_URL, MASTERCLASS_START_AT } from "@/lib/config";

const BENEFITS = [
  {
    title: "Improved Flexibility & Posture",
    copy: "Gentle, guided stretching that loosens tight joints and helps you stand and move with ease.",
  },
  {
    title: "Reduced Stress & Better Sleep",
    copy: "Breath-led sequences that calm the nervous system, so you feel lighter by the end of class.",
  },
  {
    title: "Increased Strength & Stamina",
    copy: "Build real, functional strength — climbing stairs and daily tasks start feeling easier.",
  },
  {
    title: "Better Digestion & Energy",
    copy: "Consistent practice supports digestion and leaves you with steadier energy through the day.",
  },
];

const FREEBIES = [
  {
    label: "Bonus 1",
    title: "5-Minute Morning Energizer",
    copy: "A short guided routine to start your day with energy, not grogginess.",
  },
  {
    label: "Bonus 2",
    title: "7-Day Wellness Diet Chart",
    copy: "Simple, realistic meal guidance to support your practice — no fad diets.",
  },
  {
    label: "Bonus 3",
    title: "Pranayam Audio Guide",
    copy: "A guided breathing (pranayam) audio you can follow anytime, even without video.",
  },
];

const TESTIMONIAL = {
  name: "Savitri ji",
  age: 42,
  summary:
    "After 40, Savitri noticed her energy dropping and weight creeping up — even climbing stairs left her tired. Since joining Gayatri's classes, she feels noticeably more active, has lost weight steadily, and says her clothes fit better than they have in years.",
  audioSrc: "/audio/savitri-testimonial.mp3",
  portrait: "/images/testimonial-savitri.png",
};

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

        <section className="px-4">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl shadow-lg">
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

        <section className="px-4 py-4">
          <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
            <div className="rounded-2xl bg-[#FBE4E9] p-4">
              <p className="flex items-center gap-2 text-[13.5px] font-bold text-ink">
                <CalendarCheck size={16} className="text-[#C2185B]" aria-hidden="true" />
                Date & Time
              </p>
              <p className="mt-1 text-[13px] text-ink-soft">Placeholder — confirm real date</p>
            </div>
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

        <section className="px-4 py-6">
          <div className="mx-auto max-w-md">
            <h2 className="text-center text-[22px] font-bold text-ink">What You&apos;ll Gain</h2>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {BENEFITS.map((b) => (
                <div key={b.title} className="rounded-2xl border-2 border-[#F6C6D0] p-5 text-center">
                  <h3 className="text-[15.5px] font-bold text-ink">{b.title}</h3>
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

        <section className="px-4 py-6">
          <div className="mx-auto max-w-md">
            <h2 className="text-center text-[22px] font-bold text-ink">
              Free Bonuses When You Register
            </h2>
            <div className="mt-5 space-y-4">
              {FREEBIES.map((f) => (
                <div key={f.label} className="rounded-2xl bg-[#FBE4E9] p-5">
                  <p className="text-[13px] font-bold text-[#C2185B]">{f.label}</p>
                  <h3 className="mt-1 text-[17px] font-extrabold text-ink">{f.title}</h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">{f.copy}</p>
                  <p className="mt-3">
                    <span className="mr-2 text-[13px] text-ink-soft/60 line-through">₹499</span>
                    <span className="text-[15px] font-extrabold text-[#C2185B]">FREE</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-6">
          <div className="mx-auto max-w-md rounded-2xl bg-[#FBE4E9] p-5">
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white/60">
                <Image
                  src={TESTIMONIAL.portrait}
                  alt={`Illustrated portrait representing ${TESTIMONIAL.name}`}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[15px] font-bold text-ink">{TESTIMONIAL.name}</p>
                <p className="text-[12.5px] text-ink-soft">Age — {TESTIMONIAL.age}</p>
              </div>
            </div>
            <p className="mt-4 text-[13.5px] leading-relaxed text-ink-soft">
              {TESTIMONIAL.summary}
            </p>
            <div className="mt-4">
              <VoiceNotePlayer
                src={TESTIMONIAL.audioSrc}
                label={`${TESTIMONIAL.name}'s story`}
                accent="#C2185B"
                seed={2}
              />
            </div>
          </div>
        </section>

        <section className="px-4 py-6">
          <div className="mx-auto max-w-md rounded-2xl bg-[#FBE4E9] p-6">
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
                <a href={SITE.youtube}>YouTube</a>
              </div>
              <p className="mt-4 text-[13px] font-bold text-ink">Discover more on :</p>
              <div className="mt-2 flex gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C2185B]/10 text-[#C2185B]">
                  <Link2 size={16} aria-hidden="true" />
                </span>
                <a
                  href={SITE.instagram}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C2185B]/10 text-[#C2185B]"
                >
                  <Camera size={16} aria-hidden="true" />
                </a>
                <a
                  href={SITE.youtube}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C2185B]/10 text-[#C2185B]"
                >
                  <PlayCircle size={16} aria-hidden="true" />
                </a>
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
