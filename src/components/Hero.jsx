import { Download, ArrowUpRight, ArrowDown, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile, heroStats } from '../data/portfolio.js'
import { trackEvent } from '../lib/analytics.js'
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }
export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="grid-bg absolute inset-0" aria-hidden /><div className="glow absolute inset-0" aria-hidden />
      <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.12 }} className="relative mx-auto w-full max-w-6xl px-5 pb-12 pt-32 sm:px-8">
        <motion.p variants={item} className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-mut">
          <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acc opacity-60" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-acc" /></span>Available for senior roles
        </motion.p>
        <motion.p variants={item} className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-acc">Hello — I am</motion.p>
        <motion.h1 variants={item} className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">{profile.first}<br /><span className="text-acc">{profile.last}</span></motion.h1>
        <motion.p variants={item} className="mt-6 max-w-2xl font-display text-lg font-medium text-mut sm:text-xl">{profile.title}</motion.p>
        <motion.p variants={item} className="mt-6 max-w-xl leading-relaxed text-mut">{profile.intro}</motion.p>
        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
          <a href={profile.resume} download onClick={() => trackEvent('resume_download')} className="inline-flex items-center gap-2 rounded-full bg-acc px-6 py-3 text-sm font-semibold text-[color:var(--onacc)] transition-transform hover:-translate-y-0.5"><Download size={15}/>Download Resume</a>
          <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold transition-colors hover:border-acc">View Projects<ArrowUpRight size={14}/></a>
          <a href="#contact" className="px-4 py-3 text-sm text-mut transition-colors hover:text-fg">Contact Me</a>
        </motion.div>
        <motion.dl variants={item} className="mt-14 grid grid-cols-2 gap-8 border-t border-line pt-8 lg:grid-cols-4">
          {heroStats.map((s, i) => (
            <div key={s.k}><dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-mut">0{i + 1} / {s.k}</dt><dd className="mt-3 font-display text-2xl font-semibold text-acc">{s.v}</dd><dd className="mt-1 text-sm text-mut">{s.d}</dd></div>
          ))}
        </motion.dl>
        <motion.div variants={item} className="mt-10 flex items-center justify-between">
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-mut"><MapPin size={14} className="text-acc"/>Hyderabad, India</p>
        </motion.div>
        <a href="#about" aria-label="Scroll to About" className="mx-auto mt-6 block w-fit text-mut hover:text-acc"><ArrowDown size={16} className="animate-bounce"/></a>
      </motion.div>
    </section>
  )
}
