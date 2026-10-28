import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { heroImages, products, whatsappLink } from '../data'
import { useLang } from '../LanguageContext'
import { useIsMobile } from '../hooks'
import { ease } from './motion'
import WhatsAppIcon from './WhatsAppIcon'

const byId = Object.fromEntries(products.map((p) => [p.id, p]))

// أماكن صور الكولاج: عمودين، التاني نازل شوية
const tiles = [
  'col-start-1 row-start-1',
  'col-start-2 row-start-1 translate-y-10 md:translate-y-14',
  'col-start-1 row-start-2',
  'col-start-2 row-start-2 translate-y-10 md:translate-y-14',
]

export default function Hero({ ready }) {
  const { t, lang, isRTL } = useLang()
  const isMobile = useIsMobile()
  const reduce = useReducedMotion()
  const words = t.hero.title.split(' ')
  const base = 0.1 // بعد ما اللودر يختفي
  const afterTitle = base + words.length * 0.07 + 0.15
  const animate = ready ? 'show' : 'hidden'
  const float = !isMobile && !reduce

  return (
    <section id="top" className="relative overflow-hidden bg-charcoal pt-28 pb-24 md:pt-36 md:pb-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 start-1/2 size-[44rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px] rtl:translate-x-1/2"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12">
        <div className="text-center lg:text-start">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: base, ease }}
            className="text-sm font-semibold tracking-[0.2em] text-gold uppercase"
          >
            {t.hero.eyebrow}
          </motion.p>

          <h1
            key={lang}
            className="mt-6 text-4xl leading-[1.25] font-extrabold text-ivory sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {words.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-2 align-bottom">
                <motion.span
                  className={`inline-block ${i >= words.length - 2 ? 'text-gold-gradient' : ''}`}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={ready ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.55, delay: base + 0.1 + i * 0.07, ease }}
                >
                  {w}
                </motion.span>
                {i < words.length - 1 && ' '}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: afterTitle, ease }}
            className="mx-auto mt-7 max-w-xl text-base leading-loose text-ivory/65 sm:text-lg lg:mx-0"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: afterTitle + 0.12, ease }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href={whatsappLink(t.hero.quoteMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex w-full items-center justify-center gap-2.5 rounded-full px-8 py-4 text-base font-semibold shadow-soft-dark sm:w-auto"
            >
              <WhatsAppIcon className="size-5" />
              {t.hero.primary}
            </a>
            <a
              href="#products"
              className="group flex w-full items-center justify-center gap-2.5 rounded-full border border-ivory/20 px-8 py-4 text-base font-normal text-ivory transition-colors hover:border-gold hover:text-gold-light sm:w-auto"
            >
              {t.hero.secondary}
              <ArrowDown strokeWidth={1.5} className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        <div className="mx-auto grid w-full max-w-md grid-cols-2 gap-4 pb-10 sm:gap-5 lg:max-w-lg">
          {heroImages.map((id, i) => {
            const p = byId[id]
            const fromX = isMobile ? 0 : isRTL ? -70 : 70
            return (
              <motion.div
                key={id}
                className={tiles[i]}
                initial="hidden"
                animate={animate}
                variants={{
                  hidden: { opacity: 0, x: fromX, y: isMobile ? 20 : 0 },
                  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, delay: base + 0.25 + i * 0.12, ease } },
                }}
              >
                <motion.div
                  animate={float ? { y: [0, -8, 0] } : undefined}
                  transition={float ? { duration: 5 + i * 0.6, repeat: Infinity, ease: 'easeInOut', delay: 1 + i * 0.4 } : undefined}
                  className="aspect-square overflow-hidden rounded-2xl bg-ivory/5 shadow-soft-dark ring-1 ring-ivory/10"
                >
                  <img
                    src={p.image}
                    alt={p[lang]}
                    width="600"
                    height="600"
                    loading="eager"
                    fetchPriority={i === 0 ? 'high' : 'auto'}
                    decoding="async"
                    className="size-full object-cover"
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
