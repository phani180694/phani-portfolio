import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon, FileText } from 'lucide-react'
import { nav, profile } from '../data/portfolio.js'
import { trackEvent } from '../lib/analytics.js'
export default function Navbar({ dark, toggle }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  const id = n => `#${n.toLowerCase().replace(' ', '')}`
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:px-5">
      <nav aria-label="Primary" className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border px-3 transition-all duration-300 ${scrolled ? 'glass border-line shadow-lg shadow-black/10' : 'border-transparent bg-transparent'}`}>
        <a href="#top" className="rounded-lg border border-acc/30 bg-acc/10 px-3 py-1 font-mono text-sm text-acc">&lt;phani/&gt;</a>
        <ul className="hidden gap-8 text-sm text-mut md:flex">{nav.map(n => <li key={n}><a className="transition-colors hover:text-fg" href={id(n)}>{n}</a></li>)}</ul>
        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label="Toggle light and dark mode" className="rounded-full border border-line p-2 text-mut hover:text-fg">{dark ? <Sun size={15}/> : <Moon size={15}/>}</button>
          <a href={profile.resume} download onClick={() => trackEvent('resume_download')} className="inline-flex items-center gap-1.5 rounded-full bg-acc px-4 py-2 text-xs font-semibold text-[color:var(--onacc)]"><FileText size={13}/>Resume</a>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} className="p-2 text-mut md:hidden">{open ? <X size={18}/> : <Menu size={18}/>}</button>
        </div>
      </nav>
      {open && <ul className="glass mx-auto mt-2 max-w-6xl rounded-2xl border border-line p-3 md:hidden">{nav.map(n => <li key={n}><a onClick={() => setOpen(false)} className="block px-3 py-2 text-mut" href={id(n)}>{n}</a></li>)}</ul>}
    </header>
  )
}
