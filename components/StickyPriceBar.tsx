import { CountdownBar } from "./CountdownTimer";
import { MASTERCLASS_START_AT } from "@/lib/config";

export function StickyPriceBar({ checkoutUrl }: { checkoutUrl: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-[#FCA5A5]">
      <CountdownBar targetIso={MASTERCLASS_START_AT} />
      <div className="flex items-center justify-between gap-3 bg-cream px-4 py-2.5 sm:px-6">
        <div>
          <span className="mr-2 text-[13px] text-ink-soft/60 line-through">₹999</span>
          <span className="text-[19px] font-bold text-ink">Just ₹99</span>
        </div>
        <a
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap rounded-full bg-ink px-6 py-2.5 text-[13.5px] font-bold text-[#FCD34D]"
        >
          Register Now
        </a>
      </div>
    </div>
  );
}
