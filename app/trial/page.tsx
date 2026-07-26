import type { Metadata } from "next";
import { CalendarDays, IndianRupee, Video, Users } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrialCTAButton } from "@/components/CTAButton";
import { BreathLine } from "@/components/BreathLine";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "₹99 Trial Class",
  description: `Join ${SITE.instructorName}'s live online yoga trial class for ₹99 — full-body yogasana and pranayam, beginner friendly.`,
};

const INCLUDED = [
  {
    icon: CalendarDays,
    title: "Starts next Monday",
    copy: "One live session to experience the teaching style before you decide on a full plan.",
  },
  {
    icon: Video,
    title: "100% online",
    copy: "Join from home on your phone or laptop — no equipment beyond a mat.",
  },
  {
    icon: Users,
    title: "Small live batch",
    copy: "A guided, interactive class — not a pre-recorded video you follow alone.",
  },
  {
    icon: IndianRupee,
    title: "Just ₹99",
    copy: "A low-commitment way to try the practice before enrolling in a longer plan.",
  },
];

export default function TrialPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden pt-14 pb-16 md:pt-20 md:pb-20">
          <div className="container-page text-center">
            <p className="eyebrow text-[12px] font-semibold uppercase text-sage-deep">
              New Batch — Starting Monday
            </p>
            <h1 className="mx-auto mt-5 max-w-2xl text-[2.4rem] leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              Try a live class with {SITE.instructorName} —{" "}
              <span className="text-sage-deep">just ₹99.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-ink-soft">
              A full trial session of yogasana and pranayam, live and online,
              before you commit to anything longer. No experience needed.
            </p>
            <div className="mt-9 flex justify-center">
              <TrialCTAButton>Book Your ₹99 Trial</TrialCTAButton>
            </div>
            <div className="mt-10 flex justify-center">
              <BreathLine className="h-8 w-52" />
            </div>
          </div>
        </section>

        <section className="py-4 md:py-8">
          <div className="container-page">
            <div className="relative mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-[1.75rem] bg-sand-dark/40">
              <div
                role="img"
                aria-label={`Placeholder: photo or video of ${SITE.instructorName} teaching a live class`}
                className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sand via-sand-dark/50 to-sage-light/40 text-center text-sm text-ink-soft/70"
              >
                <span className="px-8">Trial class photo/video placeholder</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-page">
            <h2 className="mx-auto max-w-xl text-center text-3xl tracking-tight text-ink md:text-4xl">
              What&apos;s included in your trial
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {INCLUDED.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-sand-dark/70 bg-cream p-6"
                >
                  <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage-deep/10">
                    <item.icon size={20} className="text-sage-deep" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-[16.5px] font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">
                      {item.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-sage-deep py-20 text-cream md:py-24">
          <div className="container-page text-center">
            <h2 className="mx-auto max-w-xl text-3xl tracking-tight md:text-4xl">
              Come see what fourteen years of practice looks like.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15.5px] leading-relaxed text-cream/80">
              One class, ₹99, no long-term commitment. Link below.
            </p>
            <div className="mt-9 flex justify-center">
              <TrialCTAButton variant="inverse">Book Your ₹99 Trial</TrialCTAButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
