import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import Footer from '../components/Footer'
import imgHero from '../imports/AdnDay/4e6d95808eb0a4831dbbf04d923a2780e4638e96.png'
import imgPhoto1 from '../imports/AdnDay/75dfd56a73ee02bd9f2bc46d4fc2af40c8c6cb5e.png'
import imgPhoto2 from '../imports/AdnDay/9e0dbdef13a88ede7a71b57b9ad77270cc4b86a8.png'
import imgLogo from '../imports/ROCKFOOD_LONDON-2.png'

// ─── API GOOGLE SHEETS GALERIE ────────────────────────────────────────────────
const GALLERY_API = 'https://opensheet.elk.sh/16Y_1gEeRKrxkdIKhg8uXVJi6K9WoLX4pwUUhemKKC4Q/Galerie'

interface ApiGalleryItem {
  image?: string
  url?: string
  caption?: string
  alt?: string
  type?: string // 'video' ou undefined/vide pour une image
}

function formatImageUrl(url?: string): string {
  if (!url) return ''
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/)
  if (match && match[1]) {
    return `https://lh3.googleusercontent.com/d/${match[1]}`
  }
  return url
}

// Fonction pour extraire l'URL d'intégration (embed) pour une vidéo
function getVideoEmbedUrl(url: string): string {
  // YouTube
  const ytMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)
  if (ytMatch && ytMatch[1]) {
    return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1`
  }
  // Google Drive
  const driveMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/)
  if (driveMatch && driveMatch[1]) {
    return `https://drive.google.com/file/d/${driveMatch[1]}/preview`
  }
  return url
}

// Fonction pour extraire la miniature (thumbnail) d'une vidéo
function getVideoThumbnail(url: string): string {
  // YouTube : utilise l'URL de la miniature haute qualité
  const ytMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)
  if (ytMatch && ytMatch[1]) {
    return `https://img.youtube.com/vi/${ytMatch[1]}/hqdefault.jpg`
  }
  // Google Drive : utilise le formatImageUrl existant qui génère une miniature
  return formatImageUrl(url)
}

// Icône Play pour indiquer les vidéos dans la galerie
const PlayIcon = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="rgba(0,0,0,0.6)" />
    <path d="M9.5 8L16.5 12L9.5 16V8Z" fill="white" />
  </svg>
)


export default function ADN() {
  const { theme } = useTheme()
  const { lang, t } = useLanguage()
  const isNight = theme === 'night'

  // ─── State Galerie & Lightbox ──────────────────────────────────────────────
  const [galleryItems, setGalleryItems] = useState<ApiGalleryItem[]>([])
  const [galleryLoading, setGalleryLoading] = useState(true)
  const [visibleCount, setVisibleCount] = useState(12)
  const [selectedItem, setSelectedItem] = useState<{ url: string; caption?: string; type: string } | null>(null)

  // Ajustement du nombre initial selon mobile (6) ou PC (12)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      setVisibleCount(6)
    }
  }, [])

  useEffect(() => {
    let cancelled = false
    setGalleryLoading(true)
    fetch(GALLERY_API)
      .then(r => { if (!r.ok) throw new Error(); return r.json() })
      .then((d: ApiGalleryItem[]) => {
        if (!cancelled) {
          const valid = (d || []).filter(item => Boolean(item.image || item.url))
          setGalleryItems(valid)
          setGalleryLoading(false)
        }
      })
      .catch(() => {
        if (!cancelled) setGalleryLoading(false)
      })
    return () => { cancelled = true }
  }, [])

  // Fermer l'aperçu avec la touche Échap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleShowMore = () => {
    const step = window.innerWidth < 640 ? 6 : 12
    setVisibleCount(prev => prev + step)
  }

  const handleShowLess = () => {
    const initial = window.innerWidth < 640 ? 6 : 12
    setVisibleCount(initial)
  }

  const bg = isNight ? 'bg-[#0A0A0B]' : 'bg-[#F9F9F6]'
  const text = isNight ? 'text-white' : 'text-black'
  const textSub = isNight ? 'text-[#A0A0A0]' : 'text-[#555]'
  const skeletonBg = isNight ? 'bg-[#1E1E24]' : 'bg-[#E8E8E4]'

  const logoStyle: React.CSSProperties = isNight
    ? { filter: 'invert(1)', mixBlendMode: 'screen', verticalAlign: 'middle' }
    : { mixBlendMode: 'multiply', verticalAlign: 'middle' }
  const adnH1 = lang === 'en'
    ? <span className="inline-flex items-center gap-3"><span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}>THE DNA OF</span><img src={imgLogo} alt="Rockfood" className="h-[38px] w-auto object-contain block" style={logoStyle} /></span>
    : <span className="inline-flex items-center gap-3"><span>{"L'ADN"}</span><img src={imgLogo} alt="Rockfood" className="h-[38px] w-auto object-contain block" style={logoStyle} /></span>

  const initialLimit = typeof window !== 'undefined' && window.innerWidth < 640 ? 6 : 12

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

          {/* Story block 2 — text left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <p className={`text-[15px] leading-[1.7] lg:order-first order-last ${isNight ? 'text-white' : 'text-[#333]'}`} style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
              {t('adn_p2')}
            </p>
            <div className="rounded-2xl overflow-hidden w-full h-[260px] lg:h-[380px] lg:order-last order-first">
              <img src={imgPhoto2} alt="Rock Food ambiance" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* ─── Spotify Player habillé aux couleurs de la charte ─── */}
        <div className="flex justify-center w-full my-8">
          <div 
            className={`w-full max-w-xl rounded-2xl p-1 transition-all ${
              isNight 
                ? 'bg-[#1E1E24] border border-[#FF007A]/30 shadow-[0_0_20px_rgba(255,0,122,0.15)]' 
                : 'bg-white border border-black/10 shadow-md'
            }`}
          >
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/2p11TD1Whh2682DId20ciN?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen={false}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Rock Food Spotify Playlist"
            />
          </div>
        </div>

        {/* ─── Galerie Photo dynamique ───────────────────────────────────────── */}
        <div className="py-10 flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h2
              className={`text-[24px] lg:text-[32px] uppercase leading-[1.1] ${text}`}
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
            >
              {lang === 'en' ? 'GALLERY' : 'GALERIE'}
            </h2>
            <p className={`text-[13px] ${textSub}`} style={{ fontFamily: "'Inter', sans-serif" }}>
              {lang === 'en' ? 'Moments captured at Rock Food' : 'Les instants capturés au Rock Food'}
            </p>
          </div>

          {galleryLoading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className={`aspect-square rounded-2xl animate-pulse ${skeletonBg}`} />
              ))}
            </div>
          ) : galleryItems.length > 0 ? (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {galleryItems.slice(0, visibleCount).map((item, index) => {
                  const rawUrl = item.image || item.url || ''
                  const caption = item.caption || item.alt || ''
                  const isVideo = item.type?.toLowerCase() === 'video'
                  
                  // Déterminer la source de la miniature (image formatée ou thumbnail de vidéo)
                  const thumbSrc = isVideo ? getVideoThumbnail(rawUrl) : formatImageUrl(rawUrl)
                  
                  return (
                    <div
                      key={index}
                      onClick={() => setSelectedItem({ url: rawUrl, caption, type: isVideo ? 'video' : 'image' })}
                      className="group relative aspect-square rounded-2xl overflow-hidden bg-black/5 border border-black/10 dark:border-white/10 cursor-pointer"
                    >
                      <img
                        src={thumbSrc}
                        alt={caption || `Rock Food media ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      
                      {/* Affichage de l'icône Play si c'est une vidéo */}
                      {isVideo && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-300 group-hover:scale-110">
                          <PlayIcon />
                        </div>
                      )}

                      {caption && (
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3">
                          <p className="text-white text-[12px] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {caption}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Bouton Voir plus / Voir moins */}
              {galleryItems.length > initialLimit && (
                <div className="flex justify-center mt-2">
                  {visibleCount < galleryItems.length ? (
                    <button
                      onClick={handleShowMore}
                      className={`h-11 px-8 rounded-full border text-[12px] uppercase tracking-[0.05em] font-bold transition-all ${
                        isNight
                          ? 'bg-[#1E1E24] border-[#2D2D2D] text-white hover:bg-[#FF007A] hover:border-[#FF007A]'
                          : 'bg-white border-[#111] text-black hover:bg-[#111] hover:text-white'
                      }`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {lang === 'en' ? 'Show more' : 'Voir plus'}
                    </button>
                  ) : (
                    <button
                      onClick={handleShowLess}
                      className={`h-11 px-8 rounded-full border text-[12px] uppercase tracking-[0.05em] font-bold transition-all ${
                        isNight
                          ? 'bg-[#1E1E24] border-[#2D2D2D] text-white hover:bg-[#FF007A] hover:border-[#FF007A]'
                          : 'bg-white border-[#111] text-black hover:bg-[#111] hover:text-white'
                      }`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {lang === 'en' ? 'Show less' : 'Voir moins'}
                    </button>
                  )}
                </div>
              )}
            </>
          ) : null}
        </div>

      </div>

      {/* ─── Modal Aperçu Media (Lightbox pour Photos et Vidéos) ────────────── */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedItem(null)}
        >
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center text-xl transition-all z-10"
            aria-label="Fermer"
          >
            ✕
          </button>

          <div
            className="relative w-full max-w-5xl flex flex-col items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            {selectedItem.type === 'video' ? (
              // Lecteur vidéo (Iframe pour YouTube ou Google Drive)
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
                <iframe
                  src={getVideoEmbedUrl(selectedItem.url)}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              // Affichage classique d'une image
              <img
                src={formatImageUrl(selectedItem.url)}
                alt={selectedItem.caption || 'Aperçu'}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
            )}
            
            {selectedItem.caption && (
              <p className="mt-4 text-white/90 text-[14px] text-center font-medium bg-black/60 px-4 py-1.5 rounded-full" style={{ fontFamily: "'Inter', sans-serif" }}>
                {selectedItem.caption}
              </p>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
