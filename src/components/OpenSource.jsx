import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import Section from './Section.jsx'
import { repos, profile } from '../data/portfolio.js'
import { trackEvent } from '../lib/analytics.js'
export default function OpenSource() {
  return (
    <Section id="opensource" n="05" label="Open Source" title="Code in the open.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map(r => (
          <motion.a key={r.name} href={`${profile.github}/${r.name}`} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('github_click')} whileHover={{ y: -4 }} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="block rounded-xl border border-line bg-card p-6 transition-colors hover:border-acc/60">
            <Github size={18} className="text-acc" />
            <h3 className="mt-4 font-mono text-base font-medium">{r.name}</h3>
            <p className="mt-2 text-sm text-mut">{r.d}</p>
            <ul className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">{r.tech.map(t => <li key={t} className="rounded border border-acc/20 bg-acc/5 px-2 py-1 font-mono text-[11px] text-acc">{t}</li>)}</ul>
          </motion.a>
        ))}
        <a href={profile.github} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('github_click')} className="flex flex-col items-center justify-center rounded-xl border border-dashed border-line bg-acc/5 p-6 text-center transition-colors hover:border-acc">
          <Github className="text-acc" /><span className="mt-3 text-sm font-semibold">View My GitHub Profile</span><span className="mt-1 font-mono text-[11px] text-mut">{profile.githubLabel}</span>
        </a>
      </div>
    </Section>
  )
}
