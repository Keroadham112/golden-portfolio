import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { company, whatsappLink } from '../data'
import { useLang } from '../LanguageContext'
import WhatsAppIcon from './WhatsAppIcon'

const sections = ['services', 'products', 'process', 'contact']

export default function Header() {
  const { t, toggle, lang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 24))

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? 'bg-charcoal/75 shadow-soft-dark backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8 ${
          scrolled ? 'h-16' : 'h-20 md:h-24'
        }`}
      >
        <a href="#top" className="font-poppins text-2xl font-bold tracking-wide text-gold-gradient" aria-label={company.name[lang]}>
          {company.logoText}
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {sections.map((id) => (
            <a key={id} href={`#${id}`} className="text-sm font-normal text-ivory/75 transition-colors hover:text-gold-light">
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggle}
            className="flex size-10 items-center justify-center rounded-full border border-ivory/15 font-cairo text-sm font-semibold text-ivory/90 transition-colors hover:border-gold hover:text-gold-light"
            aria-label={lang === 'ar' ? 'Switch to English' : 'التبديل للعربية'}
          >
            {t.langSwitch}
          </button>
          <a
            href={whatsappLink(t.hero.quoteMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold sm:flex"
          >
            <WhatsAppIcon className="size-4" />
            {t.whatsappCta}
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex size-10 items-center justify-center rounded-full text-ivory md:hidden"
            aria-label={open ? t.close : t.menu}
            aria-expanded={open}
          >
            {open ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-ivory/10 md:hidden"
          >
            <div className="flex flex-col px-5 py-4">
              {sections.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="border-b border-ivory/5 py-4 text-base text-ivory/85 last:border-0"
                >
                  {t.nav[id]}
                </a>
              ))}
              <a
                href={whatsappLink(t.hero.quoteMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-4 flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold"
              >
                <WhatsAppIcon className="size-4" />
                {t.whatsappCta}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
