import { useCallback, useMemo, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { Eye } from 'lucide-react'
import { categories, products } from '../data'
import { useLang } from '../LanguageContext'
import { SectionHeading, Reveal, item, ease } from './motion'
import ProductModal from './ProductModal'

export default function Products() {
  const { t, lang } = useLang()
  const [active, setActive] = useState('all')
  const [selected, setSelected] = useState(null)
  const close = useCallback(() => setSelected(null), [])

  const visible = useMemo(
    () => (active === 'all' ? products : products.filter((p) => p.category === active)),
    [active],
  )

  return (
    <section id="products" className="bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading dark eyebrow={t.products.eyebrow} title={t.products.title} subtitle={t.products.subtitle} />

        <Reveal className="mt-12">
          <motion.div variants={item}>
            <LayoutGroup id="filters">
              <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
                {categories.map((c) => {
                  const isActive = active === c.id
                  return (
                    <button
                      key={c.id}
                      onClick={() => setActive(c.id)}
                      aria-pressed={isActive}
                      className={`relative shrink-0 rounded-full px-5 py-2.5 text-sm transition-colors duration-300 ${
                        isActive ? 'font-semibold text-charcoal' : 'text-ivory/70 hover:text-ivory'
                      }`}
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="filter-pill"
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-light to-gold"
                          transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                        />
                      ) : (
                        <span className="absolute inset-0 rounded-full border border-ivory/10" />
                      )}
                      <span className="relative">{c[lang]}</span>
                    </button>
                  )
                })}
              </div>
            </LayoutGroup>
          </motion.div>
        </Reveal>

        <motion.ul layout className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((p) => (
              <motion.li
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, ease }}
              >
                <button
                  onClick={() => setSelected(p)}
                  className="group block w-full text-start focus-visible:outline-none"
                  aria-label={`${t.products.view}: ${p[lang]}`}
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-soft-dark ring-1 ring-ivory/5 group-focus-visible:ring-2 group-focus-visible:ring-gold">
                    <img
                      src={p.image}
                      alt={p[lang]}
                      width="600"
                      height="600"
                      loading="lazy"
                      decoding="async"
                      className={`size-full transition-transform duration-500 ease-out group-hover:scale-[1.06] ${
                        p.fit === 'contain' ? 'object-contain p-3' : 'object-cover'
                      }`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-charcoal/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="flex items-center gap-2 rounded-full border border-gold-light/60 px-5 py-2 text-sm font-semibold text-gold-light">
                        <Eye strokeWidth={1.5} className="size-4" />
                        {t.products.view}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-4 text-sm leading-snug font-normal text-ivory/85 transition-colors group-hover:text-gold-light sm:text-base">
                    {p[lang]}
                  </h3>
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>

      <ProductModal product={selected} onClose={close} />
    </section>
  )
}
