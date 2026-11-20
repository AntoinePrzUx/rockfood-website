import { useState, useEffect, useMemo } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import { useFetch } from '../hooks/useFetch'
import Footer from '../components/Footer'
import imgHeroDay from '../imports/LandingPageDay/ff2260e37c3d2b6172ecfb935fae92ec9ce3f982.png'
import imgLogo from '../imports/ROCKFOOD_LONDON-2.png'
import imgHeroNight from '../imports/LandingPageNight/47d76d21e4bdf74c3e2dc0065a176be500964705.png'

const EVENTS_API = 'https://opensheet.elk.sh/16Y_1gEeRKrxkdIKhg8uXVJi6K9WoLX4pwUUhemKKC4Q/Flux_Figma'
const GALLERY_API = 'https://opensheet.elk.sh/16Y_1gEeRKrxkdIKhg8uXVJi6K9WoLX4pwUUhemKKC4Q/Galerie'

const PLACEHOLDER_BG = 'linear-gradient(160deg, #1a1a2e 0%, #0d0d14 60%, #1a0a0a 100%)'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RawEvent = Record<string, any>

interface EventItem {
  title: string
  category: string
  dateTime: string
  imageUrl: string | null
}

interface ApiGalleryItem {
  image?: string
  url?: string
  caption?: string
  alt?: string
  type?: string
}

function formatImageUrl(url?: string): string {
  if (!url) return ''
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/)
  if (match && match[1]) {
    return `https://lh3.googleusercontent.com/d/${match[1]}`
  }
  return url
}

function getVideoEmbedUrl(url: string): string {
  // YouTube : lecture automatique muette en boucle pour l'aperçu
  const ytMatch = url.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/)
  if (ytMatch && ytMatch[1]) {
    return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&mute=1&loop=1&playlist=${ytMatch[1]}&controls=0&modestbranding=1&rel=0`
  }
  // Google Drive
  const driveMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/)
  if (driveMatch && driveMatch[1]) {
    return `https://drive.google.com/file/d/${driveMatch[1]}/preview`
  }
  return url
}

function isDirectVideoFile(url: string): boolean {
  return /\.(mp4|webm|mov)(\?.*)?$/i.test(url)
}

function resolveEvent(raw: RawEvent): EventItem {
  const r: RawEvent = {}
  for (const k of Object.keys(raw)) r[k.trim()] = typeof raw[k] === 'string' ? raw[k].trim() : raw[k]

  return {
    title: r["Titre de l'événement"] || r.title || r.Titre || '',
    category: r['Catégorie'] || r.category || r.Categorie || 'ÉVÉNEMENT',
    dateTime: r['Date & Heure'] || r['Date & Heure texte'] || r.dateTime || r.date_time || '',
    imageUrl: r['image_url_figma'] || r.imageUrl || r.image_url || null,
  }
}

type Page = 'landing' | 'carte' | 'adn' | 'contact' | 'events'

interface LandingProps {
  onNavigate: (page: Page) => void
}

export default function Landing({ onNavigate }: LandingProps) {
  const { theme } = useTheme()
  const { lang, t } = useLanguage()
  const isNight = theme === 'night'

  const { data: eventsData, loading: eventsLoading } = useFetch<RawEvent[]>(EVENTS_API)
  const { data: galleryData, loading: galleryLoading } = useFetch<ApiGalleryItem[]>(GALLERY_API)

  const [currentPhotoIdx, setCurrentPhotoIdx] = useState(0)

  const upcomingEvents = useMemo(() => {
    if (!eventsData) return []
    return eventsData.map(resolveEvent).filter(e => e.title).slice(0, 2)
  }, [eventsData])

  const galleryItems = useMemo(() => {
    if (!galleryData) return []
    return galleryData
      .map(item => {
        const rawUrl = (item.image || item.url || '').trim()
        const isVideo = item.type?.toLowerCase().trim() === 'video'
        return {
          rawUrl,
          src: formatImageUrl(rawUrl),
          caption: item.caption || item.alt || '',
          isVideo,
        }
      })
      .filter(item => Boolean(item.rawUrl))
  }, [galleryData])

  const safeIdx = galleryItems.length > 0 ? currentPhotoIdx % galleryItems.length : 0
  const currentMedia = galleryItems[safeIdx]

  // Auto-scroll uniquement sur les photos (se met en pause sur les vidéos)
  useEffect(() => {
    if (galleryItems.length <= 1 || currentMedia?.isVideo) return
    const interval = setInterval(() => {
      setCurrentPhotoIdx(prev => (prev + 1) % galleryItems.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [galleryItems.length, currentMedia?.isVideo])

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentPhotoIdx(prev => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentPhotoIdx(prev => (prev + 1) % galleryItems.length)
  }

  const bg = isNight ? 'bg-[#0A0A0B]' : 'bg-[#F9F9F6]'
  const text = isNight ? 'text-white' : 'text-black'
  const textSub = isNight ? 'text-[#A0A0A0]' : 'text-[#555]'
  const accent = isNight ? '#FF007A' : '#00E5FF'
  const accentBg = isNight ? 'bg-[#FF007A] neon-badge' : 'bg-[#111]'
  const accentGlow = isNight ? 'shadow-[0_0_6px_rgba(255,0,122,0.4)]' : ''
  const cardBg = isNight ? 'bg-[#161620] border-[#2D2D2D]' : 'bg-white border-[#E0E0E0]'
  const skeletonBg = isNight ? 'bg-[#1E1E24]' : 'bg-[#E8E8E4]'
  const heroImg = isNight ? imgHeroNight : imgHeroDay

  return (
    <div className={`${bg} min-h-screen transition-colors duration-300`}>

      {/* ─── Shared responsive container ───────────────────────────────────── */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[118px]">

        {/* Hero */}
        <section className="py-4">
          <div className="relative h-[440px] lg:h-[520px] rounded-[8px] overflow-hidden">
            <img src={heroImg} alt="RockFood Hossegor" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4">
              <div className="flex flex-col items-center gap-5">
                <img
                  src={imgLogo}
                  alt="Rockfood"
                  className="h-14 lg:h-20 w-auto max-w-full object-contain block"
                  style={{ filter: 'invert(1)', mixBlendMode: 'screen' }}
                />
                <p className="text-[13px] lg:text-[15px] text-white uppercase tracking-[0.26px] text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
                  GOOD SPOT • BAD HABITS SINCE 1990
                </p>
                <div className="flex items-center gap-3 flex-wrap justify-center">
                  <button
                    onClick={() => onNavigate('carte')}
                    className={`h-11 px-6 rounded-[4px] text-[13px] text-white uppercase tracking-[0.26px] ${accentBg} ${accentGlow}`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {t('voir_la_carte')}
                  </button>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Rockfood+Plage+Centrale+40150+Soorts-Hossegor"
                    target="_blank"
                    rel="noreferrer"
                    className="h-11 px-6 rounded-[4px] text-[13px] uppercase tracking-[0.26px] border border-white text-white flex items-center"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {t('sy_rendre')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events section */}
        <section className="py-6">
          <div className="mb-4 flex items-center justify-between">
            <h2
              className={`text-[20px] lg:text-[26px] uppercase leading-[1.1] ${text}`}
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 500 }}
            >
              {t('events_section_title')}
            </h2>
            <button
              onClick={() => onNavigate('events')}
              className={`text-[11px] uppercase tracking-[0.05em] underline underline-offset-2 ${isNight ? 'text-[#FF007A]' : 'text-[#555]'}`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t('voir_tous_events')}
            </button>
          </div>

          {eventsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {[0, 1].map(i => (
                <div key={i} className="h-[220px] rounded-[8px] animate-pulse bg-[#1E1E24]" />
              ))}
            </div>
          ) : upcomingEvents.length === 0 ? (
            <p className={`text-[13px] ${textSub}`} style={{ fontFamily: "'Inter', sans-serif" }}>
              {lang === 'en' ? 'No upcoming events.' : 'Aucun événement à venir.'}
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {upcomingEvents.map((ev, i) => (
                <div
                  key={`${ev.title}-${i}`}
                  className={`relative rounded-[8px] overflow-hidden h-[220px] border ${cardBg} cursor-pointer`}
                  onClick={() => onNavigate('events')}
                >
                  {ev.imageUrl ? (
                    <img
                      src={ev.imageUrl}
                      alt={ev.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
                    />
                  ) : (
                    <div className="absolute inset-0" style={{ background: PLACEHOLDER_BG }} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                  <div className="absolute inset-0 flex flex-col items-start justify-between p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-[11px] text-white uppercase tracking-[0.04em] font-bold ${accentBg} ${accentGlow}`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {ev.category}
                    </span>
                    <div>
                      <p
                        className="text-[18px] lg:text-[22px] text-white leading-[1.2] uppercase"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
                      >
                        {ev.title}
                      </p>
                      {ev.dateTime && (
                        <p
                          className="text-[12px] font-bold leading-[1.4] mt-0.5"
                          style={{ fontFamily: "'Inter', sans-serif", color: accent }}
                        >
                          {ev.dateTime}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Galerie Photo & Vidéo Preview Section */}
        <section className="py-6">
          <div className="mb-4 flex items-center justify-between">
            <h2
              className={`text-[20px] lg:text-[26px] uppercase leading-[1.1] ${text}`}
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 500 }}
            >
              {lang === 'en' ? 'GALLERY' : 'GALERIE'}
            </h2>
            <button
              onClick={() => onNavigate('adn')}
              className={`text-[11px] uppercase tracking-[0.05em] underline underline-offset-2 ${isNight ? 'text-[#FF007A]' : 'text-[#555]'}`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {lang === 'en' ? 'SEE FULL GALLERY' : 'DÉCOUVRIR LA GALERIE'}
            </button>
          </div>

          {galleryLoading ? (
            <div className={`w-full h-[280px] sm:h-[400px] lg:h-[460px] rounded-[12px] animate-pulse ${skeletonBg}`} />
          ) : !currentMedia ? null : (
            <div
              onClick={() => {
                if (!currentMedia.isVideo) onNavigate('adn')
              }}
              className={`group relative h-[280px] sm:h-[400px] lg:h-[460px] rounded-[12px] overflow-hidden border border-black/10 dark:border-white/10 bg-black ${
                currentMedia.isVideo ? '' : 'cursor-pointer'
              }`}
            >
              {currentMedia.isVideo ? (
                isDirectVideoFile(currentMedia.rawUrl) ? (
                  <video
                    key={currentMedia.rawUrl}
                    src={currentMedia.rawUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <iframe
                    key={currentMedia.rawUrl}
                    src={getVideoEmbedUrl(currentMedia.rawUrl)}
                    className="w-full h-full border-0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={currentMedia.caption || 'Rock Food Vidéo'}
                  />
                )
              ) : (
                <img
                  key={safeIdx}
                  src={currentMedia.src}
                  alt={currentMedia.caption || 'Rock Food Galerie'}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                />
              )}

              {/* Dégradé en pointer-events-none pour laisser l'accès au lecteur vidéo */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

              {/* Badge Vidéo en haut à gauche */}
              {currentMedia.isVideo && (
                <span
                  className={`pointer-events-none absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white ${accentBg} ${accentGlow}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {lang === 'en' ? 'VIDEO' : 'VIDÉO'}
                </span>
              )}

              {/* Flèches Précédent / Suivant */}
              {galleryItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label={lang === 'en' ? 'Previous' : 'Précédent'}
                    className={`absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/55 hover:bg-black/85 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all ${
                      isNight ? 'hover:border-[#FF007A] hover:text-[#FF007A]' : ''
                    }`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label={lang === 'en' ? 'Next' : 'Suivant'}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/55 hover:bg-black/85 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all ${
                      isNight ? 'hover:border-[#FF007A] hover:text-[#FF007A]' : ''
                    }`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </>
              )}

              {/* Légende et indicateurs de pagination */}
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between gap-4 text-white">
                <p
                  onClick={() => onNavigate('adn')}
                  className="pointer-events-auto cursor-pointer text-[13px] font-medium drop-shadow truncate hover:underline"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {currentMedia.caption || (lang === 'en' ? 'Click to explore full gallery' : 'Cliquer pour explorer la galerie')}
                </p>

                {galleryItems.length > 1 && (
                  <div className="pointer-events-auto flex items-center gap-1.5 shrink-0">
                    {galleryItems.map((item, idx) => (
                      <button
                        key={idx}
                        type="button"
                        aria-label={`Slide ${idx + 1}`}
                        onClick={e => {
                          e.stopPropagation()
                          setCurrentPhotoIdx(idx)
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === safeIdx
                            ? 'w-5 bg-white'
                            : item.isVideo
                              ? 'w-2 bg-white/65 hover:bg-white'
                              : 'w-1.5 bg-white/40 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </section>

      </div>

      {/* Footer spans full width; inner content aligns to max-w-7xl */}
      <Footer />
    </div>
  )
}
