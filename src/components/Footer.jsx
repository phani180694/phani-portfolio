import { ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolio.js'
export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 pb-10 pt-16 sm:px-8">
      <p className="select-none font-mono text-6xl font-bold text-line sm:text-8xl" aria-hidden>&lt;phani/&gt;</p>
      <div className="mt-8 flex items-end justify-between">
        <div><p className="text-sm font-semibold">{profile.name}</p><p className="mt-1 text-xs text-mut">© {new Date().getFullYear()} · Hyderabad, India · Built with React &amp; Tailwind CSS</p></div>
        <a href="#top" className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-xs text-mut hover:text-fg">Back to top<ArrowUp size={12}/></a>
      </div>
    </footer>
  )
}
