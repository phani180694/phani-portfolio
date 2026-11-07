import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import OpenSource from './components/OpenSource.jsx'
import Achievements from './components/Achievements.jsx'
import Certification from './components/Certification.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
export default function App() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch { /* ignore */ }
  }, [dark])
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.1, anchors: true })
    let raf; const loop = t => { lenis.raf(t); raf = requestAnimationFrame(loop) }
    raf = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(raf); lenis.destroy() }
  }, [])
  return (
    <>
      <Navbar dark={dark} toggle={() => setDark(d => !d)} />
      <main><Hero /><Marquee /><About /><Skills /><Experience /><Projects /><OpenSource /><Achievements /><Certification /><Contact /></main>
      <Footer />
      <Analytics />
    </>
  )
}
