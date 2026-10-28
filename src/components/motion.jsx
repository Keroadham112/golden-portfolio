import { motion } from 'framer-motion'
import { useIsMobile } from '../hooks'

export const ease = [0.22, 1, 0.36, 1]

// عنصر جوه قسم: بيطلع من تحت مع fade
export const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}

// غلاف القسم: بيظهر لما ننزل له ويعمل stagger للعناصر اللي جواه
export function Reveal({ as = 'div', stagger = 0.08, className, children, ...rest }) {
  const isMobile = useIsMobile()
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: isMobile ? stagger / 2 : stagger } },
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function SectionHeading({ eyebrow, title, subtitle, dark = false, className = '' }) {
  return (
    <Reveal className={`mx-auto max-w-2xl text-center ${className}`}>
      <motion.p variants={item} className="text-sm font-semibold tracking-[0.2em] text-gold uppercase">
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={item}
        className={`mt-4 text-3xl leading-tight font-extrabold sm:text-4xl md:text-5xl ${dark ? 'text-ivory' : 'text-charcoal'}`}
      >
        {title}
      </motion.h2>
      <motion.div variants={item} className="mx-auto mt-6 h-px w-16 bg-gold" />
      {subtitle && (
        <motion.p variants={item} className={`mt-6 text-base leading-relaxed sm:text-lg ${dark ? 'text-ivory/60' : 'text-muted'}`}>
          {subtitle}
        </motion.p>
      )}
    </Reveal>
  )
}
