import React from 'react';

export default function CartItemScreen() {
  const navItems = [
    { label: 'Home', active: false },
    { label: 'Search', active: false },
    { label: 'Cart', active: true },
    { label: 'Orders', active: false },
    { label: 'Menu', active: false },
  ];

  return (
    <div className="w-[390px] h-[844px] relative overflow-hidden bg-[#FFFFFF] font-['Roboto'] text-[#111111]">
      <div className="absolute inset-x-0 top-0 h-[32px] bg-[#FFFFFF] flex items-center justify-between px-4">
        <div className="text-[14px] font-medium leading-none">9:41</div>
        <div className="flex items-center gap-1.5">
          <svg width="18" height="11" viewBox="0 0 18 11" fill="none" aria-hidden="true">
            <path d="M1 9H2.8" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M4 7.2H5.8" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M7 5.4H8.8" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M10 3.6H11.8" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M13 1.8H14.8" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <svg width="16" height="11" viewBox="0 0 16 11" fill="none" aria-hidden="true">
            <path d="M1 4.5C3.2 2.3 12.8 2.3 15 4.5" stroke="#111111" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M4 7C5.8 5.2 10.2 5.2 12 7" stroke="#111111" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M7 9.2C7.6 8.6 8.4 8.6 9 9.2" stroke="#111111" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <div className="w-[24px] h-[11px] rounded-[2px] border border-[#111111] relative">
            <div className="absolute inset-y-[1px] left-[1px] right-[5px] rounded-[1px] bg-[#111111]" />
            <div className="absolute right-[-3px] top-[3px] w-[2px] h-[5px] rounded-r-[1px] bg-[#111111]" />
          </div>
        </div>
      </div>

      <div className="absolute top-[32px] inset-x-0 h-[64px] bg-[#FFFFFF] border-b border-[#EEEEEE] flex items-center px-2 gap-2">
        <button className="w-12 h-12 flex items-center justify-center rounded-full">
          <svg width="21" height="14" viewBox="0 0 21 14" fill="none" aria-hidden="true">
            <path d="M20 7H2" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M7 1.5L1.5 7L7 12.5" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex-1 h-12 rounded-[5px] border border-[#CDCDCD] bg-white flex items-center overflow-hidden">
          <div className="flex-1 px-4 text-[14px] text-[#666666]">Search Amazon.in</div>
          <div className="w-12 h-12 bg-[#D9E7CB] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M11.5 11.5L15 15" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="7" cy="7" r="4.25" stroke="#111111" strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        <button className="w-12 h-12 relative flex items-center justify-center rounded-full">
          <svg width="18" height="15" viewBox="0 0 18 15" fill="none" aria-hidden="true">
            <path d="M1.5 1.5H3.2L4.9 9.2H14.8L16.4 4.1H5.6" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.1 13C5.7 13 6.2 12.5 6.2 11.9C6.2 11.3 5.7 10.8 5.1 10.8C4.5 10.8 4 11.3 4 11.9C4 12.5 4.5 13 5.1 13Z" fill="#111111" />
            <path d="M13.1 13C13.7 13 14.2 12.5 14.2 11.9C14.2 11.3 13.7 10.8 13.1 10.8C12.5 10.8 12 11.3 12 11.9C12 12.5 12.5 13 13.1 13Z" fill="#111111" />
          </svg>
          <div className="absolute top-[7px] right-[6px] w-[16px] h-[16px] rounded-full bg-[#111111] flex items-center justify-center text-[8px] font-medium text-white">
            1
          </div>
        </button>
      </div>

      <div className="absolute top-[96px] inset-x-0 bottom-[64px] overflow-hidden bg-[#FFFFFF]">
        <div className="px-4 pt-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-[20px] font-medium leading-tight">Cart</p>
              <p className="text-[12px] text-[#666666] mt-1">1 item in your cart</p>
            </div>
            <button className="text-[14px] font-medium text-[#2B9FEE]">Delete</button>
          </div>

          <div className="rounded-[16px] border border-[#EEEEEE] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="p-3 flex gap-3">
              <div className="w-[96px] h-[96px] rounded-[12px] bg-[#D9E7CB] flex items-center justify-center shrink-0 relative overflow-hidden">
                <div className="absolute inset-3 rounded-[10px] bg-white border border-[#CDCDCD] flex items-center justify-center">
                  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden="true">
                    <path d="M10 26.5L17 18.5L23.5 24L30.5 15.5L35 20.5V31H10V26.5Z" fill="#CDCDCD" />
                    <path d="M14 13.5C15.3807 13.5 16.5 12.3807 16.5 11C16.5 9.61929 15.3807 8.5 14 8.5C12.6193 8.5 11.5 9.61929 11.5 11C11.5 12.3807 12.6193 13.5 14 13.5Z" fill="#CDCDCD" />
                  </svg>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[14px] font-medium leading-[18px] text-[#111111]">
                      JBL Tune 510BT, On Ear Wireless Headphones
                    </p>
                    <p className="text-[12px] text-[#666666] mt-1">
                      Black • by JBL Store
                    </p>
                    <div className="flex items-center gap-1 mt-2">
                      <div className="flex text-[#FFB400]">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><path d="M6 0.9l1.44 3.09 3.39.49-2.46 2.4.58 3.38L6 8.66 3.05 10.26l.58-3.38-2.46-2.4 3.39-.49L6 0.9z"/></svg>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><path d="M6 0.9l1.44 3.09 3.39.49-2.46 2.4.58 3.38L6 8.66 3.05 10.26l.58-3.38-2.46-2.4 3.39-.49L6 0.9z"/></svg>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><path d="M6 0.9l1.44 3.09 3.39.49-2.46 2.4.58 3.38L6 8.66 3.05 10.26l.58-3.38-2.46-2.4 3.39-.49L6 0.9z"/></svg>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><path d="M6 0.9l1.44 3.09 3.39.49-2.46 2.4.58 3.38L6 8.66 3.05 10.26l.58-3.38-2.46-2.4 3.39-.49L6 0.9z"/></svg>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><path d="M6 0.9l1.44 3.09 3.39.49-2.46 2.4.58 3.38L6 8.66 3.05 10.26l.58-3.38-2.46-2.4 3.39-.49L6 0.9z"/></svg>
                      </div>
                      <span className="text-[12px] text-[#666666]">4,812</span>
                    </div>
                  </div>
                  <button className="text-[#666666] w-8 h-8 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8H13" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M8 3V13" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <span className="text-[18px] font-semibold">₹2,299</span>
                  <span className="text-[12px] text-[#666666] line-through">₹3,999</span>
                  <span className="text-[12px] font-medium text-[#B12704]">42% off</span>
                </div>

                <div className="mt-3 flex items-center gap-2 text-[12px]">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#D9E7CB] text-[#111111]">
                    <span className="w-2 h-2 rounded-full bg-[#111111]" />
                    In stock
                  </span>
                  <span className="text-[#666666]">Free delivery by</span>
                  <span className="font-medium">Mon, 22 Jul</span>
                </div>
              </div>
            </div>

            <div className="px-3 pb-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center rounded-full border border-[#CDCDCD] overflow-hidden">
                  <button className="w-9 h-9 flex items-center justify-center text-[18px] leading-none">−</button>
                  <div className="w-10 h-9 border-x border-[#CDCDCD] flex items-center justify-center text-[14px] font-medium">
                    1
                  </div>
                  <button className="w-9 h-9 flex items-center justify-center text-[18px] leading-none">+</button>
                </div>
                <button className="px-3 h-9 rounded-full border border-[#111111] text-[13px] font-medium">
                  Save for later
                </button>
                <button className="px-3 h-9 rounded-full border border-[#111111] text-[13px] font-medium">
                  Share
                </button>
              </div>
            </div>

            <div className="border-t border-[#EEEEEE] px-3 py-3">
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-[#666666]">Subtotal</span>
                <span className="font-semibold">₹2,299</span>
              </div>
              <div className="flex items-center justify-between text-[13px] mt-2">
                <span className="text-[#666666]">Delivery</span>
                <span className="font-medium text-[#111111]">FREE</span>
              </div>
              <div className="flex items-center justify-between text-[13px] mt-2">
                <span className="text-[#666666]">Savings</span>
                <span className="font-medium text-[#B12704]">₹1,700</span>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-[16px] border border-[#EEEEEE] bg-white p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[14px] font-medium">Delivery address</p>
                <p className="text-[12px] text-[#666666] mt-1">Apartment 24B, Hiranandani Gardens, Powai</p>
              </div>
              <button className="text-[12px] font-medium text-[#2B9FEE]">Change</button>
            </div>
            <div className="mt-3 flex gap-2">
              <div className="flex-1 h-2 rounded-full bg-[#EEEEEE] overflow-hidden">
                <div className="h-full w-[72%] bg-[#629FE0] rounded-full" />
              </div>
              <span className="text-[12px] text-[#666666]">72%</span>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[16px] font-medium">Frequently bought together</p>
              <span className="text-[12px] text-[#2B9FEE]">See all</span>
            </div>

            <div className="flex gap-3 overflow-hidden">
              {[
                { title: 'JBL Carrying Case', price: '₹499' },
                { title: 'Fast Charging Cable', price: '₹299' },
                { title: 'Audio Splitter', price: '₹199' },
              ].map((item, idx) => (
                <div key={idx} className="w-[118px] shrink-0 rounded-[14px] border border-[#EEEEEE] p-2">
                  <div className="h-[66px] rounded-[10px] bg-[#EEEEEE] flex items-center justify-center mb-2">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                      <path d="M7 18L12 13L16 17L21 11L23 13.5V22H7V18Z" fill="#CDCDCD" />
                      <path d="M10 9.5C11.1046 9.5 12 8.60457 12 7.5C12 6.39543 11.1046 5.5 10 5.5C8.89543 5.5 8 6.39543 8 7.5C8 8.60457 8.89543 9.5 10 9.5Z" fill="#CDCDCD" />
                    </svg>
                  </div>
                  <p className="text-[12px] leading-[16px] font-medium line-clamp-2">{item.title}</p>
                  <p className="text-[12px] text-[#666666] mt-1">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-[64px] bg-[#FFFFFF] border-t border-[#EEEEEE] flex items-center justify-between px-2">
        {navItems.map((item) => (
          <button key={item.label} className="flex-1 flex flex-col items-center justify-center gap-1">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${item.active ? 'bg-[#D9E7CB]' : ''}`}>
              {item.label === 'Home' && (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M2 8.5L9 2.5L16 8.5" stroke="#111111" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.5 7.8V15H13.5V7.8" stroke="#111111" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {item.label === 'Search' && (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="4.75" stroke="#111111" strokeWidth="1.4" />
                  <path d="M11.8 11.8L15.5 15.5" stroke="#111111" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              )}
              {item.label === 'Cart' && (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M1.5 2.5H3L4.2 9.5H13.7L15.2 5.2H4.5" stroke="#111111" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="6.1" cy="14.2" r="1.1" fill="#111111" />
                  <circle cx="12.8" cy="14.2" r="1.1" fill="#111111" />
                </svg>
              )}
              {item.label === 'Orders' && (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M4 3.5H14V14.5H4V3.5Z" stroke="#111111" strokeWidth="1.4" />
                  <path d="M6 7H12" stroke="#111111" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M6 10H10" stroke="#111111" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              )}
              {item.label === 'Menu' && (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M3 5H15" stroke="#111111" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M3 9H15" stroke="#111111" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M3 13H15" stroke="#111111" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              )}
            </div>
            <span className={`text-[10px] leading-none ${item.active ? 'font-medium text-[#111111]' : 'text-[#666666]'}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}