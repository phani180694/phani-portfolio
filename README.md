# P C Phanindra Babu Pamdurthy — Portfolio

Static single-page portfolio: React 18 + Vite + Tailwind CSS, Framer Motion, Lenis smooth scrolling, Lucide icons, Vercel Analytics. No backend, no database.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output in dist/
npm run preview  # serve the production build
```

## Edit content
All content lives in `src/data/portfolio.js`. Components only render it.

## Resume
Replace `public/resume.pdf` with your final PDF (keep the file name). Every Download Resume button uses it.

## Deploy
**Vercel:** push to GitHub → Import project → Framework: Vite → Build `npm run build` → Output `dist` → Deploy.
**Netlify:** Build `npm run build`, publish `dist`.

## Analytics
Page views are collected automatically once deployed to Vercel (Dashboard → Analytics → Enable). Resume downloads, email, LinkedIn and GitHub clicks are sent as custom events (`src/lib/analytics.js`); custom events need a Vercel Pro plan. Calls fail silently elsewhere.

## Testimonials
Intentionally omitted until genuine feedback is available.
