export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: { extend: {
    colors: { bg:'var(--bg)', card:'var(--card)', fg:'var(--fg)', mut:'var(--mut)', line:'var(--line)', acc:'var(--acc)' },
    fontFamily: { sans:['"Plus Jakarta Sans"','system-ui','sans-serif'], display:['Outfit','sans-serif'], mono:['"JetBrains Mono"','monospace'] }
  } }
}
