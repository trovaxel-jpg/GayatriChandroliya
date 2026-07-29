/**
 * Decorative SVG background elements — organic blob shapes, leaf motifs,
 * and scattered accent dots. Used behind sections to add hand-designed
 * texture instead of flat single-color panels. Purely decorative:
 * aria-hidden and absolutely positioned behind content (z-0 / -z-10).
 */

export function OrganicBlob({ className = "", color = "#C3CBA0" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 600 500"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        fill={color}
        opacity="0.35"
        d="M120 60C210 10 340 20 420 80C500 140 560 230 540 320C520 410 420 460 320 470C220 480 100 460 50 380C0 300 10 190 60 130C85 100 100 75 120 60Z"
      />
    </svg>
  );
}

export function LeafMotif({ className = "", color = "#74804A" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 120 300" className={className} aria-hidden="true">
      <path
        fill={color}
        opacity="0.5"
        d="M60 0C80 40 95 90 90 140C85 190 60 240 60 300C60 240 35 190 30 140C25 90 40 40 60 0Z"
      />
      <path
        fill={color}
        opacity="0.35"
        d="M60 60C75 90 85 120 82 155C79 190 62 220 60 260C58 220 41 190 38 155C35 120 45 90 60 60Z"
      />
    </svg>
  );
}

export function ScatterDots({ className = "" }: { className?: string }) {
  const dots = [
    { cx: 20, cy: 30, r: 6, fill: "#C68A3D" },
    { cx: 90, cy: 10, r: 4, fill: "#4A5730" },
    { cx: 160, cy: 60, r: 5, fill: "#C3CBA0" },
    { cx: 40, cy: 110, r: 4, fill: "#E3D0A8" },
    { cx: 140, cy: 130, r: 7, fill: "#C68A3D" },
  ];
  return (
    <svg viewBox="0 0 180 150" className={className} aria-hidden="true">
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={d.fill} opacity="0.55" />
      ))}
    </svg>
  );
}
