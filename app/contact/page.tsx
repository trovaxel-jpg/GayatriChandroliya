import type { Metadata } from "next";
import { Mail, Phone, MapPin, Link2, PlayCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OrganicBlob, LeafMotif } from "@/components/Decorative";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${SITE.name}.`,
};

const CONTACT_ITEMS = [
  { icon: Mail, label: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: SITE.city, href: undefined },
];

const SOCIAL_ITEMS = [
  { icon: Link2, label: "Instagram", href: SITE.instagram },
  { icon: PlayCircle, label: "YouTube", href: SITE.youtube },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden py-20 md:py-28">
          <OrganicBlob className="pointer-events-none absolute -left-24 top-0 -z-10 h-[380px] w-[380px]" />
          <LeafMotif className="pointer-events-none absolute -right-2 bottom-4 -z-10 h-[200px] w-[80px] hidden sm:block" />

          <div className="container-page grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="eyebrow text-[12px] font-semibold uppercase text-sage-deep">
                Contact Us
              </p>
              <h1 className="mt-4 text-4xl tracking-tight text-ink md:text-5xl">
                We&apos;d love to hear from you
              </h1>
              <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-ink-soft">
                Questions about a plan, batch timing, or anything else —
                reach out any of these ways and we&apos;ll get back to you
                soon.
              </p>

              {/* ⚠️ Placeholder contact details — replace with real ones */}
              <div className="mt-9 space-y-4">
                {CONTACT_ITEMS.map((item) => {
                  const content = (
                    <div className="flex items-center gap-4 rounded-2xl border border-sand-dark/70 bg-cream px-5 py-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-deep/10">
                        <item.icon size={18} className="text-sage-deep" aria-hidden="true" />
                      </span>
                      <span className="text-[14.5px] text-ink-soft">{item.label}</span>
                    </div>
                  );
                  return item.href ? (
                    <a key={item.label} href={item.href}>
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>

              <p className="mt-6 text-[13px] italic text-ink-soft/60">
                ⚠️ Email, phone, and city above are placeholders — send me the
                real details whenever you have them.
              </p>

              <div className="mt-9">
                <p className="text-[13px] font-semibold uppercase tracking-wide text-sage-deep">
                  Discover more on
                </p>
                <div className="mt-3 flex gap-3">
                  {SOCIAL_ITEMS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-deep/10 text-sage-deep transition-colors hover:bg-sage-deep hover:text-cream"
                    >
                      <s.icon size={19} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative aspect-square w-full max-w-sm justify-self-center overflow-hidden rounded-[2rem] bg-sand-dark/40">
              <div
                role="img"
                aria-label="Placeholder: contact illustration"
                className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sage-light/30 via-sand to-sand-dark/50 text-center text-sm text-ink-soft/70"
              >
                <span className="px-8">Illustration placeholder</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
