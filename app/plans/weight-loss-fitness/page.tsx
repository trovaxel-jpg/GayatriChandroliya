import type { Metadata } from "next";
import { PlanPage } from "@/components/PlanPage";
import { PLAN_CHECKOUT_URLS, SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Weight Loss & Fitness Yoga — Plans & Pricing",
  description: `Live online yoga for weight management and fitness with ${SITE.instructorName}.`,
};

export default function WeightLossFitnessPlanPage() {
  return (
    <PlanPage
      title="Weight Loss & Fitness Yoga"
      tagline="Build real strength and lose weight the sustainable way."
      checkoutUrl={PLAN_CHECKOUT_URLS.weightLossFitness}
      photoPlaceholderLabel={`${SITE.instructorName} teaching a Weight Loss & Fitness session — photo placeholder`}
      offerings={[
        "Sequences built to boost metabolism and burn fat",
        "Progressive strength-building as you advance",
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
