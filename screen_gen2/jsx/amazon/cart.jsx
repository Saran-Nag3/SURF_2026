import React from "react";

export default function CartScreen() {
  const item = {
    title: "Amazon Basics 15W Fast Charger, USB-C Cable Included",
    seller: "Sold by Appario Retail",
    rating: "4.5",
    reviews: "12,438",
    originalPrice: "$24.99",
    salePrice: "$14.99",
    delivery: "Get it by Thursday, Aug 15",
    coupon: "Save 20% with coupon",
    count: 2,
  };

  const nav = [
    { label: "Home", active: false },
    { label: "Orders", active: false },
    { label: "Cart", active: true },
    { label: "Profile", active: false },
  ];

  return (
    <div className="w-[390px] h-[844px] relative overflow-hidden bg-white font-['Roboto'] text-[#111111]">
      <div className="absolute inset-x-0 top-0 h-[32px] bg-white flex items-center justify-between px-4">
        <div className="text-[14px] font-medium leading-none text-[#111111]">9:41</div>
        <div className="flex items-center gap-[4px]">
          <svg width="18" height="11" viewBox="0 0 18 11" fill="none" aria-hidden="true">
            <rect x="0.5" y="3.5" width="2" height="4" rx="1" fill="#111111" />
            <rect x="4" y="2.5" width="2" height="5" rx="1" fill="#111111" />
            <rect x="7.5" y="1.5" width="2" height="6" rx="1" fill="#111111" />
            <path d="M12 8.5C12 6.01472 14.0147 4 16.5 4" stroke="#111111" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M12 6.5C12 5.11929 13.1193 4 14.5 4" stroke="#111111" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M15.5 9.5H17.5V1.5H12.5" stroke="#111111" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="16" height="11" viewBox="0 0 16 11" fill="none" aria-hidden="true">
            <path d="M1 4.5C3.5 1.7 12.5 1.7 15 4.5" stroke="#111111" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M3.5 6.8C5.4 4.9 10.6 4.9 12.5 6.8" stroke="#111111" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M6.25 9.1C7.1 8.2 8.9 8.2 9.75 9.1" stroke="#111111" strokeWidth="1.3" strokeLinecap="round" />
            <circle cx="8" cy="10" r="0.9" fill="#111111" />
          </svg>
          <div className="w-[24px] h-[11px] rounded-[2px] border border-[#111111] p-[1px] flex items-center">
            <div className="h-full w-[16px] bg-[#111111] rounded-[1px]" />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 top-[32px] h-[64px] bg-white border-b border-[#EEEEEE] flex items-center px-3 gap-2">
        <button className="w-12 h-12 flex items-center justify-center rounded-full active:bg-[#EEEEEE]">
          <svg width="21" height="14" viewBox="0 0 21 14" fill="none" aria-hidden="true">
            <path d="M19.5 7H2M2 7L7.5 1.5M2 7L7.5 12.5" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex-1 h-12 rounded-[5px] border border-[#CDCDCD] bg-white flex items-center overflow-hidden">
          <div className="flex-1 px-4 text-[14px] text-[#666666] leading-none">
            Search Amazon.in
          </div>
          <div className="w-12 h-12 bg-[#D9E7CB] flex items-center justify-center">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true">
              <circle cx="7.5" cy="7.5" r="4.75" stroke="#111111" strokeWidth="1.5" />
              <path d="M11 11L15 15" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <button className="w-12 h-12 flex items-center justify-center relative rounded-full active:bg-[#EEEEEE]">
          <svg width="21" height="18" viewBox="0 0 21 18" fill="none" aria-hidden="true">
            <path d="M1.5 1.5H4L5.5 11.5H16.6L18.5 4.5H6" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="8" cy="15.2" r="1.2" fill="#111111" />
            <circle cx="15" cy="15.2" r="1.2" fill="#111111" />
          </svg>
          <div className="absolute top-[6px] right-[6px] w-[16px] h-[16px] rounded-full bg-[#111111] text-white text-[8px] font-medium flex items-center justify-center">
            1
          </div>
        </button>
      </div>

      <div className="absolute inset-x-0 top-[96px] h-[50px] bg-[#D9E7CB] flex items-center px-4 border-b border-[#CDCDCD]">
        <button className="w-12 h-12 -ml-2 flex items-center justify-center">
          <svg width="21" height="14" viewBox="0 0 21 14" fill="none" aria-hidden="true">
            <path d="M19.5 7H2M2 7L7.5 1.5M2 7L7.5 12.5" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="flex-1 text-center text-[20px] font-medium text-black pr-10">Cart</div>
      </div>

      <div className="absolute inset-x-0 top-[146px] bottom-[70px] bg-white overflow-hidden">
        <div className="px-4 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-[16px] font-medium text-[#111111]">Shopping cart</span>
            <span className="text-[12px] text-[#666666]">1 item</span>
          </div>

          <div className="mt-3 h-[48px] rounded-[8px] border border-[#CDCDCD] bg-white flex items-center px-3 gap-3">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="4.5" stroke="#666666" strokeWidth="1.5" />
              <path d="M10.5 10.5L14 14" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input className="flex-1 outline-none text-[14px] placeholder:text-[#888888]" placeholder="Find items in your cart" />
          </div>
        </div>

        <div className="mt-4 border-t border-[#EEEEEE]" />

        <div className="px-4 py-4">
          <div className="rounded-[12px] border border-[#EEEEEE] shadow-[0_1px_0_rgba(0,0,0,0.04)] overflow-hidden bg-white">
            <div className="flex items-start gap-3 p-3">
              <div className="w-[92px] h-[92px] rounded-[8px] bg-[#D9E7CB] flex items-center justify-center shrink-0">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
                  <rect x="10" y="16" width="36" height="24" rx="4" fill="#FFFFFF" />
                  <path d="M14 38V18H42V38" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 24H34" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M22 29H30" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-medium leading-[20px] text-[#111111]">
                  {item.title}
                </p>
                <p className="mt-1 text-[12px] text-[#666666]">{item.seller}</p>

                <div className="mt-1 flex items-center gap-2">
                  <div className="flex items-center gap-[2px] text-[#111111]">
                    <span className="text-[12px] font-medium">{item.rating}</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M6 0.9L7.36 4.08L10.8 4.37L8.2 6.61L9 9.9L6 8.17L3 9.9L3.8 6.61L1.2 4.37L4.64 4.08L6 0.9Z" fill="#111111" />
                    </svg>
                  </div>
                  <span className="text-[12px] text-[#666666]">({item.reviews})</span>
                </div>

                <div className="mt-2 flex items-end gap-2">
                  <span className="text-[18px] font-medium text-[#111111]">{item.salePrice}</span>
                  <span className="text-[12px] text-[#666666] line-through">{item.originalPrice}</span>
                </div>

                <p className="mt-1 text-[12px] text-[#2B9FEE]">{item.coupon}</p>
                <p className="mt-1 text-[12px] text-[#666666]">{item.delivery}</p>
              </div>
            </div>

            <div className="border-t border-[#EEEEEE] px-3 py-3 flex items-center justify-between">
              <button className="w-9 h-9 rounded-full border border-[#CDCDCD] flex items-center justify-center bg-white">
                <svg width="14" height="2" viewBox="0 0 14 2" fill="none" aria-hidden="true">
                  <path d="M1 1H13" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>

              <div className="min-w-[56px] h-9 px-3 rounded-[8px] border border-[#CDCDCD] flex items-center justify-center text-[14px] font-medium">
                {item.count}
              </div>

              <button className="w-9 h-9 rounded-full border border-[#CDCDCD] flex items-center justify-center bg-white">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1V13M1 7H13" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>

              <div className="flex-1" />
              <button className="text-[12px] font-medium text-[#2B9FEE]">Delete</button>
            </div>
          </div>

          <div className="mt-4 rounded-[12px] bg-[#EEEEEE] p-3">
            <div className="flex items-start gap-2">
              <div className="mt-[2px] w-4 h-4 rounded-full bg-[#111111] flex items-center justify-center text-white text-[10px] font-bold">
                i
              </div>
              <p className="text-[12px] leading-[18px] text-[#333333]">
                Eligible for free delivery and easy returns. Check out soon to keep stock reserved.
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-[12px] border border-[#EEEEEE] p-4">
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-medium text-[#111111]">Subtotal</span>
              <span className="text-[16px] font-medium text-[#111111]">$29.98</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-[12px] text-[#666666]">
              <span>Delivery</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="mt-3 h-[1px] bg-[#EEEEEE]" />
            <div className="mt-3 flex items-center justify-between">
              <span className="text-[14px] font-medium text-[#111111]">Order total</span>
              <span className="text-[18px] font-semibold text-[#111111]">$29.98</span>
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            <button className="flex-1 h-12 rounded-full bg-[#111111] text-white text-[16px] font-medium">
              Proceed to checkout
            </button>
            <button className="w-12 h-12 rounded-full border border-[#111111] text-[#111111] flex items-center justify-center bg-white">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3 9H15" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M9 3L15 9L9 15" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[14px] font-medium text-[#111111]">Saved for later</span>
              <span className="text-[12px] text-[#666666]">2 items</span>
            </div>

            <div className="space-y-3">
              {[
                { name: "Anker USB-C to USB-C Cable, 6 ft", price: "$9.99" },
                { name: "Amazon Basics Screen Cleaner Kit", price: "$6.49" },
              ].map((saved) => (
                <div key={saved.name} className="flex items-center gap-3 p-3 rounded-[10px] border border-[#EEEEEE]">
                  <div className="w-12 h-12 rounded-[8px] bg-[#F5F5F5] flex items-center justify-center shrink-0">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                      <rect x="6" y="8" width="16" height="10" rx="2" fill="#D9E7CB" />
                      <path d="M8 18L20 18" stroke="#111111" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-[13px] font-medium text-[#111111] leading-[18px]">{saved.name}</p>
                    <p className="text-[12px] text-[#666666]">{saved.price}</p>
                  </div>
                  <button className="text-[12px] font-medium text-[#2B9FEE]">Move to cart</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[70px] bg-white border-t border-[#EEEEEE] flex items-stretch justify-around px-2">
        {nav.map((tab) => (
          <button key={tab.label} className="flex-1 flex flex-col items-center justify-center gap-1">
            <div className={`w-6 h-6 flex items-center justify-center ${tab.active ? "text-[#111111]" : "text-[#7C848C]"}`}>
              {tab.label === "Home" && (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <path d="M3 10.5L11 3L19 10.5V19H3V10.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
              )}
              {tab.label === "Orders" && (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <rect x="4" y="4" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M7 8H15M7 11H15M7 14H12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              )}
              {tab.label === "Cart" && (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <path d="M3.5 4.5H5.2L6.4 13.2H16.8L18 7.2H7.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="8.5" cy="17.2" r="1.3" fill="currentColor" />
                  <circle cx="15.5" cy="17.2" r="1.3" fill="currentColor" />
                </svg>
              )}
              {tab.label === "Profile" && (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <circle cx="11" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M5.5 18c1.2-3 4-4.6 5.5-4.6S14.8 15 16.5 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              )}
            </div>
            <span className={`text-[11px] leading-none ${tab.active ? "text-[#111111] font-medium" : "text-[#7C848C]"}`}>
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}