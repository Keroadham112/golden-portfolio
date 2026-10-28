import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { categories, whatsappLink } from '../data'
import { useLang } from '../LanguageContext'
import { ease } from './motion'
import WhatsAppIcon from './WhatsAppIcon'

export default function ProductModal({ product, onClose }) {
  const { t, lang } = useLang()

  useEffect(() => {
    if (!product) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [product, onClose])

  const category = product && categories.find((c) => c.id === product.category)

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/85 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={product[lang]}
        >
          <motion.div
            className="relative flex max-h-full w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-ivory shadow-soft-dark"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.4, ease }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              autoFocus
              aria-label={t.close}
              className="absolute end-3 top-3 z-10 flex size-10 items-center justify-center rounded-full bg-charcoal/70 text-ivory backdrop-blur transition-colors hover:bg-charcoal"
            >
              <X strokeWidth={1.5} className="size-5" />
            </button>
            <div className="flex min-h-0 flex-1 items-center justify-center bg-white">
              <img src={product.image} alt={product[lang]} className="max-h-[65svh] w-full object-contain" />
            </div>
            <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                {category && <p className="text-xs font-semibold tracking-[0.15em] text-gold uppercase">{category[lang]}</p>}
                <h3 className="mt-1 text-lg font-bold text-charcoal sm:text-xl">{product[lang]}</h3>
              </div>
              <a
                href={whatsappLink(t.products.orderMessage(`${product.ar} / ${product.en}`))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold"
              >
                <WhatsAppIcon className="size-4" />
                {t.products.order}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
