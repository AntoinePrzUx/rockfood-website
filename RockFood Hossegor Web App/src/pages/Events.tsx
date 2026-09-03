import { useState, useMemo } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import { useFetch } from '../hooks/useFetch'
import Footer from '../components/Footer'

const EVENTS_API = 'https://opensheet.elk.sh/16Y_1gEeRKrxkdIKhg8uXVJi6K9WoLX4pwUUhemKKC4Q/Flux_Figma'

const PLACEHOLDER_BG = 'linear-gradient(160deg, #1a1a2e 0%, #0d0d14 60%, #1a0a0a 100%)'

// Raw shape coming from the sheet — all fields may arrive under various key names
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RawEvent = Record<string, any>

interface NormalizedEvent {
  title: string
  category: string
  dateTime: string
  imageUrl: string | null
  description: string | null
}

function resolveEvent(raw: RawEvent): NormalizedEvent {
  // Sheet column headers have inconsistent surrounding spaces — build a trimmed lookup map
  const r: RawEvent = {}
  for (const k of Object.keys(raw)) r[k.trim()] = typeof raw[k] === 'string' ? raw[k].trim() : raw[k]

  const title = r["Titre de l’événement"] || r["Titre de l'événement"] || r.title || r.Titre || ''
  const category = r['Catégorie'] || r.category || r.Categorie || 'ÉVÉNEMENT'
  const dateTime = r['Date & Heure'] || r['Date & Heure texte'] || r.dateTime || r.date_time || ''
  const imageUrl = r['image_url_figma'] || r.imageUrl || r.image_url || null
  const description = r['Description'] || r.description || null

  return { title, category, dateTime, imageUrl, description }
}

// ─── Skeleton primitives ──────────────────────────────────────────────────────

function Pulse({ className }: { className: string }) {
  return <div className={`animate-pulse rounded-[6px] bg-[#2D2D2D] ${className}`} />
}

function HeroSkeleton() {
  return <Pulse className="w-full h-[300px] lg:h-[480px] rounded-2xl" />
}

function AgendaSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} className="rounded-2xl border border-[#2D2D2D] bg-[#1E1E24] overflow-hidden">
          <Pulse className="w-full h-[180px] rounded-none" />
          <div className="p-4 flex flex-col gap-2">
            <Pulse className="h-4 w-3/4" />
            <Pulse className="h-3 w-1/2" />
            <Pulse className="h-3 w-full" />
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Events() {
  const { theme } = useTheme()
  const { lang, t } = useLanguage()
  const isNight = theme === 'night'
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const { data, loading, error } = useFetch<RawEvent[]>(EVENTS_API)

  const upcoming = useMemo<NormalizedEvent[]>(() => {
    if (!data) return []
    return data.map(resolveEvent).filter(e => e.title)
  }, [data])

  const categories = useMemo(() => {
    const seen = new Set<string>()
    for (const e of upcoming) if (e.category) seen.add(e.category)
    return Array.from(seen)
  }, [upcoming])

  const filtered = activeFilter
    ? upcoming.filter(e => e.category === activeFilter)
    : upcoming

  const hero = upcoming[0] ?? null

  // Style tokens
  const bg = isNight ? 'bg-[#0A0A0B]' : 'bg-[#F9F9F6]'
  const text = isNight ? 'text-white' : 'text-black'
  const textSub = isNight ? 'text-[#A0A0A0]' : 'text-[#555]'
  const cardBg = isNight ? 'bg-[#1E1E24] border-[#2D2D2D] neon-card' : 'bg-white border-[#E0E0E0]'
  const accent = isNight ? '#FF007A' : '#00B3C8'
  const accentBg = isNight ? 'bg-[#FF007A] neon-badge' : 'bg-[#111]'
  const accentText = isNight ? 'text-[#FF007A]' : 'text-[#00B3C8]'
  const pillActive = isNight ? 'bg-[#FF007A] border-[#FF007A] text-white' : 'bg-[#111] border-[#111] text-white'
  const pillInactive = isNight ? 'bg-[#1E1E24] border-[#2D2D2D] text-[#A0A0A0]' : 'bg-white border-[#E0E0E0] text-[#555]'

  const categoryLabel = (cat: string) => {
    if (cat === 'ÉVÉNEMENT' && lang === 'en') return 'EVENT'
    return cat
  }

  return (
    <div className={`${bg} min-h-screen transition-colors duration-300`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[118px] pb-8">

        {/* ─── Hero card ─────────────────────────────────────────────────── */}
        <div className="py-6">
          {loading ? (
            <HeroSkeleton />
          ) : error ? (
            <div className={`rounded-2xl h-[240px] flex items-center justify-center border ${cardBg}`}>
              <p className={`text-[13px] ${textSub}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                {lang === 'en' ? 'Unable to load events.' : 'Impossible de charger les événements.'}
              </p>
            </div>
          ) : hero ? (
            <div className="relative rounded-2xl overflow-hidden h-[300px] lg:h-[480px] bg-[#111]">
              {hero.imageUrl ? (
                <img
                  src={hero.imageUrl}
                  alt={hero.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
              ) : (
                <div className="absolute inset-0" style={{ background: PLACEHOLDER_BG }} />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6 lg:p-10 gap-1">
                <span
                  className={`px-3 py-1 rounded-full text-[11px] text-white uppercase tracking-[0.06em] mb-1 ${accentBg}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {categoryLabel(hero.category)}
                </span>
                <p
                  className="text-[36px] lg:text-[56px] text-white uppercase leading-none"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900 }}
                >
                  {hero.title}
                </p>
                {hero.dateTime && (
                  <p
                    className="text-[14px] lg:text-[16px] font-bold leading-[1.4]"
                    style={{ fontFamily: "'Inter', sans-serif", color: accent }}
                  >
                    {hero.dateTime}
                  </p>
                )}
                {hero.description && (
                  <p
                    className="text-[13px] text-white/65 leading-[1.5] line-clamp-2 max-w-xl"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {hero.description}
                  </p>
                )}
                <button
                  className={`mt-3 h-9 px-6 rounded-full text-[12px] uppercase tracking-[0.08em] font-bold text-white ${accentBg}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {lang === 'en' ? 'Reserve' : 'Réserver'}
                </button>
              </div>
            </div>
          ) : (
            <div className={`rounded-2xl h-[120px] flex items-center justify-center border ${cardBg}`}>
              <p className={`text-[13px] ${textSub}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                {lang === 'en' ? 'No upcoming events.' : 'Aucun événement à venir.'}
              </p>
            </div>
          )}
        </div>

        {/* ─── Category filters ───────────────────────────────────────────── */}
        {!loading && !error && categories.length > 0 && (
          <div className="py-3 flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveFilter(null)}
              className={`shrink-0 h-8 px-4 rounded-full border text-[12px] uppercase tracking-[0.04em] transition-all ${!activeFilter ? pillActive : pillInactive}`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t('filter_tous')}
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(activeFilter === cat ? null : cat)}
                className={`shrink-0 h-8 px-4 rounded-full border text-[12px] uppercase tracking-[0.04em] transition-all ${activeFilter === cat ? pillActive : pillInactive}`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {categoryLabel(cat)}
              </button>
            ))}
          </div>
        )}

        {/* ─── Agenda grid ────────────────────────────────────────────────── */}
        <div className="py-4 pb-6">
          {!loading && !error && upcoming.length > 0 && (
            <h2
              className={`text-[24px] lg:text-[32px] uppercase leading-[1.1] mb-6 ${text}`}
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 500 }}
            >
              {t('agenda')}
            </h2>
          )}

          {loading ? (
            <AgendaSkeleton />
          ) : error ? null : filtered.length === 0 ? (
            <p className={`text-[13px] py-4 ${textSub}`} style={{ fontFamily: "'Inter', sans-serif" }}>
              {lang === 'en' ? 'No events match this filter.' : 'Aucun événement pour ce filtre.'}
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((ev, i) => (
                <div
                  key={`${ev.title}-${i}`}
                  className={`rounded-2xl border overflow-hidden flex flex-col ${cardBg}`}
                >
                  {/* Image */}
                  <div className="relative w-full h-[180px] bg-[#111] shrink-0">
                    {ev.imageUrl ? (
                      <img
                        src={ev.imageUrl}
                        alt={ev.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={e => {
                          const img = e.target as HTMLImageElement
                          img.style.display = 'none'
                          if (img.parentElement) img.parentElement.style.background = PLACEHOLDER_BG
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0" style={{ background: PLACEHOLDER_BG }} />
                    )}
                    {ev.category && (
                      <span
                        className={`absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10px] uppercase text-white ${accentBg}`}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {categoryLabel(ev.category)}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 flex flex-col justify-between gap-2">
                    <div>
                      <p
                        className="text-[16px] uppercase leading-[1.3] font-black"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif", color: isNight ? '#fff' : '#111' }}
                      >
                        {ev.title}
                      </p>
                      {ev.dateTime && (
                        <p
                          className={`text-[12px] font-bold leading-[1.4] mt-0.5 ${accentText}`}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {ev.dateTime}
                        </p>
                      )}
                    </div>
                    {ev.description && (
                      <p
                        className={`text-[12px] leading-[1.5] line-clamp-3 ${textSub}`}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {ev.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      <Footer />
    </div>
  )
}
