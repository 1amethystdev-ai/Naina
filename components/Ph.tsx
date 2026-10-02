export function Ph({ tones, ratio = "4/3", src, alt, className = "" }: { tones: string[]; ratio?: string; src?: string; alt: string; className?: string }) {
  if (src) return <img src={src} alt={alt} loading="lazy" className={`w-full object-cover ${className}`} style={{ aspectRatio: ratio }} />;
  return (<div role="img" aria-label={alt} className={`relative overflow-hidden ${className}`} style={{ aspectRatio: ratio, background: tones[0] }}>
    <div className="absolute inset-y-0 right-0 w-[38%]" style={{ background: tones[1] }} />
    <div className="absolute bottom-0 left-[12%] h-[46%] w-[30%]" style={{ background: tones[2] }} />
    <div className="absolute inset-x-0 top-0 h-[9%]" style={{ background: tones[2], opacity: 0.55 }} />
  </div>);
}
