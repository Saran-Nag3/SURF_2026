import React from 'react';

export default function SavedTripsScreen() {
  const trips = [
    {
      id: 1,
      route: 'NYC → LON',
      from: 'New York',
      to: 'London',
      dateRange: '20 Aug - 4 Sep',
      passenger: '1 passenger',
      price: '452 USD',
      best: true,
      airline: 'Virgin Atlantic',
      details: 'Nonstop • Economy • 7h 10m',
      updated: 'Saved 2h ago',
    },
    {
      id: 2,
      route: 'SFO → TYO',
      from: 'San Francisco',
      to: 'Tokyo',
      dateRange: '12 Sep - 26 Sep',
      passenger: '2 passengers',
      price: '689 USD',
      best: false,
      airline: 'ANA',
      details: '1 stop • Premium Economy • 13h 45m',
      updated: 'Saved yesterday',
    },
  ];

  const tabs = [
    { label: 'Home', active: false },
    { label: 'Search', active: false },
    { label: 'Trips', active: true },
    { label: 'Alerts', active: false },
    { label: 'Profile', active: false },
  ];

  const Text = ({ children, className = '' }) => (
    <span className={`text-[14px] leading-[17px] ${className}`}>{children}</span>
  );

  const IconPlane = ({ className = '' }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M2 12.5L21 3l-4.2 8.4L21 20 2 12.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M21 3 10.8 13.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );

  const IconSearch = ({ className = '' }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M10.5 18.5a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16.5 16.5 21 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );

  const IconBell = ({ className = '' }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M12 4a4 4 0 0 0-4 4v2.2c0 .8-.2 1.6-.6 2.3L6 14.8h12l-1.4-2.3c-.4-.7-.6-1.5-.6-2.3V8a4 4 0 0 0-4-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9.5 18.5a2.5 2.5 0 0 0 5 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );

  const IconUser = ({ className = '' }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M12 12.2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4.5 20a7.5 7.5 0 0 1 15 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );

  const IconSettings = ({ className = '' }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M10.8 3.6h2.4l.5 2a6.8 6.8 0 0 1 1.7.7l1.9-1 1.7 1.7-1 1.9c.3.5.5 1.1.7 1.7l2 .5v2.4l-2 .5a6.8 6.8 0 0 1-.7 1.7l1 1.9-1.7 1.7-1.9-1a6.8 6.8 0 0 1-1.7.7l-.5 2h-2.4l-.5-2a6.8 6.8 0 0 1-1.7-.7l-1.9 1-1.7-1.7 1-1.9a6.8 6.8 0 0 1-.7-1.7l-2-.5v-2.4l2-.5c.2-.6.4-1.2.7-1.7l-1-1.9 1.7-1.7 1.9 1c.5-.3 1.1-.5 1.7-.7l.5-2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );

  const IconTrash = ({ className = '' }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M8 6h8m-9 2h10l-1 11H9L8 8Zm3-2V4.8c0-.4.3-.8.8-.8h2.4c.5 0 .8.4.8.8V6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div className="w-[390px] h-[844px] relative overflow-hidden bg-[#F0F0F1] text-[#000000] font-sans">
      <div className="absolute inset-0 bg-[#F0F0F1]" />

      <div className="absolute top-0 left-0 right-0 h-[44px] bg-[#FFFFFF] z-20">
        <div className="px-4 pt-[10px] flex items-center justify-between">
          <Text className="font-semibold text-[15px] text-[#000000]">9:41</Text>
          <div className="flex items-center gap-2 text-[#000000]">
            <svg viewBox="0 0 24 24" className="w-[18px] h-[12px]" fill="none" aria-hidden="true">
              <path d="M2 18h3M2 14h7M2 10h11M2 6h15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <svg viewBox="0 0 24 24" className="w-[16px] h-[12px]" fill="none" aria-hidden="true">
              <path d="M4 8c4-4 12-4 16 0M7 11c2.6-2.6 7.4-2.6 10 0M10.5 14.5a2 2 0 1 1 3 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex items-center gap-[2px]">
              <div className="w-[22px] h-[11px] rounded-[3px] border border-[#000000] p-[1px]">
                <div className="w-[14px] h-full rounded-[2px] bg-[#000000]" />
              </div>
              <div className="w-[2px] h-[6px] rounded-r-[2px] bg-[#000000]" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[44px] left-0 right-0 bottom-[70px] overflow-hidden">
        <div className="px-4 pt-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#007AFF] mb-1">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" aria-hidden="true">
                  <path d="M14 6 8 12l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <Text className="text-[#007AFF]">Back</Text>
              </div>
              <h1 className="text-[22px] leading-[28px] font-semibold tracking-[0.35px] text-[#000000]">Saved Trips</h1>
            </div>
            <button className="w-10 h-10 rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06)] flex items-center justify-center text-[#A3A3A3]">
              <IconSettings className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-4 bg-white rounded-[5px] px-3 py-2 flex items-center gap-3 shadow-sm">
            <IconSearch className="w-5 h-5 text-[#A3A3A3]" />
            <input
              type="text"
              value="Search saved routes, cities, airlines"
              readOnly
              className="w-full outline-none bg-transparent text-[14px] leading-[22px] text-[#777777]"
            />
            <div className="flex items-center gap-2">
              <span className="text-[12px] font-semibold text-[#007AFF] bg-[#EAF3FF] px-2 py-1 rounded-full">2 saved</span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <div className="bg-white rounded-[5px] px-3 py-2 border border-white shadow-sm flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#777777]" fill="none" aria-hidden="true">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <Text className="font-semibold text-[#777777]">Add Trip</Text>
            </div>
            <div className="bg-white rounded-[5px] px-3 py-2 border border-white shadow-sm flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#777777]" fill="none" aria-hidden="true">
                <path d="M4 7h16M6 12h12M9 17h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <Text className="font-semibold text-[#000000]">Filters</Text>
            </div>
            <div className="ml-auto bg-[#EAF3FF] text-[#007AFF] rounded-[5px] px-3 py-2 text-[14px] font-semibold">
              USD
            </div>
          </div>
        </div>

        <div className="px-4 mt-4 space-y-4">
          {trips.map((trip) => (
            <div key={trip.id} className="bg-white rounded-[5px] shadow-sm overflow-hidden">
              <div className="p-3 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-[5px] bg-gradient-to-br from-[#3865E0] to-[#007AFF] flex items-center justify-center text-white">
                    <IconPlane className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Text className="font-semibold text-[#000000] tracking-[-0.41px]">{trip.route}</Text>
                      {trip.best && (
                        <span className="inline-flex items-center h-[30px] px-3 rounded-full bg-[#7B61FF] text-white text-[14px] font-bold">
                          Best price
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-[13px] leading-[18px] text-[#777777]">{trip.dateRange} • {trip.passenger}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-[22px] leading-[28px] font-semibold tracking-[0.35px] text-[#007AFF]">{trip.price}</p>
                  <p className="text-[12px] leading-[17px] text-[#A3A3A3]">{trip.updated}</p>
                </div>
              </div>

              <div className="px-3 pb-3">
                <div className="h-px bg-[#000000]/10 mb-3" />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[15px] leading-[22px] text-[#000000]">
                      {trip.from} <span className="text-[#BDBDBD] px-1">→</span> {trip.to}
                    </p>
                    <p className="text-[13px] leading-[18px] text-[#777777] mt-1">{trip.airline} • {trip.details}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="w-9 h-9 rounded-full bg-[#F7F8FA] flex items-center justify-center text-[#A3A3A3]">
                      <IconSettings className="w-4.5 h-4.5" />
                    </button>
                    <button className="w-9 h-9 rounded-full bg-[#FFF5F2] flex items-center justify-center text-[#FF8D23]">
                      <IconTrash className="w-4.5 h-4.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-white rounded-[5px] p-3 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[17px] leading-[22px] font-semibold text-[#000000]">Compare your saved trips</p>
                <p className="text-[13px] leading-[18px] text-[#777777]">Track fare changes and pick the lowest USD price.</p>
              </div>
              <span className="text-[12px] font-semibold text-[#007AFF]">View all</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-[5px] bg-[#F7F8FA] p-3">
                <p className="text-[12px] text-[#777777]">Lowest in list</p>
                <p className="text-[22px] leading-[28px] font-semibold text-[#000000]">452 USD</p>
                <p className="text-[12px] text-[#A3A3A3]">NYC → LON</p>
              </div>
              <div className="rounded-[5px] bg-[#F7F8FA] p-3">
                <p className="text-[12px] text-[#777777]">Highest in list</p>
                <p className="text-[22px] leading-[28px] font-semibold text-[#000000]">689 USD</p>
                <p className="text-[12px] text-[#A3A3A3]">SFO → TYO</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-white rounded-t-[10px] shadow-[0_-3px_10px_rgba(84,87,92,0.05)] border-t border-[#F0F0F1] z-20">
        <div className="h-full px-3 flex items-center justify-between">
          {tabs.map((tab) => {
            const color = tab.active ? '#3865E0' : '#CCCCCC';
            return (
              <button key={tab.label} className="flex flex-col items-center justify-center gap-1 w-[20%]">
                {tab.label === 'Home' && <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true"><path d="M4 11.2 12 5l8 6.2V20H4v-8.8Z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" /></svg>}
                {tab.label === 'Search' && <IconSearch className="w-6 h-6" />}
                {tab.label === 'Trips' && <IconPlane className="w-6 h-6" />}
                {tab.label === 'Alerts' && <IconBell className="w-6 h-6" />}
                {tab.label === 'Profile' && <IconUser className="w-6 h-6" />}
                <span className={`text-[12px] leading-[15px] font-semibold ${tab.active ? 'text-[#3865E0]' : 'text-[#CCCCCC]'}`}>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}