import { useEffect, useRef } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import { Clock } from 'lucide-react'
import { useLang } from '../LanguageContext'
import { Reveal, item } from './motion'

const icons = { clock: Clock }

// عدّاد بيبدأ من صفر لما يظهر على الشاشة
function Counter({ value, prefix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      ref.current.textContent = `${prefix}${value}`
      return
    }
    const controls = animate(0, value, {
      duration: value > 10 ? 1.2 : 0.6,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${prefix}${Math.round(v)}`
      },
    })
    return () => controls.stop()
  }, [inView, reduce, value, prefix])

  return (
    <span ref={ref} dir="ltr">
      {prefix}0
    </span>
  )
}

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="about" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="text-center lg:text-start">
          <motion.p variants={item} className="text-sm font-semibold tracking-[0.2em] text-gold uppercase">
            {a.eyebrow}
          </motion.p>
          <motion.h2 variants={item} className="mt-4 text-3xl leading-tight font-extrabold text-charcoal sm:text-4xl md:text-5xl">
            {a.title}
          </motion.h2>
          <motion.div variants={item} className="mx-auto mt-6 h-px w-16 bg-gold lg:mx-0" />
          <motion.p variants={item} className="mt-6 text-base leading-loose text-muted sm:text-lg">
            {a.text}
          </motion.p>
        </Reveal>

        <Reveal className="grid grid-cols-3 gap-3 sm:gap-5">
          {a.stats.map((s) => {
            const Icon = s.icon && icons[s.icon]
            return (
              <motion.div
                key={s.label}
                variants={item}
                className="flex flex-col items-center justify-center rounded-2xl border border-charcoal/5 bg-white px-2 py-8 text-center shadow-soft sm:px-4 sm:py-10"
              >
                <span className="flex h-12 items-center font-poppins text-4xl font-bold text-gold-gradient sm:h-16 sm:text-5xl">
                  {Icon ? <Icon strokeWidth={1.25} className="size-10 text-gold sm:size-12" /> : <Counter value={s.value} prefix={s.prefix} />}
                </span>
                <span className="mt-3 text-sm leading-snug font-normal text-muted sm:text-base">{s.label}</span>
              </motion.div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
