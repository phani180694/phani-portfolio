import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { about } from '../data/portfolio.js'
export default function About() {
  return (
    <Section id="about" n="01" label="About" title={about.heading}>
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-5 leading-relaxed text-mut">{about.paragraphs.map((p, i) => <p key={p} className={i === 0 ? 'text-lg text-fg' : ''}>{p}</p>)}</div>
        <div className="space-y-4">{about.cards.map(c => (
          <Reveal key={c.t}><div className="rounded-xl border border-line bg-card p-5 transition-colors hover:border-acc/60"><h3 className="text-sm font-semibold text-acc">{c.t}</h3><p className="mt-1.5 text-sm text-mut">{c.d}</p></div></Reveal>
        ))}</div>
      </div>
    </Section>
  )
}
