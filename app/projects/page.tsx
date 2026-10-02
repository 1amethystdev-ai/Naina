"use client";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/content.config";
import { Ph } from "@/components/Ph";
export default function Projects() {
  const kinds = ["All", "Residential", "Commercial"]; const rooms = ["All", ...Array.from(new Set(projects.map(p => p.room)))];
  const [k, setK] = useState("All"); const [r, setR] = useState("All");
  const list = projects.filter(p => (k === "All" || p.kind === k) && (r === "All" || p.room === r));
  const Chip = ({ v, cur, set }: { v: string; cur: string; set: (s: string) => void }) => <button aria-pressed={cur === v} onClick={() => set(v)} className={`border-2 border-ink px-3 py-1 text-sm ${cur === v ? "bg-ink text-paper" : ""}`}>{v}</button>;
  return (<main className="px-5 md:px-10"><h1 className="font-display text-5xl">Projects</h1>
    <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter by type">{kinds.map(v => <Chip key={v} v={v} cur={k} set={setK} />)}</div>
    <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Filter by room">{rooms.map(v => <Chip key={v} v={v} cur={r} set={setR} />)}</div>
    <div className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-2">{list.map(p => <Link key={p.slug} href={`/projects/${p.slug}`} className="group"><Ph tones={p.tones} ratio="4/3" src={p.img} alt={`${p.title}, ${p.room}`} />
      <p className="mt-3 font-display text-2xl group-hover:underline">{p.title}</p><p>{p.kind}, {p.sqft} sq ft</p></Link>)}
      {!list.length && <p>No projects match both filters. Set one back to All.</p>}</div></main>);
}
