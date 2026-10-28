import { company } from '../data'
import { useLang } from '../LanguageContext'
import SocialLinks from './SocialLinks'

const year = new Date().getFullYear()

export default function Footer() {
  const { t, lang } = useLang()

  return (
    <footer className="border-t border-gold/20 bg-[#080808] pt-14 pb-24 text-ivory sm:pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#top" className="font-poppins text-3xl font-bold tracking-wide text-gold-gradient">
              {company.logoText}
            </a>
            <p className="mt-3 text-sm text-ivory/80">{company.name[lang]}</p>
            <p className="mt-1 text-sm text-ivory/50">{t.footer.tagline}</p>
          </div>
          <ul className="space-y-2 text-sm text-ivory/60">
            <li>{company.address[lang]}</li>
            <li>
              <a dir="ltr" href={`tel:${company.phone}`} className="font-poppins transition-colors hover:text-gold-light">
                {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="font-poppins transition-colors hover:text-gold-light">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
        <SocialLinks className="mt-8" />
        <div className="mt-12 h-px bg-ivory/10" />
        <p className="mt-6 text-center text-xs text-ivory/40">
          © {year} {company.name[lang]}. {t.footer.rights}.
        </p>
      </div>
    </footer>
  )
}
