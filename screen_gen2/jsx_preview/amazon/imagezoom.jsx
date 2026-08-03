import React from 'react';

export default function ImageZoomScreen() {
  const thumbnails = [
    { id: 1, label: 'Main', selected: true, tone: 'bg-[#D9E7CB]' },
    { id: 2, label: 'Side', selected: false, tone: 'bg-[#EEEEEE]' },
    { id: 3, label: 'Heel', selected: false, tone: 'bg-[#CDCDCD]' },
    { id: 4, label: 'Sole', selected: false, tone: 'bg-[#D9E7CB]' },
    { id: 5, label: 'Detail', selected: false, tone: 'bg-[#BBBBBB]' },
  ];

  const navItems = [
    { label: 'Home', active: false },
    { label: 'Search', active: false },
    { label: 'Cart', active: true },
    { label: 'Lists', active: false },
    { label: 'Menu', active: false },
  ];

  const topIcons = [
    { key: 'menu', type: 'menu' },
    { key: 'search', type: 'search' },
    { key: 'cart', type: 'cart' },
  ];

  const batteryLevel = 82;

  const IconMenu = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );

  const IconSearch = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
      <path d="M10.5 5.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" stroke="#111111" strokeWidth="1.8" fill="none" />
      <path d="M14.4 14.4 19 19" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );

  const IconCart = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
      <path d="M6 7h14l-1.2 6.2a2 2 0 0 1-2 1.6H8.1a2 2 0 0 1-2-1.6L5 4H2" fill="none" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 20.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM16 20.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="#111111" />
    </svg>
  );

  const IconHome = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
      <path d="M4 11.5 12 4l8 7.5V20H4z" fill="none" stroke="#111111" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9.5 20v-5h5v5" fill="none" stroke="#111111" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );

  const IconList = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
      <path d="M7 7h13M7 12h13M7 17h13" stroke="#111111" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M4.2 7h.6M4.2 12h.6M4.2 17h.6" stroke="#111111" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );

  const IconProfile = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
      <path d="M12 12.2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="none" stroke="#111111" strokeWidth="1.7" />
      <path d="M5.5 20c1.5-3.8 4-5.7 6.5-5.7S16.5 16.2 18.5 20" fill="none" stroke="#111111" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );

  return (
    <div className="w-[375px] h-[812px] relative overflow-hidden bg-[#FFFFFF] font-['Roboto'] text-[#111111] mx-auto">
      <div className="absolute inset-0 bg-[#FFFFFF]" />

      <div className="absolute top-0 left-0 right-0 h-8 px-4 flex items-center justify-between bg-white z-30">
        <div className="text-[14px] font-medium leading-none">9:41</div>
        <div className="flex items-center gap-1.5">
          <svg viewBox="0 0 84 12" className="h-[12px] w-[84px]">
            <rect x="2" y="3" width="14" height="6" rx="2" fill="#111111" />
            <rect x="20" y="2" width="10" height="8" rx="2" fill="#111111" />
            <rect x="34" y="1" width="10" height="10" rx="2" fill="#111111" />
            <rect x="48" y="3" width="12" height="6" rx="2" fill="#111111" />
            <path d="M69 9V3" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M73 7V5" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M77 10V2" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M81 8V4" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <div className="w-7 h-3 rounded-[3px] border border-[#111111] relative">
            <div className="absolute inset-y-[1px] left-[1px] right-[calc(100%-calc(100%-1px)-[82%])] rounded-[2px] bg-[#111111]" />
          </div>
        </div>
      </div>

      <div className="absolute top-8 left-0 right-0 h-16 bg-white flex items-center px-3 gap-2 z-20 border-b border-[#EEEEEE]">
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white">
          <IconMenu />
        </button>

        <div className="flex-1 h-12 rounded-[5px] border border-[#CDCDCD] bg-white flex items-center overflow-hidden shadow-[0_1px_0_rgba(0,0,0,0.02)]">
          <div className="flex-1 px-4">
            <div className="text-[14px] text-[#666666] leading-none">Search</div>
          </div>
          <div className="w-12 h-12 bg-[#D9E7CB] flex items-center justify-center">
            <IconSearch />
          </div>
        </div>

        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white relative">
          <IconCart />
          <span className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-[#111111] text-white text-[8px] font-medium flex items-center justify-center">
            1
          </span>
        </button>
      </div>

      <div className="absolute top-[80px] left-0 right-0 bottom-[72px]">
        <div className="relative h-[585px] bg-[#D9E7CB] overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-7 w-14 h-14 rounded-full bg-white/25" />
            <div className="absolute top-24 right-8 w-20 h-20 rounded-full bg-white/20" />
            <div className="absolute top-52 left-6 w-16 h-16 rounded-full bg-white/18" />
            <div className="absolute bottom-24 right-10 w-12 h-12 rounded-full bg-white/20" />
          </div>

          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[310px] h-[310px] rounded-[28px] bg-white/20 blur-[0.5px] rotate-[-6deg]" />
          <div className="absolute top-[48px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-[28px] bg-white/30 rotate-[3deg]" />

          <div className="absolute inset-x-0 top-[54px] flex justify-center">
            <div className="relative w-[318px] h-[410px]">
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[260px] h-7 rounded-full bg-black/15 blur-md" />
              <svg viewBox="0 0 340 430" className="absolute inset-0 w-full h-full drop-shadow-[0_12px_16px_rgba(0,0,0,0.18)]">
                <path d="M114 75c15-18 39-30 64-30h30c27 0 52 13 65 35l28 45c8 13 4 30-8 39l-28 21c-10 7-16 19-16 31v72c0 19-8 36-22 47l-23 18c-14 11-31 17-49 17h-22c-16 0-31-5-44-14l-42-29c-14-10-22-25-22-42v-28c0-13 5-26 14-36l36-41c9-10 15-22 17-35l8-40c2-9 6-18 14-28Z" fill="#1A1A1A" />
                <path d="M110 73c15-17 38-29 63-29h29c27 0 52 13 65 35l26 42c8 14 4 31-9 40l-27 19c-10 7-16 19-16 31v73c0 19-8 36-23 47l-22 16c-14 10-30 16-48 16h-24c-16 0-31-5-43-14l-41-29c-14-10-22-25-22-42v-27c0-13 5-26 14-36l36-41c9-10 15-22 17-35l8-39c2-9 6-18 15-27Z" fill="#2A2A2A" />
                <path d="M117 87c12-13 30-21 48-21h30c19 0 36 9 45 24l25 41c6 10 4 23-5 30l-23 17c-10 7-16 19-16 31v68c0 16-6 30-18 39l-24 18c-10 7-22 11-35 11h-23c-11 0-21-4-30-10l-38-26c-11-7-17-19-17-32v-24c0-10 4-21 12-29l39-45c8-9 13-20 14-31l8-34c1-7 4-14 10-22Z" fill="#FFFFFF" />
                <path d="M127 114c8-8 19-13 31-13h23c13 0 25 6 32 16l18 24c5 6 3 15-3 20l-15 11c-7 5-12 13-12 21v47c0 11-4 21-13 27l-16 12c-7 5-15 7-24 7h-15c-8 0-15-2-21-6l-24-17c-8-6-13-15-13-25v-17c0-8 3-16 8-22l25-30c5-6 8-13 9-21l5-23c1-4 3-9 6-14Z" fill="#D9E7CB" />
                <path d="M112 199h116c7 0 12 5 12 12v55c0 7-5 12-12 12H112c-7 0-12-5-12-12v-55c0-7 5-12 12-12Z" fill="#F5F5F5" />
                <path d="M127 196h13v58h-13zM151 196h13v58h-13zM175 196h13v58h-13zM199 196h13v58h-13z" fill="#BBBBBB" />
                <path d="M118 262c8 5 18 8 31 8h53c11 0 22-3 31-8" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                <path d="M138 142c5-3 10-4 17-4h36c7 0 12 1 17 4" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M152 117c4-8 10-12 18-12h5c8 0 14 4 18 12" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M101 286c10 9 23 15 39 15h59c18 0 33-6 45-18" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" opacity="0.85" />
                <path d="M144 308c14 7 42 7 56 0" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M182 92c7 1 13 4 18 9" stroke="#111111" strokeWidth="1.7" strokeLinecap="round" />
                <path d="M118 166c11 11 25 17 42 17" stroke="#111111" strokeWidth="1.4" strokeLinecap="round" opacity="0.85" />
                <path d="M224 165c-11 12-25 18-42 18" stroke="#111111" strokeWidth="1.4" strokeLinecap="round" opacity="0.85" />
                <path d="M97 219h22" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M220 219h22" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M137 346c10 7 21 10 33 10h13c13 0 25-4 35-12" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M168 52v-11" stroke="#111111" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M247 136l12-9" stroke="#111111" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M92 136l-12-9" stroke="#111111" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        <div className="h-[42px] bg-white border-b border-[#CDCDCD] flex items-center justify-between px-4">
          <div className="text-[16px] font-medium">Nike Air Zoom Pegasus 40</div>
          <div className="flex items-center gap-1 text-[#666666] text-[12px]">
            <span>Zoom</span>
            <span className="font-medium text-[#111111]">8x</span>
          </div>
        </div>

        <div className="h-[45px] bg-white px-4 flex items-center gap-3 border-b border-[#EEEEEE]">
          <div className="flex-1 h-[30px] rounded-[16px] bg-[#F5F5F5] px-3 flex items-center gap-2 border border-[#CDCDCD]">
            <svg viewBox="0 0 24 24" className="w-4 h-4">
              <path d="M10.5 5.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" stroke="#666666" strokeWidth="1.6" fill="none" />
              <path d="M14.4 14.4 19 19" stroke="#666666" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <span className="text-[12px] text-[#666666]">Search related styles</span>
          </div>
          <button className="w-[30px] h-[30px] rounded-full bg-[#D9E7CB] flex items-center justify-center border border-[#CDCDCD]">
            <div className="w-3 h-3 rounded-sm border border-[#111111] rotate-45" />
          </button>
        </div>

        <div className="bg-white px-3 pt-2 pb-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[12px] font-medium text-[#666666]">Related angles</div>
            <div className="text-[12px] text-[#111111]">5 photos</div>
          </div>
          <div className="flex items-center gap-2 overflow-hidden">
            {thumbnails.map((thumb) => (
              <button
                key={thumb.id}
                className={`w-[64px] h-[64px] rounded-[8px] border-2 ${thumb.selected ? 'border-[#111111]' : 'border-[#CDCDCD]'} ${thumb.tone} relative overflow-hidden flex-shrink-0`}
              >
                <div className="absolute inset-0 opacity-90">
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <path d="M18 24c4-5 10-8 16-8h6c7 0 13 3 16 9l3 5c1 2 0 5-2 6l-6 4c-2 1-3 4-3 6v8c0 4-2 7-5 9l-5 4c-3 2-7 3-11 3h-5c-4 0-7-1-10-3l-9-6c-3-2-4-5-4-8v-5c0-2 1-5 3-7l8-9c2-2 3-5 4-7l2-8c0-1 1-2 2-4Z" fill="#FFFFFF" opacity="0.95" />
                    <path d="M20 23c3-4 8-6 14-6h6c7 0 13 3 16 8l3 5c1 2 0 5-2 6l-5 4c-2 1-3 4-3 6v7c0 4-2 7-5 9l-5 4c-3 2-7 3-11 3h-5c-4 0-7-1-10-3l-9-6c-3-2-4-5-4-8v-5c0-2 1-5 3-7l8-9c2-2 3-5 4-7l2-7c0-1 1-2 2-4Z" fill="#1A1A1A" opacity="0.9" />
                    <path d="M21 27c2-2 5-4 8-4h12c4 0 7 2 10 5l2 4c1 2 0 3-1 4l-4 3c-2 1-3 3-3 5v5c0 3-1 6-4 7l-4 3c-2 1-5 2-8 2h-3c-3 0-5-1-7-2l-6-4c-2-1-3-3-3-5v-3c0-2 1-4 2-6l5-6c1-1 2-3 2-4l1-4c0-1 1-2 1-4Z" fill={thumb.selected ? '#D9E7CB' : '#EEEEEE'} />
                  </svg>
                </div>
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[8px] font-medium text-[#111111] bg-white/80 px-1.5 rounded-full">
                  {thumb.label}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="px-4 py-3 bg-white border-t border-[#EEEEEE]">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[12px] text-[#666666]">Current view</div>
              <div className="text-[14px] font-medium">Maximum zoom enabled</div>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-9 h-9 rounded-full bg-[#111111] text-white flex items-center justify-center text-[18px] leading-none">−</button>
              <button className="w-9 h-9 rounded-full bg-[#D9E7CB] text-[#111111] flex items-center justify-center text-[18px] leading-none">+</button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 h-[72px] bg-white border-t border-[#CDCDCD] z-20">
        <div className="h-full grid grid-cols-5">
          {navItems.map((item, idx) => {
            const Icon = idx === 0 ? IconHome : idx === 1 ? IconSearch : idx === 2 ? IconCart : idx === 3 ? IconList : IconProfile;
            return (
              <button key={item.label} className="flex flex-col items-center justify-center gap-1 relative">
                <div className={`${item.active ? 'text-[#111111]' : 'text-[#666666]'}`}>
                  <Icon />
                </div>
                <span className={`text-[10px] ${item.active ? 'text-[#111111] font-medium' : 'text-[#666666]'}`}>{item.label}</span>
                {item.active && <div className="absolute bottom-1 w-10 h-0.5 rounded-full bg-[#111111]" />}
              </button>
            );
          })}
        </div>
      </div>

      <div className="hidden">
        <div className="grid grid-cols-14 gap-1">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-black" />
          ))}
        </div>
        <p>Zoom</p>
        <p>Search</p>
      </div>
    </div>
  );
}