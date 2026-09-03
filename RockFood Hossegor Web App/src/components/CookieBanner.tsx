import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

function initGoogleAnalytics() {
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'
  if (typeof window.gtag === 'function') return

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag(...args: unknown[]) { window.dataLayer.push(args) }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID)
}

const CONSENT_KEY = 'rockfood_cookie_consent'
type ConsentState = 'accepted' | 'declined' | 'analytics_only' | null

interface Prefs {
  essential: boolean
  analytics: boolean
}

export default function CookieBanner() {
  const { theme } = useTheme()
  const { lang } = useLanguage()
  const isNight = theme === 'night'

  const [visible, setVisible] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [prefs, setPrefs] = useState<Prefs>({ essential: true, analytics: false })

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentState
    if (!stored) {
      setVisible(true)
    } else if (stored === 'accepted' || stored === 'analytics_only') {
      initGoogleAnalytics()
    }
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setVisible(false)
    setModalOpen(false)
    initGoogleAnalytics()
  }

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setVisible(false)
    setModalOpen(false)
  }

  const savePrefs = () => {
    if (prefs.analytics) {
      localStorage.setItem(CONSENT_KEY, 'analytics_only')
      initGoogleAnalytics()
    } else {
      localStorage.setItem(CONSENT_KEY, 'declined')
    }
    setVisible(false)
    setModalOpen(false)
  }

  const bg = isNight ? 'bg-[#1E1E24]' : 'bg-white'
  const border = isNight ? 'border-[#FF007A]/60' : 'border-[#E0E0E0]'
  const text = isNight ? 'text-white' : 'text-[#111]'
  const textSub = isNight ? 'text-[#A0A0A0]' : 'text-[#555]'
  const shadow = isNight
    ? 'shadow-[0_0_24px_rgba(255,0,122,0.18)]'
    : 'shadow-[0_4px_24px_rgba(0,0,0,0.10)]'
  const divider = isNight ? 'border-[#2D2D2D]' : 'border-[#E8E8E4]'
  const toggleTrack = isNight ? 'bg-[#2D2D2D]' : 'bg-[#E8E8E4]'
  const accentBtn = isNight
    ? 'bg-[#FF007A] text-white hover:bg-[#e0006b]'
    : 'bg-[#111] text-white hover:bg-[#333]'
  const outlineBtn = isNight
    ? 'border border-[#3D3D3D] text-[#A0A0A0] hover:border-[#FF007A] hover:text-white'
    : 'border border-[#DADADA] text-[#555] hover:border-[#111] hover:text-[#111]'
  const linkBtn = isNight ? 'text-[#FF007A] underline underline-offset-2' : 'text-[#111] underline underline-offset-2'

  const copy = {
    title: { fr: 'Vos préférences cookies', en: 'Your cookie preferences' },
    body: {
      fr: "Ce site utilise des cookies essentiels au fonctionnement (thème, langue) et, avec votre accord, des cookies de mesure d'audience (Google Analytics) pour améliorer votre expérience.",
      en: 'This site uses essential cookies (theme, language) and, with your consent, audience measurement cookies (Google Analytics) to improve your experience.',
    },
    accept: { fr: 'ACCEPTER TOUT', en: 'ACCEPT ALL' },
    decline: { fr: 'REFUSER', en: 'DECLINE' },
    customize: { fr: 'Personnaliser', en: 'Customize' },
    modalTitle: { fr: 'Personnaliser les cookies', en: 'Manage cookies' },
    essential_label: { fr: 'Cookies essentiels', en: 'Essential cookies' },
    essential_desc: { fr: 'Préférences de thème et de langue. Toujours actifs.', en: 'Theme and language preferences. Always active.' },
    analytics_label: { fr: 'Cookies analytiques', en: 'Analytics cookies' },
    analytics_desc: { fr: 'Google Analytics — mesure d\'audience anonymisée.', en: 'Google Analytics — anonymized audience measurement.' },
    save: { fr: 'ENREGISTRER MES CHOIX', en: 'SAVE MY CHOICES' },
    always_on: { fr: 'Toujours actif', en: 'Always on' },
  }

  const tr = (key: keyof typeof copy) => copy[key][lang as 'fr' | 'en'] ?? copy[key]['fr']

  if (!visible && !modalOpen) return null

  return (
    <>
      {/* Banner */}
      {visible && !modalOpen && (
        <div
          className={`fixed bottom-4 left-4 right-4 z-[9999] max-w-[560px] mx-auto rounded-[10px] border p-4 ${bg} ${border} ${shadow} transition-all duration-300`}
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
        >
          <p
            className={`text-[11px] uppercase tracking-[0.08em] font-bold mb-1 ${isNight ? 'text-[#FF007A]' : 'text-[#111]'}`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {tr('title')}
          </p>
          <p
            className={`text-[12px] leading-[1.55] mb-4 ${textSub}`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {tr('body')}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={accept}
              className={`h-9 px-5 rounded-full text-[11px] uppercase tracking-[0.06em] font-bold transition-colors ${accentBtn}`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {tr('accept')}
            </button>
            <button
              onClick={decline}
              className={`h-9 px-5 rounded-full text-[11px] uppercase tracking-[0.06em] font-bold transition-colors ${outlineBtn}`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {tr('decline')}
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className={`text-[11px] transition-colors ${linkBtn}`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {tr('customize')}
            </button>
          </div>
        </div>
      )}

      {/* Preferences modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-end justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setModalOpen(false)} />
          <div
            className={`relative w-full max-w-[560px] rounded-t-[16px] border-t border-x p-5 pb-8 ${bg} ${border} ${shadow} transition-transform duration-300`}
            style={{ maxHeight: '90vh', overflowY: 'auto' }}
          >
            <div className="flex items-center justify-between mb-4">
              <p
                className={`text-[14px] uppercase tracking-[0.06em] font-bold ${text}`}
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
              >
                {tr('modalTitle')}
              </p>
              <button
                onClick={() => setModalOpen(false)}
                className={`text-[20px] leading-none ${textSub} hover:${text}`}
                aria-label="Fermer"
              >
                ×
              </button>
            </div>

            {/* Essential row */}
            <div className={`flex items-start justify-between gap-4 py-4 border-b ${divider}`}>
              <div className="flex-1 min-w-0">
                <p
                  className={`text-[13px] font-bold mb-0.5 ${text}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {tr('essential_label')}
                </p>
                <p className={`text-[12px] leading-[1.45] ${textSub}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                  {tr('essential_desc')}
                </p>
              </div>
              <span
                className={`shrink-0 text-[11px] font-bold mt-0.5 ${isNight ? 'text-[#00FF66]' : 'text-[#22C55E]'}`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {tr('always_on')}
              </span>
            </div>

            {/* Analytics row */}
            <div className="flex items-start justify-between gap-4 py-4">
              <div className="flex-1 min-w-0">
                <p
                  className={`text-[13px] font-bold mb-0.5 ${text}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {tr('analytics_label')}
                </p>
                <p className={`text-[12px] leading-[1.45] ${textSub}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                  {tr('analytics_desc')}
                </p>
              </div>
              {/* Toggle */}
              <button
                onClick={() => setPrefs(p => ({ ...p, analytics: !p.analytics }))}
                className={`shrink-0 relative w-10 h-6 rounded-full transition-colors duration-200 mt-0.5 ${prefs.analytics ? (isNight ? 'bg-[#FF007A]' : 'bg-[#111]') : toggleTrack}`}
                role="switch"
                aria-checked={prefs.analytics}
                aria-label="Activer les cookies analytiques"
              >
                <span
                  className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${prefs.analytics ? 'translate-x-5' : 'translate-x-1'}`}
                />
              </button>
            </div>

            <button
              onClick={savePrefs}
              className={`w-full h-11 rounded-full text-[12px] uppercase tracking-[0.06em] font-bold mt-2 transition-colors ${accentBtn}`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {tr('save')}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

/** Call this from a settings page or footer link to re-open consent UI */
export function reopenCookieConsent() {
  localStorage.removeItem(CONSENT_KEY)
  window.location.reload()
}
