import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { CheckCircle2, MessageCircle, PackageCheck, PenTool, Settings } from 'lucide-react'
import { useLang } from '../LanguageContext'
import { Reveal, SectionHeading, item } from './motion'

const icons = [MessageCircle, PenTool, CheckCircle2, Settings, PackageCheck]

export default function Process() {
  const { t, isRTL } = useLang()
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.55'] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  const drawn = reduce ? 1 : progress

  return (
    <section id="process" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} />

        <div ref={ref} className="relative mt-16 md:mt-20">
          {/* الخط الأفقي — كمبيوتر */}
          <div className="absolute inset-x-[10%] top-8 hidden h-px bg-charcoal/10 md:block">
            <motion.div
              className="h-full w-full bg-gradient-to-r from-gold-light to-gold"
              style={{ scaleX: drawn, transformOrigin: isRTL ? 'right' : 'left' }}
            />
          </div>
          {/* الخط الرأسي — موبايل */}
          <div className="absolute start-8 top-8 bottom-8 w-px bg-charcoal/10 md:hidden">
            <motion.div className="h-full w-full bg-gradient-to-b from-gold-light to-gold" style={{ scaleY: drawn, transformOrigin: 'top' }} />
          </div>

          <Reveal as="ol" stagger={0.12} className="relative grid gap-10 md:grid-cols-5 md:gap-6">
            {t.process.steps.map((s, i) => {
              const Icon = icons[i]
              return (
                <motion.li key={i} variants={item} className="flex items-start gap-6 md:flex-col md:items-center md:gap-0 md:text-center">
                  <span className="relative flex size-16 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-ivory text-gold shadow-soft">
                    <Icon strokeWidth={1.25} className="size-6" />
                    <span className="absolute -top-1 -end-1 flex size-6 items-center justify-center rounded-full bg-charcoal font-poppins text-[0.7rem] font-semibold text-gold-light">
                      {i + 1}
                    </span>
                  </span>
                  <div className="pt-2 md:pt-7">
                    <h3 className="text-xl font-bold text-charcoal">{s.title}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-muted md:mx-auto md:max-w-[13rem]">{s.text}</p>
                  </div>
                </motion.li>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
