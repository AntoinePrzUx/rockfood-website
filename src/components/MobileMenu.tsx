import { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import { IconX, IconInstagram, IconFacebook, IconSpotify } from './Icons'
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

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  onNavigate: (page: Page) => void
}

const NAV_KEYS: { key: string; page: Page }[] = [
  { key: 'accueil', page: 'landing' },
  { key: 'la_carte', page: 'carte' },
  { key: 'adn', page: 'adn' },
  { key: 'contact', page: 'contact' },
  { key: 'evenements', page: 'events' },
]

export default function MobileMenu({ open, onClose, onNavigate }: MobileMenuProps) {
  const { theme } = useTheme()
  const { t } = useLanguage()
  const isNight = theme === 'night'
  const isVenueOpen = useIsOpen()

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const bg = isNight ? 'bg-[#0A0A0B]' : 'bg-[#F9F9F6]'
  const textColor = isNight ? 'text-white' : 'text-black'
  const iconColor = isNight ? '#fff' : '#111'

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      {/* Drawer */}
      <div
        className={`fixed inset-0 z-50 ${bg} flex flex-col transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 h-14">
          <button
            onClick={() => { onNavigate('landing'); onClose() }}
            className="cursor-pointer flex items-center shrink-0 max-w-[110px] mr-5"
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
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center shrink-0"
            aria-label="Fermer"
          >
            <IconX color={iconColor} size={24} />
          </button>
        </div>

        {/* Nav links */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          {NAV_KEYS.map(({ key, page }) => (
            <button
              key={page}
              onClick={() => { onNavigate(page); onClose() }}
              className={`text-[20px] uppercase leading-none ${textColor} cursor-pointer`}
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 500 }}
            >
              {t(key)}
            </button>
          ))}
        </div>

        {/* Bottom: live status + socials */}
        <div className="flex flex-col items-center gap-8 pb-10">
          <div className="flex items-center gap-2">
            <span className={`inline-block w-2 h-2 rounded-full ${isVenueOpen ? 'bg-[#00FF66] live-dot' : 'bg-[#FF3B30]'}`} />
            <span
              className={`text-[10px] uppercase ${isVenueOpen ? textColor : 'text-[#A0A0A0]'}`}
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 500 }}
            >
              {isVenueOpen ? t('ouvert') : t('ferme')}
            </span>
          </div>
          <div className="flex items-center gap-10">
            <a href="https://www.instagram.com/rockfoodhossegor/" target="_blank" rel="noreferrer">
              <IconInstagram color={iconColor} size={40} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100066395812885" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <IconFacebook color={iconColor} size={40} />
            </a>
            <a href="#" aria-label="Spotify">
              <IconSpotify color={iconColor} size={40} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
