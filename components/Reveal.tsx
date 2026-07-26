"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealMode = "fade" | "slide-up" | "slide-left" | "slide-right" | "scale";

const variantsFor = (mode: RevealMode): Variants => {
  switch (mode) {
    case "slide-up":
      return {
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0 },
      };
    case "slide-left":
      return {
        hidden: { opacity: 0, x: 32 },
        visible: { opacity: 1, x: 0 },
      };
    case "slide-right":
      return {
        hidden: { opacity: 0, x: -32 },
        visible: { opacity: 1, x: 0 },
      };
    case "scale":
      return {
        hidden: { opacity: 0, scale: 0.96 },
        visible: { opacity: 1, scale: 1 },
      };
    default:
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
  }
};

export function Reveal({
  children,
  mode = "slide-up",
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  mode?: RevealMode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as];

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variantsFor(mode)}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const }}
    >
      {children}
    </Component>
  );
}
