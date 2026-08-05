import { Mail } from "lucide-react";
import { SITE } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="container-page grid gap-10 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl text-cream">{SITE.name}</p>
          <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-cream/60">
            Premium online yoga coaching for women — built around
            flexibility, posture, calm, and consistency that lasts.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Email us"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-cream/50"
            >
              <Mail size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-[12px] font-semibold uppercase tracking-wider text-cream/40">
            Company
          </p>
          <ul className="mt-4 space-y-3 text-[14px]">
            <li><a href="/about" className="hover:text-cream">About</a></li>
            <li><a href="/trial" className="hover:text-cream">₹99 Trial Class</a></li>
            <li><a href="/privacy-policy" className="hover:text-cream">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-cream">Terms &amp; Conditions</a></li>
          </ul>
        </div>

        <div>
          <p className="text-[12px] font-semibold uppercase tracking-wider text-cream/40">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-[14px]">
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-cream">
                {SITE.email}
              </a>
            </li>
            <li className="text-cream/60">India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6">
        <p className="container-page text-[12.5px] text-cream/40">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
