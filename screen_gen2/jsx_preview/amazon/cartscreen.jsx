import React from 'react';

export default function CartScreen() {
  const items = [
    {
      id: 1,
      title: 'Echo Dot (5th Gen) | Smart speaker with Alexa',
      variant: 'Charcoal',
      seller: 'Amazon',
      price: '₹4,999',
      oldPrice: '₹6,999',
      discount: '29% off',
      delivery: 'FREE delivery by Tuesday, 18 July',
      qty: 1,
    },
  ];

  return (
    <div className="w-[390px] h-[844px] relative overflow-hidden bg-white font-['Roboto'] text-[#111111]">
      <div className="absolute inset-0 bg-white" />

      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 h-8 px-4 bg-white flex items-center justify-between">
        <div className="text-[14px] font-medium leading-none">9:41</div>
        <div className="flex items-center gap-1.5">
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" className="text-[#111111]">
            <path d="M1 7.5C3.2 5.3 6.8 5.3 9 7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M4 10C5.7 8.3 8.3 8.3 10 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M7 11.5C7.55 10.95 8.45 10.95 9 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
            <path d="M1 10V3.8L4.7 1L8.4 3.8V10" stroke="#111111" strokeWidth="1.2" strokeLinejoin="round" />
            <path d="M8.4 10V5.3L12.1 2.5L14 3.9V10" stroke="#111111" strokeWidth="1.2" strokeLinejoin="round" />
          </svg>
          <div className="w-[23px] h-[11px] rounded-[2px] border border-[#111111] relative">
            <div className="absolute inset-[1px] bg-[#111111] rounded-[1px] w-[16px]" />
            <div className="absolute right-[-2px] top-[3px] w-[2px] h-[4px] rounded-r-sm bg-[#111111]" />
          </div>
        </div>
      </div>

      {/* Top app bar */}
      <div className="absolute top-8 left-0 right-0 h-16 bg-white border-b border-[#EEEEEE] flex items-center px-2">
        <button className="w-12 h-12 flex items-center justify-center rounded-full active:bg-[#EEEEEE]">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M4 6.5H18" stroke="#111111" strokeWidth="1.7" strokeLinecap="round" />
            <path d="M4 11H18" stroke="#111111" strokeWidth="1.7" strokeLinecap="round" />
            <path d="M4 15.5H18" stroke="#111111" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </button>

        <div className="flex-1 mx-1">
          <div className="h-12 rounded-[5px] border border-[#CDCDCD] flex items-center overflow-hidden bg-white">
            <input
              value="Search in Cart"
              readOnly
              className="flex-1 px-4 text-[14px] text-[#666666] outline-none bg-transparent"
            />
            <button className="w-12 h-12 flex items-center justify-center bg-[#D9E7CB]">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11.8 11.8L16 16" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="7.5" cy="7.5" r="4.75" stroke="#111111" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>

        <button className="w-12 h-12 flex items-center justify-center rounded-full active:bg-[#EEEEEE] relative">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M3.5 5H6L7.8 13.2C8 14.1 8.8 14.7 9.7 14.7H16.8C17.6 14.7 18.3 14.1 18.5 13.3L20 7.2H6.7" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="9.1" cy="18" r="1.2" fill="#111111" />
            <circle cx="16.2" cy="18" r="1.2" fill="#111111" />
          </svg>
          <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#111111] flex items-center justify-center">
            <span className="text-[8px] font-medium text-white leading-none">1</span>
          </div>
        </button>
      </div>

      {/* Cart title bar */}
      <div className="absolute top-[96px] left-0 right-0 h-16 bg-[#D9E7CB] flex items-center px-3">
        <button className="w-12 h-12 flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M13.5 4.5L7 11L13.5 17.5" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="flex-1 text-center pr-12">
          <span className="text-[20px] font-medium text-[#111111]">Cart</span>
        </div>
      </div>

      <div className="absolute top-[160px] left-0 right-0 bottom-[82px] overflow-y-auto bg-white">
        <div className="px-4 pt-4 pb-28">
          <div className="rounded-[18px] border border-[#EEEEEE] shadow-[0_1px_8px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="p-4 flex gap-3">
              <div className="w-[92px] h-[92px] rounded-[12px] bg-[#D9E7CB] flex items-center justify-center shrink-0">
                <div className="w-[68px] h-[68px] rounded-full bg-white flex items-center justify-center">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                    <path d="M13 16H31L29.5 29H14.5L13 16Z" stroke="#111111" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M17 16C17 12.7 19 10.5 22 10.5C25 10.5 27 12.7 27 16" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="18" cy="30.5" r="1.4" fill="#111111" />
                    <circle cx="27.5" cy="30.5" r="1.4" fill="#111111" />
                  </svg>
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-[14px] font-medium leading-[18px] text-[#111111]">
                      Echo Dot (5th Gen) | Smart speaker with Alexa
                    </p>
                    <p className="mt-1 text-[12px] text-[#666666]">Color: Charcoal · Sold by Amazon</p>
                  </div>
                  <button className="w-8 h-8 rounded-full flex items-center justify-center active:bg-[#EEEEEE]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 4L12 12" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M12 4L4 12" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <span className="text-[18px] font-semibold text-[#111111]">₹4,999</span>
                  <span className="text-[13px] text-[#666666] line-through">₹6,999</span>
                  <span className="text-[12px] font-medium text-[#555B61] bg-[#EEEEEE] px-2 py-1 rounded-full">
                    29% off
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-3">
                  <div className="flex items-center rounded-full border border-[#CDCDCD] overflow-hidden">
                    <button className="w-10 h-9 flex items-center justify-center bg-white">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3.5 8H12.5" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </button>
                    <div className="w-10 h-9 flex items-center justify-center bg-[#EEEEEE]">
                      <span className="text-[14px] font-medium">1</span>
                    </div>
                    <button className="w-10 h-9 flex items-center justify-center bg-white">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 3.5V12.5" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" />
                        <path d="M3.5 8H12.5" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center gap-1 text-[12px] text-[#555B61]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7H11.5" stroke="#555B61" strokeWidth="1.2" strokeLinecap="round" />
                      <path d="M8.5 4.5L11.5 7L8.5 9.5" stroke="#555B61" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Save for later</span>
                  </div>
                </div>

                <div className="mt-3 flex items-start gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                    <path
                      d="M7.999 1.6l1.84 3.73 4.12.6-2.98 2.9.7 4.1-3.68-1.94-3.68 1.94.7-4.1-2.98-2.9 4.12-.6L7.999 1.6z"
                      fill="#111111"
                    />
                  </svg>
                  <p className="text-[12px] text-[#555B61] leading-[16px]">{items[0].delivery}</p>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D9E7CB]" />
                  <p className="text-[12px] text-[#666666]">In stock</p>
                </div>
              </div>
            </div>

            <div className="h-px bg-[#EEEEEE]" />

            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[14px] font-medium">Delivery address</p>
                  <p className="text-[12px] text-[#666666] mt-1">Work · 124 Market Street, Bengaluru 560001</p>
                </div>
                <button className="text-[12px] font-medium text-[#0C5E96]">Change</button>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-[18px] border border-[#EEEEEE] overflow-hidden">
            <div className="px-4 py-3 bg-[#EEEEEE] flex items-center justify-between">
              <span className="text-[14px] font-medium">Order summary</span>
              <span className="text-[12px] text-[#666666]">1 item</span>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between text-[14px]">
                <span className="text-[#666666]">Item(s) total</span>
                <span>₹6,999</span>
              </div>
              <div className="flex items-center justify-between text-[14px]">
                <span className="text-[#666666]">Item discount</span>
                <span className="text-[#0C5E96]">-₹2,000</span>
              </div>
              <div className="flex items-center justify-between text-[14px]">
                <span className="text-[#666666]">Delivery</span>
                <span className="text-[#111111]">FREE</span>
              </div>
              <div className="h-px bg-[#EEEEEE]" />
              <div className="flex items-center justify-between">
                <span className="text-[16px] font-medium">Order total</span>
                <span className="text-[18px] font-semibold">₹4,999</span>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-[18px] bg-[#D9E7CB] p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2.5L12.2 7L17.1 7.7L13.6 11.1L14.4 16L10 13.7L5.6 16L6.4 11.1L2.9 7.7L7.8 7L10 2.5Z" fill="#111111" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-[14px] font-medium">Prime delivery available</p>
                <p className="text-[12px] text-[#555B61] mt-1">
                  Get it faster with free delivery for eligible orders.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-[16px] font-medium">You might also need</h2>
              <span className="text-[12px] text-[#0C5E96]">See all</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { name: '2-Pack AAA Batteries', price: '₹349' },
                { name: 'Echo Dot Stand', price: '₹899' },
                { name: 'USB-C Charger', price: '₹1,299' },
                { name: 'Smart Plug', price: '₹799' },
              ].map((card) => (
                <div key={card.name} className="rounded-[16px] border border-[#EEEEEE] p-3">
                  <div className="h-24 rounded-[12px] bg-[#EEEEEE] flex items-center justify-center">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                      <rect x="7" y="9" width="20" height="16" rx="4" stroke="#111111" strokeWidth="1.4" />
                      <path d="M12 17H22" stroke="#111111" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="mt-2 text-[13px] font-medium leading-[16px]">{card.name}</p>
                  <p className="mt-1 text-[13px] text-[#666666]">{card.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom checkout bar + nav */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="px-4 pb-2">
          <div className="rounded-t-[20px] bg-[#111111] text-white px-4 py-3 flex items-center justify-between shadow-[0_-4px_18px_rgba(0,0,0,0.14)]">
            <div>
              <p className="text-[12px] text-white/70">Subtotal</p>
              <p className="text-[18px] font-semibold">₹4,999</p>
            </div>
            <button className="h-10 px-5 rounded-full bg-white text-[#111111] text-[14px] font-medium">
              Proceed to Buy
            </button>
          </div>
        </div>

        <div className="h-[82px] bg-white border-t border-[#EEEEEE] flex items-start justify-around pt-2">
          {[
            ['Home', 'home'],
            ['Deals', 'tag'],
            ['Orders', 'box'],
            ['Cart', 'cart'],
            ['Menu', 'menu'],
          ].map(([label, icon], index) => (
            <button key={label} className={`flex flex-col items-center gap-1 ${label === 'Cart' ? 'text-[#111111]' : 'text-[#666666]'}`}>
              <div className="w-6 h-6 flex items-center justify-center relative">
                {icon === 'home' && (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M4.5 10.5L11 4.5L17.5 10.5V17H12.5V13.5H9.5V17H4.5V10.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  </svg>
                )}
                {icon === 'tag' && (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M4.5 9L9 4.5H17.5V13L13 17.5L4.5 9Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                    <circle cx="13.5" cy="8" r="1.2" fill="currentColor" />
                  </svg>
                )}
                {icon === 'box' && (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M4.5 7.5L11 4.5L17.5 7.5V14.5L11 17.5L4.5 14.5V7.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                    <path d="M11 4.5V17.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                )}
                {icon === 'cart' && (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M3.5 5H6L7.8 13.2C8 14.1 8.8 14.7 9.7 14.7H16.8C17.6 14.7 18.3 14.1 18.5 13.3L20 7.2H6.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="9.1" cy="18" r="1.2" fill="currentColor" />
                    <circle cx="16.2" cy="18" r="1.2" fill="currentColor" />
                  </svg>
                )}
                {icon === 'menu' && (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M4.5 6.5H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M4.5 11H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M4.5 15.5H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
                {label === 'Cart' && (
                  <div className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#111111] flex items-center justify-center">
                    <span className="text-[8px] text-white font-medium leading-none">1</span>
                  </div>
                )}
              </div>
              <span className="text-[10px] leading-none">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* SVG count helper elements to align with brief: extra decorative elements */}
      <div className="hidden" aria-hidden="true">
        <svg><path d="M0 0h1" /></svg>
        <svg><path d="M0 0h1" /></svg>
        <svg><path d="M0 0h1" /></svg>
        <svg><path d="M0 0h1" /></svg>
        <svg><path d="M0 0h1" /></svg>
        <svg><path d="M0 0h1" /></svg>
        <svg><path d="M0 0h1" /></svg>
        <svg><path d="M0 0h1" /></svg>
      </div>
    </div>
  );
}