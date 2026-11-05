import React, { useState } from 'react';
import { menuItems } from '../data/menuData';
import QuickViewModal from './QuickViewModal';
import { Eye, Sparkles, Coffee, Utensils } from 'lucide-react';

export default function Menu() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = menuItems.filter((item) => {
    if (activeFilter === 'Coffee') return item.category === 'Coffee';
    if (activeFilter === 'Food') return item.category === 'Food';
    return true;
  });

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#FAF5ED] relative">
      {/* Decorative background grid and coffee bean ornament */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Exact PDF Requirement: "Our Menu" */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#183D32]/10 text-[#183D32] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C66A42]" />
            <span>Curated Artisanal Selections</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#183D32] tracking-tight mb-4">
            Our Menu
          </h2>

          <p className="text-base sm:text-lg text-[#66554B] leading-relaxed">
            Crafted with passion, premium ingredients, and time-honored recipes. Every item on our menu is prepared to elevate your café moment.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-8">
            <button
              onClick={() => setActiveFilter('All')}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                activeFilter === 'All'
                  ? 'bg-[#183D32] text-[#FAF5ED] shadow-sm'
                  : 'bg-[#F5EBDD] text-[#30251F] hover:bg-[#183D32]/10'
              }`}
            >
              All Offerings ({menuItems.length})
            </button>
            <button
              onClick={() => setActiveFilter('Coffee')}
              className={`inline-flex items-center gap-1.5 px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                activeFilter === 'Coffee'
                  ? 'bg-[#183D32] text-[#FAF5ED] shadow-sm'
                  : 'bg-[#F5EBDD] text-[#30251F] hover:bg-[#183D32]/10'
              }`}
            >
              <Coffee className="w-3.5 h-3.5" />
              <span>Coffee</span>
            </button>
            <button
              onClick={() => setActiveFilter('Food')}
              className={`inline-flex items-center gap-1.5 px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                activeFilter === 'Food'
                  ? 'bg-[#183D32] text-[#FAF5ED] shadow-sm'
                  : 'bg-[#F5EBDD] text-[#30251F] hover:bg-[#183D32]/10'
              }`}
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>Food & Bakes</span>
            </button>
          </div>
        </div>

        {/* 4 Compulsory Menu Items Grid (Images 2, 3, 4, 5) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#FDFBF7] rounded-3xl overflow-hidden border border-[#183D32]/12 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Image Container with Exact Compulsory Image */}
              <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-[#183D32]/5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Category Pill */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-[11px] font-semibold tracking-wider uppercase bg-[#0E251E]/75 backdrop-blur-md text-[#FAF5ED] rounded-full border border-white/10">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Quick View Floating Action */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <button
                    onClick={() => setSelectedItem(item)}
                    type="button"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-[#FAF5ED] text-[#183D32] hover:bg-white shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#C66A42]" />
                    <span>Quick View</span>
                  </button>
                </div>
              </div>

              {/* Item Info */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#183D32] group-hover:text-[#C66A42] transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-serif text-xl font-bold text-[#C66A42] whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#66554B] line-clamp-2 leading-relaxed mb-4">
                    {item.shortDesc}
                  </p>
                </div>

                {/* Card Footer: Tasting Tag & Quick Modal Trigger */}
                <div className="pt-4 border-t border-[#183D32]/8 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#183D32] bg-[#F5EBDD] px-2.5 py-1 rounded-full">
                    {item.tags[0]}
                  </span>
                  <button
                    onClick={() => setSelectedItem(item)}
                    type="button"
                    className="text-xs font-semibold text-[#C66A42] hover:text-[#A54F2A] transition-colors cursor-pointer"
                  >
                    Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Menu Notice */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-[#66554B]">
            All prices are in Indian Rupees (₹) and inclusive of all applicable taxes. Freshly prepared to order.
          </p>
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedItem && (
        <QuickViewModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
}

