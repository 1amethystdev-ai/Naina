"use client";
import { useState } from "react";
export function Slider({ before, after, labels = ["Plan", "Finished"], className = "" }: { before: React.ReactNode; after: React.ReactNode; labels?: [string, string]; className?: string }) {
  const [p, setP] = useState(50);
  const tag = "absolute top-3 bg-ink/80 px-2 py-1 text-xs text-paper";
  return (<div className={`relative select-none overflow-hidden focus-within:outline focus-within:outline-[3px] focus-within:outline-cove ${className}`}>
    <div>{after}</div>
    <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - p}% 0 0)` }}>{before}</div>
    <div className="absolute inset-y-0 w-0.5 bg-cove" style={{ left: `${p}%` }} />
    <input type="range" min={0} max={100} value={p} onChange={(e) => setP(+e.target.value)} aria-label={`Drag to compare ${labels[0]} and ${labels[1]}`} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
    <span className={`${tag} left-3`}>{labels[0]}</span><span className={`${tag} right-3`}>{labels[1]}</span>
  </div>);
}
export function Plan() {
  return (<svg viewBox="0 0 400 500" className="block w-full bg-paper" role="img" aria-label="Drafted plan of the Tangra dining room">
    <g fill="none" stroke="#1B140F" strokeWidth="2"><rect x="30" y="40" width="340" height="420" /><rect x="30" y="40" width="340" height="60" strokeDasharray="6 5" /><ellipse cx="200" cy="290" rx="95" ry="55" />
      {[[120,215],[200,205],[280,215],[120,365],[200,375],[280,365]].map(([x,y],i)=><rect key={i} x={x-18} y={y-14} width="36" height="28" />)}
      <path d="M30 140h12M30 190h12M30 240h12" /></g>
    <text x="40" y="488" fontSize="12" fill="#1B140F">Dining plan, 1:50</text></svg>);
}
