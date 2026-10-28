import { motion } from 'framer-motion'
import { whatsappLink } from '../data'
import { useLang } from '../LanguageContext'
import WhatsAppIcon from './WhatsAppIcon'

export default function WhatsAppFloat() {
  const { t } = useLang()
  return (
    <motion.a
      href={whatsappLink(t.hero.quoteMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsappCta}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="wa-pulse fixed end-5 bottom-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft-dark sm:end-7 sm:bottom-7"
    >
      <WhatsAppIcon className="size-7" />
    </motion.a>
  )
}
