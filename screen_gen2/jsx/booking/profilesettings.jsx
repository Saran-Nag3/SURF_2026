export default function ProfileSettingsScreen() {
  const documents = [
    { title: 'Passport', subtitle: 'Expires 24 Oct 2028', status: 'Verified', accent: 'bg-[#007AFF]' },
    { title: 'Driver’s license', subtitle: 'Updated 12 Feb 2026', status: 'Uploaded', accent: 'bg-[#FF8D23]' },
    { title: 'Travel insurance', subtitle: 'Policy #T-482910', status: 'Active', accent: 'bg-[#3865E0]' },
  ];

  const settings = [
    { title: 'Manage my account', subtitle: 'Personal info, email, phone', icon: 'user' },
    { title: 'Privacy and safety', subtitle: 'Password, login, visibility', icon: 'lock' },
    { title: 'Notifications', subtitle: 'Email, SMS, in-app updates', icon: 'bell' },
    { title: 'Payment methods', subtitle: 'Cards and billing addresses', icon: 'card' },
    { title: 'Help & support', subtitle: 'FAQs and contact options', icon: 'help' },
  ];

  const navItems = [
    { label: 'Home', active: false },
    { label: 'Search', active: false },
    { label: 'Trips', active: false },
    { label: 'Inbox', active: false },
    { label: 'Profile', active: true },
  ];

  const Icon = ({ type, active = false }) => {
    const stroke = active ? '#007AFF' : '#A3A3A3';
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {type === 'home' && (
          <path d="M4 11.5 12 4l8 7.5M6.5 10.5V20h11V10.5" />
        )}
        {type === 'search' && (
          <>
            <path d="M10.5 17a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13Z" />
            <path d="m15.2 15.2 4 4" />
          </>
        )}
        {type === 'trips' && (
          <>
            <path d="M5 7.5h14M7 7.5V19h10V7.5" />
            <path d="M9 7.5V5.8A2.8 2.8 0 0 1 11.8 3h.4A2.8 2.8 0 0 1 15 5.8v1.7" />
          </>
        )}
        {type === 'inbox' && (
          <>
            <path d="M5 7h14v10H7.5L5 19V7Z" />
            <path d="M8 10.5h8M8 13.5h5" />
          </>
        )}
        {type === 'profile' && (
          <>
            <path d="M12 12.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z" />
            <path d="M5.5 19c1.5-3.2 4-4.8 6.5-4.8S16.8 15.8 18.5 19" />
          </>
        )}
        {type === 'user' && (
          <>
            <path d="M12 12.1a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Z" />
            <path d="M5.5 19c1.4-3 3.7-4.5 6.5-4.5S16.7 16 18.5 19" />
          </>
        )}
        {type === 'lock' && (
          <>
            <path d="M8.5 11V8.8a3.5 3.5 0 0 1 7 0V11" />
            <path d="M7.5 11h9V19h-9z" />
          </>
        )}
        {type === 'bell' && (
          <>
            <path d="M12 19.5a1.8 1.8 0 0 0 1.8-1.8h-3.6A1.8 1.8 0 0 0 12 19.5Z" />
            <path d="M7.5 15.8v-3.6A4.5 4.5 0 0 1 12 7.7a4.5 4.5 0 0 1 4.5 4.5v3.6l1.2 1.2H6.3l1.2-1.2Z" />
          </>
        )}
        {type === 'card' && (
          <>
            <rect x="4.5" y="6" width="15" height="12" rx="2.2" />
            <path d="M4.5 9.5h15" />
            <path d="M7 14h3" />
          </>
        )}
        {type === 'help' && (
          <>
            <path d="M12 17v-.2" />
            <path d="M12 13.8c0-1.7 2-1.8 2-3.3a2 2 0 1 0-4 0" />
            <circle cx="12" cy="12" r="8.2" />
          </>
        )}
      </svg>
    );
  };

  const StatusIcon = () => (
    <div className="flex items-center gap-1.5">
      <svg viewBox="0 0 24 16" className="h-3.5 w-5" fill="none">
        <path d="M1 5h3v10H1zM6 3h3v12H6zM11 1h3v14h-3zM16 0h3v15h-3z" fill="#000" />
      </svg>
      <svg viewBox="0 0 20 16" className="h-3.5 w-4.5" fill="none" stroke="#000" strokeWidth="1.6" strokeLinecap="round">
        <path d="M2 5c4.8-4 11.2-4 16 0" />
        <path d="M5 8c3.2-2.5 6.8-2.5 10 0" />
        <path d="M8 11c1.3-1 2.7-1 4 0" />
        <circle cx="10" cy="13" r="1.1" fill="#000" stroke="none" />
      </svg>
      <div className="flex items-center rounded-[3px] border border-black/15 px-0.5 py-[1px]">
        <div className="h-2.5 w-5 rounded-[2px] bg-black" />
      </div>
    </div>
  );

  return (
    <div className="w-[390px] h-[844px] relative overflow-hidden bg-[#F0F0F1] text-[#000000]">
      <div className="absolute inset-0 bg-[#F0F0F1]" />

      <div className="absolute top-0 left-0 right-0 h-[44px] bg-white flex items-center justify-between px-5 pt-1">
        <span className="text-[15px] font-semibold tracking-[-0.41px]">9:41</span>
        <StatusIcon />
      </div>

      <div className="absolute top-[44px] left-0 right-0 h-[116px] bg-white border-b border-black/5">
        <div className="px-5 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[22px] leading-[28px] font-semibold tracking-[0.35px]">Profile</p>
              <p className="mt-1 text-[17px] leading-[22px] text-[#777777] tracking-[-0.41px]">Account settings and documents</p>
            </div>
            <button className="rounded-full bg-[#F0F0F1] px-3 py-2 text-[14px] font-semibold text-[#007AFF]">Edit</button>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <div className="h-14 w-14 rounded-full bg-[#3865E0] flex items-center justify-center text-white font-semibold text-[22px] shadow-sm">
              JS
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="text-[17px] leading-[22px] font-semibold tracking-[-0.41px]">Jessica Stone</p>
                <span className="rounded-full bg-[#E8F3FF] px-2 py-0.5 text-[12px] font-semibold text-[#007AFF]">Genius Level 2</span>
              </div>
              <p className="text-[15px] leading-[20px] text-[#777777]">jessica.stone@email.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[160px] left-0 right-0 bottom-[70px] overflow-y-auto">
        <div className="px-5 pt-4 pb-6 space-y-4">
          <section className="rounded-[10px] bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-between px-4 pt-4 pb-3">
              <div>
                <h2 className="text-[17px] font-semibold tracking-[-0.41px]">Documents</h2>
                <p className="text-[13px] text-[#777777]">Manage identity and travel files</p>
              </div>
              <span className="text-[14px] font-semibold text-[#007AFF]">All documents</span>
            </div>
            <div className="px-4 pb-2 space-y-3">
              {documents.map((doc, idx) => (
                <div key={doc.title} className="flex items-center gap-3 rounded-[8px] bg-[#F8F8F8] px-3 py-3">
                  <div className={`h-10 w-10 rounded-[8px] ${doc.accent} flex items-center justify-center`}>
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 4.5h7.5L17 7v12.5H7z" />
                      <path d="M14.5 4.5V7H17" />
                      <path d="M9 11h6M9 14h6" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-[15px] font-semibold tracking-[-0.41px]">{doc.title}</p>
                    <p className="text-[13px] text-[#777777]">{doc.subtitle}</p>
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-[12px] font-semibold ${idx === 0 ? 'bg-[#E8F3FF] text-[#007AFF]' : idx === 1 ? 'bg-[#FFF4E8] text-[#FF8D23]' : 'bg-[#EEF7FF] text-[#3865E0]'}`}>
                    {doc.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[10px] bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-between px-4 pt-4 pb-3">
              <div>
                <h2 className="text-[17px] font-semibold tracking-[-0.41px]">Settings</h2>
                <p className="text-[13px] text-[#777777]">Your account and preferences</p>
              </div>
              <span className="text-[14px] font-semibold text-[#777777]">4 alerts</span>
            </div>
            <div className="divide-y divide-black/8">
              {settings.map((item) => (
                <button key={item.title} className="w-full flex items-center gap-3 px-4 py-3 text-left">
                  <div className="h-10 w-10 rounded-full bg-[#F0F0F1] flex items-center justify-center">
                    <Icon type={item.icon} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[15px] font-semibold tracking-[-0.41px]">{item.title}</p>
                    <p className="text-[13px] text-[#777777]">{item.subtitle}</p>
                  </div>
                  <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="#A3A3A3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3l4 5-4 5" />
                  </svg>
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-[10px] bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)] p-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-[17px] font-semibold tracking-[-0.41px]">Security check</h2>
                <p className="text-[13px] text-[#777777]">Keep your profile protected</p>
              </div>
              <span className="rounded-full bg-[#EAF7EE] px-2.5 py-1 text-[12px] font-semibold text-[#1A8F4C]">92%</span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-[#F0F0F1] overflow-hidden">
              <div className="h-full w-[92%] rounded-full bg-[#007AFF]" />
            </div>
            <div className="mt-3 flex items-center justify-between text-[13px] text-[#777777]">
              <span>2FA enabled</span>
              <span>ID verified</span>
              <span>Backup email added</span>
            </div>
          </section>

          <section className="rounded-[10px] bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)] p-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-[17px] font-semibold tracking-[-0.41px]">Support</h2>
                <p className="text-[13px] text-[#777777]">Help when you need it</p>
              </div>
              <button className="text-[14px] font-semibold text-[#007AFF]">Contact us</button>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between rounded-[8px] bg-[#F8F8F8] px-3 py-3">
                <div>
                  <p className="text-[15px] font-semibold">Booking confirmation</p>
                  <p className="text-[13px] text-[#777777]">Trip ID #BK-20481</p>
                </div>
                <span className="text-[13px] font-semibold text-[#007AFF]">View</span>
              </div>
              <div className="flex items-center justify-between rounded-[8px] bg-[#F8F8F8] px-3 py-3">
                <div>
                  <p className="text-[15px] font-semibold">Saved documents</p>
                  <p className="text-[13px] text-[#777777]">Last updated 2 days ago</p>
                </div>
                <span className="text-[13px] font-semibold text-[#007AFF]">Open</span>
              </div>
            </div>
          </section>

          <section className="rounded-[10px] bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)] p-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-[17px] font-semibold tracking-[-0.41px]">Notifications preview</h2>
                <p className="text-[13px] text-[#777777]">Recent account activity</p>
              </div>
              <span className="text-[14px] font-semibold text-[#007AFF]">See all</span>
            </div>
            <div className="mt-3 space-y-3">
              {[
                ['Passport verification approved', 'Today • 08:12'],
                ['Payment method updated', 'Yesterday • 19:40'],
                ['Privacy setting changed', 'Mon • 14:05'],
              ].map(([title, time]) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#007AFF]" />
                  <div className="flex-1 border-b border-black/5 pb-3">
                    <p className="text-[15px] font-semibold tracking-[-0.41px]">{title}</p>
                    <p className="text-[13px] text-[#777777]">{time}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-white border-t border-black/5 shadow-[0_-3px_12px_rgba(84,87,92,0.05)]">
        <div className="grid h-full grid-cols-5 px-2">
          {navItems.map((item) => (
            <button key={item.label} className="flex flex-col items-center justify-center gap-1">
              <Icon type={item.label.toLowerCase()} active={item.active} />
              <span className={`text-[12px] leading-none ${item.active ? 'text-[#007AFF] font-semibold' : 'text-[#A3A3A3]'}`}>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}