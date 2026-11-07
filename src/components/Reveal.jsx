import { motion, useReducedMotion } from 'framer-motion'
export default function Reveal({ children, className = '' }) {
  const reduce = useReducedMotion()
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.45 }}>{children}</motion.div>
}
