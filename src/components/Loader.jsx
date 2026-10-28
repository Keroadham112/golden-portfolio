import { motion } from 'framer-motion'
import { company } from '../data'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      <div className="flex flex-col items-center gap-4">
        <motion.span
          className="font-poppins text-4xl font-bold tracking-wide text-gold-gradient"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {company.logoText}
        </motion.span>
        <span className="relative h-px w-24 overflow-hidden bg-ivory/10">
          <motion.span
            className="absolute inset-y-0 start-0 w-full origin-center bg-gold"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
        </span>
      </div>
    </motion.div>
  )
}
