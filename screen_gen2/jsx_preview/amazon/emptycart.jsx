export default function EmptyCartScreen() {
  const statusTime = "9:41";

  const bottomTabs = [
    { label: "Home", active: false },
    { label: "Search", active: false },
    { label: "Deals", active: false },
    { label: "Cart", active: true },
    { label: "Menu", active: false },
  ];

  const suggestions = [
    {
      title: "Echo Buds with charging case",
      price: "$69.99",
      rating: "4.4",
      reviews: "12.8K",
    },
    {
      title: "Fire TV Stick 4K",
      price: "$49.99",
      rating: "4.7",
      reviews: "88K",
    },
    {
      title: "Kitchen storage set",
      price: "$23.49",
      rating: "4.2",
      reviews: "6.1K",
    },
  ];

  const recent = [
    "Order history",
    "Saved for later",
    "Prime benefits",
    "Your recommendations",
  ];

  const IconMenu = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );

  const IconSearch = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="5.5" stroke="#111111" strokeWidth="1.6" />
      <path d="M15 15l4 4" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );

  const IconCart = () => (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path d="M3.5 5.5h2l1.5 9h10.8l1.2-6H7.8" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="19" r="1.4" fill="#111111" />
      <circle cx="17" cy="19" r="1.4" fill="#111111" />
      <path d="M6 5.5l.4-2h3.2" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );

  const IconChevron = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M9 6l6 6-6 6" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const IconBattery = () => (
    <div className="flex items-center gap-1">
      <div className="h-[11px] w-[22px] rounded-[3px] border border-[#111111] p-[1px]">
        <div className="h-full w-[70%] rounded-[2px] bg-[#111111]" />
      </div>
      <div className="h-[5px] w-[2px] rounded-r-full bg-[#111111]" />
    </div>
  );

  const StatusIcons = () => (
    <div className="flex items-center gap-1.5 text-[#111111]">
      <svg viewBox="0 0 18 12" className="h-3.5 w-[18px]" fill="none" aria-hidden="true">
        <path d="M1.5 11h1.8V8.2H1.5V11Zm3.4 0h1.8V6.8H4.9V11Zm3.4 0h1.8V4.8H8.3V11Zm3.4 0h1.8V2.6h-1.8V11Z" fill="#111111" />
      </svg>
      <svg viewBox="0 0 16 12" className="h-3.5 w-4" fill="none" aria-hidden="true">
        <path d="M8 10.5a1 1 0 110-2 1 1 0 010 2Zm-6.7-6a10.2 10.2 0 0113.4 0M3 7a6 6 0 018 0M5.6 9.4a2.8 2.8 0 013.8 0" stroke="#111111" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
      <IconBattery />
    </div>
  );

  const ProductThumb = () => (
    <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-[#D9E7CB]">
      <svg viewBox="0 0 120 92" className="h-16 w-20" fill="none" aria-hidden="true">
        <rect x="18" y="28" width="84" height="40" rx="7" fill="#FFFFFF" />
        <path d="M31 53h58" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
        <path d="M36 35h48" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
        <path d="M48 18c4 3 8 5 12 5s8-2 12-5" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
        <circle cx="40" cy="73" r="6" fill="#111111" />
        <circle cx="80" cy="73" r="6" fill="#111111" />
        <path d="M23 39h74" stroke="#111111" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="3 4" />
      </svg>
    </div>
  );

  return (
    <div className="w-[390px] h-[844px] relative overflow-hidden bg-white font-['Roboto'] text-[#111111]">
      <div className="absolute inset-x-0 top-0 h-8 bg-white flex items-center justify-between px-4">
        <span className="text-[14px] font-medium leading-none">{statusTime}</span>
        <StatusIcons />
      </div>

      <div className="absolute inset-x-0 top-8 h-16 bg-white border-b border-[#EEEEEE] flex items-center px-2.5">
        <button className="h-12 w-12 flex items-center justify-center rounded-full">
          <IconMenu />
        </button>

        <div className="mx-1 flex h-12 flex-1 items-center rounded-[5px] border border-[#CDCDCD] bg-white overflow-hidden">
          <div className="flex-1 px-4 text-[14px] text-[#666666]">
            Search Amazon
          </div>
          <div className="h-12 w-12 flex items-center justify-center bg-[#D9E7CB]">
            <IconSearch />
          </div>
        </div>

        <button className="relative h-12 w-12 flex items-center justify-center rounded-full">
          <IconCart />
          <span className="absolute right-1.5 top-1.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#111111] px-1 text-[8px] font-medium leading-none text-white">
            0
          </span>
        </button>
      </div>

      <div className="absolute left-0 right-0 top-[96px] bottom-[72px] overflow-hidden">
        <div className="h-full overflow-y-auto">
          <div className="px-4 pt-6">
            <div className="mx-auto flex max-w-[343px] flex-col items-center rounded-[24px] bg-white">
              <div className="relative mt-1 flex h-[220px] w-full items-center justify-center">
                <div className="absolute top-9 h-32 w-40 rounded-[28px] bg-[#F4F4F4]" />
                <div className="absolute top-16 h-24 w-28 rounded-[18px] bg-[#D9E7CB]" />
                <div className="absolute top-24 left-[92px] h-14 w-14 rounded-full bg-white border-2 border-[#111111]" />
                <div className="absolute top-16 right-[84px] h-7 w-7 rounded-full bg-[#111111]" />
                <div className="absolute bottom-10 left-[74px] h-8 w-8 rounded-full bg-[#CDCDCD]" />
                <div className="absolute bottom-12 right-[74px] h-8 w-8 rounded-full bg-[#CDCDCD]" />

                <svg viewBox="0 0 240 160" className="relative z-10 h-[180px] w-[260px]" fill="none" aria-hidden="true">
                  <path d="M51 114c18-18 36-24 69-24 28 0 49 8 69 26" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
                  <path d="M58 117h124" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M76 81c10-17 26-31 44-31 18 0 32 6 41 18" stroke="#111111" strokeWidth="2.6" strokeLinecap="round" />
                  <path d="M88 101h74" stroke="#111111" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M89 65c-11 9-15 19-15 29" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M157 66c11 10 16 20 16 30" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M96 120c-2-7 0-15 6-20" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M142 120c2-7 0-15-6-20" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M116 52c3-8 9-13 16-14" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M121 39c4 2 7 5 8 9" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M63 94l-12 9" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M177 94l12 9" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M98 146c8 4 15 6 22 6s14-2 22-6" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M69 128c-9 4-13 10-13 18" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M171 128c9 4 13 10 13 18" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M104 35c-4 3-7 7-8 12" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M136 35c4 3 7 7 8 12" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M84 147l-10 9" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M156 147l10 9" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M116 88c2 3 5 5 8 5s6-2 8-5" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M113 97c2 2 4 3 7 3" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M127 97c2 2 4 3 7 3" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M103 62c4-6 9-9 17-9" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M120 53c8 0 13 3 17 9" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M94 74c3-4 8-7 14-8" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M146 74c-3-4-8-7-14-8" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M88 131c7-4 14-6 21-6" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M151 131c-7-4-14-6-21-6" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M101 114c6 3 12 4 19 4" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M120 118c7 0 13-1 19-4" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              <div className="w-full rounded-t-[28px] bg-white px-4 pb-6 pt-2">
                <h1 className="text-[23px] font-normal leading-[28px] text-[#111111]">
                  Your cart is empty
                </h1>
                <p className="mt-2 text-[14px] leading-5 text-[#666666]">
                  Check out our recommendations or sign in to see items from your saved lists and orders.
                </p>

                <div className="mt-5 flex flex-col gap-3">
                  <button className="h-10 rounded-full bg-[#111111] px-6 text-[14px] font-medium text-white shadow-sm">
                    Sign in
                  </button>
                  <button className="h-10 rounded-full border-2 border-[#111111] bg-white px-6 text-[14px] font-medium text-[#111111]">
                    Sign up
                  </button>
                  <button className="h-10 rounded-full border-2 border-[#111111] bg-transparent px-6 text-[14px] font-medium text-[#111111]">
                    Continue shopping
                  </button>
                </div>

                <div className="mt-7">
                  <div className="flex items-center justify-between">
                    <h2 className="text-[16px] font-medium text-[#111111]">Start with these picks</h2>
                    <span className="text-[14px] font-medium text-[#2B9FEE]">See all</span>
                  </div>

                  <div className="mt-3 space-y-3">
                    {suggestions.map((item, index) => (
                      <div key={index} className="rounded-[18px] border border-[#EEEEEE] bg-white p-3 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                        <div className="flex gap-3">
                          <div className="h-[78px] w-[78px] shrink-0">
                            <ProductThumb />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-[14px] font-medium leading-5 text-[#111111]">
                              {item.title}
                            </p>
                            <div className="mt-1 flex items-center gap-2">
                              <span className="text-[16px] font-medium text-[#111111]">{item.price}</span>
                              <span className="rounded-full bg-[#D9E7CB] px-2 py-0.5 text-[12px] font-medium text-[#111111]">
                                Deals
                              </span>
                            </div>
                            <div className="mt-2 flex items-center gap-1 text-[12px] text-[#666666]">
                              <span className="text-[#111111]">★</span>
                              <span>{item.rating}</span>
                              <span>({item.reviews})</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7">
                  <div className="flex items-center justify-between">
                    <h2 className="text-[16px] font-medium text-[#111111]">Your shortcuts</h2>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    {recent.map((item) => (
                      <button
                        key={item}
                        className="flex h-12 items-center justify-between rounded-[14px] border border-[#CDCDCD] bg-white px-3 text-left text-[14px] text-[#111111]"
                      >
                        <span>{item}</span>
                        <IconChevron />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-7 rounded-[18px] bg-[#F7F7F7] p-4">
                  <p className="text-[14px] font-medium text-[#111111]">Need help with orders?</p>
                  <p className="mt-1 text-[14px] leading-5 text-[#666666]">
                    Use sign in to track past purchases, delivery updates, and saved items.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[72px] border-t border-[#EEEEEE] bg-white">
        <div className="grid h-full grid-cols-5">
          {bottomTabs.map((tab) => (
            <button
              key={tab.label}
              className={`flex flex-col items-center justify-center gap-1 ${
                tab.active ? "text-[#111111]" : "text-[#737373]"
              }`}
            >
              <div
                className={`flex h-6 w-6 items-center justify-center ${
                  tab.active ? "scale-105" : ""
                }`}
              >
                {tab.label === "Home" ? (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
                    <path d="M4 11.5l8-6 8 6V20H4v-8.5Z" stroke={tab.active ? "#111111" : "#737373"} strokeWidth="1.6" strokeLinejoin="round" />
                    <path d="M10 20v-6h4v6" stroke={tab.active ? "#111111" : "#737373"} strokeWidth="1.6" strokeLinejoin="round" />
                  </svg>
                ) : tab.label === "Search" ? (
                  <IconSearch />
                ) : tab.label === "Deals" ? (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
                    <path d="M7 5h10l2 7-7 7-7-7 2-7Z" stroke={tab.active ? "#111111" : "#737373"} strokeWidth="1.6" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="1.2" fill={tab.active ? "#111111" : "#737373"} />
                  </svg>
                ) : tab.label === "Cart" ? (
                  <IconCart />
                ) : (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
                    <path d="M5 7h14M5 12h14M5 17h14" stroke={tab.active ? "#111111" : "#737373"} strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                )}
              </div>
              <span className="text-[10px] font-medium leading-none">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}