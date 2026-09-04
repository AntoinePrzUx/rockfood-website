import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import { IconMenu, IconSun, IconMoon } from './Icons'
import imgLogo from '../imports/ROCKFOOD_LONDON-2.png'

const HORAIRES_API = 'https://opensheet.elk.sh/16Y_1gEeRKrxkdIKhg8uXVJi6K9WoLX4pwUUhemKKC4Q/Horaires'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SheetRow = Record<string, any>

function useStoreStatus() {
  const [isOpen, setIsOpen] = useState(false)
  const [schedule, setSchedule] = useState<SheetRow[] | 'ERROR' | null>(null)

  // 1. Récupérer les horaires depuis Google Sheets au chargement
  useEffect(() => {
    fetch(HORAIRES_API)
      .then(r => r.json())
      .then(data => setSchedule(data))
      .catch(() => setSchedule('ERROR'))
  }, [])

  // 2. Vérifier l'heure exacte chaque minute
  useEffect(() => {
    const check = () => {
      try {
        const parts = new Intl.DateTimeFormat('fr-FR', {
          timeZone: 'Europe/Paris',
          hour: 'numeric',
          minute: 'numeric',
          weekday: 'long',
          hourCycle: 'h23'
        }).formatToParts(new Date())

        let weekday = ''
        let hour = 0
        let minute = 0

        for (const part of parts) {
          if (part.type === 'weekday') weekday = part.value.toLowerCase()
          if (part.type === 'hour') hour = parseInt(part.value, 10)
          if (part.type === 'minute') minute = parseInt(part.value, 10)
        }

        // Si on est avant 6h du matin, on compte encore pour la "journée métier" de la veille
        let businessWeekday = weekday
        let businessHour = hour
        if (hour < 6) {
          businessHour += 24
          const days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
          const currentIdx = days.indexOf(weekday)
          businessWeekday = currentIdx === 0 ? 'samedi' : days[currentIdx - 1]
        }

        const currentTime = businessHour + (minute / 60)

        // FALLBACK : Si Google Sheet ne répond pas, on applique 10h - 02h du matin
        if (schedule === 'ERROR' || !schedule) {
          setIsOpen(businessHour >= 10 && businessHour < 26)
          return
        }

        // Chercher la règle du jour dans le Google Sheet
        const todayRule = schedule.find(r => r.Jour?.trim().toLowerCase() === businessWeekday)
        
        // Si la case Ouverture contient "Fermé"
        if (!todayRule || !todayRule.Ouverture || todayRule.Ouverture.toUpperCase().includes('FERM')) {
          setIsOpen(false)
          return
        }

        // Convertir "10:00" ou "10h30" en nombre décimal (10.5)
        const parseTime = (tString: string) => {
          const p = String(tString).replace(/[hH]/, ':').split(':')
          const h = parseInt(p[0], 10) || 0
          const m = parseInt(p[1], 10) || 0
          return h + (m / 60)
        }

        const openTime = parseTime(todayRule.Ouverture)
        let closeTime = parseTime(todayRule.Fermeture)
        
        // Si ça ferme après minuit (ex: 02:00), on ajoute 24h pour le calcul
        if (closeTime <= openTime) {
          closeTime += 24 
        }

        setIsOpen(currentTime >= openTime && currentTime < closeTime)

      } catch (e) {
        // ULTIMATE FALLBACK en cas d'erreur navigateur
        const h = new Date().getHours()
        setIsOpen(h >= 10 || h < 2)
      }
    }

    check() // Vérification immédiate
    const id = setInterval(check, 60_000) // Puis toutes les minutes
    return () => clearInterval(id)
  }, [schedule])

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
  const isOpen = useStoreStatus()

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
            <span className={`inline-block w-2 h-2 rounded-full shrink-0 ${isOpen ? 'bg-[#00FF66] live-dot animate-pulse' : 'bg-[#FF3B30]'}`} />
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
