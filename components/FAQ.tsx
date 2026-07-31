"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "I'm a complete beginner. Can I still join?",
    a: "Yes — most of our students start with zero yoga experience. Classes teach fundamentals from the ground up, and pace is adjusted so nobody is rushed into poses they aren't ready for.",
  },
  {
    q: "Do I need any equipment?",
    a: "A yoga mat and enough open floor space to stretch out are enough to begin. A strap and block can help later on, but they aren't required to start.",
  },
  {
    q: "What if I miss a class?",
    a: "You'll get the full recording so you can catch up on your own time. Missing an occasional class won't set you back.",
  },
  {
    q: "I have a knee or back issue — can I still practice?",
    a: "Let us know your specific concern when you enroll. Sequences are adapted around common issues, though for serious or diagnosed conditions we recommend a note from your doctor first.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="border-b border-sand-dark/60 py-2">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 py-4 text-left"
        >
          <span className="text-[15.5px] font-semibold text-ink">
            {q}
          </span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
            className="shrink-0 text-sage-deep"
          >
            <ChevronDown size={18} aria-hidden="true" />
          </motion.span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        hidden={!open}
        className="pb-5 pr-8 text-[14.5px] leading-relaxed text-ink-soft"
      >
        {a}
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container-page max-w-3xl">
        <Reveal mode="fade">
          <p className="eyebrow text-center text-[12px] font-semibold uppercase text-sage-deep">
            Questions
          </p>
        </Reveal>
        <Reveal mode="slide-up" delay={0.05}>
          <h2 className="mx-auto mt-4 max-w-xl text-center text-4xl tracking-tight text-ink md:text-5xl">
            Everything you&apos;re wondering before you begin
          </h2>
        </Reveal>

        <Reveal mode="slide-up" delay={0.1}>
          <div className="mt-12">
            {FAQS.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
