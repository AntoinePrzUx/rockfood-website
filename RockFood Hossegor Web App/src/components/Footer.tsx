import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import imgMapContainer from '../imports/ContactDay/3bb8b33f14b60c68d51fb84839f5479a9523ae7b.png'
import imgLogo from '../imports/ROCKFOOD_LONDON-2.png'
import { IconInstagram, IconFacebook, IconSpotify } from './Icons'
import { reopenCookieConsent } from './CookieBanner'

const GMAPS = 'https://www.google.com/maps/search/?api=1&query=Rockfood+Plage+Centrale+40150+Soorts-Hossegor'
const AMAPS = 'http://maps.apple.com/?q=Rockfood+Plage+Centrale+40150+Soorts-Hossegor'

// ─── Legal copy (bilingual inline) ───────────────────────────────────────────

const LEGAL_COPY = {
  mentions: {
    titleFr: 'MENTIONS LÉGALES',
    titleEn: 'LEGAL MENTIONS',
    items: [
      {
        labelFr: 'Éditeur',
        labelEn: 'Publisher',
        valueFr: 'ROCKFOOD Hossegor — Plage Centrale, 40150 Soorts-Hossegor — Tél : 05 58 43 43 27',
        valueEn: 'ROCKFOOD Hossegor — Plage Centrale, 40150 Soorts-Hossegor — Tel: 05 58 43 43 27',
      },
      {
        labelFr: 'SIRET / RCS',
        labelEn: 'SIRET / RCS',
        valueFr: '380 451 245 00027 — RCS DAX',
        valueEn: '380 451 245 00027 — RCS DAX',
      },
      {
        labelFr: 'Directeur de la publication',
        labelEn: 'Publication director',
        valueFr: "L'équipe Rockfood",
        valueEn: 'The Rockfood team',
      },
      {
        labelFr: 'Hébergeur',
        labelEn: 'Hosting',
        valueFr: 'Web Application Platform',
        valueEn: 'Web Application Platform',
      },
    ],
  },
  privacy: {
    titleFr: 'POLITIQUE DE CONFIDENTIALITÉ & RGPD',
    titleEn: 'PRIVACY POLICY & GDPR',
    bodyFr:
      'Nous collectons uniquement les données strictement nécessaires au bon fonctionnement du site (préférences de thème Day/Night, langue FR/EN). En cas d\'acceptation des cookies analytics, des données d\'audience anonymisées sont transmises à Google Analytics. Conformément à la loi Informatique et Libertés, vous disposez d\'un droit d\'accès et de suppression de vos données.',
    bodyEn:
      'We only collect data strictly necessary for the website to function (Day/Night theme preference, FR/EN language setting). If analytics cookies are accepted, anonymised audience data is sent to Google Analytics. In accordance with data protection law, you have the right to access and delete your personal data.',
  },
}

// ─── Shared bottom-sheet modal ────────────────────────────────────────────────

function LegalSheet({
  open,
  onClose,
  isNight,
  children,
}: {
  open: boolean
  onClose: () => void
  isNight: boolean
  children: React.ReactNode
}) {
  const surface = isNight
    ? 'bg-[#1E1E24] border-t border-x border-[#FF007A] shadow-[0_0_30px_rgba(255,0,122,0.2)]'
    : 'bg-white border-t border-x border-[#E0E0E0] shadow-xl'

  return (
    <div
      className={`fixed inset-0 z-[10000] flex items-end justify-center transition-all duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" onClick={onClose} />

      {/* Sheet */}
      <div
        className={`relative w-full max-w-2xl rounded-t-[16px] transition-transform duration-300 ${open ? 'translate-y-0' : 'translate-y-full'} ${surface}`}
        style={{ maxHeight: '80vh', overflowY: 'auto' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-[16px] font-bold transition-colors ${isNight ? 'text-[#A0A0A0] hover:text-white bg-[#2D2D2D]' : 'text-[#555] hover:text-[#111] bg-[#F0F0EC]'}`}
          aria-label="Fermer"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          ×
        </button>

        <div className="px-5 pt-6 pb-10">
          {children}
        </div>
      </div>
    </div>
  )
}

// ─── Main Footer ──────────────────────────────────────────────────────────────

export default function Footer() {
  const { theme } = useTheme()
  const { lang, t } = useLanguage()
  const isNight = theme === 'night'

  const [mapsModal, setMapsModal] = useState(false)
  const [legalModal, setLegalModal] = useState(false)
  const [privacyModal, setPrivacyModal] = useState(false)

  const text = isNight ? 'text-white' : 'text-[#111]'
  const textSub = isNight ? 'text-[#A0A0A0]' : 'text-[#555]'
  const divider = isNight ? 'border-[#2D2D2D]' : 'border-[#E0E0E0]'

  const modalSurface = isNight
    ? 'bg-[#1E1E24] border border-[#FF007A] shadow-[0_0_30px_rgba(255,0,122,0.25)]'
    : 'bg-white border border-[#E0E0E0] shadow-xl'
  const modalBtn = isNight
    ? 'bg-[#0A0A0B] border border-[rgba(255,0,122,0.4)] text-white hover:border-[#FF007A] hover:shadow-[0_0_12px_rgba(255,0,122,0.4)]'
    : 'bg-[#F4F4F4] border border-[#E0E0E0] text-[#111] hover:bg-[#EAEAEA]'
  const cancelBtn = isNight ? 'text-[#A0A0A0] hover:text-white' : 'text-[#555] hover:text-[#111]'

  const legalLinkCls = `text-[11px] cursor-pointer transition-colors ${isNight ? 'text-[#555] hover:text-[#A0A0A0]' : 'text-[#999] hover:text-[#555]'}`

  const { mentions, privacy } = LEGAL_COPY

  return (
    <footer className="bg-[#0A0A0B] w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6">

        {/* Clickable map */}
        <button
          onClick={() => setMapsModal(true)}
          className="relative rounded-2xl overflow-hidden h-[220px] lg:h-[320px] border border-[#5c5c5c] w-full cursor-pointer group focus:outline-none"
        >
          <img src={imgMapContainer} alt="Carte Hossegor" className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="px-4 py-2 rounded-full text-[13px] font-semibold flex items-center gap-2 bg-[#1E1E24] border border-[rgba(255,0,122,0.6)] text-white shadow-[0_0_12px_rgba(255,0,122,0.3)]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t('map_badge')}
            </span>
          </div>
        </button>

        {/* Wordmark + info */}
        <div className="flex flex-col gap-3">
          <img src={imgLogo} alt="Rockfood" className="h-[28px] w-auto object-contain block self-start" style={{ filter: 'invert(1)', mixBlendMode: 'screen' }} />
          <p className="text-[12px] text-white/70 leading-[1.4]" style={{ fontFamily: "'Inter', sans-serif" }}>
            Plage Centrale, 40150 Soorts-Hossegor
          </p>
          <p className="text-[12px] text-white/70 leading-[1.4]" style={{ fontFamily: "'Inter', sans-serif" }}>
            {t('footer_horaires')}
          </p>
        </div>

        <div className="h-px bg-[#2D2D2D]" />

        {/* Socials + copyright */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/rockfoodhossegor/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <IconInstagram color="#fff" size={32} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100066395812885" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <IconFacebook color="#fff" size={32} />
            </a>
            <a href="#" aria-label="Spotify">
              <IconSpotify color="#fff" size={32} />
            </a>
          </div>
          <p className="text-[12px] text-[#666]" style={{ fontFamily: "'Inter', sans-serif" }}>
            © 2026 ROCKFOOD
          </p>
        </div>

        {/* Legal links */}
        <div className="flex items-center gap-4 flex-wrap">
          <button onClick={() => setLegalModal(true)} className={legalLinkCls} style={{ fontFamily: "'Inter', sans-serif" }}>
            {t('mentions_legales')}
          </button>
          <span className="text-[#333] text-[10px]" aria-hidden>•</span>
          <button onClick={() => setPrivacyModal(true)} className={legalLinkCls} style={{ fontFamily: "'Inter', sans-serif" }}>
            {t('confidentialite')}
          </button>
          <span className="text-[#333] text-[10px]" aria-hidden>•</span>
          <button onClick={reopenCookieConsent} className={legalLinkCls} style={{ fontFamily: "'Inter', sans-serif" }}>
            🍪 {t('gerer_cookies')}
          </button>
        </div>

      </div>

      {/* ─── GPS modal ─────────────────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[9999] flex items-end justify-center transition-all duration-300 ${mapsModal ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={() => setMapsModal(false)} />
        <div
          className={`relative w-full max-w-2xl rounded-t-[16px] p-6 transition-transform duration-300 ${mapsModal ? 'translate-y-0' : 'translate-y-full'} ${modalSurface}`}
        >
          <p
            className={`text-[18px] uppercase font-bold text-center mb-6 ${isNight ? 'text-white' : 'text-[#111]'}`}
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
          >
            {t('maps_modal_title')}
          </p>
          <div className="flex flex-col gap-3 mb-4">
            <a href={GMAPS} target="_blank" rel="noopener noreferrer" onClick={() => setMapsModal(false)}
              className={`h-14 rounded-[10px] flex items-center justify-center gap-3 text-[14px] font-semibold border transition-all duration-300 ${modalBtn}`}
              style={{ fontFamily: "'Inter', sans-serif" }}>
              Google Maps
            </a>
            <a href={AMAPS} target="_blank" rel="noopener noreferrer" onClick={() => setMapsModal(false)}
              className={`h-14 rounded-[10px] flex items-center justify-center gap-3 text-[14px] font-semibold border transition-all duration-300 ${modalBtn}`}
              style={{ fontFamily: "'Inter', sans-serif" }}>
              Apple Maps
            </a>
          </div>
          <button onClick={() => setMapsModal(false)}
            className={`w-full h-11 text-[14px] font-semibold transition-colors duration-200 ${cancelBtn}`}
            style={{ fontFamily: "'Inter', sans-serif" }}>
            {t('annuler')}
          </button>
        </div>
      </div>

      {/* ─── Mentions Légales modal ─────────────────────────────────────────── */}
      <LegalSheet open={legalModal} onClose={() => setLegalModal(false)} isNight={isNight}>
        <h2
          className={`text-[20px] uppercase leading-none mb-6 pr-8 ${isNight ? 'text-white' : 'text-[#111]'}`}
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
        >
          {lang === 'en' ? mentions.titleEn : mentions.titleFr}
        </h2>
        <div className="flex flex-col gap-4">
          {mentions.items.map((item, i) => (
            <div key={i} className={`flex flex-col gap-0.5 pb-4 ${i < mentions.items.length - 1 ? `border-b ${isNight ? 'border-[#2D2D2D]' : 'border-[#F0F0EC]'}` : ''}`}>
              <p
                className={`text-[10px] uppercase tracking-[0.08em] font-bold ${isNight ? 'text-[#FF007A]' : 'text-[#00B3C8]'}`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {lang === 'en' ? item.labelEn : item.labelFr}
              </p>
              <p
                className={`text-[14px] leading-[1.5] ${isNight ? 'text-white' : 'text-[#111]'}`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {lang === 'en' ? item.valueEn : item.valueFr}
              </p>
            </div>
          ))}
        </div>
      </LegalSheet>

      {/* ─── Privacy Policy modal ───────────────────────────────────────────── */}
      <LegalSheet open={privacyModal} onClose={() => setPrivacyModal(false)} isNight={isNight}>
        <h2
          className={`text-[20px] uppercase leading-[1.1] mb-5 pr-8 ${isNight ? 'text-white' : 'text-[#111]'}`}
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
        >
          {lang === 'en' ? privacy.titleEn : privacy.titleFr}
        </h2>
        <p
          className={`text-[14px] leading-[1.65] ${isNight ? 'text-[#C0C0C0]' : 'text-[#444]'}`}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {lang === 'en' ? privacy.bodyEn : privacy.bodyFr}
        </p>
        <div className={`mt-6 p-4 rounded-[8px] ${isNight ? 'bg-[#0A0A0B] border border-[#2D2D2D]' : 'bg-[#F9F9F6] border border-[#E8E8E4]'}`}>
          <p
            className={`text-[11px] uppercase tracking-[0.08em] font-bold mb-1 ${isNight ? 'text-[#FF007A]' : 'text-[#00B3C8]'}`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {lang === 'en' ? 'Cookies stored' : 'Cookies stockés'}
          </p>
          <p className={`text-[12px] leading-[1.5] ${isNight ? 'text-[#A0A0A0]' : 'text-[#555]'}`} style={{ fontFamily: "'Inter', sans-serif" }}>
            <code className={`px-1.5 py-0.5 rounded text-[11px] ${isNight ? 'bg-[#2D2D2D] text-[#FF007A]' : 'bg-[#F0F0EC] text-[#333]'}`}>rockfood_cookie_consent</code>
            {' '}— {lang === 'en' ? 'Stores your analytics consent choice (accepted / declined). No personal data.' : 'Stocke votre choix de consentement analytics (accepted / declined). Aucune donnée personnelle.'}
          </p>
        </div>
      </LegalSheet>

    </footer>
  )
}
