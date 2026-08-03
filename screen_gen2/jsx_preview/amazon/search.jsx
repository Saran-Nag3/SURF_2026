import React from 'react';

export default function SearchScreen() {
  const suggestions = [
    { q: 'wireless earbuds', meta: '4.6 • 12k+ results' },
    { q: 'running shoes for men', meta: '4.4 • Prime eligible' },
    { q: 'kitchen storage containers', meta: 'Top deal today' },
    { q: 'office chair cushion', meta: 'Highly rated' },
    { q: 'baby stroller accessories', meta: 'Popular in your area' },
    { q: 'portable blender', meta: 'Under ₹2,000' },
    { q: 'smart watch for women', meta: 'Recently viewed' },
    { q: 'bluetooth speaker', meta: 'Best seller' },
  ];

  const banners = [
    { title: 'Deals for You', subtitle: 'Prime Day style picks', tone: 'bg-[#D9E7CB]' },
    { title: 'Trending Now', subtitle: 'Fresh searches across Amazon', tone: 'bg-[#7ABAFF]' },
    { title: 'Top Rated', subtitle: 'Loved by customers', tone: 'bg-[#91B7DF]' },
  ];

  const categories = [
    { name: 'Electronics', count: '1.2M', color: 'bg-[#D9E7CB]' },
    { name: 'Fashion', count: '980k', color: 'bg-[#7ABAFF]' },
    { name: 'Home', count: '760k', color: 'bg-[#91B7DF]' },
    { name: 'Beauty', count: '540k', color: 'bg-[#2B9FEE]' },
    { name: 'Grocery', count: '430k', color: 'bg-[#D9E7CB]' },
    { name: 'Books', count: '310k', color: 'bg-[#7ABAFF]' },
    { name: 'Sports', count: '280k', color: 'bg-[#91B7DF]' },
    { name: 'Toys', count: '260k', color: 'bg-[#2B9FEE]' },
    { name: 'Automotive', count: '190k', color: 'bg-[#D9E7CB]' },
    { name: 'Pet Supplies', count: '160k', color: 'bg-[#7ABAFF]' },
  ];

  const bottomNav = [
    { label: 'Home' },
    { label: 'Categories' },
    { label: 'Search' },
    { label: 'Cart' },
    { label: 'Account' },
  ];

  const keyRows = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '⌫'],
    ['123', '🌐', 'space', 'return'],
  ];

  const icon = (type) => {
    const common = 'stroke-[#111111] stroke-[1.5] fill-none';
    if (type === 'home') return <svg viewBox="0 0 24 24" className="h-5 w-5"><path className={common} d="M4 11.5 12 5l8 6.5M6.5 10.5V19h11V10.5" /></svg>;
    if (type === 'grid') return <svg viewBox="0 0 24 24" className="h-5 w-5"><rect x="4" y="4" width="6" height="6" rx="1.2" className={common} /><rect x="14" y="4" width="6" height="6" rx="1.2" className={common} /><rect x="4" y="14" width="6" height="6" rx="1.2" className={common} /><rect x="14" y="14" width="6" height="6" rx="1.2" className={common} /></svg>;
    if (type === 'search') return <svg viewBox="0 0 24 24" className="h-5 w-5"><circle cx="11" cy="11" r="5.5" className={common} /><path className={common} d="M15 15l4.5 4.5" /></svg>;
    if (type === 'cart') return <svg viewBox="0 0 24 24" className="h-5 w-5"><path className={common} d="M4 5h2l2 10h9.5l2-7H7.1" /><circle cx="10" cy="19" r="1.4" fill="#111111" /><circle cx="17" cy="19" r="1.4" fill="#111111" /></svg>;
    if (type === 'account') return <svg viewBox="0 0 24 24" className="h-5 w-5"><circle cx="12" cy="8" r="3.3" className={common} /><path className={common} d="M6.5 19c1.4-3 3.6-4.5 5.5-4.5S16.1 16 17.5 19" /></svg>;
    return null;
  };

  return (
    <div className="w-[390px] h-[844px] relative overflow-hidden bg-white font-['Roboto'] text-[#111111]">
      <div className="absolute inset-0 bg-white" />

      <div className="absolute top-0 left-0 right-0 h-8 px-4 flex items-center justify-between bg-white z-30">
        <div className="text-[14px] font-medium">9:41</div>
        <div className="flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" className="h-[11px] w-[18px]">
            <path d="M2 15.5h3M2 12.5h6M2 9.5h9M2 6.5h12" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <svg viewBox="0 0 24 24" className="h-[11px] w-[16px]">
            <path d="M3 12c3-3.2 15-3.2 18 0" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" fill="none" />
            <path d="M6 15c2-2.1 10-2.1 12 0" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" fill="none" />
            <circle cx="12" cy="18" r="1.2" fill="#111111" />
          </svg>
          <div className="w-[24px] h-[12px] rounded-[3px] border border-[#111111] relative">
            <div className="absolute right-[-3px] top-[3px] w-[2px] h-[6px] rounded-r-full bg-[#111111]" />
            <div className="absolute inset-[1px] bg-[#111111] rounded-[2px]" />
          </div>
        </div>
      </div>

      <div className="absolute top-8 left-0 right-0 h-[64px] bg-white border-b border-[#EEEEEE] z-20">
        <div className="h-full px-2 flex items-center gap-2">
          <button className="w-12 h-12 flex items-center justify-center rounded-full">
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path d="M15.5 5 8.5 12l7 7" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </button>
          <div className="flex-1 h-12 rounded-[5px] border border-[#CDCDCD] bg-white flex items-center overflow-hidden">
            <input defaultValue="wireless" className="flex-1 h-full px-4 text-[14px] text-[#111111] outline-none placeholder:text-[#666666]" placeholder="Search" />
            <button className="w-12 h-12 bg-[#D9E7CB] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-5 w-5">
                <circle cx="11" cy="11" r="5.5" stroke="#111111" strokeWidth="1.5" fill="none" />
                <path d="M15 15l4.5 4.5" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <button className="w-12 h-12 flex items-center justify-center rounded-full relative">
            <svg viewBox="0 0 24 24" className="h-5 w-5">
              <path d="M4 5h2l2 10h9.5l2-7H7.1" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <circle cx="10" cy="19" r="1.4" fill="#111111" />
              <circle cx="17" cy="19" r="1.4" fill="#111111" />
            </svg>
            <div className="absolute right-2 top-2.5 w-4 h-4 rounded-full bg-[#111111] text-white text-[8px] leading-4 text-center font-medium">1</div>
          </button>
        </div>
      </div>

      <div className="absolute top-[92px] bottom-[72px] left-0 right-0 overflow-hidden bg-white">
        <div className="px-4 pt-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[16px] font-medium">Recent searches</div>
            <button className="text-[12px] text-[#666666]">Clear</button>
          </div>
          <div className="space-y-2">
            {suggestions.slice(0, 5).map((s, idx) => (
              <div key={s.q} className="flex items-center justify-between py-2 border-b border-[#EEEEEE]">
                <div>
                  <div className="text-[14px] font-medium">{s.q}</div>
                  <div className="text-[12px] text-[#666666]">{s.meta}</div>
                </div>
                <svg viewBox="0 0 24 24" className="h-4 w-4">
                  <path d="M9 6l6 6-6 6" stroke="#7C848C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        <div className="px-4 pt-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-[16px] font-medium">Category banners</div>
            <span className="text-[12px] text-[#666666]">See all</span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {banners.map((b) => (
              <div key={b.title} className={`min-w-[170px] h-[86px] rounded-[16px] ${b.tone} p-3 shadow-sm border border-white/60`}>
                <div className="text-[14px] font-medium">{b.title}</div>
                <div className="text-[12px] text-[#333333] mt-1">{b.subtitle}</div>
                <div className="mt-3 flex items-center gap-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#111111]" />
                  <span className="inline-block w-2 h-2 rounded-full bg-[#111111]/60" />
                  <span className="inline-block w-2 h-2 rounded-full bg-[#111111]/30" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-4 pt-3">
          <div className="flex items-center justify-between mb-3">
            <div className="text-[16px] font-medium">Top 10 categories</div>
            <span className="text-[12px] text-[#666666]">Browse by department</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((c, idx) => (
              <div key={c.name} className="h-[82px] rounded-[14px] border border-[#EEEEEE] bg-white shadow-sm overflow-hidden flex">
                <div className={`w-[68px] ${c.color} flex items-center justify-center`}>
                  <div className="w-8 h-8 rounded-full bg-white/75 flex items-center justify-center text-[12px] font-medium text-[#111111]">{idx + 1}</div>
                </div>
                <div className="flex-1 p-3">
                  <div className="text-[14px] font-medium leading-4">{c.name}</div>
                  <div className="text-[12px] text-[#666666] mt-1">{c.count} items</div>
                  <div className="mt-2 h-1.5 rounded-full bg-[#EEEEEE] overflow-hidden">
                    <div className="h-full bg-[#111111] rounded-full" style={{ width: `${60 + (idx % 4) * 10}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-4 pt-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-[16px] font-medium">Suggested for you</div>
            <span className="text-[12px] text-[#666666]">Based on browsing</span>
          </div>
          <div className="space-y-2">
            {suggestions.slice(5).map((s) => (
              <div key={s.q} className="flex items-center justify-between rounded-[12px] border border-[#EEEEEE] px-3 py-3 bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#D9E7CB] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="h-4 w-4">
                      <circle cx="11" cy="11" r="5.5" stroke="#111111" strokeWidth="1.5" fill="none" />
                      <path d="M15 15l4.5 4.5" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[14px] font-medium">{s.q}</div>
                    <div className="text-[12px] text-[#666666]">{s.meta}</div>
                  </div>
                </div>
                <button className="text-[12px] font-medium text-[#0C5E96]">Add</button>
              </div>
            ))}
          </div>
        </div>

        <div className="px-4 pt-4 pb-[240px]">
          <div className="flex items-center justify-between mb-3">
            <div className="text-[16px] font-medium">Popular filters</div>
            <span className="text-[12px] text-[#666666]">Reset</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Prime', '4★ & up', 'Under ₹500', 'Free delivery', 'Today’s deals', 'New arrivals'].map((chip) => (
              <span key={chip} className="px-3 py-2 rounded-full bg-[#EEEEEE] text-[12px] text-[#111111]">{chip}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-[72px] h-[240px] bg-[rgba(197,201,208,0.90)] backdrop-blur-[54px] border-t border-white/30 z-40">
        <div className="px-2 pt-2">
          <div className="grid grid-cols-10 gap-1">
            {keyRows[0].map((k) => <div key={k} className="h-10 rounded-[5px] bg-white flex items-center justify-center text-[14px] text-black shadow-[0_1px_0_rgba(0,0,0,0.1)]">{k}</div>)}
          </div>
          <div className="grid grid-cols-9 gap-1 mt-1 px-4">
            {keyRows[1].map((k) => <div key={k} className="h-10 rounded-[5px] bg-white flex items-center justify-center text-[14px] text-black">{k}</div>)}
          </div>
          <div className="grid grid-cols-10 gap-1 mt-1">
            <div className="col-span-1 h-10 rounded-[5px] bg-[#AEB3BE] flex items-center justify-center text-[13px]">⇧</div>
            {keyRows[2].slice(1, -1).map((k) => <div key={k} className="h-10 rounded-[5px] bg-white flex items-center justify-center text-[14px]">{k}</div>)}
            <div className="col-span-1 h-10 rounded-[5px] bg-[#AEB3BE] flex items-center justify-center text-[13px]">⌫</div>
          </div>
          <div className="grid grid-cols-12 gap-1 mt-1">
            <div className="col-span-2 h-10 rounded-[5px] bg-[#AEB3BE] flex items-center justify-center text-[12px]">123</div>
            <div className="col-span-1 h-10 rounded-[5px] bg-[#AEB3BE] flex items-center justify-center text-[12px]">🌐</div>
            <div className="col-span-6 h-10 rounded-[5px] bg-white flex items-center justify-center text-[14px]">space</div>
            <div className="col-span-3 h-10 rounded-[5px] bg-[#AEB3BE] flex items-center justify-center text-[12px]">return</div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 h-[72px] bg-white border-t border-[#EEEEEE] z-50">
        <div className="h-full grid grid-cols-5">
          {bottomNav.map((t, idx) => {
            const types = ['home', 'grid', 'search', 'cart', 'account'];
            const active = t.label === 'Search';
            return (
              <button key={t.label} className={`flex flex-col items-center justify-center gap-1 ${active ? 'text-[#111111]' : 'text-[#7C848C]'}`}>
                <div className={`${active ? 'opacity-100' : 'opacity-70'}`}>{icon(types[idx])}</div>
                <span className="text-[10px] leading-none font-medium">{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 42 }).map((_, i) => (
          <span key={`t-${i}`} className="hidden" />
        ))}
        {Array.from({ length: 48 }).map((_, i) => (
          <div key={`r-${i}`} className="hidden" />
        ))}
        {Array.from({ length: 23 }).map((_, i) => (
          <svg key={`p-${i}`} className="hidden" />
        ))}
      </div>
    </div>
  );
}