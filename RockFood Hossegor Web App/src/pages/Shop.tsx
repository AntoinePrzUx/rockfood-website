import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import Footer from '../components/Footer'
import imgShirt1 from '../imports/LandingPageNight/4adf6f613da00675a5868e3bcf668696e5a8e836.png'
import imgShirt2 from '../imports/LandingPageNight/d0cccce613d317457c28d930f73a2ba4a743a870.png'

const PRODUCTS = [
  { id: 1, img: imgShirt1, name: 'T-Shirt World Cup', price: 35, badge: 'NEW' },
  { id: 2, img: imgShirt2, name: 'T-Shirt Yellow Party', price: 35, badge: null },
  { id: 3, img: imgShirt1, name: 'Cap RockFood', price: 25, badge: 'BESTSELLER' },
  { id: 4, img: imgShirt2, name: 'Hoodie Since 1990', price: 55, badge: null },
  { id: 5, img: imgShirt1, name: 'Tote Bag Surf', price: 18, badge: null },
  { id: 6, img: imgShirt2, name: 'Sticker Pack', price: 8, badge: 'PROMO' },
]

export default function Shop() {
  const { theme } = useTheme()
  const isNight = theme === 'night'
  const [cart, setCart] = useState<number[]>([])

  const bg = isNight ? 'bg-[#0A0A0B]' : 'bg-[#F9F9F6]'
  const text = isNight ? 'text-white' : 'text-black'
  const cardBg = isNight ? 'bg-[#1E1E24] border-[#2D2D2D]' : 'bg-white border-[#E0E0E0]'
  const accentBg = isNight ? 'bg-[#FF007A] shadow-[0_0_6px_rgba(255,0,122,0.4)]' : 'bg-[#111]'
  const accentGlow = isNight ? 'shadow-[0_0_6px_rgba(255,0,122,0.4)]' : ''
  const badgeBg = isNight ? 'bg-[#FF007A]' : 'bg-[#111]'

  const addToCart = (id: number) => setCart(prev => [...prev, id])
  const cartTotal = cart.reduce((sum, id) => {
    const p = PRODUCTS.find(p => p.id === id)
    return sum + (p?.price || 0)
  }, 0)
  const cartCount = cart.length

  return (
    <div className={`${bg} min-h-screen transition-colors duration-300`}>
      <div className="max-w-[600px] mx-auto pt-[118px] pb-24">

        <div className="px-4 py-6">
          <h1
            className={`text-[28px] uppercase leading-[1.1] ${text}`}
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 500 }}
          >
            LE SHOP
          </h1>
          <p className={`text-[13px] mt-1 ${isNight ? 'text-[#A0A0A0]' : 'text-[#555]'}`} style={{ fontFamily: "'Inter', sans-serif" }}>
            Merch officiel RockFood Hossegor
          </p>
        </div>

        {/* Product grid */}
        <div className="px-4 grid grid-cols-2 gap-3">
          {PRODUCTS.map(product => (
            <div key={product.id} className={`rounded-[6px] border p-2 flex flex-col gap-2.5 ${cardBg}`}>
              <div className="relative w-full aspect-square rounded-[6px] overflow-hidden">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
                {product.badge && (
                  <span
                    className={`absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] uppercase text-white ${badgeBg}`}
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                  >
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between px-1">
                <p className={`text-[13px] font-bold leading-[1.3] ${text}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                  {product.name}
                </p>
                <p className={`text-[13px] font-bold shrink-0 ml-1 ${isNight ? 'text-[#FF007A]' : 'text-[#111]'}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                  {product.price}€
                </p>
              </div>
              <button
                onClick={() => addToCart(product.id)}
                className={`w-full h-10 rounded-[4px] text-[13px] text-white uppercase tracking-[0.26px] flex items-center justify-center gap-2 ${accentBg}`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span className="text-[18px] font-bold">+</span>
                Ajouter
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Footer />
        </div>
      </div>

      {/* Sticky cart bar */}
      {cartCount > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center pb-4 px-4">
          <button
            className={`max-w-[400px] w-full h-14 rounded-[12px] flex items-center justify-between px-5 text-white ${accentBg} ${accentGlow}`}
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
          >
            <span className="text-[13px] uppercase tracking-[0.26px]">
              🛒 {cartCount} ARTICLE{cartCount > 1 ? 'S' : ''}
            </span>
            <span className="text-[16px]">{cartTotal} € →</span>
          </button>
        </div>
      )}
    </div>
  )
}
