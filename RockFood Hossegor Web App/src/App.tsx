import { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import Header from './components/Header'
import MobileMenu from './components/MobileMenu'
import BackToTop from './components/BackToTop'
import CookieBanner from './components/CookieBanner'
import Landing from './pages/Landing'
import Carte from './pages/Carte'
import ADN from './pages/ADN'
import Contact from './pages/Contact'
import Events from './pages/Events'

type Page = 'landing' | 'carte' | 'adn' | 'contact' | 'events'

function AppInner() {
  const [page, setPage] = useState<Page>('landing')
  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = (p: Page) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <>
      <Header
        onMenuOpen={() => setMenuOpen(true)}
        onNavigate={navigate}
      />

      <main>
        {page === 'landing' && <Landing onNavigate={navigate} />}
        {page === 'carte' && <Carte />}
        {page === 'adn' && <ADN />}
        {page === 'contact' && <Contact />}
        {page === 'events' && <Events />}
      </main>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={navigate}
      />

      <BackToTop />
      <CookieBanner />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppInner />
      </LanguageProvider>
    </ThemeProvider>
  )
}
