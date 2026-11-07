import { useState } from 'react'
import { Mail, Linkedin, Github, Download, Copy, Check } from 'lucide-react'
import Section from './Section.jsx'
import { profile } from '../data/portfolio.js'
import { trackEvent } from '../lib/analytics.js'
export default function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    trackEvent('email_click')
    try { await navigator.clipboard.writeText(profile.email) } catch { /* ignore */ }
    setCopied(true); setTimeout(() => setCopied(false), 2000)
  }
  const cards = [
    { Icon: Mail, t: 'Email', v: profile.email, href: `mailto:${profile.email}`, ev: 'email_click' },
    { Icon: Linkedin, t: 'LinkedIn', v: 'Connect professionally', href: profile.linkedin, ev: 'linkedin_click' },
    { Icon: Github, t: 'GitHub', v: profile.githubLabel, href: profile.github, ev: 'github_click' }
  ]
  return (
    <Section id="contact" n="08" label="Contact" title={<>Let's build something<br /><span className="text-acc">worth shipping.</span></>}>
      <p className="-mt-4 max-w-2xl text-lg text-mut">I'm open to senior React and full stack opportunities, consulting, and interesting conversations about frontend architecture. The fastest way to reach me is email.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {cards.map(({ Icon, t, v, href, ev }) => (
          <a key={t} href={href} target={t === 'Email' ? undefined : '_blank'} rel="noopener noreferrer" onClick={() => trackEvent(ev)} className="group rounded-xl border border-line bg-card p-6 transition-colors hover:border-acc/60">
            <span className="inline-flex rounded-lg border border-acc/30 bg-acc/10 p-2.5 text-acc"><Icon size={18}/></span>
            <h3 className="mt-4 font-semibold">{t}</h3><p className="mt-1 break-all text-sm text-mut">{v}</p>
          </a>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <button onClick={copy} className="inline-flex items-center gap-2 rounded-full bg-acc px-6 py-3 text-sm font-semibold text-[color:var(--onacc)]">{copied ? <Check size={15}/> : <Copy size={15}/>}{copied ? 'Email copied' : 'Copy Email Address'}</button>
        <a href={profile.resume} download onClick={() => trackEvent('resume_download')} className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold hover:border-acc"><Download size={15}/>Download Resume</a>
      </div>
    </Section>
  )
}
