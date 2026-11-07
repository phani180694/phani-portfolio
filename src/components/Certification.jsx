import { BadgeCheck, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { certification as c, profile } from '../data/portfolio.js'
export default function Certification() {
  return (
    <section id="certification" className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <Reveal>
        <div className="glow relative rounded-3xl border border-acc/40 bg-card p-8 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-acc">07 — Certification</p>
              <div className="mt-4 flex items-center gap-4"><BadgeCheck size={36} className="text-acc" /><div><h3 className="font-display text-2xl font-semibold sm:text-3xl">{c.name}</h3><p className="text-sm text-mut">{c.issuer} · <span className="text-acc">Active Certification</span></p></div></div>
            </div>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-acc px-5 py-2.5 text-sm font-semibold text-[color:var(--onacc)]">Verify on LinkedIn<ArrowUpRight size={14}/></a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">{c.tags.map(t => <li key={t} className="rounded border border-acc/20 bg-acc/5 px-2.5 py-1 font-mono text-[11px] text-mut">{t}</li>)}</ul>
        </div>
      </Reveal>
    </section>
  )
}
