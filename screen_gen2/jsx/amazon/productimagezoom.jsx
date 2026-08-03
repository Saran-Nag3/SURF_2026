import React from "react";

export default function ProductImageZoomScreen() {
  const thumbnails = [
    { color: "bg-[#D9E7CB]", border: "border-[#111111]", active: true },
    { color: "bg-[#F4F1EA]", border: "border-[#CDCDCD]" },
    { color: "bg-[#D7E8F8]", border: "border-[#CDCDCD]" },
    { color: "bg-[#E7E7E7]", border: "border-[#CDCDCD]" },
    { color: "bg-[#F2D8C6]", border: "border-[#CDCDCD]" },
  ];

  const navItems = [
    { label: "Home", active: false },
    { label: "Search", active: false },
    { label: "Buy Again", active: false },
    { label: "Lists", active: false },
    { label: "Cart", active: true },
  ];

  return (
    <div className="w-[375px] h-[812px] relative overflow-hidden bg-[#FFFFFF] font-['Roboto'] text-[#111111]">
      <div className="absolute inset-0 bg-[#FFFFFF]" />

      {/* Status bar */}
      <div className="absolute top-0 left-0 w-full h-[48px] bg-white flex items-center justify-between px-4 z-30">
        <div className="text-[14px] font-medium leading-none">9:41</div>
        <div className="flex items-center gap-1.5">
          <div className="flex items-end gap-[2px] h-[11px]">
            <div className="w-[3px] h-[4px] bg-[#111111] rounded-sm" />
            <div className="w-[3px] h-[6px] bg-[#111111] rounded-sm" />
            <div className="w-[3px] h-[8px] bg-[#111111] rounded-sm" />
            <div className="w-[3px] h-[10px] bg-[#111111] rounded-sm" />
          </div>
          <svg width="16" height="11" viewBox="0 0 16 11" fill="none" className="block">
            <path d="M1 4.2C3.4 1.8 12.6 1.8 15 4.2" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M3.6 6.8C5.1 5.3 10.9 5.3 12.4 6.8" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M6.2 9.1C7 8.3 9 8.3 9.8 9.1" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="8" cy="9.5" r="0.9" fill="#111111" />
          </svg>
          <div className="w-[22px] h-[11px] border border-[#111111] rounded-[2px] relative">
            <div className="absolute left-[1px] top-[1px] bottom-[1px] right-[5px] bg-[#111111] rounded-[1px]" />
            <div className="absolute right-[-3px] top-[3px] w-[2px] h-[5px] bg-[#111111] rounded-r-sm" />
          </div>
        </div>
      </div>

      {/* Top search bar */}
      <div className="absolute top-[48px] left-0 w-full h-[64px] bg-white flex items-center justify-between px-2 z-20 border-b border-[#EEEEEE]">
        <button className="w-12 h-12 flex items-center justify-center rounded-full active:bg-[#EEEEEE]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 7.5H20" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M4 12H20" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M4 16.5H20" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <div className="flex-1 mx-2">
          <div className="h-12 rounded-[5px] border border-[#CDCDCD] bg-white overflow-hidden flex items-center">
            <div className="flex-1 px-4 text-[14px] text-[#666666]">Search</div>
            <div className="w-12 h-12 bg-[#D9E7CB] flex items-center justify-center border-l border-[#CDCDCD]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="6.8" cy="6.8" r="4.8" stroke="#111111" strokeWidth="1.5" />
                <path d="M10.4 10.4L14 14" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        <button className="w-12 h-12 flex items-center justify-center rounded-full active:bg-[#EEEEEE] relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 7.5H18L17.2 15.2H7.3L6 7.5Z" stroke="#111111" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M9 7.5C9 5.6 10.2 4.5 12 4.5C13.8 4.5 15 5.6 15 7.5" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="9.3" cy="18" r="1.1" fill="#111111" />
            <circle cx="16.7" cy="18" r="1.1" fill="#111111" />
          </svg>
          <div className="absolute top-[9px] right-[9px] min-w-[18px] h-[18px] rounded-full bg-[#111111] text-white text-[10px] leading-[18px] text-center font-medium">
            2
          </div>
        </button>
      </div>

      {/* Main content */}
      <div className="absolute top-[112px] left-0 right-0 bottom-[77px] overflow-hidden bg-white">
        <div className="h-[380px] bg-[#D9E7CB] relative flex items-center justify-center">
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className="px-2.5 py-1 rounded-full bg-white/90 text-[12px] font-medium shadow-sm">
              1/5
            </div>
            <div className="px-2.5 py-1 rounded-full bg-[#111111] text-white text-[12px] font-medium shadow-sm">
              Zoom
            </div>
          </div>

          <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-sm">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 7.2L9 1.8L15 7.2V15H3V7.2Z" stroke="#111111" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M6.5 15V9.5H11.5V15" stroke="#111111" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="w-[315px] h-[250px] relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="315" height="250" viewBox="0 0 315 250" fill="none">
                <path d="M64 143C86 133 112 118 133 108C154 98 171 95 191 96C212 97 228 103 242 117C251 127 263 130 277 131C281 131 284 134 284 138C284 142 281 145 277 145H239C232 145 226 147 220 152L202 168C191 177 177 181 163 181H93C83 181 76 175 72 165L64 143Z" fill="#FFFFFF" />
                <path d="M72 164C92 159 119 147 142 137C163 127 186 125 208 127C228 129 248 137 262 147" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
                <path d="M83 117L116 100C128 93 142 89 156 90L171 91" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
                <path d="M130 108C138 119 148 126 160 130C177 135 193 136 210 134" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
                <path d="M201 98L207 134" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
                <path d="M110 175L121 144" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
                <path d="M135 177L146 142" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
                <path d="M159 179L171 142" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
                <path d="M183 179L194 142" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
                <path d="M207 175L218 145" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
                <path d="M93 121H107" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
                <path d="M111 114H126" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
                <path d="M221 150L241 150" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
                <path d="M245 149L258 144" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
                <path d="M87 145H109" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
                <path d="M105 154H124" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
                <path d="M131 93L154 87" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
                <path d="M158 92L177 96" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
                <path d="M179 97L196 104" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
                <path d="M73 168C93 167 118 167 143 167C168 167 192 167 217 167H249" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
            <div className="absolute left-[84px] top-[42px] w-[148px] h-[90px] rounded-[50%] bg-[#F8F8F8]/40 blur-2xl" />
          </div>

          <button className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-sm flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11.5 3L5.5 9L11.5 15" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-sm flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M6.5 3L12.5 9L6.5 15" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="bg-white rounded-t-[28px] -mt-[22px] relative z-10 shadow-[0_-8px_24px_rgba(0,0,0,0.06)]">
          <div className="px-4 pt-4 pb-2">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-[12px] text-[#666666]">Nike</div>
                <div className="text-[16px] font-medium leading-snug">
                  Air Zoom Pegasus 40
                </div>
              </div>
              <div className="text-right">
                <div className="text-[18px] font-medium">₹8,999</div>
                <div className="text-[12px] text-[#666666] line-through">₹11,499</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[12px] text-[#111111] mb-3">
              <div className="flex items-center gap-1">
                <div className="flex">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1.2L8.7 4.6L12.5 5.1L9.8 7.7L10.4 11.5L7 9.8L3.6 11.5L4.2 7.7L1.5 5.1L5.3 4.6L7 1.2Z" fill="#111111"/></svg>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1.2L8.7 4.6L12.5 5.1L9.8 7.7L10.4 11.5L7 9.8L3.6 11.5L4.2 7.7L1.5 5.1L5.3 4.6L7 1.2Z" fill="#111111"/></svg>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1.2L8.7 4.6L12.5 5.1L9.8 7.7L10.4 11.5L7 9.8L3.6 11.5L4.2 7.7L1.5 5.1L5.3 4.6L7 1.2Z" fill="#111111"/></svg>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1.2L8.7 4.6L12.5 5.1L9.8 7.7L10.4 11.5L7 9.8L3.6 11.5L4.2 7.7L1.5 5.1L5.3 4.6L7 1.2Z" fill="#111111"/></svg>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1.2L8.7 4.6L12.5 5.1L9.8 7.7L10.4 11.5L7 9.8L3.6 11.5L4.2 7.7L1.5 5.1L5.3 4.6L7 1.2Z" fill="#CDCDCD"/></svg>
                </div>
                <span className="ml-1">4.6</span>
              </div>
              <span className="text-[#666666]">• 1,248 ratings</span>
              <span className="text-[#666666]">• Amazon’s Choice</span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-[12px] px-2 py-1 rounded-full bg-[#EEEEEE] text-[#111111]">
                Free delivery Thu, 18 Jul
              </span>
              <span className="text-[12px] px-2 py-1 rounded-full bg-[#D9E7CB] text-[#111111]">
                In stock
              </span>
            </div>

            <div className="flex gap-3 mb-3 overflow-hidden">
              {thumbnails.map((thumb, idx) => (
                <button
                  key={idx}
                  className={`w-[62px] h-[62px] rounded-[8px] border-2 ${thumb.border} ${thumb.color} flex items-center justify-center flex-shrink-0`}
                >
                  <div className="w-[36px] h-[24px] rounded-full bg-white/90 border border-[#111111]/10 relative">
                    <div className="absolute left-[4px] right-[4px] top-[7px] h-[4px] rounded-full bg-[#111111]" />
                    <div className="absolute left-[8px] top-[11px] w-[8px] h-[8px] rounded-full border border-[#111111] bg-white" />
                    <div className="absolute right-[8px] top-[11px] w-[8px] h-[8px] rounded-full border border-[#111111] bg-white" />
                  </div>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between mb-3">
              <div className="text-[14px] font-medium">Alternate images</div>
              <button className="text-[12px] text-[#2B9FEE]">See all</button>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="rounded-[12px] border border-[#EEEEEE] p-3">
                <div className="text-[12px] text-[#666666] mb-1">Angle</div>
                <div className="text-[14px] font-medium">Side profile zoom</div>
              </div>
              <div className="rounded-[12px] border border-[#EEEEEE] p-3">
                <div className="text-[12px] text-[#666666] mb-1">Detail</div>
                <div className="text-[14px] font-medium">Midsole & heel lock</div>
              </div>
            </div>

            <div className="border-t border-[#EEEEEE] pt-3">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[14px] font-medium">Inspect image</div>
                <div className="text-[12px] text-[#666666]">Pinch to zoom</div>
              </div>
              <div className="rounded-[14px] bg-[#F8F8F8] p-3">
                <div className="flex items-center justify-between text-[12px] text-[#666666] mb-2">
                  <span>Zoom level</span>
                  <span>250%</span>
                </div>
                <div className="h-2 rounded-full bg-[#EEEEEE] overflow-hidden">
                  <div className="h-full w-[72%] bg-[#111111] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="absolute bottom-0 left-0 right-0 h-[77px] bg-white border-t border-[#EEEEEE] z-30">
        <div className="h-full grid grid-cols-5">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="flex flex-col items-center justify-center gap-1"
            >
              <div className={`w-6 h-6 flex items-center justify-center ${item.active ? "text-[#111111]" : "text-[#666666]"}`}>
                {item.label === "Home" && (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M3 10.2L11 3L19 10.2V19H13.5V13.2H8.5V19H3V10.2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                )}
                {item.label === "Search" && (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle cx="9.5" cy="9.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M13.7 13.7L19 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
                {item.label === "Buy Again" && (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M7 6H19L17.7 13H8.5L7 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M5 6L4.2 3.8H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="9" cy="17" r="1.2" fill="currentColor" />
                    <circle cx="16" cy="17" r="1.2" fill="currentColor" />
                  </svg>
                )}
                {item.label === "Lists" && (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M7 6H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M7 11H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M7 16H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="4.5" cy="6" r="1" fill="currentColor" />
                    <circle cx="4.5" cy="11" r="1" fill="currentColor" />
                    <circle cx="4.5" cy="16" r="1" fill="currentColor" />
                  </svg>
                )}
                {item.label === "Cart" && (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M6 7H18L17.2 14H7.3L6 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M8.2 7C8.2 5.1 9.6 4 11 4C12.4 4 13.8 5.1 13.8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="8.7" cy="17" r="1" fill="currentColor" />
                    <circle cx="15.3" cy="17" r="1" fill="currentColor" />
                  </svg>
                )}
              </div>
              <span className={`text-[11px] leading-none ${item.active ? "text-[#111111] font-medium" : "text-[#666666]"}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}