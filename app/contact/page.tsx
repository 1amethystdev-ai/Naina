"use client";
import { Suspense, useState } from "react"; import { useSearchParams } from "next/navigation"; import { site, projects, wa } from "@/content.config";
function Form() {
  const q = useSearchParams().get("project"); const p = projects.find(x => x.slug === q); const [done, setDone] = useState(false); const [errs, setErrs] = useState<string[]>([]);
  const f = "mt-1 block w-full border-2 border-ink bg-paper px-3 py-2";
  if (done) return <p className="mt-8 max-w-md font-display text-3xl">Thank you. We will call you within one working day.</p>;
  return (<form noValidate className="mt-8 grid max-w-2xl gap-4 md:grid-cols-2" onSubmit={e => { e.preventDefault(); const d = new FormData(e.currentTarget); const bad = ["name", "phone", "location"].filter(k => !String(d.get(k)).trim()); setErrs(bad); if (!bad.length) setDone(true); }}>
    <label>Name<input name="name" className={f} autoComplete="name" /></label><label>Phone<input name="phone" className={f} inputMode="tel" autoComplete="tel" /></label>
    <label>Project type<select name="type" className={f}>{["Full home", "Kitchen or wardrobes", "Single room", "Shop or café", "Office"].map(t => <option key={t}>{t}</option>)}</select></label><label>Location<input name="location" className={f} /></label>
    <label>Budget range<select name="budget" className={f}>{["Under ₹8 L", "₹8 to 15 L", "₹15 to 30 L", "Above ₹30 L"].map(t => <option key={t}>{t}</option>)}</select></label><label>Timeline<select name="time" className={f}>{["Within 1 month", "1 to 3 months", "Just exploring"].map(t => <option key={t}>{t}</option>)}</select></label>
    <label className="md:col-span-2">Message<textarea name="msg" rows={4} className={f} defaultValue={p ? `I'd like something like "${p.title}" (${p.area}).` : ""} /></label>
    {!!errs.length && <p role="alert" className="font-semibold md:col-span-2">Fill in: {errs.join(", ")}.</p>}
    <div className="flex flex-wrap gap-3 md:col-span-2"><button className="bg-ink px-6 py-3 text-paper">Send enquiry</button>
      <a href={wa(p ? `Hi, I'd like something like "${p.title}".` : "Hi, I'm enquiring from your website.")} className="border-2 border-ink px-6 py-3">Chat on WhatsApp</a></div></form>);
}
export default function Contact() { return <main className="px-5 md:px-10"><h1 className="font-display text-5xl">Contact</h1><p className="mt-3">{site.address}. {site.hours}.</p><Suspense><Form /></Suspense></main>; }
