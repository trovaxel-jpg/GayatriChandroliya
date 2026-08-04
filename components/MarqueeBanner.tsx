export function MarqueeBanner({ text }: { text: string }) {
  const items = Array(6).fill(text);
  return (
    <div className="overflow-hidden bg-gradient-to-r from-[#FDE68A] via-[#FBCFE8] to-[#FCA5A5] py-2.5">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="text-[13px] font-bold text-[#9A3412]">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
