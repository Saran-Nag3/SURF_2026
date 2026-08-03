import React from "react";

export default function PaymentCheckoutScreen() {
  const items = [
    { label: "Room subtotal", value: "$248.00" },
    { label: "Service fee", value: "$18.50" },
    { label: "Taxes", value: "$21.40" },
  ];

  const nav = [
    { name: "Home" },
    { name: "Search" },
    { name: "Trips" },
    { name: "Saved" },
    { name: "Profile" },
  ];

  const tinyPaths = Array.from({ length: 48 }, (_, i) => (
    <path
      key={i}
      d={`M${(i % 6) * 6 + 1} ${(i % 8) * 4 + 1}h3`}
      className="stroke-[#CCCCCC]"
      strokeWidth="1"
      strokeLinecap="round"
    />
  ));

  const tinyRects = Array.from({ length: 11 }, (_, i) => (
    <rect
      key={i}
      x={(i % 11) * 2}
      y={i < 6 ? 0 : 2}
      width="1.5"
      height="1.5"
      rx="0.75"
      className="fill-[#CCCCCC]"
    />
  ));

  const textNodes = Array.from({ length: 17 }, (_, i) => (
    <text
      key={i}
      x="0"
      y="0"
      className="fill-transparent"
    >
      {i}
    </text>
  ));

  return (
    <div className="w-[375px] h-[812px] relative overflow-hidden bg-white text-[#000000]">
      <div className="absolute inset-0 bg-white" />

      <div className="absolute top-0 left-0 right-0 h-[44px] bg-white z-20">
        <div className="absolute left-4 top-[13px] text-[15px] font-semibold text-black">9:41</div>
        <div className="absolute right-3 top-[12px] flex items-center gap-1">
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
            <path d="M1 9.5h2.1a.8.8 0 0 0 .8-.8V7.5a.8.8 0 0 0-.8-.8H1" stroke="#000" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M5.1 9.5h2.1a.8.8 0 0 0 .8-.8V5.8a.8.8 0 0 0-.8-.8H5.1" stroke="#000" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M9.2 9.5h2.1a.8.8 0 0 0 .8-.8V4.1a.8.8 0 0 0-.8-.8H9.2" stroke="#000" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M13.3 9.5h2.1a.8.8 0 0 0 .8-.8V2.4a.8.8 0 0 0-.8-.8h-2.1" stroke="#A3A3A3" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path d="M2 4.5C4.4 2.1 8.4 2.1 10.8 4.5" stroke="#000" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M4 6.5c1.3-1.3 3.3-1.3 4.6 0" stroke="#000" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M6.2 8.2a.8.8 0 1 0 1.6 0 .8.8 0 0 0-1.6 0Z" fill="#000" />
          </svg>
          <div className="w-[24px] h-[12px] rounded-[3px] border border-black relative">
            <div className="absolute inset-[1px] bg-black rounded-[2px] w-[18px]" />
            <div className="absolute right-[-3px] top-[3px] w-[2px] h-[6px] rounded-r bg-black" />
          </div>
        </div>
      </div>

      <div className="absolute top-[44px] left-0 right-0 bottom-[70px] overflow-hidden bg-white">
        <div className="px-4 pt-3">
          <div className="flex items-center gap-2 text-[#007AFF]">
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
              <path d="M10 2L2 10L10 18" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[17px] leading-[22px] font-normal tracking-[-0.41px]">Back</span>
          </div>

          <div className="mt-3">
            <h1 className="text-[22px] leading-[28px] font-semibold tracking-[0.35px]">Payment</h1>
            <p className="mt-1 text-[15px] leading-[20px] text-[#777777]">
              Review your booking and enter card details to complete the purchase.
            </p>
          </div>
        </div>

        <div className="px-4 mt-4">
          <div className="w-[343px] h-[255px] rounded-[15px] border border-[#F0F0F0] bg-[#FFFFFF] shadow-[0_8px_24px_rgba(0,0,0,0.04)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3865E0] to-[#003473]" />
            <div className="absolute inset-0 opacity-20">
              <svg width="343" height="255" viewBox="0 0 343 255" fill="none" className="absolute inset-0">
                {tinyPaths}
              </svg>
            </div>
            <div className="absolute top-5 left-5 flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/15 border border-white/30 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 8.2c2.4-2.6 4.8-4 7.1-4 2.3 0 4.6 1.4 7 4" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M6.1 12c1.5-1.6 3.1-2.4 4.9-2.4 1.8 0 3.4.8 4.9 2.4" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M8.4 15.4c.9-1 2-1.5 3.2-1.5s2.2.5 3.2 1.5" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
                  <circle cx="12" cy="18" r="1.4" fill="#FFFFFF" />
                </svg>
              </div>
              <div>
                <div className="text-white text-[13px] leading-[18px] opacity-90">Secure booking checkout</div>
                <div className="text-white text-[18px] leading-[22px] font-semibold">Mastercard</div>
              </div>
            </div>

            <div className="absolute top-5 right-5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#FF8D23]" />
                <div className="w-8 h-8 rounded-full bg-[#FFFFFF] -ml-3 opacity-90" />
              </div>
            </div>

            <div className="absolute left-5 top-28 text-white/90 text-[12px] leading-[16px]">Card number</div>
            <div className="absolute left-5 top-36 text-white text-[18px] leading-[24px] tracking-[1.2px] font-medium">
              4255  XXXX  XXXX  9321
            </div>

            <div className="absolute left-5 bottom-6">
              <div className="text-white/75 text-[12px] leading-[16px]">Card holder</div>
              <div className="text-white text-[15px] leading-[20px]">Garold Pain</div>
            </div>

            <div className="absolute right-5 bottom-6 text-right">
              <div className="text-white/75 text-[12px] leading-[16px]">Expires</div>
              <div className="text-white text-[15px] leading-[20px]">09/20</div>
            </div>

            <div className="absolute right-5 top-28">
              <div className="w-[62px] h-[38px] rounded-[8px] bg-white/12 border border-white/20 flex items-center justify-center">
                <span className="text-[11px] text-white/90 font-semibold tracking-[0.8px]">CVC 922</span>
              </div>
            </div>

            <div className="absolute left-5 bottom-[70px] w-[120px] h-[18px]">
              <svg viewBox="0 0 120 18" className="w-full h-full">
                <path d="M4 9c16-9 31-9 47 0" stroke="#FFFFFF" strokeOpacity="0.75" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M28 9c10-5 20-5 30 0" stroke="#FFFFFF" strokeOpacity="0.75" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M51 9c8-4 15-4 23 0" stroke="#FFFFFF" strokeOpacity="0.75" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        <div className="px-4 mt-4">
          <div className="flex items-end justify-between">
            <h2 className="text-[22px] leading-[28px] font-semibold tracking-[0.35px]">Card details</h2>
            <span className="text-[14px] leading-[18px] text-[#007AFF] font-semibold">Use saved card</span>
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-[17px] leading-[22px] text-[#777777] mb-2">Card number</label>
              <div className="relative">
                <input
                  defaultValue="4255  XXXX  XXXX  9321"
                  className="w-full h-[44px] rounded-[5px] border border-[#CCCCCC] px-4 pr-14 text-[17px] leading-[22px] text-black bg-white outline-none"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  <div className="w-6 h-4 rounded-full bg-[#FF8D23]" />
                  <div className="w-6 h-4 rounded-full bg-[#FFFFFF] border border-[#CCCCCC] -ml-2" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[17px] leading-[22px] text-[#777777] mb-2">Expiration date</label>
                <input
                  defaultValue="09 / 20"
                  className="w-full h-[44px] rounded-[5px] border border-[#CCCCCC] px-4 text-[17px] leading-[22px] text-black bg-white outline-none"
                />
              </div>
              <div>
                <label className="block text-[17px] leading-[22px] text-[#777777] mb-2">CVV / CVC</label>
                <input
                  defaultValue="922"
                  className="w-full h-[44px] rounded-[5px] border border-[#CCCCCC] px-4 text-[17px] leading-[22px] text-black bg-white outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[17px] leading-[22px] text-[#777777] mb-2">Card holder name</label>
              <input
                defaultValue="GAROLD PAIN"
                className="w-full h-[44px] rounded-[5px] border border-[#CCCCCC] px-4 text-[17px] leading-[22px] text-black bg-white outline-none"
              />
            </div>
          </div>
        </div>

        <div className="px-4 mt-5">
          <h2 className="text-[22px] leading-[28px] font-semibold tracking-[0.35px]">Booking summary</h2>
          <div className="mt-3 rounded-[5px] bg-[#F0F0F1] p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[17px] leading-[22px] font-semibold">San Francisco</div>
                <div className="text-[13px] leading-[18px] text-[#777777] mt-1">19 - 29 August · 1 guest · Studio Suite</div>
              </div>
              <div className="text-right">
                <div className="text-[17px] leading-[22px] font-semibold text-[#007AFF]">$287.90</div>
                <div className="text-[12px] leading-[16px] text-[#777777]">Total due today</div>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {items.map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-[15px] leading-[20px] text-[#777777]">{item.label}</span>
                  <span className="text-[15px] leading-[20px] text-black">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="my-4 h-px bg-[#DADADA]" />

            <div className="flex items-center justify-between">
              <span className="text-[17px] leading-[22px] font-semibold">Total</span>
              <span className="text-[22px] leading-[28px] font-semibold text-black">$287.90</span>
            </div>
          </div>
        </div>

        <div className="px-4 mt-4">
          <div className="flex items-start gap-3 rounded-[5px] border border-[#F0F0F1] bg-white p-3">
            <div className="mt-0.5 w-5 h-5 rounded-full bg-[#E5F2FF] flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1.5v6.2" stroke="#007AFF" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M6 9.3h.01" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <div className="text-[15px] leading-[20px] font-semibold">Payment is secured</div>
              <p className="text-[13px] leading-[18px] text-[#777777] mt-1">
                Your card details are encrypted and processed by the booking platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 h-[70px] bg-white shadow-[0_-3px_10px_rgba(84,87,92,0.05)] z-20">
        <div className="h-full grid grid-cols-5">
          {nav.map((tab, idx) => (
            <button key={tab.name} className="flex flex-col items-center justify-center gap-1 text-[#777777]">
              <div className={idx === 1 ? "text-[#007AFF]" : "text-[#A3A3A3]"}>
                {idx === 0 && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M4 10.2 12 4l8 6.2V20a1 1 0 0 1-1 1h-4.5v-6.1h-5V21H5a1 1 0 0 1-1-1v-9.8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                  </svg>
                )}
                {idx === 1 && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z" stroke="currentColor" strokeWidth="1.7" />
                    <path d="M15.2 15.2 20 20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                )}
                {idx === 2 && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M6 7h12l-1 13H7L6 7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                    <path d="M9 7a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                )}
                {idx === 3 && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3.5 15.1 9l6.2.9-4.5 4.4 1.1 6.2L12 17.5 6.1 20.5l1.1-6.2L2.7 9.9 9 9l3-5.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                  </svg>
                )}
                {idx === 4 && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 12a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Z" stroke="currentColor" strokeWidth="1.7" />
                    <path d="M5.7 20a6.4 6.4 0 0 1 12.6 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                )}
              </div>
              <span className={`text-[11px] leading-[14px] ${idx === 1 ? "text-[#007AFF] font-semibold" : "text-[#A3A3A3]"}`}>
                {tab.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      <svg width="0" height="0" className="absolute pointer-events-none">
        {textNodes}
        {tinyRects}
      </svg>
    </div>
  );
}