import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Young_Serif, Hanken_Grotesk } from "next/font/google";
import { site, wa } from "@/content.config";
const display = Young_Serif({ weight: "400", subsets: ["latin"], variable: "--f-display", display: "swap" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--f-body", display: "swap" });
export const metadata: Metadata = { title: `${site.name}, interior design in Kolkata`, description: site.tagline, robots: { index: false, follow: false } };
const vars = Object.fromEntries(Object.entries(site.colors).map(([k, v]) => [`--c-${k}`, v])) as React.CSSProperties;
export default function Root({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${display.variable} ${body.variable}`} style={vars}><body>
    <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-4 md:px-10">
      <Link href="/" className="font-display text-xl">{site.name} <span lang="bn" className="ml-2 text-sm opacity-70">{site.bn}</span></Link>
      <nav className="flex gap-5 text-sm"><Link href="/">Home</Link><Link href="/projects">Work</Link><Link href="/estimate">Estimate</Link><Link href="/contact">Contact</Link>
        <a href={wa("Hi, I found your website and would like to talk about a project.")} className="font-semibold underline decoration-cove decoration-2 underline-offset-4">WhatsApp</a></nav>
    </header>{children}
    <footer className="mt-24 bg-marble px-5 py-10 text-paper md:px-10">
      <p className="font-display text-2xl">{site.name} <span lang="bn" className="text-base opacity-70">{site.bn}</span></p>
      <p className="mt-2 text-sm opacity-80">{site.address}<br/>{site.hours}, <a className="text-cove underline" href={`tel:${site.phone}`}>{site.phoneDisplay}</a></p>
      <p className="mt-6 text-xs opacity-60">Private demo. Not the live site.</p></footer>
  </body></html>);
}
