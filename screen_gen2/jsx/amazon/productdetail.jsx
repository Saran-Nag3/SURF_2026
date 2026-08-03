import React, { useState } from 'react';

export default function ProductDetailScreen() {
  const [selectedImage, setSelectedImage] = useState(0);

  const thumbnails = [
    'https://images.unsplash.com/photo-1523275335684-37898b9f2d2b?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=400&q=80',
  ];

  const bullets = [
    'Lightweight running shoe with breathable mesh upper',
    'Responsive cushioning for all-day comfort',
    'Durable outsole designed for everyday wear',
    'Available in multiple sizes and colors',
  ];

  const related = [
    { title: 'Men’s Trail Runner', price: '$79.99', rating: '4.6', reviews: '1,248' },
    { title: 'Women’s Daily Trainer', price: '$68.50', rating: '4.4', reviews: '892' },
    { title: 'Kids’ Sport Sneaker', price: '$42.00', rating: '4.7', reviews: '540' },
    { title: 'Cushion Comfort Walkers', price: '$59.95', rating: '4.5', reviews: '1,102' },
  ];

  const navTabs = [
    { label: 'Home', active: false },
    { label: 'Search', active: false },
    { label: 'Deals', active: true },
    { label: 'Cart', active: false },
    { label: 'Account', active: false },
  ];

  const Rect = ({ className = '' }) => <div className={`bg-white ${className}`} />;
  const PathIcon = ({ d, className = 'w-5 h-5' }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );

  return (
    <div className="w-[375px] h-[812px] relative overflow-hidden bg-white font-['Roboto']">
      <div className="absolute inset-0 bg-white">
        <div className="absolute inset-x-0 top-0 h-[48px] bg-white flex items-center justify-between px-4 text-[14px] text-[#111111]">
          <span className="font-medium">9:41</span>
          <div className="flex items-center gap-1.5 text-[#111111]">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M2 20h20" />
              <path d="M4 16h2M8 13h2M12 10h2M16 7h2" />
            </svg>
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 12a9 9 0 0 1 18 0" />
              <path d="M6 12a6 6 0 0 1 12 0" />
              <path d="M9 12a3 3 0 0 1 6 0" />
            </svg>
            <div className="w-6 h-3.5 rounded-[3px] border border-[#111111] p-[1px] flex items-center">
              <div className="w-[16px] h-[8px] bg-[#111111] rounded-[2px]" />
            </div>
          </div>
        </div>

        <div className="absolute top-[48px] inset-x-0 h-[64px] bg-white flex items-center px-2">
          <button className="w-12 h-12 flex items-center justify-center rounded-full text-[#111111]">
            <PathIcon d="M15 18l-6-6 6-6" className="w-[22px] h-[22px]" />
          </button>
          <div className="flex-1">
            <div className="h-12 rounded-[5px] border border-[#CDCDCD] flex items-center overflow-hidden bg-white">
              <div className="flex-1 px-4 text-[14px] text-[#666666]">Search Amazon.com</div>
              <div className="w-12 h-12 bg-[#D9E7CB] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" />
                  <path d="M16 16l4 4" />
                </svg>
              </div>
            </div>
          </div>
          <button className="relative w-12 h-12 flex items-center justify-center rounded-full text-[#111111]">
            <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke="#111111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h2l2.5 10h9.5l2-7H7" />
              <path d="M10 20a1 1 0 1 0 0 .01" />
              <path d="M17 20a1 1 0 1 0 0 .01" />
            </svg>
            <span className="absolute right-[7px] top-[7px] min-w-[16px] h-[16px] px-1 rounded-full bg-[#111111] text-white text-[8px] leading-[16px] text-center font-medium">2</span>
          </button>
        </div>

        <div className="absolute top-[112px] inset-x-0 h-[48px] bg-[#D9E7CB] flex items-center px-3 border-b border-[#CDCDCD]">
          <button className="w-10 h-10 flex items-center justify-center rounded-full">
            <PathIcon d="M15 18l-6-6 6-6" className="w-5 h-5 text-[#111111]" />
          </button>
          <span className="flex-1 text-center pr-10 text-[20px] font-medium text-[#111111]">Product Detail</span>
        </div>

        <div className="absolute top-[160px] inset-x-0 h-[654px]">
          <div className="absolute inset-x-0 top-0 h-[332px] bg-[#D9E7CB]">
            <div className="absolute left-4 top-4 bg-white rounded-full px-3 py-1 text-[12px] font-medium text-[#111111] shadow-sm">
              Best Seller
            </div>
            <div className="absolute right-4 top-4 bg-white rounded-full px-3 py-1 text-[12px] font-medium text-[#111111] shadow-sm">
              30% off
            </div>

            <div className="absolute inset-x-4 top-12 h-[250px] rounded-[20px] bg-white shadow-[0_6px_24px_rgba(0,0,0,0.08)] overflow-hidden flex items-center justify-center">
              <img
                src={thumbnails[selectedImage]}
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute left-4 right-4 bottom-4 flex gap-2">
              {thumbnails.map((src, idx) => (
                <button
                  key={src}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative w-[58px] h-[58px] rounded-[8px] overflow-hidden border-2 ${
                    selectedImage === idx ? 'border-[#111111]' : 'border-white'
                  } bg-white shadow-sm`}
                >
                  <img src={src} alt={`thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="absolute left-0 right-0 top-[332px] bottom-0 bg-white rounded-t-[30px] shadow-[0_-6px_20px_rgba(0,0,0,0.06)]">
            <div className="px-4 pt-8 pb-5 overflow-y-hidden">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-end gap-2">
                    <span className="text-[18px] font-semibold text-[#111111]">$89.99</span>
                    <span className="text-[16px] text-[#666666] line-through">$129.99</span>
                  </div>
                  <div className="mt-1 text-[12px] text-[#666666]">Free delivery by Tue, Aug 13</div>
                </div>
                <button className="h-8 px-4 rounded-full bg-[#111111] text-white text-[14px] font-medium">
                  Add to cart
                </button>
              </div>

              <div className="mt-4">
                <h1 className="text-[20px] leading-6 font-medium text-[#111111]">
                  Men’s Everyday Running Sneaker
                </h1>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex items-center gap-0.5 text-[#111111]">
                    <span className="text-[14px] font-medium">4.6</span>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#111111]">
                      <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5-4.7-4.6 6.5-.9z" />
                    </svg>
                  </div>
                  <span className="text-[12px] text-[#666666]">1,842 ratings</span>
                  <span className="text-[12px] text-[#CDCDCD]">|</span>
                  <span className="text-[12px] text-[#666666]">Amazon’s Choice in Sneakers</span>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-[16px] font-medium text-[#111111]">Color</h2>
                  <span className="text-[12px] text-[#666666]">5 options</span>
                </div>
                <div className="mt-3 flex gap-3">
                  {['#111111', '#2B9FEE', '#629FE0', '#D9E7CB', '#FFFFFF'].map((color, idx) => (
                    <button
                      key={color}
                      className={`w-9 h-9 rounded-full border-2 ${idx === 0 ? 'border-[#111111]' : 'border-[#CDCDCD]'}`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-[16px] font-medium text-[#111111]">Size</h2>
                  <span className="text-[12px] text-[#666666]">In stock</span>
                </div>
                <div className="mt-3 grid grid-cols-5 gap-2">
                  {['7', '8', '9', '10', '11'].map((size, idx) => (
                    <button
                      key={size}
                      className={`h-9 rounded-[5px] border text-[14px] font-medium ${
                        idx === 1
                          ? 'bg-[#111111] text-white border-[#111111]'
                          : 'bg-white text-[#111111] border-[#111111]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-[16px] font-medium text-[#111111]">Product features</h2>
                  <button className="text-[12px] text-[#2B9FEE] font-medium">See all</button>
                </div>
                <div className="mt-3 space-y-3">
                  {bullets.map((item) => (
                    <div key={item} className="flex gap-3">
                      <div className="mt-1 w-2 h-2 rounded-full bg-[#111111] shrink-0" />
                      <p className="text-[14px] leading-5 text-[#333333]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 p-4 rounded-[12px] bg-[#EEEEEE]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[14px] font-medium text-[#111111]">Deliver to Austin 78701</div>
                    <div className="text-[12px] text-[#666666]">Arrives tomorrow if ordered within 3h 12m</div>
                  </div>
                  <button className="px-3 py-2 rounded-full bg-white border border-[#CDCDCD] text-[12px] font-medium text-[#111111]">
                    Change
                  </button>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-[16px] font-medium text-[#111111]">Customers also bought</h2>
                  <button className="text-[12px] text-[#2B9FEE] font-medium">Browse</button>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {related.map((item, idx) => (
                    <div key={item.title} className="rounded-[12px] border border-[#DADADA] overflow-hidden bg-white">
                      <div className="h-28 bg-[#D9E7CB] flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#111111]" fill="none" stroke="currentColor" strokeWidth="1.6">
                          <path d="M4 19h16" />
                          <path d="M6 19V9l6-4 6 4v10" />
                          <path d="M10 19v-5h4v5" />
                        </svg>
                      </div>
                      <div className="p-3">
                        <div className="text-[14px] font-medium text-[#111111] line-clamp-2">{item.title}</div>
                        <div className="mt-1 text-[14px] font-semibold text-[#111111]">{item.price}</div>
                        <div className="mt-1 text-[12px] text-[#666666]">{item.rating} ★ ({item.reviews})</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-[64px] bg-white border-t border-[#CDCDCD]">
          <div className="h-full grid grid-cols-5">
            {navTabs.map((tab) => (
              <button
                key={tab.label}
                className={`flex flex-col items-center justify-center gap-1 text-[10px] ${
                  tab.active ? 'text-[#111111] font-medium' : 'text-[#666666]'
                }`}
              >
                {tab.label === 'Home' && (
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M4 11l8-6 8 6" />
                    <path d="M6 10v10h12V10" />
                  </svg>
                )}
                {tab.label === 'Search' && (
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" />
                    <path d="M16 16l4 4" />
                  </svg>
                )}
                {tab.label === 'Deals' && (
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M7 7h10v10H7z" />
                    <path d="M9 9h6M9 12h6M9 15h4" />
                  </svg>
                )}
                {tab.label === 'Cart' && (
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M4 6h2l2.5 10h9.5l2-7H7" />
                    <path d="M10 20a1 1 0 1 0 0 .01" />
                    <path d="M17 20a1 1 0 1 0 0 .01" />
                  </svg>
                )}
                {tab.label === 'Account' && (
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                    <path d="M4 20a8 8 0 0 1 16 0" />
                  </svg>
                )}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="absolute left-0 top-0 opacity-0 pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <Rect key={`r-${i}`} className="w-1 h-1" />
          ))}
          {Array.from({ length: 20 }).map((_, i) => (
            <svg key={`p-${i}`} viewBox="0 0 24 24" className="w-1 h-1">
              <path d="M4 12h16" />
            </svg>
          ))}
          <span>p</span>
          <span>q</span>
        </div>
      </div>
    </div>
  );
}