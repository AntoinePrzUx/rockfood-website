import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import Footer from '../components/Footer'
import { IconPin, IconClock, IconMap, IconInstagram, IconChevronDown } from '../components/Icons'
import imgMapContainer from '../imports/ContactDay/3bb8b33f14b60c68d51fb84839f5479a9523ae7b.png'

const GMAPS = 'https://www.google.com/maps/search/?api=1&query=Rockfood+Plage+Centrale+40150+Soorts-Hossegor'
const AMAPS = 'http://maps.apple.com/?q=Rockfood+Plage+Centrale+40150+Soorts-Hossegor'

const FAQ_ITEMS = [
  {
    qFr: 'Peut-on réserver une table le soir ?',
    qEn: 'Can we book a table for dinner?',
    aFr: 'Pas de réservation le soir, venez directement sur place !',
    aEn: 'No bookings at night, just walk in!',
  },
  {
    qFr: 'Acceptez-vous les animaux en terrasse ?',
    qEn: 'Are pets allowed on the terrace?',
    aFr: 'Oui, les chiens tenus en laisse sont les bienvenus.',
    aEn: 'Yes, dogs on a leash are welcome.',
  },
  {
    qFr: 'Quels sont les moyens de paiement acceptés ?',
    qEn: 'What payment methods are accepted?',
    aFr: 'Carte bancaire, espèces, Apple Pay.',
    aEn: 'Credit card, cash, Apple Pay.',
  },
  {
    qFr: 'Proposez-vous des menus végétariens ?',
    qEn: 'Do you have vegetarian options?',
    aFr: 'Oui, plusieurs options sont identifiées par le tag 🌱 sur la carte.',
    aEn: 'Yes, several options are tagged with 🌱 on the menu.',
  },
  {
    qFr: "Y a-t-il un parking à proximité ?",
    qEn: 'Is there parking nearby?',
    aFr: "Privilégie le parking de la Centrale tôt le matin ou viens directement à vélo.",
    aEn: 'Use the Central beach parking early morning or come directly by bike.',
  },
]

export default function Contact() {
  const { theme } = useTheme()
  const { lang, t } = useLanguage()
  const isNight = theme === 'night'
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mapsModal, setMapsModal] = useState(false)

  const bg = isNight ? 'bg-[#0A0A0B]' : 'bg-[#F9F9F6]'
  const text = isNight ? 'text-white' : 'text-black'
  const textSub = isNight ? 'text-[#A0A0A0]' : 'text-[#555]'
  const cardBg = isNight
    ? 'bg-[#1E1E24] border-[#2D2D2D] neon-card'
    : 'bg-[#F9F9F6] border-[#111]'
  const faqBg = isNight
    ? 'bg-[#1E1E24] border-[#2D2D2D] neon-card'
    : 'bg-[#F9F9F6] border-[#111]'
  const btnPrimary = isNight
    ? 'bg-[#FF007A] shadow-[0_0_6px_rgba(255,0,122,0.4)] text-white'
    : 'bg-[#111] text-white'
  const btnSecondary = isNight
    ? 'border border-[#FF007A] text-[#FF007A]'
    : 'border border-[#111] text-[#111]'
  const chevronColor = isNight ? '#fff' : '#111'
  const iconColor = isNight ? '#FF007A' : '#00E5FF'

  const modalSurface = isNight
    ? 'bg-[#1E1E24] border border-[#FF007A] shadow-[0_0_30px_rgba(255,0,122,0.25)]'
    : 'bg-white border border-[#E0E0E0] shadow-xl'
  const modalBtn = isNight
    ? 'bg-[#0A0A0B] border border-[rgba(255,0,122,0.4)] text-white hover:border-[#FF007A] hover:shadow-[0_0_12px_rgba(255,0,122,0.4)]'
    : 'bg-[#F4F4F4] border border-[#E0E0E0] text-[#111] hover:bg-[#EAEAEA]'
  const cancelBtn = isNight
    ? 'text-[#A0A0A0] hover:text-white'
    : 'text-[#555] hover:text-[#111]'

  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i)

  return (
    <div className={`${bg} min-h-screen transition-colors duration-300`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[118px] pb-8">

        {/* Header + CTAs */}
        <div className="py-8 flex flex-col gap-4">
          <div>
            <p className={`text-[13px] font-bold uppercase leading-[1.4] mb-1 ${text}`} style={{ fontFamily: "'Inter', sans-serif" }}>
              {t('contact_overline')}
            </p>
            <h1
              className={`text-[36px] lg:text-[52px] uppercase leading-[1.0] ${text}`}
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 500 }}
            >
              {t('contact')}
            </h1>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a
              href="tel:0558434327"
              className={`h-11 px-5 rounded-[4px] text-[13px] uppercase tracking-[0.26px] flex items-center gap-2 shrink-0 ${btnPrimary}`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              📞 {t('appeler_bar')}
            </a>
            <a
              href="https://www.instagram.com/rockfoodhossegor/"
              target="_blank"
              rel="noreferrer"
              className={`h-11 px-5 rounded-[4px] text-[13px] uppercase tracking-[0.26px] flex items-center gap-2 ${btnSecondary}`}
              style={{ fontFamily: "'Inter', sans-serif", borderWidth: isNight ? 1.5 : 1 }}
            >
              <IconInstagram color={isNight ? '#FF007A' : '#111'} size={16} />
              INSTAGRAM
            </a>
          </div>
        </div>

        {/* ─── Two-column desktop grid: info left / map right ──────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left column: info box + FAQ */}
          <div className="flex flex-col gap-6">

            {/* Info box */}
            <div className={`rounded-2xl border ${cardBg}`}>
              <div className="flex flex-col px-5 py-3">
                <div className="flex items-center gap-3 py-3 border-b border-inherit">
                  <IconPin color={iconColor} size={22} />
                  <p className={`text-[14px] font-bold flex-1 ${text}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                    Place des Landais, 40150 Hossegor
                  </p>
                </div>
                <div className="flex items-center gap-3 py-3 border-b border-inherit">
                  <IconClock color={iconColor} size={22} />
                  <div className="flex-1">
                    <p className={`text-[14px] leading-[1.5] ${text}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                      {t('horaires_detail')}
                    </p>
                    <p className={`text-[12px] mt-0.5 ${textSub}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                      7j/7 · 10h00 — 02h00
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-3">
                  <IconMap color={iconColor} size={22} />
                  <p className={`text-[13px] leading-[1.4] flex-1 ${textSub}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                    {t('parking_tip')}
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="flex flex-col gap-3">
              <h2
                className={`text-[22px] uppercase leading-[1.1] ${text}`}
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 500 }}
              >
                {t('faq_title')}
              </h2>
              {FAQ_ITEMS.map((item, i) => (
                <div key={i} className={`rounded-[8px] border overflow-hidden ${faqBg}`}>
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between p-4 gap-3 text-left"
                  >
                    <p className={`text-[14px] font-bold leading-[1.4] flex-1 ${text}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                      {lang === 'en' ? item.qEn : item.qFr}
                    </p>
                    <span
                      className="shrink-0 transition-transform duration-300"
                      style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      <IconChevronDown color={chevronColor} size={20} />
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: openFaq === i ? 200 : 0 }}
                  >
                    <p className={`px-4 pb-4 text-[14px] leading-[1.4] ${textSub}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                      {lang === 'en' ? item.aEn : item.aFr}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: map */}
          <div className="sticky top-[130px]">
            <button
              onClick={() => setMapsModal(true)}
              className="w-full cursor-pointer group relative rounded-2xl overflow-hidden h-[280px] lg:h-[450px] border border-[#5c5c5c] focus:outline-none"
            >
              <img src={imgMapContainer} alt="Carte Hossegor" className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className={`px-4 py-2 rounded-full text-[13px] font-semibold flex items-center gap-2 ${isNight ? 'bg-[#1E1E24] border border-[rgba(255,0,122,0.6)] text-white shadow-[0_0_12px_rgba(255,0,122,0.3)]' : 'bg-white/90 border border-white text-[#111]'}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {t('map_badge')}
                </span>
              </div>
            </button>
          </div>

        </div>

      </div>

      <Footer />

      {/* Maps modal / action sheet */}
      <div
        className={`fixed inset-0 z-[9999] flex items-end justify-center transition-all duration-300 ${mapsModal ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={() => setMapsModal(false)} />
        <div
          className={`relative w-full max-w-2xl rounded-t-[16px] p-6 transition-transform duration-300 ${mapsModal ? 'translate-y-0' : 'translate-y-full'} ${modalSurface}`}
        >
          <p
            className={`text-[18px] uppercase font-bold text-center mb-6 ${text}`}
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
          >
            {t('maps_modal_title')}
          </p>
          <div className="flex flex-col gap-3 mb-4">
            <a
              href={GMAPS}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMapsModal(false)}
              className={`h-14 rounded-[10px] flex items-center justify-center gap-3 text-[14px] font-semibold border transition-all duration-300 ${modalBtn}`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Google Maps
            </a>
            <a
              href={AMAPS}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMapsModal(false)}
              className={`h-14 rounded-[10px] flex items-center justify-center gap-3 text-[14px] font-semibold border transition-all duration-300 ${modalBtn}`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Apple Maps
            </a>
          </div>
          <button
            onClick={() => setMapsModal(false)}
            className={`w-full h-11 text-[14px] font-semibold transition-colors duration-200 ${cancelBtn}`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {t('annuler')}
          </button>
        </div>
      </div>
    </div>
  )
}
