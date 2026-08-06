// ---------------------------------------------------------------------------
// Central brand configuration.
// Replace ENROLLMENT_URL with your real checkout / booking link.
// Every enrollment CTA on the site reads from this single constant.
// ---------------------------------------------------------------------------

export const ENROLLMENT_URL = "https://superprofile.bio/yourprofile";

// Dedicated link for the ₹99 trial class checkout — update once the
// Superprofile "trial" product/event is published.
export const TRIAL_ENROLLMENT_URL = "https://superprofile.bio/e/GayatriMasterclass";

// ---------------------------------------------------------------------------
// Per-plan, per-duration checkout links.
// Women's Wellness Yoga is live with real links. Weight Loss & Fitness and
// Ageless Vitality still use a ⚠️ PLACEHOLDER link repeated across all three
// durations — replace each with its real link once that product is created
// on Superprofile (same pattern as Women's Wellness below).
// ---------------------------------------------------------------------------
export const PLAN_CHECKOUT_URLS = {
  womensWellness: {
    oneMonth: "https://superprofile.bio/e/WomensWellnessYoga1month",
    threeMonths: "https://superprofile.bio/e/WomenWellnessYoga3Month",
    sixMonths: "https://superprofile.bio/e/WomensWellnessYoga6months",
  },
  weightLossFitness: {
    oneMonth: "https://superprofile.bio/yourprofile/weight-loss-fitness",
    threeMonths: "https://superprofile.bio/yourprofile/weight-loss-fitness",
    sixMonths: "https://superprofile.bio/yourprofile/weight-loss-fitness",
  },
  agelessVitality: {
    oneMonth: "https://superprofile.bio/yourprofile/ageless-vitality",
    threeMonths: "https://superprofile.bio/yourprofile/ageless-vitality",
    sixMonths: "https://superprofile.bio/yourprofile/ageless-vitality",
  },
};

// ---------------------------------------------------------------------------
// ⚠️ REMINDER: fill in the real live batch timing once Gayatri confirms it.
// This placeholder shows on every plan page until you update it.
// ---------------------------------------------------------------------------
export const BATCH_TIMING = "Mon–Sat, 7:00 AM (timing to be confirmed)";

// ---------------------------------------------------------------------------
// ⚠️ PLACEHOLDER — the countdown timer on the trial masterclass page counts
// down to this exact date/time. Update this the moment the real batch date
// is confirmed, or the countdown will show stale/wrong info to visitors.
// Format: ISO string, e.g. "2026-08-11T07:00:00+05:30" (IST)
// ---------------------------------------------------------------------------
export const MASTERCLASS_START_AT = "2026-08-11T07:00:00+05:30";

export const SITE = {
  name: "Gayatri Chandroliya",
  tagline: "Feel Younger. Move Better. Live Stronger.",
  instructorName: "Gayatri Chandroliya",
  instructorAge: 48,
  yearsPracticing: 14,
  domain: "https://gayatrichandroliya.com",
  email: "yogawithgayatrichandroliya@gmail.com",
  phone: "+91 95122 82210",
  whatsapp: "https://wa.me/919512282210",
  city: "Your City, India",
};
