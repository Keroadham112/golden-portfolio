import { createContext, useContext, useEffect, useState } from 'react'
import { texts } from './data'

const LanguageContext = createContext(null)

const readStoredLang = () => {
  try {
    const stored = localStorage.getItem('lang')
    return stored === 'en' ? 'en' : 'ar'
  } catch {
    return 'ar'
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readStoredLang)
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
    try {
      localStorage.setItem('lang', lang)
    } catch {
      // storage unavailable — language just won't persist
    }
  }, [lang, dir])

  const toggle = () => setLang((l) => (l === 'ar' ? 'en' : 'ar'))

  return (
    <LanguageContext.Provider value={{ lang, dir, isRTL: dir === 'rtl', t: texts[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
