import { track } from '@vercel/analytics'
// Fail-safe: never breaks the UI if analytics is unavailable.
export const trackEvent = (name) => { try { track(name) } catch { /* ignore */ } }
