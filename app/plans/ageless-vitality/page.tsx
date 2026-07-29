import type { Metadata } from "next";
import { PlanPage } from "@/components/PlanPage";
import { PLAN_CHECKOUT_URLS, SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Ageless Vitality Yoga — Plans & Pricing",
  description: `Live online yoga for lasting energy, flexibility, and youthful vitality with ${SITE.instructorName}.`,
};

export default function AgelessVitalityPlanPage() {
  return (
    <PlanPage
      title="Ageless Vitality Yoga"
      tagline="Stay flexible, energetic, and strong — at any age."
      checkoutUrl={PLAN_CHECKOUT_URLS.agelessVitality}
      photoPlaceholderLabel={`${SITE.instructorName} teaching an Ageless Vitality session — photo placeholder`}
      offerings={[
        "Sequences focused on flexibility, posture, and daily energy",
        "Pranayam techniques for lasting stamina",
      ]}
      tiers={[
        { duration: "1 Month", originalPrice: 1999, price: 999 },
        { duration: "3 Months", originalPrice: 4999, price: 2499, badge: "Best Value" },
        { duration: "6 Months", originalPrice: 8999, price: 4499 },
      ]}
      testimonials={[
        // Placeholder — replace with real student name + quote + audioSrc once available.
      ]}
    />
  );
}
