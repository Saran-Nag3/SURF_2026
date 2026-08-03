import React from 'react';

export default function SearchFeedScreen() {
  const hotels = [
    {
      name: 'Harbor View Suites',
      location: 'Downtown, Vancouver',
      rating: 4.8,
      reviews: 184,
      price: 356,
      nights: 6,
      badge: 'Free cancellation',
      offer: 'Save 12% today',
      host: '2 guests • 1 king bed',
    },
    {
      name: 'Cedar Peak Hotel',
      location: 'Coal Harbour, Vancouver',
      rating: 4.7,
      reviews: 92,
      price: 412,
      nights: 5,
      badge: 'Breakfast included',
      offer: 'Member deal',
      host: '2 guests • skyline view',
    },
    {
      name: 'The Alder House',
      location: 'Yaletown, Vancouver',
      rating: 4.9,
      reviews: 261,
      price: 489,
      nights: 4,
      badge: 'Top pick',
      offer: 'Limited-time offer',
      host: 'Studio • balcony',
    },
    {
      name: 'Pine & Pearl Inn',
      location: 'Gastown, Vancouver',
      rating: 4.6,
      reviews: 77,
      price: 298,
      nights: 7,
      badge: 'Pay later',
      offer: '2 nights free parking',
      host: '1 queen bed • fast Wi‑Fi',
    },
    {
      name: 'Seaside Metro Stay',
      location: 'Kitsilano, Vancouver',
      rating: 4.8,
      reviews: 143,
      price: 524,
      nights: 3,
      badge: 'Great location',
      offer: 'Beach access included',
      host: 'Oceanfront • 4.9 km to center',
    },
  ];

  const tabs = [
    { label: 'Search', active: true },
    { label: 'Trips', active: false },
    { label: 'Saved', active: false },
    { label: 'Inbox', active: false },
    { label: 'Profile', active: false },
  ];

  const Icon = ({ type, active = false, className = '' }) => {
    const stroke = active ? '#007AFF' : '#A3A3A3';
    const fill = active ? '#007AFF' : 'none';
    const common = `stroke-[${stroke}]`;
    if (type === 'search') {
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="11" cy="11" r="6.5" stroke={stroke} strokeWidth="1.8" fill="none" />
          <path d="M16 16l4.5 4.5" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    }
    if (type === 'heart') {
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M12 20.3l-7.2-7.1C2.3 11 2.2 7.8 4.2 5.8 6.1 3.9 9.1 4 12 7c2.9-3 5.9-3.1 7.8-1.2 2 2 1.9 5.2-.6 7.4L12 20.3z" fill={fill} stroke={stroke} strokeWidth="1.6" />
        </svg>
      );
    }
    if (type === 'home') {
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path d="M4 11.2L12 4l8 7.2" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M6.2 10.8V20h11.6v-9.2" stroke={stroke} strokeWidth="1.7" strokeLinejoin="round" fill="none" />
          <path d="M10 20v-5h4v5" stroke={stroke} strokeWidth="1.7" strokeLinejoin="round" fill="none" />
        </svg>
      );
    }
    if (type === 'calendar') {
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <rect x="4" y="5.5" width="16" height="14" rx="2.5" stroke={stroke} strokeWidth="1.7" fill="none" />
          <path d="M8 3.8v3.2M16 3.8v3.2M4 9h16" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    }
    if (type === 'user') {
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <circle cx="12" cy="8.2" r="3.1" stroke={stroke} strokeWidth="1.7" fill="none" />
          <path d="M5.5 19c1.6-3.1 4-4.7 6.5-4.7S16.9 15.9 18.5 19" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" fill="none" />
        </svg>
      );
    }
    return null;
  };

  const StarRow = ({ rating }) => (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className={`h-3.5 w-3.5 ${i < Math.round(rating) ? 'text-[#FF9500]' : 'text-[#D9D9D9]'}`}>
          <path
            d="M12 3.4l2.8 5.7 6.3.9-4.5 4.4 1.1 6.3L12 17.8l-5.7 3 1.1-6.3L3 10l6.3-.9L12 3.4z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  );

  const statusIcons = [
    <svg key="s1" viewBox="0 0 24 24" className="h-4 w-4">
      <path d="M3 16.5c3-3 15-3 18 0" stroke="#000" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M6 13.5c2.5-2.5 9.5-2.5 12 0" stroke="#000" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M9 10.5c1.8-1.8 4.2-1.8 6 0" stroke="#000" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <circle cx="12" cy="19" r="1.3" fill="#000" />
    </svg>,
    <svg key="s2" viewBox="0 0 24 24" className="h-4 w-4">
      <path d="M6 13.5l2.8-2.8 2.4 2.4 3.1-3.1L18 13.5" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M4 8.2h16" stroke="#000" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
      <path d="M4 15.8h16" stroke="#000" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
    </svg>,
    <svg key="s3" viewBox="0 0 24 24" className="h-5 w-7">
      <rect x="1.5" y="5" width="18" height="14" rx="3" stroke="#000" strokeWidth="1.7" fill="none" />
      <rect x="20" y="9" width="2" height="6" rx="1" fill="#000" />
      <rect x="3.5" y="7" width="13.2" height="10" rx="2" fill="#000" opacity="0.15" />
    </svg>,
  ];

  return (
    <div className="w-[390px] h-[844px] relative overflow-hidden bg-[#F0F0F1] text-[#000]">
      <div className="absolute inset-0 bg-[#F0F0F1]" />
      <div className="absolute top-0 left-0 right-0 h-[44px] px-5 pt-2 flex items-center justify-between z-20">
        <span className="text-[15px] font-semibold tracking-[-0.41px]">9:41</span>
        <div className="flex items-center gap-1.5">{statusIcons}</div>
      </div>

      <div className="absolute top-[44px] left-0 right-0 h-[112px] bg-gradient-to-b from-[#09448A] to-[#3865E0]">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute left-[-28px] top-[18px] h-28 w-28 rounded-full border border-white/20" />
          <div className="absolute right-[-18px] top-[8px] h-24 w-24 rounded-full border border-white/20" />
          <div className="absolute left-[68px] top-[64px] h-16 w-16 rounded-full border border-white/15" />
          <div className="absolute right-[92px] top-[56px] h-10 w-10 rounded-full border border-white/15" />
        </div>
        <div className="relative z-10 px-4 pt-4">
          <div className="flex items-center justify-between text-white">
            <div>
              <p className="text-[16px] font-semibold">Search stays</p>
              <p className="text-[13px] text-white/85">Vancouver · 20–26 Aug · 1 guest</p>
            </div>
            <button className="h-10 w-10 rounded-full bg-white/15 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-5 w-5">
                <path d="M12 5v14M5 12h14" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <div className="mt-3 flex h-[36px] items-center rounded-[2px] bg-white/12 px-3">
            <Icon type="search" className="h-[18px] w-[18px]" />
            <span className="ml-2 text-[14px] font-semibold text-white/70">Canada</span>
          </div>
        </div>
      </div>

      <div className="absolute top-[160px] left-0 right-0 bottom-[70px] overflow-y-auto pb-4">
        <div className="px-4 pt-3">
          <div className="flex gap-2.5">
            <div className="flex h-[35px] items-center gap-2 rounded-[5px] border border-white bg-white px-3">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#777777]">
                <path d="M6 20V10l6-6 6 6v10" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[14px] font-semibold text-[#777777] opacity-40">City</span>
            </div>
            <div className="flex h-[35px] items-center gap-2 rounded-[5px] border border-white bg-white px-3">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#777777]">
                <path d="M12 2l2.7 7.4H23l-6.5 4.5 2.5 7.4L12 17.1 5 21.3l2.5-7.4L1 9.4h8.3L12 2z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
              </svg>
              <span className="text-[14px] font-semibold text-[#000]">4.5+</span>
            </div>
            <div className="flex h-[35px] items-center gap-2 rounded-[5px] border border-white bg-white px-3">
              <span className="text-[14px] font-semibold text-[#000]">Filters</span>
            </div>
          </div>

          <div className="mt-3 rounded-[5px] bg-white p-3 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[14px] font-semibold text-[#000]">Price</p>
                <p className="text-[15px] text-[#000]/20">300$ - 1500$</p>
              </div>
              <span className="rounded-full bg-[#7B61FF] px-3 py-1 text-[12px] font-bold text-white">Best price</span>
            </div>
            <div className="mt-3 h-10 rounded-[999px] bg-[#F0F0F1] px-2 py-1">
              <div className="relative h-full">
                <div className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-[#007AFF]/20" />
                <div className="absolute left-[18%] top-1/2 h-[2px] w-[54%] -translate-y-1/2 bg-[#007AFF]" />
                <div className="absolute left-[16%] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-[#007AFF] bg-white" />
                <div className="absolute left-[70%] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-[#007AFF] bg-white" />
              </div>
            </div>
          </div>

          <div className="mt-3 rounded-[5px] bg-white p-3 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[14px] font-semibold text-[#000]">Sort by</p>
                <p className="text-[15px] text-[#777777]">Recommended for your trip</p>
              </div>
              <button className="text-[14px] font-semibold text-[#007AFF]">Edit</button>
            </div>
          </div>

          <div className="mt-3 space-y-3">
            {hotels.map((hotel, index) => (
              <div key={hotel.name} className="overflow-hidden rounded-[6px] bg-white shadow-sm">
                <div className="relative h-[216px]">
                  <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-gradient-to-br from-[#2C4F7C] via-[#446EE2] to-[#7B61FF]' : 'bg-gradient-to-br from-[#0F172A] via-[#3865E0] to-[#FF8D23]'}`} />
                  <div className="absolute inset-0 opacity-35">
                    <div className="absolute left-[-20px] top-[20px] h-20 w-20 rounded-full border border-white/30" />
                    <div className="absolute right-[18px] top-[16px] h-24 w-24 rounded-full border border-white/20" />
                    <div className="absolute left-[92px] bottom-[18px] h-16 w-16 rounded-full border border-white/20" />
                  </div>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute left-3 top-3 rounded-full bg-white/20 px-3 py-1 text-[12px] font-semibold text-white backdrop-blur-sm">
                    {hotel.badge}
                  </div>
                  <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <Icon type="heart" className="h-4 w-4" />
                  </button>

                  <div className="absolute left-3 top-[116px] right-3">
                    <div className="flex items-end justify-between gap-3 text-white">
                      <div className="max-w-[220px]">
                        <p className="text-[18px] font-semibold leading-6">{hotel.name}</p>
                        <p className="mt-1 text-[13px] text-white/90">{hotel.location}</p>
                      </div>
                      <div className="rounded-[10px] bg-white px-3 py-2 text-right shadow-sm">
                        <p className="text-[22px] font-semibold leading-6 text-[#000]">${hotel.price}</p>
                        <p className="text-[12px] text-[#000]">for {hotel.nights} days</p>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <StarRow rating={hotel.rating} />
                        <span className="text-[13px] text-white/85">{hotel.rating.toFixed(1)}</span>
                        <span className="text-[13px] text-white/70">({hotel.reviews}) on Yelp</span>
                      </div>
                      <div className="rounded-[10px] bg-white/95 px-3 py-2 text-[12px] font-semibold text-[#007AFF]">
                        {hotel.offer}
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/25 to-transparent" />
                </div>

                <div className="border-t border-[#F0F0F1] px-3 py-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[15px] font-semibold text-[#000]">{hotel.host}</p>
                      <p className="text-[13px] text-[#777777]">Free Wi‑Fi · Flexible check-in</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="rounded-[5px] border border-[#DADADA] px-3 py-2 text-[14px] font-semibold text-[#000]">View</button>
                      <button className="rounded-[5px] bg-[#007AFF] px-4 py-2 text-[14px] font-bold text-white">Book now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-[5px] bg-white p-3 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-[14px] font-semibold">Deals near you</p>
              <span className="text-[13px] font-semibold text-[#007AFF]">See all</span>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {[
                { label: 'Last-minute', value: '18% off' },
                { label: 'Member rate', value: '2x points' },
                { label: 'Family stay', value: 'Kids free' },
                { label: 'Weekend', value: 'Breakfast included' },
              ].map((item) => (
                <div key={item.label} className="rounded-[5px] border border-[#F0F0F1] p-3">
                  <p className="text-[13px] text-[#777777]">{item.label}</p>
                  <p className="mt-1 text-[15px] font-semibold text-[#000]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[70px] rounded-t-[10px] bg-white shadow-[0_-3px_12px_rgba(84,87,92,0.05)] z-20">
        <div className="grid h-full grid-cols-5 pt-2">
          {tabs.map((tab) => (
            <button key={tab.label} className="flex flex-col items-center justify-center gap-1">
              <Icon
                type={tab.label === 'Search' ? 'search' : tab.label === 'Trips' ? 'calendar' : tab.label === 'Saved' ? 'heart' : tab.label === 'Inbox' ? 'home' : 'user'}
                active={tab.active}
                className="h-[22px] w-[22px]"
              />
              <span className={`text-[12px] leading-none ${tab.active ? 'font-semibold text-[#007AFF]' : 'font-medium text-[#A3A3A3]'}`}>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}