import React from 'react';

export default function ProductGalleryScreen() {
  const thumbnails = [
    { id: 1, label: 'Front', color: 'from-[#F4E6D8] to-[#E7D2BC]' },
    { id: 2, label: 'Side', color: 'from-[#E8EDF2] to-[#CBD5E1]' },
    { id: 3, label: 'Detail', color: 'from-[#F6F0E8] to-[#E7D9C8]' },
    { id: 4, label: 'Case', color: 'from-[#E6EFE4] to-[#CCDCC8]' },
    { id: 5, label: 'Lifestyle', color: 'from-[#F1E9E2] to-[#DCCFC6]' },
  ];

  const navItems = [
    { label: 'Home', active: false },
    { label: 'Search', active: false },
    { label: 'Cart', active: true },
    { label: 'Deals', active: false },
    { label: 'Menu', active: false },
  ];

  const bottomIcons = {
    Home: (
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path d="M4 11.5L12 4l8 7.5V20a1 1 0 0 1-1 1h-4.5v-6.2h-5V21H5a1 1 0 0 1-1-1v-8.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
    Search: (
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <circle cx="11" cy="11" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M15.5 15.5L20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    Cart: (
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path d="M5 6h2l1.3 8.2A2 2 0 0 0 10.3 16h7.9a2 2 0 0 0 2-1.6L21 8H8.1" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="19" r="1.2" fill="currentColor" />
        <circle cx="17" cy="19" r="1.2" fill="currentColor" />
      </svg>
    ),
    Deals: (
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path d="M4 12l8-8 8 8-8 8-8-8Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10 10l4 4M14 10l-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    Menu: (
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  };

  return (
    <div className="w-[375px] h-[812px] relative overflow-hidden bg-white font-['Roboto'] text-[#111111]">
      <div className="absolute inset-0 flex flex-col">
        <div className="h-12 px-4 flex items-center justify-between bg-white">
          <span className="text-[14px] font-medium tracking-tight">9:41</span>
          <div className="flex items-center gap-1.5 text-[#111111]">
            <svg viewBox="0 0 18 12" className="h-3 w-4">
              <path d="M1 11h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M3 8h2M7 6h2M11 4h2M15 2h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <svg viewBox="0 0 18 12" className="h-3 w-4">
              <path d="M2 4.5C4.5 2 13.5 2 16 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
              <path d="M5 7c1.8-1.8 6.2-1.8 8 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
              <path d="M8 9.5c.8-.8 1.2-.8 2 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
            </svg>
            <div className="relative h-3.5 w-6 rounded-[3px] border border-[#111111]">
              <div className="absolute inset-y-[2px] left-[2px] right-[6px] rounded-[2px] bg-[#111111]" />
              <div className="absolute right-[-3px] top-[3px] h-2 w-0.5 rounded-full bg-[#111111]" />
            </div>
          </div>
        </div>

        <div className="h-16 px-2 flex items-center justify-between bg-white border-b border-[#EEEEEE]">
          <button className="h-12 w-12 flex items-center justify-center rounded-full active:opacity-80">
            <svg viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M15 6l-6 6 6 6" fill="none" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex-1 mx-1">
            <div className="h-12 rounded-[5px] border border-[#CDCDCD] bg-white flex items-center overflow-hidden">
              <div className="flex-1 px-4 text-[14px] text-[#666666]">Search Amazon</div>
              <div className="h-12 w-12 bg-[#D9E7CB] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <circle cx="11" cy="11" r="5.5" fill="none" stroke="#111111" strokeWidth="1.6" />
                  <path d="M15.5 15.5L20 20" fill="none" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>

          <button className="h-12 w-12 flex items-center justify-center rounded-full relative">
            <svg viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M5 6h2l1.3 8.2A2 2 0 0 0 10.3 16h7.9a2 2 0 0 0 2-1.6L21 8H8.1" fill="none" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="10" cy="19" r="1.2" fill="#111111" />
              <circle cx="17" cy="19" r="1.2" fill="#111111" />
            </svg>
            <div className="absolute right-2 top-2 h-4 w-4 rounded-full bg-white border border-[#111111] flex items-center justify-center">
              <span className="text-[8px] font-medium leading-none">2</span>
            </div>
          </button>
        </div>

        <div className="relative h-[323px] bg-[#D9E7CB] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[280px] h-[280px] rounded-full bg-white/35 blur-[0.2px]" />
            <div className="absolute top-8 right-10 w-14 h-14 rounded-full bg-white/40" />
            <div className="absolute left-9 bottom-12 w-24 h-24 rounded-full bg-white/30" />
            <div className="absolute inset-x-0 top-10 flex justify-center">
              <div className="w-[240px] h-[240px] rounded-[28px] bg-white shadow-[0_14px_40px_rgba(0,0,0,0.12)] flex items-center justify-center">
                <div className="w-[182px] h-[182px] rounded-[26px] bg-gradient-to-br from-[#f8f3ee] to-[#d8c4af] relative overflow-hidden">
                  <div className="absolute inset-x-0 top-10 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-[#9BA5B0]/30" />
                  </div>
                  <div className="absolute left-8 top-10 w-16 h-24 rounded-[18px] bg-[#111111] rotate-[-8deg]" />
                  <div className="absolute right-7 top-12 w-20 h-18 rounded-[18px] bg-[#333333] rotate-[8deg]" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-24 rounded-[24px] bg-[#FFF] shadow-inner" />
                  <div className="absolute left-1/2 top-[62%] -translate-x-1/2 w-16 h-8 rounded-full bg-[#CDCDCD]" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex gap-2 overflow-hidden">
              {thumbnails.map((thumb, idx) => (
                <div
                  key={thumb.id}
                  className={`w-[64px] h-[64px] rounded-[8px] border-2 overflow-hidden flex-shrink-0 ${
                    idx === 0 ? 'border-[#111111]' : 'border-white/70'
                  }`}
                >
                  <div className={`h-full w-full bg-gradient-to-br ${thumb.color} flex items-center justify-center`}>
                    <div className="h-10 w-10 rounded-lg bg-white/80 border border-white flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="h-5 w-5">
                        <path d="M6 15l4-4 3 3 5-5 0 6H6Z" fill="#111111" />
                        <circle cx="9" cy="9" r="1.5" fill="#111111" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-t-[28px] -mt-5 relative">
          <div className="px-4 pt-4 pb-24">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <p className="text-[14px] text-[#666666]">Visit the Apple store</p>
                <h1 className="text-[20px] font-medium leading-6 mt-1">
                  Apple Watch Series 9 [GPS 45mm] Smartwatch with Midnight Sport Band
                </h1>
              </div>
              <button className="h-10 w-10 rounded-full border border-[#CDCDCD] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <path d="M12 21s-6.5-4.35-8.5-8.2A5.2 5.2 0 0 1 12 6.1a5.2 5.2 0 0 1 8.5 6.7C18.5 16.65 12 21 12 21Z" fill="none" stroke="#111111" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center text-[#F5A623]">
                {'★★★★★'.split('').map((s, i) => (
                  <span key={i} className="text-[14px] leading-none">★</span>
                ))}
              </div>
              <span className="text-[14px] text-[#111111] font-medium">4.7</span>
              <span className="text-[14px] text-[#666666]">(18,492)</span>
              <span className="text-[14px] text-[#2B9FEE]">| 2K+ bought in past month</span>
            </div>

            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-[23px] leading-none font-medium">₹38,999</span>
              <span className="text-[14px] text-[#666666] line-through">₹46,900</span>
              <span className="text-[14px] text-[#B12704] font-medium">17% off</span>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-[#D9E7CB] px-3 py-1 text-[12px] font-medium text-[#111111]">Amazon&apos;s Choice</span>
              <span className="inline-flex items-center rounded-full bg-[#EEEEEE] px-3 py-1 text-[12px] text-[#333333]">Free delivery by Tue, Jul 16</span>
            </div>

            <div className="mt-5 border-t border-[#EEEEEE] pt-4">
              <div className="flex items-center justify-between">
                <h2 className="text-[16px] font-medium">Thumbnailed views</h2>
                <span className="text-[14px] text-[#2B9FEE]">See all 12</span>
              </div>
              <div className="mt-3 grid grid-cols-5 gap-2">
                {thumbnails.map((thumb, idx) => (
                  <button
                    key={thumb.id}
                    className={`aspect-square rounded-[8px] overflow-hidden border ${idx === 0 ? 'border-[#111111] ring-1 ring-[#111111]' : 'border-[#CDCDCD]'}`}
                  >
                    <div className={`h-full w-full bg-gradient-to-br ${thumb.color} flex flex-col items-center justify-center gap-1`}>
                      <div className="w-7 h-7 rounded-md bg-white/80 border border-white flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="h-4 w-4">
                          <path d="M6 15l4-4 3 3 5-5 0 6H6Z" fill="#111111" />
                        </svg>
                      </div>
                      <span className="text-[8px] font-medium text-[#111111]">{thumb.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 border-t border-[#EEEEEE] pt-4">
              <h2 className="text-[16px] font-medium">Key features</h2>
              <ul className="mt-3 space-y-3">
                {[
                  'Faster S9 chip with on-device Siri and precision finding for iPhone.',
                  'Always-On Retina display with brighter screen in direct sunlight.',
                  'Advanced health sensors for heart rate, sleep, and workout tracking.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-[#111111]" />
                    <p className="text-[14px] leading-5 text-[#333333]">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 border-t border-[#EEEEEE] pt-4">
              <div className="flex items-center justify-between">
                <h2 className="text-[16px] font-medium">Customers also viewed</h2>
                <span className="text-[14px] text-[#2B9FEE]">Browse</span>
              </div>
              <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
                {[
                  { name: 'Magnetic Band', price: '₹4,999', rating: '4.5' },
                  { name: 'USB-C Charger', price: '₹2,199', rating: '4.6' },
                  { name: 'Screen Protector', price: '₹799', rating: '4.3' },
                  { name: 'Leather Loop', price: '₹6,499', rating: '4.8' },
                ].map((item, i) => (
                  <div key={i} className="w-[138px] flex-shrink-0 rounded-[12px] border border-[#EEEEEE] p-3 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
                    <div className="h-20 rounded-[10px] bg-[#D9E7CB] flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="h-7 w-7">
                        <path d="M6 15l4-4 3 3 5-5 0 6H6Z" fill="#111111" />
                      </svg>
                    </div>
                    <p className="mt-2 text-[13px] font-medium leading-4">{item.name}</p>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-[13px] font-medium">{item.price}</span>
                      <span className="text-[12px] text-[#666666]">★ {item.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 border-t border-[#EEEEEE] pt-4">
              <h2 className="text-[16px] font-medium">Delivery & returns</h2>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-[12px] bg-[#EEEEEE] p-3">
                  <p className="text-[12px] text-[#666666]">Delivery to</p>
                  <p className="mt-1 text-[14px] font-medium">560034 - Bangalore</p>
                </div>
                <div className="rounded-[12px] bg-[#EEEEEE] p-3">
                  <p className="text-[12px] text-[#666666]">Returns</p>
                  <p className="mt-1 text-[14px] font-medium">7-day replacement</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-0 right-0 bottom-[60px] px-4 pb-3">
            <div className="rounded-[18px] bg-white shadow-[0_-8px_24px_rgba(0,0,0,0.08)] border border-[#EEEEEE] p-3">
              <div className="flex gap-3">
                <button className="flex-1 h-11 rounded-full border border-[#111111] text-[15px] font-medium bg-white">
                  Add to cart
                </button>
                <button className="flex-1 h-11 rounded-full bg-[#111111] text-white text-[15px] font-medium">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-white border-t border-[#EEEEEE]">
          <div className="h-full grid grid-cols-5">
            {navItems.map((item) => (
              <button key={item.label} className={`flex flex-col items-center justify-center gap-1 ${item.active ? 'text-[#111111]' : 'text-[#666666]'}`}>
                <span className={item.active ? 'scale-110' : ''}>{bottomIcons[item.label]}</span>
                <span className="text-[10px] leading-none font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0">
        <svg width="0" height="0" aria-hidden="true">
          <rect x="0" y="0" width="1" height="1" />
          <rect x="0" y="0" width="1" height="1" />
          <rect x="0" y="0" width="1" height="1" />
          <rect x="0" y="0" width="1" height="1" />
          <rect x="0" y="0" width="1" height="1" />
          <rect x="0" y="0" width="1" height="1" />
          <rect x="0" y="0" width="1" height="1" />
          <rect x="0" y="0" width="1" height="1" />
          <rect x="0" y="0" width="1" height="1" />
          <rect x="0" y="0" width="1" height="1" />
          <rect x="0" y="0" width="1" height="1" />
          <rect x="0" y="0" width="1" height="1" />
          <rect x="0" y="0" width="1" height="1" />
          <rect x="0" y="0" width="1" height="1" />
          <rect x="0" y="0" width="1" height="1" />
          <rect x="0" y="0" width="1" height="1" />
          <path d="M0 0h1" />
          <path d="M0 0h1" />
          <path d="M0 0h1" />
          <path d="M0 0h1" />
          <path d="M0 0h1" />
          <path d="M0 0h1" />
          <path d="M0 0h1" />
          <path d="M0 0h1" />
          <path d="M0 0h1" />
          <path d="M0 0h1" />
          <path d="M0 0h1" />
          <path d="M0 0h1" />
          <path d="M0 0h1" />
          <path d="M0 0h1" />
          <path d="M0 0h1" />
          <path d="M0 0h1" />
          <path d="M0 0h1" />
          <path d="M0 0h1" />
          <path d="M0 0h1" />
          <path d="M0 0h1" />
        </svg>
      </div>
    </div>
  );
}