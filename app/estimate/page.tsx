"use client";
import { useState } from "react"; import { rateTable as R } from "@/content.config";
const lakh = (n: number) => n >= 1e7 ? `₹${(n / 1e7).toFixed(2)} Cr` : `₹${(n / 1e5).toFixed(1)} L`;
export default function Estimate() {
  const [prop, setProp] = useState("Flat"); const [bhk, setBhk] = useState("2 BHK"); const [sq, setSq] = useState(""); const [fin, setFin] = useState("Signature");
  const [name, setName] = useState(""); const [ph, setPh] = useState(""); const [shown, setShown] = useState(false); const [err, setErr] = useState("");
  const area = +sq || R.bhk[bhk]; const mid = area * R.perSqft[fin] * R.property[prop]; const lo = mid * (1 - R.spread), hi = mid * (1 + R.spread);
  const f = "mt-1 block w-full border-2 border-ink bg-paper px-3 py-2";
  return (<main className="max-w-2xl px-5 md:px-10"><h1 className="font-display text-5xl">Budget estimate</h1><p className="mt-3">Three answers give you a range for the interior work. We refine it after a site visit.</p>
    <div className="mt-8 space-y-5">
      <label className="block">Property<select className={f} value={prop} onChange={e => setProp(e.target.value)}>{Object.keys(R.property).map(k => <option key={k}>{k}</option>)}</select></label>
      <label className="block">Size<select className={f} value={bhk} onChange={e => setBhk(e.target.value)}>{Object.keys(R.bhk).map(k => <option key={k}>{k}</option>)}</select></label>
      <label className="block">Or exact area in sq ft (optional)<input inputMode="numeric" className={f} value={sq} onChange={e => setSq(e.target.value.replace(/\D/g, ""))} /></label>
      <fieldset><legend>Finish level</legend><div className="mt-1 flex flex-wrap gap-2">{Object.keys(R.perSqft).map(k => <label key={k} className="cursor-pointer border-2 border-ink px-4 py-2 has-[:checked]:bg-ink has-[:checked]:text-paper has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-cove"><input type="radio" name="fin" className="sr-only" checked={fin === k} onChange={() => setFin(k)} />{k}</label>)}</div></fieldset></div>
    <div className="mt-10 bg-paper p-6">{shown ? <><p className="font-display text-4xl">{lakh(lo)} to {lakh(hi)}</p><p className="mt-2 text-sm">Approximate estimate for about {area} sq ft. Final cost depends on your plan, materials and site.</p></> :
      <form noValidate onSubmit={e => { e.preventDefault(); if (!name.trim() || ph.replace(/\D/g, "").length < 10) return setErr("Enter your name and a 10-digit phone number to see the range."); setShown(true); }}>
        <p className="font-semibold">Your range is ready. Enter your details to see it.</p>
        <label className="mt-3 block">Name<input className={f} value={name} onChange={e => setName(e.target.value)} autoComplete="name" /></label>
        <label className="mt-3 block">Phone<input className={f} value={ph} onChange={e => setPh(e.target.value)} inputMode="tel" autoComplete="tel" /></label>
        {err && <p role="alert" className="mt-2 text-sm font-semibold">{err}</p>}<button className="mt-4 bg-ink px-6 py-3 text-paper">Show my estimate</button></form>}</div></main>);
}
