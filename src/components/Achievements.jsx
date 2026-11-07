import Section from './Section.jsx'
import Reveal from './Reveal.jsx'
import { achievements, achievementNotes } from '../data/portfolio.js'
export default function Achievements() {
  return (
    <Section id="achievements" n="06" label="Achievements" title="Results that shipped.">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {achievements.map(a => <Reveal key={a.label}><div className="border-l-2 border-acc pl-4"><p className="font-display text-4xl font-bold">{a.value}</p><p className="mt-1 text-sm text-mut">{a.label}</p></div></Reveal>)}
      </div>
      <ul className="mt-10 flex flex-wrap gap-2">{achievementNotes.map(n => <li key={n} className="rounded-full border border-line px-4 py-1.5 text-sm text-mut">{n}</li>)}</ul>
    </Section>
  )
}
