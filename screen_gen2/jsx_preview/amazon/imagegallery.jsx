export default function ImageGalleryScreen() {
  const thumbnails = [
    { id: 1, color: 'bg-[#D9E7CB]', label: 'Front' },
    { id: 2, color: 'bg-[#EDEDED]', label: 'Side' },
    { id: 3, color: 'bg-[#C7D0D9]', label: 'Detail' },
    { id: 4, color: 'bg-[#91B7DF]', label: 'Back' },
    { id: 5, color: 'bg-[#BBBBBB]', label: 'Set' },
  ]

  const related = [
    { title: 'Studio lamp with brass finish', price: '$48.00', badge: '4.8' },
    { title: 'Minimal wall frame set', price: '$29.00', badge: '4.6' },
    { title: 'Ceramic vase, matte white', price: '$22.00', badge: '4.9' },
    { title: 'Oak accent tray', price: '$18.00', badge: '4.7' },
  ]

  const nav = [
    { name: 'Home', active: false },
    { name: 'Search', active: true },
    { name: 'Cart', active: false },
    { name: 'Orders', active: false },
    { name: 'Profile', active: false },
  ]

  return (
    <div className="w-[390px] h-[844px] relative overflow-hidden bg-white font-['Roboto'] text-[#111111]">
      <div className="absolute top-0 left-0 right-0 h-[844px] bg-white">
        <div className="absolute top-0 left-0 right-0 h-[32px] px-4 flex items-center justify-between bg-white z-20">
          <div className="text-[14px] font-medium text-[#111111]">9:41</div>
          <div className="flex items-center gap-1.5">
            <div className="w-[16px] h-[10px] flex items-end gap-[2px]">
              <span className="w-[3px] h-[4px] bg-[#111111] rounded-sm" />
              <span className="w-[3px] h-[6px] bg-[#111111] rounded-sm" />
              <span className="w-[3px] h-[8px] bg-[#111111] rounded-sm" />
              <span className="w-[3px] h-[10px] bg-[#111111] rounded-sm" />
            </div>
            <div className="w-[14px] h-[10px] border border-[#111111] rounded-[3px] relative">
              <div className="absolute right-[-3px] top-[2px] w-[2px] h-[6px] bg-[#111111] rounded-r-sm" />
              <div className="w-[10px] h-[6px] bg-[#111111] rounded-[1px] absolute left-[1px] top-[1px]" />
            </div>
            <div className="w-[18px] h-[10px] relative">
              <div className="absolute inset-0 rounded-full border border-[#111111]" />
              <div className="absolute left-[3px] right-[3px] top-[3px] bottom-[3px] rounded-full bg-[#111111]" />
            </div>
          </div>
        </div>

        <div className="absolute top-[32px] left-0 right-0 h-[64px] bg-white border-b border-[#EEEEEE] z-20">
          <div className="h-full px-2 flex items-center justify-between">
            <button className="w-12 h-12 flex items-center justify-center rounded-full active:bg-[#EEEEEE]">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h10" />
              </svg>
            </button>
            <div className="flex-1 px-2">
              <div className="h-12 rounded-[5px] border border-[#CDCDCD] flex items-center overflow-hidden">
                <input
                  className="flex-1 px-4 text-[14px] outline-none placeholder:text-[#666666]"
                  placeholder="Search related items"
                  defaultValue="living room decor"
                />
                <button className="w-12 h-12 bg-[#D9E7CB] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.5 4.5a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z" />
                    <path d="M15 15l4.5 4.5" />
                  </svg>
                </button>
              </div>
            </div>
            <button className="w-12 h-12 flex items-center justify-center rounded-full active:bg-[#EEEEEE] relative">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 7h15l-1.5 7H7.5L6 7Z" />
                <path d="M6 7 5.3 4.8H3" />
                <path d="M9 20a1 1 0 1 0 0 .01" />
                <path d="M17 20a1 1 0 1 0 0 .01" />
              </svg>
              <span className="absolute top-[7px] right-[8px] w-[16px] h-[16px] rounded-full bg-[#111111] text-white text-[8px] font-medium flex items-center justify-center">2</span>
            </button>
          </div>
        </div>

        <div className="absolute top-[96px] left-0 right-0 h-[44px] px-4 flex items-center bg-white z-10">
          <button className="flex items-center gap-2 text-[#111111]">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <span className="text-[14px] font-medium">Back</span>
          </button>
          <div className="ml-auto flex items-center gap-2">
            <span className="px-2 py-1 rounded-full bg-[#D9E7CB] text-[12px] font-medium">Zoom</span>
            <span className="px-2 py-1 rounded-full border border-[#CDCDCD] text-[12px] font-medium text-[#666666]">1.2x</span>
          </div>
        </div>

        <div className="absolute top-[140px] left-0 right-0 bottom-[82px] overflow-hidden">
          <div className="px-4 pt-4">
            <div className="rounded-[24px] bg-[#D9E7CB] h-[382px] relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[260px] h-[260px] rounded-[28px] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.12)] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,_rgba(255,255,255,0.95),_rgba(255,255,255,0.3)_28%,_transparent_55%)]" />
                  <div className="absolute inset-x-0 bottom-0 h-[96px] bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.06))]" />
                  <div className="w-[168px] h-[168px] rounded-[22px] bg-[#F6F2EA] border border-[#EEEEEE] flex items-center justify-center">
                    <div className="w-[132px] h-[132px] rounded-[18px] bg-[#E7D6C7] relative overflow-hidden">
                      <div className="absolute inset-x-0 top-0 h-[36px] bg-[#F5E8D9]" />
                      <div className="absolute left-[18px] top-[18px] w-[96px] h-[96px] rounded-full bg-[#F1C7A9]" />
                      <div className="absolute right-[18px] bottom-[18px] w-[58px] h-[58px] rounded-full bg-[#C2B6A0]" />
                      <div className="absolute left-[10px] bottom-[10px] w-[46px] h-[46px] rounded-full bg-[#91B7DF]" />
                    </div>
                  </div>
                  <div className="absolute top-[18px] left-[18px] flex items-center gap-2">
                    <span className="px-2 py-1 rounded-full bg-white text-[12px] font-medium shadow-sm">Top rated</span>
                    <span className="px-2 py-1 rounded-full bg-[#111111] text-white text-[12px] font-medium">4.9</span>
                  </div>
                  <div className="absolute bottom-[18px] right-[18px] flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 5h8l3 4v10H5V9l3-4Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute left-4 top-4 flex flex-col gap-2">
                <div className="w-2 h-2 rounded-full bg-white/70" />
                <div className="w-2 h-2 rounded-full bg-white" />
                <div className="w-2 h-2 rounded-full bg-white/70" />
              </div>
            </div>
          </div>

          <div className="px-4 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[20px] font-medium leading-tight">Gallery preview</h1>
                <p className="text-[14px] text-[#666666] mt-1">Swipe thumbnails to view related product images</p>
              </div>
              <div className="text-right">
                <div className="text-[18px] font-medium">$128</div>
                <div className="text-[12px] text-[#666666] line-through">$159</div>
              </div>
            </div>
          </div>

          <div className="px-4 pt-4">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {thumbnails.map((item, idx) => (
                <button
                  key={item.id}
                  className={`shrink-0 w-[64px] h-[64px] rounded-[12px] border ${idx === 0 ? 'border-[#111111]' : 'border-[#CDCDCD]'} ${item.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-lg bg-white/70" />
                  </div>
                  <span className="absolute bottom-1 left-0 right-0 text-[8px] font-medium text-[#111111] text-center">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="px-4 pt-2">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-[16px] font-medium">Related items</h2>
              <span className="text-[12px] text-[#666666]">See all</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {related.map((item) => (
                <div key={item.title} className="rounded-[18px] border border-[#EEEEEE] bg-white overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
                  <div className="h-[92px] bg-[#D9E7CB] flex items-center justify-center">
                    <div className="w-[56px] h-[56px] rounded-[16px] bg-white/70" />
                  </div>
                  <div className="p-3">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-[13px] font-medium leading-snug line-clamp-2">{item.title}</p>
                      <span className="px-2 py-0.5 rounded-full bg-[#D9E7CB] text-[11px] font-medium">{item.badge}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[14px] font-medium">{item.price}</span>
                      <button className="text-[12px] text-[#111111] font-medium">Add</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute left-0 right-0 bottom-0 h-[82px] bg-white border-t border-[#EEEEEE] z-30">
          <div className="h-full px-2 flex items-start justify-between pt-2">
            {nav.map((item) => (
              <button key={item.name} className="flex-1 flex flex-col items-center gap-1 text-center">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${item.active ? 'bg-[#D9E7CB]' : 'bg-transparent'}`}>
                  {item.name === 'Home' && (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#111111" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 11.5 12 5l8 6.5" />
                      <path d="M6.5 10.5V19h11V10.5" />
                    </svg>
                  )}
                  {item.name === 'Search' && (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#111111" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10.5 4.5a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z" />
                      <path d="M15 15l4.5 4.5" />
                    </svg>
                  )}
                  {item.name === 'Cart' && (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#111111" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 7h15l-1.5 7H7.5L6 7Z" />
                      <path d="M9 20a1 1 0 1 0 0 .01" />
                      <path d="M17 20a1 1 0 1 0 0 .01" />
                    </svg>
                  )}
                  {item.name === 'Orders' && (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#111111" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 4h10v16H7z" />
                      <path d="M9 8h6" />
                      <path d="M9 12h6" />
                    </svg>
                  )}
                  {item.name === 'Profile' && (
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#111111" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
                      <path d="M5 20a7 7 0 0 1 14 0" />
                    </svg>
                  )}
                </div>
                <span className={`text-[11px] font-medium ${item.active ? 'text-[#111111]' : 'text-[#666666]'}`}>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}