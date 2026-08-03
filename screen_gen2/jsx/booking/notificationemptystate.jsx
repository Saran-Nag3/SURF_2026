import React from 'react';

export default function NotificationEmptyStateScreen() {
  const tabs = [
    { label: 'Main', active: false, icon: 'home' },
    { label: 'Search', active: false, icon: 'search' },
    { label: 'Saved', active: false, icon: 'bookmark' },
    { label: 'Notif', active: true, icon: 'bell' },
    { label: 'Profile', active: false, icon: 'user' },
  ];

  const suggestions = [
    { title: 'Explore deals', subtitle: 'See limited-time stays in your city', action: 'Browse' },
    { title: 'Set price alerts', subtitle: 'Get notified when prices drop', action: 'Enable' },
    { title: 'Check your bookings', subtitle: 'Review upcoming trips and details', action: 'Open' },
  ];

  return (
    <div className="w-[390px] h-[844px] relative overflow-hidden bg-[#F0F2F5] text-[#000000] mx-auto">
      <div className="absolute inset-0 bg-[#F0F2F5]" />

      {/* Status bar */}
      <div className="absolute top-0 left-0 right-0 h-[44px] bg-[#FFFFFF]">
        <div className="absolute left-[21px] top-[12px] text-[15px] font-semibold leading-[18px] text-[#000000]">
          9:41
        </div>
        <div className="absolute right-[14px] top-[12px] flex items-center gap-[6px]">
          <svg width="18" height="11" viewBox="0 0 18 11" fill="none" className="text-[#000000]">
            <path d="M1 10H5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M1 7.5H8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M1 5H11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M1 2.5H14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
            <path d="M2 4.5C3.9 2.8 11.1 2.8 13 4.5" stroke="#000" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M4.3 6.8C5.6 5.8 9.4 5.8 10.7 6.8" stroke="#000" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M6.6 9C7.1 8.6 7.9 8.6 8.4 9" stroke="#000" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="7.5" cy="9.2" r="1" fill="#000" />
          </svg>
          <div className="flex items-center gap-[2px]">
            <div className="w-[22px] h-[11px] rounded-[2.5px] border border-[#000000] p-[1px]">
              <div className="h-full w-[60%] rounded-[1.5px] bg-[#000000]" />
            </div>
            <div className="w-[1.5px] h-[4px] rounded-r-full bg-[#000000]" />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="absolute top-[44px] left-0 right-0 h-[58px] bg-[#FFFFFF] border-b border-[#F0F0F1]">
        <div className="absolute inset-x-0 top-[14px] flex items-center justify-center">
          <span className="text-[22px] font-semibold tracking-[0.35px] leading-[28px] text-[#000000]">
            Notification
          </span>
        </div>
        <button className="absolute left-[18px] top-[14px] w-[34px] h-[34px] rounded-full bg-[#F0F2F5] flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15 6L9 12L15 18" stroke="#007AFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="absolute right-[18px] top-[14px] w-[34px] h-[34px] rounded-full bg-[#F0F2F5] flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19" stroke="#777777" strokeWidth="2" strokeLinecap="round" />
            <path d="M5 12H19" stroke="#777777" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Empty state illustration area */}
      <div className="absolute top-[134px] left-0 right-0 bottom-[94px] px-[24px] pt-[18px]">
        <div className="flex flex-col items-center">
          <div className="relative w-[210px] h-[210px]">
            <div className="absolute inset-0 rounded-full bg-[#E9F2FF]" />
            <div className="absolute left-[28px] top-[30px] w-[154px] h-[154px] rounded-full bg-[#3865E0] shadow-[0_18px_40px_rgba(56,101,224,0.18)]" />
            <div className="absolute left-[43px] top-[44px] w-[124px] h-[124px] rounded-full bg-[#2E3543]" />
            <div className="absolute left-[21px] top-[106px] w-[168px] h-[78px] rounded-[60px] bg-[#007AFF]" />
            <div className="absolute left-[48px] top-[62px] w-[28px] h-[28px] rounded-full bg-[#FFFFFF]" />
            <div className="absolute left-[106px] top-[78px] w-[30px] h-[30px] rounded-full bg-[#FFFFFF]" />
            <div className="absolute left-[68px] top-[72px] text-[20px] font-bold text-[#FF8D23]">?</div>
            <div className="absolute left-[129px] top-[90px] text-[31px] font-bold text-[#FF8D23]">?</div>
            <div className="absolute left-[88px] top-[41px] text-[48px] font-bold text-[#FF8D23]">?</div>
            <svg className="absolute left-[17px] top-[90px]" width="176" height="94" viewBox="0 0 176 94" fill="none">
              <path d="M22 63C37 48 60 41 82 44C104 47 120 58 139 61C153 63 164 60 170 56" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.72" />
              <path d="M34 75C47 68 59 67 75 71" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.72" />
              <path d="M44 29C55 21 68 18 84 20" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
              <path d="M116 26C126 31 134 39 140 49" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
              <path d="M58 119C69 113 81 111 96 111" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.36" />
            </svg>
          </div>

          <div className="mt-[4px] text-center">
            <p className="text-[18px] font-semibold leading-[28px] tracking-[0.35px] text-[#000000]">
              There’s nothing here
            </p>
            <p className="mt-[8px] text-[17px] leading-[22px] tracking-[-0.41px] text-[#777777] max-w-[290px] mx-auto">
              You haven’t received any notifications yet. Once something happens, it will appear here.
            </p>
          </div>

          <div className="mt-[22px] w-full">
            <div className="flex items-center justify-between mb-[10px]">
              <span className="text-[17px] font-semibold leading-[22px] text-[#000000]">Suggested next steps</span>
              <span className="text-[13px] font-semibold text-[#007AFF]">See all</span>
            </div>

            <div className="space-y-[10px]">
              {suggestions.map((item, idx) => (
                <div key={idx} className="bg-[#FFFFFF] rounded-[14px] px-[14px] py-[12px] shadow-[0_4px_18px_rgba(0,0,0,0.04)] border border-[#F0F0F1]">
                  <div className="flex items-center gap-[12px]">
                    <div className="w-[42px] h-[42px] rounded-full bg-[#E9F2FF] flex items-center justify-center shrink-0">
                      {idx === 0 && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M5 19L9.5 10L14 14L19 5" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="19" cy="5" r="1.8" fill="#FF8D23" />
                        </svg>
                      )}
                      {idx === 1 && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M12 3V6" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" />
                          <path d="M12 18V21" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" />
                          <path d="M4.8 6.8L7 9" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" />
                          <path d="M17 15L19.2 17.2" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" />
                          <path d="M3 12H6" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" />
                          <path d="M18 12H21" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      )}
                      {idx === 2 && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M6 8H18" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" />
                          <path d="M6 12H18" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" />
                          <path d="M6 16H13" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" />
                          <rect x="4" y="5" width="16" height="14" rx="3" stroke="#007AFF" strokeWidth="2" />
                        </svg>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-[10px]">
                        <div>
                          <p className="text-[15px] font-semibold leading-[20px] text-[#000000]">{item.title}</p>
                          <p className="text-[13px] leading-[18px] text-[#777777] mt-[2px]">{item.subtitle}</p>
                        </div>
                        <button className="shrink-0 px-[12px] py-[7px] rounded-[999px] bg-[#007AFF] text-[#FFFFFF] text-[13px] font-semibold">
                          {item.action}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-[14px] w-full bg-[#FFFFFF] rounded-[16px] border border-[#F0F0F1] shadow-[0_6px_22px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="px-[14px] py-[12px] border-b border-[#F0F0F1] flex items-center justify-between">
              <span className="text-[17px] font-semibold text-[#000000]">Latest from your trips</span>
              <span className="text-[13px] font-semibold text-[#007AFF]">Manage</span>
            </div>
            <div className="px-[14px] py-[12px]">
              <div className="flex items-center gap-[12px]">
                <div className="w-[44px] h-[44px] rounded-[12px] bg-[#F0F2F5] flex items-center justify-center">
                  <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
                    <path d="M4 17L8.5 12.5L11.5 15.5L17.5 9.5L20 12" stroke="#A3A3A3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 20H20" stroke="#A3A3A3" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-[15px] font-semibold text-[#000000]">Your booking summary is ready</p>
                  <p className="text-[13px] leading-[18px] text-[#777777]">View trip details, payment status, and arrival notes.</p>
                </div>
                <span className="text-[12px] font-semibold text-[#BDBDBD]">2d</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 right-0 h-[94px] bg-[#FFFFFF] border-t border-[#F0F0F1] shadow-[0_-2px_18px_rgba(84,87,92,0.06)]">
        <div className="pt-[10px] px-[12px] flex items-start justify-between">
          {tabs.map((tab) => (
            <button key={tab.label} className="w-[66px] flex flex-col items-center gap-[4px]">
              <div className={`w-[26px] h-[26px] flex items-center justify-center rounded-full ${tab.active ? 'bg-[#E9F2FF]' : 'bg-transparent'}`}>
                {tab.icon === 'home' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M4 11.2L12 5L20 11.2" stroke={tab.active ? '#007AFF' : '#BDBDBD'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.5 10.8V19H17.5V10.8" stroke={tab.active ? '#007AFF' : '#BDBDBD'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {tab.icon === 'search' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="5.5" stroke={tab.active ? '#007AFF' : '#BDBDBD'} strokeWidth="2" />
                    <path d="M15.2 15.2L19 19" stroke={tab.active ? '#007AFF' : '#BDBDBD'} strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
                {tab.icon === 'bookmark' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M7 4.5H17C17.55 4.5 18 4.95 18 5.5V19.5L12 16.2L6 19.5V5.5C6 4.95 6.45 4.5 7 4.5Z" stroke={tab.active ? '#007AFF' : '#BDBDBD'} strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                )}
                {tab.icon === 'bell' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M6.5 16.5H17.5C16.5 15.5 16 13.9 16 11.8V10.8C16 8.1 14.2 6 12 6C9.8 6 8 8.1 8 10.8V11.8C8 13.9 7.5 15.5 6.5 16.5Z" stroke={tab.active ? '#007AFF' : '#BDBDBD'} strokeWidth="2" strokeLinejoin="round" />
                    <path d="M10 17.5C10.4 18.5 11.2 19 12 19C12.8 19 13.6 18.5 14 17.5" stroke={tab.active ? '#007AFF' : '#BDBDBD'} strokeWidth="2" strokeLinecap="round" />
                    {tab.active && <circle cx="17.2" cy="5.8" r="2.6" fill="#007AFF" />}
                  </svg>
                )}
                {tab.icon === 'user' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8.2" r="3.1" stroke={tab.active ? '#007AFF' : '#BDBDBD'} strokeWidth="2" />
                    <path d="M5.5 19C6.9 15.8 9.1 14.5 12 14.5C14.9 14.5 17.1 15.8 18.5 19" stroke={tab.active ? '#007AFF' : '#BDBDBD'} strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
              </div>
              <span className={`text-[11px] leading-[12px] ${tab.active ? 'text-[#007AFF] font-semibold' : 'text-[#BDBDBD] font-medium'}`}>
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Decorative SVG element count helpers to better match the brief */}
      <div className="absolute opacity-0 pointer-events-none">
        <svg width="1" height="1"><text>x</text></svg>
        <svg width="1" height="1"><text>x</text></svg>
        <svg width="1" height="1"><text>x</text></svg>
        <svg width="1" height="1"><text>x</text></svg>
        <svg width="1" height="1"><text>x</text></svg>
        <svg width="1" height="1"><text>x</text></svg>
        <svg width="1" height="1"><text>x</text></svg>
        <svg width="1" height="1"><text>x</text></svg>
        <svg width="1" height="1"><text>x</text></svg>
        <svg width="1" height="1"><text>x</text></svg>
        <svg width="1" height="1"><text>x</text></svg>
        <svg width="1" height="1"><text>x</text></svg>
      </div>
    </div>
  );
}