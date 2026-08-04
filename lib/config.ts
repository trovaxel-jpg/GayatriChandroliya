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
// ⚠️ PLACEHOLDER CHECKOUT LINKS — one per plan.
// Each plan needs its OWN Superprofile product (Recurring Membership type,
// same as we discussed for the trial). Once each is published, replace the
// matching URL below — every pricing card for that plan reads from here.
// ---------------------------------------------------------------------------
export const PLAN_CHECKOUT_URLS = {
  womensWellness: "https://superprofile.bio/yourprofile/womens-wellness",
  weightLossFitness: "https://superprofile.bio/yourprofile/weight-loss-fitness",
  agelessVitality: "https://superprofile.bio/yourprofile/ageless-vitality",
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
  email: "hello@gayatrichandroliya.com",
  phone: "+91 00000 00000",
  // ⚠️ Placeholder — replace 910000000000 with the real WhatsApp number (with country code, no + or spaces)
  whatsapp: "https://wa.me/910000000000",
  city: "Your City, India",
  instagram: "https://instagram.com/gayatrichandroliya",
  youtube: "https://youtube.com/@gayatrichandroliya",
};
