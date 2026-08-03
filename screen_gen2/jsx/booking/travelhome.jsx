import React from 'react';

export default function TravelHomeScreen() {
  const destinations = [
    {
      city: 'San Francisco',
      country: 'USA',
      dates: '19–29 Aug',
      travelers: '1 passenger',
      price: '$452',
      image:
        'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=900&q=80',
    },
    {
      city: 'Bali',
      country: 'Indonesia',
      dates: '04–12 Sep',
      travelers: '2 passengers',
      price: '$638',
      image:
        'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=900&q=80',
    },
    {
      city: 'Reykjavik',
      country: 'Iceland',
      dates: '11–18 Oct',
      travelers: '1 passenger',
      price: '$814',
      image:
        'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=900&q=80',
    },
  ];

  const recentTrips = [
    {
      route: 'NYC → LON',
      title: 'London weekend escape',
      dates: '20 Aug – 4 Sep',
      price: '$452',
      status: 'Best price',
      badge: 'Saved',
    },
    {
      route: 'LED → TLL',
      title: 'Baltic coast break',
      dates: '08 Sep – 15 Sep',
      price: '$384',
      status: 'Flexible',
      badge: 'Viewed 2h ago',
    },
  ];

  const dateDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const calendar = [
    ['1', '2', '3', '4', '5', '6', '7'],
    ['8', '9', '10', '11', '12', '13', '14'],
    ['15', '16', '17', '18', '19', '20', '21'],
    ['22', '23', '24', '25', '26', '27', '28'],
    ['29', '30', '31', '', '', '', ''],
  ];

  const tabs = [
    { label: 'Search', active: true },
    { label: 'Trips', active: false },
    { label: 'Saved', active: false },
    { label: 'Profile', active: false },
  ];

  const Icon = ({ children, className = '' }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      {children}
    </svg>
  );

  const StatusBar = () => (
    <div className="absolute left-0 top-0 z-20 flex h-[44px] w-full items-center justify-between px-4 text-black">
      <span className="text-[15px] font-semibold tracking-[-0.41px]">9:41</span>
      <div className="absolute left-1/2 top-0 -translate-x-1/2">
        <div className="h-[30px] w-[219px] rounded-b-[18px] bg-black" />
      </div>
      <div className="flex items-center gap-1">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M2 18h2" />
          <path d="M6 15h2" />
          <path d="M10 12h2" />
          <path d="M14 9h2" />
          <path d="M18 6h2" />
        </svg>
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 10c5-5 13-5 18 0" />
          <path d="M6 13c3.5-3.5 8.5-3.5 12 0" />
          <path d="M10 17c1.2-1.2 2.8-1.2 4 0" />
        </svg>
        <div className="relative ml-1 h-4 w-6 rounded-[4px] border border-black/70">
          <div className="absolute right-[2px] top-1/2 h-[6px] w-[2px] -translate-y-1/2 rounded-r-[1px] bg-black/70" />
          <div className="m-[2px] h-[8px] w-[16px] rounded-[2px] bg-black" />
        </div>
      </div>
    </div>
  );

  const BottomNav = () => (
    <div className="absolute bottom-0 left-0 z-20 h-[70px] w-full rounded-t-[10px] bg-white shadow-[0_2px_12px_rgba(84,87,92,0.05)]">
      <div className="grid h-full grid-cols-4 items-center px-2">
        {tabs.map((tab) => (
          <button key={tab.label} className="flex flex-col items-center justify-center gap-1">
            <svg viewBox="0 0 24 24" className={`h-5 w-5 ${tab.active ? 'text-[#3865E0]' : 'text-[#CCCCCC]'}`} fill="none" stroke="currentColor" strokeWidth="1.8">
              {tab.label === 'Search' && (
                <>
                  <circle cx="11" cy="11" r="6.5" />
                  <path d="M16 16l4 4" />
                </>
              )}
              {tab.label === 'Trips' && (
                <>
                  <path d="M4 8h16v10H4z" />
                  <path d="M7 8V6.5A2.5 2.5 0 0 1 9.5 4h5A2.5 2.5 0 0 1 17 6.5V8" />
                </>
              )}
              {tab.label === 'Saved' && (
                <path d="M7 4h10v16l-5-3-5 3z" />
              )}
              {tab.label === 'Profile' && (
                <>
                  <circle cx="12" cy="8" r="3.2" />
                  <path d="M5 20c1.7-3.4 4.2-5 7-5s5.3 1.6 7 5" />
                </>
              )}
            </svg>
            <span className={`text-[12px] leading-none ${tab.active ? 'font-semibold text-[#007AFF]' : 'font-normal text-[#A3A3A3]'}`}>
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );

  const MiniLandscape = () => (
    <svg viewBox="0 0 48 36" className="h-7 w-10 text-[#A3A3A3]" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 28l9-10 7 7 5-5 11 8" />
      <path d="M5 28h38" />
      <circle cx="15" cy="11" r="3" fill="currentColor" stroke="none" />
    </svg>
  );

  return (
    <div className="relative h-[844px] w-[390px] overflow-hidden bg-[#F0F0F1] font-sans text-[#000000]">
      <StatusBar />

      <div className="absolute inset-x-0 top-[44px] bottom-[70px] overflow-y-auto">
        <div className="px-4 pb-5 pt-3">
          <div className="mb-2 flex items-center justify-between">
            <button className="flex items-center gap-1 text-[#007AFF]">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
              <span className="text-[17px] font-normal tracking-[-0.41px]">Open</span>
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#777777]" fill="none" stroke="currentColor" strokeWidth="1.9">
                <circle cx="12" cy="12" r="7" />
                <path d="M12 8v8M8 12h8" />
              </svg>
            </button>
          </div>

          <div className="mb-3">
            <h1 className="max-w-[250px] font-['Poppins'] text-[25px] font-semibold leading-[28px] tracking-[0px] text-black">
              Find your next trip
            </h1>
            <p className="mt-2 max-w-[300px] text-[17px] leading-[22px] tracking-[-0.41px] text-[#777777]">
              Discover stays, flights, and weekend ideas tailored to your dates.
            </p>
          </div>

          <div className="mb-4 rounded-[12px] bg-gradient-to-r from-[#124A9A] to-[#3865E0] p-4 text-white shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/75">
                  Featured destination
                </div>
                <div className="mt-2 max-w-[190px] font-['Poppins'] text-[22px] font-semibold leading-[28px]">
                  Kyoto spring city breaks
                </div>
                <div className="mt-2 text-[15px] leading-[20px] text-white/90">
                  Boutique stays, cherry blossom routes, and easy rail transfers.
                </div>
              </div>
              <button className="rounded-full bg-white px-3 py-2 text-[14px] font-semibold text-[#007AFF]">
                Explore
              </button>
            </div>

            <div className="mt-4 overflow-hidden rounded-[12px] bg-[#003473]">
              <img
                src="https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1200&q=80"
                alt="Kyoto featured"
                className="h-[155px] w-full object-cover opacity-95"
              />
            </div>
          </div>

          <div className="mb-4 flex gap-2">
            <div className="flex h-[35px] w-[130px] items-center gap-2 rounded-[5px] border border-white bg-white px-[10px]">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#777777]" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 20h16" />
                <path d="M7 20V9l5-4 5 4v11" />
              </svg>
              <span className="text-[14px] font-semibold text-[#777777] opacity-40">Choose data</span>
            </div>
            <div className="flex h-[35px] w-[56px] items-center justify-center gap-2 rounded-[5px] border border-white bg-white px-[10px]">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#777777]" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
              </svg>
              <span className="text-[14px] font-semibold text-[#777777]">1</span>
            </div>
            <button className="h-[35px] rounded-[5px] border border-white bg-white px-[10px] text-[14px] font-semibold text-black">
              Filters
            </button>
          </div>

          <div className="mb-4 rounded-[5px] bg-white px-3 py-3 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h2 className="font-['Poppins'] text-[22px] font-semibold leading-[28px] tracking-[0.35px] text-black">
                  Select dates
                </h2>
                <p className="text-[14px] font-bold text-[#3865E0]">Whole month</p>
              </div>
              <div className="rounded-[10px] bg-[#9597A1]/10 px-3 py-1 text-[12px] font-medium text-[#3865E0]">
                Flexible dates
              </div>
            </div>

            <div className="mb-2 grid grid-cols-7 gap-y-2 text-center">
              {dateDays.map((d) => (
                <div key={d} className={`text-[14px] ${d === 'Sa' || d === 'Su' ? 'text-red-500' : 'text-[#2E3543]'}`}>
                  {d}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-y-2 text-center">
              {calendar.flatMap((week, rowIdx) =>
                week.map((day, colIdx) => {
                  const selected = day === '15' || day === '16' || day === '17' || day === '18';
                  const start = day === '14';
                  return (
                    <div key={`${rowIdx}-${colIdx}`} className="relative h-[35px]">
                      {day ? (
                        <span
                          className={[
                            'inline-flex h-[35px] w-[35px] items-center justify-center text-[14px] font-medium',
                            selected ? 'rounded-[5px] bg-[#3865E0] text-white' : '',
                            start ? 'rounded-[5px] bg-[#3865E0]/20 text-black' : '',
                            day === '30' ? 'rounded-[5px] bg-[#3865E0] text-white' : '',
                          ].join(' ')}
                        >
                          {day}
                        </span>
                      ) : null}
                    </div>
                  );
                })
              )}
            </div>
          </div>

          <div className="mb-3 flex items-center justify-between">
            <div>
              <h2 className="font-['Poppins'] text-[22px] font-semibold leading-[28px] tracking-[0.35px] text-black">
                Recent viewed trips
              </h2>
              <p className="text-[15px] leading-[20px] text-[#777777]">
                Pick up where you left off.
              </p>
            </div>
            <span className="text-[14px] font-semibold text-[#007AFF]">See all</span>
          </div>

          <div className="mb-4 space-y-3">
            {recentTrips.map((trip, idx) => (
              <div key={trip.route} className="rounded-[5px] bg-white p-3 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[5px] bg-[#3865E0] text-white">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M3 16l18-8-9 9 1 4-3-3-4 1z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="text-[18px] leading-[22px] text-[#0A191E]">{trip.title}</div>
                        <div className="mt-0.5 text-[13px] text-[#000000E5]">{trip.dates} · {trip.route}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[22px] font-semibold leading-[28px] text-black">{trip.price}</div>
                        <div className="text-[12px] text-[#777777]">{trip.status}</div>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between border-t border-black/10 pt-2">
                      <span className="text-[14px] font-semibold text-[#ABB9CD]">{trip.badge}</span>
                      <span className="text-[14px] font-semibold text-[#ABB9CD]">
                        {idx === 0 ? '2 travelers nearby' : 'Updated this morning'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-3 flex items-center justify-between">
            <div>
              <h2 className="font-['Poppins'] text-[22px] font-semibold leading-[28px] tracking-[0.35px] text-black">
                Destination inspiration
              </h2>
              <p className="text-[15px] leading-[20px] text-[#777777]">
                Popular places with great prices right now.
              </p>
            </div>
            <span className="text-[14px] font-semibold text-[#007AFF]">See all</span>
          </div>

          <div className="space-y-3">
            {destinations.map((item, idx) => (
              <div key={item.city} className="overflow-hidden rounded-[6px] bg-white shadow-sm">
                <div className="relative">
                  <img src={item.image} alt={item.city} className="h-[112px] w-full object-cover" />
                  <div className="absolute left-3 top-3 rounded-full bg-black/45 px-2 py-1 text-[12px] font-semibold text-white">
                    {item.country}
                  </div>
                  <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#777777]" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 21s-7-4.4-7-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 19 10c0 6.6-7 11-7 11z" />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center justify-between p-3">
                  <div className="min-w-0">
                    <div className="text-[18px] leading-[22px] text-[#0A191E]">{item.city}</div>
                    <div className="mt-1 text-[13px] leading-[18px] text-[#000000E5]">
                      {item.dates} · {item.travelers}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[22px] font-semibold leading-[28px] text-black">{item.price}</div>
                    <div className="text-[12px] text-[#777777]">{idx === 0 ? 'per stay' : 'avg. fare'}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-[5px] bg-white p-3 shadow-sm">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <h3 className="text-[17px] leading-[22px] text-black">Search by map</h3>
                <p className="text-[15px] leading-[20px] text-[#777777]">Explore stays near landmarks and transit.</p>
              </div>
              <span className="text-[14px] font-semibold text-[#007AFF]">Open</span>
            </div>
            <div className="flex h-[100px] items-center justify-between rounded-[5px] bg-[#F0F0F1] px-4">
              <div>
                <p className="text-[14px] font-semibold text-[#777777]">Current area</p>
                <p className="text-[17px] font-normal text-black">Downtown, San Francisco</p>
              </div>
              <MiniLandscape />
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}