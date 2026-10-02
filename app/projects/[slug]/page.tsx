import Link from "next/link"; import { notFound } from "next/navigation";
import { projects, wa } from "@/content.config"; import { Ph } from "@/components/Ph"; import { Slider } from "@/components/Slider";
export const generateStaticParams = () => projects.map(p => ({ slug: p.slug }));
export default async function Detail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const p = projects.find(x => x.slug === slug); if (!p) notFound();
  const rows = [["Location", `${p.area}, Kolkata`], ["Area", `${p.sqft} sq ft`], ["Type", `${p.kind}, ${p.room}`], ["Scope", p.scope], ["Materials", p.materials.join(", ")]];
  return (<main><Ph tones={p.tones} ratio="21/9" src={p.img} alt={`${p.title}, hero view`} className="min-h-64" />
    <div className="grid gap-8 px-5 py-12 md:grid-cols-12 md:px-10"><div className="md:col-span-6"><h1 className="font-display text-5xl">{p.title}</h1><p className="mt-4 max-w-md text-lg">{p.brief}</p></div>
      <dl className="md:col-span-6">{rows.map(([a, b]) => <div key={a} className="grid grid-cols-3 gap-4 border-t border-ink/25 py-3"><dt className="font-semibold">{a}</dt><dd className="col-span-2">{b}</dd></div>)}</dl></div>
    <div className="px-5 md:px-10"><h2 className="mb-3 font-display text-2xl">Before and after</h2>
      <Slider labels={["Before", "After"]} before={<Ph tones={["#8E8678", "#6F675B", "#4A443C"]} ratio="16/9" alt={`${p.title}, before`} />} after={<Ph tones={p.tones} ratio="16/9" src={p.img} alt={`${p.title}, after`} />} /></div>
    <div className="mt-12 flex flex-wrap items-center gap-4 px-5 md:px-10"><p className="font-display text-2xl">Want something like this?</p>
      <Link href={`/contact?project=${p.slug}`} className="bg-ink px-6 py-3 text-paper">Start an enquiry</Link>
      <a href={wa(`Hi, I'd like something like "${p.title}" (${p.area}).`)} className="border-2 border-ink px-6 py-3">WhatsApp about this project</a></div></main>);
}
