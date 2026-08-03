import React from "react";

export default function SearchScreen() {
  const passengers = [
    { label: "Adults", value: "2" },
    { label: "Children", value: "1" },
    { label: "Rooms", value: "1" },
  ];

  const quickTrips = [
    { city: "San Francisco", dates: "19–29 Aug", guests: "1 passenger" },
    { city: "New York", dates: "03–10 Sep", guests: "2 passengers" },
    { city: "Barcelona", dates: "14–21 Oct", guests: "2 adults · 1 room" },
  ];

  const tabs = [
    { name: "Main", active: false },
    { name: "Search", active: true },
    { name: "Trips", active: false },
    { name: "Profile", active: false },
  ];

  return (
    <div className="w-[390px] h-[844px] relative overflow-hidden bg-[#F0F0F1] text-black antialiased">
      <div className="absolute inset-0 bg-gradient-to-b from-[#09448A] to-[#3865E0]" />

      {/* subtle decorative paths to echo the source screen's SVG-heavy background */}
      <svg className="absolute left-0 top-0 pointer-events-none" width="390" height="844" viewBox="0 0 390 844" fill="none">
        <path d="M-20 180C68 88 155 64 241 72C318 79 363 126 418 211" stroke="rgba(255,255,255,0.14)" strokeWidth="4" />
        <path d="M-35 332C59 246 154 219 242 230C316 240 363 289 423 376" stroke="rgba(255,255,255,0.12)" strokeWidth="4" />
        <path d="M-30 520C69 437 163 404 256 411C326 416 369 461 425 547" stroke="rgba(255,255,255,0.12)" strokeWidth="4" />
        <path d="M-18 711C79 624 172 592 260 600C331 607 372 651 422 734" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
      </svg>

      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 h-[44px] px-5 flex items-center justify-between text-white z-20">
        <div className="text-[15px] font-semibold tracking-[-0.41px]">9:41</div>
        <div className="flex items-center gap-1.5">
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
            <path d="M1 11H2.5V6.5H1V11Z" fill="white" />
            <path d="M4 11H5.5V4.5H4V11Z" fill="white" />
            <path d="M7 11H8.5V2.5H7V11Z" fill="white" />
            <path d="M10 11H11.5V1H10V11Z" fill="white" />
          </svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
            <path d="M8 10.5C11.0376 10.5 13.5 8.03757 13.5 5C13.5 2.23858 11.2614 0 8.5 0C6.23858 0 4.25 1.48872 3.57666 3.56373" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M5 5.5C6.38071 5.5 7.5 6.61929 7.5 8" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M2 8.5C3.933 8.5 5.5 10.067 5.5 12" stroke="white" strokeWidth="1.4" strokeLinecap="round" transform="translate(0 -1)" />
          </svg>
          <div className="w-[24px] h-[12px] rounded-[3px] border border-white/80 p-[1px]">
            <div className="h-full w-[67%] bg-white rounded-[2px]" />
          </div>
        </div>
      </div>

      {/* Header / form area */}
      <div className="absolute top-[54px] left-0 right-0 px-5 z-10">
        <div className="flex items-center gap-2 text-white mb-4">
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none" aria-hidden="true">
            <path d="M10 2L2 10L10 18" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[17px] tracking-[-0.41px]">Open</span>
        </div>

        <div className="mb-4">
          <h1 className="text-white font-semibold text-[25px] leading-[28px] tracking-[0px] font-['Poppins']">
            Find your next stay
          </h1>
          <p className="text-white/85 text-[17px] leading-[22px] tracking-[-0.41px] mt-2">
            Search hotels with your destination and trip dates.
          </p>
        </div>

        <div className="bg-white rounded-[10px] shadow-[0_6px_22px_rgba(0,0,0,0.12)] overflow-hidden">
          <div className="px-4 pt-4 pb-3 border-b border-[#F0F0F1]">
            <label className="block text-[17px] font-semibold tracking-[-0.41px] text-[#000000] mb-2">
              Destination
            </label>
            <div className="h-[50px] rounded-[5px] border border-[#CCCCCC] bg-white px-3 flex items-center gap-3">
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" aria-hidden="true">
                <path d="M9 18.5C9 18.5 15 13.402 15 8.75C15 5.43629 12.3137 2.75 9 2.75C5.68629 2.75 3 5.43629 3 8.75C3 13.402 9 18.5 9 18.5Z" stroke="#777777" strokeWidth="1.6" />
                <path d="M9 10.8C10.1046 10.8 11 9.90457 11 8.8C11 7.69543 10.1046 6.8 9 6.8C7.89543 6.8 7 7.69543 7 8.8C7 9.90457 7.89543 10.8 9 10.8Z" stroke="#777777" strokeWidth="1.6" />
              </svg>
              <input
                className="w-full outline-none text-[17px] tracking-[-0.41px] placeholder:text-[#BDBDBD] bg-transparent"
                value="Barcelona, Spain"
                readOnly
              />
            </div>
          </div>

          <div className="px-4 py-3 border-b border-[#F0F0F1]">
            <label className="block text-[17px] font-semibold tracking-[-0.41px] text-[#000000] mb-2">
              Dates
            </label>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-[50px] rounded-[5px] border border-[#CCCCCC] px-3 flex items-center gap-2 bg-white">
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" aria-hidden="true">
                  <path d="M2 4.5H14M3.5 1.5V4.5M12.5 1.5V4.5" stroke="#777777" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M2 6.5H14V15.5C14 16.0523 13.5523 16.5 13 16.5H3C2.44772 16.5 2 16.0523 2 15.5V6.5Z" stroke="#777777" strokeWidth="1.4" />
                </svg>
                <input className="w-full outline-none text-[17px] tracking-[-0.41px] bg-transparent" value="20 Aug" readOnly />
              </div>
              <div className="h-[50px] rounded-[5px] border border-[#CCCCCC] px-3 flex items-center gap-2 bg-white">
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" aria-hidden="true">
                  <path d="M2 4.5H14M3.5 1.5V4.5M12.5 1.5V4.5" stroke="#777777" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M2 6.5H14V15.5C14 16.0523 13.5523 16.5 13 16.5H3C2.44772 16.5 2 16.0523 2 15.5V6.5Z" stroke="#777777" strokeWidth="1.4" />
                </svg>
                <input className="w-full outline-none text-[17px] tracking-[-0.41px] bg-transparent" value="4 Sep" readOnly />
              </div>
            </div>
            <p className="text-[#777777] text-[13px] mt-2">Flexible dates available within a 3-day window.</p>
          </div>

          <div className="px-4 py-3">
            <label className="block text-[17px] font-semibold tracking-[-0.41px] text-[#000000] mb-2">
              Passengers
            </label>
            <div className="space-y-2">
              {passengers.map((item, idx) => (
                <div key={item.label} className="h-[35px] rounded-[5px] border border-[#FFFFFF] bg-white px-3 flex items-center justify-between">
                  <span className="text-[14px] font-semibold text-[#777777]">{item.label}</span>
                  <div className="flex items-center gap-3">
                    <button className="w-6 h-6 rounded-full bg-[#F0F0F1] text-[#777777] leading-none text-[18px]">−</button>
                    <span className="min-w-[12px] text-[14px] font-semibold text-[#000000]">{item.value}</span>
                    <button className="w-6 h-6 rounded-full bg-[#007AFF] text-white leading-none text-[16px]">+</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Find hotels button */}
        <button className="mt-4 w-full h-[50px] rounded-[5px] bg-[#FF8D23] text-white text-[16px] font-bold tracking-[-0.41px] shadow-[0_6px_18px_rgba(255,141,35,0.28)]">
          Find Hotels
        </button>

        {/* Quick search cards / suggestions */}
        <div className="mt-4 bg-white rounded-[10px] shadow-[0_6px_22px_rgba(0,0,0,0.08)] overflow-hidden">
          <div className="px-4 py-3 flex items-center justify-between">
            <h2 className="text-[22px] leading-[28px] font-semibold tracking-[0.35px] font-['Poppins'] text-[#000000]">
              Recent searches
            </h2>
            <span className="text-[#007AFF] text-[14px] font-semibold">See All</span>
          </div>
          <div className="divide-y divide-[#F0F0F1]">
            {quickTrips.map((trip, i) => (
              <div key={trip.city} className="px-4 py-3 flex items-center gap-3">
                <div className="w-[50px] h-[50px] rounded-[6px] bg-[#D9E7F8] flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 18V9.5L12 5L20 9.5V18" stroke="#007AFF" strokeWidth="1.7" strokeLinejoin="round" />
                    <path d="M8 18V13H16V18" stroke="#007AFF" strokeWidth="1.7" strokeLinejoin="round" />
                    <path d="M8 13H16" stroke="#007AFF" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[17px] leading-[22px] tracking-[-0.41px] text-[#0A191E] truncate">
                      {trip.city}
                    </p>
                    <span className="text-[12px] text-[#BDBDBD]">{i === 0 ? "Saved" : "Recent"}</span>
                  </div>
                  <p className="text-[13px] text-[#777777] mt-0.5">
                    {trip.dates} · {trip.guests}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* bottom spacer for nav */}
        <div className="h-[110px]" />
      </div>

      {/* Bottom navigation */}
      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-white rounded-t-[10px] shadow-[0_-3px_16px_rgba(84,87,92,0.08)] z-20">
        <div className="h-full grid grid-cols-4 px-2">
          {tabs.map((tab) => (
            <button key={tab.name} className="flex flex-col items-center justify-center gap-1">
              <TabIcon name={tab.name} active={tab.active} />
              <span
                className={
                  tab.active
                    ? "text-[#007AFF] text-[12px] font-semibold tracking-[-0.2px]"
                    : "text-[#CCCCCC] text-[12px] font-medium tracking-[-0.2px]"
                }
              >
                {tab.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function TabIcon({ name, active }) {
  const color = active ? "#007AFF" : "#CCCCCC";
  if (name === "Search") {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M9.5 16.5C13.366 16.5 16.5 13.366 16.5 9.5C16.5 5.63401 13.366 2.5 9.5 2.5C5.63401 2.5 2.5 5.63401 2.5 9.5C2.5 13.366 5.63401 16.5 9.5 16.5Z" stroke={color} strokeWidth="1.8" />
        <path d="M15 15L19.5 19.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "Main") {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M3 11L11 4L19 11" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 10.5V18H16V10.5" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "Trips") {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M5 6.5H17V18H5V6.5Z" stroke={color} strokeWidth="1.8" />
        <path d="M8 4.5V8.5M14 4.5V8.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 12H14" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 11C13.2091 11 15 9.20914 15 7C15 4.79086 13.2091 3 11 3C8.79086 3 7 4.79086 7 7C7 9.20914 8.79086 11 11 11Z" stroke={color} strokeWidth="1.8" />
      <path d="M4 19C4.90011 15.882 7.74347 14 11 14C14.2565 14 17.0999 15.882 18 19" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}