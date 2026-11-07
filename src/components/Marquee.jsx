import { Sparkles } from 'lucide-react'
import { marquee } from '../data/portfolio.js'
export default function Marquee() {
  const row = [...marquee, ...marquee]
  return (
    <div className="marquee-wrap overflow-hidden border-y border-line bg-card/60 py-7" aria-hidden>
      <div className="marquee flex w-max items-center gap-12 font-display text-xl font-semibold text-fg/80">
        {row.map((t, i) => <span key={i} className="flex items-center gap-12">{t}<Sparkles size={14} className="text-acc" /></span>)}
      </div>
    </div>
  )
}
