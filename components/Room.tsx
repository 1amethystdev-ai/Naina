export function Room({ drawn = false }: { drawn?: boolean }) {
  const INK = "#1B140F";
  const p = (fill: string) => (drawn ? { fill: "none", stroke: INK, strokeWidth: 1.5 } : { fill });
  return (
    <svg viewBox="0 0 400 500" className="block w-full" role="img"
      aria-label={drawn ? "Line drawing of the dining wall" : "Finished dining wall with walnut shutters, brown marble backsplash and brass pendants"}>
      <defs><linearGradient id="cv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#E3A13C" stopOpacity=".9" /><stop offset="1" stopColor="#E3A13C" stopOpacity="0" /></linearGradient></defs>
      <rect width="400" height="500" fill={drawn ? "#EDE6DA" : "#CDBFA8"} />
      <rect width="400" height="70" {...p("#9C8A72")} />
      {drawn ? <path d="M0 70H400" stroke={INK} strokeDasharray="6 5" fill="none" /> : <rect y="70" width="400" height="70" fill="url(#cv)" />}
      {[110, 200, 290].map((x) => (<g key={x}>
        <path d={`M${x} 0V140`} stroke={drawn ? INK : "#C9923B"} strokeWidth="1.5" fill="none" />
        <path d={`M${x - 24} 175Q${x} 128 ${x + 24} 175Z`} {...p("#C9923B")} /></g>))}
      {Array.from({ length: 6 }, (_, i) => <rect key={i} x={20 + i * 60} y="100" width="58" height="130" {...p("#96602F")} />)}
      <rect x="20" y="230" width="360" height="60" {...p("#4B3426")} />
      {!drawn && <path d="M30 250L120 270M160 238L260 280M290 245L370 262" stroke="#8B6A52" strokeWidth="1" fill="none" />}
      <rect x="20" y="290" width="360" height="10" {...p("#2E211A")} />
      <rect x="20" y="300" width="360" height="110" {...p("#7E4F26")} />
      <rect y="410" width="400" height="90" {...p("#6B5844")} />
      <rect x="115" y="330" width="50" height="60" {...p("#A8714A")} /><rect x="235" y="330" width="50" height="60" {...p("#A8714A")} />
      <rect x="60" y="380" width="280" height="14" {...p("#2E211A")} />
      <rect x="90" y="394" width="8" height="86" {...p("#2E211A")} /><rect x="302" y="394" width="8" height="86" {...p("#2E211A")} />
    </svg>
  );
}
