import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms that govern your use of ${SITE.name}'s programs and website.`,
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="container-page max-w-3xl py-20">
        <h1 className="text-4xl tracking-tight text-ink">Terms &amp; Conditions</h1>
        <p className="mt-4 text-[14px] text-ink-soft">Last updated: July 2026</p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink-soft">
          <section>
            <h2 className="text-xl font-semibold text-ink">Enrollment</h2>
            <p className="mt-3">
              Enrollment in any program is confirmed once payment is
              completed through our enrollment partner. Program schedules,
              pricing and content are subject to change with notice.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">Health disclaimer</h2>
            <p className="mt-3">
              Our programs are general wellness guidance and are not a
              substitute for medical advice. Please consult your physician
              before beginning any new physical activity, particularly if
              you are pregnant, recovering from injury, or managing a
              diagnosed condition.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">Cancellations</h2>
            <p className="mt-3">
              Cancellation and refund terms are shared at the time of
              enrollment and vary by program.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">Contact</h2>
            <p className="mt-3">
              Questions about these terms can be sent to{" "}
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
