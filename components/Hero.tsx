"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { BreathLine } from "./BreathLine";
import { SITE } from "@/lib/config";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 md:pt-20 md:pb-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            {...fadeUp(0)}
            className="eyebrow text-[12px] font-semibold uppercase text-sage-deep"
          >
            Online Yoga Coaching for Women
          </motion.p>

          <motion.h1
            {...fadeUp(0.08)}
            className="mt-5 text-[2.6rem] leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-[4rem]"
          >
            Feel Younger.
            <br />
            Move Better.
            <br />
            <span className="text-sage-deep">Live Stronger.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.18)}
            className="mt-7 max-w-lg text-[17px] leading-relaxed text-ink-soft"
          >
            A consistent yoga practice, done right, reshapes how you carry
            yourself — your flexibility, your posture, your energy, your
            calm. Join a guided online practice built for real women in
            their twenties, thirties, forties and fifties, at a pace your
            body will thank you for.
          </motion.p>

          <motion.div {...fadeUp(0.28)} className="mt-9 flex flex-wrap items-center gap-4">
            <CTAButton>Start Your Journey</CTAButton>
            <a
              href="#instructor"
              className="inline-flex items-center gap-3 text-[15px] font-semibold text-ink transition-colors hover:text-sage-deep"
              aria-label="Watch introduction video"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-sage-deep/30 bg-white/70">
                <Play size={16} className="ml-0.5 text-sage-deep" aria-hidden="true" />
              </span>
              Watch Introduction
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.36)} className="mt-10">
            <BreathLine className="h-8 w-52" />
          </motion.div>
        </div>

        <motion.div
          {...(shouldReduceMotion
            ? {}
            : {
                initial: { opacity: 0, scale: 0.96 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
              })}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-[#F5F1E8]">
            <Image
              src="/images/gayatri-hero.png"
              alt={`${SITE.instructorName} sitting in a meditative cross-legged pose`}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-contain p-4"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-sand-dark bg-cream/95 px-6 py-5 shadow-xl backdrop-blur sm:block">
            <p className="font-display text-3xl text-sage-deep">{SITE.yearsPracticing}</p>
            <p className="text-[13px] text-ink-soft">years of daily practice</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
