import type { Metadata } from "next";
import { PlanPage } from "@/components/PlanPage";
import { PLAN_CHECKOUT_URLS, SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Women's Wellness Yoga — Plans & Pricing",
  description: `Live online yoga for women's health with ${SITE.instructorName} — hormonal balance, stress relief, and overall wellness.`,
};

export default function WomensWellnessPlanPage() {
  return (
    <PlanPage
      title="Women's Wellness Yoga"
      tagline="Yoga designed around what women's bodies actually need."
      checkoutUrl={PLAN_CHECKOUT_URLS.womensWellness}
      photoSrc="/images/plan-womens-wellness.png"
      photoPlaceholderLabel={`${SITE.instructorName} teaching a Women's Wellness session — photo placeholder`}
      offerings={[
        "Sequences paced around hormonal and menstrual health",
        "Gentle, breath-led sessions for stress relief",
      ]}
      testimonials={[
        // Placeholder — replace with real student name + quote + audioSrc once available.
      ]}
    />
  );
}
