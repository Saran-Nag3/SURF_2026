import React from 'react';

export default function CalendarDatePickerScreen() {
  const juneDays = [
    { d: 28, muted: true },
    { d: 29, muted: true },
    { d: 30, muted: true },
    { d: 31, muted: true },
    { d: 1 },
    { d: 2 },
    { d: 3 },
    { d: 4 },
    { d: 5 },
    { d: 6 },
    { d: 7 },
    { d: 8 },
    { d: 9 },
    { d: 10 },
    { d: 11 },
    { d: 12 },
    { d: 13 },
    { d: 14, rangeStart: true },
    { d: 15, inRange: true },
    { d: 16, inRange: true },
    { d: 17, inRange: true },
    { d: 18, inRange: true },
    { d: 19, inRange: true },
    { d: 20, inRange: true },
    { d: 21, inRange: true },
    { d: 22, inRange: true },
    { d: 23, inRange: true },
    { d: 24, inRange: true },
    { d: 25, inRange: true },
    { d: 26 },
    { d: 27 },
    { d: 28 },
    { d: 29 },
    { d: 30, rangeEnd: true },
  ];

  const augustDays = [
    { d: 1, muted: true },
    { d: 2, muted: true },
    { d: 3, muted: true },
    { d: 4, muted: true },
    { d: 5 },
    { d: 6 },
    { d: 7 },
    { d: 8 },
    { d: 9 },
    { d: 10 },
    { d: 11 },
    { d: 12 },
    { d: 13 },
    { d: 14 },
    { d: 15 },
    { d: 16 },
    { d: 17 },
    { d: 18 },
    { d: 19 },
    { d: 20 },
    { d: 21 },
    { d: 22 },
    { d: 23 },
    { d: 24 },
    { d: 25 },
    { d: 26 },
    { d: 27 },
    { d: 28 },
    { d: 29 },
    { d: 30 },
    { d: 31 },
  ];

  const bottomTabs = [
    ['Search', 'M9 20V11a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v9', 'M4 20V9a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v11', true],
    ['Calendar', 'M5 8h14', 'M7 5v3M17 5v3M6 11h12M6 15h12'],
    ['Trips', 'M6 7h12v12H6z', 'M9 7v12M15 7v12'],
    ['Saved', 'M12 20l-7-4V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10z', 'M12 16l-3.5-2V7.5h7V14z'],
    ['Profile', 'M12 12a4 4 0 1 0-0.01 0M5 20a7 7 0 0 1 14 0', 'M12 12a4 4 0 1 0-0.01 0'],
  ];

  const StatusBar = () => (
    <div className="absolute top-0 left-0 right-0 h-[44px] flex items-center justify-between px-4 pt-1 z-20">
      <div className="text-[15px] font-semibold tracking-[-0.41px] text-black">9:41</div>
      <div className="flex items-center gap-1.5 text-[#A3A3A3]">
        <svg width="18" height="11" viewBox="0 0 18 11" fill="none" aria-hidden="true">
          <path d="M1 10h2M5 10h2M9 10h2M13 10h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M1 7h2M5 7h2M9 7h2M13 7h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity=".65" />
          <path d="M1 4h2M5 4h2M9 4h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity=".4" />
        </svg>
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" aria-hidden="true">
          <path d="M1 4.5C3.5 2 7.5 2 10 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M3.4 6.8c1.5-1.4 4.1-1.4 5.6 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M6 9c.3-.3.7-.5 1-.5s.7.2 1 .5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <div className="flex items-center gap-[2px]">
          <div className="w-[23px] h-[11px] rounded-[2.5px] border border-[#A3A3A3] p-[1px]">
            <div className="h-full w-[70%] rounded-[1.5px] bg-[#A3A3A3]" />
          </div>
        </div>
      </div>
    </div>
  );

  const MonthCalendar = ({ title, days, compact = false }) => (
    <div className={`rounded-[5px] bg-white ${compact ? 'p-4' : 'p-4'} shadow-[0_0_0_1px_rgba(0,0,0,0.02)]`}>
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="font-['Poppins'] font-semibold text-[22px] leading-[28px] tracking-[0.35px] text-black">{title}</div>
          <div className="text-[12px] leading-[16px] text-[#777777] mt-0.5">Flexible dates for booking</div>
        </div>
        <button className="text-[#3865E0] text-[14px] font-bold leading-[17px]">Whole month</button>
      </div>
      <div className="grid grid-cols-7 text-[14px] leading-[17px] mb-2">
        {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((d) => (
          <div key={d} className={`text-center ${d === 'Sa' || d === 'Su' ? 'text-[#FF1F1F]' : 'text-[#2E3543]'}`}>
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-y-1">
        {days.map((day, idx) => (
          <div key={idx} className="flex justify-center">
            <div
              className={[
                'w-[35px] h-[35px] rounded-[5px] flex items-center justify-center text-[14px] font-medium',
                day.muted ? 'text-black' : 'text-black',
                day.inRange ? 'bg-[rgba(0,122,255,0.2)] text-[#007AFF]' : '',
                day.rangeStart || day.rangeEnd ? 'bg-[#3865E0] text-white' : '',
                day.muted && !day.inRange ? 'opacity-55' : '',
              ].join(' ')}
            >
              {day.d}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const timeSlots = ['08:00', '09:30', '11:00', '13:30', '15:00', '18:00'];

  return (
    <div className="w-[390px] h-[844px] relative overflow-hidden bg-[#F0F0F1] font-sans">
      <StatusBar />

      <div className="absolute inset-x-0 top-[44px] bottom-[70px] overflow-hidden">
        <div className="px-4 pt-3">
          <div className="flex items-center justify-between mb-3">
            <button className="text-[#007AFF] text-[17px] leading-[22px]">‹ Back</button>
            <div className="text-[17px] leading-[22px] font-semibold text-black">Choose data</div>
            <button className="text-[#007AFF] text-[17px] leading-[22px]">Done</button>
          </div>

          <div className="rounded-[10px] bg-white px-4 py-3 mb-3 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[15px] leading-[20px] text-[#777777]">Trip length</div>
                <div className="text-[17px] leading-[22px] text-black">20 Aug - 4 Sep • 1 passenger</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#E5F2FF] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M8 5l8 7-8 7" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          <div className="rounded-[10px] bg-white p-4 mb-3">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <button className="w-[86px] h-[33px] rounded-[5px] bg-[#F5F7FB] text-[#777777] text-[12px] font-medium">Year</button>
                <button className="w-[86px] h-[33px] rounded-[5px] bg-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] text-[#007AFF] text-[12px] font-semibold">Month</button>
              </div>
              <button className="text-[#3865E0] text-[14px] font-bold">Whole month</button>
            </div>

            <MonthCalendar title="June" days={juneDays} />
          </div>

          <div className="rounded-[10px] bg-white p-4 mb-3">
            <MonthCalendar title="August" days={augustDays} compact />
          </div>

          <div className="rounded-[10px] bg-white p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="font-['Poppins'] font-semibold text-[22px] leading-[28px] tracking-[0.35px] text-black">Recommended times</div>
              <button className="text-[#007AFF] text-[14px] font-bold">Edit</button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((slot, idx) => (
                <button
                  key={slot}
                  className={[
                    'h-[38px] rounded-[5px] text-[14px] font-semibold border',
                    idx === 2 ? 'bg-[#007AFF] text-white border-[#007AFF]' : 'bg-white text-[#000000] border-[#DADADA]',
                  ].join(' ')}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-3 rounded-[10px] bg-white p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[17px] leading-[22px] font-semibold text-black">Booking summary</div>
              <div className="text-[14px] text-[#777777]">Updated just now</div>
            </div>
            <div className="space-y-3">
              {[
                ['Stay', '$452', '20 Aug - 4 Sep'],
                ['Fees', '$38', 'Service and taxes included'],
                ['Guests', '1 adult', 'Flexible cancellation'],
              ].map(([a, b, c]) => (
                <div key={a} className="flex items-start justify-between">
                  <div>
                    <div className="text-[15px] leading-[20px] text-black">{a}</div>
                    <div className="text-[12px] leading-[16px] text-[#777777]">{c}</div>
                  </div>
                  <div className="text-[15px] leading-[20px] text-black font-semibold">{b}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 rounded-[10px] bg-white p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[17px] leading-[22px] text-black">Quick actions</div>
              <span className="text-[12px] text-[#777777]">4 options</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {['Set reminder', 'Share dates', 'Add to trip', 'Clear range'].map((chip, i) => (
                <button key={chip} className={`px-3 h-[35px] rounded-[5px] text-[14px] font-semibold border ${i === 0 ? 'bg-[#E5F2FF] border-[#E5F2FF] text-[#007AFF]' : 'bg-white border-[#DADADA] text-[#000000]'}`}>
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-0 h-[70px] bg-white rounded-t-[10px] shadow-[0_-2px_8px_rgba(84,87,92,0.05)] flex items-start justify-around pt-2.5 px-2">
        {bottomTabs.map(([label, p1, p2, active], idx) => (
          <button key={label} className="flex flex-col items-center gap-1 w-[64px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={active ? 'text-[#3865E0]' : 'text-[#CCCCCC]'}>
              <path d={p1} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d={p2} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity={idx === 0 ? 1 : 1} />
            </svg>
            <span className={`text-[11px] leading-[14px] ${active ? 'text-[#3865E0] font-semibold' : 'text-[#A3A3A3]'}`}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}