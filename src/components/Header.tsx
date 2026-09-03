import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import { IconMenu, IconSun, IconMoon } from './Icons'
import imgLogo from '../imports/ROCKFOOD_LONDON-2.png'

function useIsOpen() {
  const check = () => { const h = new Date().getHours(); return h >= 10 || h < 2 }
  const [isOpen, setIsOpen] = useState(check)
  useEffect(() => {
    const id = setInterval(() => setIsOpen(check()), 60_000)
    return () => clearInterval(id)
  }, [])
  return isOpen
}

type Page = 'landing' | 'carte' | 'adn' | 'contact' | 'events'

interface HeaderProps {
  onMenuOpen: () => void
  onNavigate: (page: Page) => void
}

export default function Header({ onMenuOpen, onNavigate }: HeaderProps) {
  const { theme, setTheme } = useTheme()
  const { lang, setLang, t } = useLanguage()
  const isNight = theme === 'night'
  const isOpen = useIsOpen()

  const bg = isNight ? 'bg-[#0A0A0B]' : 'bg-[#F9F9F6]'
  const textColor = isNight ? 'text-white' : 'text-black'
  const borderColor = isNight ? 'border-[#2D2D2D]' : 'border-[#E0E0E0]'
  const toggleBg = isNight ? 'bg-[#1E1E24]' : 'bg-[#E8E8E4]'
  const activeColor = isNight ? 'bg-[#FF007A]' : 'bg-[#F9F9F6]'
  const activeGlow = isNight ? 'shadow-[0_0_8px_rgba(255,0,122,0.5)]' : 'shadow-sm'
  const accent = isNight ? '#FF007A' : '#00E5FF'

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 ${bg} border-b ${borderColor} transition-colors duration-300`}>

      {/* Main bar */}
      <div className="w-full max-w-7xl mx-auto h-14 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => onNavigate('landing')}
          className="cursor-pointer flex items-center py-1 shrink-0 max-w-[110px] mr-5"
          aria-label="Rockfood — accueil"
        >
          <img
            src={imgLogo}
            alt="Rockfood"
            className="h-5 w-auto max-w-full object-contain block"
            style={isNight
              ? { filter: 'invert(1)', mixBlendMode: 'screen' }
              : { mixBlendMode: 'multiply' }}
          />
        </button>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          {/* Live status */}
          <div className="flex items-center gap-1.5">
            <span className={`inline-block w-2 h-2 rounded-full shrink-0 ${isOpen ? 'bg-[#00FF66] live-dot' : 'bg-[#FF3B30]'}`} />
            <span
              className={`text-[10px] uppercase leading-none ${isOpen ? textColor : 'text-[#A0A0A0]'}`}
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 500 }}
            >
              {isOpen ? t('ouvert') : t('ferme')}
            </span>
          </div>

          {/* FR / EN pill */}
          <div
            className={`flex items-center h-[26px] rounded-full border text-[10px] overflow-hidden ${isNight ? 'border-[#3D3D3D]' : 'border-[#DADADA]'}`}
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            {(['fr', 'en'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 h-full uppercase tracking-[0.04em] transition-all duration-200 ${lang === l ? 'text-white' : isNight ? 'text-[#666]' : 'text-[#999]'}`}
                style={{ background: lang === l ? accent : 'transparent' }}
              >
                {l}
              </button>
            ))}
          </div>

          <button
            onClick={onMenuOpen}
            className="w-10 h-10 flex items-center justify-center"
            aria-label="Menu"
          >
            <IconMenu color={isNight ? '#fff' : '#33363F'} size={24} />
          </button>
        </div>
      </div>

      {/* Sub-header: theme toggle — compact centered pill */}
      <div className={`w-full border-t ${borderColor} py-2`}>
        <div className="flex justify-center px-4 sm:px-6 lg:px-8">
          <div className={`${toggleBg} h-[40px] rounded-full flex items-center p-1 gap-1 w-fit`}>
            <button
              onClick={() => setTheme('day')}
              className={`h-full px-5 rounded-full flex items-center gap-2 transition-all duration-300 ${theme === 'day' ? `${activeColor} ${activeGlow}` : 'opacity-50'}`}
            >
              <IconSun color={theme === 'day' ? '#FFC700' : '#888'} size={16} />
              <span
                className={`text-[11px] uppercase tracking-[0.04em] ${theme === 'day' ? 'text-[#111]' : 'text-[#888]'}`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t('cote_resto')}
              </span>
            </button>
            <button
              onClick={() => setTheme('night')}
              className={`h-full px-5 rounded-full flex items-center gap-2 transition-all duration-300 ${theme === 'night' ? `${activeColor} ${activeGlow}` : 'opacity-50'}`}
            >
              <IconMoon color={theme === 'night' ? '#fff' : '#888'} size={16} />
              <span
                className={`text-[11px] uppercase tracking-[0.04em] ${theme === 'night' ? 'text-white' : 'text-[#888]'}`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t('cote_nuit')}
              </span>
            </button>
          </div>
        </div>
      </div>

    </header>
  )
}
