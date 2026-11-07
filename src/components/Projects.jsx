import { motion } from 'framer-motion'
import Section from './Section.jsx'
import { projects } from '../data/portfolio.js'
export default function Projects() {
  return (
    <Section id="projects" n="04" label="Selected work" title="Enterprise platforms I've helped build.">
      <p className="-mt-6 mb-8 font-mono text-[11px] uppercase tracking-[0.2em] text-mut">Client names anonymized for confidentiality</p>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article key={p.name} whileHover={{ y: -4 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: (i % 2) * 0.1 }} className="rounded-2xl border border-line bg-card p-7 transition-colors hover:border-acc/60">
            <div className="flex items-center justify-between"><span className="font-mono text-xs text-acc">{p.n}</span><span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-mut">{p.cat}</span></div>
            <h3 className="mt-5 font-display text-xl font-semibold">{p.name}</h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-mut">{p.sub}</p>
            <ul className="mt-5 space-y-2 text-sm text-mut">{p.points.map(x => <li key={x} className="flex gap-3"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-acc" />{x}</li>)}</ul>
            <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">{p.tech.map(t => <li key={t} className="rounded border border-acc/20 bg-acc/5 px-2 py-1 font-mono text-[11px] text-acc">{t}</li>)}</ul>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
