import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { company, whatsappLink } from '../data'
import { useLang } from '../LanguageContext'
import { Reveal, SectionHeading, item } from './motion'
import SocialLinks from './SocialLinks'
import WhatsAppIcon from './WhatsAppIcon'

export default function Contact() {
  const { t, lang } = useLang()
  const c = t.contact

  const actions = [
    { label: c.whatsapp, value: company.phone, href: whatsappLink(t.hero.quoteMessage), icon: WhatsAppIcon, external: true, primary: true },
    { label: c.call, value: company.phone, href: `tel:${company.phone}`, icon: Phone },
    { label: c.email, value: company.email, href: `mailto:${company.email}`, icon: Mail },
  ]

  return (
    <section id="contact" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />

        <div className="mt-16 grid gap-6 lg:grid-cols-5 lg:gap-8">
          <Reveal className="flex flex-col gap-4 lg:col-span-2">
            {actions.map(({ label, value, href, icon: Icon, external, primary }) => (
              <motion.a
                key={label}
                variants={item}
                href={href}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                className={`group flex items-center gap-5 rounded-2xl p-5 transition-colors duration-300 ${
                  primary ? 'btn-gold shadow-soft' : 'border border-charcoal/5 bg-white text-charcoal shadow-soft hover:border-gold/50'
                }`}
              >
                <span
                  className={`flex size-12 shrink-0 items-center justify-center rounded-full ${
                    primary ? 'bg-charcoal/10' : 'border border-gold/30 text-gold'
                  }`}
                >
                  <Icon strokeWidth={1.5} className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className={`block text-sm ${primary ? 'font-semibold' : 'text-muted'}`}>{label}</span>
                  <span dir="ltr" className="mt-0.5 block truncate font-poppins text-base font-medium">
                    {value}
                  </span>
                </span>
                <ArrowUpRight strokeWidth={1.5} className="size-5 shrink-0 opacity-50 transition-opacity group-hover:opacity-100 rtl:-scale-x-100" />
              </motion.a>
            ))}

            <motion.div variants={item} className="flex items-start gap-5 rounded-2xl border border-charcoal/5 bg-white p-5 text-charcoal shadow-soft">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                <MapPin strokeWidth={1.5} className="size-5" />
              </span>
              <span>
                <span className="block text-sm text-muted">{c.address}</span>
                <span className="mt-0.5 block text-base leading-relaxed font-normal">{company.address[lang]}</span>
              </span>
            </motion.div>

            <SocialLinks light className="mt-2" />
          </Reveal>

          <Reveal className="lg:col-span-3">
            <motion.div variants={item} className="h-80 overflow-hidden rounded-2xl shadow-soft ring-1 ring-charcoal/10 sm:h-96 lg:h-full lg:min-h-[28rem]">
              <iframe
                title={c.mapTitle}
                src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&hl=${lang}&z=16&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="size-full border-0 grayscale-[35%]"
                allowFullScreen
              />
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
