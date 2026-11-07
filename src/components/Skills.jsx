import { motion } from 'framer-motion'
import Section from './Section.jsx'
import { skills } from '../data/portfolio.js'
export default function Skills() {
  return (
    <Section id="skills" n="02" label="Skills" title="A toolkit built for enterprise scale.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <motion.div key={s.group} whileHover={{ y: -4 }} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: (i % 3) * 0.08 }} className="rounded-xl border border-line bg-card p-6 transition-colors hover:border-acc/60">
            <div className="flex items-start justify-between"><h3 className="font-display text-lg font-semibold">{s.group}</h3><span className="font-mono text-[10px] text-mut">{String(i + 1).padStart(2, '0')}</span></div>
            <p className="mt-1 text-xs text-mut">{s.sub}</p>
            <ul className="mt-5 flex flex-wrap gap-2">{s.items.map(t => <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-mut">{t}</li>)}</ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
