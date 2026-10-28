import { useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { LanguageProvider } from './LanguageContext'
import Loader from './components/Loader'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Products from './components/Products'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 650)
    return () => clearTimeout(id)
  }, [])

  return (
    <LanguageProvider>
      {/* reducedMotion="user" بيحترم إعداد prefers-reduced-motion */}
      <MotionConfig reducedMotion="user">
        <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
        <Header />
        <main>
          <Hero ready={!loading} />
          <About />
          <Services />
          <Products />
          <Process />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </MotionConfig>
    </LanguageProvider>
  )
}
