import { motion } from 'framer-motion'
import { Gift, Printer, Scissors, Zap } from 'lucide-react'
import { useLang } from '../LanguageContext'
import { Reveal, SectionHeading, item } from './motion'

const icons = { printer: Printer, scissors: Scissors, zap: Zap, gift: Gift }

export default function Services() {
  const { t } = useLang()
  return (
    <section id="services" className="bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading dark eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />
        <Reveal className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {t.services.items.map((s) => {
            const Icon = icons[s.icon]
            return (
              <motion.div
                key={s.icon}
                variants={item}
                className="group rounded-2xl border border-ivory/10 bg-ivory/[0.03] p-8 shadow-soft-dark transition-colors duration-500 hover:border-gold/40"
              >
                <span className="flex size-14 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-charcoal">
                  <Icon strokeWidth={1.25} className="size-6" />
                </span>
                <h3 className="mt-7 text-xl font-bold text-ivory">{s.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ivory/60">{s.text}</p>
              </motion.div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
