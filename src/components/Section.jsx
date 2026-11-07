import Reveal from './Reveal.jsx'
export default function Section({ id, n, label, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-acc">{n} — {label}</p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        <div className="mt-4 h-px w-16 bg-gradient-to-r from-acc to-transparent" />
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  )
}
