import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { IconArrowUp } from './Icons'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const { theme } = useTheme()
  const isNight = theme === 'night'

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  const bg = isNight ? 'bg-[#1E1E24] border-[#FF007A] shadow-[0_0_12px_rgba(255,0,122,0.25)]' : 'bg-[#0A0A0B] border-[#5c5c5c] shadow-[0_4px_16px_rgba(0,0,0,0.25)]'
  const arrowColor = isNight ? '#FF007A' : '#fff'

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-[90px] right-4 z-[9999] w-11 h-11 rounded-full border flex items-center justify-center ${bg} transition-all duration-300`}
      aria-label="Retour en haut"
    >
      <IconArrowUp color={arrowColor} size={20} />
    </button>
  )
}
