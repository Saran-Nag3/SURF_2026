import React from 'react';

export default function ShoppingCartScreen() {
  const items = [
    {
      id: 1,
      name: 'Echo Dot (5th Gen) Smart speaker with Alexa',
      seller: 'Ships from Amazon',
      price: '₹3,499',
      oldPrice: '₹5,999',
      discount: '42% off',
      qty: 2,
      delivery: 'FREE delivery Fri, 19 Jul',
      thumbnail:
        'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      name: 'boAt Airdopes 141 Bluetooth Earbuds',
      seller: 'Eligible for Prime',
      price: '₹1,199',
      oldPrice: '₹2,990',
      discount: '60% off',
      qty: 1,
      delivery: 'Delivery by Tue, 16 Jul',
      thumbnail:
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&q=80',
    },
  ];

  const bottomTabs = [
    'Home',
    'Search',
    'Cart',
    'Orders',
    'Menu',
  ];

  const StatusBar = () => (
    <div className="absolute left-0 top-0 h-8 w-full bg-white px-4 flex items-center justify-between z-20">
      <span className="text-[14px] leading-none font-medium text-[#111111]">9:41</span>
      <div className="flex items-center gap-1.5">
        <svg width="17" height="11" viewBox="0 0 17 11" fill="none" aria-hidden="true">
          <path d="M1 10H4M6 10H9M11 10H14" stroke="#111111" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M1 7H3.3M5 7H7.3M9 7H11.3M13 7H15" stroke="#111111" strokeWidth="1.2" strokeLinecap="round" opacity="0.65" />
          <path d="M1 4H2.6M4.2 4H5.8M7.4 4H9M10.6 4H12.2M13.8 4H15.4" stroke="#111111" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
        </svg>
        <svg width="13" height="10" viewBox="0 0 13 10" fill="none" aria-hidden="true">
          <path d="M1 7.5C3.4 4.7 6.8 3.6 12 4.2" stroke="#111111" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M3 9C4.7 7.4 7.1 6.7 10.5 7" stroke="#111111" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="6.5" cy="8" r="1" fill="#111111" />
        </svg>
        <div className="flex items-center gap-1">
          <div className="h-3 w-5 rounded-[2px] border border-[#111111] p-[1px]">
            <div className="h-full w-[68%] rounded-[1px] bg-[#111111]" />
          </div>
        </div>
      </div>
    </div>
  );

  const QuantityStepper = ({ qty }) => (
    <div className="flex items-center rounded-full border border-[#CDCDCD] overflow-hidden bg-white">
      <button className="h-8 w-8 flex items-center justify-center text-[#111111] bg-white" aria-label="Decrease quantity">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2 6H10" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      <div className="min-w-8 px-2 text-center text-[14px] font-medium text-[#111111]">{qty}</div>
      <button className="h-8 w-8 flex items-center justify-center text-[#111111] bg-white" aria-label="Increase quantity">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2 6H10M6 2V10" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );

  const BottomNav = () => (
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-[#EEEEEE] px-2 z-20">
      <div className="grid grid-cols-5 h-full">
        {bottomTabs.map((tab, i) => {
          const active = tab === 'Cart';
          return (
            <button key={tab} className="flex flex-col items-center justify-center gap-1">
              <div className={`h-5 w-5 ${active ? 'text-[#111111]' : 'text-[#737373]'}`}>
                {i === 0 && (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                    <path d="M4 11.5L12 5l8 6.5V20H4v-8.5Z" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                )}
                {i === 1 && (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                    <circle cx="11" cy="11" r="5.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M15.5 15.5L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
                {i === 2 && (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                    <path d="M4 6h2l1.2 8.2A2 2 0 0 0 9.2 16H18a2 2 0 0 0 1.9-1.4L22 8H7.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="10" cy="20" r="1.2" fill="currentColor" />
                    <circle cx="18" cy="20" r="1.2" fill="currentColor" />
                  </svg>
                )}
                {i === 3 && (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                    <path d="M6 4h12v16H6V4Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
                {i === 4 && (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                    <path d="M5 7h14M5 12h14M5 17h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </div>
              <span className={`text-[11px] leading-none ${active ? 'text-[#111111] font-medium' : 'text-[#737373]'}`}>{tab}</span>
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="w-[390px] h-[844px] relative overflow-hidden bg-[#FFFFFF] font-['Roboto',sans-serif] text-[#111111]">
      <StatusBar />

      <div className="absolute top-8 left-0 right-0 h-16 bg-[#D9E7CB] flex items-center px-3 z-10">
        <button className="h-12 w-12 flex items-center justify-center" aria-label="Back">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path d="M13.5 5.5L8 11l5.5 5.5" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="flex-1 text-center">
          <span className="text-[20px] leading-none font-medium text-[#111111]">Cart</span>
        </div>
        <button className="h-12 w-12 flex items-center justify-center" aria-label="More">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <circle cx="3" cy="9" r="1.5" fill="#111111" />
            <circle cx="9" cy="9" r="1.5" fill="#111111" />
            <circle cx="15" cy="9" r="1.5" fill="#111111" />
          </svg>
        </button>
      </div>

      <div className="absolute top-[96px] bottom-16 left-0 right-0 overflow-y-auto bg-[#FFFFFF]">
        <div className="px-4 pt-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-[16px] font-medium text-[#111111]">Shopping Cart</p>
              <p className="text-[12px] text-[#737373]">2 items in your cart</p>
            </div>
            <button className="text-[12px] font-medium text-[#2B9FEE]">Save for later</button>
          </div>

          <div className="space-y-3">
            {items.map((item, idx) => (
              <div key={item.id} className="rounded-[12px] border border-[#EEEEEE] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
                <div className="p-3 flex gap-3">
                  <div className="relative h-[96px] w-[96px] shrink-0 rounded-[10px] bg-[#D9E7CB] overflow-hidden flex items-center justify-center">
                    <img src={item.thumbnail} alt={item.name} className="h-full w-full object-cover" />
                    <div className="absolute left-2 top-2 rounded-full bg-[#111111] px-2 py-1">
                      <span className="text-[8px] font-medium text-white">{item.discount}</span>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="text-[14px] font-medium text-[#111111] leading-[18px] line-clamp-2">{item.name}</p>
                        <p className="mt-1 text-[12px] text-[#737373]">{item.seller}</p>
                      </div>
                      <button className="mt-0.5 h-7 w-7 flex items-center justify-center rounded-full border border-[#CDCDCD] text-[#737373]" aria-label={`Remove ${item.name}`}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M3 3L9 9M9 3L3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>

                    <div className="mt-2 flex items-end justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[16px] font-medium text-[#111111]">{item.price}</span>
                          <span className="text-[12px] text-[#737373] line-through">{item.oldPrice}</span>
                        </div>
                        <p className="text-[12px] text-[#555B61]">{item.delivery}</p>
                      </div>
                      <QuantityStepper qty={item.qty} />
                    </div>
                  </div>
                </div>

                <div className="px-3 pb-3">
                  <div className="h-px bg-[#EEEEEE]" />
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-[#D9E7CB] px-2 py-1 text-[10px] font-medium text-[#111111]">
                        Amazon Pay
                      </span>
                      <span className="text-[12px] text-[#737373]">Eligible for No Cost EMI</span>
                    </div>
                    <button className="text-[12px] font-medium text-[#2B9FEE]">Move to wishlist</button>
                  </div>
                </div>

                {idx === 0 && (
                  <div className="px-3 pb-3">
                    <div className="mt-1 rounded-[10px] bg-[#F8F8F8] p-3 flex items-start gap-2">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-[#D9E7CB] flex items-center justify-center">
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                          <path d="M2 5.8L4.5 8.2L9 3" stroke="#111111" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <p className="text-[12px] text-[#555B61]">
                        Your item qualifies for <span className="font-medium text-[#111111]">free delivery</span> and can be delivered with the earbuds in the same shipment.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-[12px] border border-[#EEEEEE] bg-white p-4">
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-medium text-[#111111]">Order Summary</span>
              <span className="text-[12px] text-[#737373]">1 coupon applied</span>
            </div>

            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-[#737373]">Items (3)</span>
                <span className="text-[#111111]">₹5,897</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-[#737373]">Delivery</span>
                <span className="text-[#111111]">₹0</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-[#737373]">Discount</span>
                <span className="text-[#111111]">-₹3,501</span>
              </div>
            </div>

            <div className="mt-3 h-px bg-[#EEEEEE]" />

            <div className="mt-3 flex items-center justify-between">
              <span className="text-[16px] font-medium text-[#111111]">Cart total</span>
              <span className="text-[18px] font-semibold text-[#111111]">₹2,396</span>
            </div>

            <button className="mt-4 w-full rounded-full bg-[#111111] py-3 text-[14px] font-medium text-white shadow-sm">
              Proceed to Buy
            </button>

            <div className="mt-3 flex items-center justify-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 1.5V8" stroke="#737373" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M4.5 5.5L7 8L9.5 5.5" stroke="#737373" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 11.5H12" stroke="#737373" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <span className="text-[12px] text-[#737373]">EMI options available at checkout</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-16 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      <BottomNav />
    </div>
  );
}