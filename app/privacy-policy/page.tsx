import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses, and protects your information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="container-page max-w-3xl py-20">
        <h1 className="text-4xl tracking-tight text-ink">Privacy Policy</h1>
        <p className="mt-4 text-[14px] text-ink-soft">Last updated: July 2026</p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink-soft">
          <section>
            <h2 className="text-xl font-semibold text-ink">Information we collect</h2>
            <p className="mt-3">
              When you enroll in a program or contact us, we collect basic
              details such as your name, email address, phone number, and
              any health information you voluntarily share to help us
              personalize your practice.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">How we use it</h2>
            <p className="mt-3">
              We use your information to schedule classes, communicate
              updates, personalize sessions to your needs, and process
              payments through our enrollment partner.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">Data sharing</h2>
            <p className="mt-3">
              We do not sell your personal information. Data may be shared
              with trusted service providers (such as our payment and
              scheduling partners) strictly to deliver our services.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">Contact</h2>
            <p className="mt-3">
              For any privacy-related questions, reach us at{" "}
              <a href={`mailto:${SITE.email}`} className="text-sage-deep underline">
                {SITE.email}
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
