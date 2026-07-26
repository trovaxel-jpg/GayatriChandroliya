"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * A single, slow inhale/exhale curve — the brand's signature line.
 * Used in place of hard section rules throughout the page.
 */
export function BreathLine({
  className = "",
  tone = "sage",
}: {
  className?: string;
  tone?: "sage" | "gold" | "cream";
}) {
  const shouldReduceMotion = useReducedMotion();
  const stroke =
    tone === "gold"
      ? "var(--color-gold)"
      : tone === "cream"
        ? "var(--color-cream)"
        : "var(--color-sage)";

  return (
    <svg
      className={className}
      viewBox="0 0 600 40"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M0 20 C 75 2, 125 38, 200 20 C 275 2, 325 38, 400 20 C 475 2, 525 38, 600 20"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={shouldReduceMotion ? { pathLength: 1, opacity: 0.7 } : { pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.7 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />
    </svg>
  );
}
