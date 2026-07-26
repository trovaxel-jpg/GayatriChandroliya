"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { SITE } from "@/lib/config";

const NAV_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/#benefits", label: "Benefits" },
  { href: "/#programs", label: "Programs" },
  { href: "/#faq", label: "FAQ" },
  { href: "/trial", label: "₹99 Trial Class" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sand-dark/60 bg-cream/90 backdrop-blur-md">
      <div className="container-page flex h-[72px] items-center justify-between py-4">
        <a href="#top" className="font-display text-xl tracking-tight text-ink">
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
            <div className="mt-2 px-3">
              <CTAButton className="w-full">Start Your Journey</CTAButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
