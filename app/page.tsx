import Link from "next/link";
import { site, projects, services, testimonials, wa } from "@/content.config";
import { Ph } from "@/components/Ph";
import { Slider, Plan } from "@/components/Slider";
export default function Home() {
  const hero = projects[0];
  return (<main>
    <section className="grid gap-8 px-5 md:grid-cols-12 md:px-10">
      <div className="flex flex-col justify-center md:col-span-5">
        <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">{site.name}</h1>
        <p className="mt-5 max-w-md text-lg">{site.tagline}</p>
        <p className="mt-3 text-sm">Tangra, Kolkata. Google rating {site.rating} from {site.reviews} reviews.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/projects" className="bg-ink px-6 py-3 text-paper">See the work</Link>
          <a href={wa("Hi, I found your website and would like to talk about a project.")} className="border-2 border-ink px-6 py-3">Message us on WhatsApp</a></div></div>
      <div className="cove-in md:col-span-7"><Slider className="rounded-t-[50%/18%]" before={<Plan />} after={<Ph tones={hero.tones} ratio="4/5" alt={`${hero.title}, finished room`} src={hero.img} />} />
        <p className="mt-2 text-sm">Drag across: the plan on the left, the finished dining room on the right.</p></div>
    </section>
    <section className="mt-24 space-y-16 px-5 md:px-10" aria-labelledby="work"><h2 id="work" className="font-display text-3xl">Recent projects</h2>
      {projects.slice(0, 3).map((p, i) => (<Link key={p.slug} href={`/projects/${p.slug}`} className="group grid items-end gap-6 md:grid-cols-12">
        <Ph tones={p.tones} ratio="16/10" alt={`${p.title}, ${p.room}`} src={p.img} className={`md:col-span-8 ${i % 2 ? "md:order-2" : ""}`} />
        <div className="md:col-span-4"><h3 className="font-display text-2xl group-hover:underline">{p.title}</h3><p className="mt-1">{p.area}, {p.sqft} sq ft</p><p className="mt-2 max-w-sm">{p.brief}</p></div></Link>))}</section>
    <section className="mt-24 grid gap-8 px-5 md:grid-cols-12 md:px-10"><h2 className="font-display text-3xl md:col-span-4">What we do</h2>
      <ul className="divide-y divide-ink/25 md:col-span-8">{services.map(s => <li key={s.name} className="py-4"><p className="font-semibold">{s.name}</p><p className="max-w-xl">{s.line}</p></li>)}</ul></section>
    <section className="mt-24 bg-paper px-5 py-16 md:px-10"><blockquote className="max-w-3xl font-display text-3xl leading-snug md:text-4xl">“{testimonials[0].quote}”</blockquote>
      <p className="mt-4">{testimonials[0].name}, {testimonials[0].source}</p></section>
    <section className="bg-marble px-5 py-16 text-paper md:px-10"><h2 className="font-display text-4xl">Tell us about your space.</h2>
      <div className="mt-6 flex flex-wrap gap-3"><Link href="/contact" className="bg-cove px-6 py-3 text-ink">Send an enquiry</Link><Link href="/estimate" className="border-2 border-paper px-6 py-3">Get a budget estimate</Link></div></section>
  </main>);
}
