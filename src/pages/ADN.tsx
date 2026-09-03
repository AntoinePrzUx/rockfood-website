import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import Footer from '../components/Footer'
import { IconPlay } from '../components/Icons'
import imgHero from '../imports/AdnDay/4e6d95808eb0a4831dbbf04d923a2780e4638e96.png'
import imgPhoto1 from '../imports/AdnDay/75dfd56a73ee02bd9f2bc46d4fc2af40c8c6cb5e.png'
import imgPhoto2 from '../imports/AdnDay/9e0dbdef13a88ede7a71b57b9ad77270cc4b86a8.png'
import imgLogoBadge from '../imports/AdnDay/0e4e19e0e18de5fc2ef21befef5fa15993a2b572.png'
import imgLogo from '../imports/ROCKFOOD_LONDON-2.png'

export default function ADN() {
  const { theme } = useTheme()
  const { lang, t } = useLanguage()
  const isNight = theme === 'night'

  const bg = isNight ? 'bg-[#0A0A0B]' : 'bg-[#F9F9F6]'
  const text = isNight ? 'text-white' : 'text-black'
  const textSub = isNight ? 'text-[#A0A0A0]' : 'text-[#555]'
  const cardBg = isNight ? 'bg-[#1E1E24] border-[#2D2D2D] neon-card' : 'bg-white border-[#111]'

  const logoStyle: React.CSSProperties = isNight
    ? { filter: 'invert(1)', mixBlendMode: 'screen', verticalAlign: 'middle' }
    : { mixBlendMode: 'multiply', verticalAlign: 'middle' }
  const adnH1 = lang === 'en'
    ? <span className="inline-flex items-center gap-3"><span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}>THE DNA OF</span><img src={imgLogo} alt="Rockfood" className="h-[38px] w-auto object-contain block" style={logoStyle} /></span>
    : <span className="inline-flex items-center gap-3"><span>{"L'ADN"}</span><img src={imgLogo} alt="Rockfood" className="h-[38px] w-auto object-contain block" style={logoStyle} /></span>

  return (
    <div className={`${bg} min-h-screen transition-colors duration-300`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[118px] pb-8">

        {/* ─── Hero section ─────────────────────────────────────────────────── */}
        <div className="py-8 flex flex-col gap-6">
          <div>
            <p className={`text-[13px] font-bold uppercase leading-[1.4] mb-2 ${text}`} style={{ fontFamily: "'Inter', sans-serif" }}>
              {t('adn_overline')}
            </p>
            <h1
              className={`text-[42px] lg:text-[64px] uppercase leading-none ${text}`}
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
            >
              {adnH1}
            </h1>
          </div>
          <div className="rounded-2xl overflow-hidden h-[280px] lg:h-[420px]">
            <img src={imgHero} alt="RockFood Hossegor depuis 1990" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* ─── Histoire ─────────────────────────────────────────────────────── */}
        <div className="py-6 flex flex-col gap-12">
          <h2
            className={`text-[24px] lg:text-[32px] uppercase leading-[1.1] ${text}`}
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 500 }}
          >
            {t('adn_histoire_title')}
          </h2>

          {/* Story block 1 — image left, text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="rounded-2xl overflow-hidden w-full h-[260px] lg:h-[380px]">
              <img src={imgPhoto1} alt="Rock Food histoire" className="w-full h-full object-cover" />
            </div>
            <p className={`text-[15px] leading-[1.7] ${isNight ? 'text-white' : 'text-[#333]'}`} style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
              {t('adn_p1')}
            </p>
          </div>

          {/* Story block 2 — text left, image right (reversed on desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <p className={`text-[15px] leading-[1.7] lg:order-first order-last ${isNight ? 'text-white' : 'text-[#333]'}`} style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
              {t('adn_p2')}
            </p>
            <div className="rounded-2xl overflow-hidden w-full h-[260px] lg:h-[380px] lg:order-last order-first">
              <img src={imgPhoto2} alt="Rock Food ambiance" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* ─── Spotify card ─────────────────────────────────────────────────── */}
        <div className="flex justify-center w-full my-8">
        <div className="w-full max-w-xl">
          <div className={`rounded-2xl border flex gap-5 p-5 items-center ${cardBg}`}>
            <div className="shrink-0 w-[100px] h-[100px] rounded-[8px] overflow-hidden bg-white flex items-center justify-center">
              <img src={imgLogoBadge} alt="RockFood logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div className="flex flex-col items-start gap-1">
                <img
                  src={imgLogo}
                  alt="Rockfood"
                  className="h-[22px] w-auto object-contain block"
                  style={isNight
                    ? { filter: 'invert(1)', mixBlendMode: 'screen' }
                    : { mixBlendMode: 'multiply' }}
                />
                <span
                  className={`text-[13px] uppercase font-bold ${text}`}
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
                >
                  SPOTIFY SELECTION
                </span>
              </div>
              <p className={`text-[12px] leading-[1.4] ${textSub}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                {t('spotify_tracks_label')}
              </p>
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <IconPlay color={isNight ? '#FF007A' : '#1DB954'} size={40} />
              </a>
            </div>
          </div>
        </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}
