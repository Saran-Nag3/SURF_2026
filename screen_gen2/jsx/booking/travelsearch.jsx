import React from 'react';

export default function TravelSearchScreen() {
  const recent = [
    { from: 'SFO', to: 'JFK', city: 'New York', dates: '12–18 Sep', price: '$428', badge: 'Best price' },
    { from: 'LAX', to: 'CDG', city: 'Paris', dates: '21–29 Oct', price: '$812', badge: 'Trending' },
    { from: 'SEA', to: 'HND', city: 'Tokyo', dates: '07–15 Nov', price: '$964', badge: '1 stop' },
  ];

  const destinations = [
    { city: 'Barcelona', country: 'Spain', price: '$356', rating: '4.8', nights: '6 nights', tag: 'Beach + City' },
    { city: 'Reykjavík', country: 'Iceland', price: '$592', rating: '4.9', nights: '5 nights', tag: 'Nature' },
    { city: 'Singapore', country: 'Singapore', price: '$741', rating: '4.7', nights: '7 nights', tag: 'Food' },
  ];

  const tabs = [
    { label: 'Search', active: true },
    { label: 'Explore' },
    { label: 'Trips' },
    { label: 'Alerts' },
    { label: 'Profile' },
  ];

  const iconClass = 'stroke-[#A3A3A3]';

  const StatusBar = () => (
    <div className="absolute top-0 left-0 right-0 h-[44px] px-5 flex items-center justify-between text-black z-20">
      <div className="text-[15px] font-semibold tracking-[-0.41px]">9:41</div>
      <div className="flex items-center gap-1.5">
        <svg width="18" height="11" viewBox="0 0 18 11" fill="none" className={iconClass}>
          <path d="M1 10H3M1 7H7M1 4H11M1 1H17" strokeLinecap="round" />
        </svg>
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" className={iconClass}>
          <path d="M1 4.5C3.5 2 12.5 2 15 4.5" strokeLinecap="round" />
          <path d="M3.5 6.5C5 5 11 5 12.5 6.5" strokeLinecap="round" />
          <path d="M6.5 8.5C7.2 7.8 8.8 7.8 9.5 8.5" strokeLinecap="round" />
          <circle cx="8" cy="9.2" r="0.9" fill="#A3A3A3" stroke="none" />
        </svg>
        <div className="flex items-center gap-1">
          <div className="w-[22px] h-[11px] rounded-[2.8px] border border-[#A3A3A3] p-[1px]">
            <div className="w-[14px] h-full rounded-[1.5px] bg-[#A3A3A3]" />
          </div>
          <div className="w-[2px] h-[4px] rounded-r-[1px] bg-[#A3A3A3]" />
        </div>
      </div>
    </div>
  );

  const Field = ({ label, value, placeholder, icon }) => (
    <div className="bg-white rounded-[5px] border border-white px-3 py-2.5 shadow-[0_1px_0_rgba(0,0,0,0.03)]">
      <div className="flex items-center gap-2">
        <div className="shrink-0">{icon}</div>
        <div className="flex-1 min-w-0">
          <div className="text-[13px] leading-[17px] text-[#777777] font-normal">{label}</div>
          <div className="text-[14px] leading-[22px] text-black font-semibold truncate">{value || placeholder}</div>
        </div>
      </div>
    </div>
  );

  const SearchIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M12.5 12.5L16.2 16.2" stroke="#777777" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="8" cy="8" r="5.5" stroke="#777777" strokeWidth="1.6" />
    </svg>
  );

  const PlaneIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M1.6 9.1L16.1 2.4L12.1 16.2L8.2 10.4L1.6 9.1Z" stroke="#007AFF" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M8.2 10.4L16.1 2.4" stroke="#007AFF" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );

  const CalendarIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="2.2" y="3.1" width="13.6" height="12" rx="2.2" stroke="#007AFF" strokeWidth="1.4" />
      <path d="M5 1.8V4.8M13 1.8V4.8M2.2 6.2H15.8" stroke="#007AFF" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );

  const PassengerIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="5.2" r="2.2" stroke="#007AFF" strokeWidth="1.4" />
      <path d="M4.3 15.2C4.7 12.6 6.6 10.9 9 10.9C11.4 10.9 13.3 12.6 13.7 15.2" stroke="#007AFF" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );

  const BottomNavIcon = ({ active }) => (
    <div className={`w-5 h-5 rounded-full ${active ? 'bg-[#007AFF]' : 'bg-[#CCCCCC]'}`} />
  );

  return (
    <div className="w-[390px] h-[844px] relative overflow-hidden bg-[#F0F0F1] text-black">
      <StatusBar />

      <div className="absolute inset-x-0 top-0 h-[260px] bg-gradient-to-b from-[#09448A] to-[#3865E0]">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute -left-6 top-6" width="220" height="220" viewBox="0 0 220 220" fill="none">
            <path d="M14 110C40 56 80 22 118 22C163 22 197 65 206 117C215 171 190 204 138 206C89 208 42 176 22 136" stroke="#FFFFFF1F" strokeWidth="4" />
            <path d="M36 72C68 42 97 34 125 36C154 38 180 54 196 79" stroke="#FFFFFF1F" strokeWidth="4" />
            <path d="M61 174C81 147 105 132 133 128C160 124 182 127 203 138" stroke="#FFFFFF1F" strokeWidth="4" />
          </svg>
          <svg className="absolute right-[-40px] top-[-10px]" width="180" height="180" viewBox="0 0 180 180" fill="none">
            <path d="M30 140C25 93 44 56 80 34C113 14 145 20 162 47" stroke="#FFFFFF1F" strokeWidth="4" />
            <path d="M16 84C43 71 70 68 98 72C124 76 145 86 160 102" stroke="#FFFFFF1F" strokeWidth="4" />
          </svg>

          <div className="absolute left-5 top-[66px] text-white">
            <div className="text-[25px] leading-[28px] font-semibold tracking-[-0.2px]">Where to?</div>
            <div className="mt-1 text-[15px] leading-[20px] text-[#FFFFFFE5]">Find flights, compare fares, and lock in the best itinerary.</div>
          </div>

          <div className="absolute right-5 top-[70px] w-14 h-14 rounded-full bg-[#2B5DB5]/70 border border-white/20 flex items-center justify-center">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M4.5 15L25.5 6.5L19.4 23.5L13.8 17.2L4.5 15Z" stroke="#FFFFFF" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M13.8 17.2L25.5 6.5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </div>

          <div className="absolute left-5 bottom-[-28px] right-5 h-[112px] rounded-[18px] bg-white shadow-[0_8px_28px_rgba(0,0,0,0.12)] px-4 py-4">
            <div className="grid grid-cols-1 gap-2.5">
              <Field label="Destination" value="Barcelona, Spain" icon={<SearchIcon />} />
              <div className="grid grid-cols-2 gap-2.5">
                <Field label="Depart" value="Thu, 12 Sep" icon={<CalendarIcon />} />
                <Field label="Passengers" value="1 Adult" icon={<PassengerIcon />} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0 top-[290px] bottom-[70px] overflow-y-auto">
        <div className="px-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-[22px] leading-[28px] font-semibold tracking-[0.35px] text-black">Recently viewed</div>
              <div className="text-[13px] leading-[17px] text-[#777777] mt-1">Trips you searched for in the last 30 days</div>
            </div>
            <button className="text-[14px] font-semibold text-[#007AFF]">See all</button>
          </div>

          <div className="space-y-3">
            {recent.map((item, idx) => (
              <div key={idx} className="bg-white rounded-[8px] p-3 shadow-[0_1px_0_rgba(0,0,0,0.04)] border border-[#F0F0F0]">
                <div className="flex items-start gap-3">
                  <div className="w-[54px] h-[54px] rounded-[8px] bg-[#EAF3FF] flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M4 14L24 6L18 22L13 16L4 14Z" stroke="#007AFF" strokeWidth="1.6" strokeLinejoin="round" />
                      <path d="M13 16L24 6" stroke="#007AFF" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-[15px] leading-[20px] text-black truncate">{item.from} → {item.to}</div>
                      <div className="text-[15px] leading-[20px] font-semibold text-[#007AFF]">{item.price}</div>
                    </div>
                    <div className="text-[13px] leading-[17px] text-[#777777] mt-0.5">{item.city} · {item.dates}</div>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-[#F0F7FF] px-2.5 py-1 text-[12px] font-semibold text-[#007AFF]">{item.badge}</span>
                      <span className="text-[12px] text-[#777777]">Nonstop options available</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between mb-3">
            <div>
              <div className="text-[22px] leading-[28px] font-semibold tracking-[0.35px] text-black">Featured destination</div>
              <div className="text-[13px] leading-[17px] text-[#777777] mt-1">Handpicked based on your recent searches</div>
            </div>
            <button className="text-[14px] font-semibold text-[#007AFF]">Filters</button>
          </div>

          {destinations.map((d, idx) => (
            <div key={idx} className="mb-3 bg-white rounded-[8px] overflow-hidden shadow-[0_1px_0_rgba(0,0,0,0.04)] border border-[#F0F0F0]">
              <div className="relative h-[170px] bg-gradient-to-br from-[#A8C7FF] to-[#3865E0]">
                <div className="absolute inset-0 opacity-30">
                  <svg width="100%" height="100%" viewBox="0 0 343 170" fill="none" preserveAspectRatio="none">
                    <path d="M0 120C54 90 106 80 162 90C223 100 271 129 343 98V170H0V120Z" fill="#FFFFFF" />
                    <path d="M0 72C49 49 92 46 142 57C192 68 245 86 343 55" stroke="#FFFFFF" strokeWidth="3" />
                  </svg>
                </div>
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-[12px] font-semibold text-[#007AFF]">{d.tag}</span>
                  <span className="rounded-full bg-[#0000005C] px-3 py-1 text-[12px] font-semibold text-white">{d.rating} ★</span>
                </div>
                <div className="absolute right-4 top-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4.2 2.8h9.6a1.2 1.2 0 0 1 1.2 1.2v10.2L9 11.4l-6 2.8V4a1.2 1.2 0 0 1 1.2-1.2Z" stroke="#007AFF" strokeWidth="1.3" />
                  </svg>
                </div>
                <div className="absolute left-4 bottom-4 text-white">
                  <div className="text-[22px] leading-[28px] font-semibold">{d.city}</div>
                  <div className="text-[14px] leading-[22px] text-[#FFFFFFE5]">{d.country} · {d.nights}</div>
                </div>
              </div>

              <div className="px-4 py-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[13px] leading-[17px] text-[#777777]">Round trip from</div>
                    <div className="text-[18px] leading-[24px] font-semibold text-black">{d.price}</div>
                  </div>
                  <button className="h-[40px] px-4 rounded-[5px] bg-[#007AFF] text-white text-[16px] font-bold">Book now</button>
                </div>
              </div>
            </div>
          ))}

          <div className="mb-4 bg-white rounded-[8px] p-4 border border-[#F0F0F0]">
            <div className="flex items-center justify-between">
              <div className="text-[17px] leading-[22px] font-semibold text-black">Price watch</div>
              <span className="text-[12px] font-semibold text-[#007AFF]">Active</span>
            </div>
            <div className="mt-3 h-[10px] rounded-full bg-[#EAEAEA] overflow-hidden">
              <div className="h-full w-[68%] bg-[#007AFF] rounded-full" />
            </div>
            <div className="mt-2 flex items-center justify-between text-[13px] text-[#777777]">
              <span>Low fare alert: San Francisco → Rome</span>
              <span>68%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-white shadow-[0_-2px_10px_rgba(84,87,92,0.05)] border-t border-[#F0F0F0] z-20">
        <div className="h-full grid grid-cols-5">
          {tabs.map((tab, idx) => (
            <button key={idx} className="flex flex-col items-center justify-center gap-1">
              <BottomNavIcon active={tab.active} />
              <span className={`text-[12px] leading-[15px] ${tab.active ? 'text-[#007AFF] font-semibold' : 'text-[#BDBDBD] font-normal'}`}>
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}