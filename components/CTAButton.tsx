import { ENROLLMENT_URL, TRIAL_ENROLLMENT_URL } from "@/lib/config";
import type { ReactNode } from "react";

export function CTAButton({
  children = "Start Your Journey",
  variant = "primary",
  className = "",
  ariaLabel,
  href,
}: {
  children?: ReactNode;
  variant?: "primary" | "inverse";
  className?: string;
  ariaLabel?: string;
  /** Defaults to the main enrollment link; pass TRIAL_ENROLLMENT_URL for the ₹99 trial CTA. */
  href?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[15px] font-semibold tracking-wide transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-offset-4";

  const styles =
    variant === "primary"
      ? "bg-sage-deep text-cream hover:bg-[#2c3826] shadow-[0_10px_30px_-10px_rgba(60,74,52,0.55)]"
      : "bg-cream text-sage-deep hover:bg-white";

  return (
    <a
      href={href ?? ENROLLMENT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? "Start your yoga journey — opens enrollment page"}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

export function TrialCTAButton(props: Omit<Parameters<typeof CTAButton>[0], "href">) {
  return <CTAButton {...props} href={TRIAL_ENROLLMENT_URL} />;
}
