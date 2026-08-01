"use client";

import { useState } from "react";
import { Info, X } from "lucide-react";
import { CTAButton } from "./CTAButton";

const TIERS = [
  { duration: "6 Months", original: 11999, price: 2999, months: 6, badge: "Best Value" },
  { duration: "3 Months", original: 5999, price: 1899, months: 3 },
];
const MONTHLY_TIER = { duration: "1 Month", original: 1499, price: 699, months: 1 };

function pctOff(original: number, price: number) {
  return Math.round((1 - price / original) * 100);
}
function perMonth(price: number, months: number) {
  return Math.round(price / months);
}

function PriceCard({
  duration,
  original,
  price,
  months,
  badge,
  selected,
  onSelect,
}: {
  duration: string;
  original: number;
  price: number;
  months: number;
  badge?: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`relative w-full rounded-2xl border-2 p-5 text-left transition-colors ${
        selected ? "border-sage-deep bg-cream shadow-md" : "border-sand-dark bg-cream"
      }`}
    >
      {badge && (
        <span className="absolute -top-3 right-4 rounded-full bg-sage-deep px-3 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-cream">
          {badge}
        </span>
      )}
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2.5">
          <span
            className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2"
            style={{ borderColor: selected ? "#4A5730" : "#B8AF98" }}
          >
            {selected && <span className="h-2.5 w-2.5 rounded-full bg-sage-deep" />}
          </span>
          <span className="text-[16px] font-semibold text-ink">{duration}</span>
        </span>
        <span className="text-[13px] font-medium text-ink-soft">
          ₹{perMonth(price, months)}/month
        </span>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2.5">
        <span className="text-[13px] font-medium text-ink-soft/80 line-through">
          ₹{original.toLocaleString("en-IN")}
        </span>
        <span className="font-display text-2xl text-sage-deep">
          ₹{price.toLocaleString("en-IN")}
        </span>
        <span className="rounded-full bg-[#CBE6D2] px-2.5 py-0.5 text-[12px] font-bold text-[#255C34]">
          {pctOff(original, price)}% off
        </span>
      </div>
    </button>
  );
}

export function PricingSelector({ checkoutUrl }: { checkoutUrl: string }) {
  const [selected, setSelected] = useState<string>("6 Months");
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <div className="mx-auto max-w-md">
      <h2 className="text-[14px] font-bold uppercase tracking-wide text-ink">
        Choose your plan type
      </h2>

      <p className="mt-4 text-[13px] font-bold text-ink-soft">Prepaid Plans</p>
      <div className="mt-2 grid grid-cols-1 gap-3">
        {TIERS.map((t) => (
          <PriceCard
            key={t.duration}
            duration={t.duration}
            original={t.original}
            price={t.price}
            months={t.months}
            badge={t.badge}
            selected={selected === t.duration}
            onSelect={() => setSelected(t.duration)}
          />
        ))}
      </div>

      <div className="relative mt-6">
        <p className="text-[13px] font-bold text-ink-soft">Monthly Plan</p>
        <div className="mt-1 flex items-center gap-1.5">
          <p className="text-[13px] font-medium text-ink-soft">This is a recurring plan</p>
          <button
            type="button"
            onClick={() => setInfoOpen((v) => !v)}
            aria-expanded={infoOpen}
            aria-label="More information about the recurring plan"
            className="flex h-5 w-5 items-center justify-center rounded-full text-ink-soft"
          >
            <Info size={15} aria-hidden="true" />
          </button>
        </div>

        {infoOpen && (
          <div className="absolute left-0 top-full z-10 mt-2 w-full rounded-2xl border border-sand-dark bg-cream p-4 shadow-xl sm:w-80">
            <button
              type="button"
              onClick={() => setInfoOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 text-ink-soft"
            >
              <X size={16} aria-hidden="true" />
            </button>
            <p className="pr-5 text-[13.5px] leading-relaxed text-ink">
              Your subscription will automatically renew each month. You can
              cancel anytime before the next billing cycle to avoid being
              charged.
            </p>
          </div>
        )}
      </div>

      <div className="mt-2">
        <PriceCard
          duration={MONTHLY_TIER.duration}
          original={MONTHLY_TIER.original}
          price={MONTHLY_TIER.price}
          months={MONTHLY_TIER.months}
          selected={selected === MONTHLY_TIER.duration}
          onSelect={() => setSelected(MONTHLY_TIER.duration)}
        />
      </div>

      <div className="mt-6">
        <CTAButton href={checkoutUrl} className="w-full">
          Choose Your Plan
        </CTAButton>
      </div>
    </div>
  );
}
