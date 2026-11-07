import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { experience } from '../data/portfolio.js'
export default function Experience() {
  return (
    <Section id="experience" n="03" label="Experience" title="Eight years of shipping enterprise software.">
      <ol className="relative space-y-8 border-l border-line pl-8">
        {experience.map(e => (
          <li key={e.company} className="relative">
            <span className={`absolute -left-[37px] top-8 h-3 w-3 rounded-full border-2 border-acc ${e.current ? 'bg-acc' : 'bg-bg'}`} aria-hidden />
            <Reveal>
              <div className="glass rounded-2xl border border-line p-7 transition-colors hover:border-acc/50">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="font-display text-2xl font-semibold">{e.role}</h3>
                  <span className="rounded-full border border-acc/40 bg-acc/10 px-3 py-1 font-mono text-xs text-acc">{e.period}</span>
                </div>
                <p className="mt-1 text-sm text-acc">{e.company} · {e.place}</p>
                <p className="mt-4 text-mut">{e.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-mut">{e.points.map(p => <li key={p} className="flex gap-3"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-acc" />{p}</li>)}</ul>
                <ul className="mt-5 flex flex-wrap gap-2">{e.tech.map(t => <li key={t} className="rounded border border-acc/20 bg-acc/5 px-2 py-1 font-mono text-[11px] text-acc">{t}</li>)}</ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
