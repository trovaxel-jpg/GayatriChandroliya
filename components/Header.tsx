"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { SITE } from "@/lib/config";

const NAV_LINKS = [
  { href: "/#top", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact Us" },
];

const PRICING_LINKS = [
  { href: "/trial", label: "₹99 Trial Class" },
  { href: "/plans/womens-wellness", label: "Women's Wellness Yoga" },
  { href: "/plans/weight-loss-fitness", label: "Weight Loss & Fitness Yoga" },
  { href: "/plans/ageless-vitality", label: "Ageless Vitality Yoga" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sand-dark/60 bg-cream/90 backdrop-blur-md">
      <div className="container-page flex h-[72px] items-center justify-between py-4">
        <a href="#top" className="font-display text-lg tracking-tight text-ink sm:text-xl">
          {SITE.name}
        </a>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-ink-soft transition-colors hover:text-sage-deep"
            >
              {link.label}
            </a>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setPricingOpen(true)}
            onMouseLeave={() => setPricingOpen(false)}
          >
            <button
              type="button"
              onClick={() => setPricingOpen((v) => !v)}
              aria-expanded={pricingOpen}
              className="flex items-center gap-1 text-[14px] font-medium text-sage-deep transition-colors hover:text-sage-deep"
            >
              Pricing
              <ChevronDown size={15} className={pricingOpen ? "rotate-180 transition-transform" : "transition-transform"} aria-hidden="true" />
            </button>

            {pricingOpen && (
              <div className="absolute right-0 top-full w-64 rounded-2xl border border-sand-dark/70 bg-cream p-2 shadow-xl">
                <p className="px-3 pt-2 pb-1 text-[12px] font-semibold uppercase tracking-wide text-ink-soft/60">
                  Check Pricing for
                </p>
                {PRICING_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block rounded-xl px-3 py-2.5 text-[13.5px] font-medium text-ink-soft hover:bg-sand/60"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden lg:block">
          <CTAButton className="!px-6 !py-3 text-[13px]">Start Your Journey</CTAButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-dark text-ink"
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-sand-dark/60 bg-cream">
          <nav aria-label="Mobile" className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-ink-soft hover:bg-sand/60"
              >
                {link.label}
              </a>
            ))}
            <p className="mt-2 px-3 text-[12px] font-semibold uppercase tracking-wide text-ink-soft/60">
              Pricing
            </p>
            {PRICING_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-sage-deep hover:bg-sand/60"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 px-3">
              <CTAButton className="w-full">Start Your Journey</CTAButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
