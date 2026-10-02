const N = 9; // number of cusps
function build() {
  const cx = 0.5, cy = 0.34, rx = 0.5, ry = 0.34;
  const pts = Array.from({ length: N + 1 }, (_, i) => {
    const a = Math.PI + (Math.PI * i) / N;
    return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)];
  });
  let p = `M0 1 L${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i <= N; i++) {
    const [x0, y0] = pts[i - 1], [x, y] = pts[i];
    const r = Math.hypot(x - x0, y - y0) / 2;
    p += ` A${r} ${r} 0 0 1 ${x} ${y}`;
  }
  return p + " L1 1Z";
}
export const archPath = build();
export function ArchDefs() {
  return (<svg width="0" height="0" className="absolute" aria-hidden="true"><defs>
    <clipPath id="arch" clipPathUnits="objectBoundingBox"><path d={archPath} /></clipPath></defs></svg>);
}
export function ArchOutline() {
  return (<svg viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full">
    <path d={archPath} fill="none" stroke="var(--c-cove)" vectorEffect="non-scaling-stroke"
      className="[stroke-width:1.5px] group-focus-within:[stroke-width:4px]" /></svg>);
}
export function Ornament() {
  return (<svg width="140" height="12" viewBox="0 0 140 12" className="my-6" aria-hidden="true">
    <path d="M0 6H58M82 6H140" stroke="var(--c-cove)" strokeWidth="1" />
    <path d="M70 0l6 6-6 6-6-6z" fill="var(--c-cove)" /></svg>);
}
